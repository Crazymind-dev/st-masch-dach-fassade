import type { Ratgeber } from "../ratgeber-types"

export const artikel: Ratgeber = {
  slug: "holzfaserdaemmung-vs-mineralwolle",
  category: "Dämmung",
  title: "Holzfaserdämmung vs. Mineralwolle: Kosten, Dämmwert, Nachhaltigkeit",
  metaTitle: "Holzfaserdämmung vs. Mineralwolle: Vergleich | St. Masch Berlin",
  metaDescription:
    "Holzfaser oder Mineralwolle? Kosten, Wärmedämmung, sommerlicher Hitzeschutz und Nachhaltigkeit im direkten Vergleich.",
  keyword: "holzfaserdämmung vs mineralwolle",
  summary:
    "Welcher Dämmstoff bringt mehr: günstige Mineralwolle oder nachhaltige Holzfaser? Mit Fokus auf sommerlichen Hitzeschutz.",
  intro:
    "Beim Dämmen denken viele zuerst an den Winter — weniger Heizkosten, mehr Komfort. Aber in Berlin ist seit einigen Jahren das andere Extrem das Problem: Dachgeschosse heizen sich im Sommer auf 35 °C und mehr auf. Die Wahl des Dämmstoffs entscheidet, ob Sie im Sommer kühl bleiben oder nicht schlafen können.",
  blocks: [
    { kind: "cta", variant: "soft" },
    { kind: "heading", level: 2, text: "Mineralwolle: Der günstige Standard" },
    {
      kind: "paragraph",
      body: "Mineralwolle (Glaswolle und Steinwolle) ist seit Jahrzehnten der Standard in der deutschen Gebäudedämmung. Sie hat einen exzellenten Lambda-Wert (Wärmeleit­fähigkeit) von 0,032–0,040 W/(mK), ist unbrennbar (Brandklasse A1), schallabsorbierend und vergleichsweise günstig (15–30 €/m² Material). Sie ist diffusionsoffen, aber relativ leicht — und das ist ihr Schwachpunkt beim sommerlichen Hitzeschutz.",
    },

    { kind: "heading", level: 2, text: "Holzfaserdämmung: Der nachhaltige Allrounder" },
    {
      kind: "paragraph",
      body: "Holzfaserdämmplatten werden aus Sägerestholz hergestellt — ein nachwachsender Rohstoff mit niedriger Ökobilanz in der Produktion. Der Lambda-Wert liegt bei 0,037–0,045 W/(mK) — minimal schlechter als Mineralwolle, aber der Hauptvorteil liegt woanders: Holzfaser hat eine sehr hohe Rohdichte (50–160 kg/m³ gegenüber 20–50 kg/m³ bei Mineralwolle) und damit eine viel höhere Wärmespeicherkapazität. Im Sommer braucht die Sommer­hitze Stunden, bis sie durch den Dämmstoff nach innen wandert — was im Dachgeschoss den Unterschied zwischen 24 °C und 32 °C bedeutet.",
    },

    { kind: "heading", level: 2, text: "Direkter Vergleich" },
    {
      kind: "table",
      columns: ["Kriterium", "Mineralwolle", "Holzfaser"],
      rows: [
        ["Lambda-Wert", "0,032–0,040 W/(mK)", "0,037–0,045 W/(mK)"],
        ["Preis pro m² (18 cm)", "15–35 €", "35–60 €"],
        ["Sommerlicher Hitzeschutz", "Gering", "Sehr gut"],
        ["Brandklasse", "A1 (unbrennbar)", "B2 (normal entflammbar, behandelt)"],
        ["Schallschutz", "Sehr gut", "Gut"],
        ["Diffusionsoffen", "Ja", "Ja, besser als Mineralwolle"],
        ["Ökobilanz", "Energieintensive Produktion", "Nachwachsend, CO₂-neutral"],
        ["Verarbeitung", "Leicht, einfach zuschneidbar", "Etwas aufwendiger, mehr Staub"],
        ["Feuchte­verhalten", "Diffusionsoffen, aber saugend", "Feuchtepuffernd, trocknet zurück"],
      ],
    },

    { kind: "heading", level: 2, text: "Der Hitzeschutz-Faktor ist der wichtigste Punkt" },
    {
      kind: "paragraph",
      body: "In einem bewohnten Dachgeschoss in Berlin sind die Temperaturen an Sommertagen der Lebensqualitäts-Entscheider. Eine klassische Mineralwolle-Dämmung lässt die Hitze nach wenigen Stunden durch — mit Holzfaser verschiebt sich der Höchstpunkt um 6–10 Stunden nach hinten, oft in die Nacht, wo Sie mit Öffnen der Fenster lüften können. Für Dachgeschosswohnungen, Ferienhäuser oder generell bewohnte Dachräume ist Holzfaser in der Regel die bessere Wahl — auch wenn der Preis 50–80 % höher ist.",
    },

    { kind: "heading", level: 2, text: "Die Kompromiss-Lösung: Hybridaufbau" },
    {
      kind: "paragraph",
      body: "In der Praxis arbeiten wir oft mit einer Kombination: Holzfaser-Dämmplatten auf der Sparrenebene (Aufsparrendämmung, 6–10 cm) plus günstige Mineralwolle zwischen den Sparren (14–18 cm). So bekommen Sie den sommerlichen Hitzeschutz der Holzfaser in der Außenschicht und den günstigen Lambda-Wert der Mineralwolle in der Masse. Die Gesamtkosten liegen etwa 20–30 % über einer reinen Mineralwolle-Lösung, aber deutlich unter einer reinen Holzfaser-Dämmung.",
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Zellulose als dritte Option" },
    {
      kind: "paragraph",
      body: "Zelluloseflocken (recyceltes Zeitungspapier mit Brandschutzsalzen) sind eine interessante Einblas­dämmung. Lambda-Wert 0,038–0,042 W/(mK), gute Wärmespeicher­kapazität, hervorragende Ökobilanz, schallabsorbierend. Preis: 30–50 €/m². Besonders geeignet für Bestandsbauten, bei denen die klassische Verlegung schwierig ist — Zellulose wird maschinell in geschlossene Hohlräume geblasen. Nicht für den Selbsteinbau geeignet — die Geräte und die richtige Verdichtung sind Profi-Sache.",
    },

    { kind: "heading", level: 2, text: "Ist Holzfaserdämmung brandgefährlich?" },
    {
      kind: "paragraph",
      body: "Das ist die häufigste Sorge. Antwort: Nein, bei fachgerechtem Einbau nicht. Holzfaserplatten sind mit Brandschutzmitteln behandelt (Brandklasse B2 = normal entflammbar). Entscheidend ist der Aufbau: Die Dämmebene ist durch Gipskarton-Platten oder Holzverkleidung innen und durch Unterspannbahn plus Eindeckung außen komplett raumabschließend verpackt. Offenes Feuer kommt nicht dran. Versicherungsrechtlich gibt es keinen Nachteil — Holzfaser-Dächer sind zum Normalpreis versicherbar.",
    },

    { kind: "heading", level: 2, text: "Förderung: Alle Materialien sind förderfähig" },
    {
      kind: "paragraph",
      body: "Über BAFA BEG EM gibt es 15 % Zuschuss auf die Dachdämmung — egal ob mit Mineralwolle, Holzfaser, Zellulose oder PU. Mit iSFP-Bonus sind es 20 %. Holzfaser-Projekte bekommen über den Nachhaltigkeits­bonus mancher Programme (KfW 261 mit NH-Klasse) einen zusätzlichen Vorteil. Unser Energieberater rechnet das vorab durch und zeigt Ihnen, welche Materialwahl die beste Kombination aus Investition, Förderung und Einsparung ergibt.",
    },
  ],
  meisterempfehlung:
    "Für einfache Zwischensparrendämmung in unbewohnten Speichern oder Nebenbauten: Mineralwolle ist absolut in Ordnung und wirtschaftlich. Für bewohnte Dachgeschosse in Berlin — wo Sommerhitze zunehmend ein Problem ist — empfehlen wir in 8 von 10 Fällen Holzfaser oder Hybrid­aufbau. Die Investition von 30–50 % Mehrkosten macht sich in Wohnkomfort, Wertentwicklung der Immobilie und langfristiger Energiebilanz bezahlt. Wir berechnen beide Varianten — die Entscheidung liegt bei Ihnen.",
  faqs: [
    {
      question: "Ist Holzfaserdämmung wirklich brandgefährlich?",
      answer:
        "Nein — bei fachgerechtem Einbau ist Holzfaserdämmung versicherungs­technisch und baurechtlich unbedenklich. Die Brandklasse B2 (normal entflammbar, behandelt) reicht für den Innenausbau voll aus. Entscheidend ist die komplette Umschließung durch Gipskarton oder Holzverkleidung innen und Unterspannbahn plus Eindeckung außen. Offenes Feuer kommt nie an die Dämmung.",
    },
    {
      question: "Welche Dämmstärke brauche ich?",
      answer:
        "Das Gebäudeenergiegesetz (GEG) verlangt bei einer Dachsanierung einen U-Wert von höchstens 0,24 W/(m²K). Für BAFA-Förderung werden 0,14 W/(m²K) gefordert. Bei Mineralwolle sind dafür ca. 22 cm Dämmstärke nötig, bei Holzfaser ca. 26 cm. Wir berechnen die konkrete Anforderung vorab mit Software — dabei spielt auch der Aufbau darüber und darunter eine Rolle.",
    },
    {
      question: "Kann man Holzfaser auf bestehende Mineralwolle legen?",
      answer:
        "Ja, das ist sogar eine gängige Lösung bei Sanierungen. Wenn die bestehende Zwischensparrendämmung aus Mineralwolle noch intakt ist und nur der U-Wert nicht ausreicht, wird eine Aufsparrendämmung aus Holzfaser auf die Sparrenebene gelegt. Die Dampfbremse muss dabei komplett neu luftdicht verklebt werden. Das erreicht hervorragende U-Werte und nutzt das vorhandene Material sinnvoll weiter.",
    },
    {
      question: "Ist Zellulose besser als Mineralwolle oder Holzfaser?",
      answer:
        "Zellulose liegt bauphysikalisch zwischen Mineralwolle und Holzfaser. Der Lambda-Wert ist mit 0,038–0,042 W/(mK) mittel, die Wärmespeicher­kapazität gut (fast auf Holzfaser-Niveau), die Ökobilanz exzellent (recyceltes Material). Der große Vorteil: Einbau per Maschine in geschlossene Hohlräume, ohne Abbau der bestehenden Konstruktion. Für Bestandssanierungen ist Zellulose oft die pragmatischste Lösung.",
    },
    {
      question: "Verursacht Mineralwolle Juckreiz und ist sie gesundheitsschädlich?",
      answer:
        "Die heute zugelassenen Mineralwollen (sogenannte bio-lösliche KI-Fasern) gelten als gesundheitlich unbedenklich. Der Juckreiz beim Verarbeiten ist harmlos (kein Krebsrisiko wie bei älteren Mineralwollen vor 2000), aber unangenehm. Nach dem Einbau — sobald die Dämmung hinter Gipskarton oder Verkleidung sitzt — ist kein Faserkontakt mehr möglich. Steve Masch hat die Sachkunde für Mineralfasern (KMF) und arbeitet nach den geltenden Schutzvorschriften.",
    },
  ],
  datePublished: "2026-04-12",
  related: {
    leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
    otherRatgeber: [
      { slug: "aufsparrendaemmung-vs-zwischensparrendaemmung", label: "Aufsparren- vs. Zwischensparrendämmung" },
      { slug: "wann-dach-sanieren", label: "Wann muss ein Dach saniert werden?" },
    ],
  },
}
