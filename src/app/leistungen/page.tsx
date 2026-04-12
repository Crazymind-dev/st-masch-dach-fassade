"use client"

import { motion } from "framer-motion"
import { ArrowRight, Home, Layers, Leaf, Building2, CircleDot, Wrench } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/ui/PageHero"
import CTABanner from "@/components/ui/CTABanner"
import { services } from "@/lib/services"
import {
  AnimatedCard,
  CardBody,
  CardTitle,
  CardDescription,
} from "@/components/ui/animated-card"

const iconMap: Record<string, React.ReactNode> = {
  steildach: <Home className="w-6 h-6" />,
  flachdach: <Layers className="w-6 h-6" />,
  gruendach: <Leaf className="w-6 h-6" />,
  fassade: <Building2 className="w-6 h-6" />,
  metalldach: <CircleDot className="w-6 h-6" />,
  dachservice: <Wrench className="w-6 h-6" />,
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/leistungen/${service.slug}`} className="block no-underline">
                  <AnimatedCard className="h-full hover:-translate-y-2 transition-transform duration-300">
                    <CardBody className="p-7">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-orange/[0.08] flex items-center justify-center text-brand-orange group-hover/animated-card:bg-brand-orange group-hover/animated-card:text-white transition-all duration-300 flex-shrink-0">
                          {iconMap[service.slug] || <Home className="w-6 h-6" />}
                        </div>
                        <CardTitle className="group-hover/animated-card:text-brand-orange transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>

                      <CardDescription className="mb-5">
                        {service.description}
                      </CardDescription>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 font-heading text-[10px] font-semibold rounded-lg uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-brand-orange font-heading text-xs font-bold uppercase tracking-wide opacity-0 group-hover/animated-card:opacity-100 translate-y-2 group-hover/animated-card:translate-y-0 transition-all duration-300">
                        Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </CardBody>
                  </AnimatedCard>
                </Link>
              </motion.div>
            ))}
          </div>
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
