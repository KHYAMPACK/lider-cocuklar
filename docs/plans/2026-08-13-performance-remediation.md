# Performance remediation — 2026-08-13

Do not restyle. Keep PNG transparency for the logo.

## P-H1 — Logo pipeline

`src/components/Logo.tsx`:

- Use `next/image` (read Next 16 image docs in `node_modules/next/dist/docs/`).
- Display sizes stay as className (h-10 … h-44). Set `sizes` accordingly (e.g. `(max-width:640px) 80px, 176px`).
- Drop `?v=3` cache-bust if the optimizer URL is unique.
- **`priority` only when the caller passes it** — but callers must stop marking Header logo as priority. Header: `priority={false}`. IntroLoader may keep priority (short overlay). HomeHero logo: **no** priority (hero photo is LCP).
- Optionally generate a ~384–512px PNG from `logo.png` with sharp so the source isn’t 2000² / 2.2MB. Keep alpha.

## P-H2 — Slideshow fetch

`src/components/HomeHero.tsx` `HeroSlideshow`:

- Only mount the active slide and the previous (for the 1s fade), **or** keep all in DOM but `priority` solely on index 0 and `hidden` + not `fill` fetching for others (prefer not rendering off-slide images).
- Crossfade must still work.

## P-M2 — Grain (lightweight)

Replace live `feTurbulence` with a small repeating PNG/SVG noise tile if easy; or `will-change: auto` and `pointer-events: none` already set. If you keep the filter, that’s OK if P-H1/H2 are done. Hide grain on `prefers-reduced-motion` (already kills animation).

## P-M3 / P-L1 / P-L2

- P-M3: optional — switch eyebrow/mono to `ui-monospace` and remove IBM Plex Mono **only if** look stays close.
- P-L1: delete `public/images/logo-ref.png` if unused (grep first).
- P-L2: optional compress of 2MB activity JPGs; do not spend the whole task on it.

## Constraints

Next 16 image docs. No visual redesign. Do not commit. Lint/typecheck/tests pass.

## Done when

Logo is not a 2.2MB high-priority `<img>` on every header. Hero does not eagerly fetch all four slides. `npm run lint` / `typecheck` / `test` pass.
