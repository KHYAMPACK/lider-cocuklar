import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${site.shortName} web sitesi gizlilik ve kişisel verilerin korunması metni.`,
  alternates: { canonical: "/gizlilik" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageIntro eyebrow="KVKK" title="Gizlilik politikası" />

      <div className="container-page max-w-3xl py-20 md:py-28">
        <div className="space-y-8 text-base leading-relaxed text-[var(--muted)]">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
              1. Toplanan bilgiler
            </h2>
            <p className="mt-3">
              İletişim formu veya WhatsApp yönlendirmesi yoluyla ad, telefon, çocuk yaşı ve mesaj içeriği gibi sizin
              paylaştığınız bilgiler alınabilir.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
              2. Kullanım amacı
            </h2>
            <p className="mt-3">
              Bilgiler yalnızca okul hakkında bilgilendirme ve iletişim için kullanılır. Pazarlama amacıyla üçüncü
              taraflara satılmaz.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
              3. Çerezler ve ölçüm
            </h2>
            <p className="mt-3">
              Site performans ve güvenlik için temel teknik kayıtlar tutabilir. Analytics veya reklam araçları
              eklendiğinde bu sayfa güncellenir.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">4. İletişim</h2>
            <p className="mt-3">
              Talepleriniz için{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-[var(--grape)]">
                {site.email}
              </a>{" "}
              veya{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--grape)]">
                {site.phoneDisplay}
              </a>
              . Adres: {site.address.full}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
