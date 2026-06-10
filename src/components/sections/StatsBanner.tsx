"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"
import { company } from "@/lib/config"

const stats = [
  { value: company.yearsExperience, suffix: "+", label: "Jahre Erfahrung" },
  { value: 500, suffix: "+", label: "Projekte" },
  { value: 100, suffix: "%", label: "Meisterqualität" },
  // Ersatz für die frühere „24h Notdienst"-Kachel — belegbar über config.certifications.
  // Finale Ersatz-Kennzahl kommt noch von Steve (offener Punkt #4).
  { value: company.certifications.length, suffix: "", label: "Zertifizierungen" },
]

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [display, setDisplay] = useState(inView ? value : 0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
      {/* Shader background */}
      <GradientBackground
        colors={[
          "hsl(14, 100%, 50%)",
          "hsl(25, 100%, 52%)",
          "hsl(35, 100%, 55%)",
        ]}
        colorBack="hsl(14, 100%, 40%)"
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-[2]"
        ref={ref}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none mb-1 sm:mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <div className="font-heading text-xs sm:text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
