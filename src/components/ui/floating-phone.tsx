"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function FloatingPhone() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href="tel:+493084417068"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-0 no-underline group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label="Anrufen: 030 - 844 17 068"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay: 1, stiffness: 200 }}
    >
      {/* Expandable text label - hidden on mobile to save space */}
      <motion.div
        className="overflow-hidden items-center hidden md:flex"
        initial={false}
        animate={{
          width: hovered ? "auto" : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="whitespace-nowrap bg-brand-dark text-white font-heading text-sm font-semibold px-4 py-3 rounded-l-full border border-r-0 border-white/15 shadow-lg">
          030 - 844 17 068
        </span>
      </motion.div>

      {/* Phone button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-20" />

        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-[0_4px_24px_rgba(255,91,1,0.4)] group-hover:bg-brand-orange-dark transition-colors">
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </motion.a>
  )
}
