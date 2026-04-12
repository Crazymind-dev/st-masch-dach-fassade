"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type ParallaxBandProps = {
  eyebrow?: string
  headline: string
  imageSrc: string
  imageAlt?: string
  height?: string
}

export default function ParallaxBand({
  eyebrow,
  headline,
  imageSrc,
  imageAlt = "",
  height = "60vh",
}: ParallaxBandProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-brand-dark"
      style={{ height }}
    >
      <motion.div
        className="absolute inset-0 h-[130%] -top-[15%]"
        style={{ y }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white mix-blend-difference">
        {eyebrow && (
          <span className="font-heading text-xs md:text-sm font-bold uppercase tracking-[4px] mb-4 md:mb-6 opacity-90">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95] max-w-5xl">
          {headline}
        </h2>
      </div>
    </section>
  )
}
