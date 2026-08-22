import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_DE: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Reinigungsfirmen-Software | Teams planen, verfolgen & bezahlen | TidyFlow",
    seoDescription:
      "TidyFlow ist Software für Reinigungsunternehmen: Einsatzplanung, GPS-verifizierte Außendienstarbeit, Fotobeweise, Lohnabrechnung aus verifizierten Stunden und Kundenberichte — online oder offline.",
    keywords:
      "Reinigungsfirmen-Software, Reinigungsunternehmen Plattform, Gebäudereinigung Operations Software, Reinigungs-App Außendienst, Reinigungs-Dispatch Software, TidyFlow",
    eyebrow: "Reinigungsfirmen-Software",
    h1: "Das Betriebssystem für Reinigungsunternehmen",
    heroSubtitle:
      "TidyFlow verbindet Inhaber, Manager und Reinigungskräfte auf einer Plattform — planen Sie wiederkehrende Aufträge, verifizieren Sie Arbeit vor Ort mit GPS und Fotos, führen Sie Lohnabrechnung aus erfassten Stunden durch und senden Sie Nachweise an Kunden.",
    navLabel: "Reinigungsfirmen-Software",
    problems: {
      title: "Was schiefgeht, wenn Sie ein Reinigungsunternehmen mit Tabellen und Gruppenchats führen",
      items: [
        "Wiederkehrende Verträge liegen in einer Tabelle, die Verfügbarkeit der Kräfte in einer anderen, Kundenbeschwerden in WhatsApp.",
        "Manager sehen nicht, ob ein Team einen Auftrag wirklich begonnen hat oder nur am Gebäude vorbeigefahren ist.",
        "Lohnstreitigkeiten entstehen, weil Stunden aus dem Gedächtnis eingetragen wurden statt vor Ort verifiziert.",
        "Kunden verlangen Arbeitsnachweise und Sie suchen verzweifelt Fotos in der Kamerarolle.",
        "Außendienstteams verlieren Signal in Kellern, Parkhäusern und Technikräumen — und können den Auftrag in der App nicht abschließen.",
      ],
    },
    solution: {
      title: "Eine Plattform von der Planung über den Nachweis bis zur Lohnabrechnung",
      paragraphs: [
        "TidyFlow ist speziell für Reinigungsunternehmen-Operationen entwickelt — nicht für generischen Außendienst. Inhaber erhalten Umsatztransparenz und Abonnementkontrolle. Manager erstellen Dienstpläne, weisen Kräfte zu und prüfen GPS-verifizierte Abschlüsse. Reinigungskräfte erhalten eine einfache mobile Auftragsliste mit Offline-Checklisten, Timern und Foto-Upload.",
        "Wenn ein Auftrag abgeschlossen ist, fließen Stunden in Lohn-Workflows, Fotos können PDF-Kundenberichte erzeugen, und Manager behalten einen Audit-Trail ohne Nachrichten in fünf Apps zu verfolgen.",
      ],
    },
    features: [
      {
        title: "Auftragsplanung & wiederkehrende Verträge",
        description: "Kalender, Dienstplan-Builder und wiederkehrende Objektbesuche mit urlaubsbewusster Zuweisung.",
        benefit: "Hören Sie auf, die Woche jeden Sonntagabend in Tabellen neu aufzubauen.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Reinigungs-Planungssoftware",
      },
      {
        title: "GPS-verifiziertes Außendienst-Tracking",
        description: "Standort wird bei Start und Abschluss geprüft; Live-GPS während aktiver Aufträge in unterstützten Workflows.",
        benefit: "Wissen Sie, welche Objekte wirklich gereinigt wurden — nicht nur behauptet.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Zeiterfassung für Reinigungskräfte",
      },
      {
        title: "Lohnabrechnung aus verifizierten Stunden",
        description: "Auftrags-Timer, Arbeitsstunden-Freigabe und Lohnläufe aus erfasster Auftragszeit.",
        benefit: "Weniger Streitigkeiten mit Stunden, die an abgeschlossene Arbeit gebunden sind.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Reinigungs-Lohnsoftware",
      },
      {
        title: "Offline-Außendienst-Operationen",
        description: "Vollständiger Auftragsabschluss ohne Internet — Checklisten, Timer, Fotos in Warteschlange und spätere Synchronisation.",
        benefit: "Kräfte schließen Aufträge in schlecht empfangenen Gebäuden ab statt ins Büro zu rufen.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline-Reinigungs-App",
      },
    ],
    howItWorks: {
      title: "Planen → Zuweisen → Verfolgen → Verifizieren → Berichten",
      steps: [
        { title: "Planen", description: "Erstellen Sie Einzel- oder wiederkehrende Aufträge per Web oder Mobile. Synchronisieren Sie mit Google Sheets, wenn Ihr Team noch eine Master-Liste pflegt." },
        { title: "Zuweisen", description: "Ziehen Sie Kräfte auf den Dienstplan. KI kann basierend auf Historie, Standort und Urlaub einen passenden Vorschlag machen — Manager bestätigen immer." },
        { title: "Verfolgen", description: "Kräfte starten den Auftrags-Timer vor Ort. GPS-Verifizierung markiert Starts und Abschlüsse fern vom Objekt." },
        { title: "Verifizieren", description: "Checklisten, Vorher/Nachher-Fotos und optionale KI-Fotobewertung liefern Managern Qualitätsnachweise." },
        { title: "Berichten", description: "Erzeugen Sie PDF-Auftragsberichte oder teilen Sie einen Kundenportal-Link. Stunden fließen in Lohn- und Rechnungs-Workflows." },
      ],
    },
    useCases: {
      title: "Reinigungsunternehmen, die mit TidyFlow arbeiten",
      items: [
        { title: "Gewerbe- & Vertragsreinigung", description: "Multi-Standort-Verträge mit wiederkehrenden Besuchen, Kundennachweisen und Manager-QA-Workflows." },
        { title: "Hausmeister- & Facility-Teams", description: "Nachtschichten, Technikräume und Gebäude mit schlechtem Empfang — Offline-Modus hält Teams in Bewegung." },
        { title: "Wachsende lokale Unternehmen", description: "Ersetzen Sie Tabellen-Chaos beim Hinzufügen von Objekten und Kräften, ohne zuerst einen Ops-Admin einzustellen." },
        { title: "Mehrsprachige Teams", description: "Plattform in 11 Sprachen für Inhaber, Manager und Außendienst." },
      ],
    },
    faqs: [
      { q: "Was ist Reinigungsfirmen-Software?", a: "Software, die Reinigungsunternehmen hilft, Aufträge zu planen, Kräfte zu verwalten, Außendienstarbeit zu verfolgen, Qualität zu verifizieren und Lohn oder Kundenabrechnung aus einem System statt Tabellen und Messenger-Apps zu führen." },
      { q: "Ist TidyFlow nur für große Unternehmen?", a: "Nein. Pläne starten bei 25 $/Monat für kleinere Teams. Sie können Planung, Außendienst-Tracking und Nachweise mit wachsendem Personal ohne Enterprise-Setup betreiben." },
      { q: "Funktioniert TidyFlow offline?", a: "Ja. Kräfte können Checklisten abschließen, den Auftrags-Timer starten und Fotos offline erfassen. Daten synchronisieren bei wiederhergestellter Verbindung." },
      { q: "Kann ich Google Sheets weiter nutzen?", a: "Ja. TidyFlow bietet bidirektionale Google-Sheets-Synchronisation, damit Sie eine Tabellen-Masterliste behalten, während die App die Außendienstarbeit übernimmt." },
      { q: "Wie starte ich?", a: "Starten Sie eine 14-tägige kostenlose Testversion von der Preisseite. Inhaber richten Objekte ein, laden Kräfte ein und weisen die ersten Aufträge per Web oder Mobile zu." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Reinigungs-Management-Software | Operations-Kontrolle | TidyFlow",
    seoDescription:
      "Reinigungs-Management-Software für Inhaber und Ops-Manager — Dienstpläne, Live-Auftragsstatus, Teamurlaub, Issue-Tracking, Lohnfreigabe und Kundennachweise in einem Dashboard.",
    keywords:
      "Reinigungs-Management-Software, Reinigungs-Operations-Plattform, Gebäudereinigung-Managementsystem, Reinigungsunternehmen-Management, TidyFlow",
    eyebrow: "Reinigungs-Management-Software",
    h1: "Reinigungs-Operationen aus einem Management-Dashboard steuern",
    heroSubtitle:
      "Geben Sie Managern Sichtbarkeit in Pläne, Außendienst-Abschlüsse, Qualitätsprüfungen und Lohnfreigaben — ohne Kräfte auf WhatsApp zu verfolgen oder Dienstpläne in Tabellen neu aufzubauen.",
    navLabel: "Reinigungs-Management",
    problems: {
      title: "Warum Reinigungs-Operationen in der Skalierung scheitern",
      items: [
        "Der Inhaber ist die einzige Person, die weiß, welcher Kunde am Donnerstag unterbesetzt ist.",
        "Manager tippen dieselben wiederkehrenden Aufträge jede Woche neu ein, weil nichts Vertragsbesuche automatisiert.",
        "Qualitätsbeschwerden kommen an, bevor jemand Fotos oder Checklistenergebnisse vom Auftrag prüft.",
        "Urlaubsanträge liegen in Nachrichten und der Dienstplan wird mit bekannten Konflikten veröffentlicht.",
        "Lohnfreigabe bedeutet, handschriftliche Stundenzettel mit Erinnerungen zu vergleichen.",
      ],
    },
    solution: {
      title: "Management-Tools verbunden mit echten Außendienst-Daten",
      paragraphs: [
        "TidyFlow Management-Software verbindet Planung, Team-HR und Außendienst-Ausführung. Manager sehen Auftragsstatus-Updates in Echtzeit, prüfen GPS-verifizierte Abschlüsse und genehmigen Stunden vor Lohnläufen.",
        "Issue-Tracking, QA-Bewertung und Kundennachweise liegen neben dem Dienstplan — Management-Entscheidungen nutzen dieselben Daten, die Kräfte vor Ort erzeugen.",
      ],
    },
    features: [
      {
        title: "Dienstplan-Builder mit Urlaubsbewusstsein",
        description: "Drag-and-Drop-Zuweisung, die genehmigten Urlaub und Verfügbarkeit respektiert.",
        benefit: "Dienstpläne ohne manuelle Konfliktprüfung veröffentlichen.",
        linkHref: "/features",
        linkLabel: "Team- & Planungsfunktionen",
      },
      {
        title: "Echtzeit-Auftragsstatus",
        description: "Sehen Sie, wann Aufträge starten, pausieren und abschließen — über alle Objekte.",
        benefit: "Eingreifen, bevor ein verpasster Besuch zur Kundeneskalation wird.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planungssoftware",
      },
      {
        title: "QA- & Issue-Workflows",
        description: "Manager-Qualitätsprüfungen, Issue-Logs und Fotobeweise bei abgeschlossenen Aufträgen.",
        benefit: "Beschwerden mit auftragsspezifischen Audit-Trails bearbeiten.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektions-Software",
      },
      {
        title: "Inhaber-Umsatz-Dashboard",
        description: "Finanzielle Transparenz und Revenue-AI-Einblicke in unterstützten Plänen.",
        benefit: "Inhaber sehen Performance ohne fünf Berichte zu exportieren.",
        linkHref: "/pricing",
        linkLabel: "Pläne & Preise",
      },
    ],
    howItWorks: {
      title: "Planen → Zuweisen → Überwachen → Prüfen → Freigeben",
      steps: [
        { title: "Planen", description: "Bauen Sie die Woche in Kalender- oder Dienstplan-Ansicht. Wiederkehrende Aufträge erzeugen automatisch Vertragsbesuche." },
        { title: "Zuweisen", description: "Setzen Sie Kräfte auf Aufträge. KI-Empfehlungen optional — Manager wählen finale Zuweisungen." },
        { title: "Überwachen", description: "Verfolgen Sie Starts, GPS-Markierungen und Checklisten-Fortschritt im Management-Dashboard." },
        { title: "Prüfen", description: "Öffnen Sie abgeschlossene Aufträge für Fotos, QA-Scores und kundenorientierte Berichtsentwürfe." },
        { title: "Freigeben", description: "Genehmigen Sie Arbeitsstunden und Lohnläufe aus verifizierter Auftragszeit." },
      ],
    },
    useCases: {
      title: "Management-Szenarien, die TidyFlow unterstützt",
      items: [
        { title: "Operations-Manager", description: "Täglicher Dispatch, Qualitäts-Follow-up und Teamkoordination über mehrere Standorte." },
        { title: "Unternehmensinhaber", description: "Abonnementkontrolle, Umsatzsicht und Nachweis, dass Verträge bedient werden." },
        { title: "Multi-Standort-Supervisoren", description: "Abschlussstatus und Issues über Objekte hinweg an einem Ort vergleichen." },
        { title: "Franchise-Koordinatoren", description: "Konsistente Workflows und rollenbasierter Zugriff beim Teamwachstum." },
      ],
    },
    faqs: [
      { q: "Was sollte Reinigungs-Management-Software enthalten?", a: "Mindestens: Planung, Teamzuweisung, Außendienststatus, Zeiterfassung, Qualitätsnachweis und Lohn- oder Stundenfreigabe. TidyFlow deckt dies auf einer Plattform ab." },
      { q: "Können Manager TidyFlow mobil nutzen?", a: "Ja. Manager können planen, zuweisen und Aufträge per Mobile oder Web prüfen." },
      { q: "Wie funktioniert rollenbasierter Zugriff?", a: "Inhaber, Manager und Kräfte sehen unterschiedliche Bildschirme. Kräfte erhalten Auftragslisten und Außendienst-Tools; Manager erhalten Dienstplan, Freigaben und Berichte." },
      { q: "Ersetzt TidyFlow meinen Steuerberater?", a: "Nein. TidyFlow verwaltet Operationen und kann Rechnungen mit QuickBooks Online synchronisieren. Ihr Steuerberater bleibt für Steuern und Buchhaltungsstrategie zuständig." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Gebäudereinigungs-Software | Nachtschichten & Multi-Standort-Teams | TidyFlow",
    seoDescription:
      "Gebäudereinigungs-Software für Vertragsreiniger — wiederkehrende Objektbesuche, Offline-Außendienst-App, GPS-Stempeln, Checklisten und Nachweise für Facility-Kunden.",
    keywords:
      "Gebäudereinigungs-Software, Gebäudereinigung-Management-Software, Gebäudereinigung-Planungs-App, Vertrags-Gebäudereinigung-Software, TidyFlow",
    eyebrow: "Gebäudereinigungs-Software",
    h1: "Gebäudereinigungs-Software für Vertragsarbeit vor Ort",
    heroSubtitle:
      "Führen Sie wiederkehrende Gebäudereinigungs-Routen in Büros, Schulen und Einrichtungen. Kräfte arbeiten offline in Technikräumen und Kellern, während Manager jeden Besuch mit GPS, Checklisten und Fotos verifizieren.",
    navLabel: "Gebäudereinigungs-Software",
    problems: {
      title: "Gebäudereinigungs-Verträge scheitern, wenn die Außendienst-App scheitert",
      items: [
        "Nachtteams treffen auf Funklöcher in Treppenhäusern und können den Abschluss nicht protokollieren.",
        "Vertretungskräfte kommen ohne Objektnotizen an, die in einem Gruppenchat lagen.",
        "Facility Manager verlangen Nachweise und Sie senden eine generische E-Mail ohne Zeitstempel.",
        "Scope-Creep bei zusätzlichen Räumen bleibt unsichtbar bis zur Rechnungsstellung.",
        "Mehrere Gebäude teilen einen Supervisor, der nicht physisch jeden Startzeitpunkt verifizieren kann.",
      ],
    },
    solution: {
      title: "Vertrags-Gebäudereinigungs-Workflows in einem System",
      paragraphs: [
        "TidyFlow unterstützt wiederkehrende Gebäudereinigungs-Pläne, objektspezifische Checklisten und Offline-Auftragsabschluss — die Kombination, die Vertragsreiniger brauchen, wenn jedes Gebäude andere Zugangsregeln und Signalqualität hat.",
        "Aufgaben-Chat hält Objektanweisungen am Auftrag. GPS-Verifizierung und Fotobeweise liefern Facility-Kunden Nachweise ohne extra Admin-Aufwand.",
      ],
    },
    features: [
      {
        title: "Wiederkehrende Gebäudereinigungs-Routen",
        description: "Automatisieren Sie wöchentliche und monatliche Besuche pro Objekt mit Teamzuweisung.",
        benefit: "Vertragspläne regenerieren ohne manuelles Kopieren.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planungssoftware",
      },
      {
        title: "Offline-Gebäudereinigungs-App",
        description: "Timer, Checkliste und Fotos ohne Verbindung; Sync bei Wiederverbindung.",
        benefit: "Nachtteams schließen Aufträge unter Tage ab statt die App zu überspringen.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline-Reinigungssoftware",
      },
      {
        title: "Objekt-Checklisten & Fotos",
        description: "Raum-für-Raum-Aufgaben mit Vorher/Nachher-Nachweisen beim Abschluss.",
        benefit: "Leistungsumfang für QA und Kundenstreitigkeiten dokumentieren.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektion & QC",
      },
      {
        title: "SOS-Sicherheitsknopf",
        description: "Ein-Tipp-Alarm an Manager für Alleinarbeiter in Spätschichten.",
        benefit: "Geben Sie Nacht-Reinigern eine direkte Sicherheitsleitung vom Auftragsbildschirm.",
        linkHref: "/features",
        linkLabel: "Außendienst-Sicherheitsfunktionen",
      },
    ],
    howItWorks: {
      title: "Vertrag → Planen → Ausführen → Nachweisen → Abrechnen",
      steps: [
        { title: "Vertrag", description: "Richten Sie Objekte mit Zugangsnotizen und Checklisten-Vorlagen pro Standort ein." },
        { title: "Planen", description: "Erstellen Sie wiederkehrende Gebäudereinigungs-Besuche und weisen Sie feste Teams oder rotierendes Personal zu." },
        { title: "Ausführen", description: "Kräfte führen den Auftrag offline oder online aus — Timer, Checkliste, Fotos vor Ort." },
        { title: "Nachweisen", description: "Manager prüfen GPS-verifizierten Abschluss und Fotobeweise." },
        { title: "Abrechnen", description: "Rechnen Sie Kunden aus abgeschlossener Arbeit ab; synchronisieren Sie Rechnungen mit QuickBooks in unterstützten Plänen." },
      ],
    },
    useCases: {
      title: "Gebäudereinigungs-Teams mit TidyFlow",
      items: [
        { title: "Büro- & Unternehmens-Gebäudereinigung", description: "Reinigung außerhalb der Geschäftszeiten mit Kunden-PDF-Nachweisen." },
        { title: "Bildung & öffentliche Gebäude", description: "Mehrstöckige Objekte mit schlechtem Innensignal — Offline-Modus inklusive." },
        { title: "Industrie- & Anlagen-Gebäudereinigung", description: "Checklisten für gesperrte Bereiche und sicherheitsrelevante Zonen." },
        { title: "Subunternehmer-Gebäudereiniger", description: "Rollenbasierter Zugriff für kundenorientierte Manager und Außendienst." },
      ],
    },
    faqs: [
      { q: "Ist TidyFlow Gebäudereinigungs- oder Privatreinigungs-Software?", a: "TidyFlow ist für professionelle Reinigungsoperationen gebaut — Gewerbe, Gebäudereinigung und Vertragsarbeit sind der Hauptfokus." },
      { q: "Können Gebäudereiniger ohne Signal stempeln?", a: "Ja. Die Außendienst-App stellt GPS und Auftragsereignisse offline in Warteschlange und synchronisiert bei wiederhergestellter Verbindung." },
      { q: "Können wir Nachweise mit Facility Managern teilen?", a: "Ja. PDF-Auftragsberichte und sichere Kundenportal-Links teilen Abschlussnachweise." },
      { q: "Unterstützt TidyFlow wiederkehrende Nachtschichten?", a: "Ja. Wiederkehrende Aufträge und Dienstplan-Tools unterstützen feste Nachtrouten und rotierende Teams." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Gewerbereinigungs-Software | Multi-Standort-Verträge | TidyFlow",
    seoDescription:
      "Gewerbereinigungs-Software für Büro-, Retail- und Facility-Verträge — Planung, QC-Inspektionen, Kundennachweise, Rechnungsstellung und Teammanagement.",
    keywords:
      "Gewerbereinigungs-Software, Büroreinigungs-Software, Vertragsreinigungs-Plattform, Facility-Reinigungs-Software, TidyFlow",
    eyebrow: "Gewerbereinigungs-Software",
    h1: "Gewerbereinigungs-Software für Vertrags-Operationen",
    heroSubtitle:
      "Verwalten Sie Multi-Standort-Gewerbeverträge mit wiederkehrenden Plänen, Inspektions-Checklisten, Fotobeweisen für Kunden und Lohnabrechnung aus verifizierten Außendienst-Stunden.",
    navLabel: "Gewerbereinigung",
    problems: {
      title: "Gewerbeverträge brauchen mehr als eine Kalender-App",
      items: [
        "Jedes Kundenobjekt hat anderen Leistungsumfang, Schlüssel und Inspektionsstandards.",
        "Account Manager versprechen Qualität, aber Ops hat keine zentrale QC-Aufzeichnung.",
        "Zusatz-Aufträge gehen zwischen E-Mail und Wochendienstplan verloren.",
        "Rechnungen gehen raus, bevor jemand bestätigt, dass alle geplanten Besuche abgeschlossen sind.",
        "Kundenabwanderung folgt einer verpassten Grundreinigung, die niemand dokumentiert hat.",
      ],
    },
    solution: {
      title: "Gewerbe-Workflows vom Angebot bis zum Nachweis",
      paragraphs: [
        "TidyFlow verbindet Gewerbe-Planung mit Qualitätsverifizierung und kundenorientierten Berichten. Manager führen QA-Bewertung auf abgeschlossenen Aufträgen durch, protokollieren Issues pro Objekt und teilen gebrandete PDF-Nachweise.",
        "Rechnungsstellung und QuickBooks-Sync in unterstützten Plänen halten Finanzen mit abgeschlossener Vertragsarbeit im Einklang.",
      ],
    },
    features: [
      {
        title: "Multi-Objekt-Planung",
        description: "Kalender und wiederkehrende Aufträge über Gewerbe-Portfolios.",
        benefit: "Eine Ansicht jedes Objekts im Vertrag.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planung",
      },
      {
        title: "Kundennachweise & PDF-Berichte",
        description: "Gebrandete Download-Berichte und sichere Portal-Links.",
        benefit: "Facility Managern Nachweise ohne manuelle Foto-E-Mails liefern.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektion & Nachweis",
      },
      {
        title: "Kundenrechnungsstellung",
        description: "Rechnung aus abgeschlossenen Aufgaben mit Positionen.",
        benefit: "Abrechnung nach verifizierten Abschlüssen, nicht Schätzungen.",
        linkHref: "/integrations",
        linkLabel: "QuickBooks-Integration",
      },
      {
        title: "Issue-Tracking",
        description: "Objekt-Issues vom Außendienst oder Büro protokollieren und lösen.",
        benefit: "Schließen Sie den Kreis, wenn ein Objekt ein Problem meldet.",
        linkHref: "/features",
        linkLabel: "Qualitätsfunktionen",
      },
    ],
    howItWorks: {
      title: "Leistungsumfang → Planen → Durchführen → Inspizieren → Abrechnen",
      steps: [
        { title: "Leistungsumfang", description: "Definieren Sie Objekte, Checklisten und Zugangsnotizen pro Gewerbekunde." },
        { title: "Planen", description: "Legen Sie wiederkehrende Servicefrequenz fest und weisen Sie Teams zu." },
        { title: "Durchführen", description: "Kräfte schließen Aufträge mit Timer, GPS und Checkliste auf Mobile ab." },
        { title: "Inspizieren", description: "Manager prüfen abgeschlossene Arbeit mit Fotos und Bewertungs-Workflows." },
        { title: "Abrechnen", description: "Rechnen Sie Kunden ab und synchronisieren Sie optional mit QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Gewerbereinigungs-Anwendungsfälle",
      items: [
        { title: "Büro- & Coworking-Betreiber", description: "Täglicher und wöchentlicher Service mit kundensichtbarem Nachweis." },
        { title: "Retail- & Hospitality-Ketten", description: "Mehrere Standorte mit konsistenten Checklisten." },
        { title: "Immobilienverwaltungs-Portfolios", description: "Issues und Besuche über Gebäude hinweg verfolgen." },
        { title: "B2B-Vertragsreiniger", description: "Ops-Sichtbarkeit für Inhaber, die an Facility Manager verkaufen." },
      ],
    },
    faqs: [
      { q: "Was ist Gewerbereinigungs-Software?", a: "Software, die B2B-Reinigungsunternehmen hilft, Vertragsobjekte zu planen, Serviceleistung zu verifizieren, Teams zu verwalten und Kunden von einer Plattform abzurechnen." },
      { q: "Können Kunden Auftragsfotos sehen?", a: "Sie kontrollieren kundenorientierte Nachweise über PDF-Berichte und Portal-Links — nicht internen Manager-Chat." },
      { q: "Unterstützt TidyFlow Multi-Standort-Verträge?", a: "Ja. Objekte, wiederkehrende Aufträge und Dienstpläne skalieren auf Multi-Standort-Gewerbe-Portfolios." },
      { q: "Können wir Kundenbewertungen sammeln?", a: "Ja. TidyFlow enthält Kundenbewertungs-Sammlung mit Routing für negatives Feedback." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Reinigungs-Planungssoftware | Wiederkehrende Aufträge & Dienstpläne | TidyFlow",
    seoDescription:
      "Reinigungs-Planungssoftware mit Kalender, Dienstplan-Builder, wiederkehrenden Aufträgen, KI-Zuweisungsvorschlägen, Urlaubsverwaltung und Google-Sheets-Sync.",
    keywords:
      "Reinigungs-Planungssoftware, Reinigungs-Dispatch-Software, Haushaltsreinigung-Planung, Gebäudereinigung-Planungs-App, TidyFlow",
    eyebrow: "Reinigungs-Planungssoftware",
    h1: "Reinigungs-Planungssoftware, die echten Dienstplänen entspricht",
    heroSubtitle:
      "Erstellen Sie Wochendienstpläne, automatisieren Sie wiederkehrende Objektbesuche, weisen Sie Kräfte urlaubsbewusst zu und senden Sie Updates sofort an die Außendienst-App.",
    navLabel: "Planung",
    problems: {
      title: "Planung bricht, wenn das Tool die Reinigungsrealität ignoriert",
      items: [
        "Wiederkehrende Verträge werden jeden Monat manuell neu eingegeben.",
        "Vertretungen werden zugewiesen, ohne zu sehen, wer im Urlaub ist.",
        "Kräfte erfahren Planänderungen aus Gruppennachrichten, nicht aus der App.",
        "Routenplanung ist Raten — Fahrzeit zwischen Objekten ist unsichtbar.",
        "Tabellen-Dienstplan und Außendienst-App stimmen nie überein.",
      ],
    },
    solution: {
      title: "Planung verbunden mit der Außendienst-App",
      paragraphs: [
        "TidyFlow-Planung ist kein isolierter Kalender — Zuweisungen erscheinen in Echtzeit auf mobilen Auftragslisten. Wiederkehrende Aufträge erzeugen automatisch Vertragsbesuche. Der Dienstplan-Builder respektiert genehmigten Urlaub.",
        "Bidirektionale Google-Sheets-Synchronisation lässt Teams eine Tabellen-Masterliste behalten, während TidyFlow Dispatch ausführt. KI kann Zuweisungen vorschlagen; Manager treffen immer die finale Entscheidung.",
      ],
    },
    features: [
      {
        title: "Kalender & Dienstplan-Builder",
        description: "Wochenansicht, Drag-and-Drop-Zuweisung, urlaubsbewusste Planung.",
        benefit: "Dienstplan einmal bauen und ins Außendienst veröffentlichen.",
        linkHref: "/how-it-works",
        linkLabel: "So funktioniert Planung",
      },
      {
        title: "Wiederkehrende Aufträge",
        description: "Wöchentliche, monatliche und benutzerdefinierte Wiederholungsmuster pro Objekt.",
        benefit: "Hören Sie auf, dieselben Besuche jeden Zyklus zu kopieren.",
        linkHref: "/features",
        linkLabel: "Planungsfunktionen",
      },
      {
        title: "KI-Kraft-Empfehlungen",
        description: "Schlägt passende Zuweisung nach Historie, Standort und Verfügbarkeit vor.",
        benefit: "Schnellerer Dispatch an vollen Morgen — Manager bestätigt.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "KI-Zuweisung",
      },
      {
        title: "Routenoptimierung",
        description: "Reduziert Fahrzeit zwischen Objekten in unterstützten Workflows.",
        benefit: "Mehr Aufträge pro Schicht ohne Überstunden-Raten.",
        linkHref: "/integrations",
        linkLabel: "Karten-Integration",
      },
    ],
    howItWorks: {
      title: "Planen → Zuweisen → Benachrichtigen → Ausführen → Anpassen",
      steps: [
        { title: "Planen", description: "Erstellen Sie Aufträge in Kalenderansicht oder importieren Sie aus Google Sheets." },
        { title: "Zuweisen", description: "Ziehen Sie Kräfte auf Schichten; Dienstplan markiert Urlaubskonflikte." },
        { title: "Benachrichtigen", description: "Zuweisungen erscheinen sofort auf Geräten der Kräfte." },
        { title: "Ausführen", description: "Außendienstteams starten Aufträge mit GPS-verifiziertem Stempeln." },
        { title: "Anpassen", description: "Weisen Sie offene Aufträge mobil neu zu, wenn jemand krank meldet." },
      ],
    },
    useCases: {
      title: "Planungs-Szenarien",
      items: [
        { title: "Wiederkehrende Vertragsreiniger", description: "Automatisieren Sie feste Wochenrouten über Kundenobjekte." },
        { title: "Privat- & Haushaltsreinigung", description: "Variable Wochenpläne mit schneller Neuzuweisung." },
        { title: "Multi-Team-Dispatch", description: "Mehrere Supervisoren planen überlappende Gebiete." },
        { title: "Wachsende Unternehmen ohne Tabellen", description: "Sheets-Sync während des Übergangs zum App-Dispatch." },
      ],
    },
    faqs: [
      { q: "Kann TidyFlow wiederkehrende Reinigungsaufträge verwalten?", a: "Ja. Wiederkehrende Aufträge automatisieren wiederholte Besuche pro Objekt mit Teamzuweisung." },
      { q: "Synchronisiert Planung mit Google Sheets?", a: "Ja. Bidirektionale Sync hält Tabellen-Master und App-Zuweisungen im Einklang." },
      { q: "Sehen Kräfte nur ihren eigenen Plan?", a: "Ja. Kräfte sehen die heutige Auftragsliste; Manager sehen den vollen Dienstplan." },
      { q: "Gibt es Routenoptimierung?", a: "Ja. TidyFlow enthält Routenplanungs-Tools mit Google-Maps-Integration." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Reinigungs-Lohnsoftware | Verifizierte Stunden & Stundenzettel | TidyFlow",
    seoDescription:
      "Reinigungs-Lohnsoftware auf Basis GPS-verifizierter Auftragsstunden, Stundenzettel-Freigabe, Lohnregeln, Lohnläufen und PDF-Gehaltsabrechnungen für Reinigungsteams.",
    keywords:
      "Reinigungs-Lohnsoftware, Reinigungskraft-Lohn-App, Gebäudereinigung-Lohn, Reinigungs-Stundenzettel-Software, TidyFlow",
    eyebrow: "Reinigungs-Lohnsoftware",
    h1: "Reinigungs-Lohnsoftware aus verifizierten Auftragsstunden",
    heroSubtitle:
      "Erzeugen Sie Lohnabrechnung aus Auftrags-Timern und genehmigten Arbeitsstunden — nicht aus handschriftlichen Stundenzetteln. GPS-Verifizierung reduziert Streitigkeiten und gibt Managern einen Audit-Trail.",
    navLabel: "Lohnabrechnung",
    problems: {
      title: "Lohnstreitigkeiten beginnen mit unverifizierten Stunden",
      items: [
        "Kräfte runden Zeit auf, weil Papier-Stundenzettel leicht aufgebläht werden.",
        "Manager können eine Gehaltszeile nicht mit einem bestimmten abgeschlossenen Auftrag verknüpfen.",
        "Überstunden-Überraschungen, weil Zusatzaufträge nicht zentral protokolliert wurden.",
        "Angestellten- vs. Subunternehmer-Sätze liegen in verschiedenen Notizbüchern.",
        "Finanzen tragen Stunden in die Buchhaltung ein, nachdem Ops bereits etwas anderes freigegeben hat.",
      ],
    },
    solution: {
      title: "Lohnabrechnung an abgeschlossene Außendienstarbeit gebunden",
      paragraphs: [
        "TidyFlow protokolliert Stunden vom Auftrags-Timer vor Ort. GPS-Verifizierung markiert Starts und Abschlüsse fern vom Objekt. Manager genehmigen Arbeitsstunden vor Lohnläufen.",
        "Mitarbeiter-Lohnregeln, Lohnrechnungen und QuickBooks-Lohn-Sync in unterstützten Plänen halten Ops und Finanzen im Einklang.",
      ],
    },
    features: [
      {
        title: "Auftrags-Timer & Stundenzettel",
        description: "Start, Pause, Fortsetzen, Einreichen — Stunden an jeden Auftrag gebunden.",
        benefit: "Jede Stunde verknüpft mit einem Objektbesuch.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Zeiterfassung",
      },
      {
        title: "GPS-verifizierte Anwesenheit",
        description: "Standort geprüft beim Stempeln und Auftragsabschluss.",
        benefit: "Streitigkeiten mit Standortnachweisen anfechten.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS-Verifizierung",
      },
      {
        title: "Lohnregeln & Lohnläufe",
        description: "Benutzersätze und Lohnerzeugung aus genehmigten Stunden.",
        benefit: "Ein Freigabe-Workflow vor Versand der Gehaltsabrechnungen.",
        linkHref: "/features",
        linkLabel: "Lohnfunktionen",
      },
      {
        title: "QuickBooks-Lohnrechnungen",
        description: "Genehmigten Lohn mit QuickBooks in unterstützten Plänen synchronisieren.",
        benefit: "Buchhaltung erhält ops-freigegebene Summen.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "QuickBooks-Sync",
      },
    ],
    howItWorks: {
      title: "Planen → Stunden erfassen → Verifizieren → Freigeben → Bezahlen",
      steps: [
        { title: "Planen", description: "Weisen Sie Aufträge zu, damit erwartete Stunden vor der Schicht sichtbar sind." },
        { title: "Erfassen", description: "Kräfte starten den Timer vor Ort; GPS validiert Standort." },
        { title: "Verifizieren", description: "Manager prüfen markierte Stempelungen und unvollständige Checklisten." },
        { title: "Freigeben", description: "Arbeitsstunden und Anpassungen genehmigen." },
        { title: "Bezahlen", description: "Lohnlauf starten und PDF-Rechnungen exportieren oder mit QuickBooks synchronisieren." },
      ],
    },
    useCases: {
      title: "Lohn-Szenarien",
      items: [
        { title: "Stündliche Reinigungsteams", description: "Bezahlung aus verifizierter Auftragszeit statt Papierzetteln." },
        { title: "Gemischte Angestellte und Subunternehmer", description: "Lohnregeln pro Benutzer mit Lohnrechnungs-PDFs." },
        { title: "Streitanfällige Teams", description: "GPS und Auftragshistorie für jede Gehaltszeile." },
        { title: "Inhaber, die nachts Lohn machen", description: "Sammelfreigabe aus dem Management-Dashboard." },
      ],
    },
    faqs: [
      { q: "Kann TidyFlow Reinigungsstunden erfassen?", a: "Ja. Auftrags-Timer protokollieren Stunden pro Aufgabe. Kräfte können auch Arbeitsstunden zur Manager-Freigabe einreichen." },
      { q: "Beweist GPS, dass Kräfte vor Ort waren?", a: "GPS-Verifizierung prüft Standort bei Start und Abschluss. Manager erhalten Alarme bei Stempelungen außerhalb des Objekts." },
      { q: "Kann ich Lohn nach QuickBooks exportieren?", a: "In unterstützten Plänen kann genehmigter Lohn als Rechnungen mit QuickBooks Online synchronisiert werden." },
      { q: "Ersetzt TidyFlow einen vollständigen HR-Lohnanbieter?", a: "TidyFlow erzeugt Lohn aus verifizierten Operations-Stunden. Steuererklärung und vollständige HR-Compliance bleiben beim Steuerberater." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Reinigungs-Inspektions-Software | Checklisten & Fotobeweise | TidyFlow",
    seoDescription:
      "Reinigungs-Inspektions-Software mit Raum-Checklisten, Vorher/Nachher-Fotos, QA-Bewertung, PDF-Kundenberichten und Issue-Tracking für Qualitätsverifizierung.",
    keywords:
      "Reinigungs-Inspektions-Software, Reinigungs-Qualitätskontroll-Software, Reinigungs-Checklisten-App, Gebäudereinigung-Inspektions-Software, TidyFlow",
    eyebrow: "Reinigungs-Inspektions-Software",
    h1: "Reinigungs-Inspektions-Software mit Checkliste und Fotobeweis",
    heroSubtitle:
      "Führen Sie Raum-für-Raum-Inspektionen durch, erfassen Sie Vorher/Nachher-Fotos, bewerten Sie Qualität mit Manager-QA-Workflows und teilen Sie gebrandete Nachweise mit Kunden.",
    navLabel: "Inspektionen",
    problems: {
      title: "Qualitätsprobleme, wenn Inspektionen außerhalb des Auftrags leben",
      items: [
        "Checklisten sind Papier-PDFs, die Kräfte abhaken, ohne sie vor Ort zu öffnen.",
        "Vorher/Nachher-Fotos liegen in persönlichen Kamerarollen — nicht am Objekt gebunden.",
        "Manager inspizieren zufällig statt einem Bewertungs-Workflow zu folgen.",
        "Kunden bestreiten Qualität, aber Sie haben kein zeitgestempeltes Nachweispaket.",
        "Vor-Ort gefundene Issues werden vergessen, bevor jemand sie protokolliert.",
      ],
    },
    solution: {
      title: "Inspektionen ausgeführt und im Auftragsdatensatz gespeichert",
      paragraphs: [
        "TidyFlow-Checklisten laufen in der mobilen Kraft-App — optionale Regeln können Checklisten-Abschluss vor dem Timer-Start verlangen. Fotos werden vor Ort hochgeladen, auch offline mit späterer Sync.",
        "Manager nutzen QA-Bewertungs-Workflows zur Prüfung von Abschlüssen. KI-Fotoanalyse kann Qualitätsprobleme in unterstützten Plänen markieren. PDF-Berichte und Kundenportal-Links verpacken Nachweise für Facility-Kunden.",
      ],
    },
    features: [
      {
        title: "Raum-für-Raum-Checklisten",
        description: "Checklisten-Vorlagen pro Objekt mit Pflichtpunkten.",
        benefit: "Leistungsumfang bei jedem Besuch standardisieren.",
        linkHref: "/features",
        linkLabel: "Checklisten-Funktionen",
      },
      {
        title: "Vorher/Nachher-Fotos",
        description: "Nachweise am Auftrag erfassen; funktioniert offline.",
        benefit: "Fotos bleiben am Besuch, nicht in der Kamerarolle.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline-Fotos",
      },
      {
        title: "QA-Bewertungs-Workflow",
        description: "Manager-Prüfung und Qualitätsscores bei abgeschlossenen Aufträgen.",
        benefit: "Stichproben in einen wiederholbaren Prozess verwandeln.",
        linkHref: "/how-it-works",
        linkLabel: "Qualitäts-Workflow",
      },
      {
        title: "Kunden-PDF-Berichte",
        description: "Gebrandete Auftragsberichte und sichere Share-Links.",
        benefit: "Nachweise senden ohne manuelles Slide-Bauen.",
        linkHref: "/documentation",
        linkLabel: "Berichts-Dokumentation",
      },
    ],
    howItWorks: {
      title: "Checkliste erstellen → Inspizieren → Nachweise erfassen → Prüfen → Teilen",
      steps: [
        { title: "Erstellen", description: "Checklisten-Vorlagen pro Kundenobjekt oder Servicetyp bauen." },
        { title: "Inspizieren", description: "Kräfte erledigen Punkte mobil während des Auftrags." },
        { title: "Erfassen", description: "Vorher/Nachher-Fotos hinzufügen; Offline-Erfassung synchronisiert später." },
        { title: "Prüfen", description: "Manager bewerten QA-Abschlüsse und protokollieren Issues." },
        { title: "Teilen", description: "PDF exportieren oder Kundenportal-Link mit Nachweisen senden." },
      ],
    },
    useCases: {
      title: "Inspektions-Anwendungsfälle",
      items: [
        { title: "Gewerbe-QC-Programme", description: "Standardisierte Bewertung über ein Kundenportfolio." },
        { title: "Auszugs- & Grundreinigungen", description: "Vorher/Nachher-Fotopakete für Vermieter." },
        { title: "Franchise-Qualitätsstandards", description: "Konsistente Checklisten über Standorte." },
        { title: "Kunden-Audit-Anfragen", description: "Zeitgestempelte Auftragshistorie, wenn Facilities Nachweise verlangen." },
      ],
    },
    faqs: [
      { q: "Können Kräfte Checklisten offline abschließen?", a: "Ja. Checklisten und Fotos funktionieren offline und synchronisieren bei wiederhergestellter Verbindung." },
      { q: "Nutzt TidyFlow KI für Fotosqualität?", a: "In unterstützten Plänen kann KI-Fotoanalyse hochgeladene Reinigungsfotos bewerten. Manager treffen weiterhin die finale QA-Entscheidung." },
      { q: "Können Kunden Inspektionsberichte einsehen?", a: "Ja. PDF-Auftragsberichte und sichere Portal-Links teilen Abschlussnachweise mit Kunden." },
      { q: "Kann ich Checklisten-Abschluss vor dem Stempeln verlangen?", a: "Ja. Optionale Regeln können Checklisten-Schritte vor Timer-Start verlangen." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Reinigungs-Zeiterfassungs-Software | GPS-Stempeln | TidyFlow",
    seoDescription:
      "Reinigungs-Zeiterfassungs-Software mit Auftrags-Timern vor Ort, GPS-Verifizierung, Geofencing, Live-Tracking während aktiver Aufträge und Stunden für Lohnabrechnung.",
    keywords:
      "Reinigungs-Zeiterfassungs-Software, Gebäudereinigung-Zeiterfassung, Reinigungskraft-Stempel-App, GPS-Zeiterfassung Reinigung, TidyFlow",
    eyebrow: "Zeiterfassung",
    h1: "Reinigungs-Zeiterfassungs-Software mit GPS-Verifizierung",
    heroSubtitle:
      "Stempeln Sie Kräfte vor Ort mit Auftrags-Timern, GPS-Verifizierung und Geofencing — erfasste Stunden spiegeln echte Objektbesuche wider, nicht Schätzungen.",
    navLabel: "Zeiterfassung",
    problems: {
      title: "Zeiterfassung scheitert, wenn Stempelungen leicht zu fälschen sind",
      items: [
        "Kräfte starten den Timer vom Parkplatz gegenüber.",
        "Manager haben keine Live-Ansicht, wer aktiv auf einem Auftrag ist.",
        "Buddy Punching passiert, weil jeder 'Ich bin da' texten kann.",
        "Stunden eines Kundenobjekts vermischen sich mit Fahrzeit.",
        "Schlecht empfangene Gebäude zwingen Kräfte, den Timer zu überspringen.",
      ],
    },
    solution: {
      title: "Zeiterfassung in den Reinigungsauftrag integriert",
      paragraphs: [
        "TidyFlow-Zeiterfassung ist pro Aufgabe — Start, Pause, Fortsetzen, Einreichen auf dem Auftragsbildschirm. GPS-Verifizierung vergleicht Stempelstandort mit dem Objekt. Manager können Live-GPS während aktiver Aufträge sehen.",
        "Offline-Modus stellt Timer und GPS-Ereignisse in Warteschlange, wenn Signal abbricht, und synchronisiert bei Wiederverbindung — Kellernreinigungen produzieren trotzdem verifizierbare Stunden.",
      ],
    },
    features: [
      {
        title: "Auftrags-Timer vor Ort",
        description: "Einfacher Start/Pause/Einreichen-Flow in der Kraft-App.",
        benefit: "Stunden am Objekt, nicht an generischer Schicht.",
        linkHref: "/features",
        linkLabel: "Außendienst-App",
      },
      {
        title: "GPS & Geofencing",
        description: "Standort bei Start/Abschluss verifizieren; Karten-Integration für Objekte.",
        benefit: "Stempelungen fern vom Gebäude markieren.",
        linkHref: "/integrations",
        linkLabel: "Karten & Geofencing",
      },
      {
        title: "Offline-GPS-Warteschlange",
        description: "Standort-Ereignisse ohne Signal in Warteschlange; spätere Sync.",
        benefit: "Zeit in Technikräumen und Tiefgaragen erfassen.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Offline-GPS",
      },
      {
        title: "Lohnfertige Stunden",
        description: "Genehmigte Stunden speisen Lohnläufe.",
        benefit: "Kreis vom Stempeln bis zur Gehaltsabrechnung schließen.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Lohnsoftware",
      },
    ],
    howItWorks: {
      title: "Zuweisen → Ankommen → Stempeln → Arbeiten → Stunden einreichen",
      steps: [
        { title: "Zuweisen", description: "Kraft erhält heutige Aufträge auf Mobile." },
        { title: "Ankommen", description: "GPS bestätigt Nähe zum Objekt-Geofence." },
        { title: "Stempeln", description: "Timer am Auftrag starten — optionales Checklisten-Gate." },
        { title: "Arbeiten", description: "Pause/Fortsetzen nach Bedarf; Live-GPS während aktiver Aufträge." },
        { title: "Einreichen", description: "Auftrag abschließen; Stunden warten auf Manager-Freigabe für Lohn." },
      ],
    },
    useCases: {
      title: "Zeiterfassungs-Szenarien",
      items: [
        { title: "Gewerbe-Gebäudereinigung", description: "Nachtschicht-Anwesenheit über Objekte verifizieren." },
        { title: "Privatreinigungs-Teams", description: "Timer pro Haushalt für stündliche Kräfte." },
        { title: "Multi-Kraft-Aufträge", description: "Jeder Zugewiesene protokolliert Zeit auf derselben Aufgabe." },
        { title: "Objekte mit schlechter Konnektivität", description: "Offline-Warteschlange bewahrt Stunden und GPS." },
      ],
    },
    faqs: [
      { q: "Kann TidyFlow Reinigungsstunden automatisch erfassen?", a: "Ja. Der Auftrags-Timer protokolliert Stunden beim Start und Einreichen. GPS fügt Standortverifizierung hinzu." },
      { q: "Was passiert, wenn GPS nicht verfügbar ist?", a: "Ereignisse werden offline in Warteschlange gestellt und synchronisieren bei Signalrückkehr. Manager sehen weiterhin den Abschlussdatensatz." },
      { q: "Ist Live-GPS immer an?", a: "Live-GPS-Tracking gilt während aktiver Aufträge in unterstützten Workflows — keine 24/7-Überwachung." },
      { q: "Können Manager Stunden bearbeiten?", a: "Manager genehmigen oder passen Arbeitsstunden über den Freigabe-Workflow vor Lohn an." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Offline-Reinigungssoftware | Außendienst-App ohne Signal | TidyFlow",
    seoDescription:
      "Offline-Reinigungssoftware für Teams in Kellern, Parkhäusern und schlecht empfangenen Gebäuden — Offline-Checklisten, Timer, Fotos und GPS-Warteschlange mit Auto-Sync.",
    keywords:
      "Offline-Reinigungssoftware, Offline-Reinigungs-App, Reinigungs-App ohne Internet, Offline-Gebäudereinigungs-App, TidyFlow",
    eyebrow: "Offline-Reinigungssoftware",
    h1: "Offline-Reinigungssoftware für echte Außendienst-Bedingungen",
    heroSubtitle:
      "Kräfte schließen Aufträge ohne Internet ab — Checklisten, Auftrags-Timer, Fotos und GPS-Ereignisse werden lokal gespeichert und synchronisieren automatisch bei wiederhergestellter Verbindung.",
    navLabel: "Offline-Reinigung",
    problems: {
      title: "Außendienst-Apps scheitern dort, wo Reinigungsarbeit wirklich stattfindet",
      items: [
        "Keller und Technikräume blockieren mobile Daten — Kräfte überspringen die App.",
        "Fotos warten bis zum Parkplatz und vermischen sich zwischen Aufträgen.",
        "Timer stoppen, weil die App ständige Konnektivität verlangt.",
        "Manager nehmen 'kein Sync' als 'nicht erschienen' an.",
        "Konkurrenten behaupten Offline, cachen aber nur die Auftragsliste, nicht den Abschluss.",
      ],
    },
    solution: {
      title: "Vollständiger Auftragsabschluss offline — kein reiner Lese-Cache",
      paragraphs: [
        "TidyFlow Offline-Modus unterstützt die Workflows, die Kräfte vor Ort brauchen: Auftrags-Timer, Checklisten, Fotos und GPS-Verifizierungs-Ereignisse in Warteschlange. Bei Wiederverbindung synchronisieren Daten mit dem Management-Dashboard.",
        "Gebaut für Gebäudereinigungs- und Gewerbeobjekte, wo Signalverlust normal ist — kein Randfall.",
      ],
    },
    features: [
      {
        title: "Offline-Checklisten",
        description: "Raumaufgaben ohne Verbindung abschließen.",
        benefit: "Inspektionen unter Tage abschließen, nicht im Parkplatz.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektions-Software",
      },
      {
        title: "Offline-Auftrags-Timer",
        description: "Stunden vor Ort erfassen; Zeitstempel später synchronisieren.",
        benefit: "Lohn erhält echte Auftragszeit, nicht Schätzungen.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Zeiterfassung",
      },
      {
        title: "Offline-Foto-Erfassung",
        description: "Vorher/Nachher-Fotos lokal gespeichert bis Upload.",
        benefit: "Nachweise bleiben am richtigen Auftrag.",
        linkHref: "/features",
        linkLabel: "Fotonachweis",
      },
      {
        title: "Offline-GPS-Warteschlange",
        description: "Standort-Ereignisse ohne Signal in Warteschlange; Sync bei Wiederverbindung.",
        benefit: "Anwesenheit auch nach Verlassen einer Funkloch-Zone verifizieren.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Offline-GPS-Funktion",
      },
    ],
    howItWorks: {
      title: "Aufträge laden → Offline arbeiten → Daten einreihen → Verbinden → Sync",
      steps: [
        { title: "Laden", description: "Zugewiesene Aufträge werden online auf das Gerät heruntergeladen." },
        { title: "Offline arbeiten", description: "Timer, Checkliste und Fotos laufen ohne Internet." },
        { title: "Einreihen", description: "GPS und Abschluss-Ereignisse lokal speichern." },
        { title: "Verbinden", description: "Telefon erhält Signal beim Verlassen des Gebäudes oder Parkplatzes." },
        { title: "Sync", description: "Manager sehen abgeschlossenen Auftrag, Fotos und Stunden im Dashboard." },
      ],
    },
    useCases: {
      title: "Offline-Szenarien",
      items: [
        { title: "Keller- & Technikraum-Gebäudereinigung", description: "Aufträge ohne Innensignal abschließen." },
        { title: "Tiefgaragen-Reinigung", description: "GPS wartet, bis das Gerät die Garage verlässt." },
        { title: "Ländliche oder Industrieobjekte", description: "Lückenhafte Abdeckung blockiert Außendienst-Compliance nicht mehr." },
        { title: "Internationale Teams", description: "Gleiches Offline-Verhalten in 11 unterstützten Sprachen." },
      ],
    },
    faqs: [
      { q: "Kann TidyFlow ohne Internetverbindung arbeiten?", a: "Ja. Kräfte können Timer, Checklisten und Fotos offline nutzen. Daten synchronisieren bei wiederhergestellter Verbindung." },
      { q: "Was synchronisiert nach Wiederverbindung?", a: "Abschlussstatus, Fotos, Timer-Stunden, GPS-Warteschlangen-Ereignisse und Checklisten-Antworten synchronisieren mit dem Server." },
      { q: "Müssen Kräfte manuell synchronisieren?", a: "Sync läuft automatisch bei Wiederverbindung — kein separater Upload-Schritt." },
      { q: "Ist Offline in allen Plänen verfügbar?", a: "Offline-Außendienst ist eine Kernfunktion von TidyFlow. Einige erweiterte KI- und Integrationsfunktionen variieren je Plan — siehe Preise." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Reinigungsunternehmen-Software | Operationen führen & wachsen | TidyFlow",
    seoDescription:
      "Reinigungsunternehmen-Software für Inhaber vom Solo-Betrieb zum Multi-Team — Planung, Abrechnung, Lohn, Kundennachweise und Revenue-AI-Einblicke.",
    keywords:
      "Reinigungsunternehmen-Software, kleine Reinigungsfirma App, Reinigungsunternehmen-Wachstum Software, Reinigungs-Startup-Software, TidyFlow",
    eyebrow: "Reinigungsunternehmen-Software",
    h1: "Reinigungsunternehmen-Software, die mit Ihrem Betrieb wächst",
    heroSubtitle:
      "Starten Sie mit Planung und Außendienst-Nachweisen, fügen Sie beim Wachstum Lohn, Kundenrechnungsstellung und Inhaber-Dashboards hinzu — eine Plattform statt Tools zusammenzuflicken.",
    navLabel: "Reinigungsunternehmen",
    problems: {
      title: "Kleine Reinigungsunternehmen wachsen schnell über ihre ersten Tools hinaus",
      items: [
        "Sie starten mit einer Kalender-App, fügen Lohnsoftware hinzu, dann Fotoordner — nichts verbindet sich.",
        "Mehr Verträge bedeuten mehr Admin-Stunden, nicht mehr Gewinn.",
        "Sie wissen nicht, welche Kunden profitabel sind, ohne Tabellen zu exportieren.",
        "Der erste Manager verdoppelt Arbeit, weil es kein gemeinsames Ops-System gibt.",
        "Test-Tools berechnen pro Sitz auf eine Weise, die wachsende Teams bestraft.",
      ],
    },
    solution: {
      title: "Operationen auf einer Reinigungs-Plattform wachsen lassen",
      paragraphs: [
        "TidyFlow-Pläne skalieren von Startup-Teams zu größeren Mannschaften mit nutzungsbasierten Objektlimits. Inhaber verwalten Abonnement und Abrechnung in-app. Planung, Außendienst-Nachweise, Lohn und Kundenrechnungsstellung leben zusammen.",
        "Revenue AI in unterstützten Plänen hebt Risiken und Chancen im Inhaber-Dashboard hervor — Wachstumsentscheidungen nutzen Operations-Daten, nicht Bauchgefühl.",
      ],
    },
    features: [
      {
        title: "Pläne ab 25 $/Monat",
        description: "Startup-Plan für kleinere Teams; Upgrade bei wachsenden Objekten und Kräften.",
        benefit: "Starten ohne Enterprise-Verträge.",
        linkHref: "/pricing",
        linkLabel: "Preise ansehen",
      },
      {
        title: "Self-Service-Abrechnung",
        description: "Testversion, Upgrade und Abonnementverwaltung in der App.",
        benefit: "Inhaber kontrollieren Kosten ohne Sales-Anruf.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Abrechnungsfunktionen",
      },
      {
        title: "Kundenrechnungsstellung & QuickBooks",
        description: "Rechnung aus Aufträgen; Sync mit QuickBooks Online.",
        benefit: "Finanzen bleiben im Einklang beim Hinzufügen von Kunden.",
        linkHref: "/integrations",
        linkLabel: "Integrationen",
      },
      {
        title: "Revenue-AI-Dashboard",
        description: "Inhaber-Einblicke in unterstützten Plänen.",
        benefit: "Früh erkennen, welche Verträge Aufmerksamkeit brauchen.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Starten → Betreiben → Nachweisen → Abrechnen → Wachsen",
      steps: [
        { title: "Starten", description: "14-Tage-Test — Objekte einrichten und erste Kräfte einladen." },
        { title: "Betreiben", description: "Aufträge planen und Außendienstarbeit mit GPS und Fotos durchführen." },
        { title: "Nachweisen", description: "Kundennachweise senden, wenn Sie größere Verträge gewinnen." },
        { title: "Abrechnen", description: "Kunden abrechnen und Lohn aus verifizierten Stunden führen." },
        { title: "Wachsen", description: "Planlimits erhöhen und Inhaber-Dashboards für Entscheidungen nutzen." },
      ],
    },
    useCases: {
      title: "Unternehmensphasen",
      items: [
        { title: "Solo-Betreiber wird Multi-Kraft", description: "Persönliche Kalender durch gemeinsame Planung ersetzen." },
        { title: "Lokales Unternehmen gewinnt Gewerbe-Ausschreibungen", description: "Kundennachweise und QC für Facility-Verträge." },
        { title: "Regionale Reinigungsmarke", description: "Multi-Objekt-Limits, Rollen und Integrationen." },
        { title: "Inhaber mit allen Hüten", description: "Ein Login für Plan, Lohn und Abrechnung." },
      ],
    },
    faqs: [
      { q: "Was ist Reinigungsunternehmen-Software?", a: "Software, die Inhabern hilft, Planung, Teams, Außendienstarbeit, Kundenabrechnung und Lohn für ein Reinigungsunternehmen zu führen — typischerweise ersetzt sie Tabellen beim Wachstum." },
      { q: "Was kostet TidyFlow?", a: "Pläne starten bei 25 $/Monat für Startup. Standard und Premium fügen mehr Objekte, Kräfte und Funktionen wie Google-Sheets- und QuickBooks-Sync hinzu." },
      { q: "Gibt es eine kostenlose Testversion?", a: "Ja. Alle Pläne enthalten eine 14-tägige kostenlose Testversion mit Self-Service-Anmeldung." },
      { q: "Kann ich beim Wachstum upgraden?", a: "Ja. Pläne in-app wechseln, wenn Objekt- und Teamlimits steigen." },
    ],
  },
};
