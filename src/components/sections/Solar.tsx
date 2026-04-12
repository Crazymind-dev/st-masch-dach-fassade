"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sun, Battery, BarChart3, ArrowRight } from "lucide-react"

const features = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "PV-Anlagen",
    description:
      "Planung und Installation hochwertiger Photovoltaikanlagen für Privat- und Gewerbegebäude.",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Stromspeicher",
    description:
      "Intelligente Speicherlösungen für maximale Eigenverbrauchsquote und Unabhängigkeit.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Monitoring & Wartung",
    description:
      "Echtzeit-Überwachung und regelmäßige Wartung für optimale Anlagenperformance.",
  },
]

export default function Solar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solar" className="relative py-24 md:py-32 bg-brand-dark overflow-hidden">
      {/* Orange glow top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-orange/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
                Photovoltaik
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Solarenergie vom <span className="text-brand-orange">Dachprofi</span>
            </h2>

            <p className="font-body text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Als zertifizierter Enphase-Partner kombinieren wir Dachdeckerhandwerk
              mit modernster Solartechnik — für eine nahtlose Integration auf Ihrem Dach.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-gray-400 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,91,1,0.4)] transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Solar-Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
              alt="Solaranlage auf dem Dach"
              className="w-full rounded-2xl object-cover aspect-[4/5] shadow-2xl"
            />

            {/* Enphase Partner Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    Enphase Energy Partner
                  </div>
                  <div className="font-body text-xs text-white/60 mt-0.5">
                    Zertifizierter Installateur — Premium Mikrowechselrichter
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
