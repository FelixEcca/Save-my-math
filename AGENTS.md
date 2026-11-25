# Save my Math

Kooperatives Mathematikspiel fuer die Ausbildungsvorbereitung an der Gewerblichen Schule Lahr.

- Kurze, vollstaendige deutsche Saetze. Kein kindlicher Sprachstil.
- Bestehende fuenf Szenarien und die zunehmende Gefahr bei sinkender Kraft erhalten.
- Zwei Spielmodi mit gemeinsamer Themenmaske: Rettungseinsatz und Codeknacker. Codeknacker hat vier Teams und vier Schloesser je Team. Richtige Antworten oeffnen ein Schloss, falsche setzen nur dieses Team auf null. Vier richtige Antworten in Folge gewinnen; gleichzeitige Sieger sind moeglich.
- Die vier Teamantworten bis zur gemeinsamen Auswertung verdeckt halten. Aufgaben nach der ersten Eingabe nicht durch einen Niveauwechsel austauschen. Bestehende Spielstaende des Rettungseinsatzes weiterhin laden.
- Neun eingebaute Themen muessen ohne API-Schluessel funktionieren.
- API-Schluessel bleiben ausschliesslich in der lokalen Umgebung oder in .env. Niemals in Browsercode, Logs oder Git uebernehmen.
- Spiel und Einstellungen bleiben im Browser. Lokal liegen freigegebene KI-Aufgabensaetze zusaetzlich im ignorierten Ordner data/banks, online ausschliesslich im Browser.
- Vercel veroeffentlicht nur dist; API-Funktionen liegen unter api. Der Online-Zugang zur kostenpflichtigen KI muss ohne APP_PASSWORD gesperrt bleiben.
- KI-Ausgaben nie als Code ausfuehren. Rechenpruefung, fachliche Gegenpruefung und Freigabe der Lehrkraft erhalten.
- Node.js ab Version 22.14; bewusst keine externen Laufzeitabhaengigkeiten.
- Vor einem Commit `npm test` ausfuehren. Bei Oberflaechenaenderungen auch Browserpruefung durchfuehren.
- Nur dieses Spiel ist Teil des Repositories. Keine weiteren Fachbereichsdokumente hinzufuegen.
