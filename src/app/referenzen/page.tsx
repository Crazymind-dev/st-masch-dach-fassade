"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ArrowUpRight, Award, Calendar, CheckCircle, Building2 } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"

type Category = "Alle" | "Steildach" | "Flachdach" | "Fassade" | "Solar" | "Dachfenster"

interface Project {
  id: number
  title: string
  location: string
  category: Category
  image: string
  description: string
  year: string
  tall?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Einfamilienhaus mit PV",
    location: "Berlin",
    category: "Steildach",
    image: "/referenz-weisses-haus.jpg",
    description: "Neueindeckung und Integration einer Photovoltaik-Anlage in das Steildach eines modernen Einfamilienhauses.",
    year: "2024",
    tall: true,
  },
  {
    id: 4,
    title: "Photovoltaik Einfamilienhaus",
    location: "Potsdam",
    category: "Solar",
    image: "/referenz-pv-dach.jpg",
    description: "Installation einer 12 kWp PV-Anlage mit Stromspeicher auf einem Satteldach.",
    year: "2024",
    tall: true,
  },
  {
    id: 5,
    title: "VELUX-Austausch Altbau",
    location: "Berlin-Charlottenburg",
    category: "Dachfenster",
    image: "/referenz-dachfenster.jpg",
    description: "Austausch alter Dachfenster gegen moderne VELUX-Modelle für mehr Licht und bessere Dämmwerte.",
    year: "2024",
  },
  {
    id: 6,
    title: "Dachausbau mit Dachfenstern",
    location: "Berlin-Mitte",
    category: "Dachfenster",
    image: "/referenz-dachausbau.jpg",
    description: "Dachausbau mit mehreren VELUX-Dachfenstern für einen hellen, modernen Wohnraum unterm Dach.",
    year: "2023",
    tall: true,
  },
  // TODO: Eigenes Foto für Solar Carport benötigt — vorher: nutzte
  // dasselbe Bild wie 'Photovoltaik Einfamilienhaus', deswegen entfernt.
]

const filters: Category[] = ["Alle", "Steildach", "Flachdach", "Fassade", "Solar", "Dachfenster"]

const stats = [
  { icon: Building2, value: "500+", label: "Projekte" },
  { icon: Calendar, value: "15+", label: "Jahre Erfahrung" },
  { icon: Award, value: "100%", label: "Meisterqualität" },
  { icon: CheckCircle, value: "Berlin &", label: "Brandenburg" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.25 } },
}

export default function ReferenzenPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Alle")

  const filtered = activeFilter === "Alle"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageHero
        title="Unsere"
        highlight="Referenzen"
        subtitle="Entdecken Sie eine Auswahl abgeschlossener Projekte in Berlin und Brandenburg — jedes einzelne in Meisterqualität umgesetzt."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Referenzen", href: "/referenzen" },
        ]}
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
      />

      {/* Filter + Project Grid */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Projektübersicht
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Qualität, die man <span className="text-brand-orange">sehen</span> kann.
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 border-none cursor-pointer ${
                  activeFilter === filter
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                    : "bg-white text-brand-dark/70 hover:bg-brand-dark hover:text-white shadow-sm"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Masonry-like Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${
                    project.tall ? "md:row-span-2" : ""
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.location} — ${project.category}-Referenzprojekt`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Default Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-heading font-bold uppercase tracking-wide rounded-full bg-brand-orange text-white">
                    {project.category}
                  </span>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/70">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-body text-sm">{project.location}</span>
                      <span className="ml-2 font-body text-xs text-white/50">{project.year}</span>
                    </div>
                  </div>

                  {/* Hover Detail Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/90 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-white/70 leading-relaxed mb-4 max-w-xs">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/50">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-body text-sm">{project.location}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-orange mt-4" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Erfahrung zählt
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white">
              Zahlen die <span className="text-brand-orange">überzeugen</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-brand-orange mx-auto mb-4" />
                <div className="font-display text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Ihr Projekt könnte das nächste sein"
            subtitle="Lassen Sie sich kostenlos und unverbindlich beraten — wir freuen uns auf Ihre Anfrage."
            buttonText="Jetzt anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
