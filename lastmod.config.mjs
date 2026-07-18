// 手动维护的 lastmod 日期表，喂给 sitemap 用。
//
// 为什么不用 fs.stat 读文件修改时间：Vercel 每次构建都是全新 git checkout，
// 所有文件的系统 mtime 会被重置成同一个时间，这样算出来的 lastmod 全站雷同，
// 等于没有意义（这是之前 Star Wars Zero Company 项目踩过的坑）。
// 正确做法是用内容本身携带的日期字段（frontmatter 的 updatedAt/publishedAt），
// 或者像下面这样为没有 frontmatter 的静态页面手动维护一份日期表。
//
// 使用方法：改了某个静态页面内容后，把对应日期改成当天，不用管格式，YYYY-MM-DD 就行。
export const STATIC_PAGE_LASTMOD = {
  '/': '2026-07-18',
  '/story': '2026-07-03',
  '/characters': '2026-07-03',
  '/superweapons': '2026-07-03',
  '/getting-started': '2026-07-03',
  '/release-date': '2026-07-17',
  '/system-requirements': '2026-07-17',
  '/ace-style-system': '2026-07-03',
  '/new-mechanics': '2026-07-03',
  '/multiplayer': '2026-07-18',
  '/ace-combat-zero-bonus': '2026-07-03',
  '/about': '2026-07-03',
  '/aircraft/compare': '2026-07-18',
  '/news': '2026-07-18',
  '/platforms': '2026-07-17',
  '/platforms/ps5': '2026-07-17',
  '/platforms/xbox-series-x-s': '2026-07-17',
  '/platforms/pc': '2026-07-17',
  '/platforms/ps4': '2026-07-17',
  '/platforms/xbox-one': '2026-07-17',
  '/platforms/nintendo-switch-2': '2026-07-17',
  '/platforms/steam-deck': '2026-07-17',
  '/ace-pass': '2026-07-17',
  '/faq': '2026-07-18',
  '/gameplay': '2026-07-18',
  '/gameplay/aircraft-upgrades': '2026-07-18',
  '/gameplay/special-weapons': '2026-07-18',
  '/gameplay/wingman-commands': '2026-07-18',
  '/gameplay/mrp': '2026-07-18',
  '/gameplay/mission-briefings': '2026-07-18',
  '/gameplay/high-g-turns': '2026-07-18',
  '/gameplay/clouds-weather': '2026-07-18',
  '/multiplayer/crossplay': '2026-07-18',
  '/multiplayer/co-op': '2026-07-18',
  '/multiplayer/pvp': '2026-07-18',
  '/multiplayer/online-lobby': '2026-07-18',
  '/price': '2026-07-18',
};
