"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    name: "Villa Charlottenburg",
    type: "Steildachsanierung",
    span: "md:col-span-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    name: "Bürogebäude Mitte",
    type: "Flachdach & WDVS",
    span: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    name: "Wohnanlage Prenzlauer Berg",
    type: "Gründach & Photovoltaik",
    span: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    name: "Einfamilienhaus Zehlendorf",
    type: "Metalldach & Solar",
    span: "md:col-span-2",
  },
]

export default function Referenzen() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="referenzen" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
                Referenzen
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark leading-tight">
              Unsere <span className="text-brand-orange">Projekte</span>
            </h2>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-brand-dark border-2 border-gray-300 rounded-full font-heading text-sm font-semibold no-underline hover:border-brand-orange hover:text-brand-orange transition-all flex-shrink-0"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-[2px] text-brand-orange mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
