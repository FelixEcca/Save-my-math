// Eigene klare Quizaufgaben nach den AV-Bildungsplänen Baden-Württemberg.
export const languageData = [
  {
    "id": "de-das-dass",
    "label": "das oder dass",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "„Dass“ leitet einen Nebensatz ein. „Das“ kann ein Artikel oder ein Pronomen sein. Die Ersatzprobe hilft.",
    "rows": [
      {
        "prompt": "Ich hoffe, ___ du kommst.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "„Dass“ leitet hier einen Nebensatz ein. „Dieses“ oder „welches“ passt nicht."
      },
      {
        "prompt": "___ Fahrrad gehört mir.",
        "answers": [
          "Das",
          "Dass"
        ],
        "why": "Vor „Fahrrad“ steht der Artikel „das“. „Dieses Fahrrad“ ist eine mögliche Ersatzprobe."
      },
      {
        "prompt": "Das ist das Buch, ___ ich suche.",
        "answers": [
          "das",
          "dass"
        ],
        "why": "Das Relativpronomen „das“ bezieht sich auf „Buch“. Man kann „welches“ einsetzen."
      },
      {
        "prompt": "Wir wissen, ___ die Prüfung bald beginnt.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "„Dass“ leitet den Nebensatz ein und lässt sich nicht durch „welches“ ersetzen."
      },
      {
        "prompt": "Ich nehme ___ Werkzeug mit.",
        "answers": [
          "das",
          "dass"
        ],
        "why": "„Das“ ist hier ein Artikel vor dem Nomen „Werkzeug“."
      },
      {
        "prompt": "Sie sagt, ___ sie morgen arbeitet.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "Die Konjunktion „dass“ verbindet hier Hauptsatz und Nebensatz."
      },
      {
        "prompt": "Das Auto, ___ dort steht, ist rot.",
        "answers": [
          "das",
          "dass"
        ],
        "why": "„Das“ bezieht sich auf „Auto“. „Welches dort steht“ ist die Ersatzprobe."
      },
      {
        "prompt": "Es ist wichtig, ___ du pünktlich bist.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "Der Nebensatz mit „dass“ erklärt, was wichtig ist."
      },
      {
        "prompt": "Ich glaube, ___ ist mein Heft.",
        "answers": [
          "das",
          "dass"
        ],
        "why": "„Das“ ist hier ein Demonstrativpronomen. Man kann „dies“ einsetzen: „Dies ist mein Heft.“"
      },
      {
        "prompt": "Wir freuen uns, ___ du mitmachst.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "„Dass“ leitet den Nebensatz ein. Die Ersatzprobe mit „welches“ funktioniert nicht."
      },
      {
        "prompt": "Das Schild, ___ am Tor hängt, ist neu.",
        "answers": [
          "das",
          "dass"
        ],
        "why": "Das Relativpronomen „das“ bezieht sich auf „Schild“."
      },
      {
        "prompt": "Er erklärt, ___ der Strom abgeschaltet ist.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "„Dass“ leitet die wiedergegebene Aussage ein."
      },
      {
        "prompt": "Kannst du mir ___ erklären?",
        "answers": [
          "das",
          "dass"
        ],
        "why": "„Das“ ist ein Pronomen und steht hier für eine Sache. „Dies erklären“ ist möglich."
      },
      {
        "prompt": "Ich bin sicher, ___ die Rechnung stimmt.",
        "answers": [
          "dass",
          "das"
        ],
        "why": "„Dass“ leitet den Nebensatz ein. „Die Rechnung“ ist dessen Subjekt."
      },
      {
        "prompt": "Das Bild, ___ wir ansehen, zeigt eine Werkstatt.",
        "answers": [
          "das",
          "dass"
        ],
        "why": "„Das“ ist ein Relativpronomen zu „Bild“. Die Ersatzprobe lautet „welches“."
      }
    ]
  },
  {
    "id": "de-gross-klein",
    "label": "Groß- und Kleinschreibung",
    "subject": "german",
    "format": "spelling",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein.",
    "rows": [
      {
        "prompt": "Der ___ steht vor der Tür.",
        "answers": [
          "Bus",
          "bus"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Wir ___ heute gemeinsam.",
        "answers": [
          "lernen",
          "Lernen"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Die Platte ist ___.",
        "answers": [
          "glatt",
          "Glatt"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "___ beginnt der Unterricht später.",
        "answers": [
          "Morgen",
          "morgen"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Ich trinke ein Glas ___.",
        "answers": [
          "Wasser",
          "wasser"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Der neue ___ passt gut.",
        "answers": [
          "Schlüssel",
          "schlüssel"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Sie arbeitet sehr ___.",
        "answers": [
          "sorgfältig",
          "Sorgfältig"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Wir ___ die Maße auf.",
        "answers": [
          "schreiben",
          "Schreiben"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Die ___ ist abgeschlossen.",
        "answers": [
          "Aufgabe",
          "aufgabe"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Der Boden ist ___.",
        "answers": [
          "nass",
          "Nass"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "___ hole ich mein Werkzeug.",
        "answers": [
          "Jetzt",
          "jetzt"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Er ___ die Anleitung.",
        "answers": [
          "liest",
          "Liest"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Ich suche meinen ___.",
        "answers": [
          "Ordner",
          "ordner"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Die Maschine läuft ___.",
        "answers": [
          "leise",
          "Leise"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Wir tragen feste ___.",
        "answers": [
          "Schuhe",
          "schuhe"
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      }
    ]
  },
  {
    "id": "de-nominalisierung",
    "label": "Nominalisierungen",
    "subject": "german",
    "format": "spelling",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“.",
    "rows": [
      {
        "prompt": "Das ___ fällt mir leicht.",
        "answers": [
          "Lesen",
          "lesen"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Beim ___ trage ich eine Schutzbrille.",
        "answers": [
          "Bohren",
          "bohren"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Sie wünscht dir alles ___.",
        "answers": [
          "Gute",
          "gute"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Wir haben etwas ___ gelernt.",
        "answers": [
          "Neues",
          "neues"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Zum ___ brauche ich einen Stift.",
        "answers": [
          "Schreiben",
          "schreiben"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Es gibt nichts ___ zu berichten.",
        "answers": [
          "Wichtiges",
          "wichtiges"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Das ___ der Maße dauert kurz.",
        "answers": [
          "Prüfen",
          "prüfen"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Nach dem ___ räumen wir auf.",
        "answers": [
          "Arbeiten",
          "arbeiten"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Ich habe viel ___ gehört.",
        "answers": [
          "Interessantes",
          "interessantes"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Beim ___ halte ich die Hände frei.",
        "answers": [
          "Gehen",
          "gehen"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Das ___ im Team hilft uns.",
        "answers": [
          "Lernen",
          "lernen"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Zum ___ gehen wir nach draußen.",
        "answers": [
          "Üben",
          "üben"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Sie findet etwas ___.",
        "answers": [
          "Passendes",
          "passendes"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Das ___ der Maschine ist verboten.",
        "answers": [
          "Berühren",
          "berühren"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Wir essen gern etwas ___.",
        "answers": [
          "Warmes",
          "warmes"
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      }
    ]
  },
  {
    "id": "de-seit-seid",
    "label": "seit oder seid",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
    "rows": [
      {
        "prompt": "Ihr ___ heute früh dran.",
        "answers": [
          "seid",
          "seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Wir warten ___ einer Stunde.",
        "answers": [
          "seit",
          "seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ ihr bereit?",
        "answers": [
          "Seid",
          "Seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ich wohne ___ 2022 hier.",
        "answers": [
          "seit",
          "seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ihr ___ ein gutes Team.",
        "answers": [
          "seid",
          "seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ Montag arbeite ich im Praktikum.",
        "answers": [
          "Seit",
          "Seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Warum ___ ihr so leise?",
        "answers": [
          "seid",
          "seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Die Werkstatt ist ___ gestern geschlossen.",
        "answers": [
          "seit",
          "seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ihr ___ für das Material zuständig.",
        "answers": [
          "seid",
          "seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ich kenne ihn ___ der Grundschule.",
        "answers": [
          "seit",
          "seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ vorsichtig an der Maschine!",
        "answers": [
          "Seid",
          "Seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Sie lernt ___ zwei Wochen für den Test.",
        "answers": [
          "seit",
          "seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ ihr mit der Aufgabe fertig?",
        "answers": [
          "Seid",
          "Seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ dem Unfall trägt er Handschuhe.",
        "answers": [
          "Seit",
          "Seid"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ihr ___ jetzt an der Reihe.",
        "answers": [
          "seid",
          "seit"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      }
    ]
  },
  {
    "id": "de-s-ss-sz",
    "label": "s, ss und ß",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Bei stimmlosen s-Lauten hilft die Vokallänge: Nach kurzem Vokal steht oft „ss“, nach langem Vokal oder Doppellaut „ß“. Wortstämme und Ausnahmen müssen mitbeachtet werden.",
    "rows": [
      {
        "prompt": "Ich trinke ein Glas ___.",
        "answers": [
          "Wasser",
          "Waßer",
          "Waser"
        ],
        "why": "Der betonte Vokal in „Wasser“ ist kurz. Deshalb schreibt man „ss“."
      },
      {
        "prompt": "Die Suppe ist sehr ___.",
        "answers": [
          "heiß",
          "heiss",
          "heis"
        ],
        "why": "Auf den Doppellaut „ei“ folgt in „heiß“ ein „ß“."
      },
      {
        "prompt": "Er ___ die Länge.",
        "answers": [
          "misst",
          "mißt",
          "mist"
        ],
        "why": "„Messen“ hat einen kurzen betonten Vokal. In „misst“ bleibt „ss“ erhalten."
      },
      {
        "prompt": "Der Schuh passt an meinen ___.",
        "answers": [
          "Fuß",
          "Fuss",
          "Fus"
        ],
        "why": "Das „u“ in „Fuß“ wird lang gesprochen. Darauf folgt „ß“."
      },
      {
        "prompt": "Wir gehen durch die ___.",
        "answers": [
          "Straße",
          "Strasse",
          "Strase"
        ],
        "why": "Das „a“ in „Straße“ ist lang. Deshalb steht hier „ß“."
      },
      {
        "prompt": "Ich ___ morgen früh aufstehen.",
        "answers": [
          "muss",
          "muß",
          "mus"
        ],
        "why": "Das „u“ in „muss“ ist kurz. Deshalb schreibt man „ss“."
      },
      {
        "prompt": "Der ___ ist abgelaufen.",
        "answers": [
          "Pass",
          "Paß",
          "Pas"
        ],
        "why": "Das „a“ in „Pass“ ist kurz. Deshalb schreibt man „ss“."
      },
      {
        "prompt": "Wir ___ die Tür.",
        "answers": [
          "schließen",
          "schliessen",
          "schliesen"
        ],
        "why": "Das „ie“ ist lang. In „schließen“ steht „ß“."
      },
      {
        "prompt": "Der ___ liegt im Tal.",
        "answers": [
          "Fluss",
          "Fluß",
          "Flus"
        ],
        "why": "Das „u“ in „Fluss“ ist kurz. Deshalb steht „ss“."
      },
      {
        "prompt": "Die Kante ist sehr ___.",
        "answers": [
          "groß",
          "gross",
          "gros"
        ],
        "why": "Das „o“ in „groß“ ist lang. Deshalb steht „ß“."
      },
      {
        "prompt": "Ich ___ nicht, wo der Schlüssel liegt.",
        "answers": [
          "weiß",
          "weiss",
          "weis"
        ],
        "why": "Auf den Doppellaut „ei“ folgt in dieser Verbform „ß“."
      },
      {
        "prompt": "Wir ___ um zwölf Uhr.",
        "answers": [
          "essen",
          "eßen",
          "esen"
        ],
        "why": "Das betonte „e“ in „essen“ ist kurz. Deshalb steht „ss“."
      },
      {
        "prompt": "Er hat die Tür ___.",
        "answers": [
          "geschlossen",
          "geschloßen",
          "geschlosen"
        ],
        "why": "Das „o“ in „geschlossen“ ist kurz. Deshalb steht „ss“."
      },
      {
        "prompt": "Die ___ blüht im Garten.",
        "answers": [
          "Rose",
          "Roße",
          "Rosse"
        ],
        "why": "„Rose“ hat einen stimmhaften s-Laut und wird mit einfachem „s“ geschrieben."
      },
      {
        "prompt": "Ich ___ dich morgen.",
        "answers": [
          "grüße",
          "grüsse",
          "grüse"
        ],
        "why": "Das „ü“ in „grüße“ ist lang. Deshalb steht „ß“."
      }
    ]
  },
  {
    "id": "de-lange-vokale",
    "label": "Lange Vokale und ie",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Die richtige Schreibung wird am Wortstamm und an bekannten verwandten Wörtern geprüft. Ein langes i wird häufig mit „ie“ geschrieben.",
    "rows": [
      {
        "prompt": "Die ___ arbeitet zuverlässig.",
        "answers": [
          "Maschine",
          "Maschiene"
        ],
        "why": "„Maschine“ ist ein Fremdwort mit langem i, aber ohne „ie“."
      },
      {
        "prompt": "Wir ___ die Markierung.",
        "answers": [
          "sehen",
          "seen"
        ],
        "why": "„Sehen“ schreibt man mit „h“ zwischen den Silben."
      },
      {
        "prompt": "Der ___ beginnt am Montag.",
        "answers": [
          "Dienst",
          "Dinst"
        ],
        "why": "Das lange i in „Dienst“ wird mit „ie“ geschrieben."
      },
      {
        "prompt": "Sie schreibt einen ___.",
        "answers": [
          "Brief",
          "Brif"
        ],
        "why": "Das lange i in „Brief“ wird mit „ie“ geschrieben."
      },
      {
        "prompt": "Ich ___ das Werkzeug aus.",
        "answers": [
          "leihe",
          "leie"
        ],
        "why": "Die Form „leihe“ gehört zum Wortstamm „leih-“."
      },
      {
        "prompt": "Der ___ hält vor der Schule.",
        "answers": [
          "Wagen",
          "Waagen"
        ],
        "why": "„Wagen“ hat ein langes a, aber kein Dehnungs-h."
      },
      {
        "prompt": "Die ___ steht in der Küche.",
        "answers": [
          "Waage",
          "Wage"
        ],
        "why": "Das Messgerät „Waage“ wird mit „aa“ geschrieben."
      },
      {
        "prompt": "Er ___ seinen Namen.",
        "answers": [
          "schreibt",
          "schriebt"
        ],
        "why": "„Schreibt“ gehört zu „schreiben“ und wird mit „ei“ geschrieben."
      },
      {
        "prompt": "Der ___ steht am Tisch.",
        "answers": [
          "Stuhl",
          "Stul"
        ],
        "why": "Das lange u in „Stuhl“ wird durch ein h gekennzeichnet."
      },
      {
        "prompt": "Das ___ ist stabil.",
        "answers": [
          "Rohr",
          "Ror"
        ],
        "why": "„Rohr“ schreibt man mit Dehnungs-h."
      },
      {
        "prompt": "Ich ___ dir die Anleitung.",
        "answers": [
          "gebe",
          "gehbe"
        ],
        "why": "„Gebe“ hat ein langes e ohne Dehnungs-h oder Doppelvokal."
      },
      {
        "prompt": "Wir ___ das Ergebnis.",
        "answers": [
          "prüfen",
          "prüüfen"
        ],
        "why": "Das lange ü in „prüfen“ wird nicht durch einen zusätzlichen Buchstaben gedehnt."
      },
      {
        "prompt": "Das ___ ist fast erreicht.",
        "answers": [
          "Ziel",
          "Zil"
        ],
        "why": "Das lange i in „Ziel“ wird mit „ie“ geschrieben."
      },
      {
        "prompt": "Die ___ führt durch den Ort.",
        "answers": [
          "Bahn",
          "Ban"
        ],
        "why": "„Bahn“ schreibt man mit Dehnungs-h."
      },
      {
        "prompt": "Ich ___ gern zu.",
        "answers": [
          "höre",
          "hööhre"
        ],
        "why": "„Höre“ hat ein langes ö ohne Dehnungs-h."
      }
    ]
  },
  {
    "id": "de-doppelkonsonanten",
    "label": "Doppelte Konsonanten",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen.",
    "rows": [
      {
        "prompt": "Ich ___ dir den Stift.",
        "answers": [
          "gebe",
          "gebbe"
        ],
        "why": "„Gebe“ hat einen langen betonten Vokal und keinen Doppelkonsonanten."
      },
      {
        "prompt": "Die ___ steht offen.",
        "answers": [
          "Halle",
          "Hale"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Wir ___ gemeinsam.",
        "answers": [
          "kommen",
          "komen"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Ich brauche einen ___.",
        "answers": [
          "Hammer",
          "Hamer"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Die ___ ist neu.",
        "answers": [
          "Kette",
          "Kete"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Wir ___ die Leitung.",
        "answers": [
          "trennen",
          "trenen"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Das ___ ist sauber.",
        "answers": [
          "Bett",
          "Bet"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Er ___ das Heft.",
        "answers": [
          "öffnet",
          "öfnet"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Die ___ liegt im Keller.",
        "answers": [
          "Kiste",
          "Kisste"
        ],
        "why": "„Kiste“ enthält schon zwei verschiedene Konsonanten nach dem kurzen i."
      },
      {
        "prompt": "Der ___ ist leer.",
        "answers": [
          "Teller",
          "Teler"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Wir ___ auf den Bus.",
        "answers": [
          "warten",
          "wartten"
        ],
        "why": "In „warten“ stehen nach dem a bereits r und t. Das t wird nicht verdoppelt."
      },
      {
        "prompt": "Wir ___ die Teile.",
        "answers": [
          "sammeln",
          "sameln"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Die ___ läuft langsam.",
        "answers": [
          "Pumpe",
          "Pummpe"
        ],
        "why": "In „Pumpe“ stehen bereits m und p nach dem kurzen u."
      },
      {
        "prompt": "Ich ___ mein Heft.",
        "answers": [
          "nehme",
          "nemme"
        ],
        "why": "„Nehme“ gehört zum Stamm „nehm-“ und hat einen langen Vokal."
      },
      {
        "prompt": "Die ___ ist hell.",
        "answers": [
          "Sonne",
          "Sone"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      }
    ]
  },
  {
    "id": "de-getrennt-zusammen",
    "label": "Getrennt- und Zusammenschreibung",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Wortart und Bedeutung entscheiden. Verbindungen aus zwei Verben werden in diesen Beispielen getrennt geschrieben; zusammengesetzte Nomen bilden ein Wort.",
    "rows": [
      {
        "prompt": "Morgen wollen wir ___.",
        "answers": [
          "spazieren gehen",
          "spazierengehen"
        ],
        "why": "Die Verbindung aus zwei Verben wird hier getrennt geschrieben."
      },
      {
        "prompt": "Ich möchte heute ___.",
        "answers": [
          "schwimmen lernen",
          "schwimmenlernen"
        ],
        "why": "„Schwimmen“ und „lernen“ werden hier getrennt geschrieben."
      },
      {
        "prompt": "Wir müssen noch ___.",
        "answers": [
          "einkaufen gehen",
          "einkaufengehen"
        ],
        "why": "Die beiden Verben werden hier getrennt geschrieben."
      },
      {
        "prompt": "Wir wollen einen Kuchen ___.",
        "answers": [
          "backen lernen",
          "backenlernen"
        ],
        "why": "Die Verbindung aus den beiden Verben „backen“ und „lernen“ wird getrennt geschrieben."
      },
      {
        "prompt": "Lege das Heft in die ___.",
        "answers": [
          "Schultasche",
          "Schul Tasche"
        ],
        "why": "Das zusammengesetzte Nomen wird zusammengeschrieben."
      },
      {
        "prompt": "Ich trage feste ___.",
        "answers": [
          "Arbeitsschuhe",
          "Arbeits Schuhe"
        ],
        "why": "Die Nomenverbindung „Arbeitsschuhe“ bildet ein Wort."
      },
      {
        "prompt": "Wir müssen das Licht ___.",
        "answers": [
          "einschalten",
          "ein schalten"
        ],
        "why": "Die Grundform des trennbaren Verbs lautet „einschalten“."
      },
      {
        "prompt": "Du sollst die Tür ___.",
        "answers": [
          "zumachen",
          "zu machen"
        ],
        "why": "„Zumachen“ ist hier ein trennbares Verb in der Grundform."
      },
      {
        "prompt": "Ich benutze einen ___.",
        "answers": [
          "Schraubenzieher",
          "Schrauben Zieher"
        ],
        "why": "Das zusammengesetzte Nomen wird als ein Wort geschrieben."
      },
      {
        "prompt": "Wir möchten zusammen ___.",
        "answers": [
          "Rad fahren",
          "radfahren"
        ],
        "why": "Die Verbindung „Rad fahren“ wird in dieser Verwendung getrennt geschrieben."
      },
      {
        "prompt": "Sie möchte heute ___.",
        "answers": [
          "Klavier spielen",
          "klavierspielen"
        ],
        "why": "In dieser Verbverbindung bleibt das Nomen „Klavier“ selbstständig."
      },
      {
        "prompt": "Du musst zuerst ___.",
        "answers": [
          "aufräumen",
          "auf räumen"
        ],
        "why": "Der Infinitiv des trennbaren Verbs lautet „aufräumen“."
      },
      {
        "prompt": "Wir wollen noch ___.",
        "answers": [
          "lesen üben",
          "lesenüben"
        ],
        "why": "Die beiden Verben werden hier getrennt geschrieben."
      },
      {
        "prompt": "Die ___ ist abgeschlossen.",
        "answers": [
          "Berufsausbildung",
          "Berufs Ausbildung"
        ],
        "why": "Das zusammengesetzte Nomen bildet ein Wort."
      },
      {
        "prompt": "Ich benutze die ___.",
        "answers": [
          "Schutzbrille",
          "Schutz Brille"
        ],
        "why": "Das zusammengesetzte Nomen wird zusammengeschrieben."
      }
    ]
  },
  {
    "id": "de-komma-nebensatz",
    "label": "Kommas bei Nebensätzen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas.",
    "rows": [
      {
        "prompt": "Welche Zeichensetzung ist richtig?",
        "answers": [
          "Ich bleibe zu Hause, weil ich krank bin.",
          "Ich bleibe, zu Hause weil ich krank bin.",
          "Ich bleibe zu Hause weil ich krank bin."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Wähle den richtig gegliederten Satz.",
        "answers": [
          "Wenn der Bus kommt, steigen wir ein.",
          "Wenn der Bus, kommt steigen wir ein.",
          "Wenn der Bus kommt steigen wir ein."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Wo ist das Komma richtig gesetzt?",
        "answers": [
          "Sie sagt, dass die Tür offen ist.",
          "Sie sagt dass, die Tür offen ist.",
          "Sie sagt dass die Tür, offen ist."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Welcher Satz ist richtig geschrieben?",
        "answers": [
          "Obwohl es regnet, gehen wir hinaus.",
          "Obwohl, es regnet gehen wir hinaus.",
          "Obwohl es regnet gehen wir hinaus."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Prüfe die Kommas.",
        "answers": [
          "Das Werkzeug, das ich suche, liegt hier.",
          "Das Werkzeug das ich suche, liegt hier.",
          "Das Werkzeug, das ich suche liegt hier."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Welche Fassung trennt den Nebensatz richtig ab?",
        "answers": [
          "Ich frage, ob der Laden offen ist.",
          "Ich frage ob, der Laden offen ist.",
          "Ich frage ob der Laden offen ist."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Wähle die richtige Fassung.",
        "answers": [
          "Bevor wir starten, prüfen wir die Maschine.",
          "Bevor wir, starten prüfen wir die Maschine.",
          "Bevor wir starten prüfen, wir die Maschine."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Welcher Satz hat die nötigen Kommas?",
        "answers": [
          "Die Frau, die dort steht, ist unsere Chefin.",
          "Die Frau die dort steht ist, unsere Chefin.",
          "Die Frau, die dort steht ist unsere Chefin."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Welche Zeichensetzung passt?",
        "answers": [
          "Ich weiß nicht, wann der Zug fährt.",
          "Ich weiß, nicht wann der Zug fährt.",
          "Ich weiß nicht wann, der Zug fährt."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Wähle den korrekten Satz.",
        "answers": [
          "Damit wir sicher arbeiten, tragen wir Schutzbrillen.",
          "Damit, wir sicher arbeiten tragen wir Schutzbrillen.",
          "Damit wir sicher arbeiten tragen, wir Schutzbrillen."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Wo muss der Nebensatz abgetrennt werden?",
        "answers": [
          "Er kommt später, weil sein Bus ausfällt.",
          "Er kommt, später weil sein Bus ausfällt.",
          "Er kommt später weil sein, Bus ausfällt."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Welche Fassung ist richtig?",
        "answers": [
          "Sobald die Stunde endet, räumen wir auf.",
          "Sobald die Stunde, endet räumen wir auf.",
          "Sobald die Stunde endet räumen, wir auf."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Prüfe den Relativsatz.",
        "answers": [
          "Das Heft, das auf dem Tisch liegt, gehört mir.",
          "Das Heft das auf dem Tisch liegt, gehört mir.",
          "Das Heft, das auf dem Tisch liegt gehört mir."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Welche Kommasetzung ist korrekt?",
        "answers": [
          "Ich hoffe, dass du die Prüfung bestehst.",
          "Ich hoffe dass, du die Prüfung bestehst.",
          "Ich hoffe dass du, die Prüfung bestehst."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      },
      {
        "prompt": "Wähle die richtig gegliederte Fassung.",
        "answers": [
          "Während ich lese, macht sie Notizen.",
          "Während ich, lese macht sie Notizen.",
          "Während ich lese macht sie, Notizen."
        ],
        "why": "Ein eingeleiteter Nebensatz wird durch ein Komma vom Hauptsatz getrennt. Ein eingeschobener Nebensatz braucht zwei Kommas."
      }
    ]
  },
  {
    "id": "de-komma-aufzaehlung",
    "label": "Kommas in Aufzählungen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma.",
    "rows": [
      {
        "prompt": "Welche einfache Aufzählung ist richtig?",
        "answers": [
          "Wir brauchen Stifte, Hefte und Ordner.",
          "Wir brauchen Stifte Hefte und Ordner.",
          "Wir brauchen Stifte, Hefte, und Ordner."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Wähle die richtig gesetzten Kommas.",
        "answers": [
          "Er misst, sägt und feilt.",
          "Er misst sägt und feilt.",
          "Er misst, sägt, und feilt."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche Schreibweise passt?",
        "answers": [
          "Sie kauft Brot, Milch und Eier.",
          "Sie kauft Brot Milch und Eier.",
          "Sie kauft Brot, Milch, und Eier."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Prüfe die einfache Aufzählung.",
        "answers": [
          "Wir lesen, markieren und vergleichen.",
          "Wir lesen markieren und vergleichen.",
          "Wir lesen, markieren, und vergleichen."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche Fassung ist korrekt?",
        "answers": [
          "Blau, Rot und Grün sind Farben.",
          "Blau Rot und Grün sind Farben.",
          "Blau, Rot, und Grün sind Farben."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Wähle die korrekte Zeichensetzung.",
        "answers": [
          "Im Regal liegen Schrauben, Muttern und Nägel.",
          "Im Regal liegen Schrauben Muttern und Nägel.",
          "Im Regal liegen Schrauben, Muttern, und Nägel."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche einfache Reihung ist richtig?",
        "answers": [
          "Ich esse gern Äpfel, Birnen und Trauben.",
          "Ich esse gern Äpfel Birnen und Trauben.",
          "Ich esse gern Äpfel, Birnen, und Trauben."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Prüfe die Zeichensetzung.",
        "answers": [
          "Wir üben montags, mittwochs und freitags.",
          "Wir üben montags mittwochs und freitags.",
          "Wir üben montags, mittwochs, und freitags."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche Fassung ist richtig?",
        "answers": [
          "Sie ist freundlich, geduldig und zuverlässig.",
          "Sie ist freundlich geduldig und zuverlässig.",
          "Sie ist freundlich, geduldig, und zuverlässig."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Wähle die richtige einfache Aufzählung.",
        "answers": [
          "Wir besuchen Lahr, Offenburg und Freiburg.",
          "Wir besuchen Lahr Offenburg und Freiburg.",
          "Wir besuchen Lahr, Offenburg, und Freiburg."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche Kommasetzung passt?",
        "answers": [
          "Auf dem Tisch stehen Tassen, Teller und Gläser.",
          "Auf dem Tisch stehen Tassen Teller und Gläser.",
          "Auf dem Tisch stehen Tassen, Teller, und Gläser."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Prüfe den Satz.",
        "answers": [
          "Er putzt, trocknet und sortiert die Teile.",
          "Er putzt trocknet und sortiert die Teile.",
          "Er putzt, trocknet, und sortiert die Teile."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche Aufzählung ist korrekt?",
        "answers": [
          "Ich brauche Lineal, Zirkel und Bleistift.",
          "Ich brauche Lineal Zirkel und Bleistift.",
          "Ich brauche Lineal, Zirkel, und Bleistift."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Wähle die korrekte Fassung.",
        "answers": [
          "Die Kiste enthält Kabel, Stecker und Schalter.",
          "Die Kiste enthält Kabel Stecker und Schalter.",
          "Die Kiste enthält Kabel, Stecker, und Schalter."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      },
      {
        "prompt": "Welche Zeichensetzung ist richtig?",
        "answers": [
          "Wir planen, rechnen und kontrollieren.",
          "Wir planen rechnen und kontrollieren.",
          "Wir planen, rechnen, und kontrollieren."
        ],
        "why": "Gleichrangige Teile einer Aufzählung werden durch Kommas getrennt. Vor dem abschließenden „und“ steht in diesen einfachen Aufzählungen kein Komma."
      }
    ]
  },
  {
    "id": "de-woertliche-rede",
    "label": "Wörtliche Rede",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen.",
    "rows": [
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Mia spricht.",
        "answers": [
          "Mia sagt: „Ich komme morgen.“",
          "Mia sagt, „Ich komme morgen.“",
          "Mia sagt: „Ich komme morgen“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Ali spricht.",
        "answers": [
          "Ali sagt: „Der Bus ist da.“",
          "Ali sagt, „Der Bus ist da.“",
          "Ali sagt: „Der Bus ist da“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Ben spricht.",
        "answers": [
          "Ben sagt: „Ich habe eine Frage.“",
          "Ben sagt, „Ich habe eine Frage.“",
          "Ben sagt: „Ich habe eine Frage“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Lena spricht.",
        "answers": [
          "Lena sagt: „Wir beginnen jetzt.“",
          "Lena sagt, „Wir beginnen jetzt.“",
          "Lena sagt: „Wir beginnen jetzt“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Tom spricht.",
        "answers": [
          "Tom sagt: „Das Werkzeug fehlt.“",
          "Tom sagt, „Das Werkzeug fehlt.“",
          "Tom sagt: „Das Werkzeug fehlt“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Sara spricht.",
        "answers": [
          "Sara sagt: „Die Tür ist offen.“",
          "Sara sagt, „Die Tür ist offen.“",
          "Sara sagt: „Die Tür ist offen“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Nina spricht.",
        "answers": [
          "Nina sagt: „Ich bin fertig.“",
          "Nina sagt, „Ich bin fertig.“",
          "Nina sagt: „Ich bin fertig“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Emir spricht.",
        "answers": [
          "Emir sagt: „Der Plan ist richtig.“",
          "Emir sagt, „Der Plan ist richtig.“",
          "Emir sagt: „Der Plan ist richtig“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Jana spricht.",
        "answers": [
          "Jana sagt: „Ich brauche Hilfe.“",
          "Jana sagt, „Ich brauche Hilfe.“",
          "Jana sagt: „Ich brauche Hilfe“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Noah spricht.",
        "answers": [
          "Noah sagt: „Die Maschine steht still.“",
          "Noah sagt, „Die Maschine steht still.“",
          "Noah sagt: „Die Maschine steht still“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Lea spricht.",
        "answers": [
          "Lea sagt: „Das Heft liegt hier.“",
          "Lea sagt, „Das Heft liegt hier.“",
          "Lea sagt: „Das Heft liegt hier“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Paul spricht.",
        "answers": [
          "Paul sagt: „Wir treffen uns später.“",
          "Paul sagt, „Wir treffen uns später.“",
          "Paul sagt: „Wir treffen uns später“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Aylin spricht.",
        "answers": [
          "Aylin sagt: „Das Licht ist aus.“",
          "Aylin sagt, „Das Licht ist aus.“",
          "Aylin sagt: „Das Licht ist aus“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Luca spricht.",
        "answers": [
          "Luca sagt: „Ich kontrolliere die Maße.“",
          "Luca sagt, „Ich kontrolliere die Maße.“",
          "Luca sagt: „Ich kontrolliere die Maße“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      },
      {
        "prompt": "Welche Fassung der direkten Rede ist richtig? Emma spricht.",
        "answers": [
          "Emma sagt: „Wir arbeiten zusammen.“",
          "Emma sagt, „Wir arbeiten zusammen.“",
          "Emma sagt: „Wir arbeiten zusammen“."
        ],
        "why": "Ein vorangestellter Begleitsatz endet mit einem Doppelpunkt. Die direkte Rede steht in Anführungszeichen; ihr Punkt steht vor dem schließenden Anführungszeichen."
      }
    ]
  },
  {
    "id": "de-wortarten",
    "label": "Wortarten erkennen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Die Verwendung im Satz hilft: Nomen benennen zum Beispiel Dinge, Verben drücken Tätigkeiten oder Zustände aus, Adjektive beschreiben Eigenschaften.",
    "rows": [
      {
        "prompt": "Welche Wortart hat „Hammer“ in „Der Hammer liegt hier“?",
        "answers": [
          "Nomen",
          "Verb",
          "Adjektiv"
        ],
        "why": "„Hammer“ benennt einen Gegenstand und ist ein Nomen."
      },
      {
        "prompt": "Welche Wortart hat „arbeitet“ in „Sie arbeitet heute“?",
        "answers": [
          "Verb",
          "Nomen",
          "Artikel"
        ],
        "why": "„Arbeitet“ ist eine gebeugte Verbform von „arbeiten“."
      },
      {
        "prompt": "Welche Wortart hat „glatt“ in „Die Platte ist glatt“?",
        "answers": [
          "Adjektiv",
          "Verb",
          "Nomen"
        ],
        "why": "„Glatt“ beschreibt eine Eigenschaft der Platte."
      },
      {
        "prompt": "Welche Wortart hat „der“ in „Der Bus kommt“?",
        "answers": [
          "Artikel",
          "Verb",
          "Adjektiv"
        ],
        "why": "„Der“ begleitet hier das Nomen „Bus“ als bestimmter Artikel."
      },
      {
        "prompt": "Welche Wortart hat „ich“ in „Ich messe die Länge“?",
        "answers": [
          "Personalpronomen",
          "Artikel",
          "Nomen"
        ],
        "why": "„Ich“ bezeichnet die sprechende Person und ist ein Personalpronomen."
      },
      {
        "prompt": "Welche Wortart hat „unter“ in „Das Heft liegt unter dem Tisch“?",
        "answers": [
          "Präposition",
          "Verb",
          "Nomen"
        ],
        "why": "„Unter“ leitet hier eine Wortgruppe ein, die den Ort angibt."
      },
      {
        "prompt": "Welche Wortart hat „und“ in „Mia und Ali arbeiten“?",
        "answers": [
          "Konjunktion",
          "Artikel",
          "Adjektiv"
        ],
        "why": "„Und“ verbindet hier zwei gleichrangige Teile."
      },
      {
        "prompt": "Welche Wortart hat „Schule“ in „Die Schule beginnt um acht“?",
        "answers": [
          "Nomen",
          "Verb",
          "Adjektiv"
        ],
        "why": "„Schule“ ist ein Nomen und wird großgeschrieben."
      },
      {
        "prompt": "Welche Wortart hat „lesen“ in „Wir lesen die Anleitung“?",
        "answers": [
          "Verb",
          "Nomen",
          "Präposition"
        ],
        "why": "„Lesen“ ist hier das Verb im Satz."
      },
      {
        "prompt": "Welche Wortart hat „zuverlässig“ in „Ben ist zuverlässig“?",
        "answers": [
          "Adjektiv",
          "Artikel",
          "Verb"
        ],
        "why": "„Zuverlässig“ beschreibt eine Eigenschaft von Ben."
      },
      {
        "prompt": "Welche Wortart hat „sie“ in „Mia kommt. Sie winkt“?",
        "answers": [
          "Personalpronomen",
          "Artikel",
          "Konjunktion"
        ],
        "why": "„Sie“ steht hier für die Person Mia."
      },
      {
        "prompt": "Welche Wortart hat „weil“ in „Ich bleibe, weil es regnet“?",
        "answers": [
          "Unterordnende Konjunktion",
          "Nomen",
          "Artikel"
        ],
        "why": "„Weil“ leitet einen Nebensatz ein und verbindet ihn mit dem Hauptsatz."
      },
      {
        "prompt": "Welche Wortart hat „ein“ in „Ein Paket kommt an“?",
        "answers": [
          "Unbestimmter Artikel",
          "Verb",
          "Adjektiv"
        ],
        "why": "„Ein“ begleitet das Nomen „Paket“ als unbestimmter Artikel."
      },
      {
        "prompt": "Welche Wortart hat „prüft“ in „Er prüft die Maße“?",
        "answers": [
          "Verb",
          "Nomen",
          "Artikel"
        ],
        "why": "„Prüft“ ist die dritte Person Singular des Verbs „prüfen“."
      },
      {
        "prompt": "Welche Wortart hat „schwer“ in „Der Kasten ist schwer“?",
        "answers": [
          "Adjektiv",
          "Nomen",
          "Präposition"
        ],
        "why": "„Schwer“ beschreibt eine Eigenschaft des Kastens."
      }
    ]
  },
  {
    "id": "de-zeitformen",
    "label": "Zeitformen im Deutschen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Die grammatische Zeitform erkennt man an der Verbform, nicht allein an einer Zeitangabe. Perfekt und Futur bestehen hier aus mehreren Verbteilen.",
    "rows": [
      {
        "prompt": "Welche grammatische Zeitform steht in „Ich arbeite heute“?",
        "answers": [
          "Präsens",
          "Perfekt",
          "Präteritum"
        ],
        "why": "„Arbeite“ ist eine Präsensform."
      },
      {
        "prompt": "Welche Zeitform hat „Sie hat gelernt“?",
        "answers": [
          "Perfekt",
          "Präsens",
          "Futur I"
        ],
        "why": "„Hat“ und das Partizip „gelernt“ bilden das Perfekt."
      },
      {
        "prompt": "Bestimme die Zeitform: „Er ging nach Hause.“",
        "answers": [
          "Präteritum",
          "Präsens",
          "Perfekt"
        ],
        "why": "„Ging“ ist die Präteritumform von „gehen“."
      },
      {
        "prompt": "Welche Zeitform hat „Wir werden üben“?",
        "answers": [
          "Futur I",
          "Perfekt",
          "Präteritum"
        ],
        "why": "„Werden“ und der Infinitiv „üben“ bilden das Futur I."
      },
      {
        "prompt": "Welche Zeitform steht in „Ich hatte die Tür geschlossen“?",
        "answers": [
          "Plusquamperfekt",
          "Perfekt",
          "Präsens"
        ],
        "why": "„Hatte“ und „geschlossen“ bilden das Plusquamperfekt."
      },
      {
        "prompt": "Bestimme die grammatische Zeitform: „Morgen fahre ich nach Lahr.“",
        "answers": [
          "Präsens",
          "Futur I",
          "Perfekt"
        ],
        "why": "Die Verbform „fahre“ ist Präsens, obwohl die Handlung in der Zukunft liegt."
      },
      {
        "prompt": "Welche Zeitform hat „Wir waren müde“?",
        "answers": [
          "Präteritum",
          "Perfekt",
          "Futur I"
        ],
        "why": "„Waren“ ist eine Präteritumform von „sein“."
      },
      {
        "prompt": "Bestimme die Zeitform: „Der Bus ist angekommen.“",
        "answers": [
          "Perfekt",
          "Präteritum",
          "Präsens"
        ],
        "why": "„Ist“ bildet zusammen mit „angekommen“ das Perfekt."
      },
      {
        "prompt": "Welche Zeitform steht in „Sie hatte den Text gelesen“?",
        "answers": [
          "Plusquamperfekt",
          "Präsens",
          "Futur I"
        ],
        "why": "„Hatte gelesen“ ist Plusquamperfekt."
      },
      {
        "prompt": "Welche Zeitform hat „Ihr messt die Platte“?",
        "answers": [
          "Präsens",
          "Präteritum",
          "Perfekt"
        ],
        "why": "„Messt“ ist eine Präsensform von „messen“."
      },
      {
        "prompt": "Bestimme die Zeitform: „Er schrieb eine Nachricht.“",
        "answers": [
          "Präteritum",
          "Perfekt",
          "Präsens"
        ],
        "why": "„Schrieb“ ist Präteritum von „schreiben“."
      },
      {
        "prompt": "Welche Zeitform hat „Wir haben die Aufgabe verstanden“?",
        "answers": [
          "Perfekt",
          "Futur I",
          "Präteritum"
        ],
        "why": "„Haben verstanden“ bildet das Perfekt."
      },
      {
        "prompt": "Welche Zeitform steht in „Ich werde pünktlich sein“?",
        "answers": [
          "Futur I",
          "Präsens",
          "Perfekt"
        ],
        "why": "„Werde“ und „sein“ bilden das Futur I."
      },
      {
        "prompt": "Bestimme die Zeitform: „Sie waren schon gegangen.“",
        "answers": [
          "Plusquamperfekt",
          "Perfekt",
          "Präsens"
        ],
        "why": "„Waren gegangen“ bildet das Plusquamperfekt."
      },
      {
        "prompt": "Welche Zeitform hat „Du bringst das Material“?",
        "answers": [
          "Präsens",
          "Präteritum",
          "Futur I"
        ],
        "why": "„Bringst“ ist die zweite Person Singular im Präsens."
      }
    ]
  },
  {
    "id": "de-satzglieder",
    "label": "Subjekt und Prädikat",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Das Subjekt wird mit „Wer oder was?“ erfragt. Das Prädikat besteht aus dem Verb oder mehreren zusammengehörigen Verbteilen.",
    "rows": [
      {
        "prompt": "Was ist das vollständige Subjekt in „Der neue Schüler kommt“?",
        "answers": [
          "Der neue Schüler",
          "kommt",
          "neue Schüler"
        ],
        "why": "„Wer kommt?“ fragt nach „der neue Schüler“. Der Artikel gehört zur Wortgruppe."
      },
      {
        "prompt": "Was ist das Prädikat in „Mia liest die Anleitung“?",
        "answers": [
          "liest",
          "Mia",
          "die Anleitung"
        ],
        "why": "„Liest“ ist die Verbform und bildet das Prädikat."
      },
      {
        "prompt": "Bestimme das Subjekt: „Heute arbeitet Ali in der Werkstatt.“",
        "answers": [
          "Ali",
          "Heute",
          "in der Werkstatt"
        ],
        "why": "Das Subjekt ist „Ali“, obwohl es nicht am Satzanfang steht."
      },
      {
        "prompt": "Was ist das vollständige Prädikat in „Ben hat das Teil geprüft“?",
        "answers": [
          "hat geprüft",
          "Ben",
          "das Teil"
        ],
        "why": "Das Prädikat besteht aus Hilfsverb und Partizip: „hat geprüft“."
      },
      {
        "prompt": "Was ist das Subjekt in „Die beiden Busse kommen später“?",
        "answers": [
          "Die beiden Busse",
          "kommen später",
          "später"
        ],
        "why": "„Wer oder was kommt?“ führt zur vollständigen Wortgruppe „die beiden Busse“."
      },
      {
        "prompt": "Bestimme das Prädikat: „Wir räumen die Tische auf.“",
        "answers": [
          "räumen auf",
          "Wir",
          "die Tische"
        ],
        "why": "„Aufräumen“ ist trennbar; beide Verbteile gehören zum Prädikat."
      },
      {
        "prompt": "Was ist das Subjekt in „Im Regal liegt ein Heft“?",
        "answers": [
          "ein Heft",
          "Im Regal",
          "liegt"
        ],
        "why": "Mit „Was liegt im Regal?“ erfragt man „ein Heft“."
      },
      {
        "prompt": "Was ist das vollständige Prädikat in „Sara möchte Metall bearbeiten“?",
        "answers": [
          "möchte bearbeiten",
          "Sara",
          "Metall"
        ],
        "why": "Modalverb und Infinitiv bilden hier gemeinsam das Prädikat."
      },
      {
        "prompt": "Bestimme das Subjekt: „Die Lehrerin erklärt die Regel.“",
        "answers": [
          "Die Lehrerin",
          "die Regel",
          "erklärt"
        ],
        "why": "Die Lehrerin ist die Person, die erklärt."
      },
      {
        "prompt": "Was ist das Prädikat in „Der Motor läuft leise“?",
        "answers": [
          "läuft",
          "Der Motor",
          "leise"
        ],
        "why": "„Läuft“ ist das Verb und damit das Prädikat."
      },
      {
        "prompt": "Was ist das Subjekt in „Nach der Pause beginnen wir“?",
        "answers": [
          "wir",
          "Nach der Pause",
          "beginnen"
        ],
        "why": "„Wer beginnt?“ wird mit „wir“ beantwortet."
      },
      {
        "prompt": "Was ist das vollständige Prädikat in „Ihr werdet die Maße kontrollieren“?",
        "answers": [
          "werdet kontrollieren",
          "Ihr",
          "die Maße"
        ],
        "why": "„Werdet kontrollieren“ besteht aus beiden zusammengehörigen Verbteilen."
      },
      {
        "prompt": "Bestimme das Subjekt: „Dieses schwere Paket wiegt zehn Kilogramm.“",
        "answers": [
          "Dieses schwere Paket",
          "zehn Kilogramm",
          "wiegt"
        ],
        "why": "Das vollständige Subjekt umfasst „dieses“, „schwere“ und „Paket“."
      },
      {
        "prompt": "Was ist das Prädikat in „Die Klasse hört aufmerksam zu“?",
        "answers": [
          "hört zu",
          "Die Klasse",
          "aufmerksam"
        ],
        "why": "Beide Teile des trennbaren Verbs „zuhören“ gehören zum Prädikat."
      },
      {
        "prompt": "Was ist das Subjekt in „Gestern fehlten zwei Werkzeuge“?",
        "answers": [
          "zwei Werkzeuge",
          "Gestern",
          "fehlten"
        ],
        "why": "Die Frage „Was fehlte?“ richtet sich auf „zwei Werkzeuge“."
      }
    ]
  },
  {
    "id": "de-faelle",
    "label": "Die vier Fälle",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Der Fall einer Wortgruppe ergibt sich aus ihrer Aufgabe im Satz oder aus der zugehörigen Präposition. Frageproben können helfen.",
    "rows": [
      {
        "prompt": "In welchem Fall steht „der Schüler“ in „Der Schüler arbeitet“?",
        "answers": [
          "Nominativ",
          "Dativ",
          "Akkusativ"
        ],
        "why": "„Wer arbeitet?“ fragt nach dem Subjekt im Nominativ."
      },
      {
        "prompt": "In welchem Fall steht „den Hammer“ in „Ich hole den Hammer“?",
        "answers": [
          "Akkusativ",
          "Nominativ",
          "Dativ"
        ],
        "why": "„Wen oder was hole ich?“ fragt nach „den Hammer“ im Akkusativ."
      },
      {
        "prompt": "Bestimme den Fall von „dem Kind“: „Ich helfe dem Kind.“",
        "answers": [
          "Dativ",
          "Akkusativ",
          "Nominativ"
        ],
        "why": "Das Verb „helfen“ verlangt hier eine Ergänzung im Dativ."
      },
      {
        "prompt": "Welcher Fall steht bei „des Lehrers“ in „Das ist die Tasche des Lehrers“?",
        "answers": [
          "Genitiv",
          "Dativ",
          "Akkusativ"
        ],
        "why": "„Wessen Tasche?“ fragt nach dem Genitiv „des Lehrers“."
      },
      {
        "prompt": "Bestimme den Fall von „dem Bus“: „Ich fahre mit dem Bus.“",
        "answers": [
          "Dativ",
          "Akkusativ",
          "Genitiv"
        ],
        "why": "Die Präposition „mit“ verlangt den Dativ."
      },
      {
        "prompt": "In welchem Fall steht „meinen Bruder“ in „Das Geschenk ist für meinen Bruder“?",
        "answers": [
          "Akkusativ",
          "Dativ",
          "Nominativ"
        ],
        "why": "Die Präposition „für“ verlangt den Akkusativ."
      },
      {
        "prompt": "Bestimme den Fall von „die Klasse“: „Die Klasse beginnt mit dem Quiz.“",
        "answers": [
          "Nominativ",
          "Genitiv",
          "Dativ"
        ],
        "why": "„Die Klasse“ ist das Subjekt im Nominativ."
      },
      {
        "prompt": "In welchem Fall steht „dem Tisch“ in „Das Heft liegt auf dem Tisch“?",
        "answers": [
          "Dativ",
          "Akkusativ",
          "Genitiv"
        ],
        "why": "Die Ortsangabe beantwortet hier „Wo?“. Nach „auf“ steht in diesem Satz Dativ."
      },
      {
        "prompt": "Welcher Fall steht bei „den Tisch“ in „Ich lege das Heft auf den Tisch“?",
        "answers": [
          "Akkusativ",
          "Dativ",
          "Nominativ"
        ],
        "why": "Die gerichtete Bewegung beantwortet „Wohin?“. Hier steht Akkusativ."
      },
      {
        "prompt": "Bestimme den Fall von „meiner Freundin“: „Ich gebe meiner Freundin das Heft.“",
        "answers": [
          "Dativ",
          "Genitiv",
          "Nominativ"
        ],
        "why": "„Wem gebe ich das Heft?“ fragt nach dem Dativ."
      },
      {
        "prompt": "In welchem Fall steht „einen Stift“ in „Ich brauche einen Stift“?",
        "answers": [
          "Akkusativ",
          "Dativ",
          "Genitiv"
        ],
        "why": "„Wen oder was brauche ich?“ fragt nach dem Akkusativ."
      },
      {
        "prompt": "Bestimme den Fall von „des Betriebs“: „Der Eingang des Betriebs ist offen.“",
        "answers": [
          "Genitiv",
          "Dativ",
          "Nominativ"
        ],
        "why": "„Wessen Eingang?“ fragt nach dem Genitiv."
      },
      {
        "prompt": "In welchem Fall steht „dem Unterricht“ in „Nach dem Unterricht räumen wir auf“?",
        "answers": [
          "Dativ",
          "Akkusativ",
          "Genitiv"
        ],
        "why": "Die Präposition „nach“ verlangt den Dativ."
      },
      {
        "prompt": "Bestimme den Fall von „die Halle“: „Wir gehen durch die Halle.“",
        "answers": [
          "Akkusativ",
          "Dativ",
          "Nominativ"
        ],
        "why": "Die Präposition „durch“ verlangt den Akkusativ."
      },
      {
        "prompt": "In welchem Fall steht „der Schlüssel“ in „Hier liegt der Schlüssel“?",
        "answers": [
          "Nominativ",
          "Dativ",
          "Genitiv"
        ],
        "why": "„Was liegt hier?“ fragt nach dem Subjekt im Nominativ."
      }
    ]
  },
  {
    "id": "de-pronomen",
    "label": "Pronomen und Bezüge",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen.",
    "rows": [
      {
        "prompt": "Mia kommt später. Welches Pronomen ersetzt „Mia“?",
        "answers": [
          "Sie",
          "Er",
          "Es"
        ],
        "why": "„Mia“ wird durch „sie“ ersetzt."
      },
      {
        "prompt": "Ali ist krank. Welches Pronomen ersetzt „Ali“?",
        "answers": [
          "Er",
          "Sie",
          "Es"
        ],
        "why": "„Ali“ wird hier durch „er“ ersetzt."
      },
      {
        "prompt": "Das Heft liegt hier. Welches Pronomen ersetzt „das Heft“?",
        "answers": [
          "Es",
          "Er",
          "Sie"
        ],
        "why": "„Heft“ ist sächlich. Deshalb passt „es“."
      },
      {
        "prompt": "Die Werkzeuge sind sauber. Welches Pronomen ersetzt „die Werkzeuge“?",
        "answers": [
          "Sie",
          "Es",
          "Er"
        ],
        "why": "Für mehrere Werkzeuge steht das Pronomen „sie“."
      },
      {
        "prompt": "Ben und ich arbeiten zusammen. Welches Pronomen ersetzt „Ben und ich“?",
        "answers": [
          "Wir",
          "Ihr",
          "Sie"
        ],
        "why": "Wenn ich selbst zu der Gruppe gehöre, steht „wir“."
      },
      {
        "prompt": "Lena wird direkt angesprochen: „Lena, kommst ___ morgen mit?“",
        "answers": [
          "du",
          "ich",
          "wir"
        ],
        "why": "Eine einzelne vertraute Person spricht man mit „du“ an."
      },
      {
        "prompt": "Die Maschine ist laut. Welches Pronomen ersetzt „die Maschine“?",
        "answers": [
          "Sie",
          "Er",
          "Es"
        ],
        "why": "„Maschine“ ist weiblich. Deshalb passt „sie“."
      },
      {
        "prompt": "Der Ordner ist voll. Welches Pronomen ersetzt „der Ordner“?",
        "answers": [
          "Er",
          "Es",
          "Sie"
        ],
        "why": "„Ordner“ ist männlich. Deshalb passt „er“."
      },
      {
        "prompt": "Das Paket ist schwer. Welches Pronomen ersetzt „das Paket“?",
        "answers": [
          "Es",
          "Er",
          "Wir"
        ],
        "why": "„Paket“ ist sächlich. Deshalb passt „es“."
      },
      {
        "prompt": "Mia und Ali werden direkt angesprochen: „Mia und Ali, ___ seid als Nächste dran.“",
        "answers": [
          "ihr",
          "wir",
          "er"
        ],
        "why": "Mehrere vertraute Personen spricht man mit „ihr“ an."
      },
      {
        "prompt": "Welches Pronomen ersetzt „den Schlüssel“? „Hast du den Schlüssel gesehen?“",
        "answers": [
          "ihn",
          "sie",
          "es"
        ],
        "why": "„Den Schlüssel“ steht im Akkusativ. Das passende Pronomen ist „ihn“."
      },
      {
        "prompt": "Welches Pronomen ersetzt „das Lineal“? „Gibst du mir das Lineal?“",
        "answers": [
          "es",
          "ihn",
          "ihnen"
        ],
        "why": "„Das Lineal“ wird hier durch „es“ ersetzt."
      },
      {
        "prompt": "Welches Pronomen ersetzt „die Kollegin“? „Ich begrüße die Kollegin.“",
        "answers": [
          "sie",
          "ihn",
          "es"
        ],
        "why": "„Die Kollegin“ wird im Akkusativ durch „sie“ ersetzt."
      },
      {
        "prompt": "Welches Pronomen ersetzt „den Schülern“? „Ich helfe den Schülern.“",
        "answers": [
          "ihnen",
          "ihn",
          "es"
        ],
        "why": "„Helfen“ verlangt den Dativ. Für mehrere Schüler steht „ihnen“."
      },
      {
        "prompt": "Das ist mein Platz. Er gehört ___.",
        "answers": [
          "mir",
          "mich",
          "ich"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      }
    ]
  },
  {
    "id": "de-synonyme",
    "label": "Synonyme im Kontext",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.1 und 1.4",
    "rule": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet.",
    "rows": [
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „beginnen“? „Wir beginnen mit der Arbeit.“",
        "answers": [
          "starten",
          "beenden",
          "vergessen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „rasch“? „Er arbeitet rasch.“",
        "answers": [
          "schnell",
          "langsam",
          "selten"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „kontrollieren“? „Wir kontrollieren die Maße.“",
        "answers": [
          "prüfen",
          "verstecken",
          "vergrößern"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „erforderlich“? „Ein Helm ist erforderlich.“",
        "answers": [
          "notwendig",
          "verboten",
          "zufällig"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „defekt“? „Das Gerät ist defekt.“",
        "answers": [
          "kaputt",
          "neu",
          "sicher"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „erhalten“? „Sie hat das Paket erhalten.“",
        "answers": [
          "bekommen",
          "verschickt",
          "verloren"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „pünktlich“? „Er erscheint pünktlich.“",
        "answers": [
          "zur vereinbarten Zeit",
          "viel zu spät",
          "ohne Anmeldung"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „informieren“? „Wir informieren die Klasse.“",
        "answers": [
          "benachrichtigen",
          "verwirren",
          "übersehen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „geeignet“? „Dieses Werkzeug ist geeignet.“",
        "answers": [
          "passend",
          "unbrauchbar",
          "schmutzig"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „zuverlässig“? „Die Kollegin ist zuverlässig.“",
        "answers": [
          "verlässlich",
          "unaufmerksam",
          "unbekannt"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „sorgfältig“? „Sie prüft sorgfältig.“",
        "answers": [
          "genau und gewissenhaft",
          "nur ungefähr",
          "besonders selten"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „ablehnen“? „Er will den Vorschlag ablehnen.“",
        "answers": [
          "zurückweisen",
          "annehmen",
          "ausführen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „vereinbaren“? „Wir vereinbaren einen Termin.“",
        "answers": [
          "gemeinsam festlegen",
          "heimlich ändern",
          "ersatzlos streichen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „vermindern“? „Wir vermindern den Lärm.“",
        "answers": [
          "verringern",
          "vergrößern",
          "ignorieren"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welche Antwort bedeutet hier dasselbe wie „beheben“? „Sie will den Fehler beheben.“",
        "answers": [
          "beseitigen",
          "verursachen",
          "verschweigen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      }
    ]
  },
  {
    "id": "de-antonyme",
    "label": "Gegensätze und Wortbedeutungen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.1 und 1.4",
    "rule": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus.",
    "rows": [
      {
        "prompt": "Was ist das Gegenteil von „laut“, wenn es um Geräusche geht?",
        "answers": [
          "leise",
          "hell",
          "schnell"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „geschlossen“ bei einer Tür?",
        "answers": [
          "offen",
          "schwer",
          "rund"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „erlaubt“ in einer Regel?",
        "answers": [
          "verboten",
          "empfohlen",
          "bekannt"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Welches Wort bedeutet „später als zur vereinbarten Zeit“?",
        "answers": [
          "verspätet",
          "frühzeitig",
          "pünktlich"
        ],
        "why": "„Verspätet“ bedeutet, dass die vereinbarte Zeit überschritten ist."
      },
      {
        "prompt": "Was ist das Gegenteil von „erhöhen“ bei einer Zahl?",
        "answers": [
          "verringern",
          "verdoppeln",
          "vergleichen"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Welches Wort ist ein Gegensatz zu „sicher“ bei einer Gefahrensituation?",
        "answers": [
          "gefährlich",
          "stabil",
          "übersichtlich"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „trocken“ bei einem Handtuch?",
        "answers": [
          "nass",
          "weich",
          "sauber"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „leer“ bei einem Behälter?",
        "answers": [
          "voll",
          "groß",
          "offen"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Welches Wort bedeutet das Gegenteil von „zustimmen“?",
        "answers": [
          "widersprechen",
          "bestätigen",
          "befürworten"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „verlängern“ bei einer Strecke?",
        "answers": [
          "verkürzen",
          "messen",
          "zeichnen"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „sorgfältig“ bei einer Arbeit?",
        "answers": [
          "nachlässig",
          "gründlich",
          "genau"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „privat“ in „eine private Nachricht“?",
        "answers": [
          "öffentlich",
          "persönlich",
          "vertraulich"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „gelungen“ bei einem Versuch?",
        "answers": [
          "misslungen",
          "erfolgreich",
          "beendet"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „annehmen“ bei einem Angebot?",
        "answers": [
          "ablehnen",
          "akzeptieren",
          "prüfen"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      },
      {
        "prompt": "Was ist das Gegenteil von „regelmäßig“ bei wiederkehrenden Terminen?",
        "answers": [
          "unregelmäßig",
          "häufig",
          "täglich"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
      }
    ]
  },
  {
    "id": "de-konnektoren",
    "label": "Sätze sinnvoll verbinden",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Konnektoren verbinden Aussagen nach ihrem Sinn: zum Beispiel Grund, Gegensatz, Bedingung, Zweck oder Folge.",
    "rows": [
      {
        "prompt": "Welches Wort leitet den Grund ein? „Ich bleibe zu Hause, ___ ich krank bin.“",
        "answers": [
          "weil",
          "obwohl",
          "damit"
        ],
        "why": "„Weil“ nennt den Grund für das Zuhausebleiben."
      },
      {
        "prompt": "Welches Wort leitet den Grund ein? „Ich ziehe eine Jacke an, ___ es kalt ist.“",
        "answers": [
          "weil",
          "damit",
          "obwohl"
        ],
        "why": "Die Kälte ist der Grund. Deshalb passt „weil“."
      },
      {
        "prompt": "Welches Wort zeigt einen Gegensatz? „___ es regnet, gehe ich ohne Schirm hinaus.“",
        "answers": [
          "Obwohl",
          "Damit",
          "Weil"
        ],
        "why": "„Obwohl“ zeigt: Trotz des Regens geht die Person ohne Schirm hinaus."
      },
      {
        "prompt": "Welches Wort leitet das Ziel ein? „Ich übe, ___ ich sicherer werde.“",
        "answers": [
          "damit",
          "obwohl",
          "während"
        ],
        "why": "Das Ziel des Übens ist mehr Sicherheit. „Damit“ leitet dieses Ziel ein."
      },
      {
        "prompt": "Welches Wort nennt eine Bedingung? „___ du Hilfe brauchst, frage nach.“",
        "answers": [
          "Wenn",
          "Obwohl",
          "Damit"
        ],
        "why": "Der Hilfebedarf ist die Bedingung. Dazu passt „wenn“."
      },
      {
        "prompt": "Ich räume zuerst auf und gehe dann nach Hause. Welches Wort passt? „Ich räume auf, ___ ich nach Hause gehe.“",
        "answers": [
          "bevor",
          "nachdem",
          "während"
        ],
        "why": "„Bevor“ zeigt, dass das Aufräumen vor dem Nachhausegehen stattfindet."
      },
      {
        "prompt": "Die Maschine muss vor der Reinigung stillstehen. Welcher Ausdruck zeigt diese Bedingung? „___ die Maschine stillsteht, dürfen wir sie reinigen.“",
        "answers": [
          "Erst wenn",
          "Obwohl",
          "Damit"
        ],
        "why": "„Erst wenn“ nennt die Bedingung, die vor der Reinigung erfüllt sein muss."
      },
      {
        "prompt": "Welches Wort leitet das Ziel ein? „Ich trage eine Schutzbrille, ___ meine Augen geschützt sind.“",
        "answers": [
          "damit",
          "obwohl",
          "während"
        ],
        "why": "Der Schutz der Augen ist das Ziel. Dazu passt „damit“."
      },
      {
        "prompt": "Welches Wort leitet den Grund ein? „Er ist müde, ___ er wenig geschlafen hat.“",
        "answers": [
          "weil",
          "damit",
          "obwohl"
        ],
        "why": "Der wenige Schlaf ist der Grund für die Müdigkeit."
      },
      {
        "prompt": "Beides geschieht gleichzeitig. Was passt? „___ ich die Anleitung lese, macht Ali Notizen.“",
        "answers": [
          "Während",
          "Bevor",
          "Nachdem"
        ],
        "why": "„Während“ kennzeichnet gleichzeitige Vorgänge."
      },
      {
        "prompt": "Das Warten endet, sobald der Lack trocken ist. Was passt? „Wir warten, ___ der Lack trocken ist.“",
        "answers": [
          "bis",
          "seitdem",
          "obwohl"
        ],
        "why": "„Bis“ nennt den Zeitpunkt, an dem das Warten endet."
      },
      {
        "prompt": "Welches Wort zeigt einen Gegensatz? „Ich habe angerufen, ___ niemand war erreichbar.“",
        "answers": [
          "aber",
          "denn",
          "also"
        ],
        "why": "„Aber“ verbindet den Anruf mit dem unerwarteten Ergebnis."
      },
      {
        "prompt": "Welches Wort zeigt eine Folge? „Es ist glatt. ___ fahren wir langsam.“",
        "answers": [
          "Deshalb",
          "Trotzdem",
          "Vorher"
        ],
        "why": "Das langsame Fahren ist die Folge der Glätte. Deshalb passt „deshalb“."
      },
      {
        "prompt": "Welches Wort zeigt einen Gegensatz? „Sie übt regelmäßig. ___ macht sie noch Fehler.“",
        "answers": [
          "Trotzdem",
          "Deshalb",
          "Zuerst"
        ],
        "why": "„Trotzdem“ zeigt: Die Fehler treten trotz des Übens auf."
      },
      {
        "prompt": "Erst wird kontrolliert, danach zugeschnitten. Was passt? „Wir kontrollieren die Maße, ___ wir das Teil zuschneiden.“",
        "answers": [
          "bevor",
          "nachdem",
          "während"
        ],
        "why": "„Bevor“ legt die Kontrolle zeitlich vor den Zuschnitt."
      }
    ]
  },
  {
    "id": "de-satzbau",
    "label": "Hauptsatz und Nebensatz",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende.",
    "rows": [
      {
        "prompt": "Welche Wortstellung ist richtig? Wörter: später / Bus / der / kommt / Heute",
        "answers": [
          "Heute kommt der Bus später.",
          "Heute der Bus kommt später.",
          "Heute später der Bus kommt."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welcher Nebensatz ist richtig gebildet? Wörter: arbeite / heute / ich / weil",
        "answers": [
          "weil ich heute arbeite",
          "weil ich arbeite heute",
          "weil arbeite ich heute"
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Fassung ist richtig? Wörter: Test / einen / wir / schreiben / Morgen",
        "answers": [
          "Morgen schreiben wir einen Test.",
          "Morgen wir schreiben einen Test.",
          "Morgen einen Test wir schreiben."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welcher Satz passt zur Standardsprache? Wörter: kommst / morgen / du / dass / hoffe / Ich",
        "answers": [
          "Ich hoffe, dass du morgen kommst.",
          "Ich hoffe, dass du kommst morgen.",
          "Ich hoffe, dass kommst du morgen."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Wortstellung ist korrekt? Wörter: auf / wir / räumen / Pause / der / Nach",
        "answers": [
          "Nach der Pause räumen wir auf.",
          "Nach der Pause wir räumen auf.",
          "Nach der Pause auf wir räumen."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welcher Nebensatz ist richtig? Wörter: ist / müde / sie / obwohl",
        "answers": [
          "obwohl sie müde ist",
          "obwohl sie ist müde",
          "obwohl ist sie müde"
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Fassung ist richtig? Wörter: Ali / arbeitet / Halle / der / In",
        "answers": [
          "In der Halle arbeitet Ali.",
          "In der Halle Ali arbeitet.",
          "In der Halle arbeitet."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welcher Nebensatz passt? Wörter: stillsteht / Maschine / die / wenn",
        "answers": [
          "wenn die Maschine stillsteht",
          "wenn die Maschine steht still",
          "wenn steht die Maschine still"
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Wortstellung ist korrekt? Wörter: mit / Mia / bringt / Werkzeug / Das",
        "answers": [
          "Das Werkzeug bringt Mia mit.",
          "Das Werkzeug Mia bringt mit.",
          "Das Werkzeug mit bringt Mia."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Fassung ist richtig? Wörter: Maße / die / wir / prüfen / starten / wir / Bevor",
        "answers": [
          "Bevor wir starten, prüfen wir die Maße.",
          "Bevor wir starten, wir prüfen die Maße.",
          "Bevor starten wir, prüfen die Maße wir."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welcher Nebensatz ist korrekt? Wörter: wird / verletzt / niemand / damit",
        "answers": [
          "damit niemand verletzt wird",
          "damit niemand wird verletzt",
          "damit wird niemand verletzt"
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Wortstellung ist richtig? Wörter: Betrieb / den / wir / besuchen / Freitag / Am",
        "answers": [
          "Am Freitag besuchen wir den Betrieb.",
          "Am Freitag wir besuchen den Betrieb.",
          "Am Freitag den Betrieb wir besuchen."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Fassung passt? Wörter: ist / geöffnet / Laden / der / ob / frage / Ich",
        "answers": [
          "Ich frage, ob der Laden geöffnet ist.",
          "Ich frage, ob der Laden ist geöffnet.",
          "Ich frage, ob ist der Laden geöffnet."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welcher Nebensatz ist korrekt? Wörter: lesen / Text / den / wir / während",
        "answers": [
          "während wir den Text lesen",
          "während wir lesen den Text",
          "während lesen wir den Text"
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      },
      {
        "prompt": "Welche Wortstellung ist richtig? Wörter: gekauft / gestern / ich / habe / Heft / Dieses",
        "answers": [
          "Dieses Heft habe ich gestern gekauft.",
          "Dieses Heft ich habe gestern gekauft.",
          "Dieses Heft gestern ich habe gekauft."
        ],
        "why": "Im gewöhnlichen Aussagesatz steht das finite Verb an zweiter Satzgliedposition. Im eingeleiteten Nebensatz steht es in diesen Beispielen am Ende."
      }
    ]
  },
  {
    "id": "de-hoefliche-bitten",
    "label": "Höflich bitten und nachfragen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.1–1.2",
    "rule": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach.",
    "rows": [
      {
        "prompt": "Du möchtest einen Stift ausleihen. Welche Bitte nennt genau dieses Anliegen?",
        "answers": [
          "Kannst du mir bitte einen Stift leihen?",
          "Kannst du mir bitte die Uhrzeit sagen?",
          "Kannst du mir bitte das Heft zeigen?"
        ],
        "why": "„Kannst du mir bitte einen Stift leihen?“ fragt nach einem Stift zum Ausleihen."
      },
      {
        "prompt": "Du weißt nicht, ob du nur die Länge oder auch die Breite messen sollst. Welche Rückfrage klärt das?",
        "answers": [
          "Soll ich nur die Länge oder auch die Breite messen?",
          "Soll ich die Maße mit Bleistift oder mit Kugelschreiber notieren?",
          "Soll ich das Blatt heute oder morgen abgeben?"
        ],
        "why": "Die Frage nennt die beiden unklaren Maße."
      },
      {
        "prompt": "Du möchtest die Anfangszeit eines Termins wissen. Welche Frage passt?",
        "answers": [
          "Um wie viel Uhr beginnt unser Termin?",
          "In welchem Raum findet unser Termin statt?",
          "Wie lange dauert unser Termin?"
        ],
        "why": "„Um wie viel Uhr“ fragt nach der Anfangszeit."
      },
      {
        "prompt": "Ein Kunde soll kurz warten, während du nachfragst. Welcher Satz teilt beides mit?",
        "answers": [
          "Bitte warten Sie einen Moment. Ich frage nach.",
          "Bitte kommen Sie morgen wieder. Ich bin dann da.",
          "Bitte gehen Sie zum Eingang. Ich folge Ihnen."
        ],
        "why": "Der Satz nennt das kurze Warten und den Grund dafür."
      },
      {
        "prompt": "Du möchtest den letzten Satz noch einmal hören. Welche Bitte passt?",
        "answers": [
          "Könnten Sie den letzten Satz bitte wiederholen?",
          "Könnten Sie den letzten Satz bitte aufschreiben?",
          "Könnten Sie den nächsten Satz bitte vorlesen?"
        ],
        "why": "„Wiederholen“ bedeutet hier, denselben Satz noch einmal zu sagen."
      },
      {
        "prompt": "Du möchtest die Erlaubnis, einen Raum zu betreten. Welche Frage passt?",
        "answers": [
          "Darf ich bitte kurz hereinkommen?",
          "Darf ich bitte kurz hinausgehen?",
          "Darf ich bitte das Fenster öffnen?"
        ],
        "why": "„Hereinkommen“ bezeichnet das Betreten des Raums."
      },
      {
        "prompt": "Du möchtest beim Tragen einer schweren Kiste Hilfe. Welche Bitte passt?",
        "answers": [
          "Hilfst du mir bitte mit der schweren Kiste?",
          "Zeigst du mir bitte den leeren Lagerraum?",
          "Notierst du bitte das Gewicht der Kiste?"
        ],
        "why": "Nur diese Bitte fragt nach Hilfe mit der Kiste."
      },
      {
        "prompt": "Du weißt nicht, ob fünf Teile oder fünf Packungen gemeint sind. Welche Rückfrage klärt die Menge?",
        "answers": [
          "Meinen Sie fünf einzelne Teile oder fünf Packungen?",
          "Soll ich die Packungen heute oder morgen abholen?",
          "Welche Farbe sollen die Teile haben?"
        ],
        "why": "Die Frage unterscheidet einzelne Teile und ganze Packungen."
      },
      {
        "prompt": "Du kannst einen Termin nicht wahrnehmen und möchtest einen Ersatztermin. Welche Bitte passt?",
        "answers": [
          "Könnten wir bitte einen neuen Termin vereinbaren?",
          "Könnten Sie mir bitte den Weg zum Termin erklären?",
          "Könnten Sie mir bitte die Dauer des Termins nennen?"
        ],
        "why": "Nur diese Bitte verlangt die Vereinbarung eines neuen Termins."
      },
      {
        "prompt": "Du möchtest fünf Minuten länger an der Aufgabe arbeiten. Welche Bitte nennt das genau?",
        "answers": [
          "Kann ich bitte noch fünf Minuten weiterarbeiten?",
          "Kann ich bitte fünf Minuten früher gehen?",
          "Kann ich bitte fünf neue Aufgaben bekommen?"
        ],
        "why": "Die Bitte nennt die zusätzliche Arbeitszeit von fünf Minuten."
      },
      {
        "prompt": "Du möchtest eine Kollegin zuerst ausreden lassen und danach nachfragen. Welcher Satz sagt das?",
        "answers": [
          "Bitte erzähle erst zu Ende. Danach frage ich nach.",
          "Bitte höre erst meine Frage. Danach kannst du erzählen.",
          "Bitte schreibe deine Frage auf. Ich lese sie später."
        ],
        "why": "Die Reihenfolge lautet: erst ausreden lassen, dann nachfragen."
      },
      {
        "prompt": "Du suchst die Person, die eine Bestellung bearbeitet. Welche Frage passt?",
        "answers": [
          "Wer ist für diese Bestellung zuständig?",
          "Wann wurde diese Bestellung abgeschickt?",
          "Wie viel kostet diese Bestellung?"
        ],
        "why": "„Wer“ fragt nach der zuständigen Person."
      },
      {
        "prompt": "In deiner Notiz steht „Treffen um 9 Uhr“. Welche Rückfrage überprüft genau diese Uhrzeit?",
        "answers": [
          "Habe ich richtig notiert, dass wir uns um 9 Uhr treffen?",
          "Habe ich richtig notiert, dass wir uns in Raum 9 treffen?",
          "Habe ich richtig notiert, dass wir neun Teile brauchen?"
        ],
        "why": "Die Frage überprüft 9 Uhr als Treffzeit."
      },
      {
        "prompt": "Du möchtest eine möglicherweise falsche Maßangabe gemeinsam prüfen. Welche Bitte passt?",
        "answers": [
          "Können wir diese Maßangabe bitte gemeinsam prüfen?",
          "Können wir die Werkzeuge bitte gemeinsam aufräumen?",
          "Können wir die Bestellung bitte gemeinsam verpacken?"
        ],
        "why": "Die Bitte bezieht sich direkt auf die Prüfung der Maßangabe."
      },
      {
        "prompt": "Du möchtest eine Anleitung zugeschickt bekommen. Welche Bitte passt?",
        "answers": [
          "Könnten Sie mir bitte die Anleitung schicken?",
          "Könnten Sie mir bitte den Preis nennen?",
          "Könnten Sie mir bitte den Termin bestätigen?"
        ],
        "why": "Nur diese Bitte fragt nach dem Versand der Anleitung."
      }
    ]
  },
  {
    "id": "de-feedback",
    "label": "Gesprächsregeln und Feedback",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.1–1.2",
    "rule": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch.",
    "rows": [
      {
        "prompt": "Welche Rückmeldung nennt ein beobachtetes Verhalten mit einer genauen Anzahl?",
        "answers": [
          "Du hast mich gerade zweimal unterbrochen.",
          "Du hörst manchmal nicht zu.",
          "Unser Gespräch war unruhig."
        ],
        "why": "„Du hast mich gerade zweimal unterbrochen“ nennt ein beobachtetes Verhalten und die genaue Anzahl zwei."
      },
      {
        "prompt": "Welche Aussage nennt ein eigenes Problem und einen konkreten Wunsch?",
        "answers": [
          "Ich kann mich bei dem Lärm schwer konzentrieren. Bitte sprecht leiser.",
          "In diesem Raum ist es laut.",
          "Bitte gebt eure Blätter ab."
        ],
        "why": "Die Aussage verbindet die eigene Konzentrationsschwierigkeit mit dem Wunsch nach weniger Lärm."
      },
      {
        "prompt": "Welche Rückmeldung nennt einen überprüfbaren Fehler in einer Tabelle?",
        "answers": [
          "In der Tabelle fehlen zwei Einheiten.",
          "Die Tabelle sieht ungewohnt aus.",
          "Die Tabelle gefällt mir nicht."
        ],
        "why": "Die fehlenden Einheiten kann man in der Tabelle nachzählen."
      },
      {
        "prompt": "Ali sagt: „Wir messen zuerst und schneiden danach.“ Welche Antwort fasst seine Aussage zusammen?",
        "answers": [
          "Wir messen also vor dem Schneiden.",
          "Wir schneiden also vor dem Messen.",
          "Wir messen also erst nach dem Schneiden."
        ],
        "why": "Die Antwort erhält die Reihenfolge aus Alis Aussage."
      },
      {
        "prompt": "Du möchtest prüfen, ob die Kontrolle zuerst erfolgen soll. Welche Rückfrage passt?",
        "answers": [
          "Meinst du, dass wir zuerst die Maße kontrollieren sollen?",
          "Meinst du, dass wir zuerst die Werkzeuge einräumen sollen?",
          "Meinst du, dass wir zuerst das Material bestellen sollen?"
        ],
        "why": "Die Frage bezieht sich auf die Reihenfolge der Maßkontrolle."
      },
      {
        "prompt": "Welche Regel verlangt ausdrücklich, die sprechende Person nicht zu unterbrechen?",
        "answers": [
          "Wir lassen einander ausreden.",
          "Wir melden uns zu Wort.",
          "Wir sprechen in ganzen Sätzen."
        ],
        "why": "„Ausreden lassen“ bedeutet, bis zum Ende des Beitrags zu warten."
      },
      {
        "prompt": "Welche Rückmeldung fordert eine konkrete Ergänzung am Ergebnis?",
        "answers": [
          "Schreibe bitte noch die Einheit hinter das Ergebnis.",
          "Dein Ergebnis steht auf dem Blatt.",
          "Deine Rechnung hat drei Zeilen."
        ],
        "why": "Die Rückmeldung nennt genau, was ergänzt werden soll: die Einheit."
      },
      {
        "prompt": "Welche Aussage nennt eine Beobachtung und lässt die Ursache ausdrücklich offen?",
        "answers": [
          "Du warst heute zehn Minuten später da; den Grund kenne ich nicht.",
          "Du warst heute zehn Minuten später da, weil dein Bus ausfiel.",
          "Du warst heute zehn Minuten später da; vermutlich warst du müde."
        ],
        "why": "Nur diese Aussage erklärt ausdrücklich, dass die Ursache unbekannt ist."
      },
      {
        "prompt": "Welche Rückmeldung nennt eine Stärke und einen fehlenden Teil der Anleitung?",
        "answers": [
          "Deine Reihenfolge ist klar; beim letzten Schritt fehlt eine Erklärung.",
          "Deine Anleitung ist auf einer Seite geschrieben.",
          "Deine Anleitung liegt neben dem Werkstück."
        ],
        "why": "Die Rückmeldung nennt die klare Reihenfolge und die noch fehlende Erklärung."
      },
      {
        "prompt": "Die Kritik lautet: „Im Ergebnis fehlt cm².“ Welche Antwort kündigt die passende Korrektur an?",
        "answers": [
          "Ich ergänze cm² hinter dem Ergebnis.",
          "Ich ändere die Überschrift der Aufgabe.",
          "Ich zeichne die Tabelle neu."
        ],
        "why": "Die Kritik betrifft die Einheit. Diese wird direkt ergänzt."
      },
      {
        "prompt": "Welche Aussage nennt eine konkrete Handlung und den Zeitpunkt dafür?",
        "answers": [
          "Bitte lege benutzte Werkzeuge nach der Arbeit zurück.",
          "Bitte achte auf deinen Arbeitsplatz.",
          "Bitte arbeite in Zukunft sorgfältiger."
        ],
        "why": "„Werkzeuge zurücklegen“ ist die Handlung. „Nach der Arbeit“ nennt den Zeitpunkt."
      },
      {
        "prompt": "Welche Aussage bezieht sich auf zwei bestimmte Aufgaben und vermeidet „immer“ oder „nie“?",
        "answers": [
          "Bei den letzten zwei Aufgaben fehlte dein Rechenweg.",
          "Bei deinen Aufgaben fehlt immer der Rechenweg.",
          "Du schreibst nie einen Rechenweg auf."
        ],
        "why": "Die Aussage begrenzt die Beobachtung auf die letzten zwei Aufgaben."
      },
      {
        "prompt": "Jemand sagt: „Hier fehlt eine Erklärung.“ Welche Rückfrage klärt die gemeinte Stelle?",
        "answers": [
          "An welcher Stelle fehlt dir eine Erklärung?",
          "Welche Schriftfarbe soll ich benutzen?",
          "Wann hast du die Aufgabe bearbeitet?"
        ],
        "why": "Die Frage nach der Stelle klärt, welcher Teil erklärt werden soll."
      },
      {
        "prompt": "Mia begründet ihren Vorschlag mit einem kürzeren Weg. Welche Antwort fragt nach ihrem Grund?",
        "answers": [
          "Wie viele Meter sparen wir mit deinem Weg?",
          "Wann hast du heute Pause?",
          "Welche Farbe hat dein Rucksack?"
        ],
        "why": "Die Frage greift Mias Begründung mit der Weglänge auf."
      },
      {
        "prompt": "Welche Rückmeldung benennt eine Stärke der Skizze und erklärt ihren Nutzen?",
        "answers": [
          "Deine beschriftete Skizze macht die Maße gut erkennbar.",
          "Deine Skizze liegt auf dem Tisch.",
          "Deine Skizze ist mit Bleistift gezeichnet."
        ],
        "why": "Die Rückmeldung erklärt, warum die Beschriftung hilfreich ist."
      }
    ]
  },
  {
    "id": "de-email",
    "label": "E-Mails und Geschäftsbriefe",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.3",
    "rule": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger.",
    "rows": [
      {
        "prompt": "Du willst den Termin am 8. Mai verschieben. Welcher Betreff nennt dieses Anliegen?",
        "answers": [
          "Bitte um Verschiebung des Termins am 8. Mai",
          "Bestätigung des Termins am 8. Mai",
          "Anfahrt zum Termin am 8. Mai"
        ],
        "why": "Der Betreff „Bitte um Verschiebung des Termins am 8. Mai“ nennt die gewünschte Terminänderung."
      },
      {
        "prompt": "Du schreibst zum ersten Mal formell an Frau Weber. Welche Anrede passt?",
        "answers": [
          "Sehr geehrte Frau Weber,",
          "Liebe Mia,",
          "Hallo zusammen,"
        ],
        "why": "Die formelle Anrede nennt Frau Weber mit ihrem Nachnamen."
      },
      {
        "prompt": "Welche Formulierung ist eine Grußformel am Ende einer formellen E-Mail?",
        "answers": [
          "Mit freundlichen Grüßen",
          "Sehr geehrte Damen und Herren,",
          "Vielen Dank für Ihre Nachricht."
        ],
        "why": "„Mit freundlichen Grüßen“ steht als Grußformel am Schluss."
      },
      {
        "prompt": "Welcher Satz sagt ausdrücklich, dass du dich um einen Ausbildungsplatz bewirbst?",
        "answers": [
          "Hiermit bewerbe ich mich um den ausgeschriebenen Ausbildungsplatz.",
          "Hiermit bestätige ich unseren Gesprächstermin.",
          "Hiermit frage ich nach einer Lieferung."
        ],
        "why": "„Hiermit bewerbe ich mich um den ausgeschriebenen Ausbildungsplatz“ nennt ausdrücklich die Bewerbung."
      },
      {
        "prompt": "Du möchtest wissen, wann dein Praktikum beginnt. Welche Bitte passt?",
        "answers": [
          "Bitte teilen Sie mir den Beginn des Praktikums mit.",
          "Bitte teilen Sie mir den Preis des Werkzeugs mit.",
          "Bitte teilen Sie mir die Liefermenge mit."
        ],
        "why": "„Bitte teilen Sie mir den Beginn des Praktikums mit“ fragt nach dem gesuchten Zeitpunkt."
      },
      {
        "prompt": "Welche Nachricht meldet eine Abwesenheit wegen Krankheit und deren voraussichtliche Dauer?",
        "answers": [
          "Ich bin krank und kann voraussichtlich bis Donnerstag nicht kommen.",
          "Ich komme am Donnerstag zu unserem Gespräch.",
          "Ich möchte meinen Urlaub im April beantragen."
        ],
        "why": "Die Nachricht nennt Krankheit und die voraussichtliche Dauer der Abwesenheit."
      },
      {
        "prompt": "Welcher Satz sagt, dass der Lebenslauf der E-Mail beigefügt ist?",
        "answers": [
          "Im Anhang finden Sie meinen Lebenslauf.",
          "Meinen Lebenslauf bringe ich zum Gespräch mit.",
          "Meinen Lebenslauf schicke ich nächste Woche."
        ],
        "why": "„Im Anhang“ bezeichnet eine beigefügte Datei."
      },
      {
        "prompt": "Im Text steht „Die Zeichnung ist im Anhang“. Was musst du vor dem Versand dazu prüfen?",
        "answers": [
          "Ob die richtige Zeichnung als Datei angehängt ist.",
          "Ob die Zeichnung noch auf meinem Schreibtisch liegt.",
          "Ob die Zeichnung auf der Firmenwebsite steht."
        ],
        "why": "Die Zeichnung muss tatsächlich als richtige Datei angehängt sein."
      },
      {
        "prompt": "Eine Lieferung enthält acht statt zehn bestellte Teile. Welcher Satz beschreibt den Mangel genau?",
        "answers": [
          "Bei der Lieferung fehlen zwei bestellte Teile.",
          "Die Lieferung enthält zehn bestellte Teile.",
          "Die Lieferung enthält zwei Teile zu viel."
        ],
        "why": "Zehn minus acht sind zwei fehlende Teile."
      },
      {
        "prompt": "Der Betrieb soll per E-Mail antworten. Welche Kontaktangabe braucht er dafür?",
        "answers": [
          "Eine erreichbare E-Mail-Adresse.",
          "Eine Postanschrift.",
          "Eine Telefonnummer."
        ],
        "why": "Eine E-Mail-Antwort braucht eine erreichbare E-Mail-Adresse."
      },
      {
        "prompt": "Du möchtest wissen, ob deine Unterlagen angekommen sind. Welche Bitte passt?",
        "answers": [
          "Bitte bestätigen Sie kurz den Erhalt der Unterlagen.",
          "Bitte ändern Sie die Angaben in meinen Unterlagen.",
          "Bitte schicken Sie mir Ihre Unterlagen."
        ],
        "why": "Eine Bestätigung des Erhalts sagt, dass die Unterlagen angekommen sind."
      },
      {
        "prompt": "Welche Formulierung nennt Datum und Thema der Nachricht, auf die du antwortest?",
        "answers": [
          "Vielen Dank für Ihre Nachricht vom 6. Mai zur Praktikumsstelle.",
          "Vielen Dank für Ihre schnelle Nachricht.",
          "Vielen Dank für die Unterlagen im Anhang."
        ],
        "why": "Die Formulierung „Ihre Nachricht vom 6. Mai zur Praktikumsstelle“ nennt Datum und Thema."
      },
      {
        "prompt": "Welcher Satz entschuldigt ausdrücklich eine verspätete Antwort?",
        "answers": [
          "Bitte entschuldigen Sie meine verspätete Rückmeldung.",
          "Vielen Dank für Ihre freundliche Einladung.",
          "Ich bestätige den vereinbarten Termin."
        ],
        "why": "„Bitte entschuldigen Sie meine verspätete Rückmeldung“ entschuldigt ausdrücklich die späte Antwort."
      },
      {
        "prompt": "Du möchtest 20 Schutzbrillen kaufen. Welcher Betreff kündigt eine Bestellung an?",
        "answers": [
          "Bestellung von 20 Schutzbrillen",
          "Rückgabe von 20 Schutzbrillen",
          "Reparatur von 20 Schutzbrillen"
        ],
        "why": "Nur „Bestellung“ kündigt den gewünschten Kauf an."
      },
      {
        "prompt": "Die E-Mail soll an Frau Weber gehen. Was prüfst du im Empfängerfeld?",
        "answers": [
          "Ob dort Frau Webers richtige E-Mail-Adresse steht.",
          "Ob dort Frau Webers Postanschrift steht.",
          "Ob dort Frau Webers Telefonnummer steht."
        ],
        "why": "Das Empfängerfeld muss die richtige E-Mail-Adresse enthalten."
      }
    ]
  },
  {
    "id": "de-bewerbung",
    "label": "Bewerbung und Lebenslauf",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.2, 1.3 und 1.5",
    "rule": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben.",
    "rows": [
      {
        "prompt": "Welche Angabe nennt eine berufliche Erfahrung mit Zeitraum für den Lebenslauf?",
        "answers": [
          "Praktikum bei Metallbau Weber, 3. bis 14. März.",
          "Hobby: Radfahren.",
          "Fremdsprache: Englisch."
        ],
        "why": "Das Praktikum bei Metallbau Weber ist eine berufliche Erfahrung. „3. bis 14. März“ nennt ihren Zeitraum."
      },
      {
        "prompt": "Welche Aussage belegt Zusammenarbeit mit einem konkreten Beispiel?",
        "answers": [
          "Im Praktikum habe ich mit zwei Kollegen Materialbestellungen vorbereitet.",
          "Ich kann gut im Team arbeiten.",
          "Teamarbeit finde ich interessant."
        ],
        "why": "Das Vorbereiten von Materialbestellungen mit zwei Kollegen ist ein konkretes Beispiel für Zusammenarbeit."
      },
      {
        "prompt": "In der Anzeige steht: „Bewerbung als PDF per E-Mail“. Welcher Bewerbungsweg wird verlangt?",
        "answers": [
          "Eine PDF-Datei per E-Mail senden.",
          "Die Unterlagen nur telefonisch vorlesen.",
          "Eine Papiermappe persönlich abgeben."
        ],
        "why": "Die Anzeige nennt PDF und E-Mail ausdrücklich."
      },
      {
        "prompt": "Du heißt Mia Beispiel. Welche Musteradresse enthält Vor- und Nachnamen ohne Spitznamen?",
        "answers": [
          "mia.beispiel@example.org",
          "metallfan42@example.org",
          "sternchen77@example.org"
        ],
        "why": "In „mia.beispiel@example.org“ stehen der Vorname Mia und der Nachname Beispiel."
      },
      {
        "prompt": "Welche Aussage nennt eine konkrete Tätigkeit aus einem Praktikum?",
        "answers": [
          "In meinem Praktikum habe ich Werkstücke entgratet und Maße geprüft.",
          "Mein Praktikum war interessant.",
          "Ich freue mich auf die Ausbildung."
        ],
        "why": "„Entgraten“ und „Maße prüfen“ sind konkrete Tätigkeiten."
      },
      {
        "prompt": "Du hast noch keinen Beruf ausgeübt, aber ein Schulpraktikum gemacht. Welche Aussage bleibt bei diesen Angaben?",
        "answers": [
          "Ich habe im Schulpraktikum erste Erfahrungen gesammelt.",
          "Ich arbeite seit fünf Jahren als Fachkraft.",
          "Ich habe bereits eine Berufsausbildung abgeschlossen."
        ],
        "why": "Die Erfahrung im Schulpraktikum entspricht den Angaben. Eine frühere Berufstätigkeit wird nicht behauptet."
      },
      {
        "prompt": "Welche Angabe sagt genau, wann ein Praktikum stattfand?",
        "answers": [
          "Vom 3. bis zum 14. März.",
          "In einer Metallwerkstatt.",
          "Bei der Firma Weber."
        ],
        "why": "„Vom 3. bis zum 14. März“ nennt Anfang und Ende."
      },
      {
        "prompt": "Du möchtest wissen, wer die Auszubildenden anleitet. Welche Frage passt?",
        "answers": [
          "Wer betreut die Auszubildenden im Betrieb?",
          "Wann beginnt morgens die Arbeitszeit?",
          "Wo liegt der Eingang zum Betrieb?"
        ],
        "why": "Die Frage nach der Betreuung klärt, wer die Auszubildenden anleitet."
      },
      {
        "prompt": "Dein Gespräch beginnt um 9 Uhr in Raum 12. Welche Angabe hilft dir, die Anfahrt zu planen?",
        "answers": [
          "Die Adresse des Betriebs.",
          "Die Anzahl der Ausbildungsplätze.",
          "Die Dauer der Probezeit."
        ],
        "why": "Für die Anfahrt musst du wissen, wo der Betrieb liegt."
      },
      {
        "prompt": "Welche Aussage erklärt Interesse an einem Metallberuf durch passende Tätigkeiten?",
        "answers": [
          "Mir gefallen genaues Messen und das Bearbeiten von Werkstücken.",
          "Der Betrieb liegt in der Nähe meiner Wohnung.",
          "Die Arbeitskleidung ist blau."
        ],
        "why": "Messen und das Bearbeiten von Werkstücken gehören zum beruflichen Tätigkeitsfeld."
      },
      {
        "prompt": "Deine Telefonnummer hat sich geändert. Welche Angabe musst du in deiner Bewerbung aktualisieren?",
        "answers": [
          "Die Telefonnummer.",
          "Den Namen der Schule.",
          "Das Datum des letzten Praktikums."
        ],
        "why": "Nur die Telefonnummer hat sich laut Frage geändert."
      },
      {
        "prompt": "Welche Aussage belegt die Stärke „sorgfältig“ mit einer Handlung?",
        "answers": [
          "Im Praktikum prüfte ich jedes Maß vor dem Zuschnitt.",
          "Ich arbeite sorgfältig.",
          "Sorgfalt ist mir wichtig."
        ],
        "why": "Die Prüfung jedes Maßes ist eine konkrete Handlung, die Sorgfalt zeigt."
      },
      {
        "prompt": "Du warst von Juni bis August auf Ausbildungssuche. Welche Formulierung beschreibt diesen Zeitraum wahrheitsgemäß?",
        "answers": [
          "Juni bis August: Suche nach einem Ausbildungsplatz.",
          "Juni bis August: Ausbildung zur Fachkraft.",
          "Juni bis August: Beschäftigung im Metallbau."
        ],
        "why": "„Juni bis August: Suche nach einem Ausbildungsplatz“ beschreibt den Zeitraum und die genannte Tätigkeit."
      },
      {
        "prompt": "Die Anzeige verlangt Anschreiben, Lebenslauf und letztes Schulzeugnis. Welche Zusammenstellung ist vollständig?",
        "answers": [
          "Anschreiben, Lebenslauf und letztes Schulzeugnis.",
          "Anschreiben und Lebenslauf.",
          "Lebenslauf und letztes Schulzeugnis."
        ],
        "why": "Alle drei ausdrücklich verlangten Unterlagen müssen dabei sein."
      },
      {
        "prompt": "Die Stelle hat die Kennziffer M-24. Welcher Betreff ordnet die Bewerbung genau dieser Stelle zu?",
        "answers": [
          "Bewerbung um den Ausbildungsplatz, Kennziffer M-24",
          "Bewerbung um den Ausbildungsplatz, Kennziffer M-42",
          "Bewerbung um den Ausbildungsplatz, Kennziffer M-14"
        ],
        "why": "Die Kennziffer muss mit M-24 übereinstimmen."
      }
    ]
  },
  {
    "id": "de-vorgang",
    "label": "Vorgänge und Anleitungen beschreiben",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.3",
    "rule": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben.",
    "rows": [
      {
        "prompt": "Die Anleitung lautet: „Ermittle die Maße. Zeichne sie an. Schneide die Platte zu.“ Was kommt direkt vor dem Zuschneiden?",
        "answers": [
          "Die Maße anzeichnen.",
          "Die Maße ermitteln.",
          "Die Platte verpacken."
        ],
        "why": "In der Anleitung steht das Anzeichnen direkt vor dem Zuschneiden."
      },
      {
        "prompt": "Welcher Satz nennt Messgerät, Maß und Handlung genau?",
        "answers": [
          "Miss mit dem Lineal 8 cm ab und markiere die Stelle.",
          "Miss eine passende Strecke ab.",
          "Markiere danach eine Stelle."
        ],
        "why": "„Miss mit dem Lineal 8 cm ab und markiere die Stelle“ nennt Messgerät, Maß und Handlung."
      },
      {
        "prompt": "In einer Backanleitung fehlt, wie heiß und wie lange gebacken wird. Welche Angabe ergänzt beides?",
        "answers": [
          "Bei 180 °C etwa 20 Minuten backen.",
          "Den Teig in eine runde Form geben.",
          "Den Kuchen nach dem Backen abkühlen lassen."
        ],
        "why": "180 °C ist die Temperatur; 20 Minuten sind die Dauer."
      },
      {
        "prompt": "Welches Wort leitet in einer Anleitung einen folgenden Schritt ein?",
        "answers": [
          "Anschließend",
          "Zuvor",
          "Gleichzeitig"
        ],
        "why": "„Anschließend“ bedeutet „danach“."
      },
      {
        "prompt": "„Lege das Blech an. Spanne es fest. Bohre das Loch.“ Welcher Schritt setzt das Festspannen voraus?",
        "answers": [
          "Das Loch bohren.",
          "Das Blech anlegen.",
          "Die Maße aufschreiben."
        ],
        "why": "Laut Anleitung wird erst nach dem Festspannen gebohrt."
      },
      {
        "prompt": "Welcher Satz nennt beide Gegenstände und ihre Lage eindeutig?",
        "answers": [
          "Lege das Lineal neben das Heft.",
          "Lege es daneben.",
          "Lege das Lineal dorthin."
        ],
        "why": "„Lege das Lineal neben das Heft“ nennt beide Gegenstände und ihre Lage zueinander."
      },
      {
        "prompt": "„Erhitze das Wasser.“ Welche Ergänzung nennt Menge und Zieltemperatur?",
        "answers": [
          "Erhitze 500 ml Wasser auf 60 °C.",
          "Erhitze das Wasser in einem Topf.",
          "Erhitze das Wasser anschließend."
        ],
        "why": "500 ml nennt die Menge; 60 °C nennt die Zieltemperatur."
      },
      {
        "prompt": "Welcher Abschnitt nennt das Material für das Herstellen eines Papiersterns?",
        "answers": [
          "Du brauchst Papier, Bleistift und Schere.",
          "Falte das Papier zur Hälfte.",
          "Am Ende ist der Stern fertig."
        ],
        "why": "„Papier, Bleistift und Schere“ sind die benötigten Gegenstände."
      },
      {
        "prompt": "Welcher Satz sagt genau, wie zwei Bleche verbunden werden sollen?",
        "answers": [
          "Verschraube die beiden Bleche.",
          "Verbinde die beiden Bleche.",
          "Bearbeite die beiden Bleche."
        ],
        "why": "„Verschrauben“ nennt Schrauben als genaue Art der Verbindung."
      },
      {
        "prompt": "Welche Antwort nennt zuerst einen Gegenstand und dann eine Tätigkeit?",
        "answers": [
          "Bleistift – Markieren",
          "Markieren – Bleistift",
          "Markieren – Schneiden"
        ],
        "why": "Ein Bleistift ist ein Gegenstand; Markieren ist eine Tätigkeit."
      },
      {
        "prompt": "Du willst ein gelochtes Blatt in einen Ringordner heften. Die Ringe sind noch geschlossen. Was musst du zuerst tun?",
        "answers": [
          "Die Ringe öffnen.",
          "Das Blatt auf die offenen Ringe legen.",
          "Die Ringe wieder schließen."
        ],
        "why": "Damit das Blatt eingelegt werden kann, müssen zuerst die Ringe geöffnet werden."
      },
      {
        "prompt": "In einer Anleitung steht: „Dann machst du es fest.“ Welche Fassung nennt Gegenstand und Handlung genauer?",
        "answers": [
          "Dann schraubst du den Deckel auf die Dose.",
          "Dann befestigst du es.",
          "Dann machst du das richtig fest."
        ],
        "why": "Die Fassung nennt den Deckel, die Dose und die Tätigkeit Schrauben."
      },
      {
        "prompt": "Du sollst prüfen, ob eine Markierung bei 8 cm liegt. Welche Anweisung beschreibt diese Kontrolle?",
        "answers": [
          "Lege das Lineal an und lies den Abstand zur Markierung ab.",
          "Schreibe die Zahl 8 auf das Blatt.",
          "Zeichne eine zweite Markierung daneben."
        ],
        "why": "Durch Anlegen und Ablesen lässt sich die Lage der Markierung prüfen."
      },
      {
        "prompt": "Eine Anleitung für Anfänger verwendet „entgraten“. Welche Ergänzung erklärt die Tätigkeit?",
        "answers": [
          "Entferne die scharfen Kanten am Werkstück.",
          "Arbeite anschließend weiter.",
          "Benutze danach ein anderes Werkstück."
        ],
        "why": "„Entgraten“ bedeutet, störende scharfe Kanten oder Grate zu entfernen."
      },
      {
        "prompt": "„Schraube die Teile zusammen. Prüfe die Verbindung. Räume danach auf.“ Was ist der letzte Schritt?",
        "answers": [
          "Den Arbeitsplatz aufräumen.",
          "Die Verbindung prüfen.",
          "Die Teile zusammenschrauben."
        ],
        "why": "„Danach“ ordnet das Aufräumen hinter der Kontrolle ein."
      }
    ]
  },
  {
    "id": "de-bericht",
    "label": "Sachlich berichten und dokumentieren",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.3 und 1.5",
    "rule": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt.",
    "rows": [
      {
        "prompt": "Welche Aussage nennt eine beobachtete Handlung und eine genaue Uhrzeit?",
        "answers": [
          "Um 10:15 Uhr fiel die Kiste vom Tisch.",
          "Die Kiste war ziemlich schwer.",
          "Später räumten wir auf."
        ],
        "why": "„Um 10:15 Uhr fiel die Kiste vom Tisch“ nennt eine beobachtete Handlung und die genaue Uhrzeit."
      },
      {
        "prompt": "Welche W-Frage wird mit „in der Werkstatt“ beantwortet?",
        "answers": [
          "Wo?",
          "Wann?",
          "Wer?"
        ],
        "why": "„In der Werkstatt“ nennt einen Ort."
      },
      {
        "prompt": "Welche W-Frage wird mit „am Dienstag um 9 Uhr“ beantwortet?",
        "answers": [
          "Wann?",
          "Warum?",
          "Wer?"
        ],
        "why": "Die Angabe nennt Tag und Uhrzeit."
      },
      {
        "prompt": "Welche Angabe beantwortet „Wer war beteiligt?“?",
        "answers": [
          "Mia und der Ausbilder.",
          "Am Dienstag um 9 Uhr.",
          "In der Werkstatt."
        ],
        "why": "Die Antwort nennt die beteiligten Personen."
      },
      {
        "prompt": "Welche Aussage beschreibt eine Beobachtung und kennzeichnet die Ursache als unbekannt?",
        "answers": [
          "Ich sah Wasser auf dem Boden; woher es kam, weiß ich nicht.",
          "Ich sah, wie Wasser aus dem Schlauch lief.",
          "Ich vermute, dass der Schlauch undicht war."
        ],
        "why": "„Ich sah Wasser auf dem Boden“ ist eine Beobachtung. „Woher es kam, weiß ich nicht“ kennzeichnet die Ursache als unbekannt."
      },
      {
        "prompt": "Welcher Satz beschreibt einen sichtbaren Schaden an einem Gehäuse?",
        "answers": [
          "Das Gehäuse hat einen 3 cm langen Riss.",
          "Das Gehäuse ist 30 cm breit.",
          "Das Gehäuse wurde gestern geliefert."
        ],
        "why": "Ein Riss ist ein Schaden. Breite und Lieferdatum beschreiben keinen Schaden."
      },
      {
        "prompt": "Welche Formulierung enthält eine messbare Angabe statt einer Bewertung?",
        "answers": [
          "Der Riss ist etwa 3 cm lang.",
          "Der Riss sieht schlimm aus.",
          "Der Riss ist ärgerlich."
        ],
        "why": "Die Länge von etwa 3 cm kann gemessen werden."
      },
      {
        "prompt": "Welche Zeitform hat der Berichtssatz „Die Kiste fiel vom Tisch“?",
        "answers": [
          "Präteritum",
          "Perfekt",
          "Präsens"
        ],
        "why": "„Fiel“ ist die Präteritumform von „fallen“."
      },
      {
        "prompt": "„Zuerst wurde gemessen. Danach wurde gesägt.“ Welche Reihenfolge gibt der Bericht vor?",
        "answers": [
          "Messen, dann sägen.",
          "Sägen, dann messen.",
          "Messen und Sägen gleichzeitig."
        ],
        "why": "„Zuerst“ und „danach“ legen die Reihenfolge fest."
      },
      {
        "prompt": "Die Ursache eines Schadens ist nicht bekannt. Welche Formulierung gibt das genau wieder?",
        "answers": [
          "Die Ursache des Schadens ist ungeklärt.",
          "Der Schaden entstand durch einen Sturz.",
          "Der Schaden entstand beim Transport."
        ],
        "why": "„Die Ursache des Schadens ist ungeklärt“ lässt die unbekannte Ursache offen."
      },
      {
        "prompt": "Welche Aussage nennt Tag, Stückzahl und Messgerät?",
        "answers": [
          "Am Mittwoch prüfte ich zehn Werkstücke mit einer Schieblehre.",
          "Ich prüfte mehrere Werkstücke.",
          "Die Werkstücke wurden sorgfältig geprüft."
        ],
        "why": "Die Aussage enthält Mittwoch, zehn und Schieblehre."
      },
      {
        "prompt": "Welche Aussage beantwortet „Was geschah?“ durch ein Ereignis?",
        "answers": [
          "Ein Karton fiel vom Regal.",
          "Der Karton war braun.",
          "Das Regal stand an der Wand."
        ],
        "why": "Das Fallen des Kartons ist ein Ereignis."
      },
      {
        "prompt": "Welche Formulierung kennzeichnet eine Mengenangabe ausdrücklich als Schätzung?",
        "answers": [
          "Es waren ungefähr 20 Teile.",
          "Es waren genau 20 Teile.",
          "Es waren 20 gezählte Teile."
        ],
        "why": "„Ungefähr“ kennzeichnet die Zahl als Schätzung."
      },
      {
        "prompt": "Welche Formulierung gibt wieder, was eine andere Person berichtet hat?",
        "answers": [
          "Die Kollegin berichtete, sie habe ein Geräusch gehört.",
          "Ich hörte ein Geräusch.",
          "Vielleicht gab es ein Geräusch."
        ],
        "why": "„Die Kollegin berichtete“ kennzeichnet die Kollegin als Quelle der Information."
      },
      {
        "prompt": "Im Bericht stehen für dasselbe Ereignis „Montag, 12. Mai“ und „Dienstag, 12. Mai“. Welche Angabe widerspricht sich?",
        "answers": [
          "Der Wochentag zum genannten Datum.",
          "Die Anfangszeit des Ereignisses.",
          "Die Zahl der beteiligten Personen."
        ],
        "why": "Derselbe Tag kann hier nicht zugleich Montag und Dienstag sein."
      }
    ]
  },
  {
    "id": "de-argumentieren",
    "label": "Behauptung, Begründung und Beispiel",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.3",
    "rule": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen.",
    "rows": [
      {
        "prompt": "Welcher Satz begründet, warum regelmäßiges Üben helfen kann?",
        "answers": [
          "Regelmäßiges Üben hilft, weil sich Rechenwege festigen.",
          "Regelmäßiges Üben hilft.",
          "Regelmäßiges Üben ist regelmäßig."
        ],
        "why": "Der Nebensatz mit „weil“ nennt einen Grund."
      },
      {
        "prompt": "Was enthält „Wir sollten Schutzbrillen tragen“?",
        "answers": [
          "Eine Forderung.",
          "Eine Begründung.",
          "Ein konkretes Beispiel."
        ],
        "why": "Der Satz fordert eine Handlung, nennt aber noch keinen Grund."
      },
      {
        "prompt": "Die Übungszeit endet um 10 Uhr. Welche Begründung spricht für einen Beginn um 9 Uhr statt um 9:15 Uhr?",
        "answers": [
          "Dann bleiben 15 Minuten mehr zum Üben.",
          "Dann bleibt weniger Zeit zum Üben.",
          "Dann sind beide Übungszeiten gleich lang."
        ],
        "why": "Von 9 Uhr bis 10 Uhr sind es 60 Minuten. Ab 9:15 Uhr bleiben nur 45 Minuten."
      },
      {
        "prompt": "Welches Beispiel zeigt, dass Notizen beim Erinnern helfen?",
        "answers": [
          "Ich lese die notierte Uhrzeit nach und komme rechtzeitig zum Termin.",
          "Ich schreibe den Termin auf ein Blatt und verliere das Blatt.",
          "Ich erinnere mich ohne Notiz an den Termin."
        ],
        "why": "Das Nachlesen der notierten Uhrzeit hilft dabei, sich an den Termin zu erinnern."
      },
      {
        "prompt": "Welche Aussage nennt einen Nachteil einer längeren Pause?",
        "answers": [
          "Eine längere Pause verkürzt die verfügbare Übungszeit.",
          "Eine längere Pause ermöglicht mehr Erholung.",
          "Eine längere Pause gibt mehr Zeit zum Essen."
        ],
        "why": "Die verkürzte Übungszeit ist der genannte Nachteil."
      },
      {
        "prompt": "Welche Formulierung kennzeichnet eine persönliche Meinung?",
        "answers": [
          "Ich finde, dass die Erklärung verständlich war.",
          "Die Erklärung dauert vier Minuten.",
          "Die Erklärung steht auf Seite 2."
        ],
        "why": "„Ich finde“ kennzeichnet eine persönliche Bewertung."
      },
      {
        "prompt": "Welche Begründung erklärt den Nutzen von Maßangaben in einer Skizze?",
        "answers": [
          "Die Längen lassen sich den richtigen Seiten zuordnen.",
          "Die Skizze ist auf weißem Papier gezeichnet.",
          "Die Skizze wurde am Morgen angefertigt."
        ],
        "why": "Maßangaben zeigen, welche Länge zu welcher Seite gehört."
      },
      {
        "prompt": "Welche Antwort wiederholt nur die Behauptung, statt sie zu begründen?",
        "answers": [
          "Das ist richtig, weil es richtig ist.",
          "Das Teil passt, weil beide Maße übereinstimmen.",
          "Wir sparen Zeit, weil der Weg kürzer ist."
        ],
        "why": "„Weil es richtig ist“ wiederholt die Behauptung und nennt keinen zusätzlichen Grund."
      },
      {
        "prompt": "Welches Beispiel zeigt eine Kontrolle durch Zusammenarbeit?",
        "answers": [
          "Eine Person misst, die andere prüft die notierten Werte.",
          "Eine Person misst und kontrolliert allein.",
          "Zwei Personen messen unabhängig verschiedene Räume."
        ],
        "why": "Eine Person misst. Eine andere Person prüft die notierten Werte. So wird die Kontrolle durch Zusammenarbeit gezeigt."
      },
      {
        "prompt": "Welche Aussage vergleicht zwei Rechenwege anhand der Anzahl der Schritte?",
        "answers": [
          "Dieser Weg braucht zwei Rechenschritte weniger.",
          "Dieser Weg gefällt mir besser.",
          "Diesen Weg kenne ich schon länger."
        ],
        "why": "„Zwei Rechenschritte weniger“ vergleicht die Rechenwege anhand der Anzahl ihrer Schritte."
      },
      {
        "prompt": "Jemand sagt: „Dieser Weg ist zu lang.“ Welche Frage verlangt eine sachliche Begründung?",
        "answers": [
          "Wie viele Meter ist dieser Weg länger?",
          "Wer hat den Weg zuerst vorgeschlagen?",
          "Welche Farbe hat der Wegweiser?"
        ],
        "why": "Die Frage nach den Metern prüft das Argument zur Weglänge."
      },
      {
        "prompt": "Welche Begründung spricht dafür, eine Quelle mit überprüfbaren Belegen zu nutzen?",
        "answers": [
          "Ihre Angaben können anhand der Belege geprüft werden.",
          "Ihre Aussagen werden besonders häufig geteilt.",
          "Ihre Aussagen stimmen mit meiner Vermutung überein."
        ],
        "why": "Überprüfbare Belege erlauben die Kontrolle der Angaben."
      },
      {
        "prompt": "Welcher Satz nennt eine Handlung und begründet sie mit einem Ziel?",
        "answers": [
          "Wir heften die Blätter ab, damit wir sie später wiederfinden.",
          "Wir heften die Blätter ab.",
          "Die Blätter liegen auf dem Tisch."
        ],
        "why": "„Damit“ nennt das Ziel des Abheftens."
      },
      {
        "prompt": "Welche Aussage nennt eine mögliche Folge fehlender Beschriftung?",
        "answers": [
          "Ohne Beschriftung können Maße verwechselt werden.",
          "Beschriftungen bestehen aus Buchstaben und Zahlen.",
          "Die Beschriftung steht neben der Zeichnung."
        ],
        "why": "Das Verwechseln der Maße ist eine mögliche Folge."
      },
      {
        "prompt": "„Weg A ist 20 m kürzer als Weg B. Wir möchten den kürzeren Weg nehmen.“ Welche Schlussfolgerung passt?",
        "answers": [
          "Wir nehmen Weg A.",
          "Wir nehmen Weg B.",
          "Beide Wege sind gleich lang."
        ],
        "why": "Aus dem genannten Ziel und der kürzeren Länge folgt die Wahl von Weg A."
      }
    ]
  },
  {
    "id": "de-sachtexte",
    "label": "Sachtexte und Arbeitsaufträge verstehen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.3 und 1.5",
    "rule": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen.",
    "rows": [
      {
        "prompt": "Im Aushang steht: „Die Werkstatt öffnet um 8 Uhr.“ Wann öffnet sie?",
        "answers": [
          "Um 8 Uhr.",
          "Um 7 Uhr.",
          "Um 9 Uhr."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Bring am Freitag dein Heft mit.“ Was soll mitgebracht werden?",
        "answers": [
          "Das Heft.",
          "Den Ordner.",
          "Den Stift."
        ],
        "why": "Der Arbeitsauftrag nennt ausdrücklich das Heft."
      },
      {
        "prompt": "„Der Kurs findet in Raum 12 statt.“ Welche Information ist gegeben?",
        "answers": [
          "Der Raum.",
          "Der Preis.",
          "Die Dauer."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Die Lieferung enthält zehn Bleche.“ Wie viele Bleche werden genannt?",
        "answers": [
          "Zehn.",
          "Zwölf.",
          "Fünf."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Melde Schäden vor dem Arbeitsbeginn.“ Wann soll die Meldung erfolgen?",
        "answers": [
          "Vor dem Arbeitsbeginn.",
          "Während der Arbeit.",
          "Nach der Arbeit."
        ],
        "why": "Der Satz nennt „vor dem Arbeitsbeginn“."
      },
      {
        "prompt": "„Bei Fragen wenden Sie sich an Frau Weber.“ Wer ist die Kontaktperson?",
        "answers": [
          "Frau Weber.",
          "Herr Weber.",
          "Frau Müller."
        ],
        "why": "Im Satz wird Frau Weber als Kontaktperson genannt."
      },
      {
        "prompt": "„Die Anmeldung endet am 15. Mai.“ Welche Aussage ist durch den Text belegt?",
        "answers": [
          "Der 15. Mai ist die genannte Anmeldefrist.",
          "Der Kurs beginnt am 15. Mai.",
          "Die Teilnahme kostet 15 Euro."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Für den Aufbau werden zwei Personen benötigt.“ Was wird verlangt?",
        "answers": [
          "Zwei Personen für den Aufbau.",
          "Eine Person für den Aufbau.",
          "Drei Personen für den Aufbau."
        ],
        "why": "Der Text nennt genau zwei Personen."
      },
      {
        "prompt": "„Der Termin wurde von Montag auf Mittwoch verschoben.“ Wann ist der neue Termin?",
        "answers": [
          "Am Mittwoch.",
          "Am Montag.",
          "Am Freitag."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Prüfe zuerst die Maße und notiere danach das Ergebnis.“ Was kommt zuerst?",
        "answers": [
          "Die Maße prüfen.",
          "Das Ergebnis notieren.",
          "Beides gleichzeitig tun."
        ],
        "why": "„Zuerst“ bezieht sich auf die Prüfung der Maße."
      },
      {
        "prompt": "„Die Halle bleibt wegen Wartung geschlossen.“ Was ist der genannte Grund?",
        "answers": [
          "Wartung.",
          "Materialmangel.",
          "Umbau."
        ],
        "why": "Im Text steht ausdrücklich „wegen Wartung“."
      },
      {
        "prompt": "„Bitte antworten Sie schriftlich.“ Welche Antwortform wird verlangt?",
        "answers": [
          "Eine schriftliche Antwort.",
          "Eine telefonische Antwort.",
          "Eine mündliche Antwort vor Ort."
        ],
        "why": "„Schriftlich“ verlangt eine Antwort in geschriebener Form."
      },
      {
        "prompt": "„Ein gültiger Ausweis ist mitzubringen.“ Was ist ausdrücklich gefordert?",
        "answers": [
          "Ein gültiger Ausweis.",
          "Ein Passfoto.",
          "Eine Fahrkarte."
        ],
        "why": "Ausdrücklich verlangt wird ein gültiger Ausweis."
      },
      {
        "prompt": "„Das Training dauert 90 Minuten.“ Welche Information fehlt im Satz?",
        "answers": [
          "Die Startzeit.",
          "Die Dauer.",
          "Die Einheit der Dauer."
        ],
        "why": "90 Minuten nennt die Dauer und ihre Einheit, aber keine Startzeit."
      },
      {
        "prompt": "„Die Firma sucht zwei Auszubildende.“ Was lässt sich sicher sagen?",
        "answers": [
          "Es werden zwei Auszubildende gesucht.",
          "Es werden zwei Fachkräfte gesucht.",
          "Es wird eine auszubildende Person gesucht."
        ],
        "why": "Der Text nennt zwei gesuchte Auszubildende."
      }
    ]
  },
  {
    "id": "de-medien",
    "label": "Medien und Quellen prüfen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 1.5 und BPE 2 Medien",
    "rule": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit.",
    "rows": [
      {
        "prompt": "Eine Meldung nennt keine Quelle. Welche Handlung prüft ihre Aussage?",
        "answers": [
          "Die Aussage mit einer nachvollziehbaren Originalquelle vergleichen.",
          "Die Meldung häufiger teilen.",
          "Die Meldung mit einem neuen Titel versehen."
        ],
        "why": "Der Vergleich mit einer Originalquelle prüft die Aussage."
      },
      {
        "prompt": "Welche Angabe zeigt, wann ein Text zuletzt geändert wurde?",
        "answers": [
          "Das Aktualisierungsdatum.",
          "Der Name des Verfassers.",
          "Die Internetadresse."
        ],
        "why": "Das Aktualisierungsdatum nennt den Zeitpunkt der letzten Überarbeitung."
      },
      {
        "prompt": "Was ist mit dem Urheber eines Textes gemeint?",
        "answers": [
          "Die Person, die den Text geschaffen hat.",
          "Die Person, die den Text zuletzt gelesen hat.",
          "Die Person, die den Text ausgedruckt hat."
        ],
        "why": "Der Urheber hat den Text geschaffen. Veröffentlichen allein macht eine Person nicht zum Urheber."
      },
      {
        "prompt": "Welcher Satz wirbt ausdrücklich für einen Kauf?",
        "answers": [
          "Kaufen Sie jetzt unsere Schutzbrille für 8 Euro!",
          "Die Schutzbrille wiegt 80 Gramm.",
          "Die Schutzbrille ist im Lager angekommen."
        ],
        "why": "Die Aufforderung „Kaufen Sie“ zeigt die Kaufwerbung."
      },
      {
        "prompt": "Welche Angabe erlaubt die Überprüfung der Behauptung „Das Blech ist 2 mm dick“?",
        "answers": [
          "Ein Messprotokoll mit Messgerät und Messwert.",
          "Ein Werbesatz ohne Messwert.",
          "Die Zahl positiver Kommentare."
        ],
        "why": "Ein Messprotokoll macht die Grundlage des Werts nachvollziehbar."
      },
      {
        "prompt": "Ein Bild von 2020 wird als Foto des heutigen Hochwassers gezeigt. Welche Angabe widerspricht dieser Verwendung?",
        "answers": [
          "Das Bild wurde schon 2020 aufgenommen.",
          "Das Bild hat eine hohe Auflösung.",
          "Das Bild zeigt einen Fluss."
        ],
        "why": "Ein Bild von 2020 kann kein Foto des heutigen Ereignisses sein."
      },
      {
        "prompt": "Welche Angabe sagt, wer eine Website veröffentlicht?",
        "answers": [
          "Der Name der verantwortlichen Stelle.",
          "Das Datum der Veröffentlichung.",
          "Die Adresse des Veranstaltungsorts."
        ],
        "why": "Die verantwortliche Stelle benennt den Herausgeber der Website."
      },
      {
        "prompt": "Ein Zitat soll aus einem bestimmten Interview stammen. Was prüft die Zuordnung?",
        "answers": [
          "Die Stelle im ursprünglichen Interview nachlesen.",
          "Die Überschrift einer Zusammenfassung ansehen.",
          "Die Anzahl der Weiterleitungen zählen."
        ],
        "why": "Im ursprünglichen Interview lässt sich prüfen, ob das Zitat dort steht."
      },
      {
        "prompt": "Welche Aussage ist eine persönliche Bewertung?",
        "answers": [
          "Ich finde den Film spannend.",
          "Der Film dauert 90 Minuten.",
          "Der Film beginnt um 18 Uhr."
        ],
        "why": "„Ich finde“ kennzeichnet die persönliche Bewertung."
      },
      {
        "prompt": "Die Bewerbungsfrist einer Anzeige endete gestern. Welche Angabe ist bereits abgelaufen?",
        "answers": [
          "Die Bewerbungsfrist.",
          "Die Dauer der Ausbildung.",
          "Die tägliche Arbeitszeit."
        ],
        "why": "Laut Frage ist die Frist zum Bewerben bereits vorbei."
      },
      {
        "prompt": "Zwei Meldungen nennen unterschiedliche Anfangszeiten desselben Termins. Welche Quelle klärt die aktuelle Zeit am direktesten?",
        "answers": [
          "Die aktuelle Mitteilung des Veranstalters.",
          "Ein älterer Beitrag ohne Quellenangabe.",
          "Ein Kommentar, der nur eine Uhrzeit vermutet."
        ],
        "why": "Der Veranstalter legt den Termin fest und kann seine aktuelle Anfangszeit nennen."
      },
      {
        "prompt": "In einer Bildunterschrift steht „Foto: Mia Beispiel“. Welche Information enthält diese Angabe?",
        "answers": [
          "Wer das Foto aufgenommen hat.",
          "Wann das Foto aufgenommen wurde.",
          "Wo das Foto aufgenommen wurde."
        ],
        "why": "Der Name nach „Foto“ nennt hier die Fotografin."
      },
      {
        "prompt": "Eine Meldung behauptet „Alle Fachleute stimmen zu“, nennt aber niemanden. Welche Angabe fehlt zur Prüfung dieser Behauptung?",
        "answers": [
          "Namen und Aussagen der gemeinten Fachleute.",
          "Das Veröffentlichungsdatum der Meldung.",
          "Die Bezeichnung des Nachrichtenportals."
        ],
        "why": "Mit Namen und Aussagen lässt sich prüfen, wer tatsächlich zugestimmt hat."
      },
      {
        "prompt": "Du suchst eine Erklärung zum Flächeninhalt eines Dreiecks. Welche Suchanfrage nennt Figur und gesuchte Größe?",
        "answers": [
          "Dreieck Flächeninhalt berechnen",
          "Dreieck Umfang berechnen",
          "Rechteck Flächeninhalt berechnen"
        ],
        "why": "Die Suchanfrage „Dreieck Flächeninhalt berechnen“ nennt die Figur und die gesuchte Größe."
      },
      {
        "prompt": "Welche Quellenangabe nennt einen genauen Fundort im Text?",
        "answers": [
          "Schulheft „Metalltechnik“, Seite 12.",
          "Ein Text über Metalltechnik.",
          "Irgendwo im Schulheft."
        ],
        "why": "Titel und Seitenzahl erlauben es, die Stelle wiederzufinden."
      }
    ]
  },
  {
    "id": "de-erzaehltexte",
    "label": "Erzähltexte verstehen",
    "subject": "german",
    "format": "choice",
    "curriculum": "Deutsch BPE 2 Literatur und Medien",
    "rule": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden.",
    "rows": [
      {
        "prompt": "„Ich öffnete langsam die Tür.“ Welche Erzählperspektive ist hier erkennbar?",
        "answers": [
          "Ich-Erzählung.",
          "Er-Erzählung.",
          "Du-Erzählung."
        ],
        "why": "Das erzählende Ich berichtet von seiner eigenen Handlung."
      },
      {
        "prompt": "„Mia legte das Heft auf den Tisch. Dann ging sie hinaus.“ Was geschah zuerst?",
        "answers": [
          "Mia legte das Heft ab.",
          "Mia ging hinaus.",
          "Beides geschah gleichzeitig."
        ],
        "why": "„Dann“ ordnet das Hinausgehen nach dem Ablegen ein."
      },
      {
        "prompt": "„Ben zitterte vor Angst.“ Welches Gefühl nennt der Text ausdrücklich?",
        "answers": [
          "Angst.",
          "Freude.",
          "Langeweile."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Komm bitte zurück!“, rief Ali. Was liegt zwischen den Anführungszeichen vor?",
        "answers": [
          "Wörtliche Rede.",
          "Indirekte Rede.",
          "Eine Beschreibung des Erzählers."
        ],
        "why": "Die Figur spricht direkt. Die Worte stehen in Anführungszeichen."
      },
      {
        "prompt": "„Die Sonne lachte vom Himmel.“ Welches sprachliche Mittel liegt vor?",
        "answers": [
          "Personifikation.",
          "Vergleich mit „wie“.",
          "Wörtliche Rede."
        ],
        "why": "Die Sonne erhält die menschliche Handlung „lachen“."
      },
      {
        "prompt": "„Er rannte so schnell wie der Wind.“ Welches sprachliche Mittel ist erkennbar?",
        "answers": [
          "Vergleich.",
          "Wörtliche Rede.",
          "Aufzählung."
        ],
        "why": "Das Wort „wie“ vergleicht die Geschwindigkeit mit dem Wind."
      },
      {
        "prompt": "„Niemand wusste, was hinter der Tür wartete.“ Welche Information bleibt offen?",
        "answers": [
          "Was hinter der Tür wartet.",
          "Ob jemand das Geheimnis schon kennt.",
          "Ob im Text eine Tür genannt wird."
        ],
        "why": "Der Satz lässt offen, was hinter der Tür wartet."
      },
      {
        "prompt": "„Sie hatte stundenlang geübt. Jetzt gelang ihr das Stück.“ Wodurch ist der Erfolg im Text vorbereitet?",
        "answers": [
          "Durch das vorherige Üben.",
          "Durch einen Gewinn.",
          "Durch einen neuen Lehrer."
        ],
        "why": "Der Text nennt stundenlanges Üben vor dem Erfolg."
      },
      {
        "prompt": "„Jonas dachte: Hoffentlich klappt es.“ Wessen Gedanken werden genannt?",
        "answers": [
          "Jonas’ Gedanken.",
          "Mias Gedanken.",
          "Die Gedanken aller Figuren."
        ],
        "why": "Der Satz nennt Jonas als denkende Figur."
      },
      {
        "prompt": "„Als sie ankam, war der Zug bereits abgefahren.“ Welche Reihenfolge ist belegt?",
        "answers": [
          "Erst fuhr der Zug ab, dann kam sie an.",
          "Erst kam sie an, dann fuhr der Zug ab.",
          "Beide Ereignisse fanden sicher gleichzeitig statt."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Er lächelte, obwohl er enttäuscht war.“ Was unterscheidet der Text?",
        "answers": [
          "Äußeres Verhalten und inneres Gefühl.",
          "Die Gefühle von zwei Personen.",
          "Ereignisse an zwei Orten."
        ],
        "why": "Lächeln ist ein sichtbares Verhalten; Enttäuschung ist das innere Gefühl."
      },
      {
        "prompt": "„Plötzlich fiel das Licht aus.“ Welches Wort kennzeichnet den unerwarteten Wechsel?",
        "answers": [
          "Plötzlich.",
          "Licht.",
          "Fiel."
        ],
        "why": "„Plötzlich“ kennzeichnet den unvermittelten Beginn des Ereignisses."
      },
      {
        "prompt": "„Lena gab das gefundene Portemonnaie zurück.“ Welche Handlung ist belegt?",
        "answers": [
          "Sie brachte eine gefundene Sache zurück.",
          "Sie behielt die gefundene Sache.",
          "Sie kaufte ein neues Portemonnaie."
        ],
        "why": "„Gab zurück“ belegt das Zurückbringen."
      },
      {
        "prompt": "„Drei Jahre zuvor hatte er hier gearbeitet.“ Was geschieht mit der erzählten Zeit?",
        "answers": [
          "Es wird auf Vergangenes zurückgeblickt.",
          "Es wird eine Zukunft angekündigt.",
          "Es wird dieselbe Gegenwart fortgesetzt."
        ],
        "why": "„Drei Jahre zuvor“ leitet einen Rückblick ein."
      },
      {
        "prompt": "„Die Tür stand offen. Von Mia fehlte jede Spur.“ Was bleibt nach diesem Ausschnitt offen?",
        "answers": [
          "Wo Mia ist.",
          "Ob die Tür offen steht.",
          "Welche Figur vermisst wird."
        ],
        "why": "Mias Aufenthaltsort wird nicht genannt. Die offene Tür und Mias Name stehen im Text."
      }
    ]
  },
  {
    "id": "en-family",
    "label": "Familie und Beziehungen",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „mother“ auf Deutsch?",
        "answers": [
          "Mutter",
          "Tochter",
          "Tante"
        ],
        "why": "„mother“ bedeutet „Mutter“."
      },
      {
        "prompt": "Was bedeutet „father“ auf Deutsch?",
        "answers": [
          "Vater",
          "Sohn",
          "Onkel"
        ],
        "why": "„father“ bedeutet „Vater“."
      },
      {
        "prompt": "Was bedeutet „sister“ auf Deutsch?",
        "answers": [
          "Schwester",
          "Tochter",
          "Mutter"
        ],
        "why": "„sister“ bedeutet „Schwester“."
      },
      {
        "prompt": "Was bedeutet „brother“ auf Deutsch?",
        "answers": [
          "Bruder",
          "Sohn",
          "Vater"
        ],
        "why": "„brother“ bedeutet „Bruder“."
      },
      {
        "prompt": "Was bedeutet „parents“ auf Deutsch?",
        "answers": [
          "Eltern",
          "Großeltern",
          "Geschwister"
        ],
        "why": "„parents“ bedeutet „Eltern“."
      },
      {
        "prompt": "Was bedeutet „daughter“ auf Deutsch?",
        "answers": [
          "Tochter",
          "Schwester",
          "Mutter"
        ],
        "why": "„daughter“ bedeutet „Tochter“."
      },
      {
        "prompt": "Was bedeutet „son“ auf Deutsch?",
        "answers": [
          "Sohn",
          "Bruder",
          "Vater"
        ],
        "why": "„son“ bedeutet „Sohn“."
      },
      {
        "prompt": "Was bedeutet „grandmother“ auf Deutsch?",
        "answers": [
          "Großmutter",
          "Großvater",
          "Tante"
        ],
        "why": "„grandmother“ bedeutet „Großmutter“."
      },
      {
        "prompt": "Was bedeutet „grandfather“ auf Deutsch?",
        "answers": [
          "Großvater",
          "Großmutter",
          "Onkel"
        ],
        "why": "„grandfather“ bedeutet „Großvater“."
      },
      {
        "prompt": "Was bedeutet „aunt“ auf Deutsch?",
        "answers": [
          "Tante",
          "Mutter",
          "Schwester"
        ],
        "why": "„aunt“ bedeutet „Tante“."
      },
      {
        "prompt": "Was bedeutet „uncle“ auf Deutsch?",
        "answers": [
          "Onkel",
          "Vater",
          "Bruder"
        ],
        "why": "„uncle“ bedeutet „Onkel“."
      },
      {
        "prompt": "Was bedeutet „wife“ auf Deutsch?",
        "answers": [
          "Ehefrau",
          "Ehemann",
          "Tochter"
        ],
        "why": "„wife“ bedeutet „Ehefrau“."
      },
      {
        "prompt": "Was bedeutet „husband“ auf Deutsch?",
        "answers": [
          "Ehemann",
          "Ehefrau",
          "Sohn"
        ],
        "why": "„husband“ bedeutet „Ehemann“."
      },
      {
        "prompt": "Was bedeutet „neighbour“ auf Deutsch?",
        "answers": [
          "Nachbar oder Nachbarin",
          "Freund oder Freundin",
          "Kollege oder Kollegin"
        ],
        "why": "„neighbour“ bedeutet „Nachbar oder Nachbarin“."
      },
      {
        "prompt": "Was bedeutet „friend“ auf Deutsch?",
        "answers": [
          "Freund oder Freundin",
          "Nachbar oder Nachbarin",
          "Kollege oder Kollegin"
        ],
        "why": "„friend“ bedeutet „Freund oder Freundin“."
      }
    ]
  },
  {
    "id": "en-hobbies",
    "label": "Freizeit und Hobbys",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „swimming“ auf Deutsch?",
        "answers": [
          "Schwimmen",
          "Tauchen",
          "Rudern"
        ],
        "why": "„swimming“ bedeutet „Schwimmen“."
      },
      {
        "prompt": "Was bedeutet „cycling“ auf Deutsch?",
        "answers": [
          "Radfahren",
          "Laufen als Sport",
          "Motorradfahren"
        ],
        "why": "„cycling“ bedeutet „Radfahren“."
      },
      {
        "prompt": "Was bedeutet „reading“ auf Deutsch?",
        "answers": [
          "Lesen",
          "Schreiben",
          "Zeichnen"
        ],
        "why": "„reading“ bedeutet „Lesen“."
      },
      {
        "prompt": "Was bedeutet „painting“ auf Deutsch?",
        "answers": [
          "Malen",
          "Zeichnen",
          "Fotografieren"
        ],
        "why": "„painting“ bedeutet „Malen“."
      },
      {
        "prompt": "Was bedeutet „dancing“ auf Deutsch?",
        "answers": [
          "Tanzen",
          "Singen",
          "Turnen"
        ],
        "why": "„dancing“ bedeutet „Tanzen“."
      },
      {
        "prompt": "Was bedeutet „singing“ auf Deutsch?",
        "answers": [
          "Singen",
          "Tanzen",
          "Musik hören"
        ],
        "why": "„singing“ bedeutet „Singen“."
      },
      {
        "prompt": "Was bedeutet „running“ auf Deutsch?",
        "answers": [
          "Laufen als Sport",
          "Wandern",
          "Radfahren"
        ],
        "why": "„running“ bedeutet „Laufen als Sport“."
      },
      {
        "prompt": "Was bedeutet „cooking“ auf Deutsch?",
        "answers": [
          "Kochen",
          "Backen",
          "Einkaufen"
        ],
        "why": "„cooking“ bedeutet „Kochen“."
      },
      {
        "prompt": "Was bedeutet „fishing“ auf Deutsch?",
        "answers": [
          "Angeln",
          "Jagen",
          "Schwimmen"
        ],
        "why": "„fishing“ bedeutet „Angeln“."
      },
      {
        "prompt": "Was bedeutet „climbing“ auf Deutsch?",
        "answers": [
          "Klettern",
          "Wandern",
          "Turnen"
        ],
        "why": "„climbing“ bedeutet „Klettern“."
      },
      {
        "prompt": "Was bedeutet „chess“ auf Deutsch?",
        "answers": [
          "Schach",
          "Dame",
          "Tischtennis"
        ],
        "why": "„chess“ bedeutet „Schach“."
      },
      {
        "prompt": "Was bedeutet „football“ auf Deutsch?",
        "answers": [
          "Fußball",
          "Handball",
          "Basketball"
        ],
        "why": "„football“ bedeutet „Fußball“."
      },
      {
        "prompt": "Was bedeutet „photography“ auf Deutsch?",
        "answers": [
          "Fotografie",
          "Malen",
          "Filmen"
        ],
        "why": "„photography“ bedeutet „Fotografie“."
      },
      {
        "prompt": "Was bedeutet „gardening“ auf Deutsch?",
        "answers": [
          "Gartenarbeit",
          "Kochen",
          "Wandern"
        ],
        "why": "„gardening“ bedeutet „Gartenarbeit“."
      },
      {
        "prompt": "Was bedeutet „hiking“ auf Deutsch?",
        "answers": [
          "Wandern",
          "Klettern",
          "Laufen als Sport"
        ],
        "why": "„hiking“ bedeutet „Wandern“."
      }
    ]
  },
  {
    "id": "en-food",
    "label": "Essen und Getränke",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „bread“ auf Deutsch?",
        "answers": [
          "Brot",
          "Brötchen",
          "Kuchen"
        ],
        "why": "„bread“ bedeutet „Brot“."
      },
      {
        "prompt": "Was bedeutet „water“ auf Deutsch?",
        "answers": [
          "Wasser",
          "Milch",
          "Saft"
        ],
        "why": "„water“ bedeutet „Wasser“."
      },
      {
        "prompt": "Was bedeutet „milk“ auf Deutsch?",
        "answers": [
          "Milch",
          "Wasser",
          "Sahne"
        ],
        "why": "„milk“ bedeutet „Milch“."
      },
      {
        "prompt": "Was bedeutet „cheese“ auf Deutsch?",
        "answers": [
          "Käse",
          "Butter",
          "Joghurt"
        ],
        "why": "„cheese“ bedeutet „Käse“."
      },
      {
        "prompt": "Was bedeutet „rice“ auf Deutsch?",
        "answers": [
          "Reis",
          "Nudeln",
          "Kartoffeln"
        ],
        "why": "„rice“ bedeutet „Reis“."
      },
      {
        "prompt": "Was bedeutet „potatoes“ auf Deutsch?",
        "answers": [
          "Kartoffeln",
          "Karotten",
          "Tomaten"
        ],
        "why": "„potatoes“ bedeutet „Kartoffeln“."
      },
      {
        "prompt": "Was bedeutet „carrots“ auf Deutsch?",
        "answers": [
          "Karotten",
          "Gurken",
          "Kartoffeln"
        ],
        "why": "„carrots“ bedeutet „Karotten“."
      },
      {
        "prompt": "Was bedeutet „apples“ auf Deutsch?",
        "answers": [
          "Äpfel",
          "Birnen",
          "Pflaumen"
        ],
        "why": "„apples“ bedeutet „Äpfel“."
      },
      {
        "prompt": "Was bedeutet „eggs“ auf Deutsch?",
        "answers": [
          "Eier",
          "Kartoffeln",
          "Nüsse"
        ],
        "why": "„eggs“ bedeutet „Eier“."
      },
      {
        "prompt": "Auf einer Speisekarte steht „chicken“. Welches Fleisch ist gemeint?",
        "answers": [
          "Hähnchenfleisch",
          "Rindfleisch",
          "Schweinefleisch"
        ],
        "why": "„chicken“ bedeutet „Hähnchenfleisch“."
      },
      {
        "prompt": "Was bedeutet „fish“ auf Deutsch?",
        "answers": [
          "Fisch",
          "Fleisch",
          "Reis"
        ],
        "why": "„fish“ bedeutet „Fisch“."
      },
      {
        "prompt": "Was bedeutet „salt“ auf Deutsch?",
        "answers": [
          "Salz",
          "Zucker",
          "Pfeffer"
        ],
        "why": "„salt“ bedeutet „Salz“."
      },
      {
        "prompt": "Was bedeutet „sugar“ auf Deutsch?",
        "answers": [
          "Zucker",
          "Salz",
          "Mehl"
        ],
        "why": "„sugar“ bedeutet „Zucker“."
      },
      {
        "prompt": "Was bedeutet „juice“ auf Deutsch?",
        "answers": [
          "Saft",
          "Wasser",
          "Tee"
        ],
        "why": "„juice“ bedeutet „Saft“."
      },
      {
        "prompt": "Was bedeutet „breakfast“ auf Deutsch?",
        "answers": [
          "Frühstück",
          "Mittagessen",
          "Abendessen"
        ],
        "why": "„breakfast“ bedeutet „Frühstück“."
      }
    ]
  },
  {
    "id": "en-clothes",
    "label": "Kleidung und Einkaufen",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „trousers“ auf Deutsch?",
        "answers": [
          "Hose",
          "Rock",
          "Jacke"
        ],
        "why": "„trousers“ bedeutet „Hose“."
      },
      {
        "prompt": "Was bedeutet „shirt“ auf Deutsch?",
        "answers": [
          "Hemd",
          "Rock",
          "Pullover"
        ],
        "why": "„shirt“ bedeutet „Hemd“."
      },
      {
        "prompt": "Was bedeutet „jacket“ auf Deutsch?",
        "answers": [
          "Jacke",
          "Mantel",
          "Weste"
        ],
        "why": "„jacket“ bedeutet „Jacke“."
      },
      {
        "prompt": "Was bedeutet „shoes“ auf Deutsch?",
        "answers": [
          "Schuhe",
          "Socken",
          "Handschuhe"
        ],
        "why": "„shoes“ bedeutet „Schuhe“."
      },
      {
        "prompt": "Was bedeutet „socks“ auf Deutsch?",
        "answers": [
          "Socken",
          "Schuhe",
          "Strümpfhose"
        ],
        "why": "„socks“ bedeutet „Socken“."
      },
      {
        "prompt": "Was bedeutet „coat“ auf Deutsch?",
        "answers": [
          "Mantel",
          "Weste",
          "Pullover"
        ],
        "why": "„coat“ bedeutet „Mantel“."
      },
      {
        "prompt": "Was bedeutet „gloves“ auf Deutsch?",
        "answers": [
          "Handschuhe",
          "Socken",
          "Schal"
        ],
        "why": "„gloves“ bedeutet „Handschuhe“."
      },
      {
        "prompt": "Was bedeutet „size“ auf Deutsch?",
        "answers": [
          "Größe",
          "Preis",
          "Farbe"
        ],
        "why": "„size“ bedeutet „Größe“."
      },
      {
        "prompt": "Was bedeutet „price“ auf Deutsch?",
        "answers": [
          "Preis",
          "Größe",
          "Rabatt"
        ],
        "why": "„price“ bedeutet „Preis“."
      },
      {
        "prompt": "Was bedeutet „receipt“ auf Deutsch?",
        "answers": [
          "Kassenbeleg",
          "Preisschild",
          "Gutschein"
        ],
        "why": "„receipt“ bedeutet „Kassenbeleg“."
      },
      {
        "prompt": "Was bedeutet „discount“ auf Deutsch?",
        "answers": [
          "Rabatt",
          "Preis",
          "Rückgeld"
        ],
        "why": "„discount“ bedeutet „Rabatt“."
      },
      {
        "prompt": "Was bedeutet „cash“ auf Deutsch?",
        "answers": [
          "Bargeld",
          "Kreditkarte",
          "Gutschein"
        ],
        "why": "„cash“ bedeutet „Bargeld“."
      },
      {
        "prompt": "Was bedeutet „changing room“ auf Deutsch?",
        "answers": [
          "Umkleidekabine",
          "Kasse",
          "Lagerraum"
        ],
        "why": "„changing room“ bedeutet „Umkleidekabine“."
      },
      {
        "prompt": "Was bedeutet „customer“ auf Deutsch?",
        "answers": [
          "Kunde oder Kundin",
          "Verkäufer oder Verkäuferin",
          "Lieferant oder Lieferantin"
        ],
        "why": "„customer“ bedeutet „Kunde oder Kundin“."
      },
      {
        "prompt": "Was bedeutet „shop assistant“ auf Deutsch?",
        "answers": [
          "Verkäufer oder Verkäuferin",
          "Kunde oder Kundin",
          "Lieferant oder Lieferantin"
        ],
        "why": "„shop assistant“ bedeutet „Verkäufer oder Verkäuferin“."
      }
    ]
  },
  {
    "id": "en-school",
    "label": "Schule und Lernen",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „lesson“ auf Deutsch?",
        "answers": [
          "Unterrichtsstunde",
          "Pause",
          "Prüfung"
        ],
        "why": "„lesson“ bedeutet „Unterrichtsstunde“."
      },
      {
        "prompt": "Was bedeutet „timetable“ auf Deutsch?",
        "answers": [
          "Stundenplan",
          "Kalender",
          "Aufgabenliste"
        ],
        "why": "„timetable“ bedeutet „Stundenplan“."
      },
      {
        "prompt": "Was bedeutet „exercise“ im Schulalltag?",
        "answers": [
          "Übung",
          "Beispiel",
          "Lösung"
        ],
        "why": "„exercise“ bedeutet „Übung“."
      },
      {
        "prompt": "Was bedeutet „homework“ auf Deutsch?",
        "answers": [
          "Hausaufgaben",
          "Klassenarbeit",
          "Stundenplan"
        ],
        "why": "„homework“ bedeutet „Hausaufgaben“."
      },
      {
        "prompt": "Was bedeutet „dictionary“ auf Deutsch?",
        "answers": [
          "Wörterbuch",
          "Schulbuch",
          "Notizheft"
        ],
        "why": "„dictionary“ bedeutet „Wörterbuch“."
      },
      {
        "prompt": "Was bedeutet „ruler“ im Schulalltag?",
        "answers": [
          "Lineal",
          "Maßband",
          "Geodreieck"
        ],
        "why": "„ruler“ bedeutet „Lineal“."
      },
      {
        "prompt": "Was bedeutet „pencil“ auf Deutsch?",
        "answers": [
          "Bleistift",
          "Kugelschreiber",
          "Filzstift"
        ],
        "why": "„pencil“ bedeutet „Bleistift“."
      },
      {
        "prompt": "Was bedeutet „eraser“ auf Deutsch?",
        "answers": [
          "Radiergummi",
          "Spitzer",
          "Lineal"
        ],
        "why": "„eraser“ bedeutet „Radiergummi“."
      },
      {
        "prompt": "Was bedeutet „folder“ im Schulalltag?",
        "answers": [
          "Ordner",
          "Heft",
          "Buch"
        ],
        "why": "„folder“ bedeutet „Ordner“."
      },
      {
        "prompt": "Was bedeutet „classroom“ auf Deutsch?",
        "answers": [
          "Klassenraum",
          "Lehrerzimmer",
          "Werkstatt"
        ],
        "why": "„classroom“ bedeutet „Klassenraum“."
      },
      {
        "prompt": "Was bedeutet „break“ im Schulalltag?",
        "answers": [
          "Pause",
          "Unterrichtsstunde",
          "Prüfung"
        ],
        "why": "„break“ bedeutet „Pause“."
      },
      {
        "prompt": "Was bedeutet „exam“ auf Deutsch?",
        "answers": [
          "Prüfung",
          "Übung",
          "Hausaufgabe"
        ],
        "why": "„exam“ bedeutet „Prüfung“."
      },
      {
        "prompt": "Was bedeutet „question“ auf Deutsch?",
        "answers": [
          "Frage",
          "Antwort",
          "Auftrag"
        ],
        "why": "„question“ bedeutet „Frage“."
      },
      {
        "prompt": "Was bedeutet „answer“ auf Deutsch?",
        "answers": [
          "Antwort",
          "Frage",
          "Fehler"
        ],
        "why": "„answer“ bedeutet „Antwort“."
      },
      {
        "prompt": "Was bedeutet „mistake“ auf Deutsch?",
        "answers": [
          "Fehler",
          "Frage",
          "Antwort"
        ],
        "why": "„mistake“ bedeutet „Fehler“."
      }
    ]
  },
  {
    "id": "en-tools",
    "label": "Werkzeuge und Werkstatt",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „hammer“ auf Deutsch?",
        "answers": [
          "Hammer",
          "Zange",
          "Feile"
        ],
        "why": "„hammer“ bedeutet „Hammer“."
      },
      {
        "prompt": "Was bedeutet „screwdriver“ auf Deutsch?",
        "answers": [
          "Schraubendreher",
          "Schraubenschlüssel",
          "Schraubstock"
        ],
        "why": "„screwdriver“ bedeutet „Schraubendreher“."
      },
      {
        "prompt": "Was bedeutet „pliers“ auf Deutsch?",
        "answers": [
          "Zange",
          "Hammer",
          "Säge"
        ],
        "why": "„pliers“ bedeutet „Zange“."
      },
      {
        "prompt": "Was bedeutet „saw“ in der Werkstatt?",
        "answers": [
          "Säge",
          "Feile",
          "Bohrmaschine"
        ],
        "why": "„saw“ bedeutet „Säge“."
      },
      {
        "prompt": "Was bedeutet „drill“ in der Werkstatt?",
        "answers": [
          "Bohrmaschine",
          "Schraubendreher",
          "Schleifmaschine"
        ],
        "why": "„drill“ bedeutet „Bohrmaschine“."
      },
      {
        "prompt": "Was bedeutet „file“ in der Werkstatt?",
        "answers": [
          "Feile",
          "Säge",
          "Hammer"
        ],
        "why": "„file“ bedeutet „Feile“."
      },
      {
        "prompt": "Was bedeutet „screw“ auf Deutsch?",
        "answers": [
          "Schraube",
          "Mutter als Befestigungsteil",
          "Unterlegscheibe"
        ],
        "why": "„screw“ bedeutet „Schraube“."
      },
      {
        "prompt": "Was bedeutet „nut“ in der Werkstatt?",
        "answers": [
          "Mutter als Befestigungsteil",
          "Schraube",
          "Unterlegscheibe"
        ],
        "why": "In der Werkstatt bezeichnet „nut“ eine Mutter, die auf eine Schraube geschraubt wird."
      },
      {
        "prompt": "Was bedeutet „bolt“ in der Werkstatt?",
        "answers": [
          "Schraubbolzen",
          "Dübel",
          "Niet"
        ],
        "why": "„bolt“ bedeutet „Schraubbolzen“."
      },
      {
        "prompt": "Was bedeutet „washer“ in der Werkstatt?",
        "answers": [
          "Unterlegscheibe",
          "Schraube",
          "Mutter als Befestigungsteil"
        ],
        "why": "„washer“ bedeutet „Unterlegscheibe“."
      },
      {
        "prompt": "Was bedeutet „workbench“ auf Deutsch?",
        "answers": [
          "Werkbank",
          "Schraubstock",
          "Werkzeugschrank"
        ],
        "why": "„workbench“ bedeutet „Werkbank“."
      },
      {
        "prompt": "Was bedeutet „vice“ in der Werkstatt?",
        "answers": [
          "Schraubstock",
          "Schraubenschlüssel",
          "Werkbank"
        ],
        "why": "„vice“ bedeutet „Schraubstock“."
      },
      {
        "prompt": "Was bedeutet „measuring tape“ auf Deutsch?",
        "answers": [
          "Maßband",
          "Lineal",
          "Messschieber"
        ],
        "why": "„measuring tape“ bedeutet „Maßband“."
      },
      {
        "prompt": "Was bedeutet „safety goggles“ auf Deutsch?",
        "answers": [
          "Schutzbrille",
          "Schutzhandschuhe",
          "Gehörschutz"
        ],
        "why": "„safety goggles“ bedeutet „Schutzbrille“."
      },
      {
        "prompt": "Was bedeutet „sheet metal“ auf Deutsch?",
        "answers": [
          "Blech",
          "Metallrohr",
          "Metallstange"
        ],
        "why": "„sheet metal“ bedeutet „Blech“."
      }
    ]
  },
  {
    "id": "en-jobs",
    "label": "Berufe und Arbeitswelt",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „mechanic“ auf Deutsch?",
        "answers": [
          "Mechaniker oder Mechanikerin",
          "Elektriker oder Elektrikerin",
          "Schweißer oder Schweißerin"
        ],
        "why": "„mechanic“ bedeutet „Mechaniker oder Mechanikerin“."
      },
      {
        "prompt": "Was bedeutet „electrician“ auf Deutsch?",
        "answers": [
          "Elektriker oder Elektrikerin",
          "Mechaniker oder Mechanikerin",
          "Installateur oder Installateurin"
        ],
        "why": "„electrician“ bedeutet „Elektriker oder Elektrikerin“."
      },
      {
        "prompt": "Was bedeutet „carpenter“ auf Deutsch?",
        "answers": [
          "Tischler, Tischlerin, Zimmerer oder Zimmerin",
          "Schweißer oder Schweißerin",
          "Elektriker oder Elektrikerin"
        ],
        "why": "„carpenter“ bedeutet „Tischler oder Zimmerer / Tischlerin oder Zimmerin“."
      },
      {
        "prompt": "Was bedeutet „plumber“ auf Deutsch?",
        "answers": [
          "Installateur oder Installateurin",
          "Mechaniker oder Mechanikerin",
          "Tischler oder Tischlerin"
        ],
        "why": "„plumber“ bedeutet „Installateur oder Installateurin“."
      },
      {
        "prompt": "Was bedeutet „welder“ auf Deutsch?",
        "answers": [
          "Schweißer oder Schweißerin",
          "Elektriker oder Elektrikerin",
          "Mechaniker oder Mechanikerin"
        ],
        "why": "„welder“ bedeutet „Schweißer oder Schweißerin“."
      },
      {
        "prompt": "Was bedeutet „chef“ auf Deutsch?",
        "answers": [
          "Koch oder Köchin",
          "Vorgesetzter oder Vorgesetzte",
          "Kellner oder Kellnerin"
        ],
        "why": "„Chef“ bezeichnet einen Koch oder eine Köchin. Ein Vorgesetzter heißt zum Beispiel „supervisor“."
      },
      {
        "prompt": "Was bedeutet „nurse“ auf Deutsch?",
        "answers": [
          "Pflegefachkraft",
          "Arzt oder Ärztin",
          "Apotheker oder Apothekerin"
        ],
        "why": "„nurse“ bedeutet „Pflegefachkraft“."
      },
      {
        "prompt": "Was bedeutet „driver“ auf Deutsch?",
        "answers": [
          "Fahrer oder Fahrerin",
          "Mechaniker oder Mechanikerin",
          "Schweißer oder Schweißerin"
        ],
        "why": "„driver“ bedeutet „Fahrer oder Fahrerin“."
      },
      {
        "prompt": "Was bedeutet „apprentice“ auf Deutsch?",
        "answers": [
          "Auszubildender oder Auszubildende",
          "Vorgesetzter oder Vorgesetzte",
          "Bewerber oder Bewerberin"
        ],
        "why": "„apprentice“ bedeutet „Auszubildender oder Auszubildende“."
      },
      {
        "prompt": "Was bedeutet „supervisor“ auf Deutsch?",
        "answers": [
          "Vorgesetzter oder Vorgesetzte",
          "Kollege oder Kollegin",
          "Kunde oder Kundin"
        ],
        "why": "„supervisor“ bedeutet „Vorgesetzter oder Vorgesetzte“."
      },
      {
        "prompt": "Was bedeutet „colleague“ auf Deutsch?",
        "answers": [
          "Kollege oder Kollegin",
          "Kunde oder Kundin",
          "Vorgesetzter oder Vorgesetzte"
        ],
        "why": "„colleague“ bedeutet „Kollege oder Kollegin“."
      },
      {
        "prompt": "Was bedeutet „company“ in der Arbeitswelt?",
        "answers": [
          "Unternehmen",
          "Abteilung",
          "Berufsschule"
        ],
        "why": "„company“ bedeutet „Unternehmen“."
      },
      {
        "prompt": "Was bedeutet „shift“ in der Arbeitswelt?",
        "answers": [
          "Arbeitsschicht",
          "Arbeitsvertrag",
          "Urlaub"
        ],
        "why": "„shift“ bedeutet „Arbeitsschicht“."
      },
      {
        "prompt": "Was bedeutet „salary“ in der Arbeitswelt?",
        "answers": [
          "Gehalt",
          "Arbeitszeit",
          "Urlaub"
        ],
        "why": "„salary“ bedeutet „Gehalt“."
      },
      {
        "prompt": "Was bedeutet „internship“ auf Deutsch?",
        "answers": [
          "Praktikum",
          "Ausbildung",
          "Vorstellungsgespräch"
        ],
        "why": "„internship“ bedeutet „Praktikum“."
      }
    ]
  },
  {
    "id": "en-health",
    "label": "Gesundheit und Arztbesuch",
    "subject": "english",
    "format": "vocabulary",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Bedeutung eines Wortes wird im passenden Sachzusammenhang geprüft. Ähnlicher Klang bedeutet nicht automatisch gleiche Bedeutung.",
    "rows": [
      {
        "prompt": "Was bedeutet „headache“ auf Deutsch?",
        "answers": [
          "Kopfschmerzen",
          "Zahnschmerzen",
          "Bauchschmerzen"
        ],
        "why": "„headache“ bedeutet „Kopfschmerzen“."
      },
      {
        "prompt": "Was bedeutet „toothache“ auf Deutsch?",
        "answers": [
          "Zahnschmerzen",
          "Kopfschmerzen",
          "Halsschmerzen"
        ],
        "why": "„toothache“ bedeutet „Zahnschmerzen“."
      },
      {
        "prompt": "Was bedeutet „stomach ache“ auf Deutsch?",
        "answers": [
          "Bauchschmerzen",
          "Rückenschmerzen",
          "Kopfschmerzen"
        ],
        "why": "„stomach ache“ bedeutet „Bauchschmerzen“."
      },
      {
        "prompt": "Was bedeutet „fever“ auf Deutsch?",
        "answers": [
          "Fieber",
          "Husten",
          "Schnupfen"
        ],
        "why": "„fever“ bedeutet „Fieber“."
      },
      {
        "prompt": "Was bedeutet „cough“ auf Deutsch?",
        "answers": [
          "Husten",
          "Fieber",
          "Halsschmerzen"
        ],
        "why": "„cough“ bedeutet „Husten“."
      },
      {
        "prompt": "Was bedeutet „a cold“ beim Arztbesuch?",
        "answers": [
          "Erkältung",
          "Fieber",
          "Verletzung"
        ],
        "why": "„A cold“ ist eine Erkältung. Das Adjektiv „cold“ bedeutet „kalt“."
      },
      {
        "prompt": "Was bedeutet „appointment“ auf Deutsch?",
        "answers": [
          "Termin",
          "Untersuchung",
          "Behandlung"
        ],
        "why": "„appointment“ bedeutet „Termin“."
      },
      {
        "prompt": "Was bedeutet „doctor“ auf Deutsch?",
        "answers": [
          "Arzt oder Ärztin",
          "Pflegefachkraft",
          "Apotheker oder Apothekerin"
        ],
        "why": "„doctor“ bedeutet „Arzt oder Ärztin“."
      },
      {
        "prompt": "Was bedeutet „pharmacy“ auf Deutsch?",
        "answers": [
          "Apotheke",
          "Arztpraxis",
          "Krankenhaus"
        ],
        "why": "„pharmacy“ bedeutet „Apotheke“."
      },
      {
        "prompt": "Was bedeutet „medicine“ auf Deutsch?",
        "answers": [
          "Medikament",
          "Verband",
          "Rezept für ein Medikament"
        ],
        "why": "„medicine“ bedeutet „Medikament“."
      },
      {
        "prompt": "Was bedeutet „prescription“ auf Deutsch?",
        "answers": [
          "Rezept für ein Medikament",
          "Überweisung",
          "Krankschreibung"
        ],
        "why": "„prescription“ bedeutet „Rezept für ein Medikament“."
      },
      {
        "prompt": "Was bedeutet „pain“ auf Deutsch?",
        "answers": [
          "Schmerz",
          "Fieber",
          "Verletzung"
        ],
        "why": "„pain“ bedeutet „Schmerz“."
      },
      {
        "prompt": "Was bedeutet „injury“ auf Deutsch?",
        "answers": [
          "Verletzung",
          "Erkältung",
          "Behandlung"
        ],
        "why": "„injury“ bedeutet „Verletzung“."
      },
      {
        "prompt": "Was bedeutet „bandage“ auf Deutsch?",
        "answers": [
          "Verband",
          "Tablette",
          "Salbe"
        ],
        "why": "„bandage“ bedeutet „Verband“."
      },
      {
        "prompt": "Was bedeutet „emergency“ auf Deutsch?",
        "answers": [
          "Notfall",
          "Sprechstunde",
          "Kontrolluntersuchung"
        ],
        "why": "„emergency“ bedeutet „Notfall“."
      }
    ]
  },
  {
    "id": "en-introductions",
    "label": "Sich vorstellen und persönliche Angaben",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Einfache Vorstellungsformen nennen zum Beispiel Name, Alter, Herkunft und Wohnort. Die Form von „be“ passt zur Person.",
    "rows": [
      {
        "prompt": "Ergänze den Satz: My name ___ Mia.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„My name“ ist Singular; dazu passt „is“."
      },
      {
        "prompt": "Ergänze den Satz: I ___ sixteen years old.",
        "answers": [
          "am",
          "have",
          "are"
        ],
        "why": "Eine Altersangabe bildet man hier mit „I am“."
      },
      {
        "prompt": "Ergänze den Satz: I live ___ Lahr.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Bei einem Wohnort in einer Stadt verwendet man hier „in“."
      },
      {
        "prompt": "Ergänze den Satz: I am ___ Germany.",
        "answers": [
          "from",
          "of",
          "at"
        ],
        "why": "„From“ nennt hier das Herkunftsland."
      },
      {
        "prompt": "Ergänze den Satz: This ___ my friend Ali.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„This“ steht hier im Singular und verlangt „is“."
      },
      {
        "prompt": "Ergänze den Satz: We ___ students.",
        "answers": [
          "are",
          "is",
          "am"
        ],
        "why": "Zu „we“ gehört „are“."
      },
      {
        "prompt": "Ergänze den Satz: My phone number ___ on this form.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "Das Subjekt „my phone number“ steht im Singular."
      },
      {
        "prompt": "Ergänze den Satz: I ___ a sister and a brother.",
        "answers": [
          "have",
          "has",
          "am"
        ],
        "why": "Zum Subjekt „I“ gehört „have“."
      },
      {
        "prompt": "Ergänze den Satz: Her first name ___ Sara.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„Her first name“ ist Singular; die Verbform lautet „is“."
      },
      {
        "prompt": "Ergänze den Satz: My surname ___ Weber.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„Surname“ bedeutet Nachname und steht hier im Singular."
      },
      {
        "prompt": "Ergänze den Satz: I ___ interested in metalwork.",
        "answers": [
          "am",
          "have",
          "are"
        ],
        "why": "Die feste Verbindung lautet hier „be interested in“."
      },
      {
        "prompt": "Ergänze den Satz: We come ___ France.",
        "answers": [
          "from",
          "at",
          "on"
        ],
        "why": "„Come from“ nennt die Herkunft."
      },
      {
        "prompt": "Ergänze den Satz: He ___ seventeen years old.",
        "answers": [
          "is",
          "has",
          "are"
        ],
        "why": "Auch bei „he“ wird das Alter mit „be“ angegeben: „he is“."
      },
      {
        "prompt": "Ergänze den Satz: Our address ___ on the letter.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„Our address“ ist ein einzelnes Subjekt und verlangt „is“."
      },
      {
        "prompt": "Ergänze den Satz: Nice to ___ you.",
        "answers": [
          "meet",
          "meeting",
          "met"
        ],
        "why": "Nach „to“ steht hier die Grundform „meet“."
      }
    ]
  },
  {
    "id": "en-numbers",
    "label": "Zahlen und Preise verstehen",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Zahlwörter müssen eindeutig der genannten Zahl entsprechen. Bei „-teen“ und „-ty“ sind Schreibung und Bedeutung zu unterscheiden.",
    "rows": [
      {
        "prompt": "Welches englische Zahlwort bedeutet 12?",
        "answers": [
          "twelve",
          "twenty",
          "two"
        ],
        "why": "„twelve“ bezeichnet die Zahl 12."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 13?",
        "answers": [
          "thirteen",
          "thirty",
          "three"
        ],
        "why": "„thirteen“ bezeichnet die Zahl 13."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 14?",
        "answers": [
          "fourteen",
          "forty",
          "four"
        ],
        "why": "„fourteen“ bezeichnet die Zahl 14."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 15?",
        "answers": [
          "fifteen",
          "fifty",
          "five"
        ],
        "why": "„fifteen“ bezeichnet die Zahl 15."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 16?",
        "answers": [
          "sixteen",
          "sixty",
          "six"
        ],
        "why": "„sixteen“ bezeichnet die Zahl 16."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 17?",
        "answers": [
          "seventeen",
          "seventy",
          "seven"
        ],
        "why": "„seventeen“ bezeichnet die Zahl 17."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 18?",
        "answers": [
          "eighteen",
          "eighty",
          "eight"
        ],
        "why": "„eighteen“ bezeichnet die Zahl 18."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 19?",
        "answers": [
          "nineteen",
          "ninety",
          "nine"
        ],
        "why": "„nineteen“ bezeichnet die Zahl 19."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 20?",
        "answers": [
          "twenty",
          "twelve",
          "two"
        ],
        "why": "„twenty“ bezeichnet die Zahl 20."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 30?",
        "answers": [
          "thirty",
          "thirteen",
          "three"
        ],
        "why": "„thirty“ bezeichnet die Zahl 30."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 40?",
        "answers": [
          "forty",
          "fourteen",
          "four"
        ],
        "why": "„forty“ bezeichnet die Zahl 40."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 50?",
        "answers": [
          "fifty",
          "fifteen",
          "five"
        ],
        "why": "„fifty“ bezeichnet die Zahl 50."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 60?",
        "answers": [
          "sixty",
          "sixteen",
          "six"
        ],
        "why": "„sixty“ bezeichnet die Zahl 60."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 80?",
        "answers": [
          "eighty",
          "eighteen",
          "eight"
        ],
        "why": "„eighty“ bezeichnet die Zahl 80."
      },
      {
        "prompt": "Welches englische Zahlwort bedeutet 90?",
        "answers": [
          "ninety",
          "nineteen",
          "nine"
        ],
        "why": "„ninety“ bezeichnet die Zahl 90."
      }
    ]
  },
  {
    "id": "en-time",
    "label": "Uhrzeiten und Termine",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Uhrzeiten und Terminangaben müssen genau zum genannten Zeitpunkt passen. Bei „past“ zählt man nach der vollen Stunde, bei „to“ bis zur nächsten.",
    "rows": [
      {
        "prompt": "Welcher Ausdruck bezeichnet 8:00 Uhr?",
        "answers": [
          "eight o'clock",
          "nine o'clock",
          "seven o'clock"
        ],
        "why": "„Eight o'clock“ bedeutet acht Uhr."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 8:30 Uhr?",
        "answers": [
          "half past eight",
          "half past nine",
          "quarter to eight"
        ],
        "why": "„Half past eight“ ist eine halbe Stunde nach acht."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 9:15 Uhr?",
        "answers": [
          "quarter past nine",
          "quarter to nine",
          "quarter past ten"
        ],
        "why": "„Quarter past nine“ bedeutet Viertel nach neun."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 10:45 Uhr?",
        "answers": [
          "quarter to eleven",
          "quarter past eleven",
          "quarter to ten"
        ],
        "why": "Von 10:45 bis elf fehlen fünfzehn Minuten."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 7:10 Uhr?",
        "answers": [
          "ten past seven",
          "ten to seven",
          "ten past eight"
        ],
        "why": "„Ten past seven“ bedeutet zehn Minuten nach sieben."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 6:50 Uhr?",
        "answers": [
          "ten to seven",
          "ten past six",
          "ten to six"
        ],
        "why": "Von 6:50 bis sieben fehlen zehn Minuten."
      },
      {
        "prompt": "„The lesson starts at 9 am.“ Wann beginnt sie?",
        "answers": [
          "Um 9 Uhr morgens.",
          "Um 9 Uhr abends.",
          "Um Mitternacht."
        ],
        "why": "„Am“ bezeichnet hier die Vormittagszeit."
      },
      {
        "prompt": "„The shop closes at 6 pm.“ Welche 24-Stunden-Uhrzeit passt?",
        "answers": [
          "18:00 Uhr.",
          "06:00 Uhr.",
          "12:00 Uhr."
        ],
        "why": "„6 pm“ bezeichnet 18 Uhr."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 12:30 Uhr?",
        "answers": [
          "half past twelve",
          "half past one",
          "quarter past twelve"
        ],
        "why": "„Half past twelve“ bedeutet halb eins im Deutschen."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 3:20 Uhr?",
        "answers": [
          "twenty past three",
          "twenty to three",
          "twenty past four"
        ],
        "why": "„Twenty past three“ bedeutet zwanzig Minuten nach drei."
      },
      {
        "prompt": "Welcher Ausdruck bezeichnet 4:40 Uhr?",
        "answers": [
          "twenty to five",
          "twenty past four",
          "twenty to four"
        ],
        "why": "Von 4:40 bis fünf fehlen zwanzig Minuten."
      },
      {
        "prompt": "„The meeting is on Monday.“ An welchem Tag ist es?",
        "answers": [
          "Am Montag.",
          "Am Mittwoch.",
          "Am Sonntag."
        ],
        "why": "„Monday“ bedeutet Montag."
      },
      {
        "prompt": "„Please arrive ten minutes early.“ Was sollst du tun?",
        "answers": [
          "Zehn Minuten vor dem Termin ankommen.",
          "Zehn Minuten nach dem Termin ankommen.",
          "Genau zum vereinbarten Termin ankommen."
        ],
        "why": "„Early“ bedeutet hier vor dem vereinbarten Beginn."
      },
      {
        "prompt": "„The appointment is at noon.“ Wann ist der Termin?",
        "answers": [
          "Um zwölf Uhr mittags.",
          "Um Mitternacht.",
          "Um neun Uhr abends."
        ],
        "why": "„Noon“ bedeutet zwölf Uhr mittags."
      },
      {
        "prompt": "„The train leaves at midnight.“ Wann fährt er ab?",
        "answers": [
          "Um Mitternacht.",
          "Um zwölf Uhr mittags.",
          "Um sechs Uhr morgens."
        ],
        "why": "„Midnight“ bedeutet Mitternacht."
      }
    ]
  },
  {
    "id": "en-routines",
    "label": "Tagesabläufe beschreiben",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Für regelmäßige Abläufe verwendet man häufig das simple present. Zeitangaben und feste Verbindungen müssen zum Satz passen.",
    "rows": [
      {
        "prompt": "Ergänze für „aufstehen“: I get ___ at six every morning.",
        "answers": [
          "up",
          "down",
          "off"
        ],
        "why": "Die feste Verbindung für „aufstehen“ lautet „get up“."
      },
      {
        "prompt": "Ergänze den Satz: She ___ breakfast at seven.",
        "answers": [
          "has",
          "have",
          "having"
        ],
        "why": "Bei „she“ lautet die simple-present-Form „has“."
      },
      {
        "prompt": "Ergänze den Satz: We go to school ___ bus.",
        "answers": [
          "by",
          "with",
          "to"
        ],
        "why": "Für das Verkehrsmittel heißt es hier „by bus“."
      },
      {
        "prompt": "Ergänze den Satz: My lesson ___ at eight.",
        "answers": [
          "starts",
          "start",
          "starting"
        ],
        "why": "Das Singularsubjekt „my lesson“ verlangt „starts“."
      },
      {
        "prompt": "Ergänze den Satz: I ___ my homework after school.",
        "answers": [
          "do",
          "does",
          "doing"
        ],
        "why": "Zu „I“ passt die Grundform „do“."
      },
      {
        "prompt": "Ergänze den Satz: He ___ home at four every day.",
        "answers": [
          "comes",
          "come",
          "coming"
        ],
        "why": "Im simple present steht bei „he“ hier „comes“."
      },
      {
        "prompt": "Ergänze den Satz: We usually ___ dinner together.",
        "answers": [
          "eat",
          "eats",
          "eating"
        ],
        "why": "Zu „we“ passt „eat“ ohne -s."
      },
      {
        "prompt": "Ergänze den Satz: I brush my ___ before bed.",
        "answers": [
          "teeth",
          "tooths",
          "tooth's"
        ],
        "why": "Der Plural von „tooth“ lautet „teeth“."
      },
      {
        "prompt": "Ergänze den Satz: She ___ her bag in the evening.",
        "answers": [
          "packs",
          "pack",
          "packing"
        ],
        "why": "Bei „she“ steht hier die Verbform mit -s."
      },
      {
        "prompt": "Ergänze den Satz: They ___ to bed at ten.",
        "answers": [
          "go",
          "goes",
          "going"
        ],
        "why": "Zu „they“ gehört „go“."
      },
      {
        "prompt": "Ergänze den Satz: I take a shower ___ the morning.",
        "answers": [
          "in",
          "on",
          "to"
        ],
        "why": "Die Verbindung lautet „in the morning“."
      },
      {
        "prompt": "Ergänze den Satz: He ___ his room on Saturdays.",
        "answers": [
          "cleans",
          "clean",
          "cleaning"
        ],
        "why": "Eine regelmäßige Tätigkeit mit „he“ verlangt hier „cleans“."
      },
      {
        "prompt": "Ergänze den Satz: We ___ a break at ten.",
        "answers": [
          "have",
          "has",
          "having"
        ],
        "why": "Zu „we“ gehört „have“."
      },
      {
        "prompt": "Ergänze den Satz: She walks ___ school every day.",
        "answers": [
          "to",
          "at",
          "in"
        ],
        "why": "Die gerichtete Bewegung heißt hier „walks to school“."
      },
      {
        "prompt": "Ergänze den Satz: I ___ my phone before I leave.",
        "answers": [
          "check",
          "checks",
          "checking"
        ],
        "why": "Im simple present folgt auf „I“ die Grundform „check“."
      }
    ]
  },
  {
    "id": "en-directions",
    "label": "Wegbeschreibungen und Verkehr",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen.",
    "rows": [
      {
        "prompt": "„Turn left at the traffic lights.“ Was sollst du tun?",
        "answers": [
          "An der Ampel links abbiegen.",
          "An der Ampel rechts abbiegen.",
          "An der Ampel geradeaus weitergehen."
        ],
        "why": "„Turn left“ bedeutet „links abbiegen“. „At the traffic lights“ nennt die Ampel als Ort."
      },
      {
        "prompt": "„Go straight on.“ Was sollst du tun?",
        "answers": [
          "Geradeaus weitergehen.",
          "An der nächsten Straße links abbiegen.",
          "Auf demselben Weg zurückgehen."
        ],
        "why": "„Go straight on“ bedeutet „geradeaus weitergehen“."
      },
      {
        "prompt": "„The bank is opposite the school.“ Wo liegt die Bank?",
        "answers": [
          "Gegenüber der Schule.",
          "Neben der Schule.",
          "Hinter der Schule."
        ],
        "why": "„Opposite“ bedeutet „gegenüber“."
      },
      {
        "prompt": "„Take the second street on the right.“ Welche Straße nimmst du?",
        "answers": [
          "Die zweite Straße rechts.",
          "Die erste Straße rechts.",
          "Die zweite Straße links."
        ],
        "why": "„Second“ bedeutet „zweite“ und „on the right“ bedeutet „rechts“."
      },
      {
        "prompt": "„The station is next to the supermarket.“ Wo liegt der Bahnhof?",
        "answers": [
          "Neben dem Supermarkt.",
          "Gegenüber dem Supermarkt.",
          "Hinter dem Supermarkt."
        ],
        "why": "„Next to“ bedeutet „neben“."
      },
      {
        "prompt": "„Cross the road at the crossing.“ Was sollst du tun?",
        "answers": [
          "Die Straße am Übergang überqueren.",
          "Am Übergang auf derselben Straßenseite weitergehen.",
          "Vor dem Übergang rechts abbiegen."
        ],
        "why": "„Cross the road“ heißt „die Straße überqueren“. Das soll am Übergang geschehen."
      },
      {
        "prompt": "„Get off at the next stop.“ Was sollst du tun?",
        "answers": [
          "An der nächsten Haltestelle aussteigen.",
          "An der nächsten Haltestelle einsteigen.",
          "Bis zur übernächsten Haltestelle weiterfahren."
        ],
        "why": "„Get off“ bedeutet „aussteigen“. „Next stop“ ist die nächste Haltestelle."
      },
      {
        "prompt": "Du kaufst ein „return ticket“. Welche Fahrkarte erhältst du?",
        "answers": [
          "Eine Hin- und Rückfahrkarte.",
          "Eine Fahrkarte für eine einfache Fahrt.",
          "Eine Tageskarte für beliebig viele Fahrten."
        ],
        "why": "Ein „return ticket“ gilt für die Hin- und Rückfahrt."
      },
      {
        "prompt": "Du kaufst ein „single ticket“. Welche Fahrkarte erhältst du?",
        "answers": [
          "Eine Fahrkarte für eine einfache Fahrt.",
          "Eine Hin- und Rückfahrkarte.",
          "Eine Tageskarte für beliebig viele Fahrten."
        ],
        "why": "Ein „single ticket“ gilt für eine einfache Fahrt."
      },
      {
        "prompt": "„The platform is on your left.“ Wo liegt der Bahnsteig?",
        "answers": [
          "Links von dir.",
          "Rechts von dir.",
          "Hinter dir."
        ],
        "why": "„On your left“ bedeutet „links von dir“."
      },
      {
        "prompt": "„Walk past the bakery.“ Was sollst du tun?",
        "answers": [
          "An der Bäckerei vorbeigehen.",
          "In die Bäckerei hineingehen.",
          "Vor der Bäckerei stehen bleiben."
        ],
        "why": "„Walk past“ bedeutet „vorbeigehen“."
      },
      {
        "prompt": "„The bus is delayed.“ Welche Information erhältst du?",
        "answers": [
          "Der Bus hat Verspätung.",
          "Die Busfahrt fällt aus.",
          "Der Bus fährt pünktlich ab."
        ],
        "why": "„Delayed“ bedeutet „verspätet“. Eine Verspätung ist keine Absage."
      },
      {
        "prompt": "„The road is closed.“ Welche Information erhältst du?",
        "answers": [
          "Die Straße ist gesperrt.",
          "Die Straße ist wieder geöffnet.",
          "Die Straße ist eine Einbahnstraße."
        ],
        "why": "„Closed“ bedeutet hier „gesperrt“."
      },
      {
        "prompt": "„Use the entrance at the back.“ Welchen Eingang benutzt du?",
        "answers": [
          "Den Eingang auf der Rückseite.",
          "Den Eingang auf der Vorderseite.",
          "Den Eingang an der linken Seite."
        ],
        "why": "„At the back“ bedeutet „auf der Rückseite“."
      },
      {
        "prompt": "„It takes ten minutes on foot.“ Wie lange dauert der Fußweg?",
        "answers": [
          "Zehn Minuten.",
          "Zwanzig Minuten.",
          "Dreißig Minuten."
        ],
        "why": "„Ten minutes“ bedeutet „zehn Minuten“. „On foot“ heißt „zu Fuß“."
      }
    ]
  },
  {
    "id": "en-safety",
    "label": "Sicherheitshinweise verstehen",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden.",
    "rows": [
      {
        "prompt": "„Wear safety goggles.“ Was sollst du tun?",
        "answers": [
          "Eine Schutzbrille tragen.",
          "Schutzhandschuhe tragen.",
          "Einen Schutzhelm tragen."
        ],
        "why": "„Safety goggles“ bedeutet „Schutzbrille“. „Wear“ fordert zum Tragen auf."
      },
      {
        "prompt": "„Do not touch.“ Was bedeutet der Hinweis?",
        "answers": [
          "Nicht berühren.",
          "Nicht betreten.",
          "Nicht einschalten."
        ],
        "why": "„Touch“ bedeutet „berühren“. „Do not“ macht daraus ein Verbot."
      },
      {
        "prompt": "„Keep the door clear.“ Was sollst du tun?",
        "answers": [
          "Den Bereich an der Tür frei halten.",
          "Die Tür abgeschlossen halten.",
          "Die Tür geschlossen halten."
        ],
        "why": "„Keep ... clear“ bedeutet hier „frei halten“. Die Tür darf nicht zugestellt werden."
      },
      {
        "prompt": "An einer Maschine steht „Switch off before cleaning.“ Was sollst du tun?",
        "answers": [
          "Die Maschine vor dem Reinigen ausschalten.",
          "Die Maschine nach dem Reinigen ausschalten.",
          "Die Maschine zum Reinigen einschalten."
        ],
        "why": "„Switch off“ heißt „ausschalten“. „Before cleaning“ heißt „vor dem Reinigen“."
      },
      {
        "prompt": "„Emergency exit.“ Was bezeichnet das Schild?",
        "answers": [
          "Einen Notausgang.",
          "Den Haupteingang.",
          "Den Eingang zum Erste-Hilfe-Raum."
        ],
        "why": "„Emergency exit“ bedeutet „Notausgang“."
      },
      {
        "prompt": "„No smoking.“ Was ist verboten?",
        "answers": [
          "Rauchen.",
          "Essen.",
          "Trinken."
        ],
        "why": "„Smoking“ bedeutet „Rauchen“. „No smoking“ ist ein Rauchverbot."
      },
      {
        "prompt": "„Mind your head.“ Worauf sollst du achten?",
        "answers": [
          "Dass du mit dem Kopf nicht anstößt.",
          "Dass du mit der Hand nichts berührst.",
          "Dass du auf dem Boden nicht ausrutschst."
        ],
        "why": "„Mind your head“ warnt davor, mit dem Kopf anzustoßen."
      },
      {
        "prompt": "„Danger: high voltage.“ Wovor wird gewarnt?",
        "answers": [
          "Vor hoher elektrischer Spannung.",
          "Vor hoher Temperatur.",
          "Vor starkem Lärm."
        ],
        "why": "„High voltage“ bedeutet „hohe elektrische Spannung“."
      },
      {
        "prompt": "„Keep hands away from moving parts.“ Was sollst du tun?",
        "answers": [
          "Die Hände von beweglichen Teilen fernhalten.",
          "Die Hände von heißen Oberflächen fernhalten.",
          "Die Hände vor der Arbeit waschen."
        ],
        "why": "„Moving parts“ sind bewegliche Teile. Die Hände sollen davon fernbleiben."
      },
      {
        "prompt": "„Report accidents immediately.“ Was sollst du tun?",
        "answers": [
          "Unfälle sofort melden.",
          "Unfälle am Ende der Schicht melden.",
          "Nur schwere Unfälle melden."
        ],
        "why": "„Report accidents“ heißt „Unfälle melden“. „Immediately“ heißt „sofort“."
      },
      {
        "prompt": "„Use ear protection.“ Was sollst du verwenden?",
        "answers": [
          "Gehörschutz.",
          "Augenschutz.",
          "Atemschutz."
        ],
        "why": "„Ear protection“ bedeutet „Gehörschutz“."
      },
      {
        "prompt": "„Do not enter.“ Was bedeutet der Hinweis?",
        "answers": [
          "Nicht betreten.",
          "Nicht berühren.",
          "Nicht benutzen."
        ],
        "why": "„Enter“ bedeutet „eintreten“ oder „betreten“. „Do not enter“ verbietet das Betreten."
      },
      {
        "prompt": "„First aid kit.“ Was ist gemeint?",
        "answers": [
          "Ein Verbandkasten.",
          "Ein Feuerlöscher.",
          "Ein Werkzeugkasten."
        ],
        "why": "Ein „first aid kit“ enthält Material für die Erste Hilfe."
      },
      {
        "prompt": "„Slippery floor.“ Wovor wird gewarnt?",
        "answers": [
          "Vor einem rutschigen Boden.",
          "Vor einem unebenen Boden.",
          "Vor einer niedrigen Decke."
        ],
        "why": "„Slippery“ heißt „rutschig“ und „floor“ heißt „Boden“."
      },
      {
        "prompt": "„Ask your supervisor before use.“ Was sollst du vor der Benutzung tun?",
        "answers": [
          "Die zuständige Führungskraft fragen.",
          "Einen beliebigen Kollegen fragen.",
          "Die zuständige Führungskraft nach der Benutzung informieren."
        ],
        "why": "„Supervisor“ bezeichnet die zuständige Führungskraft. „Before use“ heißt „vor der Benutzung“."
      }
    ]
  },
  {
    "id": "en-applications",
    "label": "Bewerbung und Praktikum auf Englisch",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert.",
    "rows": [
      {
        "prompt": "„I am applying for an apprenticeship.“ Wofür bewirbt sich die Person?",
        "answers": [
          "Für einen Ausbildungsplatz.",
          "Für ein Praktikum.",
          "Für eine Teilzeitstelle."
        ],
        "why": "„Apprenticeship“ bedeutet „Ausbildung“. Die Person bewirbt sich um einen Ausbildungsplatz."
      },
      {
        "prompt": "„Please find my CV attached.“ Was ist beigefügt?",
        "answers": [
          "Der Lebenslauf.",
          "Das Anschreiben.",
          "Das Abschlusszeugnis."
        ],
        "why": "„CV“ ist die Abkürzung für den Lebenslauf. „Attached“ heißt „angehängt“."
      },
      {
        "prompt": "„I did an internship in a workshop.“ Welche Erfahrung wird genannt?",
        "answers": [
          "Ein Praktikum in einer Werkstatt.",
          "Eine Ausbildung in einer Werkstatt.",
          "Eine feste Stelle in einer Werkstatt."
        ],
        "why": "„Internship“ bedeutet „Praktikum“."
      },
      {
        "prompt": "„I am available from September.“ Ab wann ist die Person verfügbar?",
        "answers": [
          "Ab September.",
          "Bis September.",
          "Nur im September."
        ],
        "why": "„From September“ bedeutet „ab September“."
      },
      {
        "prompt": "„I enjoy working in a team.“ Was sagt die Person?",
        "answers": [
          "Sie arbeitet gern im Team.",
          "Sie leitet bereits ein Team.",
          "Sie möchte lieber allein arbeiten."
        ],
        "why": "„Enjoy working in a team“ bedeutet „gern im Team arbeiten“."
      },
      {
        "prompt": "„Please bring your certificates.“ Was soll mitgebracht werden?",
        "answers": [
          "Zeugnisse oder Nachweise.",
          "Ein Lebenslauf.",
          "Ein Anschreiben."
        ],
        "why": "„Certificates“ bezeichnet Zeugnisse oder Nachweise."
      },
      {
        "prompt": "„The interview is on Tuesday.“ Was findet am Dienstag statt?",
        "answers": [
          "Das Vorstellungsgespräch.",
          "Der erste Arbeitstag.",
          "Die Abschlussprüfung."
        ],
        "why": "„Interview“ bedeutet in einer Bewerbungssituation „Vorstellungsgespräch“."
      },
      {
        "prompt": "„What are your strengths?“ Wonach wird gefragt?",
        "answers": [
          "Nach den Stärken der Person.",
          "Nach den Schwächen der Person.",
          "Nach den bisherigen Arbeitsstellen."
        ],
        "why": "„Strengths“ bedeutet „Stärken“."
      },
      {
        "prompt": "„I am reliable and punctual.“ Welche Eigenschaften nennt die Person?",
        "answers": [
          "Zuverlässig und pünktlich.",
          "Kreativ und geduldig.",
          "Freundlich und selbstständig."
        ],
        "why": "„Reliable“ bedeutet „zuverlässig“. „Punctual“ bedeutet „pünktlich“."
      },
      {
        "prompt": "In einer Stellenanzeige steht „The closing date is 30 June.“ Was ist am 30. Juni?",
        "answers": [
          "Die Bewerbungsfrist endet.",
          "Das Arbeitsverhältnis beginnt.",
          "Das Vorstellungsgespräch findet statt."
        ],
        "why": "„Closing date“ bezeichnet in der Stellenanzeige das Ende der Bewerbungsfrist."
      },
      {
        "prompt": "„Please send a cover letter.“ Welches Dokument wird verlangt?",
        "answers": [
          "Ein Anschreiben.",
          "Ein Lebenslauf.",
          "Ein Zeugnis."
        ],
        "why": "„Cover letter“ bedeutet „Bewerbungsanschreiben“."
      },
      {
        "prompt": "„I would like to learn more about this job.“ Was möchte die Person?",
        "answers": [
          "Mehr über die Tätigkeit erfahren.",
          "Eine andere Stelle annehmen.",
          "Ihre Bewerbung zurückziehen."
        ],
        "why": "„Learn more about this job“ bedeutet „mehr über diese Tätigkeit erfahren“."
      },
      {
        "prompt": "„Do you have any work experience?“ Wonach wird gefragt?",
        "answers": [
          "Nach beruflicher oder praktischer Erfahrung.",
          "Nach dem gewünschten Gehalt.",
          "Nach dem möglichen Arbeitsbeginn."
        ],
        "why": "„Work experience“ bedeutet „Berufserfahrung“ oder „praktische Arbeitserfahrung“."
      },
      {
        "prompt": "„I look forward to hearing from you.“ Worauf freut sich die Person?",
        "answers": [
          "Auf eine Rückmeldung.",
          "Auf den ersten Arbeitstag.",
          "Auf die nächste Gehaltszahlung."
        ],
        "why": "„Hearing from you“ bedeutet hier „eine Rückmeldung von Ihnen erhalten“."
      },
      {
        "prompt": "„The position is part-time.“ Welche Arbeitszeit ist vorgesehen?",
        "answers": [
          "Teilzeit.",
          "Vollzeit.",
          "Ausschließlich Nachtschicht."
        ],
        "why": "„Part-time“ bedeutet „Teilzeit“."
      }
    ]
  },
  {
    "id": "en-requests",
    "label": "Höfliche Fragen und Bitten auf Englisch",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen.",
    "rows": [
      {
        "prompt": "Du möchtest jemanden höflich um Hilfe bitten. Welcher Satz passt?",
        "answers": [
          "Could you help me, please?",
          "Could I help you, please?",
          "Could you wait for me, please?"
        ],
        "why": "„Could you help me?“ bittet um Hilfe. „Could I help you?“ bietet Hilfe an."
      },
      {
        "prompt": "Du möchtest, dass jemand den letzten Satz wiederholt. Was sagst du?",
        "answers": [
          "Could you repeat that, please?",
          "Could you write your name, please?",
          "Could you translate the text, please?"
        ],
        "why": "„Repeat that“ bedeutet „das wiederholen“."
      },
      {
        "prompt": "Du fragst höflich nach dem Weg zum Bahnhof. Was sagst du?",
        "answers": [
          "Excuse me, how do I get to the station?",
          "Excuse me, when does the train leave?",
          "Excuse me, how much is a ticket?"
        ],
        "why": "„How do I get to the station?“ fragt nach dem Weg zum Bahnhof."
      },
      {
        "prompt": "Du möchtest einen Stift ausleihen. Welche Bitte passt?",
        "answers": [
          "May I borrow your pen, please?",
          "May I keep your pen, please?",
          "May I use your ruler, please?"
        ],
        "why": "„Borrow“ heißt „ausleihen“. „Keep“ würde bedeuten, den Stift zu behalten."
      },
      {
        "prompt": "Du möchtest die Bedeutung eines Wortes wissen. Was fragst du?",
        "answers": [
          "What does this word mean?",
          "How do you spell this word?",
          "How do you pronounce this word?"
        ],
        "why": "„What does this word mean?“ fragt nach der Bedeutung. Die anderen Fragen betreffen Schreibweise und Aussprache."
      },
      {
        "prompt": "Du möchtest, dass jemand langsamer spricht. Was sagst du?",
        "answers": [
          "Could you speak more slowly, please?",
          "Could you speak more loudly, please?",
          "Could you speak more quickly, please?"
        ],
        "why": "„More slowly“ bedeutet „langsamer“."
      },
      {
        "prompt": "Du bestellst höflich ein Glas Wasser. Was sagst du?",
        "answers": [
          "I would like a glass of water, please.",
          "I would like a cup of tea, please.",
          "I would like a glass of juice, please."
        ],
        "why": "„A glass of water“ bedeutet „ein Glas Wasser“. „I would like“ ist eine höfliche Bestellung."
      },
      {
        "prompt": "Du möchtest dich für die Hilfe bedanken. Was sagst du?",
        "answers": [
          "Thank you for your help.",
          "Thank you for your invitation.",
          "Thank you for your message."
        ],
        "why": "„Thank you for your help“ bedeutet „Danke für deine oder Ihre Hilfe“."
      },
      {
        "prompt": "Du möchtest ein Gespräch höflich unterbrechen, um eine Frage zu stellen. Was sagst du?",
        "answers": [
          "Excuse me, may I ask a question?",
          "Excuse me, may I leave the room?",
          "Excuse me, may I use your phone?"
        ],
        "why": "„May I ask a question?“ bedeutet „Darf ich eine Frage stellen?“"
      },
      {
        "prompt": "Du kommst zu spät und möchtest dich entschuldigen. Was sagst du?",
        "answers": [
          "I am sorry I am late.",
          "I am sorry I cannot come.",
          "I am sorry I forgot your name."
        ],
        "why": "„I am sorry I am late“ bedeutet „Es tut mir leid, dass ich zu spät bin“."
      },
      {
        "prompt": "Du möchtest einen neuen Termin vereinbaren. Welche Bitte passt?",
        "answers": [
          "Could we arrange an appointment, please?",
          "Could we cancel the appointment, please?",
          "Could we move the appointment, please?"
        ],
        "why": "„Arrange an appointment“ heißt „einen Termin vereinbaren“. „Cancel“ heißt „absagen“, „move“ heißt „verschieben“."
      },
      {
        "prompt": "Du möchtest, dass jemand eine Information für dich aufschreibt. Was sagst du?",
        "answers": [
          "Could you write that down, please?",
          "Could you read that aloud, please?",
          "Could you explain that again, please?"
        ],
        "why": "„Write that down“ bedeutet „das aufschreiben“."
      },
      {
        "prompt": "Du möchtest im Restaurant die Rechnung bezahlen. Welche Bitte passt?",
        "answers": [
          "Could I have the bill, please?",
          "Could I have the menu, please?",
          "Could I have some water, please?"
        ],
        "why": "„The bill“ ist die Rechnung. „The menu“ ist die Speisekarte."
      },
      {
        "prompt": "Du möchtest, dass jemand die Tür öffnet. Was sagst du?",
        "answers": [
          "Could you open the door, please?",
          "Could you close the door, please?",
          "Could you open the window, please?"
        ],
        "why": "„Open the door“ heißt „die Tür öffnen“."
      },
      {
        "prompt": "Du hast als Startzeit neun Uhr verstanden und möchtest nachfragen. Was sagst du?",
        "answers": [
          "Do you mean that we should start at nine?",
          "Do you mean that we should finish at nine?",
          "Do you mean that we should start at ten?"
        ],
        "why": "Die Frage wiederholt die verstandene Startzeit: „start at nine“ heißt „um neun anfangen“."
      }
    ]
  },
  {
    "id": "en-emails",
    "label": "E-Mails und kurze Nachrichten auf Englisch",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person.",
    "rows": [
      {
        "prompt": "Du schreibst eine formelle E-Mail an Frau Brown. Welche Anrede passt?",
        "answers": [
          "Dear Ms Brown,",
          "Hi Brown!",
          "Goodbye Ms Brown,"
        ],
        "why": "„Dear Ms Brown“ ist eine formelle Anrede an Frau Brown. „Goodbye“ ist ein Abschied."
      },
      {
        "prompt": "Welche Formulierung passt als Gruß am Ende einer beruflichen E-Mail?",
        "answers": [
          "Kind regards",
          "Dear Ms Brown,",
          "Subject: Appointment"
        ],
        "why": "„Kind regards“ ist eine Schlussformel. „Dear ...“ ist die Anrede; „Subject“ bezeichnet den Betreff."
      },
      {
        "prompt": "„Please confirm the appointment.“ Was soll die empfangende Person tun?",
        "answers": [
          "Den Termin bestätigen.",
          "Den Termin absagen.",
          "Den Termin verschieben."
        ],
        "why": "„Confirm“ bedeutet „bestätigen“."
      },
      {
        "prompt": "„I have attached the document.“ Was teilt die Person mit?",
        "answers": [
          "Sie hat das Dokument angehängt.",
          "Sie hat das Dokument ausgedruckt.",
          "Sie wird das Dokument später senden."
        ],
        "why": "„Have attached“ bedeutet „habe angehängt“."
      },
      {
        "prompt": "„Could we move the meeting to Friday?“ Was ist das Anliegen?",
        "answers": [
          "Das Treffen auf Freitag verschieben.",
          "Das Treffen am Freitag absagen.",
          "Das Treffen von Freitag auf Donnerstag verschieben."
        ],
        "why": "„Move ... to Friday“ heißt „auf Freitag verschieben“."
      },
      {
        "prompt": "„I am writing to ask about the internship.“ Worum geht es?",
        "answers": [
          "Um eine Anfrage zum Praktikum.",
          "Um eine Absage des Praktikums.",
          "Um einen Bericht über das abgeschlossene Praktikum."
        ],
        "why": "„Ask about“ bedeutet „sich erkundigen nach“. „Internship“ bedeutet „Praktikum“."
      },
      {
        "prompt": "Du bittest um einen Termin am 12. Mai. Welcher Betreff passt?",
        "answers": [
          "Appointment request for 12 May",
          "Appointment cancellation for 12 May",
          "Invoice for 12 May"
        ],
        "why": "„Appointment request“ ist eine Terminanfrage. „Cancellation“ bedeutet „Absage“, „invoice“ bedeutet „Rechnung“."
      },
      {
        "prompt": "„Thank you for your reply.“ Wofür wird gedankt?",
        "answers": [
          "Für die Antwort.",
          "Für die Einladung.",
          "Für die Bestellung."
        ],
        "why": "„Reply“ bedeutet „Antwort“."
      },
      {
        "prompt": "„Please let me know if you need more information.“ Worum bittet die Person?",
        "answers": [
          "Um eine Nachricht, falls weitere Informationen benötigt werden.",
          "Um die sofortige Rücksendung aller Unterlagen.",
          "Um eine Bestätigung, dass keine Informationen fehlen."
        ],
        "why": "„Let me know“ bedeutet „teile mir mit“. Die Bedingung ist „falls du weitere Informationen brauchst“."
      },
      {
        "prompt": "„I cannot attend the meeting.“ Was wird mitgeteilt?",
        "answers": [
          "Die Person kann am Treffen nicht teilnehmen.",
          "Die Person wird das Treffen leiten.",
          "Die Person wird etwas später am Treffen teilnehmen."
        ],
        "why": "„Cannot attend“ bedeutet „nicht teilnehmen können“."
      },
      {
        "prompt": "Welcher Satz sagt, dass das Treffen um zehn Uhr morgens beginnt?",
        "answers": [
          "The meeting starts at 10 am.",
          "The meeting starts at 10 pm.",
          "The meeting ends at 10 am."
        ],
        "why": "„Starts“ heißt „beginnt“. „10 am“ bedeutet zehn Uhr morgens."
      },
      {
        "prompt": "„Please see the attached file.“ Was soll die empfangende Person ansehen?",
        "answers": [
          "Die angehängte Datei.",
          "Die genannte Internetseite.",
          "Das per Post verschickte Dokument."
        ],
        "why": "„The attached file“ bedeutet „die angehängte Datei“."
      },
      {
        "prompt": "„Could you send me the address?“ Welche Information wird erbeten?",
        "answers": [
          "Die Adresse.",
          "Die Telefonnummer.",
          "Die Uhrzeit des Termins."
        ],
        "why": "„Address“ bedeutet „Adresse“."
      },
      {
        "prompt": "Du entschuldigst dich für eine späte Antwort. Welcher Satz passt?",
        "answers": [
          "I am sorry for my late reply.",
          "I am sorry for the wrong attachment.",
          "I am sorry I missed the meeting."
        ],
        "why": "„Late reply“ bedeutet „späte Antwort“."
      },
      {
        "prompt": "„I look forward to your response.“ Worauf freut sich die Person?",
        "answers": [
          "Auf eine Rückmeldung.",
          "Auf ein persönliches Treffen.",
          "Auf den ersten Arbeitstag."
        ],
        "why": "„Response“ bedeutet „Antwort“ oder „Rückmeldung“."
      }
    ]
  },
  {
    "id": "en-notices",
    "label": "Aushänge und kurze Texte verstehen",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden.",
    "rows": [
      {
        "prompt": "„Open Monday to Friday, 9 am–5 pm.“ Wann ist geöffnet?",
        "answers": [
          "Montag bis Freitag von 9 bis 17 Uhr.",
          "Montag bis Freitag von 9 bis 15 Uhr.",
          "Montag bis Samstag von 9 bis 17 Uhr."
        ],
        "why": "„Monday to Friday“ heißt „Montag bis Freitag“. „5 pm“ ist 17 Uhr."
      },
      {
        "prompt": "„Please return the tools after use.“ Wann sollen die Werkzeuge zurückgebracht werden?",
        "answers": [
          "Nach der Benutzung.",
          "Vor der Benutzung.",
          "Erst am nächsten Tag."
        ],
        "why": "„After use“ bedeutet „nach der Benutzung“."
      },
      {
        "prompt": "„Meeting in Room 4 at 2 pm.“ Wo findet das Treffen statt?",
        "answers": [
          "In Raum 4.",
          "In Raum 2.",
          "In Raum 14."
        ],
        "why": "„In Room 4“ nennt den Raum. „2 pm“ nennt die Uhrzeit."
      },
      {
        "prompt": "„Lunch break: 12:00–12:30.“ Wie lange dauert die Pause?",
        "answers": [
          "30 Minuten.",
          "15 Minuten.",
          "60 Minuten."
        ],
        "why": "Zwischen 12:00 Uhr und 12:30 Uhr liegen 30 Minuten."
      },
      {
        "prompt": "„Students need a valid ID.“ Was wird verlangt?",
        "answers": [
          "Ein gültiger Ausweis.",
          "Eine gültige Fahrkarte.",
          "Ein aktueller Stundenplan."
        ],
        "why": "„ID“ bedeutet „Ausweis“. „Valid“ bedeutet „gültig“."
      },
      {
        "prompt": "„The bus stop has moved to Market Street.“ Was hat sich geändert?",
        "answers": [
          "Die Haltestelle ist jetzt in der Market Street.",
          "Die Haltestelle in der Market Street entfällt ersatzlos.",
          "Die Haltestelle wird von der Market Street wegverlegt."
        ],
        "why": "„Has moved to“ nennt den neuen Ort. Die Haltestelle liegt jetzt in der Market Street."
      },
      {
        "prompt": "„No entry without permission.“ Was brauchst du, um eintreten zu dürfen?",
        "answers": [
          "Eine Erlaubnis.",
          "Eine Anmeldung zum Mittagessen.",
          "Eine Fahrkarte."
        ],
        "why": "„Without permission“ bedeutet „ohne Erlaubnis“. Ohne Erlaubnis ist der Eintritt verboten."
      },
      {
        "prompt": "„Training starts on 3 September.“ Wann beginnt das Training?",
        "answers": [
          "Am 3. September.",
          "Am 13. September.",
          "Am 30. September."
        ],
        "why": "„On 3 September“ bedeutet „am 3. September“."
      },
      {
        "prompt": "„Bring a pen and a notebook.“ Was sollst du mitbringen?",
        "answers": [
          "Einen Stift und ein Notizheft.",
          "Einen Stift und ein Wörterbuch.",
          "Ein Lineal und ein Notizheft."
        ],
        "why": "„Pen“ bedeutet „Stift“. „Notebook“ bedeutet hier „Notizheft“."
      },
      {
        "prompt": "„The lift is out of order.“ Was ist mit dem Aufzug?",
        "answers": [
          "Er funktioniert nicht.",
          "Er ist bereits voll.",
          "Er fährt nur nach oben."
        ],
        "why": "„Out of order“ bedeutet „defekt“ oder „außer Betrieb“."
      },
      {
        "prompt": "„Apply by email before Friday.“ Wie sollst du dich bewerben?",
        "answers": [
          "Vor Freitag per E-Mail.",
          "Am Freitag per E-Mail.",
          "Vor Freitag per Post."
        ],
        "why": "„By email“ heißt „per E-Mail“. „Before Friday“ heißt „vor Freitag“."
      },
      {
        "prompt": "„Please wait here until you are called.“ Was sollst du tun?",
        "answers": [
          "Hier warten, bis du aufgerufen wirst.",
          "Hier warten, bis die Pause beginnt.",
          "Sofort zum Schalter gehen."
        ],
        "why": "„Until you are called“ bedeutet „bis du aufgerufen wirst“."
      },
      {
        "prompt": "„Two volunteers are needed.“ Wie viele freiwillige Personen werden gesucht?",
        "answers": [
          "Zwei.",
          "Zwölf.",
          "Zwanzig."
        ],
        "why": "„Two“ bedeutet „zwei“."
      },
      {
        "prompt": "„All prices include tax.“ Was gilt für die Preise?",
        "answers": [
          "Die Steuer ist bereits enthalten.",
          "Die Steuer wird zusätzlich berechnet.",
          "Die Preise gelten nur ohne Steuer."
        ],
        "why": "„Include tax“ bedeutet „die Steuer enthalten“."
      },
      {
        "prompt": "„The workshop is closed for maintenance.“ Warum ist die Werkstatt geschlossen?",
        "answers": [
          "Wegen Wartungsarbeiten.",
          "Wegen einer Schulung.",
          "Wegen einer Betriebsversammlung."
        ],
        "why": "„Maintenance“ bedeutet „Wartung“ oder „Instandhaltung“."
      }
    ]
  },
  {
    "id": "en-present",
    "label": "Simple present",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es.",
    "rows": [
      {
        "prompt": "Ergänze im simple present: Every morning, she ___ to school.",
        "answers": [
          "walks",
          "walk",
          "walking"
        ],
        "why": "Bei „she“ erhält „walk“ im simple present ein -s: „walks“."
      },
      {
        "prompt": "Ergänze im simple present: We ___ English on Mondays.",
        "answers": [
          "learn",
          "learns",
          "learning"
        ],
        "why": "Bei „we“ steht „learn“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: He usually ___ his homework after lunch.",
        "answers": [
          "does",
          "do",
          "doing"
        ],
        "why": "Bei „he“ lautet die Form von „do“ im simple present „does“."
      },
      {
        "prompt": "Ergänze im simple present: They ___ in a workshop every week.",
        "answers": [
          "work",
          "works",
          "working"
        ],
        "why": "Bei „they“ steht „work“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: My brother ___ the bus at seven every day.",
        "answers": [
          "takes",
          "take",
          "taking"
        ],
        "why": "„My brother“ ist eine Person. Die Form lautet „takes“."
      },
      {
        "prompt": "Ergänze im simple present: I ___ the instructions before every task.",
        "answers": [
          "read",
          "reads",
          "reading"
        ],
        "why": "Bei „I“ steht „read“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: The machine ___ at eight every morning.",
        "answers": [
          "starts",
          "start",
          "starting"
        ],
        "why": "„The machine“ steht in der Einzahl. Deshalb heißt es „starts“."
      },
      {
        "prompt": "Ergänze im simple present: You usually ___ careful notes.",
        "answers": [
          "make",
          "makes",
          "making"
        ],
        "why": "Bei „you“ steht „make“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: Sara ___ the measurements every day.",
        "answers": [
          "checks",
          "check",
          "checking"
        ],
        "why": "„Sara“ ist eine Person. Deshalb heißt es „checks“."
      },
      {
        "prompt": "Ergänze im simple present: We ___ our tools after every lesson.",
        "answers": [
          "clean",
          "cleans",
          "cleaning"
        ],
        "why": "Bei „we“ steht „clean“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: The shop ___ at six on weekdays.",
        "answers": [
          "closes",
          "close",
          "closing"
        ],
        "why": "„The shop“ steht in der Einzahl. Deshalb heißt es „closes“."
      },
      {
        "prompt": "Ergänze im simple present: I ___ to music every evening.",
        "answers": [
          "listen",
          "listens",
          "listening"
        ],
        "why": "Bei „I“ steht „listen“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: He ___ breakfast at home every morning.",
        "answers": [
          "has",
          "have",
          "having"
        ],
        "why": "Bei „he“ wird „have“ zu „has“."
      },
      {
        "prompt": "Ergänze im simple present: They often ___ football after school.",
        "answers": [
          "play",
          "plays",
          "playing"
        ],
        "why": "Bei „they“ steht „play“ ohne -s."
      },
      {
        "prompt": "Ergänze im simple present: My teacher ___ every question clearly.",
        "answers": [
          "explains",
          "explain",
          "explaining"
        ],
        "why": "„My teacher“ ist eine Person. Deshalb heißt es „explains“."
      }
    ]
  },
  {
    "id": "en-progressive",
    "label": "Present progressive",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft.",
    "rows": [
      {
        "prompt": "Ergänze im present progressive: Look! Mia ___ the instructions right now.",
        "answers": [
          "is reading",
          "are reading",
          "is read"
        ],
        "why": "Zu „Mia“ gehört „is“. Die Handlung läuft gerade: „is reading“."
      },
      {
        "prompt": "Ergänze im present progressive: We ___ on the exercise at this moment.",
        "answers": [
          "are working",
          "is working",
          "are work"
        ],
        "why": "Zu „we“ gehört „are“. Mit „working“ heißt es „are working“."
      },
      {
        "prompt": "Ergänze im present progressive: Listen! The phone ___.",
        "answers": [
          "is ringing",
          "are ringing",
          "is ring"
        ],
        "why": "„The phone“ steht in der Einzahl: „is ringing“."
      },
      {
        "prompt": "Ergänze im present progressive: I ___ my homework right now.",
        "answers": [
          "am doing",
          "is doing",
          "am do"
        ],
        "why": "Zu „I“ gehört „am“: „am doing“."
      },
      {
        "prompt": "Ergänze im present progressive: They ___ the room at this moment.",
        "answers": [
          "are cleaning",
          "is cleaning",
          "are clean"
        ],
        "why": "Zu „they“ gehört „are“: „are cleaning“."
      },
      {
        "prompt": "Ergänze im present progressive: He ___ to the supervisor right now.",
        "answers": [
          "is talking",
          "are talking",
          "is talk"
        ],
        "why": "Zu „he“ gehört „is“: „is talking“."
      },
      {
        "prompt": "Ergänze im present progressive: Look! The bus ___.",
        "answers": [
          "is coming",
          "are coming",
          "is come"
        ],
        "why": "„The bus“ steht in der Einzahl: „is coming“."
      },
      {
        "prompt": "Ergänze im present progressive: You ___ on my bag right now.",
        "answers": [
          "are sitting",
          "is sitting",
          "are sit"
        ],
        "why": "Zu „you“ gehört „are“: „are sitting“."
      },
      {
        "prompt": "Ergänze im present progressive: We ___ for the teacher at the moment.",
        "answers": [
          "are waiting",
          "is waiting",
          "are wait"
        ],
        "why": "Zu „we“ gehört „are“: „are waiting“."
      },
      {
        "prompt": "Ergänze im present progressive: She ___ a message right now.",
        "answers": [
          "is writing",
          "are writing",
          "is write"
        ],
        "why": "Zu „she“ gehört „is“: „is writing“."
      },
      {
        "prompt": "Ergänze im present progressive: The children ___ in the park right now.",
        "answers": [
          "are playing",
          "is playing",
          "are play"
        ],
        "why": "„The children“ ist Mehrzahl: „are playing“."
      },
      {
        "prompt": "Ergänze im present progressive: I ___ to the explanation at this moment.",
        "answers": [
          "am listening",
          "are listening",
          "am listen"
        ],
        "why": "Zu „I“ gehört „am“: „am listening“."
      },
      {
        "prompt": "Ergänze im present progressive: He ___ the door right now.",
        "answers": [
          "is opening",
          "are opening",
          "is open"
        ],
        "why": "Zu „he“ gehört „is“. Die Handlung braucht die -ing-Form: „is opening“."
      },
      {
        "prompt": "Ergänze im present progressive: Look! It ___ outside.",
        "answers": [
          "is raining",
          "are raining",
          "is rain"
        ],
        "why": "Beim Wetter steht „it is“: „is raining“."
      },
      {
        "prompt": "Ergänze im present progressive: The workers ___ the machine at this moment.",
        "answers": [
          "are repairing",
          "is repairing",
          "are repair"
        ],
        "why": "„The workers“ ist Mehrzahl: „are repairing“."
      }
    ]
  },
  {
    "id": "en-past-regular",
    "label": "Simple past mit regelmäßigen Verben",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped.",
    "rows": [
      {
        "prompt": "Ergänze im simple past: Yesterday, I ___ in the workshop.",
        "answers": [
          "worked",
          "work",
          "working"
        ],
        "why": "„Yesterday“ verweist auf die Vergangenheit. „Work“ erhält -ed: „worked“."
      },
      {
        "prompt": "Ergänze im simple past: Last Monday, she ___ her desk.",
        "answers": [
          "cleaned",
          "cleans",
          "cleaning"
        ],
        "why": "Die Tätigkeit war letzten Montag. Das simple past von „clean“ ist „cleaned“."
      },
      {
        "prompt": "Ergänze im simple past: We ___ the room yesterday.",
        "answers": [
          "painted",
          "paint",
          "painting"
        ],
        "why": "Das simple past von „paint“ ist „painted“."
      },
      {
        "prompt": "Ergänze im simple past: He ___ the measurements last week.",
        "answers": [
          "checked",
          "checks",
          "checking"
        ],
        "why": "Das simple past von „check“ ist „checked“."
      },
      {
        "prompt": "Ergänze im simple past: They ___ football yesterday.",
        "answers": [
          "played",
          "plays",
          "playing"
        ],
        "why": "Das simple past von „play“ ist „played“. Nach Vokal + y bleibt das y erhalten."
      },
      {
        "prompt": "Ergänze im simple past: I ___ the window ten minutes ago.",
        "answers": [
          "opened",
          "open",
          "opening"
        ],
        "why": "Das simple past von „open“ ist „opened“."
      },
      {
        "prompt": "Ergänze im simple past: The shop ___ early yesterday.",
        "answers": [
          "closed",
          "closes",
          "closing"
        ],
        "why": "„Close“ endet schon auf e. Für „closed“ wird nur d angehängt."
      },
      {
        "prompt": "Ergänze im simple past: She ___ English yesterday evening.",
        "answers": [
          "studied",
          "studyed",
          "studying"
        ],
        "why": "Bei „study“ wird y nach einem Konsonanten zu i: „studied“."
      },
      {
        "prompt": "Ergänze im simple past: The bus ___ outside our school yesterday.",
        "answers": [
          "stopped",
          "stoped",
          "stopping"
        ],
        "why": "Bei „stop“ wird das p vor -ed verdoppelt: „stopped“."
      },
      {
        "prompt": "Ergänze im simple past: We ___ the instructions yesterday.",
        "answers": [
          "followed",
          "follows",
          "following"
        ],
        "why": "Das simple past von „follow“ ist „followed“."
      },
      {
        "prompt": "Ergänze im simple past: He ___ the form last night.",
        "answers": [
          "completed",
          "complete",
          "completing"
        ],
        "why": "„Complete“ endet auf e. Für „completed“ wird nur d angehängt."
      },
      {
        "prompt": "Ergänze im simple past: They ___ the manager yesterday.",
        "answers": [
          "called",
          "calls",
          "calling"
        ],
        "why": "Das simple past von „call“ ist „called“."
      },
      {
        "prompt": "Ergänze im simple past: I ___ my friend last weekend.",
        "answers": [
          "visited",
          "visit",
          "visiting"
        ],
        "why": "Das simple past von „visit“ ist „visited“."
      },
      {
        "prompt": "Ergänze im simple past: She ___ the computer yesterday.",
        "answers": [
          "used",
          "useed",
          "using"
        ],
        "why": "„Use“ endet auf e. Für „used“ wird nur d angehängt."
      },
      {
        "prompt": "Ergänze im simple past: We ___ at the station an hour ago.",
        "answers": [
          "arrived",
          "arrive",
          "arriving"
        ],
        "why": "„Arrive“ endet auf e. Für „arrived“ wird nur d angehängt."
      }
    ]
  },
  {
    "id": "en-past-irregular",
    "label": "Unregelmäßige Verben im simple past",
    "subject": "english",
    "format": "choice",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Unregelmäßige Verben bilden das simple past nicht nach einer einzigen -ed-Regel. Die Form muss zum Verb und zur verlangten Zeitform passen.",
    "rows": [
      {
        "prompt": "Welche Form ist das simple past von „go“?",
        "answers": [
          "went",
          "goed",
          "gone"
        ],
        "why": "Das simple past von „go“ lautet „went“."
      },
      {
        "prompt": "Welche Form ist das simple past von „come“?",
        "answers": [
          "came",
          "comed",
          "come"
        ],
        "why": "Das simple past von „come“ lautet „came“."
      },
      {
        "prompt": "Welche Form ist das simple past von „see“?",
        "answers": [
          "saw",
          "seed",
          "seen"
        ],
        "why": "Das simple past von „see“ lautet „saw“."
      },
      {
        "prompt": "Welche Form ist das simple past von „take“?",
        "answers": [
          "took",
          "taked",
          "taken"
        ],
        "why": "Das simple past von „take“ lautet „took“."
      },
      {
        "prompt": "Welche Form ist das simple past von „write“?",
        "answers": [
          "wrote",
          "writed",
          "written"
        ],
        "why": "Das simple past von „write“ lautet „wrote“."
      },
      {
        "prompt": "Welche Form ist das simple past von „give“?",
        "answers": [
          "gave",
          "gived",
          "given"
        ],
        "why": "Das simple past von „give“ lautet „gave“."
      },
      {
        "prompt": "Welche Form ist das simple past von „buy“?",
        "answers": [
          "bought",
          "buyed",
          "buying"
        ],
        "why": "Das simple past von „buy“ lautet „bought“."
      },
      {
        "prompt": "Welche Form ist das simple past von „bring“?",
        "answers": [
          "brought",
          "bringed",
          "bringing"
        ],
        "why": "Das simple past von „bring“ lautet „brought“."
      },
      {
        "prompt": "Welche Form ist das simple past von „eat“?",
        "answers": [
          "ate",
          "eated",
          "eaten"
        ],
        "why": "Das simple past von „eat“ lautet „ate“."
      },
      {
        "prompt": "Welche Form ist das simple past von „drink“?",
        "answers": [
          "drank",
          "drinked",
          "drunk"
        ],
        "why": "Das simple past von „drink“ lautet „drank“."
      },
      {
        "prompt": "Welche Form ist das simple past von „find“?",
        "answers": [
          "found",
          "finded",
          "finding"
        ],
        "why": "Das simple past von „find“ lautet „found“."
      },
      {
        "prompt": "Welche Form ist das simple past von „make“?",
        "answers": [
          "made",
          "maked",
          "making"
        ],
        "why": "Das simple past von „make“ lautet „made“."
      },
      {
        "prompt": "Welche Form ist das simple past von „do“?",
        "answers": [
          "did",
          "doed",
          "done"
        ],
        "why": "Das simple past von „do“ lautet „did“."
      },
      {
        "prompt": "Welche Form ist das simple past von „have“?",
        "answers": [
          "had",
          "haved",
          "having"
        ],
        "why": "Das simple past von „have“ lautet „had“."
      },
      {
        "prompt": "Welche Form ist das simple past von „get“?",
        "answers": [
          "got",
          "getted",
          "getting"
        ],
        "why": "Das simple past von „get“ lautet „got“."
      }
    ]
  },
  {
    "id": "en-future",
    "label": "Zukunft mit will",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s.",
    "rows": [
      {
        "prompt": "Ergänze die Zukunft mit „will“: I ___ you tomorrow.",
        "answers": [
          "will call",
          "will calls",
          "will called"
        ],
        "why": "Nach „will“ steht die Grundform „call“: „will call“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: She ___ the form later.",
        "answers": [
          "will complete",
          "will completes",
          "will completed"
        ],
        "why": "Nach „will“ steht die Grundform „complete“: „will complete“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: We ___ on Monday.",
        "answers": [
          "will start",
          "will starts",
          "will started"
        ],
        "why": "Nach „will“ steht die Grundform „start“: „will start“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: He ___ the tools back.",
        "answers": [
          "will bring",
          "will brings",
          "will brought"
        ],
        "why": "Nach „will“ steht die Grundform „bring“: „will bring“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: They ___ the room tomorrow.",
        "answers": [
          "will clean",
          "will cleans",
          "will cleaned"
        ],
        "why": "Nach „will“ steht die Grundform „clean“: „will clean“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: I ___ at the station.",
        "answers": [
          "will wait",
          "will waits",
          "will waited"
        ],
        "why": "Nach „will“ steht die Grundform „wait“: „will wait“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: Mia ___ the instructions.",
        "answers": [
          "will read",
          "will reads",
          "will reading"
        ],
        "why": "Nach „will“ steht die Grundform „read“: „will read“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: We ___ you next week.",
        "answers": [
          "will see",
          "will sees",
          "will saw"
        ],
        "why": "Nach „will“ steht die Grundform „see“: „will see“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: He ___ a new message.",
        "answers": [
          "will write",
          "will writes",
          "will wrote"
        ],
        "why": "Nach „will“ steht die Grundform „write“: „will write“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: You ___ the answer soon.",
        "answers": [
          "will know",
          "will knows",
          "will knew"
        ],
        "why": "Nach „will“ steht die Grundform „know“: „will know“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: The shop ___ at nine tomorrow.",
        "answers": [
          "will open",
          "will opens",
          "will opened"
        ],
        "why": "Nach „will“ steht die Grundform „open“: „will open“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: They ___ the machine later.",
        "answers": [
          "will repair",
          "will repairs",
          "will repaired"
        ],
        "why": "Nach „will“ steht die Grundform „repair“: „will repair“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: I ___ my bag tomorrow.",
        "answers": [
          "will pack",
          "will packs",
          "will packed"
        ],
        "why": "Nach „will“ steht die Grundform „pack“: „will pack“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: She ___ with the supervisor.",
        "answers": [
          "will speak",
          "will speaks",
          "will spoke"
        ],
        "why": "Nach „will“ steht die Grundform „speak“: „will speak“."
      },
      {
        "prompt": "Ergänze die Zukunft mit „will“: We ___ the result.",
        "answers": [
          "will check",
          "will checks",
          "will checked"
        ],
        "why": "Nach „will“ steht die Grundform „check“: „will check“."
      }
    ]
  },
  {
    "id": "en-pronouns",
    "label": "Personalpronomen",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden.",
    "rows": [
      {
        "prompt": "Ergänze den Satz: Mia is my sister. ___ is sixteen.",
        "answers": [
          "She",
          "He",
          "It"
        ],
        "why": "„She“ ersetzt „Mia“, die Schwester."
      },
      {
        "prompt": "Ergänze den Satz: Ali is my brother. ___ works here.",
        "answers": [
          "He",
          "She",
          "It"
        ],
        "why": "„He“ ersetzt „Ali“, den Bruder."
      },
      {
        "prompt": "Ergänze den Satz: The machine is new. ___ works well.",
        "answers": [
          "It",
          "He",
          "They"
        ],
        "why": "Die Maschine ist eine Sache in der Einzahl. Dafür steht „it“."
      },
      {
        "prompt": "Ergänze den Satz: Mia and I are a team. ___ work together.",
        "answers": [
          "We",
          "Us",
          "They"
        ],
        "why": "„Mia and I“ bedeutet „Mia und ich“. Das Subjektpronomen dafür ist „we“."
      },
      {
        "prompt": "Ergänze den Satz: These tools are clean. ___ are in the box.",
        "answers": [
          "They",
          "Them",
          "It"
        ],
        "why": "„These tools“ steht in der Mehrzahl. Das Subjektpronomen dafür ist „they“."
      },
      {
        "prompt": "Ergänze den Satz: Please help ___ . (mich)",
        "answers": [
          "me",
          "I",
          "my"
        ],
        "why": "Nach „help“ wird die Objektform „me“ für „mich“ gebraucht."
      },
      {
        "prompt": "Ergänze den Satz: Can you see ___ ? (ihn)",
        "answers": [
          "him",
          "he",
          "his"
        ],
        "why": "„Ihn“ ist hier die Objektform „him“."
      },
      {
        "prompt": "Ergänze den Satz: I am talking to ___ . (sie, eine Person)",
        "answers": [
          "her",
          "she",
          "hers"
        ],
        "why": "Nach „to“ steht die Objektform „her“ für eine weibliche Person."
      },
      {
        "prompt": "Ergänze den Satz: The teacher helps ___ . (uns)",
        "answers": [
          "us",
          "we",
          "our"
        ],
        "why": "Die Objektform für „uns“ lautet „us“."
      },
      {
        "prompt": "Ergänze den Satz: I can see ___ outside. (sie, mehrere Personen)",
        "answers": [
          "them",
          "they",
          "their"
        ],
        "why": "Die Objektform für mehrere Personen lautet „them“."
      },
      {
        "prompt": "Ergänze den Satz: ___ am ready. (ich)",
        "answers": [
          "I",
          "Me",
          "My"
        ],
        "why": "Vor „am“ steht das Subjektpronomen „I“."
      },
      {
        "prompt": "Ergänze den Satz: ___ are welcome. (du)",
        "answers": [
          "You",
          "Your",
          "Yours"
        ],
        "why": "Das Subjektpronomen für „du“ lautet „you“."
      },
      {
        "prompt": "Ergänze den Satz: Please give the pen to ___ . (ihm)",
        "answers": [
          "him",
          "he",
          "his"
        ],
        "why": "Nach „to“ steht die Objektform „him“ für „ihm“."
      },
      {
        "prompt": "Ergänze den Satz: The supervisor is speaking to ___ . (mir)",
        "answers": [
          "me",
          "I",
          "mine"
        ],
        "why": "Nach „to“ steht die Objektform „me“ für „mir“."
      },
      {
        "prompt": "Ergänze den Satz: My friends are here. I will join ___ .",
        "answers": [
          "them",
          "they",
          "their"
        ],
        "why": "„My friends“ sind mehrere Personen. Als Objekt nach „join“ steht „them“."
      }
    ]
  },
  {
    "id": "en-possessives",
    "label": "Besitz und Zugehörigkeit",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs.",
    "rows": [
      {
        "prompt": "Ergänze den Satz: I have a bag. This is ___ bag.",
        "answers": [
          "my",
          "mine",
          "me"
        ],
        "why": "Die Tasche gehört mir. Vor dem Nomen „bag“ steht „my“."
      },
      {
        "prompt": "Ergänze den Satz: You have a pen. This is ___ pen.",
        "answers": [
          "your",
          "yours",
          "you"
        ],
        "why": "Der Stift gehört dir. Vor „pen“ steht „your“."
      },
      {
        "prompt": "Ergänze den Satz: He has a bike. This is ___ bike.",
        "answers": [
          "his",
          "he",
          "him"
        ],
        "why": "Das Fahrrad gehört ihm. Vor „bike“ steht „his“."
      },
      {
        "prompt": "Ergänze den Satz: She has a folder. This is ___ folder.",
        "answers": [
          "her",
          "hers",
          "she"
        ],
        "why": "Der Ordner gehört ihr. Vor „folder“ steht „her“."
      },
      {
        "prompt": "Ergänze den Satz: We have a classroom. This is ___ classroom.",
        "answers": [
          "our",
          "ours",
          "us"
        ],
        "why": "Der Klassenraum gehört zu uns. Vor „classroom“ steht „our“."
      },
      {
        "prompt": "Ergänze den Satz: They have tools. These are ___ tools.",
        "answers": [
          "their",
          "theirs",
          "them"
        ],
        "why": "Die Werkzeuge gehören ihnen. Vor „tools“ steht „their“."
      },
      {
        "prompt": "Ergänze den Satz: The dog is eating ___ food.",
        "answers": [
          "its",
          "it's",
          "it"
        ],
        "why": "„Its“ ist die Besitzform zu „it“. „It’s“ mit Apostroph bedeutet „it is“ oder „it has“."
      },
      {
        "prompt": "Ergänze den Satz: This pen belongs to me. It is ___.",
        "answers": [
          "mine",
          "my",
          "me"
        ],
        "why": "Nach „It is“ folgt kein Nomen. Deshalb steht die alleinstehende Besitzform „mine“."
      },
      {
        "prompt": "Ergänze den Satz: This jacket belongs to you. It is ___.",
        "answers": [
          "yours",
          "your",
          "you"
        ],
        "why": "Nach „It is“ folgt kein Nomen. Deshalb steht „yours“ statt „your“."
      },
      {
        "prompt": "Ergänze den Satz: These books belong to us. They are ___.",
        "answers": [
          "ours",
          "our",
          "us"
        ],
        "why": "Die Bücher gehören uns. Ohne nachfolgendes Nomen heißt es „ours“."
      },
      {
        "prompt": "Ergänze den Satz: That desk belongs to them. It is ___.",
        "answers": [
          "theirs",
          "their",
          "them"
        ],
        "why": "Der Tisch gehört ihnen. Ohne nachfolgendes Nomen heißt es „theirs“."
      },
      {
        "prompt": "Ergänze den Satz: The folder belongs to Mia, my sister. It is ___.",
        "answers": [
          "hers",
          "her",
          "she"
        ],
        "why": "Der Ordner gehört Mia. Ohne nachfolgendes Nomen heißt es „hers“."
      },
      {
        "prompt": "Ergänze den Satz: My brother forgot ___ keys.",
        "answers": [
          "his",
          "he",
          "him"
        ],
        "why": "Die Schlüssel gehören meinem Bruder. Vor „keys“ steht „his“."
      },
      {
        "prompt": "Ergänze den Satz: Mia and I packed ___ bags.",
        "answers": [
          "our",
          "ours",
          "us"
        ],
        "why": "„Mia and I“ entspricht „we“. Vor „bags“ steht daher „our“."
      },
      {
        "prompt": "Ergänze den Satz: The company changed ___ address.",
        "answers": [
          "its",
          "it's",
          "it"
        ],
        "why": "Die Adresse gehört zur Firma. Die Besitzform lautet „its“ ohne Apostroph."
      }
    ]
  },
  {
    "id": "en-prepositions",
    "label": "Präpositionen für Ort und Zeit",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in.",
    "rows": [
      {
        "prompt": "Ergänze den Satz: The lesson starts ___ eight o'clock.",
        "answers": [
          "at",
          "on",
          "in"
        ],
        "why": "Bei einer Uhrzeit steht „at“: „at eight o’clock“."
      },
      {
        "prompt": "Ergänze den Satz: We meet ___ Monday.",
        "answers": [
          "on",
          "in",
          "at"
        ],
        "why": "Bei einem Wochentag steht „on“: „on Monday“."
      },
      {
        "prompt": "Ergänze den Satz: My birthday is ___ July.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Bei einem Monat steht „in“: „in July“."
      },
      {
        "prompt": "Ergänze den Satz: The book is ___ the table. (auf dem Tisch)",
        "answers": [
          "on",
          "under",
          "behind"
        ],
        "why": "„On the table“ bedeutet „auf dem Tisch“."
      },
      {
        "prompt": "Ergänze den Satz: The bag is ___ the desk. (unter dem Tisch)",
        "answers": [
          "under",
          "on",
          "above"
        ],
        "why": "„Under the desk“ bedeutet „unter dem Tisch“."
      },
      {
        "prompt": "Ergänze den Satz: She lives ___ Germany.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Bei einem Land steht hier „in“: „in Germany“."
      },
      {
        "prompt": "Ergänze für „zur Schule“: I go ___ school by bus.",
        "answers": [
          "to",
          "at",
          "in"
        ],
        "why": "„Go to school“ bedeutet „zur Schule gehen“. „To“ nennt das Ziel."
      },
      {
        "prompt": "Ergänze den Satz: We work ___ the morning.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Die feste Zeitangabe lautet „in the morning“."
      },
      {
        "prompt": "Ergänze für „an der Wand“: The picture is ___ the wall.",
        "answers": [
          "on",
          "under",
          "into"
        ],
        "why": "„On the wall“ bedeutet „an der Wand“."
      },
      {
        "prompt": "Ergänze den Satz: The chair is ___ the door. (hinter der Tür)",
        "answers": [
          "behind",
          "above",
          "on"
        ],
        "why": "„Behind the door“ bedeutet „hinter der Tür“."
      },
      {
        "prompt": "Ergänze den Satz: The shop is ___ the bank. (neben der Bank)",
        "answers": [
          "next to",
          "inside",
          "under"
        ],
        "why": "„Next to the bank“ bedeutet „neben der Bank“."
      },
      {
        "prompt": "Ergänze den Satz: We have a break ___ noon.",
        "answers": [
          "at",
          "on",
          "in"
        ],
        "why": "Die feste Zeitangabe lautet „at noon“: „um zwölf Uhr mittags“."
      },
      {
        "prompt": "Ergänze den Satz: The training starts ___ September.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Bei einem Monat steht „in“: „in September“."
      },
      {
        "prompt": "Ergänze den Satz: The keys are ___ the box. (in der Kiste)",
        "answers": [
          "in",
          "on",
          "above"
        ],
        "why": "„In the box“ bedeutet „in der Kiste“."
      },
      {
        "prompt": "Ergänze den Satz: I was born ___ 2009.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Bei einer Jahreszahl steht „in“: „in 2009“."
      }
    ]
  },
  {
    "id": "en-questions",
    "label": "Fragen bilden",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt.",
    "rows": [
      {
        "prompt": "Ergänze die Frage im simple present: ___ you work here?",
        "answers": [
          "Do",
          "Does",
          "Are"
        ],
        "why": "Im simple present beginnt die Frage mit „do“, wenn das Subjekt „you“ ist."
      },
      {
        "prompt": "Ergänze die Frage im simple present: ___ she live in Lahr?",
        "answers": [
          "Does",
          "Do",
          "Is"
        ],
        "why": "Bei „she“ beginnt die Frage im simple present mit „does“."
      },
      {
        "prompt": "Ergänze die Frage im simple present: Where ___ he work?",
        "answers": [
          "does",
          "do",
          "are"
        ],
        "why": "Bei „he“ steht im simple present „does“ vor dem Subjekt und „work“ in der Grundform."
      },
      {
        "prompt": "Ergänze die Frage im simple present: When ___ they start?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Bei „they“ wird die Frage mit „do“ gebildet."
      },
      {
        "prompt": "Ergänze die Frage im simple present: ___ you ready?",
        "answers": [
          "Are",
          "Is",
          "Do"
        ],
        "why": "Zu „you“ gehört „are“. In der Frage steht „are“ vor „you“."
      },
      {
        "prompt": "Ergänze die Frage im simple present: ___ he your teacher?",
        "answers": [
          "Is",
          "Are",
          "Does"
        ],
        "why": "Zu „he“ gehört „is“. In der Frage steht „is“ vor „he“."
      },
      {
        "prompt": "Ergänze die Frage im simple present: What time ___ the bus leave?",
        "answers": [
          "does",
          "do",
          "are"
        ],
        "why": "„The bus“ steht in der Einzahl. Die Frage im simple present braucht „does“."
      },
      {
        "prompt": "Ergänze die Frage im simple present: Where ___ your keys?",
        "answers": [
          "are",
          "is",
          "does"
        ],
        "why": "„Your keys“ steht in der Mehrzahl. Die Frage lautet „Where are your keys?“"
      },
      {
        "prompt": "Ergänze die Frage im simple present: Why ___ you need this tool?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Bei „you“ wird die Frage im simple present mit „do“ gebildet."
      },
      {
        "prompt": "Ergänze die Frage im simple present: ___ she speak English?",
        "answers": [
          "Does",
          "Do",
          "Is"
        ],
        "why": "Bei „she“ wird die Frage im simple present mit „does“ gebildet."
      },
      {
        "prompt": "Ergänze die Frage im simple present: How ___ I open this box?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Bei „I“ wird die Frage im simple present mit „do“ gebildet."
      },
      {
        "prompt": "Ergänze die Frage im simple present: ___ we need safety goggles?",
        "answers": [
          "Do",
          "Does",
          "Are"
        ],
        "why": "Bei „we“ wird die Frage im simple present mit „do“ gebildet."
      },
      {
        "prompt": "Ergänze die Frage im simple present: Where ___ Mia and Ali live?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "„Mia and Ali“ sind mehrere Personen. Daher steht „do“."
      },
      {
        "prompt": "Ergänze im present progressive: ___ the machine working now?",
        "answers": [
          "Is",
          "Are",
          "Do"
        ],
        "why": "„The machine“ steht in der Einzahl. Im present progressive heißt es „is working“."
      },
      {
        "prompt": "Ergänze die Frage im simple present: What ___ this word mean?",
        "answers": [
          "does",
          "do",
          "are"
        ],
        "why": "„This word“ steht in der Einzahl. Die Frage im simple present braucht „does“."
      }
    ]
  },
  {
    "id": "en-negation",
    "label": "Verneinungen",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do.",
    "rows": [
      {
        "prompt": "Ergänze die Verneinung im simple present: I ___ work on Sundays.",
        "answers": [
          "do not",
          "does not",
          "am not"
        ],
        "why": "Bei „I“ wird das Vollverb mit „do not“ verneint."
      },
      {
        "prompt": "Ergänze die Verneinung im simple present: She ___ drive to school.",
        "answers": [
          "does not",
          "do not",
          "is not"
        ],
        "why": "Bei „she“ steht „does not“ vor der Grundform „drive“."
      },
      {
        "prompt": "Ergänze die verneinte Form von „be“: We ___ ready.",
        "answers": [
          "are not",
          "is not",
          "am not"
        ],
        "why": "Zu „we“ gehört „are“. Mit „not“ heißt es „are not“."
      },
      {
        "prompt": "Ergänze die verneinte Form von „be“: He ___ here today.",
        "answers": [
          "is not",
          "are not",
          "am not"
        ],
        "why": "Zu „he“ gehört „is“. Mit „not“ heißt es „is not“."
      },
      {
        "prompt": "Ergänze die Verneinung im simple present: They ___ understand the task.",
        "answers": [
          "do not",
          "does not",
          "is not"
        ],
        "why": "Bei „they“ wird das Vollverb mit „do not“ verneint."
      },
      {
        "prompt": "Ergänze die passende Verbform: She does not ___ this tool.",
        "answers": [
          "need",
          "needs",
          "needed"
        ],
        "why": "Nach „does not“ steht die Grundform „need“ ohne -s."
      },
      {
        "prompt": "Ergänze die passende Verbform: He does not ___ here.",
        "answers": [
          "work",
          "works",
          "working"
        ],
        "why": "Nach „does not“ steht die Grundform „work“ ohne -s."
      },
      {
        "prompt": "Ergänze die verneinte Form von „be“: I ___ a teacher.",
        "answers": [
          "am not",
          "is not",
          "are not"
        ],
        "why": "Zu „I“ gehört „am“. Die Verneinung lautet „am not“."
      },
      {
        "prompt": "Ergänze für „darfst nicht“: You ___ leave the door open.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "„Must not“ drückt ein Verbot aus: „darfst nicht“."
      },
      {
        "prompt": "Ergänze für „können nicht“: We ___ hear you.",
        "answers": [
          "cannot",
          "must not",
          "should not"
        ],
        "why": "„Cannot“ ist die Verneinung von „can“: „können nicht“."
      },
      {
        "prompt": "Ergänze die Verneinung im simple present: The shop ___ sell tools on Sundays.",
        "answers": [
          "does not",
          "do not",
          "is not"
        ],
        "why": "„The shop“ steht in der Einzahl. Vor der Grundform „sell“ steht „does not“."
      },
      {
        "prompt": "Ergänze die Verneinung im simple present: My friends ___ live here.",
        "answers": [
          "do not",
          "does not",
          "is not"
        ],
        "why": "„My friends“ steht in der Mehrzahl. Deshalb wird mit „do not“ verneint."
      },
      {
        "prompt": "Ergänze die verneinte Form von „be“: She ___ reading now.",
        "answers": [
          "is not",
          "are not",
          "am not"
        ],
        "why": "Bei „she“ heißt es „is reading“. Zur Verneinung wird „not“ nach „is“ ergänzt."
      },
      {
        "prompt": "Ergänze die passende Verbform: He did not ___ the bus yesterday.",
        "answers": [
          "take",
          "took",
          "taken"
        ],
        "why": "Nach „did not“ steht die Grundform „take“."
      },
      {
        "prompt": "Ergänze die passende Verbform: We will not ___ late.",
        "answers": [
          "be",
          "are",
          "were"
        ],
        "why": "Nach „will not“ steht die Grundform „be“."
      }
    ]
  },
  {
    "id": "en-comparisons",
    "label": "Adjektive vergleichen",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden.",
    "rows": [
      {
        "prompt": "Ergänze den Satz: This box is ___ than that one. (big)",
        "answers": [
          "bigger",
          "big",
          "biggest"
        ],
        "why": "Der Vergleich mit „than“ braucht „bigger“. Das g wird verdoppelt."
      },
      {
        "prompt": "Ergänze den Satz: My bag is ___ than yours. (heavy)",
        "answers": [
          "heavier",
          "heavy",
          "heaviest"
        ],
        "why": "Bei „heavy“ wird y zu i: „heavier“."
      },
      {
        "prompt": "Ergänze den Satz: This road is ___ than the old road. (wide)",
        "answers": [
          "wider",
          "wide",
          "widest"
        ],
        "why": "„Wide“ endet auf e. Für den Vergleich wird nur r angehängt: „wider“."
      },
      {
        "prompt": "Ergänze den Satz: The new bus is ___ than the old bus. (fast)",
        "answers": [
          "faster",
          "fast",
          "fastest"
        ],
        "why": "Der Vergleich von „fast“ lautet „faster“."
      },
      {
        "prompt": "Ergänze den Satz: This chair is ___ than the other chair. (small)",
        "answers": [
          "smaller",
          "small",
          "smallest"
        ],
        "why": "Der Vergleich von „small“ lautet „smaller“."
      },
      {
        "prompt": "Ergänze den Satz: This explanation is ___ than the last one. (good)",
        "answers": [
          "better",
          "gooder",
          "best"
        ],
        "why": "„Good“ wird unregelmäßig gesteigert: „better“."
      },
      {
        "prompt": "Ergänze den Satz: The weather is ___ today than yesterday. (bad)",
        "answers": [
          "worse",
          "badder",
          "worst"
        ],
        "why": "„Bad“ wird unregelmäßig gesteigert: „worse“."
      },
      {
        "prompt": "Ergänze den Satz: This task is ___ than the first task. (easy)",
        "answers": [
          "easier",
          "easy",
          "easiest"
        ],
        "why": "Bei „easy“ wird y zu i: „easier“."
      },
      {
        "prompt": "Ergänze den Satz: The workshop is ___ than the classroom. (noisy)",
        "answers": [
          "noisier",
          "noisy",
          "noisiest"
        ],
        "why": "Bei „noisy“ wird y zu i: „noisier“."
      },
      {
        "prompt": "Ergänze den Satz: This tool is ___ than that tool. (expensive)",
        "answers": [
          "more expensive",
          "expensiver",
          "most expensive"
        ],
        "why": "„Expensive“ wird mit „more“ gesteigert: „more expensive“."
      },
      {
        "prompt": "Ergänze den Satz: This route is ___ than the other route. (short)",
        "answers": [
          "shorter",
          "short",
          "shortest"
        ],
        "why": "Der Vergleich von „short“ lautet „shorter“."
      },
      {
        "prompt": "Ergänze den Satz: The new machine is ___ than the old one. (quiet)",
        "answers": [
          "quieter",
          "quiet",
          "quietest"
        ],
        "why": "Der Vergleich von „quiet“ lautet hier „quieter“."
      },
      {
        "prompt": "Ergänze den Satz: This text is ___ than that text. (interesting)",
        "answers": [
          "more interesting",
          "interestinger",
          "most interesting"
        ],
        "why": "„Interesting“ wird mit „more“ gesteigert: „more interesting“."
      },
      {
        "prompt": "Ergänze den Satz: The red car is ___ than the blue car. (old)",
        "answers": [
          "older",
          "old",
          "oldest"
        ],
        "why": "Der Vergleich von „old“ lautet „older“."
      },
      {
        "prompt": "Ergänze den Satz: This method is ___ than the first method. (safe)",
        "answers": [
          "safer",
          "safe",
          "safest"
        ],
        "why": "„Safe“ endet auf e. Für den Vergleich wird nur r angehängt: „safer“."
      }
    ]
  },
  {
    "id": "en-modals",
    "label": "Können, müssen und sollen",
    "subject": "english",
    "format": "gap",
    "curriculum": "Englisch BPE 1, 2 und 4",
    "rule": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat.",
    "rows": [
      {
        "prompt": "Übersetze „Ich kann schwimmen“: I ___ swim.",
        "answers": [
          "can",
          "must not",
          "cannot"
        ],
        "why": "„Can“ bedeutet hier „können“ und beschreibt eine Fähigkeit."
      },
      {
        "prompt": "Übersetze „Du musst eine Schutzbrille tragen“: You ___ wear safety goggles.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "„Must“ bedeutet hier „müssen“ und beschreibt eine Pflicht."
      },
      {
        "prompt": "Übersetze „Du darfst hier nicht rauchen“: You ___ smoke here.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "„Must not“ heißt „nicht dürfen“ und drückt ein Verbot aus."
      },
      {
        "prompt": "Übersetze „Du solltest mehr üben“: You ___ practise more.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "„Should“ heißt „solltest“ und gibt einen Rat."
      },
      {
        "prompt": "Übersetze „Er kann gut lesen“: He ___ read well.",
        "answers": [
          "can",
          "must not",
          "cannot"
        ],
        "why": "„Can“ beschreibt hier die Fähigkeit, gut zu lesen."
      },
      {
        "prompt": "Übersetze „Wir müssen pünktlich sein“: We ___ be on time.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "„Must“ drückt die Pflicht aus, pünktlich zu sein."
      },
      {
        "prompt": "Übersetze „Du darfst das nicht berühren“: You ___ touch it.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "„Must not“ drückt das Verbot aus, etwas zu berühren."
      },
      {
        "prompt": "Übersetze „Ich kann dich nicht hören“: I ___ hear you.",
        "answers": [
          "cannot",
          "must",
          "should"
        ],
        "why": "„Cannot“ heißt „nicht können“: Die Person kann den anderen nicht hören."
      },
      {
        "prompt": "Übersetze „Sie sollte den Arzt anrufen“: She ___ call the doctor.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "„Should“ gibt einen Rat: Sie sollte den Arzt anrufen."
      },
      {
        "prompt": "Übersetze „Ihr müsst warten“: You ___ wait.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "„Must“ drückt aus, dass das Warten nötig ist."
      },
      {
        "prompt": "Übersetze „Sie können die Maschine bedienen“: They ___ operate the machine.",
        "answers": [
          "can",
          "must not",
          "cannot"
        ],
        "why": "„Can“ beschreibt hier die Fähigkeit, die Maschine zu bedienen."
      },
      {
        "prompt": "Übersetze „Wir sollten die Maße prüfen“: We ___ check the measurements.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "„Should“ gibt den Rat, die Maße zu prüfen."
      },
      {
        "prompt": "Übersetze „Er darf hier nicht parken“: He ___ park here.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "„Must not“ drückt das Parkverbot aus."
      },
      {
        "prompt": "Übersetze „Ich muss jetzt gehen“: I ___ go now.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "„Must“ bedeutet hier „müssen“: Ich muss jetzt gehen."
      },
      {
        "prompt": "Übersetze „Du solltest um Hilfe bitten“: You ___ ask for help.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "„Should“ gibt den Rat, um Hilfe zu bitten."
      }
    ]
  }
];
