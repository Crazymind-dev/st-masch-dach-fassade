"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2,
  Heart,
  Lightbulb,
  Star,
  Clock,
  Dog,
  Home,
  Sun,
  Handshake,
} from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import { company } from "@/lib/config"
import JsonLd from "@/components/seo/JsonLd"
import { personSchema } from "@/lib/seo"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

/* ---------- data ---------- */

const werte = [
  {
    icon: Star,
    title: "Qualität",
    description:
      "Wir verwenden ausschliesslich hochwertige Materialien und arbeiten nach den neuesten Standards der Dachdeckerkunst. Jedes Projekt wird mit Meister-Prazision umgesetzt.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description:
      "Termintreue und transparente Kommunikation sind für uns selbstverstandlich. Sie konnen sich auf uns verlassen - vom ersten Gesprach bis zur Fertigstellung.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Als Enphase Solar Partner und durch ständige Weiterbildung bleiben wir am Puls der Zeit. Moderne Technologien und nachhaltige Lösungen sind unser Antrieb.",
  },
  {
    icon: Heart,
    title: "Kundennähe",
    description:
      "Jeder Kunde ist für uns einzigartig. Wir nehmen uns Zeit für individuelle Beratung und finden die optimale Lösung für Ihr Dach- oder Fassadenprojekt.",
  },
]

const zertifikate = [
  {
    title: "Meisterbrief Dachdecker",
    description:
      "Qualifizierter Dachdeckermeisterbetrieb mit umfassender Fachkompetenz in allen Bereichen der Dach- und Fassadentechnik. Eingetragen bei der Handwerkskammer Berlin.",
  },
  {
    title: "BAFA-Energieberater",
    description:
      "Steve Masch ist in der Energieeffizienz-Expertenliste des Bundes gelistet. Er erstellt individuelle Sanierungsfahrpläne (iSFP) und Fachunternehmer-Erklärungen — alles aus einer Hand, ohne externen Berater.",
  },
  {
    title: "Enphase Solar Partner",
    description:
      "Zertifizierter Installateur für Mikrowechselrichter-Systeme. Enphase ist Weltmarktführer für moduloptimierte PV-Technik — maximale Sicherheit und Ertrag, Modul für Modul.",
  },
  {
    title: "TRGS 519 (Asbest)",
    description:
      "Sachkundig für den Umgang mit Asbest nach TRGS 519. Sichere und fachgerechte Sanierung asbesthaltiger Materialien.",
  },
  {
    title: "Sachkunde Mineralfasern",
    description:
      "Qualifiziert für den sicheren Umgang mit künstlichen Mineralfasern (KMF) bei Dämmarbeiten und Sanierungen.",
  },
]

/**
 * Die Unternehmensgruppe — zwei spezialisierte Betriebe, ein Anspruch.
 * Zuordnung nach Gewerk (Briefing G.21.1).
 */
const unternehmen = [
  {
    icon: Home,
    name: "St. Masch Dach | Fassade | Solar",
    zustaendig: "Dachdeckerei, Fassade, Klempnerarbeiten",
    leitung: "Inhaber: Steve Masch",
  },
  {
    icon: Sun,
    name: "St. Masch Synergien Solar GmbH",
    zustaendig: "Photovoltaik, Solar, Speicher, Wallbox",
    leitung: "Geschäftsführer: Steve Masch",
  },
]

/**
 * Kernteam — Liste exakt nach Steves Angaben (Chat 30.05., 16:21).
 * Keine Fotos ohne echte Aufnahmen: neutrale Initialen-Platzhalter,
 * keine Stock- oder KI-Bilder (Briefing G.21.2).
 */
const team: { name: string; role: string; dog?: boolean }[] = [
  { name: "Steve Masch", role: "Inhaber / Geschäftsführer" },
  { name: "Ria Norden", role: "Finanzen & Buchhaltung" },
  { name: "Stephan Büchner", role: "VA & Dachdeckergeselle" },
  { name: "Roxana Wenck", role: "Office-Mitarbeiterin" },
  { name: "Jaroslaw Hoffmann", role: "Zimmerergeselle" },
  { name: "Patrick Konrad", role: "VA & Dachdeckergeselle" },
  { name: "Justin Korn", role: "Dachdeckergeselle" },
  // Chat-Angabe Steve („Elektromeister") — Bestätigung aussteht (offener Punkt #6)
  { name: "Joachim Schulze", role: "Elektromeister" },
  { name: "Ella", role: "Team-Hündin", dog: true },
]

function initialen(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

/** Fachpartner-Netzwerk — Partnerbetriebe, sprachlich strikt von Mitarbeitern getrennt. */
const fachpartner = [
  { gewerk: "Gerüstbau", anzahl: "2 Partnerbetriebe" },
  { gewerk: "Elektro", anzahl: "2 Partnerbetriebe" },
  { gewerk: "Statik", anzahl: "Partnerbetrieb" },
  { gewerk: "Spengler", anzahl: "Partnerbetrieb" },
]

/** Hersteller & Systeme, mit denen wir arbeiten (Briefing G.22). */
const marken = ["PREFA", "Solrif / Ernst Schweizer", "Enphase", "Sigenergy", "VELUX"]

const milestones = [
  {
    year: "2015",
    title: "Gründung",
    description:
      "St. Masch Dach & Fassade wird als Meisterbetrieb in Berlin gegründet.",
  },
  {
    year: "2017",
    title: "Erweiterung",
    description:
      "Aufnahme von Fassadenarbeiten und Wachstum des Teams auf 5 Mitarbeiter.",
  },
  {
    year: "2020",
    title: "Solar-Kompetenz",
    description:
      "Erweiterung des Leistungsspektrums um Photovoltaik und Solarenergie.",
  },
  {
    year: "2022",
    title: "Enphase Partner",
    description:
      "Zertifizierung als offizieller Enphase Solar Partner für höchste Qualität.",
  },
  {
    year: "2024",
    title: "Standort-Ausbau",
    description:
      "Neuer Firmensitz in der Ruppiner Chaussee 221, 13503 Berlin.",
  },
]

/* ---------- page ---------- */

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      {/* Hero */}
      <PageHero
        title="Über"
        highlight="uns"
        subtitle="Lernen Sie den Meisterbetrieb hinter St. Masch Dach & Fassade kennen. Erfahrung, Leidenschaft und handwerkliche Exzellenz seit der Gründung."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Über uns", href: "/ueber-uns" },
        ]}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Section 1 - Company Story */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
                Unsere Geschichte
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-6">
                Handwerk mit{" "}
                <span className="text-brand-orange">Leidenschaft</span>
              </h2>
              <div className="space-y-4 font-body text-base text-brand-dark/70 leading-relaxed">
                <p>
                  St. Masch Dach & Fassade ist ein inhabergeführter
                  Meisterbetrieb mit Sitz in Berlin. Seit unserer Gründung
                  stehen wir für höchste Qualität in der Dach- und
                  Fassadentechnik - von der klassischen Dacheindeckung bis zur
                  modernen Solaranlage.
                </p>
                <p>
                  Unser Team vereint traditionelles Handwerk mit innovativen
                  Technologien. Als zertifizierter Enphase Solar Partner bieten
                  wir unseren Kunden ganzheitliche Lösungen rund um Dach,
                  Fassade und erneuerbare Energien.
                </p>
                <p>
                  Was uns antreibt? Der Anspruch, jeden Kunden nicht nur
                  zufriedenzustellen, sondern zu begeistern. Dieser Grundsatz
                  pragt unsere gesamte Arbeit.
                </p>
              </div>

              {/* Slogan blockquote */}
              <motion.blockquote
                className="mt-8 pl-6 border-l-4 border-brand-orange"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-display text-xl md:text-2xl font-bold text-brand-dark italic leading-snug">
                  &ldquo;Ein gutes Dach merkt man daran,
                  <br />
                  <span className="text-brand-orange">
                    dass man nie an es denken muss.&rdquo;
                  </span>
                </p>
                <cite className="block mt-3 font-heading text-xs text-brand-dark/55 not-italic">
                  — Steve Masch
                </cite>
              </motion.blockquote>
            </motion.div>

            {/* Right - image with badge */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden w-full h-[500px]">
                <Image
                  src="/handwerk-leidenschaft.jpg"
                  alt="Dachdecker bei der Arbeit im Dachstuhl — handwerkliche Leidenschaft vom Meisterbetrieb in Berlin"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-orange rounded-2xl p-6 shadow-xl text-center">
                <p className="font-display text-3xl font-black text-white">
                  {company.berufserfahrungJahre}
                </p>
                <p className="font-body text-sm text-white/80">
                  Jahre Berufserfahrung
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Unsere Werte */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Wofür wir stehen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Unsere <span className="text-brand-orange">Werte</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {werte.map((w) => (
              <motion.div
                key={w.title}
                className="bg-brand-beige rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-black/5"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
                  <w.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-3">
                  {w.title}
                </h3>
                <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                  {w.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Zertifikate */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Nachgewiesene Kompetenz
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white">
              Zertifikate &{" "}
              <span className="text-brand-orange">Qualifikationen</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {zertifikate.map((z) => (
              <motion.div
                key={z.title}
                className="flex gap-5 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">
                    {z.title}
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">
                    {z.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4a - Die Unternehmensgruppe */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Die Unternehmensgruppe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Zwei Betriebe, <span className="text-brand-orange">ein Anspruch</span>
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark/60 mt-4 max-w-2xl mx-auto">
              Dach, Fassade und Solar aus einer Hand – zwei spezialisierte
              Betriebe, ein Anspruch.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {unternehmen.map((u) => (
              <motion.div
                key={u.name}
                className="bg-brand-beige rounded-2xl p-8 border border-black/5"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                  <u.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">
                  {u.name}
                </h3>
                <p className="font-body text-sm text-brand-dark/70 leading-relaxed mb-1">
                  {u.zustaendig}
                </p>
                <p className="font-body text-sm text-brand-dark/55">{u.leitung}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4b - Kernteam */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Die Menschen dahinter
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Unser <span className="text-brand-orange">Kernteam</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {team.map((t) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-black/5"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto mb-4">
                  {t.dog ? (
                    <Dog className="w-8 h-8 text-brand-orange" aria-hidden />
                  ) : (
                    <span className="font-heading text-lg sm:text-xl font-bold text-brand-orange">
                      {initialen(t.name)}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-brand-dark leading-snug">
                  {t.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-brand-dark/60 mt-1">
                  {t.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4c - Fachpartner-Netzwerk + Marken */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Unser Fachpartner-Netzwerk
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-5">
              Starke <span className="text-brand-orange">Partner</span> an unserer Seite
            </h2>
            <p className="font-body text-base text-brand-dark/65 max-w-2xl mx-auto leading-relaxed">
              Für Spitzenlasten und Spezialgewerke arbeiten wir mit einem festen
              Stamm geprüfter Fachbetriebe – Gerüstbau, Elektro, Statik,
              Spengler. Diese Partner sind rechtlich eigenständige Betriebe, mit
              denen wir seit Jahren projektweise zusammenarbeiten.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {fachpartner.map((p) => (
              <motion.div
                key={p.gewerk}
                className="bg-brand-beige rounded-xl p-5 text-center border border-black/5"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Handshake className="w-5 h-5 text-brand-orange mx-auto mb-2" aria-hidden />
                <div className="font-heading text-sm font-bold text-brand-dark">
                  {p.gewerk}
                </div>
                <div className="font-body text-xs text-brand-dark/55 mt-0.5">
                  {p.anzahl}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Marken & Systeme */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-dark/50 mb-4 block">
              Hersteller & Systeme, mit denen wir arbeiten
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {marken.map((m) => (
                <span
                  key={m}
                  className="px-4 py-2 rounded-full bg-brand-beige border border-black/5 font-heading text-sm font-semibold text-brand-dark/75"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Timeline / Milestones */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Unser Weg
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Meilensteine
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-brand-orange/20" />

            <motion.div
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  {/* Content - left or right */}
                  <div
                    className={`pl-16 md:pl-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="font-heading text-sm font-bold text-brand-orange">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-brand-dark mt-1">
                      {m.title}
                    </h3>
                    <p className="font-body text-sm text-brand-dark/60 leading-relaxed mt-1">
                      {m.description}
                    </p>
                  </div>

                  {/* Circle on line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm z-10" />

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Lernen Sie uns personlich kennen"
            subtitle="Wir freuen uns auf Ihr Projekt. Kontaktieren Sie uns für eine unverbindliche Beratung."
            buttonText="Kontakt aufnehmen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
