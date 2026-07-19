# SEO Round 8 — Game Entities & Live Status

## Outcome

- Expanded the site from 191 to 216 generated HTML pages.
- Added 25 new indexable pages across items, collectibles, squadrons, world entities, gameplay mechanics and Demo status.
- Sitemap now contains 215 canonical URLs (the custom 404 is excluded).
- Full Astro build and semantic SEO audit: 0 warnings, 0 errors.

## New URL clusters

### Items & cosmetics

- `/items` hub plus six detail URLs for the Mobius skin, Team Zvezda skin, Tasha Costume Set, Scarlet Missile Smoke, Premium Ace Pass Plus voucher and aircraft-upgrade items.
- Every page states edition, mode and unlock restrictions and avoids inventing unpublished item stats.

### Physical collectibles

- `/collectibles` hub plus four details for ACES at WAR, The Vinyl Collection, Joker Flight Pack and Endurance XXL Mousepad.
- Physical merchandise is explicitly separated from in-game unlocks.

### Squadrons and world database

- `/squadrons` with standalone Joker Flight and Queen Flight pages.
- `/world` with standalone FCU, Republic of Sotoa, Theve and Endurance pages.
- Pages connect named characters, flights, factions and campaign locations without inventing unpublished rosters or geography.

### Special gameplay

- Added detail guides for squadron composition, wreckage chain reactions, superweapon damage zones and first-person story scenes.
- Pages reuse the existing Gameplay hub and template, preserving one search intent per URL.

### Demo status

- Added one canonical `/demo` tracker rather than duplicating thin platform variants.
- Status is dated July 19, 2026: no public demo or beta has been announced by the publisher or first-party platforms.
- The page distinguishes public demos from paid Deluxe preorder early access and avoids claiming a future demo is impossible.

## Discovery and technical changes

- Added Items and World to primary English navigation.
- Added all new hubs to the homepage or footer site index.
- Added ItemList schema to hubs and FAQPage schema to details.
- Added concrete-answer enforcement for every new route family in `scripts/seo-audit.mjs`.
- Assigned July 19, 2026 sitemap `lastmod` to all new entity and gameplay routes.

## Evidence policy

Primary evidence is limited to Bandai Namco’s official game, character, walkthrough and merchandise pages plus first-party PlayStation coverage. Dynamic price, inventory and shipping data are not copied into static text. Unannounced mechanics, item stats, Demo dates and unnamed roster members remain explicitly unconfirmed.
