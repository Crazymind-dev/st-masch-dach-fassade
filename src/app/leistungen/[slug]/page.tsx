"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import { getServiceBySlug, services } from "@/lib/services"
import { notFound } from "next/navigation"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.shortTitle, href: `/leistungen/${service.slug}` },
        ]}
        image={service.image}
      />

      {/* Long Description */}
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
              Was wir für Sie <span className="text-brand-orange">leisten</span>
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark/70 leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-brand-beige rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      {service.materials && service.materials.length > 0 && (
        <section className="bg-brand-beige py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
                Materialien
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-8">
                Wir arbeiten mit <span className="text-brand-orange">besten Materialien</span>
              </h2>

              <div className="flex flex-wrap gap-3">
                {service.materials.map((material) => (
                  <span
                    key={material}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm font-heading text-sm font-semibold text-brand-dark border border-brand-dark/5"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    {material}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Unser Ablauf
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              So läuft Ihr <span className="text-brand-orange">Projekt ab</span>
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-orange/20 hidden md:block" />

            <div className="space-y-8">
              {service.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="relative flex items-start gap-6"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/20">
                    <span className="font-heading text-sm font-bold text-white">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="bg-brand-beige rounded-2xl p-6 flex-1">
                    <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-brand-beige py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark">
              Weitere <span className="text-brand-orange">Leistungen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow no-underline"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-bold text-brand-dark truncate">
                      {s.shortTitle}
                    </h4>
                    <span className="font-body text-xs text-brand-dark/50 line-clamp-1">
                      {s.description}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-orange flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-beige pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title={`${service.title} — Jetzt beraten lassen`}
            subtitle="Fordern Sie ein unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden."
            buttonText="Kostenlos anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
