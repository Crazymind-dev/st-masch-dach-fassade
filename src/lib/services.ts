export interface ServiceDetail {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  image: string
  icon: string
  tags: string[]
  features: { title: string; description: string }[]
  materials?: string[]
  process: { step: number; title: string; description: string }[]
}

export const services: ServiceDetail[] = [
  {
    slug: "steildach",
    title: "Steildach",
    shortTitle: "Steildach",
    description: "Neueindeckung, Sanierung und Reparatur von Steildächern mit hochwertigen Materialien.",
    longDescription:
      "Ob Neueindeckung, Komplettsanierung oder gezielte Reparatur — unser Meisterbetrieb bietet Ihnen die volle Bandbreite an Steildach-Leistungen. Wir arbeiten mit erstklassigen Materialien und garantieren handwerkliche Perfektion für ein Dach, das Jahrzehnte hält.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
    icon: "home",
    tags: ["Tondachziegel", "Schiefer", "Betondachsteine", "Bitumenschindeln"],
    features: [
      { title: "Neueindeckung", description: "Komplette Neueindeckung Ihres Steildachs mit Materialien Ihrer Wahl — von klassischen Tondachziegeln bis hin zu edlem Naturschiefer." },
      { title: "Dachsanierung", description: "Fachgerechte Sanierung bestehender Steildächer inkl. Unterkonstruktion, Dämmung und Eindeckung nach aktuellem Stand der Technik." },
      { title: "Wärmedämmung", description: "Aufsparrendämmung, Zwischensparrendämmung und Einblasdämmung — passgenau zum Dachaufbau." },
      { title: "Dachreparatur", description: "Schnelle und professionelle Reparatur von Sturmschäden, undichten Stellen oder beschädigten Ziegeln." },
    ],
    materials: ["Tondachziegel", "Betondachsteine", "Naturschiefer", "Zementbedachung", "Faserzement", "Bitumendachschindeln"],
    process: [
      { step: 1, title: "Beratung & Aufmaß", description: "Kostenlose Vor-Ort-Besichtigung und Bestandsaufnahme Ihres Dachs." },
      { step: 2, title: "Angebot", description: "Detailliertes, transparentes Angebot mit Materialoptionen und Zeitplan." },
      { step: 3, title: "Gerüstbau", description: "Fachgerechte Einrüstung und Sicherung der Baustelle." },
      { step: 4, title: "Ausführung", description: "Rückbau der alten Eindeckung, Unterkonstruktion prüfen, neue Eindeckung." },
      { step: 5, title: "Abnahme", description: "Gemeinsame Endabnahme und Dokumentation aller durchgeführten Arbeiten." },
    ],
  },
  {
    slug: "flachdach",
    title: "Flachdach",
    shortTitle: "Flachdach",
    description: "Professionelle Abdichtung und Sanierung von Flachdächern mit modernsten Materialien.",
    longDescription:
      "Flachdächer stellen besondere Anforderungen an Material und Verarbeitung. Wir bieten Ihnen alle gängigen Abdichtungssysteme — von Bitumen über EPDM bis hin zu Flüssigkunststoff — und sorgen für langfristigen Schutz Ihres Gebäudes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    icon: "layers",
    tags: ["Bitumen", "EPDM", "Kunststoff", "Flüssigabdichtung"],
    features: [
      { title: "Bitumenschweißbahn", description: "Klassische und bewährte Abdichtung mit mehrlagigen Bitumenschweißbahnen für maximale Dichtigkeit." },
      { title: "EPDM-Abdichtung", description: "Hochelastische Kautschuk-Abdichtung — besonders langlebig, UV-beständig und wartungsarm." },
      { title: "Flüssigkunststoff", description: "Nahtlose Abdichtung auch bei komplexen Anschlüssen und Durchdringungen." },
      { title: "Gefälle- & Flachdachdämmung", description: "Energetische Aufwertung mit fachgerechtem Gefälle — vermeidet stehendes Wasser." },
      { title: "Flachdachreparatur", description: "Professionelle Sanierung undichter Flachdächer mit Analyse der Schadensursache." },
    ],
    materials: ["Bitumenschweißbahn", "EPDM-Dichtungsbahn", "Kunststoff (PVC/TPO)", "Flüssigkunststoff", "Bitumendickbeschichtung"],
    process: [
      { step: 1, title: "Analyse", description: "Bestandsaufnahme, Feuchtigkeitsmessung und Schadensanalyse." },
      { step: 2, title: "Planung", description: "Auswahl des optimalen Abdichtungssystems für Ihr Gebäude." },
      { step: 3, title: "Vorbereitung", description: "Reinigung, ggf. Rückbau alter Abdichtung und Untergrundsanierung." },
      { step: 4, title: "Abdichtung", description: "Fachgerechte Verlegung des neuen Abdichtungssystems." },
      { step: 5, title: "Qualitätsprüfung", description: "Dichtigkeitsprüfung und Dokumentation." },
    ],
  },
  {
    slug: "gruendach",
    title: "Gründach",
    shortTitle: "Gründach",
    description: "Nachhaltige Dachbegrünung für besseres Klima, Regenwassermanagement und Energieeffizienz.",
    longDescription:
      "Gründächer verbessern das Stadtklima, binden Feinstaub, dämmen Schall und schaffen neuen Lebensraum. Wir planen und realisieren extensive und intensive Begrünungen — von der einfachen Sedumfläche bis zum begehbaren Dachgarten.",
    image: "https://images.unsplash.com/photo-1518012312832-96aea3c91144?w=1200&q=80",
    icon: "leaf",
    tags: ["Extensiv", "Intensiv", "Retention", "Biodiversität"],
    features: [
      { title: "Extensive Begrünung", description: "Pflegeleichte, leichte Begrünung mit Sedum, Moosen und Kräutern — ideal für Flachdächer." },
      { title: "Intensive Begrünung", description: "Begehbare Dachgärten mit Sträuchern, Stauden und sogar kleinen Bäumen." },
      { title: "Schrägdachbegrünung", description: "Extensive Begrünung auch für geneigte Dächer bis ca. 30° — mit Rutschsicherung und passendem Substrat." },
      { title: "Retentionsdach", description: "Spezialsystem zur Regenwasserrückhaltung — entlastet die Kanalisation und spart Abwassergebühren." },
      { title: "Gründachwartung", description: "Regelmäßige Pflege und Wartung Ihrer Dachbegrünung für langfristige Funktion." },
    ],
    process: [
      { step: 1, title: "Statikprüfung", description: "Prüfung der Tragfähigkeit Ihres Dachs für die gewünschte Begrünung." },
      { step: 2, title: "Abdichtung", description: "Wurzelfeste Abdichtung als Grundlage der Begrünung." },
      { step: 3, title: "Aufbau", description: "Drainageschicht, Filtervlies, Substrat und Bepflanzung." },
      { step: 4, title: "Fertigstellungspflege", description: "Erste Bewässerung und Entwicklungspflege." },
    ],
  },
  {
    slug: "fassade",
    title: "Fassade & WDVS",
    shortTitle: "Fassade",
    description: "Wärmedämmverbundsystem, vorgehängte hinterlüftete Fassade und Kerndämmung.",
    longDescription:
      "Die Fassade ist die Visitenkarte Ihres Gebäudes und gleichzeitig ein entscheidender Faktor für die Energieeffizienz. Wir bieten alle gängigen Fassadensysteme — vom klassischen WDVS über vorgehängte hinterlüftete Fassaden bis zur Kerndämmung.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    icon: "building",
    tags: ["WDVS", "VHF", "Kerndämmung", "Innendämmung", "Fassadenbegrünung", "Balkon"],
    features: [
      { title: "WDVS", description: "Wärmedämmverbundsystem für maximale Energieeinsparung und moderne Optik Ihrer Fassade." },
      { title: "Vorgehängte hinterlüftete Fassade", description: "Hochwertige VHF-Systeme mit Holz, Schiefer, Stein, Glas oder Kunststoff." },
      { title: "Kerndämmung", description: "Nachträgliche Dämmung des Mauerwerk-Hohlraums mit Granulat, Perlite oder Polystyrol-Perlen — schnell, sauber, effektiv." },
      { title: "Innendämmung", description: "Wenn Außendämmung nicht möglich ist — diffusionsoffene Systeme von innen, inkl. Feuchtemanagement." },
      { title: "Fassadenbegrünung", description: "Bodengebundene oder wandgebundene Begrünung — förderfähig über GründachPLUS Berlin (50 % Zuschuss)." },
      { title: "Balkonsanierung", description: "Abdichtung, Belag, Geländer und energetische Aufwertung Ihres Balkons aus einer Hand." },
      { title: "Putz- & Streicharbeiten", description: "Neuanstrich, Putzausbesserung und komplette Fassadenreparatur — silikat, silikon oder dispersionsbasiert." },
    ],
    process: [
      { step: 1, title: "Fassadenanalyse", description: "Bestandsaufnahme, Wärmebildaufnahme und Beratung zum optimalen System." },
      { step: 2, title: "Gerüstbau", description: "Fachgerechte Einrüstung des gesamten Gebäudes." },
      { step: 3, title: "Untergrund", description: "Vorbereitung und Sanierung des Untergrundes." },
      { step: 4, title: "Dämmung & Verkleidung", description: "Montage der Dämmplatten und Anbringung des Fassadensystems." },
      { step: 5, title: "Feinarbeit", description: "Anschlüsse, Fensterlaibungen, Abschlussarbeiten und Endreinigung." },
    ],
  },
  {
    slug: "metalldach",
    title: "Metalldach & Titanzink",
    shortTitle: "Metalldach",
    description: "Titanzink-Bedachungen und Metallverkleidungen — langlebig und wartungsarm.",
    longDescription:
      "Metalldächer und Titanzink-Verkleidungen stehen für Langlebigkeit, Ästhetik und Nachhaltigkeit. Wir verarbeiten Titanzink, Kupfer und Aluminium in Stehfalz-, Winkelfalz- und Doppelstehfalztechnik.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
    icon: "square",
    tags: ["Titanzink", "Stehfalz", "Aluminium", "Trapezblech", "Dachschindeln"],
    features: [
      { title: "Stehfalzdeckung", description: "Klassische Stehfalztechnik für Dach und Fassade — elegant und absolut dicht." },
      { title: "Titanzink-Verkleidung", description: "Hochwertige Zinkverkleidungen für Gauben, Kamine und Fassadenelemente." },
      { title: "Aluminiumbedachung", description: "Leicht, langlebig, wartungsarm — auch mit Metalldachplatten im klassischen Ziegeldesign." },
      { title: "Stahltrapezblech", description: "Wirtschaftliche Lösung für Gewerbe- und Hallendächer mit hoher Spannweite." },
      { title: "Metalldachschindeln", description: "Optik traditioneller Schindeln kombiniert mit Langlebigkeit und Leichtbau von Metall." },
      { title: "Dachentwässerung", description: "Rinnen, Fallrohre und Einläufe aus Titanzink, Kupfer oder Aluminium." },
    ],
    process: [
      { step: 1, title: "Planung", description: "Detailplanung und Materialauswahl." },
      { step: 2, title: "Zuschnitt", description: "Präziser Zuschnitt der Metallbahnen in der Werkstatt." },
      { step: 3, title: "Montage", description: "Fachgerechte Verlegung und Falzung vor Ort." },
      { step: 4, title: "Anschlüsse", description: "Sorgfältige Ausführung aller Anschlüsse und Details." },
    ],
  },
  {
    slug: "dachfenster",
    title: "Dachfenster",
    shortTitle: "Dachfenster",
    description:
      "Mehr Licht, mehr Luft, mehr Wohnraum — Dachfenster vom Fachmann, als offizieller VELUX-Partner.",
    longDescription:
      "Egal ob Sie ein Dachfenster austauschen oder einen kompletten Neueinbau inklusive Dachöffnung wünschen — wir stehen Ihnen zur Seite. Gern beraten wir Sie umfassend zu den unterschiedlichen Möglichkeiten. Wir arbeiten eng mit VELUX zusammen, um Ihren Belichtungstraum Wirklichkeit werden zu lassen: sei es ein normales Dachfenster, eine Fenster-Kombination, ein Ausstiegsfenster oder ein Fenster mit speziellen Anforderungen wie Rauchabzug. Wir bringen Licht in Ihr Leben.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80",
    icon: "window",
    tags: ["VELUX Partner", "Gauben", "Oberlichter", "Lichtbänder", "Rauchabzug"],
    features: [
      {
        title: "VELUX-Partnerschaft",
        description:
          "Offizieller VELUX-Fachpartner mit Zugriff auf das komplette Sortiment — Standardfenster, Fenster-Kombinationen, Studio und Cabrio.",
      },
      {
        title: "Neueinbau & Austausch",
        description:
          "Saubere Öffnung, passgenaue Einbindung in die Eindeckung, oder Tausch am selben Tag — je nach Projekt.",
      },
      {
        title: "Gauben",
        description:
          "Schlepp-, Giebel-, Flach- oder Fledermausgauben — mehr Wohnraum und Stehhöhe unterm Dach.",
      },
      {
        title: "Flachdachfenster",
        description:
          "Flache VELUX-Lichtkuppeln für Wohn- und Gewerbeflachdächer — mit elektrischer Öffnung auf Wunsch.",
      },
      {
        title: "Oberlichter & Lichtbänder",
        description:
          "Natürliches Tageslicht für Hallen, Treppenhäuser und Wohngebäude — auch als zusammenhängende Lichtbänder über mehrere Meter.",
      },
      {
        title: "Spezialausführungen",
        description:
          "Ausstiegsfenster, Rauchabzugsfenster (RWA), Sonnenschutz und smarte Steuerung — auch baurechtlich anspruchsvolle Anforderungen.",
      },
    ],
    materials: [
      "VELUX Standardfenster",
      "VELUX Kunststoff",
      "VELUX Studio (Dreifach-Element)",
      "VELUX Cabrio & Panorama",
    ],
    process: [
      { step: 1, title: "Beratung", description: "Aufmaß, Lichtplanung und Auswahl der passenden VELUX-Variante." },
      { step: 2, title: "Angebot", description: "Transparentes Komplettangebot inkl. Rahmen, Eindeckrahmen, Zubehör." },
      { step: 3, title: "Einbau", description: "Präzise Öffnung des Dachs, wasserdichte Einbindung, saubere Innenverkleidung." },
      { step: 4, title: "Abnahme", description: "Funktionstest, Einweisung, Dokumentation — fertig in 1–2 Tagen pro Fenster." },
    ],
  },
  {
    slug: "dachservice",
    title: "Dachservice & Wartung",
    shortTitle: "Dachservice",
    description: "Regelmäßige Wartung, Inspektion und schnelle Reparaturen für Ihr Dach.",
    longDescription:
      "Ein gut gewartetes Dach hält doppelt so lange. Unser Dachservice umfasst regelmäßige Inspektionen, vorbeugende Wartung und schnelle Reparaturen — auch im 24h-Notdienst bei Sturmschäden.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
    icon: "wrench",
    tags: ["Wartung", "Reparatur", "Inspektion", "Notdienst"],
    features: [
      { title: "Dachinspektion", description: "Regelmäßige Kontrolle auf Schäden, lose Ziegel, verstopfte Rinnen und undichte Stellen." },
      { title: "Wartungsvertrag", description: "Planbare Kosten durch jährliche Wartungsverträge mit Prioritäts-Service." },
      { title: "Sturmschaden-Reparatur", description: "Schnelle Notreparatur bei Sturmschäden — 24h erreichbar." },
      { title: "Dachreinigung", description: "Professionelle Reinigung von Moos, Algen und Verschmutzungen." },
    ],
    process: [
      { step: 1, title: "Termin", description: "Flexible Terminvereinbarung — auch kurzfristig bei Notfällen." },
      { step: 2, title: "Inspektion", description: "Gründliche Begehung und Dokumentation des Dachzustands." },
      { step: 3, title: "Bericht", description: "Detaillierter Inspektionsbericht mit Fotos und Handlungsempfehlungen." },
      { step: 4, title: "Reparatur", description: "Sofortige Beseitigung erkannter Schäden oder Terminierung größerer Arbeiten." },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
