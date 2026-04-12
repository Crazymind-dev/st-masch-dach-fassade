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
import ParallaxBand from "@/components/ui/parallax-band"

export default function Home() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Solar />
      <UeberUns />
      <ParallaxBand
        eyebrow="Meisterbetrieb seit über 15 Jahren"
        headline="Dach. Fassade. Solar."
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Solaranlage auf Hausdach"
      />
      <Referenzen />
      <StatsBanner />
      <Testimonials />
      <FAQ />
      <Kontakt />
    </>
  )
}
