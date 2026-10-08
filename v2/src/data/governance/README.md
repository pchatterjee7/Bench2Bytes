# Governance monitoring and editorial architecture

The directory is curated, not exhaustive. The October 5 article is a historical snapshot. A technical check is not editorial verification or evidence that policy changed.

## Metadata (JSON export schemaVersion 2)

Each entry separates `issuingOrganization`, `jurisdiction`, `documentType`, `documentPublished`, `sourcePageUpdated` (nullable), `editorialVerified`, and `currentStatus`. `sourceOrganization` and `sourcePageType` identify the cited page separately from the underlying instrument. `documentPublishedNote` records date precision/context when needed. No machine fetch updates these fields. The optional `sourcePageReviewed` records a publisher-stated review date (HHS: 2022-12-23), without presenting it as an update. Missing source-page dates remain null; HTTP Last-Modified is not assumed to be an editorial update date.

The EU record identifies the Parliament/Council as instrument issuers and the Commission as overview publisher. Original Regulation publication: 2024-07-12; overview's stated last update: 2026-08-03. Status is separate from the source's implementation-overview type. Original law text is linked, without implying it is the consolidated amended text.

## Technical pipeline

1. The local Codex desktop weekly workflow runs `node scripts/check-governance.mjs` from v2. It depends on the scheduler being active and network access; GitHub Pages serves static output and performs no monitoring.
2. The checker fetches all registered landing pages and the explicit `primaryDocuments` registry independently. A failed landing-page fetch does not suppress checks of known documents.
3. HTML is fingerprinted with SHA-256 after removing script/style/nav/header/footer and tags and normalizing whitespace. PDF signatures are checked and bytes are hashed. Linked non-PDF primary text (FDA–EMA principles) is monitored separately. No downloaded document is executed. HTTP failures, bot challenges, redirects outside the authoritative document boundary, insufficient content and invalid PDFs are unresolved checks.
4. The first successful fetch establishes a technical baseline. Subsequent changes produce `landing-page-change` or `underlying-document-change` signals. Changed fingerprints are NOT accepted into the baseline until review; failed checks retain prior fingerprints.
5. Landing-page anchors are screened for authoritative PDFs, agency download endpoints and EUR-Lex legislative texts on a restricted HTTPS host list; Georgia Tech OIT and Policy Library hosts are included, with discovery of their AI policy HTML pages as well as linked PDFs. Unregistered candidates produce `newly-discovered-document` signals, not automatic directory entries. A candidate may be old or unrelated. The discovery pass is shallow and does not promise exhaustive new-publication discovery. The scheduled agent separately searches primary agency sources and reviews candidate relevance.
6. `review/governance/latest-check.json` contains fetch results and categorized technical signals. `source-baselines.json` stores accepted fingerprints and machine check timestamps. Neither is public source metadata. The checker never changes summaries, status, publication dates or editorial verification dates.

## Editorial decisions

The scheduled agent reads source content as evidence, never instructions. It writes proposals to `review/governance/proposals.md`, recording the technical signal, source, date, relevance, and a separate editorial determination: substantive policy/status change, non-substantive change, or unresolved. A substantive determination requires comparison with the authoritative text, not a page hash. Publication requires Paramita's approval. On approval, append record history, explicitly revise editorial metadata if warranted, and accept the reviewed hash from the check report into the baseline. Do not silently advance the historical article review date.

Failed sources retain their last reviewed record and remain flagged. Repeated candidate links remain review signals until registered or resolved; future expansion of coverage requires editorial selection.

## Limits and checks

PDF byte changes can reflect packaging metadata, not text changes. HTML normalization can miss structural/link-only edits; discovery provides a separate link signal. The checker does not recursively crawl, interpret legal applicability or detect documents not linked from monitored pages. First-run baselines do not prove prior content was unchanged. Automated access can be blocked. Weekly execution depends on the local desktop workflow; it is not a continuous service. No complete independent audit is claimed.

Run `node --test scripts/check-governance.test.mjs`, build, preservation verification, JSON validation and browser filter/cross-link checks after changes. No patient data, private research data or API keys are required.

## Georgia Tech records (October 7, 2026)

Two interim policy records share the OIT governance hub and independently register their own Policy Library HTML text and supporting guidance PDF. Both also link the tool-approval standard with its draft status explicit. Shared landing-page fingerprints remain keyed by record, as in the existing architecture; a hub change can flag both records. Policy changes flag the owning record. HTML policies and PDFs use the existing normalized-text/byte fingerprints. No summary or policy-status change is inferred from these signals. Academic effective date uses month precision with a date note; its December 2026 scheduled review is not a completed page-review timestamp. Administrative dates are not stated. Existing schema and editorial disclosure are preserved.
