"use client"

import { useState } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  ChevronDown,
  AlertTriangle,
  Info,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import JsonLd from "@/components/seo/JsonLd"
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/seo"
import { company, site } from "@/lib/config"
import {
  getRatgeberBySlug,
  readingTimeMinutes,
  ratgeberList,
  type RatgeberBlock,
} from "@/lib/ratgeber"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function RatgeberDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const article = getRatgeberBySlug(slug)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  if (!article) notFound()

  const pageUrl = `${site.baseUrl}/ratgeber/${article.slug}`
  const minutes = readingTimeMinutes(article)

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.metaDescription,
          url: pageUrl,
          datePublished: article.datePublished,
          sections: article.blocks
            .filter((b): b is { kind: "heading"; level: 2 | 3; text: string } => b.kind === "heading")
            .map((b) => ({ title: b.text, body: "" })),
        })}
      />
      <JsonLd data={faqSchema(article.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.baseUrl },
          { name: "Ratgeber", url: `${site.baseUrl}/ratgeber` },
          { name: article.title, url: pageUrl },
        ])}
      />

      <PageHero
        title={article.title}
        subtitle={article.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: article.category, href: "/ratgeber" },
        ]}
      />

      {/* Intro + Autor + Reading time */}
      <section className="bg-brand-beige py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-brand-orange">
              <BookOpen className="w-3.5 h-3.5" />
              {article.category}
            </span>
            <span className="text-xs font-body text-brand-dark/55">
              {minutes} Min. Lesezeit
            </span>
            <span className="text-xs font-body text-brand-dark/55">
              Stand: {new Date(article.datePublished).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>
          <p className="font-body text-base md:text-lg text-brand-dark/75 leading-relaxed">
            {article.intro}
          </p>

          {/* Author box */}
          <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/5">
            <div className="w-12 h-12 rounded-full bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
              <span className="font-heading text-sm font-bold text-brand-orange">SM</span>
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-brand-dark">
                {company.owner}
              </div>
              <div className="font-body text-xs text-brand-dark/55 leading-snug">
                {company.ownerTitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="bg-white py-14 md:py-20">
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {article.blocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </motion.div>
      </article>

      {/* Meisterempfehlung */}
      <section className="bg-brand-dark py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-black text-white mb-3">
                Unsere Empfehlung als Meisterbetrieb
              </h2>
              <p className="font-body text-base md:text-lg text-white/85 leading-relaxed">
                {article.meisterempfehlung}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-beige py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-8">
            Häufig gestellte <span className="text-brand-orange">Fragen</span>
          </h2>
          <div className="space-y-3">
            {article.faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div
                  key={f.question}
                  className="bg-white rounded-2xl border border-black/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-none cursor-pointer"
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
                    <div className="px-5 pb-5">
                      <p className="font-body text-sm md:text-base text-brand-dark/70 leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
            Weiterlesen
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-8">
            Passende Ratgeber und Leistungen
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href={article.related.leistung.href}
              className="group flex flex-col justify-between rounded-2xl border border-brand-orange/25 bg-brand-orange/5 p-5 no-underline hover:border-brand-orange/50 transition-colors"
            >
              <div>
                <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-2 block">
                  Leistung
                </span>
                <div className="font-heading text-base font-bold text-brand-dark">
                  {article.related.leistung.label}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wide text-brand-orange">
                Ansehen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {article.related.otherRatgeber.map((r) => (
              <Link
                key={r.slug}
                href={`/ratgeber/${r.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-black/5 bg-brand-beige p-5 no-underline hover:border-brand-orange/30 transition-colors"
              >
                <div>
                  <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-2 block">
                    Ratgeber
                  </span>
                  <div className="font-heading text-base font-bold text-brand-dark leading-snug">
                    {r.label}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wide text-brand-orange">
                  Weiterlesen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-sm text-brand-dark/60">
            <Link href="/foerderung" className="text-brand-orange hover:underline">
              Passende Förderung zu diesem Thema →
            </Link>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="bg-brand-beige pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <CTABanner
            title="Kostenlose Erstberatung — wir schauen uns Ihr Dach an"
            subtitle={`Rufen Sie an: ${company.phone.display}. Oder schreiben Sie uns — wir melden uns innerhalb von 24 Stunden.`}
            buttonText="Beratung anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}

function ContentBlock({ block }: { block: RatgeberBlock }) {
  if (block.kind === "paragraph") {
    return (
      <motion.p
        variants={fadeUp}
        className="font-body text-base md:text-[17px] text-brand-dark/80 leading-[1.75] mb-6"
      >
        {block.body}
      </motion.p>
    )
  }

  if (block.kind === "heading") {
    const Tag = block.level === 2 ? "h2" : "h3"
    return (
      <motion.div variants={fadeUp}>
        <Tag
          className={cn(
            "font-display font-black text-brand-dark mt-12 mb-4",
            block.level === 2 && "text-2xl md:text-3xl",
            block.level === 3 && "text-xl md:text-2xl",
          )}
        >
          {block.text}
        </Tag>
      </motion.div>
    )
  }

  if (block.kind === "list") {
    const ListTag = block.ordered ? "ol" : "ul"
    return (
      <motion.div variants={fadeUp}>
        <ListTag
          className={cn(
            "mb-6 space-y-2.5 pl-0 list-none",
            block.ordered && "counter-reset",
          )}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="font-body text-base md:text-[17px] text-brand-dark/80 leading-relaxed flex gap-3"
            >
              <span
                className={cn(
                  "flex-shrink-0 font-heading text-xs font-bold mt-[2px]",
                  block.ordered
                    ? "w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center"
                    : "w-1.5 h-1.5 rounded-full bg-brand-orange mt-[11px]",
                )}
              >
                {block.ordered ? i + 1 : ""}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ListTag>
      </motion.div>
    )
  }

  if (block.kind === "table") {
    // Column 0 is the criterion label, columns 1+ are the compared options.
    const criterionLabel = block.columns[0]
    const optionLabels = block.columns.slice(1)

    return (
      <motion.div variants={fadeUp} className="mb-8">
        {/* Mobile: stacked cards per row, no horizontal scroll. */}
        <div className="md:hidden space-y-3">
          {block.rows.map((row, ri) => {
            const criterion = row[0]
            const values = row.slice(1)
            return (
              <div
                key={ri}
                className="rounded-2xl bg-brand-beige border border-brand-dark/5 overflow-hidden"
              >
                <div className="px-4 py-2.5 bg-brand-dark/5 font-heading text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                  {criterion}
                </div>
                <div className="divide-y divide-brand-dark/5">
                  {values.map((val, vi) => (
                    <div key={vi} className="flex items-start gap-3 px-4 py-3">
                      <div className="w-[42%] flex-shrink-0 font-heading text-xs font-semibold text-brand-dark/60 leading-snug">
                        {optionLabels[vi]}
                      </div>
                      <div className="flex-1 font-body text-sm text-brand-dark leading-snug">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop / tablet: classical table. */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl overflow-hidden bg-brand-beige">
            <thead>
              <tr>
                {block.columns.map((c, i) => (
                  <th
                    key={i}
                    className={cn(
                      "font-heading text-xs font-bold uppercase tracking-wider text-brand-orange text-left p-4 bg-brand-dark/5",
                      i === 0 && "rounded-tl-2xl",
                      i === block.columns.length - 1 && "rounded-tr-2xl",
                    )}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 1 ? "bg-white/40" : "bg-transparent"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "p-4 font-body text-[15px] text-brand-dark/85 leading-snug align-top border-t border-brand-dark/5",
                        ci === 0 && "font-heading font-semibold text-brand-dark",
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {block.caption && (
          <p className="text-xs text-brand-dark/50 mt-2 italic">{block.caption}</p>
        )}
      </motion.div>
    )
  }

  if (block.kind === "callout") {
    const Icon = block.variant === "warning" ? AlertTriangle : Info
    return (
      <motion.div
        variants={fadeUp}
        className={cn(
          "flex items-start gap-3 p-5 rounded-2xl my-8 border",
          block.variant === "warning"
            ? "bg-red-50 border-red-200 text-red-900"
            : "bg-brand-orange/5 border-brand-orange/20 text-brand-dark/85",
        )}
      >
        <Icon
          className={cn(
            "w-5 h-5 flex-shrink-0 mt-0.5",
            block.variant === "warning" ? "text-red-600" : "text-brand-orange",
          )}
        />
        <p className="font-body text-sm md:text-base leading-relaxed">
          {block.body}
        </p>
      </motion.div>
    )
  }

  if (block.kind === "cta") {
    return (
      <motion.div
        variants={fadeUp}
        className={cn(
          "my-8 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between",
          block.variant === "strong"
            ? "bg-brand-orange text-white"
            : "bg-brand-beige border border-brand-orange/20",
        )}
      >
        <div>
          <div
            className={cn(
              "font-heading font-bold",
              block.variant === "strong" ? "text-white" : "text-brand-dark",
            )}
          >
            Kostenlose Erstberatung vor Ort
          </div>
          <div
            className={cn(
              "font-body text-sm",
              block.variant === "strong" ? "text-white/85" : "text-brand-dark/60",
            )}
          >
            Wir schauen uns Ihr Dach an und beraten ehrlich — ohne Verkaufsdruck.
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Link
            href="/kontakt"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-3 rounded-full font-heading text-sm font-bold no-underline transition-colors",
              block.variant === "strong"
                ? "bg-white text-brand-orange hover:bg-brand-beige"
                : "bg-brand-orange text-white hover:bg-brand-orange-dark",
            )}
          >
            Anfragen
          </Link>
          <a
            href={company.phone.href}
            className={cn(
              "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-heading text-sm font-bold no-underline transition-colors",
              block.variant === "strong"
                ? "bg-white/15 text-white border border-white/30 hover:bg-white/25"
                : "bg-brand-dark text-white hover:bg-brand-dark/90",
            )}
          >
            <Phone className="w-4 h-4" />
            Anrufen
          </a>
        </div>
      </motion.div>
    )
  }

  return null
}

// Side-effect: warn dev about orphan slugs (no-op in prod)
export const ratgeberSlugHint = ratgeberList.map((r) => r.slug)
