"use client"

import { motion } from "framer-motion"
import {
  Award,
  CheckCircle2,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Users,
  Clock,
  Hammer,
  Phone,
} from "lucide-react"
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
      "Qualifizierter Dachdeckermeisterbetrieb mit umfassender Fachkompetenz in allen Bereichen der Dach- und Fassadentechnik.",
  },
  {
    title: "TRGS 519 (Asbest)",
    description:
      "Sachkundig für den Umgang mit Asbest nach TRGS 519. Sichere und fachgerechte Sanierung asbesthaltiger Materialien.",
  },
  {
    title: "PV-Basiswissen",
    description:
      "Zertifizierte Fachkenntnisse in Photovoltaik-Technik. Planung, Installation und Wartung von Solaranlagen.",
  },
  {
    title: "Sachkunde Mineralfasern",
    description:
      "Qualifiziert für den sicheren Umgang mit kunstlichen Mineralfasern (KMF) bei Dammarbeiten und Sanierungen.",
  },
]

const team = [
  {
    name: "Stefan Masch",
    role: "Geschäftsführer & Dachdeckermeister",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Thomas Muller",
    role: "Projektleiter Dach & Fassade",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Marco Schmidt",
    role: "Solar-Spezialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Andreas Weber",
    role: "Dachdeckergeselle",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
  },
]

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
                <p className="font-display text-xl md:text-2xl font-bold text-brand-dark italic">
                  &ldquo;Kundenzufriedenheit ist OUT,
                  <br />
                  <span className="text-brand-orange">
                    Kundenbegeisterung ist IN!&rdquo;
                  </span>
                </p>
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
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/handwerk-leidenschaft.jpg"
                  alt="Dachdecker bei der Arbeit im Dachstuhl mit einfallendem Sonnenlicht"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-orange rounded-2xl p-6 shadow-xl text-center">
                <p className="font-display text-3xl font-black text-white">
                  10+
                </p>
                <p className="font-body text-sm text-white/80">
                  Jahre Erfahrung
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

      {/* Section 4 - Team */}
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
              Unser <span className="text-brand-orange">Team</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {team.map((t) => (
              <motion.div
                key={t.name}
                className="group"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-dark">
                  {t.name}
                </h3>
                <p className="font-body text-sm text-brand-dark/60">
                  {t.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Timeline / Milestones */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-brand-beige">
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
