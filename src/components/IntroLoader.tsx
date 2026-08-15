"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const KEY = "lc-intro";

const listeners = new Set<() => void>();
let dismissed = false;

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function getSnapshot() {
  if (dismissed) return true;
  try {
    return sessionStorage.getItem(KEY) !== null;
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return true;
}

function persistIntro() {
  dismissed = true;
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* ignore */
  }
  listeners.forEach((listener) => listener());
}

function useIntroVisible() {
  const reduced = useReducedMotion();
  const seen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return !reduced && !seen;
}

export function IntroInert({ children }: { children: ReactNode }) {
  const visible = useIntroVisible();

  return (
    <div className="flex min-h-0 flex-1 flex-col" inert={visible || undefined}>
      {children}
    </div>
  );
}

export function IntroLoader() {
  const visible = useIntroVisible();

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(persistIntro, 1100);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previous;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[var(--grape)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }}
          role="status"
        >
          <motion.div
            className="flex flex-col items-center gap-3 text-[var(--foam)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Logo className="h-20 w-20" priority />
            <p className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight">
              {site.shortName}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
