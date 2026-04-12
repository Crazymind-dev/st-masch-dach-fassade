"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, ArrowRight, Filter } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
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

export default function RatgeberOverviewPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Alle")

  const filtered =
    filter === "Alle"
      ? ratgeberList
      : ratgeberList.filter((r) => r.category === filter)

  return (
    <>
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
    </>
  )
}
