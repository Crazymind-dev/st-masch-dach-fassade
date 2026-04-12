"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from "lucide-react"
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
    lines: ["Mo - Fr: 08:00 - 16:00 Uhr", "Sa & So: Geschlossen"],
  },
]

const leistungenGruppen = [
  {
    label: "Dach",
    items: ["Steildach", "Flachdach", "Gründach", "Metalldach", "Dachfenster", "Dachservice"],
  },
  {
    label: "Solar",
    items: [
      "PV-Anlagen",
      "Stromspeicher",
      "Monitoring & Wartung",
      "Home Energy Management",
    ],
  },
  {
    label: "Fassade",
    items: [
      "WDVS-Dämmung",
      "Vorgehängte Fassade (VHF)",
      "Klinker & Naturstein",
      "Fassadensanierung",
    ],
  },
  {
    label: "Weiteres",
    items: ["Reparatur / Notdienst", "Sonstiges"],
  },
]

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Wie läuft der erste Kontakt ab?",
    answer:
      "Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden bei Ihnen. Wir vereinbaren einen kostenlosen Vor-Ort-Termin, bei dem wir den Zustand Ihres Daches begutachten und Ihre Wünsche besprechen. Anschließend erhalten Sie ein unverbindliches Angebot.",
  },
  {
    question: "Was kostet eine Dachsanierung?",
    answer:
      "Die Kosten hängen von vielen Faktoren ab: Dachfläche, Material, Dämmung, Gerüst und eventuelle Zusatzarbeiten. Nach unserer Vor-Ort-Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot — ohne versteckte Kosten.",
  },
  {
    question: "Bieten Sie einen Notdienst an?",
    answer:
      "Ja, bei Sturmschäden oder akuten Undichtigkeiten sind wir schnell für Sie da. Rufen Sie uns an unter 030-844 17 068 — wir kümmern uns umgehend um eine Notabdichtung, damit keine Folgeschäden entstehen.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function KontaktPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

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
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">
                  Schreiben Sie uns
                </h3>
                <p className="font-body text-sm text-brand-dark/60 mb-8">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                    />
                  </div>

                  {/* Email + Telefon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="max@email.de"
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="030 123 456 78"
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                      />
                    </div>
                  </div>

                  {/* Leistung Dropdown */}
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                      Gewünschte Leistung
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Bitte wählen...
                      </option>
                      {leistungenGruppen.map((gruppe) => (
                        <optgroup key={gruppe.label} label={gruppe.label}>
                          {gruppe.items.map((l) => (
                            <option key={l} value={l}>
                              {l}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wide text-brand-dark/50 mb-1.5">
                      Nachricht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 bg-brand-beige/50 font-body text-sm text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-heading text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-brand-orange-dark hover:-translate-y-0.5 transition-all border-none cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Nachricht senden
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Gut zu wissen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Häufig gestellte <span className="text-brand-orange">Fragen</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-brand-beige rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer group"
                >
                  <h3 className="font-heading text-base font-bold text-brand-dark group-hover:text-brand-orange transition-colors pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-dark/40 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <p className="font-body text-sm text-brand-dark/70 leading-relaxed m-0">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Rufen Sie uns an"
            subtitle="Persönliche Beratung unter 030-844 17 068 — wir sind Mo-Fr von 08:00 bis 16:00 Uhr für Sie da."
            buttonText="Jetzt anrufen"
            href="tel:03084417068"
          />
        </div>
      </section>
    </>
  )
}
