# Bench2Bytes V2 — Phase 3 report

Completed locally on October5,2026, in `/Users/paramitachatterjee/Documents/Bench2Bytes-V2`, branch `redesign-v2`.

Preview: **http://127.0.0.1:4321/Bench2Bytes/**

## Result

The approved editorial design now contains a sourced career portfolio: six expandable cases, verified current role and education, contribution-qualified scale metrics, a career progression, leadership evidence, a responsible-AI perspective and an updated scientific bibliography. Science → data → evidence → decisions remains the central narrative; AI, stewardship, business thinking and program leadership span the continuum.

No merge, push or deployment was performed. Original production checkout is clean on `main` at `52d693d31d5e80027e9876e428fea923c51bb531`. V2 remains based on `706c27ac3a86f1460d46ff114dc81b5b628b5cd1`, with no tracked original-file changes. Production configuration, Pages configuration, scientific figures and historical source files are unchanged.

## Content added

- Homepage: current Director role, four approved pillars, contribution-qualified scale evidence, newest publications and expandable career trajectory. Hero, portrait and existing visual direction retained.
- Research: six editorial cases for breast cancer RWE, multimodal oncology data, AI-enabled research/COST, cell therapy and multi-omics, public-health genomics and program leadership. Native disclosure elements expose context, challenge, role, approach, scale, contribution, stewardship and related outputs.
- About: a first-person narrative of cumulative scientific breadth; PhD, MBA, MS, BS and PMP with supplied institutions/years; dissertation title supplied by the user; relevant training and ISCT recognition.
- Leadership: scientific/program leadership, people and mentorship, partnerships, infrastructure, grants and resource decisions. MBA/PMP connected to practical evidence rather than decorative credentials.
- AI & Governance: operational stewardship, transferable technical experience and developing enterprise AI-governance interests kept distinct. No formal institutional policy authority or ownership of a current clinical model inferred.
- Professional operating model: five expandable stages with question/data/method/evidence/decision detail, and provenance, validation, privacy, quality and accountability across the lifecycle.
- Publications:16 DOI-verified published records,3 separately labeled bioRxiv preprints and3 selected conference abstracts. Full registered author order; Paramita’s name emphasized without changing the sequence.
- Talks & writing: dated discovery links across experimental/computational integration, clinical research/AI/omics and single-cell interpretation. Historical article bodies remain verbatim. Original presentation/video/flyer links retained; two example.com abstract placeholders suppressed in rendered V2. The linked defense event title corrected from its official announcement.
- Original scientific abstracts, figures, PDFs and research-tool links remain accessible through existing routes. No raw CV added to the public build.

## Major claims and sources

Primary CV: `Documents/CV_Paro/Paramita_Chatterjee_CV_Master.docx`, explicitly confirmed by the user. `P#` means zero-based direct Word body paragraph, including empty paragraphs. Full file hashes and claim locators are in `PHASE-3-SOURCE-REGISTER.json`.

| Public claim / evidence | Source | Contribution context |
|---|---|---|
| Director, Research Projects, June2026–present; prior career titles/dates | Explicit Phase3 instructions; Master P6–7,16,23,29,37,41 | Current role and expanding scope; earlier disciplines retained |
| Three oncology programs, data strategy, DUA/vendor coordination, AWS/HPC, SOPs | Master P8,10,13–14 | Scientific/data leadership and operational coordination |
| Molecular, clinical, registry, imaging/biomarker resources; IRB/HIPAA requirements | Academic P12–13; explicit Phase3 brief | Operational experience, not formal enterprise AI authority |
|942,124-patient breast cancer RWD study | Master P11,52–54,70–75 | Study population; corresponding author; manuscript in preparation |
| Composite recurrence, LOT classification, Cox, Kaplan–Meier, Fine–Gray and audits | Same RWD paragraphs | Analytical approach; unpublished granular results omitted |
|500+ clinical-trial omics samples; MILES strategy/pipelines/interpretation | Master P31,33,35 | Programs across samples/products, not recruitment or one study’s cohort size |
|$3.5M documented awarded funding | Master P34: $1.8M MILES + $1.7M NIH-IDCCH | Contributed to securing; never framed as personal receipt |
|$10M+ PCF Tactical Award application | Master P12 | Co-led application; never counted as awarded funding |
| Four-person CDC/Leidos bioinformatics team | Master P23–28 | Team leadership, RHEL8/modules/SOP, Nextflow, WGS and support/reporting |
| Training3 scientists,5 graduate students,2 undergraduates; ISCT recognition | Master P36,89 | Mentorship/training, rather than inferred reporting hierarchy |
|$2.5M capital-equipment evaluation | Master P32 | Evaluation/vendor decisions; broader GMP setup ownership conflict avoided |
| COST classifier preprocessing, development and evaluation | Master P76–77; [public project repository](https://github.com/pchatterjee7/COST-Covid19-Severity-Prediction-Tool) | Collaborative developer credit; repository-described NK-cell transcriptome inputs |
|18+ peer-reviewed career record | Master P94 | CV-reported total; selected DOI inventory currently16 published records |
| Education, dissertation title, PMP2026 | Explicit Phase3 instructions; governance CV P43 also confirms PMP2026 | User’s current facts override older in-progress entries |
| Relevant training and recognition | Master professional-development section | NIH transcriptomics2019;10x training2018/2022; ISCT2023 |
|16 published records and3 preprints | Crossref DOI registration metadata, exact source URL per data record | Registered title/full author sequence/journal/year; posted-content stays preprint |
| ISCT2022/2023 and CMAT2024 abstracts | Master P117–119 | Conference abstracts separated from publications |
| Defense event title/date | [Georgia Tech announcement](https://bioinformatics.gatech.edu/paramita-chatterjee-bioinformatics-thesis-defense) | Event title differs from user-supplied dissertation title; discrepancy retained internally |
| Historical writing, abstracts, figures and links | Original site + preservation manifest | Four article bodies and all original assets preserved |

## Files and components

Direct page source edits: `index.astro`, `about.astro`, `ai-governance.astro`, `leadership.astro`, `research-models.astro`, `talks-writing.astro` and `[...legacy].astro`. Dynamic legacy rendering adds research/publications/presentation content and related-context links to all five original project detail routes. Shared `Site.astro` replaces phase placeholders in the preview shell while retaining the historical-writing label.

New components: `PortfolioCases.astro`, `CareerTrajectory.astro`, `PublicationList.astro`.

Updated components: `EvidencePanel.astro`, `ResearchWorkflow.astro`.

New curated data: `cases.json`, `bibliography.json`, `preprints.json`. Existing `legacy.json` and original publication data remain preserved. `site.ts`, `workflows.ts` and `global.css` receive restrained content/layout updates. New `scripts/verify-content.mjs` checks scientific status, funding context, public placeholders and internal-report exclusion.

## Publication corrections and unresolved content

`CONTENT-REVIEW.md` contains the full internal review list. Major items:

-16 published DOIs are identified; the master CV reports18+. Additional records are needed for a complete inventory.
- COST’s master-CV description of structured clinical inputs differs from the public repository’s NK-cell single-cell inputs. Public copy uses the repository’s input description and credits the collaborators; confirmation of a separate version remains useful.
- User-supplied dissertation title and official defense-announcement title differ. About follows the explicit user instruction; Presentations accurately describes the linked event.
- No sufficiently detailed current clinical-AI project supports a separate case claiming model ownership or deployment.
- Original10x/AWSOM/symposium dates retained without inferred corrections; actual abstract links are missing.10x video retrieval failed in the web tool, so current reachability is unconfirmed.
- Granular unpublished RWD results, institutional private details and partner-sensitive specifics are omitted.
- Original privacy assertion for the writing tool is not repeated in the rendered research index without verification.

Bibliographic corrections include the published2025 Nature Biomedical Engineering status/title, the MILES published title/author sequence and the DOI-registered iScience title. Adds2026 Molecular Therapy Nucleic Acids and2025 Bone Research. All earlier DOI records retained. Preprints remain separately classified.

## Validation and accessibility

- `npm run build`: passes,20 generated portfolio pages.
- `npm run verify`: passes;49 original files hash-verified,17 legacy routes retained,331 local references checked,4 historical article bodies verified; zero errors.
- `node scripts/verify-content.mjs`: passes;16 published records,3 preprints,6 cases,zero visitor placeholders; internal review/source-register files absent from public build.
- HTTP checks after preview restart: all50 built routes/assets return200; zero failures. `PHASE-3-HTTP-CHECKS.json` records each resource.
- Responsive DOM checks:9 pages ×4 widths (320,390,768,1280),36 checks. No horizontal overflow, broken loaded images or missing/duplicate h1 headings. Results in `PHASE-3-RESPONSIVE.json`.
- Keyboard: Tab reaches visible skip link; Return moves focus to main content. Enter expands case, operating-model Data stage and Director career detail. Native details/summary provides no-JavaScript interaction; added visible focus treatment for disclosures. Related links and navigation use normal anchors.
- Reduced motion: stylesheet disables animation/transitions and smooth scrolling, including existing hover transforms. Verified in source and content check. Browser media-preference emulation is unavailable, so runtime reduce-preference rendering is not claimed.
- Content privacy scan: CV telephone pattern absent from generated HTML. Raw CVs and internal reports are not public assets. Original preserved assets remain byte-identical.
- Original production checkout verified clean. No tracked original file/configuration edits; no commit/push/merge/deployment performed in this task.

## Screenshots reviewed

In `docs/screenshots/`:

- `phase-3-home-desktop.jpg`:1280×900, approved hero/portrait and current role.
- `phase-3-home-mobile.jpg`:390×844, responsive hero, portrait, credentials and navigation.
- `phase-3-research-mobile.jpg`:390×844, keyboard-expanded RWE case with visible focus outline.
- `phase-3-research-desktop.jpg`:1280×900, expanded cell-therapy case and editorial evidence fields.
- `phase-3-publications-desktop.jpg`:1280×900, scientific-status navigation, registered titles and author emphasis.

The temporary viewport override is reset after verification. Preview restarted locally on127.0.0.1:4321 (process78168). Homepage remains available for review. Work stops at the local preview.
