"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useTransform, MotionValue } from "framer-motion"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"

function AnimatedNumber({ value, isInView }: { value: number; isInView: boolean }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v))
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setCurrent(v))
    return unsubscribe
  }, [display])

  return <>{current}</>
}

const stats = [
  { value: 15, suffix: "+", label: "Jahre Erfahrung" },
  { value: 500, suffix: "+", label: "Projekte" },
  { value: 100, suffix: "%", label: "Meisterqualität" },
  { value: 24, suffix: "h", label: "Notdienst" },
]

export default function StatsBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Shader Background */}
      <GradientBackground
        colors={["hsl(14, 100%, 50%)", "hsl(25, 100%, 52%)", "hsl(35, 100%, 55%)"]}
        colorBack="hsl(14, 100%, 40%)"
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-[2]" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none mb-2">
                <AnimatedNumber value={stat.value} isInView={isInView} />
                {stat.suffix}
              </div>
              <div className="font-heading text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
