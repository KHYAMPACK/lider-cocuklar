# Compliance audit — 2026-08-13

## Re-audit (same day)

C-H1, C-M1, C-L1, and on-site C-H2 text are in Gizlilik, ContactForm, Galeri.

**Residual HIGH:** C-H2 **manual — user action required** — confirm signed photo releases for identifiable children before go-live. Not a code fix.

**Code HIGH: 0.**

---

Not legal advice. Turkish kindergarten website (Denizli). Audience: parents. Contact form sends name, phone, child age, message to WhatsApp. No accounts, payments, analytics, or app stores.

**Counts:** CRITICAL 0 · HIGH 2 · MEDIUM 1 · LOW 1

Skipped: ToS/EULA (no accounts, binaries, or payments). PCI/refunds/tax. Cookie banner (no non-essential cookies/scripts; intro uses `sessionStorage` only). US COPPA as a US-kid-directed service (site is parent-facing TR school). Marketplace rules. AI disclosure.

---

## HIGH

### C-H1 — Privacy page does not match KVKK-shaped reality

`src/app/gizlilik/page.tsx` is four short sections. It does **not** state:

- Data controller (school legal name, address, email) — `site.name` / `site.address` / `site.email` already exist
- Legal basis (parent request / pre-contract enquiry)
- That WhatsApp (Meta) is the channel: message leaves the website and is processed on WhatsApp
- Google Maps embed as a third-party map provider
- Retention (WhatsApp thread on the school’s phone; site does not store form posts)
- Data-subject rights (access, correction, deletion, complaint to KVKK)
- Children: parents submit; the site is not for children to fill in
- `sessionStorage` key `lc-intro` (intro overlay) as a technical store

Policy is linked from the footer only (`src/components/Footer.tsx:46`), not next to the form that actually collects data.

### C-H2 — Child photos on a public site — consent not stated

`public/images/garden.jpg` and gallery/classroom photos may show children. Publishing minors’ images needs parental consent. **manual — user action required:** school must confirm releases exist.

On-site: add a short Gizlilik (and optionally Galeri) statement that photos are published with family permission and can be taken down via the contact email. Do not invent a legal opinion.

---

## MEDIUM

### C-M1 — Form does not point to Gizlilik

`src/app/iletisim/page.tsx:70` says WhatsApp opens, but there is no link to `/gizlilik`. ContactForm has no privacy note. Add a sentence-case line + link under the form (and keep the existing WhatsApp sentence).

---

## LOW

### C-L1 — Footer copyright exists; no image credits line

Original school photos (no Unsplash in use). Optional: “Fotoğraflar okula aittir” on Gizlilik or footer. Not required if C-H2 text covers photos.

---

## Cookie / processors snapshot

| Store / third party | Essential? | Disclosed today? |
|---|---|---|
| `sessionStorage` `lc-intro` | yes (intro once per tab) | no |
| WhatsApp / wa.me | user-initiated contact | partial (form copy only) |
| Google Maps iframe | map UX | no |
| Analytics / ads | none | page says “if added, we will update” — OK |
