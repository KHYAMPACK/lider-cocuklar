import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActivityCorridor } from "@/components/ActivityCorridor";
import { ExperiencedTeam } from "@/components/ExperiencedTeam";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GardenPlay } from "@/components/GardenPlay";
import { HomeHero } from "@/components/HomeHero";
import { SchoolFrames } from "@/components/SchoolFrames";
import {
  AgeGroups,
  BranchTeachers,
  DayRhythm,
  EnrollmentSteps,
  Nutrition,
} from "@/components/LifeAtSchool";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhyIcon } from "@/components/WhyIcon";
import { homeTitle, pageMetadata } from "@/lib/seo";
import {
  aboutChecks,
  photos,
  site,
  whyCards,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <ExperiencedTeam />

      <SchoolFrames />

      <ActivityCorridor />

      <GardenPlay />

      <AgeGroups />

      <section className="py-24 md:py-32">
        <div className="container-page">
          <ScrollReveal>
            <p className="eyebrow">Neden burada</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
              Güven, Oyun Ve Keşif Aynı Çatı Altında.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {whyCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-[22px] bg-[var(--foam)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width:640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-6">
                      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-[var(--foam)] text-[var(--grape)]">
                        <WhyIcon name={card.icon} />
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold">{card.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{card.text}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foam)] py-24 md:py-32">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Başlangıç</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
              Çocuğunuzun Hayatındaki En İyi İlk Adım.
            </h2>
            <ul className="mt-8 space-y-4">
              {aboutChecks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-semibold text-[var(--ink)]">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--star)] text-[var(--ink)]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <Image src={photos.wall} alt="Lider Çocuklar marka duvarı" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BranchTeachers />

      <DayRhythm />

      <Nutrition />

      <EnrollmentSteps compact />

      <section className="py-24 md:py-32">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative hidden aspect-square overflow-hidden rounded-[22px] lg:block">
              <Image src={photos.classroom} alt="Lider Çocuklar sınıfı" fill sizes="420px" className="object-cover" />
            </div>
          </ScrollReveal>
          <div>
            <p className="eyebrow">Sorular</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
              Lider Çocuklar Hakkında
            </h2>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foam)] py-24 md:py-32">
        <div className="container-page">
          <ScrollReveal className="text-center">
            <p className="eyebrow">Konum</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold md:text-5xl">Bize Ulaşın</h2>
            <div className="mt-5 flex flex-col items-center gap-2 text-sm font-semibold sm:flex-row sm:justify-center sm:gap-3">
              <a href={`tel:${site.phoneTel}`} className="hover:text-[var(--blush)]">
                {site.phoneDisplay}
              </a>
              <span className="hidden text-[var(--line)] sm:inline">·</span>
              <a href={`mailto:${site.email}`} className="break-all hover:text-[var(--blush)]">
                {site.email}
              </a>
            </div>
            <Link href="/iletisim" className="btn btn-coral mt-7">
              İletişim bilgileri
            </Link>
          </ScrollReveal>

          <div className="mt-10 overflow-hidden rounded-[22px]">
            <iframe
              title="Lider Çocuklar Anaokulu harita"
              src={site.mapsEmbedUrl}
              className="h-[260px] w-full border-0 sm:h-[360px] md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              allowFullScreen
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[var(--grape)] hover:text-[var(--blush)]"
            >
              Google’da aç
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
