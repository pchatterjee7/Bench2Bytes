import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const authoritativeHosts = ['fda.gov', 'nih.gov', 'nist.gov', 'hhs.gov', 'ec.europa.eu', 'eur-lex.europa.eu', 'ema.europa.eu', 'oit.gatech.edu', 'policylibrary.gatech.edu'];
export function authoritative(url) {
 try { const u = new URL(url); return u.protocol === 'https:' && authoritativeHosts.some(h => u.hostname === h || u.hostname.endsWith('.' + h)); } catch { return false; }
}
export function normalizedHtml(raw) {
 return raw.replace(/<(script|style|nav|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
export function linkedDocuments(raw, base) {
 const found = new Map();
 for (const m of raw.matchAll(/<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
  try {
   const u = new URL(m[1].replaceAll('&amp;', '&'), base); u.hash = '';
   const title = normalizedHtml(m[2]);
   // Narrow candidates: PDFs, agency downloads, legislative texts and Georgia Tech AI policy pages.
   if (authoritative(u.href) && (/\.pdf(?:$|\?)/i.test(u.href) || /\/media\/\d+\/download/.test(u.pathname) || (u.hostname === 'eur-lex.europa.eu' && /\/legal-content\//.test(u.pathname)) || ((u.hostname === 'policylibrary.gatech.edu' || u.hostname === 'www.policylibrary.gatech.edu') && /\/artificial-intelligence-ai-/.test(u.pathname)))) found.set(u.href, { url: u.href, title });
  } catch { /* malformed source link: ignore */ }
 }
 return [...found.values()];
}
export async function checkResource({ key, url, kind, entryId }, baselines, fetcher = fetch) {
 try {
  const response = await fetcher(url, { signal: AbortSignal.timeout(20000), headers: { 'User-Agent': 'Bench2Bytes-Governance-Source-Check/2.0' } });
  if (!response.ok) throw Error(`HTTP ${response.status}`);
  // A document redirect outside the curated authority boundary must be reviewed.
  const resolvedUrl = response.url || url;
  if (kind === 'primary-document' && !authoritative(resolvedUrl)) throw Error('Redirect outside authoritative host boundary');
  const bytes = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get('content-type') || '';
  const pdf = bytes.subarray(0, 5).toString() === '%PDF-';
  if ((/application\/pdf/i.test(contentType) || /\.pdf(?:$|\?)/i.test(url) || /\/TXT\/PDF\//.test(url) || /\/media\/\d+\/download/.test(new URL(url).pathname)) && !pdf) throw Error('PDF content type without PDF signature');
  const raw = pdf ? null : bytes.toString('utf8');
  if (raw && /captcha|access denied|verify you are human|checking your browser/i.test(raw.slice(0, 15000))) throw Error('Bot challenge; source review required');
  const payload = pdf ? bytes : normalizedHtml(raw);
  if (payload.length < 150) throw Error('Insufficient source content');
  const hash = crypto.createHash('sha256').update(payload).digest('hex');
  const before = baselines[key];
  const outcome = !before ? 'baseline' : before.hash === hash ? 'unchanged' : 'review-required';
  return { key, entryId, kind, url, resolvedUrl, outcome, hash, previousHash: before?.hash ?? null, fingerprint: pdf ? 'PDF byte SHA-256' : 'Normalized HTML text SHA-256', contentType, links: raw && kind === 'landing-page' ? linkedDocuments(raw, resolvedUrl) : [] };
 } catch (e) { return { key, entryId, kind, url, outcome: 'unavailable', error: e.message }; }
}
export async function runCheck(entries, previous, fetcher = fetch) {
 const checkedAt = new Date().toISOString(), results = [], signals = [], next = { ...previous };
 for (const entry of entries) {
  const resources = [{ key: entry.id, url: entry.source, kind: 'landing-page', entryId: entry.id }, ...entry.primaryDocuments.map(d => ({ key: `${entry.id}:document:${d.url}`, url: d.url, kind: 'primary-document', entryId: entry.id }))];
  for (const resource of resources) {
   const result = await checkResource(resource, previous, fetcher); result.checkedAt = checkedAt;
   results.push(result);
   if (result.outcome === 'baseline' || result.outcome === 'unchanged') next[result.key] = { hash: result.hash, checkedAt };
   if (result.outcome === 'review-required') signals.push({ type: result.kind === 'landing-page' ? 'landing-page-change' : 'underlying-document-change', entryId: entry.id, url: result.url, requiresEditorialReview: true });
   if (result.kind === 'landing-page') {
    const registered = new Set(entry.primaryDocuments.map(d => d.url));
    for (const candidate of result.links ?? []) if (!registered.has(candidate.url)) signals.push({ type: 'newly-discovered-document', entryId: entry.id, ...candidate, requiresEditorialReview: true, note: 'Previously unregistered link; may be historical or unrelated. Not a finding that a new policy was published.' });
   }
  }
 }
 return { next, report: { schemaVersion: 2, checkedAt, note: 'Technical signals only. Substantive policy/status changes require editorial determination; no public metadata, summaries or verification dates were updated.', results, signals } };
}
async function main() {
 const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), dir = path.join(root, 'review/governance');
 const entries = JSON.parse(await fs.readFile(path.join(root, 'src/data/governance/entries.json'), 'utf8'));
 await fs.mkdir(dir, { recursive: true });
 let previous = {}; try { previous = JSON.parse(await fs.readFile(path.join(dir, 'source-baselines.json'), 'utf8')); } catch (e) { if (e.code !== 'ENOENT') throw e; }
 const { next, report } = await runCheck(entries, previous);
 await fs.writeFile(path.join(dir, 'source-baselines.json'), JSON.stringify(next, null, 2) + '\n');
 await fs.writeFile(path.join(dir, 'latest-check.json'), JSON.stringify(report, null, 2) + '\n');
 console.log(JSON.stringify({ checkedAt: report.checkedAt, counts: report.results.reduce((a, r) => (a[r.outcome] = (a[r.outcome] || 0) + 1, a), {}), signals: report.signals.length, report: 'review/governance/latest-check.json' }));
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
