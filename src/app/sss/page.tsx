import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "Lider Çocuklar Anaokulu SSS: yaş grubu, günlük program, yemek ve adres.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  return (
    <div>
      <PageIntro eyebrow="Bilgi" title="Sık sorulan sorular">
        Yaş grubu, adres, yemek ve eğitim yaklaşımı.
      </PageIntro>

      <div className="container-page max-w-3xl py-20 md:py-28">
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-[16px] bg-[var(--foam)] px-5 py-4 open:bg-[var(--grape)] open:text-white">
              <summary className="cursor-pointer list-none text-sm font-bold sm:text-base">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] group-open:text-white/80">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${site.phoneTel}`} className="btn btn-secondary w-full sm:w-auto">
            {site.phoneDisplay}
          </a>
          <Link href="/iletisim" className="btn btn-coral w-full sm:w-auto">
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </div>
  );
}
