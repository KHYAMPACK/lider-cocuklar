"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { gsap, useGSAP } from "@/lib/gsap";
import { aboutIntro, aboutMore, heroSlides, photos, site, whatsappLink } from "@/lib/site";

function HeroSlideshow({ paused }: { paused: boolean }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [incomingVisible, setIncomingVisible] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (previous === null || !incomingVisible) return;
    const id = window.setTimeout(() => setPrevious(null), 1000);
    return () => window.clearTimeout(id);
  }, [previous, incomingVisible]);

  useEffect(() => {
    if (reduced || paused) return;

    let id: number | undefined;

    const play = () => {
      id = window.setInterval(() => {
        const current = indexRef.current;
        setPrevious(current);
        setIncomingVisible(false);
        setIndex((current + 1) % heroSlides.length);
      }, 4200);
    };

    const stop = () => {
      if (id !== undefined) {
        window.clearInterval(id);
        id = undefined;
      }
    };

    const onVisibility = () => {
      stop();
      if (!document.hidden) play();
    };

    if (!document.hidden) play();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, paused]);

  const mounted =
    previous === null || previous === index ? [index] : [previous, index];

  return (
    <>
      {mounted.map((i) => {
        const slide = heroSlides[i];
        const visible =
          (i === index && incomingVisible) || (i === previous && !incomingVisible);

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            preload={i === 0}
            sizes="(max-width:1024px) 100vw, 55vw"
            onLoad={() => {
              if (i === index) setIncomingVisible(true);
            }}
            onError={() => {
              if (i === index) setIncomingVisible(true);
            }}
            className={`object-cover object-center transition-opacity duration-1000 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}
      <div className="absolute bottom-6 right-8 z-10 hidden gap-2 lg:flex" aria-hidden>
        {heroSlides.map((slide, i) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-6 bg-[var(--star)]" : "w-1.5 bg-white/55"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export function HomeHero() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const sceneRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scene = sceneRef.current;
        const overlay = overlayRef.current;
        const left = leftRef.current;
        const right = rightRef.current;
        if (!scene || !overlay || !left || !right) return;

        const desktop = gsap.matchMedia();

        desktop.add("(min-width: 1024px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "+=115%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(left, { xPercent: -100, ease: "none" }, 0).to(right, { xPercent: 100, ease: "none" }, 0);

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        });

        desktop.add("(max-width: 1023px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "+=115%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(overlay, { yPercent: -100, ease: "none" });

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        });

        return () => desktop.revert();
      });

      return () => mm.revert();
    },
    { scope: sceneRef },
  );

  return (
    <section ref={sceneRef} className="hero-scene relative h-[100dvh] overflow-hidden bg-[var(--paper)]">
      <div ref={overlayRef} className="hero-overlay absolute inset-0 z-10 overflow-hidden">
        <div ref={rightRef} className="hero-photo-bleed absolute">
          <HeroSlideshow paused={paused} />
        </div>

        <div
          ref={leftRef}
          className="relative z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-[var(--grape)] via-[var(--grape)]/80 to-[var(--grape)]/25 px-6 pb-12 pt-32 text-[var(--foam)] sm:px-8 md:pb-16 lg:w-[62%] lg:justify-center lg:bg-gradient-to-r lg:from-[var(--grape)] lg:from-55% lg:via-[var(--grape)]/88 lg:via-78% lg:to-transparent lg:pl-[max(2rem,calc((100vw-74rem)/2))] lg:pr-16"
        >
          <motion.div
            className="mt-2"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Logo className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.8rem,6.6vw,5.6rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              {site.shortName}
            </h1>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white/90 sm:text-3xl md:text-4xl">
              Anaokulu
            </p>
            <p className="mt-2 max-w-lg text-sm text-white/70 sm:text-base md:text-lg">{site.name}</p>
          </motion.div>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            3–6 yaş için oyun, atölye ve güvenli bir gün.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/galeri" className="btn btn-star w-full sm:w-auto">
              Okulu gör
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full sm:w-auto">
              WhatsApp
            </a>
          </motion.div>

          <p className="mt-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/60">
            {site.ageRange} · {site.classHours} · Yenişehir
          </p>
        </div>

        {reduced ? null : (
          <button
            type="button"
            className="absolute right-4 top-24 z-20 rounded-full bg-[var(--star)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)]"
            aria-pressed={paused}
            onClick={() => setPaused((current) => !current)}
          >
            {paused ? "Oynat" : "Duraklat"}
          </button>
        )}
      </div>

      <div className="flex h-full items-center">
        <div className="container-page grid w-full items-center gap-10 px-2 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">Hakkımızda</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl lg:text-6xl">
              {aboutMore.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{aboutIntro}</p>
            <Link href="/hakkimizda" className="btn btn-plum mt-8">
              Okulu tanı
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={photos.play}
                alt="Lider Çocuklar oyun alanı"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="absolute bottom-4 left-4 right-4 rounded-[16px] bg-[var(--star)] px-5 py-4 font-[family-name:var(--font-display)] text-lg font-extrabold leading-tight text-[var(--ink)] md:text-xl">
              Meslek Köşeleri, Oyun Ve Atölye — Bir Günün İçindeki Küçük Şehir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
