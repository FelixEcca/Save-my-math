# Rettungseinsatz

Kooperatives Mathematikspiel fuer die Ausbildungsvorbereitung an der Gewerblichen Schule Lahr.

- Kurze, vollstaendige deutsche Saetze. Kein kindlicher Sprachstil.
- Bestehende fuenf Szenarien und die zunehmende Gefahr bei sinkender Kraft erhalten.
- Neun eingebaute Themen muessen ohne API-Schluessel funktionieren.
- API-Schluessel bleiben ausschliesslich in der lokalen Umgebung oder in .env. Niemals in Browsercode, Logs oder Git uebernehmen.
- Spiel und Einstellungen bleiben im Browser; freigegebene KI-Aufgabensaetze liegen im ignorierten Ordner data/banks.
- KI-Ausgaben nie als Code ausfuehren. Rechenpruefung, fachliche Gegenpruefung und Freigabe der Lehrkraft erhalten.
- Node.js ab Version 22.14; bewusst keine externen Laufzeitabhaengigkeiten.
- Vor einem Commit `npm test` ausfuehren. Bei Oberflaechenaenderungen auch Browserpruefung durchfuehren.
- Nur dieses Spiel ist Teil des Repositories. Keine weiteren Fachbereichsdokumente hinzufuegen.
