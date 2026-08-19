"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { gardenPhotos, gardenPlay } from "@/lib/site";

const SLIDE_MS = 5500;

export function GardenPlay() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (gardenPhotos.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % gardenPhotos.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

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
            {gardenPhotos.map((img, i) => (
              <div
                key={img.src}
                className={`garden-slide absolute inset-0 ${
                  i === active ? "garden-slide-active" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={i === active ? img.alt : ""}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
            ))}
            {gardenPhotos.length > 1 ? (
              <div
                className="absolute bottom-4 left-1/2 z-[2] flex -translate-x-1/2 gap-2"
                role="tablist"
                aria-label="Bahçe fotoğrafları"
              >
                {gardenPhotos.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={img.caption}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-6 bg-[var(--star)]" : "w-1.5 bg-white/55"
                    }`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
