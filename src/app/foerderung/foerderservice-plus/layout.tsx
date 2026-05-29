import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title:
    "FörderService PLUS — staatliche Zuschüsse für die Dachsanierung sichern",
  description:
    "Bis 20% BAFA-Zuschuss für energetische Dach- und Fassadensanierung. Wir übernehmen Antrag, Energieberatung, iSFP und Nachweise — komplett aus einer Hand. Jetzt Förderung sichern.",
  alternates: {
    canonical: `${site.baseUrl}/foerderung/foerderservice-plus`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
