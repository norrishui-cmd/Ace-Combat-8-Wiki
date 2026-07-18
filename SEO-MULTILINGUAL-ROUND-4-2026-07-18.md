# SEO Round 4 — German and Japanese Expansion

## Scope

- Expanded generated HTML from 67 to 93 pages and indexable sitemap URLs from 66 to 92.
- Added 13 German and 13 Japanese high-intent pages instead of translating all English URLs.
- Covered home, release date, platforms, languages, gameplay, beginner guide, FAQ, PC, PS5, Xbox, multiplayer, characters and preorder bonuses.
- Each localized page has distinct native-language title, description, H1, direct answer, supporting sections and FAQ.

## International SEO

- Locale folders: `/de/` and `/ja/`.
- Self-referencing canonicals remain automatic.
- English, German, Japanese and `x-default` hreflang are generated for every available counterpart.
- English counterpart pages now return reciprocal hreflang automatically.
- HTML `lang` and Open Graph locale reflect the page language.
- Language navigation is crawlable in the header; localized hubs use localized navigation.
- Localized pages are included in the canonical Astro sitemap with manual 2026-07-18 lastmod values.

## Quality policy

- No bulk translation of all 67 English pages.
- No localized route is published without a concrete answer.
- German text support is not described as German dubbing.
- Japanese full audio, interface and subtitles are kept separate from other language support.
- Unpublished performance, mission, aircraft and online details remain explicitly outside the evidence boundary.

## Validation

- Astro production build: 93 pages.
- Sitemap: 92 canonical indexable URLs; custom 404 excluded.
- Automated SEO audit: 0 warnings and 0 errors.
- Verified reciprocal English/German/Japanese plus `x-default` hreflang on representative route groups.
