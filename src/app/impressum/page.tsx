import type { Metadata } from "next"
import PageHero from "@/components/ui/PageHero"
import { company } from "@/lib/config"

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${company.name}.`,
}

/**
 * Deploy-Gate (Briefing A.3): Der GmbH-Block ist inhaltlich fertig
 * (Daten 1:1 aus dem HRB-PDF), darf aber erst nach explizitem "Go"
 * von Steve live geschaltet werden (offener Punkt #3).
 * Zum Freischalten: auf true setzen.
 */
const SHOW_GMBH_BLOCK: boolean = false

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        title="Impressum"
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
              <strong>St. Masch Dach | Fassade | Solar</strong>
              <br />
              Dachdeckerei, Fassade, Klempnerarbeiten
              <br />
              Inhaber: Steve Masch
              <br />
              Ruppiner Chaussee 221
              <br />
              13503 Berlin
            </p>
            {/* HR-Zeile (e.K.) bewusst weggelassen — nur nach Bestätigung durch Steve ergänzen (offener Punkt #5) */}
          </div>

          {SHOW_GMBH_BLOCK && (
            <div>
              <h2 className="font-heading text-xl font-bold mb-3">
                St. Masch Synergien Solar GmbH
              </h2>
              <p className="leading-relaxed">
                Photovoltaik, Solar, Speicher, Wallbox
                <br />
                Sitz/Geschäftsanschrift: Ruppiner Chaussee 221, 13503 Berlin
                <br />
                Registergericht: Amtsgericht Charlottenburg, HRB 272561 B
                <br />
                Geschäftsführer: Steve Masch (alleinvertretungsberechtigt)
              </p>
              {/* Keine USt-IdNr. im HRB-PDF enthalten → Zeile weggelassen. Niemals die Steuernummer eintragen. */}
            </div>
          )}

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
              Berufsbezeichnung &amp; Kammer
            </h2>
            <p className="leading-relaxed">
              Dachdeckermeister — Handwerkskammer Berlin
              <br />
              Verliehen in: Deutschland
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
              Verbraucherstreitbeilegung
            </h2>
            <p className="leading-relaxed text-sm text-brand-dark/70">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
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
