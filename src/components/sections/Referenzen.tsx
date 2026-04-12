"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    image: "/referenz-weisses-haus.jpg",
    title: "Einfamilienhaus Zehlendorf",
    type: "Steildach, Fassade & PV",
    span: "lg:col-span-2",
  },
  {
    image: "/referenz-pv-dach.jpg",
    title: "PV-Anlage Spandau",
    type: "All-black-Module",
    span: "",
  },
  {
    image: "/referenz-dachfenster.jpg",
    title: "Dachfenster Charlottenburg",
    type: "VELUX-Austausch",
    span: "",
  },
  {
    image: "/referenz-dachausbau.jpg",
    title: "Dachausbau Pankow",
    type: "VELUX & Dämmung",
    span: "lg:col-span-2",
  },
]

export default function Referenzen() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="referenzen" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 md:w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
                Referenzen
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-brand-dark leading-tight">
              Unsere <span className="text-brand-orange">Projekte</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-brand-dark text-brand-dark rounded-full font-heading text-sm font-bold no-underline hover:bg-brand-dark hover:text-white transition-all min-h-[44px]"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Grid: 1 col mobile, 3 col tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4 sm:p-6">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Always-visible bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-400 flex items-end p-4 sm:p-6">
                <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
