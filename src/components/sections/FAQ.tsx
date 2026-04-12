"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Wie läuft eine Dachsanierung ab?",
    answer:
      "Nach einer kostenlosen Erstberatung und Dachinspektion erstellen wir ein detailliertes Angebot. Nach Auftragserteilung beginnen wir mit dem Gerüstaufbau, entfernen die alte Eindeckung, prüfen und reparieren die Unterkonstruktion, bringen Dämmung und neue Eindeckung auf. Je nach Umfang dauert eine Sanierung 1–3 Wochen.",
  },
  {
    question: "Lohnt sich eine Photovoltaikanlage auf meinem Dach?",
    answer:
      "In den meisten Fällen ja! Wir analysieren Ihre Dachfläche, Ausrichtung und Verschattung kostenlos. Moderne PV-Anlagen amortisieren sich in der Regel nach 8–12 Jahren. Mit einem Stromspeicher können Sie bis zu 80% Ihres Stroms selbst erzeugen. Als Enphase-Partner bieten wir besonders effiziente Mikrowechselrichter-Systeme.",
  },
  {
    question: "Welche Fördermittel gibt es für Dach und Solar?",
    answer:
      "Es gibt zahlreiche Förderprogramme: KfW-Förderung für energetische Sanierung, BAFA-Zuschüsse für Wärmedämmung, sowie EEG-Einspeisevergütung für Solarstrom. Auch das Land Berlin bietet eigene Programme an. Wir beraten Sie umfassend zu allen aktuellen Fördermöglichkeiten und unterstützen Sie bei der Antragstellung.",
  },
  {
    question: "Bieten Sie einen Notdienst für Sturmschäden an?",
    answer:
      "Ja, wir bieten einen 24-Stunden-Notdienst für akute Dachschäden an. Bei Sturmschäden, Wassereintritt oder anderen Notfällen sind wir schnell vor Ort, um Sofortmaßnahmen einzuleiten und Ihr Gebäude zu sichern. Rufen Sie uns an unter 030 - 844 17 068.",
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
  inView,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="font-heading text-base md:text-lg font-bold text-brand-dark pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-brand-orange" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-gray-500 font-light leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-beige">
      <div className="max-w-6xl mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
                FAQ
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark leading-tight mb-6">
              Häufig gestellte <span className="text-brand-orange">Fragen</span>
            </h2>
            <p className="font-body text-gray-500 text-lg font-light leading-relaxed">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um
              Dachsanierung, Photovoltaik und unsere Leistungen. Für weitere
              Informationen stehen wir Ihnen gerne persönlich zur Verfügung.
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
