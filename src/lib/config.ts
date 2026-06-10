/**
 * Single source of truth for all company data.
 * Any page/component that needs the firm's name, address, phone, hours,
 * years of experience, certifications or statistics must read from here.
 */

export const company = {
  name: "St. Masch Dach & Fassade",
  legalName: "St. Masch Dach & Fassade",
  brandName: "ST. MASCH",
  tagline: "Dach · Fassade · Solar",
  owner: "Steve Masch",
  ownerTitle: "Dachdeckermeister & BAFA-anerkannter Energieberater",

  address: {
    street: "Ruppiner Chaussee 221",
    zip: "13503",
    city: "Berlin",
    country: "DE",
    latitude: 52.5956,
    longitude: 13.2587,
  },

  phone: {
    display: "030 - 844 17 068",
    href: "tel:+493084417068",
    international: "+493084417068",
  },

  email: {
    display: "kontakt@die-dachdecker.berlin",
    href: "mailto:kontakt@die-dachdecker.berlin",
  },

  /** One source of truth for opening hours. */
  hours: {
    display: "Mo–Fr: 08:00 – 16:00 Uhr",
    weekdays: { open: "08:00", close: "16:00" },
  },

  founded: 2015,

  get yearsExperience(): number {
    return new Date().getFullYear() - this.founded
  },

  /** Stats shown in Hero trust strip + StatsBanner. */
  stats: {
    projects: "500+",
    quality: "100%",
  },

  /**
   * Official certifications — the order here is the USP hierarchy and
   * should be used as-is when rendering cert lists.
   */
  certifications: [
    "Dachdeckermeister (HWK Berlin)",
    "BAFA-anerkannter Energieberater (Energieeffizienz-Expertenliste)",
    "Enphase Solar Partner (zertifizierter Installateur)",
    "TRGS 519 — Sachkunde Asbest",
    "Sachkunde Mineralfasern (KMF)",
  ],

  maps:
    "https://www.google.com/maps/search/?api=1&query=Ruppiner+Chaussee+221%2C+13503+Berlin",

  socials: [] as { label: string; href: string }[],
} as const

export const site = {
  baseUrl: "https://st-masch-dach.vercel.app",
  locale: "de_DE",
  title: `Dachdecker Berlin | Meisterbetrieb Dach, Fassade & Solar | ${company.brandName}`,
  description:
    "St. Masch — Ihr Dachdecker-Meisterbetrieb in Berlin. Steildach, Flachdach, Fassadendämmung, Photovoltaik & Energieberatung aus einer Hand. Kostenlose Beratung ✓ Meisterqualität ✓",
} as const

export function phoneHref() {
  return company.phone.href
}
export function emailHref() {
  return company.email.href
}
