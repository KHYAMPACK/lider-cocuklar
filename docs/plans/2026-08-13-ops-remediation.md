# Ops remediation — 2026-08-13

## O-H1 — Noindex previews

`next.config.ts` already has `headers()`. For non-production Vercel:

If `process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"`, add `X-Robots-Tag: noindex, nofollow` on `/:path*`.

Keep existing CSP/HSTS/etc. Do not noindex when `VERCEL_ENV` is unset (local production build).

Read Next 16 headers docs if needed.

## O-M1 — README deploy section

Turkish or English matching the current README. Cover:

- Host: Vercel, production branch
- `npm run lint`, `typecheck`, `test`, `build` (CI on push/PR)
- Rollback: Vercel → Deployments → Promote previous
- Production URL: `https://denizlilidercocuklaranaokulu.com`

Do not invent credentials.

## O-M2

Do **not** add Sentry. One README line: after DNS, add an uptime check on the production URL. Leave error.tsx as-is.

## Constraints

Do not commit. Do not weaken CSP. Lint/typecheck pass.

## Done when

Preview deployments would send noindex; README explains Vercel deploy + rollback.
