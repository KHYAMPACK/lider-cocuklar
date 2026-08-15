# Security audit — 2026-08-13

## Re-audit (same day)

S-H1, S-M1, S-M2, S-L1, S-L2 fixed in `next.config.ts`, map iframes, JsonLd. Production CSP has no `'unsafe-eval'`. Unsplash pattern removed. Residual: WhatsApp `?text=` PII (accepted; Referrer-Policy mitigates).

**Residual HIGH: 0.**

---

Kindergarten marketing site. No accounts, no API routes, no database, no LLM, no payments. Contact is WhatsApp deep-link only. `npm audit`: 0 vulnerabilities. TypeScript `strict`. Quality re-audit already green.

**Counts:** CRITICAL 0 · HIGH 1 · MEDIUM 2 · LOW 2

Skipped as N/A: Auth, Authz, Crypto (no passwords/tokens), LLM, secrets in git / `.env` (gitignore covers `.env*`, none committed).

---

## HIGH

### S-H1 — No security headers in the app config

`next.config.ts` has no `headers()`, `poweredByHeader`, or CSP. A public site should send at least:

- `Content-Security-Policy` (with `frame-ancestors 'none'`)
- `Strict-Transport-Security` (Vercel adds HTTPS; still set HSTS in app headers)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy` (also limits leakage of WhatsApp `?text=` URLs — see S-M2)
- `Permissions-Policy` (camera/mic/geo off)
- `X-Frame-Options: DENY` (backup for older browsers)

Google Maps embeds (`site.mapsEmbedUrl`) must remain allowed in `frame-src`. Next/font is self-hosted; GSAP/Motion are bundled.

```3:16:next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
```

---

## MEDIUM

### S-M1 — Unused Unsplash `remotePatterns`

`images.unsplash.com` is allowed for `next/image` but **no source uses Unsplash**. That widens the image optimizer fetch surface. Remove the pattern until a real remote host is needed.

### S-M2 — Contact PII in query strings

`ContactForm` puts name, phone, child age, and message into `https://wa.me/...?text=`. Expected for WhatsApp-only (no server). Residual: referrer leakage if the new tab navigates. Mitigate with `Referrer-Policy` (S-H1). Do **not** add a backend inbox in this pass.

Maps iframes (`src/app/page.tsx:184`, `src/app/iletisim/page.tsx:78`) have `referrerPolicy` but no `sandbox`. Add a tight sandbox that still lets the embed work (`allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox`).

---

## LOW

### S-L1 — JSON-LD via `dangerouslySetInnerHTML`

`src/components/JsonLd.tsx:43` — `JSON.stringify` of static `site` data (no user input). Hardening: replace `<` with `\u003c` before inject.

### S-L2 — Default `X-Powered-By`

Next may still send `X-Powered-By`. Set `poweredByHeader: false` in `next.config.ts`.

---

## Notes (not findings)

- `dangerouslySetInnerHTML` only in JsonLd; data is compile-time constants.
- `target="_blank"` links already use `rel="noopener noreferrer"`.
- `error.tsx` logs `console.error`; UI does not print the stack.
- No CORS `*` (no API).
- Lockfile present; `npm audit` clean.
