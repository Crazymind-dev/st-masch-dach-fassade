"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Adresse",
    value: "Musterstraße 12, 12345 Berlin",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Telefon",
    value: "030 - 844 17 068",
    href: "tel:+493084417068",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "E-Mail",
    value: "kontakt@die-dachdecker.berlin",
    href: "mailto:kontakt@die-dachdecker.berlin",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Öffnungszeiten",
    value: "Mo–Fr: 07:00 – 17:00 Uhr",
  },
]

export default function Kontakt() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="kontakt" className="relative py-16 md:py-32 bg-brand-dark overflow-hidden">
      {/* Shader background */}
      <GradientBackground
        colors={[
          "hsl(14, 100%, 50%)",
          "hsl(0, 60%, 20%)",
          "hsl(25, 100%, 45%)",
        ]}
        colorBack="hsl(0, 0%, 5%)"
        intensity={0.3}
      />

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-4 block">
            Kontakt
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
            Jetzt <span className="text-brand-orange">Angebot</span> anfragen
          </h2>
          <p className="font-body text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Kontaktieren Sie uns für eine kostenlose Beratung. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 sm:space-y-6 mb-8 md:mb-10">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex gap-3 sm:gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-base text-white no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-base text-white">
                        {item.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-[180px] sm:h-[200px] bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="font-heading text-sm text-gray-500">
                Berlin & Brandenburg
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    placeholder="Ihre E-Mail"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    Leistung
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm focus:outline-none focus:border-brand-orange transition-colors appearance-none cursor-pointer min-h-[44px]">
                    <option value="" className="bg-brand-dark">Bitte wählen</option>
                    <optgroup label="Dach" className="bg-brand-dark">
                      <option value="steildach" className="bg-brand-dark">Steildach</option>
                      <option value="flachdach" className="bg-brand-dark">Flachdach</option>
                      <option value="gruendach" className="bg-brand-dark">Gründach</option>
                      <option value="metalldach" className="bg-brand-dark">Metalldach</option>
                      <option value="dachservice" className="bg-brand-dark">Dachservice</option>
                    </optgroup>
                    <optgroup label="Solar" className="bg-brand-dark">
                      <option value="pv" className="bg-brand-dark">PV-Anlagen</option>
                      <option value="stromspeicher" className="bg-brand-dark">Stromspeicher</option>
                      <option value="monitoring" className="bg-brand-dark">Monitoring & Wartung</option>
                      <option value="home-energy" className="bg-brand-dark">Home Energy Management</option>
                    </optgroup>
                    <optgroup label="Fassade" className="bg-brand-dark">
                      <option value="wdvs" className="bg-brand-dark">WDVS-Dämmung</option>
                      <option value="vhf" className="bg-brand-dark">Vorgehängte Fassade (VHF)</option>
                      <option value="klinker" className="bg-brand-dark">Klinker & Naturstein</option>
                      <option value="fassadensanierung" className="bg-brand-dark">Fassadensanierung</option>
                    </optgroup>
                    <optgroup label="Weiteres" className="bg-brand-dark">
                      <option value="notdienst" className="bg-brand-dark">Reparatur / Notdienst</option>
                      <option value="sonstiges" className="bg-brand-dark">Sonstiges</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider cursor-pointer border-none shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:shadow-[0_8px_32px_rgba(255,91,1,0.4)] transition-all min-h-[48px]"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
