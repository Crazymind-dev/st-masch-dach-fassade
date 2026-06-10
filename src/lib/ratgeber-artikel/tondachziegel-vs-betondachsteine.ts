import type { Ratgeber } from "../ratgeber-types"

export const artikel: Ratgeber = {
  slug: "tondachziegel-vs-betondachsteine",
  category: "Dach",
  title: "Tondachziegel oder Betondachstein? Der ehrliche Vergleich",
  metaTitle: "Tondachziegel oder Betondachstein? | St. Masch Berlin",
  metaDescription:
    "Tondachziegel oder Betondachstein? Lebensdauer, Kosten, Gewicht, Optik, Schallschutz, PV-Eignung im ehrlichen Vergleich vom Dachdeckermeister aus Berlin.",
  keyword: "tondachziegel oder betondachstein",
  summary:
    "Ton oder Beton? Lebensdauer, Kosten, Gewicht, Optik und PV-Eignung im ehrlichen Vergleich – und für wen sich welches Material lohnt.",
  intro:
    "Bei fast jeder Steildach-Sanierung steht die gleiche Frage am Anfang: Tondachziegel oder Betondachstein? Beide gehören zu den langlebigsten Dacheindeckungen Deutschlands – sie unterscheiden sich aber spürbar bei Lebensdauer, Preis, Gewicht und Optik. Dieser Vergleich aus 30 Jahren Dachpraxis hilft Ihnen, sauber zu entscheiden.",
  blocks: [
    { kind: "heading", level: 2, text: "Das Wichtigste in Kürze" },
    {
      kind: "paragraph",
      body: "Beide Materialien gehören zu den langlebigsten Dacheindeckungen Deutschlands. Tondachziegel punkten mit der längeren Lebensdauer (oft 60–100 Jahre), durchgefärbter, dauerhaft farbechter Optik und geringerer Moosanfälligkeit – zu einem etwas höheren Preis. Betondachsteine sind in der Anschaffung günstiger, bieten einen leicht besseren Schallschutz und eine etwas bessere Ökobilanz in der Herstellung, neigen über die Jahrzehnte aber stärker zum Vergrauen. Wer dauerhaft Wertigkeit und Optik sucht, wählt Ton; wer auf das beste Preis-Leistungs-Verhältnis schaut, wählt Beton.",
    },
    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Ton und Beton im direkten Vergleich" },
    {
      kind: "table",
      columns: ["Kriterium", "Tondachziegel", "Betondachstein"],
      rows: [
        ["Material", "Gebrannter Ton/Lehm (ca. 1.000 °C)", "Sand, Zement, Wasser, Farbpigmente"],
        ["Lebensdauer", "ca. 60–80 Jahre, glasiert/engobiert bis ~100", "ca. 40–60 Jahre, hochwertig bis ~80"],
        ["Materialpreis (nur Material)", "ab ca. 25–45 €/m²", "ab ca. 12–30 €/m²"],
        ["Gewicht pro Stück", "ca. 2,8–3,8 kg (leichter)", "ca. 4,0–4,5 kg (schwerer)"],
        ["Optik / Farbe", "durchgefärbt, sehr farbecht, edler Naturton", "Pigment an der Oberfläche, vergraut langfristig stärker"],
        ["Frostbeständigkeit", "normgerecht frostsicher (DIN EN 1304)", "normgerecht frostsicher (DIN EN 490)"],
        ["Schallschutz", "gut", "ca. 3 dB besser als Ton"],
        ["Ökobilanz Herstellung", "energieintensiver (Brennen)", "geringerer Energieeinsatz in der Produktion"],
        ["Moos / Veralgung", "geringere Anfälligkeit", "etwas anfälliger, moderne Beschichtungen mildern das"],
        ["Hersteller-Garantie", "meist 30 Jahre", "meist 30 Jahre"],
      ],
    },
    {
      kind: "callout",
      variant: "note",
      body: "Kurz gesagt: Es gibt kein „besser“ – es gibt nur das passendere Material für Ihr Budget, Ihre Statik und Ihren optischen Anspruch.",
    },

    { kind: "heading", level: 2, text: "Was ist der Unterschied zwischen Dachziegel und Dachstein?" },
    {
      kind: "paragraph",
      body: "Im Fachhandwerk werden die Begriffe klar getrennt – im Alltag oft verwechselt:",
    },
    {
      kind: "list",
      items: [
        "Dachziegel bestehen ausschließlich aus Ton (mit Lehm und Wasser) und werden bei 900–1.200 °C gebrannt. Erst durch das Brennen erhält der Ziegel seine typische rotbraune Farbe und seine Härte.",
        "Dachsteine bestehen aus Beton – rund 70 % klassierter Sand, dazu Zement, Wasser und Farbpigmente auf Eisenoxidbasis. Sie werden nicht gebrannt, sondern bei ca. 60 °C getrocknet und anschließend rund einen Monat ausgehärtet.",
        "Dachpfanne ist nur der umgangssprachliche Oberbegriff für beide.",
      ],
    },
    {
      kind: "paragraph",
      body: "Dieser Herstellungsunterschied erklärt fast alle weiteren Unterschiede: Preis, Ökobilanz, Optik und Farbverhalten.",
    },

    { kind: "heading", level: 2, text: "Lebensdauer: Welches Dach hält länger?" },
    {
      kind: "paragraph",
      body: "Tondachziegel halten in der Regel länger. Ein Tonziegeldach erreicht in Deutschland im Schnitt 60–80 Jahre, bei glasierten oder engobierten Ziegeln häufig bis zu 100 Jahre. Betondachsteine erreichen typischerweise 40–60 Jahre, bei hochwertiger Qualität und sauberer Verlegung bis zu 80 Jahre. In der Praxis gilt: Beide gehören zu den haltbarsten Dacheindeckungen überhaupt, und große Hersteller geben auf beide eine Materialgarantie von 30 Jahren. Eine Besonderheit des Betons: Er härtet über die Jahre weiter aus und wird mechanisch widerstandsfähiger – seine Oberfläche altert optisch aber sichtbarer als die des Tons.",
    },

    { kind: "heading", level: 2, text: "Kosten: Was kostet welche Eindeckung?" },
    {
      kind: "paragraph",
      body: "Betondachsteine sind günstiger – sowohl im Material als auch oft in der Verlegung, weil sie sehr maßhaltig sind und sich schnell verlegen lassen. Als grobe Orientierung gelten folgende Richtwerte (brutto für Privatkunden):",
    },
    {
      kind: "table",
      columns: ["Position", "Richtwert (brutto)"],
      rows: [
        ["Betondachstein, reines Material", "ab ca. 12–30 €/m²"],
        ["Tondachziegel, reines Material", "ab ca. 25–45 €/m² (Premium und glasierte Formen höher)"],
        ["Eindeckung Betondachsteine (inkl. Lattung, Unterspannbahn, Montage)", "rund 100–130 €/m²"],
        ["Eindeckung Tondachziegel (inkl. Lattung, Unterspannbahn, Montage)", "rund 110–180 €/m²"],
        ["Eindeckung Biberschwanz (inkl. Lattung, Unterspannbahn, Montage)", "rund 180–250 €/m²"],
        ["Komplettsanierung (inkl. Dämmung, Gerüst, Dachfenster, Abbruch)", "rund 400–600 €/m²"],
      ],
      caption: "Richtwerte, abhängig von Produktlinie, Dachform und Dämmstandard – maßgeblich ist das individuelle Angebot.",
    },
    {
      kind: "paragraph",
      body: "Im Komplettpreis – also Eindeckung inklusive Dämmung (Zwischensparren- und Aufsparrendämmung), Gerüst, First- und Ortgangarbeiten, Dachfenster sowie Abbruch und Entsorgung der Altdeckung – sollten Sie je nach gewünschtem Dämmstandard mit rund 400–600 €/m² rechnen. Eine Photovoltaikanlage kommt separat hinzu. Wichtiger Praxis-Hinweis: Der reine Quadratmeterpreis ist nicht alles. Über eine Nutzungsdauer von 60+ Jahren kann der teurere, langlebigere Tonziegel im Lebenszykluskosten-Vergleich wieder aufholen – besonders, wenn das Betondach früher neu beschichtet oder ausgetauscht werden muss.",
    },

    { kind: "heading", level: 2, text: "Gewicht und Statik: Worauf muss der Dachstuhl ausgelegt sein?" },
    {
      kind: "paragraph",
      body: "Betondachsteine sind schwerer als Tonziegel. Ein einzelner Betondachstein (z. B. „Frankfurter Pfanne“) wiegt rund 4,0–4,5 kg, ein Tonziegel mit 2,8–3,8 kg spürbar weniger. Aufs Dach gerechnet liegt die Last grob bei 40–55 kg/m². Für Neubauten ist das selten ein Thema – der Dachstuhl wird passend dimensioniert. Bei Sanierungen oder Aufstockungen (z. B. Dachgeschossausbau) ist das Eigengewicht aber ein echtes Kriterium: Ist die vorhandene Statik begrenzt, kann der leichtere Tonziegel die wirtschaftlichere Lösung sein, weil der Dachstuhl nicht verstärkt werden muss. Das gehört vor jeder Materialwahl fachlich bewertet.",
    },

    { kind: "heading", level: 2, text: "Optik und Farbbeständigkeit: Welches Dach bleibt schöner?" },
    {
      kind: "paragraph",
      body: "Hier liegt der größte Langzeit-Unterschied – zugunsten des Tons. Bei Tondachziegeln ist die Farbe das Ergebnis des Brennvorgangs und sitzt durch und durch im Material. Naturrote Ziegel sind praktisch unverwüstlich farbecht; engobierte und vor allem glasierte Ziegel bleiben über Jahrzehnte farbintensiv und nehmen Schmutz schlechter an.",
    },
    {
      kind: "paragraph",
      body: "Betondachsteine erhalten ihre Farbe über Pigmente und eine Oberflächenbeschichtung. Diese kann über die Jahrzehnte vergrauen oder ausbleichen, das Dach wirkt dann matter und fleckiger. Moderne Hightech-Oberflächen verlangsamen diesen Effekt deutlich, heben ihn aber nicht vollständig auf. In Form- und Farbvielfalt sind beide Materialien heute nahezu gleichwertig. Wer Wert auf den klassischen, „warmen“ Naturton und dauerhafte Optik legt – etwa bei Sanierungen im Altbau- oder Denkmalkontext – ist mit Ton meist besser bedient.",
    },

    { kind: "cta", variant: "soft" },

    { kind: "heading", level: 2, text: "Witterung und Frost: Was hält den Berliner Winter besser aus?" },
    {
      kind: "paragraph",
      body: "Beide Materialien sind normgerecht frostsicher und wetterfest. Tonziegel werden nach DIN EN 1304, Betonsteine nach DIN EN 490 geprüft; beide schützen zuverlässig vor Regen, Schnee und Hagel und sind nicht brennbar. Beton gilt durch seine höhere Dichte als sehr robust gegen Frost; gleichzeitig erreichen hochwertige, moderne Tonziegel dieselbe Frostsicherheit. Für das Berliner Klima sind beide Materialien uneingeschränkt geeignet – entscheidend sind Qualität und fachgerechte Verlegung, nicht das Material an sich.",
    },

    { kind: "heading", level: 2, text: "Schallschutz: Welches Dach ist leiser?" },
    {
      kind: "paragraph",
      body: "Betondachsteine dämmen Außenlärm etwas besser. Eine Untersuchung des Schallschutzzentrums ift Rosenheim ergab, dass Dachsteine Straßen- und Fluglärm um ca. 3 Dezibel besser dämmen als Dachziegel – Grund sind die höhere Masse und der geringere Fugenanteil. Gegenüber Blech und Schiefer liegt der Vorteil bei bis zu 7 dB.",
    },
    {
      kind: "callout",
      variant: "note",
      body: "Einordnung: Die Studie wurde von einem Betondachstein-Hersteller beauftragt. Der Unterschied ist real, im Alltag unter einem modernen, gedämmten Dachaufbau aber meist gering – Dämmung und Dachaufbau beeinflussen den Schallschutz weit stärker als die Wahl Ton oder Beton.",
    },

    { kind: "heading", level: 2, text: "Ökobilanz und Nachhaltigkeit" },
    {
      kind: "paragraph",
      body: "In der Herstellung schneidet der Betondachstein bei der Energiebilanz besser ab. Weil Beton nicht gebrannt wird, benötigt seine Produktion deutlich weniger Energie als das Brennen von Tonziegeln bei rund 1.000 °C. Vergleichsstudien attestieren Dachsteinen einen geringeren Energieaufwand und niedrigere CO₂-Emissionen in der Produktion. Auf der anderen Seite stehen die Argumente für den Ton: Er ist ein rein natürlicher Rohstoff (Ton, Lehm, Wasser), gut wiederverwertbar, und die längere Lebensdauer verteilt die Herstellungsbelastung über mehr Nutzungsjahre. Eine faire Ökobilanz betrachtet also Herstellung und Lebensdauer gemeinsam.",
    },
    {
      kind: "callout",
      variant: "note",
      body: "Ehrliche Einordnung: Mehrere Ökobilanz-Studien sind branchen- bzw. herstellernah finanziert. Die Tendenz „Beton spart Herstellungsenergie“ ist physikalisch plausibel und gilt als belastbar – die exakten Prozentwerte sollte man aber nicht überbewerten.",
    },

    { kind: "heading", level: 2, text: "Wartung, Moos und Veralgung: Welches Dach bleibt sauberer?" },
    {
      kind: "paragraph",
      body: "Tonziegel sind tendenziell weniger anfällig für Moos und Algen. Sie nehmen Feuchtigkeit auf und geben sie wieder ab, wodurch Bewuchs erschwert wird; glasierte und engobierte Oberflächen verstärken diesen Effekt. Betondachsteine – vor allem ältere, unbeschichtete Produkte – sind etwas anfälliger für Moos- und Flechtenbewuchs; moderne beschichtete Dachsteine reduzieren das deutlich. Für beide gilt: Bewuchs ist primär ein optisches, kein statisches Problem und hängt stark von der Lage ab (Nordseite, Bäume, Feuchtigkeit). Regelmäßige fachliche Dachkontrolle verlängert bei beiden Materialien die Lebensdauer.",
    },

    { kind: "heading", level: 2, text: "Photovoltaik und Indach-Solar: Welche Eindeckung passt zur Solaranlage?" },
    {
      kind: "paragraph",
      body: "Beide Eindeckungen sind PV-tauglich – entscheidend sind Statik und Dachneigung, nicht das Material. Sowohl auf Tonziegeln als auch auf Betonsteinen lassen sich Aufdach-Anlagen montieren. Spannender ist die Indach-Integration, bei der die Module die Eindeckung teilweise ersetzen und bündig im Dach liegen. Bewährte Indach-Systeme wie Solrif (seit über 20 Jahren im Markt, europaweit über 800 MW verbaut) und herstellerintegrierte Lösungen lassen sich mit beiden Materialien kombinieren. Voraussetzung ist in der Regel ein Steildach mit mindestens ca. 20–25° Neigung und eine tragfähige, saubere Unterkonstruktion.",
    },
    {
      kind: "paragraph",
      body: "Genau hier liegt der Mehrwert einer integrierten Dach-Solar-Planung: Wer Dachsanierung und Photovoltaik in einem Zug denkt, spart Gerüst, Eindeckung und Doppelarbeit – und bekommt ein Dach, das ästhetisch und energetisch aus einem Guss ist.",
    },

    { kind: "heading", level: 2, text: "Welches Material passt zu wem? Die Entscheidungshilfe" },
    { kind: "heading", level: 3, text: "Tondachziegel sind die richtige Wahl, wenn …" },
    {
      kind: "list",
      items: [
        "dauerhafte Optik und Farbechtheit wichtig sind (Altbau, Sanierung, gehobener Anspruch, Denkmalumfeld),",
        "maximale Lebensdauer und Werterhalt im Vordergrund stehen,",
        "der Dachstuhl bei einer Sanierung Gewicht sparen soll,",
        "ein natürlicher Baustoff bevorzugt wird.",
      ],
    },
    { kind: "heading", level: 3, text: "Betondachsteine sind die richtige Wahl, wenn …" },
    {
      kind: "list",
      items: [
        "das Budget bzw. das Preis-Leistungs-Verhältnis im Vordergrund steht,",
        "ein geringfügig besserer Schallschutz an einer lauten Lage zählt,",
        "die Herstellungs-Ökobilanz ein Kaufargument ist,",
        "eine schnelle, wirtschaftliche Eindeckung gefragt ist (z. B. größere Flächen).",
      ],
    },
  ],
  meisterempfehlung:
    "Aus 30 Jahren Dachpraxis kann ich Ihnen sagen: Es gibt kein „besseres“ Material – nur das passendere für Ihr Haus. Optik, Lebensdauer und Werterhalt sprechen für Ton; Preis, Schallschutz und Herstellungs-Ökobilanz für Beton. Den größten Unterschied im Ergebnis macht ohnehin nicht die Pfanne, sondern die fachgerechte Planung und Verlegung – inklusive Unterkonstruktion, Dämmung und einer eventuellen PV-Integration. Lassen Sie Ihr Dach deshalb vor der Materialwahl baulich gesamtbewerten: Statik, Neigung, Dämmung und mögliche Solar-Integration zusammen. Das verhindert teure Fehlentscheidungen – wir beraten Sie in Berlin und Umland gern zur Komplettlösung.",
  faqs: [
    {
      question: "Was ist besser: Tondachziegel oder Betondachstein?",
      answer:
        "Es gibt kein pauschal „besseres“ Material. Tonziegel halten länger und bleiben optisch schöner, Betonsteine sind günstiger und etwas besser im Schallschutz. Die richtige Wahl hängt von Budget, Statik und optischem Anspruch ab.",
    },
    {
      question: "Welches Dach hält länger – Ton oder Beton?",
      answer:
        "Tondachziegel halten in der Regel länger: ca. 60–80 Jahre, glasiert oder engobiert bis zu rund 100 Jahre. Betondachsteine erreichen typischerweise 40–60 Jahre, hochwertige Produkte bei sauberer Verlegung bis zu 80 Jahre.",
    },
    {
      question: "Ist ein Tonziegeldach teurer als ein Betondach?",
      answer:
        "Ja, in der Anschaffung. Im reinen Material kosten Tondachziegel ab ca. 25–45 €/m², Betondachsteine ab ca. 12–30 €/m². Bei der Eindeckung inklusive Lattung, Unterspannbahn und Montage liegen Sie bei rund 110–180 €/m² für Ton gegenüber rund 100–130 €/m² für Beton (Biberschwanz: rund 180–250 €/m²). Über die längere Lebensdauer des Tonziegels relativiert sich der Unterschied in der Lebenszykluskosten-Betrachtung.",
    },
    {
      question: "Sind Betondachsteine schwerer als Tonziegel?",
      answer:
        "Ja. Ein Betondachstein wiegt rund 4,0–4,5 kg, ein Tonziegel etwa 2,8–3,8 kg. Bei Sanierungen mit begrenzter Statik kann das den Ausschlag für Ton geben, weil der Dachstuhl dann nicht verstärkt werden muss.",
    },
    {
      question: "Vergrauen Betondachsteine?",
      answer:
        "Über die Jahrzehnte kann die Oberfläche von Betonsteinen vergrauen oder ausbleichen, da die Farbe an der Oberfläche sitzt. Moderne Beschichtungen verlangsamen das deutlich. Tonziegel sind durchgefärbt und bleiben farbechter.",
    },
    {
      question: "Kann man auf beide Dächer eine Photovoltaikanlage montieren?",
      answer:
        "Ja. Sowohl Aufdach- als auch Indach-Anlagen sind auf Ton- und Betoneindeckungen möglich. Entscheidend sind Statik und Dachneigung (idealerweise mindestens ca. 20–25°). Im Budget einer Dachsanierung kommt die Photovoltaikanlage separat hinzu.",
    },
  ],
  datePublished: "2026-06-10",
  related: {
    leistung: { href: "/leistungen/steildach", label: "Zu unserer Steildach-Leistung" },
    otherRatgeber: [
      { slug: "wann-dach-sanieren", label: "Wann muss ein Dach saniert werden? 7 Warnsignale" },
      { slug: "aufsparrendaemmung-vs-zwischensparrendaemmung", label: "Aufsparren- vs. Zwischensparrendämmung" },
    ],
  },
}
