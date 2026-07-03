import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署到 Vercel 时，在 Vercel 项目设置里把 Framework Preset 选为 "Astro" 即可，
// 不需要额外的 adapter —— 本站是纯静态生成（SSG），Vercel 会自动识别 astro build 的输出。
//
// sitemap 集成会在 build 时自动生成 /sitemap-index.xml，提交到 GSC 时直接填这个路径。
export default defineConfig({
  site: 'https://acecombat8.wiki',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
