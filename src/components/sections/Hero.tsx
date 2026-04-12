"use client"

import { motion } from "framer-motion"
import { Home, Building2, Sun, ArrowRight } from "lucide-react"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"

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
    <section id="start" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-16 lg:py-0 relative z-[2]">
        {/* Watermark */}
        <div className="absolute bottom-[-40px] left-[-20px] font-heading font-black text-[160px] xl:text-[220px] text-black/[0.04] leading-[0.85] pointer-events-none select-none z-0">
          Dach<br />werk
        </div>

        <motion.div
          className="flex items-center gap-3 mb-8 relative z-[1]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-[2px] bg-brand-orange" />
          <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
            Meisterbetrieb Berlin
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-5xl xl:text-[54px] font-black text-brand-dark leading-[1.15] mb-6 relative z-[1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-brand-orange">Dach & Fassade</span> trifft Solarenergie
          <span className="block font-heading font-light text-2xl md:text-4xl text-gray-500 mt-2">
            Alles aus einer Hand.
          </span>
        </motion.h1>

        <motion.p
          className="font-body text-[17px] font-light leading-[1.8] text-gray-500 max-w-[460px] mb-10 relative z-[1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Von der Dachsanierung bis zur Photovoltaikanlage — Ihr zertifizierter Meisterbetrieb für nachhaltige
          Gebäudelösungen in Berlin und Brandenburg.
        </motion.p>

        <motion.div
          className="flex gap-4 items-center mb-16 relative z-[1] flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-9 py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,91,1,0.4)] transition-all"
          >
            Angebot anfragen
          </a>
          <a
            href="/leistungen"
            className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-brand-dark border-2 border-gray-300 rounded-full font-heading text-sm font-semibold no-underline hover:border-brand-orange hover:text-brand-orange transition-all"
          >
            Unsere Leistungen
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="flex gap-6 lg:gap-9 flex-wrap relative z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { label: "Meisterbetrieb", sub: "Qualifiziert & zertifiziert" },
            { label: "Berlin & Brandenburg", sub: "Regionaler Fachbetrieb" },
            { label: "Solar Partner", sub: "Enphase zertifiziert" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-white border border-black/[0.08] flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-brand-orange">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <div className="font-heading text-[13px] text-gray-400 font-medium">
                <strong className="block text-brand-dark font-bold text-sm">{t.label}</strong>
                {t.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: Image + Shader Background */}
      <div className="relative overflow-hidden">
        {/* Animated Shader Background — sits behind the image */}
        <div className="absolute inset-0 z-0">
          <GradientBackground
            colors={["hsl(14, 100%, 50%)", "hsl(30, 100%, 48%)", "hsl(350, 80%, 45%)"]}
            colorBack="hsl(0, 0%, 8%)"
            softness={0.8}
            intensity={0.55}
            speed={0.6}
          />
        </div>

        {/* Photo with blend mode — shader bleeds through */}
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80"
          alt="Dachdecker bei der Arbeit"
          className="relative z-[1] w-full h-full object-cover block min-h-[50vh] lg:min-h-screen mix-blend-luminosity opacity-60"
        />

        {/* Gradient overlay for text readability on glass cards */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-l from-black/30 via-transparent to-transparent" />

        {/* Fade edge to beige */}
        <div className="absolute top-0 left-0 w-[120px] h-full bg-gradient-to-r from-brand-beige to-transparent z-[2] hidden lg:block" />

        {/* Orange accent bar */}
        <div className="absolute top-0 right-0 w-[6px] h-full bg-gradient-to-b from-brand-orange via-brand-orange-dark to-transparent z-[5]" />

        {/* Stats */}
        <div className="absolute bottom-10 left-10 z-[3] flex gap-6">
          {[
            { num: "15+", label: "Jahre Erfahrung" },
            { num: "500+", label: "Projekte" },
          ].map((s) => (
            <motion.div
              key={s.label}
              className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-5 min-w-[140px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="font-display text-[32px] font-black text-brand-orange leading-none">{s.num}</div>
              <div className="font-body text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Glass Cards */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-[4] flex-col gap-3 hidden xl:flex">
          {glassCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              className="block w-[240px] bg-white/[0.1] backdrop-blur-[20px] rounded-2xl p-[22px_24px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20 no-underline hover:bg-brand-orange/[0.15] hover:border-brand-orange/40 hover:-translate-x-2 transition-all duration-400"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              whileHover={{ x: -8 }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-orange/25 to-brand-orange-dark/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <ArrowRight className="w-[18px] h-[18px] text-white/30" />
              </div>
              <h4 className="font-heading text-[15px] font-bold text-white mb-1">{card.title}</h4>
              <p className="font-body text-xs text-white/55 font-light leading-snug">{card.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
