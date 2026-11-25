# Rettungseinsatz

Ein kooperatives Mathequiz für den AV-Unterricht. Die Klasse beantwortet gemeinsam Fragen mit drei Antwortmöglichkeiten. Mindestens 80 Prozent richtige Antworten geben Kraft zurück. Bei zu vielen Fehlern wird die Situation immer bedrohlicher.

## Starten

1. **Starten.cmd** doppelt anklicken. Die App öffnet sich im Browser.
2. Thema, Startniveau, Fragenzahl, Klassengröße und Situation auswählen.
3. **Aufgaben erstellen und starten** anklicken.

Voraussetzung: Node.js ab Version 22.14. Auf dem bisher verwendeten Rechner ist Node.js bereits vorhanden. Zusätzliche Pakete müssen nicht installiert werden. Alternativ startet `npm start` den Server unter <http://localhost:3456>. **Beenden.cmd** beendet einen über Starten.cmd gestarteten Server.

Die App lässt sich lokal oder mit Vercel verwenden. Der Vercel-Build veröffentlicht ausschließlich die geprüften Dateien aus `public/` über den Ausgabeordner `dist/`.

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

Der Schlüssel bleibt auf dem Server. `.env` und die gespeicherten Aufgabensätze unter `data/` sind von Git ausgeschlossen. Eine Generierung benötigt normalerweise zwei API-Anfragen: Erstellung und fachliche Gegenprüfung. Bei beanstandeten Aufgaben erfolgt einmalig eine gezielte automatische Korrektur; insgesamt sind höchstens vier API-Anfragen nötig. Bleibt ein Problem bestehen, zeigt die App die konkreten Prüfhinweise an. Dabei entstehen Kosten im eigenen API-Konto. Thema und Hinweise werden an OpenAI gesendet; Namen oder einzelne Schülerantworten werden dafür nicht benötigt. `store: false` ist gesetzt.

Die App berechnet die Lösungen aus einer eingeschränkten mathematischen Ausdruckssprache selbst. Sie akzeptiert nur genau drei verschiedene numerische Antworten und prüft die Zuordnung. Ein zweiter KI-Aufruf prüft, ob Text, Rechnung und Niveau zusammenpassen. Die Freigabe durch die Lehrkraft bleibt nötig: Diese Prüfungen garantieren keine vollständige Fehlerfreiheit.

Eigene KI-Themen erzeugen zunächst Aufgaben auf der ausgewählten Stufe. Wird später eine noch fehlende Stufe angefordert, erstellt die App dazu weitere Aufgaben und zeigt erneut die Vorschau. Freigegebene Themen werden auf diesem Rechner gespeichert. Die KI-Funktion ist ohne einen gültigen Schlüssel noch nicht aktiv; alle eingebauten Themen funktionieren ohne Schlüssel.

Die KI erstellt derzeit rechnerische Aufgaben mit numerischen Antworten. Bei Variablen werden dafür Termwerte verwendet. Freie Textantworten, Bildaufgaben und eine Abstimmung über Schülerhandys sind noch keine Funktionen dieser Fassung.

## Entwicklung

```text
npm start
npm test
npm run build
```

- `public/app.js`: Spielablauf, Themenmaske, Stimmen und Lehrkraftvorschau.
- `public/scene.js`: die fünf Canvas-Szenarien mit sechs Kraftzuständen.
- `public/engine.js`: eingebaute Aufgabengeneratoren und Themenverwaltung.
- `public/math.js`: Rechensprache und Prüfung der KI-Antworten, gemeinsam im Browser und Server verwendet.
- `server/ai.mjs`: Responses API, strukturiertes Ausgabeformat und fachliche Gegenprüfung.
- `server/index.mjs`: lokaler HTTP-Server, API und Speicherung freigegebener Themen.

Der Server bindet ausschließlich an `127.0.0.1`. Er akzeptiert nur lokale Hostnamen und gleiche Herkunft und liefert nur ausdrücklich freigegebene Dateien aus. Vor einer Bereitstellung im Internet sind ein passender Betrieb, Zugangsschutz und eine Verwaltung der API-Kosten einzurichten.

Die API-Anbindung orientiert sich am [OpenAI-Quickstart](https://developers.openai.com/api/docs/quickstart) und an der [Dokumentation zu Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs). Das Modell ist über `OPENAI_MODEL` konfigurierbar.
