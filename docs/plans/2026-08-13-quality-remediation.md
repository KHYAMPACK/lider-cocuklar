# Quality remediation — 2026-08-13

Critical first. No secrets in git.

## Q-H1 — IntroLoader lint + flash (do first)

Rewrite `src/components/IntroLoader.tsx` so it does **not** call `setState` synchronously inside `useEffect`.

- Read `node_modules/next/dist/docs/` if touching App Router conventions.
- Prefer `useSyncExternalStore` (or equivalent) to read `sessionStorage` for `lc-intro` without an effect-setState.
- Keep reduced-motion skip and empty `catch` for storage (Q-L4).
- Keep ~1.1s overlay for first visit in the tab, then persist `lc-intro`.
- `npm run lint` must pass.

## Q-H2 — CI

Add `.github/workflows/ci.yml` on push/PR:

1. `npm ci`
2. `npm run lint`
3. `npx tsc --noEmit` (add `"typecheck"` script — Q-L1)
4. `npm run build`

Node 20+. No deploy from this workflow (Vercel stays the host).

## Q-H3 — Contact form

`src/components/ContactForm.tsx`:

- Remove `noValidate` **or** implement real client validation (name + phone required, inline errors, `aria-invalid` / `role="alert"`).
- If `window.open` returns `null`, do **not** show success; show a fallback (`wa.me` link or “açılamadı, telefon/WhatsApp butonunu kullanın”).
- Do not set `"sent"` unless the window actually opened.

## Q-H4 — Valid lists

`ScrollReveal` must not wrap `<li>` in a `<div>`.

Options (pick one, apply both call sites):

- `as` prop (`div` | `li`) so `DayRhythm` / `EnrollmentSteps` render `<ol><li>`
- or stop wrapping; put `motion` on `motion.li`

Files: `src/components/ScrollReveal.tsx`, `src/components/LifeAtSchool.tsx` (~97, ~221).

Keep Title Case on headings. Do not restyle.

## Q-M1 — Minimal tests

Add Vitest (not Playwright unless already present). Cover:

- `whatsappLink()` default + custom text encoding (`src/lib/site.ts`)
- ContactForm: empty submit stays idle / shows errors; valid submit attempts open

Wire `npm test` into CI after Q-H2.

## Q-M2 — Turkish 404 / error

Read Next 16 docs: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/error.md` and not-found.

- `src/app/not-found.tsx` — Turkish, Title Case h1, link home + iletişim, reuse site chrome if layout already wraps it
- `src/app/error.tsx` — client component, reset + home

Match existing PageIntro / grape–foam look. Title Case on titles.

## Q-M3 — Dead code

- Delete `src/components/Stickers.tsx` if still unused
- Remove unused `photos.hero|about|hours|faq` and unused `programs` export
- Update any leftover imports

## Q-M4 — One GSAP register

Single client module (e.g. `src/lib/gsap.ts`) that registers plugins once; import it from `HomeHero` and `ActivityCorridor`. Keep `typeof window` guard.

## Q-L1 / Q-L3 (with the above)

- Add `"typecheck": "tsc --noEmit"` (with Q-H2)
- Gallery: import `photos` from `@/lib/site` instead of duplicating paths (`src/app/galeri/page.tsx`)

Skip Prettier, Husky, and splitting `LifeAtSchool.tsx` unless trivial.

## Done when

- `npm run lint` and `npx tsc --noEmit` pass
- Lists are valid `<ol><li>`
- Contact form cannot “succeed” empty or with a blocked popup
- CI workflow exists
- 404/error pages exist in Turkish
- Dead Stickers / unused photo keys gone
