import type { Ratgeber } from "../ratgeber-types"

export const artikel: Ratgeber = {
  slug: "indach-photovoltaik",
  category: "Solar",
  title: "Indach-Photovoltaik: Wenn das Dach selbst zum Kraftwerk wird",
  metaTitle: "Indach-Photovoltaik: Kosten & Vorteile | St. Masch Berlin",
  metaDescription:
    "Indach-Photovoltaik ersetzt die Dacheindeckung: Kosten, Vorteile, Denkmalschutz und Förderung 2026 in Berlin — wann sich das Indach-System lohnt.",
  keyword: "indach photovoltaik",
  summary:
    "Wann PV-Module die Dacheindeckung ersetzen sollten: Kosten ehrlich gerechnet, Denkmalschutz-Vorteil und Berliner Förderung 2026.",
  intro:
    "Bei Indach-Photovoltaik liegen die Solarmodule nicht auf dem Dach — sie sind das Dach. Die Module ersetzen Ziegel oder Dachsteine als wasserführende Schicht und liefern gleichzeitig Strom. Das ist optisch die eleganteste PV-Lösung, aber nicht für jedes Dach die richtige. Dieser Ratgeber zeigt, wann sich Indach in Berlin wirklich rechnet — und wann die klassische Aufdach-Anlage die bessere Wahl bleibt.",
  blocks: [
    { kind: "heading", level: 2, text: "Das Wichtigste in Kürze" },
    {
      kind: "list",
      items: [
        "Indach-Module übernehmen die Funktion der Dacheindeckung — Ziegel entfallen auf der Modulfläche komplett",
        "Mehrkosten gegenüber Aufdach: ca. 20–30 % — nach Abzug der eingesparten Eindeckung bei 10 kWp oft nur noch ca. 4.500–8.000 €",
        "Ertrag: ca. 2–5 % weniger als Aufdach (höhere Modultemperatur) — real, aber überschaubar",
        "Gewichtsvorteil: komplett nur 14–18 kg/m² statt 55–70 kg/m² bei Ziegeln plus Aufdach-PV",
        "Denkmalschutz Berlin: Indach ist im Solarleitfaden des Landesdenkmalamts ausdrücklich als denkmalverträglich genannt — plus 300 €/kWp Denkmal-Bonus im SolarPLUS-Programm 2026",
      ],
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Was ist Indach-Photovoltaik?" },
    {
      kind: "paragraph",
      body: "Bei einer Indach-Anlage (fachlich: gebäudeintegrierte Photovoltaik, BIPV) übernimmt das PV-Modul selbst die Dachhaut-Funktion. Es liegt nicht auf Dachhaken über den Ziegeln, sondern ersetzt sie: Die Module überlappen wie Schindeln, Regenwasser läuft wie bei einer Ziegeldeckung ab. Am Markt gibt es Rahmensysteme, Solardachziegel, Stehfalz-Lösungen und vollflächige Glas-Glas-Systeme. Wir verbauen unter anderem das Solrif-System von Ernst Schweizer — seit über 20 Jahren Marktführer für rahmenbasierte Indach-PV im deutschsprachigen Raum mit über 800 MW realisierter Leistung. Es funktioniert auf Dachneigungen von 10° bis 75°; unterhalb von 22° gehört zwingend ein regensicheres Unterdach nach ZVDH-Regelwerk dazu.",
    },

    { kind: "heading", level: 2, text: "Indach oder Aufdach: der direkte Vergleich" },
    {
      kind: "table",
      caption: "Indach- und Aufdach-PV im Vergleich (Richtwerte 2026, brutto)",
      columns: ["Kriterium", "Indach-PV", "Aufdach-PV"],
      rows: [
        ["Prinzip", "Modul ersetzt die Eindeckung, ist selbst wasserführend", "Modul wird über die intakte Eindeckung montiert"],
        ["Optik", "Flächenbündig, homogenes Dachbild", "Module ragen 6–10 cm aus der Dachfläche"],
        ["Denkmalschutz Berlin", "Ausdrücklich als denkmalverträglich genannt", "Nur mit farblich angepassten Modulen genehmigungsfähig"],
        ["Flächengewicht", "Komplett 14–18 kg/m²", "Ziegel + PV ca. 55–70 kg/m²"],
        ["Jahresertrag", "Ca. 2–5 % weniger (höhere Modultemperatur)", "Referenz (hinterlüftet)"],
        ["Preis 2026", "Ab ca. 1.500–2.500 €/kWp brutto", "Ab ca. 1.000–1.600 €/kWp brutto"],
        ["Dachsanierung steht an", "Ideal — Eindeckung wird eingespart", "Nur bei intaktem Dach sinnvoll"],
        ["Intaktes Bestandsdach", "Wirtschaftlich kaum sinnvoll", "Ideal"],
        ["Wartung / Modultausch", "Aufwendiger (Tausch im Schindelverband)", "Schnell, Modul aus Klemme lösen"],
      ],
    },

    { kind: "heading", level: 2, text: "Kosten 2026: ehrlich gerechnet" },
    {
      kind: "paragraph",
      body: "Eine schlüsselfertige Aufdach-Anlage kostet 2026 ab ca. 1.000–1.600 €/kWp brutto — historisch günstig. Indach liegt bei ca. 1.500–2.500 €/kWp; Solrif-Systeme bewegen sich beim Einfamilienhaus typischerweise bei ca. 1.800–2.400 €/kWp komplett. Der ehrliche Vergleich beginnt aber erst, wenn man die eingesparte Dacheindeckung gegenrechnet: Ton- oder Betondachsteine inklusive Lattung und Verlegung kosten ca. 40–70 €/m² (Beton) bis 70–120 €/m² (Premium-Tonziegel). Auf der Modulfläche entfallen diese Kosten komplett. Unterm Strich schrumpft der reale Aufpreis einer 10-kWp-Indach-Anlage gegenüber Aufdach plus neuer Eindeckung damit oft auf ca. 4.500–8.000 € — der Preis für flächenbündige Optik, geringeres Dachgewicht und deutlich bessere Genehmigungschancen im Denkmal.",
    },
    {
      kind: "callout",
      variant: "note",
      body: "Die Photovoltaikanlage kalkulieren wir immer als separate Position zur Dachsanierung. Steuerlich wichtig: Die 0 % Mehrwertsteuer (§ 12 Abs. 3 UStG, bis 30 kWp) gelten auch für Indach-PV — aber nur für die PV-spezifischen Komponenten. Die Dacheindeckung außerhalb der Modulfläche, Dämmung und Lattung bleiben bei 19 %. Wir weisen beide Anteile in der Rechnung sauber getrennt aus.",
    },

    { kind: "heading", level: 2, text: "Wann sich Indach lohnt — und wann nicht" },
    {
      kind: "list",
      items: [
        "Dachsanierung steht ohnehin an: Eindeckung und Stromerzeugung verschmelzen zu einer Maßnahme — der stärkste Anwendungsfall",
        "Neubau: Module werden von Anfang an architektonisch eingeplant, Doppelarbeiten entfallen",
        "Denkmalschutz oder Gestaltungssatzung: In vielen Berliner Altbauquartieren ist Indach faktisch die einzige genehmigungsfähige Lösung",
        "Schwacher Dachstuhl: 14–18 kg/m² statt 55–70 kg/m² — eine statische Ertüchtigung von 2.000–5.000 € kann entfallen",
      ],
    },
    {
      kind: "paragraph",
      body: "Klar abzuraten ist von Indach bei einem intakten Bestandsdach ohne Sanierungsbedarf — die funktionstüchtige Eindeckung abzunehmen ergibt wirtschaftlich keinen Sinn, hier ist Aufdach die richtige Wahl. Auch auf Flachdächern scheidet Indach aus, und bei sehr kleinen Anlagen unter 5 kWp überwiegen die Fixkosten der Systemtechnik.",
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Förderung und Denkmalschutz in Berlin 2026" },
    {
      kind: "paragraph",
      body: "Das Berliner Förderprogramm SolarPLUS wurde am 8. Januar 2026 neu aufgelegt und läuft bis Jahresende: Für Ein- und Zweifamilienhäuser gibt es eine Pauschale von 250 €/kWp für PV mit Stromspeicher (max. 4.750 €). Besonders interessant für Indach: der Denkmal-Bonus von zusätzlich 300 €/kWp (max. 5.700 €) für denkmalgerechte PV-Anlagen, dazu eine Zählerschrankpauschale von 750 € bei Altbau-Modernisierungen. Auf Bundesebene gilt die EEG-Einspeisevergütung weiter — für Anlagen bis 10 kWp 7,78 ct/kWh bei Teileinspeisung bzw. 12,34 ct/kWh bei Volleinspeisung, je 20 Jahre garantiert. Wird Indach-PV Teil einer Dachsanierung, kann der Hüllen-Anteil (Dämmung, Unterkonstruktion, Wetterschutz) zusätzlich über die BEG-Einzelmaßnahmen mit 15 % Grundförderung plus 5 % iSFP-Bonus gefördert werden — Voraussetzung ist die saubere Kostentrennung durch einen Energieeffizienz-Experten.",
    },
    {
      kind: "callout",
      variant: "warning",
      body: "Ein Referentenentwurf des Bundeswirtschaftsministeriums sieht vor, die feste EEG-Vergütung für Anlagen unter 25 kWp ab 2027 abzuschaffen. Wer sich 20 Jahre garantierte Einspeisevergütung sichern will, sollte die Inbetriebnahme bis Ende 2026 anstreben. Ein Speicher ist seit dem Solarspitzengesetz ohnehin faktisch wirtschaftliche Voraussetzung — und im SolarPLUS-Zuschuss bereits eingerechnet.",
    },
    {
      kind: "paragraph",
      body: "Beim Denkmalschutz hat sich die Lage klar zugunsten der Eigentümer gedreht: § 2 EEG stellt Erneuerbare ins „überragende öffentliche Interesse“, und die Obergerichte haben 2023/2024 bestätigt, dass dieses Interesse die Belange des Denkmalschutzes regelmäßig überwiegt. Der Solarleitfaden des Berliner Landesdenkmalamts von 2023 nennt Indach-Lösungen ausdrücklich als denkmalverträgliche Variante für einsehbare, stadtbildprägende Dächer. Bei rund 12 % aller Berliner Dachflächen mit Denkmalstatus ist das ein großer Hebel — auf historischen Steildächern mit Biberschwanzdeckung sind ziegelfarbene Indach-Systeme oft die einzige Lösung, die genehmigt wird. Für den Antrag nach § 12 DSchG Bln braucht es Bestandsfotos, Materialangaben und eine Visualisierung; ein frühzeitiger Behördenkontakt verkürzt die Bearbeitung erfahrungsgemäß spürbar.",
    },
  ],
  meisterempfehlung:
    "Indach ist kein Allheilmittel, sondern das richtige Werkzeug am richtigen Dach: Wenn die Eindeckung ohnehin erneuert werden muss, Optik oder Denkmalschutz zählen oder der Dachstuhl entlastet werden soll, rechnet sich das System fast immer. Liegt dagegen ein intaktes Dach ohne Sanierungsbedarf vor, raten wir ehrlich zur Aufdach-Anlage. Als Dachdecker- und Solar-Meisterbetrieb planen wir beides aus einer Hand — Eindeckung, Unterdach und Solrif-Indach-Montage mit einer Abnahme und einem Ansprechpartner. Förder- und Denkmalanträge bereiten wir gemeinsam mit Ihnen vor, inklusive der sauberen Kostentrennung für 0 % Mehrwertsteuer und BEG-Förderung.",
  faqs: [
    {
      question: "Ist eine Indach-Anlage wirklich regendicht?",
      answer:
        "Ja — vorausgesetzt, sie ist fachgerecht ausgeführt. Beim Solrif-System überlappen die Aluminium-Rahmenprofile horizontal und vertikal nach dem Schindelprinzip, Regenwasser wird wie bei einer Ziegeldeckung abgeleitet. Indach-Module sind als Bauprodukt geprüft, gelten als harte Bedachung und müssen Anforderungen an Regendichtigkeit und Schlagregensicherheit erfüllen. Bei Dachneigungen unter 22° ist zusätzlich ein regensicheres Unterdach nach ZVDH-Regelwerk Pflicht — das gehört bei uns zum Standard.",
    },
    {
      question: "Wie viel weniger Ertrag bringt Indach gegenüber Aufdach?",
      answer:
        "In sauber konstruierten Systemen mit Lüftungsschlitzen an Traufe und First liegt der Jahresertragsverlust bei ca. 2–5 %. Grund ist die fehlende Hinterlüftung: Indach-Module werden im Sommer wärmer als hinterlüftete Aufdach-Module, und kristalline Zellen verlieren rund 0,3–0,4 % Leistung pro Grad. Moderne Module mit niedrigem Temperaturkoeffizienten verringern den Effekt weiter. Bei vollintegrierten Solardachziegeln ohne Lüftungsebene kann der Verlust höher ausfallen — auch deshalb setzen wir auf hinterlüftete Rahmensysteme.",
    },
    {
      question: "Bekomme ich auf einem denkmalgeschützten Dach eine Genehmigung?",
      answer:
        "Die Chancen stehen heute so gut wie nie. Der Solarleitfaden des Berliner Landesdenkmalamts nennt Indach-Lösungen ausdrücklich als denkmalverträglich, und die Rechtsprechung hat klargestellt, dass das öffentliche Interesse am Ausbau der Erneuerbaren die Belange des Denkmalschutzes regelmäßig überwiegt. Wichtig ist ein vollständiger Antrag mit Bestandsfotos, Materialangaben und Visualisierung — und ein früher Kontakt zur Denkmalbehörde. Wir begleiten Sie durch das gesamte Verfahren.",
    },
    {
      question: "Welche Förderung gibt es 2026 für Indach-PV in Berlin?",
      answer:
        "Das SolarPLUS-Programm zahlt für Ein- und Zweifamilienhäuser 250 €/kWp für PV mit Speicher, bei denkmalgerechten Anlagen kommen 300 €/kWp Denkmal-Bonus dazu. Es gelten 0 % Mehrwertsteuer auf die PV-Komponenten (bis 30 kWp) und die EEG-Einspeisevergütung mit 7,78 ct/kWh (Teileinspeisung) bzw. 12,34 ct/kWh (Volleinspeisung). Wird Indach Teil einer Dachsanierung, ist für den Hüllen-Anteil zusätzlich BEG-Förderung mit 15 % plus 5 % iSFP-Bonus möglich.",
    },
    {
      question: "Was passiert, wenn ein Indach-Modul defekt ist?",
      answer:
        "Ein defektes Modul lässt sich austauschen — es muss dafür aus dem Schindelverband gelöst werden, was etwas aufwendiger ist als bei einer Aufdach-Anlage. Realistisch sollten Sie mit dem Eineinhalb- bis Zweifachen der üblichen Servicezeit rechnen. Dafür sind die Module fest im Verband verankert und die Verkabelung liegt geschützt unter der Modulebene. Die Leistungsgarantien liegen wie bei Aufdach-Modulen bei 25–30 Jahren.",
    },
  ],
  datePublished: "2026-06-10",
  related: {
    leistung: { href: "/solar/pv-anlagen", label: "Zu unseren PV-Anlagen" },
    otherRatgeber: [
      { slug: "gruendach-solar-kombination", label: "Gründach + Solar kombinieren" },
      { slug: "mikrowechselrichter-vs-string-wechselrichter", label: "Wechselrichter im Vergleich" },
    ],
  },
}
