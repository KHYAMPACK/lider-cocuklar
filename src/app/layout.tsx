import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroInert, IntroLoader } from "@/components/IntroLoader";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { homeTitle, sharedOpenGraph, sharedTwitter } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "Denizli anaokulu",
    "Merkezefendi anaokulu",
    "Yenişehir anaokulu",
    "Lider Çocuklar",
    "okul öncesi eğitim Denizli",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: sharedOpenGraph,
  twitter: sharedTwitter,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--paper)]">
        <JsonLd />
        <IntroLoader />
        <div className="site-grain" aria-hidden />
        <IntroInert>
          <a href="#icerik" className="skip-link">
            İçeriğe atla
          </a>
          <Header />
          <main id="icerik" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </IntroInert>
      </body>
    </html>
  );
}
