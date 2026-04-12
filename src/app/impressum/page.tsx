import type { Metadata } from "next"
import PageHero from "@/components/ui/PageHero"
import { company } from "@/lib/config"

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${company.name}.`,
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
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon:{" "}
              <a href={company.phone.href} className="text-brand-orange hover:underline">
                {company.phone.display}
              </a>
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
              Verantwortlich für den Inhalt
            </h2>
            <p className="leading-relaxed">
              {company.owner}
              <br />
              <span className="text-brand-dark/60">{company.ownerTitle}</span>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              Handelsregister &amp; Umsatzsteuer
            </h2>
            {/* TODO: Steve muss Handelsregister-Nummer (HRB/HRA) und USt-IdNr. eintragen */}
            <p className="leading-relaxed text-brand-dark/60">
              Handelsregister: <span className="italic">— wird ergänzt —</span>
              <br />
              Umsatzsteuer-ID gemäß § 27 a UStG:{" "}
              <span className="italic">— wird ergänzt —</span>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              Berufsbezeichnung &amp; Kammer
            </h2>
            {/* TODO: Eintragungsnummer der Handwerkskammer ergänzen */}
            <p className="leading-relaxed">
              Dachdeckermeister — Handwerkskammer Berlin
              <br />
              Verliehen in: Deutschland
              <br />
              <span className="text-brand-dark/60 italic">
                Eintragungsnummer HWK: — wird ergänzt —
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              Berufsrechtliche Regelungen
            </h2>
            <p className="leading-relaxed text-sm text-brand-dark/70">
              Es gelten die Handwerksordnung (HwO) sowie die Landeshandwerksordnung
              Berlin. Die Regelungen können eingesehen werden unter{" "}
              <a
                href="https://www.gesetze-im-internet.de/hwo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                gesetze-im-internet.de/hwo
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">
              EU-Streitschlichtung
            </h2>
            <p className="leading-relaxed text-sm text-brand-dark/70">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungs­verfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold mb-3">Haftungshinweis</h2>
            <p className="leading-relaxed text-sm text-brand-dark/70">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
              für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
              sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
