"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Home,
  Layers,
  Leaf,
  Building2,
  CircleDot,
  Wrench,
} from "lucide-react"

const services = [
  {
    icon: <Home className="w-7 h-7" />,
    title: "Steildach",
    description:
      "Neueindeckung, Sanierung und Reparatur von Steildächern mit hochwertigen Materialien — Ziegel, Schiefer oder Metall.",
    tags: ["Neueindeckung", "Sanierung", "Dachfenster"],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Flachdach",
    description:
      "Professionelle Flachdachabdichtung mit Bitumen- und Kunststoffbahnen. Wartung und Instandsetzung bestehender Systeme.",
    tags: ["Abdichtung", "Bitumen", "Wartung"],
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Gründach",
    description:
      "Extensive und intensive Dachbegrünung für nachhaltige Gebäude. Retentionsdächer und Biodiversitätsflächen.",
    tags: ["Extensiv", "Intensiv", "Retention"],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Fassade & WDVS",
    description:
      "Wärmedämmverbundsysteme, vorgehängte Fassaden und Kerndämmung für maximale Energieeffizienz und Optik.",
    tags: ["WDVS", "VHF", "Kerndämmung"],
  },
  {
    icon: <CircleDot className="w-7 h-7" />,
    title: "Metalldach",
    description:
      "Stehfalz- und Klickfalzsysteme in Zink, Kupfer oder Aluminium. Langlebig, wartungsarm und architektonisch anspruchsvoll.",
    tags: ["Stehfalz", "Zink", "Kupfer"],
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Dachservice",
    description:
      "Dachwartung, Rinnenreinigung, Sturmschadenbeseitigung und Notdienst. Schnelle Hilfe bei akuten Problemen.",
    tags: ["Wartung", "Notdienst", "Sturmschaden"],
  },
]

export default function Leistungen() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="leistungen" className="py-24 md:py-32 bg-white">
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
              Unsere Leistungen
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark leading-tight">
            Kompetenz in jedem <span className="text-brand-orange">Detail</span>
          </h2>
          <p className="font-body text-gray-500 mt-4 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Von der klassischen Dachsanierung bis zur modernen Fassadengestaltung — wir bieten das volle Spektrum.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top border animation */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand-orange group-hover:w-full transition-all duration-500" />

              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>

              <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brand-beige text-brand-dark font-heading text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
