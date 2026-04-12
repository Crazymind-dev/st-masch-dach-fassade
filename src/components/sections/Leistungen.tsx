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
  CardVisual,
  Visual1,
} from "@/components/ui/animated-card"

const services = [
  {
    icon: <Home className="w-5 h-5" />,
    title: "Steildach",
    description: "Neueindeckung, Sanierung und Reparatur mit Ziegel, Schiefer oder Metall.",
    tags: ["Neueindeckung", "Sanierung", "Dachfenster"],
    mainColor: "#ff5b01",
    secondaryColor: "#e86425",
    href: "/leistungen/steildach",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Flachdach",
    description: "Professionelle Abdichtung mit Bitumen, EPDM und Kunststoffbahnen.",
    tags: ["Abdichtung", "Bitumen", "EPDM"],
    mainColor: "#e86425",
    secondaryColor: "#ff5b01",
    href: "/leistungen/flachdach",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Gründach",
    description: "Extensive und intensive Begrünung für nachhaltige Gebäude.",
    tags: ["Extensiv", "Intensiv", "Retention"],
    mainColor: "#4caf50",
    secondaryColor: "#ff5b01",
    href: "/leistungen/gruendach",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Fassade & WDVS",
    description: "Wärmedämmverbundsysteme und vorgehängte Fassaden für maximale Effizienz.",
    tags: ["WDVS", "VHF", "Kerndämmung"],
    mainColor: "#ff5b01",
    secondaryColor: "#c44200",
    href: "/leistungen/fassade",
  },
  {
    icon: <CircleDot className="w-5 h-5" />,
    title: "Metalldach",
    description: "Stehfalzsysteme in Titanzink, Kupfer oder Aluminium — langlebig und elegant.",
    tags: ["Stehfalz", "Zink", "Kupfer"],
    mainColor: "#78909c",
    secondaryColor: "#ff5b01",
    href: "/leistungen/metalldach",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Dachservice",
    description: "Wartung, Rinnenreinigung, Sturmschaden und 24h-Notdienst.",
    tags: ["Wartung", "Notdienst", "Reparatur"],
    mainColor: "#ff5b01",
    secondaryColor: "#ffa726",
    href: "/leistungen/dachservice",
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

        {/* Grid with AnimatedCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={service.href} className="block no-underline">
                <AnimatedCard className="h-full hover:-translate-y-2 transition-transform duration-300">
                  <CardVisual>
                    <Visual1
                      mainColor={service.mainColor}
                      secondaryColor={service.secondaryColor}
                    />
                  </CardVisual>
                  <CardBody>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-brand-beige text-brand-dark font-heading text-[10px] font-semibold rounded-full uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-brand-orange font-heading text-xs font-semibold opacity-0 group-hover/animated-card:opacity-100 transition-opacity">
                      Mehr erfahren <ArrowRight className="w-3 h-3" />
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
