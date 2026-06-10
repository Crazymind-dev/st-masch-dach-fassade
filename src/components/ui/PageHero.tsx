"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { GradientBackground } from "@/components/ui/paper-design-shader-background"

interface PageHeroProps {
  title: string
  highlight?: string
  subtitle?: string
  breadcrumbs: { label: string; href: string }[]
  /** kept for backwards compat — ignored; all PageHeros now share the shader background */
  image?: string
}

export default function PageHero({ title, highlight, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[440px] flex items-center overflow-hidden">
      {/* Full-width Shader Background (matches homepage Hero) */}
      <div className="absolute inset-0 z-0">
        <GradientBackground
          colors={["hsl(14, 100%, 50%)", "hsl(30, 100%, 48%)", "hsl(350, 80%, 45%)"]}
          colorBack="hsl(20, 10%, 6%)"
          softness={0.8}
          intensity={0.5}
          speed={0.5}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 z-[1]" />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 pt-28 md:py-28 w-full">
        {/* Breadcrumbs */}
        <motion.nav
          className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-wrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5 sm:gap-2">
              {i > 0 && <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/40" />}
              {i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="font-body text-xs sm:text-sm text-white/60 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-body text-xs sm:text-sm text-brand-orange min-h-[44px] inline-flex items-center">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title} {highlight && <span className="text-brand-orange">{highlight}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="font-body text-base sm:text-lg font-light text-white/75 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
