"use client"

/**
 * „Buchung & Preise" — Ausbaustufe 1 (Prototyp, Briefing in
 * feedback-quellen/briefing-buchung-und-preise.md).
 *
 * Leitidee: oberflächlich schlank buchen, per Drill-Down („heimlich
 * transparent") in die vollständige Abrechnungs-Erklärung springen.
 * NICHT der spätere Angebots-Shop — Buchungsdaten sind aber bereits
 * CRM-/Shop-fähig strukturiert (src/lib/buchung.ts).
 */

import { useEffect, useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import {
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Loader2,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ClipboardCheck,
  Clock,
  ArrowRight,
} from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import { cn } from "@/lib/utils"
import { company } from "@/lib/config"
import {
  BeispielSlotQuelle,
  type Buchungsanfrage,
  buchbareLeistungen,
  buchungAlsMailto,
  dachcheckPreis,
  euro,
  type FensterId,
  type LeistungsId,
  type SlotQuelle,
  type WochenKapazitaet,
  zeitfenster,
  zonen,
  zoneFuerPlz,
} from "@/lib/buchung"
import {
  abrechnungAbschnitte,
  abrechnungIntro,
  type AbrechnungBlock,
} from "@/lib/abrechnung-inhalte"

/* Slot-Datenquelle: Beispieldaten — im Echtbetrieb gegen Dispo/Kalender tauschen. */
const slotQuelle: SlotQuelle = new BeispielSlotQuelle()

type TabId = "buchung" | "leistungen" | "abrechnung" | "kontakt"

const tabs: { id: TabId; label: string }[] = [
  { id: "buchung", label: "Buchung & Preise" },
  { id: "leistungen", label: "Leistungen & Preise" },
  { id: "abrechnung", label: "So rechnen wir ab" },
  { id: "kontakt", label: "Kontakt" },
]

export default function BuchungPage() {
  const [tab, setTab] = useState<TabId>("buchung")

  // Drill-Down: Tab wechseln + zum Erklär-Abschnitt scrollen
  const springeZuAbschnitt = (anker: string) => {
    setTab("abrechnung")
    requestAnimationFrame(() => {
      document.getElementById(`abschnitt-${anker}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  return (
    <>
      <PageHero
        title="Buchung"
        highlight="& Preise"
        subtitle="Erstberatung oder Dachcheck direkt anfragen — mit klaren Preisen vorab und voller Transparenz, wie wir abrechnen."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Buchung & Preise", href: "/buchung" },
        ]}
      />

      {/* Reiter-Navigation */}
      <div className="sticky top-[60px] sm:top-[68px] z-40 bg-brand-beige/95 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex gap-1 overflow-x-auto py-2 -mx-1 px-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "px-4 py-2.5 rounded-full font-heading text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer border transition-colors min-h-[40px]",
                  tab === t.id
                    ? "bg-brand-orange text-white border-brand-orange"
                    : "bg-white text-brand-dark/70 border-black/10 hover:border-brand-orange/40",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "buchung" && <BuchungTab springeZuAbschnitt={springeZuAbschnitt} />}
      {tab === "leistungen" && <LeistungenTab springeZuAbschnitt={springeZuAbschnitt} />}
      {tab === "abrechnung" && <AbrechnungTab />}
      {tab === "kontakt" && <KontaktTab />}
    </>
  )
}

/* ───────────────────────── Tab 1: Buchung ───────────────────────── */

function BuchungTab({ springeZuAbschnitt }: { springeZuAbschnitt: (a: string) => void }) {
  const [leistung, setLeistung] = useState<LeistungsId>("dachcheck")
  const [wochenOffset, setWochenOffset] = useState(0)
  const [woche, setWoche] = useState<WochenKapazitaet | null>(null)
  const [auswahl, setAuswahl] = useState<{ datumISO: string; fenster: FensterId } | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let aktiv = true
    slotQuelle.getWoche(wochenOffset).then((w) => {
      if (aktiv) setWoche(w)
    })
    return () => {
      aktiv = false
    }
  }, [wochenOffset])

  const slotKlick = (datumISO: string, fenster: FensterId) => {
    setAuswahl({ datumISO, fenster })
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  const dachcheckAb = dachcheckPreis(zonen.lokal)

  return (
    <section className="bg-brand-beige py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Schnell-Kacheln */}
        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-6">
          Schnell <span className="text-brand-orange">buchen</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <button
            onClick={() => setLeistung("erstberatung")}
            className={cn(
              "text-left bg-white rounded-2xl p-6 border-2 cursor-pointer transition-colors",
              leistung === "erstberatung" ? "border-brand-orange" : "border-black/5 hover:border-brand-orange/40",
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="font-heading text-lg font-bold text-brand-dark">
                Erstberatung Telefon / Video
              </div>
            </div>
            <div className="font-display text-3xl font-black text-brand-orange mb-2">0 €</div>
            <p className="font-body text-sm text-brand-dark/60 leading-relaxed m-0">
              Kostenlos und anfahrtsfrei — wir besprechen Ihr Anliegen und sagen
              Ihnen ehrlich, was zu tun ist.
            </p>
          </button>

          <button
            onClick={() => setLeistung("dachcheck")}
            className={cn(
              "text-left bg-white rounded-2xl p-6 border-2 cursor-pointer transition-colors",
              leistung === "dachcheck" ? "border-brand-orange" : "border-black/5 hover:border-brand-orange/40",
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="font-heading text-lg font-bold text-brand-dark">
                Dachcheck vor Ort
              </div>
            </div>
            {dachcheckAb && (
              <div className="font-display text-3xl font-black text-brand-orange mb-2">
                ab {euro(dachcheckAb.brutto)}
                <span className="font-body text-sm font-normal text-brand-dark/55 ml-2">
                  inkl. MwSt. ({euro(dachcheckAb.netto)} netto)
                </span>
              </div>
            )}
            <p className="font-body text-sm text-brand-dark/60 leading-relaxed m-0">
              Fester Leistungspreis + Anfahrt nach Zone — bei Beauftragung wird
              die Pauschale zu <strong>100 % verrechnet</strong>.
            </p>
            <span
              role="link"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation()
                springeZuAbschnitt("angebot-aufmass")
              }}
              onKeyDown={(e) => e.key === "Enter" && springeZuAbschnitt("angebot-aufmass")}
              className="inline-flex items-center gap-1 mt-3 font-body text-xs text-brand-orange hover:underline"
            >
              <CircleHelp className="w-3.5 h-3.5" />
              Wie kommt der Preis zustande?
            </span>
          </button>
        </div>

        {/* Wochen-Slot-Raster */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark m-0">
            Freie <span className="text-brand-orange">Termine</span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setWochenOffset((o) => Math.max(0, o - 1))}
              disabled={wochenOffset === 0}
              aria-label="Vorige Woche"
              className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-orange/40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-brand-dark" />
            </button>
            <span className="font-heading text-sm font-bold text-brand-dark min-w-[64px] text-center">
              {woche ? `KW ${woche.kw}` : "…"}
            </span>
            <button
              onClick={() => setWochenOffset((o) => Math.min(8, o + 1))}
              aria-label="Nächste Woche"
              className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center cursor-pointer hover:border-brand-orange/40 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </button>
          </div>
        </div>

        <p className="font-body text-xs text-brand-dark/55 mb-4">
          Leistung:{" "}
          <strong className="text-brand-dark">
            {buchbareLeistungen.find((l) => l.id === leistung)?.titel}
          </strong>{" "}
          · Tippen Sie einen freien Slot an, um Ihren Wunschtermin anzufragen.
        </p>

        <div className="bg-white rounded-2xl border border-black/5 p-3 sm:p-5 overflow-x-auto mb-4">
          {woche ? (
            <table className="w-full border-collapse min-w-[520px]">
              <thead>
                <tr>
                  <th className="p-2 text-left font-heading text-[11px] font-bold uppercase tracking-wider text-brand-dark/50" />
                  {woche.tage.map((t) => (
                    <th key={t.datumISO} className="p-2 text-center">
                      <div className="font-heading text-xs font-bold text-brand-dark">{t.wochentag}</div>
                      <div className="font-body text-[11px] text-brand-dark/50">{t.datumKurz}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {zeitfenster.map((f) => (
                  <tr key={f.id}>
                    <td className="p-2 font-heading text-xs font-bold text-brand-dark/70 whitespace-nowrap">
                      {f.label}
                    </td>
                    {woche.tage.map((t) => {
                      const status = t.slots[f.id]
                      const istAuswahl =
                        auswahl?.datumISO === t.datumISO && auswahl?.fenster === f.id
                      return (
                        <td key={t.datumISO + f.id} className="p-1.5 text-center">
                          {status === "frei" ? (
                            <button
                              onClick={() => slotKlick(t.datumISO, f.id)}
                              aria-label={`${t.wochentag} ${t.datumKurz} ${f.label} — frei, Termin wählen`}
                              className={cn(
                                "w-full min-h-[44px] rounded-lg border-2 cursor-pointer font-heading text-xs font-bold transition-colors",
                                istAuswahl
                                  ? "bg-brand-orange border-brand-orange text-white"
                                  : "bg-green-50 border-green-200 text-green-800 hover:border-brand-orange",
                              )}
                            >
                              {istAuswahl ? <Check className="w-4 h-4 mx-auto" /> : "frei"}
                            </button>
                          ) : (
                            <div
                              aria-label={`${t.wochentag} ${t.datumKurz} ${f.label} — belegt`}
                              className="w-full min-h-[44px] rounded-lg bg-gray-100 border-2 border-gray-100 flex items-center justify-center font-heading text-xs font-bold text-gray-400"
                            >
                              belegt
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex items-center justify-center py-12 text-brand-dark/40">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          )}
        </div>

        <p className="font-body text-[11px] text-brand-dark/45 mb-12">
          Hinweis: Termin-Anzeige aus Beispieldaten (Prototyp) — verbindlich
          wird Ihr Termin erst mit unserer Bestätigung per E-Mail.
        </p>

        {/* Buchungsformular */}
        <div ref={formRef} className="scroll-mt-32">
          <BuchungsFormular
            leistung={leistung}
            setLeistung={setLeistung}
            auswahl={auswahl}
            springeZuAbschnitt={springeZuAbschnitt}
          />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Buchungsformular ───────────────────────── */

function BuchungsFormular({
  leistung,
  setLeistung,
  auswahl,
  springeZuAbschnitt,
}: {
  leistung: LeistungsId
  setLeistung: (l: LeistungsId) => void
  auswahl: { datumISO: string; fenster: FensterId } | null
  springeZuAbschnitt: (a: string) => void
}) {
  const [plz, setPlz] = useState("")
  const [gesendet, setGesendet] = useState(false)

  const zone = leistung === "dachcheck" ? zoneFuerPlz(plz) : null
  const preis = zone ? dachcheckPreis(zone) : null

  const absenden = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const daten = new FormData(form)
    const anfrage: Buchungsanfrage = {
      leistung,
      termin: {
        datumISO: auswahl?.datumISO ?? String(daten.get("wunschtermin") || ""),
        fenster: auswahl?.fenster ?? "vormittag",
      },
      kunde: {
        name: String(daten.get("name") || ""),
        telefon: String(daten.get("telefon") || ""),
        email: String(daten.get("email") || ""),
      },
      objekt: {
        strasse: String(daten.get("strasse") || ""),
        plz,
        ort: String(daten.get("ort") || ""),
      },
      zone: zone?.id ?? null,
      preis,
      anliegen: String(daten.get("anliegen") || ""),
    }
    // Prototyp-Versand: strukturierte Formular-Mail (öffnet Mail-Programm)
    window.location.assign(buchungAlsMailto(anfrage))
    setGesendet(true)
  }

  if (gesendet) {
    return (
      <div className="bg-white rounded-2xl border border-brand-orange/30 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-brand-orange/15 flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-brand-orange" />
        </div>
        <h3 className="font-display text-2xl font-black text-brand-dark mb-3">
          Fast geschafft!
        </h3>
        <p className="font-body text-sm md:text-base text-brand-dark/70 max-w-xl mx-auto leading-relaxed">
          Ihr E-Mail-Programm hat sich mit der fertigen Terminanfrage geöffnet —
          bitte einfach absenden. Sie erhalten von uns eine Bestätigung mit
          Termin, Preis und Verrechnungshinweis. Erst wenn Sie diese Bestätigung
          beantworten, ist der kostenpflichtige Termin verbindlich.
        </p>
        <p className="font-body text-sm text-brand-dark/55 mt-4">
          Kein Mail-Programm geöffnet? Rufen Sie uns an:{" "}
          <a href={company.phone.href} className="text-brand-orange hover:underline">
            {company.phone.display}
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-black/5 p-5 sm:p-8">
      <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-2">
        Termin <span className="text-brand-orange">anfragen</span>
      </h2>
      <p className="font-body text-sm text-brand-dark/60 mb-6">
        {auswahl
          ? `Ihr gewählter Slot: ${auswahl.datumISO} (${zeitfenster.find((f) => f.id === auswahl.fenster)?.label})`
          : "Wählen Sie oben einen freien Slot — oder nennen Sie uns Ihren Wunschtermin im Formular."}
      </p>

      <form onSubmit={absenden} className="space-y-5">
        {/* Leistung */}
        <div>
          <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
            Leistung
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {buchbareLeistungen.map((l) => (
              <label
                key={l.id}
                className={cn(
                  "flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all min-h-[48px] font-heading text-sm font-semibold",
                  leistung === l.id
                    ? "bg-brand-orange/10 border-brand-orange text-brand-dark"
                    : "bg-brand-beige border-black/10 text-brand-dark/70 hover:border-brand-orange/40",
                )}
              >
                <input
                  type="radio"
                  name="leistung"
                  value={l.id}
                  checked={leistung === l.id}
                  onChange={() => setLeistung(l.id)}
                  className="sr-only"
                />
                {l.id === "erstberatung" ? (
                  <PhoneCall className="w-4 h-4 text-brand-orange flex-shrink-0" />
                ) : (
                  <ClipboardCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
                )}
                {l.titel}
              </label>
            ))}
          </div>
        </div>

        {!auswahl && (
          <div>
            <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
              Wunschtermin
            </label>
            <input
              type="date"
              name="wunschtermin"
              required
              className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ihr Name"
              className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
            />
          </div>
          <div>
            <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
              Telefon *
            </label>
            <input
              type="tel"
              name="telefon"
              inputMode="tel"
              required
              placeholder="030 123 456"
              className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
            />
          </div>
        </div>

        <div>
          <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
            E-Mail *
          </label>
          <input
            type="email"
            name="email"
            inputMode="email"
            required
            placeholder="Ihre E-Mail"
            className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
          />
        </div>

        {/* Objekt-Adresse (bei Dachcheck → Zonen-Erkennung) */}
        {leistung === "dachcheck" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-4">
              <div>
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
                  Straße &amp; Hausnummer (Objekt) *
                </label>
                <input
                  type="text"
                  name="strasse"
                  required
                  placeholder="Musterstraße 1"
                  className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                />
              </div>
              <div>
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
                  PLZ *
                </label>
                <input
                  type="text"
                  name="plz"
                  inputMode="numeric"
                  pattern="\d{5}"
                  required
                  placeholder="13503"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                />
              </div>
            </div>
            <div>
              <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
                Ort *
              </label>
              <input
                type="text"
                name="ort"
                required
                placeholder="Berlin"
                className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
              />
            </div>

            {/* Live-Preis */}
            <div
              className={cn(
                "rounded-2xl border p-5",
                zone ? "border-brand-orange/40 bg-brand-orange/5" : "border-black/10 bg-brand-beige",
              )}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  {zone ? (
                    <>
                      <div className="font-heading text-sm font-bold text-brand-dark">
                        {zone.label}
                      </div>
                      <div className="font-body text-xs text-brand-dark/60 mb-2">
                        {zone.beschreibung}
                      </div>
                      {preis ? (
                        <div className="font-display text-2xl font-black text-brand-orange">
                          {euro(preis.brutto)}{" "}
                          <span className="font-body text-sm font-normal text-brand-dark/55">
                            inkl. MwSt. ({euro(preis.netto)} netto) — Leistungspreis inkl. Anfahrt
                          </span>
                        </div>
                      ) : (
                        <div className="font-body text-sm text-brand-dark/75">
                          Preis auf individuelle Anfrage — wir bestätigen Ihnen
                          Leistungspreis + Anfahrtsanteil vor dem Termin per E-Mail.
                        </div>
                      )}
                      <div className="font-body text-xs text-brand-dark/65 mt-2">
                        <strong className="text-brand-orange">100 % Verrechnung:</strong>{" "}
                        Bei Beauftragung wird die Dachcheck-Pauschale voll auf die
                        Rechnung angerechnet.
                      </div>
                    </>
                  ) : (
                    <div className="font-body text-sm text-brand-dark/60">
                      PLZ eingeben — wir erkennen Ihre Anfahrtszone und zeigen den
                      Preis sofort an.
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => springeZuAbschnitt("anfahrt-zonen")}
                className="mt-3 inline-flex items-center gap-1 font-body text-xs text-brand-orange bg-transparent border-none cursor-pointer p-0 hover:underline"
              >
                <CircleHelp className="w-3.5 h-3.5" />
                Wie funktionieren die Anfahrtszonen?
              </button>
            </div>
          </>
        )}

        <div>
          <label className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark/60 mb-2 block">
            Ihr Anliegen
          </label>
          <textarea
            rows={4}
            name="anliegen"
            placeholder="Beschreiben Sie kurz Ihr Anliegen (z. B. undichte Stelle, Alter des Dachs, geplante Sanierung) …"
            className="w-full px-4 py-3 bg-brand-beige border border-black/10 rounded-xl font-body text-base sm:text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
          />
          <p className="font-body text-[11px] text-brand-dark/45 mt-1">
            Fotos können Sie der E-Mail im nächsten Schritt einfach anhängen.
          </p>
        </div>

        {/* § 632 BGB — individuelle Preisbestätigung */}
        {leistung === "dachcheck" && (
          <div className="rounded-xl bg-brand-beige border border-black/10 p-4 font-body text-xs text-brand-dark/70 leading-relaxed">
            <strong className="text-brand-dark">So geht es weiter:</strong> Sie
            erhalten vor dem Termin eine E-Mail-Bestätigung mit dem konkreten
            Preis und dem Verrechnungshinweis. Erst wenn Sie diese Bestätigung
            beantworten, ist der kostenpflichtige Vor-Ort-Termin verbindlich
            (individuelle Preisbestätigung nach § 632 BGB).
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider cursor-pointer border-none shadow-[0_4px_24px_rgba(236,102,8,0.3)] hover:bg-brand-orange-dark transition-all min-h-[48px] flex items-center justify-center gap-2"
        >
          <CalendarCheck className="w-4 h-4" />
          Termin verbindlich anfragen
        </button>
      </form>
    </div>
  )
}

/* ───────────────────── Tab 2: Leistungen & Preise ───────────────────── */

function LeistungenTab({ springeZuAbschnitt }: { springeZuAbschnitt: (a: string) => void }) {
  const dachcheckAb = dachcheckPreis(zonen.lokal)
  const dachcheckStandard = dachcheckPreis(zonen.standard)

  const erklaerKacheln = [
    { anker: "stundenloehne", titel: "Stundenlöhne & Arbeitswerte", text: "Wie wir Arbeitszeit fair und nachvollziehbar abrechnen." },
    { anker: "pauschalen", titel: "Halbtag, Tag & Festpreis", text: "Wann Pauschalen sinnvoll sind — und was sie enthalten." },
    { anker: "anfahrt-zonen", titel: "Anfahrt & Zonen", text: "Warum die Anfahrt pauschal je Zone berechnet wird." },
    { anker: "angebot-aufmass", titel: "Angebot, Aufmaß & Dachcheck", text: "Was kostenlos ist, was kostet — und was verrechnet wird." },
    { anker: "wartung", titel: "Wartung", text: "Was eine regelmäßige Dachwartung kostet und bringt." },
    { anker: "entsorgung", titel: "Entsorgung & Kleinmaterial", text: "Wie Schutt, Entsorgung und Kleinteile abgerechnet werden." },
  ]

  return (
    <section className="bg-brand-beige py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-2">
          Buchbare <span className="text-brand-orange">Leistungen</span>
        </h2>
        <p className="font-body text-sm text-brand-dark/60 mb-6 max-w-2xl">
          Online buchbar sind aktuell Erstberatung und Dachcheck. Alle weiteren
          Arbeiten kalkulieren wir individuell — transparent nach den Regeln im
          Reiter „So rechnen wir ab&ldquo;.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <div className="font-heading text-base font-bold text-brand-dark mb-1">
              Erstberatung Telefon / Video
            </div>
            <div className="font-display text-2xl font-black text-brand-orange mb-2">0 €</div>
            <p className="font-body text-sm text-brand-dark/60 m-0">
              Kostenlos und anfahrtsfrei, nach Zuarbeit Ihrer Unterlagen/Fotos.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <div className="font-heading text-base font-bold text-brand-dark mb-1">
              Dachcheck vor Ort
            </div>
            {dachcheckAb && dachcheckStandard && (
              <div className="font-display text-2xl font-black text-brand-orange mb-2">
                {euro(dachcheckAb.brutto)} – {euro(dachcheckStandard.brutto)}
                <span className="font-body text-sm font-normal text-brand-dark/55 ml-2 block sm:inline">
                  inkl. MwSt. ({euro(dachcheckAb.netto)} – {euro(dachcheckStandard.netto)} netto), je nach Zone
                </span>
              </div>
            )}
            <p className="font-body text-sm text-brand-dark/60 m-0">
              Leistungspreis + Anfahrt nach Zone, bei Beauftragung zu 100 %
              verrechnet. Außerhalb von ca. 25 km auf Anfrage.
            </p>
          </div>
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-6">
          So setzen sich unsere <span className="text-brand-orange">Preise</span> zusammen
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {erklaerKacheln.map((k) => (
            <button
              key={k.anker}
              onClick={() => springeZuAbschnitt(k.anker)}
              className="text-left bg-white rounded-2xl p-5 border border-black/5 cursor-pointer hover:border-brand-orange/40 transition-colors group"
            >
              <div className="font-heading text-sm font-bold text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">
                {k.titel}
              </div>
              <p className="font-body text-xs text-brand-dark/55 leading-relaxed m-0 mb-3">{k.text}</p>
              <span className="inline-flex items-center gap-1 font-heading text-[11px] font-bold uppercase tracking-wide text-brand-orange">
                Nachlesen <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>

        <Link
          href="/leistungen"
          className="inline-flex items-center gap-2 font-body text-sm text-brand-orange no-underline hover:underline"
        >
          Alle handwerklichen Leistungen im Überblick
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

/* ───────────────────── Tab 3: So rechnen wir ab ───────────────────── */

function AbrechnungTab() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-4">
          So rechnen wir <span className="text-brand-orange">ab</span>
        </h2>
        <div className="rounded-2xl bg-brand-orange/5 border-l-4 border-brand-orange p-5 mb-10 font-body text-sm md:text-base text-brand-dark/80 leading-relaxed">
          {abrechnungIntro}
        </div>

        {abrechnungAbschnitte.map((a) => (
          <div key={a.id} id={`abschnitt-${a.id}`} className="scroll-mt-36 mb-12">
            <h3 className="font-display text-xl md:text-2xl font-black text-brand-dark mb-4 pb-2 border-b border-black/10">
              <span className="text-brand-orange-dark mr-2">{a.nummer}.</span>
              {a.titel}
            </h3>
            {a.bloecke.map((b, i) => (
              <AbrechnungBlockView key={i} block={b} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function AbrechnungBlockView({ block }: { block: AbrechnungBlock }) {
  if (block.art === "absatz") {
    return (
      <p className="font-body text-sm md:text-base text-brand-dark/80 leading-relaxed mb-4">
        {block.text}
      </p>
    )
  }
  if (block.art === "zwischentitel") {
    return (
      <h4 className="font-heading text-base font-bold text-brand-dark mt-6 mb-2">
        {block.text}
      </h4>
    )
  }
  if (block.art === "liste") {
    return (
      <ul className="mb-4 space-y-2 pl-0 list-none">
        {block.punkte.map((p, i) => (
          <li key={i} className="font-body text-sm md:text-base text-brand-dark/80 leading-relaxed flex gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-orange mt-[9px]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (block.art === "tabelle") {
    return (
      <div className="overflow-x-auto mb-5">
        <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
          <thead>
            <tr>
              {block.spalten.map((s, i) => (
                <th
                  key={i}
                  className="bg-brand-orange text-white text-left font-heading text-xs font-bold uppercase tracking-wide p-3"
                >
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.zeilen.map((z, zi) => (
              <tr key={zi} className={zi % 2 === 1 ? "bg-brand-beige/60" : "bg-white"}>
                {z.map((c, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "p-3 font-body text-brand-dark/85 border-t border-black/5 align-top",
                      ci === 0 && "font-heading font-semibold text-brand-orange-dark",
                    )}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (block.art === "box") {
    return (
      <div className="rounded-xl border-[1.5px] border-brand-orange bg-brand-orange/5 p-4 mb-5">
        {block.titel && (
          <div className="font-heading text-sm font-bold text-brand-orange-dark mb-1">
            {block.titel}
          </div>
        )}
        <p className="font-body text-sm text-brand-dark/85 leading-relaxed m-0">{block.text}</p>
      </div>
    )
  }
  // hinweis
  return (
    <p className="font-body text-xs text-brand-dark/55 italic leading-relaxed mb-4">
      {block.text}
    </p>
  )
}

/* ───────────────────────── Tab 4: Kontakt ───────────────────────── */

function KontaktTab() {
  return (
    <section className="bg-brand-beige py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-6">
          Büro &amp; <span className="text-brand-orange">Erreichbarkeit</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-black/5 flex items-start gap-4">
            <Phone className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <div className="font-heading text-sm font-bold text-brand-dark mb-1">Telefon</div>
              <a href={company.phone.href} className="font-body text-sm text-brand-dark/75 no-underline hover:text-brand-orange">
                {company.phone.display}
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5 flex items-start gap-4">
            <Mail className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <div className="font-heading text-sm font-bold text-brand-dark mb-1">E-Mail</div>
              <a href={company.email.href} className="font-body text-sm text-brand-dark/75 no-underline hover:text-brand-orange break-all">
                {company.email.display}
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5 flex items-start gap-4">
            <Clock className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <div className="font-heading text-sm font-bold text-brand-dark mb-1">Sprechzeiten</div>
              <div className="font-body text-sm text-brand-dark/75">
                {company.hours.display}
                <br />
                {company.hours.weekend}
                <br />
                <a href={company.phone.href} className="text-brand-orange no-underline hover:underline">
                  {company.hours.appointments} →
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-black/5 flex items-start gap-4">
            <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <div className="font-heading text-sm font-bold text-brand-dark mb-1">Adresse</div>
              <div className="font-body text-sm text-brand-dark/75">
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline hover:bg-brand-orange-dark transition-colors min-h-[48px]"
        >
          Zum Kontaktformular
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
