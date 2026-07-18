# AdSense Configuration — 2026-07-18

Publisher: `ca-pub-9505220977121599`

## Installed site-wide

- Shared-head AdSense async loader with `crossorigin="anonymous"`.
- Shared-head `google-adsense-account` ownership meta tag.
- Root `/ads.txt` publisher declaration:
  `google.com, pub-9505220977121599, DIRECT, f08c47fec0942fa0`

The shared Astro layout applies the head tags exactly once to every English,
German and Japanese HTML page, including future pages that use `BaseLayout`.

## Verification after deployment

1. Open `https://acecombat8.wiki/ads.txt` and confirm the single publisher line.
2. View page source on the homepage and one `/de/` and `/ja/` route; confirm the
   account meta and loader script are present in `<head>`.
3. In AdSense, select the preferred verification method, check the confirmation
   box and click Verify. AdSense crawling and review can remain pending after a
   technically correct deployment.
