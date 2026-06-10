import type { Ratgeber } from "../ratgeber-types"

export const artikel: Ratgeber = {
  slug: "mikrowechselrichter-vs-string-wechselrichter",
  category: "Solar",
  title: "Mikro-, String- oder Hybrid-Wechselrichter im Vergleich",
  metaTitle: "Wechselrichter: Mikro, String oder Hybrid | St. Masch Berlin",
  metaDescription:
    "Mikro-, String- oder Hybrid-Wechselrichter? Ertrag, Sicherheit, Speicher und Kosten im Vergleich — mit Empfehlung vom Enphase-Partner in Berlin.",
  keyword: "mikrowechselrichter vs string wechselrichter",
  summary:
    "Mikro, String oder Hybrid — welcher Wechselrichter passt zu Ihrem Dach? Ertrag, Sicherheit, Speicher und Erweiterbarkeit im ehrlichen Vergleich.",
  intro:
    "Der Wechselrichter ist das Herzstück jeder PV-Anlage: Er wandelt den Gleichstrom (DC) Ihrer Solarmodule in nutzbaren Wechselstrom (AC) für Haushalt und Netz um. Welcher Typ der richtige für Sie ist, entscheidet maßgeblich über Ertrag, Sicherheit, Erweiterbarkeit und Wirtschaftlichkeit Ihrer Anlage — oft für die nächsten 20 bis 25 Jahre. Dieser Ratgeber erklärt die drei gängigen Bauarten verständlich und hilft Ihnen bei der Entscheidung.",
  blocks: [
    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Das Wichtigste in Kürze" },
    {
      kind: "paragraph",
      body: "Mikrowechselrichter wandeln den Strom direkt an jedem einzelnen Modul um — das bringt maximalen Ertrag bei Verschattung, hohe Sicherheit (nur ca. 230 V Wechselspannung auf dem Dach) und eine modulgenaue Überwachung. String-Wechselrichter sind die am weitesten verbreitete und günstigste Lösung, spielen ihre Stärken aber nur auf einfachen, unverschatteten Dachflächen voll aus. Hybrid-Wechselrichter sind im Kern String-Geräte mit integriertem Batterie-Management — die passende Wahl, wenn von Anfang an ein Stromspeicher geplant ist. Welche Bauart zu Ihrem Dach passt, hängt von Dachform, Verschattung, Budget und Ihren Zielen ab.",
    },

    { kind: "heading", level: 2, text: "Die drei Wechselrichter-Typen auf einen Blick" },
    {
      kind: "table",
      columns: ["Kriterium", "Mikrowechselrichter", "String-Wechselrichter", "Hybrid-Wechselrichter"],
      rows: [
        [
          "Funktionsprinzip",
          "Ein kleiner Wechselrichter pro Modul",
          "Ein zentrales Gerät für in Reihe geschaltete Module („String“)",
          "Zentrales Gerät mit integriertem Batterie-Management",
        ],
        [
          "Verhalten bei Verschattung",
          "Sehr gut — nur das betroffene Modul verliert Ertrag",
          "Schlecht — ein verschattetes Modul senkt den ganzen Strang",
          "Schlecht (wie String), außer mit Optimierern",
        ],
        [
          "Spannung auf dem Dach",
          "Niedrig (AC, ca. 230 V) — hohe Sicherheit",
          "Hoch (DC, bis ca. 600–1.000 V)",
          "Hoch (DC)",
        ],
        [
          "Batteriespeicher",
          "Nachrüstbar über separates AC-System",
          "Nur mit zusätzlichem Speicher-Wechselrichter",
          "Direkt integriert — ab Werk vorbereitet",
        ],
        [
          "Erweiterbarkeit",
          "Sehr einfach — Modul für Modul",
          "Eingeschränkt (String-Auslegung)",
          "Mittel",
        ],
        [
          "Überwachung",
          "Pro Modul — jedes Modul einzeln sichtbar",
          "Pro String / Gesamtanlage",
          "Pro String / Gesamtanlage + Speicher",
        ],
        [
          "Anschaffungskosten",
          "Höher pro Wp",
          "Günstigste Variante",
          "Höher (Speicherfunktion inklusive)",
        ],
        [
          "Ausfallrisiko",
          "Verteilt — fällt ein Gerät aus, läuft der Rest weiter",
          "Zentral — fällt das Gerät aus, steht die ganze Anlage",
          "Zentral",
        ],
        [
          "Ideal für",
          "Komplexe Dächer, Verschattung, Sicherheit, schrittweiser Ausbau",
          "Einfache, unverschattete Dachflächen, Budget",
          "Neuanlage mit geplantem Speicher",
        ],
      ],
      caption: "Mikro-, String- und Hybrid-Wechselrichter im direkten Vergleich",
    },

    { kind: "heading", level: 2, text: "Mikrowechselrichter: Sicherheit und Ertrag pro Modul" },
    {
      kind: "paragraph",
      body: "Beim Mikrowechselrichter sitzt an jedem einzelnen Modul (oder an je zwei Modulen) ein eigener kleiner Wechselrichter. Der Strom wird also direkt auf dem Dach von Gleichstrom auf Wechselstrom gewandelt. Die Vorteile liegen in der Modulgenauigkeit: Jedes Modul arbeitet unabhängig und liefert seinen maximal möglichen Ertrag. Wird ein Modul durch einen Schornstein, Baum, eine Gaube oder Laub verschattet, verliert nur dieses eine Modul Leistung — nicht der gesamte Strang. Das macht Mikrowechselrichter zur ersten Wahl bei komplexen Berliner Dachlandschaften mit unterschiedlichen Ausrichtungen und Verschattungen.",
    },
    {
      kind: "paragraph",
      body: "Ein zweiter, oft unterschätzter Vorteil ist die Sicherheit: Auf dem Dach liegt nur ungefährliche Wechselspannung (ca. 230 V) statt hoher Gleichspannung (bis 1.000 V). Das senkt das Brandrisiko und ist im Brand- oder Wartungsfall ein echter Vorteil für Feuerwehr und Handwerker. Zudem lässt sich die Anlage Modul für Modul erweitern und über eine App jedes Modul einzeln überwachen — Fehler werden sofort und punktgenau sichtbar.",
    },
    {
      kind: "paragraph",
      body: "Der Nachteil: höhere Anschaffungskosten pro Kilowatt-Peak und mehr Elektronik, die der Witterung ausgesetzt ist. Moderne Geräte sind dafür jedoch ausgelegt und mit langen Garantien versehen.",
    },

    { kind: "heading", level: 2, text: "String-Wechselrichter: der bewährte Klassiker" },
    {
      kind: "paragraph",
      body: "Der String-Wechselrichter ist die am weitesten verbreitete und kostengünstigste Lösung. Mehrere Module werden in Reihe („String“) geschaltet und an ein zentrales Gerät angeschlossen, das meist geschützt im Keller, Hauswirtschaftsraum oder in der Garage hängt. Seine Stärken: günstig in der Anschaffung, robust, ausgereift und einfach zu warten, da nur ein zentrales Gerät existiert. Auf einfachen, unverschatteten Dachflächen mit einheitlicher Ausrichtung spielt der String-Wechselrichter seine Wirtschaftlichkeit voll aus und liefert hervorragende Erträge.",
    },
    {
      kind: "paragraph",
      body: "Die Schwäche: Die Module eines Strings sind voneinander abhängig. Das schwächste Modul bestimmt die Leistung des gesamten Strangs — ähnlich wie bei einer Lichterkette. Verschattung, Verschmutzung oder ein defektes Modul ziehen den ganzen String herunter. Außerdem liegt auf dem Dach hohe Gleichspannung an, und fällt das zentrale Gerät aus, steht die komplette Anlage still.",
    },
    {
      kind: "callout",
      variant: "note",
      body: "Teilabhilfe bei Verschattung schaffen sogenannte Leistungsoptimierer pro Modul. Sie heben die Kosten einer String-Anlage allerdings näher an das Niveau eines Mikrowechselrichter-Systems.",
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Hybrid-Wechselrichter: die speicherbereite Lösung" },
    {
      kind: "paragraph",
      body: "Der Hybrid-Wechselrichter ist im Kern ein String-Wechselrichter mit integriertem Batterie-Management. Er steuert Solarmodule und Stromspeicher aus einem Gerät und kann den Solarstrom direkt für den Speicher aufbereiten — ohne separaten Speicher-Wechselrichter. Wer von Anfang an einen Batteriespeicher plant (oder fest einplant, ihn später zu nutzen), fährt mit einem Hybridgerät effizient und kompakt: eine Komponente weniger, geringere Umwandlungsverluste zwischen PV und Batterie, und meist ist auch eine Notstrom- bzw. Ersatzstromfunktion möglich — bei Netzausfall bleibt das Haus versorgt.",
    },
    {
      kind: "paragraph",
      body: "Die Schwäche: In der Anschaffung ist er teurer als ein reiner String-Wechselrichter, denn die Speicherfunktion kostet mit. Beim Ertragsverhalten teilt er die Schwächen des String-Prinzips — bei Verschattung sinkt die Leistung des ganzen Strangs, sofern keine Optimierer eingesetzt werden. Außerdem binden Sie sich stärker an ein Hersteller-Ökosystem, denn Speicher und Wechselrichter müssen zueinander passen.",
    },

    { kind: "heading", level: 2, text: "Welcher Wechselrichter ist der richtige für Sie?" },
    {
      kind: "paragraph",
      body: "Es gibt keine pauschal „beste“ Lösung — die richtige Wahl hängt von Ihrem Dach, Ihrem Verbrauchsverhalten und Ihren Zielen ab:",
    },
    {
      kind: "list",
      items: [
        "Komplexes Dach, Verschattung (Schornstein, Gaube, Bäume), mehrere Ausrichtungen, höchste Sicherheit, schrittweiser Ausbau → Mikrowechselrichter",
        "Einfache, große, unverschattete Dachfläche, begrenztes Budget, kein Speicher geplant → String-Wechselrichter",
        "Neuanlage mit Speicher von Anfang an und Wunsch nach Notstrom → Hybrid-Wechselrichter",
      ],
    },

    { kind: "heading", level: 2, text: "Mehr als eine Solaranlage: das Energiedach aus einer Hand" },
    {
      kind: "paragraph",
      body: "Was uns von reinen Solateuren unterscheidet: Wir denken die PV-Anlage nicht isoliert, sondern als Teil einer Gesamtlösung aus Dach, Fassade und Solar. Mit über 30 Jahren Dacherfahrung bewerten wir Ihr Dach baulich vor Ort — nicht per Drohnen-Aufmaß vom Schreibtisch. Bei Sanierung oder Neueindeckung integrieren wir die PV auf Wunsch direkt ins Dach: mit Indach-Systemen wie Solrif oder der Premium-Kombination mit PREFA-Stehfalz — optisch hochwertig, dicht und langlebig. So bekommen Sie nicht „eine Solaranlage“, sondern ein durchdachtes Energiedach aus einer Hand.",
    },
    {
      kind: "callout",
      variant: "note",
      body: "Dieser Ratgeber dient der allgemeinen Orientierung. Die konkrete Auslegung Ihrer PV-Anlage erfolgt individuell nach Begutachtung Ihres Daches und Ihres Verbrauchsprofils.",
    },
  ],
  meisterempfehlung:
    "Auf den allermeisten realen Dächern — gerade in Berlin mit Gauben, Schornsteinen, Nachbarbebauung und gemischten Ausrichtungen — liefern modulgenaue Systeme mehr Ertrag, mehr Sicherheit und volle Transparenz über jedes einzelne Modul. Als zertifizierter Enphase-Partner setzen wir deshalb bewusst einen Schwerpunkt auf Mikrowechselrichter-Technologie; die etwas höheren Anschaffungskosten zahlen sich über die Laufzeit durch höhere Erträge und einfache Erweiterbarkeit oft aus. String-Wechselrichter empfehlen wir für einfache, unverschattete Dachflächen mit begrenztem Budget — Hybrid-Geräte, wenn ein Speicher von Anfang an fest eingeplant ist. Welcher Wechselrichter zu Ihrem Dach passt, klären wir am besten gemeinsam: kostenlos und unverbindlich vor Ort.",
  faqs: [
    {
      question: "Was macht der Wechselrichter in einer PV-Anlage?",
      answer:
        "Der Wechselrichter ist das Herzstück jeder PV-Anlage: Er wandelt den Gleichstrom (DC) der Solarmodule in nutzbaren Wechselstrom (AC) für Haushalt und Netz um. Seine Bauart entscheidet maßgeblich über Ertrag, Sicherheit, Erweiterbarkeit und Wirtschaftlichkeit — oft für die nächsten 20 bis 25 Jahre.",
    },
    {
      question: "Welcher Wechselrichter ist bei Verschattung die beste Wahl?",
      answer:
        "Der Mikrowechselrichter. Da jedes Modul unabhängig arbeitet, verliert bei Verschattung durch Schornstein, Gaube, Baum oder Laub nur das betroffene Modul Leistung. Beim String-Wechselrichter bestimmt dagegen das schwächste Modul die Leistung des gesamten Strangs — ähnlich wie bei einer Lichterkette. Bei komplexen Berliner Dachlandschaften ist die modulgenaue Lösung deshalb die erste Wahl.",
    },
    {
      question: "Was passiert, wenn der Wechselrichter ausfällt?",
      answer:
        "Bei String- und Hybrid-Wechselrichtern arbeitet ein zentrales Gerät — fällt es aus, steht die komplette Anlage still. Bei Mikrowechselrichtern ist das Risiko verteilt: Fällt ein Gerät aus, laufen alle anderen Module weiter, und der Fehler ist über die modulgenaue Überwachung sofort und punktgenau sichtbar.",
    },
    {
      question: "Brauche ich für einen Stromspeicher zwingend einen Hybrid-Wechselrichter?",
      answer:
        "Nein. Der Hybrid-Wechselrichter hat das Batterie-Management ab Werk integriert — das spart eine Komponente und reduziert Umwandlungsverluste, meist ist auch eine Notstromfunktion möglich. Ein Speicher lässt sich aber auch bei Mikrowechselrichter-Anlagen über ein separates AC-System nachrüsten und bei String-Anlagen über einen zusätzlichen Speicher-Wechselrichter ergänzen. Hybrid lohnt sich vor allem bei einer Neuanlage mit von Anfang an geplantem Speicher.",
    },
    {
      question: "Sind Mikrowechselrichter die höheren Anschaffungskosten wert?",
      answer:
        "Auf komplexen oder teilverschatteten Dächern meist ja: mehr Ertrag dank modulgenauer Optimierung, hohe Sicherheit durch niedrige Wechselspannung (ca. 230 V) auf dem Dach, Überwachung jedes einzelnen Moduls und einfache Erweiterbarkeit Modul für Modul. Auf großen, komplett unverschatteten Dachflächen mit einheitlicher Ausrichtung kann der günstigere String-Wechselrichter dagegen die wirtschaftlichere Lösung sein.",
    },
  ],
  datePublished: "2026-06-10",
  related: {
    leistung: { href: "/solar/pv-anlagen", label: "Zu unseren PV-Anlagen" },
    otherRatgeber: [
      { slug: "indach-photovoltaik", label: "Indach-Photovoltaik: lohnt sich das Solardach?" },
      { slug: "gruendach-solar-kombination", label: "Gründach + Solar kombinieren" },
    ],
  },
}
