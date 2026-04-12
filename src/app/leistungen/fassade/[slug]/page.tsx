"use client"

import { motion } from "framer-motion"
import { useParams, notFound } from "next/navigation"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import {
  getFassadeTopicBySlug,
  fassadeTopics,
} from "@/lib/fassade-topics"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function FassadeTopicPage() {
  const params = useParams()
  const slug = params?.slug as string
  const topic = getFassadeTopicBySlug(slug)

  if (!topic) notFound()

  const otherTopics = fassadeTopics.filter((t) => t.slug !== topic.slug)

  return (
    <>
      <PageHero
        title={topic.title}
        subtitle={topic.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fassade", href: "/leistungen/fassade" },
          { label: topic.shortTitle, href: `/leistungen/fassade/${topic.slug}` },
        ]}
      />

      <section className="bg-brand-beige py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Im Detail
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-6">
              Was das für Sie{" "}
              <span className="text-brand-orange">bedeutet</span>
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark/70 leading-relaxed">
              {topic.longDescription}
            </p>
          </motion.div>

          <motion.ul
            className="mt-10 grid sm:grid-cols-2 gap-3 list-none p-0"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topic.highlights.map((h) => (
              <motion.li
                key={h}
                variants={fadeUp}
                className="flex items-center gap-3 font-body text-sm text-brand-dark"
              >
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                {h}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Leistungsumfang
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Unsere <span className="text-brand-orange">Schwerpunkte</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {topic.features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-brand-beige rounded-2xl p-7"
              >
                <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-beige py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Weitere Fassadenlösungen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              Rund um die <span className="text-brand-orange">Fassade</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {otherTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/leistungen/fassade/${t.slug}`}
                className="group block bg-white rounded-2xl p-6 no-underline border border-black/5 hover:border-brand-orange/40 transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                  {t.title}
                </h3>
                <p className="font-body text-sm text-brand-dark/55 leading-relaxed mb-4">
                  {t.description}
                </p>
                <div className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wide text-brand-orange">
                  Mehr erfahren
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Bereit für Ihre neue Fassade?"
            subtitle="Kostenlose Beratung vor Ort — wir schauen uns an, was sinnvoll ist, und empfehlen nur das."
            buttonText="Beratung anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
