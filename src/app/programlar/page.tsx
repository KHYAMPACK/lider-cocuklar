import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BranchTeachers, DayRhythm } from "@/components/LifeAtSchool";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { allServices, site, upcomingActivities } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Hizmetlerimiz",
  description:
    "Atölye bilim, sanat, dil, masal, matematik, lider park, spor salonu ve yemekhane — Lider Çocuklar Anaokulu hizmetleri.",
  path: "/programlar",
});

const toneClass = {
  grape: "tone-grape",
  gold: "tone-gold",
  blush: "tone-blush",
  pool: "tone-pool",
} as const;

export default function ServicesPage() {
  return (
    <div>
      <PageIntro eyebrow="Atölye · Oyun · Yaşam" title="Hizmetlerimiz">
        Bilim, sanat, dil ve meslek köşeleri; branş öğretmenleri, günlük ritim ve yeni dönemde P4C, Orff, satranç ve maker atölyeleri.
      </PageIntro>

      <BranchTeachers />
      <DayRhythm />

      <div className="container-page py-20 md:py-28">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl">Okuldaki Alanlar</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {allServices.map((service) => (
            <article key={service.slug} className="overflow-hidden rounded-[20px] bg-[var(--foam)]">
              <div className="relative aspect-square">
                <Image src={service.image} alt={service.title} fill sizes="(max-width:640px) 45vw, 240px" className="object-cover" />
              </div>
              <h3 className="px-3 py-3 font-[family-name:var(--font-display)] text-sm font-extrabold text-[var(--grape)] sm:px-4 sm:text-lg">
                {service.title}
              </h3>
            </article>
          ))}
        </div>

        <h2 className="mt-16 font-[family-name:var(--font-display)] text-3xl font-extrabold md:mt-20 md:text-4xl">
          Yeni Atölyeler
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Yakında günlük programa girecek etkinlikler — düşünme, ritim, el işi ve beden.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingActivities.map((activity) => (
            <article
              key={activity.slug}
              className={`${toneClass[activity.tone]} overflow-hidden rounded-[20px]`}
              style={{ background: "var(--tone)", color: "var(--tone-ink)" }}
            >
              <div className="relative aspect-[16/10]">
                <Image src={activity.image} alt={activity.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.2em] opacity-80">
                  {activity.kicker}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold leading-tight">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">{activity.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[22px] bg-[var(--grape)] px-6 py-8 text-[var(--foam)] md:flex-row md:items-center">
          <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold">Kontenjan Ve Gezi İçin Yazın.</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={`tel:${site.phoneTel}`} className="btn btn-secondary">
              {site.phoneDisplay}
            </a>
            <Link href="/iletisim" className="btn btn-star">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
