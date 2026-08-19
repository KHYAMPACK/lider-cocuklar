import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { schoolGallery } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Galeri",
  description: "Lider Çocuklar Anaokulu’nun gerçek sınıfları, yemek salonu, atölye ve oyun alanlarından kareler.",
  path: "/galeri",
});

export default function GalleryPage() {
  return (
    <div>
      <PageIntro eyebrow="Okulu görün" title="Anaokulumuzdan Kareler">
        Sınıflar, yemek salonu, atölye ve oyun alanları — çocuğunuzun gününü geçireceği gerçek mekânlar.
      </PageIntro>

      <div className="container-page py-20 md:py-28">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {schoolGallery.map((photo, i) => (
            <figure key={photo.src} className={`overflow-hidden rounded-[22px] ${i === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}>
              <div className={`relative ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "100vw" : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"}
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
