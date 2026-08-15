import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div>
      <PageIntro eyebrow="404" title="Sayfa Bulunamadı">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Anasayfadan devam edebilir veya bize yazabilirsiniz.
      </PageIntro>

      <div className="container-page flex flex-col gap-3 py-12 sm:flex-row md:py-16">
        <Link href="/" className="btn btn-plum w-full sm:w-auto">
          Anasayfaya dön
        </Link>
        <Link href="/iletisim" className="btn btn-secondary w-full sm:w-auto">
          Bize ulaşın
        </Link>
      </div>
    </div>
  );
}
