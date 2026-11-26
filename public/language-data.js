// Eigene Aufgaben nach den AV-Bildungsplänen Baden-Württemberg.
export const languageData = [
  {
    "id": "de-das-dass",
    "label": "das oder dass",
    "subject": "german",
    "format": "gap",
    "curriculum": "Deutsch BPE 1.4",
    "rule": "„Dass“ leitet einen Nebensatz ein. „Das“ kann ein Artikel oder ein Pronomen sein. Die Ersatzprobe hilft.",
    "wrongRules": [
      "Nach einem Komma steht immer „dass“.",
      "Vor einem Nomen steht immer „dass“."
    ],
    "rows": [
      {
        "prompt": "Ich hoffe, ___ du kommst.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "„Dass“ leitet hier einen Nebensatz ein. „Dieses“ oder „welches“ passt nicht."
      },
      {
        "prompt": "___ Fahrrad gehört mir.",
        "answers": [
          "Das",
          "Dass",
          "Daß"
        ],
        "why": "Vor „Fahrrad“ steht der Artikel „das“. „Dieses Fahrrad“ ist eine mögliche Ersatzprobe."
      },
      {
        "prompt": "Das ist das Buch, ___ ich suche.",
        "answers": [
          "das",
          "dass",
          "daß"
        ],
        "why": "Das Relativpronomen „das“ bezieht sich auf „Buch“. Man kann „welches“ einsetzen."
      },
      {
        "prompt": "Wir wissen, ___ die Prüfung bald beginnt.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "„Dass“ leitet den Nebensatz ein und lässt sich nicht durch „welches“ ersetzen."
      },
      {
        "prompt": "Ich nehme ___ Werkzeug mit.",
        "answers": [
          "das",
          "dass",
          "daß"
        ],
        "why": "„Das“ ist hier ein Artikel vor dem Nomen „Werkzeug“."
      },
      {
        "prompt": "Sie sagt, ___ sie morgen arbeitet.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "Die Konjunktion „dass“ verbindet hier Hauptsatz und Nebensatz."
      },
      {
        "prompt": "Das Auto, ___ dort steht, ist rot.",
        "answers": [
          "das",
          "dass",
          "daß"
        ],
        "why": "„Das“ bezieht sich auf „Auto“. „Welches dort steht“ ist die Ersatzprobe."
      },
      {
        "prompt": "Es ist wichtig, ___ du pünktlich bist.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "Der Nebensatz mit „dass“ erklärt, was wichtig ist."
      },
      {
        "prompt": "Ich glaube, ___ ist mein Heft.",
        "answers": [
          "das",
          "dass",
          "daß"
        ],
        "why": "„Das“ ist hier ein Demonstrativpronomen. Man kann „dies“ einsetzen: „Dies ist mein Heft.“"
      },
      {
        "prompt": "Wir freuen uns, ___ du mitmachst.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "„Dass“ leitet den Nebensatz ein. Die Ersatzprobe mit „welches“ funktioniert nicht."
      },
      {
        "prompt": "Das Schild, ___ am Tor hängt, ist neu.",
        "answers": [
          "das",
          "dass",
          "daß"
        ],
        "why": "Das Relativpronomen „das“ bezieht sich auf „Schild“."
      },
      {
        "prompt": "Er erklärt, ___ der Strom abgeschaltet ist.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "„Dass“ leitet die wiedergegebene Aussage ein."
      },
      {
        "prompt": "Kannst du mir ___ erklären?",
        "answers": [
          "das",
          "dass",
          "daß"
        ],
        "why": "„Das“ ist ein Pronomen und steht hier für eine Sache. „Dies erklären“ ist möglich."
      },
      {
        "prompt": "Ich bin sicher, ___ die Rechnung stimmt.",
        "answers": [
          "dass",
          "das",
          "daß"
        ],
        "why": "„Dass“ leitet den Nebensatz ein. „Die Rechnung“ ist dessen Subjekt."
      },
      {
        "prompt": "Das Bild, ___ wir ansehen, zeigt eine Werkstatt.",
        "answers": [
          "das",
          "dass",
          "daß"
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
    "wrongRules": [
      "Jedes wichtige Wort muss großgeschrieben werden.",
      "Nach einem Artikel werden alle folgenden Wörter großgeschrieben."
    ],
    "rows": [
      {
        "prompt": "Der ___ steht vor der Tür.",
        "answers": [
          "Bus",
          "bus",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Wir ___ heute gemeinsam.",
        "answers": [
          "lernen",
          "Lernen",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Die Platte ist ___.",
        "answers": [
          "glatt",
          "Glatt",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "___ beginnt der Unterricht später.",
        "answers": [
          "Morgen",
          "morgen",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Ich trinke ein Glas ___.",
        "answers": [
          "Wasser",
          "wasser",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Der neue ___ passt gut.",
        "answers": [
          "Schlüssel",
          "schlüssel",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Sie arbeitet sehr ___.",
        "answers": [
          "sorgfältig",
          "Sorgfältig",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Wir ___ die Maße auf.",
        "answers": [
          "schreiben",
          "Schreiben",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Die ___ ist abgeschlossen.",
        "answers": [
          "Aufgabe",
          "aufgabe",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Der Boden ist ___.",
        "answers": [
          "nass",
          "Nass",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "___ hole ich mein Werkzeug.",
        "answers": [
          "Jetzt",
          "jetzt",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Er ___ die Anleitung.",
        "answers": [
          "liest",
          "Liest",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Ich suche meinen ___.",
        "answers": [
          "Ordner",
          "ordner",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Die Maschine läuft ___.",
        "answers": [
          "leise",
          "Leise",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Nomen und Satzanfänge schreibt man groß. Verben und Adjektive bleiben in dieser Verwendung klein."
      },
      {
        "prompt": "Wir tragen feste ___.",
        "answers": [
          "Schuhe",
          "schuhe",
          "Beide Schreibweisen passen in diesem Satz."
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
    "wrongRules": [
      "Ein Verb bleibt in jeder Verwendung kleingeschrieben.",
      "Jedes Wort nach „sehr“ wird großgeschrieben."
    ],
    "rows": [
      {
        "prompt": "Das ___ fällt mir leicht.",
        "answers": [
          "Lesen",
          "lesen",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Beim ___ trage ich eine Schutzbrille.",
        "answers": [
          "Bohren",
          "bohren",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Sie wünscht dir alles ___.",
        "answers": [
          "Gute",
          "gute",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Wir haben etwas ___ gelernt.",
        "answers": [
          "Neues",
          "neues",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Zum ___ brauche ich einen Stift.",
        "answers": [
          "Schreiben",
          "schreiben",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Es gibt nichts ___ zu berichten.",
        "answers": [
          "Wichtiges",
          "wichtiges",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Das ___ der Maße dauert kurz.",
        "answers": [
          "Prüfen",
          "prüfen",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Nach dem ___ räumen wir auf.",
        "answers": [
          "Arbeiten",
          "arbeiten",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Ich habe viel ___ gehört.",
        "answers": [
          "Interessantes",
          "interessantes",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Beim ___ halte ich die Hände frei.",
        "answers": [
          "Gehen",
          "gehen",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Das ___ im Team hilft uns.",
        "answers": [
          "Lernen",
          "lernen",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Zum ___ gehen wir nach draußen.",
        "answers": [
          "Üben",
          "üben",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Sie findet etwas ___.",
        "answers": [
          "Passendes",
          "passendes",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Das ___ der Maschine ist verboten.",
        "answers": [
          "Berühren",
          "berühren",
          "Beide Schreibweisen passen in diesem Satz."
        ],
        "why": "Als Nomen gebrauchte Verben und Adjektive werden großgeschrieben. Hinweise sind zum Beispiel „das“, „beim“, „etwas“ und „nichts“."
      },
      {
        "prompt": "Wir essen gern etwas ___.",
        "answers": [
          "Warmes",
          "warmes",
          "Beide Schreibweisen passen in diesem Satz."
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
    "wrongRules": [
      "„Seid“ steht immer bei einer Zeitangabe.",
      "„Seit“ ist die Verbform zu „ihr“."
    ],
    "rows": [
      {
        "prompt": "Ihr ___ heute früh dran.",
        "answers": [
          "seid",
          "seit",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Wir warten ___ einer Stunde.",
        "answers": [
          "seit",
          "seid",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ ihr bereit?",
        "answers": [
          "Seid",
          "Seit",
          "Seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ich wohne ___ 2022 hier.",
        "answers": [
          "seit",
          "seid",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ihr ___ ein gutes Team.",
        "answers": [
          "seid",
          "seit",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ Montag arbeite ich im Praktikum.",
        "answers": [
          "Seit",
          "Seid",
          "Seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Warum ___ ihr so leise?",
        "answers": [
          "seid",
          "seit",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Die Werkstatt ist ___ gestern geschlossen.",
        "answers": [
          "seit",
          "seid",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ihr ___ für das Material zuständig.",
        "answers": [
          "seid",
          "seit",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ich kenne ihn ___ der Grundschule.",
        "answers": [
          "seit",
          "seid",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ vorsichtig an der Maschine!",
        "answers": [
          "Seid",
          "Seit",
          "Seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Sie lernt ___ zwei Wochen für den Test.",
        "answers": [
          "seit",
          "seid",
          "seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ ihr mit der Aufgabe fertig?",
        "answers": [
          "Seid",
          "Seit",
          "Seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "___ dem Unfall trägt er Handschuhe.",
        "answers": [
          "Seit",
          "Seid",
          "Seidt"
        ],
        "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“."
      },
      {
        "prompt": "Ihr ___ jetzt an der Reihe.",
        "answers": [
          "seid",
          "seit",
          "seidt"
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
    "wrongRules": [
      "Nach einem langen Vokal schreibt man immer „ss“.",
      "Jeder s-Laut wird mit „ß“ geschrieben."
    ],
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
    "wrongRules": [
      "Ein langes i schreibt man ausnahmslos mit „ie“.",
      "Die Länge eines Vokals legt jedes Wort ohne Ausnahme eindeutig fest."
    ],
    "rows": [
      {
        "prompt": "Die ___ arbeitet zuverlässig.",
        "answers": [
          "Maschine",
          "Maschiene",
          "Maschihne"
        ],
        "why": "„Maschine“ ist ein Fremdwort mit langem i, aber ohne „ie“."
      },
      {
        "prompt": "Wir ___ die Markierung.",
        "answers": [
          "sehen",
          "seen",
          "sehn"
        ],
        "why": "„Sehen“ schreibt man mit „h“ zwischen den Silben."
      },
      {
        "prompt": "Der ___ beginnt am Montag.",
        "answers": [
          "Dienst",
          "Dinst",
          "Dihnst"
        ],
        "why": "Das lange i in „Dienst“ wird mit „ie“ geschrieben."
      },
      {
        "prompt": "Sie schreibt einen ___.",
        "answers": [
          "Brief",
          "Brif",
          "Brihf"
        ],
        "why": "Das lange i in „Brief“ wird mit „ie“ geschrieben."
      },
      {
        "prompt": "Ich ___ das Werkzeug aus.",
        "answers": [
          "leihe",
          "leie",
          "leihhe"
        ],
        "why": "Die Form „leihe“ gehört zum Wortstamm „leih-“."
      },
      {
        "prompt": "Der ___ hält vor der Schule.",
        "answers": [
          "Wagen",
          "Waagen",
          "Wahgen"
        ],
        "why": "„Wagen“ hat ein langes a, aber kein Dehnungs-h."
      },
      {
        "prompt": "Die ___ steht in der Küche.",
        "answers": [
          "Waage",
          "Wage",
          "Wahge"
        ],
        "why": "Das Messgerät „Waage“ wird mit „aa“ geschrieben."
      },
      {
        "prompt": "Er ___ seinen Namen.",
        "answers": [
          "schreibt",
          "schriebt",
          "schreihbt"
        ],
        "why": "„Schreibt“ gehört zu „schreiben“ und wird mit „ei“ geschrieben."
      },
      {
        "prompt": "Die Fahrt dauert eine ___.",
        "answers": [
          "Stunde",
          "Stuhnde",
          "Stuunde"
        ],
        "why": "In „Stunde“ wird das u kurz gesprochen und nicht gedehnt."
      },
      {
        "prompt": "Das ___ ist stabil.",
        "answers": [
          "Rohr",
          "Ror",
          "Roor"
        ],
        "why": "„Rohr“ schreibt man mit Dehnungs-h."
      },
      {
        "prompt": "Ich ___ dir die Anleitung.",
        "answers": [
          "gebe",
          "gehbe",
          "geebe"
        ],
        "why": "„Gebe“ hat ein langes e ohne Dehnungs-h oder Doppelvokal."
      },
      {
        "prompt": "Wir ___ das Ergebnis.",
        "answers": [
          "prüfen",
          "prüüfen",
          "prühen"
        ],
        "why": "Das lange ü in „prüfen“ wird nicht durch einen zusätzlichen Buchstaben gedehnt."
      },
      {
        "prompt": "Das ___ ist fertig.",
        "answers": [
          "Ziel",
          "Zil",
          "Ziehl"
        ],
        "why": "Das lange i in „Ziel“ wird mit „ie“ geschrieben."
      },
      {
        "prompt": "Die ___ führt durch den Ort.",
        "answers": [
          "Bahn",
          "Ban",
          "Baahn"
        ],
        "why": "„Bahn“ schreibt man mit Dehnungs-h."
      },
      {
        "prompt": "Ich ___ gern zu.",
        "answers": [
          "höre",
          "hööhre",
          "höhre"
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
    "wrongRules": [
      "Nach jedem langen Vokal wird der nächste Konsonant verdoppelt.",
      "Doppelte Konsonanten zeigen immer einen langen Vokal an."
    ],
    "rows": [
      {
        "prompt": "Ich ___ dir den Stift.",
        "answers": [
          "gebe",
          "gebbe",
          "gehbe"
        ],
        "why": "„Gebe“ hat einen langen betonten Vokal und keinen Doppelkonsonanten."
      },
      {
        "prompt": "Die ___ steht offen.",
        "answers": [
          "Halle",
          "Hale",
          "Hahlle"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Wir ___ gemeinsam.",
        "answers": [
          "kommen",
          "komen",
          "kohmmen"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Ich brauche einen ___.",
        "answers": [
          "Hammer",
          "Hamer",
          "Hahmmer"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Die ___ ist neu.",
        "answers": [
          "Kette",
          "Kete",
          "Kehte"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Wir ___ die Leitung.",
        "answers": [
          "trennen",
          "trenen",
          "trehnen"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Das ___ ist sauber.",
        "answers": [
          "Bett",
          "Bet",
          "Beht"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Er ___ das Heft.",
        "answers": [
          "öffnet",
          "öfnet",
          "öffhnet"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Die ___ liegt im Keller.",
        "answers": [
          "Kiste",
          "Kisste",
          "Kihste"
        ],
        "why": "„Kiste“ enthält schon zwei verschiedene Konsonanten nach dem kurzen i."
      },
      {
        "prompt": "Der ___ ist leer.",
        "answers": [
          "Teller",
          "Teler",
          "Tehler"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Sie ___ auf den Bus.",
        "answers": [
          "warten",
          "wartten",
          "wahrtten"
        ],
        "why": "In „warten“ stehen bereits verschiedene Konsonanten; das t wird nicht verdoppelt."
      },
      {
        "prompt": "Wir ___ die Teile.",
        "answers": [
          "sammeln",
          "sameln",
          "sahmmeln"
        ],
        "why": "Nach einem betonten kurzen Vokal folgen häufig zwei Konsonanten. Wortstämme und verwandte Wörter helfen beim Prüfen."
      },
      {
        "prompt": "Die ___ läuft langsam.",
        "answers": [
          "Pumpe",
          "Pummpe",
          "Puhmpe"
        ],
        "why": "In „Pumpe“ stehen bereits m und p nach dem kurzen u."
      },
      {
        "prompt": "Ich ___ mein Heft.",
        "answers": [
          "nehme",
          "nemme",
          "nehmme"
        ],
        "why": "„Nehme“ gehört zum Stamm „nehm-“ und hat einen langen Vokal."
      },
      {
        "prompt": "Die ___ ist hell.",
        "answers": [
          "Sonne",
          "Sone",
          "Sohnne"
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
    "wrongRules": [
      "Zwei Verben werden in jeder Verbindung zusammengeschrieben.",
      "Jede Verbindung aus Nomen wird als zwei einzelne Wörter geschrieben."
    ],
    "rows": [
      {
        "prompt": "Morgen wollen wir ___.",
        "answers": [
          "spazieren gehen",
          "spazierengehen",
          "spazieren Gehen"
        ],
        "why": "Die Verbindung aus zwei Verben wird hier getrennt geschrieben."
      },
      {
        "prompt": "Ich möchte heute ___.",
        "answers": [
          "schwimmen lernen",
          "schwimmenlernen",
          "schwimmen Lernen"
        ],
        "why": "„Schwimmen“ und „lernen“ werden hier getrennt geschrieben."
      },
      {
        "prompt": "Wir müssen noch ___.",
        "answers": [
          "einkaufen gehen",
          "einkaufengehen",
          "einkaufen Gehen"
        ],
        "why": "Die beiden Verben werden hier getrennt geschrieben."
      },
      {
        "prompt": "Sie bleibt auf dem Stuhl ___.",
        "answers": [
          "sitzen",
          "Sitzen",
          "sitz en"
        ],
        "why": "Das Verb wird hier als ein Wort kleingeschrieben."
      },
      {
        "prompt": "Lege das Heft in die ___.",
        "answers": [
          "Schultasche",
          "Schul Tasche",
          "Schul tasche"
        ],
        "why": "Das zusammengesetzte Nomen wird zusammengeschrieben."
      },
      {
        "prompt": "Ich trage feste ___.",
        "answers": [
          "Arbeitsschuhe",
          "Arbeits Schuhe",
          "Arbeits schuhe"
        ],
        "why": "Die Nomenverbindung „Arbeitsschuhe“ bildet ein Wort."
      },
      {
        "prompt": "Wir müssen das Licht ___.",
        "answers": [
          "einschalten",
          "ein schalten",
          "ein Schalten"
        ],
        "why": "Die Grundform des trennbaren Verbs lautet „einschalten“."
      },
      {
        "prompt": "Du sollst die Tür ___.",
        "answers": [
          "zumachen",
          "zu machen",
          "zu Machen"
        ],
        "why": "„Zumachen“ ist hier ein trennbares Verb in der Grundform."
      },
      {
        "prompt": "Ich benutze einen ___.",
        "answers": [
          "Schraubenzieher",
          "Schrauben Zieher",
          "Schrauben zieher"
        ],
        "why": "Das zusammengesetzte Nomen wird als ein Wort geschrieben."
      },
      {
        "prompt": "Wir möchten zusammen ___.",
        "answers": [
          "Rad fahren",
          "radfahren",
          "Radfahren"
        ],
        "why": "Die Verbindung „Rad fahren“ wird in dieser Verwendung getrennt geschrieben."
      },
      {
        "prompt": "Sie möchte heute ___.",
        "answers": [
          "Klavier spielen",
          "klavierspielen",
          "Klavierspielen"
        ],
        "why": "In dieser Verbverbindung bleibt das Nomen „Klavier“ selbstständig."
      },
      {
        "prompt": "Du musst zuerst ___.",
        "answers": [
          "aufräumen",
          "auf räumen",
          "Aufräumen"
        ],
        "why": "Der Infinitiv des trennbaren Verbs lautet „aufräumen“."
      },
      {
        "prompt": "Wir wollen noch ___.",
        "answers": [
          "lesen üben",
          "lesenüben",
          "lesen Üben"
        ],
        "why": "Die beiden Verben werden hier getrennt geschrieben."
      },
      {
        "prompt": "Die ___ ist abgeschlossen.",
        "answers": [
          "Berufsausbildung",
          "Berufs Ausbildung",
          "Berufs ausbildung"
        ],
        "why": "Das zusammengesetzte Nomen bildet ein Wort."
      },
      {
        "prompt": "Ich benutze die ___.",
        "answers": [
          "Schutzbrille",
          "Schutz Brille",
          "Schutz brille"
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
    "wrongRules": [
      "Vor jedem Verb muss ein Komma stehen.",
      "Zwischen Hauptsatz und Nebensatz ist ein Komma immer freiwillig."
    ],
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
    "wrongRules": [
      "Vor jedem „und“ muss ein Komma stehen.",
      "In einer Aufzählung darf kein Komma stehen."
    ],
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
    "wrongRules": [
      "Vor der direkten Rede steht nach dem Begleitsatz immer ein Komma statt eines Doppelpunkts.",
      "Der Schlusspunkt der direkten Rede steht grundsätzlich erst hinter dem schließenden Anführungszeichen."
    ],
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
    "wrongRules": [
      "Jedes Wort, das eine Handlung beschreibt, ist ein Nomen.",
      "Die Wortart lässt sich immer allein an der Wortlänge erkennen."
    ],
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
    "wrongRules": [
      "Eine Zeitangabe wie „morgen“ macht jede Verbform automatisch zum Futur.",
      "Das Perfekt besteht immer nur aus einem einzigen Verbwort."
    ],
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
    "wrongRules": [
      "Das erste Wort im Satz ist ohne Ausnahme das Subjekt.",
      "Ein Prädikat kann grundsätzlich nur ein Wort lang sein."
    ],
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
    "wrongRules": [
      "Jede Wortgruppe mit „dem“ steht im Akkusativ.",
      "Der Fall hängt allein davon ab, ob die Wortgruppe am Satzanfang steht."
    ],
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
    "wrongRules": [
      "Ein Pronomen bezieht sich immer auf das letzte Wort, unabhängig von dessen Bedeutung.",
      "Alle Nomen können in jedem Satz nur durch „es“ ersetzt werden."
    ],
    "rows": [
      {
        "prompt": "Mia kommt später. ___ hat den Bus verpasst.",
        "answers": [
          "Sie",
          "Er",
          "Es"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Ali ist heute krank. ___ bleibt zu Hause.",
        "answers": [
          "Er",
          "Sie",
          "Es"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Das Heft liegt hier. ___ gehört mir.",
        "answers": [
          "Es",
          "Er",
          "Sie"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Die Werkzeuge sind sauber. ___ liegen im Schrank.",
        "answers": [
          "Sie",
          "Es",
          "Er"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Ben und ich arbeiten zusammen. ___ sind ein Team.",
        "answers": [
          "Wir",
          "Ihr",
          "Sie"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Lena, kommst ___ morgen mit?",
        "answers": [
          "du",
          "ich",
          "wir"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Die Maschine ist laut. ___ läuft seit acht Uhr.",
        "answers": [
          "Sie",
          "Er",
          "Es"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Der Ordner ist voll. ___ steht im Regal.",
        "answers": [
          "Er",
          "Es",
          "Sie"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Das Paket ist schwer. ___ wiegt zehn Kilogramm.",
        "answers": [
          "Es",
          "Er",
          "Wir"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Mia und Ali, ___ seid als Nächste dran.",
        "answers": [
          "ihr",
          "wir",
          "er"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Ich suche den Schlüssel. Hast du ___ gesehen?",
        "answers": [
          "ihn",
          "sie",
          "es"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Ich brauche das Lineal. Gibst du ___ mir?",
        "answers": [
          "es",
          "ihn",
          "ihnen"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Die Kollegin kommt. Ich begrüße ___.",
        "answers": [
          "sie",
          "ihn",
          "es"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
      },
      {
        "prompt": "Die Schüler warten. Ich helfe ___.",
        "answers": [
          "ihnen",
          "ihn",
          "es"
        ],
        "why": "Pronomen können Nomen ersetzen. Ihr Bezug muss klar sein; Person, Zahl und gegebenenfalls Geschlecht müssen passen."
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
    "wrongRules": [
      "Ein Synonym muss immer das genaue Gegenteil ausdrücken.",
      "Ähnlich klingende Wörter haben unabhängig vom Kontext dieselbe Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Welches Wort passt statt „beginnen“ in „Wir beginnen mit der Arbeit“?",
        "answers": [
          "starten",
          "beenden",
          "vergessen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „rasch“ in „Er arbeitet rasch“?",
        "answers": [
          "schnell",
          "langsam",
          "selten"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „kontrollieren“ in „Wir kontrollieren die Maße“?",
        "answers": [
          "prüfen",
          "verstecken",
          "vergrößern"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Was bedeutet „erforderlich“ in „Ein Helm ist erforderlich“?",
        "answers": [
          "notwendig",
          "verboten",
          "zufällig"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „defekt“ in „Das Gerät ist defekt“?",
        "answers": [
          "kaputt",
          "neu",
          "sicher"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort bedeutet hier ähnlich wie „erhalten“: „Sie hat das Paket erhalten“?",
        "answers": [
          "bekommen",
          "verschickt",
          "verloren"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Was bedeutet „pünktlich“ in „Er erscheint pünktlich“?",
        "answers": [
          "zur vereinbarten Zeit",
          "viel zu spät",
          "ohne Anmeldung"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „informieren“ in „Wir informieren die Klasse“?",
        "answers": [
          "benachrichtigen",
          "verwirren",
          "übersehen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Was bedeutet „geeignet“ in „Dieses Werkzeug ist geeignet“?",
        "answers": [
          "passend",
          "unbrauchbar",
          "schmutzig"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „zuverlässig“ in „Die Kollegin ist zuverlässig“?",
        "answers": [
          "verlässlich",
          "unaufmerksam",
          "unbekannt"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Was bedeutet „sorgfältig“ in „Sie prüft sorgfältig“?",
        "answers": [
          "genau und gewissenhaft",
          "nur ungefähr",
          "besonders selten"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „ablehnen“ in „Er lehnt den Vorschlag ab“?",
        "answers": [
          "zurückweisen",
          "annehmen",
          "ausführen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Was bedeutet „vereinbaren“ in „Wir vereinbaren einen Termin“?",
        "answers": [
          "gemeinsam festlegen",
          "heimlich ändern",
          "ersatzlos streichen"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Welches Wort passt statt „vermindern“ in „Wir vermindern den Lärm“?",
        "answers": [
          "verringern",
          "vergrößern",
          "ignorieren"
        ],
        "why": "Ein Synonym hat im jeweiligen Zusammenhang eine gleiche oder ähnliche Bedeutung. Der Satzkontext entscheidet."
      },
      {
        "prompt": "Was bedeutet „beheben“ in „Sie behebt den Fehler“?",
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
    "wrongRules": [
      "Wörter mit demselben Anfangsbuchstaben sind immer Gegensätze.",
      "Ein Gegenteil hat dieselbe Bedeutung wie das gesuchte Wort."
    ],
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
        "prompt": "Welches Wort bedeutet das Gegenteil von „pünktlich“ beim Arbeitsbeginn?",
        "answers": [
          "verspätet",
          "frühzeitig",
          "vorbereitet"
        ],
        "why": "Ein Gegensatz passt zum gemeinten Bedeutungsbereich. Ein ähnlicher Klang allein reicht nicht aus."
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
    "wrongRules": [
      "„Weil“ bezeichnet immer einen Gegensatz.",
      "Jedes Verbindungswort kann ohne Bedeutungsänderung ersetzt werden."
    ],
    "rows": [
      {
        "prompt": "Ich bleibe zu Hause, ___ ich krank bin.",
        "answers": [
          "weil",
          "obwohl",
          "damit"
        ],
        "why": "„Weil“ leitet den Grund für das Zuhausebleiben ein."
      },
      {
        "prompt": "Ich ziehe eine Jacke an, ___ es kalt ist.",
        "answers": [
          "weil",
          "damit",
          "falls nicht"
        ],
        "why": "Die Kälte ist der Grund für das Anziehen der Jacke."
      },
      {
        "prompt": "___ es regnet, gehe ich ohne Schirm hinaus.",
        "answers": [
          "Obwohl",
          "Damit",
          "Weil"
        ],
        "why": "„Obwohl“ kennzeichnet hier den Gegensatz zwischen Regen und Verhalten."
      },
      {
        "prompt": "Ich übe, ___ ich sicherer werde.",
        "answers": [
          "damit",
          "obwohl",
          "während"
        ],
        "why": "„Damit“ nennt den Zweck des Übens."
      },
      {
        "prompt": "___ du Hilfe brauchst, frage nach.",
        "answers": [
          "Wenn",
          "Obwohl",
          "Damit"
        ],
        "why": "„Wenn“ nennt hier eine Bedingung."
      },
      {
        "prompt": "Ich räume auf, ___ ich nach Hause gehe.",
        "answers": [
          "bevor",
          "damit",
          "obwohl"
        ],
        "why": "„Bevor“ ordnet das Aufräumen zeitlich vor dem Heimgehen ein."
      },
      {
        "prompt": "___ die Maschine stillsteht, dürfen wir sie reinigen.",
        "answers": [
          "Erst wenn",
          "Obwohl",
          "Damit"
        ],
        "why": "„Erst wenn“ macht den Stillstand zur Voraussetzung."
      },
      {
        "prompt": "Ich trage eine Brille, ___ meine Augen geschützt sind.",
        "answers": [
          "damit",
          "obwohl",
          "während"
        ],
        "why": "Der Schutz der Augen ist hier der Zweck."
      },
      {
        "prompt": "Er ist müde, ___ er wenig geschlafen hat.",
        "answers": [
          "weil",
          "damit",
          "obwohl"
        ],
        "why": "Der wenige Schlaf ist der Grund für die Müdigkeit."
      },
      {
        "prompt": "___ ich die Anleitung lese, macht Ali Notizen.",
        "answers": [
          "Während",
          "Damit",
          "Obwohl nicht"
        ],
        "why": "„Während“ verbindet hier gleichzeitig stattfindende Handlungen."
      },
      {
        "prompt": "Wir warten, ___ der Lack trocken ist.",
        "answers": [
          "bis",
          "obwohl",
          "weil nicht"
        ],
        "why": "„Bis“ bezeichnet den Endpunkt des Wartens."
      },
      {
        "prompt": "Ich habe angerufen, ___ niemand war erreichbar.",
        "answers": [
          "aber",
          "denn",
          "also"
        ],
        "why": "„Aber“ stellt dem Anruf den fehlenden Erfolg gegenüber."
      },
      {
        "prompt": "Es ist glatt. ___ fahren wir langsam.",
        "answers": [
          "Deshalb",
          "Trotzdem",
          "Stattdessen"
        ],
        "why": "Das langsame Fahren wird als Folge der Glätte erklärt."
      },
      {
        "prompt": "Sie übt regelmäßig. ___ macht sie noch Fehler.",
        "answers": [
          "Trotzdem",
          "Deshalb",
          "Danach erst"
        ],
        "why": "„Trotzdem“ hebt einen Gegensatz zur erwarteten Folge hervor."
      },
      {
        "prompt": "Wir kontrollieren die Maße, ___ wir das Teil zuschneiden.",
        "answers": [
          "bevor",
          "damit",
          "obwohl"
        ],
        "why": "Die Kontrolle soll zeitlich vor dem Zuschneiden stattfinden."
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
    "wrongRules": [
      "Ein deutscher Aussagesatz muss immer mit dem Subjekt beginnen.",
      "Nach „weil“ bleibt das finite Verb grundsätzlich an zweiter Position."
    ],
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
    "wrongRules": [
      "Eine Bitte wird durch Beleidigungen besonders eindeutig.",
      "Eine Rückfrage muss immer die gesamte Aufgabe ablehnen."
    ],
    "rows": [
      {
        "prompt": "Du brauchst einen Stift. Welcher Satz formuliert eine höfliche Bitte?",
        "answers": [
          "Kannst du mir bitte einen Stift leihen?",
          "Gib sofort deinen Stift her!",
          "Dein Stift gehört jetzt mir."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du hast den Arbeitsauftrag nicht verstanden. Welche Rückfrage nennt das Problem genau?",
        "answers": [
          "Soll ich nur die Länge oder auch die Breite messen?",
          "Das ist doch alles sinnlos!",
          "Ich mache grundsätzlich nichts."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du möchtest die Uhrzeit eines Termins wissen. Welche Frage passt?",
        "answers": [
          "Um wie viel Uhr beginnt unser Termin?",
          "Warum ist immer alles schlecht?",
          "Hast du überhaupt eine Uhr?"
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du möchtest einen Kunden kurz warten lassen. Welche Formulierung ist höflich und klar?",
        "answers": [
          "Bitte warten Sie einen Moment. Ich frage nach.",
          "Warten Sie gefälligst!",
          "Ich sage einfach nichts."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du brauchst eine Wiederholung. Welche Bitte ist respektvoll?",
        "answers": [
          "Könnten Sie den letzten Satz bitte wiederholen?",
          "Reden Sie endlich verständlich!",
          "Das interessiert mich nicht."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du möchtest einen Raum betreten. Welche Bitte passt?",
        "answers": [
          "Darf ich bitte kurz hereinkommen?",
          "Ich darf hier alles!",
          "Gehen Sie sofort raus!"
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du brauchst Hilfe beim Tragen. Welcher Satz ist eine höfliche Bitte?",
        "answers": [
          "Hilfst du mir bitte mit der schweren Kiste?",
          "Du musst jetzt meine Arbeit machen!",
          "Du bist sowieso zu langsam."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du hast eine Mengenangabe nicht verstanden. Welche Rückfrage ist konkret?",
        "answers": [
          "Meinen Sie fünf einzelne Teile oder fünf Packungen?",
          "Warum reden Sie überhaupt?",
          "Ich rate einfach irgendeine Zahl."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du kannst einen Termin nicht halten. Welche Nachricht enthält eine höfliche Bitte um Ersatz?",
        "answers": [
          "Könnten wir bitte einen neuen Termin vereinbaren?",
          "Ich komme nicht, ist mir egal.",
          "Sie warten einfach, bis ich Zeit habe."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du brauchst mehr Zeit für eine Aufgabe. Welche Bitte ist klar und respektvoll?",
        "answers": [
          "Kann ich bitte noch fünf Minuten weiterarbeiten?",
          "Sie müssen warten, bis ich fertig bin!",
          "Alle Aufgaben sind unnötig."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du willst eine Kollegin ausreden lassen. Welche Antwort zeigt das?",
        "answers": [
          "Bitte erzähle erst zu Ende. Danach frage ich nach.",
          "Jetzt rede nur noch ich!",
          "Deine Meinung zählt nicht."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du suchst die zuständige Person. Welche Frage hilft sachlich weiter?",
        "answers": [
          "Wer ist für diese Bestellung zuständig?",
          "Warum weiß hier niemand etwas?",
          "Ist mir doch egal, wer das macht."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du willst eine Notiz überprüfen. Welche Rückfrage ist eindeutig?",
        "answers": [
          "Habe ich richtig notiert, dass wir uns um 9 Uhr treffen?",
          "Sie haben bestimmt alles falsch gesagt!",
          "Ich schreibe einfach nichts auf."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du willst einen Fehler ansprechen. Welche Frage bleibt sachlich?",
        "answers": [
          "Können wir diese Maßangabe bitte gemeinsam prüfen?",
          "Du rechnest immer alles falsch!",
          "Mit dir kann man nie arbeiten."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
      },
      {
        "prompt": "Du möchtest eine Anleitung erhalten. Welcher Satz ist eine höfliche Bitte?",
        "answers": [
          "Könnten Sie mir bitte die Anleitung schicken?",
          "Schicken Sie das sofort, sonst gibt es Ärger!",
          "Ihre Anleitung ist bestimmt schlecht."
        ],
        "why": "Eine höfliche Bitte nennt das Anliegen klar und lässt dem Gegenüber Raum zu antworten. Bei Unklarheiten fragt man gezielt nach."
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
    "wrongRules": [
      "Eine persönliche Abwertung ersetzt eine konkrete Beobachtung.",
      "Gutes Feedback muss immer behaupten, dass jemand „nie“ etwas richtig macht."
    ],
    "rows": [
      {
        "prompt": "Welche Rückmeldung beschreibt ein konkretes Verhalten statt die Person abzuwerten?",
        "answers": [
          "Du hast mich gerade zweimal unterbrochen.",
          "Du bist grundsätzlich respektlos.",
          "Du kannst einfach gar nichts."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Aussage enthält eine Ich-Botschaft mit einem Wunsch?",
        "answers": [
          "Ich kann mich bei dem Lärm schwer konzentrieren. Bitte sprecht leiser.",
          "Ihr seid alle unerträglich.",
          "Hier ist sowieso alles falsch."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Rückmeldung nennt eine überprüfbare Beobachtung?",
        "answers": [
          "In der Tabelle fehlen zwei Einheiten.",
          "Deine Arbeit ist immer schlecht.",
          "Du gibst dir niemals Mühe."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Was gehört zum aktiven Zuhören?",
        "answers": [
          "Den Inhalt mit eigenen Worten zusammenfassen und nachfragen.",
          "Währenddessen andere Nachrichten schreiben.",
          "Die andere Person ständig unterbrechen."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Antwort prüft, ob du richtig verstanden hast?",
        "answers": [
          "Meinst du, dass wir zuerst die Maße kontrollieren sollen?",
          "Du meinst bestimmt etwas Unsinniges.",
          "Ich höre lieber gar nicht zu."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Gesprächsregel hilft allen, zu Wort zu kommen?",
        "answers": [
          "Wir lassen einander ausreden.",
          "Wer am lautesten spricht, entscheidet alles.",
          "Nur eine Person darf immer reden."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Rückmeldung nennt einen konkreten Verbesserungsvorschlag?",
        "answers": [
          "Schreibe bitte noch die Einheit hinter das Ergebnis.",
          "Du bist einfach schlecht in Mathe.",
          "Du wirst das nie lernen."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Formulierung trennt Beobachtung und Vermutung?",
        "answers": [
          "Du warst heute zehn Minuten später da; den Grund kenne ich nicht.",
          "Du bist zu spät, weil dir alles egal ist.",
          "Du kommst immer absichtlich zu spät."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Rückmeldung bezieht sich auf die Aufgabe?",
        "answers": [
          "Deine Reihenfolge ist klar; beim letzten Schritt fehlt eine Erklärung.",
          "Du bist komisch.",
          "Deine Kleidung gefällt mir nicht."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Wie kannst du auf berechtigte Kritik konstruktiv reagieren?",
        "answers": [
          "Ich prüfe den genannten Punkt und verbessere ihn gegebenenfalls.",
          "Ich beleidige die Person.",
          "Ich höre unabhängig vom Inhalt nicht zu."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Aussage enthält einen umsetzbaren Wunsch?",
        "answers": [
          "Bitte lege benutzte Werkzeuge nach der Arbeit zurück.",
          "Sei endlich ein anderer Mensch!",
          "Mach nie wieder irgendetwas falsch!"
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Aussage vermeidet eine unbelegte Verallgemeinerung?",
        "answers": [
          "Bei den letzten zwei Aufgaben fehlte dein Rechenweg.",
          "Du zeigst nie einen Rechenweg.",
          "Du kannst grundsätzlich nicht rechnen."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Antwort ist eine sachliche Rückfrage zu Kritik?",
        "answers": [
          "An welcher Stelle fehlt dir eine Erklärung?",
          "Warum bist du immer gegen mich?",
          "Du hast sowieso keine Ahnung."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Was hilft bei einer Meinungsverschiedenheit?",
        "answers": [
          "Begründungen anhören und beim Thema bleiben.",
          "Persönliche Beleidigungen sammeln.",
          "Jede abweichende Meinung verbieten."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
      },
      {
        "prompt": "Welche Rückmeldung nennt eine Stärke konkret?",
        "answers": [
          "Deine beschriftete Skizze macht die Maße gut erkennbar.",
          "Du bist halt irgendwie gut.",
          "Das war nicht völlig schlimm."
        ],
        "why": "Hilfreiches Feedback beschreibt eine konkrete Beobachtung, vermeidet persönliche Abwertungen und nennt bei Bedarf einen umsetzbaren Wunsch."
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
    "wrongRules": [
      "Ein Betreff darf niemals das Anliegen nennen.",
      "Eine formelle E-Mail kommt immer ohne Anrede und Absender aus."
    ],
    "rows": [
      {
        "prompt": "Welcher Betreff nennt das Anliegen einer Terminverschiebung konkret?",
        "answers": [
          "Bitte um Verschiebung des Termins am 8. Mai",
          "Hallo!!!",
          "Ganz wichtig!!!"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Anrede ist für eine formelle erste Nachricht an Frau Weber passend?",
        "answers": [
          "Sehr geehrte Frau Weber,",
          "Hey Weber!",
          "Na du!"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Grußformel passt zu einer formellen E-Mail?",
        "answers": [
          "Mit freundlichen Grüßen",
          "Bis denne, Alter!",
          "Ciao, du nervst!"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Was ist ein sinnvoller erster Satz bei einer schriftlichen Bewerbung?",
        "answers": [
          "Hiermit bewerbe ich mich um den ausgeschriebenen Ausbildungsplatz.",
          "Was geht bei euch?",
          "Ich schreibe einfach irgendwas."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Nachricht nennt eine konkrete Bitte um eine Auskunft?",
        "answers": [
          "Bitte teilen Sie mir den Beginn des Praktikums mit.",
          "Schreiben Sie mir mal etwas!",
          "Sie wissen schon, was ich will."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Was sollte eine Krankmeldung an den Betrieb klar nennen?",
        "answers": [
          "Dass man krankheitsbedingt fehlt und wie lange voraussichtlich.",
          "Passwörter anderer Beschäftigter.",
          "Private Gerüchte über Kollegen."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welcher Satz informiert klar über einen Anhang?",
        "answers": [
          "Im Anhang finden Sie meinen Lebenslauf.",
          "Irgendwo müsste etwas sein.",
          "Sie brauchen gar nichts anzusehen."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Wie gehst du vor dem Versand mit einem angekündigten Anhang um?",
        "answers": [
          "Ich prüfe, ob die richtige Datei tatsächlich angehängt ist.",
          "Ich verlasse mich nur auf die Formulierung im Text.",
          "Ich hänge absichtlich eine leere Datei an."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Formulierung ist sachlich für eine Reklamation?",
        "answers": [
          "Bei der Lieferung fehlen zwei bestellte Teile.",
          "Ihr macht sowieso nie etwas richtig!",
          "Ihr seid alle unfähig!"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Angabe hilft dem Betrieb, auf eine Anfrage zu antworten?",
        "answers": [
          "Eine erreichbare Kontaktadresse und das konkrete Anliegen.",
          "Nur ein einzelnes Fragezeichen.",
          "Ein fremdes Passwort."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Formulierung bittet um eine Empfangsbestätigung?",
        "answers": [
          "Bitte bestätigen Sie kurz den Erhalt der Unterlagen.",
          "Ignorieren Sie diese Nachricht!",
          "Löschen Sie meine Bewerbung sofort!"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welche Formulierung nennt den Bezug einer Antwort klar?",
        "answers": [
          "Vielen Dank für Ihre Nachricht vom 6. Mai zur Praktikumsstelle.",
          "Ich antworte auf irgendwas.",
          "Sie wissen schon, worum es geht."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Wie formulierst du eine Entschuldigung für eine verspätete Antwort sachlich?",
        "answers": [
          "Bitte entschuldigen Sie meine verspätete Rückmeldung.",
          "Sie hätten eben warten müssen!",
          "Das geht Sie überhaupt nichts an!"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Welcher Betreff passt zu einer Materialbestellung?",
        "answers": [
          "Bestellung von 20 Schutzbrillen",
          "Irgendein Zeug",
          "Hallihallo"
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
      },
      {
        "prompt": "Was prüfst du bei einer beruflichen Nachricht vor dem Absenden?",
        "answers": [
          "Empfänger, Anliegen, Formulierungen und gegebenenfalls Anhang.",
          "Nur die Farbe des Bildschirms.",
          "Ob möglichst viele Ausrufezeichen enthalten sind."
        ],
        "why": "Eine berufliche Nachricht macht Betreff und Anliegen erkennbar. Anrede, sachlicher Text und Gruß richten sich nach Anlass und Empfänger."
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
    "wrongRules": [
      "Eine Bewerbung wird durch erfundene Abschlüsse automatisch besser.",
      "Im Lebenslauf müssen sachliche Angaben durch persönliche Beleidigungen ersetzt werden."
    ],
    "rows": [
      {
        "prompt": "Welche Angabe gehört in einen Lebenslauf?",
        "answers": [
          "Schulbesuch und bisherige Praktika mit Zeitangaben.",
          "Das Passwort des E-Mail-Kontos.",
          "Ungeprüfte Gerüchte über frühere Mitschüler."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche Aussage belegt Teamfähigkeit mit einem Beispiel?",
        "answers": [
          "Im Praktikum habe ich mit zwei Kollegen Materialbestellungen vorbereitet.",
          "Ich bin einfach immer der Beste.",
          "Alle anderen sind schlecht."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Was solltest du vor einer Bewerbung in der Stellenanzeige prüfen?",
        "answers": [
          "Gesuchten Beruf, Anforderungen und Bewerbungsweg.",
          "Nur die Farbe des Firmenlogos.",
          "Die Anzahl der Buchstaben im Firmennamen."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche E-Mail-Adresse wirkt für eine Bewerbung sachlich?",
        "answers": [
          "vorname.nachname@example.de",
          "chefbeleidiger@example.de",
          "keinebockaufarbeit@example.de"
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche Formulierung nennt eine konkrete Erfahrung?",
        "answers": [
          "In meinem Praktikum habe ich Werkstücke entgratet und Maße geprüft.",
          "Ich kann bestimmt alles.",
          "Ich habe nichts zu sagen."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Wie gehst du mit fehlender Berufserfahrung ehrlich um?",
        "answers": [
          "Ich nenne vorhandene Schul- und Praxiserfahrungen und meine Lernbereitschaft.",
          "Ich erfinde eine langjährige Berufstätigkeit.",
          "Ich trage fremde Praktika als meine eigenen ein."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche Angabe hilft bei der zeitlichen Einordnung eines Praktikums?",
        "answers": [
          "Der Zeitraum und der Name des Betriebs.",
          "Nur das Wort „irgendwann“.",
          "Ein erfundenes Abschlussdatum."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche Frage passt im Vorstellungsgespräch zur Ausbildung?",
        "answers": [
          "Wie ist die Betreuung der Auszubildenden organisiert?",
          "Kann ich grundsätzlich ohne Absprache fehlen?",
          "Muss ich überhaupt etwas lernen?"
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Was gehört zur Vorbereitung eines Vorstellungsgesprächs?",
        "answers": [
          "Informationen über Betrieb und Ausbildungsberuf sammeln.",
          "Bewusst zu spät kommen.",
          "Den Termin ohne Nachricht ignorieren."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche Aussage erklärt das Interesse an einem Metallberuf konkret?",
        "answers": [
          "Mir gefallen genaues Messen und das Bearbeiten von Werkstücken.",
          "Ich finde grundsätzlich alles toll, egal was.",
          "Über den Beruf will ich nichts wissen."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Was ist bei Kontaktangaben wichtig?",
        "answers": [
          "Sie müssen aktuell und erreichbar sein.",
          "Sie sollten absichtlich falsch sein.",
          "Sie müssen die Daten einer anderen Person enthalten."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Wie beschreibst du eine Stärke nachvollziehbar?",
        "answers": [
          "Ich arbeite sorgfältig; im Praktikum kontrollierte ich Maße vor dem Zuschnitt.",
          "Ich mache ausnahmslos nie Fehler.",
          "Ich bin allen anderen grundsätzlich überlegen."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Wie gehst du mit einer Lücke im Lebenslauf um?",
        "answers": [
          "Ich erkläre den Zeitraum wahrheitsgemäß, wenn danach gefragt wird.",
          "Ich erfinde einen Arbeitgeber.",
          "Ich ändere heimlich mein Geburtsdatum."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Welche Unterlagen schickst du auf eine ausdrücklich genannte Anforderung hin?",
        "answers": [
          "Die in der Anzeige verlangten Bewerbungsunterlagen.",
          "Beliebige fremde Zeugnisse.",
          "Die Zugangsdaten zu meinem Konto."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
      },
      {
        "prompt": "Was hilft bei der Zuordnung einer Bewerbung im Betrieb?",
        "answers": [
          "Die genaue Bezeichnung der Stelle und gegebenenfalls die Kennziffer.",
          "Nur der Satz „Ich will einen Job“.",
          "Ein leerer Betreff und eine leere Nachricht."
        ],
        "why": "Bewerbungsunterlagen nennen überprüfbare Qualifikationen und Erfahrungen. Sie passen zur Stelle und enthalten verlässliche Kontaktangaben."
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
    "wrongRules": [
      "Die Reihenfolge der Arbeitsschritte ist grundsätzlich egal.",
      "Eine Anleitung soll wichtige Maße und Bedingungen absichtlich weglassen."
    ],
    "rows": [
      {
        "prompt": "Was muss vor dem Zuschneiden einer Platte geschehen?",
        "answers": [
          "Die benötigten Maße ermitteln und anzeichnen.",
          "Erst zuschneiden und danach die Wunschmaße überlegen.",
          "Die Maße grundsätzlich ignorieren."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welcher Satz beschreibt einen Arbeitsschritt eindeutig?",
        "answers": [
          "Miss mit dem Lineal 8 cm ab und markiere die Stelle.",
          "Mach das Ding irgendwie richtig.",
          "Du weißt schon, was gemeint ist."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welche Angabe gehört zu einer verständlichen Backanleitung?",
        "answers": [
          "Backtemperatur und ungefähre Backdauer.",
          "Nur die Lieblingsfarbe der Person.",
          "Das Passwort des Küchengeräts."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welches Wort leitet in einer Anleitung einen späteren Schritt ein?",
        "answers": [
          "Anschließend",
          "Weil",
          "Obwohl"
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Warum ist die Reihenfolge beim Montieren wichtig?",
        "answers": [
          "Manche Schritte sind Voraussetzung für die folgenden.",
          "Jeder Schritt ist völlig unabhängig von allen anderen.",
          "Eine falsche Reihenfolge verbessert immer das Ergebnis."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welche Formulierung vermeidet einen unklaren Bezug?",
        "answers": [
          "Lege das Lineal neben das Heft.",
          "Lege das da dorthin.",
          "Tu damit irgendwas."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welche Angabe fehlt bei „Erhitze das Wasser“ für eine genaue Durchführung am stärksten?",
        "answers": [
          "Wie viel Wasser und bis zu welcher Temperatur erhitzt werden soll.",
          "Die Farbe der Schuhe.",
          "Der Geburtsort des Verfassers."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Was steht sinnvoll am Anfang einer Vorgangsbeschreibung?",
        "answers": [
          "Ziel und benötigte Materialien.",
          "Ein zufälliger letzter Arbeitsschritt.",
          "Eine persönliche Beleidigung."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welcher Satz verwendet ein genaues Tätigkeitsverb?",
        "answers": [
          "Verschraube die beiden Bleche.",
          "Mach die beiden Bleche.",
          "Tu die beiden Bleche."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Was ist der Unterschied zwischen Material und Tätigkeit?",
        "answers": [
          "Ein Bleistift ist Material; Markieren ist eine Tätigkeit.",
          "Markieren ist ein Werkzeug aus Metall.",
          "Ein Bleistift ist ein Arbeitsschritt."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welche Reihenfolge passt zum Abheften eines gelochten Blatts?",
        "answers": [
          "Ordner öffnen, Blatt einlegen, Bügel schließen.",
          "Bügel schließen, Blatt durchdrücken, Ordner öffnen.",
          "Blatt zerreißen, Ordner schließen, Löcher suchen."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Was verbessert die Verständlichkeit einer Anleitung?",
        "answers": [
          "Jeder Schritt nennt klar, was zu tun ist.",
          "Möglichst viele unbestimmte Wörter wie „Dings“.",
          "Wichtige Schritte ohne Hinweis überspringen."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Welcher Satz beschreibt eine Kontrolle nach dem Messen?",
        "answers": [
          "Prüfe, ob die Markierung genau bei 8 cm liegt.",
          "Vielleicht wird das schon stimmen.",
          "Kontrolle ist immer überflüssig."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Was ist bei Fachbegriffen in einer Anleitung für Anfänger hilfreich?",
        "answers": [
          "Den Begriff kurz am Gegenstand oder an einer Handlung erklären.",
          "Möglichst viele unbekannte Abkürzungen ohne Erklärung verwenden.",
          "Alle Begriffe absichtlich falsch benutzen."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
      },
      {
        "prompt": "Was gehört zum Abschluss eines beschriebenen Arbeitsvorgangs?",
        "answers": [
          "Ergebnis kontrollieren und den Arbeitsplatz nach Vorgabe aufräumen.",
          "Werkzeuge absichtlich verstreuen.",
          "Fehler grundsätzlich verschweigen."
        ],
        "why": "Eine Vorgangsbeschreibung nennt nötige Materialien und klare Schritte in sinnvoller Reihenfolge. Sie verwendet eindeutige Verben und Angaben."
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
    "wrongRules": [
      "Ein sachlicher Bericht braucht vor allem erfundene Spannungsmomente.",
      "Vermutungen sollen ohne Kennzeichnung als bewiesene Tatsachen erscheinen."
    ],
    "rows": [
      {
        "prompt": "Welche Aussage ist eine konkrete Beobachtung für einen Unfallbericht?",
        "answers": [
          "Um 10:15 Uhr fiel die Kiste vom Tisch.",
          "Die Kiste wollte bestimmt Ärger machen.",
          "Es war der schlimmste Tag aller Zeiten."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche W-Frage wird mit „in der Werkstatt“ beantwortet?",
        "answers": [
          "Wo?",
          "Wann?",
          "Wer?"
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche W-Frage wird mit „am Dienstag um 9 Uhr“ beantwortet?",
        "answers": [
          "Wann?",
          "Warum?",
          "Wer?"
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Angabe beantwortet die Frage „Wer war beteiligt?“?",
        "answers": [
          "Mia und der Ausbilder waren anwesend.",
          "Es war ziemlich aufregend.",
          "Die Halle war groß."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Formulierung trennt Wissen und Vermutung?",
        "answers": [
          "Ich sah Wasser auf dem Boden; woher es kam, weiß ich nicht.",
          "Ali hat das Wasser absichtlich verschüttet, obwohl ich es nicht gesehen habe.",
          "Jemand muss immer schuld sein."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Was gehört in eine sachliche Schadensmeldung?",
        "answers": [
          "Welcher Gegenstand wie beschädigt wurde.",
          "Eine erfundene Geschichte über den Schaden.",
          "Nur eine Beleidigung des Herstellers."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Formulierung bleibt sachlich?",
        "answers": [
          "Das Gehäuse hat einen etwa 3 cm langen Riss.",
          "Das Gehäuse ist eine einzige Katastrophe.",
          "Das ist das dümmste Gerät der Welt."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Zeitform wird für einen abgeschlossenen Vorgang in einem schriftlichen Bericht häufig verwendet?",
        "answers": [
          "Präteritum",
          "Futur II als Pflichtform",
          "Ausschließlich Imperativ"
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Reihenfolge passt zu einem Bericht über einen Ablauf?",
        "answers": [
          "Die Ereignisse zeitlich nachvollziehbar ordnen.",
          "Die Ereignisse ohne Zusammenhang mischen.",
          "Nur das unwichtigste Detail nennen."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Was solltest du bei einer unbekannten Ursache tun?",
        "answers": [
          "Die Ursache als ungeklärt benennen.",
          "Eine passende Ursache erfinden.",
          "Eine beliebige Person beschuldigen."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Angabe ist für einen Praktikumsbericht konkret?",
        "answers": [
          "Ich kontrollierte am Mittwoch zehn Werkstücke mit einer Schieblehre.",
          "Ich machte halt irgendwelche Sachen.",
          "Alles war irgendwie so."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Aussage beantwortet „Was geschah?“?",
        "answers": [
          "Ein Karton rutschte vom Regal und fiel zu Boden.",
          "Der Raum war blau gestrichen.",
          "Ich mag keine Kartons."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Was macht eine Mengenangabe überprüfbar?",
        "answers": [
          "Eine genaue Zahl oder als ungefähr gekennzeichnete Schätzung.",
          "Das Wort „unzählbar“ ohne Grundlage.",
          "Eine absichtlich falsche Zahl."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Welche Formulierung kennzeichnet eine fremde Aussage?",
        "answers": [
          "Die Kollegin berichtete, sie habe ein lautes Geräusch gehört.",
          "Ich selbst hörte das Geräusch, obwohl ich nicht dort war.",
          "Geräusche gibt es grundsätzlich nie."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
      },
      {
        "prompt": "Was gehört zur abschließenden Kontrolle eines Berichts?",
        "answers": [
          "Zeitangaben, Reihenfolge und Trennung von Beobachtung und Vermutung prüfen.",
          "Die Fakten durch spannendere Erfindungen ersetzen.",
          "Alle konkreten Angaben löschen."
        ],
        "why": "Ein Bericht nennt überprüfbare Angaben zum Geschehen, etwa Wer, Was, Wann, Wo und Wie. Beobachtungen werden von Vermutungen getrennt."
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
    "wrongRules": [
      "Eine Beleidigung ersetzt in jedem Fall eine sachliche Begründung.",
      "Ein Beispiel muss unabhängig vom Thema sein."
    ],
    "rows": [
      {
        "prompt": "Welche Aussage enthält eine Begründung für regelmäßiges Üben?",
        "answers": [
          "Regelmäßiges Üben hilft, weil sich Rechenwege festigen.",
          "Üben ist gut, weil Üben gut ist.",
          "Wer nicht übt, ist einfach dumm."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Was ist in „Wir sollten Schutzbrillen tragen“ zunächst enthalten?",
        "answers": [
          "Eine Forderung oder Behauptung.",
          "Ein vollständig ausgeführtes Beispiel.",
          "Eine genaue Statistik mit Quelle."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Begründung passt zur Forderung „Wir sollten pünktlich beginnen“?",
        "answers": [
          "Dann bleibt mehr gemeinsame Arbeitszeit.",
          "Meine Lieblingsfarbe ist blau.",
          "Der Tisch ist rechteckig."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welches Beispiel passt zu „Notizen helfen beim Erinnern“?",
        "answers": [
          "Mit der notierten Uhrzeit vergesse ich meinen Termin nicht.",
          "Mein Fahrrad hat zwei Räder.",
          "Gestern war es sonnig."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Aussage ist ein sachliches Gegenargument zu einer längeren Pause?",
        "answers": [
          "Eine längere Pause kann die verfügbare Übungszeit verkürzen.",
          "Wer das vorschlägt, ist doof.",
          "Pausen sind Pausen."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Formulierung kennzeichnet eine persönliche Meinung?",
        "answers": [
          "Ich finde, dass die Erklärung verständlich war.",
          "Das Ergebnis lautet nach Rechnung 24.",
          "Der Termin steht im Plan für 10 Uhr."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Begründung passt zu einer beschrifteten Skizze?",
        "answers": [
          "Die Zuordnung der Maße ist leichter zu erkennen.",
          "Beschriftungen haben immer vier Buchstaben.",
          "Skizzen ersetzen grundsätzlich jede Rechnung."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Was ist eine bloße Wiederholung statt einer echten Begründung?",
        "answers": [
          "Das ist richtig, weil es richtig ist.",
          "Das Teil passt, weil beide Maße übereinstimmen.",
          "Wir sparen Zeit, weil der Weg kürzer ist."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welches Beispiel stützt die Aussage „Teamarbeit kann helfen“?",
        "answers": [
          "Eine Person misst, die andere prüft die notierten Werte.",
          "Niemand übernimmt eine Aufgabe.",
          "Alle reden gleichzeitig über etwas anderes."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Aussage enthält ein nachvollziehbares Kriterium?",
        "answers": [
          "Dieser Weg ist kürzer, weil er zwei Rechenschritte weniger benötigt.",
          "Dieser Weg ist besser, weil ich das sage.",
          "Andere Wege sind automatisch Unsinn."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Was solltest du bei einem Gegenargument tun?",
        "answers": [
          "Den Inhalt prüfen und sachlich darauf eingehen.",
          "Die Person persönlich angreifen.",
          "Jede Antwort verweigern, unabhängig vom Inhalt."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Begründung passt zur Wahl einer überprüfbaren Quelle?",
        "answers": [
          "Ihre Angaben lassen sich an benannten Belegen nachvollziehen.",
          "Die Überschrift ist besonders laut.",
          "Viele Ausrufezeichen ersetzen Belege."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welcher Satz enthält Behauptung und Begründung?",
        "answers": [
          "Wir heften die Blätter ab, damit wir sie später wiederfinden.",
          "Wir heften die Blätter ab.",
          "Die Blätter sind weiß."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Welche Aussage nennt eine mögliche Folge als Argument?",
        "answers": [
          "Ohne Beschriftung können Maße verwechselt werden.",
          "Beschriftung heißt Beschriftung.",
          "Wer Maße verwechselt, zählt nicht."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
      },
      {
        "prompt": "Was macht eine Schlussfolgerung nachvollziehbar?",
        "answers": [
          "Sie knüpft an die zuvor genannten Gründe an.",
          "Sie widerspricht allen eigenen Gründen ohne Erklärung.",
          "Sie führt absichtlich ein ganz anderes Thema ein."
        ],
        "why": "Ein Argument verbindet eine Behauptung mit einer nachvollziehbaren Begründung. Ein passendes Beispiel kann die Begründung veranschaulichen."
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
    "wrongRules": [
      "Bei einer Textfrage muss man fehlende Informationen immer frei erfinden.",
      "Eine Vermutung gilt ohne Textbeleg als wörtliche Textinformation."
    ],
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
          "Ein Hammer.",
          "Ein Fahrrad."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
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
          "Erst nach dem Feierabend.",
          "Grundsätzlich nie."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Bei Fragen wenden Sie sich an Frau Weber.“ Wer ist die Kontaktperson?",
        "answers": [
          "Frau Weber.",
          "Herr Müller.",
          "Eine nicht genannte Busfahrerin."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
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
          "Zwei Stunden Fahrzeit.",
          "Zwei Liter Wasser."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
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
          "Den Ordner schließen."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Die Halle bleibt wegen Wartung geschlossen.“ Was ist der genannte Grund?",
        "answers": [
          "Wartung.",
          "Ein Sportfest.",
          "Ein nicht genanntes Gewitter."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Bitte antworten Sie schriftlich.“ Welche Antwortform wird verlangt?",
        "answers": [
          "Eine schriftliche Antwort.",
          "Nur ein stummer Blick.",
          "Ausschließlich ein Handschlag."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Ein gültiger Ausweis ist mitzubringen.“ Was ist ausdrücklich gefordert?",
        "answers": [
          "Ein gültiger Ausweis.",
          "Ein beliebiger alter Kassenzettel.",
          "Die PIN einer Bankkarte."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Das Training dauert 90 Minuten.“ Welche Information fehlt im Satz?",
        "answers": [
          "Die Startzeit.",
          "Die Dauer.",
          "Die Einheit der Dauer."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
      },
      {
        "prompt": "„Die Firma sucht zwei Auszubildende.“ Was lässt sich sicher sagen?",
        "answers": [
          "Es sind zwei Ausbildungsplätze ausgeschrieben.",
          "Die Firma hat insgesamt nur zwei Beschäftigte.",
          "Das Gehalt beträgt zwei Euro."
        ],
        "why": "Antworten auf Sachtexte stützen sich auf die Angaben im Text. Nicht genannte Einzelheiten darf man nicht als sichere Information ergänzen."
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
    "wrongRules": [
      "Viele Weiterleitungen beweisen automatisch, dass eine Aussage stimmt.",
      "Eine Quelle wird allein durch eine auffällige Überschrift zuverlässig."
    ],
    "rows": [
      {
        "prompt": "Eine Nachricht nennt keine Quelle. Was hilft vor dem Weiterleiten?",
        "answers": [
          "Die Aussage anhand nachvollziehbarer Quellen prüfen.",
          "Sie sofort als bewiesen weiterleiten.",
          "Nur die Anzahl der Emojis zählen."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Welche Angabe hilft, die Aktualität einer Information einzuschätzen?",
        "answers": [
          "Das Veröffentlichungs- oder Aktualisierungsdatum.",
          "Die Hintergrundfarbe.",
          "Die Schriftgröße allein."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was bezeichnet der Urheber einer Information?",
        "answers": [
          "Die Person oder Stelle, die den Inhalt veröffentlicht oder erstellt hat.",
          "Die Person, die ihn zufällig zuletzt liest.",
          "Die Farbe der Überschrift."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Welche Aussage ist eine Werbung und keine unabhängige Bewertung?",
        "answers": [
          "Kaufen Sie jetzt unser Produkt, nur heute im Angebot!",
          "Die Messung ergab 8 cm Länge.",
          "Der Bus fährt laut Fahrplan um 9 Uhr."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was ist ein Beleg für eine Behauptung?",
        "answers": [
          "Eine überprüfbare Quelle oder nachvollziehbare Untersuchung.",
          "Nur besonders viele Ausrufezeichen.",
          "Die Aussage „Das weiß doch jeder“."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Ein Bild ist echt, wurde aber vor Jahren an einem anderen Ort aufgenommen. Was ist zu prüfen?",
        "answers": [
          "Ob der Bildkontext zur aktuellen Behauptung passt.",
          "Ob jedes alte Bild grundsätzlich gefälscht ist.",
          "Ob eine hohe Auflösung jede Behauptung beweist."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Welche Information hilft bei der Bewertung einer Quelle?",
        "answers": [
          "Wer sie herausgibt und welche Interessen die Stelle haben kann.",
          "Nur ob die Seite bunt ist.",
          "Nur ob die Überschrift kurz ist."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was solltest du bei einem auffälligen Zitat prüfen?",
        "answers": [
          "Ob es in einer nachvollziehbaren Originalquelle so steht.",
          "Ob es möglichst oft geteilt wurde.",
          "Ob die Schrift kursiv gedruckt ist."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Welche Aussage unterscheidet Meinung und belegbare Tatsache?",
        "answers": [
          "„Ich finde den Film gut“ ist eine Bewertung.",
          "Jede persönliche Bewertung ist automatisch eine Messung.",
          "Jede Zahl ist automatisch eine Meinung."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Warum kann ein Datum bei einer Stellenanzeige wichtig sein?",
        "answers": [
          "Die Bewerbungsfrist oder der Bedarf könnte nicht mehr aktuell sein.",
          "Ältere Anzeigen sind immer erfunden.",
          "Ein Datum bestimmt automatisch die Bezahlung."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was hilft beim Vergleich widersprüchlicher Meldungen?",
        "answers": [
          "Originalquellen und konkrete Belege vergleichen.",
          "Die lauteste Überschrift auswählen.",
          "Alle Meldungen ohne Prüfung gleichsetzen."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was ist beim Veröffentlichen fremder Fotos zu beachten?",
        "answers": [
          "Rechte und erforderliche Einwilligungen prüfen.",
          "Jedes gefundene Foto darf immer beliebig verwendet werden.",
          "Ein Screenshot hebt alle Rechte auf."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Eine Meldung behauptet „Alle Experten stimmen zu“, nennt aber niemanden. Was fehlt?",
        "answers": [
          "Nachprüfbare Angaben zu den genannten Fachleuten.",
          "Ein besonders großer Titel.",
          "Ein zusätzliches Ausrufezeichen."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was ist eine sinnvolle Suchanfrage zu einem konkreten Problem?",
        "answers": [
          "Passende Schlüsselbegriffe zum gesuchten Sachverhalt.",
          "Nur „irgendwas“.",
          "Absichtlich völlig fremde Begriffe."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
      },
      {
        "prompt": "Was verbessert die Nachprüfbarkeit einer übernommenen Information?",
        "answers": [
          "Quelle und Fundstelle angeben.",
          "Die Quelle absichtlich verheimlichen.",
          "Den Namen einer fremden Quelle erfinden."
        ],
        "why": "Bei Informationen prüft man Urheber, Datum, Belege und Zweck. Eine große Reichweite oder auffällige Gestaltung beweist keine Richtigkeit."
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
    "wrongRules": [
      "Eine Textdeutung darf dem Text ohne Begründung widersprechen.",
      "Die Erzählerstimme ist in jeder Geschichte automatisch die reale Autorin oder der reale Autor."
    ],
    "rows": [
      {
        "prompt": "„Ich öffnete langsam die Tür.“ Welche Erzählperspektive ist hier erkennbar?",
        "answers": [
          "Ich-Erzählung.",
          "Durchgehend nur Dialog ohne Erzähler.",
          "Sachliche Tabelle ohne Erzähler."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Mia legte das Heft auf den Tisch. Dann ging sie hinaus.“ Was geschah zuerst?",
        "answers": [
          "Mia legte das Heft ab.",
          "Mia ging hinaus.",
          "Mia kaufte ein neues Heft."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
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
          "Wörtliche Rede einer Figur.",
          "Eine Tabellenüberschrift.",
          "Eine Quellenangabe."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Die Sonne lachte vom Himmel.“ Welches sprachliche Mittel liegt vor?",
        "answers": [
          "Personifikation.",
          "Eine genaue Temperaturmessung.",
          "Eine wörtliche Aussage über einen Mund der Sonne."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Er rannte so schnell wie der Wind.“ Welches sprachliche Mittel ist erkennbar?",
        "answers": [
          "Vergleich.",
          "Direkte Arbeitsanweisung.",
          "Amtliche Zeitangabe."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Niemand wusste, was hinter der Tür wartete.“ Welche Wirkung liegt nahe?",
        "answers": [
          "Spannung durch eine offene Frage.",
          "Vollständige Auflösung aller Fragen.",
          "Eine genaue Bedienungsanleitung."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Sie hatte stundenlang geübt. Jetzt gelang ihr das Stück.“ Wodurch ist der Erfolg im Text vorbereitet?",
        "answers": [
          "Durch das vorherige Üben.",
          "Durch eine ausdrücklich erwähnte neue Gitarre.",
          "Durch einen genannten Lottogewinn."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Jonas dachte: Hoffentlich klappt es.“ Wovon erhalten wir einen Einblick?",
        "answers": [
          "Von Jonas' Gedanken.",
          "Von den Gedanken aller Menschen.",
          "Von einer objektiven Wettervorhersage."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
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
          "Zwei ausdrücklich genannte Orte.",
          "Zwei verschiedene Busfahrpläne."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Plötzlich fiel das Licht aus.“ Was verändert sich an dieser Stelle?",
        "answers": [
          "Es tritt ein unerwartetes Ereignis ein.",
          "Die ganze Geschichte wird sicher sofort erklärt.",
          "Alle Figuren wechseln ausdrücklich ihren Namen."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Lena gab das gefundene Portemonnaie zurück.“ Welche Handlung ist belegt?",
        "answers": [
          "Sie brachte eine gefundene Sache zurück.",
          "Sie behielt ausdrücklich das Geld.",
          "Sie hatte das Portemonnaie selbst verloren."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Drei Jahre zuvor hatte er hier gearbeitet.“ Was geschieht mit der erzählten Zeit?",
        "answers": [
          "Es wird auf Vergangenes zurückgeblickt.",
          "Es wird ausschließlich eine zukünftige Bestellung genannt.",
          "Die Zeit bleibt zwingend im gleichen Augenblick."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
      },
      {
        "prompt": "„Die Tür stand offen. Von Mia fehlte jede Spur.“ Was bleibt nach diesem Ausschnitt offen?",
        "answers": [
          "Wo Mia ist.",
          "Ob die Tür offen steht.",
          "Ob Mia ausdrücklich am Tisch sitzt."
        ],
        "why": "Deutungen müssen am vorliegenden Text begründet werden. Erzähler, Figurenrede und ausdrücklich genannte Ereignisse werden unterschieden."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „mother“ in diesem Wortschatzthema?",
        "answers": [
          "Mutter",
          "Tochter",
          "Tante"
        ],
        "why": "„mother“ bedeutet hier „Mutter“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „father“ in diesem Wortschatzthema?",
        "answers": [
          "Vater",
          "Sohn",
          "Onkel"
        ],
        "why": "„father“ bedeutet hier „Vater“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „sister“ in diesem Wortschatzthema?",
        "answers": [
          "Schwester",
          "Großmutter",
          "Ehefrau"
        ],
        "why": "„sister“ bedeutet hier „Schwester“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „brother“ in diesem Wortschatzthema?",
        "answers": [
          "Bruder",
          "Großvater",
          "Ehemann"
        ],
        "why": "„brother“ bedeutet hier „Bruder“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „parents“ in diesem Wortschatzthema?",
        "answers": [
          "Eltern",
          "Tante",
          "Nachbar oder Nachbarin"
        ],
        "why": "„parents“ bedeutet hier „Eltern“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „daughter“ in diesem Wortschatzthema?",
        "answers": [
          "Tochter",
          "Onkel",
          "Freund oder Freundin"
        ],
        "why": "„daughter“ bedeutet hier „Tochter“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „son“ in diesem Wortschatzthema?",
        "answers": [
          "Sohn",
          "Ehefrau",
          "Mutter"
        ],
        "why": "„son“ bedeutet hier „Sohn“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „grandmother“ in diesem Wortschatzthema?",
        "answers": [
          "Großmutter",
          "Ehemann",
          "Vater"
        ],
        "why": "„grandmother“ bedeutet hier „Großmutter“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „grandfather“ in diesem Wortschatzthema?",
        "answers": [
          "Großvater",
          "Nachbar oder Nachbarin",
          "Schwester"
        ],
        "why": "„grandfather“ bedeutet hier „Großvater“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „aunt“ in diesem Wortschatzthema?",
        "answers": [
          "Tante",
          "Freund oder Freundin",
          "Bruder"
        ],
        "why": "„aunt“ bedeutet hier „Tante“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „uncle“ in diesem Wortschatzthema?",
        "answers": [
          "Onkel",
          "Mutter",
          "Eltern"
        ],
        "why": "„uncle“ bedeutet hier „Onkel“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „wife“ in diesem Wortschatzthema?",
        "answers": [
          "Ehefrau",
          "Vater",
          "Tochter"
        ],
        "why": "„wife“ bedeutet hier „Ehefrau“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „husband“ in diesem Wortschatzthema?",
        "answers": [
          "Ehemann",
          "Schwester",
          "Sohn"
        ],
        "why": "„husband“ bedeutet hier „Ehemann“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „neighbour“ in diesem Wortschatzthema?",
        "answers": [
          "Nachbar oder Nachbarin",
          "Bruder",
          "Großmutter"
        ],
        "why": "„neighbour“ bedeutet hier „Nachbar oder Nachbarin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „friend“ in diesem Wortschatzthema?",
        "answers": [
          "Freund oder Freundin",
          "Eltern",
          "Großvater"
        ],
        "why": "„friend“ bedeutet hier „Freund oder Freundin“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „swimming“ in diesem Wortschatzthema?",
        "answers": [
          "Schwimmen",
          "Singen",
          "Klettern"
        ],
        "why": "„swimming“ bedeutet hier „Schwimmen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „cycling“ in diesem Wortschatzthema?",
        "answers": [
          "Radfahren",
          "Laufen als Sport",
          "Schach"
        ],
        "why": "„cycling“ bedeutet hier „Radfahren“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „reading“ in diesem Wortschatzthema?",
        "answers": [
          "Lesen",
          "Kochen",
          "Fußball"
        ],
        "why": "„reading“ bedeutet hier „Lesen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „painting“ in diesem Wortschatzthema?",
        "answers": [
          "Malen",
          "Angeln",
          "Fotografie"
        ],
        "why": "„painting“ bedeutet hier „Malen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „dancing“ in diesem Wortschatzthema?",
        "answers": [
          "Tanzen",
          "Klettern",
          "Gartenarbeit"
        ],
        "why": "„dancing“ bedeutet hier „Tanzen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „singing“ in diesem Wortschatzthema?",
        "answers": [
          "Singen",
          "Schach",
          "Wandern"
        ],
        "why": "„singing“ bedeutet hier „Singen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „running“ in diesem Wortschatzthema?",
        "answers": [
          "Laufen als Sport",
          "Fußball",
          "Schwimmen"
        ],
        "why": "„running“ bedeutet hier „Laufen als Sport“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „cooking“ in diesem Wortschatzthema?",
        "answers": [
          "Kochen",
          "Fotografie",
          "Radfahren"
        ],
        "why": "„cooking“ bedeutet hier „Kochen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „fishing“ in diesem Wortschatzthema?",
        "answers": [
          "Angeln",
          "Gartenarbeit",
          "Lesen"
        ],
        "why": "„fishing“ bedeutet hier „Angeln“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „climbing“ in diesem Wortschatzthema?",
        "answers": [
          "Klettern",
          "Wandern",
          "Malen"
        ],
        "why": "„climbing“ bedeutet hier „Klettern“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „chess“ in diesem Wortschatzthema?",
        "answers": [
          "Schach",
          "Schwimmen",
          "Tanzen"
        ],
        "why": "„chess“ bedeutet hier „Schach“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „football“ in diesem Wortschatzthema?",
        "answers": [
          "Fußball",
          "Radfahren",
          "Singen"
        ],
        "why": "„football“ bedeutet hier „Fußball“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „photography“ in diesem Wortschatzthema?",
        "answers": [
          "Fotografie",
          "Lesen",
          "Laufen als Sport"
        ],
        "why": "„photography“ bedeutet hier „Fotografie“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „gardening“ in diesem Wortschatzthema?",
        "answers": [
          "Gartenarbeit",
          "Malen",
          "Kochen"
        ],
        "why": "„gardening“ bedeutet hier „Gartenarbeit“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „hiking“ in diesem Wortschatzthema?",
        "answers": [
          "Wandern",
          "Tanzen",
          "Angeln"
        ],
        "why": "„hiking“ bedeutet hier „Wandern“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „bread“ in diesem Wortschatzthema?",
        "answers": [
          "Brot",
          "Kartoffeln",
          "Hähnchenfleisch"
        ],
        "why": "„bread“ bedeutet hier „Brot“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „water“ in diesem Wortschatzthema?",
        "answers": [
          "Wasser",
          "Karotten",
          "Fisch"
        ],
        "why": "„water“ bedeutet hier „Wasser“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „milk“ in diesem Wortschatzthema?",
        "answers": [
          "Milch",
          "Äpfel",
          "Salz"
        ],
        "why": "„milk“ bedeutet hier „Milch“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „cheese“ in diesem Wortschatzthema?",
        "answers": [
          "Käse",
          "Eier",
          "Zucker"
        ],
        "why": "„cheese“ bedeutet hier „Käse“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „rice“ in diesem Wortschatzthema?",
        "answers": [
          "Reis",
          "Hähnchenfleisch",
          "Saft"
        ],
        "why": "„rice“ bedeutet hier „Reis“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „potatoes“ in diesem Wortschatzthema?",
        "answers": [
          "Kartoffeln",
          "Fisch",
          "Frühstück"
        ],
        "why": "„potatoes“ bedeutet hier „Kartoffeln“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „carrots“ in diesem Wortschatzthema?",
        "answers": [
          "Karotten",
          "Salz",
          "Brot"
        ],
        "why": "„carrots“ bedeutet hier „Karotten“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „apples“ in diesem Wortschatzthema?",
        "answers": [
          "Äpfel",
          "Zucker",
          "Wasser"
        ],
        "why": "„apples“ bedeutet hier „Äpfel“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „eggs“ in diesem Wortschatzthema?",
        "answers": [
          "Eier",
          "Saft",
          "Milch"
        ],
        "why": "„eggs“ bedeutet hier „Eier“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „chicken“ in diesem Wortschatzthema?",
        "answers": [
          "Hähnchenfleisch",
          "Frühstück",
          "Käse"
        ],
        "why": "„chicken“ bedeutet hier „Hähnchenfleisch“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „fish“ in diesem Wortschatzthema?",
        "answers": [
          "Fisch",
          "Brot",
          "Reis"
        ],
        "why": "„fish“ bedeutet hier „Fisch“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „salt“ in diesem Wortschatzthema?",
        "answers": [
          "Salz",
          "Wasser",
          "Kartoffeln"
        ],
        "why": "„salt“ bedeutet hier „Salz“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „sugar“ in diesem Wortschatzthema?",
        "answers": [
          "Zucker",
          "Milch",
          "Karotten"
        ],
        "why": "„sugar“ bedeutet hier „Zucker“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „juice“ in diesem Wortschatzthema?",
        "answers": [
          "Saft",
          "Käse",
          "Äpfel"
        ],
        "why": "„juice“ bedeutet hier „Saft“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „breakfast“ in diesem Wortschatzthema?",
        "answers": [
          "Frühstück",
          "Reis",
          "Eier"
        ],
        "why": "„breakfast“ bedeutet hier „Frühstück“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „trousers“ in diesem Wortschatzthema?",
        "answers": [
          "Hose",
          "Mantel",
          "Kassenbeleg"
        ],
        "why": "„trousers“ bedeutet hier „Hose“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „shirt“ in diesem Wortschatzthema?",
        "answers": [
          "Hemd",
          "Handschuhe",
          "Rabatt"
        ],
        "why": "„shirt“ bedeutet hier „Hemd“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „jacket“ in diesem Wortschatzthema?",
        "answers": [
          "Jacke",
          "Größe",
          "Bargeld"
        ],
        "why": "„jacket“ bedeutet hier „Jacke“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „shoes“ in diesem Wortschatzthema?",
        "answers": [
          "Schuhe",
          "Preis",
          "Umkleidekabine"
        ],
        "why": "„shoes“ bedeutet hier „Schuhe“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „socks“ in diesem Wortschatzthema?",
        "answers": [
          "Socken",
          "Kassenbeleg",
          "Kunde oder Kundin"
        ],
        "why": "„socks“ bedeutet hier „Socken“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „coat“ in diesem Wortschatzthema?",
        "answers": [
          "Mantel",
          "Rabatt",
          "Verkäufer oder Verkäuferin"
        ],
        "why": "„coat“ bedeutet hier „Mantel“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „gloves“ in diesem Wortschatzthema?",
        "answers": [
          "Handschuhe",
          "Bargeld",
          "Hose"
        ],
        "why": "„gloves“ bedeutet hier „Handschuhe“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „size“ in diesem Wortschatzthema?",
        "answers": [
          "Größe",
          "Umkleidekabine",
          "Hemd"
        ],
        "why": "„size“ bedeutet hier „Größe“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „price“ in diesem Wortschatzthema?",
        "answers": [
          "Preis",
          "Kunde oder Kundin",
          "Jacke"
        ],
        "why": "„price“ bedeutet hier „Preis“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „receipt“ in diesem Wortschatzthema?",
        "answers": [
          "Kassenbeleg",
          "Verkäufer oder Verkäuferin",
          "Schuhe"
        ],
        "why": "„receipt“ bedeutet hier „Kassenbeleg“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „discount“ in diesem Wortschatzthema?",
        "answers": [
          "Rabatt",
          "Hose",
          "Socken"
        ],
        "why": "„discount“ bedeutet hier „Rabatt“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „cash“ in diesem Wortschatzthema?",
        "answers": [
          "Bargeld",
          "Hemd",
          "Mantel"
        ],
        "why": "„cash“ bedeutet hier „Bargeld“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „changing room“ in diesem Wortschatzthema?",
        "answers": [
          "Umkleidekabine",
          "Jacke",
          "Handschuhe"
        ],
        "why": "„changing room“ bedeutet hier „Umkleidekabine“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „customer“ in diesem Wortschatzthema?",
        "answers": [
          "Kunde oder Kundin",
          "Schuhe",
          "Größe"
        ],
        "why": "„customer“ bedeutet hier „Kunde oder Kundin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „shop assistant“ in diesem Wortschatzthema?",
        "answers": [
          "Verkäufer oder Verkäuferin",
          "Socken",
          "Preis"
        ],
        "why": "„shop assistant“ bedeutet hier „Verkäufer oder Verkäuferin“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „lesson“ in diesem Wortschatzthema?",
        "answers": [
          "Unterrichtsstunde",
          "Lineal",
          "Klassenraum"
        ],
        "why": "„lesson“ bedeutet hier „Unterrichtsstunde“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „timetable“ in diesem Wortschatzthema?",
        "answers": [
          "Stundenplan",
          "Bleistift",
          "Pause"
        ],
        "why": "„timetable“ bedeutet hier „Stundenplan“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „exercise“ in diesem Wortschatzthema?",
        "answers": [
          "Übung",
          "Radiergummi",
          "Prüfung"
        ],
        "why": "„exercise“ bedeutet hier „Übung“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „homework“ in diesem Wortschatzthema?",
        "answers": [
          "Hausaufgaben",
          "Ordner",
          "Frage"
        ],
        "why": "„homework“ bedeutet hier „Hausaufgaben“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „dictionary“ in diesem Wortschatzthema?",
        "answers": [
          "Wörterbuch",
          "Klassenraum",
          "Antwort"
        ],
        "why": "„dictionary“ bedeutet hier „Wörterbuch“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „ruler“ in diesem Wortschatzthema?",
        "answers": [
          "Lineal",
          "Pause",
          "Fehler"
        ],
        "why": "„ruler“ bedeutet hier „Lineal“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „pencil“ in diesem Wortschatzthema?",
        "answers": [
          "Bleistift",
          "Prüfung",
          "Unterrichtsstunde"
        ],
        "why": "„pencil“ bedeutet hier „Bleistift“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „eraser“ in diesem Wortschatzthema?",
        "answers": [
          "Radiergummi",
          "Frage",
          "Stundenplan"
        ],
        "why": "„eraser“ bedeutet hier „Radiergummi“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „folder“ in diesem Wortschatzthema?",
        "answers": [
          "Ordner",
          "Antwort",
          "Übung"
        ],
        "why": "„folder“ bedeutet hier „Ordner“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „classroom“ in diesem Wortschatzthema?",
        "answers": [
          "Klassenraum",
          "Fehler",
          "Hausaufgaben"
        ],
        "why": "„classroom“ bedeutet hier „Klassenraum“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „break“ in diesem Wortschatzthema?",
        "answers": [
          "Pause",
          "Unterrichtsstunde",
          "Wörterbuch"
        ],
        "why": "„break“ bedeutet hier „Pause“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „exam“ in diesem Wortschatzthema?",
        "answers": [
          "Prüfung",
          "Stundenplan",
          "Lineal"
        ],
        "why": "„exam“ bedeutet hier „Prüfung“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „question“ in diesem Wortschatzthema?",
        "answers": [
          "Frage",
          "Übung",
          "Bleistift"
        ],
        "why": "„question“ bedeutet hier „Frage“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „answer“ in diesem Wortschatzthema?",
        "answers": [
          "Antwort",
          "Hausaufgaben",
          "Radiergummi"
        ],
        "why": "„answer“ bedeutet hier „Antwort“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „mistake“ in diesem Wortschatzthema?",
        "answers": [
          "Fehler",
          "Wörterbuch",
          "Ordner"
        ],
        "why": "„mistake“ bedeutet hier „Fehler“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „hammer“ in diesem Wortschatzthema?",
        "answers": [
          "Hammer",
          "Feile",
          "Unterlegscheibe"
        ],
        "why": "„hammer“ bedeutet hier „Hammer“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „screwdriver“ in diesem Wortschatzthema?",
        "answers": [
          "Schraubendreher",
          "Schraube",
          "Werkbank"
        ],
        "why": "„screwdriver“ bedeutet hier „Schraubendreher“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „pliers“ in diesem Wortschatzthema?",
        "answers": [
          "Zange",
          "Mutter als Befestigungsteil",
          "Schraubstock"
        ],
        "why": "„pliers“ bedeutet hier „Zange“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „saw“ in diesem Wortschatzthema?",
        "answers": [
          "Säge",
          "Schraubbolzen",
          "Maßband"
        ],
        "why": "„saw“ bedeutet hier „Säge“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „drill“ in diesem Wortschatzthema?",
        "answers": [
          "Bohrmaschine",
          "Unterlegscheibe",
          "Schutzbrille"
        ],
        "why": "„drill“ bedeutet hier „Bohrmaschine“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „file“ in diesem Wortschatzthema?",
        "answers": [
          "Feile",
          "Werkbank",
          "Blech"
        ],
        "why": "„file“ bedeutet hier „Feile“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „screw“ in diesem Wortschatzthema?",
        "answers": [
          "Schraube",
          "Schraubstock",
          "Hammer"
        ],
        "why": "„screw“ bedeutet hier „Schraube“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „nut“ in diesem Wortschatzthema?",
        "answers": [
          "Mutter als Befestigungsteil",
          "Maßband",
          "Schraubendreher"
        ],
        "why": "„nut“ bedeutet hier „Mutter als Befestigungsteil“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „bolt“ in diesem Wortschatzthema?",
        "answers": [
          "Schraubbolzen",
          "Schutzbrille",
          "Zange"
        ],
        "why": "„bolt“ bedeutet hier „Schraubbolzen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „washer“ in diesem Wortschatzthema?",
        "answers": [
          "Unterlegscheibe",
          "Blech",
          "Säge"
        ],
        "why": "„washer“ bedeutet hier „Unterlegscheibe“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „workbench“ in diesem Wortschatzthema?",
        "answers": [
          "Werkbank",
          "Hammer",
          "Bohrmaschine"
        ],
        "why": "„workbench“ bedeutet hier „Werkbank“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „vice“ in diesem Wortschatzthema?",
        "answers": [
          "Schraubstock",
          "Schraubendreher",
          "Feile"
        ],
        "why": "„vice“ bedeutet hier „Schraubstock“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „measuring tape“ in diesem Wortschatzthema?",
        "answers": [
          "Maßband",
          "Zange",
          "Schraube"
        ],
        "why": "„measuring tape“ bedeutet hier „Maßband“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „safety goggles“ in diesem Wortschatzthema?",
        "answers": [
          "Schutzbrille",
          "Säge",
          "Mutter als Befestigungsteil"
        ],
        "why": "„safety goggles“ bedeutet hier „Schutzbrille“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „sheet metal“ in diesem Wortschatzthema?",
        "answers": [
          "Blech",
          "Bohrmaschine",
          "Schraubbolzen"
        ],
        "why": "„sheet metal“ bedeutet hier „Blech“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „mechanic“ in diesem Wortschatzthema?",
        "answers": [
          "Mechaniker oder Mechanikerin",
          "Koch oder Köchin",
          "Vorgesetzter oder Vorgesetzte"
        ],
        "why": "„mechanic“ bedeutet hier „Mechaniker oder Mechanikerin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „electrician“ in diesem Wortschatzthema?",
        "answers": [
          "Elektriker oder Elektrikerin",
          "Pflegefachkraft",
          "Kollege oder Kollegin"
        ],
        "why": "„electrician“ bedeutet hier „Elektriker oder Elektrikerin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „carpenter“ in diesem Wortschatzthema?",
        "answers": [
          "Zimmerer oder Zimmerin",
          "Fahrer oder Fahrerin",
          "Unternehmen"
        ],
        "why": "„carpenter“ bedeutet hier „Zimmerer oder Zimmerin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „plumber“ in diesem Wortschatzthema?",
        "answers": [
          "Installateur oder Installateurin",
          "Auszubildender oder Auszubildende",
          "Arbeitsschicht"
        ],
        "why": "„plumber“ bedeutet hier „Installateur oder Installateurin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „welder“ in diesem Wortschatzthema?",
        "answers": [
          "Schweißer oder Schweißerin",
          "Vorgesetzter oder Vorgesetzte",
          "Gehalt"
        ],
        "why": "„welder“ bedeutet hier „Schweißer oder Schweißerin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „chef“ in diesem Wortschatzthema?",
        "answers": [
          "Koch oder Köchin",
          "Kollege oder Kollegin",
          "Praktikum"
        ],
        "why": "„chef“ bedeutet hier „Koch oder Köchin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „nurse“ in diesem Wortschatzthema?",
        "answers": [
          "Pflegefachkraft",
          "Unternehmen",
          "Mechaniker oder Mechanikerin"
        ],
        "why": "„nurse“ bedeutet hier „Pflegefachkraft“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „driver“ in diesem Wortschatzthema?",
        "answers": [
          "Fahrer oder Fahrerin",
          "Arbeitsschicht",
          "Elektriker oder Elektrikerin"
        ],
        "why": "„driver“ bedeutet hier „Fahrer oder Fahrerin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „apprentice“ in diesem Wortschatzthema?",
        "answers": [
          "Auszubildender oder Auszubildende",
          "Gehalt",
          "Zimmerer oder Zimmerin"
        ],
        "why": "„apprentice“ bedeutet hier „Auszubildender oder Auszubildende“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „supervisor“ in diesem Wortschatzthema?",
        "answers": [
          "Vorgesetzter oder Vorgesetzte",
          "Praktikum",
          "Installateur oder Installateurin"
        ],
        "why": "„supervisor“ bedeutet hier „Vorgesetzter oder Vorgesetzte“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „colleague“ in diesem Wortschatzthema?",
        "answers": [
          "Kollege oder Kollegin",
          "Mechaniker oder Mechanikerin",
          "Schweißer oder Schweißerin"
        ],
        "why": "„colleague“ bedeutet hier „Kollege oder Kollegin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „company“ in diesem Wortschatzthema?",
        "answers": [
          "Unternehmen",
          "Elektriker oder Elektrikerin",
          "Koch oder Köchin"
        ],
        "why": "„company“ bedeutet hier „Unternehmen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „shift“ in diesem Wortschatzthema?",
        "answers": [
          "Arbeitsschicht",
          "Zimmerer oder Zimmerin",
          "Pflegefachkraft"
        ],
        "why": "„shift“ bedeutet hier „Arbeitsschicht“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „salary“ in diesem Wortschatzthema?",
        "answers": [
          "Gehalt",
          "Installateur oder Installateurin",
          "Fahrer oder Fahrerin"
        ],
        "why": "„salary“ bedeutet hier „Gehalt“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „internship“ in diesem Wortschatzthema?",
        "answers": [
          "Praktikum",
          "Schweißer oder Schweißerin",
          "Auszubildender oder Auszubildende"
        ],
        "why": "„internship“ bedeutet hier „Praktikum“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Ein ähnlich klingendes deutsches Wort hat immer dieselbe Bedeutung.",
      "Der erste Buchstabe eines Wortes bestimmt seine Bedeutung."
    ],
    "rows": [
      {
        "prompt": "Was bedeutet „headache“ in diesem Wortschatzthema?",
        "answers": [
          "Kopfschmerzen",
          "Erkältung",
          "Medikament"
        ],
        "why": "„headache“ bedeutet hier „Kopfschmerzen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „toothache“ in diesem Wortschatzthema?",
        "answers": [
          "Zahnschmerzen",
          "Termin",
          "Rezept für ein Medikament"
        ],
        "why": "„toothache“ bedeutet hier „Zahnschmerzen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „stomach ache“ in diesem Wortschatzthema?",
        "answers": [
          "Bauchschmerzen",
          "Arzt oder Ärztin",
          "Schmerz"
        ],
        "why": "„stomach ache“ bedeutet hier „Bauchschmerzen“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „fever“ in diesem Wortschatzthema?",
        "answers": [
          "Fieber",
          "Apotheke",
          "Verletzung"
        ],
        "why": "„fever“ bedeutet hier „Fieber“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „cough“ in diesem Wortschatzthema?",
        "answers": [
          "Husten",
          "Medikament",
          "Verband"
        ],
        "why": "„cough“ bedeutet hier „Husten“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „cold“ in diesem Wortschatzthema?",
        "answers": [
          "Erkältung",
          "Rezept für ein Medikament",
          "Notfall"
        ],
        "why": "„cold“ bedeutet hier „Erkältung“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „appointment“ in diesem Wortschatzthema?",
        "answers": [
          "Termin",
          "Schmerz",
          "Kopfschmerzen"
        ],
        "why": "„appointment“ bedeutet hier „Termin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „doctor“ in diesem Wortschatzthema?",
        "answers": [
          "Arzt oder Ärztin",
          "Verletzung",
          "Zahnschmerzen"
        ],
        "why": "„doctor“ bedeutet hier „Arzt oder Ärztin“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „pharmacy“ in diesem Wortschatzthema?",
        "answers": [
          "Apotheke",
          "Verband",
          "Bauchschmerzen"
        ],
        "why": "„pharmacy“ bedeutet hier „Apotheke“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „medicine“ in diesem Wortschatzthema?",
        "answers": [
          "Medikament",
          "Notfall",
          "Fieber"
        ],
        "why": "„medicine“ bedeutet hier „Medikament“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „prescription“ in diesem Wortschatzthema?",
        "answers": [
          "Rezept für ein Medikament",
          "Kopfschmerzen",
          "Husten"
        ],
        "why": "„prescription“ bedeutet hier „Rezept für ein Medikament“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „pain“ in diesem Wortschatzthema?",
        "answers": [
          "Schmerz",
          "Zahnschmerzen",
          "Erkältung"
        ],
        "why": "„pain“ bedeutet hier „Schmerz“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „injury“ in diesem Wortschatzthema?",
        "answers": [
          "Verletzung",
          "Bauchschmerzen",
          "Termin"
        ],
        "why": "„injury“ bedeutet hier „Verletzung“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „bandage“ in diesem Wortschatzthema?",
        "answers": [
          "Verband",
          "Fieber",
          "Arzt oder Ärztin"
        ],
        "why": "„bandage“ bedeutet hier „Verband“. Die beiden anderen Wörter haben andere Bedeutungen."
      },
      {
        "prompt": "Was bedeutet „emergency“ in diesem Wortschatzthema?",
        "answers": [
          "Notfall",
          "Husten",
          "Apotheke"
        ],
        "why": "„emergency“ bedeutet hier „Notfall“. Die beiden anderen Wörter haben andere Bedeutungen."
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
    "wrongRules": [
      "Das englische Alter wird grundsätzlich mit „I have“ statt „I am“ angegeben.",
      "Vor jedem Personennamen muss das Hilfsverb „do“ stehen."
    ],
    "rows": [
      {
        "prompt": "My name ___ Mia.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„My name“ ist Singular; dazu passt „is“."
      },
      {
        "prompt": "I ___ sixteen years old.",
        "answers": [
          "am",
          "have",
          "are"
        ],
        "why": "Eine Altersangabe bildet man hier mit „I am“."
      },
      {
        "prompt": "I live ___ Lahr.",
        "answers": [
          "in",
          "on",
          "at to"
        ],
        "why": "Bei einem Wohnort in einer Stadt verwendet man hier „in“."
      },
      {
        "prompt": "I am ___ Germany.",
        "answers": [
          "from",
          "of",
          "at"
        ],
        "why": "„From“ nennt hier das Herkunftsland."
      },
      {
        "prompt": "This ___ my friend Ali.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„This“ steht hier im Singular und verlangt „is“."
      },
      {
        "prompt": "We ___ students.",
        "answers": [
          "are",
          "is",
          "am"
        ],
        "why": "Zu „we“ gehört „are“."
      },
      {
        "prompt": "My phone number ___ on this form.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "Das Subjekt „my phone number“ steht im Singular."
      },
      {
        "prompt": "I ___ a sister and a brother.",
        "answers": [
          "have",
          "has",
          "am"
        ],
        "why": "Zum Subjekt „I“ gehört „have“."
      },
      {
        "prompt": "Her first name ___ Sara.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„Her first name“ ist Singular; die Verbform lautet „is“."
      },
      {
        "prompt": "My surname ___ Weber.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„Surname“ bedeutet Nachname und steht hier im Singular."
      },
      {
        "prompt": "I ___ interested in metalwork.",
        "answers": [
          "am",
          "have",
          "are"
        ],
        "why": "Die feste Verbindung lautet hier „be interested in“."
      },
      {
        "prompt": "We come ___ France.",
        "answers": [
          "from",
          "at",
          "on"
        ],
        "why": "„Come from“ nennt die Herkunft."
      },
      {
        "prompt": "He ___ seventeen years old.",
        "answers": [
          "is",
          "has",
          "are"
        ],
        "why": "Auch bei „he“ wird das Alter mit „be“ angegeben: „he is“."
      },
      {
        "prompt": "Our address ___ on the letter.",
        "answers": [
          "is",
          "are",
          "am"
        ],
        "why": "„Our address“ ist ein einzelnes Subjekt und verlangt „is“."
      },
      {
        "prompt": "Nice to ___ you.",
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
    "wrongRules": [
      "„Thirteen“ und „thirty“ bezeichnen immer dieselbe Zahl.",
      "Die englischen Zahlwörter richten sich nach der Farbe des Gegenstands."
    ],
    "rows": [
      {
        "prompt": "Ein Preis beträgt 12 Pfund. Welches englische Zahlwort bezeichnet 12?",
        "answers": [
          "twelve",
          "fifteen",
          "nineteen"
        ],
        "why": "„twelve“ bezeichnet die Zahl 12."
      },
      {
        "prompt": "Ein Preis beträgt 13 Pfund. Welches englische Zahlwort bezeichnet 13?",
        "answers": [
          "thirteen",
          "sixteen",
          "twenty"
        ],
        "why": "„thirteen“ bezeichnet die Zahl 13."
      },
      {
        "prompt": "Ein Preis beträgt 14 Pfund. Welches englische Zahlwort bezeichnet 14?",
        "answers": [
          "fourteen",
          "seventeen",
          "thirty"
        ],
        "why": "„fourteen“ bezeichnet die Zahl 14."
      },
      {
        "prompt": "Ein Preis beträgt 15 Pfund. Welches englische Zahlwort bezeichnet 15?",
        "answers": [
          "fifteen",
          "eighteen",
          "forty"
        ],
        "why": "„fifteen“ bezeichnet die Zahl 15."
      },
      {
        "prompt": "Ein Preis beträgt 16 Pfund. Welches englische Zahlwort bezeichnet 16?",
        "answers": [
          "sixteen",
          "nineteen",
          "fifty"
        ],
        "why": "„sixteen“ bezeichnet die Zahl 16."
      },
      {
        "prompt": "Ein Preis beträgt 17 Pfund. Welches englische Zahlwort bezeichnet 17?",
        "answers": [
          "seventeen",
          "twenty",
          "sixty"
        ],
        "why": "„seventeen“ bezeichnet die Zahl 17."
      },
      {
        "prompt": "Ein Preis beträgt 18 Pfund. Welches englische Zahlwort bezeichnet 18?",
        "answers": [
          "eighteen",
          "thirty",
          "eighty"
        ],
        "why": "„eighteen“ bezeichnet die Zahl 18."
      },
      {
        "prompt": "Ein Preis beträgt 19 Pfund. Welches englische Zahlwort bezeichnet 19?",
        "answers": [
          "nineteen",
          "forty",
          "ninety"
        ],
        "why": "„nineteen“ bezeichnet die Zahl 19."
      },
      {
        "prompt": "Ein Preis beträgt 20 Pfund. Welches englische Zahlwort bezeichnet 20?",
        "answers": [
          "twenty",
          "fifty",
          "twelve"
        ],
        "why": "„twenty“ bezeichnet die Zahl 20."
      },
      {
        "prompt": "Ein Preis beträgt 30 Pfund. Welches englische Zahlwort bezeichnet 30?",
        "answers": [
          "thirty",
          "sixty",
          "thirteen"
        ],
        "why": "„thirty“ bezeichnet die Zahl 30."
      },
      {
        "prompt": "Ein Preis beträgt 40 Pfund. Welches englische Zahlwort bezeichnet 40?",
        "answers": [
          "forty",
          "eighty",
          "fourteen"
        ],
        "why": "„forty“ bezeichnet die Zahl 40."
      },
      {
        "prompt": "Ein Preis beträgt 50 Pfund. Welches englische Zahlwort bezeichnet 50?",
        "answers": [
          "fifty",
          "ninety",
          "fifteen"
        ],
        "why": "„fifty“ bezeichnet die Zahl 50."
      },
      {
        "prompt": "Ein Preis beträgt 60 Pfund. Welches englische Zahlwort bezeichnet 60?",
        "answers": [
          "sixty",
          "twelve",
          "sixteen"
        ],
        "why": "„sixty“ bezeichnet die Zahl 60."
      },
      {
        "prompt": "Ein Preis beträgt 80 Pfund. Welches englische Zahlwort bezeichnet 80?",
        "answers": [
          "eighty",
          "thirteen",
          "seventeen"
        ],
        "why": "„eighty“ bezeichnet die Zahl 80."
      },
      {
        "prompt": "Ein Preis beträgt 90 Pfund. Welches englische Zahlwort bezeichnet 90?",
        "answers": [
          "ninety",
          "fourteen",
          "eighteen"
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
    "wrongRules": [
      "„Quarter past“ bedeutet grundsätzlich eine Viertelstunde vor der genannten Stunde.",
      "„Half past“ nennt die nächste statt der bereits begonnenen Stunde."
    ],
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
          "Genau zehn Stunden warten."
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
    "wrongRules": [
      "Regelmäßige Tätigkeiten werden immer mit „am + Grundform“ beschrieben.",
      "Nach „every day“ ist eine Vergangenheitsform in jedem Satz zwingend."
    ],
    "rows": [
      {
        "prompt": "I get ___ at six every morning.",
        "answers": [
          "up",
          "down to",
          "out at"
        ],
        "why": "Die feste Verbindung für „aufstehen“ lautet „get up“."
      },
      {
        "prompt": "She ___ breakfast at seven.",
        "answers": [
          "has",
          "have",
          "having"
        ],
        "why": "Bei „she“ lautet die simple-present-Form „has“."
      },
      {
        "prompt": "We go to school ___ bus.",
        "answers": [
          "by",
          "with the by",
          "on to"
        ],
        "why": "Für das Verkehrsmittel heißt es hier „by bus“."
      },
      {
        "prompt": "My lesson ___ at eight.",
        "answers": [
          "starts",
          "start",
          "starting"
        ],
        "why": "Das Singularsubjekt „my lesson“ verlangt „starts“."
      },
      {
        "prompt": "I ___ my homework after school.",
        "answers": [
          "do",
          "does",
          "am do"
        ],
        "why": "Zu „I“ passt die Grundform „do“."
      },
      {
        "prompt": "He ___ home at four every day.",
        "answers": [
          "comes",
          "come",
          "coming"
        ],
        "why": "Im simple present steht bei „he“ hier „comes“."
      },
      {
        "prompt": "We usually ___ dinner together.",
        "answers": [
          "eat",
          "eats",
          "eating"
        ],
        "why": "Zu „we“ passt „eat“ ohne -s."
      },
      {
        "prompt": "I brush my ___ before bed.",
        "answers": [
          "teeth",
          "tooths",
          "tooth's"
        ],
        "why": "Der Plural von „tooth“ lautet „teeth“."
      },
      {
        "prompt": "She ___ her bag in the evening.",
        "answers": [
          "packs",
          "pack",
          "packing"
        ],
        "why": "Bei „she“ steht hier die Verbform mit -s."
      },
      {
        "prompt": "They ___ to bed at ten.",
        "answers": [
          "go",
          "goes",
          "going"
        ],
        "why": "Zu „they“ gehört „go“."
      },
      {
        "prompt": "I take a shower ___ the morning.",
        "answers": [
          "in",
          "on",
          "to"
        ],
        "why": "Die Verbindung lautet „in the morning“."
      },
      {
        "prompt": "He ___ his room on Saturdays.",
        "answers": [
          "cleans",
          "clean",
          "cleaning"
        ],
        "why": "Eine regelmäßige Tätigkeit mit „he“ verlangt hier „cleans“."
      },
      {
        "prompt": "We ___ a break at ten.",
        "answers": [
          "have",
          "has",
          "having"
        ],
        "why": "Zu „we“ gehört „have“."
      },
      {
        "prompt": "She walks ___ school every day.",
        "answers": [
          "to",
          "at to",
          "in to the"
        ],
        "why": "Die gerichtete Bewegung heißt hier „walks to school“."
      },
      {
        "prompt": "I ___ my phone before I leave.",
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
    "wrongRules": [
      "„Left“ und „right“ bedeuten dieselbe Richtung.",
      "Eine Wegbeschreibung gibt immer eine persönliche Bewertung statt eines Wegs an."
    ],
    "rows": [
      {
        "prompt": "„Turn left at the traffic lights.“ Was sollst du tun?",
        "answers": [
          "An der Ampel links abbiegen.",
          "An der Ampel rechts abbiegen.",
          "Vor der Ampel rückwärts gehen."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Go straight on.“ Was ist gemeint?",
        "answers": [
          "Geradeaus weitergehen.",
          "Sofort links abbiegen.",
          "An Ort und Stelle bleiben."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„The bank is opposite the school.“ Wo liegt die Bank?",
        "answers": [
          "Gegenüber der Schule.",
          "In der Schule.",
          "Auf dem Dach der Schule."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Take the second street on the right.“ Welche Straße nimmst du?",
        "answers": [
          "Die zweite Straße rechts.",
          "Die erste Straße links.",
          "Die dritte Straße links."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„The station is next to the supermarket.“ Wo liegt der Bahnhof?",
        "answers": [
          "Neben dem Supermarkt.",
          "Unter dem Supermarkt.",
          "Auf der anderen Seite des Landes."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Cross the road at the crossing.“ Was sollst du tun?",
        "answers": [
          "Die Straße am Übergang überqueren.",
          "Auf der Straße stehen bleiben.",
          "In die falsche Richtung fahren."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Get off at the next stop.“ Was bedeutet das?",
        "answers": [
          "An der nächsten Haltestelle aussteigen.",
          "An der letzten Haltestelle einsteigen.",
          "Den Bus selbst fahren."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Return ticket“: Welche Fahrkarte ist gemeint?",
        "answers": [
          "Eine Hin- und Rückfahrkarte.",
          "Nur eine einfache Hinfahrt.",
          "Eine Fahrkarte nur für Fahrräder."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Single ticket“: Welche Fahrkarte ist gemeint?",
        "answers": [
          "Eine Fahrkarte für eine einfache Fahrt.",
          "Eine Jahreskarte für alle Fahrten.",
          "Eine Hin- und Rückfahrkarte."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„The platform is on your left.“ Wo liegt der Bahnsteig?",
        "answers": [
          "Links von dir.",
          "Rechts von dir.",
          "Direkt über dir."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Walk past the bakery.“ Was sollst du tun?",
        "answers": [
          "An der Bäckerei vorbeigehen.",
          "In der Bäckerei übernachten.",
          "Vor der Bäckerei umkehren müssen."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„The bus is delayed.“ Was ist mit dem Bus?",
        "answers": [
          "Er hat Verspätung.",
          "Er ist bereits neu lackiert.",
          "Er fährt sicher zu früh ab."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„The road is closed.“ Welche Information wird gegeben?",
        "answers": [
          "Die Straße ist gesperrt.",
          "Die Straße ist besonders breit.",
          "Die Straße ist ein Kreisverkehr."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„Use the entrance at the back.“ Welchen Eingang benutzt du?",
        "answers": [
          "Den Eingang auf der Rückseite.",
          "Den Eingang auf dem Dach.",
          "Einen ausdrücklich nicht genannten Vordereingang."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
      },
      {
        "prompt": "„It takes ten minutes on foot.“ Wie lange dauert der Fußweg?",
        "answers": [
          "Zehn Minuten.",
          "Zehn Stunden.",
          "Zwei Minuten."
        ],
        "why": "Bei Wegbeschreibungen sind Richtung, Ort und Reihenfolge entscheidend. Die Antwort muss zur konkreten Anweisung passen."
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
    "wrongRules": [
      "„Do not“ bedeutet, dass etwas unbedingt getan werden muss.",
      "Ein Warnhinweis ist immer eine Einladung zum Spielen."
    ],
    "rows": [
      {
        "prompt": "„Wear safety goggles.“ Was wird verlangt?",
        "answers": [
          "Eine Schutzbrille tragen.",
          "Die Schuhe ausziehen.",
          "Die Beleuchtung ausschalten."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Do not touch.“ Was bedeutet das?",
        "answers": [
          "Nicht berühren.",
          "Festhalten.",
          "Berühren ist vorgeschrieben."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Keep the door clear.“ Was soll frei bleiben?",
        "answers": [
          "Der Bereich an der Tür.",
          "Der Inhalt eines Kühlschranks.",
          "Die Hosentasche."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Switch off before cleaning.“ Was soll zuerst geschehen?",
        "answers": [
          "Vor dem Reinigen ausschalten.",
          "Während des Betriebs reinigen.",
          "Nach dem Reinigen erst einschalten müssen."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Emergency exit.“ Was bezeichnet das Schild?",
        "answers": [
          "Einen Notausgang.",
          "Eine Küche.",
          "Ein Lager für Werkzeug."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„No smoking.“ Was ist verboten?",
        "answers": [
          "Rauchen.",
          "Lesen.",
          "Das Tragen von Schuhen."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Mind your head.“ Worauf sollst du achten?",
        "answers": [
          "Dass du mit dem Kopf nicht anstößt.",
          "Dass du lauter sprichst.",
          "Dass du dein Heft abgibst."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Danger: high voltage.“ Wovor wird gewarnt?",
        "answers": [
          "Vor hoher elektrischer Spannung.",
          "Vor besonders gutem Wetter.",
          "Vor fehlendem Schreibpapier."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Keep hands away from moving parts.“ Was sollst du vermeiden?",
        "answers": [
          "Mit den Händen bewegliche Teile berühren.",
          "Vor der Arbeit die Anleitung lesen.",
          "Geeignete Schutzkleidung tragen."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Report accidents immediately.“ Was soll sofort geschehen?",
        "answers": [
          "Unfälle melden.",
          "Unfälle verschweigen.",
          "Den Arbeitsplan zerreißen."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Use ear protection.“ Was wird verlangt?",
        "answers": [
          "Gehörschutz verwenden.",
          "Mit geschlossenen Augen arbeiten.",
          "Die Ärmel aufrollen, unabhängig von der Tätigkeit."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Do not enter.“ Was bedeutet das?",
        "answers": [
          "Nicht betreten.",
          "Bitte sofort hereinkommen.",
          "Hier ist der einzige verpflichtende Eingang."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„First aid kit.“ Was ist gemeint?",
        "answers": [
          "Ein Verbandkasten.",
          "Eine Werkzeugkiste.",
          "Ein Pausenraum."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Slippery floor.“ Wovor wird gewarnt?",
        "answers": [
          "Vor einem rutschigen Boden.",
          "Vor einer besonders hohen Decke.",
          "Vor fehlenden Fenstern."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
      },
      {
        "prompt": "„Ask your supervisor before use.“ Was sollst du vor der Benutzung tun?",
        "answers": [
          "Die zuständige Führungskraft fragen.",
          "Das Gerät ohne Rückfrage ausprobieren.",
          "Eine Warnung verdecken."
        ],
        "why": "Englische Sicherheitshinweise müssen in ihrer konkreten Bedeutung verstanden werden. Verbote, Pflichten und Warnungen sind zu unterscheiden."
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
    "wrongRules": [
      "Ein Vorstellungsgespräch ist dasselbe wie eine Einkaufsliste.",
      "Eine Bewerbung verlangt grundsätzlich erfundene Qualifikationen."
    ],
    "rows": [
      {
        "prompt": "„I am applying for an apprenticeship.“ Worum geht es?",
        "answers": [
          "Um eine Bewerbung für einen Ausbildungsplatz.",
          "Um die Bestellung von Werkzeug.",
          "Um die Kündigung eines Busabos."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„Please find my CV attached.“ Was ist beigefügt?",
        "answers": [
          "Der Lebenslauf.",
          "Eine Speisekarte.",
          "Eine Fahrkarte."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„I did an internship in a workshop.“ Welche Erfahrung wird genannt?",
        "answers": [
          "Ein Praktikum in einer Werkstatt.",
          "Eine Fahrt in den Urlaub.",
          "Ein Besuch im Kino."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„I am available from September.“ Welche Angabe wird gemacht?",
        "answers": [
          "Ab wann die Person verfügbar ist.",
          "Wie viel die Person verdient.",
          "Welche Schuhgröße die Person hat."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„I enjoy working in a team.“ Welche Aussage passt?",
        "answers": [
          "Die Person arbeitet gern im Team.",
          "Die Person möchte nie mit anderen arbeiten.",
          "Die Person sucht ausschließlich einen Einzelraum."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„Please bring your certificates.“ Was soll mitgebracht werden?",
        "answers": [
          "Zeugnisse oder Nachweise.",
          "Werkstattschlüssel ohne Auftrag.",
          "Eine zufällige Zeitung."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„The interview is on Tuesday.“ Was findet am Dienstag statt?",
        "answers": [
          "Das Vorstellungsgespräch.",
          "Die Materiallieferung.",
          "Eine ärztliche Untersuchung."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„What are your strengths?“ Wonach wird gefragt?",
        "answers": [
          "Nach den Stärken der Person.",
          "Nach der Uhrzeit.",
          "Nach der Buslinie."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„I am reliable and punctual.“ Welche Eigenschaften nennt die Person?",
        "answers": [
          "Zuverlässigkeit und Pünktlichkeit.",
          "Ungeduld und Unordnung.",
          "Hunger und Durst."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„The closing date is 30 June.“ Welche Frist ist gemeint?",
        "answers": [
          "Das Ende der Bewerbungsfrist.",
          "Der sichere Beginn des Urlaubs.",
          "Die Lebensdauer eines Geräts."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„Please send a cover letter.“ Welches Dokument wird verlangt?",
        "answers": [
          "Ein Anschreiben.",
          "Eine leere Titelseite.",
          "Eine private Einkaufsliste."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„I would like to learn more about this job.“ Was drückt die Person aus?",
        "answers": [
          "Interesse, mehr über die Tätigkeit zu erfahren.",
          "Eine Absage ohne Gespräch.",
          "Den Wunsch, nichts zu lernen."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„Do you have any work experience?“ Wonach wird gefragt?",
        "answers": [
          "Nach beruflicher oder praktischer Erfahrung.",
          "Nach der Lieblingsfarbe.",
          "Nach der Länge des Heimwegs."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„I look forward to hearing from you.“ Was ist gemeint?",
        "answers": [
          "Die Person freut sich auf eine Rückmeldung.",
          "Die Person verbietet eine Antwort.",
          "Die Person hat schon eine endgültige Zusage erhalten."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
      },
      {
        "prompt": "„The position is part-time.“ Was steht über die Stelle fest?",
        "answers": [
          "Es ist eine Teilzeitstelle.",
          "Es ist zwingend eine Vollzeitstelle.",
          "Die Stelle dauert nur eine Minute."
        ],
        "why": "Bei Bewerbungen müssen Anliegen, Erfahrungen und nächste Schritte klar zur Situation passen. Angaben werden wahrheitsgemäß formuliert."
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
    "wrongRules": [
      "Eine höfliche englische Bitte muss eine Beleidigung enthalten.",
      "„Could you please“ ist immer eine Drohung."
    ],
    "rows": [
      {
        "prompt": "Du brauchst Hilfe. Welche englische Bitte ist höflich?",
        "answers": [
          "Could you help me, please?",
          "Help me now, idiot!",
          "Your help is worthless."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest eine Wiederholung. Welcher Satz passt?",
        "answers": [
          "Could you repeat that, please?",
          "Stop talking forever!",
          "Nobody wants to hear you."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du willst nach dem Weg fragen. Welche Einleitung ist höflich?",
        "answers": [
          "Excuse me, how do I get to the station?",
          "Move away, I am more important!",
          "You must know every road!"
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du brauchst einen Stift. Welche Bitte passt?",
        "answers": [
          "May I borrow your pen, please?",
          "Your pen is mine now!",
          "Give it to me or else!"
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du hast ein Wort nicht verstanden. Welche Frage hilft?",
        "answers": [
          "What does this word mean?",
          "Why are all words useless?",
          "Can we never speak again?"
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du willst langsameres Sprechen erbitten. Was sagst du?",
        "answers": [
          "Could you speak more slowly, please?",
          "Speak even faster!",
          "Never explain anything!"
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest eine Bestellung aufgeben. Welcher Satz ist höflich?",
        "answers": [
          "I would like a glass of water, please.",
          "Water, now, and no questions!",
          "I refuse to say what I want."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du willst dich bedanken. Welcher Satz passt?",
        "answers": [
          "Thank you for your help.",
          "You did nothing, obviously.",
          "I forbid your help."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du musst ein Gespräch kurz unterbrechen. Was ist höflich?",
        "answers": [
          "Excuse me, may I ask a question?",
          "Be quiet, only I matter!",
          "Your answer is always stupid."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest dich für eine Verspätung entschuldigen. Was passt?",
        "answers": [
          "I am sorry I am late.",
          "You should always wait for me.",
          "Your time does not matter."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du fragst nach einem Termin. Welche Formulierung ist höflich?",
        "answers": [
          "Could we arrange an appointment, please?",
          "You will see me whenever I decide!",
          "Never contact me again."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest, dass jemand etwas aufschreibt. Welche Bitte passt?",
        "answers": [
          "Could you write that down, please?",
          "Your writing is useless!",
          "You must guess what I mean."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest die Rechnung im Restaurant. Was sagst du?",
        "answers": [
          "Could I have the bill, please?",
          "Give me money now!",
          "I want to order a new table."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest eine Tür öffnen lassen. Welche Bitte passt?",
        "answers": [
          "Could you open the door, please?",
          "This door is your fault!",
          "Do not move ever again!"
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
      },
      {
        "prompt": "Du möchtest prüfen, ob du richtig verstanden hast. Welcher Satz passt?",
        "answers": [
          "Do you mean that we should start at nine?",
          "You certainly said something stupid.",
          "I will ignore every answer."
        ],
        "why": "Höfliche Bitten benennen ein Anliegen respektvoll. Die Antwort muss zur genannten Gesprächssituation passen."
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
    "wrongRules": [
      "Eine formelle Nachricht soll ihre Empfängerin grundsätzlich beleidigen.",
      "Eine angekündigte Datei muss nicht angehängt werden."
    ],
    "rows": [
      {
        "prompt": "Welche Anrede passt zu einer formellen E-Mail an Ms Brown?",
        "answers": [
          "Dear Ms Brown,",
          "Hey, stupid!",
          "No one cares,"
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "Welche Grußformel ist für eine sachliche berufliche E-Mail üblich?",
        "answers": [
          "Kind regards",
          "Whatever, loser",
          "No answer allowed"
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„Please confirm the appointment.“ Was wird erbeten?",
        "answers": [
          "Den Termin bestätigen.",
          "Den Termin grundsätzlich vergessen.",
          "Eine private Rechnung bezahlen."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„I have attached the document.“ Was behauptet die Person?",
        "answers": [
          "Das Dokument sei angehängt.",
          "Das Dokument sei absichtlich gelöscht.",
          "Das Dokument existiere grundsätzlich nicht."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„Could we move the meeting to Friday?“ Was ist das Anliegen?",
        "answers": [
          "Das Treffen auf Freitag verschieben.",
          "Das Treffen am Freitag rückwirkend absagen.",
          "Ein neues Gebäude kaufen."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„I am writing to ask about the internship.“ Worum geht die Nachricht?",
        "answers": [
          "Um eine Anfrage zum Praktikum.",
          "Um eine Bestellung von Lebensmitteln.",
          "Um eine Kinokarte."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "Welcher Betreff benennt eine Terminanfrage konkret?",
        "answers": [
          "Appointment request for 12 May",
          "Hello!!!",
          "Something"
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„Thank you for your reply.“ Wofür wird gedankt?",
        "answers": [
          "Für die Antwort.",
          "Für ein ausdrücklich nicht genanntes Geschenk.",
          "Für eine erfundene Bestellung."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„Please let me know if you need more information.“ Was bietet die Person an?",
        "answers": [
          "Weitere Informationen bei Bedarf.",
          "Grundsätzlich keine Rückfragen.",
          "Die Weitergabe fremder Passwörter."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„I cannot attend the meeting.“ Was wird mitgeteilt?",
        "answers": [
          "Die Person kann am Treffen nicht teilnehmen.",
          "Die Person hat das Treffen schon geleitet.",
          "Die Person bestellt einen neuen Tisch."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "Welche Nachricht nennt eine Uhrzeit klar?",
        "answers": [
          "The meeting starts at 10 am.",
          "The meeting starts sometime.",
          "You know when it starts."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„Please see the attached file.“ Was soll die empfangende Person ansehen?",
        "answers": [
          "Die angehängte Datei.",
          "Nur den leeren Papierkorb.",
          "Eine nicht erwähnte Internetseite."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„Could you send me the address?“ Welche Information wird erbeten?",
        "answers": [
          "Die Adresse.",
          "Der Geburtstag.",
          "Eine Kontonummer, die nicht genannt wird."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "Welcher Satz ist eine sachliche Entschuldigung für eine späte Antwort?",
        "answers": [
          "I am sorry for my late reply.",
          "You should have waited forever.",
          "Your message was not worth reading."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
      },
      {
        "prompt": "„I look forward to your response.“ Was erwartet die Person?",
        "answers": [
          "Eine Rückmeldung.",
          "Eine sichere Einstellung ohne Gespräch.",
          "Die Löschung aller Unterlagen."
        ],
        "why": "Eine Nachricht nennt Anlass und Anliegen klar. Höflichkeit, passende Grußformeln und konkrete Angaben helfen der empfangenden Person."
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
    "wrongRules": [
      "Nicht genannte Informationen gelten automatisch als bestätigt.",
      "Jedes Schild bedeutet unabhängig vom Wortlaut dasselbe."
    ],
    "rows": [
      {
        "prompt": "„Open Monday to Friday, 9 am–5 pm.“ Wann ist laut Schild geöffnet?",
        "answers": [
          "An Werktagen Montag bis Freitag von 9 bis 17 Uhr.",
          "Nur am Sonntag.",
          "Jeden Tag rund um die Uhr."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Please return the tools after use.“ Was ist nach der Benutzung zu tun?",
        "answers": [
          "Die Werkzeuge zurückbringen.",
          "Die Werkzeuge behalten.",
          "Die Werkzeuge wegwerfen."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Meeting in Room 4 at 2 pm.“ Wo findet das Treffen statt?",
        "answers": [
          "In Raum 4.",
          "In Raum 2.",
          "Ein Raum wird nicht genannt."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Lunch break: 12:00–12:30.“ Wie lange dauert diese Pause?",
        "answers": [
          "30 Minuten.",
          "12 Minuten.",
          "60 Minuten."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Students need a valid ID.“ Was wird verlangt?",
        "answers": [
          "Ein gültiger Ausweis.",
          "Ein beliebiger Einkaufszettel.",
          "Eine rote Jacke."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„The bus stop has moved to Market Street.“ Was hat sich geändert?",
        "answers": [
          "Die Haltestelle ist jetzt in der Market Street.",
          "Die Busse fahren ab sofort nur nachts.",
          "Der Fahrpreis wurde verdoppelt."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„No entry without permission.“ Wann darf man eintreten?",
        "answers": [
          "Mit Erlaubnis.",
          "Immer ohne Rückfrage.",
          "Nur mit einer Einkaufsliste."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Training starts on 3 September.“ Welche Angabe enthält der Satz?",
        "answers": [
          "Das Startdatum des Trainings.",
          "Die Anzahl der Teilnehmenden.",
          "Den Preis der Schutzkleidung."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Bring a pen and a notebook.“ Was wird verlangt?",
        "answers": [
          "Ein Stift und ein Notizheft.",
          "Nur ein Taschenrechner.",
          "Eine Schere und Klebstoff."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„The lift is out of order.“ Was ist mit dem Aufzug?",
        "answers": [
          "Er funktioniert nicht.",
          "Er fährt besonders schnell.",
          "Er ist nur neu gestrichen."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Apply by email before Friday.“ Wie soll die Bewerbung erfolgen?",
        "answers": [
          "Vor Freitag per E-Mail.",
          "Nur persönlich am Sonntag.",
          "Nach Freitag per Telefon."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Please wait here until you are called.“ Was sollst du tun?",
        "answers": [
          "Hier warten, bis du aufgerufen wirst.",
          "Sofort ohne Aufruf hineingehen.",
          "Den Platz ohne Nachricht verlassen."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„Two volunteers are needed.“ Wie viele freiwillige Personen werden gesucht?",
        "answers": [
          "Zwei.",
          "Zwölf.",
          "Zwanzig."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„All prices include tax.“ Was steht über die Preise fest?",
        "answers": [
          "Die Steuer ist bereits enthalten.",
          "Die Steuer muss immer noch vollständig hinzugefügt werden.",
          "Die Preise sind alle kostenlos."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
      },
      {
        "prompt": "„The workshop is closed for maintenance.“ Warum ist die Werkstatt geschlossen?",
        "answers": [
          "Wegen Wartungsarbeiten.",
          "Wegen eines ausdrücklich genannten Konzerts.",
          "Wegen eines sicher feststehenden Schneesturms."
        ],
        "why": "Eine Antwort auf einen Aushang oder kurzen Text muss durch die Angaben darin gestützt sein. Zusätzliche Einzelheiten dürfen nicht erfunden werden."
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
    "wrongRules": [
      "Im bejahten simple present steht bei jedem Subjekt dieselbe Form mit -s.",
      "Das simple present wird immer mit „am“ und einer Grundform gebildet."
    ],
    "rows": [
      {
        "prompt": "Every morning, she ___ to school.",
        "answers": [
          "walks",
          "walk",
          "walking"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "We ___ English on Mondays.",
        "answers": [
          "learn",
          "learns",
          "learning"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "He usually ___ his homework after lunch.",
        "answers": [
          "does",
          "do",
          "doing"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "They ___ in a workshop every week.",
        "answers": [
          "work",
          "works",
          "working"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "My brother ___ the bus at seven every day.",
        "answers": [
          "takes",
          "take",
          "taking"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "I ___ the instructions before every task.",
        "answers": [
          "read",
          "reads",
          "reading"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "The machine ___ at eight every morning.",
        "answers": [
          "starts",
          "start",
          "starting"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "You usually ___ careful notes.",
        "answers": [
          "make",
          "makes",
          "making"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "Sara ___ the measurements every day.",
        "answers": [
          "checks",
          "check",
          "checking"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "We ___ our tools after every lesson.",
        "answers": [
          "clean",
          "cleans",
          "cleaning"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "The shop ___ at six on weekdays.",
        "answers": [
          "closes",
          "close",
          "closing"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "I ___ to music every evening.",
        "answers": [
          "listen",
          "listens",
          "listening"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "He ___ breakfast at home every morning.",
        "answers": [
          "has",
          "have",
          "having"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "They often ___ football after school.",
        "answers": [
          "play",
          "plays",
          "playing"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
      },
      {
        "prompt": "My teacher ___ every question clearly.",
        "answers": [
          "explains",
          "explain",
          "explaining"
        ],
        "why": "Das simple present beschreibt hier Gewohnheiten und regelmäßige Abläufe. Bei he, she und it hat das Vollverb in bejahten Sätzen meistens -s oder -es."
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
    "wrongRules": [
      "Nach am, is oder are steht im present progressive immer die Grundform ohne -ing.",
      "Das present progressive braucht niemals eine Form von „be“."
    ],
    "rows": [
      {
        "prompt": "Look! Mia ___ the instructions right now.",
        "answers": [
          "is reading",
          "reads usually",
          "is read"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "We ___ on the exercise at this moment.",
        "answers": [
          "are working",
          "is working",
          "are work"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "Listen! The phone ___.",
        "answers": [
          "is ringing",
          "are ringing",
          "is ring"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "I ___ my homework right now.",
        "answers": [
          "am doing",
          "is doing",
          "am do"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "They ___ the room at this moment.",
        "answers": [
          "are cleaning",
          "is cleaning",
          "are clean"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "He ___ to the supervisor right now.",
        "answers": [
          "is talking",
          "are talking",
          "is talk"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "Look! The bus ___.",
        "answers": [
          "is coming",
          "are coming",
          "is come"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "You ___ on my bag right now.",
        "answers": [
          "are sitting",
          "is sitting",
          "are sit"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "We ___ for the teacher at the moment.",
        "answers": [
          "are waiting",
          "is waiting",
          "are wait"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "She ___ a message right now.",
        "answers": [
          "is writing",
          "are writing",
          "is write"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "The children ___ in the park right now.",
        "answers": [
          "are playing",
          "is playing",
          "are play"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "I ___ to the explanation at this moment.",
        "answers": [
          "am listening",
          "are listening",
          "am listen"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "He ___ the door right now.",
        "answers": [
          "is opening",
          "are opening",
          "is open"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "Look! It ___ outside.",
        "answers": [
          "is raining",
          "are raining",
          "is rain"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
      },
      {
        "prompt": "The workers ___ the machine at this moment.",
        "answers": [
          "are repairing",
          "is repairing",
          "are repair"
        ],
        "why": "Das present progressive besteht aus am, is oder are und der -ing-Form. In diesen Aufgaben geht es ausdrücklich um eine Handlung, die gerade abläuft."
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
    "wrongRules": [
      "Regelmäßige Vergangenheitsformen werden immer mit -ing gebildet.",
      "Die Form mit -ed darf nur zu „he“ und „she“ verwendet werden."
    ],
    "rows": [
      {
        "prompt": "Yesterday, I ___ in the workshop.",
        "answers": [
          "worked",
          "work",
          "working"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "Last Monday, she ___ her desk.",
        "answers": [
          "cleaned",
          "cleans",
          "cleaning"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "We ___ the room yesterday.",
        "answers": [
          "painted",
          "paint",
          "painting"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "He ___ the measurements last week.",
        "answers": [
          "checked",
          "checks",
          "checking"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "They ___ football yesterday.",
        "answers": [
          "played",
          "plays",
          "playing"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "I ___ the window ten minutes ago.",
        "answers": [
          "opened",
          "open",
          "opening"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "The shop ___ early yesterday.",
        "answers": [
          "closed",
          "closes",
          "closing"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "She ___ English last evening.",
        "answers": [
          "studied",
          "studyed",
          "studying"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "The bus ___ outside our school yesterday.",
        "answers": [
          "stopped",
          "stoped",
          "stopping"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "We ___ the instructions yesterday.",
        "answers": [
          "followed",
          "follows",
          "following"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "He ___ the form last night.",
        "answers": [
          "completed",
          "complete",
          "completing"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "They ___ the manager yesterday.",
        "answers": [
          "called",
          "calls",
          "calling"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "I ___ my friend last weekend.",
        "answers": [
          "visited",
          "visit",
          "visiting"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "She ___ the computer yesterday.",
        "answers": [
          "used",
          "useed",
          "using"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
      },
      {
        "prompt": "We ___ at the station an hour ago.",
        "answers": [
          "arrived",
          "arrive",
          "arriving"
        ],
        "why": "Bei regelmäßigen Verben wird das simple past mit -ed gebildet. Bei manchen Wörtern ändert sich dabei die Schreibung, etwa study → studied und stop → stopped."
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
    "wrongRules": [
      "Jedes englische Verb bildet die Vergangenheit nur durch Anhängen von -ed.",
      "Past participle und simple past sind bei allen Verben identisch."
    ],
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
    "wrongRules": [
      "Nach „will“ muss das Vollverb immer -s bekommen.",
      "Nach „will“ steht grundsätzlich die Form mit -ed."
    ],
    "rows": [
      {
        "prompt": "Ergänze im will-future: I ___ you tomorrow.",
        "answers": [
          "will call",
          "will calls",
          "will called"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: She ___ the form later.",
        "answers": [
          "will complete",
          "will completes",
          "will completed"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: We ___ on Monday.",
        "answers": [
          "will start",
          "will starts",
          "will started"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: He ___ the tools back.",
        "answers": [
          "will bring",
          "will brings",
          "will brought"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: They ___ the room tomorrow.",
        "answers": [
          "will clean",
          "will cleans",
          "will cleaned"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: I ___ at the station.",
        "answers": [
          "will wait",
          "will waits",
          "will waited"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: Mia ___ the instructions.",
        "answers": [
          "will read",
          "will reads",
          "will reading"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: We ___ you next week.",
        "answers": [
          "will see",
          "will sees",
          "will saw"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: He ___ a new message.",
        "answers": [
          "will write",
          "will writes",
          "will wrote"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: You ___ the answer soon.",
        "answers": [
          "will know",
          "will knows",
          "will knew"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: The shop ___ at nine tomorrow.",
        "answers": [
          "will open",
          "will opens",
          "will opened"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: They ___ the machine later.",
        "answers": [
          "will repair",
          "will repairs",
          "will repaired"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: I ___ my bag tomorrow.",
        "answers": [
          "will pack",
          "will packs",
          "will packed"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: She ___ with the supervisor.",
        "answers": [
          "will speak",
          "will speaks",
          "will spoke"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
      },
      {
        "prompt": "Ergänze im will-future: We ___ the result.",
        "answers": [
          "will check",
          "will checks",
          "will checked"
        ],
        "why": "Das will-future besteht aus will und der Grundform des Verbs. Auch bei he und she bekommt die Grundform nach will kein zusätzliches -s."
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
    "wrongRules": [
      "„He“ ist grundsätzlich die Objektform nach „help“.",
      "Subjekt- und Objektformen sind bei allen Pronomen identisch."
    ],
    "rows": [
      {
        "prompt": "Mia is my sister. ___ is sixteen.",
        "answers": [
          "She",
          "He",
          "It"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "Ali is my brother. ___ works here.",
        "answers": [
          "He",
          "She",
          "It"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "The machine is new. ___ works well.",
        "answers": [
          "It",
          "He",
          "They"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "Mia and I are a team. ___ work together.",
        "answers": [
          "We",
          "Us",
          "They"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "These tools are clean. ___ are in the box.",
        "answers": [
          "They",
          "Them",
          "It"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "Please help ___ . (mich)",
        "answers": [
          "me",
          "I",
          "my"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "Can you see ___ ? (ihn)",
        "answers": [
          "him",
          "he",
          "his"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "I am talking to ___ . (sie, eine Person)",
        "answers": [
          "her",
          "she",
          "hers"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "The teacher helps ___ . (uns)",
        "answers": [
          "us",
          "we",
          "our"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "I can see ___ outside. (sie, mehrere Personen)",
        "answers": [
          "them",
          "they",
          "their"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "___ am ready. (ich)",
        "answers": [
          "I",
          "Me",
          "My"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "___ are welcome. (du)",
        "answers": [
          "You",
          "Your",
          "Yours"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "Please give the pen to ___ . (ihm)",
        "answers": [
          "him",
          "he",
          "his"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "The supervisor is speaking to ___ . (mir)",
        "answers": [
          "me",
          "I",
          "mine"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
      },
      {
        "prompt": "My friends are here. I will join ___ .",
        "answers": [
          "them",
          "they",
          "their"
        ],
        "why": "Ein Personalpronomen muss zur genannten Person oder Sache und zur Aufgabe im Satz passen. Subjekt- und Objektformen werden unterschieden."
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
    "wrongRules": [
      "Vor jedem Nomen muss statt „my“ grundsätzlich „mine“ stehen.",
      "„Its“ als Besitzform wird immer mit Apostroph geschrieben."
    ],
    "rows": [
      {
        "prompt": "I have a bag. This is ___ bag.",
        "answers": [
          "my",
          "mine",
          "me"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "You have a pen. This is ___ pen.",
        "answers": [
          "your",
          "yours",
          "you"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "He has a bike. This is ___ bike.",
        "answers": [
          "his",
          "he",
          "him"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "She has a folder. This is ___ folder.",
        "answers": [
          "her",
          "hers",
          "she"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "We have a classroom. This is ___ classroom.",
        "answers": [
          "our",
          "ours",
          "us"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "They have tools. These are ___ tools.",
        "answers": [
          "their",
          "theirs",
          "them"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "The dog is eating ___ food.",
        "answers": [
          "its",
          "it's",
          "it"
        ],
        "why": "„Its“ ist die Besitzform ohne Apostroph. „It's“ bedeutet „it is“ oder „it has“."
      },
      {
        "prompt": "This pen belongs to me. It is ___.",
        "answers": [
          "mine",
          "my",
          "me"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "This jacket belongs to you. It is ___.",
        "answers": [
          "yours",
          "your",
          "you"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "These books belong to us. They are ___.",
        "answers": [
          "ours",
          "our",
          "us"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "That desk belongs to them. It is ___.",
        "answers": [
          "theirs",
          "their",
          "them"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "The folder belongs to Mia, my sister. It is ___.",
        "answers": [
          "hers",
          "her",
          "she"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "My brother forgot ___ keys.",
        "answers": [
          "his",
          "he",
          "him"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "Mia and I packed ___ bags.",
        "answers": [
          "our",
          "ours",
          "us"
        ],
        "why": "Possessive Formen nennen die Zugehörigkeit. Vor einem Nomen stehen zum Beispiel my, your und their; allein stehen etwa mine, yours und theirs."
      },
      {
        "prompt": "The company changed ___ address.",
        "answers": [
          "its",
          "it's",
          "it"
        ],
        "why": "Die Firma hat eine zugehörige Adresse. Dafür steht die Besitzform „its“."
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
    "wrongRules": [
      "Vor jedem Wochentag steht grundsätzlich „in“.",
      "Alle Orts- und Zeitangaben benötigen dieselbe Präposition."
    ],
    "rows": [
      {
        "prompt": "The lesson starts ___ eight o'clock.",
        "answers": [
          "at",
          "on",
          "in"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "We meet ___ Monday.",
        "answers": [
          "on",
          "in",
          "to"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "My birthday is ___ July.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The book is ___ the table. (auf dem Tisch)",
        "answers": [
          "on",
          "under",
          "behind"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The bag is ___ the desk. (unter dem Tisch)",
        "answers": [
          "under",
          "on",
          "above"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "She lives ___ Germany.",
        "answers": [
          "in",
          "on",
          "to"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "I go ___ school by bus.",
        "answers": [
          "to",
          "on",
          "under"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "We work ___ the morning.",
        "answers": [
          "in",
          "on",
          "to"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The picture is ___ the wall.",
        "answers": [
          "on",
          "under",
          "into"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The chair is ___ the door. (hinter der Tür)",
        "answers": [
          "behind",
          "above",
          "on"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The shop is ___ the bank. (neben der Bank)",
        "answers": [
          "next to",
          "inside",
          "under"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "We have a break ___ noon.",
        "answers": [
          "at",
          "on",
          "to"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The training starts ___ September.",
        "answers": [
          "in",
          "on",
          "under"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "The keys are ___ the box. (in der Kiste)",
        "answers": [
          "in",
          "on",
          "above"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
      },
      {
        "prompt": "I was born ___ 2009.",
        "answers": [
          "in",
          "on",
          "at"
        ],
        "why": "Die Präposition hängt von der Beziehung und der festen Verbindung ab. Bei Uhrzeiten steht hier at, bei Wochentagen on und bei Monaten in."
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
    "wrongRules": [
      "Nach „does“ erhält das Vollverb in einer Frage immer zusätzlich -s.",
      "Jede englische Frage hat genau dieselbe Wortstellung wie ein bejahter Aussagesatz."
    ],
    "rows": [
      {
        "prompt": "___ you work here?",
        "answers": [
          "Do",
          "Does",
          "Are to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "___ she live in Lahr?",
        "answers": [
          "Does",
          "Do",
          "Is to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "Where ___ he work?",
        "answers": [
          "does",
          "do",
          "are"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "When ___ they start?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "___ you ready?",
        "answers": [
          "Are",
          "Is",
          "Do to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "___ he your teacher?",
        "answers": [
          "Is",
          "Are",
          "Does to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "What time ___ the bus leave?",
        "answers": [
          "does",
          "do",
          "are"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "Where ___ your keys?",
        "answers": [
          "are",
          "is",
          "does"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "Why ___ you need this tool?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "___ she speak English?",
        "answers": [
          "Does",
          "Do",
          "Are to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "How ___ I open this box?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "___ we need safety goggles?",
        "answers": [
          "Do",
          "Does",
          "Is to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "Where ___ Mia and Ali live?",
        "answers": [
          "do",
          "does",
          "is"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "___ the machine working now?",
        "answers": [
          "Is",
          "Are",
          "Do to"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
      },
      {
        "prompt": "What ___ this word mean?",
        "answers": [
          "does",
          "do",
          "are"
        ],
        "why": "Im simple present brauchen Fragen mit Vollverben meist do oder does. Nach does steht das Vollverb in der Grundform. Bei be wird die Verbform vor das Subjekt gestellt."
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
    "wrongRules": [
      "Nach „does not“ wird das Vollverb immer noch mit -s geschrieben.",
      "Jede Verneinung braucht auch nach „is“ zusätzlich „do“."
    ],
    "rows": [
      {
        "prompt": "Verneine im simple present: I ___ work on Sundays.",
        "answers": [
          "do not",
          "does not",
          "am not to"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "Verneine im simple present: She ___ drive to school.",
        "answers": [
          "does not",
          "do not",
          "is not to"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "We ___ ready. (mit be verneinen)",
        "answers": [
          "are not",
          "do not be",
          "does not be"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "He ___ here today. (mit be verneinen)",
        "answers": [
          "is not",
          "do not is",
          "does not be"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "They ___ understand the task.",
        "answers": [
          "do not",
          "does not",
          "is not"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "Verneine korrekt: She does not ___ this tool.",
        "answers": [
          "need",
          "needs",
          "needed"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "Verneine korrekt: He does not ___ here.",
        "answers": [
          "work",
          "works",
          "working"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "I ___ a teacher. (mit be verneinen)",
        "answers": [
          "am not",
          "do not am",
          "does not am"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "You ___ leave the door open. (darfst nicht)",
        "answers": [
          "must not",
          "must to not",
          "do must not"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "We ___ hear you. (können nicht)",
        "answers": [
          "cannot",
          "do cannot",
          "can not to"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "Verneine im simple present: The shop ___ open on Sundays.",
        "answers": [
          "does not",
          "do not",
          "is not to"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "Verneine im simple present: My friends ___ live here.",
        "answers": [
          "do not",
          "does not",
          "is not"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "She ___ reading now. (mit be verneinen)",
        "answers": [
          "is not",
          "does not is",
          "do not"
        ],
        "why": "Im simple present verneint man Vollverben hier mit do not oder does not und Grundform. Bei be und Modalverben steht not ohne do."
      },
      {
        "prompt": "Verneine korrekt: He did not ___ the bus yesterday.",
        "answers": [
          "take",
          "took",
          "taken"
        ],
        "why": "Nach „did not“ steht die Grundform „take“."
      },
      {
        "prompt": "Verneine korrekt: We will not ___ late.",
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
    "wrongRules": [
      "„Than“ verlangt grundsätzlich die Grundform des Adjektivs.",
      "„Good“ wird im Komparativ immer zu „gooder“."
    ],
    "rows": [
      {
        "prompt": "This box is ___ than that one. (big)",
        "answers": [
          "bigger",
          "big",
          "biggest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "My bag is ___ than yours. (heavy)",
        "answers": [
          "heavier",
          "heavy",
          "heaviest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This road is ___ than the old road. (wide)",
        "answers": [
          "wider",
          "wide",
          "widest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "The new bus is ___ than the old bus. (fast)",
        "answers": [
          "faster",
          "fast",
          "fastest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This chair is ___ than the other chair. (small)",
        "answers": [
          "smaller",
          "small",
          "smallest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This explanation is ___ than the last one. (good)",
        "answers": [
          "better",
          "gooder",
          "best"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "The weather is ___ today than yesterday. (bad)",
        "answers": [
          "worse",
          "badder",
          "worst"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This task is ___ than the first task. (easy)",
        "answers": [
          "easier",
          "easy",
          "easiest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "The workshop is ___ than the classroom. (noisy)",
        "answers": [
          "noisier",
          "noisy",
          "noisiest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This tool is ___ than that tool. (expensive)",
        "answers": [
          "more expensive",
          "expensiver",
          "most expensive"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This route is ___ than the other route. (short)",
        "answers": [
          "shorter",
          "short",
          "shortest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "The new machine is ___ than the old one. (quiet)",
        "answers": [
          "quieter",
          "quiet",
          "quietest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This text is ___ than that text. (interesting)",
        "answers": [
          "more interesting",
          "interestinger",
          "most interesting"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "The red car is ___ than the blue car. (old)",
        "answers": [
          "older",
          "old",
          "oldest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
      },
      {
        "prompt": "This method is ___ than the first method. (safe)",
        "answers": [
          "safer",
          "safe",
          "safest"
        ],
        "why": "Vergleiche verwenden die passende Steigerungsform. Nach einem Komparativ kann than stehen; unregelmäßige Formen wie good → better müssen beachtet werden."
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
    "wrongRules": [
      "„Must not“ bedeutet, dass etwas nicht nötig ist, aber erlaubt bleibt.",
      "Nach einem Modalverb muss immer „to“ vor der Grundform stehen."
    ],
    "rows": [
      {
        "prompt": "Übersetze „Ich kann schwimmen“: I ___ swim.",
        "answers": [
          "can",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Du musst eine Schutzbrille tragen“: You ___ wear safety goggles.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Du darfst hier nicht rauchen“: You ___ smoke here.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Du solltest mehr üben“: You ___ practise more.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Er kann gut lesen“: He ___ read well.",
        "answers": [
          "can",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Wir müssen pünktlich sein“: We ___ be on time.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Du darfst das nicht berühren“: You ___ touch it.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Ich kann dich nicht hören“: I ___ hear you.",
        "answers": [
          "cannot",
          "must",
          "should"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Sie sollte den Arzt anrufen“: She ___ call the doctor.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Ihr müsst warten“: You ___ wait.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Sie können die Maschine bedienen“: They ___ operate the machine.",
        "answers": [
          "can",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Wir sollten die Maße prüfen“: We ___ check the measurements.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Er darf hier nicht parken“: He ___ park here.",
        "answers": [
          "must not",
          "must",
          "should"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Ich muss jetzt gehen“: I ___ go now.",
        "answers": [
          "must",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      },
      {
        "prompt": "Übersetze „Du solltest um Hilfe bitten“: You ___ ask for help.",
        "answers": [
          "should",
          "must not",
          "cannot"
        ],
        "why": "Modalverben drücken unterschiedliche Bedeutungen aus. Can bezeichnet hier Fähigkeit, must eine Verpflichtung, must not ein Verbot und should einen Rat."
      }
    ]
  }
];
