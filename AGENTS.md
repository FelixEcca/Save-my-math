# Save my Math

Kooperatives Mathematikspiel fuer die Ausbildungsvorbereitung an der Gewerblichen Schule Lahr.

- Kurze, vollstaendige deutsche Saetze. Kein kindlicher Sprachstil.
- Die vier Szenarien Gleis, Felsen, Eis und All und die zunehmende Gefahr bei sinkender Kraft erhalten; den Boot-Modus nicht wieder einbauen.
- Zwei oder drei Antwortmoeglichkeiten sowie KI-Textaufgaben fuer andere Faecher unterstuetzen. Fachliche Gegenpruefung und Lehrkraftfreigabe beibehalten.
- Gemeinsame Themenmaske fuer Rettungseinsatz, Codeknacker und Mathe-Fussball. Codeknacker hat vier Teams und vier Schloesser je Team. Richtige Antworten oeffnen ein Schloss, falsche setzen nur dieses Team auf null. Vier richtige Antworten in Folge gewinnen; gleichzeitige Sieger sind moeglich.
- Die Startseite bietet drei anklickbare Spielkarten mit passenden Vorschaubildern. Eine Karte oeffnet die gemeinsame Themenmaske mit dem gewaehlten Spiel. Alle Spiele fuehrt zur Uebersicht zurueck. Laufende Spiele zum Fortsetzen anbieten und beim Wechsel zur Uebersicht erhalten. Hash-Links und Browser-Zurueck unterstuetzen; offene Aufgabenpruefungen nicht durch Navigation verwerfen.
- Fuer die Rettungseinsatz-Spielkarte auf Wunsch des Nutzers die Gleisszene als Vorschaubild verwenden; keine Boot- oder Wasserszene.
- Die vier Teamantworten bis zur gemeinsamen Auswertung verdeckt halten. Aufgaben nach der ersten Eingabe nicht durch einen Niveauwechsel austauschen. Bestehende Spielstaende des Rettungseinsatzes weiterhin laden.
- Dritter Spielmodus Mathe-Fussball: Blau greift nach rechts, Rot nach links an. Die Lehrkraft bewegt den Ball manuell um ein Feld. Tore erst auf ausdruecklichen Klick werten und danach den Ball in die Mitte setzen. Teamgroessen getrennt einstellen, aber immer dieselbe Trikotnummer fuer beide Teams auslosen. Den gemeinsamen Nummernbereich verwenden; jede Nummer einmal ziehen, bevor sie wieder vorkommt.
- Im Fussball Aufgabe und gemeinsame Trikotnummer prominent oberhalb des Spielfelds anzeigen; Nummer kurz animieren und reduzierte Bewegung respektieren. Keine Antwortauswahl zeigen. Ergebnis und Rechenweg erst auf Klick anzeigen.
- Vor dem Fussballspiel immer einen kompletten Vorrat aus 10 oder 15 Aufgaben pruefen und freigeben, auch bei eingebauten Themen. Neue Aufgabe laeuft danach lokal durch diesen Vorrat, ohne einzelne Freigaben oder KI-Anfragen. Neue Vorratserstellung ist eine eigene Aktion. Tore, Ballposition und Nummer beim Aufgabenwechsel erhalten; Vorrat und Cursor mit dem Spielstand speichern. Auch in der KI-Vorschau die Loesung zunaechst verbergen.
- Neun eingebaute Themen muessen ohne API-Schluessel funktionieren.
- API-Schluessel bleiben ausschliesslich in der lokalen Umgebung oder in .env. Niemals in Browsercode, Logs oder Git uebernehmen.
- Spiel und Einstellungen bleiben im Browser. Lokal liegen freigegebene KI-Aufgabensaetze zusaetzlich im ignorierten Ordner data/banks, online ausschliesslich im Browser.
- Vercel veroeffentlicht nur dist; API-Funktionen liegen unter api. Der Online-Zugang zur kostenpflichtigen KI muss ohne APP_PASSWORD gesperrt bleiben.
- KI-Ausgaben nie als Code ausfuehren. Rechenpruefung, fachliche Gegenpruefung und Freigabe der Lehrkraft erhalten.
- Node.js ab Version 22.14; bewusst keine externen Laufzeitabhaengigkeiten.
- Vor einem Commit `npm test` ausfuehren. Bei Oberflaechenaenderungen auch Browserpruefung durchfuehren.
- Nur dieses Spiel ist Teil des Repositories. Keine weiteren Fachbereichsdokumente hinzufuegen.
