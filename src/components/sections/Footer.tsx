"use client"

import { Phone, Mail, MapPin } from "lucide-react"

const leistungen = ["Steildach", "Flachdach", "Gründach", "Fassade", "Photovoltaik"]
const unternehmen = ["Über uns", "Referenzen", "Karriere", "Partner"]

export default function Footer() {
  return (
    <footer className="bg-[#111] px-8 md:px-20 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-heading font-extrabold text-xl text-white no-underline flex items-center gap-2 mb-4">
              ST. MASCH <span className="text-brand-orange">|</span> Dach & Fassade
            </a>
            <p className="font-body text-sm font-light text-white/40 leading-relaxed max-w-[320px]">
              Ihr Dachdecker-Meisterbetrieb in Berlin. Von der Dachsanierung bis zur Photovoltaikanlage — Qualität, Zuverlässigkeit und nachhaltige Lösungen.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h5 className="font-heading text-sm font-bold text-white uppercase tracking-[2px] mb-5">Leistungen</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {leistungen.map((l) => (
                <li key={l}>
                  <a href="#leistungen" className="font-body text-sm text-white/40 no-underline hover:text-brand-orange transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h5 className="font-heading text-sm font-bold text-white uppercase tracking-[2px] mb-5">Unternehmen</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {unternehmen.map((u) => (
                <li key={u}>
                  <a href="#" className="font-body text-sm text-white/40 no-underline hover:text-brand-orange transition-colors">{u}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h5 className="font-heading text-sm font-bold text-white uppercase tracking-[2px] mb-5">Kontakt</h5>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:+493084417068" className="font-body text-sm text-white/40 no-underline hover:text-brand-orange transition-colors">030 - 844 17 068</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="mailto:kontakt@die-dachdecker.berlin" className="font-body text-sm text-white/40 no-underline hover:text-brand-orange transition-colors">kontakt@die-dachdecker.berlin</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/40">Ruppiner Chaussee 221<br />13503 Berlin</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[13px] text-white/30">&copy; 2026 St. Masch Dach & Fassade. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-[13px] text-white/30 no-underline hover:text-brand-orange transition-colors">Impressum</a>
            <a href="#" className="font-body text-[13px] text-white/30 no-underline hover:text-brand-orange transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
