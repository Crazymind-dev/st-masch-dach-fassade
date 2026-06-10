import type { Ratgeber } from "../ratgeber-types"

export const artikel: Ratgeber = {
  slug: "gruendach-solar-kombination",
  category: "Solar",
  title: "Gründach mit Solar kombinieren: Warum die Kombi mehr bringt",
  metaTitle: "Gründach + Solar kombinieren: Förderung | St. Masch Berlin",
  metaDescription:
    "Gründach + Photovoltaik in Berlin: mehr PV-Ertrag durch Kühlung, Substrat als Ballast, weniger Regenwassergebühr – und die echten Fördersätze 2026.",
  keyword: "gründach solar kombination",
  summary:
    "Warum Gründach und Photovoltaik zusammen mehr bringen als jedes System für sich — mit den real geltenden Berliner Fördersätzen, ehrlich gerechnet.",
  intro:
    "Die meisten Eigentümer denken „Gründach oder Solar“ – und nehmen meist Solar, weil es Rendite bringt. Dabei ist die Kombination einer der stärksten Hebel für Ertrag, Klima und Förderung, den es in Berlin gibt. Und das ist keine Marketingidee, sondern messbar.",
  blocks: [
    { kind: "heading", level: 2, text: "Das Wichtigste in Kürze" },
    {
      kind: "list",
      items: [
        "Die Begrünung kühlt die PV-Module durch Verdunstung und steigert den Stromertrag – Studien zeigen im Schnitt rund 4 %, bis zu 8 % Mehrertrag.",
        "Das Substrat dient der PV-Aufständerung als Ballast ohne Dachdurchdringung – die Abdichtung bleibt unversehrt.",
        "Das Gründach hält Regenwasser zurück und senkt die Berliner Niederschlagswassergebühr (1,809 €/m² versiegelter Fläche pro Jahr) teilweise bis weitgehend.",
        "Berlin fördert gezielt: GründachPLUS für die Begrünung, ein Solar-Kombi-Bonus für den Mehraufwand, SolarPLUS für die PV-Technik – alle Töpfe sind grundsätzlich kombinierbar.",
        "Wichtig: Rechnen Sie mit den real geltenden Fördersätzen – nicht mit den oft zu hoch kursierenden Zahlen aus dem Netz.",
      ],
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Warum die Kombi bauphysikalisch funktioniert" },
    {
      kind: "paragraph",
      body: "Photovoltaik-Module verlieren Leistung, wenn sie heiß werden – typisch etwa 0,3–0,4 % pro Grad über 25 °C Zelltemperatur. Ein dunkles Flachdach heizt sich im Sommer stark auf und treibt die Modultemperatur nach oben, was die Leistung spürbar mindert. Ein Gründach bleibt durch Verdunstungskühlung deutlich kühler und senkt die Umgebungstemperatur auf dem Dach nachweislich um mehrere Grad.",
    },
    {
      kind: "paragraph",
      body: "Das schlägt sich im Ertrag nieder: Eine Untersuchung von Polarstern gemeinsam mit der Wilhelm Büchner Hochschule ermittelte im Schnitt rund 4 % Mehrertrag, je nach Technik und Region bis zu 8 %. Über die Anlagenlaufzeit ist das ein realer, dauerhafter Zusatzgewinn – ohne extra Module.",
    },

    { kind: "heading", level: 2, text: "Gründach als PV-Ballast – ohne Loch im Dach" },
    {
      kind: "paragraph",
      body: "Auf einem Flachdach braucht die PV-Aufständerung einen Ballast, damit der Wind sie nicht abhebt. Klassisch nimmt man Betonplatten – oder schraubt die Unterkonstruktion ins Dach, was die Abdichtung durchdringt und zur Schwachstelle macht.",
    },
    {
      kind: "paragraph",
      body: "Bei der Kombi übernimmt das Substrat des Gründachs den Ballast: 8–12 cm Aufbau wiegen wassergesättigt rund 80–130 kg/m² und fixieren die Aufständerung ohne Dachdurchdringung. Die Abdichtung bleibt unversehrt. Gerade in Berlin mit hohen Windlasten und oft empfindlicher Flachdachabdichtung ist das ein handfester technischer Vorteil.",
    },

    { kind: "heading", level: 2, text: "Regenwasser-Rückhalt und niedrigere Gebühren" },
    {
      kind: "paragraph",
      body: "Starkregen nimmt zu. Ein extensiver Gründachaufbau speichert je nach Substratdicke einen erheblichen Teil des Niederschlags (Größenordnung ca. 30–40 l/m² bei rund 10 cm) und gibt ihn zeitverzögert ab. Das entlastet die Kanalisation – und senkt die Niederschlagswassergebühr.",
    },
    {
      kind: "paragraph",
      body: "In Berlin liegt diese Gebühr bei 1,809 €/m² versiegelter Fläche und Jahr (seit 2022, Berliner Wasserbetriebe). Ein Gründach gilt als dezentrale Regenwasserbewirtschaftung: Je nach Aufbauhöhe und Substrat lassen sich rund 50–90 % des Jahresniederschlags anrechnen, was die Gebühr für die betroffene Fläche teilweise bis weitgehend reduziert – eine automatische Vollbefreiung gibt es nicht. Manche Berliner Neubauprojekte dürfen wegen der Entwässerungsvorgaben ohnehin nur mit Gründach gebaut werden.",
    },

    { kind: "heading", level: 2, text: "Biodiversität und Stadtklima" },
    {
      kind: "paragraph",
      body: "Extensive Gründächer mit Sedum, Kräutern und Sukkulenten schaffen Lebensraum für Insekten und Vögel – in einer Stadt mit knappen Grünflächen. Der Senat fördert das aktiv, weil es das Mikroklima messbar verbessert. Für Eigentümer bedeutet es weniger Hitze auf dem Dach und in den Räumen darunter, weniger Staub und etwas mehr Ruhe. Praktischer Mehrwert, nicht nur Idealismus.",
    },

    { kind: "heading", level: 2, text: "Die Berliner Förderlandschaft – ehrlich gerechnet" },
    {
      kind: "callout",
      variant: "warning",
      body: "Im Netz kursieren teils deutlich überhöhte Fördersätze. Es zählen die offiziell geltenden Werte – und die sollten Sie vor Antragstellung immer am aktuellen Programmstand prüfen.",
    },

    { kind: "heading", level: 3, text: "GründachPLUS Berlin (für die Begrünung)" },
    {
      kind: "table",
      columns: ["Baustein", "Fördersatz"],
      rows: [
        ["Vegetationstragschicht 10 cm", "bis 55 €/m²"],
        ["Vegetationstragschicht 11–25 cm", "bis 80 €/m²"],
        ["Vegetationstragschicht ≥ 26 cm", "bis 90 €/m²"],
        ["Biodiversitätsgründach", "+ 5 €/m²"],
        ["Absturzsicherung", "+ 5 €/m²"],
        ["Beratungs-/Planungskosten", "75 % (max. 15.000 €)"],
      ],
      caption: "GründachPLUS Berlin – offizielle Fördersätze (Stand Mai 2026)",
    },

    { kind: "heading", level: 3, text: "Solar-Kombi-Bonus" },
    {
      kind: "paragraph",
      body: "Für den Mehraufwand bei Schichtenaufbau und Substratverlegung im Kombifall gibt es bis zu 10 €/m² obendrauf – allerdings nur bei gleichzeitiger Kombination von Grün- und Solardach.",
    },

    { kind: "heading", level: 3, text: "SolarPLUS Berlin (für die PV-Technik)" },
    {
      kind: "paragraph",
      body: "Das Programm war im Oktober 2025 pausiert und läuft seit dem 8. Januar 2026 in neuer Struktur – getrennt nach SolarPLUS S (Eigenheime) und SolarPLUS L (Mehrfamilienhäuser/Gewerbe). Stecker-Solargeräte werden nicht mehr gefördert; Stromspeicher werden mit rund 300 €/kWh bezuschusst (Details und Pauschalen sind im aktuellen Programmstand zu prüfen).",
    },

    { kind: "heading", level: 3, text: "Bundesweit obendrauf" },
    {
      kind: "list",
      items: [
        "0 % Mehrwertsteuer auf PV-Anlagen bis 30 kWp (§ 12 UStG) – effektiv rund 19 % günstiger",
        "KfW 270 – zinsgünstiger Kredit für die PV-Anlage, lange Laufzeit",
        "EEG-Einspeisevergütung für Überschussstrom: 7,78 ct/kWh für Anlagen bis 10 kWp (Stand Februar 2026, halbjährliche Degression; nächste Absenkung August 2026)",
      ],
    },
    {
      kind: "paragraph",
      body: "Alle Berliner Töpfe sind grundsätzlich kombinierbar. Wer die Anlage bis Ende 2026 in Betrieb nimmt, sichert sich zudem die bewährte 20-jährige EEG-Vergütung ohne die ab Juli 2027 geplante CfD-Regelung.",
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Realistisches Rechenbeispiel: 80 m² Gründach + 8 kWp PV" },
    {
      kind: "paragraph",
      body: "Mit den tatsächlich geltenden Sätzen (Substrat 11–25 cm, Biodiversität):",
    },
    {
      kind: "list",
      items: [
        "GründachPLUS: 80 m² × bis 80 €/m² → bis ca. 6.400 €",
        "Biodiversitäts-Bonus: 80 m² × 5 €/m² → 400 €",
        "Solar-Kombi-Bonus: 80 m² × bis 10 €/m² → bis 800 €",
        "Beratungs-/Planungskosten: 75 % der nachgewiesenen Kosten (max. 15.000 €)",
        "SolarPLUS: Speicher- und Anlagenpauschalen nach aktueller Struktur (z. B. ca. 300 €/kWh Speicher)",
      ],
    },
    {
      kind: "paragraph",
      body: "Realistisch summiert sich allein die Gründach-Seite auf rund 7.000–8.000 €, dazu kommen die SolarPLUS-Pauschalen für PV und Speicher. Das ist ein erheblicher Zuschuss – aber nicht die 17.000–19.000 €, die mancherorts genannt werden. Die Kombi macht das Gründach netto sehr günstig; ob es „zum Nulltarif“ steht, hängt vom konkreten Aufbau, Programmstand und Bewilligung ab.",
    },

    { kind: "heading", level: 2, text: "Der typische Aufbau (von oben nach unten)" },
    {
      kind: "list",
      ordered: true,
      items: [
        "PV-Module – idealerweise mit Mikrowechselrichtern (z. B. Enphase) für Verschattungstoleranz und Modulüberwachung",
        "Aufständerung – ballastiert durch das Substrat, ohne Dachdurchdringung",
        "Extensives Substrat (8–12 cm) – Sedum-, Kräuter-, Staudenmischung",
        "Filtervlies – verhindert das Einspülen feiner Bestandteile in die Drainage",
        "Drainage-/Wasserspeicherschicht",
        "Schutzvlies gegen mechanische Beschädigung",
        "Wurzelfeste Dachabdichtung – EPDM oder FPO empfohlen",
      ],
    },

    { kind: "heading", level: 2, text: "Wartung: Was das System pro Jahr braucht" },
    {
      kind: "paragraph",
      body: "Extensives Gründach: ein- bis zweimal jährlich (Frühjahr/Herbst) Fremdbewuchs entfernen, Abläufe kontrollieren, Sedum bei Bedarf nachpflanzen. Pflegeaufwand grob 0,50–1,00 €/m² und Jahr (80 m² ≈ 40–80 €). PV-Anlage: jährliche Sichtkontrolle (idealerweise im Wartungsvertrag), Modulreinigung bei Bedarf alle paar Jahre. Zusammen Betriebskosten von etwa 150–250 € pro Jahr.",
    },

    { kind: "heading", level: 2, text: "Kostenrahmen in Berlin (Orientierung)" },
    {
      kind: "list",
      items: [
        "Extensives Gründach (80 m², inkl. wurzelfester Abdichtung): ab ca. 9.000–14.000 €",
        "8-kWp-PV-Anlage mit Mikrowechselrichtern + Speicher (ca. 5 kWh): ab ca. 22.000–28.000 € brutto",
        "Summe Rohkosten: 31.000–42.000 €",
        "Abzüglich Förderung (Gründach-Seite ca. 7.000–8.000 € + SolarPLUS-Pauschalen): netto grob 20.000–32.000 €",
        "Amortisation über PV-Ertrag + eingesparte Niederschlagswassergebühr: meist 10–14 Jahre",
        "Anlagenlaufzeit 25+ Jahre",
      ],
    },
    {
      kind: "callout",
      variant: "note",
      body: "Alle Beträge sind grobe Orientierungswerte (brutto) und ersetzen kein geprüftes Angebot. Förderhöhen, Substrataufbau und Anlagengröße verändern das Ergebnis deutlich. Förderprogramme und Sätze ändern sich – vor Antragstellung tagesaktuell prüfen.",
    },
  ],
  meisterempfehlung:
    "Wenn Sie ein Flachdach haben und ohnehin über Photovoltaik nachdenken, prüfen Sie die Gründach-Kombination ernsthaft. Die Berliner Förderlandschaft macht sie oft wirtschaftlich attraktiver als PV allein – vorausgesetzt, man rechnet mit den echten Fördersätzen und der vorhandenen Statik. Als Dachdeckermeisterbetrieb mit BAFA-anerkanntem Energieberater planen und bauen wir beide Systeme aus einer Hand: wurzelfeste Abdichtung, Gründachaufbau und PV-Montage. Ein Ansprechpartner, eine Abnahme, eine Garantie. Die Förderanträge bereiten wir gemeinsam mit Ihnen vor – inklusive iSFP-Vorbereitung für eventuelle weitere Maßnahmen.",
  faqs: [
    {
      question: "Bringt ein Gründach unter Solarmodulen wirklich mehr Ertrag?",
      answer:
        "Ja. Durch Verdunstungskühlung bleiben die Module kühler, was den Wirkungsgrad erhöht. Studien (Polarstern/Wilhelm Büchner Hochschule) zeigen im Schnitt rund 4 % Mehrertrag, je nach Bedingungen bis zu 8 %.",
    },
    {
      question: "Beschädigt die PV-Montage die Dachabdichtung?",
      answer:
        "Bei der Gründach-Kombi nicht: Das Substrat dient als Ballast und fixiert die Aufständerung ohne Dachdurchdringung. Die Abdichtung bleibt unversehrt.",
    },
    {
      question: "Wie hoch ist die GründachPLUS-Förderung in Berlin?",
      answer:
        "Bis 55 €/m² (10 cm Substrat), bis 80 €/m² (11–25 cm) und bis 90 €/m² (ab 26 cm), jeweils plus 5 €/m² für Biodiversität und für Absturzsicherung; zusätzlich 75 % der Planungskosten (max. 15.000 €). Der Solar-Kombi-Bonus beträgt bis zu 10 €/m².",
    },
    {
      question: "Läuft SolarPLUS in Berlin noch?",
      answer:
        "Ja. Nach einer Pause ab Oktober 2025 läuft SolarPLUS seit dem 8. Januar 2026 in neuer Struktur (SolarPLUS S für Eigenheime, L für Mehrfamilienhäuser/Gewerbe). Steckersolargeräte werden nicht mehr gefördert. Den aktuellen Programmstand sollten Sie vor dem Antrag prüfen.",
    },
    {
      question: "Spare ich mit einem Gründach die Niederschlagswassergebühr?",
      answer:
        "Teilweise. Die Berliner Gebühr liegt bei 1,809 €/m² versiegelter Fläche pro Jahr. Ein Gründach lässt je nach Aufbau rund 50–90 % des Niederschlags anrechnen und reduziert die Gebühr für die Fläche entsprechend – eine automatische Vollbefreiung gibt es nicht.",
    },
    {
      question: "Kann jedes Flachdach das tragen?",
      answer:
        "Nicht automatisch. Ein wassergesättigtes Substrat plus PV bedeutet erhebliche Zusatzlast (oft 100+ kg/m²). Die Statik muss vor der Planung fachlich geprüft werden.",
    },
  ],
  datePublished: "2026-06-10",
  related: {
    leistung: { href: "/leistungen/gruendach", label: "Zu unserer Gründach-Leistung" },
    otherRatgeber: [
      { slug: "indach-photovoltaik", label: "Indach-Photovoltaik: lohnt sich das Solardach?" },
      { slug: "mikrowechselrichter-vs-string-wechselrichter", label: "Mikrowechselrichter vs. String-Wechselrichter" },
    ],
  },
}
