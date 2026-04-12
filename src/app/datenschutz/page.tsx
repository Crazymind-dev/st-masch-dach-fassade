import type { Metadata } from "next"
import PageHero from "@/components/ui/PageHero"
import { company } from "@/lib/config"

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${company.name} — Informationen zur Verarbeitung Ihrer Daten gemäß DSGVO.`,
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
              {company.name}, {company.address.street},{" "}
              {company.address.zip} {company.address.city}
              <br />
              Inhaber: {company.owner}
              <br />
              E-Mail:{" "}
              <a
                href={company.email.href}
                className="text-brand-orange hover:underline"
              >
                {company.email.display}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="leading-relaxed">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
              nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
              sowie unserer Inhalte und Leistungen erforderlich ist. Die
              Verarbeitung erfolgt regelmäßig nur nach Einwilligung der Nutzer
              oder in den Fällen, in denen eine vorherige Einholung einer
              Einwilligung aus tatsächlichen Gründen nicht möglich ist und die
              Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
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
            <h2 className="font-heading text-xl font-bold mb-3">4. Hosting</h2>
            <p className="leading-relaxed">
              Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut,
              CA 91789, USA) gehostet. Beim Aufruf werden technisch notwendige
              Server-Logdaten verarbeitet (IP-Adresse, Zeitstempel, aufgerufene
              URL, Referrer, User-Agent). Die Verarbeitung erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am stabilen
              Betrieb). Mit Vercel besteht ein Auftragsverarbeitungsvertrag gemäß
              Art. 28 DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              5. Google Maps
            </h2>
            <p className="leading-relaxed">
              Auf unserer Kontakt-Section ist eine interaktive Karte von Google
              Maps (Google Ireland Limited, Gordon House, 4 Barrow St, Dublin 4,
              Irland) eingebettet. Beim Aufruf der Seite wird automatisch eine
              Verbindung zu Google-Servern hergestellt, wobei Ihre IP-Adresse und
              weitere technische Informationen übertragen werden. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              informativen Standortdarstellung). Details siehe Google-Datenschutz­
              erklärung unter{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              6. Google Fonts
            </h2>
            <p className="leading-relaxed">
              Zur Darstellung unserer Schriften binden wir Google Fonts ein. Beim
              Laden wird Ihre IP-Adresse kurzzeitig an Google übermittelt. Die
              Integration erfolgt lokal über die Next.js Font-Optimierung,
              wodurch der direkte Kontakt zu Google-Servern beim Seitenaufruf
              minimiert wird. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              7. Ihre Rechte
            </h2>
            <p className="leading-relaxed">
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
              (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
              (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art.
              21). Zudem können Sie sich bei einer Aufsichtsbehörde beschweren
              (Art. 77 DSGVO). Zuständig für unseren Sitz ist die Berliner
              Beauftragte für Datenschutz und Informationsfreiheit.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              8. Speicherdauer
            </h2>
            <p className="leading-relaxed">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              die Zweckerreichung erforderlich ist oder gesetzliche
              Aufbewahrungs­fristen (insb. HGB, AO) dies vorsehen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
