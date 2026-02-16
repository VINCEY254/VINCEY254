import { writeFileSync } from 'node:fs';

const urls = ['/', '/wishlist', '/orders', '/checkout', '/auth/login', '/auth/register'];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((path) => `  <url><loc>https://store.example.com${path}</loc></url>`)
  .join('\n')}\n</urlset>`;

writeFileSync('apps/frontend/public/sitemap.xml', xml);
console.log('Sitemap generated at apps/frontend/public/sitemap.xml');
