export interface FassadeTopic {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  features: { title: string; description: string }[]
  highlights: string[]
}

export const fassadeTopics: FassadeTopic[] = [
  {
    slug: "wdvs",
    title: "WDVS-Dämmung",
    shortTitle: "WDVS",
    description:
      "Wärmedämmverbundsysteme für spürbar niedrigere Heizkosten und ein angenehmes Raumklima — das ganze Jahr.",
    longDescription:
      "Ein Wärmedämmverbundsystem (WDVS) gehört zu den wirtschaftlichsten Wegen, ein Gebäude energetisch auf ein zeitgemäßes Niveau zu heben. Wir planen den Aufbau individuell: Dämmstoff, Stärke, Putzsystem und Oberflächenstruktur werden auf Ihr Gebäude abgestimmt. So senken Sie Ihre Heizkosten nachhaltig, verbessern das Raumklima und erhöhen zugleich den Wert Ihrer Immobilie. Als Meisterbetrieb arbeiten wir ausschließlich mit geprüften Systemen — damit Ihr WDVS über Jahrzehnte hält, was es verspricht.",
    features: [
      {
        title: "Individuelle Systemauswahl",
        description:
          "EPS, Mineralwolle oder Holzfaser — wir wählen das passende System für Ihr Gebäude und Ihre Ansprüche.",
      },
      {
        title: "Fachgerechter Aufbau",
        description:
          "Unterkonstruktion, Dämmebene, Armierung und Oberputz nach den Richtlinien der Fachverbände.",
      },
      {
        title: "BAFA-Förderung inklusive",
        description:
          "Wir prüfen mit Ihnen die Fördermöglichkeiten und bereiten die nötigen Nachweise vor.",
      },
      {
        title: "Langlebig & pflegeleicht",
        description:
          "Moderne Oberputze sind wetterfest, farbstabil und halten über Jahrzehnte ohne großen Wartungsaufwand.",
      },
    ],
    highlights: [
      "Bis zu 30% niedrigere Heizkosten",
      "U-Wert ≤ 0,20 W/(m²K) möglich",
      "BAFA-förderfähig (bis 20%)",
      "Fachunternehmer-Erklärung inklusive",
    ],
  },
  {
    slug: "vhf",
    title: "Vorgehängte hinterlüftete Fassade",
    shortTitle: "VHF",
    description:
      "Langlebige Konstruktion, maximale Gestaltungsfreiheit — die technisch anspruchsvollste Fassadenlösung.",
    longDescription:
      "Die vorgehängte hinterlüftete Fassade (VHF) trennt Dämmung und Witterungsschutz konstruktiv — Feuchte kann nach außen abgeführt werden, die Dämmung bleibt trocken. Das Ergebnis: eine Fassade, die bauphysikalisch optimal arbeitet und architektonisch nahezu alles zulässt. Ob Faserzement, Schiefer, Metallpaneele oder Holz — als Dachdecker-Meisterbetrieb bringen wir Erfahrung mit hinterlüfteten Konstruktionen direkt vom Dach mit. Das ist unser Heimatgebiet, nicht eine Ergänzung zum Portfolio.",
    features: [
      {
        title: "Bauphysikalisch optimal",
        description:
          "Hinterlüftung führt Feuchte ab — die Dämmung bleibt dauerhaft trocken und leistungsfähig.",
      },
      {
        title: "Vielfalt an Materialien",
        description:
          "Faserzement, Zink, Schiefer, Holz, HPL — wir montieren alle gängigen Bekleidungen fachgerecht.",
      },
      {
        title: "Schnelle Wartung",
        description:
          "Einzelne Paneele lassen sich austauschen, ohne das gesamte System zu öffnen.",
      },
      {
        title: "Architektonisch frei",
        description:
          "Von klassisch bis modern — Fugenbild, Farbe und Oberfläche lassen sich frei gestalten.",
      },
    ],
    highlights: [
      "Dauerhafter Witterungsschutz",
      "Feuchtigkeit wird abgeführt",
      "Lange Lebensdauer (50+ Jahre)",
      "Freie Materialwahl",
    ],
  },
  {
    slug: "klinker",
    title: "Klinker & Naturstein",
    shortTitle: "Klinker",
    description:
      "Hochwertige Verkleidungen mit Charakter — Fassaden, die Generationen überdauern.",
    longDescription:
      "Klinker und Naturstein zählen zu den edelsten Fassaden-Oberflächen: robust gegen Wetter, wartungsarm und über Jahrzehnte schön. Wir arbeiten sowohl mit klassischen Vormauerschalen als auch mit modernen Riemchen-Systemen auf Dämmfassaden. Die Auswahl an Formaten, Farbtönen und Oberflächen ist riesig — und entscheidet maßgeblich über den Charakter Ihres Hauses. Wir beraten, planen und montieren mit dem Auge fürs Detail, das eine Klinkerfassade zum Schmuckstück macht.",
    features: [
      {
        title: "Klassische Vormauerschale",
        description:
          "Zweischalige Konstruktion mit Luftschicht — die bewährteste und langlebigste Klinkerlösung.",
      },
      {
        title: "Riemchen-Systeme",
        description:
          "Dünn, leicht, wirtschaftlich — ideal für Sanierungen auf bestehender Dämmung.",
      },
      {
        title: "Naturstein-Verkleidung",
        description:
          "Granit, Schiefer, Travertin — hochwertige Bekleidung mit individueller Ausstrahlung.",
      },
      {
        title: "Handwerkliche Details",
        description:
          "Fenster-Laibungen, Sockel, Gesimse — wir denken die Fassade bis zum letzten Stein durch.",
      },
    ],
    highlights: [
      "Jahrzehntelange Lebensdauer",
      "Praktisch wartungsfrei",
      "Dutzende Farben und Formate",
      "Werterhalt und Wertsteigerung",
    ],
  },
  {
    slug: "sanierung",
    title: "Fassadensanierung",
    shortTitle: "Sanierung",
    description:
      "Reinigung, Putzausbesserung, Neuanstrich — Ihre Fassade bekommt einen zweiten Frühling.",
    longDescription:
      "Nicht jede Fassade braucht eine Komplettsanierung. Oft genügt eine fachgerechte Reinigung, das Ausbessern kleiner Schadstellen und ein neuer Anstrich, um Ihr Haus wieder wie neu wirken zu lassen. Wir analysieren den Zustand vor Ort, identifizieren die Ursachen (Feuchte, Algenbefall, Risse) und empfehlen nur das, was wirklich nötig ist. So sparen Sie Geld — und Ihre Fassade hält wieder für viele Jahre.",
    features: [
      {
        title: "Zustandsanalyse",
        description:
          "Vor-Ort-Begehung mit Dokumentation und klarer Empfehlung, was tatsächlich saniert werden muss.",
      },
      {
        title: "Schonende Reinigung",
        description:
          "Algen, Moos und Schmutz fachgerecht entfernen — ohne die Fassade zu beschädigen.",
      },
      {
        title: "Rissreparatur",
        description:
          "Haarrisse, Abplatzungen und Putzschäden werden materialgerecht ausgebessert.",
      },
      {
        title: "Neuanstrich",
        description:
          "Silikat-, Silikon- oder Dispersionsfarbe — die passende Farbe für jedes Putzsystem.",
      },
    ],
    highlights: [
      "Oft günstiger als gedacht",
      "Schnelle Umsetzung (1–2 Wochen)",
      "Ehrliche Empfehlung — nur was nötig ist",
      "Nachhaltige Materialien",
    ],
  },
]

export function getFassadeTopicBySlug(slug: string): FassadeTopic | undefined {
  return fassadeTopics.find((t) => t.slug === slug)
}
