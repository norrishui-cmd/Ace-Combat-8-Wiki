import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
}
walk(dist);

const pages = new Map();
for (const file of files) {
  const rel = path.relative(dist, file).replaceAll(path.sep, '/');
  const route = rel === 'index.html' ? '/' : `/${rel.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
  pages.set(route, fs.readFileSync(file, 'utf8'));
}

const errors = [];
const warnings = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const adsensePublisher = 'ca-pub-9505220977121599';
const strip = (value) => value.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();

for (const [route, html] of pages) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const mainText = strip(html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '');
  const words = mainText.split(/\s+/).filter(Boolean).length;
  const cjkChars = (mainText.match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
  const needsConcreteAnswer = /^(\/gameplay|\/multiplayer|\/platforms|\/characters|\/items|\/collectibles|\/squadrons|\/world|\/languages|\/pc|\/de|\/ja)(\/|$)/.test(route) || ['/price', '/ace-pass', '/preorder-bonuses', '/demo'].includes(route);

  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (!canonical) errors.push(`${route}: missing canonical`);
  if (!html.includes(`<meta name="google-adsense-account" content="${adsensePublisher}"`)) errors.push(`${route}: missing AdSense account meta`);
  if (!html.includes(`adsbygoogle.js?client=${adsensePublisher}`)) errors.push(`${route}: missing AdSense loader`);
  if (h1Count !== 1 && route !== '/404') errors.push(`${route}: expected 1 H1, found ${h1Count}`);
  if (title && title.length > 70) warnings.push(`${route}: title is ${title.length} characters`);
  const descriptionTooShort = route.startsWith('/ja') ? description?.length < 50 : description?.length < 90;
  if (description && (descriptionTooShort || description.length > 170)) warnings.push(`${route}: description is ${description.length} characters`);
  if (words < 150 && cjkChars < 500 && route !== '/404') warnings.push(`${route}: only ${words} visible words / ${cjkChars} CJK characters`);
  if (needsConcreteAnswer && !html.includes('direct-answer')) errors.push(`${route}: missing visible concrete-answer block`);
  if (/^\/(de|ja)(\/|$)/.test(route)) {
    const locale = route.split('/')[1];
    if (!html.includes(`hreflang="${locale}"`)) errors.push(`${route}: missing self-language hreflang`);
    if (!html.includes('hreflang="en"')) errors.push(`${route}: missing English hreflang`);
    if (!html.includes('hreflang="x-default"')) errors.push(`${route}: missing x-default hreflang`);
    if (!html.includes(`<html lang="${locale}"`)) errors.push(`${route}: incorrect HTML lang`);
  }
  if (/^\/news\/(aircraft|gameplay|platforms|characters|story|editions|pc|faq)\//.test(route)) {
    if (!html.includes('direct-answer')) errors.push(`${route}: news page missing direct answer`);
    if (!html.includes('"@type":"NewsArticle"')) errors.push(`${route}: missing NewsArticle schema`);
  }
  if (/^\/faq\//.test(route)) {
    if (!html.includes('direct-answer')) errors.push(`${route}: FAQ detail missing direct answer`);
    if (!html.includes('"@type":"FAQPage"')) errors.push(`${route}: missing FAQPage schema`);
  }

  if (title) {
    if (seenTitles.has(title)) errors.push(`${route}: duplicate title with ${seenTitles.get(title)}`);
    else seenTitles.set(title, route);
  }
  if (description) {
    if (seenDescriptions.has(description)) errors.push(`${route}: duplicate description with ${seenDescriptions.get(description)}`);
    else seenDescriptions.set(description, route);
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (href.includes('${')) continue;
    if (/\.[a-z0-9]+$/i.test(href) || href.startsWith('/_astro/')) continue;
    if (!pages.has(href) && href !== '/404') errors.push(`${route}: broken internal link ${href}`);
  }
}

console.log(`SEO audit: ${pages.size} HTML pages checked`);
for (const warning of [...new Set(warnings)]) console.warn(`WARN ${warning}`);
for (const error of [...new Set(errors)]) console.error(`ERROR ${error}`);
if (errors.length) process.exit(1);
console.log(`PASS with ${new Set(warnings).size} warnings and no errors`);
