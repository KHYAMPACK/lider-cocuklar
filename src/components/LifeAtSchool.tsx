import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ageGroups,
  branchTeachers,
  dayRhythm,
  enrollment,
  gardenPlay,
  nutrition,
  photos,
} from "@/lib/site";

const stepTone = {
  grape: "bg-[var(--grape)] text-white",
  pool: "bg-[var(--pool)] text-white",
  gold: "bg-[var(--star)] text-[var(--ink)]",
  blush: "bg-[var(--blush)] text-white",
} as const;

export function GardenPlay() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p className="eyebrow">{gardenPlay.eyebrow}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
            Güvenli Bahçede{" "}
            <span className="text-[var(--blush)]">{gardenPlay.accent}</span>
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {gardenPlay.paragraphs.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={photos.garden}
              alt="Çocuklar bahçede oynuyor"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function AgeGroups() {
  return (
    <section className="bg-[var(--foam)] py-24 md:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow">{ageGroups.eyebrow}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
            {ageGroups.title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-[var(--muted)] md:text-lg">{ageGroups.intro}</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {ageGroups.bands.map((band, i) => (
            <ScrollReveal key={band.range} delay={i * 0.06}>
              <article className="h-full rounded-[22px] bg-[var(--paper)] p-6 md:p-7">
                <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--blush)]">
                  {band.range}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink)]">{band.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DayRhythm() {
  return (
    <section className="relative overflow-hidden bg-[var(--grape)] py-24 text-[var(--foam)] md:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[var(--star)]">
            {dayRhythm.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
            {dayRhythm.title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">{dayRhythm.intro}</p>
        </ScrollReveal>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {dayRhythm.steps.map((step, i) => (
            <ScrollReveal
              key={step.title}
              as="li"
              delay={i * 0.04}
              className="flex h-full flex-col rounded-[20px] bg-white/8 p-5 ring-1 ring-white/12"
            >
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-[family-name:var(--font-mono)] text-xs font-medium ${stepTone[step.tone]}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {step.time ? (
                <p className="mt-5 font-[family-name:var(--font-mono)] text-sm tracking-tight text-[var(--star)]">
                  {step.time}
                </p>
              ) : (
                <p className="mt-5 font-[family-name:var(--font-mono)] text-sm tracking-tight text-white/50">
                  Öğünler
                </p>
              )}
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{step.detail}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BranchTeachers() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow">{branchTeachers.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
            {branchTeachers.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{branchTeachers.intro}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="relative mt-10 aspect-[21/9] min-h-48 overflow-hidden rounded-[22px]">
            <Image
              src={photos.classroom}
              alt="Branş ve atölye zamanı"
              fill
              sizes="(max-width:1024px) 100vw, 74rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--grape)]/45 to-[var(--blush)]/25" />
          </div>
        </ScrollReveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {branchTeachers.subjects.map((subject, i) => (
            <ScrollReveal key={subject.title} delay={i * 0.03}>
              <article className="h-full rounded-[20px] bg-[var(--foam)] p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--grape)]">
                  {subject.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{subject.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Nutrition() {
  return (
    <section id="beslenme" className="bg-[var(--foam)] py-24 md:py-32">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <Image
              src={photos.dining}
              alt="Lider Çocuklar yemek salonu"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <div>
          <ScrollReveal>
            <p className="eyebrow">{nutrition.eyebrow}</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
              {nutrition.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">{nutrition.intro}</p>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {nutrition.points.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.05}>
                <article>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-extrabold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{point.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnrollmentSteps({ compact = false }: { compact?: boolean }) {
  return (
    <section id="kayit" className={compact ? "py-24 md:py-32" : "mt-16"}>
      <div className={compact ? "container-page" : ""}>
        <ScrollReveal>
          <p className="eyebrow">{enrollment.eyebrow}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
            {enrollment.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] md:text-lg">{enrollment.intro}</p>
        </ScrollReveal>

        <ol className="mt-10 space-y-0">
          {enrollment.steps.map((step, i) => (
            <ScrollReveal
              key={step.n}
              as="li"
              delay={i * 0.04}
              className="grid gap-4 border-t border-[var(--line)] py-7 md:grid-cols-[5.5rem_1fr] md:gap-8"
            >
              <span className="font-[family-name:var(--font-mono)] text-sm tracking-[0.16em] text-[var(--blush)]">
                {step.n}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-extrabold leading-snug text-[var(--grape)] md:text-3xl">
            {enrollment.motto}
          </p>
          {compact ? (
            <Link href="/iletisim" className="btn btn-plum mt-8">
              Randevu al
            </Link>
          ) : null}
        </ScrollReveal>
      </div>
    </section>
  );
}
