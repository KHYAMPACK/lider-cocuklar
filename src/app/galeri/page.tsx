import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Lider Çocuklar Anaokulu sınıfları, oyun alanları ve etkinlik mekânlarından fotoğraflar.",
  alternates: { canonical: "/galeri" },
};

const photos = [
  { src: "/images/fairy-classroom.png", alt: "Masal temalı pembe sınıf", caption: "Masal sınıfı" },
  { src: "/images/play-area.png", alt: "Oyun evleri ve trafik köşesi", caption: "Oyun köşeleri" },
  { src: "/images/dining-room.png", alt: "Yemek salonu", caption: "Yemek salonu" },
  { src: "/images/brand-wall.png", alt: "Okul marka duvarı", caption: "Okulumuz" },
] as const;

export default function GalleryPage() {
  return (
    <div>
      <PageIntro eyebrow="Okulu görün" title="Galeri">
        Sınıflar, oyun köşeleri ve yemek salonu — çocuğunuzun gününü geçireceği mekânlar.
      </PageIntro>

      <div className="container-page py-20 md:py-28">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {photos.map((photo, i) => (
            <figure key={photo.src} className={`overflow-hidden rounded-[22px] ${i === 0 ? "sm:col-span-2" : ""}`}>
              <div className={`relative ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "100vw" : "(max-width:640px) 100vw, 50vw"}
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <figcaption className="bg-[var(--foam)] px-4 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
