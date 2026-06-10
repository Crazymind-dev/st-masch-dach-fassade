"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Home,
  Sun,
  Building2,
  MessageSquare,
  Loader2,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { company } from "@/lib/config"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Ruppiner Chaussee 221", "13503 Berlin"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["030-844 17 068"],
    href: "tel:03084417068",
  },
  {
    icon: Mail,
    title: "E-Mail",
    lines: ["kontakt@die-dachdecker.berlin"],
    href: "mailto:kontakt@die-dachdecker.berlin",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    lines: [company.hours.display, company.hours.weekend],
    linkLine: { label: company.hours.appointments, href: "tel:03084417068" },
  },
]

const topicChoices = [
  { value: "dach", label: "Dach", icon: Home },
  { value: "fassade", label: "Fassade", icon: Building2 },
  { value: "solar", label: "Solar & Energiesysteme", icon: Sun },
  { value: "sonstiges", label: "Sonstiges", icon: MessageSquare },
]

// FAQ-Block ist bewusst weg von der Kontaktseite — Inhalte leben jetzt in der
// FAQ-Sektion auf /ratgeber (Briefing E.15/F.20).

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function KontaktPage() {
  const [topics, setTopics] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const toggleTopic = (value: string) => {
    setTopics((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  // TODO (Briefing E.17, SRT-2): Formular später tiefgreifend am Erhebungsbogen
  // ausrichten — von Steve ausdrücklich zurückgestellt („Das lassen wir erst mal so stehen").
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    await new Promise((r) => setTimeout(r, 900))
    setStatus("sent")
  }

  return (
    <>
      <PageHero
        title="Kontakt"
        highlight="aufnehmen"
        subtitle="Wir beraten Sie gerne kostenlos und unverbindlich zu Ihrem Dachprojekt. Schreiben Sie uns oder rufen Sie direkt an."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
      />

      {/* Contact Section */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column — Contact Cards + Map */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
                  So erreichen Sie uns
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
                  Direkter <span className="text-brand-orange">Draht</span> zu uns
                </h2>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    variants={cardVariants}
                    className="bg-brand-dark rounded-xl p-5 group hover:bg-brand-dark/90 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-orange/15 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white/50 mb-1">
                          {info.title}
                        </h3>
                        {info.lines.map((line) =>
                          info.href ? (
                            <a
                              key={line}
                              href={info.href}
                              className="block font-body text-sm text-white no-underline hover:text-brand-orange transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="font-body text-sm text-white leading-relaxed m-0">
                              {line}
                            </p>
                          )
                        )}
                        {"linkLine" in info && info.linkLine && (
                          <a
                            href={info.linkLine.href}
                            className="inline-block font-body text-sm text-brand-orange no-underline hover:underline mt-1.5"
                          >
                            {info.linkLine.label} →
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                className="rounded-xl overflow-hidden border-2 border-brand-dark/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.8!2d13.2466!3d52.5978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM1JzUyLjEiTiAxM8KwMTQnNDcuOCJF!5e0!3m2!1sde!2sde!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort St. Masch Dach & Fassade"
                  className="w-full"
                />
              </motion.div>
            </div>

            {/* Right Column — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                {status === "sent" ? (
                  <motion.div
                    className="text-center py-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center mx-auto mb-5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                    </motion.div>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-3">
                      Vielen Dank!
                    </h3>
                    <p className="font-body text-base text-brand-dark/60 mb-6 max-w-sm mx-auto">
                      Ihre Anfrage ist bei uns angekommen. Wir melden uns
                      innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <p className="font-body text-base sm:text-sm text-brand-dark/50 mb-4">
                      Es ist dringend? Rufen Sie uns direkt an:
                    </p>
                    <a
                      href="tel:+493084417068"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-full font-heading text-sm font-bold no-underline shadow-[0_4px_24px_rgba(236,102,8,0.3)] hover:bg-brand-orange-dark transition-colors min-h-[48px]"
                    >
                      <Phone className="w-4 h-4" />
                      030 - 844 17 068
                    </a>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">
                      Schreiben Sie uns
                    </h3>
                    <p className="font-body text-base sm:text-sm text-brand-dark/60 mb-8">
                      Füllen Sie das Formular aus und wir melden uns innerhalb
                      von 24 Stunden.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Topic checkbox cards (multi-select) */}
                      <div>
                        <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1">
                          Worum geht es?
                        </label>
                        <p className="font-body text-[11px] text-brand-dark/50 mb-3">
                          Mehrfachauswahl möglich
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {topicChoices.map((choice) => {
                            const Icon = choice.icon
                            const selected = topics.includes(choice.value)
                            return (
                              <label
                                key={choice.value}
                                className={cn(
                                  "flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all min-h-[48px]",
                                  selected
                                    ? "bg-brand-orange/10 border-brand-orange text-brand-dark"
                                    : "bg-brand-beige/50 border-brand-dark/15 text-brand-dark/70 hover:border-brand-dark/30"
                                )}
                              >
                                <input
                                  type="checkbox"
                                  name="topics"
                                  value={choice.value}
                                  checked={selected}
                                  onChange={() => toggleTopic(choice.value)}
                                  className="sr-only"
                                />
                                <Icon
                                  className={cn(
                                    "w-4 h-4 flex-shrink-0",
                                    selected
                                      ? "text-brand-orange"
                                      : "text-brand-dark/40"
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

                      <div>
                        <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Max Mustermann"
                          className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-base sm:text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all min-h-[44px]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            name="email"
                            inputMode="email"
                            required
                            placeholder="max@email.de"
                            className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-base sm:text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all min-h-[44px]"
                          />
                        </div>
                        <div>
                          <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            inputMode="tel"
                            placeholder="030 123 456 78"
                            className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-base sm:text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all min-h-[44px]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                          Nachricht *
                        </label>
                        <textarea
                          required
                          rows={5}
                          name="message"
                          placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                          className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-base sm:text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-heading text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-brand-orange-dark hover:-translate-y-0.5 transition-all border-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 min-h-[48px]"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Wird gesendet…
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Nachricht senden
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Rufen Sie uns an"
            subtitle="Persönliche Beratung unter 030-844 17 068 — wir sind Mo–Fr von 7:00 bis 15:00 Uhr für Sie da. Termine nach Vereinbarung."
            buttonText="Jetzt anrufen"
            href="tel:03084417068"
          />
        </div>
      </section>
    </>
  )
}
