import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Dachdecker Angebot anfragen — Kostenlose Beratung Berlin",
  description:
    "Kostenlose Beratung und unverbindliches Angebot für Dach, Fassade oder Solar in Berlin und Brandenburg. Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: `${site.baseUrl}/kontakt` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
