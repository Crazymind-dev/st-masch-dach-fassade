"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface PageHeroProps {
  title: string
  highlight?: string
  subtitle: string
  breadcrumbs: { label: string; href: string }[]
  image?: string
}

export default function PageHero({ title, highlight, subtitle, breadcrumbs, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/50" />
        </div>
      )}

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange-dark to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        {/* Breadcrumbs */}
        <motion.nav
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
              {i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="font-body text-sm text-white/50 no-underline hover:text-brand-orange transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-body text-sm text-brand-orange">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title} {highlight && <span className="text-brand-orange">{highlight}</span>}
        </motion.h1>

        <motion.p
          className="font-body text-lg font-light text-white/60 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
