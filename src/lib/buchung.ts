/**
 * Datenmodell und Geschäftslogik für „Buchung & Preise" (Ausbaustufe 1).
 *
 * Quelle der Preislogik: Steves Briefing (feedback-quellen/briefing-buchung-und-preise.md)
 * + SRT-1: Dachcheck Standard 259 € netto bis 25 km (Anfahrt enthalten),
 * Lokal-Rabatt 199 € netto für Heiligensee, Hermsdorf, Frohnau, Tegel, Konradshöhe.
 *
 * ⚠️ Vorläufig bis Steve liefert (offene Punkte, Briefing Abschnitt 9):
 *    finale Preise, PLZ-Zonenliste, Slot-Quelle, Zeitfenster, Mailtext.
 *    Die Slot-Datenquelle ist deshalb als Interface gekapselt — Beispieldaten
 *    lassen sich gegen Dispo/Kalender-API tauschen, ohne die UI umzubauen.
 */

export const MWST_SATZ = 0.19

export function brutto(netto: number): number {
  return Math.round(netto * (1 + MWST_SATZ) * 100) / 100
}

export function euro(betrag: number): string {
  return betrag.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " €"
}

/* ───────────────────────── Leistungen ───────────────────────── */

export type LeistungsId = "erstberatung" | "dachcheck"

export interface BuchbareLeistung {
  id: LeistungsId
  titel: string
  kurz: string
  /** Leistungspreis netto in €; 0 = kostenlos. null = preislich je Zone (siehe Zonen). */
  preisNetto: number | null
  anfahrtsfrei: boolean
  /** Anker im Reiter „So rechnen wir ab" für den Drill-Down. */
  erklaerAnker: string
}

export const buchbareLeistungen: BuchbareLeistung[] = [
  {
    id: "erstberatung",
    titel: "Erstberatung Telefon / Video",
    kurz: "Wir besprechen Ihr Anliegen, sichten Ihre Unterlagen/Fotos und sagen Ihnen ehrlich, was zu tun ist.",
    preisNetto: 0,
    anfahrtsfrei: true,
    erklaerAnker: "angebot-aufmass",
  },
  {
    id: "dachcheck",
    titel: "Dachcheck vor Ort",
    kurz: "Begehung und Zustandsbewertung Ihres Dachs vor Ort — fester Leistungspreis plus Anfahrt nach Zone.",
    preisNetto: null,
    anfahrtsfrei: false,
    erklaerAnker: "angebot-aufmass",
  },
]

/* ───────────────────────── Zonen / Preise ───────────────────────── */

export type ZonenId = "lokal" | "standard" | "anfrage"

export interface Zone {
  id: ZonenId
  label: string
  beschreibung: string
  /** Dachcheck-Gesamtpreis netto (Leistung + Anfahrt), null = individuell auf Anfrage. */
  dachcheckNetto: number | null
}

export const zonen: Record<ZonenId, Zone> = {
  lokal: {
    id: "lokal",
    label: "Lokal (Nachbarschaft)",
    beschreibung:
      "Heiligensee, Konradshöhe, Tegel, Hermsdorf, Frohnau — kurze Wege, lokaler Vorteilspreis.",
    dachcheckNetto: 199,
  },
  standard: {
    id: "standard",
    label: "Berlin & Umland bis ca. 25 km",
    beschreibung:
      "Übriges Berlin und direkt angrenzendes Umland (z. B. Hennigsdorf, Oranienburg) — Anfahrt bereits enthalten.",
    dachcheckNetto: 259,
  },
  anfrage: {
    id: "anfrage",
    label: "Außerhalb (über ca. 25 km)",
    beschreibung:
      "Weiter entfernte Lagen — den Anfahrtsanteil nennen wir Ihnen individuell vor dem Termin.",
    dachcheckNetto: null,
  },
}

/**
 * PLZ → Zone. ⚠️ Vorläufige Beispiel-Zuordnung (offener Punkt: finale
 * PLZ-Zonenliste kommt von Steve). Lokal = die fünf Ortsteile aus SRT-1.
 */
const PLZ_LOKAL = new Set([
  "13465", // Frohnau
  "13467", // Hermsdorf
  "13503", // Heiligensee
  "13505", // Konradshöhe
  "13507", // Tegel
  "13509", // Tegel
])

const PLZ_UMLAND_STANDARD = new Set([
  "16515", // Oranienburg
  "16540", // Hohen Neuendorf
  "16547", // Birkenwerder
  "16548", // Glienicke/Nordbahn
  "16562", // Bergfelde/Hohen Neuendorf
  "16761", // Hennigsdorf
  "16727", // Velten
])

export function zoneFuerPlz(plz: string): Zone | null {
  const p = plz.trim()
  if (!/^\d{5}$/.test(p)) return null
  if (PLZ_LOKAL.has(p)) return zonen.lokal
  if (PLZ_UMLAND_STANDARD.has(p)) return zonen.standard
  // Berlin: 10115–14199
  const n = Number(p)
  if (n >= 10100 && n <= 14199) return zonen.standard
  return zonen.anfrage
}

export interface PreisInfo {
  netto: number
  brutto: number
}

/** Dachcheck-Preis für eine Zone; null = nur auf individuelle Anfrage. */
export function dachcheckPreis(zone: Zone): PreisInfo | null {
  if (zone.dachcheckNetto === null) return null
  return { netto: zone.dachcheckNetto, brutto: brutto(zone.dachcheckNetto) }
}

/* ───────────────────────── Slots (gekapselte Datenquelle) ───────────────────────── */

export type FensterId = "vormittag" | "nachmittag"

export const zeitfenster: { id: FensterId; label: string }[] = [
  // ⚠️ Vorläufig (offener Punkt: Zeitfenster pro Tag kommt von Steve)
  { id: "vormittag", label: "Vormittag" },
  { id: "nachmittag", label: "Nachmittag" },
]

export type SlotStatus = "frei" | "belegt"

export interface TagesSpalte {
  /** ISO-Datum (yyyy-mm-dd) des Tages. */
  datumISO: string
  /** Kurzer Wochentag, z. B. "Mo". */
  wochentag: string
  /** Tag.Monat, z. B. "15.06." */
  datumKurz: string
  slots: Record<FensterId, SlotStatus>
}

export interface WochenKapazitaet {
  kw: number
  jahr: number
  /** Mo–Sa. */
  tage: TagesSpalte[]
}

/**
 * Gekapselte Slot-Datenquelle (Briefing Abschnitt 6, „kritischster Punkt").
 * Im Echtbetrieb wird diese Implementierung gegen Dispo/Kalender-API
 * getauscht — die UI spricht ausschließlich dieses Interface an.
 */
export interface SlotQuelle {
  /** Kapazität der Woche; offset 0 = aktuelle Woche, 1 = nächste, … */
  getWoche(offset: number): Promise<WochenKapazitaet>
}

const WOCHENTAGE = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]

function isoWoche(d: Date): { kw: number; jahr: number } {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const dayNum = date.getUTCDay() || 7
  date.setUTCDate(date.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  const kw = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
  return { kw, jahr: date.getUTCFullYear() }
}

/**
 * Beispiel-Implementierung mit deterministischen Demo-Daten
 * (kein Zufall — gleiche Woche liefert immer dasselbe Muster).
 */
export class BeispielSlotQuelle implements SlotQuelle {
  async getWoche(offset: number): Promise<WochenKapazitaet> {
    const heute = new Date()
    const montag = new Date(heute)
    const wd = heute.getDay() || 7
    montag.setDate(heute.getDate() - (wd - 1) + offset * 7)
    montag.setHours(0, 0, 0, 0)

    const tage: TagesSpalte[] = []
    for (let i = 0; i < 6; i++) {
      const tag = new Date(montag)
      tag.setDate(montag.getDate() + i)
      const istVergangenheit = tag.getTime() < new Date().setHours(0, 0, 0, 0)
      // Deterministisches Belegt-Muster aus dem Datum
      const seed = tag.getDate() + tag.getMonth() * 3
      tage.push({
        datumISO: tag.toISOString().slice(0, 10),
        wochentag: WOCHENTAGE[tag.getDay()],
        datumKurz: `${String(tag.getDate()).padStart(2, "0")}.${String(tag.getMonth() + 1).padStart(2, "0")}.`,
        slots: {
          vormittag: istVergangenheit || seed % 3 === 0 ? "belegt" : "frei",
          nachmittag: istVergangenheit || seed % 4 === 1 || i === 5 ? "belegt" : "frei",
        },
      })
    }

    const { kw, jahr } = isoWoche(montag)
    return { kw, jahr, tage }
  }
}

/* ───────────────────── Buchungsanfrage (CRM-/Shop-fähig) ───────────────────── */

/**
 * Struktur so gewählt, dass sie später 1:1 an CRM/Angebots-Shop übergeben
 * werden kann (Briefing Abschnitt 8: Kunde, Objekt, Zone, Anliegen).
 */
export interface Buchungsanfrage {
  leistung: LeistungsId
  termin: { datumISO: string; fenster: FensterId }
  kunde: { name: string; telefon: string; email: string }
  objekt: { strasse: string; plz: string; ort: string }
  zone: ZonenId | null
  preis: PreisInfo | null
  anliegen: string
}

export const BUCHUNG_MAIL = "kontakt@die-dachdecker.berlin"

/** Prototyp-Versand: strukturierte Formular-Mail (Briefing Abschnitt 7). */
export function buchungAlsMailto(b: Buchungsanfrage): string {
  const leistung = buchbareLeistungen.find((l) => l.id === b.leistung)
  const fenster = zeitfenster.find((f) => f.id === b.termin.fenster)
  const zeilen = [
    `Leistung: ${leistung?.titel ?? b.leistung}`,
    `Wunschtermin: ${b.termin.datumISO} (${fenster?.label ?? b.termin.fenster})`,
    "",
    `Name: ${b.kunde.name}`,
    `Telefon: ${b.kunde.telefon}`,
    `E-Mail: ${b.kunde.email}`,
    "",
    `Objekt: ${b.objekt.strasse}, ${b.objekt.plz} ${b.objekt.ort}`,
    `Zone: ${b.zone ? zonen[b.zone].label : "—"}`,
    b.preis
      ? `Preis: ${euro(b.preis.brutto)} inkl. MwSt. (${euro(b.preis.netto)} netto) — wird bei Beauftragung zu 100 % verrechnet`
      : "Preis: individuelle Bestätigung folgt",
    "",
    "Anliegen:",
    b.anliegen || "—",
    "",
    "— Gesendet über die Buchungsseite (Prototyp)",
  ]
  const subject = `Terminanfrage: ${leistung?.titel ?? b.leistung} am ${b.termin.datumISO}`
  return `mailto:${BUCHUNG_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(zeilen.join("\n"))}`
}
