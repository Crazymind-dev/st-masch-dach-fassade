"use client"

import type React from "react"
import { useState, useCallback, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote: "St. Masch hat unser komplettes Dach in nur zwei Wochen saniert. Die Qualität der Arbeit ist hervorragend — man merkt, dass hier echte Meister am Werk sind.",
    author: "Thomas Bergmann",
    role: "Hausbesitzer",
    company: "Berlin-Steglitz",
    initials: "TB",
  },
  {
    quote: "Von der Beratung bis zur fertigen Solaranlage — alles aus einer Hand. Unsere Stromkosten haben sich halbiert. Absolut empfehlenswert!",
    author: "Sandra Möller",
    role: "Eigentümerin",
    company: "Berlin-Pankow",
    initials: "SM",
  },
  {
    quote: "Nach dem Sturm waren sie innerhalb von 24 Stunden da. Professionell, schnell und fair im Preis. So stellt man sich einen Meisterbetrieb vor.",
    author: "Klaus-Dieter Hartmann",
    role: "Hausverwaltung",
    company: "Brandenburg",
    initials: "KH",
  },
  {
    quote: "Die Fassadensanierung hat unser Mehrfamilienhaus komplett verwandelt. Endlich warme Wohnungen und eine moderne Optik. Danke an das gesamte Team!",
    author: "Maria Schulz",
    role: "WEG-Vorsitzende",
    company: "Berlin-Spandau",
    initials: "MS",
  },
  {
    quote: "Drei Flachdächer in unserem Gewerbegebiet, alle perfekt abgedichtet. St. Masch versteht ihr Handwerk. Wir arbeiten jetzt nur noch mit ihnen.",
    author: "Frank Weber",
    role: "Geschäftsführer",
    company: "Weber Immobilien GmbH",
    initials: "FW",
  },
]

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
              Kundenstimmen
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-dark leading-tight">
            Was unsere Kunden <span className="text-brand-orange">sagen</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div
          ref={containerRef}
          className="relative w-full max-w-2xl mx-auto py-16 px-8 md:px-12"
          style={{ cursor: "none" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleNext}
        >
          {/* Custom cursor */}
          <motion.div
            className="pointer-events-none absolute z-50 mix-blend-difference hidden md:block"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <motion.div
              className="rounded-full bg-brand-dark flex items-center justify-center"
              animate={{
                width: isHovered ? 80 : 0,
                height: isHovered ? 80 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
              <motion.span
                className="text-white text-xs font-heading font-medium tracking-wider uppercase"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.1 }}
              >
                Weiter
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Index indicator */}
          <motion.div
            className="absolute top-4 right-8 flex items-baseline gap-1 font-body text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="text-2xl font-light text-brand-dark font-display"
              key={activeIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">{String(testimonials.length).padStart(2, "0")}</span>
          </motion.div>

          {/* Initials dots */}
          <motion.div
            className="absolute top-4 left-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-[10px] font-bold transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-brand-orange text-white scale-110"
                    : "bg-gray-200 text-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {t.initials}
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <div className="relative mt-8">
            {/* Quote mark */}
            <div className="absolute -top-8 -left-4 text-brand-orange/10 font-display text-[120px] leading-none select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="text-xl md:text-2xl font-body font-light leading-relaxed tracking-tight text-brand-dark relative z-10"
              >
                <SplitText text={currentTestimonial.quote} />
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <motion.div className="mt-10 relative" layout>
              <div className="flex items-center gap-4">
                {/* Initials circle */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      className="w-14 h-14 rounded-full bg-brand-orange/10 border-2 border-brand-orange/20 flex items-center justify-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="font-heading text-lg font-bold text-brand-orange">
                        {currentTestimonial.initials}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Info */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="relative pl-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-orange"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      style={{ originY: 0 }}
                    />
                    <span className="block text-sm font-heading font-bold text-brand-dark tracking-wide">
                      {currentTestimonial.author}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5 font-body uppercase tracking-widest">
                      {currentTestimonial.role} — {currentTestimonial.company}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-12 h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-brand-orange rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              />
            </div>
          </div>

          {/* Mobile hint */}
          <motion.div
            className="absolute bottom-4 left-8 flex items-center gap-2 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
          >
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-body">Tippen zum Weiterblättern</span>
          </motion.div>

          {/* Desktop hint */}
          <motion.div
            className="absolute bottom-4 left-8 items-center gap-2 hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.4 : 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-body">Klicken zum Weiterblättern</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
