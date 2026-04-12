"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Home,
  Layers,
  Leaf,
  Building2,
  Shield,
  Wrench,
} from "lucide-react"

const services = [
  {
    icon: <Home className="w-7 h-7" />,
    title: "Steildach",
    description:
      "Neueindeckung, Sanierung und Reparatur von Steildächern aller Art — von Ziegel bis Schiefer.",
    tags: ["Neubau", "Sanierung", "Ziegel", "Schiefer"],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Flachdach",
    description:
      "Professionelle Flachdachabdichtung mit Bitumen, EPDM oder PVC — langlebig und wartungsarm.",
    tags: ["Bitumen", "EPDM", "Abdichtung"],
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Gründach",
    description:
      "Extensive und intensive Dachbegrünung für nachhaltiges Bauen und besseres Stadtklima.",
    tags: ["Extensiv", "Intensiv", "Nachhaltig"],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Fassade & WDVS",
    description:
      "Wärmedämmverbundsysteme und vorgehängte Fassaden für maximale Energieeffizienz.",
    tags: ["WDVS", "VHF", "Dämmung"],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Metalldach",
    description:
      "Stehfalz-, Klick- und Leistensysteme in Zink, Kupfer oder Aluminium — modern und langlebig.",
    tags: ["Stehfalz", "Zink", "Kupfer"],
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Dachservice",
    description:
      "Wartung, Reparatur und Notdienst — damit Ihr Dach jederzeit in Top-Zustand bleibt.",
    tags: ["Wartung", "Reparatur", "Notdienst"],
  },
]

export default function Leistungen() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="leistungen" className="py-24 md:py-32 bg-white">
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
              Unsere Leistungen
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark leading-tight">
            Alles rund ums <span className="text-brand-orange">Dach</span>
          </h2>
          <p className="font-body text-gray-500 text-lg mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Vom Neubau bis zur Sanierung — wir bieten Ihnen das komplette
            Leistungsspektrum eines modernen Dachdeckerbetriebs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Orange top-border animation */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="font-heading text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>

              <p className="font-body text-gray-500 text-[15px] font-light leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-brand-beige text-brand-dark font-heading text-xs font-medium"
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
