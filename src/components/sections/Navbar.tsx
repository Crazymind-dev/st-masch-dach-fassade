"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/solar", label: "Solar" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 transition-all duration-300 backdrop-blur-xl border-b border-black/5 ${
          scrolled ? "py-3 shadow-md bg-brand-beige/95" : "py-4 md:py-5 bg-brand-beige/90"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-extrabold text-lg sm:text-xl text-brand-dark no-underline flex items-center gap-2 min-h-[44px]"
        >
          ST. MASCH <span className="text-brand-orange">|</span> Dach, Fassade & Solar
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`no-underline font-heading text-sm font-medium tracking-wide transition-colors min-h-[44px] flex items-center ${
                  pathname === link.href ? "text-brand-orange" : "text-gray-600 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Phone */}
        <a
          href="tel:+493084417068"
          className="hidden md:flex items-center gap-2 text-brand-dark no-underline font-heading font-bold text-[15px] hover:text-brand-orange transition-colors min-h-[44px]"
        >
          <Phone className="w-[18px] h-[18px] text-brand-orange" />
          030 - 844 17 068
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-transparent border-none cursor-pointer text-brand-dark relative z-[60]"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel from right */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[56] w-[min(320px,85vw)] bg-brand-dark shadow-2xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header area with close spacing */}
              <div className="h-20 flex items-center justify-end px-4">
                {/* Close button handled by the navbar button behind the overlay */}
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-4">
                <ul className="list-none p-0 m-0 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3 px-4 rounded-xl font-heading text-lg font-semibold no-underline transition-colors min-h-[44px] flex items-center ${
                          pathname === link.href
                            ? "text-brand-orange bg-white/5"
                            : "text-white hover:text-brand-orange hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Phone CTA at bottom */}
              <motion.div
                className="px-6 pb-8 pt-4 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a
                  href="tel:+493084417068"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-brand-orange text-white rounded-full font-heading text-base font-bold no-underline shadow-[0_4px_24px_rgba(255,91,1,0.3)] hover:bg-brand-orange-dark transition-colors min-h-[48px]"
                >
                  <Phone className="w-5 h-5" />
                  030 - 844 17 068
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
