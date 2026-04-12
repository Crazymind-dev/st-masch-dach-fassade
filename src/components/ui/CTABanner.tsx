"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface CTABannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  href?: string
}

export default function CTABanner({
  title = "Bereit für Ihr nächstes Projekt?",
  subtitle = "Lassen Sie uns gemeinsam etwas Großartiges schaffen.",
  buttonText = "Jetzt anfragen",
  href = "/kontakt",
}: CTABannerProps) {
  return (
    <motion.div
      className="bg-brand-dark rounded-2xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="font-body text-base text-white/60">{subtitle}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-heading text-sm font-bold uppercase tracking-wider no-underline shadow-lg hover:bg-brand-orange-dark hover:-translate-y-0.5 transition-all flex-shrink-0"
      >
        {buttonText}
      </Link>
    </motion.div>
  )
}
