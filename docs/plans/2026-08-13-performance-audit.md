# Performance audit — 2026-08-13

## Re-audit (same day)

P-H1: logo is 512×512 via `next/image`; header/hero no preload. P-H2: slideshow mounts 1–2 slides. P-L1: `logo-ref.png` removed.

**Residual HIGH: 0.** Remaining P-M1 intro delay and P-M2 grain are accepted brand choices. CWV vs production URL still **manual**.

---

Kindergarten marketing site. Next/Image used for photos (prod optimizer). No Lighthouse against a served URL in this pass — CWV **manual**. GSAP + Motion on home. `prefers-reduced-motion` respected.

**Counts:** CRITICAL 0 · HIGH 2 · MEDIUM 3 · LOW 2

---

## HIGH

### P-H1 — Logo is a 2.2 MB PNG via raw `<img>`

`public/logo.png` ≈ 2262 KB. `src/components/Logo.tsx` bypasses `next/image`, sets `width={2000} height={2000}`, cache-busts `?v=3`.

Loaded with `fetchPriority="high"` in **three** places on the home page:

- `Header.tsx:100`
- `IntroLoader.tsx:88`
- `HomeHero.tsx:164` (displayed up to 176px)

This fights LCP and downloads megabytes for a ~48–176px mark. PNG alpha can stay with `next/image`.

### P-H2 — Hero slideshow puts four full-bleed images in the first viewport

`HeroSlideshow` maps all `heroSlides` with `fill`. Only index 0 has `priority`; the others are `opacity-0` but still on-screen, so the browser treats them as visible and fetches them immediately.

Mount current (and previous for crossfade) only, or `hidden`/`loading="lazy"` for non-visible slides.

---

## MEDIUM

### P-M1 — Intro overlay delays the real hero by 1.1s

`IntroLoader` 1100ms grape splash. Intentional, but it postpones LCP of the hero photo. Keep; do not also `priority` the header logo (P-H1). Optional: skip intro when `connection` is slow — not required.

### P-M2 — Full-viewport SVG `feTurbulence` grain

`.site-grain` (`globals.css`) is `position: fixed; inset: 0; z-index: 70` with a noise filter. Extra paint every frame. Keep look if cheap enough; consider a static PNG/webp tile instead of live `feTurbulence`, and hide on `prefers-reduced-motion` (animation already off).

### P-M3 — Three Google fonts

`layout.tsx`: Bricolage Grotesque, Figtree, IBM Plex Mono (only eyebrows / tiny labels). Mono could be `ui-monospace` to drop a family. Not a must if subset is small.

---

## LOW

### P-L1 — Unused `public/images/logo-ref.png` (~93 KB)

Dead asset.

### P-L2 — Heavy source JPGs in `public/images/activities/` (several ~2 MB)

`next/image` will resize in production (`sizes` already set). Compressing sources still helps first optimize and git. Optional `sharp` pass. `garden.jpg` 509 KB same story.

---

## Note

Activity corridor / why / garden images are below the fold and should lazy-load via `next/image` (no `priority`). Do not convert the whole gallery by hand if Image optimizer is on.

Lighthouse / CWV against production URL: **manual — user action required** at go-live.
