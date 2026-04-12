"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import {
  ClipboardList,
  Home,
  Building2,
  Sun,
  Hammer,
  Wrench,
  ArrowUpRight,
} from "lucide-react"
import {
  AnimatedCard,
  CardBody,
  CardTitle,
  CardDescription,
} from "@/components/ui/animated-card"

const services = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Planung",
    description:
      "Jedes Projekt beginnt mit einem klaren Konzept. Wir analysieren die baulichen Gegebenheiten, beraten zu Materialien und entwickeln Lösungen, die technisch überzeugen und langfristig funktionieren. So entsteht eine Planung, die Sicherheit gibt — für Bauherren, Architekten und Eigentümer.",
    href: "/leistungen",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Dach",
    description:
      "Das Dach schützt, was Ihnen wichtig ist. Es hält Wind und Wetter ab, bewahrt Wärme im Haus und sorgt für Sicherheit über viele Jahre. Wir planen und realisieren langlebige Dachlösungen — präzise, hochwertig und mit Blick für jedes Detail. Ob Neubau, Sanierung oder Erweiterung: Ihr Dach ist bei uns in besten Händen.",
    href: "/leistungen",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Fassade",
    description:
      "Die Fassade prägt den Charakter eines Hauses und schützt gleichzeitig die gesamte Bausubstanz. Mit hochwertigen Materialien und handwerklicher Präzision sorgen wir dafür, dass Ihr Gebäude nicht nur gut aussieht, sondern auch langfristig geschützt ist. Ästhetik, Energieeffizienz und Werterhalt gehen bei uns Hand in Hand.",
    href: "/leistungen/fassade",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Solar & Energie",
    description:
      "Moderne Dachflächen können mehr als schützen — sie können Energie erzeugen. Mit durchdachten Solarlösungen machen wir Ihr Dach zu einer nachhaltigen Energiequelle. Wir beraten, planen und integrieren Photovoltaiksysteme so, dass Technik, Effizienz und Dacharchitektur optimal zusammenpassen.",
    href: "/solar",
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "Umsetzung",
    description:
      "Unsere Erfahrung zeigt sich auf der Baustelle: präzise, zuverlässig und sauber umgesetzt. Von der ersten Dachlatte bis zum letzten Detail arbeiten wir mit höchstem Qualitätsanspruch. Termintreue, fachgerechte Ausführung und ein starkes Team sorgen dafür, dass Ihr Projekt sicher realisiert wird.",
    href: "/kontakt",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Service",
    description:
      "Wir übernehmen Wartung, Reparaturen und schnelle Hilfe bei Schäden. Mit regelmäßigen Kontrollen und fachgerechten Instandsetzungen sorgen wir dafür, dass Ihr Dach seine Aufgabe dauerhaft erfüllt — und Sie sich weiterhin sicher fühlen können.",
    href: "/kontakt",
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
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-4 block">
            Unsere Leistungen
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-brand-dark leading-tight">
            Von der Planung bis zum <span className="text-brand-orange">letzten Detail</span>
          </h2>
          <p className="font-body text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Alles für Ihr Dach — aus einer Hand, mit Meisterbetrieb-Qualität.
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
              <Link href={service.href} className="block no-underline h-full">
                <AnimatedCard className="h-full hover:-translate-y-2 transition-transform duration-300">
                  <CardBody className="p-6 sm:p-7 h-full flex flex-col">
                    {/* Icon + arrow top row */}
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/[0.08] flex items-center justify-center text-brand-orange group-hover/animated-card:bg-brand-orange group-hover/animated-card:text-white transition-all duration-300 flex-shrink-0">
                        {service.icon}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-brand-orange/50 group-hover/animated-card:text-brand-orange group-hover/animated-card:-translate-y-0.5 group-hover/animated-card:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
                    </div>

                    {/* Title */}
                    <CardTitle className="text-xl sm:text-2xl mb-3 group-hover/animated-card:text-brand-orange transition-colors">
                      {service.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
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
