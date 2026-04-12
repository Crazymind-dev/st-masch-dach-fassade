/**
 * Evergreen Ratgeber-Content. Jedes Objekt ist eine vollständige
 * Artikel-Definition — Metadaten, Abschnitte, Tabellen, FAQs, Links —
 * gerendert über app/ratgeber/[slug]/page.tsx.
 */

export type RatgeberCategory = "Dach" | "Dämmung" | "Solar" | "Flachdach"

export type RatgeberBlock =
  | { kind: "paragraph"; body: string }
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "table"; columns: string[]; rows: string[][]; caption?: string }
  | { kind: "callout"; variant: "note" | "warning"; body: string }
  | { kind: "cta"; variant: "soft" | "strong" }

export interface Ratgeber {
  slug: string
  category: RatgeberCategory
  /** H1 (≤60 chars). */
  title: string
  /** <title> (50–60 chars). */
  metaTitle: string
  /** <meta description> (140–155 chars). */
  metaDescription: string
  /** Keyword-Phrase for reference. */
  keyword: string
  /** Short one-sentence description for the overview card. */
  summary: string
  /** Opening 2–3 sentences right below the H1. */
  intro: string
  /** Main body — rendered in order. */
  blocks: RatgeberBlock[]
  /** Small author block near the end: 'Unsere Empfehlung als Meisterbetrieb'. */
  meisterempfehlung: string
  faqs: { question: string; answer: string }[]
  /** Published date for Article schema + 'Stand: …' label. */
  datePublished: string
  /** Related internal links. */
  related: {
    leistung: { href: string; label: string }
    otherRatgeber: { slug: string; label: string }[]
  }
}

export const ratgeberList: Ratgeber[] = [
  // ─── Ratgeber 1: Ton vs Beton ──────────────────────────────────────────
  {
    slug: "tondachziegel-vs-betondachsteine",
    category: "Dach",
    title: "Tondachziegel oder Betondachsteine? Ein ehrlicher Vergleich",
    metaTitle: "Tondachziegel vs. Betondachsteine: Vergleich | St. Masch Berlin",
    metaDescription:
      "Tondachziegel oder Betondachsteine — was hält länger, sieht besser aus und lohnt sich? Ehrlicher Vergleich vom Dachdeckermeister aus Berlin.",
    keyword: "tondachziegel vs betondachsteine",
    summary:
      "Ton oder Beton — welches Material für Ihr Steildach wirklich lohnt. Lebensdauer, Preis, Optik und Denkmalschutz im Vergleich.",
    intro:
      "Bei fast jeder Dachsanierung steht früher oder später die gleiche Frage: Tondachziegel oder Betondachsteine? Beide Materialien prägen seit Jahrzehnten deutsche Dächer — aber sie halten sich nicht gleich lang, kosten nicht gleich viel und sehen mit den Jahren sehr unterschiedlich aus. Dieser Artikel hilft Ihnen, sauber zu entscheiden.",
    blocks: [
      { kind: "cta", variant: "soft" },
      { kind: "heading", level: 2, text: "Das Wichtigste in Kürze" },
      {
        kind: "paragraph",
        body: "Tondachziegel halten 80 bis 100 Jahre, sind teurer in der Anschaffung und gewinnen optisch über die Zeit an Charakter (natürliche Patina). Betondachsteine halten 40 bis 60 Jahre, sind rund 20 bis 30 % günstiger, verlieren aber messbar an Farbtiefe und können Kalkausblühungen zeigen. Für denkmalgeschützte oder historisch prägende Berliner Gebäude ist fast immer Ton vorgeschrieben. Im Neubau sind beide Materialien zulässig — welche Variante sich lohnt, hängt weniger von Mode als von der geplanten Haltezeit ab.",
      },

      { kind: "heading", level: 2, text: "Direkter Vergleich" },
      {
        kind: "table",
        columns: ["Kriterium", "Tondachziegel", "Betondachsteine"],
        rows: [
          ["Lebensdauer", "80–100 Jahre", "40–60 Jahre"],
          ["Materialpreis pro m²", "25–60 €", "15–35 €"],
          ["Gewicht pro m²", "40–45 kg", "45–55 kg"],
          ["Farbbeständigkeit", "Sehr hoch (Brennfarbe)", "Mittel (oberflächliche Beschichtung)"],
          ["Frostbeständigkeit", "Sehr hoch", "Hoch"],
          ["Nachhaltigkeit (Herstellung)", "Energieintensiv, aber lange Haltbarkeit", "CO₂-ärmer, kürzere Haltbarkeit"],
          ["Typische Optik-Entwicklung", "Edle Patina, Moos möglich", "Verblassen, Kalkausblühungen"],
          ["Denkmalschutz in Berlin", "In der Regel zulässig", "Häufig ausgeschlossen"],
        ],
      },

      { kind: "heading", level: 2, text: "Tondachziegel: Vorteile und Schwächen" },
      {
        kind: "paragraph",
        body: "Tondachziegel sind aus gebranntem Ton und stehen für die klassische deutsche Dachoptik. Die Farbe ist durchgehend — ein Kratzer bleibt unauffällig, weil kein anderer Ton darunter liegt. Moderne Ziegel (Engobe, Glasur) erreichen 100 Jahre Lebensdauer, und auch Naturziegel halten typischerweise 80+ Jahre. Der Nachteil: Material und Verarbeitung sind teurer. Ein Tondach kostet in der Sanierung etwa 20–30 % mehr als ein Betondach — dafür muss es während der üblichen Eigentumsdauer in der Regel kein zweites Mal gemacht werden.",
      },

      { kind: "heading", level: 2, text: "Betondachsteine: Vorteile und Schwächen" },
      {
        kind: "paragraph",
        body: "Betondachsteine bestehen aus Zement, Quarzsand und Pigmenten. Sie sind formstabil, mechanisch robust und günstiger. Nachteile zeigen sich mit den Jahren: Die Farbbeschichtung an der Oberfläche verblasst durch UV-Einstrahlung, und die Kalkbestandteile im Beton bilden weißliche Ausblühungen. Beides ist kein statischer Mangel, aber optisch deutlich. Nach 20–30 Jahren wirkt ein Betondach oft „ausgelutscht“, während ein Tondach im gleichen Alter noch frisch aussieht. Für kurzfristige Nutzungszeiträume — etwa eine Immobilie, die in 10–15 Jahren ohnehin abgerissen oder saniert wird — kann der Preis­vorteil ausschlaggebend sein.",
      },

      { kind: "heading", level: 2, text: "Wann sich welches Material lohnt" },
      {
        kind: "list",
        items: [
          "Neubau mit 30+ Jahren geplanter Eigen­nutzung: Tondachziegel — der Preisunterschied amortisiert sich über die Lebensdauer.",
          "Sanierung bei Altbau im Berliner Bestand: Tondachziegel — meist Denkmal- oder Gestaltungssatzung­konform.",
          "Kurzfristige Nutzung, Vermietung oder geplanter Umbau innerhalb 15 Jahren: Betondachsteine sind wirtschaftlicher.",
          "Gewerbehallen, Nebengebäude, Carports: Betondachsteine sind ausreichend und günstiger.",
          "Denkmalgeschützte Häuser in Berlin-Mitte, Charlottenburg, Kreuzberg: Nachfrage beim Bezirk — oft ist sogar Naturziegel oder Biberschwanz vorgeschrieben.",
        ],
      },

      { kind: "heading", level: 2, text: "Berliner Kontext: Denkmalschutz und Gestaltungssatzung" },
      {
        kind: "paragraph",
        body: "Berlin hat zahlreiche Gebiete mit Erhaltungs- oder Gestaltungssatzungen — insbesondere Teile von Charlottenburg, Kreuzberg, Prenzlauer Berg und Zehlendorf. In solchen Quartieren ist die Materialwahl rechtlich eingeschränkt. Typisch vorgeschrieben sind rote oder rot-braune Tondachziegel im klassischen Biberschwanz- oder Falzziegel-Format. Eine Neueindeckung mit Betondachsteinen wäre dort nicht genehmigungsfähig. Wir klären das vor dem Angebot mit dem zuständigen Bezirksamt — Sie bekommen nie ein Angebot, das später am Denkmalschutz scheitert.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Warum die Entscheidung nicht allein über den Preis fällt" },
      {
        kind: "paragraph",
        body: "Eine Dacheindeckung ist kein Produkt, das man nach fünf Jahren austauscht. Sie hält länger als jedes Auto, oft länger als der aktuelle Eigentümer im Haus wohnt. In dieser Zeit beeinflusst sie den Wiederverkaufswert, das Raumklima unterm Dach, die Tragkonstruktion — und jede Reparatur ist aufwändig. Wir empfehlen immer: erst die geplante Haltezeit klären, dann die Materialfrage stellen. Wer das Haus in 40 Jahren immer noch bewohnen oder vererben möchte, fährt mit Ton fast ohne Ausnahme besser.",
      },

      { kind: "heading", level: 2, text: "Kombination mit energetischer Sanierung" },
      {
        kind: "paragraph",
        body: "Eine Neueindeckung ist der ideale Zeitpunkt, um die Dachdämmung mit zu erneuern — das Gerüst steht, die Eindeckung ist sowieso offen, die Kosten addieren sich nur anteilig. Für die energetische Sanierung gibt es über BAFA BEG EM bis 20 % Zuschuss, dazu optional KfW-Kredit mit Tilgungszuschuss. Unser Energieberater im Haus erstellt den individuellen Sanierungsfahrplan (iSFP), der zusätzlich 5 % Bonus auf jede weitere Maßnahme in den nächsten 15 Jahren aktiviert.",
      },
    ],
    meisterempfehlung:
      "Bei Bestandsimmobilien in Berlin empfehlen wir in der Regel Tondachziegel — auch wenn sie in der Anschaffung teurer sind. Der Wiederverkaufswert, die längere Lebensdauer und die bessere Alterung rechnen sich fast immer. Bei Betondachsteinen sollte man ehrlich damit rechnen, dass das Dach nach 40–50 Jahren neu gedeckt werden muss. Wir zeigen Ihnen beides offen — und rechnen es Ihnen transparent durch.",
    faqs: [
      {
        question: "Kann man Betondachsteine auf einen Dachstuhl legen, der für Tondachziegel gebaut wurde?",
        answer:
          "In der Regel ja, weil Betondachsteine sogar etwas schwerer sind als Tondachziegel — die Tragfähigkeit reicht also aus. Prüfenswert ist aber die Lattung: Betondachsteine haben oft andere Decklängen, sodass gegebenenfalls die Latten umpositioniert werden müssen. Umgekehrt (Ton auf einem für Beton ausgelegten Dach) ist unkritischer, weil die Last sinkt.",
      },
      {
        question: "Wie erkenne ich, ob die alten Ziegel noch gut sind und nicht komplett erneuert werden müssen?",
        answer:
          "Klare Warnsignale sind gebrochene oder abgeplatzte Ziegel, sichtbare Risse, Moosbewuchs, der tief ins Material geht, und Frostabplatzungen an Unterkanten. Einzelne defekte Ziegel kann man ausnageln und ersetzen. Sind jedoch mehr als 5–10 % der Fläche betroffen oder ist die Eindeckung über 50 Jahre alt, ist eine Neueindeckung meist wirtschaftlicher als ständige Reparaturen. Wir prüfen das bei einer kostenlosen Vor-Ort-Begehung.",
      },
      {
        question: "Was kostet eine Neueindeckung pro Quadratmeter in Berlin?",
        answer:
          "Grobe Orientierung: Mit Betondachsteinen liegen Sie bei 70–100 €/m² inklusive Lattung, Unterspannbahn und Montage. Mit mittelpreisigen Tondachziegeln bei 90–130 €/m². Naturziegel, Biberschwanz oder glasierte Ziegel erreichen 150–200 €/m². Dazu kommen Gerüst, Entsorgung und First-/Ortgang-Arbeiten. Im Komplettpreis für ein Einfamilienhaus sind realistisch 180–260 €/m² brutto — bei Tondach entsprechend im oberen Drittel.",
      },
      {
        question: "Muss ich für die Neueindeckung eine Baugenehmigung einholen?",
        answer:
          "Eine reine Neueindeckung im gleichen Material ist in Berlin in der Regel genehmigungsfrei. Sobald sich jedoch die Dachform, die Dachneigung, die Farbe oder das Material deutlich ändert — oder das Gebäude unter Denkmalschutz steht — ist eine Abstimmung mit dem Bezirksamt erforderlich. Wir klären das vor dem Auftrag für Sie.",
      },
      {
        question: "Wie lange dauert eine Neueindeckung?",
        answer:
          "Für ein durchschnittliches Einfamilienhaus (120–180 m² Dachfläche) planen wir 1–2 Wochen für die eigentliche Eindeckung. Gerüstauf- und -abbau kommen jeweils einen halben Tag dazu. Bei Witterungsproblemen kann sich der Zeitraum strecken — wir planen entsprechend puffer­freundlich in Frühjahr oder Sommer.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
      otherRatgeber: [
        { slug: "wann-dach-sanieren", label: "Wann muss ein Dach saniert werden? 7 Warnsignale" },
        { slug: "aufsparrendaemmung-vs-zwischensparrendaemmung", label: "Aufsparren- vs. Zwischensparrendämmung" },
      ],
    },
  },

  // ─── Ratgeber 2: Aufsparren vs Zwischensparren ─────────────────────────
  {
    slug: "aufsparrendaemmung-vs-zwischensparrendaemmung",
    category: "Dämmung",
    title: "Aufsparrendämmung vs. Zwischensparrendämmung: Was ist besser?",
    metaTitle: "Aufsparrendämmung vs. Zwischensparrendämmung | St. Masch Berlin",
    metaDescription:
      "Aufsparren- oder Zwischensparrendämmung? Kosten, Dämmwerte und welche Methode für Berliner Altbauten am besten passt.",
    keyword: "aufsparrendämmung vs zwischensparrendämmung",
    summary:
      "Aufsparren, zwischen den Sparren oder als Einblasdämmung — welche Methode für Ihr Dach bauphysikalisch und wirtschaftlich passt.",
    intro:
      "Das Dach ist in vielen Häusern der größte einzelne Wärmeverlust-Punkt — bis zu 30 % der Heizwärme entweichen dort, wenn nicht gedämmt wurde. Bei der Dämmung gibt es zwei gegensätzliche Ansätze: komplett von außen auf die Sparren, oder von innen zwischen die Sparren. Beide funktionieren — aber nicht gleich gut und nicht gleich teuer.",
    blocks: [
      { kind: "cta", variant: "soft" },
      { kind: "heading", level: 2, text: "Die beiden Prinzipien" },
      {
        kind: "paragraph",
        body: "Bei der Aufsparrendämmung werden starre Dämmplatten (typisch Holzfaser, PIR oder PUR) auf der Sparrenlage verlegt — also zwischen Sparren und Dacheindeckung. Die Dämmebene ist durchgehend, ohne Wärmebrücken durch Holz. Bei der Zwischensparrendämmung wird weiche Dämmung (Mineralwolle, Holzfaserflocken, selten Einblaszellulose) in die Hohlräume zwischen die Sparren gepackt. Die Sparren selbst bleiben warm-kalte Brücken.",
      },

      { kind: "heading", level: 2, text: "Direkter Vergleich" },
      {
        kind: "table",
        columns: ["Kriterium", "Aufsparren", "Zwischensparren"],
        rows: [
          ["U-Wert-Potenzial", "0,15–0,18 W/(m²K)", "0,20–0,24 W/(m²K)"],
          ["Kosten pro m²", "90–140 €", "45–85 €"],
          ["Eingriff", "Komplette Neueindeckung nötig", "Nur von innen, Eindeckung bleibt"],
          ["Wohnraumverlust", "Keiner", "Ca. 16–22 cm Dämmstärke geht an Innenmaß verloren"],
          ["Wärmebrücken", "Keine (komplett umhüllt)", "An den Sparren (Holz leitet Wärme)"],
          ["Bauphase bewohnbar?", "Dach offen — nicht bei Regen", "Ja, Raum für Raum möglich"],
          ["Dampfbremse", "Auf Dachschalung unter Eindeckung", "Raumseitig, luftdicht verklebt"],
          ["Ideal für", "Neubau / geplante Neueindeckung", "Bestehende Eindeckung in Ordnung"],
        ],
      },

      { kind: "heading", level: 2, text: "Aufsparrendämmung: Wann sie sich lohnt" },
      {
        kind: "paragraph",
        body: "Die Aufsparrendämmung ist bauphysikalisch die beste Variante. Die Dämmebene umhüllt die gesamte Sparrenkonstruktion, sodass weder Wärmebrücken noch Schimmelrisiken an den Sparrenflanken entstehen. Der U-Wert erreicht 0,15 W/(m²K) und darunter, was selbst Effizienzhaus-Niveaus ermöglicht. Der Wohnraum bleibt voll erhalten. Die entscheidende Voraussetzung: Das Dach muss komplett neu eingedeckt werden. Das ist nur wirtschaftlich, wenn ohnehin eine Neueindeckung ansteht — also alle 50–80 Jahre.",
      },

      { kind: "heading", level: 2, text: "Zwischensparrendämmung: Der pragmatische Standard" },
      {
        kind: "paragraph",
        body: "Die Zwischensparrendämmung ist die am häufigsten ausgeführte Methode bei Bestandsbauten. Dach bleibt dicht, Dachdecker muss nicht aufs Dach — die Arbeit passiert raumseitig. Günstiger als Aufsparren, in der Regel BAFA-förderfähig, und oft Raum für Raum ausführbar. Der bauphysikalische Haken: An den Sparren wandert Wärme nach außen („Wärmebrücken“), und die Dampfbremse muss absolut luftdicht verklebt sein — sonst kondensiert Raumluft in der Dämmung. Das ist der Punkt, an dem DIY-Projekte regelmäßig scheitern und Schimmel entsteht.",
      },

      { kind: "heading", level: 2, text: "Die dritte Option: Einblasdämmung" },
      {
        kind: "paragraph",
        body: "Wenn das Dach eine abgehängte Decke hat oder der Sparrenzwischenraum bereits mit einem schlechten alten Dämmstoff ausgefüllt ist, kommt die Einblasdämmung infrage. Zelluloseflocken oder Holzfaserflocken werden maschinell in die Hohlräume geblasen. Das geht schnell, ist sauber und kostet 40–70 €/m². Nicht ganz so gut wie Aufsparren, aber eine faire Lösung für Altbauten, wo eine klassische Zwischensparrendämmung logistisch schwierig ist. Voraussetzung: stabile Raumbegrenzung unten und Unterspannbahn oben.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Berliner Altbau: GEG und typische Gründerzeit-Dächer" },
      {
        kind: "paragraph",
        body: "Das Gebäudeenergiegesetz (GEG) verlangt bei einer Komplettsanierung der Dachfläche einen U-Wert von höchstens 0,24 W/(m²K). Typische Berliner Gründerzeit-Dächer haben Sparrenhöhen von 16–20 cm — damit erreicht man mit Zwischensparrendämmung genau diesen Wert, wenn man hochwertige Mineralwolle (WLG 032) verwendet. Bessere Werte erfordern entweder Untersparren-Aufdopplung (zusätzliche Dämmung unter der Sparrenlage) oder komplette Aufsparrendämmung. Für Effizienzhaus-Förderniveaus sind die Anforderungen noch strenger — da kommt man um Aufsparren- oder Kombi-Lösungen kaum herum.",
      },

      { kind: "heading", level: 2, text: "Warum das ein Meisterbetrieb machen muss" },
      {
        kind: "paragraph",
        body: "Dachdämmung ist der Bereich, in dem Laien und unerfahrene Handwerker am meisten falsch machen. Drei Punkte entscheiden über Erfolg oder Schimmelschaden: erstens die Taupunktberechnung (wo im Aufbau kondensiert Wasser?), zweitens die Dampfbremse (muss absolut luftdicht, an jedem Sparren, an jeder Durchdringung verklebt sein), drittens die Hinterlüftung (fehlt sie, trocknet der Dachaufbau nie aus). Wir berechnen jeden Aufbau vorab mit Simulation, installieren fachgerecht und dokumentieren die Ausführung. Das ist nicht nur Qualitätsversprechen — ohne Fachunternehmer-Bescheinigung fließt auch keine Förderung.",
      },

      { kind: "heading", level: 2, text: "Förderung und iSFP-Bonus" },
      {
        kind: "paragraph",
        body: "Über BAFA BEG EM gibt es 15 % Zuschuss auf die förderfähigen Kosten, mit iSFP-Bonus 20 % (also z. B. 12.000 € Zuschuss bei 60.000 € förderfähigen Kosten). Zusätzlich ist die Dachdämmung über § 35c EStG steuerlich absetzbar (alternativ zur BAFA, nicht kombiniert). Als BAFA-anerkannter Energieberater erstellen wir den iSFP direkt im Haus — kein externer Berater nötig, 5 %-Bonus automatisch dabei. Das verschiebt die Wirtschaftlichkeit deutlich Richtung Aufsparrendämmung.",
      },
    ],
    meisterempfehlung:
      "Wenn ohnehin eine Dach-Neueindeckung ansteht: Aufsparren. Punkt. Bleibt die Eindeckung in Ordnung und es geht nur um Energieeinsparung: Zwischensparren plus saubere Dampfbremse plus BAFA-Förderung ist der pragmatische Königsweg. Wir entscheiden das nie pauschal, sondern rechnen beide Varianten durch — inklusive erwartbarer Heizkostenersparnis und Amortisation nach Förderung. Das Ergebnis zeigen wir Ihnen als klares Entscheidungsblatt.",
    faqs: [
      {
        question: "Kann ich die Zwischensparrendämmung selbst machen?",
        answer:
          "Rein mechanisch ja. Sinnvoll ist es aber nicht — der kritische Teil ist nicht das Einlegen der Dämmung, sondern die luftdichte Verklebung der Dampfbremse. Fehler dort führen zu Kondensat in der Dämmung, das über Monate unsichtbar bleibt und dann als Schimmel oder Holzschäden auftritt. Dazu verlieren Sie die BAFA-Förderung, die nur bei Ausführung durch einen Fachbetrieb greift.",
      },
      {
        question: "Welchen U-Wert verlangt das GEG für Dachdämmung?",
        answer:
          "Bei einer Sanierung der gesamten Dachfläche schreibt das GEG aktuell 0,24 W/(m²K) oder besser vor. Wer BAFA-Förderung beantragt, muss 0,14 W/(m²K) erreichen — das geht mit Zwischensparren allein meist nicht, sondern erfordert Aufsparrendämmung oder Kombination. Einzelne Maßnahmen an bewohnbaren Dachgeschossen lockern die Anforderungen, aber bei der Förderung bleibt's streng.",
      },
      {
        question: "Holzfaser oder Mineralwolle — welches Material ist besser?",
        answer:
          "Kurz: Mineralwolle ist günstiger und hat den minimal besseren Winter-Dämmwert. Holzfaser kostet 30–50 % mehr, bietet aber deutlich besseren sommerlichen Hitzeschutz und ist diffusionsoffen. Für bewohnte Dachgeschosse in Berlin — wo Sommerhitze zunehmend ein Problem ist — lohnt Holzfaser fast immer. Details haben wir im separaten Ratgeber zu Holzfaser vs. Mineralwolle.",
      },
      {
        question: "Wie lange dauert eine Zwischensparrendämmung pro Raum?",
        answer:
          "Ein durchschnittliches Dachgeschoss-Zimmer (15–25 m² Dachschräge) wird in 1–2 Tagen fertig: Abnahme alter Verkleidung, Einbau Dämmung, Dampfbremse, neue Verkleidung, Malerfertig. Die gesamte Dachfläche eines Einfamilienhauses ist meist in 5–10 Werktagen erledigt, bewohnbar bleibt das Haus in der Regel.",
      },
      {
        question: "Was bringt der iSFP-Bonus konkret in Euro?",
        answer:
          "Bei einer Dachdämmung mit 40.000 € förderfähigen Kosten: 15 % BAFA-Grundförderung = 6.000 €, mit iSFP-Bonus von 5 % zusätzlich 2.000 € — also 8.000 € Zuschuss statt 6.000 €. Der iSFP kostet typischerweise 1.000–1.300 € (davon 50 % BAFA-Förderung = effektiv 500–650 €), lohnt sich also bereits bei einer einzigen mittelgroßen Maßnahme.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
      otherRatgeber: [
        { slug: "holzfaserdaemmung-vs-mineralwolle", label: "Holzfaser vs. Mineralwolle — Material-Vergleich" },
        { slug: "wann-dach-sanieren", label: "Wann muss ein Dach saniert werden?" },
      ],
    },
  },

  // ─── Ratgeber 3: EPDM vs Bitumen ───────────────────────────────────────
  {
    slug: "epdm-vs-bitumen-flachdach",
    category: "Flachdach",
    title: "EPDM oder Bitumen? Welche Flachdach-Abdichtung hält länger",
    metaTitle: "EPDM vs. Bitumen Flachdach: Vergleich | St. Masch Berlin",
    metaDescription:
      "EPDM oder Bitumen für Ihr Flachdach? Lebensdauer, Kosten und Wartung im direkten Vergleich vom Dachdeckermeister aus Berlin.",
    keyword: "epdm vs bitumen flachdach",
    summary:
      "Welche Abdichtung ist für Ihr Flachdach die richtige? Langlebigkeit, Preis und Wartungsaufwand im ehrlichen Vergleich.",
    intro:
      "Das Flachdach ist die Achillesferse vieler Gebäude: Solange die Abdichtung hält, denkt niemand daran — und sobald sie nachgibt, ist der Schaden meist schon im Inneren. Die zentrale Entscheidung heißt seit Jahrzehnten: Bitumen oder EPDM? Beide Systeme haben ihre Berechtigung, aber sie sind alles andere als gleichwertig.",
    blocks: [
      { kind: "cta", variant: "soft" },
      { kind: "heading", level: 2, text: "Bitumen: Der bewährte Klassiker" },
      {
        kind: "paragraph",
        body: "Bitumen-Schweißbahnen sind seit den 1960er Jahren der deutsche Standard. Mehrere Lagen (typisch zwei) werden mit dem Brenner auf die Dachfläche geschweißt, Nähte und Anschlüsse einzeln überlappt. Moderne Elastomer-Bitumenbahnen (E-Bitumen) erreichen 20–30 Jahre Lebensdauer. Das Material ist günstig, fehlerverzeihend und jeder Dachdecker kann es verlegen. Die Nachteile: viele Nähte bedeuten viele potenzielle Leckagestellen, bei hohen Sommertemperaturen fließt das Material minimal weiter, und nach 25 Jahren wird es spröde und rissig.",
      },

      { kind: "heading", level: 2, text: "EPDM: Die langlebige Premium-Lösung" },
      {
        kind: "paragraph",
        body: "EPDM (Ethylen-Propylen-Dien-Kautschuk) ist synthetischer Kautschuk, werkseitig in großen Bahnen bis 15 × 30 m gefertigt. Das heißt: Ein Einfamilienhaus-Flachdach kommt oft mit einer einzigen Bahn aus — ohne Nähte. Elastisch bis −40 °C, UV-stabil, wartungsarm. Lebensdauer 40–50 Jahre, teilweise dokumentierte 60+ Jahre. Der Nachteil: höhere Anschaffung und empfindlich gegen mechanische Beschädigung durch scharfe Kanten — was bei Gründach-Aufbau relevant ist.",
      },

      { kind: "heading", level: 2, text: "Dritte Option: Kunststoffbahnen (PVC, FPO/TPO)" },
      {
        kind: "paragraph",
        body: "PVC- oder FPO-Bahnen sind die dritte große Flachdach-Variante. Sie werden maschinell heißluftgeschweißt (keine offene Flamme, wichtig bei brandempfindlicher Umgebung). Lebensdauer 25–35 Jahre, UV-stabil, günstiger als EPDM. PVC enthält Weichmacher, die langfristig ausdünsten — umweltpolitisch umstritten. FPO (Flexible Polyolefine) ist die modernere, unproblematischere Variante. Für Gewerbeflachdächer ist FPO oft das Material der Wahl.",
      },

      { kind: "heading", level: 2, text: "Flüssigabdichtung für Sonderfälle" },
      {
        kind: "paragraph",
        body: "Flüssigkunststoffe (PMMA, PU) werden nass aufgetragen und härten zu einer fugenlosen Membran aus. Unschlagbar bei komplizierten Anschlüssen, Durchdringungen und Sanierungen bestehender Dächer — dort, wo Bahnen nicht sauber zugeschnitten werden können. Lebensdauer 20–30 Jahre, Preis höher als Bahnsysteme. Nicht für große, einfache Flächen gedacht, sondern für Detaillösungen.",
      },

      { kind: "heading", level: 2, text: "Direkter Vergleich" },
      {
        kind: "table",
        columns: ["Kriterium", "Bitumen", "EPDM", "FPO"],
        rows: [
          ["Lebensdauer", "20–30 Jahre", "40–50 Jahre", "25–35 Jahre"],
          ["Preis pro m²", "60–90 €", "80–130 €", "70–110 €"],
          ["UV-Beständigkeit", "Mittel", "Sehr hoch", "Hoch"],
          ["Wurzelfestigkeit (Gründach)", "Nur mit Schutzschicht", "Werkseitig oft gegeben", "Werkseitig oft gegeben"],
          ["Reparierbarkeit", "Sehr gut", "Gut (Kleber)", "Gut (Heißluftschweißung)"],
          ["Nahtanfälligkeit", "Viele Nähte → Risiko", "Wenig bis keine Nähte", "Heißluftnähte = stabil"],
          ["Geeignet für", "Alles bis mittlere Ansprüche", "Wohngebäude, Gründach", "Gewerbe, Industrie"],
        ],
      },

      { kind: "heading", level: 2, text: "Berliner Kontext: Flachdächer überall" },
      {
        kind: "paragraph",
        body: "Berlin hat eine der höchsten Flachdachdichten Deutschlands — durch Plattenbau-Siedlungen, Gewerbegebäude und moderne Neubauten. Bei Bestandsgebäuden aus den 70er–90er Jahren liegen meist mehrere Lagen Bitumen in unterschiedlichem Alterungszustand. Wir prüfen bei jeder Flachdach-Sanierung zuerst, ob eine Komplettsanierung oder eine gezielte Reparatur wirtschaftlicher ist. Bei der Entscheidung spielen auch Themen wie eine spätere Dachbegrünung oder PV-Anlage eine Rolle — EPDM lässt beides problemlos zu, alte Bitumenbahnen oft nicht.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Die Gründach-Solar-Entscheidung treibt die Materialwahl" },
      {
        kind: "paragraph",
        body: "Wenn Sie heute ein Flachdach abdichten, planen Sie nicht nur für heute. Ein Gründach bringt in Berlin über GründachPLUS 95–180 €/m² Zuschuss. Eine PV-Anlage ist bis 30 kWp mehrwertsteuer­frei und zusätzlich über SolarPLUS förderfähig. Beides gleichzeitig gibt nochmal einen Kombi-Bonus von 40 €/m². Wenn Sie auch nur eine der beiden Optionen für die nächsten 10 Jahre einplanen, sollten Sie bei der Abdichtung direkt wurzelfestes EPDM oder FPO wählen — eine nachträgliche Umrüstung kostet mehr, als die Premium-Abdichtung von Anfang an.",
      },

      { kind: "heading", level: 2, text: "Warum fachgerechte Ausführung entscheidet" },
      {
        kind: "paragraph",
        body: "Eine Flachdach-Abdichtung ist kein Produkt, sondern eine Ausführungsleistung. Gut 90 % aller Schäden passieren an Anschlüssen — Attika, Ablauf, Dachrand, Schornstein. Dort braucht es Erfahrung, saubere Geometrie und passende Formteile. Wir arbeiten mit Systemanbietern, die jeweils passende Form- und Eckstücke liefern — und dokumentieren den Einbau. Die Herstellergarantie (oft 10–15 Jahre bei Bahnabdichtungen) greift nur bei Fachunternehmer-Ausführung mit Prüfprotokoll.",
      },
    ],
    meisterempfehlung:
      "Für ein Einfamilienhaus-Flachdach, das 30+ Jahre halten soll, und wo eventuell später ein Gründach oder PV drauf kommt: EPDM. Für ein einfaches Garagen- oder Carport-Dach mit begrenzter Nutzungsdauer: zweilagiges Bitumen. Für Gewerbeflachdächer ab 300 m²: FPO. Wir entscheiden das nie pauschal, sondern nach Nutzung, Umfeld und Zukunftsplänen — und zeigen Ihnen eine ehrliche Amortisationsrechnung.",
    faqs: [
      {
        question: "Kann man eine neue Bitumenbahn auf eine bestehende EPDM-Abdichtung legen?",
        answer:
          "Nein. Bitumen und EPDM-Kautschuk sind chemisch inkompatibel — das Bitumen löst das EPDM über die Jahre an, die Abdichtung wird undicht. Umgekehrt (EPDM auf Bitumen) geht nur mit einer Trennlage, meist Filzvlies, weil Bitumen-Weichmacher das EPDM angreifen können. Wenn das bestehende Flachdach saniert wird, wird in aller Regel das alte Material komplett entfernt oder überdeckt mit einer geschlossenzelligen Dämmplatte.",
      },
      {
        question: "Wann muss ein Flachdach saniert werden?",
        answer:
          "Eindeutige Warnsignale: sichtbare Risse, Blasen, stehendes Wasser (Pfützen über 24 h nach Regen), feuchte Flecken an Innendecken, Salzausblühungen. Weichere Signale: Alter der Abdichtung nähert sich 20 Jahren bei Bitumen, 40 Jahren bei EPDM. Wir empfehlen eine jährliche Inspektion — kleine Schäden kosten 150–400 €, eine Vollsanierung im Schadensfall 80–150 €/m². Die Rechnung ist einfach.",
      },
      {
        question: "Was kostet eine Flachdach-Sanierung in Berlin?",
        answer:
          "Grobe Orientierung für ein 80 m² Einfamilienhaus-Flachdach (Rückbau alte Abdichtung, Dämmung erneuern, Abdichtung neu, Anschlüsse, Ablauf): Bitumen ca. 8.000–12.000 €, EPDM ca. 11.000–16.000 €, FPO ähnlich. Dämmung kommt mit 30–60 €/m² dazu, ist aber BAFA-förderfähig.",
      },
      {
        question: "Ist EPDM wirklich unverwüstlich?",
        answer:
          "Fast. EPDM verrottet nicht, ist UV-stabil und kältebeständig. Schwachpunkt ist mechanische Beschädigung — scharfe Kanten, spitze Gegenstände oder unsachgemäßes Betreten können die Membran aufreißen. Darum schützen wir EPDM bei Gründach oder begehbarem Dach mit einem Geotextil-Vlies und/oder einer Schutzlage.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/leistungen/flachdach", label: "Zu unserer Flachdach-Leistung" },
      otherRatgeber: [
        { slug: "gruendach-solar-kombination", label: "Gründach + Solar kombinieren" },
        { slug: "wann-dach-sanieren", label: "Wann muss ein Dach saniert werden?" },
      ],
    },
  },

  // ─── Ratgeber 4: Asbest ────────────────────────────────────────────────
  {
    slug: "asbest-dach-erkennen",
    category: "Dach",
    title: "Asbest am Dach erkennen: Worauf Hausbesitzer achten müssen",
    metaTitle: "Asbest am Dach erkennen & sicher sanieren | St. Masch Berlin",
    metaDescription:
      "Wie Sie Asbest am Dach erkennen, was eine Sanierung kostet und warum nur TRGS-519-zertifizierte Betriebe das machen dürfen.",
    keyword: "asbest dach erkennen",
    summary:
      "Asbest am Dach erkennen, rechtssicher sanieren und sicher entsorgen — was Hausbesitzer in Berlin wissen müssen.",
    intro:
      "Bis 1993 war Asbest in Deutschland zugelassen und wurde in Millionen Dächern verbaut — als Wellplatten, Schindeln, Fassadenplatten, auch in Klebstoffen und Abdichtungen. Wer heute ein Haus aus den 60er bis frühen 90er Jahren besitzt, hat statistisch hohe Chancen, dass Asbest verbaut ist. Dieser Artikel erklärt, wie Sie es erkennen, warum Sie nichts selbst machen dürfen — und was eine fachgerechte Sanierung kostet.",
    blocks: [
      {
        kind: "callout",
        variant: "warning",
        body: "Niemals selbst bohren, schneiden, schleifen oder abbrechen, wenn Asbest vermutet wird. Jede Beschädigung setzt Fasern frei, die eingeatmet Jahrzehnte später Lungenkrebs und Asbestose auslösen können. Diese Hinweise sind kein Witz — die Gesetzgebung ist entsprechend streng.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Wo Asbest am Dach vorkommt" },
      {
        kind: "list",
        items: [
          "Asbestzement-Wellplatten (sogenanntes „Eternit“ — Markenname, meist grau-anthrazit, oft auf Garagen, Schuppen, Hallen und älteren Wohnhäusern)",
          "Asbestzement-Schindeln (klein, rautenförmig oder rechteckig, oft auf Bungalows und Bauten der 70er)",
          "Fassadenplatten (meist großformatig, glatt oder strukturiert, auf Wohnhäusern der 60er–80er)",
          "Dachrinnen und Fallrohre aus Asbestzement (werden häufig übersehen)",
          "Bitumen-Dachpappe mit Asbesteinlage (vor allem ältere Flachdach-Abdichtungen)",
          "Kleberschichten unter Vinyl-Bodenbelägen oder Dämmstoffen (als Kontamination der Sanierung relevant)",
          "Asbest-Pappen als Dichtungsmaterial an Kaminen und Brandwänden",
        ],
      },

      { kind: "heading", level: 2, text: "Wie man es erkennt — und warum nur ein Labortest sicher ist" },
      {
        kind: "paragraph",
        body: "Optische Indizien sind das Baujahr (vor 1993 = Asbestverdacht), das Material (hart, zement­artig, bei Wellplatten typisch grau-anthrazit), und der Einbau­kontext. Sicher ist das aber nicht — es gibt zementgebundene Faserplatten aus Kunststoff, die genauso aussehen und kein Asbest enthalten. Die einzig zuverlässige Methode ist eine Laborprobe: Ein kleines Materialstück (1–2 g) wird luftdicht entnommen und im Labor mikroskopisch untersucht. Kosten: 30–80 € pro Probe, Ergebnis in 3–7 Tagen. Wir nehmen die Probe fachgerecht und leiten sie ein.",
      },

      { kind: "heading", level: 2, text: "Rechtliche Lage: Wer darf Asbest sanieren?" },
      {
        kind: "paragraph",
        body: "Asbestarbeiten dürfen in Deutschland nur Betriebe mit gültiger Sachkunde nach TRGS 519 ausführen. Das ist keine formale Hürde, sondern eine verpflichtende Qualifikation mit Schulung und Prüfung. Jede Asbest­sanierung muss mindestens 7 Tage vorher bei der zuständigen Berliner Gewerbeaufsicht angezeigt werden, und das Material darf ausschließlich auf dafür zugelassenen Deponien entsorgt werden. Verstöße werden als Ordnungswidrigkeit oder Straftat verfolgt. Steve Masch hat die TRGS-519-Sachkunde — wir dürfen das und melden korrekt an.",
      },

      { kind: "heading", level: 2, text: "Ablauf einer fachgerechten Asbest-Dachsanierung" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Beprobung: Wir entnehmen eine Materialprobe, bestimmen den Asbesttyp und schätzen die Dringlichkeit ein.",
          "Anzeige bei der Gewerbeaufsicht: Meldung der Arbeiten mit Umfang, Zeitraum, Schutzmaßnahmen.",
          "Absicherung der Baustelle: Absperrung, Einhausung bei Bedarf, Warnhinweise, Staubschutz.",
          "Persönliche Schutzausrüstung: Schutzanzüge, Atemschutzmasken P3, Einwegarbeitskleidung — für jeden Arbeiter Pflicht.",
          "Demontage ohne Brechen: Die Platten werden geschraubt entnommen, nicht abgebrochen. Jedes Brechen setzt Fasern frei.",
          "Sofortverpackung: Das Material wird in reißfeste, doppelt verschweißte Folie verpackt, BigBags oder Kantenschutz für den Transport.",
          "Entsorgung: Transport zu einer zugelassenen Deponie, Entsorgungsnachweise für Sie zum Archivieren.",
          "Neueindeckung: Direkt im Anschluss wird das Dach neu gedeckt — meist auf den bestehenden Sparren, mit neuen Unterspannbahnen, Dämmung und moderner Eindeckung.",
        ],
      },

      { kind: "heading", level: 2, text: "Kosten: Was eine Asbest-Dachsanierung in Berlin kostet" },
      {
        kind: "paragraph",
        body: "Die Kosten setzen sich aus Demontage (mit Schutzmaßnahmen), Entsorgung und Neueindeckung zusammen. Grobe Orientierung für ein Einfamilienhaus mit 120 m² Dachfläche in Berlin: Asbest-Demontage + Entsorgung ca. 6.000–12.000 € (je nach Menge und Zugänglichkeit), Neueindeckung 15.000–28.000 € je nach gewähltem Material (siehe Ratgeber Tondachziegel vs. Betondachsteine). Insgesamt also 21.000–40.000 € für ein typisches Projekt. Wer die energetische Sanierung mit einbindet, bekommt über BAFA 15–20 % Zuschuss auf die Dämmarbeiten und einen erheblichen Teil abgedeckt.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Warum die Sanierung auch ein Chance ist" },
      {
        kind: "paragraph",
        body: "Wer ein Asbestdach sanieren muss, sanft gezwungen zur Modernisierung ist, kann die Gelegenheit nutzen: ordentliche Dämmung rein, moderne Eindeckung, optional PV-Anlage gleich montiert. Die Baustelle ist sowieso eingerichtet, das Gerüst steht, die Kosten addieren sich nur anteilig. Eine Asbest-Sanierung ohne gleichzeitige energetische Aufwertung ist fast immer ein verpasste Chance.",
      },

      { kind: "heading", level: 2, text: "Was Sie jetzt tun sollten" },
      {
        kind: "paragraph",
        body: "Wenn Sie Verdacht haben: Nichts anfassen, nichts bohren, nichts selbst abtragen. Ruhe bewahren — solange Asbest unbeschädigt liegt, geht keine akute Gefahr von ihm aus. Rufen Sie einen TRGS-519-zertifizierten Fachbetrieb an, lassen Sie eine Probe nehmen und planen Sie die Sanierung in Ruhe. Wir kommen für eine kostenlose Erstbegehung vor Ort, schätzen Umfang und Kosten ein und besprechen Optionen — ohne Druck.",
      },
    ],
    meisterempfehlung:
      "Asbest ist kein DIY-Projekt. Selbst Kleinstarbeiten — eine gebrochene Welle ersetzen, ein Loch bohren — setzen erhebliche Mengen Fasern frei. Wer hier unachtsam arbeitet, schadet seiner Familie und den Nachbarn. Als TRGS-519-zertifizierter Betrieb machen wir das sicher, rechtskonform und in einem Rutsch mit der Neueindeckung. Sie bekommen alle Entsorgungsnachweise für Ihre Unterlagen — das ist beim Hausverkauf später relevant.",
    faqs: [
      {
        question: "Ist Asbest am Dach gefährlich, wenn man es nicht anfasst?",
        answer:
          "Solange das Material unbeschädigt ist und keine Fasern abgegeben werden, ist das Risiko gering. Gefährlich wird es bei Beschädigung durch Hagel, Sturm, Bohren, Schleifen, Brechen oder Witterung (über Jahrzehnte wird die Oberfläche porös und Fasern lösen sich). Statistisch sind Asbestdächer nach 30+ Jahren oft schon „verwittert“ — eine Sanierung ist dann dringend, auch ohne akuten Anlass.",
      },
      {
        question: "Was kostet eine Asbestprobe?",
        answer:
          "Eine Laborprobe kostet 30–80 € plus Anfahrt. Wir nehmen die Probe im Rahmen unserer kostenlosen Erstbegehung mit, Sie zahlen nur die Laborgebühr. Innerhalb einer Woche haben Sie das Ergebnis — und können dann entscheiden, ob und wann saniert wird.",
      },
      {
        question: "Muss ich eine Asbest-Sanierung melden?",
        answer:
          "Ja — aber die Meldung macht der ausführende Fachbetrieb. Mindestens 7 Tage vor Beginn geht eine Anzeige an die Berliner Gewerbeaufsicht mit Umfang, Menge, Entsorgungsnachweisen und Schutzmaßnahmen. Ohne diese Meldung ist die Arbeit illegal. Wir erledigen das für Sie komplett.",
      },
      {
        question: "Kann ich das Asbestdach einfach überdecken lassen?",
        answer:
          "In Ausnahmefällen ja — nur wenn das Asbestdach noch voll intakt ist, nicht beschädigt, und die neue Eindeckung nicht in die Asbestebene einschneidet. In der Praxis ist das selten sinnvoll: die Gelegenheit zur Dämmungs-Erneuerung wird verpasst, Förderung gibt es dann oft nicht, und beim späteren Hausverkauf ist das Asbest immer noch drin (offenbarungspflichtig). Wir empfehlen deshalb fast immer die Komplettsanierung.",
      },
      {
        question: "Gibt es Förderung für eine Asbest-Sanierung?",
        answer:
          "Für die reine Asbest-Entsorgung gibt es keine direkte Förderung — das ist Eigentümer-Pflicht. Für die energetische Neueindeckung (Dämmung + moderne Eindeckung), die im gleichen Zug gemacht wird, greifen die normalen BAFA- und KfW-Förderungen (bis 20 % Zuschuss). In Berlin fördert die IBB teilweise Schadstoff-Sanierungen im Rahmen der Modernisierungs­programme — wir prüfen das fallweise.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
      otherRatgeber: [
        { slug: "wann-dach-sanieren", label: "Wann muss ein Dach saniert werden?" },
        { slug: "tondachziegel-vs-betondachsteine", label: "Ton vs. Beton — Material-Vergleich" },
      ],
    },
  },

  // ─── Ratgeber 5: Mikro vs String ───────────────────────────────────────
  {
    slug: "mikrowechselrichter-vs-string-wechselrichter",
    category: "Solar",
    title: "Mikrowechselrichter vs. String-Wechselrichter: Was passt zu Ihrem Dach?",
    metaTitle: "Mikrowechselrichter vs. String: PV-Vergleich | St. Masch Berlin",
    metaDescription:
      "Mikrowechselrichter oder String? Vorteile bei Teilverschattung, Sicherheit und Monitoring — erklärt vom Enphase-Partner in Berlin.",
    keyword: "mikrowechselrichter vs string wechselrichter",
    summary:
      "Die Wechselrichter-Frage entscheidet über Ertrag, Sicherheit und Monitoring einer PV-Anlage. Warum die meisten Anbieter nicht offen darüber reden.",
    intro:
      "Bei einer PV-Anlage sprechen alle über die Module — aber die zweitwichtigste Entscheidung ist der Wechselrichter. Er wandelt den Gleichstrom der Module in netzgerechten Wechselstrom um, und seine Bauart bestimmt mehr als man denkt: wie viel Ertrag am Ende im Zähler ankommt, wie sicher das Dach ist und was Sie auf dem Handy sehen.",
    blocks: [
      { kind: "cta", variant: "soft" },
      { kind: "heading", level: 2, text: "String-Wechselrichter: Das klassische Prinzip" },
      {
        kind: "paragraph",
        body: "Bei einem String-Wechselrichter werden alle Module in Reihe geschaltet — wie eine Kette. Am Ende der Kette hängt ein großer zentraler Wechselrichter, typisch im Keller oder Hausanschlussraum. Alle Module arbeiten mit derselben Spannung und demselben Strom. Das ist einfach, günstig und jahrzehntelang Standard gewesen. Aber es hat zwei strukturelle Schwächen: Das schwächste Modul bestimmt die Leistung des gesamten Strings. Und auf dem Dach steht dauerhaft Gleichstrom mit 400–600 Volt — ein realer Brandrisikofaktor bei Beschädigung.",
      },

      { kind: "heading", level: 2, text: "Mikrowechselrichter: Jedes Modul für sich" },
      {
        kind: "paragraph",
        body: "Beim Mikrowechselrichter-System (Enphase ist der Marktführer) bekommt jedes Modul einen eigenen kleinen Wechselrichter direkt am Modul montiert. Der Gleichstrom wird sofort dort in Wechselstrom gewandelt. Auf dem Dach liegt also bereits 230 V Wechselstrom — keine gefährliche DC-Spannung. Jedes Modul arbeitet unabhängig, mit eigener Leistungsoptimierung (MPPT). Verschattung, Verschmutzung oder Defekt eines Moduls reduziert nur dieses eine Modul, nicht den gesamten String.",
      },

      { kind: "heading", level: 2, text: "Direkter Vergleich" },
      {
        kind: "table",
        columns: ["Kriterium", "String-WR", "Mikro-WR (Enphase)"],
        rows: [
          ["Preis pro kWp (ca.)", "+/- Standard", "+10–15 %"],
          ["Ertrag bei Teilverschattung", "Reduziert gesamten String", "Nur am betroffenen Modul"],
          ["DC-Spannung auf Dach", "400–600 V dauerhaft", "Keine (Wechselstrom direkt)"],
          ["Brandverhalten", "DC-Brandrisiko bei Beschädigung", "Rapid Shutdown, kein DC-Lichtbogen"],
          ["Monitoring", "Nur Gesamtertrag der Anlage", "Jedes Modul einzeln"],
          ["Erweiterbarkeit", "An Anlagengröße fixiert", "Beliebig modulweise erweiterbar"],
          ["Lebensdauer Wechselrichter", "10–15 Jahre (zentral)", "20–25 Jahre (verteilt)"],
          ["Garantie", "5–10 Jahre", "25 Jahre (Enphase IQ8)"],
        ],
      },

      { kind: "heading", level: 2, text: "Teilverschattung — das stärkste Argument für Mikros" },
      {
        kind: "paragraph",
        body: "Kaum ein Berliner Dach ist den ganzen Tag vollständig sonnenbeschienen. Schornsteine, Gauben, Sat-Schüsseln, Nachbargebäude, Straßenbäume — Verschattung ist die Regel, nicht die Ausnahme. Bei einem String-Wechselrichter zieht das verschattete Modul den ganzen String nach unten. Wenn ein Modul durch den Nachbarkamin nur 30 % Leistung liefert, kann das 25 % Ertragsverlust auf der gesamten Anlage bedeuten. Mikrowechselrichter verhindern das: Das betroffene Modul liefert 30 %, alle anderen 100 %. Über ein Jahr gerechnet sind 5–15 % Mehrertrag realistisch — exakt der Mehrpreis bei der Anschaffung.",
      },

      { kind: "heading", level: 2, text: "Sicherheit: Kein Gleichstrom auf dem Dach" },
      {
        kind: "paragraph",
        body: "DC-Brände sind die gefürchtetste Komplikation bei PV-Anlagen. Wenn in einem DC-String (bis 600 V) ein Lichtbogen entsteht — etwa durch eine lockere Klemme oder eine Beschädigung — brennt er weiter, solange die Sonne scheint. Kein normaler Leitungsschutz schaltet ab, keine Feuerwehr kann den Strom „abstellen“. Mikrowechselrichter lösen dieses Problem konstruktionsbedingt: Auf dem Dach liegt 230 V AC, und ein sogenannter Rapid Shutdown schaltet bei Netzunterbrechung jedes Modul sofort spannungsfrei. Für Feuerwehren ist das ein relevantes Argument — einige Berufsfeuerwehren empfehlen explizit Mikrowechselrichter für Wohngebäude.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Monitoring: Sie sehen, was Ihr Dach tut" },
      {
        kind: "paragraph",
        body: "Die Enphase App zeigt jedes einzelne Modul in Echtzeit — grün, wenn es produziert, gelb bei Minderleistung, rot bei Ausfall. Sie sehen sofort, welches Modul Probleme hat, und wir sehen es auch (mit Ihrer Freigabe). Ein Defekt wird behoben, bevor Sie es merken. Bei String-Anlagen sehen Sie nur den Gesamtertrag — wenn eine Anlage statt 10.000 kWh nur 9.200 kWh liefert, fällt das meist erst nach Monaten auf, und die Ursache bleibt oft diffus.",
      },

      { kind: "heading", level: 2, text: "Warum wir auf Enphase setzen" },
      {
        kind: "paragraph",
        body: "Wir sind als Dachdeckermeister die, die am Ende des Tages auf dem Dach stehen und eine Anlage in die Eindeckung einbinden. Für uns zählt: Was hält 25 Jahre, macht wenig Service-Aufwand und bringt dem Kunden die maximale Energieausbeute ohne Sicherheitsrisiko? Nach Jahren mit verschiedenen Systemen haben wir für Enphase entschieden — aus Überzeugung, nicht weil wir Partner sein mussten. Die 25 Jahre Produktgarantie auf IQ8-Mikrowechselrichter sind marktweit unerreicht. Für Sie heißt das: eine Anlage, die so lange hält wie die Module selbst.",
      },

      { kind: "heading", level: 2, text: "Förderung und Kostenrahmen" },
      {
        kind: "paragraph",
        body: "PV-Anlagen bis 30 kWp sind mehrwertsteuer­frei (0 % USt), was die Anschaffung effektiv um 19 % reduziert. In Berlin läuft zusätzlich SolarPLUS Berlin: pauschale Zuschüsse für Zählerschrank, Speicher und PV-Montage. Die KfW 270 stellt zinsgünstige Kredite bereit. Ein typisches Einfamilienhaus-System (8–12 kWp) mit Enphase-Mikrowechselrichtern kostet 18.000–26.000 € brutto (entspricht netto 15.000–22.000 €), abzüglich SolarPLUS-Zuschüsse. Die Amortisation liegt typisch bei 8–12 Jahren.",
      },
    ],
    meisterempfehlung:
      "Wenn Ihr Dach Verschattung hat (und das hat in Berlin fast jedes), wenn Sie die Anlage 20+ Jahre laufen lassen wollen, oder wenn Sicherheit für Sie ein Thema ist — Mikrowechselrichter. Der Aufpreis von 10–15 % bei der Anschaffung holt sich die Anlage über Mehrertrag meist im ersten Jahrzehnt wieder. String-Wechselrichter sind wirtschaftlich nur bei einfachen, komplett unverschatteten Gewerbedächern mit großen Modulreihen. Bei Wohnhäusern in Berlin gehen wir fast ausnahmslos mit Enphase.",
    faqs: [
      {
        question: "Sind Mikrowechselrichter wirklich teurer?",
        answer:
          "Ja, bei der reinen Anschaffung. Ein typisches 10 kWp-System mit Mikrowechselrichtern liegt etwa 2.000–3.000 € über einer vergleichbaren String-Anlage. Durch Mehrertrag (Verschattungs­toleranz), niedrigere Service­kosten, längere Garantie und höhere Langzeit-Zuverlässigkeit amortisiert sich der Aufpreis fast immer innerhalb der ersten 10 Jahre.",
      },
      {
        question: "Kann ich einen bestehenden String-Wechselrichter durch Mikrowechselrichter ersetzen?",
        answer:
          "Technisch ja, praktisch meist nicht wirtschaftlich. Sie müssen alle Module neu verkabeln, die DC-Stringleitung durch eine AC-Struktur ersetzen und jedes Modul einzeln anschließen. Das rechnet sich nur, wenn ohnehin eine Sanierung oder Erweiterung ansteht. Beim Neubau einer Anlage ist die Entscheidung leicht.",
      },
      {
        question: "Was passiert, wenn ein Mikrowechselrichter ausfällt?",
        answer:
          "Nur das betroffene Modul fällt aus — alle anderen laufen weiter. Die App meldet den Defekt sofort, wir bekommen die Meldung ebenfalls (mit Ihrer Freigabe) und kommen zum Tausch. Enphase liefert Ersatzgeräte in der 25-Jahres-Garantie — in der Regel innerhalb weniger Tage. Bei einem zentralen String-Wechselrichter fällt dagegen die gesamte Anlage aus, bis Ersatz eingebaut ist.",
      },
      {
        question: "Brauche ich einen speziellen Zählerschrank für Enphase?",
        answer:
          "Ein moderner Zählerschrank ist ohnehin Voraussetzung für jede neue PV-Anlage — unabhängig vom Wechselrichter-Typ. Bei Bestandsbauten mit alten Zählerschränken wird meist ein Tausch fällig. Das ist über SolarPLUS Berlin pauschal förderfähig (ca. 500–1.000 €).",
      },
      {
        question: "Und der Stromspeicher — funktioniert der mit Mikrowechselrichtern?",
        answer:
          "Ja, Enphase bietet das komplett integrierte IQ Battery System. Der Speicher lädt sich direkt aus dem AC-Netz und ist vollständig in die Enphase-App eingebunden. Alles aus einer Hand, mit einer Garantie. Modular ab 3,5 kWh erweiterbar — so wachsen Sie mit steigendem Eigenverbrauch.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/solar", label: "Zu unserer Solar-Leistung" },
      otherRatgeber: [
        { slug: "gruendach-solar-kombination", label: "Gründach + Solar kombinieren" },
        { slug: "holzfaserdaemmung-vs-mineralwolle", label: "Dämmstoffe im Vergleich" },
      ],
    },
  },

  // ─── Ratgeber 6: Wann Dach sanieren ────────────────────────────────────
  {
    slug: "wann-dach-sanieren",
    category: "Dach",
    title: "Wann muss ein Dach saniert werden? 7 Warnsignale",
    metaTitle: "Wann Dach sanieren? 7 Warnsignale | St. Masch Berlin",
    metaDescription:
      "7 klare Anzeichen, dass Ihr Dach eine Sanierung braucht — und was passiert, wenn Sie zu lange warten. Vom Dachdeckermeister erklärt.",
    keyword: "wann dach sanieren",
    summary:
      "Sieben klare Warnsignale, die auf Sanierungsbedarf hindeuten — und was es kostet, wenn man zu lange wartet.",
    intro:
      "Die meisten Hauseigentümer denken erst an ihr Dach, wenn es reinregnet. Dann ist der Schaden meist teuer. Dabei zeigen sich erste Warnzeichen oft Jahre vorher — sichtbar vom Boden aus, wenn man weiß, worauf man achtet. Dieser Artikel zeigt sieben klare Signale, die keinen Aufschub dulden.",
    blocks: [
      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "1. Feuchtigkeit oder Wasserflecken im Dachgeschoss" },
      {
        kind: "paragraph",
        body: "Das eindeutigste Alarmsignal. Braune Verfärbungen an Sparren, feuchter Dämmstoff, Wasserränder auf Holz oder Rigipsdecken — das Dach ist bereits undicht. Je länger Sie warten, desto tiefer frisst sich die Feuchte in die Holzkonstruktion. Aus einem Schaden für 500 € wird schnell ein Statikproblem für 15.000 €. Dringlichkeit: sofort reagieren.",
      },

      { kind: "heading", level: 2, text: "2. Lose, gebrochene oder fehlende Ziegel" },
      {
        kind: "paragraph",
        body: "Schauen Sie mit einem Fernglas vom Boden oder vom Nachbarhaus aus aufs Dach. Einzelne verschobene Ziegel sind mit einer gezielten Reparatur in wenigen Stunden erledigt (150–400 €). Sind gleich an mehreren Stellen Ziegel locker, gebrochen oder fehlen sogar, ist die gesamte Eindeckung meist am Lebensende — dann lohnt Reparatur nicht mehr, sondern nur noch Neueindeckung. Dringlichkeit: nächste Trockenperiode.",
      },

      { kind: "heading", level: 2, text: "3. Starker Moos- und Algenbewuchs" },
      {
        kind: "paragraph",
        body: "Moos ist nicht nur Optik. Es zeigt, dass Wasser auf dem Dach stehen bleibt statt abzufließen — die Oberfläche der Ziegel ist porös geworden und saugt Feuchtigkeit auf. Das beschleunigt wiederum die Alterung. Vereinzelter Bewuchs ist normal, flächendeckendes Grün ein Warnzeichen. Eine Dachreinigung bringt nur kurzzeitig etwas, wenn die Substanz bereits angegriffen ist. Dringlichkeit: Inspektion innerhalb der nächsten Saison.",
      },

      { kind: "heading", level: 2, text: "4. Dachpappe brüchig oder bewegt sich" },
      {
        kind: "paragraph",
        body: "Vor allem bei Flachdächern und bei Gauben- oder Dachrand-Eindeckungen: Wenn die Dachpappe sichtbar Risse zeigt, sich abrollt oder an den Nahtstellen absteht, ist die Abdichtung nicht mehr dicht. Kleine lokale Reparaturen gehen, aber der Ersatz ist meist die bessere Lösung — die Alterung der restlichen Bahn läuft ja gleichmäßig weiter. Dringlichkeit: zeitnah, vor dem nächsten Starkregen.",
      },

      { kind: "heading", level: 2, text: "5. Steigende Heizkosten ohne andere Erklärung" },
      {
        kind: "paragraph",
        body: "Geht die Heizrechnung Jahr für Jahr hoch, obwohl sich Wohnverhalten und Thermostat nicht geändert haben? Oft liegt es an einer beschädigten oder fehlenden Dachdämmung. Über ein schlecht gedämmtes Dach entweicht bis zu 30 % der Heizwärme. Die Sanierung rechnet sich über die Energieeinsparung fast immer — über BAFA 15–20 % Zuschuss sogar schneller. Dringlichkeit: kein akuter Schaden, aber jedes verlorene Jahr kostet vierstellig.",
      },

      { kind: "heading", level: 2, text: "6. Das Dach ist älter als 40 Jahre und wurde nie saniert" },
      {
        kind: "paragraph",
        body: "Tondachziegel halten 80+ Jahre, Betondachsteine 40–60 Jahre. Aber die Unterspannbahn, die Lattung, die Bleiverwahrungen an Kamin und Gauben sowie die Dichtungen erreichen bei 40 Jahren typisch ihr Lebensende. Wenn die Eindeckung optisch noch gut aussieht, kann sie vielleicht noch 10 Jahre — aber die unsichtbaren Komponenten darunter oft nicht. Eine Inspektion lohnt sich spätestens im 40. Jahr. Dringlichkeit: Planungshorizont 2–5 Jahre.",
      },

      { kind: "heading", level: 2, text: "7. Nach einem schweren Sturm" },
      {
        kind: "paragraph",
        body: "Auch wenn optisch alles intakt scheint, kann ein Sturm Ziegel anheben und falsch wieder absetzen, Windsog-Klammern lösen, Dichtungen reißen. Eine Inspektion nach Sturm­ereignissen ist sinnvoll — insbesondere dann, wenn bei Ihnen im Hof einzelne Ziegel gefunden wurden. Ihre Gebäudeversicherung verlangt diese Prüfung oft ohnehin, um spätere Schäden abzudecken. Dringlichkeit: innerhalb weniger Wochen nach dem Sturm.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Was passiert, wenn Sie zu lange warten" },
      {
        kind: "paragraph",
        body: "Das Dach arbeitet gegen Zeit und Witterung. Unbehandelte Schäden bleiben nicht stehen — sie wachsen. Ein undichter Ziegel führt zu feuchter Dämmung. Feuchte Dämmung verliert ihre Dämmwirkung (und bleibt nass, auch wenn das Dach wieder dicht ist). Feuchtes Holz wird zur Basis für Hausschwamm oder Anobien. Im schlimmsten Fall wird das Tragwerk befallen — dann geht es nicht mehr um Sanierung, sondern um statische Rettung. Die Kostenkurve ist exponentiell: 500 € heute vermeiden 15.000 € in 5 Jahren.",
      },

      { kind: "heading", level: 2, text: "Muss immer das ganze Dach neu?" },
      {
        kind: "paragraph",
        body: "Nein. Wir unterscheiden drei Ebenen: Reparatur (einzelne Ziegel, lokale Anschlüsse, 300–2.000 €), Teilsanierung (eine Seite, ein Abschnitt, 5.000–15.000 €) und Komplettsanierung (gesamte Eindeckung, ggf. mit Dämmung, 20.000–60.000 €). Welche Ebene sinnvoll ist, zeigt eine fundierte Inspektion. Wir empfehlen immer die günstigste wirtschaftlich sinnvolle Option — nicht die teuerste technisch mögliche.",
      },

      { kind: "heading", level: 2, text: "Kostenrahmen: Was kostet eine Dachsanierung in Berlin?" },
      {
        kind: "list",
        items: [
          "Einzelreparatur (lose Ziegel, Dichtung Kamin, Rinne): 150–600 €",
          "Teilsanierung (eine Dachseite neu, 40 m²): 6.000–12.000 €",
          "Komplett-Neueindeckung EFH (150 m²): 20.000–40.000 €",
          "Mit Aufsparrendämmung zusätzlich: +15.000–25.000 €",
          "Mit Asbest-Entsorgung (falls notwendig): +6.000–12.000 €",
        ],
      },

      { kind: "heading", level: 2, text: "Förderung senkt die Rechnung deutlich" },
      {
        kind: "paragraph",
        body: "Sobald bei der Sanierung energetisch etwas passiert — Dämmung erneuert, bessere U-Werte erreicht — greift BAFA BEG EM mit 15–20 % Zuschuss. Zusätzlich § 35c EStG als Steuerbonus (alternativ) oder KfW 261 als zinsgünstiger Kredit mit Tilgungszuschuss. Wer einen iSFP vorliegen hat (den wir selbst erstellen als BAFA-Energieberater), bekommt 5 % zusätzlichen Bonus. Bei einer 40.000-€-Sanierung also 8.000 € Zuschuss statt 6.000 €.",
      },
    ],
    meisterempfehlung:
      "Wir empfehlen jedem Hauseigentümer in Berlin, alle 2–3 Jahre eine professionelle Dachinspektion durchführen zu lassen — unabhängig davon, ob Warnsignale sichtbar sind. Das kostet 150–280 € und wird im Bedarfsfall mit der späteren Sanierung verrechnet. Die Alternative ist teuer: ein Wasserschaden im ersten Stock kostet schnell das 20- bis 50-fache. Ehrlich gesagt: Dachinspektion ist eines der besten Preis-Leistungs-Verhältnisse in der Hausinstandhaltung.",
    faqs: [
      {
        question: "Kann ich mein Dach selbst inspizieren?",
        answer:
          "Vom Boden aus mit Fernglas oder vom Nachbarhaus/Balkon: Ja, damit erkennen Sie 70 % der oberflächlichen Probleme. Aufs Dach sollten Sie nur mit Sicherheitsausrüstung und Erfahrung — jährlich sterben in Deutschland mehrere Hausbesitzer durch Dachabstürze. Eine professionelle Inspektion mit Einblick in den Dachboden, Sichtkontrolle der Unterspannbahn und fachkundiger Bewertung ist ohnehin nicht zu ersetzen.",
      },
      {
        question: "Was kostet eine professionelle Dachinspektion?",
        answer:
          "Wir berechnen für eine Standard-Inspektion eines Einfamilienhauses in Berlin 180–280 €. Sie bekommen einen schriftlichen Bericht mit Fotos, Schaden­einstufung und Kostenschätzung für eventuelle Arbeiten. Bei Auftragserteilung für eine anschließende Sanierung wird die Inspektions­gebühr verrechnet.",
      },
      {
        question: "Wie lange dauert eine komplette Dachsanierung?",
        answer:
          "Für ein Einfamilienhaus mit 150 m² Dachfläche: Gerüstaufbau 1 Tag, eigentliche Arbeiten 5–15 Werktage (abhängig von Umfang — mit Dämmung länger), Endabnahme 1 Tag. Insgesamt 2–4 Wochen kalendarisch, inklusive Witterungs­puffer. Die Wohnung bleibt bewohnbar, nur die Dachgeschoss-Räume sind zeitweise eingeschränkt nutzbar.",
      },
      {
        question: "Was passiert, wenn es während der Sanierung regnet?",
        answer:
          "Wir arbeiten in Etappen und ziehen bei Regen Regenschutz­planen über das offene Dach. Eine Notdichtung ist Teil unserer Arbeitsweise — Ihr Haus ist nie ungeschützt. Bei längeren Schlechtwetter­perioden pausieren wir und verlängern den Zeitplan entsprechend. Das ist die Regel, nicht die Ausnahme.",
      },
      {
        question: "Muss ich während der Sanierung umziehen?",
        answer:
          "In aller Regel nicht. Das Haus bleibt bewohnbar, Strom- und Wasserversorgung laufen durch, Schlaf- und Wohnräume in den unteren Geschossen sind voll nutzbar. Dachgeschoss-Zimmer sind je nach Arbeits­fortschritt tageweise eingeschränkt. Lärm und Staub sind unvermeidlich, aber wir halten die Belastung so gering wie möglich und räumen täglich auf.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
      otherRatgeber: [
        { slug: "tondachziegel-vs-betondachsteine", label: "Ton vs. Beton — welches Material?" },
        { slug: "asbest-dach-erkennen", label: "Asbest am Dach erkennen" },
      ],
    },
  },

  // ─── Ratgeber 7: Holzfaser vs Mineralwolle ─────────────────────────────
  {
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
  },

  // ─── Ratgeber 8: Gründach + Solar ──────────────────────────────────────
  {
    slug: "gruendach-solar-kombination",
    category: "Solar",
    title: "Gründach mit Solar kombinieren: Warum die Kombi in Berlin mehr bringt",
    metaTitle: "Gründach + Solar kombinieren: Berlin-Guide | St. Masch Berlin",
    metaDescription:
      "Gründach und Photovoltaik auf einem Dach? Wie die Kombi den PV-Ertrag steigert und welche Berliner Förderung es dafür gibt.",
    keyword: "gründach solar kombination",
    summary:
      "Warum Gründach und PV zusammen mehr bringen als jedes einzelne — mit konkreten Berliner Fördersätzen und Kombi-Bonus.",
    intro:
      "Die meisten Hauseigentümer denken, Gründach ODER Solar — und entscheiden sich dann meist für Solar, weil das Renditen bringt. Dabei ist die Kombination beider Systeme einer der stärksten Hebel für Ertrag, Klima und Förderung, den es in Berlin gibt. Dieser Artikel erklärt, warum das keine Marketingidee ist, sondern bauphysikalisch und wirtschaftlich nachweisbar besser.",
    blocks: [
      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Warum die Kombi funktioniert" },
      {
        kind: "paragraph",
        body: "Photovoltaik-Module verlieren messbar Leistung, wenn sie heiß werden — etwa 0,4 % pro Grad Temperaturerhöhung über 25 °C. Ein typisches Schwarzdach wird im Sommer 55–70 °C heiß, was die Modultemperatur auf 50–65 °C treibt und die Leistung um 10–16 % reduziert. Ein Gründach bleibt durch Verdunstungskühlung auf 25–30 °C, Module darüber auf 30–35 °C. Feldmessungen aus Berliner Projekten zeigen 3–6 % Mehrertrag über das Jahr. Über 20 Jahre Anlagenlaufzeit summiert sich das auf 60–120 % einer zusätzlichen Anlagen­leistung.",
      },

      { kind: "heading", level: 2, text: "Gründach als PV-Ballast" },
      {
        kind: "paragraph",
        body: "Auf einem Flachdach braucht die PV-Anlage einen Ballast, damit der Wind sie nicht abhebt. Klassisch werden dafür Betonplatten verwendet — oder die Unterkonstruktion wird ins Dach geschraubt (was die Abdichtung beschädigt). Bei der Kombi übernimmt das Substrat des Gründachs den Ballast: 8–12 cm Substrat wiegen 80–130 kg/m² und fixieren die Aufständerung ohne Dachdurchdringung. Die Abdichtung bleibt absolut unversehrt. Für Flachdächer in Berlin, wo Windlasten hoch sind und die Abdichtung oft das schwächste Glied ist, ein handfester Vorteil.",
      },

      { kind: "heading", level: 2, text: "Regenwasser-Rückhaltung (Retention)" },
      {
        kind: "paragraph",
        body: "Starkregen wird in Berlin zur Regel. Ein 10 cm Substrataufbau speichert etwa 40 l/m² und gibt das Wasser zeitverzögert über Stunden bis Tage ab. Das entlastet die Stadtkanalisation direkt — und spart Ihnen Niederschlagswasser­gebühren (in Berlin ca. 1,60 €/m² versiegelter Fläche pro Jahr). Für ein 100-m²-Flachdach also 160 € pro Jahr Ersparnis, oft dauerhaft. Manche Neubauprojekte in Berlin dürfen aufgrund der Stadtentwässerungssatzung überhaupt nur mit Gründach gebaut werden.",
      },

      { kind: "heading", level: 2, text: "Biodiversität und Stadtklima" },
      {
        kind: "paragraph",
        body: "Extensive Gründächer mit Sedum, Kräutern und Sukkulenten schaffen Lebensraum für Insekten, Bienen und Vögel — in einer Stadt, in der Grünflächen knapp werden. Der Senat Berlin fördert das aktiv, weil es das Mikroklima messbar verbessert (niedrigere Sommer-Temperaturen im Quartier). Für Eigentümer: Weniger Lärm, weniger Staub, weniger Hitze auf dem eigenen Dach und in den darunter liegenden Räumen. Das ist nicht nur Idealismus — es ist gelebter Mehrwert.",
      },

      { kind: "heading", level: 2, text: "Die Berliner Förderlandschaft — der große Hebel" },
      {
        kind: "paragraph",
        body: "Hier wird die Kombi wirklich interessant. Berlin hat ein explizit auf diese Verbindung zugeschnittenes Förderprogramm:",
      },
      {
        kind: "list",
        items: [
          "GründachPLUS Berlin: 95 €/m² (10 cm Substrat) bis 180 €/m² (≥ 26 cm) für die Dachbegrünung selbst",
          "Solar-Gründach-Kombi-Bonus: zusätzliche 40 €/m² für den Mehraufwand der Kombi — nur bei gleichzeitiger Kombination",
          "Biodiversitäts-Bonus: weitere 7,50 €/m² bei entsprechender Bepflanzung",
          "SolarPLUS Berlin: Pauschalzuschüsse für PV-Anlage, Zählerschrank und Speicher",
          "KfW 270: zinsgünstiger Kredit für die PV-Anlage selbst, bis zu 30 Jahre Laufzeit",
          "0 % Mehrwertsteuer auf PV bis 30 kWp (§ 12 UStG) — entspricht einem effektiven Rabatt von ca. 19 %",
          "Einspeisevergütung nach EEG — 7,78 ct/kWh Überschuss-Einspeisung (Stand 2026)",
        ],
      },
      {
        kind: "paragraph",
        body: "Alle diese Töpfe sind kombinierbar. Bei einem 80 m² Flachdach mit Gründach plus 8 kWp PV-Anlage landen Sie grob bei: GründachPLUS 11.000 €, Kombi-Bonus 3.200 €, Biodiversitäts-Bonus 600 €, SolarPLUS 2.500–4.000 € — also 17.000–19.000 € Zuschuss plus zinsgünstiger KfW-Kredit. Das reicht oft aus, das Gründach selbst netto zum Nulltarif zu bauen.",
      },

      { kind: "cta", variant: "soft" },

      { kind: "heading", level: 2, text: "Der typische Aufbau von oben nach unten" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Dacheindeckung (bestehend, geprüft) — EPDM oder FPO empfohlen für Wurzelfestigkeit",
          "Schutzvlies gegen mechanische Beschädigung",
          "Drainage­schicht (Drän- und Wasserspeicher­platten)",
          "Filtervlies gegen Einspülen feiner Bestandteile in die Drainage",
          "Extensives Substrat (8–12 cm) — Sedum-, Kräuter-, Stauden-Mischung",
          "Aufständerung für die PV-Anlage (ballastiert durch Substrat, ohne Dachdurchdringung)",
          "PV-Module — idealerweise mit Enphase-Mikrowechselrichtern (siehe separater Ratgeber)",
        ],
      },

      { kind: "heading", level: 2, text: "Wartung: Was braucht das System pro Jahr?" },
      {
        kind: "paragraph",
        body: "Extensives Gründach: 1–2 Mal pro Jahr (idealerweise Frühjahr und Herbst) Fremdbewuchs entfernen, Abläufe kontrollieren, Sedum nachpflanzen wo nötig. Pflegeaufwand ca. 0,50–1,00 €/m² pro Jahr — für ein 80-m²-Dach also 40–80 €. PV-Anlage: Jährliche Sichtkontrolle durch uns (im Rahmen eines Wartungsvertrags), Modulreinigung alle 3–5 Jahre wenn nötig. Zusammen sind das Betriebskosten von etwa 150–250 € pro Jahr — weniger als eine einzige Autoinspektion.",
      },

      { kind: "heading", level: 2, text: "Kostenrahmen: Was das Ganze in Berlin kostet" },
      {
        kind: "list",
        items: [
          "Extensives Gründach (80 m², inkl. wurzelfester Abdichtung): 9.000–14.000 €",
          "8 kWp PV-Anlage mit Enphase + Speicher (5 kWh): 22.000–28.000 € brutto",
          "Summe Rohkosten: 31.000–42.000 €",
          "Abzüglich GründachPLUS, Kombi-Bonus, Biodiversität, SolarPLUS: 17.000–19.000 €",
          "Netto nach Förderung: 14.000–23.000 €",
          "Amortisation über PV-Ertrag + eingesparte Niederschlagswassergebühr: 8–12 Jahre",
          "Laufzeit der Anlage: 25+ Jahre — danach 15+ Jahre reiner Gewinn",
        ],
      },
    ],
    meisterempfehlung:
      "Wenn Sie ein Flachdach haben und ohnehin über Photovoltaik nachdenken — prüfen Sie die Gründach-Kombination ernsthaft. Die Berliner Förderlandschaft macht die Kombi oft wirtschaftlich attraktiver als die PV allein. Wir planen und bauen beide Systeme aus einer Hand: wurzelfeste Abdichtung, Gründach-Aufbau und PV-Montage. Ein einziger Ansprechpartner, eine Abnahme, eine Garantie. Die Förderanträge stellen wir mit Ihnen zusammen — inklusive der iSFP-Vorbereitung für eventuelle weitere Maßnahmen.",
    faqs: [
      {
        question: "Hält mein Flachdach das Gewicht von Gründach plus Solar aus?",
        answer:
          "Extensives Gründach (8–12 cm Substrat) wiegt gesättigt etwa 100–150 kg/m². Eine PV-Anlage kommt mit ca. 15–25 kg/m² dazu. Gesamtlast also 115–175 kg/m² — das tragen die meisten modernen Flachdächer problemlos. Bei Bestandsbauten aus den 70er–90er Jahren prüfen wir die Statik vor dem ersten Sack Substrat. Eine ehrliche Prüfung vorab ist entscheidend — wir geben Ihnen die Einschätzung schriftlich vor dem Auftrag.",
      },
      {
        question: "Wie lange hält ein Gründach?",
        answer:
          "Die Abdichtung darunter hält mit Gründach-Schutz sogar länger als ohne: EPDM oder FPO werden vor UV-Einstrahlung und thermischer Belastung geschützt. Realistisch sind 40–50 Jahre Abdichtung statt 25–35 Jahre ohne Gründach. Der Substrataufbau selbst hält 30+ Jahre, wenn die Pflege stimmt. Einzelne Pflanzen müssen im Laufe der Zeit nachgepflanzt werden — das ist normale Entwicklungspflege.",
      },
      {
        question: "Muss ich das Gründach im Sommer gießen?",
        answer:
          "Ein fachgerecht aufgebautes extensives Gründach mit Sedum-Mischung ist nach der Anwachsphase (erstes Jahr) vollständig selbst­versorgend. Sedum und Kräuter sind an Trockenheit angepasst — sie gehen in Hitze in Ruhephase und treiben bei Regen wieder aus. Nur intensive Begrünungen (Stauden, kleine Bäume) brauchen regelmäßig Bewässerung. Für die meisten Hauseigentümer ist die extensive Variante die richtige Wahl.",
      },
      {
        question: "Leidet die PV-Anlage durch das Gründach an Wartungsproblemen?",
        answer:
          "Nein, eher das Gegenteil. Die niedrigere Betriebstemperatur der Module verlängert ihre Lebensdauer (weniger thermischer Stress auf Zellen und Verkabelung). Die Module werden weniger verschmutzt, weil die Vegetation Staub bindet. Wartung konzentriert sich auf die normalen Sichtkontrollen — wir bauen die Anlage so auf, dass sie pflegezugänglich bleibt.",
      },
      {
        question: "Geht das auch auf einem leicht geneigten Dach?",
        answer:
          "Ja, bis ca. 15° Neigung ist eine Gründach-Solar-Kombi sinnvoll realisierbar. Darüber hinaus wird der Substrataufbau aufwendiger (Rutschsicherung, spezielles Substrat), aber bis etwa 30° Neigung immer noch machbar. Auf klassischen Steildächern mit 40°+ ist die Kombi technisch möglich, aber wirtschaftlich meist nicht sinnvoll — dort ist reine PV-Anlage die bessere Wahl.",
      },
    ],
    datePublished: "2026-04-12",
    related: {
      leistung: { href: "/leistungen/gruendach", label: "Zu unserer Gründach-Leistung" },
      otherRatgeber: [
        { slug: "mikrowechselrichter-vs-string-wechselrichter", label: "Mikrowechselrichter vs. String" },
        { slug: "epdm-vs-bitumen-flachdach", label: "EPDM vs. Bitumen Flachdach" },
      ],
    },
  },
]

export function getRatgeberBySlug(slug: string): Ratgeber | undefined {
  return ratgeberList.find((r) => r.slug === slug)
}

export function getRatgeberLabelBySlug(slug: string): string | undefined {
  return ratgeberList.find((r) => r.slug === slug)?.title
}

/** Reading time estimate based on ~220 wpm German. */
export function readingTimeMinutes(r: Ratgeber): number {
  const words =
    r.intro.split(/\s+/).length +
    r.blocks.reduce((sum, b) => {
      if (b.kind === "paragraph") return sum + b.body.split(/\s+/).length
      if (b.kind === "list") return sum + b.items.join(" ").split(/\s+/).length
      if (b.kind === "table") return sum + b.rows.flat().join(" ").split(/\s+/).length
      return sum
    }, 0) +
    r.meisterempfehlung.split(/\s+/).length +
    r.faqs.reduce(
      (sum, f) => sum + f.question.split(/\s+/).length + f.answer.split(/\s+/).length,
      0,
    )
  return Math.max(3, Math.round(words / 220))
}
