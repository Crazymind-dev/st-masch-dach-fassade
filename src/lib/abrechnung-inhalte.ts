/**
 * Inhalte „Ihre Handwerksrechnung kurz erklärt" – portiert aus
 * `feedback-quellen/handwerksrechnung-kurz-erklaert.html` (Steves Transparenz-Entwurf).
 *
 * Redaktionelle Abweichungen von der Quelle:
 * - Abschnitt 11 „Was kostet ein Notdiensteinsatz?" wurde KOMPLETT entfernt –
 *   der Betrieb bietet keinen Notdienst mehr an (Entscheidung Steve, SRT-2).
 *   Die folgenden Abschnitte wurden neu durchnummeriert: 12→11, 13→12, 14→13,
 *   15→14, 16→15. Interne Verweise in den Texten zeigen ausschließlich auf die
 *   Abschnitte 1, 4 und 7 und bleiben daher unverändert gültig.
 * - Unausgefüllte Preis-Eingabefelder der Quelle (Stundenlohn-Tabelle, Pauschalen,
 *   Zonen-Tabelle, Rüst-/Kleinteilepauschale, Leistungspreise, Sprechzeiten) wurden
 *   gemäß Regel „keine Platzhalter" weggelassen (leere netto/brutto-Spalten bzw.
 *   Preis-Einschübe entfernt). Tatsächlich ausgefüllte Werte wurden übernommen:
 *   25 % Beschaffungs- und Bereitstellungsaufschlag (Abschnitt 6) sowie 0,00 €
 *   für die telefonische Erstberatung (Abschnitt 11, in der Inhalt-Spalte).
 *   Die Zelle „nach Vereinbarung" (Zone ab ca. 80 km) und „auf Anfrage / individuell"
 *   (Drohnenbefliegung) wurden in die verbleibende Textspalte übernommen.
 * - Reine Ausfüll-Anweisungen des interaktiven Formulars (z. B. „Tragen Sie einen
 *   Wert ein …", Hinweis zu grün/weiß hinterlegten Feldern, „Zonenzahl frei
 *   reduzierbar …", Spaltenzusatz „(PLZ final festlegen)") wurden nicht portiert.
 */

export interface AbrechnungAbschnitt {
  /** Anker-Slug für Drill-Down-Links, z. B. "anfahrt-zonen" */
  id: string
  nummer: number
  titel: string
  bloecke: AbrechnungBlock[]
}

export type AbrechnungBlock =
  | { art: "absatz"; text: string }
  | { art: "zwischentitel"; text: string }
  | { art: "liste"; punkte: string[] }
  | { art: "tabelle"; spalten: string[]; zeilen: string[][] }
  | { art: "box"; titel?: string; text: string }
  | { art: "hinweis"; text: string }

export const abrechnungIntro: string =
  "Handwerksleistungen sind Vertrauenssache. Transparenz ist für uns selbstverständlich – deshalb beantworten wir Ihnen schon im Vorfeld die häufigsten Fragen rund um Ihre Rechnung von St. Masch Dach · Fassade · Solar."

export const abrechnungAbschnitte: AbrechnungAbschnitt[] = [
  {
    id: "stundenloehne",
    nummer: 1,
    titel: "Wie hoch sind die Stundenlöhne?",
    bloecke: [
      {
        art: "absatz",
        text: "Wir rechnen unsere Leistungen in Arbeitswerten (AW) ab.",
      },
      {
        art: "tabelle",
        spalten: ["Qualifikation"],
        zeilen: [
          ["Dachdeckermeister / Bauleitung"],
          ["Vorarbeiter / Obermonteur"],
          ["Dachdecker- / Klempner- / Spenglergeselle"],
          ["Solarmonteur / Elektrofachkraft PV"],
          ["Helfer"],
          ["Auszubildender"],
          ["Arbeiten an bauseits gestelltem Material (Fremdmaterial)"],
        ],
      },
    ],
  },
  {
    id: "arbeitswerte",
    nummer: 2,
    titel: "Was bedeutet die Abrechnung in Arbeitswerten (AW)?",
    bloecke: [
      {
        art: "absatz",
        text: "Um eine faire und nachvollziehbare Abrechnung der tatsächlich ausgeführten Arbeiten zu gewährleisten, rechnen wir nach folgendem Takt ab:",
      },
      {
        art: "liste",
        punkte: [
          "Die erste angefangene Stunde wird grundsätzlich voll berechnet (Mindestabrechnung je Einsatz).",
          "Ab der zweiten Stunde rechnen wir im 15-Minuten-Takt ab – 1 Arbeitswert (AW) = 15 Minuten, 4 AW = 1 Stunde.",
          "Angefangene Einheiten werden kaufmännisch auf- bzw. abgerundet (bis 7 Min. abgerundet, ab 8 Min. aufgerundet auf den nächsten Arbeitswert).",
        ],
      },
      {
        art: "absatz",
        text: "So zahlen Sie nach der ersten Stunde exakt die geleistete Zeit – im fairen Viertelstunden-Takt statt in groben Stundenblöcken.",
      },
    ],
  },
  {
    id: "pauschalen",
    nummer: 3,
    titel: "Pauschalen: Halbtag, Tag und Festpreis",
    bloecke: [
      {
        art: "absatz",
        text: "Nicht jede Leistung rechnet sich stundenweise am sinnvollsten. Für planbare oder fahrtintensive Einsätze bieten wir Ihnen feste Pauschalen – einfach, transparent und ohne Blick auf die Uhr. Sie kennen den Preis vorab und müssen nicht mitrechnen:",
      },
      {
        art: "tabelle",
        spalten: ["Pauschale", "Umfang"],
        zeilen: [
          [
            "Halbtagespauschale",
            "Einsatz bis ca. 4 Std. mit zwei Mitarbeitern, inkl. An- und Abfahrt (Zwei-Personen-Pflicht s. Abschnitt 4)",
          ],
          [
            "Tagespauschale",
            "Einsatz bis ca. 8 Std. mit zwei Mitarbeitern, inkl. An- und Abfahrt (Zwei-Personen-Pflicht s. Abschnitt 4)",
          ],
        ],
      },
      {
        art: "absatz",
        text: "Festpreis / Pauschalangebot: Für klar umrissene Leistungen (z. B. Sanierung, Neueindeckung, PV-Installation) erstellen wir Ihnen auf Wunsch ein verbindliches Pauschalangebot zum Festpreis – ohne Stundenabrechnung. Voraussetzung ist eine schriftliche Festpreisvereinbarung (siehe Abschnitt „Ist mein Kostenvoranschlag verbindlich?“).",
      },
      {
        art: "hinweis",
        text: "Gerade bei kurzen, aber weiter entfernten Einsätzen fahren Sie mit einer Pauschale oft günstiger und planbarer als mit der Stundenabrechnung – ein fairer Festpreis für beide Seiten.",
      },
    ],
  },
  {
    id: "zwei-mann-prinzip",
    nummer: 4,
    titel: "Warum kommen wir bei Dacharbeiten immer mindestens zu zweit?",
    bloecke: [
      {
        art: "absatz",
        text: "Das ist kein Aufpreis nach Gutdünken, sondern vorgeschriebener Arbeitsschutz. Arbeiten auf dem Dach gelten als „gefährliche Arbeiten mit Absturzgefahr\". Daraus folgt:",
      },
      {
        art: "liste",
        punkte: [
          "Keine Alleinarbeit bei gefährlichen Arbeiten. Nach den Unfallverhütungsvorschriften (DGUV Vorschrift 1 § 8) dürfen gefährliche Arbeiten grundsätzlich nicht von einer Person allein ausgeführt werden – allenfalls bei wirksamer Überwachung.",
          "Absturzschutz ist Pflicht. An Stellen mit Absturzgefahr ist Arbeiten ohne Absturzsicherung unzulässig (berufsgenossenschaftliche Regeln für Dacharbeiten, DGUV Information 201-054).",
          "Anseilschutz erfordert eine Rettungsperson. Wird mit persönlicher Absturzschutzausrüstung (Anseilschutz) gearbeitet, ist Alleinarbeit nicht zulässig: Stürzt jemand in den Gurt, muss er innerhalb weniger Minuten gerettet werden (Gefahr des Hängetraumas). Das kann nur eine zweite, anwesende Person leisten.",
        ],
      },
      {
        art: "absatz",
        text: "Deshalb kalkulieren und besetzen wir Reparatur-, Halbtages- und Tageseinsätze am Dach grundsätzlich mit zwei Mitarbeitern. Das schützt nicht nur unsere Leute, sondern auch Sie: saubere, regelkonforme Ausführung und volle Versicherungs- und Gewährleistungssicherheit.",
      },
      {
        art: "hinweis",
        text: "Reine kurze Sichtprüfungen auf gesicherten oder flach geneigten Dächern können im Einzelfall durch eine Person erfolgen; die eigentliche Ausführung am Dach erfolgt zu zweit.",
      },
    ],
  },
  {
    id: "bauseits-material",
    nummer: 5,
    titel: "Wie berechnet sich der Stundenlohn bei bauseits gestelltem Material?",
    bloecke: [
      {
        art: "absatz",
        text: "Bei Material, das Sie selbst beistellen (z. B. Dachziegel, Dämmstoffe, PV-Module oder Zubehör aus eigener Beschaffung), können wir die grundsätzliche Eignung und den mangelfreien Zustand der Produkte nicht prüfen oder bewerten. Diese Arbeiten führen wir daher nur aus, wenn Sie uns insoweit von der Haftung freistellen.",
      },
      {
        art: "absatz",
        text: "Unsere regulären Arbeitslöhne beruhen auf einer Mischkalkulation, die den üblichen Materialeinsatz mit berücksichtigt. Bei reiner Lohnleistung ohne unser Material reicht der Deckungsbeitrag dieser Sätze nicht aus – daher kommt der gesonderte Satz für Fremdmaterial-Aufträge zur Anwendung (siehe Tabelle Abschnitt 1).",
      },
    ],
  },
  {
    id: "materialverbrauch",
    nummer: 6,
    titel: "Materialverbrauch",
    bloecke: [
      {
        art: "absatz",
        text: "Alle weiteren Kosten für Material, Gerätschaften, Maschinen und Entsorgung werden je nach tatsächlichem Einsatz und dem damit verbundenen Gesamtaufwand gesondert abgerechnet. Die zur Ausführung benötigten Materialien rechnen wir nach den jeweils gültigen Listenpreisen des Großhandels zuzüglich eines Beschaffungs- und Bereitstellungsaufschlags von 25 % ab. Dieser deckt Einkauf, Logistik, Lagerung, Vorfinanzierung und Gewährleistung. Da der Einsatz von Spezialwerkzeugen, Hebetechnik oder Gerüst im Einzelfall unterschiedlich ausfällt, lassen sich diese Kosten nicht pauschal einbeziehen.",
      },
    ],
  },
  {
    id: "anfahrt-zonen",
    nummer: 7,
    titel: "Anfahrtskosten und KFZ-Pauschale (Zonen)",
    bloecke: [
      { art: "zwischentitel", text: "KFZ-Pauschale" },
      {
        art: "absatz",
        text: "Pro Einsatzfahrt berechnen wir eine Fahrkostenpauschale. Sie enthält eine Umlage für Anschaffungs-, Verbrauchs- und Unterhaltungskosten unserer Fahrzeuge und richtet sich allein nach der tatsächlichen Entfernung zwischen unserem Betriebssitz (Ruppiner Chaussee 221, 13503 Berlin) und dem Ausführungsort – nicht nach Stadt- oder Landesgrenzen:",
      },
      {
        art: "tabelle",
        spalten: ["Zone", "Gebiet"],
        zeilen: [
          [
            "Zone 1 – Nah",
            "Heiligensee, Konradshöhe, Tegel, Hermsdorf, Frohnau, Lübars, Reinickendorf, Hennigsdorf, Oranienburg",
          ],
          [
            "Zone 2 – bis ca. 25 km",
            "übriges nördliches / mittleres Berlin und direkt angrenzendes Umland",
          ],
          [
            "Zone 3 – ca. 25–50 km",
            "weiter entfernte Lagen, z. B. Berlin-Süd (Rudow, Lichtenrade, Marienfelde)",
          ],
          ["Zone 4 – ca. 50–80 km", "weiteres Umland im Umkreis bis 80 km"],
          ["ab ca. 80 km", "Einsatzorte ab ca. 80 km und weiter – nach Vereinbarung"],
        ],
      },
      {
        art: "hinweis",
        text: "Maßstab ist die reine Entfernung: nördliches Umland (z. B. Hennigsdorf, Oranienburg) liegt in unserer Nahzone, während Berlin-Süd weiter entfernt ist.",
      },
      { art: "zwischentitel", text: "Anfahrtszeit" },
      {
        art: "absatz",
        text: "Die tatsächlich angefallene Anfahrtszeit zum Einsatzort wird über die Arbeitswerte der eingesetzten Mitarbeiter in Rechnung gestellt.",
      },
      {
        art: "hinweis",
        text: "Hinweis: Entweder Zonenpauschale oder km-Satz – keine Doppelberechnung von Pauschale und voller Fahrtzeit als Arbeitszeit.",
      },
    ],
  },
  {
    id: "ruestkosten",
    nummer: 8,
    titel: "Wie werden Rüstkosten und Materialfahrten berechnet?",
    bloecke: [
      { art: "zwischentitel", text: "Materialfahrten" },
      {
        art: "absatz",
        text: "Unsere Fahrzeuge sind umfassend ausgestattet. Dennoch kann es vorkommen, dass für ein Projekt unvorhergesehen ein besonderes Material, Werkzeug oder Ersatzteil aus unserem Lager oder vom Großhandel geholt werden muss. Solche Materialfahrten rechnen wir nach tatsächlichem Aufwand in Arbeitswerten ab.",
      },
      { art: "zwischentitel", text: "Rüstkosten" },
      {
        art: "absatz",
        text: "Zusätzlicher Aufwand für die Auftragsvorbereitung (z. B. Beladen der Fahrzeuge, Bereitstellen von Gerüst- und Sicherungsmaterial), der in direktem Zusammenhang mit Ihrem Auftrag steht, wird gesondert mit einer Rüstpauschale berechnet. Diese fällt überwiegend bei größeren Projekten an.",
      },
    ],
  },
  {
    id: "kleinmaterial",
    nummer: 9,
    titel: "Was bedeutet die „Pauschale für Klein- und Befestigungsmaterial“?",
    bloecke: [
      {
        art: "absatz",
        text: "Kleinstmaterialien wie Schrauben, Nägel, Dübel, Dicht- und Klebemassen, Dichtbänder, Unterlegscheiben, Sturmklammern, Kleinteile usw. fassen wir gemäß BGB in einer Kleinteilepauschale zusammen, statt jede Einzelposition aufzulisten.",
      },
    ],
  },
  {
    id: "entsorgung",
    nummer: 10,
    titel: "Pauschale für Entsorgungskosten / Bauschutt",
    bloecke: [
      {
        art: "absatz",
        text: "Aufwandsentschädigung für die fachgerechte Entsorgung von Ausbaumaterialien wie alter Dacheindeckung, Dämmstoffen, Dachpappe/Bitumen, Bauschutt, Verpackungen, Alt-Blechen oder Ähnlichem – inklusive Containergebühren und ordnungsgemäßer Entsorgung. Die Abrechnung erfolgt wahlweise nach tatsächlichem Anfall oder – sofern vorab vereinbart – als feste Pauschale für die zu entsorgende Menge.",
      },
    ],
  },
  {
    id: "angebot-aufmass",
    nummer: 11,
    titel: "Was kostet die Angebotserstellung? Ist ein Aufmaß kostenpflichtig?",
    bloecke: [
      {
        art: "absatz",
        text: "Der Einstieg ist immer kostenlos – wenn Sie uns zuarbeiten. Erst wenn ein Vor-Ort-Termin nötig ist, entsteht ein überschaubarer Aufwand, den wir Ihnen bei Beauftragung vollständig wieder gutschreiben.",
      },
      {
        art: "box",
        titel: "So läuft Ihre kostenlose Ersteinschätzung",
        text: "1. Sie rufen an – gemeinsam füllen wir Ihren Erhebungsbogen aus (künftig auch online verfügbar). 2. Sie senden Fotos und den ausgefüllten Bogen – daraufhin erhalten Sie ein kostenloses Erstgespräch (Telefon oder Videocall, ca. 10–15 Min.), in dem wir Ihr Vorhaben einordnen.",
      },
      {
        art: "absatz",
        text: "Lässt sich Ihr Vorhaben aus der Ferne nicht abschließend beurteilen, folgt ein Vor-Ort-Termin. Der Preis setzt sich einfach und nachvollziehbar zusammen:",
      },
      {
        art: "box",
        titel: "Vor-Ort-Preis = fester Leistungspreis + Anfahrtspauschale Ihrer Zone",
        text: "Die eigentliche Leistung (z. B. der Dachcheck) kostet überall gleich – der Aufwand vor Ort ist derselbe. Hinzu kommt nur die Anfahrtspauschale Ihrer Zone nach Abschnitt 7. So zahlen Sie nicht mehr, weil Sie näher wohnen – und nicht zu wenig, wenn die Anfahrt weiter ist.",
      },
      {
        art: "absatz",
        text: "Die folgenden Leistungspreise gelten zonenunabhängig – sofern nichts anderes vereinbart ist:",
      },
      {
        art: "tabelle",
        spalten: ["Leistung", "Inhalt"],
        zeilen: [
          [
            "Telefonische Erstberatung / Videocall",
            "ca. 10–15 Min., nach Zuarbeit (Erhebungsbogen + Fotos) – einordnende Ersteinschätzung – 0,00 €",
          ],
          [
            "Dachinspektion / Dachcheck (vor Ort)",
            "Sichtprüfung bis ca. 0,5 Std. (ohne Leiteranstellung), Fotodokumentation, schriftliches Protokoll, Handlungsempfehlung",
          ],
          [
            "Vor-Ort-Beratung & Aufmaß (Sanierung / Neueindeckung)",
            "Beratung vor Ort + detailliertes Aufmaß als Grundlage für ein verbindliches Angebot",
          ],
          [
            "PV-Eignungscheck vor Ort",
            "kostenlos bei Zuarbeit (Fotos/Bogen); Vor-Ort-Prüfung bis ca. 0,5 Std. zur Angebotsabsicherung – Statik, Verschattung, Wirtschaftlichkeit, ggf. Drohne",
          ],
          [
            "Fassaden-Vor-Ort-Termin",
            "Bestandsaufnahme + Konzeptskizze (gleiche Logik wie Dach/PV)",
          ],
          [
            "Material-/Schadstoffprobe Flachdach inkl. Laboranalyse",
            "Probenahme vor Ort + Laboranalyse (z. B. Asbest, PAK/PHK) – Aufwand + Laborkosten",
          ],
          [
            "Drohnenbefliegung / Großdach > 300 m²",
            "individuell nach Objektgröße und Aufwand – auf Anfrage / individuell",
          ],
        ],
      },
      {
        art: "absatz",
        text: "Zur Leistung kommt die Anfahrtspauschale Ihrer Zone (siehe Abschnitt 7) – außer bei der telefonischen Erstberatung, die anfahrtsfrei ist. Beispiel: Dachcheck in Zone 1 (Nah) = Leistungspreis + Anfahrt Zone 1; derselbe Dachcheck rund 80 km entfernt = identischer Leistungspreis + Anfahrt Zone 4. Eine separate Berechnung der Anfahrtszeit entfällt bei diesen Festpreis-Checks.",
      },
      {
        art: "absatz",
        text: "Bei Auftragserteilung wird die Aufmaß-/Inspektionspauschale (inkl. Anfahrt) zu 100 % auf die Rechnungssumme angerechnet.",
      },
      {
        art: "box",
        titel: "Lieber zuerst eine grobe Richtung?",
        text: "Gerne übermitteln wir Ihnen vorab eine kostenlose, pauschalisierte Ersteinschätzung. Dafür benötigen wir nur einige Angaben zum Objekt: Dachform und -fläche, Baujahr, aktuelle Eindeckung, Fotos sowie eine grobe Beschreibung Ihres Vorhabens (Sanierung, Neueindeckung, PV, Fassade). Je besser Sie uns zuarbeiten, desto mehr bleibt für Sie kostenlos.",
      },
    ],
  },
  {
    id: "kostenvoranschlag",
    nummer: 12,
    titel: "Ist mein Kostenvoranschlag verbindlich?",
    bloecke: [
      {
        art: "absatz",
        text: "Mengen- und Maßangaben in Angebotsunterlagen sind nur annähernd verbindlich, soweit sie nicht auf Ihren ausdrücklichen Wunsch als verbindlich bezeichnet werden. Ein Festpreis muss schriftlich verbindlich vereinbart werden. Maßgeblich für die Abrechnung sind die durch Aufmaß festgestellten, tatsächlich ausgeführten Leistungen – bei Stundenlohnarbeiten die tatsächlich geleisteten Arbeitsstunden.",
      },
    ],
  },
  {
    id: "wartung",
    nummer: 13,
    titel: "Was kostet eine Wartung?",
    bloecke: [
      {
        art: "absatz",
        text: "Regelmäßige Wartung schützt Ihr Dach, Ihre Entwässerung und Ihre PV-Anlage – und sichert Gewährleistungs- und Versicherungsansprüche. Eine seriöse Wartung lässt sich aber nicht pauschal ab Liste verkaufen, denn jeder Bestand ist anders.",
      },
      {
        art: "absatz",
        text: "Deshalb gilt bei uns ein klarer Ablauf:",
      },
      {
        art: "liste",
        punkte: [
          "1. Inspektion zuerst. Wir verschaffen uns vor Ort einen Überblick über den Zustand (Steildach, Flachdach, Gründach, Entwässerung, PV-Anlage).",
          "2. Instandsetzung der Grundlage. Falls nötig, erhalten Sie zunächst ein Angebot, um den Bestand in einen wartungsfähigen Zustand zu bringen.",
          "3. Wartungsangebot. Erst danach erstellen wir Ihnen ein passendes, planbares Wartungsangebot bzw. einen Wartungsvertrag.",
        ],
      },
      {
        art: "absatz",
        text: "Das gilt gleichermaßen für Steildach, Flachdach, Mehrfamilienhäuser und PV-Anlagen: erst prüfen und den Aufwand einschätzen, dann ein belastbares Angebot. Feste Wartungspreise können wir daher hier bewusst nicht ausweisen – sie wären zu individuell. Sie erhalten Ihr Wartungsangebot im Anschluss an die Inspektion.",
      },
    ],
  },
  {
    id: "ansprechpartner",
    nummer: 14,
    titel: "Wie erreiche ich den richtigen Ansprechpartner im Büro?",
    bloecke: [
      {
        art: "absatz",
        text: "Am besten erreichen Sie unser Büro per E-Mail unter kontakt@die-dachdecker.berlin. Wir antworten so schnell wie möglich. Bitte senden Sie zu einem Anliegen nur eine E-Mail – Mehrfachanfragen verlängern die Bearbeitungszeit für alle Kunden. Wünschen Sie einen Rückruf, vermerken Sie das bitte kurz.",
      },
      {
        art: "absatz",
        text: "Telefonisch erreichen Sie uns unter 030 844 17 068 während unserer Sprechzeiten.",
      },
      {
        art: "hinweis",
        text: "Bei hohem Telefonaufkommen erreichen Sie uns nicht immer sofort. Hinterlassen Sie uns dann bitte eine kurze Nachricht oder E-Mail – wir melden uns schnellstmöglich zurück.",
      },
    ],
  },
  {
    id: "weitere-fragen",
    nummer: 15,
    titel: "Ihre Frage war nicht dabei?",
    bloecke: [
      {
        art: "absatz",
        text: "Stellen Sie uns Ihre Frage gerne – idealerweise unter Angabe Ihrer Auftrags- oder Rechnungsnummer – kurz per E-Mail. Wir prüfen Ihr Anliegen und melden uns bei Ihnen zurück.",
      },
      {
        art: "absatz",
        text: "Herzliche Grüße aus Berlin",
      },
      {
        art: "absatz",
        text: "Ihr Team von St. Masch Dach · Fassade · Solar",
      },
    ],
  },
]
