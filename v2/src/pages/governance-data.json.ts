import entries from '../data/governance/entries.json';
export function GET(){return new Response(JSON.stringify({schemaVersion:1,coverage:'Curated US/EU biomedical AI governance sources',entries},null,2),{headers:{'Content-Type':'application/json'}});}
