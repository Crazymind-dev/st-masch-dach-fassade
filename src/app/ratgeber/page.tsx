"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, ArrowRight, Filter, ChevronDown } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import JsonLd from "@/components/seo/JsonLd"
import { faqSchema } from "@/lib/seo"
import { ratgeberList, readingTimeMinutes, type RatgeberCategory } from "@/lib/ratgeber"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const categories: (RatgeberCategory | "Alle")[] = [
  "Alle",
  "Dach",
  "Dämmung",
  "Solar",
  "Flachdach",
]

/**
 * Allgemeine FAQ — von der Kontaktseite hierher umgezogen (Briefing E.15/F.20).
 * Der Kosten-Text ist Steves offizieller Wortlaut (Chat 30.05., 11:29) und die
 * verbindliche Referenz für alle Preisangaben in den Ratgebern — nicht umformulieren.
 */
const allgemeineFaqs: { question: string; answer: string[] }[] = [
  {
    question: "Was kostet eine Dachsanierung?",
    answer: [
      "Grobe Orientierung – Kosten Dachsanierung",
      "Die Eindeckung selbst (inkl. Lattung, Unterspannbahn und Montage) liegt je nach Material bei rund 100–130 €/m² für Betondachsteine, 110–180 €/m² für Tondachziegel und 180–250 €/m² für Biberschwanz.",
      "Im Komplettpreis – also Eindeckung inklusive Dämmung (Zwischensparren- und Aufsparrendämmung), Gerüst, First- und Ortgangarbeiten, Dachfenster sowie Abbruch und Entsorgung der Altdeckung – sollten Sie je nach gewünschtem Dämmstandard mit 400–600 €/m² rechnen. Eine Photovoltaikanlage kommt separat hinzu.",
      "Jedes Dach ist anders: Den genauen Preis ermitteln wir nach einer baulichen Gesamtbewertung/Planung vor Ort.",
    ],
  },
  {
    question: "Wie läuft der erste Kontakt ab?",
    answer: [
      "Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden bei Ihnen. Wir vereinbaren einen kostenlosen Vor-Ort-Termin, bei dem wir den Zustand Ihres Daches begutachten und Ihre Wünsche besprechen. Anschließend erhalten Sie ein unverbindliches Angebot.",
    ],
  },
  {
    question: "Was tun bei Sturmschäden oder akuten Undichtigkeiten?",
    answer: [
      "Rufen Sie uns an unter 030-844 17 068 — wir kümmern uns umgehend um eine Notabdichtung, damit keine Folgeschäden entstehen.",
    ],
  },
]

export default function RatgeberOverviewPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Alle")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const filtered =
    filter === "Alle"
      ? ratgeberList
      : ratgeberList.filter((r) => r.category === filter)

  return (
    <>
      <JsonLd
        data={faqSchema(
          allgemeineFaqs.map((f) => ({
            question: f.question,
            answer: f.answer.join(" "),
          })),
        )}
      />
      <PageHero
        title="Ratgeber"
        highlight="Dach, Dämmung & Solar"
        subtitle="Meisterwissen für Hauseigentümer in Berlin — verständlich erklärt, ohne Werbefloskeln. Entscheidungshilfen, Material-Vergleiche und Kosten-Orientierung aus der Praxis."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
        ]}
      />

      {/* Filter */}
      <section className="bg-brand-beige py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mr-2">
              Filter
            </span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-4 py-2 rounded-full font-heading text-xs font-bold uppercase tracking-wider cursor-pointer border transition-colors min-h-[36px]",
                  filter === c
                    ? "bg-brand-orange text-white border-brand-orange"
                    : "bg-white text-brand-dark/70 border-black/10 hover:border-brand-orange/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {filtered.map((article) => (
              <motion.div
                key={article.slug}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/ratgeber/${article.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-black/5 p-6 no-underline hover:border-brand-orange/40 hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-widest text-brand-orange">
                      <BookOpen className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="text-[11px] font-body text-brand-dark/45">
                      · {readingTimeMinutes(article)} Min.
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-brand-dark leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-body text-sm text-brand-dark/60 leading-relaxed mb-5 flex-1">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wide text-brand-orange">
                    Ratgeber lesen
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-brand-dark/50 py-10">
              Keine Ratgeber in dieser Kategorie.
            </p>
          )}
        </div>
      </section>

      {/* Allgemeine FAQ (von der Kontaktseite umgezogen) */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
            Gut zu wissen
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-8">
            Häufig gestellte <span className="text-brand-orange">Fragen</span>
          </h2>
          <div className="space-y-3">
            {allgemeineFaqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div
                  key={f.question}
                  className="bg-white rounded-2xl border border-black/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-none cursor-pointer min-h-[44px]"
                    aria-expanded={open}
                  >
                    <span className="font-heading text-base md:text-lg font-bold text-brand-dark">
                      {f.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-300",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 space-y-3">
                      {f.answer.map((para, pi) => (
                        <p
                          key={pi}
                          className={cn(
                            "font-body text-sm md:text-base text-brand-dark/70 leading-relaxed m-0",
                            f.answer.length > 1 && pi === 0 && "font-semibold text-brand-dark",
                          )}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <p className="mt-8 font-body text-sm text-brand-dark/60">
            Ihre Frage ist nicht dabei?{" "}
            <Link href="/kontakt" className="text-brand-orange hover:underline">
              Kontaktieren Sie uns
            </Link>{" "}
            — wir antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </section>
    </>
  )
}
