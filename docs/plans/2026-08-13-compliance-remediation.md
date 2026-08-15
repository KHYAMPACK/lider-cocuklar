# Compliance remediation — 2026-08-13

Not legal advice. Match **actual** collection: WhatsApp form (name, phone, optional child age, message). No server store, no analytics.

## C-H1 — Expand `src/app/gizlilik/page.tsx`

Keep PageIntro Title Case (`Gizlilik Politikası`). Section headings Title Case. Body sentence case.

Use `site.name`, `site.address.full`, `site.email`, `site.phoneDisplay` — do not invent a TC/VKN.

Cover, in Turkish, in this order (or equivalent):

1. **Veri Sorumlusu** — school name, address, email/phone
2. **Toplanan Bilgiler** — form: ad, telefon, çocuk yaşı (opsiyonel), mesaj. Site form posts are not saved on our servers.
3. **Amaç Ve Hukuki Sebep** — randevu / bilgi talebi (parent request)
4. **WhatsApp** — submit opens WhatsApp; Meta/WhatsApp processes the thread on the school number. Link behavior already described on iletişim.
5. **Harita** — Google Maps embed on anasayfa and iletişim
6. **Teknik Kayıt** — `sessionStorage` intro flag only; no advertising cookies
7. **Saklama** — website does not keep a copy; WhatsApp history lives in the school’s WhatsApp until deleted in the normal course of answering parents
8. **Haklar** — KVKK: öğrenme, düzeltme, silme, itiraz; başvurular email; şikayet: Kişisel Verileri Koruma Kurulu
9. **Çocuklar** — form is for parents/guardians, not for children to fill
10. **Fotoğraflar** — site photos of school life are used with family permission; takedown via email (C-H2)

Keep a contact section. Do not add fake cookie banners or analytics.

## C-H2 — Photo line only in code

The photo-consent **sentence** goes in Gizlilik (above). Galeri may add one muted sentence under the intro: photos used with permission, contact for removal.

**manual — user action required (do not mark done in code):** operator confirms signed photo releases for any identifiable children before go-live.

## C-M1 — Link privacy at the form

`src/app/iletisim/page.tsx` and/or `src/components/ContactForm.tsx`: after the submit button area, sentence-case text with a `Link` to `/gizlilik` (e.g. “Kişisel veriler gizlilik metnine göre WhatsApp üzerinden iletilir.”).

Do not change form validation.

## C-L1

Optional one-liner in Gizlilik: photos belong to the school / used with permission. Skip extra footer clutter if C-H2 text is enough.

## Constraints

- Next.js 16 docs if needed. Title Case on titles. No new tracking. No ToS page. Do not commit.
- `npm run lint` / `typecheck` must still pass.

## Done when

- Gizlilik names controller, WhatsApp, Maps, sessionStorage, rights, children, photos
- İletişim form links to `/gizlilik`
- C-H2 user confirmation left as a note in the audit, not a fake checkbox in the UI
