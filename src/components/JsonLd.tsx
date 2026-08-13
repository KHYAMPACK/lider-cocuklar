import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness", "Preschool"],
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    image: `${site.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "TR",
    },
    sameAs: [site.instagramUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:30",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Denizli",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
