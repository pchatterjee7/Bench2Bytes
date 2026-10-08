import { test } from 'node:test';import assert from 'node:assert/strict';
import { runCheck, linkedDocuments, checkResource } from './check-governance.mjs';
const page='https://www.fda.gov/example',pdf='https://www.fda.gov/media/123/download';
const entry={id:'test',source:page,primaryDocuments:[{url:pdf}]};
const html='<main>'+ 'Evidence '.repeat(30) + `<a href="${pdf}">Guidance</a></main>`;
function fetcher(pageBody,docBody,status=200){return async url=>new Response(url===page?pageBody:docBody,{status,headers:{'content-type':url===page?'text/html':'application/pdf'}});}
const bytes='%PDF-'+ 'original '.repeat(30);
test('document changes detected when landing page unchanged; baseline remains unaccepted',async()=>{const first=await runCheck([entry],{},fetcher(html,bytes));const next=await runCheck([entry],first.next,fetcher(html,bytes+'changed'));assert.equal(next.report.results[0].outcome,'unchanged');assert.deepEqual(next.report.signals.map(s=>s.type),['underlying-document-change']);assert.equal(next.next[next.report.results[1].key].hash,first.next[first.report.results[1].key].hash);});
test('page change and new document link remain separate review signals',async()=>{const first=await runCheck([entry],{},fetcher(html,bytes));const next=await runCheck([entry],first.next,fetcher(html+'<a href="https://www.fda.gov/media/456/download">New</a>',bytes));assert.deepEqual(next.report.signals.map(s=>s.type),['landing-page-change','newly-discovered-document']);assert.equal(next.report.results[1].outcome,'unchanged');});
test('fetch failures retain previous baselines and do not change entries',async()=>{const before=JSON.stringify(entry);const baseline={test:{hash:'previous'}};const next=await runCheck([entry],baseline,fetcher(html,bytes,503));assert.deepEqual(next.next,baseline);assert.ok(next.report.results.every(r=>r.outcome==='unavailable'));assert.equal(JSON.stringify(entry),before);});
test('reject challenge pages disguised as PDFs; do not count as verification',async()=>{const r=await checkResource({key:'x',url:pdf,kind:'primary-document',entryId:'x'},{},async()=>new Response('<html>captcha</html>',{headers:{'content-type':'application/pdf'}}));assert.equal(r.outcome,'unavailable');});
test('discovery excludes nonofficial documents and images',()=>{assert.equal(linkedDocuments('<a href="https://evil.example/test.pdf">X</a><a href="/image.png">Y</a>',page).length,0);});

test('Georgia Tech shared hub and independent HTML policies retain separate signals',async()=>{
 const fs=await import('node:fs/promises');const records=JSON.parse(await fs.readFile(new URL('../src/data/governance/entries.json',import.meta.url),'utf8')).filter(e=>e.id.startsWith('gatech-ai-'));
 assert.equal(records.length,2);assert.equal(records[0].source,records[1].source);
 const hub=records[0].source,policyUrls=records.map(e=>e.primaryDocuments[0].url);const bodies=new Map([[hub,'<main>'+ 'Governance '.repeat(30)+records.flatMap(e=>e.primaryDocuments).map(d=>`<a href="${d.url}">${d.title}</a>`).join('')+'</main>']]);
 for(const e of records)for(const d of e.primaryDocuments)bodies.set(d.url,d.url.endsWith('.pdf')?'%PDF-'+ 'policy guidance '.repeat(30):'<main>'+e.id.repeat(30)+'</main>');
 const fetcher=async url=>new Response(bodies.get(url),{headers:{'content-type':url.endsWith('.pdf')?'application/pdf':'text/html'}});
 const initial=await runCheck(records,{},fetcher);assert.ok(initial.report.results.every(r=>r.outcome==='baseline'));
 bodies.set(policyUrls[0],bodies.get(policyUrls[0])+' Academic revision');const academic=await runCheck(records,initial.next,fetcher);assert.deepEqual(academic.report.signals.filter(s=>s.type==='underlying-document-change').map(s=>s.entryId),[records[0].id]);
 bodies.set(policyUrls[0],bodies.get(policyUrls[0]).replace(' Academic revision',''));bodies.set(policyUrls[1],bodies.get(policyUrls[1])+' Administrative revision');const administrative=await runCheck(records,initial.next,fetcher);assert.deepEqual(administrative.report.signals.filter(s=>s.type==='underlying-document-change').map(s=>s.entryId),[records[1].id]);
 bodies.set(policyUrls[1],bodies.get(policyUrls[1]).replace(' Administrative revision',''));bodies.set(hub,bodies.get(hub)+'<a href="https://oit.gatech.edu/sites/default/files/new-ai-guidance.pdf">New candidate</a>');const changed=await runCheck(records,initial.next,fetcher);assert.deepEqual(changed.report.signals.filter(s=>s.type==='landing-page-change').map(s=>s.entryId),records.map(e=>e.id));assert.equal(changed.report.signals.filter(s=>s.type==='newly-discovered-document'&&s.url.endsWith('new-ai-guidance.pdf')).length,2);assert.ok(changed.report.signals.every(s=>s.requiresEditorialReview));
 assert.ok(linkedDocuments(`<a href="${policyUrls[0]}">Academic policy</a>`,hub).some(d=>d.url===policyUrls[0]));assert.equal(linkedDocuments('<a href="https://unrelated.gatech.edu/example.pdf">Unregistered host</a>',hub).length,0);
});
