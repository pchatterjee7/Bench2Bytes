import { descriptions, productionOrigin } from '../data/seo';
import { url } from '../data/site';
export function GET() {
 const locations = Object.keys(descriptions).filter(p => p !== '404.html');
 const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + locations.map(p => `<url><loc>${productionOrigin}${url(p)}</loc></url>`).join('') + '</urlset>';
 return new Response(xml,{headers:{'Content-Type':'application/xml'}});
}
