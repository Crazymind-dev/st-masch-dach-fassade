import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Dachdecker Leistungen Berlin — Dach, Fassade, Solar",
  description:
    "Alle Leistungen unseres Dachdecker-Meisterbetriebs in Berlin: Steildach, Flachdach, Gründach, Fassade, Metalldach, Dachfenster, Solar und Dachservice.",
  alternates: { canonical: `${site.baseUrl}/leistungen` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
