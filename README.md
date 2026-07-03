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

## 上线前必须改的两处

1. `astro.config.mjs` 里的 `site: 'https://acecombat8guide.com'` —— 换成你实际买的域名，这个值决定 sitemap 里的链接是否正确，**忘改的话 GSC 提交会全错**（这个坑之前在 Star Wars Zero Company 项目上踩过）
2. `public/robots.txt` 里的 sitemap 链接同理要改成真实域名

## 发售前后的内容优先级（对应之前讨论的发布节奏）

- **现在 → 发售前**：持续维护 `aircraft` 集合（每次官方放出新机体情报就加一条），`editions.astro`、`ace-style-system.astro`、`new-mechanics.astro`、`ace-combat-zero-bonus.astro` 这几个页面根据后续放出的情报持续扩写
- **发售前 2-3 周**：搭好 Mission Walkthrough、Trophy Guide、Boss 攻略（Land Battleship 等）的页面骨架，内容先留空/占位
- **发售当天起**：疯狂填充上面这些骨架页面的实测内容，抢首日搜索流量；同时把所有标了 "Est."（编辑预估）的机体数值页面替换成实测数据

## SEO 检查清单（上线时过一遍）

- [ ] `astro.config.mjs` 的 `site` 已改成真实域名
- [ ] Vercel 部署后，访问 `/sitemap-index.xml` 确认能正常打开
- [ ] 把 sitemap 提交到 Google Search Console
- [ ] 每个页面的 `<title>` 和 `description` 是否包含目标关键词（已在各页面 BaseLayout 的 props 里预置，新增页面记得同样传）
