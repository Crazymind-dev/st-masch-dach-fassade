import type { Ratgeber } from "../ratgeber-types"

export const artikel: Ratgeber = {
  slug: "wann-dach-sanieren",
  category: "Dach",
  title: "Wann muss ein Dach saniert werden? Warnsignale & Kosten",
  metaTitle: "Wann Dach sanieren? Anzeichen & Kosten | St. Masch Berlin",
  metaDescription:
    "7 Warnsignale, Lebensdauer nach Material, Kosten pro m² und Förderung 2026 — wann sich die Dachsanierung lohnt, erklärt vom Berliner Meisterbetrieb.",
  keyword: "wann dach sanieren",
  summary:
    "Sieben Warnsignale, Lebensdauer-Tabelle nach Material und aktuelle Kosten- und Förder-Richtwerte: So erkennen Sie, wann eine Dachsanierung wirklich nötig ist.",
  intro:
    "Die meisten Eigentümer denken erst an ihr Dach, wenn es reinregnet — dann wird es teuer. Dabei kündigt sich Sanierungsbedarf meist Jahre vorher an: am Alter, am Material und an klaren Warnsignalen, die Sie oft vom Boden aus erkennen. Dieser Ratgeber zeigt, woran Sie Handlungsbedarf erkennen, was eine Sanierung kostet und welche Förderung Sie 2026 mitnehmen sollten.",
  blocks: [
    { kind: "heading", level: 2, text: "Das Wichtigste in Kürze" },
    {
      kind: "list",
      items: [
        "Ein Dach muss saniert werden, wenn die Lebensdauer der Eindeckung erreicht ist: Betondachsteine halten typisch 30–50 Jahre, Tondachziegel 60–80 Jahre, Schiefer 100 Jahre und mehr.",
        "Anschlüsse an Kamin, Gauben und Kehlen versagen meist vor der Dachfläche — bis zu 42 % aller Undichtigkeiten entstehen genau dort.",
        "Werden mehr als 10 % der Dachfläche erneuert, verlangt § 48 GEG automatisch eine Dämmung auf U ≤ 0,24 W/(m²·K).",
        "Kosten: Neueindeckung ab ca. 100 €/m², Komplettsanierung inkl. Dämmung ca. 400–600 €/m² (brutto) — mit bis zu 20 % BAFA-Zuschuss.",
        "In Berlin löst eine Dachsanierung über 50 % der Dachfläche die Solarpflicht aus — Dach und Photovoltaik deshalb von Anfang an zusammen planen.",
      ],
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Sieben Warnsignale: Daran erkennen Sie Sanierungsbedarf" },
    {
      kind: "list",
      ordered: true,
      items: [
        "Feuchtigkeit im Dachgeschoss: Braune Flecken an Sparren, muffiger Geruch oder eine Holzfeuchte über 20 % (messbar mit einem einfachen Gerät) bedeuten: Das Dach ist bereits undicht — sofort handeln, bevor Dämmung und Holzkonstruktion Schaden nehmen.",
        "Lose, gebrochene oder fehlende Ziegel: Einzelne Defekte sind eine schnelle Reparatur. Häufen sie sich an mehreren Stellen, ist die Eindeckung am Lebensende. Nach Stürmen ab Windstärke 8 leistet übrigens die Wohngebäudeversicherung.",
        "Absandende Betondachsteine: Verliert die Oberfläche Farbe und Körnung, ist die Schutzschicht aufgebraucht — das klassische Endsymptom bei Dächern der Baujahre 1970–1990. Frost beschleunigt den Verfall.",
        "Dicke Moospolster: Bewuchs über etwa 1,5 cm Stärke speichert massiv Feuchtigkeit, blockiert die Wasserführung in Kehlen und verstopft Dachrinnen. Eine Reinigung hilft nur, solange die Ziegeloberfläche noch intakt ist.",
        "Undichte Anschlüsse an Kamin, Gauben und Kehlen: Zinkverwahrungen halten nur 20–30 Jahre — deutlich kürzer als die meisten Eindeckungen. Gerade bei Berliner Altbauten ist das Blech die Schwachstelle, nicht der Ziegel.",
        "Steigende Heizkosten ohne Erklärung: Über ein ungedämmtes Dach entweichen bis zu 30 % der Heizwärme. Einfacher Selbsttest im Winter: Schmilzt der Schnee auf Ihrem Dach schneller als beim Nachbarn, heizen Sie nach draußen.",
        "Durchhängende Dachfläche: Wellen oder Dellen in der Dachfläche deuten auf morsche Sparren oder überlastete Konstruktion — das ist ein Statik-Notfall, der sofort fachlich geprüft werden muss.",
      ],
    },

    { kind: "heading", level: 2, text: "Wie lange hält ein Dach? Lebensdauer nach Material" },
    {
      kind: "table",
      columns: ["Eindeckung / Bauteil", "Realistische Lebensdauer", "Typische Alterserscheinung"],
      rows: [
        ["Tondachziegel", "60–80 Jahre, glasiert bis 100", "Frostabplatzungen, Mikrorisse"],
        ["Betondachsteine", "30–50 Jahre", "Absandung, Moos, Farbverlust"],
        ["Naturschiefer", "100–150+ Jahre", "praktisch nur Anschlüsse"],
        ["Bitumenschindeln / Dachpappe", "20–35 Jahre", "Blasen, Risse, Versprödung"],
        ["Faserzement vor 1991 (oft asbesthaltig)", "30–50 Jahre", "Sanierung nur durch Fachbetrieb"],
        ["Unterspann-/Unterdeckbahn", "15–25 Jahre", "Versprödung, Risse"],
        ["Zink-Verwahrung an Kamin & Gauben", "20–30 Jahre", "undichte Anschlüsse"],
      ],
      caption:
        "Realistische Spannen aus der Praxis — Herstellergarantien (20–40 Jahre) sind meist deutlich kürzer als die tatsächliche Haltbarkeit.",
    },

    { kind: "heading", level: 2, text: "Reparieren, teilsanieren oder komplett neu eindecken?" },
    {
      kind: "paragraph",
      body: "Die Faustregel: Hat die Eindeckung weniger als 10–15 Jahre Restlebensdauer, lohnt die Komplettsanierung mehr als wiederholte Reparaturen. Eine punktuelle Reparatur ist sinnvoll bei jüngeren Dächern mit lokal begrenztem Schaden und intakter Unterspannbahn. Eine Teilsanierung — etwa nur die Wetterseite — rechnet sich, wenn die Substanz darunter gesund ist. Die Komplett-Neueindeckung mit neuer Lattung und Unterspannbahn ist die richtige Wahl, sobald mehr als 30 % der Fläche Schäden zeigen, die Unterspannbahn brüchig ist oder ganz fehlt (vor 1990 üblich) oder die Lattung morsch ist. Wirtschaftlich kippt die Rechnung gegen die Reparatur, sobald das Gerüst absehbar zweimal aufgebaut werden müsste oder die Altziegel nicht mehr nachkaufbar sind.",
    },
    {
      kind: "callout",
      variant: "note",
      body: "Die 10-Prozent-Regel des § 48 GEG: Wer mehr als 10 % der Dachfläche erneuert, muss auf U ≤ 0,24 W/(m²·K) dämmen (Flachdach: 0,20). Unser Rat: Wer ohnehin dämmt, sollte gleich das Förderniveau U ≤ 0,14 anpeilen — die zusätzliche Dämmstärke kostet wenig, schaltet aber 15–20 % BAFA-Zuschuss frei.",
    },

    { kind: "heading", level: 2, text: "Was kostet eine Dachsanierung? Richtwerte pro m²" },
    {
      kind: "table",
      columns: ["Maßnahme", "Richtwert (brutto)"],
      rows: [
        ["Neueindeckung Betondachsteine (inkl. Lattung, Unterspannbahn, Montage)", "ab ca. 100–130 €/m²"],
        ["Neueindeckung Tondachziegel (inkl. Lattung, Unterspannbahn, Montage)", "ab ca. 110–180 €/m²"],
        ["Neueindeckung Biberschwanz (inkl. Lattung, Unterspannbahn, Montage)", "ab ca. 180–250 €/m²"],
        [
          "Komplettsanierung (Eindeckung inkl. Dämmung, Gerüst, First/Ortgang, Dachfenster, Abbruch & Entsorgung)",
          "ca. 400–600 €/m² je nach Dämmstandard",
        ],
      ],
      caption:
        "Richtwerte brutto für Berlin/Brandenburg; Photovoltaik wird separat kalkuliert. Beispiel 150-m²-Dach, Komplettsanierung: ca. 60.000–90.000 € vor Förderung.",
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Förderung 2026: bis zu 20 % Zuschuss vom Staat" },
    {
      kind: "paragraph",
      body: "Sobald Ihre Sanierung das Dach auf U ≤ 0,14 W/(m²·K) dämmt, fördert die BAFA (BEG Einzelmaßnahmen) mit 15 % Zuschuss — plus 5 % iSFP-Bonus, wenn ein individueller Sanierungsfahrplan vorliegt. Mit iSFP sind bis zu 60.000 € förderfähige Kosten pro Wohneinheit und Jahr anrechenbar, also bis zu 12.000 € Zuschuss. Alternativ gibt es den Steuerbonus nach § 35c EStG: 20 % über drei Jahre — aber nicht kombinierbar mit dem BAFA-Zuschuss für dieselbe Maßnahme. Entscheidend: Der Förderantrag muss vor Vertragsschluss gestellt werden, und der ausführende Betrieb liefert die Fachunternehmererklärung. Den iSFP erstellen wir als BAFA-gelistete Energieberater selbst — Sie bekommen Beratung, Antrag und Ausführung aus einer Hand.",
    },

    { kind: "heading", level: 2, text: "Dachsanierung und Photovoltaik zusammen planen" },
    {
      kind: "paragraph",
      body: "In Berlin gilt: Wer mehr als 50 % der Dachfläche saniert, muss nach dem Solargesetz Berlin 30 % der Nettodachfläche mit Photovoltaik belegen — reine Reparaturen lösen die Pflicht nicht aus, in Brandenburg sind private Wohnhäuser ganz ausgenommen. Doch auch ohne Pflicht ist die Kombination wirtschaftlich klug: Das Gerüst steht nur einmal (Ersparnis 1.500–4.000 € am Einfamilienhaus), und PV-Module mit 25–30 Jahren Lebensdauer gehören auf ein frisch saniertes Dach — nicht auf eines, das in zehn Jahren wieder geöffnet werden muss. Wer 2026 in Betrieb nimmt, sichert sich zudem 20 Jahre EEG-Einspeisevergütung; ab 2027 soll die feste Vergütung für neue Anlagen entfallen. Auf Kauf und Installation bis 30 kWp fallen weiterhin 0 % Umsatzsteuer an.",
    },
  ],
  meisterempfehlung:
    "Lassen Sie Ihr Steildach jährlich, ein Flachdach zweimal im Jahr inspizieren — besonders die Anschlüsse an Kamin, Gauben und Kehlen, wo die meisten Undichtigkeiten entstehen. Eine professionelle Inspektion kostet bei uns 180–280 € und wird bei einer anschließenden Sanierung verrechnet. Der dokumentierte Wartungsnachweis stärkt zudem Ihre Position gegenüber der Gebäudeversicherung. Rechtzeitig erkannte Schäden kosten einen Bruchteil dessen, was eine durchfeuchtete Dämmung oder ein geschädigter Dachstuhl später verschlingen.",
  faqs: [
    {
      question: "Wie lange hält ein Dach?",
      answer:
        "Das hängt vom Material ab: Tondachziegel halten 60–80 Jahre (glasiert bis 100), Betondachsteine 30–50 Jahre, Naturschiefer über 100 Jahre. Die Schwachstellen sind aber meist Unterspannbahn (15–25 Jahre) und Zink-Verwahrungen an Kamin und Gauben (20–30 Jahre) — sie versagen lange vor der Eindeckung und sollten regelmäßig geprüft werden.",
    },
    {
      question: "Muss ich bei einer Dachsanierung dämmen?",
      answer:
        "Sobald Sie mehr als 10 % der Dachfläche erneuern, schreibt § 48 GEG eine Dämmung auf U ≤ 0,24 W/(m²·K) vor (Flachdach: 0,20). Unabhängig davon gilt nach § 47 GEG eine Nachrüstpflicht für die oberste Geschossdecke oder das Dach. Für die BAFA-Förderung ist ein strengerer Wert von U ≤ 0,14 nötig — der Mehraufwand ist gering, der Zuschuss substanziell.",
    },
    {
      question: "Welche Förderung gibt es 2026 für die Dachsanierung?",
      answer:
        "Die BAFA bezuschusst die Dachdämmung mit 15 %, mit individuellem Sanierungsfahrplan (iSFP) 20 % — bis zu 12.000 € pro Wohneinheit und Jahr. Alternativ können Sie 20 % über drei Jahre von der Steuer absetzen (§ 35c EStG); beides zusammen geht für dieselbe Maßnahme nicht. Wichtig: Der Antrag muss vor der Auftragserteilung gestellt werden.",
    },
    {
      question: "Muss ich bei einer Dachsanierung in Berlin Solar installieren?",
      answer:
        "Ja, wenn Sie mehr als 50 % der Dachfläche sanieren: Das Solargesetz Berlin verlangt dann Photovoltaik auf 30 % der Nettodachfläche (mindestens 2 kW bei Häusern mit bis zu zwei Wohnungen). Reparaturen und punktuelle Instandsetzungen lösen die Pflicht nicht aus. In Brandenburg gibt es für private Wohnhäuser keine Solarpflicht.",
    },
    {
      question: "Wie lange dauert eine komplette Dachsanierung?",
      answer:
        "Für ein Einfamilienhaus mit rund 150 m² Dachfläche rechnen Sie mit 2–4 Wochen inklusive Gerüstauf- und -abbau sowie Witterungspuffer. Das Haus bleibt dabei bewohnbar; bei Regen sichern wir das offene Dach mit Planen und Notabdichtung. Nur die Dachgeschossräume sind zeitweise eingeschränkt nutzbar.",
    },
    {
      question: "Zahlt die Versicherung bei Dachschäden?",
      answer:
        "Bei Sturmschäden ab Windstärke 8 (62 km/h) leistet die Wohngebäudeversicherung. Bei Marderschäden werden typischerweise nur direkte Bissschäden ersetzt, nicht die Folgeschäden durch eindringendes Wasser. Wichtig in beiden Fällen: Regelmäßige Inspektionen dokumentieren Ihre Sorgfaltspflicht und vermeiden Streit um die Schadenregulierung.",
    },
  ],
  datePublished: "2026-06-10",
  related: {
    leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
    otherRatgeber: [
      { slug: "tondachziegel-vs-betondachsteine", label: "Ton vs. Beton — welches Material?" },
      {
        slug: "aufsparrendaemmung-vs-zwischensparrendaemmung",
        label: "Aufsparren- vs. Zwischensparrendämmung",
      },
    ],
  },
}
