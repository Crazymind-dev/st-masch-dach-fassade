"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Phone } from "lucide-react"

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/solar", label: "Solar" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-300 backdrop-blur-xl border-b border-black/5 ${
        scrolled ? "py-3 shadow-md bg-brand-beige/95" : "py-5 bg-brand-beige/90"
      }`}
    >
      <Link href="/" className="font-heading font-extrabold text-xl text-brand-dark no-underline flex items-center gap-2">
        ST. MASCH <span className="text-brand-orange">|</span> Dach & Fassade
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`no-underline font-heading text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href ? "text-brand-orange" : "text-gray-600 hover:text-brand-orange"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="tel:+493084417068"
        className="flex items-center gap-2 text-brand-dark no-underline font-heading font-bold text-[15px] hover:text-brand-orange transition-colors"
      >
        <Phone className="w-[18px] h-[18px] text-brand-orange" />
        030 - 844 17 068
      </a>
    </nav>
  )
}
