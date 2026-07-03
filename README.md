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

## 三项功能补齐（2026-07-03 第五轮）

### 1. 机体对比工具 `/aircraft/compare`
旗舰互动功能，纯 vanilla JS 实现，**没有引入 React/Vue 等新框架**，你现有的技术栈和构建流程完全不受影响。工作原理：
- 构建时从 `aircraft` 内容集合读取数据，序列化成一段 JSON 内嵌进页面
- 用户勾选最多 4 架机体，客户端 JS 实时渲染对比卡片和横向数值条
- 按类别筛选（Multirole/Air Superiority/Attacker/Interceptor）
- **你新增机体时完全不用碰这个文件**——`aircraft` 集合里加一条新 `.md`，工具会自动把新机体加入选择列表

因为现在只有 3 架机体是占位数据，工具本身逻辑已经完整，效果会随着你往 `aircraft` 集合里加更多机体条目自然变强，不需要额外开发。

### 2. 新手向内容页 `/getting-started`
官方明确说了这代要比 AC7 更照顾新玩家（重做了教程和训练模式），内容围绕这个角度写：新玩家和老玩家的具体差异点、开局机体建议、几条实用技巧。这类"降低门槛"型内容对应的是转化率更高的新玩家搜索意图，和老wiki站偏硬核数据表的调性形成差异化。

### 3. 首页 Hero 大倒计时
新增 `CountdownHero` 组件，DD:HH:MM:SS 实时跳动，放在首页大标题正下方、CTA按钮之前，是视觉主角级别的位置。同时把原来 HudStrip 里那个小的"Days to launch"数字去掉了（避免和这个大倒计时重复），换成"Aircraft categories"统计，信息不冗余。

**三项都已经过完整构建验证**（22个页面全部成功），机体对比工具的3个机体checkbox和实时数据都确认正确渲染，倒计时元素也确认正常输出。

## 内容模块扩充（2026-07-03 第四轮）——对照同类站点做的Gap填补

对照这类游戏攻略站的标准内容模块，找出并补上了4个明显空白：

| 新增页面 | 对应Gap | 为什么优先做 |
|---|---|---|
| `/release-date` | 发售信息之前只是散落在首页HUD带，没有独立承接页 | "release date"是最高频的头部搜索词之一，值得单独有一个页面承接 |
| `/system-requirements` | 完全空白 | PC玩家刚需搜索词，且我们已经有官方确认的硬性需求数据（SSD、光追显卡强制要求），内容可信度高 |
| `/story` + `/characters` | 完全空白 | 这是纯数据表型wiki站（如wiki.gg）最弱的地方，剧情解读类内容差异化价值最高，也最不容易被"抢发"复制 |
| `/superweapons` | 完全空白 | Land Battleship首领是预告片重点内容，我们手上一直有素材没转化成页面 |

**导航结构也做了调整**：顶部导航从7项精简到6项（News/Aircraft/Story/Editions/Multiplayer/Release Date），避免移动端换行太多行；新增了**页脚站点索引**，四个分组把全部页面都列出来，兼顾用户查找和爬虫抓取深层页面。

**内部链接网络也补强了**：新页面之间、以及和现有页面之间都做了双向关联（比如 Ace Style 页现在会指向 Story 页解释叙事背景，New Mechanics 页会指向 Superweapons 页解释伤害系统如何影响首领战）。

**还没做、后续可以考虑的方向**（按优先级）：
- 机体对比/配装互动工具（开发量较大，之前讨论过的MVP旗舰功能，仍未实现）
- 武器/特殊武器专项页面（目前只在New Mechanics里简单提及）
- 新手向内容页（官方明确说这代主打"降低门槛"，是现成角度，暂未写）
- 媒体/壁纸页（需注意版权边界，不能直接搬运官方素材做壁纸下载）

## 语言一致性修复（2026-07-03 第三轮）

扫描发现早期几个机体和版本页面的**正文内容**（不是代码注释）实际是中文写的，已经全部重写为英文：`f-14a.md`、`adfx-02-morgan-pixy.md`、`fa-18c.md`、`standard.md`、`deluxe.md`、`joker-flight-pack.md`。

已经用脚本扫描过最终构建产物（`dist/` 下所有 `.html` 和 `.xml` 文件），确认零中文字符残留。代码文件里的中文注释（`//`、`/* */`）不会被输出到网页里，不影响站点语言，不用处理——只有 `.md` 内容文件和模板里的可见文案才会真正渲染给用户看。

**以后新增内容时的提醒**：`.md` 文件的 frontmatter 字段值和正文部分都要用英文写，代码里的中文注释（给你自己看的开发说明）不受影响，两者不要混淆。

## 追赶竞争对手排名：本轮做的结构性改动（2026-07-03 第二轮）

现实情况先说清楚：`acecombat.wiki.gg` 这类老 wiki 站已经有权重积累，新域名短期内正面反超大词不现实，这不是技术问题。真正能快速见效的是下面这几件事：

- **News 快讯内容类型**：新增了 `src/content/news/` 集合，专门用来发"官方刚放出消息，你几小时内就有解读"的短文。这是打时间差的核心武器——wiki 类站点更新通常滞后几天，你反应快就能抢到"新鲜事件词"的搜索窗口期。**发布流程**：复制一份现有 `.md`（比如 `fa-18e-su-57-reveal.md`），改标题/日期/正文，Commit push 就行，自动出现在 `/news`
- **内部链接强化**：加了 `RelatedLinks` 组件，现在几乎每个页面底部都有 2-3 个关联页链接。机体详情页还会自动关联"同类别的其他机体"，不用手动维护
- **About 页面**：`/about`，说明这是独立粉丝站、内容怎么核实更新，链接放在页脚。这是给 Google 和用户的信任信号（E-E-A-T），新站尤其需要

**你接下来最该做的事，按性价比排序**：
1. 官方每次发新消息（推特、dev diary、State of Play），当天写一篇 news 短文
2. 去 GSC 的"URL 检查"工具，对每个新发布的页面手动点"请求编入索引"，不要干等自然抓取
3. 去 Reddit r/acecombat、相关 Discord 社区参与真实讨论，自然带出链接（不要灌链接式发广告）
4. 内容方向上，优先写"whiki站没写的判断型内容"（值不值得买、新手选哪个），而不是纯数据搬运——这类词竞争小，你更容易先冲进第一页

## 本轮 SEO 强化（2026-07-03 第一轮）

- **面包屑导航**：所有内容页顶部都加了面包屑（首页 / Aircraft / xxx），同时输出 `BreadcrumbList` 结构化数据 —— 这是 Google 搜索结果里出现"面包屑路径"展示样式的前提
- **ItemList 结构化数据**：机体列表页现在会输出完整机体清单的结构化数据
- **FAQPage 结构化数据**：Editions 页新增了三个常见问题，这类问答内容最容易拿到"常见问题"富媒体摘要
- **Sitemap 优先级配置**：首页 1.0／机体列表 0.9／机体详情页 0.7／其他说明页 0.6，且首页和机体列表标记为 `daily` 更新频率（因为预热期这两处改动最勤）
- **内容新鲜度信号**：`aircraft` 和 `editions` 集合新增了 `updatedAt` 字段，机体详情页会显示"Last updated"日期 —— **你以后改机体数值时记得同步把这个日期改成当天**，这是告诉搜索引擎"内容还在被维护"的直接信号，对预热期抢排名这种内容会频繁变动的站点尤其重要
- **404 页面**：避免"软404"（有内容但实际是错误页却返回200状态码），这会拖累搜索引擎对整站的信任度
- **字体预连接**：加了 Google Fonts 的 `preconnect`，减少首字节等待，对 Core Web Vitals 有帮助

**你新增内容时唯一要注意的变化**：复制机体或版本的 `.md` 文件时，记得在 frontmatter 里带上 `updatedAt: 2026-07-XX`（当天日期），少了这个字段会导致构建报错（这是 Zod schema 强制要求的必填字段，就是为了逼着自己不忘记维护新鲜度）。

## 上线前必须改的一处（如果之后又换域名）

- `astro.config.mjs` 里的 `site` 字段和 `public/robots.txt` 里的 sitemap 链接，两处需要保持一致 —— 目前已经写好 `acecombat8.wiki`，正常不用再动，除非你之后换域名。

## 发售前后的内容优先级（对应之前讨论的发布节奏）

- **现在 → 发售前**：持续维护 `aircraft` 集合（每次官方放出新机体情报就加一条），`editions.astro`、`ace-style-system.astro`、`new-mechanics.astro`、`ace-combat-zero-bonus.astro` 这几个页面根据后续放出的情报持续扩写
- **发售前 2-3 周**：搭好 Mission Walkthrough、Trophy Guide、Boss 攻略（Land Battleship 等）的页面骨架，内容先留空/占位
- **发售当天起**：疯狂填充上面这些骨架页面的实测内容，抢首日搜索流量；同时把所有标了 "Est."（编辑预估）的机体数值页面替换成实测数据

## 内容页 SEO 小提醒

新增页面时记得给 `<title>` 和 `description` 带上目标关键词（已在各页面 `BaseLayout` 的 props 里预置好格式，照抄就行）。
