"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sun,
  BatteryCharging,
  Shield,
  Leaf,
  Zap,
  Monitor,
  Home,
  Phone,
  ChevronDown,
  CheckCircle2,
  Award,
} from "lucide-react"
import { useState } from "react"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

/* ---------- data ---------- */

const benefits = [
  {
    icon: Zap,
    title: "Stromkosten senken",
    description:
      "Produzieren Sie Ihren eigenen Strom und reduzieren Sie Ihre Energiekosten um bis zu 80%. Mit steigenden Strompreisen wird die Investition Jahr für Jahr wertvoller.",
  },
  {
    icon: Shield,
    title: "Unabhängigkeit",
    description:
      "Machen Sie sich unabhängig von Energieversorgern und steigenden Strompreisen. Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom auch nachts.",
  },
  {
    icon: Leaf,
    title: "Umweltschutz",
    description:
      "Leisten Sie einen aktiven Beitrag zum Klimaschutz. Eine durchschnittliche PV-Anlage spart pro Jahr mehrere Tonnen CO2 ein.",
  },
]

const leistungen = [
  {
    icon: Sun,
    title: "PV-Anlagen",
    description:
      "Maßgeschneiderte Photovoltaik-Anlagen für Ihr Dach — ob Einfamilienhaus, Mehrfamilienhaus oder Gewerbeimmobilie. Wir planen und installieren Anlagen jeder Größe mit hochwertigen Modulen führender Hersteller.",
  },
  {
    icon: BatteryCharging,
    title: "Stromspeicher (Enphase IQ)",
    description:
      "Mit dem Enphase IQ Batteriespeicher maximieren Sie Ihren Eigenverbrauch. Speichern Sie überschüssigen Solarstrom und nutzen Sie ihn, wenn Sie ihn brauchen — auch nachts und bei schlechtem Wetter.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Wartung",
    description:
      "Behalten Sie Ihre Anlage jederzeit im Blick. Mit der Enphase App überwachen Sie Produktion und Verbrauch in Echtzeit. Unser Wartungsservice stellt den optimalen Betrieb sicher.",
  },
  {
    icon: Home,
    title: "Home Energy Management",
    description:
      "Intelligente Steuerung Ihres gesamten Energiehaushalts. Optimieren Sie den Eigenverbrauch automatisch und steuern Sie Wallbox, Warmepumpe und Speicher zentral.",
  },
]

const steps = [
  {
    number: "01",
    title: "Beratung",
    description:
      "Kostenlose Erstberatung bei Ihnen vor Ort. Wir analysieren Ihr Dach, Ihren Stromverbrauch und Ihre Wünsche.",
  },
  {
    number: "02",
    title: "Planung",
    description:
      "Individuelle Anlagenplanung mit 3D-Simulation. Sie erhalten ein detailliertes Angebot mit Wirtschaftlichkeitsberechnung.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Fachgerechte Montage durch unser erfahrenes Team. In der Regel ist die Installation in 1-3 Tagen abgeschlossen.",
  },
  {
    number: "04",
    title: "Inbetriebnahme",
    description:
      "Anmeldung beim Netzbetreiber, Einrichtung des Monitorings und ausführliche Einweisung in Ihre neue Anlage.",
  },
]

const faqs = [
  {
    question: "Lohnt sich eine PV-Anlage für mich?",
    answer:
      "In den allermeisten Fällen ja. Dank gesunkener Modulpreise und steigender Stromkosten amortisiert sich eine PV-Anlage heute in 8–12 Jahren. Danach produzieren Sie quasi kostenlosen Strom — und das für mindestens 25–30 Jahre. Wir berechnen Ihnen die Wirtschaftlichkeit individuell.",
  },
  {
    question: "Welche Förderungen gibt es für Solaranlagen?",
    answer:
      "Seit 2023 entfällt die Mehrwertsteuer auf PV-Anlagen bis 30 kWp. Zusätzlich erhalten Sie eine Einspeisevergütung für überschüssigen Strom. Die KfW bietet günstige Kredite, und einige Bundesländer haben eigene Förderprogramme. Wir beraten Sie umfassend zu allen Fördermöglichkeiten.",
  },
  {
    question: "Wie lange dauert die Installation?",
    answer:
      "Die reine Montage einer Aufdach-Anlage für ein Einfamilienhaus dauert in der Regel 1–2 Tage. Die gesamte Projektdauer von der Beratung bis zur Inbetriebnahme beträgt typischerweise 4–8 Wochen, abhängig von Genehmigungen und Netzanschluss.",
  },
  {
    question: "Was kostet eine Solaranlage?",
    answer:
      "Die Kosten hängen von Größe und Ausstattung ab. Eine typische Anlage für ein Einfamilienhaus (8–12 kWp) kostet inklusive Montage ca. 12.000–18.000 EUR netto. Mit Speicher kommen ca. 5.000–10.000 EUR hinzu. Durch den Wegfall der MwSt. zahlen Sie den Nettopreis. Gerne erstellen wir Ihnen ein individuelles Angebot.",
  },
]

/* ---------- FAQ Item ---------- */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
      variants={fadeUp}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="font-heading text-base font-semibold text-white pr-4">
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
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 font-body text-sm leading-relaxed text-white/60">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

/* ---------- page ---------- */

export default function SolarPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Photovoltaik &"
        highlight="Solarenergie"
        subtitle="Solar beginnt für uns nicht beim Modul — sondern beim Dach darunter. Als Dachdecker-Meisterbetrieb und zertifizierter Enphase Solar Partner planen, montieren und warten wir Ihre PV-Anlage so, dass sie sitzt. Jahrzehntelang."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solar", href: "/solar" },
        ]}
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Section 1 - Warum Photovoltaik */}
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
              Ihre Vorteile
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Warum <span className="text-brand-orange">Photovoltaik?</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-black/5"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6">
                  <b.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">
                  {b.title}
                </h3>
                <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Unsere Leistungen (Bento) */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Komplett-Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white">
              Unsere <span className="text-brand-orange">Leistungen</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-6 auto-rows-[180px] gap-4 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Card 1: PV-Anlagen — hero card */}
            <motion.div
              className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-8 md:p-10 group hover:border-brand-orange/40 transition-colors duration-500"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-brand-orange/25 rounded-full blur-[100px] group-hover:bg-brand-orange/40 transition-colors duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                    <Sun className="w-6 h-6 text-brand-orange" />
                  </div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
                    Hauptleistung
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-4xl md:text-6xl font-black text-white leading-[0.95] mb-4 md:mb-6">
                    PV-Anlagen
                  </h3>
                  <p className="font-body text-sm md:text-base text-white/60 leading-relaxed max-w-lg">
                    Maßgeschneiderte Photovoltaik-Anlagen für Ihr Dach — Einfamilienhaus, Mehrfamilienhaus oder Gewerbeimmobilie. Wir planen und installieren mit hochwertigen Modulen führender Hersteller.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Image */}
            <motion.div
              className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80"
                alt="Solaranlage mit schwarzen Modulen auf einem Hausdach in Berlin — Enphase Solar Partner"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                  <Award className="w-3.5 h-3.5 text-brand-orange" />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-white">
                    Enphase Partner
                  </span>
                </div>
                <p className="font-heading text-base font-bold text-white">
                  Zertifizierte Installation
                </p>
              </div>
            </motion.div>

            {/* Card 3: Stromspeicher */}
            <motion.div
              className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:border-brand-orange/40 transition-colors duration-500"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <BatteryCharging className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1.5">
                    Stromspeicher
                  </h3>
                  <p className="font-body text-xs text-white/55 leading-relaxed">
                    Enphase IQ — Eigenverbrauch maximieren, auch nachts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: 25+ Garantie */}
            <motion.div
              className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-6 shadow-[0_8px_40px_rgba(255,91,1,0.3)]"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-white/80">
                  Produktgarantie
                </span>
                <div>
                  <p className="font-display text-5xl font-black text-white leading-none">
                    25+
                  </p>
                  <p className="font-body text-sm text-white/90 mt-1">Jahre</p>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Monitoring */}
            <motion.div
              className="md:col-span-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:border-brand-orange/40 transition-colors duration-500"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1.5">
                    Monitoring & Wartung
                  </h3>
                  <p className="font-body text-xs text-white/55 leading-relaxed">
                    Echtzeit-Überwachung via Enphase App. Unser Wartungsservice sichert den optimalen Betrieb.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 6: Home Energy */}
            <motion.div
              className="md:col-span-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:border-brand-orange/40 transition-colors duration-500"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1.5">
                    Home Energy Management
                  </h3>
                  <p className="font-body text-xs text-white/55 leading-relaxed">
                    Intelligente Steuerung von Wallbox, Wärmepumpe und Speicher — zentral und automatisch.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Projektablauf (vertical timeline — matches /leistungen/[slug]) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Unser Ablauf
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              So läuft Ihr <span className="text-brand-orange">Solarprojekt ab</span>
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-orange/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((s) => (
                <motion.div
                  key={s.number}
                  variants={fadeUp}
                  className="relative flex items-start gap-6"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/20">
                    <span className="font-heading text-sm font-bold text-white">
                      {s.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="bg-brand-beige rounded-2xl p-6 flex-1">
                    <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                      {s.title}
                    </h3>
                    <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Enphase Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="relative rounded-2xl bg-gradient-to-br from-brand-dark to-brand-dark/90 p-10 md:p-16 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              {/* Badge */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-brand-orange/20 border-2 border-brand-orange/40 flex items-center justify-center">
                  <Award className="w-14 h-14 text-brand-orange" />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-2 block">
                  Zertifizierter Partner
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-black text-white mb-4">
                  Enphase Solar Partner
                </h2>
                <p className="font-body text-base text-white/60 leading-relaxed mb-4">
                  Als offizieller Enphase Solar Partner setzen wir auf die
                  weltweit fuhrende Mikro-Wechselrichter-Technologie. Enphase
                  Systeme bieten maximale Sicherheit, höchste Ertrage und eine
                  intelligente Überwachung Ihrer gesamten Anlage — Modul für
                  Modul.
                </p>
                <ul className="space-y-2">
                  {[
                    "Mikro-Wechselrichter für maximale Sicherheit",
                    "Modulweise Überwachung und Optimierung",
                    "Enphase IQ Batteriespeicher",
                    "25 Jahre Produktgarantie",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-body text-sm text-white/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - FAQ */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white">
              FAQ <span className="text-brand-orange">Solar</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Bereit für Ihre Solaranlage?"
            subtitle="Vereinbaren Sie jetzt eine kostenlose Beratung und starten Sie in Ihre unabhängige Energiezukunft."
            buttonText="Solar-Beratung anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
