# Quality audit — 2026-08-13

## Re-audit (same day)

Agents fixed Q-H1–Q-H4, Q-M1–Q-M4, Q-L1 (script), Q-L3. `Stickers.tsx` was already gone on re-check.

Verified: `npm run lint`, `npm run typecheck`, `npm test` (6 passing). Lists are `<ol><li>`. Contact form no longer succeeds empty or blocked. CI workflow present. Turkish 404/error pages present. GSAP register centralized.

**Open:** Q-L1 remainder (Prettier/Husky — skipped). Q-L2 (`LifeAtSchool.tsx` split — skipped).

**Residual HIGH: 0.** Quality pass is clean enough to continue.

---

# Original findings

Kindergarten marketing site (Next.js 16 App Router, TypeScript, Tailwind). Pre-launch. No prior `docs/plans/` exclusions.

**Counts:** CRITICAL 0 · HIGH 4 · MEDIUM 4 · LOW 4

Commands: `npx tsc --noEmit` passed. `npx eslint . --max-warnings 0` failed (1 error). No test runner. No `.github/workflows`. No `.husky`. No Prettier config.

---

## HIGH

### Q-H1 — Lint does not pass

`src/components/IntroLoader.tsx:21` — `react-hooks/set-state-in-effect`

```21:21:src/components/IntroLoader.tsx
    setVisible(true);
```

`npm run lint` exits 1. Intro also starts `visible=false` then flips true in an effect, so first-visit users can flash empty before the overlay. Returning visitors are fine (sessionStorage short-circuit).

### Q-H2 — Deploy-blind: no CI

No `.github/` workflows. Vercel can build on push, but lint/typecheck never gate deploy. Combined with Q-H1, a red lint suite would still ship if someone ignores local lint.

### Q-H3 — Contact form accepts empty submits and always reports success

`src/components/ContactForm.tsx:32` uses `noValidate`, so `required` is inert. Submit always `window.open`s WhatsApp and sets `status` to `"sent"`.

```9:28:src/components/ContactForm.tsx
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ...
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }
```

Popup blockers return `null`; the UI still says “WhatsApp açıldı.” Empty name/phone still open a nearly blank WhatsApp draft.

### Q-H4 — Invalid list markup (`<ol>` → `<div>` → `<li>`)

`ScrollReveal` always renders a `div`. Used as a direct child of `<ol>` in:

- `src/components/LifeAtSchool.tsx:97-98` (`DayRhythm`)
- `src/components/LifeAtSchool.tsx:221-222` (`EnrollmentSteps`)

Invalid HTML breaks list semantics, CSS counters, and screen-reader numbering.

---

## MEDIUM

### Q-M1 — No tests

Zero `*.test.*` / `*.spec.*`, no Vitest/Playwright/Jest. `whatsappLink` and the contact form have no automated coverage. Skill MUST-later: tests + CI green.

### Q-M2 — No custom error / 404 pages

No `src/app/not-found.tsx`, `error.tsx`, or `global-error.tsx`. Unknown URLs get the default Next.js English 404 on a Turkish kindergarten site.

### Q-M3 — Dead code

- `src/components/Stickers.tsx` — never imported
- `photos.hero`, `photos.about`, `photos.hours`, `photos.faq` in `src/lib/site.ts:355-359` — unused
- `programs` marked `@deprecated` (`src/lib/site.ts:348`) — unused

### Q-M4 — Duplicate GSAP plugin registration

`gsap.registerPlugin(useGSAP, ScrollTrigger)` runs in both `HomeHero.tsx:13-15` and `ActivityCorridor.tsx:10-12`. Easy to drift; should live in one client bootstrap.

---

## LOW

### Q-L1 — No formatter, typecheck script, or pre-commit hooks

`package.json` has `lint` only. No Prettier, no `"typecheck": "tsc --noEmit"`, no Husky. TypeScript `strict` is on.

### Q-L2 — `LifeAtSchool.tsx` is a grab-bag (~248 lines, 6 exports)

Works, but Garden / ages / rhythm / branş / nutrition / kayıt are one module.

### Q-L3 — Gallery duplicates photo paths

`src/app/galeri/page.tsx:11-16` hardcodes paths already in `photos` (`src/lib/site.ts`). Drift risk.

### Q-L4 — IntroLoader swallows `sessionStorage` errors

`src/components/IntroLoader.tsx:18-19` and `:26-28` empty `catch`. Acceptable for private-mode; keep when rewriting Q-H1.

---

## Infrastructure snapshot

| Check | Result |
|---|---|
| Test runner / count | none / 0 |
| Coverage | n/a |
| Linter | eslint-config-next (core-web-vitals + typescript) — **failing** |
| Formatter | none |
| Typecheck | `strict: true` — `tsc --noEmit` pass |
| Pre-commit | none |
| CI | none |
| SAST / dep scan | none (Security audit) |
