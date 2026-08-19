import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { schoolGalleryPreview } from "@/lib/site";

export function SchoolFrames() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Galeri</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[0.92] md:text-5xl">
              Anaokulumuzdan Kareler
            </h2>
            <p className="mt-4 max-w-xl text-base text-[var(--muted)] md:text-lg">
              Sınıflar, yemek salonu, atölye ve oyun alanları — okulumuzun gerçek iç mekânları.
            </p>
          </div>
          <Link href="/galeri" className="btn btn-plum">
            Tüm galeri
          </Link>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {schoolGalleryPreview.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.04} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <Link href="/galeri" className="group block overflow-hidden rounded-[22px]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={i === 0 ? "(max-width:768px) 100vw, 33vw" : "(max-width:768px) 50vw, 33vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
