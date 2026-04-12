import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Ratgeber Dach & Solar Berlin | Meisterwissen | St. Masch",
  description:
    "Verständliche Ratgeber zu Dachsanierung, Dämmung, Photovoltaik und Fassade für Hauseigentümer in Berlin — vom Dachdecker-Meisterbetrieb.",
  alternates: { canonical: `${site.baseUrl}/ratgeber` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
