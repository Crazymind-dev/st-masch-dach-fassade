"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Home,
  Layers,
  Leaf,
  Building2,
  Shield,
  Wrench,
  LayoutGrid,
  Sun,
  BatteryCharging,
  Activity,
  HousePlug,
  Thermometer,
  PanelsTopLeft,
  Paintbrush,
  Banknote,
  Sparkles,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type SimpleLink = {
  kind: "link"
  href: string
  label: string
  highlight?: boolean
}

type DropdownItem = {
  href: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

type DropdownLink = {
  kind: "dropdown"
  label: string
  items: DropdownItem[]
  highlight?: boolean
}

type NavEntry = SimpleLink | DropdownLink

const navEntries: NavEntry[] = [
  {
    kind: "dropdown",
    label: "Dach",
    items: [
      { href: "/leistungen/steildach", label: "Steildach", description: "Neueindeckung, Sanierung und Reparatur.", icon: Home },
      { href: "/leistungen/flachdach", label: "Flachdach", description: "Abdichtung und Dämmung nach neuestem Stand.", icon: Layers },
      { href: "/leistungen/gruendach", label: "Gründach", description: "Extensive und intensive Begrünung.", icon: Leaf },
      { href: "/leistungen/metalldach", label: "Metalldach", description: "Zink, Kupfer und Titanzink in Meisterhand.", icon: Shield },
      { href: "/leistungen/dachfenster", label: "Dachfenster", description: "VELUX-Partner — Neueinbau und Austausch.", icon: PanelsTopLeft },
      { href: "/leistungen/dachservice", label: "Dachservice", description: "Inspektion, Wartung und Notfall-Reparatur.", icon: Wrench },
      { href: "/leistungen", label: "Alle Dacharbeiten", description: "Übersicht aller Dach-Leistungen im Detail.", icon: LayoutGrid },
    ],
  },
  {
    kind: "dropdown",
    label: "Solar",
    items: [
      { href: "/solar/pv-anlagen", label: "PV-Anlagen", description: "Maßgeschneiderte Photovoltaik für Ihr Dach.", icon: Sun },
      { href: "/solar/stromspeicher", label: "Stromspeicher", description: "Enphase IQ — Eigenverbrauch maximieren.", icon: BatteryCharging },
      { href: "/solar/monitoring", label: "Monitoring & Wartung", description: "Echtzeit-Überwachung via Enphase App.", icon: Activity },
      { href: "/solar/home-energy", label: "Home Energy", description: "Wallbox, Wärmepumpe und Speicher zentral.", icon: HousePlug },
    ],
  },
  {
    kind: "dropdown",
    label: "Fassade",
    items: [
      { href: "/leistungen/fassade/wdvs", label: "WDVS-Dämmung", description: "Wärmedämmverbundsysteme für bessere Energiebilanz.", icon: Thermometer },
      { href: "/leistungen/fassade/vhf", label: "Vorgehängte Fassade", description: "VHF-Systeme mit Hinterlüftung und Dämmung.", icon: PanelsTopLeft },
      { href: "/leistungen/fassade/klinker", label: "Klinker & Naturstein", description: "Hochwertige Verkleidungen mit Charakter.", icon: Building2 },
      { href: "/leistungen/fassade/sanierung", label: "Fassadensanierung", description: "Reinigung, Putz und Neuanstrich vom Profi.", icon: Paintbrush },
    ],
  },
  {
    kind: "dropdown",
    label: "Förderung",
    highlight: true,
    items: [
      { href: "/foerderung", label: "Förderübersicht", description: "Alle Zuschüsse, Kredite & Steuervorteile im Überblick.", icon: Banknote },
      { href: "/foerderung/foerderservice-plus", label: "FörderService PLUS", description: "Komplette Abwicklung Ihrer Dachsanierungs-Förderung — aus einer Hand.", icon: Sparkles },
    ],
  },
  { kind: "link", href: "/ratgeber", label: "Ratgeber" },
  { kind: "link", href: "/ueber-uns", label: "Über uns" },
  { kind: "link", href: "/referenzen", label: "Referenzen" },
  { kind: "link", href: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null)
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [])

  const isActive = (href: string) => pathname === href
  const isDropdownActive = (items: DropdownItem[]) =>
    items.some((i) => pathname === i.href)

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-black/5 ${
          scrolled ? "py-2 shadow-md bg-brand-beige/95" : "py-3 bg-brand-beige/90"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 md:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="no-underline flex flex-col leading-none min-h-[44px] justify-center flex-shrink-0"
          >
            <span className="font-heading font-extrabold text-base sm:text-xl text-brand-dark">
              ST. MASCH
            </span>
            <span className="font-heading text-[9px] sm:text-[10px] font-bold uppercase tracking-[2px] sm:tracking-[3px] text-brand-orange mt-0.5 sm:mt-1">
              Dach · Fassade · Solar
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {navEntries.map((entry) => {
              if (entry.kind === "link") {
                return (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className={cn(
                        "no-underline font-heading text-sm font-medium tracking-wide transition-colors min-h-[44px] flex items-center gap-2 px-3 rounded-md",
                        isActive(entry.href)
                          ? "text-brand-orange"
                          : entry.highlight
                            ? "text-brand-orange hover:bg-brand-orange/10"
                            : "text-gray-700 hover:text-brand-orange hover:bg-black/[0.03]"
                      )}
                    >
                      {entry.label}
                      {entry.highlight && !isActive(entry.href) && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 rounded-full leading-none">
                          Neu
                        </span>
                      )}
                    </Link>
                  </li>
                )
              }

              const active = isDropdownActive(entry.items)
              const open = openMenu === entry.label

              return (
                <li
                  key={entry.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose()
                    setOpenMenu(entry.label)
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    onClick={() => setOpenMenu(open ? null : entry.label)}
                    aria-expanded={open}
                    className={cn(
                      "no-underline font-heading text-sm font-medium tracking-wide transition-colors min-h-[44px] flex items-center gap-1.5 px-3 rounded-md bg-transparent border-none cursor-pointer",
                      active || open
                        ? "text-brand-orange"
                        : entry.highlight
                          ? "text-brand-orange hover:bg-brand-orange/10"
                          : "text-gray-700 hover:text-brand-orange hover:bg-black/[0.03]"
                    )}
                  >
                    {entry.label}
                    {entry.highlight && !active && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 rounded-full leading-none">
                        Neu
                      </span>
                    )}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        open && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-max max-w-[min(520px,calc(100vw-2rem))]"
                      >
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] border border-black/5 p-2 grid grid-cols-2 gap-1">
                          {entry.items.map((item) => {
                            const Icon = item.icon
                            const itemActive = pathname === item.href
                            return (
                              <Link
                                key={item.label + item.href}
                                href={item.href}
                                onClick={() => setOpenMenu(null)}
                                className={cn(
                                  "no-underline flex gap-3 p-3 rounded-xl transition-colors group",
                                  itemActive
                                    ? "bg-brand-orange/10"
                                    : "hover:bg-brand-beige"
                                )}
                              >
                                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                                  <Icon className="w-5 h-5 text-brand-orange" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-heading text-sm font-bold text-brand-dark mb-0.5">
                                    {item.label}
                                  </div>
                                  <div className="font-body text-xs text-gray-500 leading-snug line-clamp-2">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <a
              href="mailto:kontakt@die-dachdecker.berlin"
              className="flex items-center gap-2 text-brand-dark no-underline font-heading font-bold text-[14px] hover:text-brand-orange transition-colors min-h-[44px]"
            >
              <Mail className="w-[18px] h-[18px] text-brand-orange" />
              <span className="hidden xl:inline">kontakt@die-dachdecker.berlin</span>
            </a>
            <a
              href="tel:+493084417068"
              className="flex items-center gap-2 text-brand-dark no-underline font-heading font-bold text-[14px] hover:text-brand-orange transition-colors min-h-[44px]"
            >
              <Phone className="w-[18px] h-[18px] text-brand-orange" />
              <span className="hidden xl:inline">030 - 844 17 068</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-transparent border-none cursor-pointer text-brand-dark relative z-[60]"
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
        </div>
      </nav>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[56] w-[min(360px,88vw)] bg-brand-dark shadow-2xl lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="h-16 flex items-center px-6 border-b border-white/10">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-white/50">
                  Menü
                </span>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="list-none p-0 m-0 space-y-1">
                  {navEntries.map((entry, i) => {
                    if (entry.kind === "link") {
                      return (
                        <motion.li
                          key={entry.href}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                        >
                          <Link
                            href={entry.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block py-3 px-4 rounded-xl font-heading text-base font-semibold no-underline transition-colors min-h-[44px] flex items-center gap-2",
                              isActive(entry.href)
                                ? "text-brand-orange bg-white/5"
                                : entry.highlight
                                  ? "text-brand-orange bg-brand-orange/10"
                                  : "text-white hover:text-brand-orange hover:bg-white/5"
                            )}
                          >
                            {entry.label}
                            {entry.highlight && !isActive(entry.href) && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 rounded-full leading-none">
                                Neu
                              </span>
                            )}
                          </Link>
                        </motion.li>
                      )
                    }

                    const subOpen = mobileSubOpen === entry.label
                    const dropActive = isDropdownActive(entry.items)

                    return (
                      <motion.li
                        key={entry.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                      >
                        <button
                          onClick={() =>
                            setMobileSubOpen(subOpen ? null : entry.label)
                          }
                          className={cn(
                            "w-full py-3 px-4 rounded-xl font-heading text-base font-semibold transition-colors min-h-[44px] flex items-center justify-between bg-transparent border-none cursor-pointer text-left",
                            dropActive
                              ? "text-brand-orange bg-white/5"
                              : entry.highlight
                                ? "text-brand-orange bg-brand-orange/10"
                                : "text-white hover:text-brand-orange hover:bg-white/5"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            {entry.label}
                            {entry.highlight && !dropActive && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 rounded-full leading-none">
                                Neu
                              </span>
                            )}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              subOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {subOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="list-none overflow-hidden pl-3"
                            >
                              {entry.items.map((item) => {
                                const Icon = item.icon
                                const itemActive = pathname === item.href
                                return (
                                  <li key={item.label + item.href}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={cn(
                                        "flex items-center gap-3 py-2.5 px-3 rounded-lg no-underline transition-colors min-h-[44px]",
                                        itemActive
                                          ? "text-brand-orange bg-white/5"
                                          : "text-white/70 hover:text-brand-orange hover:bg-white/5"
                                      )}
                                    >
                                      <Icon className="w-4 h-4 text-brand-orange flex-shrink-0" />
                                      <span className="font-heading text-sm font-medium">
                                        {item.label}
                                      </span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              <motion.div
                className="px-6 pb-8 pt-4 border-t border-white/10 space-y-3"
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
                <a
                  href="mailto:kontakt@die-dachdecker.berlin"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 text-white rounded-full font-heading text-base font-bold no-underline border border-white/10 hover:bg-white/10 transition-colors min-h-[48px]"
                >
                  <Mail className="w-5 h-5 text-brand-orange" />
                  kontakt@die-dachdecker.berlin
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
