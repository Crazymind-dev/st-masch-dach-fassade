"use client"

import { motion } from "framer-motion"
import { Home, Building2, Sun, ArrowRight, Phone } from "lucide-react"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"
import { GlowButton } from "@/components/ui/glow-button"

const glassCards = [
  {
    icon: <Home className="w-[22px] h-[22px] text-brand-orange" />,
    title: "Dachsysteme",
    desc: "Steildach, Flachdach, Gründach — Neubau & Sanierung",
    href: "/leistungen",
  },
  {
    icon: <Building2 className="w-[22px] h-[22px] text-brand-orange" />,
    title: "Fassade & Dämmung",
    desc: "WDVS, VHF, Kerndämmung — Energieeffizient sanieren",
    href: "/leistungen",
  },
  {
    icon: <Sun className="w-[22px] h-[22px] text-brand-orange" />,
    title: "Photovoltaik",
    desc: "PV-Anlagen, Speicher & Monitoring — Enphase Partner",
    href: "/solar",
  },
]

export default function Hero() {
  return (
    <section id="start" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Shader Background */}
      <div className="absolute inset-0 z-0">
        <GradientBackground
          colors={["hsl(14, 100%, 50%)", "hsl(30, 100%, 48%)", "hsl(350, 80%, 45%)"]}
          colorBack="hsl(20, 10%, 6%)"
          softness={0.8}
          intensity={0.5}
          speed={0.5}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 pt-28 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6 md:mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 md:w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-[2px] md:tracking-[3px] text-brand-orange">
                Meisterbetrieb Berlin
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-black text-white leading-[1.1] mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-brand-orange">Dach, Fassade</span>
              <br />
              <span className="text-brand-orange">&</span> Solarenergie
            </motion.h1>

            <motion.p
              className="font-heading font-light text-lg md:text-2xl text-white/70 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Alles aus einer Hand.
            </motion.p>

            <motion.p
              className="font-body text-[15px] md:text-[17px] font-light leading-[1.8] text-white/75 max-w-[500px] mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Von der Dachsanierung bis zur Photovoltaikanlage — Ihr zertifizierter Meisterbetrieb
              für nachhaltige Gebäudelösungen in Berlin und Brandenburg.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex gap-3 sm:gap-4 items-center mb-10 md:mb-14 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GlowButton href="/kontakt" variant="primary" size="md">
                Angebot anfragen
              </GlowButton>
              <GlowButton href="tel:+493084417068" variant="dark" size="md">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">030 - 844 17 068</span>
                <span className="sm:hidden">Anrufen</span>
              </GlowButton>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex gap-4 sm:gap-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { label: "Meisterbetrieb", sub: "Qualifiziert & zertifiziert" },
                { label: "Berlin & Brandenburg", sub: "Regionaler Fachbetrieb" },
                { label: "Solar Partner", sub: "Enphase zertifiziert" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 border border-white/15 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] fill-brand-orange">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                  </div>
                  <div className="font-heading text-[11px] sm:text-[12px] text-white/60 font-medium">
                    <strong className="block text-white font-bold text-[12px] sm:text-[13px]">{t.label}</strong>
                    <span className="hidden sm:inline">{t.sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Glass Cards */}
          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {glassCards.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                className="flex items-center gap-4 sm:gap-5 bg-white/[0.07] backdrop-blur-[20px] rounded-2xl p-4 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/15 no-underline hover:bg-brand-orange/[0.12] hover:border-brand-orange/30 transition-all duration-300 group min-h-[44px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                whileHover={{ x: 8 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-orange-dark/10 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-[15px] sm:text-[16px] font-bold text-white mb-0.5 sm:mb-1">{card.title}</h4>
                  <p className="font-body text-xs sm:text-sm text-white/65 font-light leading-snug">{card.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-orange transition-colors flex-shrink-0" />
              </motion.a>
            ))}

            {/* Stats row */}
            <div className="flex gap-3 sm:gap-4 mt-2">
              {[
                { num: "15+", label: "Jahre Erfahrung" },
                { num: "500+", label: "Projekte" },
                { num: "24h", label: "Notdienst" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex-1 bg-white/[0.05] backdrop-blur-sm rounded-xl px-3 sm:px-5 py-3 sm:py-4 border border-white/10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                >
                  <div className="font-display text-xl sm:text-2xl font-black text-brand-orange leading-none">{s.num}</div>
                  <div className="font-body text-[9px] sm:text-[10px] text-white/60 mt-1 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hide on very small screens */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex-col items-center gap-2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-body text-[10px] text-white/50 uppercase tracking-[3px]">Mehr erfahren</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-brand-orange/80 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
