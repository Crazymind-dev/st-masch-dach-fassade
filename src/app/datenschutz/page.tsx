import type { Metadata } from "next"
import PageHero from "@/components/ui/PageHero"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von St. Masch Dach, Fassade & Solar.",
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        title="Datenschutz"
        subtitle="Informationen zur Verarbeitung Ihrer Daten gemäß Art. 13 DSGVO"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Datenschutz", href: "/datenschutz" },
        ]}
      />

      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 font-body text-brand-dark space-y-10">
          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              1. Verantwortlicher
            </h2>
            <p className="leading-relaxed">
              St. Masch Dach &amp; Fassade, Ruppiner Chaussee 221, 13503 Berlin
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
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="leading-relaxed">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur,
              soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
              unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
              erfolgt regelmäßig nur nach Einwilligung des Nutzers oder in den Fällen,
              in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
              Gründen nicht möglich ist und die Verarbeitung der Daten durch
              gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              3. Kontaktaufnahme
            </h2>
            <p className="leading-relaxed">
              Bei der Kontaktaufnahme per E-Mail, Telefon oder über unser
              Kontaktformular werden Ihre Angaben zur Bearbeitung Ihrer Anfrage
              gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              4. Hosting
            </h2>
            <p className="leading-relaxed">
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
              technisch notwendige Server-Logdaten verarbeitet (IP-Adresse,
              Zeitstempel, aufgerufene URL, Referrer). Die Verarbeitung erfolgt
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              am stabilen Betrieb).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              5. Ihre Rechte
            </h2>
            <p className="leading-relaxed">
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
              (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
              (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch
              (Art. 21). Zudem können Sie sich bei einer Aufsichtsbehörde
              beschweren (Art. 77 DSGVO).
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Hinweis: Diese Datenschutzerklärung ist eine Vorlage. Lassen Sie sie
              vor dem Live-Betrieb durch juristischen Beistand auf Vollständigkeit
              prüfen — insbesondere wenn Formular-Backend, Analytics oder Cookies
              hinzukommen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
