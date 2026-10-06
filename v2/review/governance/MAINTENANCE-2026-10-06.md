# Narrow governance maintenance — October 6, 2026

Scope: monitoring, metadata, scheduler disclosure and editorial-note formatting. No redesign or substantive article rewrite. The independent publication audit was incomplete due to the reviewing agent's usage limit.

## Files changed

- scripts/check-governance.mjs: separate landing-page and primary-document checks, restricted discovery, typed technical signals and failure handling.
- scripts/check-governance.test.mjs: five behavioral regression tests.
- src/data/governance/entries.json: separate metadata and six registered primary documents; scoped guidance clarification.
- src/data/governance/README.md: architecture, schema, review workflow and limitations.
- src/pages/governance-data.json.ts: export schemaVersion 2.
- src/pages/governance-observatory.astro: metadata display and scheduler/method disclosure. Existing layout and styles retained.
- src/content/governance/article.md: remove the single space before the closing emphasis marker; wording unchanged.
- review/governance/latest-check.json and source-baselines.json: machine check evidence and accepted initial document fingerprints.
- review/governance/FACT-AUDIT-2026-10-06.md: preserve partial audit and add maintenance follow-up.
- review/governance/MAINTENANCE-2026-10-06.md: this report.

## Monitoring enhancement

Nine landing pages plus six registered primary documents are checked independently. PDFs are validated and fingerprinted by byte SHA-256; primary HTML documents use normalized-text SHA-256. A document change is detectable even if its landing page is unchanged. Registered documents are checked even if the page is inaccessible. Restricted anchor discovery emits unregistered-document candidates. Signals distinguish landing-page-change, underlying-document-change and newly-discovered-document. A substantive policy/status change is a separate editorial determination, never generated from a hash. Changed baselines remain unaccepted until review. Public summaries and editorial verification dates are never mutated by the checker.

## Metadata

Separate fields: issuingOrganization, jurisdiction, documentType, documentPublished, sourcePageUpdated, editorialVerified, currentStatus. Additional sourceOrganization/sourcePageType distinguish page publisher/type from instrument issuer/type. primaryDocuments records authoritative attachments and HTML text. Unknown page-update dates remain null; HTTP timestamps are not repurposed as editorial dates.

EU record: legislation issued by the European Parliament/Council, with the Commission implementation overview as source; original Official Journal publication 2024-07-12; overview's stated last update 2026-08-03; current status 'In force; phased applicability'. Its original law PDF is not described as consolidated current law. FDA draft/final guidance and HHS explanatory guidance now distinguish nonbinding recommendations/explanations from underlying statutory/regulatory obligations.

## Public wording

“Scheduled weekly monitoring runs through a local Codex desktop workflow and depends on that scheduler being active. The public website does not run monitoring. Checks distinguish landing-page changes, linked primary-document changes and newly discovered documents; each is a review signal, not a substantive policy or status determination.”

No 'independently verified' label was added.

## Article correction

Closing note is rendered as emphasis without literal asterisks. Its exact wording and October 5, 2026 historical policy-review date are preserved. A comparison against the published source confirms the sole article change is the whitespace correction.

## Tests performed

- Production build: passed.
- Existing preservation verifier: 49 original files, 17 legacy routes, 362 local references, four historical article bodies; no errors.
- Existing content verifier: passed; no unrelated generated content changes.
- Five monitoring tests: PDF change with unchanged landing page; distinct page-change/new-link signals; failed fetch preserves baseline/data; invalid PDF rejected; nonofficial candidates excluded. All passed.
- All nine source links fetched: eight unchanged landing pages; Commission overview yielded a technical change signal requiring review (not a policy conclusion).
- All six registered primary-document links tested: NIST PDF, three FDA PDFs and FDA–EMA primary HTML successfully retrieved; EUR-Lex PDF returned insufficient content to the automated client and remains unresolved. No false successful verification recorded.
- JSON export: valid schema v2, nine entries equal source data, all required distinct metadata fields present.
- Browser: Genetics returns two records; Genetics + Draft returns empty state; NIH search returns two; EU jurisdiction returns one; reset restores nine.
- Observatory-to-article and article-to-Observatory navigation: passed.
- Article rendered closing emphasis, preserved date and absence of stray markers: confirmed.
- Desktop 1280x900 and mobile 390x844: inspected, document scroll width equals viewport width on both pages. Existing table retains internal scrolling.
- Diff review: only the files listed above changed; article argument and unrelated pages/styles remain unchanged.

## Unresolved limitations

EUR-Lex may block automated access; retry or editorial source review is required. A successful HTTP response alone does not establish document validity. PDF byte changes may only reflect packaging metadata. HTML normalization can miss structural changes. New-link candidates may be historical or unrelated and remain unregistered until review. Discovery is shallow; the weekly agent's official-source search supplies additional discovery but does not guarantee comprehensive coverage. No future scheduled run has yet demonstrated end-to-end weekly coverage. Execution depends on local scheduler and network availability. This maintenance is not independent external validation.
