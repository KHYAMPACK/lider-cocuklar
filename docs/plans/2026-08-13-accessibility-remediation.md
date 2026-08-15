# Accessibility remediation — 2026-08-13

Do not restyle the brand. Title Case on headings. Turkish UI strings.

## A-H1 — Skip link

`src/app/layout.tsx`:

- Add `id="icerik"` (or `id="main"`) on `<main>`
- First focusable in `<body>`: link “İçeriğe atla” → `#icerik`
- Visually hidden until `:focus-visible` (star outline already global). Place it above the header.

## A-H2 — Intro inert

When IntroLoader is visible:

- Set `inert` on the rest of the page (wrap Header/main/Footer/ScrollToTop in a container IntroLoader can mark inert, or `useEffect` query)
- `document.body.style.overflow = "hidden"` while visible, restore on hide
- Keep reduced-motion / already-seen skip

Do not leave `aria-hidden` on a focusable overlay.

## A-H3 — h1 first

`src/components/HomeHero.tsx`: overlay block (h1) must come **before** the about `h2` in the DOM. Overlay is already absolute — swap the two wrappers, then **verify** GSAP pin/scrub still works (left/right/overlay refs). Do not change copy.

## A-H4 — Pause slideshow

`HeroSlideshow`: pause/play control (Turkish, sentence case, `aria-pressed` or text “Duraklat” / “Oynat”). Pause when `document.hidden` optional. Keep reduced-motion = no interval.

## A-M1 — Mobile menu

`Header.tsx`: Escape closes; while open, trap focus inside the header/menu; lock body scroll; restore focus to the toggle on close.

## A-M2 — FaqAccordion

Each button `aria-controls={panelId}`; panel `id` + `role="region"` (or `hidden` when closed). Chevron `aria-hidden`.

## A-M3 — Scroll-hidden header

When `hidden` is true, also set `inert` on the `<header>` **unless** the mobile menu is open (already forces `hidden` false). Alternatively, don’t hide the header for `focus-within`.

## A-L1

ContactForm: `focus-visible:ring-2` instead of `focus:ring-2` if it doesn’t regress keyboard visibility.

Skip A-L2 unless you have a failing pair.

## Constraints

Next.js 16 docs if needed. No visual redesign. Do not commit. Lint/typecheck must pass.

## Done when

Skip link works, intro doesn’t steal/lose focus into the page behind, home h1 precedes h2, slideshow can pause, mobile menu is keyboard-dismissible.
