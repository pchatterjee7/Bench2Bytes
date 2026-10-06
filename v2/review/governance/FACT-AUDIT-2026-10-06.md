# Publication fact audit — October 6, 2026

Scope: published article and nine-source observatory, commit 562b517. Article retains October 5 as its historical review date.

## Review provenance

An independent agent rechecked major regulatory claims against official sources. It reported confirmation of the EU implementation dates, both January 2025 FDA draft statuses, FDA's October 2024 electronic-record guidance, January 14 2026 FDA–EMA principles, and March 28 2025 NIH genomic-data notice. The agent hit a usage limit before delivering a complete audit. These are preliminary independent findings, not a completed independent sign-off.

The primary agent additionally checked company descriptions, NHGRI's VUS discussion, FDA's xT CDx scope and the published sepsis study. Departure statements remain attributed to reporting; their original X posts were previously inaccessible. No material factual error was identified in the checks completed. This is not a guarantee that every statement or future policy status is correct.

## Findings

1. **Medium — monitoring completeness.** The checker compares nine landing pages. A linked PDF can change without changing its landing page. New documents are discovered by the scheduled agent, not the checker. The active Monday 9 a.m. heartbeat includes discovery and review instructions, but no future run has yet demonstrated complete coverage. Add linked-document monitoring and make desktop-scheduler dependency explicit on the public Perform a narrow maintenance update to the AI Governance Observatory and
October 5, 2026 AI Governance article based on the completed publication
fact audit.

This is NOT a redesign and NOT authorization for broader content changes.

1. MONITOR AUTHORITATIVE DOCUMENTS
Extend Observatory monitoring so that, where an official source page links
to an authoritative PDF or other primary document, monitoring can detect
changes to that document as well as changes to the landing page.

Preserve a distinction between:
- landing-page change
- underlying document change
- newly discovered document
- substantive policy/status change

A detected technical change is only a review signal. Do not automatically
rewrite policy summaries based solely on change detection.

Document the monitoring architecture.

2. SCHEDULER TRANSPARENCY
Update the public Coverage and update method language to state accurately
that scheduled weekly monitoring is executed through a local Codex desktop
scheduled workflow and therefore depends on that scheduler being active.

Do not imply that the public website itself continuously monitors sources.

Keep this disclosure concise and professional.

3. METADATA MODEL
Separate:
- issuing organization
- jurisdiction
- document type
- instrument/document publication date
- source-page update date, when available
- editorial verification date
- current status

Do not conflate a law's publication date with the last update of a living
implementation webpage.

Specifically review the European Commission / EU AI Act record.

Avoid labels such as "Law / implementation overview" when they collapse
the underlying legal instrument and the type of webpage being cited.

Also ensure FDA/HHS guidance descriptions do not imply that guidance is
binding in its entirety merely because underlying statutory/regulatory
obligations may apply.

4. ARTICLE FORMATTING
Fix the malformed closing editorial note in:
blog-2026-10-05-AIGovernance.html

Remove the visible stray Markdown asterisks while preserving the wording.

5. VERIFICATION LANGUAGE
Do NOT label:
- the article
- Observatory
- website
- monitoring system

as "independently verified."

The independent audit was incomplete because the reviewing agent reached
a usage limit.

Use the existing concepts:
- Editorial verification
- Source checked/reviewed
- Last reviewed

where appropriate.

Do not imply comprehensive external validation.

6. PRESERVE HISTORICAL REVIEW DATE
The October 5, 2026 article's historical policy-review date should remain
October 5, 2026 unless substantive article content is re-reviewed and
intentionally updated.

A maintenance change made October 6 should not silently rewrite the
historical review date.

7. DO NOT ALTER VERIFIED ARTICLE ARGUMENT
Do not rewrite substantive article sections unless necessary to correct
a demonstrated factual error.

The audit found no material factual error in completed checks.

8. TESTING
After changes:
- build
- run existing verification
- test Observatory filters/search
- test all nine source links
- test linked primary documents where applicable
- verify JSON source directory
- verify article/Observatory cross-links
- verify desktop/mobile
- confirm no unrelated content changed

Update the audit/maintenance report with:
- files changed
- exact monitoring enhancement
- metadata schema changes
- public methodology wording
- formatting correction
- tests performed
- unresolved limitations

Do not claim a complete independent audit.

Do not make unrelated design changes.page.
2. **Low — metadata precision.** The EU record's publication year 2024 refers to the Act, while its source is a changing implementation overview. Distinguish instrument publication from source-page revisions. Editorial verification is already separate.
3. **Low — document status.** “Law / implementation overview” combines the underlying instrument and source type. A separate document-type field would improve precision. FDA/HHS guidance must not be treated as binding in its entirety merely because a page discusses underlying legal obligations.
4. **Low — presentation.** The article's closing editorial note contains literal asterisks after removal of the draft label. Fix the Markdown formatting in a routine maintenance update.

## Evidence links

- FDA drug AI draft: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-artificial-intelligence-support-regulatory-decision-making-drug-and-biological
- FDA device AI draft: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing
- EU implementation overview: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- NIH controlled-access genomics: https://www.grants.nih.gov/grants/guide/notice-files/NOT-OD-25-081.html
- AlphaGenome: https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/
- Isomorphic collaborations: https://www.isomorphiclabs.com/articles/isomorphic-labs-kicks-off-2024-with-two-pharmaceutical-collaborations
- xT CDx scope: https://www.fda.gov/medical-devices/recently-approved-devices/xt-cdx-p210011
- VUS: https://www.genome.gov/genetics-glossary/Variant-of-Uncertain-Significance-VUS
- Original sepsis study, author-hosted copy: https://eotles.com/assets/papers/external_validation_of_a_widely_implemented_proprietary_sepsis_prediction_model_in_hospitalized_patients.pdf

## Remaining limitation

Do not label the site “independently verified” on the strength of this partial review. A complete external assessment of every claim and monitoring behavior remains outstanding. No content changes were deployed during this audit.

## Narrow maintenance follow-up — October 6, 2026

The maintenance implementation addresses the identified monitoring, metadata and formatting limitations. See MAINTENANCE-2026-10-06.md for exact changes, tests and remaining access limitations. This follow-up is not a completed independent audit and does not change the article's historical October 5 review date.
