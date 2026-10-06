# Phase 3 internal content review

This file is internal. It is not copied into the public build.

## Source decisions

- User confirmed `Documents/CV_Paro/Paramita_Chatterjee_CV_Master.docx` as primary. No exact `Master(1).docx` was found. The Downloads master differs in formatting rather than substantive facts; it is not used as primary.
- Explicit Phase 3 role titles, dates, education and PMP2026 override older CV entries. Academic/Industry CVs list the prior Emory role as current. Older master/academic entries describe PMP as in progress; the user and governance CV confirm2026.
- Governance-tailored language is not evidence of formal enterprise policy authority. Public copy separates operational experience, transferable technical experience and developing professional interests.
- Master says led GMP infrastructure setup; Academic says assisted. The portfolio uses the common, narrower equipment/vendor evaluation evidence and does not assert sole infrastructure ownership.

## Open questions

1. **Publication corpus:** master P94 states18+ peer-reviewed publications. Sixteen distinct published DOI records are identified in the supplied list. The public bibliography is labeled selected research;18+ remains the CV-reported career metric. Confirm the two or more additional records before presenting a complete bibliography.
2. **COST inputs:** master P77 describes structured clinical input data; the public repository explicitly describes NK-cell single-cell RNA expression input. Public case copy uses the repository’s specific input description and credits all three developers. Confirm whether a separate structured-clinical-input version exists. The2021 project date remains sourced to the CV; the public repository is linked rather than a live clinical-use deployment.
3. **Dissertation title:** the user supplies “Large-scale clinical trial data generation, analysis, and management for biological interpretation in cell therapy,” used on About. Georgia Tech’s April24,2024 defense announcement uses “Transcriptomics Investigation Of Multi-Site and Multi-Tissue Derived Cell Therapy Products In Clinical Applications for Osteoarthritis,” used for that event on Presentations. Confirm whether these are final dissertation versus defense titles. The older website’s “Bioinformatics and Therapeutic Genomics” label is corrected for the linked event.
4. **Current clinical AI case:** sources support scientific/data coordination and the COST research example, but do not establish ownership of a specific current clinical model, annotation program, prospective validation or deployed clinical AI system. Add a separate current case only after receiving a project brief with role, methods, validation, outputs and disclosure approval.
5. **Unpublished oncology findings:** detailed endpoint uplift, survival model performance, treatment audit counts, intermediate datasets and partner-sensitive specifics are omitted. Manuscript-in-preparation status is explicit. Confirm public disclosure scope before adding results.
6. **Presentations:** original10x2023, AWSOM2022 and symposium2022 metadata retained from the original site. No additional date corrections inferred. The10x URL could not be retrieved by the web tool; retain the original video and local flyer. Placeholder example.com abstract links are suppressed in rendered V2, with originals preserved in legacy data and source files. Actual abstract URLs remain needed.
7. **Preprint status:** three DOI registrations confirm posted-content. They remain preprints; no journal publication inferred. Recheck journal versions before any future production release.
8. **Writing tool:** existing links retained. No new claim of browser-only execution, data collection behavior or clinical validation is made; the unverified privacy sentence in the rendered research index is replaced with a link to current functionality. Original source and legacy JSON are preserved.
9. **CV download:** no raw CV is published. Contact details and private institutional specifics have not been copied into the website. A public redacted CV would need a separate reviewed artifact.

## Bibliographic corrections

All16 published records and three preprints use full author order and title from Crossref DOI registration metadata, with exact source URLs stored in data files.

- Lung-on-a-chip: replaces “Accepted Nov2024 / Nature BME” with Published2025, Nature Biomedical Engineering, DOI10.1038/s41551-025-01491-9 and registered title.
- MILES: correct published title is “Cell-based versus corticosteroid injections for knee pain in osteoarthritis: a randomized phase3 trial.” Author sequence begins Ken Mautner; Michael Gottschalk; Scott D. Boden; Alison Akard… Paramita Chatterjee is eighth. Original site had an alternate title and omitted the lead author.
- iScience: DOI-registered title differs from the expanded original-site wording; registered title now rendered.
- Adds2026 Molecular Therapy Nucleic Acids and2025 Bone Research records; all earlier published works retained through their DOI records.
- Author emphasis uses markup only; the recorded author sequence is unchanged. Initial-only and et-al CV citations are expanded from registered metadata rather than invented.

## Public source links checked

- COST: https://github.com/pchatterjee7/COST-Covid19-Severity-Prediction-Tool
- Defense: https://bioinformatics.gatech.edu/paramita-chatterjee-bioinformatics-thesis-defense
- DOI metadata: each record’s source in `v2/src/data/bibliography.json` and `preprints.json`.

## User correction: COST scope

User confirmed COST was a class project. Removed it from flagship cases and the AI & Governance narrative; retained as explicitly labeled collaborative coursework. This supersedes its earlier portfolio weighting.
