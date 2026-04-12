"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Wie läuft eine Dachsanierung ab?",
    answer:
      "Eine Dachsanierung beginnt mit einer kostenlosen Vor-Ort-Begehung und Bestandsaufnahme. Darauf folgt ein detailliertes Angebot inklusive Materialempfehlung. Nach Auftragserteilung koordinieren wir alle Gewerke, führen die Sanierung fachgerecht durch und dokumentieren alle Arbeitsschritte. Die gesamte Abwicklung erfolgt aus einer Hand.",
  },
  {
    question: "Was kostet eine Photovoltaikanlage?",
    answer:
      "Die Kosten einer PV-Anlage hängen von Dachfläche, Modultyp und Speicherlösung ab. Eine typische Anlage für ein Einfamilienhaus (8-12 kWp) liegt zwischen 15.000 und 25.000 Euro. Durch staatliche Förderungen und die Einspeisevergütung amortisiert sich die Investition in der Regel nach 8-12 Jahren. Wir erstellen Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Welche Fördermittel gibt es für Dach und Solar?",
    answer:
      "Es gibt zahlreiche Fördermöglichkeiten: KfW-Kredite für energetische Sanierung, BAFA-Zuschüsse für Einzelmaßnahmen, regionale Förderprogramme des Landes Berlin sowie die EEG-Einspeisevergütung für Solarstrom. Wir beraten Sie umfassend zu allen verfügbaren Fördermitteln und unterstützen Sie bei der Antragstellung.",
  },
  {
    question: "Bieten Sie einen Dach-Notdienst an?",
    answer:
      "Ja, wir bieten einen 24-Stunden-Notdienst für akute Dachschäden an — ob Sturmschaden, Wassereintritt oder lose Dachteile. Unser Notfall-Team ist schnell vor Ort, sichert Ihr Dach provisorisch und plant die dauerhafte Reparatur. Rufen Sie uns im Notfall direkt an unter 030 - 844 17 068.",
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
  isInView,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer bg-transparent border-none"
      >
        <h4 className="font-heading text-base md:text-lg font-bold text-brand-dark pr-4">
          {question}
        </h4>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body text-gray-500 text-[15px] font-light leading-relaxed pb-6">
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
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="font-heading text-xs font-bold uppercase tracking-[3px] text-brand-orange">
                FAQ
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark leading-tight mb-6">
              Häufig gestellte <span className="text-brand-orange">Fragen</span>
            </h2>
            <p className="font-body text-gray-500 text-lg font-light leading-relaxed max-w-md">
              Finden Sie Antworten auf die wichtigsten Fragen rund um
              Dachsanierung, Photovoltaik und unsere Leistungen.
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
