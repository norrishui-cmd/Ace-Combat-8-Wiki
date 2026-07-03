# ACE COMBAT 8: WINGS OF THEVE — 攻略站 MVP

技术栈：Astro（纯静态生成）+ Content Collections，零框架依赖，部署到 Vercel。

## 你的工作流（GitHub Desktop + 手机，全程无需命令行）

### 首次上线

1. 在 GitHub 新建一个空仓库（比如 `ac8-guide`）
2. 用 GitHub Desktop 把这个文件夹整个拖进去 clone 好的本地仓库路径，或者直接 "Add existing repository"
3. Commit 全部文件，Push 到 GitHub
4. 去 [vercel.com](https://vercel.com) 用 GitHub 账号登录 → Import 这个仓库 → Framework Preset 选 **Astro**（Vercel 会自动识别，一般不用手动选）→ Deploy
5. Vercel 会给你一个 `xxx.vercel.app` 的预览域名，先用它验证站点能正常打开

### 绑定 NameSilo 域名

1. Vercel 项目 → Settings → Domains → 填入你的域名，Vercel 会给你几条 DNS 记录（通常是一条 A 记录 + 一条 CNAME，或者直接让你把 Nameserver 指过去）
2. 去 NameSilo 后台，在域名的 DNS 管理里按 Vercel 给的值填好
3. 等待生效（一般几分钟到几小时），Vercel 会自动签发 HTTPS 证书

### 之后新增/修改内容（这是你日常最常做的事）

**新增一架机体**：不需要碰任何代码。

1. 打开 `src/content/aircraft/` 文件夹
2. 复制一份现有的 `.md` 文件（比如 `f-14a.md`），改文件名（比如 `su-30.md`）
3. 打开新文件，把最上面 `---` 之间的字段改成新机体的信息，下面正文部分照着写
4. Commit、Push，Vercel 会自动重新构建部署，几分钟后新机体页面就活了，且会自动出现在 `/aircraft` 列表页里 —— 不用手动加导航链接

**新增一个版本对比条目**：同理，去 `src/content/editions/` 复制改。

**改文案/新增独立页面**（比如 Mission Walkthrough 这种发售后才补的大页面）：在 `src/pages/` 下参考现有的 `.astro` 文件（比如 `multiplayer.astro`）复制修改即可，交给 AI 生成新页面时把这份文件贴给它当模板，能极大提高一次成型率。

## SEO 检查清单（上线时过一遍）

- [x] `astro.config.mjs` 的 `site` 已改成 `https://acecombat8.wiki`
- [x] 已加入 canonical 标签（自动按当前路径生成，不用每页手填，避免 `/aircraft` 和 `/aircraft/` 被判重复内容）
- [x] 已加入 Open Graph / Twitter Card meta（含默认分享卡片图 `public/og/og-default.png`）
- [x] 已加入站点级 JSON-LD 结构化数据（`WebSite` + `VideoGame`），帮助 Google 理解站点主题
- [ ] Vercel 部署后，访问 `https://acecombat8.wiki/sitemap-index.xml` 确认能正常打开且没有 404
- [ ] 提交 sitemap 到 Google Search Console

## GSC 提交流程（照着做，避免上次踩过的"提交报错"问题）

上次 Star Wars Zero Company 项目的 sitemap 提交报错，本质是**域名还没完全生效/构建还没跑完就去提交**导致的时序问题。这次按顺序来，一次通过：

1. **先确认站点已经能公开访问**：浏览器直接打开 `https://acecombat8.wiki`，确认不是 Vercel 预览域名，是绑定后的正式域名，且 HTTPS 锁标志正常（没有证书错误）
2. **验证 GSC 站点归属权，选"域名"类型而不是"网址前缀"**：
   - 进入 [Google Search Console](https://search.google.com/search-console) → 添加资源 → 选择 **域名 (Domain)** 属性，输入 `acecombat8.wiki`
   - GSC 会给你一条 TXT 记录，去 **NameSilo** 后台该域名的 DNS 管理里添加这条 TXT 记录
   - 域名属性的好处是一次验证覆盖 `www` 和非 `www`、所有子路径，不用每个前缀单独验证
   - DNS 记录生效有延迟，添加后**等 10-30 分钟再回 GSC 点验证**，不要立刻点（这是上次报错的直接原因）
3. **验证通过后再提交 sitemap**：左侧菜单"站点地图" → 填入 `sitemap-index.xml`（不用填完整 URL，GSC 会自动拼域名）→ 提交
4. **提交后检查状态**：正常应显示"成功"，如果显示"无法提取"，先自己在浏览器里打开一遍 `https://acecombat8.wiki/sitemap-index.xml` 确认能访问，能访问的话回 GSC 里点"重新提交"通常就好了，一般还是时序问题

## 上线前必须改的一处（如果之后又换域名）

- `astro.config.mjs` 里的 `site` 字段和 `public/robots.txt` 里的 sitemap 链接，两处需要保持一致 —— 目前已经写好 `acecombat8.wiki`，正常不用再动，除非你之后换域名。

## 发售前后的内容优先级（对应之前讨论的发布节奏）

- **现在 → 发售前**：持续维护 `aircraft` 集合（每次官方放出新机体情报就加一条），`editions.astro`、`ace-style-system.astro`、`new-mechanics.astro`、`ace-combat-zero-bonus.astro` 这几个页面根据后续放出的情报持续扩写
- **发售前 2-3 周**：搭好 Mission Walkthrough、Trophy Guide、Boss 攻略（Land Battleship 等）的页面骨架，内容先留空/占位
- **发售当天起**：疯狂填充上面这些骨架页面的实测内容，抢首日搜索流量；同时把所有标了 "Est."（编辑预估）的机体数值页面替换成实测数据

## 内容页 SEO 小提醒

新增页面时记得给 `<title>` 和 `description` 带上目标关键词（已在各页面 `BaseLayout` 的 props 里预置好格式，照抄就行）。
