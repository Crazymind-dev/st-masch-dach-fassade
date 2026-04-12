"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type ParallaxHeroProps = {
  eyebrow?: string
  headline?: string
  imageSrc?: string
  imageAlt?: string
}

export default function ParallaxHero({
  eyebrow = "Schönheit und Qualität brauchen die richtige Zeit, um erdacht und umgesetzt zu werden — auch in einer Welt, die es zu eilig hat.",
  headline = "Dach. Fassade. Solar.",
  imageSrc = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
  imageAlt = "Solaranlage auf einem Dach",
}: ParallaxHeroProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <div className="mx-2 mt-10 mb-40 overflow-hidden rounded-[2rem] bg-white">
      <div
        className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-white"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-20 text-white mix-blend-difference">
          <p className="w-full md:w-[50vw] self-end text-base md:text-[2vw] uppercase mix-blend-difference font-body leading-snug">
            {eyebrow}
          </p>
          <p className="text-[12vw] md:text-[5vw] uppercase mix-blend-difference font-display font-black leading-none">
            {headline}
          </p>
        </div>
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <img
              alt={imageAlt}
              src={imageSrc}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
