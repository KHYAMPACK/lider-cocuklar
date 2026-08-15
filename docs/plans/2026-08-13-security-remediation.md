# Security remediation — 2026-08-13

No secrets to rotate.

## S-H1 — Headers (do first)

Edit `next.config.ts`. Read Next 16 docs under `node_modules/next/dist/docs/` for the current `headers` / `poweredByHeader` API before writing.

Add `headers()` for all routes (`/:path*`):

- `Content-Security-Policy` — default `'self'`; `object-src 'none'`; `base-uri 'self'`; `frame-ancestors 'none'`; `upgrade-insecure-requests`. Allow Google Maps embed (`frame-src` / `img-src` / `connect-src` as required for `maps.google.com` / `www.google.com` / gstatic). Inline styles are used throughout (`style={{}}` and CSS variables) so `style-src` needs `'self' 'unsafe-inline'`. Prefer avoiding `'unsafe-eval'` if the Next 16 production build does not need it; if build/runtime breaks, document why eval is required.
- `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options`: `nosniff`
- `Referrer-Policy`: `strict-origin-when-cross-origin`
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`
- `X-Frame-Options`: `DENY`

Also `poweredByHeader: false` (S-L2).

Keep `reactCompiler` and `turbopack.root`. Do not break `npm run build`.

## S-M1 — Remove Unsplash

Delete `images.remotePatterns` (or the whole `images` key if nothing remote remains). All photos are under `/public`.

## S-M2 — Iframe sandbox

`src/app/page.tsx` and `src/app/iletisim/page.tsx` map iframes: add `sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"`. Keep title, lazy, referrerPolicy.

Do not replace WhatsApp form with a server.

## S-L1 — JSON-LD escape

`src/components/JsonLd.tsx`: `JSON.stringify(data).replace(/</g, "\\u003c")` (or equivalent) before `dangerouslySetInnerHTML`.

## Done when

- Headers live in `next.config.ts`
- Unsplash pattern gone
- Both map iframes sandboxed
- JsonLd escapes `<`
- `npm run lint`, `typecheck`, `test`, and `build` pass
