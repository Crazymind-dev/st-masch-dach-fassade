"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sun, Battery, Activity, ArrowRight } from "lucide-react"

const features = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "PV-Anlagen",
    description:
      "Individuelle Photovoltaikanlagen für Ihr Dach — optimal geplant, fachgerecht montiert und ans Netz angeschlossen.",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Stromspeicher",
    description:
      "Intelligente Speicherlösungen für maximale Eigenverbrauchsquote und Unabhängigkeit vom Stromnetz.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Monitoring & Wartung",
    description:
      "Echtzeit-Überwachung Ihrer Anlage und regelmäßige Wartung für dauerhaft hohe Erträge.",
  },
]

export default function Solar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solar" className="relative py-16 md:py-32 bg-brand-dark overflow-hidden">
      {/* Orange glow top-right */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 md:w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange">
                Photovoltaik
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4 md:mb-6">
              Solarenergie vom <span className="text-brand-orange">Dachprofi</span>
            </h2>

            <p className="font-body text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10">
              Eine PV-Anlage ist nur so gut wie das Dach, auf dem sie sitzt.
              Wir sind erst Dachdecker-Meisterbetrieb, dann Solar-Partner —
              deshalb halten unsere Anlagen nicht nur Strom, sondern auch dicht.
            </p>

            <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange flex-shrink-0">
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

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,91,1,0.4)] transition-all min-h-[44px]"
            >
              Solar-Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Image + Badge */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Solaranlage auf einem Dach"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />

              {/* Enphase Badge */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-white/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-white/20">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-heading text-sm font-bold text-white">
                      Enphase Energy Partner
                    </div>
                    <div className="font-body text-xs text-white/60">
                      Zertifizierter Installateur für Mikrowechselrichter-Systeme
                    </div>
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
