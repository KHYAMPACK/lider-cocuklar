"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { upcomingActivities } from "@/lib/site";

const toneClass = {
  grape: "tone-grape",
  gold: "tone-gold",
  blush: "tone-blush",
  pool: "tone-pool",
} as const;

export function ActivityCorridor() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!viewport || !track || !section) return;

        const tween = gsap.to(track, {
          x: () => Math.min(0, viewport.clientWidth - track.scrollWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(track.scrollWidth - viewport.clientWidth, viewport.clientWidth)}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[var(--grape-deep)] text-[var(--foam)]">
      <div className="flex min-h-[100dvh] flex-col justify-center gap-12 py-20 lg:h-[100dvh] lg:py-8">
        <div className="container-page shrink-0">
          <p className="font-[family-name:var(--font-mono)] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--star)]">
            Atölye koridoru
          </p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl lg:text-6xl">
            Koridorda Yürüyün...
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            P4C, Orff, satranç, drama, İngilizce, terzilik, maker, jimnastik, yoga ve mindfulness.
          </p>
        </div>

        <div ref={viewportRef} className="activity-viewport lg:flex lg:flex-1 lg:items-center">
          <div ref={trackRef} className="activity-track">
            {upcomingActivities.map((activity) => (
              <article
                key={activity.slug}
                className={`activity-door ${toneClass[activity.tone]} flex w-[min(84vw,21rem)] shrink-0 flex-col overflow-hidden rounded-[22px] md:w-[23rem]`}
                style={{ background: "var(--tone)", color: "var(--tone-ink)" }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width:1024px) 84vw, 368px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] opacity-80">
                      {activity.kicker}
                    </p>
                    <Image src={activity.sticker} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold leading-[0.95] md:text-3xl">
                      {activity.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-90">{activity.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
