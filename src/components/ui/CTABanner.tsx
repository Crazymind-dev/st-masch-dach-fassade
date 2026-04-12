"use client"

import { motion } from "framer-motion"
import { GlowButton } from "@/components/ui/glow-button"

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
      className="bg-brand-dark rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center md:text-left">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="font-body text-sm sm:text-base text-white/60">{subtitle}</p>
      </div>
      <GlowButton href={href} variant="primary" size="md">
        {buttonText}
      </GlowButton>
    </motion.div>
  )
}
