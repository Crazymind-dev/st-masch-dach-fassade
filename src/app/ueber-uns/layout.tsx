import type { Metadata } from "next"
import { site, company } from "@/lib/config"

export const metadata: Metadata = {
  title: `Über uns — Dachdeckermeister ${company.owner}`,
  description: `Inhabergeführter Dachdecker-Meisterbetrieb in Berlin. BAFA-Energieberater, Enphase Solar Partner, eigenes Team — seit ${company.yearsExperience}+ Jahren.`,
  alternates: { canonical: `${site.baseUrl}/ueber-uns` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
