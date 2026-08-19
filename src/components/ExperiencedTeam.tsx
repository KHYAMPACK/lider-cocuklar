import { ScrollReveal } from "@/components/ScrollReveal";
import { experiencedTeam } from "@/lib/site";

const pillarTone = {
  grape: "bg-[var(--grape)] text-white",
  blush: "bg-[var(--blush)] text-white",
  gold: "bg-[var(--star)] text-[var(--ink)]",
} as const;

export function ExperiencedTeam() {
  const { eyebrow, title, accent, intro, quote, pillars } = experiencedTeam;
  const [beforeAccent, afterAccent] = title.split(accent);

  return (
    <section className="bg-[var(--foam)] py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
              {beforeAccent}
              <span className="text-[var(--blush)]">{accent}</span>
              {afterAccent}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{intro}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="max-w-sm font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[0.95] text-[var(--grape)] md:text-4xl lg:text-right">
              {quote}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 flex flex-col gap-3 md:flex-row md:gap-0">
          {pillars.map((pillar, i) => (
            <ScrollReveal
              key={pillar.title}
              delay={i * 0.06}
              className="relative md:min-w-0 md:flex-1 md:-ml-5 md:first:ml-0 md:hover:z-10"
            >
              <article className={`h-full rounded-[22px] p-6 md:min-h-[15.5rem] md:p-8 ${pillarTone[pillar.tone]}`}>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold leading-[0.95] md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed opacity-90 md:text-base">{pillar.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
