# SEO remediation — 2026-08-13

## SEO-H1 — Per-page OG/Twitter

Every `src/app/**/page.tsx` that already has `metadata` must also set:

- `openGraph: { title, description, url: "<path>", locale: "tr_TR" }` (url can be path; `metadataBase` is set)
- `twitter: { title, description }`

Home: add `src/app/page.tsx` `metadata` **or** keep home OG only in layout and **remove** layout-level `openGraph.url` / generic title if that blocks children — preferred: layout keeps `siteName`, images, locale; **do not** set a catch-all `openGraph.title`/`url` that children fail to override. Check Next 16 metadata merge in `node_modules/next/dist/docs/`.

Inner page titles stay Title Case where they are headings; metadata titles can match current page titles (“Hakkımızda”, “İletişim”, …).

## SEO-H2 — Shorter home title

Layout `title.default` under ~60 characters, still includes Denizli + anaokulu. Example direction: `Lider Çocuklar Anaokulu | Denizli Yenişehir`. Keep `title.template` as `%s | ${site.shortName}`.

## SEO-M1 — Share image

Prefer a dedicated `public/og.png` 1200×630 (grape background, logo, “Lider Çocuklar Anaokulu”, Denizli). Point OG/Twitter at it. If you cannot design a decent image, set `twitter.card` to `summary` and leave logo.

## SEO-M2 — JsonLd geo

Remove incomplete `geo` **or** add real lat/lng from Maps for Yenişehir Mahallesi 55. Sokak No:4. Do not guess.

## SEO-L1 / L2

- Sitemap: drop `lastModified` or use a fixed date.
- Optional: `not-found.tsx` metadata `robots: { index: false }`.

## Constraints

Next 16 metadata docs. Do not change visual UI except adding `og.png` if you create it. Do not commit. Lint/typecheck pass.

## Done when

Inner pages have their own OG title/url; home title < 60 chars; geo is valid or gone; share image story is consistent (wide image or summary card).
