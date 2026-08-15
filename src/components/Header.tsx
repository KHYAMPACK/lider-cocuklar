"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

const FOCUSABLE = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

function visibleFocusable(root: HTMLElement) {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => el.getClientRects().length > 0,
  );
}

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 16);
    if (open) {
      setHidden(false);
      return;
    }
    const header = headerRef.current;
    if (header?.contains(document.activeElement)) {
      setHidden(false);
      return;
    }
    setHidden(y > 90 && y > prev);
  });

  useEffect(() => {
    if (!open) return;

    const header = headerRef.current;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !header) return;
      const focusable = visibleFocusable(header);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      toggle?.focus();
    };
  }, [open]);

  const overlay = !scrolled && !open;
  const offScreen = hidden && !open && !focusWithin;
  const barClass = overlay
    ? "bg-transparent text-white"
    : "bg-[var(--foam)]/88 text-[var(--ink)] shadow-[0_1px_0_rgba(22,14,34,0.08)] backdrop-blur-md";

  return (
    <header
      ref={headerRef}
      inert={offScreen || undefined}
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${offScreen ? "-translate-y-full" : "translate-y-0"}`}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        setFocusWithin(false);
      }}
    >
      <div className={`transition-colors duration-300 ${barClass}`}>
        <div className="mx-auto flex max-w-[74rem] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
            <Logo className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-[family-name:var(--font-display)] text-base font-extrabold sm:text-lg">
                {site.shortName}
              </span>
              <span className={`mt-0.5 block truncate font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] sm:text-[11px] ${overlay ? "text-white/70" : "text-[var(--muted)]"}`}>
                Anaokulu · Denizli
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-semibold transition ${
                    active
                      ? overlay
                        ? "text-[var(--star)]"
                        : "text-[var(--blush)]"
                      : overlay
                        ? "text-white/85 hover:text-white"
                        : "text-[var(--ink)] hover:text-[var(--grape)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/iletisim" className={`btn hidden sm:inline-flex ${overlay ? "btn-star" : "btn-coral"}`}>
            Bize Ulaşın
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-[14px] border lg:hidden ${
              overlay ? "border-white/30 bg-white/10" : "border-[var(--line)] bg-[var(--foam)]"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 rounded ${overlay ? "bg-white" : "bg-[var(--ink)]"} transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 rounded ${overlay ? "bg-white" : "bg-[var(--ink)]"} transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 rounded ${overlay ? "bg-white" : "bg-[var(--ink)]"} transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {open ? (
          <div id="mobile-nav" className="border-t border-white/10 bg-[var(--grape)] lg:hidden">
            <nav className="mx-auto flex max-w-[74rem] flex-col gap-1 px-4 py-3" aria-label="Mobil menü">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[14px] px-3 py-3 text-base font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/iletisim" className="btn btn-star mt-2" onClick={() => setOpen(false)}>
                Bize Ulaşın
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
