"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const leistungenLinks = [
  { label: "Steildach", href: "#leistungen" },
  { label: "Flachdach", href: "#leistungen" },
  { label: "Gründach", href: "#leistungen" },
  { label: "Fassade & WDVS", href: "#leistungen" },
  { label: "Photovoltaik", href: "#solar" },
  { label: "Dachservice", href: "#leistungen" },
]

const unternehmenLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "FAQ", href: "#faq" },
  { label: "Karriere", href: "#" },
  { label: "Partner", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] pt-12 md:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="font-heading font-extrabold text-xl text-white no-underline flex items-center gap-2 mb-4"
            >
              ST. MASCH <span className="text-brand-orange">|</span> Dach,
              Fassade & Solar
            </a>
            <p className="font-body text-sm text-gray-500 font-light leading-relaxed mb-6">
              Ihr zertifizierter Meisterbetrieb für Dach, Fassade und
              Solarenergie in Berlin und Brandenburg. Qualität und
              Zuverlässigkeit seit über 15 Jahren.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all no-underline"
                  aria-label={social}
                >
                  <span className="font-heading text-xs font-bold uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 md:mb-5">
              Leistungen
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 list-none p-0 m-0">
              {leistungenLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-500 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 md:mb-5">
              Unternehmen
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 list-none p-0 m-0">
              {unternehmenLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-500 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 md:mb-5">
              Kontakt
            </h4>
            <ul className="space-y-3 sm:space-y-4 list-none p-0 m-0">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-500">
                  Ruppiner Chaussee 221, 13503 Berlin
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href="tel:+493084417068"
                  className="font-body text-sm text-gray-500 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                >
                  030 - 844 17 068
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:kontakt@die-dachdecker.berlin"
                  className="font-body text-sm text-gray-500 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center break-all"
                >
                  kontakt@die-dachdecker.berlin
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} St. Masch Dach & Fassade. Alle
            Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-xs text-gray-600 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-body text-xs text-gray-600 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
