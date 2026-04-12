"use client"

import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import Leistungen from "@/components/sections/Leistungen"
import Solar from "@/components/sections/Solar"
import UeberUns from "@/components/sections/UeberUns"
import Referenzen from "@/components/sections/Referenzen"
import StatsBanner from "@/components/sections/StatsBanner"
import FAQ from "@/components/sections/FAQ"
import Kontakt from "@/components/sections/Kontakt"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Leistungen />
      <Solar />
      <UeberUns />
      <Referenzen />
      <StatsBanner />
      <FAQ />
      <Kontakt />
      <Footer />
    </>
  )
}
