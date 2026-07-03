import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署到 Vercel 时，在 Vercel 项目设置里把 Framework Preset 选为 "Astro" 即可，
// 不需要额外的 adapter —— 本站是纯静态生成（SSG），Vercel 会自动识别 astro build 的输出。
//
// sitemap 集成会在 build 时自动生成 /sitemap-index.xml，提交到 GSC 时直接填这个路径。
//
// serialize() 给不同页面分配优先级/更新频率：首页和机体列表是发售前更新最频繁、
// 权重最高的页面，单个机体详情页次之，静态说明类页面最低。这不保证 Google 一定
// 按这个来抓取，但能传达一个明确的信号。
export default defineConfig({
  site: 'https://acecombat8.wiki',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        if (url === 'https://acecombat8.wiki/' || url === 'https://acecombat8.wiki') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.endsWith('/aircraft') || url.endsWith('/news')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (url.includes('/aircraft/') || url.includes('/news/')) {
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
