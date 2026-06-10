/**
 * Evergreen Ratgeber-Content. Jedes Objekt ist eine vollständige
 * Artikel-Definition — Metadaten, Abschnitte, Tabellen, FAQs, Links —
 * gerendert über app/ratgeber/[slug]/page.tsx.
 */

export type RatgeberCategory = "Dach" | "Dämmung" | "Solar" | "Flachdach"

export type RatgeberBlock =
  | { kind: "paragraph"; body: string }
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "table"; columns: string[]; rows: string[][]; caption?: string }
  | { kind: "callout"; variant: "note" | "warning"; body: string }
  | { kind: "cta"; variant: "soft" | "strong" }

export interface Ratgeber {
  slug: string
  category: RatgeberCategory
  /** H1 (≤60 chars). */
  title: string
  /** <title> (50–60 chars). */
  metaTitle: string
  /** <meta description> (140–155 chars). */
  metaDescription: string
  /** Keyword-Phrase for reference. */
  keyword: string
  /** Short one-sentence description for the overview card. */
  summary: string
  /** Opening 2–3 sentences right below the H1. */
  intro: string
  /** Main body — rendered in order. */
  blocks: RatgeberBlock[]
  /** Small author block near the end: 'Unsere Empfehlung als Meisterbetrieb'. */
  meisterempfehlung: string
  faqs: { question: string; answer: string }[]
  /** Published date for Article schema + 'Stand: …' label. */
  datePublished: string
  /** Related internal links. */
  related: {
    leistung: { href: string; label: string }
    otherRatgeber: { slug: string; label: string }[]
  }
}
