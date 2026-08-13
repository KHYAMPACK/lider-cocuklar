import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { aboutIntro, aboutMore, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Özel Denizli Lider Çocuklar Anaokulu: M.E.B ve İSO9001 uyumlu, 3–6 yaşa özel, oyun ve atölye odaklı okul öncesi eğitim.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro eyebrow="Denizli · Yenişehir" title="Hakkımızda">
        {aboutIntro}
      </PageIntro>

      <div className="container-page py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src="/images/brand-wall.png"
              alt="Lider Çocuklar Anaokulu"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[0.95] md:text-4xl">
              {aboutMore.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--muted)]">
              {aboutMore.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold text-[var(--ink)]">Adres: {site.address.full}</p>
            <Link href="/iletisim" className="btn btn-coral mt-7 w-full sm:w-auto">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
