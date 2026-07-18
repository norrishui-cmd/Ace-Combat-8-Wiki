import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { STATIC_PAGE_LASTMOD } from './lastmod.config.mjs';

// 从 content 目录里的 .md frontmatter 直接抠日期字段，构建 URL -> lastmod 映射。
// 不用 fs.stat 读文件系统修改时间，原因见 lastmod.config.mjs 顶部注释。
function readFrontmatterDate(filePath, field) {
  const text = fs.readFileSync(filePath, 'utf-8');
  const match = text.match(new RegExp(`^${field}:\\s*(\\S+)`, 'm'));
  return match ? match[1] : null;
}

function buildContentLastmodMap() {
  const map = { ...STATIC_PAGE_LASTMOD };

  const aircraftDir = path.resolve('./src/content/aircraft');
  let maxAircraftDate = null;
  for (const file of fs.readdirSync(aircraftDir)) {
    const id = file.replace(/\.md$/, '');
    const date = readFrontmatterDate(path.join(aircraftDir, file), 'updatedAt');
    if (date) {
      map[`/aircraft/${id}`] = date;
      if (!maxAircraftDate || date > maxAircraftDate) maxAircraftDate = date;
    }
  }
  if (maxAircraftDate) map['/aircraft'] = maxAircraftDate;

  const newsDir = path.resolve('./src/content/news');
  let maxNewsDate = null;
  for (const file of fs.readdirSync(newsDir)) {
    const id = file.replace(/\.md$/, '');
    const date = readFrontmatterDate(path.join(newsDir, file), 'updatedAt') || readFrontmatterDate(path.join(newsDir, file), 'publishedAt');
    if (date) {
      map[`/news/${id}`] = date;
      if (!maxNewsDate || date > maxNewsDate) maxNewsDate = date;
    }
  }
  if (maxNewsDate && (!map['/news'] || maxNewsDate > map['/news'])) map['/news'] = maxNewsDate;

  const editionsDir = path.resolve('./src/content/editions');
  let maxEditionsDate = null;
  for (const file of fs.readdirSync(editionsDir)) {
    const date = readFrontmatterDate(path.join(editionsDir, file), 'updatedAt');
    if (date && (!maxEditionsDate || date > maxEditionsDate)) maxEditionsDate = date;
  }
  if (maxEditionsDate) map['/editions'] = maxEditionsDate;

  return map;
}

const lastmodMap = buildContentLastmodMap();

// 部署到 Vercel 时，在 Vercel 项目设置里把 Framework Preset 选为 "Astro" 即可，
// 不需要额外的 adapter —— 本站是纯静态生成（SSG），Vercel 会自动识别 astro build 的输出。
//
// sitemap 集成会在 build 时自动生成 /sitemap-index.xml，提交到 GSC 时直接填这个路径。
//
// serialize() 做两件事：① 给不同页面分配优先级/更新频率 ② 从上面构建的
// lastmodMap 里取真实的内容更新日期作为 lastmod，而不是留空或用构建时间
// （构建时间在 Vercel 上每次都不同，等于噪音，没有信号价值）。
export default defineConfig({
  site: 'https://acecombat8.wiki',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        const pathname = new URL(url).pathname.replace(/\/$/, '') || '/';

        if (lastmodMap[pathname]) {
          item.lastmod = lastmodMap[pathname];
        }

        if (url === 'https://acecombat8.wiki/' || url === 'https://acecombat8.wiki') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.endsWith('/aircraft') || url.endsWith('/news') || url.endsWith('/aircraft/compare') || url.endsWith('/platforms') || url.endsWith('/gameplay') || url.endsWith('/multiplayer') || url.endsWith('/faq')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (
          url.endsWith('/release-date') ||
          url.endsWith('/system-requirements') ||
          url.endsWith('/editions') ||
          url.endsWith('/ace-pass') ||
          url.endsWith('/price')
        ) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (url.includes('/aircraft/') || url.includes('/news/') || url.includes('/platforms/') || url.includes('/gameplay/') || url.includes('/multiplayer/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else if (
          url.endsWith('/story') ||
          url.endsWith('/characters') ||
          url.endsWith('/superweapons') ||
          url.endsWith('/getting-started')
        ) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/about')) {
          item.priority = 0.3;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
