"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accessibility, X, Plus, Minus, Eye, Zap, Link2 } from "lucide-react"

type FontSize = "normal" | "large" | "xlarge"

const FONT_LABELS: Record<FontSize, string> = {
  normal: "Normal",
  large: "Groß",
  xlarge: "Sehr groß",
}

const FONT_CLASSES: Record<FontSize, string> = {
  normal: "",
  large: "font-large",
  xlarge: "font-xlarge",
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState<FontSize>("normal")
  const [highContrast, setHighContrast] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [highlightLinks, setHighlightLinks] = useState(false)

  const applyClasses = useCallback(() => {
    const html = document.documentElement

    // Font size
    html.classList.remove("font-large", "font-xlarge")
    const cls = FONT_CLASSES[fontSize]
    if (cls) html.classList.add(cls)

    // High contrast
    html.classList.toggle("high-contrast", highContrast)

    // Reduce motion
    html.classList.toggle("reduce-motion", reduceMotion)

    // Highlight links
    html.classList.toggle("highlight-links", highlightLinks)
  }, [fontSize, highContrast, reduceMotion, highlightLinks])

  useEffect(() => {
    applyClasses()
  }, [applyClasses])

  // Load saved preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem("a11y-prefs")
      if (saved) {
        const prefs = JSON.parse(saved)
        if (prefs.fontSize) setFontSize(prefs.fontSize)
        if (prefs.highContrast) setHighContrast(prefs.highContrast)
        if (prefs.reduceMotion) setReduceMotion(prefs.reduceMotion)
        if (prefs.highlightLinks) setHighlightLinks(prefs.highlightLinks)
      }
    } catch {}
  }, [])

  // Save preferences
  useEffect(() => {
    try {
      localStorage.setItem(
        "a11y-prefs",
        JSON.stringify({ fontSize, highContrast, reduceMotion, highlightLinks })
      )
    } catch {}
  }, [fontSize, highContrast, reduceMotion, highlightLinks])

  const cycleFontSize = (dir: "up" | "down") => {
    const sizes: FontSize[] = ["normal", "large", "xlarge"]
    const idx = sizes.indexOf(fontSize)
    if (dir === "up" && idx < sizes.length - 1) setFontSize(sizes[idx + 1])
    if (dir === "down" && idx > 0) setFontSize(sizes[idx - 1])
  }

  return (
    <>
      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 left-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-dark border border-white/20 text-white flex items-center justify-center shadow-lg hover:bg-brand-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Barrierefreiheit-Einstellungen öffnen"
        title="Barrierefreiheit"
      >
        <Accessibility className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed bottom-24 left-5 z-50 w-[320px] max-h-[80vh] overflow-y-auto rounded-2xl bg-brand-dark border border-white/15 shadow-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Accessibility className="w-5 h-5 text-brand-orange" />
                  <h3 className="font-heading text-base font-bold text-white">
                    Barrierefreiheit
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-5">
                {/* Font size */}
                <div>
                  <label className="font-heading text-xs font-semibold text-white/70 uppercase tracking-wider mb-3 block">
                    Schriftgröße
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => cycleFontSize("down")}
                      disabled={fontSize === "normal"}
                      className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Schrift verkleinern"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex-1 text-center">
                      <span className="font-heading text-sm font-semibold text-white">
                        {FONT_LABELS[fontSize]}
                      </span>
                    </div>
                    <button
                      onClick={() => cycleFontSize("up")}
                      disabled={fontSize === "xlarge"}
                      className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Schrift vergrößern"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* High contrast */}
                <ToggleRow
                  icon={<Eye className="w-4 h-4" />}
                  label="Hoher Kontrast"
                  active={highContrast}
                  onToggle={() => setHighContrast(!highContrast)}
                />

                {/* Reduce motion */}
                <ToggleRow
                  icon={<Zap className="w-4 h-4" />}
                  label="Animationen reduzieren"
                  active={reduceMotion}
                  onToggle={() => setReduceMotion(!reduceMotion)}
                />

                {/* Highlight links */}
                <ToggleRow
                  icon={<Link2 className="w-4 h-4" />}
                  label="Links hervorheben"
                  active={highlightLinks}
                  onToggle={() => setHighlightLinks(!highlightLinks)}
                />

                {/* BFSG note */}
                <p className="font-body text-[11px] text-white/40 leading-relaxed pt-2 border-t border-white/10">
                  Gemäß BFSG (Barrierefreiheitsstärkungsgesetz) bieten wir diese
                  Einstellungen zur Verbesserung der Zugänglichkeit an.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function ToggleRow({
  icon,
  label,
  active,
  onToggle,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] hover:bg-white/10 transition-colors group"
      role="switch"
      aria-checked={active}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
          active
            ? "bg-brand-orange text-white"
            : "bg-white/10 text-white/60 group-hover:text-white"
        }`}
      >
        {icon}
      </div>
      <span className="font-heading text-sm font-medium text-white flex-1 text-left">
        {label}
      </span>
      <div
        className={`w-11 h-6 rounded-full relative transition-colors ${
          active ? "bg-brand-orange" : "bg-white/20"
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
            active ? "translate-x-[22px]" : "translate-x-1"
          }`}
        />
      </div>
    </button>
  )
}
