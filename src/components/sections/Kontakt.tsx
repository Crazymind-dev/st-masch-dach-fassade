"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
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
    value: "info@st-masch.de",
    href: "mailto:info@st-masch.de",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Öffnungszeiten",
    value: "Mo–Fr: 07:00 – 17:00 Uhr",
  },
]

const services = [
  "Steildach",
  "Flachdach",
  "Gründach",
  "Fassade & WDVS",
  "Metalldach",
  "Photovoltaik",
  "Dachservice",
]

export default function Kontakt() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-brand-dark overflow-hidden">
      {/* Shader Background */}
      <GradientBackground
        colors={["hsl(14, 100%, 50%)", "hsl(0, 60%, 20%)", "hsl(25, 100%, 45%)"]}
        colorBack="hsl(0, 0%, 5%)"
        intensity={0.3}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
              Kontakt
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Sprechen Sie <span className="text-brand-orange">uns an</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Kontaktinformationen
            </h3>
            <p className="font-body text-gray-400 text-[15px] font-light leading-relaxed mb-8">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns telefonisch,
              per E-Mail oder nutzen Sie unser Kontaktformular.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-white text-[15px] no-underline hover:text-brand-orange transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-white text-[15px]">
                        {item.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Ihr Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail Adresse *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                placeholder="Telefon (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-brand-dark text-gray-400">
                  Leistung auswählen
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-brand-dark">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Ihre Nachricht *"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,91,1,0.4)] transition-all cursor-pointer border-none"
            >
              Nachricht senden
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
