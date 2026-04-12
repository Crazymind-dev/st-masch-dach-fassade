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
    description: "Neubau, Sanierung und Reparatur von Steildächern jeder Art.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Flachdach",
    description: "Professionelle Abdichtung mit Bitumen, EPDM oder PVC.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Gründach",
    description: "Dachbegrünung für nachhaltiges und ökologisches Bauen.",
  },
]

const rightServices = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Fassade",
    description: "WDVS und vorgehängte Fassaden für energieeffiziente Gebäude.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Photovoltaik",
    description: "PV-Anlagen und Speicher als zertifizierter Enphase Partner.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Dachservice",
    description: "Wartung, Inspektion und 24h Notdienst für Ihr Dach.",
  },
]

function ServiceItem({
  icon,
  title,
  description,
  index,
  isInView,
  fromLeft,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  isInView: boolean
  fromLeft: boolean
}) {
  return (
    <motion.div
      className="group flex gap-4 items-start cursor-pointer"
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-heading text-base font-bold text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">
          {title}
        </h4>
        <p className="font-body text-sm text-gray-500 font-light leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-brand-orange font-heading text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Mehr erfahren <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  )
}

export default function UeberUns() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
              Über uns
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark leading-tight">
            Ihr <span className="text-brand-orange">Meisterbetrieb</span> in Berlin
          </h2>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center mb-20">
          {/* Left Services */}
          <div className="space-y-8">
            {leftServices.map((s, i) => (
              <ServiceItem
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
                isInView={isInView}
                fromLeft
              />
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full border-2 border-brand-orange/20 animate-float-up" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-brand-orange/10 animate-float-down" />
            <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-brand-orange animate-pulse-dot" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[340px] aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                alt="Dachdecker Team"
                className="w-full h-full object-cover"
              />
              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 bg-brand-orange text-white rounded-xl px-5 py-3 shadow-lg">
                <div className="font-display text-2xl font-black leading-none">15+</div>
                <div className="font-heading text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Jahre Erfahrung
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Services */}
          <div className="space-y-8">
            {rightServices.map((s, i) => (
              <ServiceItem
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
                isInView={isInView}
                fromLeft={false}
              />
            ))}
          </div>
        </div>

        {/* Blockquote */}
        <motion.blockquote
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
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
          className="bg-brand-dark rounded-2xl px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Bereit für Ihr Projekt?
            </h3>
            <p className="font-body text-gray-400 text-sm font-light">
              Kontaktieren Sie uns für eine kostenlose Erstberatung.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:-translate-y-0.5 transition-all flex-shrink-0"
          >
            Jetzt anfragen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
