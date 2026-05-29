"use client"

import type { Metadata } from "next"
import { motion } from "framer-motion"
import {
  Banknote,
  Building2,
  Sun,
  Leaf,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Gift,
  Percent,
  Landmark,
  GraduationCap,
} from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

type Program = {
  title: string
  subtitle: string
  amount: string
  who: string
  notes?: string
}

const daemmung: Program[] = [
  {
    title: "BAFA — BEG EM",
    subtitle: "Einzelmaßnahmen Gebäudehülle",
    amount: "bis 20% Zuschuss",
    who: "Privat, WEG, Gewerbe",
    notes:
      "15% Grundförderung + 5% iSFP-Bonus. 30.000 € förderfähige Kosten je Wohneinheit (mit iSFP 60.000 €). Antrag vor Auftragsvergabe.",
  },
  {
    title: "KfW 261 — Wohngebäude-Kredit",
    subtitle: "Effizienzhaus-Sanierung",
    amount: "bis 45% Tilgungszuschuss",
    who: "Selbstnutzer & Vermieter",
    notes:
      "Kredit bis 120.000 €/WE (mit EE-Klasse 150.000 €). Zins Januar 2026 ca. 2,45–3,12% p.a.",
  },
  {
    title: "§ 35c EStG",
    subtitle: "Steuerbonus für energetische Sanierung",
    amount: "20% über 3 Jahre, max. 40.000 €",
    who: "Selbstnutzende Eigentümer",
    notes:
      "Objekt ≥ 10 Jahre alt. Fachunternehmer-Bescheinigung Pflicht. Nicht kombinierbar mit BAFA/KfW für dieselbe Maßnahme.",
  },
]

const solar: Program[] = [
  {
    title: "SolarPLUS Berlin",
    subtitle: "IBB-Zuschuss für PV + Speicher",
    amount: "Pauschalen + Zuschläge",
    who: "Berliner Eigentümer (privat, WEG, Gewerbe)",
    notes:
      "Neustart 08.01.2026, Fördervolumen 13 Mio. €. SolarPLUS S (EFH/ZFH) und SolarPLUS L (MFH/Gewerbe). Denkmalgerechte PV förderfähig.",
  },
  {
    title: "KfW 270 — Erneuerbare Energien",
    subtitle: "Förderkredit für PV & Speicher",
    amount: "bis 100% der Investition",
    who: "Privat, Gewerbe, Landwirte",
    notes:
      "Max. 150 Mio. € je Vorhaben. Laufzeit 5–30 Jahre, bis 5 tilgungsfreie Jahre. Speicher erst nach Kreditzusage bestellen.",
  },
  {
    title: "0% USt nach § 12 UStG",
    subtitle: "Nullsteuersatz für PV ≤ 30 kWp",
    amount: "Ersparnis wie 19% Rabatt",
    who: "Alle Anlagenbetreiber",
    notes:
      "Gilt für Module, Wechselrichter, Speicher und Montage — automatisch beim Kauf. Auch 2026 unverändert gültig.",
  },
  {
    title: "Einspeisevergütung (EEG)",
    subtitle: "Garantierte Vergütung für 20 Jahre",
    amount: "7,78 ct/kWh (Überschuss)",
    who: "Alle Anlagenbetreiber",
    notes:
      "Stand Feb–Juli 2026, bis 10 kWp. Volleinspeisung 12,34 ct/kWh. Halbjährlich 1% Degression.",
  },
]

const gruendach: Program[] = [
  {
    title: "GründachPLUS Berlin",
    subtitle: "IBB-Zuschuss für Dach- und Fassadenbegrünung",
    amount: "95–180 €/m² Dachbegrünung",
    who: "Berliner Eigentümer, Verfügungsberechtigte",
    notes:
      "Ab 100 m² Dachfläche. Biodiversitätsbonus +7,50 €/m². Solar-Gründach-Kombi: +40 €/m². Fassadenbegrünung: 50% der Kosten.",
  },
]

const brandenburg: Program[] = [
  {
    title: "Brandenburg-Kredit Wohnungsbau",
    subtitle: "ILB — energieeffizienter Wohnungsbau",
    amount: "+5% Tilgungszuschuss zur KfW",
    who: "Privat, Genossenschaften, Investoren",
    notes:
      "Ergänzt den KfW-Kredit. +7,5% bei EH 40 NH. Für Sanierung und Neubau in Brandenburg.",
  },
  {
    title: "Wohneigentum – Modernisierung",
    subtitle: "ILB — nachhaltige Sanierung",
    amount: "bis 30.000 € Zuschuss",
    who: "Selbstnutzer in Brandenburg",
    notes: "Zusätzlich bis 230.000 € zinsloses Darlehen möglich.",
  },
]

const kombinationstipps = [
  "Zuerst Antrag, dann Auftrag — bei BAFA, KfW und IBB muss der Antrag vor der Auftragsvergabe gestellt werden. Sonst verfällt die Förderung.",
  "iSFP lohnt fast immer: Einmal 650 € für die Energieberatung, dann +5% Bonus auf jede Maßnahme in den nächsten 15 Jahren.",
  "BAFA ODER § 35c — nie doppelt. Faustregel: hohe Steuerlast → Steuerbonus; geringe Steuerlast → BAFA-Zuschuss.",
  "Für PV in Berlin sind bis zu vier Töpfe kombinierbar: KfW 270 + SolarPLUS + 0% USt + Einspeisevergütung.",
  "Dachsanierung, Gründach und PV können in einem Projekt BEG EM, GründachPLUS, SolarPLUS und KfW 270 gleichzeitig nutzen.",
]

export default function FoerderungPage() {
  return (
    <>
      <PageHero
        title="Förderung —"
        highlight="einfach erklärt"
        subtitle="Dach, Dämmung, Solar oder Gründach: Der Staat gibt viel Geld dazu — wenn man weiß, wie. Als Meisterbetrieb mit eigener Energieberatung im Haus machen wir das jeden Tag. Hier erklären wir, was es gibt, wie viel, und wer was bekommt — ohne Amtsdeutsch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Förderung", href: "/foerderung" },
        ]}
      />

      {/* Intro + Energieberatung USP */}
      <section className="bg-brand-beige py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Warum das wichtig ist
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Ein gutes Angebot ist nur die{" "}
              <span className="text-brand-orange">halbe Rechnung</span>
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark/70 leading-relaxed mb-6">
              Wer ein Dach saniert, eine Fassade dämmt oder eine PV-Anlage baut,
              investiert schnell einen fünf- bis sechsstelligen Betrag. Dass davon
              bei kluger Planung 15 bis 40 Prozent aus öffentlichen Mitteln
              zurückfließen, wissen die wenigsten. Wir schon.
            </p>
            <p className="font-body text-base md:text-lg text-brand-dark/70 leading-relaxed">
              Der Unterschied zu vielen anderen Handwerksbetrieben: Bei uns sitzt
              die Energieberatung im selben Haus. Wir sind{" "}
              <strong className="text-brand-dark">
                Dachdecker-Meisterbetrieb
              </strong>{" "}
              <em>und</em>{" "}
              <strong className="text-brand-dark">
                zertifizierte Energieberater
              </strong>{" "}
              — das heißt: Sie brauchen niemanden dazuzukaufen. Die
              Energieberatung, den individuellen Sanierungsfahrplan (iSFP) und
              die Fachunternehmer-Erklärung bekommen Sie aus einer Hand.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex items-start gap-4 p-6 rounded-2xl bg-white border border-brand-orange/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                Energieberater im Haus
              </h3>
              <p className="font-body text-sm md:text-base text-brand-dark/70 leading-relaxed">
                <strong>Steve Masch</strong> ist nicht nur Dachdeckermeister,
                sondern auch vom BAFA anerkannter Energieberater. Das heißt:
                Den <strong>individuellen Sanierungsfahrplan (iSFP)</strong> —
                das Dokument, das Ihnen alleine für die Beratung bis zu 650 €
                Zuschuss und dauerhaft 5 % Bonus auf jede künftige Maßnahme
                bringt — erstellen wir selbst. Sie müssen keinen externen
                Berater dazuholen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FörderService PLUS — Promo-Banner */}
      <section className="bg-white pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.a
            href="/foerderung/foerderservice-plus"
            className="group block rounded-3xl bg-brand-dark p-7 sm:p-9 md:p-12 relative overflow-hidden no-underline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center flex-shrink-0">
                <Gift className="w-7 h-7 text-brand-orange" />
              </div>
              <div className="flex-1">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 block">
                  Unser Komplett-Service
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-2">
                  FörderService PLUS — Zuschüsse sichern, ohne Papierkram
                </h3>
                <p className="font-body text-sm md:text-base text-white/60 leading-relaxed max-w-2xl">
                  Bis 20 % BAFA-Zuschuss für Ihre energetische Dachsanierung. Wir
                  übernehmen Antrag, iSFP und Nachweise — komplett aus einer Hand.
                </p>
              </div>
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange inline-flex items-center gap-2 flex-shrink-0 group-hover:gap-3 transition-all">
                Mehr erfahren →
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Die 3 Förderungsarten — Einsteiger-Erklärer */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Grundlagen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-4">
              Drei Arten, wie der Staat{" "}
              <span className="text-brand-orange">dazugibt</span>
            </h2>
            <p className="font-body text-base text-brand-dark/60 max-w-2xl mx-auto leading-relaxed">
              Fast jede Förderung fällt in eine dieser drei Schubladen. Wenn Sie
              das verstanden haben, wissen Sie schon 80 % über Fördermittel.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 bg-brand-beige"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
                Zuschuss
              </h3>
              <p className="font-body text-sm text-brand-dark/70 leading-relaxed mb-3">
                Geld, das Sie <strong>nie zurückzahlen</strong> müssen. Kommt
                meist als Überweisung nach Abschluss der Arbeiten.
              </p>
              <p className="font-body text-xs text-brand-dark/55 leading-relaxed">
                <strong>Beispiele:</strong> BAFA (Dämmung), SolarPLUS Berlin,
                GründachPLUS Berlin, KfW 458 (Heizung).
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 bg-brand-beige"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
                Günstiger Kredit
              </h3>
              <p className="font-body text-sm text-brand-dark/70 leading-relaxed mb-3">
                Ein Darlehen zu <strong>besseren Zinsen</strong> als bei der
                Hausbank — oft mit Tilgungszuschuss obendrauf.
              </p>
              <p className="font-body text-xs text-brand-dark/55 leading-relaxed">
                <strong>Beispiele:</strong> KfW 261 (Sanierung), KfW 270 (PV
                & Speicher), ILB Brandenburg-Kredit.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 bg-brand-beige"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
                Steuervorteil
              </h3>
              <p className="font-body text-sm text-brand-dark/70 leading-relaxed mb-3">
                Sie bezahlen die Rechnung voll — bekommen aber{" "}
                <strong>über die Steuererklärung</strong> einen Teil zurück.
              </p>
              <p className="font-body text-xs text-brand-dark/55 leading-relaxed">
                <strong>Beispiele:</strong> § 35c EStG (20 % der
                Sanierungskosten), 0 % MwSt. auf PV-Anlagen.
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            className="font-body text-sm md:text-base text-brand-dark/70 text-center mt-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Gut zu wissen: Diese drei Arten lassen sich oft{" "}
            <strong>kombinieren</strong> — zum Beispiel BAFA-Zuschuss + KfW-Kredit
            für dasselbe Projekt. Nicht kombinierbar sind meist BAFA und
            Steuerbonus für dieselbe Maßnahme. Welche Kombi für Sie die beste
            ist, rechnen wir gemeinsam durch.
          </motion.p>
        </div>
      </section>

      {/* Section per category */}
      <ProgramSection
        icon={Building2}
        eyebrow="Dach & Fassade"
        title="Dämmung, Sanierung, energetische Modernisierung"
        programs={daemmung}
      />

      <ProgramSection
        icon={Sun}
        eyebrow="Photovoltaik"
        title="Solar, Speicher und Einspeisung"
        programs={solar}
        background="beige"
      />

      <ProgramSection
        icon={Leaf}
        eyebrow="Grün am Haus"
        title="Gründach und Fassadenbegrünung"
        programs={gruendach}
      />

      <ProgramSection
        icon={Banknote}
        eyebrow="Land Brandenburg"
        title="Zusatzförderung außerhalb Berlins"
        programs={brandenburg}
        background="beige"
      />

      {/* Kombinations-Tipps */}
      <section className="bg-brand-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Strategie
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
              So holen Sie das{" "}
              <span className="text-brand-orange">Maximum heraus</span>
            </h2>
            <p className="font-body text-base text-white/60 leading-relaxed max-w-2xl">
              Förderungen sind nicht kompliziert — aber sie folgen klaren Regeln.
              Wer die Reihenfolge kennt, spart fünfstellig. Fünf Regeln, die wir
              jedem Kunden vorab erklären:
            </p>
          </motion.div>

          <motion.ul
            className="list-none p-0 space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {kombinationstipps.map((tip, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                  <span className="font-heading text-sm font-bold text-brand-orange">
                    {i + 1}
                  </span>
                </div>
                <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                  {tip}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AlertTriangle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-white/80 leading-relaxed">
              <strong className="text-white">Wichtig:</strong> Fördertöpfe,
              Sätze und Regeln ändern sich jährlich. Die hier genannten Werte
              entsprechen dem Stand April 2026 — verbindliche Zusagen macht
              ausschließlich die jeweilige Förderstelle (BAFA, KfW, IBB, ILB).
              Wir beraten nach bestem Wissen, ersetzen aber keine Energie-
              oder Steuerberatung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Was wir konkret tun */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Unser Beitrag
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Was Sie von <span className="text-brand-orange">uns</span>{" "}
              bekommen
            </h2>
          </motion.div>

          <motion.ul
            className="list-none p-0 grid md:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Einschätzung, welche Fördertöpfe für Ihr Projekt passen — kostenlos im Erstgespräch",
              "Individueller Sanierungsfahrplan (iSFP) von unserem eigenen Energieberater",
              "Fachunternehmer-Erklärung (BAFA-Pflicht) direkt vom Meisterbetrieb",
              "Abstimmung der Reihenfolge: Antrag → Auftrag → Umsetzung",
              "Alle Nachweise (Rechnungen, Datenblätter, U-Werte) projektfertig",
              "Transparente Kalkulation: Netto vs. Netto-nach-Förderung",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-brand-beige"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm md:text-base text-brand-dark/80 leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Projekt in Sicht? Lassen Sie uns rechnen."
            subtitle="Beratung ist kostenlos. Wir sagen Ihnen in einem Gespräch, wie hoch die Förderung für Ihr konkretes Vorhaben ausfallen kann."
            buttonText="Beratung anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}

function ProgramSection({
  icon: Icon,
  eyebrow,
  title,
  programs,
  background = "white",
}: {
  icon: typeof Banknote
  eyebrow: string
  title: string
  programs: Program[]
  background?: "white" | "beige"
}) {
  return (
    <section
      className={`py-16 md:py-20 ${
        background === "beige" ? "bg-brand-beige" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-10 flex items-start gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-brand-orange" />
          </div>
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 block">
              {eyebrow}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark leading-tight">
              {title}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {programs.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-black/5 hover:border-brand-orange/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-3.5 h-3.5 text-brand-orange" />
                <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  {p.who}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                {p.title}
              </h3>
              <p className="font-body text-sm text-brand-dark/55 mb-3">
                {p.subtitle}
              </p>
              <p className="font-heading text-base font-bold text-brand-orange mb-3">
                {p.amount}
              </p>
              {p.notes && (
                <p className="font-body text-xs text-brand-dark/60 leading-relaxed pt-3 border-t border-brand-dark/5">
                  {p.notes}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
