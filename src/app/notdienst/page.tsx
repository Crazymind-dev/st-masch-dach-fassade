import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Shield, Clock, AlertTriangle, CheckCircle2, FileText } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import JsonLd from "@/components/seo/JsonLd"
import { serviceSchema, breadcrumbSchema } from "@/lib/seo"
import { company, site } from "@/lib/config"

export const metadata: Metadata = {
  title: "Dachdecker Notdienst Berlin — 24h Soforthilfe",
  description:
    "Sturmschaden, undichtes Dach, abgedeckte Ziegel? St. Masch: 24h Dach-Notdienst in Berlin und Brandenburg. Schnelle Hilfe vom Dachdeckermeister.",
  alternates: { canonical: `${site.baseUrl}/notdienst` },
}

const typicalEmergencies = [
  { title: "Sturmschaden", text: "Abgedeckte Ziegel, abgerissene Rinnen, umgestürzte Kamine." },
  { title: "Wassereinbruch", text: "Feuchte Decken, laufende Wände, tropfender Dachstuhl." },
  { title: "Hagelschaden", text: "Beschädigte Eindeckung, Risse in Ziegeln, Löcher im Dach." },
  { title: "Undichtes Dach", text: "Sichtbare Durchnässung nach Regen, auch ohne erkennbare Ursache." },
]

const steps = [
  { n: "01", title: "Anrufen", text: "Wir nehmen Ihre Anfrage sofort telefonisch auf." },
  { n: "02", title: "Schnellster Termin", text: "In der Regel sind wir innerhalb weniger Stunden vor Ort — in Berlin und dem nahen Umland." },
  { n: "03", title: "Sofort­maßnahmen", text: "Wir sichern das Dach notdürftig ab — Plane, Abdichtung, provisorische Reparatur." },
  { n: "04", title: "Dokumentation", text: "Fotos, Beschreibung und Kostenaufstellung für Ihre Versicherung." },
  { n: "05", title: "Sanierung", text: "Im zweiten Termin wird dauerhaft repariert." },
]

export default function NotdienstPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "24h Dach-Notdienst Berlin",
          description:
            "Soforthilfe bei Sturmschäden, Wassereinbruch, Hagel und undichten Dächern. Dachdecker-Meisterbetrieb mit Notfall-Rufbereitschaft für Berlin und Brandenburg.",
          url: `${site.baseUrl}/notdienst`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.baseUrl },
          { name: "Notdienst", url: `${site.baseUrl}/notdienst` },
        ])}
      />

      <PageHero
        title="24h Dach-Notdienst"
        highlight="Berlin"
        subtitle="Sturmschaden, undichtes Dach, abgedeckte Ziegel — wir sind in der Regel innerhalb weniger Stunden vor Ort. Anrufen reicht."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Notdienst", href: "/notdienst" },
        ]}
      />

      {/* Emergency CTA */}
      <section className="bg-brand-orange py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 mb-5">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-white">
              24 Stunden erreichbar
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Jetzt anrufen —<br />wir kümmern uns sofort.
          </h2>
          <a
            href={company.phone.href}
            className="inline-flex items-center gap-3 bg-white text-brand-orange px-8 py-5 rounded-full font-heading text-xl md:text-2xl font-black shadow-2xl hover:bg-brand-beige hover:scale-105 transition-all no-underline"
          >
            <Phone className="w-6 h-6" />
            {company.phone.display}
          </a>
          <p className="font-body text-sm text-white/85 mt-6 max-w-xl mx-auto">
            Bei akutem Wassereintritt zuerst Strom abschalten und Räume unter dem Leck räumen —
            dann uns anrufen. Jede Minute zählt.
          </p>
        </div>
      </section>

      {/* Typical emergencies */}
      <section className="bg-brand-beige py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
            Typische Notfälle
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-8">
            Wenn das Dach <span className="text-brand-orange">plötzlich</span> nicht mehr dicht ist
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {typicalEmergencies.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl p-6 border border-black/5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-3">
                  <AlertTriangle className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="font-heading text-base font-bold text-brand-dark mb-2">
                  {e.title}
                </h3>
                <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
            Ablauf
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-dark mb-10">
            So läuft ein <span className="text-brand-orange">Notfall</span> bei uns ab
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-orange/20 hidden md:block" />
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="relative flex items-start gap-5">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/20">
                    <span className="font-heading text-sm font-bold text-white">{s.n}</span>
                  </div>
                  <div className="bg-brand-beige rounded-2xl p-5 flex-1">
                    <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                      {s.title}
                    </h3>
                    <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-brand-dark py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-orange" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-black text-white mb-4">
                Wir helfen auch <span className="text-brand-orange">mit der Versicherung</span>
              </h2>
              <p className="font-body text-white/75 leading-relaxed">
                Sturmschäden sind in der Regel über die Gebäude­versicherung
                abgedeckt. Wir dokumentieren den Schaden fachgerecht mit Fotos,
                Beschreibung und Kosten­aufstellung — alles, was Ihre
                Versicherung für die Regulierung braucht.
              </p>
            </div>
            <ul className="list-none space-y-3 p-0">
              {[
                "Schaden­dokumentation mit Fotos",
                "Detaillierte Kosten­aufstellung",
                "Fachunternehmer-Erklärung für die Versicherung",
                "Abstimmung mit Ihrem Versicherer auf Wunsch",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-beige py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <FileText className="w-10 h-10 text-brand-orange mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark mb-4">
            Kein Notfall, aber trotzdem Sorge?
          </h2>
          <p className="font-body text-brand-dark/70 mb-6 max-w-xl mx-auto">
            Für regelmäßige Dachwartung und vorbeugende Inspektionen besuchen
            Sie gern unseren Bereich Dachservice.
          </p>
          <Link
            href="/leistungen/dachservice"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider no-underline hover:bg-brand-dark/90 transition-colors"
          >
            Zum Dachservice
          </Link>
        </div>
      </section>
    </>
  )
}
