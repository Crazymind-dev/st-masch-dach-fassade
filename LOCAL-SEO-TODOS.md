# Local SEO — manuelle Aufgaben für Steve

Die Website ist technisch SEO-ready (Meta-Tags, JSON-LD, Sitemap, Ratgeber-Content).
Für lokale Sichtbarkeit bei „Dachdecker Berlin" & Co. braucht es jetzt noch
manuelle Arbeit außerhalb des Codes:

## 1. Google Unternehmensprofil (ehemals „My Business")

Anlegen/aktualisieren auf <https://business.google.com>

- [ ] **Profil beanspruchen** unter der offiziellen Adresse
      Ruppiner Chaussee 221, 13503 Berlin
- [ ] **Kategorien** setzen (wichtig!)
    - Primär: **„Dachdecker"**
    - Sekundär: „Solaranlagen-Installateur", „Fassadenbauer",
      „Energieberater"
- [ ] Alle Felder ausfüllen: Öffnungszeiten (Mo–Fr 08:00–16:00),
      Telefon (030 - 844 17 068), Website (<https://st-masch-dach.vercel.app>
      bzw. die endgültige Domain)
- [ ] **Beschreibung mit Keywords:**
      „Dachdecker-Meisterbetrieb in Berlin. Dach, Fassade, Photovoltaik
      und Energieberatung aus einer Hand. BAFA-Energieberater und
      Enphase Solar Partner. Seit [X] Jahren für Eigentümer, WEG und
      Gewerbe in Berlin und Brandenburg."
- [ ] **Leistungen einzeln anlegen:** Steildach, Flachdach, Gründach,
      Fassade (WDVS/VHF), Metalldach, Dachfenster (VELUX), PV-Anlagen,
      Stromspeicher, Dachservice, Notdienst
- [ ] **Mindestens 20 echte Fotos** hochladen: Team, Fahrzeuge,
      abgeschlossene Projekte, Werkstatt/Lager, außen und innen
- [ ] **Google-Beiträge** regelmäßig posten (abgeschlossene Projekte,
      Saisonhinweise, Fördermittel-News)
- [ ] **Aktiv Bewertungen sammeln** — nach jedem zufriedenen Kunden per
      Mail mit direktem Review-Link fragen

## 2. NAP-Konsistenz (Name, Address, Phone)

Google checkt, ob diese 3 Datenpunkte **überall identisch** geschrieben sind.
Jede Abweichung schwächt das Ranking.

Verwende überall **exakt** diese Schreibweise:

- **Name:** `St. Masch Dach & Fassade`
- **Adresse:** `Ruppiner Chaussee 221, 13503 Berlin`
- **Telefon:** `030 - 844 17 068` (oder `+49 30 844 17 068`)

- [ ] Gelbe Seiten — Eintrag prüfen / anlegen
- [ ] Das Örtliche — Eintrag prüfen / anlegen
- [ ] 11880.com — Eintrag prüfen / anlegen
- [ ] GoYellow / GoLocal
- [ ] Yelp Deutschland
- [ ] Facebook-Seite (falls vorhanden)
- [ ] Dachdecker-Innung Berlin Mitgliederverzeichnis
- [ ] Handwerkskammer Berlin Verzeichnis

## 3. Branchenverzeichnisse & Backlinks

Starke Backlinks aus Fach-Quellen:

- [ ] **Handwerkskammer Berlin** — mit Website-Link
- [ ] **Dachdecker-Innung Berlin** — Mitgliederverzeichnis
- [ ] **Enphase Installateur-Verzeichnis** — sehr wertvoller Branchen-Backlink
      (<https://enphase.com/de-de/installer-locator>)
- [ ] **VELUX-Fachpartner-Verzeichnis** — falls offizielle Partnerschaft
      besteht
- [ ] **BAFA Energieeffizienz-Expertenliste** — Steve sollte dort
      gelistet sein; der öffentliche Eintrag verlinkt idealerweise auf
      die Website (<https://www.energie-effizienz-experten.de>)

Optional (Zielgruppen-spezifisch):
- [ ] MyHammer / Blauarbeit / Check24 Profi — für Leads im Mittelpreis-Segment
- [ ] Trusted Shops / Bewertungsportale

## 4. Tracking einrichten

Sobald du eine Tracking-Strategie wählst:

- [ ] **Analytics:** Google Analytics 4 (kostenfrei, bekanntester Standard)
      oder datenschutzfreundliche Alternative (Plausible, Fathom,
      Matomo-selbstgehostet)
- [ ] **Google Search Console** verifizieren
      (<https://search.google.com/search-console>) — zeigt Suchanfragen,
      Rankings, technische Probleme
- [ ] **Conversion-Events** im Tracking anlegen:
      - Formular abgesendet (`kontaktformular_abgeschickt`)
      - Telefon-Link geklickt (`phone_click`)
      - Mail-Link geklickt (`mail_click`)
      - Förderungsseite-Tiefscroll als Engagement-Signal
- [ ] **Cookie-Banner** hinzufügen, sobald Analytics läuft — sonst
      DSGVO-Verstoß

## 5. Content-Strategie für stetige Rankings

- [ ] **1 Ratgeber-Artikel pro Quartal** veröffentlichen (unter
      `/ratgeber/*`). Ideen stehen bereits in der Empfehlung aus der
      Website-Überarbeitung:
    - Dachsanierung in Berlin — Kompletter Leitfaden
    - Asbest im Dach: Erkennen, sanieren, entsorgen
    - Was macht ein Energieberater?
    - Förderrechner Dach & Solar
- [ ] **Referenz-Seite pflegen** — mindestens alle 2 Monate neues
      Projekt mit echtem Foto ergänzen. Google bewertet frische
      Inhalte höher.
- [ ] **Google-Bewertungen aktiv sammeln** — Ziel: ≥ 20 Bewertungen mit
      Ø 4.7+ innerhalb des ersten Jahres

## 6. Domain (bevor Livegang)

- [ ] Endgültige Domain festlegen (z.B. `st-masch-dach.de`)
- [ ] Domain in `src/lib/config.ts` als `site.baseUrl` hinterlegen
- [ ] Domain auf Vercel hinzufügen und auf das Vercel-Projekt zeigen
- [ ] In Google Search Console als Property anlegen
- [ ] In Google Unternehmensprofil als Website setzen
- [ ] SSL-Zertifikat automatisch via Vercel aktiv

## 7. Vor dem echten Livegang

- [ ] Impressum vervollständigen (HRB-Nummer und USt-IdNr. — im Code
      aktuell als `— wird ergänzt —` markiert)
- [ ] Platzhalter-Bilder durch echte Fotos ersetzen (Team, Referenzen)
- [ ] Formular-Backend anbinden (aktuell simuliert den Versand —
      keine echten E-Mails)
- [ ] OG-Image (1200×630px) produzieren und als `/public/og-image.jpg`
      hinterlegen — wird bereits im Layout referenziert
- [ ] Lighthouse-Check durchführen, Performance auf ≥ 90 bringen

---

Bei Fragen zur Umsetzung dieser Punkte kann Claude Code jederzeit
unterstützen — die meisten setzen aber persönlichen Login bei den
Plattformen oder Einträge voraus, die nur Steve machen kann.
