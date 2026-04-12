import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Photovoltaik Berlin — Solaranlage vom Dachdecker",
  description:
    "PV-Anlage in Berlin installieren — vom Dachdecker-Meisterbetrieb. Enphase Mikrowechselrichter, Indach-Photovoltaik, Speicher und Monitoring. Dach + Solar aus einer Hand.",
  alternates: { canonical: `${site.baseUrl}/solar` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
