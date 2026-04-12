"use client"

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
      "Produzieren Sie Ihren eigenen Strom und reduzieren Sie Ihre Energiekosten um bis zu 80%. Mit steigenden Strompreisen wird die Investition Jahr fur Jahr wertvoller.",
  },
  {
    icon: Shield,
    title: "Unabhangigkeit",
    description:
      "Machen Sie sich unabhangig von Energieversorgern und steigenden Strompreisen. Mit einem Batteriespeicher nutzen Sie Ihren Solarstrom auch nachts.",
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
      "Massgeschneiderte Photovoltaik-Anlagen fur Ihr Dach - ob Einfamilienhaus, Mehrfamilienhaus oder Gewerbeimmobilie. Wir planen und installieren Anlagen jeder Grosse mit hochwertigen Modulen fuehrender Hersteller.",
  },
  {
    icon: BatteryCharging,
    title: "Stromspeicher (Enphase IQ)",
    description:
      "Mit dem Enphase IQ Batteriespeicher maximieren Sie Ihren Eigenverbrauch. Speichern Sie uberschussigen Solarstrom und nutzen Sie ihn, wenn Sie ihn brauchen - auch nachts und bei schlechtem Wetter.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Wartung",
    description:
      "Behalten Sie Ihre Anlage jederzeit im Blick. Mit der Enphase App uberwachen Sie Produktion und Verbrauch in Echtzeit. Unser Wartungsservice stellt den optimalen Betrieb sicher.",
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
      "Kostenlose Erstberatung bei Ihnen vor Ort. Wir analysieren Ihr Dach, Ihren Stromverbrauch und Ihre Wunsche.",
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
      "Anmeldung beim Netzbetreiber, Einrichtung des Monitorings und ausfuhrliche Einweisung in Ihre neue Anlage.",
  },
]

const faqs = [
  {
    question: "Lohnt sich eine PV-Anlage fur mich?",
    answer:
      "In den allermeisten Fallen ja! Dank gesunkener Modulpreise und steigender Stromkosten amortisiert sich eine PV-Anlage heute in 8-12 Jahren. Danach produzieren Sie quasi kostenlosen Strom - und das fur mindestens 25-30 Jahre. Wir berechnen Ihnen die Wirtschaftlichkeit individuell.",
  },
  {
    question: "Welche Forderungen gibt es fur Solaranlagen?",
    answer:
      "Seit 2023 entfallt die Mehrwertsteuer auf PV-Anlagen bis 30 kWp. Zusatzlich erhalten Sie eine Einspeisevergutung fur uberschussigen Strom. Die KfW bietet gunstige Kredite, und einige Bundeslander haben eigene Forderprogramme. Wir beraten Sie umfassend zu allen Fordermoglichkeiten.",
  },
  {
    question: "Wie lange dauert die Installation?",
    answer:
      "Die reine Montage einer Aufdach-Anlage fur ein Einfamilienhaus dauert in der Regel 1-2 Tage. Die gesamte Projektdauer von der Beratung bis zur Inbetriebnahme betragt typischerweise 4-8 Wochen, abhangig von Genehmigungen und Netzanschluss.",
  },
  {
    question: "Was kostet eine Solaranlage?",
    answer:
      "Die Kosten hangen von Grosse und Ausstattung ab. Eine typische Anlage fur ein Einfamilienhaus (8-12 kWp) kostet inklusive Montage ca. 12.000-18.000 EUR netto. Mit Speicher kommen ca. 5.000-10.000 EUR hinzu. Durch den Wegfall der MwSt. zahlen Sie den Nettopreis. Gerne erstellen wir Ihnen ein individuelles Angebot.",
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
        subtitle="Nachhaltige Energie vom eigenen Dach. Als zertifizierter Enphase Solar Partner planen, installieren und warten wir Ihre Photovoltaik-Anlage - kompetent, zuverlassig und aus einer Hand."
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

      {/* Section 2 - Unsere Leistungen (dark) */}
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
              Komplett-Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white">
              Unsere <span className="text-brand-orange">Leistungen</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - feature list */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {leistungen.map((l) => (
                <motion.div
                  key={l.title}
                  className="flex gap-5"
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <l.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white mb-1">
                      {l.title}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed">
                      {l.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right - image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80"
                  alt="Solaranlage auf einem Hausdach"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-orange rounded-2xl p-6 shadow-xl">
                <p className="font-display text-3xl font-black text-white">25+</p>
                <p className="font-body text-sm text-white/80">Jahre Garantie</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - So funktioniert's (process timeline) */}
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
              In 4 Schritten
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              So <span className="text-brand-orange">funktioniert&apos;s</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-brand-orange/20" />

            <motion.div
              className="grid md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {steps.map((s, i) => (
                <motion.div
                  key={s.number}
                  className="relative text-center"
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-orange/30">
                    <span className="font-heading text-lg font-bold">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
                  Systeme bieten maximale Sicherheit, hochste Ertrage und eine
                  intelligente Uberwachung Ihrer gesamten Anlage - Modul fur
                  Modul.
                </p>
                <ul className="space-y-2">
                  {[
                    "Mikro-Wechselrichter fur maximale Sicherheit",
                    "Modulweise Uberwachung und Optimierung",
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
              Haufige Fragen
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
            title="Bereit fur Ihre Solaranlage?"
            subtitle="Vereinbaren Sie jetzt eine kostenlose Beratung und starten Sie in Ihre unabhangige Energiezukunft."
            buttonText="Solar-Beratung anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
