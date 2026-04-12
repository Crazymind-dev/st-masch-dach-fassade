"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import {
  Home,
  Layers,
  Leaf,
  Building2,
  CircleDot,
  Wrench,
  ArrowRight,
} from "lucide-react"
import {
  AnimatedCard,
  CardBody,
  CardTitle,
  CardDescription,
} from "@/components/ui/animated-card"

const services = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Steildach",
    description: "Neueindeckung, Sanierung und Reparatur mit Ziegel, Schiefer oder Metall.",
    tags: ["Neueindeckung", "Sanierung", "Dachfenster"],
    href: "/leistungen/steildach",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Flachdach",
    description: "Professionelle Abdichtung mit Bitumen, EPDM und Kunststoffbahnen.",
    tags: ["Abdichtung", "Bitumen", "EPDM"],
    href: "/leistungen/flachdach",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Gründach",
    description: "Extensive und intensive Begrünung für nachhaltige Gebäude.",
    tags: ["Extensiv", "Intensiv", "Retention"],
    href: "/leistungen/gruendach",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Fassade & WDVS",
    description: "Wärmedämmverbundsysteme und vorgehängte Fassaden für maximale Effizienz.",
    tags: ["WDVS", "VHF", "Kerndämmung"],
    href: "/leistungen/fassade",
  },
  {
    icon: <CircleDot className="w-6 h-6" />,
    title: "Metalldach",
    description: "Stehfalzsysteme in Titanzink, Kupfer oder Aluminium — langlebig und elegant.",
    tags: ["Stehfalz", "Zink", "Kupfer"],
    href: "/leistungen/metalldach",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Dachservice",
    description: "Wartung, Rinnenreinigung, Sturmschaden und 24h-Notdienst.",
    tags: ["Wartung", "Notdienst", "Reparatur"],
    href: "/leistungen/dachservice",
  },
]

export default function Leistungen() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="leistungen" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 md:w-10 h-[2px] bg-brand-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
              Unsere Leistungen
            </span>
            <div className="w-8 md:w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-brand-dark leading-tight">
            Kompetenz in jedem <span className="text-brand-orange">Detail</span>
          </h2>
          <p className="font-body text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Von der klassischen Dachsanierung bis zur modernen Fassadengestaltung — wir bieten das volle Spektrum.
          </p>
        </motion.div>

        {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={service.href} className="block no-underline">
                <AnimatedCard className="h-full hover:-translate-y-2 transition-transform duration-300">
                  <CardBody className="p-5 sm:p-7">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/[0.08] flex items-center justify-center text-brand-orange group-hover/animated-card:bg-brand-orange group-hover/animated-card:text-white transition-all duration-300 flex-shrink-0">
                        {service.icon}
                      </div>
                      <CardTitle className="group-hover/animated-card:text-brand-orange transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>

                    {/* Description */}
                    <CardDescription className="mb-4 sm:mb-5">
                      {service.description}
                    </CardDescription>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 font-heading text-[10px] font-semibold rounded-lg uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover link */}
                    <div className="flex items-center gap-1.5 text-brand-orange font-heading text-xs font-bold uppercase tracking-wide opacity-0 group-hover/animated-card:opacity-100 translate-y-2 group-hover/animated-card:translate-y-0 transition-all duration-300">
                      Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </CardBody>
                </AnimatedCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
