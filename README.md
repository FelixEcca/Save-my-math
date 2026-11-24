# Rettungseinsatz

Ein kooperatives Mathequiz für den AV-Unterricht. Die Klasse beantwortet gemeinsam Fragen mit drei Antwortmöglichkeiten. Mindestens 80 Prozent richtige Antworten geben Kraft zurück. Bei zu vielen Fehlern wird die Situation immer bedrohlicher.

## Starten

1. **Starten.cmd** doppelt anklicken. Die App öffnet sich im Browser.
2. Thema, Startniveau, Fragenzahl, Klassengröße und Situation auswählen.
3. **Aufgaben erstellen und starten** anklicken.

Voraussetzung: Node.js ab Version 22.14. Auf dem bisher verwendeten Rechner ist Node.js bereits vorhanden. Zusätzliche Pakete müssen nicht installiert werden. Alternativ startet `npm start` den Server unter <http://localhost:3456>. **Beenden.cmd** beendet einen über Starten.cmd gestarteten Server.

Die App läuft zunächst auf diesem Rechner. Es wurde kein öffentliches Angebot und kein GitHub-Repository eingerichtet.

## Enthalten

- Fünf animierte Situationen: über Bord, auf dem Gleis, am Felsen, dünnes Eis und im All.
- Neun Themen mit zufällig erzeugten, rechnerisch geprüften Aufgaben: Klammern, Terme, Kopfrechnen, Längen, Flächenmaße, Flächeninhalte, Umfang, Prozentrechnen und Brüche.
- Fünf Schwierigkeitsstufen. Die Auswahl A/B/C legt den Einstieg fest; „Leichter“ und „Schwerer“ steuern feiner nach. Die Bezeichnungen sind didaktische Stufen und keine vollständige Bildungsplanzuordnung.
- 1 bis 30 Fragen und 1 bis 40 Lernende. Die Stimmen werden von der Lehrkraft eingetragen; die beiden Simulationsknöpfe dienen dem Ausprobieren.
- Lösungen nach der Auflösung und ein gespeicherter Spielstand im verwendeten Browser.

## Eigene Themen mit KI

1. **KI konfigurieren.cmd** öffnen.
2. Hinter `OPENAI_API_KEY=` den eigenen OpenAI-API-Schlüssel eintragen und speichern. Den Schlüssel nicht in diesen Chat kopieren.
3. Die App mit **Beenden.cmd** beenden und mit **Starten.cmd** neu starten.
4. „Eigenes Thema mit KI …“ auswählen, Inhalt und Grenzen beschreiben und die Aufgaben erstellen lassen.
5. Die Vorschau prüfen und mit **Freigeben und starten** übernehmen.

Der Schlüssel bleibt auf dem lokalen Server. `.env` und die gespeicherten Aufgabensätze unter `data/` sind von Git ausgeschlossen. Eine Generierung benötigt zwei API-Anfragen: Erstellung und fachliche Gegenprüfung. Dabei entstehen Kosten im eigenen API-Konto. Thema und Hinweise werden an OpenAI gesendet; Namen oder einzelne Schülerantworten werden dafür nicht benötigt. `store: false` ist gesetzt.

Die App berechnet die Lösungen aus einer eingeschränkten mathematischen Ausdruckssprache selbst. Sie akzeptiert nur genau drei verschiedene numerische Antworten und prüft die Zuordnung. Ein zweiter KI-Aufruf prüft, ob Text, Rechnung und Niveau zusammenpassen. Die Freigabe durch die Lehrkraft bleibt nötig: Diese Prüfungen garantieren keine vollständige Fehlerfreiheit.

Eigene KI-Themen erzeugen zunächst Aufgaben auf der ausgewählten Stufe. Wird später eine noch fehlende Stufe angefordert, erstellt die App dazu weitere Aufgaben und zeigt erneut die Vorschau. Freigegebene Themen werden auf diesem Rechner gespeichert. Die KI-Funktion ist ohne einen gültigen Schlüssel noch nicht aktiv; alle eingebauten Themen funktionieren ohne Schlüssel.

Die KI erstellt derzeit rechnerische Aufgaben mit numerischen Antworten. Bei Variablen werden dafür Termwerte verwendet. Freie Textantworten, Bildaufgaben und eine Abstimmung über Schülerhandys sind noch keine Funktionen dieser Fassung.

## Entwicklung

```text
npm start
npm test
```

- `public/app.js`: Spielablauf, Themenmaske, Stimmen und Lehrkraftvorschau.
- `public/scene.js`: die fünf Canvas-Szenarien mit sechs Kraftzuständen.
- `public/engine.js`: eingebaute Aufgabengeneratoren und Themenverwaltung.
- `public/math.js`: Rechensprache und Prüfung der KI-Antworten, gemeinsam im Browser und Server verwendet.
- `server/ai.mjs`: Responses API, strukturiertes Ausgabeformat und fachliche Gegenprüfung.
- `server/index.mjs`: lokaler HTTP-Server, API und Speicherung freigegebener Themen.

Der Server bindet ausschließlich an `127.0.0.1`. Er akzeptiert nur lokale Hostnamen und gleiche Herkunft und liefert nur ausdrücklich freigegebene Dateien aus. Vor einer Bereitstellung im Internet sind ein passender Betrieb, Zugangsschutz und eine Verwaltung der API-Kosten einzurichten.

Die API-Anbindung orientiert sich am [OpenAI-Quickstart](https://developers.openai.com/api/docs/quickstart) und an der [Dokumentation zu Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs). Das Modell ist über `OPENAI_MODEL` konfigurierbar.
