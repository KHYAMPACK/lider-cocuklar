"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="space-y-2">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q} className="overflow-hidden rounded-[16px] bg-[var(--foam)]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-bold transition md:text-[15px] ${
                isOpen ? "bg-[var(--grape)] text-white" : "text-[var(--ink)] hover:bg-[var(--paper)]"
              }`}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  isOpen ? "bg-[var(--star)] text-[var(--ink)]" : "bg-[var(--paper)] text-[var(--ink)]"
                }`}
              >
                <svg viewBox="0 0 24 24" className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              hidden={!isOpen}
              className="px-4 pb-4 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
