import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Dachdecker Referenzen Berlin — Projekte & Bilder",
  description:
    "Abgeschlossene Dach-, Fassaden- und Solarprojekte in Berlin und Brandenburg. Bilder, Details und Erfahrungsberichte aus der Praxis.",
  alternates: { canonical: `${site.baseUrl}/referenzen` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
