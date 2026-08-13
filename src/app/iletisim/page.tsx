import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Lider Çocuklar Anaokulu iletişim: telefon, WhatsApp, e-posta ve Merkezefendi Yenişehir adresi.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <div>
      <PageIntro eyebrow="Yenişehir · Merkezefendi" title="İletişim">
        Telefon, WhatsApp veya form — kontenjan ve okul gezisi için yazın.
      </PageIntro>

      <div className="container-page py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <aside className="space-y-4">
            <div className="rounded-[20px] bg-[var(--foam)] p-6">
              <h2 className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--blush)]">
                Telefon
              </h2>
              <a href={`tel:${site.phoneTel}`} className="mt-2 block font-[family-name:var(--font-display)] text-2xl font-extrabold">
                {site.phoneDisplay}
              </a>
              <a href={whatsappLink()} className="btn btn-whatsapp mt-4 w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>

            <div className="rounded-[20px] bg-[var(--foam)] p-6">
              <h2 className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--blush)]">
                E-posta
              </h2>
              <a href={`mailto:${site.email}`} className="mt-2 block break-all font-semibold">
                {site.email}
              </a>
            </div>

            <div className="rounded-[20px] bg-[var(--foam)] p-6">
              <h2 className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--blush)]">
                Adres
              </h2>
              <p className="mt-2 text-[var(--muted)]">{site.address.full}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-bold text-[var(--grape)] hover:text-[var(--blush)]"
              >
                Haritada aç
              </a>
              <ul className="mt-4 space-y-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.hours}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="rounded-[22px] bg-[var(--foam)] p-6 md:p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold">Mesaj formu</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Gönderince WhatsApp açılır; mesajınız oraya taşınır.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[22px]">
          <iframe
            title="Lider Çocuklar Anaokulu harita"
            src={site.mapsEmbedUrl}
            className="h-[260px] w-full border-0 sm:h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
