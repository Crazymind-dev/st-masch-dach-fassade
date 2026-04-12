"use client"

import Hero from "@/components/sections/Hero"
import Leistungen from "@/components/sections/Leistungen"
import Solar from "@/components/sections/Solar"
import UeberUns from "@/components/sections/UeberUns"
import Referenzen from "@/components/sections/Referenzen"
import StatsBanner from "@/components/sections/StatsBanner"
import { Testimonials } from "@/components/ui/testimonials"
import FAQ from "@/components/sections/FAQ"
import Kontakt from "@/components/sections/Kontakt"

export default function Home() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Solar />
      <UeberUns />
      <Referenzen />
      <StatsBanner />
      <Testimonials />
      <FAQ />
      <Kontakt />
    </>
  )
}
