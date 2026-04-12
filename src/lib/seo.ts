import { company, site } from "./config"

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: company.name,
    url: site.baseUrl,
    image: `${site.baseUrl}/og-image.jpg`,
    telephone: company.phone.international,
    email: company.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.latitude,
      longitude: company.address.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Berlin" },
      { "@type": "State", name: "Brandenburg" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: company.hours.weekdays.open,
      closes: company.hours.weekdays.close,
    },
    priceRange: "$$",
    founder: { "@type": "Person", name: company.owner },
    foundingDate: String(company.founded),
    hasCredential: company.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: c,
    })),
  }
}

export function serviceSchema(args: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: args.url,
    provider: {
      "@type": "RoofingContractor",
      name: company.name,
      url: site.baseUrl,
    },
    areaServed: [
      { "@type": "City", name: "Berlin" },
      { "@type": "State", name: "Brandenburg" },
    ],
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: company.owner,
    jobTitle: company.ownerTitle,
    worksFor: {
      "@type": "RoofingContractor",
      name: company.name,
      url: site.baseUrl,
    },
    knowsAbout: [
      "Dachdeckerhandwerk",
      "Photovoltaik",
      "Energetische Gebäudesanierung",
      "BAFA-Förderung",
      "Individueller Sanierungsfahrplan (iSFP)",
      "Enphase Solar",
      "Fassadendämmung",
      "Dachfenster (VELUX)",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Dachdeckermeister",
        recognizedBy: { "@type": "Organization", name: "Handwerkskammer Berlin" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "BAFA-anerkannter Energieberater",
        recognizedBy: {
          "@type": "Organization",
          name: "Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)",
          url: "https://www.energie-effizienz-experten.de",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Enphase Solar Partner",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "TRGS 519 — Sachkunde Asbest",
      },
    ],
  }
}

export function articleSchema(args: {
  headline: string
  description: string
  url: string
  datePublished: string
  sections?: { title: string; body: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    author: {
      "@type": "Person",
      name: company.owner,
      jobTitle: company.ownerTitle,
      url: `${site.baseUrl}/ueber-uns`,
    },
    publisher: {
      "@type": "RoofingContractor",
      name: company.name,
      url: site.baseUrl,
    },
    mainEntityOfPage: args.url,
    ...(args.sections && {
      articleSection: args.sections.map((s) => s.title),
    }),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
