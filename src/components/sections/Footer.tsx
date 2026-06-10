"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const leistungenLinks = [
  { label: "Dach", href: "/leistungen" },
  { label: "Fassade", href: "/leistungen/fassade" },
  { label: "Solar & Energiesysteme", href: "/solar" },
  { label: "Dachfenster (VELUX)", href: "/leistungen/dachfenster" },
  { label: "Dachservice", href: "/leistungen/dachservice" },
]

const unternehmenLinks = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Förderung", href: "/foerderung" },
  { label: "Kontakt", href: "/kontakt" },
]

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ruppiner+Chaussee+221%2C+13503+Berlin"

export default function Footer() {
  return (
    <footer className="bg-[#111] pt-12 md:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="block mb-4 no-underline"
            >
              <Image
                src="/logo-st-masch-white.png"
                alt="St. Masch — Dach, Fassade, Solar"
                width={620}
                height={156}
                className="h-12 w-auto"
              />
            </Link>
            <p className="font-body text-sm text-gray-300 font-light leading-relaxed">
              Zertifizierter Meisterbetrieb für Dach, Fassade, Solar in Berlin
              und Brandenburg — seit über 20 Jahren.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 md:mb-5">
              Leistungen
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 list-none p-0 m-0">
              {leistungenLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-300 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-300 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
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
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-start font-body text-sm text-gray-300 no-underline hover:text-brand-orange transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Ruppiner Chaussee 221, 13503 Berlin</span>
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href="tel:+493084417068"
                  className="font-body text-sm text-gray-300 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
                >
                  030 - 844 17 068
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:kontakt@die-dachdecker.berlin"
                  className="font-body text-sm text-gray-300 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center break-all"
                >
                  kontakt@die-dachdecker.berlin
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} St. Masch Dach & Fassade. Alle
            Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="font-body text-xs text-gray-400 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-body text-xs text-gray-400 no-underline hover:text-brand-orange transition-colors min-h-[44px] inline-flex items-center"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
