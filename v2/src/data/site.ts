export const base = '/Bench2Bytes';
export const url = (path = '') => `${base}/${path}`;
export const navigation = [ ['Home', ''], ['About', 'about.html'], ['AI & Governance', 'ai-governance.html'], ['Research', 'projects.html'], ['Publications', 'publications.html'], ['Leadership', 'leadership.html'], ['Talks & Writing', 'talks-writing.html'] ];
export const pillars = [
 { number: '01', title: 'Scientific Discovery & Computational Biology', text: 'Genomics, bioinformatics, single-cell biology, multi-omics, and computational research form the scientific foundation.', href: 'projects.html' },
 { number: '02', title: 'Clinical, Real-World & Translational Evidence', text: 'Oncology real-world evidence, clinical-trial omics and cell-therapy research connect data to translational questions.', href: 'projects.html#clinical-evidence' },
 { number: '03', title: 'AI, Data & Responsible Innovation', text: 'Computational research, data stewardship and validation inform a broader perspective on responsible innovation.', href: 'ai-governance.html' },
 { number: '04', title: 'Scientific Strategy & Program Leadership', text: 'Scientific strategy, people, partnerships and resources brought together through an MBA and program-management practice.', href: 'leadership.html' },
];
export const themes = ['Clinical AI & AI-enabled research', 'Real-world & clinical evidence', 'Oncology & multimodal research', 'Genomics & computational biology', 'Single-cell & multi-omics', 'Cell therapy & translation', 'Research infrastructure & data governance'];
