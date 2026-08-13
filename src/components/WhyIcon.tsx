function PuzzleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M14 4h-4v2.2a2.2 2.2 0 1 0 0 4.4V13H7.8a2.2 2.2 0 1 0 0 4.4H10V21h4v-3.6h2.2a2.2 2.2 0 1 0 0-4.4H14V10.6a2.2 2.2 0 1 0 0-4.4V4z" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M12 20s-6.5-4.1-8.4-7.3C1.8 9.7 3.2 6.8 6 6.2c1.7-.4 3.3.3 4.2 1.5.9-1.2 2.5-1.9 4.2-1.5 2.8.6 4.2 3.5 2.4 6.5C18.5 15.9 12 20 12 20z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="6.5" cy="12" r="2.25" />
      <circle cx="17.5" cy="6.5" r="2.25" />
      <circle cx="17.5" cy="17.5" r="2.25" />
      <path d="M8.5 11.1 15.3 7.5M8.5 12.9l6.8 3.6" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3.5v3.5M12 17v3.5M3.5 12H7M17 12h3.5M6.2 6.2 8.6 8.6M15.4 15.4l2.4 2.4M17.8 6.2 15.4 8.6M6.2 17.8l2.4-2.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

const map = {
  puzzle: PuzzleIcon,
  heart: HeartIcon,
  share: ShareIcon,
  spark: SparkIcon,
} as const;

export function WhyIcon({ name }: { name: keyof typeof map }) {
  const Icon = map[name];
  return <Icon />;
}
