import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="relative overflow-hidden bg-[var(--grape)] px-4 pb-16 pt-32 text-[var(--foam)] md:pb-20 md:pt-36">
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[18px] border-[var(--star)]/80"
        aria-hidden
      />
      <div className="container-page relative">
        {eyebrow ? (
          <p className="font-[family-name:var(--font-mono)] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--star)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-6xl">
          {title}
        </h1>
        {children ? <div className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{children}</div> : null}
      </div>
    </header>
  );
}
