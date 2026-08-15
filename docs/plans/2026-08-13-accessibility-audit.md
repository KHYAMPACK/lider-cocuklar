# Accessibility audit — 2026-08-13

## Re-audit (same day)

A-H1–A-H4 and A-M1–A-M3, A-L1 addressed: skip link, intro `inert`, h1-before-h2, slideshow pause, mobile Escape/trap, FAQ `aria-controls`, header `inert` when off-screen.

**Residual HIGH: 0.**

---

Turkish kindergarten marketing site. `eslint-config-next` includes jsx-a11y; `npm run lint` currently passes. No axe/Lighthouse CI. `lang="tr"`. Landmarks: `header`, `nav`, `main`, `footer`. Inputs are labeled. `prefers-reduced-motion` is handled in GSAP, IntroLoader, ScrollReveal, HomeHero interval, and `globals.css`. `:focus-visible` star outline exists globally.

**Counts:** CRITICAL 0 · HIGH 4 · MEDIUM 3 · LOW 2

---

## HIGH

### A-H1 — No skip link

`src/app/layout.tsx` has no “içeriğe atla” link. Keyboard users must tab through the whole header (and mobile toggle) on every page. `<main>` has no `id`.

### A-H2 — Intro overlay does not inert the page

`src/components/IntroLoader.tsx` is `aria-hidden` but sits on top of Header/main for ~1.1s. Focus can still move into controls underneath. Overlay is not `role="dialog"` / `aria-modal`. When visible, the rest of the document should be `inert` (or equivalent) and scrolling locked.

### A-H3 — Heading order: `h2` before `h1` on the home hero

`src/components/HomeHero.tsx`: in-flow “about” block (`h2` ~line 128) is **before** the overlay `h1` (~line 169) in the DOM. Overlay is `position: absolute`, so swapping DOM order should keep the visual (verify GSAP pin). First heading in the document must be the `h1`.

### A-H4 — Auto slideshow with no pause

`HeroSlideshow` (`HomeHero.tsx:21-26`) rotates every 4.2s indefinitely. No pause/stop control. Reduced motion already skips the interval. WCAG 2.2.2: provide pause (or stop rotating when not in view).

---

## MEDIUM

### A-M1 — Mobile nav: no Escape, no focus wrap, body still scrolls

`src/components/Header.tsx` hamburger. `aria-expanded` / `aria-controls` exist. Missing: Escape closes; focus cycle inside `#mobile-nav` while open; `overflow: hidden` on `body` while open.

### A-M2 — FAQ accordion incomplete names

`src/components/FaqAccordion.tsx`: `aria-expanded` only. Panel needs `id` + `aria-controls`. Chevron SVG should be `aria-hidden`. SSS page `details/summary` is native (OK) but `list-none` on summary may hide the disclosure triangle — keep keyboard operability.

### A-M3 — Hidden header still in tab order

Header `translate-y-full` when scrolling down (`Header.tsx:34`) does not use `visibility`/`inert`. Keyboard can focus off-screen links. When `hidden`, inert the bar or don’t hide from keyboard users (only hide for pointer scroll).

---

## LOW

### A-L1 — Form `outline-none` + `focus:ring-2`

`ContactForm` inputs use `outline-none focus:ring-2`. Prefer `focus-visible:ring-2` so the global `:focus-visible` star outline is not fighting mouse users. Keep a visible keyboard ring.

### A-L2 — Contrast watch

`--muted` `#5c5270` on `--paper` `#f3ecff`, and `text-white/70` on grape, are likely AA for body but tight. Do not restyle the brand unless a pair clearly fails; if you check, cite the pair.

---

## Already OK

Labels on form fields; `html lang="tr"`; reduced motion; iframe titles; decorative `alt=""` on stickers; Logo alt; maps `title`.
