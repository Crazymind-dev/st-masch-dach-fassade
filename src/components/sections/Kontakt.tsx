"use client"

import { useRef, useState, type FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Home,
  Sun,
  Building2,
  MessageSquare,
  Loader2,
  CheckCircle2,
} from "lucide-react"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Adresse",
    value: "Ruppiner Chaussee 221, 13503 Berlin",
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

const topicChoices = [
  { value: "dach", label: "Dach", icon: Home },
  { value: "solar", label: "Solar & Energie", icon: Sun },
  { value: "fassade", label: "Fassade", icon: Building2 },
  { value: "sonstiges", label: "Sonstiges", icon: MessageSquare },
]

export default function Kontakt() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [topic, setTopic] = useState<string>("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    // TODO: replace with real backend (email / webhook / form endpoint).
    await new Promise((r) => setTimeout(r, 900))
    setStatus("sent")
  }

  return (
    <section id="kontakt" className="relative py-16 md:py-32 bg-brand-dark overflow-hidden">
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

            <div className="rounded-2xl overflow-hidden h-[200px] sm:h-[240px] bg-white/5 border border-white/10">
              <iframe
                title="Standort St. Masch Dach, Fassade & Solar auf Google Maps"
                src="https://maps.google.com/maps?q=Ruppiner+Chaussee+221,+13503+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 grayscale contrast-[1.1] opacity-90"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {status === "sent" ? (
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-brand-orange/30 rounded-2xl p-8 sm:p-10 text-center min-h-[500px] flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-3">
                  Vielen Dank!
                </h3>
                <p className="font-body text-base text-white/70 mb-6 max-w-sm">
                  Ihre Anfrage ist bei uns angekommen. Wir melden uns innerhalb
                  von 24 Stunden bei Ihnen.
                </p>
                <p className="font-body text-sm text-white/50 mb-5">
                  Es ist dringend? Rufen Sie uns direkt an:
                </p>
                <a
                  href="tel:+493084417068"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-full font-heading text-sm font-bold no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark transition-colors min-h-[48px]"
                >
                  <Phone className="w-4 h-4" />
                  030 - 844 17 068
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-5"
              >
                {/* Topic radio cards */}
                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                    Worum geht es?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {topicChoices.map((choice) => {
                      const Icon = choice.icon
                      const selected = topic === choice.value
                      return (
                        <label
                          key={choice.value}
                          className={cn(
                            "flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all min-h-[48px]",
                            selected
                              ? "bg-brand-orange/20 border-brand-orange text-white"
                              : "bg-white/5 border-white/15 text-white/70 hover:border-white/30"
                          )}
                        >
                          <input
                            type="radio"
                            name="topic"
                            value={choice.value}
                            checked={selected}
                            onChange={(e) => setTopic(e.target.value)}
                            className="sr-only"
                          />
                          <Icon
                            className={cn(
                              "w-4 h-4 flex-shrink-0",
                              selected ? "text-brand-orange" : "text-gray-400"
                            )}
                          />
                          <span className="font-heading text-xs sm:text-sm font-semibold">
                            {choice.label}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
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
                      name="email"
                      inputMode="email"
                      required
                      placeholder="Ihre E-Mail"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    placeholder="030 123 456"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-body text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 sm:py-4 bg-brand-orange text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider cursor-pointer border-none shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark hover:shadow-[0_8px_32px_rgba(255,91,1,0.4)] transition-all min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Wird gesendet…
                    </>
                  ) : (
                    "Nachricht senden"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
