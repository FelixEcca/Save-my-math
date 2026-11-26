# Save my Math

Drei Mathematikspiele für den AV-Unterricht mit gemeinsamer Themenwahl, A/B/C-Startniveau und geprüften KI-Aufgaben. Im Rettungseinsatz retten mindestens 80 Prozent richtige Antworten die Figur. Bei Codeknacker treten vier Teams gleichzeitig am Safe an. Mathe-Fußball spielt Team Blau gegen Team Rot auf einem gemeinsamen Spielfeld.

## Starten

1. **Starten.cmd** doppelt anklicken. Die App öffnet sich im Browser.
2. Auf der Startseite eine der drei Spielkarten auswählen. Danach Thema und Startniveau festlegen. Beim Rettungseinsatz zusätzlich Fragenzahl, Klassengröße und Situation festlegen; beim Mathe-Fußball die Personenzahl beider Teams.
3. **Aufgaben erstellen und starten** anklicken.

Voraussetzung: Node.js ab Version 22.14. Auf dem bisher verwendeten Rechner ist Node.js bereits vorhanden. Zusätzliche Pakete müssen nicht installiert werden. Alternativ startet `npm start` den Server unter <http://localhost:3456>. **Beenden.cmd** beendet einen über Starten.cmd gestarteten Server.

Die App lässt sich lokal oder mit Vercel verwenden. Der Vercel-Build veröffentlicht ausschließlich die geprüften Dateien aus `public/` über den Ausgabeordner `dist/`.

## Startseite und Spielauswahl

Die Startseite zeigt Rettungseinsatz, Codeknacker und Mathe-Fußball als drei große Karten mit eigenen SVG-Vorschaubildern. Die gesamte Karte ist anklickbar und mit der Tastatur erreichbar. Eine Auswahl öffnet die gemeinsame Themenmaske mit dem passenden Spielmodus. **Alle Spiele** führt aus der Maske oder dem laufenden Spiel zur Übersicht zurück.

Ein gestartetes Spiel erscheint dort unter **Dein laufendes Spiel** und lässt sich über **Fortsetzen** wieder aufnehmen. Das Öffnen einer anderen Spielkarte verändert den vorhandenen Spielstand erst, wenn das neue Spiel tatsächlich gestartet beziehungsweise freigegeben wird. Spielstand und Themen bleiben im verwendeten Browser gespeichert.

Direkte Links auf die Themenmaske sind über `#spiel=rescue`, `#spiel=codebreaker` und `#spiel=football` möglich. Beim Neuladen eines solchen Links wird ein dazu passendes laufendes Spiel wieder angezeigt. Ohne Spiel-Fragment öffnet sich die Übersicht. Die Zurück- und Vorwärts-Tasten des Browsers werden unterstützt. Während einer KI-Erstellung oder noch offenen Aufgabenprüfung bleibt die aktuelle Ansicht erhalten, bis die Prüfung abgeschlossen oder verworfen wurde.

## Mit Vercel veröffentlichen

Das GitHub-Repository enthält die Projektdateien direkt an oberster Stelle. `package.json`, `vercel.json`, `api/` und `public/` müssen dort liegen; die Dateien nicht erneut in einen Unterordner „Sicherungsspiel 1“ hochladen.

In Vercel gilt:

- **Root Directory:** leer beziehungsweise `.`.
- **Framework Preset:** Other.
- **Build Command:** `npm run build`.
- **Output Directory:** `dist`.
- **Node.js:** 22.x.

`vercel.json` enthält diese Einstellungen und die API-Laufzeit. Nach einem Push auf den verbundenen Hauptzweig erstellt Vercel die Website neu. Die API liegt in den vier Vercel-Funktionen unter `api/`; der lokale Server wird dort nicht gestartet.

Für eigene KI-Themen unter **Settings → Environment Variables** folgende Werte anlegen und anschließend erneut bereitstellen:

- `OPENAI_API_KEY`: den eigenen API-Schlüssel als **Secret** eintragen.
- `OPENAI_MODEL`: `gpt-6-luna` als **Config** eintragen.
- `APP_PASSWORD`: einen eigenen Zugangscode mit mindestens 8 Zeichen als **Secret** eintragen. Dafür nicht den API-Schlüssel verwenden.

Die vorhandenen Themen sind öffentlich spielbar. Die kostenpflichtige KI-Erstellung bleibt gesperrt, bis der Zugangscode eingerichtet und in der App eingegeben wurde. Die Freischaltung verwendet ein signiertes, sicheres Sitzungscookie mit zehn Stunden Laufzeit. „KI sperren“ meldet wieder ab. Ein optionales `APP_SESSION_SECRET` kann zusätzlich als eigener zufälliger Sitzungsschlüssel gesetzt werden.

Die Passwortabfrage ist Teil dieser App und benötigt keine kostenpflichtige Vercel-Passwortabsicherung. Der Zugangscode steht nur in der geheimen Einstellung `APP_PASSWORD`, nicht im veröffentlichten Quellcode.

Online speichert die App freigegebene KI-Themen im verwendeten Browser. Sie bleiben nach dem Neuladen erhalten, werden aber nicht zwischen Geräten synchronisiert. Das Löschen der Browserdaten entfernt auch diese Themen. Lokal bleibt die bisherige zusätzliche Speicherung unter `data/banks/` erhalten. Vercel benötigt dadurch keine beschreibbaren Projektdateien oder zusätzliche Datenbank.

Die Begrenzung der KI-Anfragen gilt pro laufender Funktionsinstanz und ersetzt kein Kostenlimit im OpenAI-Projekt.

## Enthalten

- Vier animierte Situationen: auf dem Gleis, am Felsen, dünnes Eis und im All.
- Fächerwahl mit je 30 eingebauten Themen für Mathematik, Deutsch und Englisch. Die eingebauten Themen funktionieren ohne API-Schlüssel. Deutsch und Englisch enthalten je 1 350 feste Aufgaben, jeweils 15 auf A-, B- und C-Niveau pro Thema. Mathematik verwendet geprüfte Aufgaben-Generatoren.
- Fünf Schwierigkeitsstufen. Die Auswahl A/B/C legt den Einstieg fest; „Leichter“ und „Schwerer“ steuern feiner nach. Die Bezeichnungen sind didaktische Stufen und keine vollständige Bildungsplanzuordnung.
- 1 bis 30 Fragen und 1 bis 40 Lernende. Die Stimmen werden von der Lehrkraft eingetragen.
- Lösungen nach der Auflösung und ein gespeicherter Spielstand im verwendeten Browser.

## Codeknacker

In der gemeinsamen Startmaske unter **Spiel** den Modus **Codeknacker** wählen. Themen, eigene KI-Themen, Aufgabenvorschau und „Leichter“ beziehungsweise „Schwerer“ werden von beiden Spielen verwendet. Bereits freigegebene KI-Themen sind in beiden Modi verfügbar. Fehlt eine gewählte Niveaustufe, wird sie vor dem Start nach Anmeldung ergänzt und wieder zur Prüfung angezeigt.

Vier Teams bearbeiten dieselbe Aufgabe mit den Antwortmöglichkeiten A, B und C. Die Teams zeigen ihre Antworten gleichzeitig; die Lehrkraft trägt sie anschließend in die vier Teamfelder ein. Gespeicherte Antworten bleiben bis zur gemeinsamen Auflösung verdeckt und lassen sich vorher über **Ändern** korrigieren. Nach der ersten Eingabe bleibt die Aufgabe bis zur Auflösung unverändert.

Jede richtige Antwort öffnet ein weiteres Schloss des jeweiligen Teams. Eine falsche Antwort schließt alle vier Schlösser dieses Teams. Vier richtige Antworten **in Folge** öffnen den Safe. Gleichzeitige Sieger gewinnen gemeinsam. Es gibt keine feste Rundenzahl; der Aufgabenvorrat wird bei Bedarf erneut verwendet. Neue KI-Themen starten mit zwölf Aufgaben. Nach einem Neustart stehen alle Teams wieder bei null; Thema und Spielmodus bleiben erhalten. Spielstand und teilweise eingegebene Antworten überstehen das Neuladen.

## Mathe-Fußball

In der Startmaske **Mathe-Fußball** wählen, für Blau und Rot jeweils 1 bis 40 Personen einstellen und einen Vorrat aus **10 oder 15 Aufgaben** vorbereiten. **Nummer auslosen** zieht eine gemeinsame Trikotnummer für beide Teams. Die Nummer steht groß neben der Aufgabe und wird kurz animiert eingeblendet; die Einstellung für reduzierte Bewegung wird berücksichtigt. Die Auslosung nutzt den gemeinsamen Nummernbereich von 1 bis zur Größe des kleineren Teams. Im größeren Team können Nummern doppelt vergeben werden. Jede Nummer kommt einmal vor, bevor erneut gezogen wird; bei mehr als einer Nummer wiederholt sie sich auch an dieser Grenze nicht sofort.

Blau greift nach rechts, Rot nach links an. **Blau rückt vor** beziehungsweise **Rot rückt vor** bewegen den Ball um ein Feld. Über **Ballposition** lässt sich die Position auch direkt einstellen. Erst wenn der Ball das linke oder rechte Tor erreicht, wird **Tor werten und Anstoß** aktiv. Der Klick zählt das Tor für das angreifende Team und setzt den Ball in die Mitte. Die Lehrkraft entscheidet über die Bewegung; eine Aufgabenlösung verändert den Ball nicht automatisch. **Spielstand zurücksetzen** löscht Tore, Ballposition und ausgeloste Nummern und erhält die aktuelle Aufgabe und ihre Vorgaben.

Die Aufgabe steht groß oberhalb des Spielfelds und wird ohne Antwortauswahl angezeigt. **Lösung anzeigen** blendet Ergebnis und Rechenweg ein; ein weiterer Klick verbirgt beides. **Neue Aufgabe** zeigt unmittelbar die nächste bereits geprüfte Aufgabe. Dabei gibt es keine zusätzliche Freigabe oder KI-Anfrage, und Tore, Ballposition sowie die ausgeloste Nummer bleiben erhalten. Am Ende des Vorrats wird der Button deaktiviert.

Unter **Neuen Aufgabenvorrat vorbereiten** lassen sich Thema, Niveau, Anzahl und konkrete Wünsche für die nächsten 10 oder 15 Aufgaben festlegen. Vor dem Start wird immer der ganze Vorrat zur Prüfung angezeigt, auch bei eingebauten Themen. Lösungen sind in der Vorschau unter **Lösung prüfen** zugänglich. Nach der gemeinsamen Freigabe laufen die Aufgaben nacheinander durch. Freie Vorgaben und zu kleine vorhandene KI-Vorräte erfordern den bestehenden KI-Zugang. Ein neuer Vorrat während eines laufenden Spiels setzt den Spielstand nicht zurück; ein Abbruch lässt den bisherigen Vorrat bestehen.

Der gesamte freigegebene Vorrat und die aktuelle Position darin werden mit dem Spielstand im Browser gespeichert. Änderungen an den Vorgaben verändern den laufenden Vorrat erst nach einer erneuten Freigabe. Bestehende Spielstände aus der früheren Einzelaufgaben-Version behalten Tore und aktuelle Aufgabe; vor weiteren Aufgaben wird einmalig ein neuer Vorrat vorbereitet.

## Eigene Themen mit KI

1. **KI konfigurieren.cmd** öffnen.
2. Hinter `OPENAI_API_KEY=` den eigenen OpenAI-API-Schlüssel eintragen und speichern. Den Schlüssel nicht in diesen Chat kopieren.
3. Die App mit **Beenden.cmd** beenden und mit **Starten.cmd** neu starten.
4. „Eigenes Thema mit KI …“ auswählen, Inhalt und Grenzen beschreiben und die Aufgaben erstellen lassen.
5. Die Vorschau prüfen und mit **Freigeben und starten** übernehmen.

Der Schlüssel bleibt auf dem Server. `.env` und die gespeicherten Aufgabensätze unter `data/` sind von Git ausgeschlossen. Eine Generierung benötigt normalerweise zwei API-Anfragen: Erstellung und fachliche Gegenprüfung. Aufgabensätze werden in Teilmengen von höchstens acht Fragen erstellt und einzeln fachlich beurteilt. Nur beanstandete Fragen werden bis zu zweimal neu erstellt; bereits bestätigte Fragen bleiben erhalten. Die Zahl der API-Anfragen hängt von Satzgröße und Korrekturen ab. Bleibt ein Problem bestehen, zeigt die App die konkreten Prüfhinweise an. Dabei entstehen Kosten im eigenen API-Konto. Thema und Hinweise werden an OpenAI gesendet; Namen oder einzelne Schülerantworten werden dafür nicht benötigt. `store: false` ist gesetzt.

Bei Rechenaufgaben berechnet die App die Lösungen aus einer eingeschränkten mathematischen Ausdruckssprache selbst. Sprachaufgaben akzeptieren Wörter und vollständige Sätze mit zwei oder drei Antwortmöglichkeiten. Eine unabhängige zweite Prüfung beurteilt jede Aufgabe fachlich. Unvollständige Prüfantworten und ungelöste fachliche Probleme verhindern die Freigabe. Die abschließende Sichtung und Freigabe durch die Lehrkraft bleiben erhalten.

Eigene KI-Themen erzeugen zunächst Aufgaben auf der ausgewählten Stufe. Wird später eine noch fehlende Stufe angefordert, erstellt die App dazu weitere Aufgaben und zeigt erneut die Vorschau. Freigegebene Themen werden auf diesem Rechner gespeichert. Die KI-Funktion ist ohne einen gültigen Schlüssel noch nicht aktiv; alle eingebauten Themen funktionieren ohne Schlüssel.

Deutsch und Englisch wählen bei KI-Anfragen automatisch das Textformat. Mathematik unterstützt Rechenaufgaben und bei Bedarf Textfragen. Die Antworten werden weiterhin ausgewählt; freie Texteingaben durch Lernende und eine Abstimmung über Schülerhandys sind nicht Bestandteil der Spiele.

## Entwicklung

```text
npm start
npm test
npm run build
```

- `public/app.js`: Spielablauf, Themenmaske, Stimmen und Lehrkraftvorschau.
- `public/scene.js`: die vier Canvas-Szenarien mit sechs Kraftzuständen.
- `public/engine.js`: eingebaute Aufgabengeneratoren und Themenverwaltung.
- `public/math.js`: Rechensprache und Prüfung der KI-Antworten, gemeinsam im Browser und Server verwendet.
- `server/ai.mjs`: Responses API, strukturiertes Ausgabeformat und fachliche Gegenprüfung.
- `server/index.mjs`: lokaler HTTP-Server, API und Speicherung freigegebener Themen.

Der Server bindet ausschließlich an `127.0.0.1`. Er akzeptiert nur lokale Hostnamen und gleiche Herkunft und liefert nur ausdrücklich freigegebene Dateien aus. Vor einer Bereitstellung im Internet sind ein passender Betrieb, Zugangsschutz und eine Verwaltung der API-Kosten einzurichten.

Die API-Anbindung orientiert sich am [OpenAI-Quickstart](https://developers.openai.com/api/docs/quickstart) und an der [Dokumentation zu Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs). Das Modell ist über `OPENAI_MODEL` konfigurierbar.

Eigene KI-Themen unterstützen Zahlen oder Text und Sprache, zum Beispiel das/dass-Sätze. Für Rettungseinsatz und Codeknacker sind zwei oder drei Antwortmöglichkeiten wählbar. Auch Textaufgaben durchlaufen die unabhängige fachliche Prüfung und die Freigabe der Lehrkraft. Alte Boot-Spielstände wechseln bei erhaltenem Fortschritt zum Gleis.


## Fächer und Bildungsplanbezug

Die Themenauswahl orientiert sich an den veröffentlichten AV/AVdual-Bildungsplänen Baden-Württemberg, Fassung vom 21.02.2025. Die Fragen sind eigene Unterrichtsbeispiele. Die Spielstufen unterstützen A/B/C; sie bilden keine vollständige Prüfung oder Zertifizierung aller Kompetenzen ab. Sprechen, Schreiben eigener längerer Texte und Hörverstehen brauchen ergänzende Unterrichtsformen.

- [Deutsch, AV/AVdual](https://bildungsplaene-bw.de/site/bildungsplan-rebrush2024/get/documents_E-588220024/lsbw/Bildungsplaene-BERS/bs/ausbildungsvorbereitung/BS_AVdual_AV_Deutsch_2024_final_11032025.pdf): Sprachliche Übungen und Kommunikation sowie Literatur und Medien. Der Pool greift insbesondere Sprachrichtigkeit, berufliche Texte, Argumentation und Informationen aus Texten auf.
- [Englisch, AV/AVdual](https://bildungsplaene-bw.de/site/bildungsplan-rebrush2024/get/documents_E1158097852/lsbw/Bildungsplaene-BERS/bs/ausbildungsvorbereitung/BS_AVdual_AV_Englisch_2024_final_11032025.pdf): Kommunikative Kompetenz, alltags- und berufsbezogene Situationen sowie sprachliche Mittel. Wortschatz, Grammatik und das Verstehen kurzer Mitteilungen werden verknüpft.
- [Mathematik, AV/AVdual](https://bildungsplaene-bw.de/site/bildungsplan-rebrush2024/get/documents_E-705329807/lsbw/Bildungsplaene-BERS/bs/ausbildungsvorbereitung/BS_AVdual_AV_Mathematik_2024_final_11032025.pdf): Zahl und Operation, Messen, Raum und Form, funktionale Zusammenhänge und Datenauswertung. Spezifische Spielthemen untergliedern die breiteren Bildungsplankompetenzen.

Für Sprachregeln wurden außerdem das [Amtliche Regelwerk 2024 beim IDS](https://grammis.ids-mannheim.de/rechtschreibung) und die [Grammatikreferenz des British Council](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference) herangezogen. Die Aufgaben wurden nicht aus diesen Quellen kopiert.

Die Sprachpools enthalten 15 verschiedene Grundsituationen pro Thema. A lässt erkennen oder ergänzen, B verlangt die Anwendung beziehungsweise eine Begründung oder Rückübersetzung, C verbindet zwei Entscheidungen oder prüft Auswahl und Begründung. Die Lösungspositionen sind gleichmäßig verteilt. Die Zwischenstufen 2 und 4 verwenden dieselben Grundpools; „Leichter“ und „Schwerer“ wechseln bei den festen Sprachpools direkt zwischen A, B und C.

**Deutsch – 30 Themen:** das oder dass; Groß- und Kleinschreibung; Nominalisierungen; seit oder seid; s, ss und ß; Lange Vokale und ie; Doppelte Konsonanten; Getrennt- und Zusammenschreibung; Kommas bei Nebensätzen; Kommas in Aufzählungen; Wörtliche Rede; Wortarten erkennen; Zeitformen im Deutschen; Subjekt und Prädikat; Die vier Fälle; Pronomen und Bezüge; Synonyme im Kontext; Gegensätze und Wortbedeutungen; Sätze sinnvoll verbinden; Hauptsatz und Nebensatz; Höflich bitten und nachfragen; Gesprächsregeln und Feedback; E-Mails und Geschäftsbriefe; Bewerbung und Lebenslauf; Vorgänge und Anleitungen beschreiben; Sachlich berichten und dokumentieren; Behauptung, Begründung und Beispiel; Sachtexte und Arbeitsaufträge verstehen; Medien und Quellen prüfen; Erzähltexte verstehen.

**Englisch – 30 Themen:** Familie und Beziehungen; Freizeit und Hobbys; Essen und Getränke; Kleidung und Einkaufen; Schule und Lernen; Werkzeuge und Werkstatt; Berufe und Arbeitswelt; Gesundheit und Arztbesuch; Sich vorstellen und persönliche Angaben; Zahlen und Preise verstehen; Uhrzeiten und Termine; Tagesabläufe beschreiben; Wegbeschreibungen und Verkehr; Sicherheitshinweise verstehen; Bewerbung und Praktikum auf Englisch; Höfliche Fragen und Bitten auf Englisch; E-Mails und kurze Nachrichten auf Englisch; Aushänge und kurze Texte verstehen; Simple present; Present progressive; Simple past mit regelmäßigen Verben; Unregelmäßige Verben im simple past; Zukunft mit will; Personalpronomen; Besitz und Zugehörigkeit; Präpositionen für Ort und Zeit; Fragen bilden; Verneinungen; Adjektive vergleichen; Können, müssen und sollen.

**Mathematik – 30 Themen:** Plusklammer und Minusklammer; Variablen und Terme; Kopfrechnen; Längen umrechnen; Flächenmaße umrechnen; Flächeninhalte; Umfang und Kreisumfang; Prozentrechnen; Brüche; Zahlen runden; Zahlen vergleichen; negative Zahlen; Dezimalzahlen multiplizieren; Dividieren und verteilen; Punkt vor Strich; Potenzen und Quadratzahlen; fehlende Zahlen und lineare Gleichungen; Verhältnisse und Mischungen; Zinsen; Zeiten; Massen; Volumenmaße; Volumen von Würfel und Quader; Oberfläche von Würfel und Quader; Dreiecksflächen; Kreisflächen; Prismen und Zylinder; Maßstab; Mittelwerte; Daten auswerten.
