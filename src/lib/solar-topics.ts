export interface SolarTopic {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  features: { title: string; description: string }[]
  highlights: string[]
}

export const solarTopics: SolarTopic[] = [
  {
    slug: "pv-anlagen",
    title: "PV-Anlagen",
    shortTitle: "PV-Anlagen",
    description:
      "Photovoltaik vom Meisterbetrieb — individuell geplant, fachgerecht installiert und für Jahrzehnte gebaut.",
    longDescription:
      "Eine PV-Anlage ist nur so gut wie das Dach, auf dem sie sitzt. Wer zuerst das Dach versteht, baut eine Solaranlage, die auch nach zwanzig Jahren noch dicht, sturmfest und effizient ist. Genau das ist unser Ansatz: Wir kommen vom Handwerk — nicht vom Vertrieb. Als Dachdecker-Meisterbetrieb und zertifizierter Enphase Solar Partner planen wir Ihre Anlage individuell, abgestimmt auf Eindeckung, Statik, Ausrichtung und Stromverbrauch. Module, Mikrowechselrichter und Montagesystem sind erstklassig — aber der eigentliche Unterschied liegt darunter.",
    features: [
      {
        title: "Individuelle Auslegung",
        description:
          "Wir analysieren Ihr Dach mit 3D-Simulation und berechnen Ertrag, Wirtschaftlichkeit und Amortisation transparent.",
      },
      {
        title: "Hochwertige Module",
        description:
          "Nur Module führender Hersteller mit 25+ Jahren Leistungsgarantie und höchstem Wirkungsgrad.",
      },
      {
        title: "Fachgerechte Montage",
        description:
          "Unser Dachdecker-Meisterbetrieb garantiert, dass Ihre Anlage dicht, sicher und sturmfest bleibt — auch nach Jahren.",
      },
      {
        title: "Komplett aus einer Hand",
        description:
          "Planung, Genehmigung, Montage, Netzanschluss und Anmeldung — alles von uns, ohne Subunternehmer.",
      },
    ],
    highlights: [
      "Enphase Mikrowechselrichter",
      "Modulweise Optimierung",
      "25 Jahre Produktgarantie",
      "Anmeldung beim Netzbetreiber inklusive",
    ],
  },
  {
    slug: "stromspeicher",
    title: "Stromspeicher",
    shortTitle: "Stromspeicher",
    description:
      "Enphase IQ Batteriespeicher — Ihren Solarstrom dann nutzen, wenn Sie ihn brauchen.",
    longDescription:
      "Ohne Speicher verschenken Sie rund 70 % Ihres Solarstroms ans Netz. Mit einem Enphase IQ Batteriespeicher steigern Sie Ihre Eigenverbrauchsquote auf über 80 %. Der Speicher lädt sich tagsüber auf und versorgt Ihr Haus abends und nachts — zuverlässig, sicher und modular erweiterbar. So machen Sie sich unabhängig von Strompreis­schwankungen und Netzbetreibern.",
    features: [
      {
        title: "Modulare Kapazität",
        description:
          "Starten Sie mit 3,5 kWh und erweitern Sie flexibel — exakt passend zu Ihrem Verbrauch.",
      },
      {
        title: "Notstrom-fähig",
        description:
          "Bei Stromausfall versorgt der Speicher wichtige Verbraucher weiter — optional mit Inselbetrieb-Funktion.",
      },
      {
        title: "Sichere LFP-Zellen",
        description:
          "Lithium-Eisenphosphat-Chemie: keine Kobalt-Abhängigkeit, hohe Zyklenfestigkeit, maximale Sicherheit.",
      },
      {
        title: "10 Jahre Garantie",
        description:
          "Enphase gibt volle 10 Jahre Produktgarantie auf den Batteriespeicher.",
      },
    ],
    highlights: [
      "Eigenverbrauch bis 80 %+",
      "Notstrom-Option",
      "Modular erweiterbar",
      "Cloud-Monitoring inklusive",
    ],
  },
  {
    slug: "monitoring",
    title: "Monitoring & Wartung",
    shortTitle: "Monitoring",
    description:
      "Ihre Anlage immer im Blick — Echtzeit-Monitoring und professionelle Wartung durch unser Team.",
    longDescription:
      "Eine PV-Anlage produziert nur dann optimal, wenn sie funktioniert — und zwar jedes einzelne Modul. Mit der Enphase App sehen Sie jederzeit Live-Erträge, Verbrauch und den Zustand jedes Mikrowechselrichters. Fällt ein Modul aus, wissen Sie es sofort. Und wir auch — denn unser Wartungsservice überwacht Ihre Anlage auf Wunsch proaktiv und kümmert sich um Reinigung, Inspektion und Reparaturen.",
    features: [
      {
        title: "Modulweises Monitoring",
        description:
          "Jedes Modul meldet seinen Zustand — Sie erkennen auf einen Blick, wo Leistung fehlt.",
      },
      {
        title: "Live-Ertragsdaten",
        description:
          "Aktuelle Produktion, Tages-/Monats-/Jahreserträge und CO₂-Einsparung jederzeit auf dem Handy.",
      },
      {
        title: "Wartungsvertrag",
        description:
          "Jährliche Inspektion, Reinigung und elektrische Prüfung — damit Ihre Anlage lange hohe Erträge bringt.",
      },
      {
        title: "Schnelle Reaktionszeit",
        description:
          "Bei Störungen sind wir als regionaler Meisterbetrieb vor Ort — keine Hotline, keine Warteschleife.",
      },
    ],
    highlights: [
      "Enphase App inklusive",
      "Modulweise Fehlererkennung",
      "Optionaler Wartungsvertrag",
      "Lokaler Service in Berlin/Brandenburg",
    ],
  },
  {
    slug: "home-energy",
    title: "Home Energy Management",
    shortTitle: "Home Energy",
    description:
      "Alles unter einem Dach: Solar, Speicher, Wallbox und Wärmepumpe intelligent gesteuert.",
    longDescription:
      "Moderne Häuser verbrauchen Strom an vielen Stellen: für Beleuchtung, für die Wallbox, für die Wärmepumpe. Ein Home Energy Management System (HEMS) verbindet all diese Verbraucher mit Ihrer PV-Anlage und dem Speicher — und entscheidet automatisch, wann welcher Strom wo am sinnvollsten eingesetzt wird. So laden Sie das Auto mit Sonnenstrom, heizen effizient und nutzen jede Kilowattstunde optimal.",
    features: [
      {
        title: "Integrierte Wallbox",
        description:
          "E-Auto lädt bevorzugt mit eigenem Solarstrom — vollautomatisch, ohne manuelle Steuerung.",
      },
      {
        title: "Wärmepumpen-Kopplung",
        description:
          "Überschussstrom geht an die Wärmepumpe, wenn Ihr Speicher voll ist — so heizen Sie mit Sonne.",
      },
      {
        title: "Lastmanagement",
        description:
          "Das System priorisiert Verbraucher automatisch und vermeidet teure Netzbezüge.",
      },
      {
        title: "Erweiterbar",
        description:
          "Offenes System — zukünftige Komponenten wie weitere Speicher oder ein zweites Auto lassen sich nachrüsten.",
      },
    ],
    highlights: [
      "Wallbox-Integration",
      "Wärmepumpen-Steuerung",
      "Automatisches Lastmanagement",
      "Zukunftssicher erweiterbar",
    ],
  },
]

export function getSolarTopicBySlug(slug: string): SolarTopic | undefined {
  return solarTopics.find((t) => t.slug === slug)
}
