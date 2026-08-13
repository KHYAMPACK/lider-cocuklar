type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-12 w-12", priority = false }: LogoProps) {
  return (
    // Plain <img> + cache-bust so PNG transparency is preserved and not served from an old opaque cache.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png?v=3"
      alt="Lider Çocuklar Anaokulu"
      width={2000}
      height={2000}
      className={`bg-transparent object-contain ${className}`}
      style={{ backgroundColor: "transparent", backgroundImage: "none" }}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}
