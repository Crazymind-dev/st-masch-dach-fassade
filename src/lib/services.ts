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
  /** Ratgeber/Einsteigerwissen — Problem-Erklärung-Handlung-Muster wie auf /foerderung. */
  guide?: {
    eyebrow: string
    title: string
    intro: string
    sections: { title: string; body: string }[]
  }
  /** Leistungsspezifische FAQs — rendered + zusätzlich als FAQPage JSON-LD. */
  faqs?: { question: string; answer: string }[]
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
    guide: {
      eyebrow: "Ratgeber",
      title: "Wann muss ein Dach saniert werden? Die wichtigsten Anzeichen",
      intro:
        "Viele Eigentümer:innen bemerken Probleme am Steildach zu spät — oft erst, wenn der Schaden bereits im Wohnraum sichtbar ist. Dabei gibt es klare Warnsignale, die lange vor Nässe an der Decke zu sehen sind. Wer sie kennt, kann rechtzeitig handeln und oft tausende Euro an Folgeschäden sparen.",
      sections: [
        {
          title: "Feuchtigkeit oder Flecken im Dachboden",
          body: "Das ist das eindeutigste Alarmsignal. Braune Verfärbungen an Sparren, feuchter Dämmstoff oder sichtbare Wasserränder auf dem Boden bedeuten: Ihr Dach ist undicht. Je länger das unbemerkt bleibt, desto tiefer frisst sich die Feuchte in die Holz­konstruktion.",
        },
        {
          title: "Lose, gebrochene oder verrutschte Ziegel",
          body: "Einzelne Schäden sind mit einer gezielten Reparatur schnell erledigt. Sind gleich an mehreren Stellen Ziegel locker oder gebrochen, ist die gesamte Eindeckung vermutlich am Ende ihrer Lebensdauer. Vom Boden aus mit Fernglas oder Drohne gut erkennbar.",
        },
        {
          title: "Starker Moos- und Algenbewuchs",
          body: "Moos selbst ist kein Drama, aber es zeigt: Wasser steht auf dem Dach, statt abzulaufen. Die Oberfläche der Ziegel ist porös geworden und saugt Feuchte auf. Spätestens bei deutlichem Bewuchs sollte eine Inspektion her.",
        },
        {
          title: "Dachstuhl durchhängt oder ist wellig",
          body: "Ein gesundes Dach hat gerade Linien. Wellen, Durchbiegungen oder sichtbarer Versatz deuten auf statische Schäden am Tragwerk hin — meist durch langjährige Nässe. Das ist kein kleiner Defekt mehr, hier muss schnell ein Fachmann ran.",
        },
        {
          title: "Ständig steigende Heizkosten",
          body: "Geht die Heizrechnung trotz unveränderten Nutzungsverhaltens Jahr für Jahr nach oben, liegt das oft an fehlender oder beschädigter Dach­dämmung. Bis zu 30 % der Wärme eines Hauses entweichen übers Dach — und jede verlorene Kilowatt­stunde zahlen Sie.",
        },
        {
          title: "Das Dach ist über 40 Jahre alt",
          body: "Ziegel halten lange, aber nicht ewig. Unterspannbahnen, Lattung und Anschlüsse haben ein Maximum-Alter von etwa 40 Jahren. Bei älteren Dächern lohnt eine Kontroll­inspektion, auch wenn äußerlich noch alles in Ordnung scheint.",
        },
        {
          title: "Nach einem schweren Sturm",
          body: "Auch wenn nichts sichtbar fehlt: Ein Sturm kann Ziegel anheben und falsch wieder absetzen, Dichtungen lösen oder Anschlüsse reißen. Eine kurze Inspektion danach zahlt sich aus — Ihre Versicherung verlangt sie oft ohnehin.",
        },
      ],
    },
    faqs: [
      {
        question: "Was kostet eine Dachsanierung in Berlin pro Quadratmeter?",
        answer:
          "Eine komplette Steildachsanierung (Neueindeckung mit Unterspannbahn, Lattung und Ziegel) kostet in Berlin typischerweise 180–260 € pro m² brutto. Kommt eine Aufsparrendämmung dazu, sind 280–380 € realistisch. Gerüst, Entsorgung und Kleinteile sind dabei inklusive. Den tatsächlichen Preis bestimmen Dachform, Neigung, Materialwahl und Zustand des Tragwerks — ein ehrliches Vor-Ort-Angebot ist Pflicht.",
      },
      {
        question: "Wie lange dauert eine Neueindeckung?",
        answer:
          "Bei einem durchschnittlichen Einfamilienhaus (120–180 m² Dachfläche) rechnen Sie mit 1–2 Wochen für die reine Eindeckung. Gerüstbau, Entsorgung und Fertigstellung­sarbeiten kommen davor und danach jeweils 1–2 Tage. Wetter ist der größte Unsicherheits­faktor — wir planen entsprechend puffer­freundlich.",
      },
      {
        question: "Wann lohnt sich eine Aufsparrendämmung?",
        answer:
          "Immer dann, wenn ohnehin eine Neueindeckung ansteht. Die Aufsparren­dämmung ist bauphysikalisch die beste Variante — sie umhüllt den Dachstuhl lückenlos von außen. Wenn das Dach nur ansonsten in Ordnung ist, kommt eher eine Zwischen- oder Einblas­dämmung in Frage. Wir rechnen beides durch und sagen ehrlich, was sich lohnt.",
      },
      {
        question: "Welche Förderungen gibt es für eine Dachsanierung?",
        answer:
          "Für die energetische Sanierung (also mit Dämmung) gibt es über BAFA BEG EM bis 20 % Zuschuss, über KfW 261 zusätzlich zinsgünstige Kredite mit Tilgungszuschuss. Alternativ § 35c EStG (Steuerbonus). Weil wir Dachdecker­meister UND BAFA-Energieberater im Haus haben, laufen Antrag und iSFP bei uns direkt mit. Details auf unserer Förderungsseite.",
      },
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
    guide: {
      eyebrow: "Ratgeber",
      title: "Bitumen, EPDM oder Kunststoff — welche Abdichtung passt zu Ihrem Flachdach?",
      intro:
        "Bei Flachdächern entscheidet das Abdichtungs­material über Haltbarkeit, Wartungsaufwand und Preis. Es gibt keine universell beste Lösung — aber es gibt klare Unterschiede, die Ihre Entscheidung vereinfachen.",
      sections: [
        {
          title: "Bitumenschweißbahn — der bewährte Klassiker",
          body: "Zweilagig verschweißtes Bitumen ist seit Jahrzehnten Standard auf deutschen Flachdächern. Lebensdauer: 25–35 Jahre. Stark belastbar, reparatur­freundlich, gut bezahlbar (ca. 60–90 €/m²). Nachteile: Anschlüsse brauchen Erfahrung, bei hohen Temperaturen fließt das Material leicht. Ideal für unkomplizierte Dachflächen im Wohnbau.",
        },
        {
          title: "EPDM-Bahn — die langlebigste Variante",
          body: "Synthetischer Kautschuk, werks­gefertigt in großen Bahnen, mit wenigen Nähten verlegt. Lebensdauer: 40–50 Jahre. Sehr elastisch, UV-stabil, wartungsarm. Preis: 80–130 €/m². Nachteile: höhere Anschaffung, empfindlich gegen scharfe Kanten. Ideal für Gründächer und Dächer, die Sie einmal machen und dann Jahrzehnte in Ruhe haben wollen.",
        },
        {
          title: "Flüssigkunststoff — die Problemlöser-Lösung",
          body: "Aufgespritzte oder aufgerollte Flüssigabdichtung, die nahtlos aushärtet. Unschlagbar bei komplizierten Anschlüssen, Durch­dringungen und Sanierungen bestehender Dächer. Lebensdauer: 25–30 Jahre. Preis: 90–140 €/m². Nicht für sehr große, einfache Flächen — dort ist Bitumen oder EPDM wirtschaftlicher.",
        },
        {
          title: "Und die Förderung?",
          body: "Wenn bei der Sanierung gleichzeitig die Wärmedämmung erneuert wird, ist das über BAFA BEG EM mit bis 20 % förderfähig (bis 12.000 € pro Wohneinheit). Die Flach­dachdämmung macht Sinn, weil über ein schlecht gedämmtes Flachdach bis zu 25 % der Heizwärme verloren gehen können. Wir bringen beides in einem Projekt zusammen.",
        },
      ],
    },
    faqs: [
      {
        question: "Welche Flachdach-Abdichtung ist die beste?",
        answer:
          "Es gibt keine universell beste — nur die passende. Für Standard­flachdächer im Wohnbau ist zweilagige Bitumenschweißbahn der beste Kompromiss aus Preis und Haltbarkeit. Wer Jahrzehnte Ruhe haben will, nimmt EPDM. Für komplizierte Anschlüsse und Sanierungen kommt Flüssigkunststoff zum Einsatz. Wir empfehlen nach Dachgeometrie, Nutzung und Budget — nicht nach Marge.",
      },
      {
        question: "Wie oft muss ein Flachdach gewartet werden?",
        answer:
          "Mindestens einmal jährlich sollten Sie das Flachdach kontrollieren lassen — idealerweise im Herbst, vor der nassen Jahreszeit. Dabei werden Abläufe gereinigt, Anschlüsse geprüft und kleine Schäden sofort behoben. Eine Wartung kostet 150–250 € und kann jahrzehnte­lange Flachdach­lebens­dauer sichern. Ohne Wartung sinkt sie dramatisch.",
      },
      {
        question: "Wie erkenne ich ein undichtes Flachdach?",
        answer:
          "Klassische Zeichen sind feuchte Flecken an Deckenanschlüssen, Salz­ausblühungen innen, oder auf dem Dach sichtbare Risse, Blasen und stehendes Wasser. Nicht jede Leckage ist sofort innen sichtbar — Wasser kann meterweit durch den Aufbau wandern. Bei Verdacht lohnt eine Leckortung mit Thermografie oder Feuchtemessung, bevor großflächig saniert wird.",
      },
      {
        question: "Kann ich mein Flachdach begrünen lassen?",
        answer:
          "Ja — wenn die Statik es hergibt. Extensive Begrünung (Sedum) wiegt etwa 80–150 kg/m² und ist auf den meisten Dächern möglich. Intensive (begehbare) Begrünung braucht 300+ kg/m² Tragreserve. Die Dachabdichtung muss wurzelfest sein. In Berlin ist das über GründachPLUS mit 95–180 €/m² förderfähig — mehr dazu auf unserer Förderungsseite.",
      },
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
    guide: {
      eyebrow: "Ratgeber",
      title: "Gründach + Solar: Warum die Kombination mehr bringt als beides einzeln",
      intro:
        "Viele Eigentümer:innen halten Gründach und PV für Konkurrenten um die Dachfläche. Tatsächlich ergänzen sich beide — und in Berlin gibt es dafür einen eigenen Förderbonus. Wer beides kombiniert, bekommt mehr Ertrag, mehr Förderung und ein Dach, das dem Klima hilft.",
      sections: [
        {
          title: "Kühleffekt erhöht den PV-Ertrag",
          body: "Solarmodule verlieren mit jedem Grad über 25 °C messbar an Wirkungsgrad (etwa 0,4 %/°C). Ein Schwarzdach wird im Sommer bis zu 70 °C warm — Module darüber verlieren zweistellige Prozente. Ein Gründach bleibt durch Verdunstung auf 25–30 °C. Messungen zeigen 2–6 % Mehrertrag der PV-Anlage — über 20 Jahre summiert das.",
        },
        {
          title: "GründachPLUS Berlin — Kombibonus explizit",
          body: "Das Berliner GründachPLUS-Programm gibt 95–180 €/m² für die Dach­begrünung plus einen Kombi-Bonus von 40 €/m², wenn gleichzeitig eine PV-Anlage montiert wird. Bei 80 m² Dach sind das zusätzlich 3.200 € nur weil Sie zwei gute Dinge kombinieren.",
        },
        {
          title: "Retention bei Starkregen",
          body: "Ein 10 cm dickes Substrat speichert rund 40 l/m² Regenwasser — das wird zeitverzögert wieder abgegeben. Bei den zunehmenden Stark­regen­ereignissen in Berlin entlastet das die Kanalisation spürbar. Retentionsdächer sparen zusätzlich Abwassergebühren (Niederschlagswasser).",
        },
        {
          title: "Dämmwirkung im Winter",
          body: "Ein Gründach mit 8–12 cm Substrat verbessert den U-Wert Ihres Dachs spürbar. Im Winter entweicht weniger Wärme nach oben, im Sommer bleibt die Dämmung kühl. Der Effekt ist kleiner als bei einer richtigen Dämmung, aber messbar — und kommt quasi gratis obendrauf.",
        },
      ],
    },
    faqs: [
      {
        question: "Wie viel kostet ein Gründach in Berlin?",
        answer:
          "Extensives Gründach (Sedum, ca. 10 cm Aufbau) kostet in Berlin typischerweise 80–140 €/m² inklusive wurzelfester Abdichtung, Drainage, Substrat und Bepflanzung. Intensive Begrünung mit Stauden und Sträuchern liegt bei 180–350 €/m². Über GründachPLUS gibt es 95–180 €/m² Zuschuss, dazu Boni für Biodiversität und Solar-Kombi. Netto bleibt oft weniger übrig als man denkt.",
      },
      {
        question: "Muss ich die Statik anpassen?",
        answer:
          "Meistens nicht. Extensive Begrünung wiegt im gesättigten Zustand etwa 80–150 kg/m² — das tragen die meisten Flachdächer. Intensive Begrünung braucht 300–500 kg/m² Tragreserve, dafür ist oft eine statische Prüfung nötig. Wir prüfen das vor dem ersten Sack Substrat und sagen ehrlich, ob Ihr Dach bereit ist oder nachgerüstet werden muss.",
      },
      {
        question: "Wie viel Pflege braucht ein Gründach?",
        answer:
          "Ein extensives Gründach braucht 1–2 Mal jährlich Pflege: Fremdbewuchs entfernen, Abläufe kontrollieren, Sedum nachpflanzen wo nötig. Das ist weniger Aufwand als ein Rasen. Intensive Begrünungen werden wie ein normaler Garten gepflegt. Wir bieten Wartungs­verträge ab 0,80 €/m² pro Besuch — dann müssen Sie sich um nichts kümmern.",
      },
      {
        question: "Kann ich ein Steildach begrünen?",
        answer:
          "Ja — bis etwa 30° Neigung. Wir verwenden dafür spezielle Rutsch­sicherungs­systeme und dickere Substratmatten. Ab 30° wird's technisch aufwendig, ab 45° wirtschaftlich nicht mehr sinnvoll. Auf Flachdächern und leichten Schrägdächern ist die Begrünung Standard­technik.",
      },
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
    guide: {
      eyebrow: "Ratgeber",
      title: "WDVS oder vorgehängte Fassade? Was sich wann wirklich lohnt",
      intro:
        "Die Wahl zwischen WDVS und VHF ist weniger Geschmacks- als Rechenfrage. Die beiden Systeme unterscheiden sich in Kosten, Lebensdauer, Bauphysik und Gestaltungsfreiheit deutlich. Ein ehrlicher Vergleich — ohne Marketingfloskeln.",
      sections: [
        {
          title: "WDVS — das wirtschaftliche Brot-und-Butter-System",
          body: "Dämmplatten werden direkt ans Mauerwerk geklebt/gedübelt, darauf kommen Armierung und Oberputz. Kosten: 130–180 €/m² inkl. Gerüst. Lebensdauer: 35–40 Jahre. Vorteile: günstig, schnell, viele Oberflächen- und Farbvarianten. Nachteile: bei falscher Ausführung Schimmelrisiko, Spechte lieben Styropor, nicht jedes Denkmal verträgt Plattenoptik.",
        },
        {
          title: "VHF — die langlebige Premium-Lösung",
          body: "Eine Tragkonstruktion hält Dämmung und Bekleidungsplatten (Faserzement, Schiefer, Holz, Metall) mit einem Luftspalt vom Mauerwerk weg. Kosten: 230–380 €/m². Lebensdauer: 50+ Jahre. Vorteile: bauphysikalisch optimal (Feuchte kann ausströmen), Materialien tauschbar, extrem stabil. Nachteile: höhere Anschaffung, dicker Aufbau (Grundstücksgrenzen beachten).",
        },
        {
          title: "Kerndämmung — der Turbo für Altbauten",
          body: "Bei zweischaligem Mauerwerk mit Hohlraum (typisch bei Häusern aus den 60er–80er Jahren) wird einfach Dämmstoff-Granulat eingeblasen. In einem Tag erledigt, ab 25 €/m². Sehr effektiv und fast unsichtbar. Einzige Voraussetzung: der Hohlraum muss mindestens 5 cm breit und trocken sein. Wir prüfen das mit Endoskop vorab.",
        },
        {
          title: "Innendämmung — wenn außen nicht geht",
          body: "Denkmalschutz, Grenzbebauung oder Klinkerfassade? Dann bleibt nur die Dämmung von innen. Technisch anspruchsvoll, weil die Taupunkt-Lage sich verschiebt. Wir arbeiten mit diffusionsoffenen Systemen (Calciumsilikat, Holzfaser), die Feuchte intelligent managen. Kosten: 80–140 €/m². Wohnfläche geht dabei natürlich verloren (ca. 8–12 cm Wand dicker).",
        },
        {
          title: "Alle vier Systeme sind förderfähig",
          body: "Über BAFA BEG EM gibt's bis 20 % Zuschuss, über KfW 261 kommt bei Effizienzhaus-Niveau Tilgungszuschuss dazu. Die Förderung erklärt unser eigener Energieberater beim Vor-Ort-Termin — das spart Ihnen den externen Berater und bringt 650 € + 5 %-Bonus automatisch mit.",
        },
      ],
    },
    faqs: [
      {
        question: "Was kostet eine Fassadendämmung in Berlin?",
        answer:
          "WDVS inklusive Gerüst, Dämmung und Oberputz kostet für ein Einfamilienhaus (ca. 180 m² Fassadenfläche) typischerweise 25.000–35.000 € brutto. Mit BAFA-Förderung (20 %) bleiben 20.000–28.000 € netto. VHF ist mit 45.000–65.000 € deutlich teurer, hält dafür aber auch 15+ Jahre länger. Kern­dämmung als Turbo-Lösung startet bei 3.500–6.000 € für ein Einfamilien­haus.",
      },
      {
        question: "Wie lange dauert eine Fassadensanierung?",
        answer:
          "Ein typisches Einfamilienhaus mit WDVS: 3–5 Wochen inkl. Gerüst, Trocknungs­zeiten und Witterungspuffer. VHF: 4–8 Wochen wegen Tragkonstruktion und aufwendigerer Ausführung. Kerndämmung: 1–2 Tage. Wir binden die Arbeiten in eine Jahreszeit mit ≥ 5 °C — im Winter­halbjahr wird's tricky.",
      },
      {
        question: "Lohnt sich eine Fassadendämmung überhaupt noch?",
        answer:
          "Fast immer, ja. Faustformel: Heizkosten­einsparung 25–40 % bei einem ungedämmten Altbau. Amortisations­zeit: 10–15 Jahre nach Abzug der Förderung — danach sparen Sie 20+ Jahre weiter. Dazu Werterhalt, weniger Kondensat an der Innenwand, angenehmeres Raumklima im Sommer. Genau durchrechnen lohnt sich — wir machen das gratis beim Vor-Ort-Termin.",
      },
      {
        question: "Was ist besser: WDVS oder Fassadenbegrünung?",
        answer:
          "Das sind keine Alternativen — die Begrünung ersetzt die Dämmung nicht. Sie verbessert aber das Mikroklima, schützt die Fassade vor Witterung und Feinstaub und ist in Berlin über GründachPLUS mit 50 % förderfähig. Wir kombinieren beides gern: erst WDVS dämmen, dann begrünen. So kommen Sie auf KfW-Effizienzhaus-Niveau + Klimavorteil.",
      },
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
    guide: {
      eyebrow: "Ratgeber",
      title: "Metalldach oder Ziegel — Lohnt sich der höhere Preis?",
      intro:
        "Ein Metalldach kostet bei der Neueindeckung mehr als Ziegel — relativiert sich aber über die Lebenszeit oft deutlich. Wer rechnet statt nur zu schauen, kommt zu interessanten Ergebnissen.",
      sections: [
        {
          title: "Lebensdauer: 80+ Jahre statt 40",
          body: "Titanzink-Stehfalz hält typischerweise 80–100 Jahre, Kupfer sogar deutlich länger. Klassische Ton­ziegel kommen auf 40–60 Jahre, dann braucht das Dach eine Neueindeckung. Über 80 Jahre machen Sie also zwei Ziegeldächer — oder ein Metalldach.",
        },
        {
          title: "Leichter = bessere Statik­reserven",
          body: "Titanzink wiegt etwa 7 kg/m², Tondachziegel 45 kg/m². Für Altbauten mit schwachem Dachstuhl oder Aufbauten wie Solaranlagen ist das ein praktischer Vorteil: weniger Last, mehr Reserven für PV oder Begrünung.",
        },
        {
          title: "Ziegeldesign aus Metall — Kompromiss",
          body: "Metalldachplatten im Ziegeldesign sehen auf Distanz aus wie klassische Ziegel, wiegen aber nur ein Sechstel und halten doppelt so lang. Für 30–60 €/m² Materialpreis eine interessante Alternative, wenn Sie Altbau-Optik mit Metall-Langlebigkeit kombinieren wollen.",
        },
        {
          title: "Stahltrapezblech für Gewerbe",
          body: "Bei Hallen, Lager und landwirtschaftlichen Gebäuden ist Trapezblech das Mittel der Wahl: günstig (ca. 25–40 €/m²), schnell verlegt, große Spannweiten möglich. Wärme­dämmung kommt auf Wunsch als Sandwich­element darunter. Nicht die schönste Lösung — aber die wirtschaftlichste.",
        },
      ],
    },
    faqs: [
      {
        question: "Was kostet ein Titanzink-Stehfalzdach?",
        answer:
          "Material und Montage zusammen kosten für Titanzink-Stehfalz typischerweise 180–260 €/m². Bei 150 m² Dachfläche also ca. 27.000–39.000 € brutto. Kupfer liegt mit 280–400 €/m² höher. Gegenüber Ziegel zahlen Sie kurzfristig 30–50 % mehr — halten aber doppelt so lang.",
      },
      {
        question: "Wie lange hält ein Metalldach?",
        answer:
          "Titanzink: 80–100 Jahre. Kupfer: 100+ Jahre. Aluminium: 60–80 Jahre. Stahl­trapez­blech (verzinkt/beschichtet): 40–60 Jahre. Voraussetzung ist fachgerechte Ausführung und regelmäßige Sichtkontrolle — wir bieten Wartungs­verträge für genau das.",
      },
      {
        question: "Rostet ein Metalldach?",
        answer:
          "Titanzink und Kupfer bilden eine natürliche Schutzschicht (Patina) und rosten nicht. Aluminium oxidiert nur oberflächlich. Stahl-Trapezblech ist werkseitig verzinkt und beschichtet — wenn die Beschichtung verletzt wird (Hagel, Schweiß­arbeiten), kann lokal Rost entstehen. Regelmäßige Inspektion fängt das ab.",
      },
      {
        question: "Kann ich eine PV-Anlage auf ein Metalldach montieren?",
        answer:
          "Ja — in vielen Fällen sogar einfacher als auf Ziegel. Für Stehfalz­dächer gibt es spezielle Klemmsysteme, die ohne Bohrung auskommen. Für Trapezblech gibt es angepasste Halterungen. Die geringere Dachlast lässt zudem größere Anlagen zu. Wir planen Dach und PV gemeinsam, damit nichts doppelt gebaut werden muss.",
      },
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
      { title: "VELUX-Partnerschaft", description: "Offizieller VELUX-Fachpartner mit Zugriff auf das komplette Sortiment — Standardfenster, Fenster-Kombinationen, Studio und Cabrio." },
      { title: "Neueinbau & Austausch", description: "Saubere Öffnung, passgenaue Einbindung in die Eindeckung, oder Tausch am selben Tag — je nach Projekt." },
      { title: "Gauben", description: "Schlepp-, Giebel-, Flach- oder Fledermausgauben — mehr Wohnraum und Stehhöhe unterm Dach." },
      { title: "Flachdachfenster", description: "Flache VELUX-Lichtkuppeln für Wohn- und Gewerbeflachdächer — mit elektrischer Öffnung auf Wunsch." },
      { title: "Oberlichter & Lichtbänder", description: "Natürliches Tageslicht für Hallen, Treppenhäuser und Wohngebäude — auch als zusammenhängende Lichtbänder über mehrere Meter." },
      { title: "Spezialausführungen", description: "Ausstiegsfenster, Rauchabzugsfenster (RWA), Sonnenschutz und smarte Steuerung — auch baurechtlich anspruchsvolle Anforderungen." },
    ],
    materials: ["VELUX Standardfenster", "VELUX Kunststoff", "VELUX Studio (Dreifach-Element)", "VELUX Cabrio & Panorama"],
    process: [
      { step: 1, title: "Beratung", description: "Aufmaß, Lichtplanung und Auswahl der passenden VELUX-Variante." },
      { step: 2, title: "Angebot", description: "Transparentes Komplettangebot inkl. Rahmen, Eindeckrahmen, Zubehör." },
      { step: 3, title: "Einbau", description: "Präzise Öffnung des Dachs, wasserdichte Einbindung, saubere Innenverkleidung." },
      { step: 4, title: "Abnahme", description: "Funktionstest, Einweisung, Dokumentation — fertig in 1–2 Tagen pro Fenster." },
    ],
    guide: {
      eyebrow: "Ratgeber",
      title: "Dachfenster tauschen oder Gaube bauen — was passt wann?",
      intro:
        "Dachfenster und Gaube schaffen beide Licht und Luft unterm Dach — aber sie erreichen unterschiedliche Dinge. Die Entscheidung hängt von Wohnraum­bedarf, Budget und Dachform ab.",
      sections: [
        {
          title: "Dachfenster-Austausch — schnell und wirtschaftlich",
          body: "Wenn Ihr bestehendes Fenster 20+ Jahre alt ist, lohnt der Tausch gegen ein aktuelles VELUX-Modell fast immer. Moderne Dachfenster haben bessere U-Werte (0,85 statt 1,6), dreifach verglast, besseren Schallschutz, integrierten Sonnenschutz. Tausch in 1 Tag, Kosten 1.200–2.500 € pro Fenster inkl. Eindeckrahmen und Innenverkleidung.",
        },
        {
          title: "Neueinbau — wenn ein neues Fenster her soll",
          body: "Ein zusätzliches Dachfenster wird dort eingesetzt, wo vorher keines war. Das heißt: Sparren müssen ggf. aus­gewechselt und Auswechslungen eingebaut werden, die Eindeckung wird geöffnet und fachgerecht wieder angeschlossen. Kosten: 2.500–4.500 € inkl. Statik und Einbindung. Baurechtlich meist genehmigungsfrei, wenn die Dachform nicht ändert.",
        },
        {
          title: "Gaube — richtiger Wohnraum­gewinn",
          body: "Eine Gaube schafft echte Stehhöhe, nicht nur Licht. Rechtlich oft genehmigungs­pflichtig in Berlin. Kosten: 8.000–25.000 € je nach Bauart (Schlepp-, Giebel-, Fledermausgaube). Lohnt sich, wenn Sie das Dachgeschoss dauerhaft zu vollem Wohnraum umbauen wollen — nicht für reine Licht­versorgung.",
        },
        {
          title: "Flachdachfenster — für Flachdach-Anbauten",
          body: "Wo ein klassisches Dachfenster nicht funktioniert (Flachdach­garagen, Erker, Anbauten), kommen VELUX-Lichtkuppeln zum Einsatz. Elektrisch öffenbar, mit Sonnen- oder Rauchabzugs­funktion. Kosten: 1.500–3.500 € pro Element.",
        },
        {
          title: "Oberlichter und Lichtbänder — für Hallen",
          body: "Bei Gewerbeflächen machen Lichtbänder oft mehr Sinn als einzelne Fenster — sie versorgen große Flächen gleichmäßig mit Tageslicht und sparen so Strom für Beleuchtung. In Kombination mit Rauchabzug (RWA) sind sie oft baurechtlich ohnehin vorgeschrieben.",
        },
      ],
    },
    faqs: [
      {
        question: "Was kostet ein neues Dachfenster inklusive Einbau?",
        answer:
          "Ein Tausch (altes Fenster raus, neues VELUX rein, Eindeckrahmen und Innen­verkleidung neu) kostet in Berlin typischerweise 1.200–2.500 € pro Fenster. Neueinbau inkl. Dachöffnung, Sparren­­auswechslung und Statik 2.500–4.500 €. Preis hängt von Fenstergröße, Position (Zugänglichkeit) und Ausstattung (Rollladen, elektrische Öffnung, Sonnenschutz) ab.",
      },
      {
        question: "Brauche ich eine Baugenehmigung für ein Dachfenster?",
        answer:
          "In der Regel nicht — solange die Dachform erhalten bleibt und keine Nachbar­rechte betroffen sind. Anders bei Gauben: die sind fast immer genehmigungs­pflichtig. Bei Denkmalschutz gelten Sonderregeln. Wir klären das vor dem Angebot mit dem zuständigen Bezirksamt.",
      },
      {
        question: "Warum VELUX und nicht eine andere Marke?",
        answer:
          "Wir sind offizieller VELUX-Fachpartner. VELUX ist Marktführer, hat das mit Abstand breiteste Sortiment (vom Standard­fenster bis zur Panorama-Lösung), bietet 10 Jahre Garantie auf die Dichtigkeit und hat ein verlässliches Ersatzteil-Netz auch für 20 Jahre alte Fenster. Andere Hersteller machen ihre Produkte gut, aber das Ökosystem ist unvergleichbar.",
      },
      {
        question: "Wie lange dauert der Einbau?",
        answer:
          "Ein Austausch ist oft in 4–6 Stunden erledigt. Ein Neueinbau (inklusive Dachöffnung, Sparrenarbeit, Eindeckrahmen, Innen­verkleidung) dauert 1–2 Tage. Bei Rauchabzugs­fenstern mit RWA-Steuerung kommt ein halber Tag Elektrik dazu. Das Dach ist während der Arbeiten wetterfest abgedichtet — auch bei Regen können wir weitermachen.",
      },
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
    guide: {
      eyebrow: "Ratgeber",
      title: "Was eine Dachwartung kostet — und was sie spart",
      intro:
        "Dachwartung wirkt wie eine lästige Zusatzausgabe. In Wahrheit ist sie einer der besten Euros, die man in ein Haus stecken kann. Die Mathematik ist nicht kompliziert.",
      sections: [
        {
          title: "Was kostet eine jährliche Wartung?",
          body: "Ein durchschnittliches Einfamilienhaus-Dach inspizieren wir für 150–280 € im Jahr. Darin enthalten: komplette Sichtkontrolle, Rinnen und Abläufe reinigen, lose Ziegel nachfixieren, Anschlüsse und Dichtungen prüfen, Schrift­dokumentation mit Fotos. Im Wartungs­vertrag wird's günstiger, dafür haben Sie Planbarkeit und Vorrang bei Notfällen.",
        },
        {
          title: "Was kostet ein Schaden, der durchrutscht?",
          body: "Eine undichte Stelle, die ein halbes Jahr unbemerkt bleibt, kostet typischerweise: 800–1.500 € Dachsanierung an der Stelle + 2.000–5.000 € für durchnässten Dämmstoff + 1.000–3.000 € für Dachstuhl­reparatur (wenn Holz befallen) + 500–2.000 € für Maler- und Putzarbeiten innen. Summe: oft 5-stellig. Eine einzige verpasste Wartung kann 10 Jahre Wartungs­kosten kosten.",
        },
        {
          title: "Wie oft sollte das Dach geprüft werden?",
          body: "Einmal jährlich ist Minimum — idealerweise im Herbst, bevor die nasse Jahreszeit kommt. Nach jedem schweren Sturm zusätzlich. Nach 20 Jahren Dachalter und bei Gebäuden über 40 Jahre empfiehlt sich alle zwei Jahre zusätzlich eine Tiefen­inspektion mit Thermografie — dann werden auch versteckte Feuchteschäden sichtbar.",
        },
        {
          title: "Wartungsvertrag oder Einzel­inspektion?",
          body: "Einzelne Inspektionen bekommen Sie immer, wenn Sie anrufen. Der Wartungs­vertrag (wir haben Ihr Dach im Kalender, Sie müssen nicht dran denken) kostet ein bisschen mehr Bindung, aber sichert Ihnen Vorrang bei Notfällen, garantierte Preise und Inspektions­­kontinuität. Für Eigentümer­gemeinschaften und Gewerbe ein Muss, für Eigenheime eine Überlegung wert.",
        },
      ],
    },
    faqs: [
      {
        question: "Wie oft muss ich mein Dach warten lassen?",
        answer:
          "Fürs Einfamilienhaus reicht eine jährliche Sichtinspektion, idealerweise im Herbst. Bei Flachdächern und Gründächern raten wir zusätzlich zu einer Kontrolle im Frühjahr (nach Winter). Nach Sturmereignissen immer zusätzlich. Für größere Wohn­anlagen und Gewerbe­dächer empfehlen wir halbjährlich.",
      },
      {
        question: "Was kostet ein Notdienst-Einsatz?",
        answer:
          "Ein Notdienst-Einsatz (Fahrt + 1–2 Stunden Sicherungs­arbeiten, Plane anbringen, loses Dachmaterial sichern) kostet 350–650 €. Das ist meist über die Wohn­gebäude­versicherung abgedeckt. Die anschließende dauerhafte Sanierung wird separat kalkuliert und ebenfalls oft von der Versicherung getragen. Wir dokumentieren den Schaden so, dass Ihre Versicherung alles Nötige hat.",
      },
      {
        question: "Was prüft ihr bei einer Dachinspektion genau?",
        answer:
          "Komplette Dacheindeckung auf Schäden und lose Teile, Anschlüsse (Schornstein, Gauben, Wandanschluss), Dachrinnen und Fallrohre (Reinigung inklusive), Unterspann­bahn von innen, Dach­dämmung auf Feuchtespuren, Einhangbleche, Wind­sog-Klammern, Sicherheits­einrichtungen. Sie bekommen einen Bericht mit Fotos, Einstufung nach Dringlichkeit und transparenter Kosten­einschätzung.",
      },
      {
        question: "Lohnt sich ein Wartungsvertrag?",
        answer:
          "Für Einfamilien­häuser ist er freiwillig — aber Kund:innen mit Vertrag haben bei Notfällen Vorrang und bekommen garantierte Preise. Für Eigentümer­gemeinschaften, Mehr­familien­häuser und Gewerbe ist er aus unserer Sicht Pflicht: die Koordination über 10–20 Jahre ist ohne Vertrag kaum sauber zu bekommen. Ab 18 € pro Monat für ein kleines Dach aufwärts.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
