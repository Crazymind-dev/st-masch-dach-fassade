import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Förderung Dachsanierung & Solar Berlin 2026 — BAFA, KfW, SolarPLUS",
  description:
    "Bis 40% Förderung für Dach, Dämmung und Solar in Berlin und Brandenburg. BAFA, KfW 261, SolarPLUS, GründachPLUS — wir beraten als Meisterbetrieb UND Energieberater.",
  alternates: { canonical: `${site.baseUrl}/foerderung` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
