import type { Metadata } from "next"
import PageHero from "@/components/ui/PageHero"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von St. Masch Dach, Fassade & Solar.",
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        title="Impressum"
        subtitle="Angaben gemäß § 5 TMG"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Impressum", href: "/impressum" },
        ]}
      />

      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 font-body text-brand-dark space-y-10">
          <div>
            <h2 className="font-heading text-xl font-bold mb-3">Anbieter</h2>
            <p className="leading-relaxed">
              St. Masch Dach &amp; Fassade
              <br />
              Ruppiner Chaussee 221
              <br />
              13503 Berlin
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon:{" "}
              <a href="tel:+493084417068" className="text-brand-orange hover:underline">
                030 - 844 17 068
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:kontakt@die-dachdecker.berlin"
                className="text-brand-orange hover:underline"
              >
                kontakt@die-dachdecker.berlin
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              Verantwortlich für den Inhalt
            </h2>
            <p className="leading-relaxed text-gray-600">
              [Name des Geschäftsführers / Inhabers eintragen]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              Handelsregister &amp; Umsatzsteuer
            </h2>
            <p className="leading-relaxed text-gray-600">
              [Handelsregister-Eintrag, USt-IdNr. gemäß § 27 a UStG eintragen]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              Berufsbezeichnung &amp; Kammer
            </h2>
            <p className="leading-relaxed text-gray-600">
              Dachdeckermeister — Handwerkskammer Berlin
              <br />
              [ggf. Eintragungsnummer ergänzen]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">Haftungshinweis</h2>
            <p className="leading-relaxed text-sm text-gray-600">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für
              die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
              ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Hinweis: Dieses Impressum ist eine Vorlage. Bitte lassen Sie die mit
              [Klammern] markierten Angaben vor dem Live-Betrieb rechtssicher
              ergänzen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
