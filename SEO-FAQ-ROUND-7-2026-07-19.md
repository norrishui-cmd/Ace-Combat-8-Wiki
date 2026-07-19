# Round 7 — 50-Question FAQ Expansion

## Scope

- Expanded the production site from 141 to 191 HTML pages and the canonical sitemap from 140 to 190 URLs.
- Rebuilt the main `/faq` route as a grouped directory containing exactly 50 evidence-checked questions.
- Added 50 standalone `/faq/{slug}` detail URLs.
- Added related FAQ modules to Aircraft, Gameplay, Platforms, Characters, Story, Editions and PC hubs; the FAQ navigation tab exposes the complete directory.
- Each hub surfaces five directly relevant questions and links to the matching FAQ group.

## Quality controls

- Every answer has a concise direct answer, supporting explanation, explicit unconfirmed boundary and primary official source.
- Questions cover eight groups: General, Aircraft, Gameplay, Platforms, Characters, Story, Editions and PC.
- No unannounced launch platform, performance figure, aircraft statistic, character outcome, mission count or DLC roadmap is presented as fact.

## Technical SEO

- Each FAQ detail has a unique title, description, H1, canonical and FAQPage schema.
- The FAQ directory uses ItemList schema and crawlable group anchors.
- All new FAQ routes receive a 2026-07-19 sitemap lastmod and reciprocal contextual links to their evergreen topic hub.

## Validation

- Exactly 50 standalone FAQ directories generated.
- Each of the seven non-FAQ topic hubs exposes exactly five relevant FAQ detail links; the FAQ tab exposes all 50.
- Astro production build: 191 pages.
- Sitemap: 190 canonical indexable URLs; custom 404 excluded.
- Automated SEO audit: 0 warnings and 0 errors.
