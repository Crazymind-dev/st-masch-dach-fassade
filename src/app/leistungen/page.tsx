"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import { services } from "@/lib/services"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        title="Unsere"
        highlight="Leistungen"
        subtitle="Vom Steildach bis zur Dachbegrünung — entdecken Sie unser komplettes Leistungsspektrum aus Meisterhand."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
        ]}
      />

      {/* Services Grid */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Kompetenz auf ganzer Linie
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark">
              6 Leistungsbereiche. <span className="text-brand-orange">Ein Ansprechpartner.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 no-underline"
                >
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-display text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="font-body text-sm text-brand-dark/70 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wide rounded-full bg-brand-orange/10 text-brand-orange-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <span className="inline-flex items-center gap-2 font-heading text-sm font-bold text-brand-orange group-hover:gap-3 transition-all">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-beige pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <CTABanner
            title="Ihr Dachprojekt beginnt hier"
            subtitle="Lassen Sie sich kostenlos und unverbindlich beraten — wir freuen uns auf Ihre Anfrage."
            buttonText="Jetzt anfragen"
            href="/kontakt"
          />
        </div>
      </section>
    </>
  )
}
