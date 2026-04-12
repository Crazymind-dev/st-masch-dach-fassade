"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Home,
  Layers,
  Leaf,
  Building2,
  Sun,
  Wrench,
  ArrowRight,
} from "lucide-react"

const leftServices = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Steildach",
    description: "Neueindeckung & Sanierung mit erstklassigen Materialien.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Flachdach",
    description: "Professionelle Abdichtung & Instandsetzung.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Gründach",
    description: "Nachhaltige Dachbegrünung für Ihr Gebäude.",
  },
]

const rightServices = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Fassade",
    description: "WDVS & vorgehängte Fassadensysteme.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Photovoltaik",
    description: "Solaranlagen vom zertifizierten Partner.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Dachservice",
    description: "Wartung, Reparatur & 24h Notdienst.",
  },
]

function ServiceItem({
  icon,
  title,
  description,
  index,
  inView,
  side,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  inView: boolean
  side: "left" | "right"
}) {
  return (
    <motion.div
      className="group flex gap-4 p-4 rounded-xl cursor-pointer hover:bg-brand-beige transition-colors"
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-heading text-base font-bold text-brand-dark mb-1">
          {title}
        </h4>
        <p className="font-body text-sm text-gray-500 font-light leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 font-heading text-xs font-semibold text-brand-orange mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Mehr erfahren <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  )
}

export default function UeberUns() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
              Über uns
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark leading-tight">
            Ihr <span className="text-brand-orange">Meisterbetrieb</span> in Berlin
          </h2>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Left services */}
          <div className="space-y-2">
            {leftServices.map((s, i) => (
              <ServiceItem
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
                inView={inView}
                side="left"
              />
            ))}
          </div>

          {/* Center image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-brand-orange/20 animate-float-up" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-2 border-brand-orange/15 animate-float-down" />
            <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-brand-orange/30 animate-pulse-dot" />

            <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                alt="Dachdecker-Team bei der Arbeit"
                className="w-full h-full object-cover"
              />

              {/* Experience badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg text-center">
                <div className="font-display text-3xl font-black text-brand-orange leading-none">
                  15+
                </div>
                <div className="font-heading text-xs font-bold text-brand-dark uppercase tracking-wider mt-1">
                  Jahre Erfahrung
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right services */}
          <div className="space-y-2">
            {rightServices.map((s, i) => (
              <ServiceItem
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
                inView={inView}
                side="right"
              />
            ))}
          </div>
        </div>

        {/* Blockquote */}
        <motion.blockquote
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-brand-dark italic leading-snug">
            &ldquo;Kundenzufriedenheit ist{" "}
            <span className="text-gray-400 line-through">OUT</span>,
            Kundenbegeisterung ist{" "}
            <span className="text-brand-orange">IN!</span>&rdquo;
          </p>
          <cite className="font-heading text-sm text-gray-500 not-italic mt-3 block">
            — St. Masch Dach & Fassade
          </cite>
        </motion.blockquote>

        {/* CTA Bar */}
        <motion.div
          className="bg-brand-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
              Bereit für Ihr nächstes Projekt?
            </h3>
            <p className="font-body text-gray-400 text-sm font-light">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:-translate-y-0.5 transition-all flex-shrink-0"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
