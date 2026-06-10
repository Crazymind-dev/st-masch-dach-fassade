import type { Metadata } from "next"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Buchung & Preise — Dachcheck & Erstberatung online buchen",
  description:
    "Erstberatung (0 €) oder Dachcheck vor Ort online anfragen: transparente Preise, freie Termine und volle Abrechnungs-Transparenz vom Dachdecker-Meisterbetrieb in Berlin.",
  alternates: { canonical: `${site.baseUrl}/buchung` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
