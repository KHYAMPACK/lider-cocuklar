import type { Metadata } from "next";
import { site } from "./site";

export const homeTitle = "Lider Çocuklar Anaokulu | Denizli Yenişehir";

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Lider Çocuklar Anaokulu",
} as const;

/** Shared OG fields. Nested openGraph is shallow-merged in Next 16, so pages that set title/url must spread this. */
export const sharedOpenGraph = {
  type: "website" as const,
  locale: "tr_TR",
  siteName: site.name,
  images: [ogImage],
};

export const sharedTwitter = {
  card: "summary_large_image" as const,
  images: ["/og.png"],
};

export function pageMetadata({
  title,
  description,
  path,
  robots,
}: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(robots ? { robots } : {}),
    openGraph: {
      ...sharedOpenGraph,
      title,
      description,
      url: path,
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
    },
  };
}
