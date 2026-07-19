# Round 6 — Tab News Expansion

## Scope

- Expanded the production build from 93 to 141 HTML pages and the canonical sitemap from 92 to 140 URLs.
- Added a five-card news module to all eight English primary navigation hubs: Aircraft, Gameplay, Platforms, Characters, Story, Editions, PC and FAQ.
- Added eight category news desks and 40 standalone evidence-checked update URLs.
- Preserved the existing `/news/[slug]` routes; new reports use `/news/{category}/{slug}`.
- Expanded the main News hub to expose every category and report through crawlable links.

## Editorial controls

- Every report links to a primary Bandai Namco, PlayStation or Steam source.
- Each report separates the direct answer, confirmed evidence, player impact and unknown details.
- Reports are not represented as 40 separate publisher announcements; they are topic-specific reporting and interpretation of official releases.
- No unannounced aircraft, modes, prices, performance figures, missions or outcomes were invented.

## Technical SEO

- Standalone reports use NewsArticle structured data with source, publication date and review date.
- Category desks use ItemList structured data.
- Every report links to its category desk, evergreen guide hub and overall News hub.
- Changed hubs and all new news URLs receive 2026-07-19 sitemap lastmod values.

## Validation

- Astro production build: 141 pages.
- Sitemap: 140 canonical indexable URLs; custom 404 excluded.
- Automated SEO audit: 0 warnings and 0 errors.
