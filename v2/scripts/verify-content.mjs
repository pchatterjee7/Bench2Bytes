import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('..'),dist=path.resolve('dist'),errors=[];
const pubs=JSON.parse(fs.readFileSync('src/data/bibliography.json')),preprints=JSON.parse(fs.readFileSync('src/data/preprints.json'));
if(pubs.length!==16||new Set(pubs.map(p=>p.doi)).size!==16)errors.push('Published inventory count/duplicate DOI');
if(preprints.length!==3||preprints.some(p=>p.type!=='posted-content'))errors.push('Preprint status mismatch');
if([...pubs,...preprints].some(p=>!p.authors.includes('Paramita Chatterjee')||!p.source||!p.title||!p.year))errors.push('Incomplete bibliographic record');
const files=fs.readdirSync(dist).filter(p=>p.endsWith('.html'));let placeholders=[];
for(const f of files){const html=fs.readFileSync(path.join(dist,f),'utf8');if(/Verified evidence pending|CONTENT PLACEHOLDER|Provisional positioning|Current cases await|content under review/.test(html))placeholders.push(f);}
if(placeholders.length)errors.push(`Visitor placeholders: ${placeholders.join(',')}`);
const publication=fs.readFileSync(path.join(dist,'publications.html'),'utf8');if(!publication.includes('id="preprints"')||!publication.includes('id="published"'))errors.push('Scientific status sections missing');
const research=fs.readFileSync(path.join(dist,'projects.html'),'utf8');if(!research.includes('application, not an award')||!research.includes('Contributed to securing'))errors.push('Funding contribution/status context missing');
if(fs.existsSync(path.join(dist,'CONTENT-REVIEW.md'))||fs.existsSync(path.join(dist,'PHASE-3-SOURCE-REGISTER.json')))errors.push('Internal review leaked into build');
const css=fs.readFileSync('src/styles/global.css','utf8');if(!/prefers-reduced-motion:reduce/.test(css)||!css.includes('animation:none!important;transition:none!important')||!css.includes('summary:focus-visible'))errors.push('Motion or disclosure focus protection missing');
const report={publishedRecords:pubs.length,preprintRecords:preprints.length,caseStudies:JSON.parse(fs.readFileSync('src/data/cases.json')).length,visitorPlaceholders:placeholders,sourceRegister:'docs/PHASE-3-SOURCE-REGISTER.json',reducedMotion:'CSS override verified; browser media emulation unavailable',errors};fs.writeFileSync(path.join(root,'docs/PHASE-3-CONTENT-CHECKS.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
