import Image from "next/image";

const stickers = [
  { src: "/stickers/star.svg", alt: "Yıldız sticker", className: "sticker sticker-a w-14 h-14 md:w-16 md:h-16" },
  { src: "/stickers/castle.svg", alt: "Kale sticker", className: "sticker sticker-b w-16 h-16 md:w-20 md:h-20" },
  { src: "/stickers/traffic-light.svg", alt: "Trafik ışığı sticker", className: "sticker sticker-c w-12 h-16 md:w-14 md:h-[4.5rem]" },
  { src: "/stickers/chef.svg", alt: "Şef sticker", className: "sticker sticker-d w-14 h-14 md:w-16 md:h-16" },
  { src: "/stickers/blossom.svg", alt: "Çiçek sticker", className: "sticker sticker-e w-12 h-12 md:w-14 md:h-14" },
  { src: "/stickers/kid.svg", alt: "Çocuk sticker", className: "sticker sticker-f w-14 h-14 md:w-16 md:h-16" },
  { src: "/stickers/spoon.svg", alt: "Kaşık sticker", className: "sticker sticker-g w-12 h-12 md:w-14 md:h-14" },
] as const;

type StickersProps = {
  variant?: "hero" | "scatter";
};

export function Stickers({ variant = "scatter" }: StickersProps) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Image src="/stickers/star.svg" alt="" width={64} height={64} className="sticker sticker-a absolute left-[6%] top-[18%] w-12 md:w-16" />
        <Image src="/stickers/blossom.svg" alt="" width={56} height={56} className="sticker sticker-e absolute right-[8%] top-[22%] w-11 md:w-14" />
        <Image src="/stickers/kid.svg" alt="" width={64} height={64} className="sticker sticker-f absolute bottom-[14%] left-[10%] w-12 md:w-16" />
        <Image src="/stickers/castle.svg" alt="" width={72} height={72} className="sticker sticker-b absolute bottom-[12%] right-[7%] w-14 md:w-[4.5rem]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none relative mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 py-2" aria-hidden>
      {stickers.map((s) => (
        <Image key={s.src} src={s.src} alt="" width={72} height={72} className={s.className} />
      ))}
    </div>
  );
}
