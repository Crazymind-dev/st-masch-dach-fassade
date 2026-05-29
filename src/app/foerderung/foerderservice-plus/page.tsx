"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Banknote,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileSignature,
  HandCoins,
  Home,
  Layers,
  PenLine,
  Percent,
  Ruler,
  Sparkles,
  Sun,
  Wrench,
} from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import { GlowButton } from "@/components/ui/glow-button"
import JsonLd from "@/components/seo/JsonLd"
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo"
import { site } from "@/lib/config"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* ────────────────────  FÖRDERRECHNER-LOGIK  ──────────────────── */

const eur = (n: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

type FoerderResult = {
  zuschuss: number // € Zuschuss, der ausgezahlt wird
  eigenanteil: number // € die nach Abzug des Zuschusses bleiben
  foerderfaehig: number // € Kosten, die zählen (nach Deckelung)
  capped: boolean // true, wenn die Kosten über dem Deckel liegen
}

/**
 * BAFA BEG-EM (Einzelmaßnahme Gebäudehülle):
 *   ohne iSFP: 15 % auf max. 30.000 € förderfähige Kosten  → max.  4.500 €
 *   mit  iSFP: 20 % auf max. 60.000 € förderfähige Kosten  → max. 12.000 €
 *
 * Die zentrale Entscheidung steckt in der DECKELUNG:
 *   Nicht der Zuschuss wird gedeckelt, sondern die FÖRDERFÄHIGEN KOSTEN
 *   (30.000 € bzw. 60.000 €). Liegen `kosten` darüber, zählt nur der Deckel —
 *   der Zuschuss steigt also nicht weiter. `capped` ist dann `true`, damit die
 *   UI einen Hinweis anzeigen kann.
 */
function computeFoerderung(kosten: number, withISFP: boolean): FoerderResult {
  const rate = withISFP ? 0.2 : 0.15
  const cap = withISFP ? 60000 : 30000
  const foerderfaehig = Math.min(kosten, cap)
  const zuschuss = Math.round(foerderfaehig * rate)
  const eigenanteil = Math.max(kosten - zuschuss, 0)
  return { zuschuss, eigenanteil, foerderfaehig, capped: kosten > cap }
}

type SteuerResult = {
  gesamt: number // gesamte Steuerersparnis über 3 Jahre
  jahre: [number, number, number] // 7 % / 7 % / 6 % je Jahr
  capped: boolean // true, wenn die Kosten über 200.000 € liegen
}

/**
 * Steuerbonus nach § 35c EStG (selbstgenutztes Wohneigentum, Gebäude ≥ 10 Jahre):
 *   20 % der Sanierungskosten, verteilt auf 7 % / 7 % / 6 % über drei Jahre,
 *   auf max. 200.000 € förderfähige Kosten  → max. 40.000 € Steuerersparnis.
 *   Nicht mit BAFA/KfW für dieselbe Maßnahme kombinierbar.
 */
function computeSteuerbonus(kosten: number): SteuerResult {
  const ff = Math.min(kosten, 200000)
  const y1 = Math.round(ff * 0.07)
  const y2 = Math.round(ff * 0.07)
  const y3 = Math.round(ff * 0.06)
  return { gesamt: y1 + y2 + y3, jahre: [y1, y2, y3], capped: kosten > 200000 }
}

/* ─────────────────────────  DATA  ───────────────────────── */

const gefoerdert: { icon: typeof Home; title: string; text: string }[] = [
  {
    icon: Home,
    title: "Energetische Dachsanierung",
    text: "Steil- und Flachdach: neue Dämmung der Dachfläche nach aktuellem Effizienzstandard.",
  },
  {
    icon: Sun,
    title: "Dachfenster",
    text: "Einbau oder Erneuerung von Dachfenstern inklusive Sonnenschutz.",
  },
  {
    icon: Layers,
    title: "Fassadendämmung",
    text: "Wärmedämmung der Fassade (WDVS oder vorgehängte hinterlüftete Fassade).",
  },
  {
    icon: Wrench,
    title: "Gauben",
    text: "Einbau oder energetische Sanierung von Dachgauben.",
  },
]

const ablauf: { icon: typeof PenLine; title: string; text: string }[] = [
  {
    icon: PenLine,
    title: "Entscheidung zum iSFP",
    text: "Gemeinsam klären wir, ob ein individueller Sanierungsfahrplan (iSFP) sinnvoll ist — er hebt den Zuschuss von 15 % auf 20 % an.",
  },
  {
    icon: FileSignature,
    title: "Bevollmächtigung",
    text: "Sie bevollmächtigen uns als Ihren Dachdecker-Meisterbetrieb, die Förderung für Sie zu beantragen und abzuwickeln.",
  },
  {
    icon: ClipboardList,
    title: "Formular ausfüllen",
    text: "Wir bereiten den BAFA-Antrag vor und reichen ihn ein — vor Auftragsvergabe, damit die Förderung nicht verfällt.",
  },
  {
    icon: Wrench,
    title: "Sanierung durchführen",
    text: "Nach der Förderzusage setzen wir die Arbeiten fachgerecht um und dokumentieren alle geforderten technischen Nachweise.",
  },
  {
    icon: CheckCircle2,
    title: "Abschluss an die BAFA",
    text: "Wir bestätigen den Abschluss und reichen die Fachunternehmer-Erklärung sowie alle Nachweise ein. Der Zuschuss wird ausgezahlt.",
  },
]

const vorteile: string[] = [
  "Alles aus einer Hand: Beratung, Antragstellung und Umsetzung übernehmen wir komplett für Sie.",
  "Fachgerechte Planung durch Dachdeckermeister und zertifizierten Energieberater im selben Haus.",
  "Maximale Förderquote: Wir holen über den iSFP-Bonus die vollen 20 % heraus.",
  "Ausführung durch den zertifizierten Meisterbetrieb — kein Subunternehmer-Risiko.",
  "Vollständige energetische Bewertung und Dokumentation Ihres Gebäudes.",
  "Zugang zu langfristiger Förderfähigkeit über den iSFP — 15 Jahre lang nutzbar.",
  "Zeitersparnis: Wir kümmern uns um den kompletten Behördenweg und das Amtsdeutsch.",
  "Hohe Planungssicherheit: Die Förderfähigkeit prüfen wir vorab, bevor ein Auftrag vergeben wird.",
  "Transparente Kalkulation: Sie sehen vorab, was die Sanierung nach Förderung kostet.",
  "Nachhaltige Lösung: niedrigere Heizkosten und ein deutlich besserer Gebäudewert.",
]

const anforderungen: { bauteil: string; uwert: string }[] = [
  { bauteil: "Dachflächen", uwert: "max. 0,14 W/(m²·K)" },
  { bauteil: "Gauben", uwert: "max. 0,20 W/(m²·K)" },
  { bauteil: "Dachfenster", uwert: "max. 1,0 W/(m²·K)" },
  { bauteil: "Fassaden", uwert: "max. 0,20 W/(m²·K)" },
]

const rechenbeispiele: {
  titel: string
  szenario: string
  invest: string
  quote: string
  zuschuss: string
}[] = [
  {
    titel: "Steildach ohne iSFP",
    szenario: "Energetische Neueindeckung eines Einfamilienhauses",
    invest: "30.000 € förderfähige Kosten",
    quote: "15 % BEG-Einzelmaßnahme",
    zuschuss: "4.500 € Zuschuss",
  },
  {
    titel: "Dach & Fassade mit iSFP",
    szenario: "Dachdämmung + Fassadendämmung, mit Sanierungsfahrplan",
    invest: "60.000 € förderfähige Kosten",
    quote: "20 % (15 % + 5 % iSFP-Bonus)",
    zuschuss: "12.000 € Zuschuss",
  },
  {
    titel: "Alternative Steuerbonus",
    szenario: "§ 35c EStG für selbstgenutztes Wohneigentum",
    invest: "über 3 Jahre verteilt (7 %–7 %–6 %)",
    quote: "20 % der Sanierungskosten",
    zuschuss: "bis 40.000 € Steuerersparnis",
  },
]

const faqs: { question: string; answer: string }[] = [
  {
    question: "Was ist der FörderService PLUS?",
    answer:
      "Der FörderService PLUS bündelt Energieberatung, Fördermittel-Antrag und fachgerechte Ausführung in einer Hand. Sie bekommen die komplette bürokratische Abwicklung der staatlichen Zuschüsse für Ihre energetische Dach- und Fassadensanierung — von der ersten Beratung bis zur Auszahlung.",
  },
  {
    question: "Was bedeutet BEG EM?",
    answer:
      "BEG EM steht für die Bundesförderung für effiziente Gebäude — Einzelmaßnahmen. Damit fördert der Staat einzelne energetische Sanierungsschritte an der Gebäudehülle, etwa die Dämmung von Dach oder Fassade, mit einem Zuschuss von 15 % (mit iSFP 20 %) der förderfähigen Kosten.",
  },
  {
    question: "Wie hoch ist die Förderung?",
    answer:
      "Ohne individuellen Sanierungsfahrplan (iSFP) erhalten Sie 15 % Zuschuss auf bis zu 30.000 € förderfähige Kosten je Wohneinheit und Jahr — also bis zu 4.500 €. Mit iSFP steigt der Zuschuss auf 20 % bei bis zu 60.000 € förderfähigen Kosten — also bis zu 12.000 €. Alternativ ist über § 35c EStG ein Steuerbonus von bis zu 40.000 € über drei Jahre möglich.",
  },
  {
    question: "Was wird gefördert?",
    answer:
      "Gefördert werden energetische Dachsanierungen an Steil- und Flachdächern, der Einbau oder die Erneuerung von Dachfenstern mit Sonnenschutz, die Wärmedämmung der Fassade sowie der Einbau und die Sanierung von Dachgauben.",
  },
  {
    question: "Wie lange dauert der Prozess?",
    answer:
      "Von der Antragstellung bis zur Förderzusage vergehen je nach Auslastung der BAFA meist wenige Wochen bis Monate. Wichtig ist nur eines: Der Antrag muss gestellt sein, bevor der Auftrag vergeben wird. Um diese Reihenfolge kümmern wir uns.",
  },
  {
    question: "Wie alt muss das Gebäude sein?",
    answer:
      "Für die BEG-Einzelmaßnahme muss das Gebäude bei Antragstellung mindestens fünf Jahre alt sein. Beim alternativen Steuerbonus nach § 35c EStG gilt ein Mindestalter von zehn Jahren.",
  },
  {
    question: "Muss ich selbst im Haus wohnen?",
    answer:
      "Für die BEG-Einzelmaßnahme ist eine Selbstnutzung nicht erforderlich — auch Vermieter, Wohnungseigentümergemeinschaften (WEG) und Eigentümer können die Förderung in Anspruch nehmen. Der Steuerbonus nach § 35c EStG setzt dagegen selbstgenutztes Wohneigentum voraus.",
  },
  {
    question: "Welche technischen Voraussetzungen gelten?",
    answer:
      "Die sanierten Bauteile müssen vorgegebene Dämmwerte (U-Werte) einhalten: Dachflächen max. 0,14 W/(m²·K), Gauben und Fassaden max. 0,20 W/(m²·K), Dachfenster max. 1,0 W/(m²·K). Diese Werte erreichen wir mit der passenden Dämmstoffstärke und dokumentieren sie für den Nachweis.",
  },
  {
    question: "Brauche ich einen Energieberater?",
    answer:
      "Für die Grundförderung von 15 % ist kein externer Energieberater nötig. Für den iSFP-Bonus (zusätzliche 5 %) wird ein individueller Sanierungsfahrplan benötigt — den erstellen wir selbst, da Steve Masch BAFA-anerkannter Energieberater ist. Sie müssen niemanden dazukaufen.",
  },
  {
    question: "Was kostet mich der FörderService PLUS?",
    answer:
      "Das Erstgespräch und die Einschätzung Ihrer Fördermöglichkeiten sind kostenlos. Wie sich Energieberatung, iSFP und die eigentliche Sanierung kalkulieren, besprechen wir transparent vorab — inklusive der Frage, welche Kosten selbst förderfähig sind.",
  },
]

/* ─────────────────────────  PAGE  ───────────────────────── */

export default function FoerderServicePlusPage() {
  const url = `${site.baseUrl}/foerderung/foerderservice-plus`

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "FörderService PLUS — Dachsanierung mit BAFA-Förderung",
          description:
            "Komplette Abwicklung der staatlichen Zuschüsse für energetische Dach- und Fassadensanierung: Beratung, iSFP, Antrag und fachgerechte Umsetzung aus einer Hand.",
          url,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.baseUrl },
          { name: "Förderung", url: `${site.baseUrl}/foerderung` },
          { name: "FörderService PLUS", url },
        ])}
      />

      <PageHero
        title="Jetzt staatliche"
        highlight="Zuschüsse sichern"
        subtitle="Fördermöglichkeiten nutzen und bei der Dachsanierung profitieren. Mit dem FörderService PLUS übernehmen wir den kompletten Behördenweg — Beratung, Antrag und Umsetzung aus einer Hand."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Förderung", href: "/foerderung" },
          { label: "FörderService PLUS", href: "/foerderung/foerderservice-plus" },
        ]}
      />

      {/* Was ist der FörderService PLUS? */}
      <section className="bg-brand-beige py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Was ist der FörderService PLUS?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Förderung sichern, ohne sich durch{" "}
              <span className="text-brand-orange">Amtsdeutsch zu kämpfen</span>
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark/70 leading-relaxed mb-6">
              Wer sein Dach oder seine Fassade energetisch saniert, kann sich
              einen erheblichen Teil der Kosten vom Staat zurückholen. Der Haken:
              Anträge, Fristen und technische Nachweise schrecken viele ab — und
              ein Fehler in der Reihenfolge kostet schnell die komplette
              Förderung.
            </p>
            <p className="font-body text-base md:text-lg text-brand-dark/70 leading-relaxed">
              Genau hier setzt der <strong className="text-brand-dark">FörderService PLUS</strong>{" "}
              an. Wir übernehmen die komplette bürokratische Abwicklung der
              staatlichen Zuschüsse, erstellen den individuellen
              Sanierungsfahrplan (iSFP) im eigenen Haus und führen die Sanierung
              als zertifizierter Dachdecker-Meisterbetrieb selbst aus. Sie haben
              einen Ansprechpartner — von der ersten Beratung bis zur Auszahlung.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <GlowButton href="/kontakt" variant="primary" size="md">
              Kostenlose Beratung anfordern
            </GlowButton>
            <GlowButton href="#foerderhoehe" variant="outline" size="md">
              Wie viel kann ich sparen?
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* Was wird gefördert? */}
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
              Förderfähige Maßnahmen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-4">
              Was wird <span className="text-brand-orange">gefördert?</span>
            </h2>
            <p className="font-body text-base text-brand-dark/60 max-w-2xl mx-auto leading-relaxed">
              Gefördert werden energetische Verbesserungen an der Gebäudehülle.
              Diese vier Maßnahmen rund ums Dach decken wir als Meisterbetrieb
              komplett ab:
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {gefoerdert.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="rounded-2xl p-6 bg-brand-beige"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-brand-dark/70 leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wie hoch ist die Förderung? */}
      <section id="foerderhoehe" className="bg-brand-beige py-16 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Förderhöhe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-4">
              Wie hoch ist die <span className="text-brand-orange">Förderung?</span>
            </h2>
            <p className="font-body text-base text-brand-dark/60 max-w-2xl mx-auto leading-relaxed">
              Der Zuschuss hängt davon ab, ob ein individueller
              Sanierungsfahrplan (iSFP) vorliegt. Mit iSFP holen Sie deutlich
              mehr heraus.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-5 mb-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-7 bg-white border border-black/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Percent className="w-4 h-4 text-brand-orange" />
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
                  BEG-Einzelmaßnahme
                </span>
              </div>
              <p className="font-display text-4xl font-black text-brand-dark mb-2">
                15 %
              </p>
              <p className="font-body text-sm text-brand-dark/70 leading-relaxed mb-4">
                Grundförderung — ideal für die einzelne energetische Dach- oder
                Fassadensanierung, ganz ohne Sanierungsfahrplan.
              </p>
              <p className="font-body text-sm text-brand-dark/60 leading-relaxed pt-4 border-t border-brand-dark/10">
                Bis zu <strong className="text-brand-dark">30.000 €</strong>{" "}
                förderfähige Kosten je Wohneinheit und Jahr —{" "}
                <strong className="text-brand-orange">max. 4.500 € Zuschuss</strong>.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-7 bg-brand-dark relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
                    Mit iSFP-Bonus
                  </span>
                </div>
                <p className="font-display text-4xl font-black text-white mb-2">
                  20 %
                </p>
                <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
                  15 % Grundförderung + 5 % Bonus mit individuellem
                  Sanierungsfahrplan — perfekt für die langfristige, effiziente
                  Planung.
                </p>
                <p className="font-body text-sm text-white/60 leading-relaxed pt-4 border-t border-white/15">
                  Bis zu <strong className="text-white">60.000 €</strong>{" "}
                  förderfähige Kosten je Wohneinheit —{" "}
                  <strong className="text-brand-orange">max. 12.000 € Zuschuss</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <FoerderRechner />

          <motion.div
            className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-brand-orange/20 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
              <HandCoins className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                Alternative: Steuerbonus nach § 35c EStG
              </h3>
              <p className="font-body text-sm md:text-base text-brand-dark/70 leading-relaxed">
                Statt des Zuschusses können selbstnutzende Eigentümer einen
                Steuerbonus von bis zu{" "}
                <strong className="text-brand-dark">40.000 €</strong> über drei
                Jahre geltend machen (7 % – 7 % – 6 % der Sanierungskosten).
                Welcher Weg sich für Sie mehr lohnt, rechnen wir gemeinsam durch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ablauf in 5 Schritten */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Schritt für Schritt
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Wie funktioniert der{" "}
              <span className="text-brand-orange">Ablauf?</span>
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="absolute left-[27px] top-3 bottom-3 w-px bg-brand-orange/20 hidden sm:block" />
            <div className="space-y-5">
              {ablauf.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="relative flex gap-5 items-start"
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center shadow-lg">
                    <span className="font-heading text-lg font-black text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 rounded-2xl p-5 bg-brand-beige">
                    <div className="flex items-center gap-2 mb-1.5">
                      <step.icon className="w-4 h-4 text-brand-orange" />
                      <h3 className="font-display text-lg font-bold text-brand-dark">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm md:text-base text-brand-dark/70 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ihre 10 Vorteile */}
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
              Ihre Vorteile
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
              Ihre 10 Vorteile durch den{" "}
              <span className="text-brand-orange">FörderService PLUS</span>
            </h2>
          </motion.div>

          <motion.ul
            className="list-none p-0 grid md:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {vorteile.map((v, i) => (
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
                  {v}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Rechenbeispiele */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Rechenbeispiele
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-4">
              Was sich für Kunden{" "}
              <span className="text-brand-orange">rechnet</span>
            </h2>
            <p className="font-body text-base text-brand-dark/60 max-w-2xl mx-auto leading-relaxed">
              Drei typische Szenarien — die tatsächliche Förderhöhe hängt immer
              vom konkreten Projekt und der jeweiligen Förderstelle ab.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {rechenbeispiele.map((b) => (
              <motion.div
                key={b.titel}
                variants={fadeUp}
                className="rounded-2xl p-6 bg-brand-beige border border-black/5 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Banknote className="w-4 h-4 text-brand-orange" />
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
                    {b.quote}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                  {b.titel}
                </h3>
                <p className="font-body text-sm text-brand-dark/60 mb-4 flex-1">
                  {b.szenario}
                </p>
                <p className="font-body text-xs text-brand-dark/60 mb-3">
                  {b.invest}
                </p>
                <p className="font-display text-2xl font-black text-brand-orange">
                  {b.zuschuss}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technische Anforderungen */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            className="mb-10 flex items-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
              <Ruler className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 block">
                Voraussetzungen
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark leading-tight">
                Technische Anforderungen
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white border border-black/5 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {anforderungen.map((row, i) => (
              <div
                key={row.bauteil}
                className={`flex items-center justify-between gap-4 px-5 sm:px-7 py-4 ${
                  i > 0 ? "border-t border-brand-dark/5" : ""
                }`}
              >
                <span className="font-heading text-sm sm:text-base font-bold text-brand-dark">
                  {row.bauteil}
                </span>
                <span className="font-body text-sm sm:text-base text-brand-orange font-semibold text-right">
                  {row.uwert}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            className="font-body text-sm text-brand-dark/60 leading-relaxed mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Diese U-Werte (Wärmedurchgangskoeffizienten) sind Voraussetzung für
            die Förderung. Wir wählen Dämmstoff und Aufbau so, dass die Werte
            sicher eingehalten und für den BAFA-Nachweis dokumentiert werden.
            Förderberechtigt sind Eigentümer und WEG bei Gebäuden ab fünf Jahren.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Häufig gestellte{" "}
              <span className="text-brand-orange">Fragen</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Jetzt Fördermöglichkeiten nutzen!"
            subtitle="Die Erstberatung ist kostenlos. Wir prüfen Ihr Vorhaben und sagen Ihnen, wie hoch Ihr Zuschuss ausfallen kann."
            buttonText="Kostenlose Beratung anfordern"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}

function FoerderRechner() {
  const [kosten, setKosten] = useState(30000)

  const ohne = computeFoerderung(kosten, false)
  const mit = computeFoerderung(kosten, true)
  const steuer = computeSteuerbonus(kosten)

  const clamp = (n: number) => Math.min(Math.max(n, 0), 250000)

  // Empfehlung: bis 60.000 € sind BAFA-mit-iSFP und § 35c rechnerisch gleich
  // (beide 20 %) — dann gewinnt der Zuschuss (Bargeld sofort, auch für
  // Vermieter/WEG, unabhängig von der Steuerlast). Erst über 60.000 € zieht
  // der Steuerbonus davon, weil sein Deckel bei 200.000 € statt 60.000 € liegt.
  const empfehlung =
    kosten <= 0
      ? null
      : kosten > 60000
        ? {
            titel: "§ 35c lohnt sich hier rechnerisch am meisten",
            text: `Bei ${eur(kosten)} bringt der Steuerbonus bis zu ${eur(
              steuer.gesamt
            )} — rund ${eur(
              Math.max(steuer.gesamt - mit.zuschuss, 0)
            )} mehr als der BAFA-Zuschuss mit iSFP. Voraussetzung: Sie nutzen das Haus selbst und haben über drei Jahre genug Steuerlast. Für Vermieter, WEG oder bei geringer Steuerlast ist der BAFA-Zuschuss meist besser.`,
          }
        : {
            titel: "BAFA mit iSFP ist hier die erste Wahl",
            text: `Bei ${eur(
              kosten
            )} bringen BAFA-Zuschuss (mit iSFP) und Steuerbonus rechnerisch dasselbe (20 %). Der Zuschuss landet aber direkt auf dem Konto, gilt auch für Vermieter und WEG und hängt nicht von Ihrer Steuerlast ab.`,
          }

  return (
    <motion.div
      className="rounded-2xl bg-white border border-black/5 p-6 sm:p-8 mb-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-1">
        <Calculator className="w-4 h-4 text-brand-orange" />
        <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
          Förderrechner
        </span>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-black text-brand-dark mb-6">
        Was kann ich sparen?
      </h3>

      {/* Eingabe */}
      <label
        htmlFor="kosten"
        className="font-heading text-sm font-bold text-brand-dark block mb-3"
      >
        Voraussichtliche Sanierungskosten (netto)
      </label>
      <div className="flex items-center gap-3 mb-4">
        <input
          id="kosten"
          type="number"
          min={0}
          max={250000}
          step={1000}
          value={kosten}
          onChange={(e) => setKosten(clamp(Number(e.target.value) || 0))}
          className="w-44 font-display text-2xl font-black text-brand-dark bg-brand-beige rounded-xl px-4 py-3 border border-black/5 focus:outline-none focus:border-brand-orange/50"
        />
        <span className="font-display text-2xl font-black text-brand-dark/40">€</span>
      </div>
      <input
        type="range"
        min={0}
        max={200000}
        step={5000}
        value={Math.min(kosten, 200000)}
        onChange={(e) => setKosten(clamp(Number(e.target.value)))}
        className="w-full accent-brand-orange mb-2 cursor-pointer"
        aria-label="Sanierungskosten per Schieberegler einstellen"
      />
      <div className="flex justify-between font-body text-xs text-brand-dark/40 mb-8">
        <span>0 €</span>
        <span>200.000 €</span>
      </div>

      {/* Ergebnis — drei Wege im Vergleich */}
      <div className="grid sm:grid-cols-3 gap-4">
        <ResultTile
          label="BEG-Einzelmaßnahme"
          rate="15 %"
          amount={ohne.zuschuss}
          caption={`Zuschuss · Eigenanteil ${eur(ohne.eigenanteil)}`}
          note={
            ohne.capped
              ? `Förderfähige Kosten auf ${eur(ohne.foerderfaehig)} gedeckelt.`
              : undefined
          }
          tone="light"
        />
        <ResultTile
          label="Mit iSFP-Bonus"
          rate="20 %"
          amount={mit.zuschuss}
          caption={`Zuschuss · Eigenanteil ${eur(mit.eigenanteil)}`}
          note={
            mit.capped
              ? `Förderfähige Kosten auf ${eur(mit.foerderfaehig)} gedeckelt.`
              : undefined
          }
          tone="dark"
        />
        <ResultTile
          label="Steuerbonus § 35c"
          rate="20 % / 3 J."
          amount={steuer.gesamt}
          caption={`Steuerersparnis · ${eur(steuer.jahre[0])} / ${eur(
            steuer.jahre[1]
          )} / ${eur(steuer.jahre[2])}`}
          note={
            steuer.capped
              ? "Förderfähige Kosten auf 200.000 € gedeckelt."
              : "Nur bei Selbstnutzung & ausreichender Steuerlast."
          }
          tone="light"
        />
      </div>

      {empfehlung && (
        <div className="mt-4 flex items-start gap-3 p-5 rounded-xl bg-brand-orange/10 border border-brand-orange/25">
          <Sparkles className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-heading text-sm font-bold text-brand-dark mb-1">
              Unsere Empfehlung: {empfehlung.titel}
            </p>
            <p className="font-body text-sm text-brand-dark/75 leading-relaxed">
              {empfehlung.text}
            </p>
          </div>
        </div>
      )}

      <p className="font-body text-xs text-brand-dark/50 leading-relaxed mt-4">
        Unverbindliche Orientierung. BAFA-Zuschuss und § 35c sind für dieselbe
        Maßnahme nicht kombinierbar. Die Empfehlung ersetzt keine Steuer- oder
        Energieberatung — die genaue Förderhöhe ermitteln wir gemeinsam im
        Beratungsgespräch.
      </p>
    </motion.div>
  )
}

function ResultTile({
  label,
  rate,
  amount,
  caption,
  note,
  tone,
}: {
  label: string
  rate: string
  amount: number
  caption: string
  note?: string
  tone: "light" | "dark"
}) {
  const dark = tone === "dark"
  return (
    <div
      className={`rounded-2xl p-6 relative overflow-hidden ${
        dark ? "bg-brand-dark" : "bg-brand-beige"
      }`}
    >
      {dark && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-[70px] pointer-events-none" />
      )}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-brand-orange">
            {label}
          </span>
          <span
            className={`font-heading text-xs font-bold whitespace-nowrap ${
              dark ? "text-white/50" : "text-brand-dark/40"
            }`}
          >
            {rate}
          </span>
        </div>
        <p
          className={`font-display text-3xl font-black mb-1 ${
            dark ? "text-white" : "text-brand-dark"
          }`}
        >
          {eur(amount)}
        </p>
        <p
          className={`font-body text-xs ${
            dark ? "text-white/55" : "text-brand-dark/55"
          }`}
        >
          {caption}
        </p>
        {note && (
          <p
            className={`font-body text-[11px] mt-3 pt-3 border-t leading-relaxed ${
              dark
                ? "border-white/15 text-white/50"
                : "border-brand-dark/10 text-brand-dark/50"
            }`}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  )
}

function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl bg-brand-beige border border-black/5 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base sm:text-lg font-bold text-brand-dark">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="font-body text-sm sm:text-base text-brand-dark/70 leading-relaxed px-5 sm:px-6 pb-5">
          {answer}
        </p>
      </motion.div>
    </div>
  )
}
