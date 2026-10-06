
Paramita Chatterjee · October 5, 2026

Artificial intelligence is being applied to genomic interpretation, therapeutic discovery and clinical research. These applications differ in their purpose, evidence requirements and consequences of error. Governance must therefore address the specific research or clinical use, rather than treating access to an AI platform as sufficient approval.

My work in experimental biology, genomics and single-cell analysis has required separating observed changes from their biological interpretation and potential therapeutic relevance. This distinction also applies to AI. A predicted molecular effect may support a hypothesis, but additional evidence is needed to establish disease relevance or guide treatment. The central governance problem is how to maintain these distinctions as AI becomes embedded in research workflows.

## From prediction to clinical evidence

In genetics, a model may predict that a sequence variant affects gene expression or splicing. The clinical interpretation requires evidence connecting that effect to the patient's condition. Population information, functional studies and family data can contribute to resolving uncertain findings. ACMG/AMP guidelines state that a variant of uncertain significance should not be used for clinical decision-making. AI-generated confidence should not replace the underlying evidence classification. [NHGRI](https://www.genome.gov/genetics-glossary/Variant-of-Uncertain-Significance-VUS), [ACMG/AMP guidelines](https://pmc.ncbi.nlm.nih.gov/articles/PMC4544753/).

The evidence is also uneven across populations. NHGRI describes greater uncertainty in variant interpretation among populations with less extensive genomic information. Evaluation should therefore examine whether a model's performance and uncertainty differ across the populations relevant to its use. Reporting an aggregate performance measure may obscure these differences. [NHGRI](https://www.genome.gov/genetics-glossary/Variant-of-Uncertain-Significance-VUS).

Similar distinctions apply to diagnostics and therapy development. Diagnostic evaluation must address the measurement, specimen, patient population and decision supported by the result. In therapeutic discovery, candidate prioritization must be followed by evidence addressing mechanism, efficacy and safety. An improvement in computational prediction does not establish an improvement in patient outcomes.

Companies are developing tools at several points in this process. Google DeepMind's AlphaGenome predicts molecular properties from DNA sequence, including regulatory effects. Isomorphic Labs has announced AI-driven drug-discovery collaborations with Lilly and Novartis. These developments indicate expanding research capabilities and commercial investment; they do not establish clinical validity or therapeutic benefit. [AlphaGenome](https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/), [Isomorphic Labs collaborations](https://www.isomorphiclabs.com/articles/isomorphic-labs-kicks-off-2024-with-two-pharmaceutical-collaborations).

Regulatory status must also be described precisely. FDA's overview of Tempus's xT CDx identifies a particular molecular diagnostic and treatment-selection use. That authorization cannot be extended to every service or algorithm offered by the company, or described as approval of its overall AI capability. [FDA xT CDx overview](https://www.fda.gov/medical-devices/recently-approved-devices/xt-cdx-p210011).

## Clinical trials require evaluation of the complete workflow

AI can contribute to trial screening, data processing and outcome assessment. FDA's draft guidance discusses applications such as integrating data to characterize disease heterogeneity and processing data for trial endpoints. The evidence required depends on the role of the model in the regulatory decision. [FDA draft guidance](https://www.fda.gov/media/184830/download).

For example, an AI-assisted screening system could identify potential participants from clinical records. Its evaluation should examine missed candidates, incorrect matches and the reasons for disagreement with qualified staff. A potential match must remain distinguishable from confirmed eligibility. This example describes a proposed evaluation approach, rather than a documented incident.

The assessment should include the complete workflow. A model's performance in isolation does not establish that staff can identify its errors under operational conditions. Source records, review time, escalation procedures and responsibility for the final decision are part of the evaluation.

Endpoints require similar scrutiny. An AI-derived measurement should have evidence supporting its interpretation in the intended trial. FDA's final guidance on clinical outcome assessments addresses fitness for purpose, while its trial-participation guidance recommends approaches to representative enrollment. These considerations remain relevant when AI is used to process measurements or support participant selection. [FDA outcome-assessment guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/patient-focused-drug-development-selecting-developing-or-modifying-fit-purpose-clinical-outcome), [FDA trial-participation guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/enhancing-participation-clinical-trials-eligibility-criteria-enrollment-practices-and-trial-designs).

## Failures and concerns about accountability

External evaluation has identified limitations in deployed clinical prediction tools. A 2021 retrospective study at Michigan Medicine found that the version of the Epic Sepsis Model evaluated missed 67% of patients with sepsis at the selected threshold while generating alerts in 18% of hospitalizations. The findings apply to that version and setting. They demonstrate the importance of external validation and assessment of the burden created by alerts. [Wong and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC8218233/).

Concerns also involve organizational priorities. After leaving OpenAI in May 2024, Jan Leike publicly criticized the balance between safety and product development. OpenAI leadership subsequently reaffirmed its safety commitment. His statements represent an insider's account, rather than independent verification of every internal circumstance. [Associated Press](https://apnews.com/article/8a7ba341e06a66e9a7935bb06214edcb), [leadership response](https://www.axios.com/2024/05/20/openai-safety-jan-leike-sam-altman).

Anthropic's Mrinank Sharma resigned in February 2026; his letter expressed concern about interconnected crises beyond AI. [Reporting on his letter](https://globalnews.ca/news/11664538/anthropic-ai-safety-researcher-mrinank-sharma-quits-concerns/).

These departures have different contexts and do not establish that a particular biomedical application is unsafe. They raise questions about whether safety staff have adequate resources, authority and freedom to report concerns. For universities purchasing these systems, published commitments should be supplemented by contractual protections and evidence relevant to the proposed use.

In biomedical research, the concerns can be considered at three levels: errors affecting patients or research findings; limited ability to inspect and challenge decisions; and organizational incentives that favor deployment over adequate evaluation. Tools with potential biological misuse require a separate assessment of that risk. Diagnostic performance alone cannot address it.

## Regulatory and institutional responsibilities

FDA's January 2025 draft guidance proposes a risk-based credibility assessment for AI supporting regulatory decisions about drugs and biological products. FDA and EMA also announced shared principles for good AI practice in January 2026. These documents should be distinguished from product-specific authorization and binding requirements. [FDA draft guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-artificial-intelligence-support-regulatory-decision-making-drug-and-biological), [FDA–EMA principles](https://content.govdelivery.com/accounts/USFDA/bulletins/4042e31).

For medical devices, FDA's change-control resources address planned modifications, validation, impact assessment and monitoring. Their relevance is the need to maintain assurance as a system changes. [FDA change-control resources](https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices/predetermined-change-control-plans-machine-learning-enabled-medical-devices-guiding-principles).

NIST's voluntary AI Risk Management Framework provides an organizational structure through Govern, Map, Measure and Manage. It can support institutional processes but does not grant clinical authorization. [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework).

National policy also affects adoption and workforce development. The United States' July 2025 AI Action Plan sets out priorities for innovation, infrastructure and workforce measures; publication of the plan does not establish implementation. The European Commission's current AI Act timetable reports December 2, 2027 for specified high-risk uses and August 2, 2028 for high-risk systems embedded in regulated products. Applicability depends on the defined legal category. [US AI Action Plan](https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf), [European Commission](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai).

## A university governance model

University governance should assign technical responsibility to OIT and scientific responsibility to the relevant research or clinical team. Privacy, research compliance, procurement, legal counsel, the IRB and biosafety teams should participate where their responsibilities apply. Platform approval and approval of a consequential use should remain separate decisions.

A program charter should define who approves uses, accepts residual risk, grants exceptions and suspends systems. Policies need supporting procedures, assigned staff and a maintenance schedule. AI review should be integrated with existing data and information governance, procurement and research-compliance processes. The inventory should include AI introduced through vendor updates to existing software, as well as tools selected directly by researchers.

Implementation must account for decentralized research units and academic freedom. Designated governance liaisons can provide local expertise and help researchers navigate review. Low-risk exploratory work should have a proportionate route, with explicit review triggers when data access, permitted actions or downstream consequences change. Exceptions should record their justification, compensating controls, accountable owner and expiration date.

Program assessment should include review timelines, unresolved risks, overdue corrective actions and whether controls detect and prevent consequential errors. Reporting to institutional leadership should connect these findings to staffing and program priorities. Counting approved tools or completed training sessions alone does not establish effective governance.

The following controls provide a practical starting point:

| Control | Institutional implementation |
|---|---|
| Use registration | Record the task, accountable owner, data categories, system, intended decisions and permitted actions. Apply proportionate review. |
| Data protection | Specify permitted tools for each data category. Address vendor training, retention, deletion, subprocessors and incident notification. |
| Validation | Define acceptance criteria, comparators, independent evaluation data and relevant population analyses before a pilot. Test the complete workflow. |
| Access and action limits | Use university identity, multifactor authentication and restricted permissions. Separate experimental systems from production records. Authorize consequential agent actions explicitly. |
| Human review | Provide source evidence, review time, escalation procedures and authority to reject outputs. Identify the final decision owner. |
| Change control | Record relevant versions and provenance. Define reevaluation triggers for changes to models, prompts, data sources or workflows. |
| Incident response | Include errors and near misses, suspension criteria, a rapid disable function and an alternative workflow. |
| Research integrity | Verify references and generated code, document material AI assistance and preserve supervised training. |

These are proposed institutional controls, not a claim that one regulation requires the entire table. Existing obligations still apply. HIPAA-covered cloud processing requires appropriate agreements and risk management. NIH restricts disclosure of controlled-access genomic data to public generative AI tools and prohibits generative AI for its peer-review critiques. An enterprise license cannot override those restrictions. [HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html), [NIH genomic-data notice](https://www.grants.nih.gov/grants/guide/notice-files/NOT-OD-25-081.html), [NIH peer-review notice](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-23-149.html).

For clinical-investigation records, the relevant electronic-record requirements and FDA guidance should be assessed according to the workflow's scope. Logging should support reconstruction of consequential results without creating unnecessary copies of sensitive data. [FDA electronic systems guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/electronic-systems-electronic-records-and-electronic-signatures-clinical-investigations-questions).

## Implications for 2027–28 and the research workforce

By 2027–28, universities may connect AI across genomic analysis, candidate selection, trial screening and evidence summaries. This is a plausible direction, not a forecast of universal adoption. Integration would make it more important to trace how an assumption or error moves between systems.

Workforce effects will depend partly on institutional decisions. AI may reduce selected tasks while increasing the need for evaluation, interpretation and oversight. The ILO–NASK assessment distinguishes occupational exposure from actual job loss; its global findings should not be treated as a forecast for biomedical laboratories. [ILO–NASK assessment](https://www.ilo.org/resource/news/one-four-jobs-risk-being-transformed-genai-new-ilo%E2%80%93nask-global-index-shows).

Universities should assess changes in workload, entry-level opportunities and decision-making authority alongside productivity. Automating routine analysis without preserving supervised learning could weaken the development of expertise needed to identify errors. Paid training and staff participation in workflow design should accompany adoption, with evaluation of whether training leads to usable skills and career opportunities.

Patient participation also remains essential. People should be able to understand the role of AI in consequential decisions and raise concerns. In genomics, explanations must preserve uncertainty and acknowledge that interpretations may change as evidence develops. [NHGRI consent considerations](https://www.genome.gov/about-genomics/policy-issues/Informed-Consent/Special-Considerations-for-Genome-Research).

Scientific progress should be evaluated through the quality of evidence and its contribution to patient care. Increased output alone is insufficient. Effective governance must preserve the expertise, access to evidence and authority required to challenge a result before it becomes a diagnosis, a trial decision or a therapeutic claim.

---

*Policy status reviewed October 5, 2026. Company descriptions reflect published accounts. Proposed controls and the 2027–28 outlook are the author's analysis.*
