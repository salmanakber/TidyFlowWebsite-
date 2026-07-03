import type { ChapterTranslation } from "../docTranslations";

export const deChapters: Record<string, ChapterTranslation> = {
  "ch-1": {
    title: "Was ist TidyFlow?",
    category: "Overview",
    content: "TidyFlow ist eine einheitliche Betriebsplattform, die speziell für moderne Facility-Management- und Wohn-/Gewerbereinigungsunternehmen entwickelt wurde. Es fungiert als zentrale Steuerungseinheit, die Aktivitäten zwischen Geschäftsinhabern, Remote-Betriebsleitern und Reinigungskräften im Außendienst koordiniert. Durch den Ersatz fragmentierter, offline Tools wie Papier-Checklisten, unstrukturierten WhatsApp-Threads und separaten Lohn-Spreadsheets, konsolidiert TidyFlow Terminplanung, Standortverifizierung, Kundenabrechnungserstellung und Personalanalysen in eine einzige sichere, offline-fähige Datenbankplattform."
  },
  "ch-2": {
    title: "Erste Schritte",
    category: "Overview",
    content: "Um den Betrieb aufzunehmen, können sich Unternehmensadministratoren für ein TidyFlow-Portal anmelden und dabei ihren Geschäftsdatensatz einrichten. Bei der ersten Installation durchlaufen Mitarbeiter eine interaktive Feature-Einführungstour, die die Hauptmodule erklärt. Nach der Aktivierung werden Inhaber durch die Einrichtung sicherer Zahlungsprofile über Stripe geleitet. Von dort aus können Inhaber Mitarbeiter einladen, indem sie über die Seitenleiste auf 'Benutzer' zugreifen, Namen, E-Mails und Rollenkategorien der Mitarbeiter (Manager oder Reinigungskräfte) eingeben, um Login-Daten sofort zu versenden."
  },
  "ch-3": {
    title: "Ihre Rolle verstehen",
    category: "Overview",
    content: "TidyFlow setzt strenge rollenbasierte Zugangskontrollen durch, um Datenisolation zu gewährleisten. Inhaber/Administratoren überwachen Abonnement-Pläne, Währungsformate, Kundenabrechnungseinstellungen, Master-Google Sheets-Links und unternehmensweite Finanzberichte. Manager konzentrieren sich auf die Planung von Schichtdienstplänen, die Lösung von Immobilienproblemen und die Validierung eingereicherter Stundenzettel. Reinigungskräfte arbeiten innerhalb eines vereinfachten mobilen Layouts, das ausschließlich dazu dient, Stunden zu protokollieren, Raum-für-Raum-Aufgaben abzuschließen, Vorher/Nachher-Fotos hochzuladen und SOS-Alarme auszulösen."
  },
  "ch-4": {
    title: "In der App navigieren",
    category: "Overview",
    content: "Das Seitenleistenmenü auf der linken Seite bildet den Navigationskompass. Durch Klicken auf die Menü-Schaltfläche (☰) öffnen sich Routen zu: Startseite (maßgeschneidertes Rollen-Dashboard), Aufgaben (kategorisierte Kalenderlisten), Kalender, Objekte, Dienstplan-Generator, Benutzer (Mitarbeiterverzeichnis), Urlaubsanträge, Lohnabrechnung, Kundenrechnungen, Materialien und Einstellungen. Mobile Benutzer können auch individuelle Einführungstouren von jedem Bildschirm aus über die Hilfe & Tour-Verknüpfung im Menü-Footer auslösen."
  },
  "ch-5": {
    title: "Google Sheets — verbinden und synchronisieren",
    category: "Core Features",
    content: "Verbinden Sie Ihre Unternehmenstabelle, um bidirektionale Synchronisation zu ermöglichen. Schritt 1: Öffnen Sie Objekte, dann Google Sheets-Synchronisation. Schritt 2: Fügen Sie Ihre Spreadsheet-URL ein. Schritt 3: Kopieren Sie unsere einzigartige Service-Account-E-Mail (z.B. sync@project.iam.gserviceaccount.com) und teilen Sie Bearbeitungsberechtigungen damit in Google Sheets. Schritt 4: Klicken Sie auf 'Jetzt synchronisieren'. Das System liest die 'Properties' und 'Tasks' Tabs und synchronisiert Bearbeitungen sofort in Echtzeit. Alle Reinigungskraft-Zuweisungen, Statusvollendungen und Zeitstunden synchronisieren bidirektional zurück in Ihre Master-Sheet-Zeilen."
  },
  "ch-6": {
    title: "Objekte",
    category: "Core Features",
    content: "Das Objekt-Register ist das strukturelle Fundament von TidyFlow. Es befindet sich in Seitenleiste → Objekte und beherbergt einen Katalog aller Serviceadressen, Postleitzahlen, Objektlayouts (Wohnungen, Wohngebäude, Gewerbe), Einheitenanzahl und Standard-Servicetarife. Durch Klicken in ein beliebiges Objekt werden historische Aufgabenzuweisungen, aktive wiederkehrende Vorlagen, Kartenstandort-Koordinatenpunkte und direkte Verknüpfungen zur Initiierung neuer einmaliger Aufgabenpläne aufgelistet."
  },
  "ch-7": {
    title: "Aufgaben",
    category: "Core Features",
    content: "Aufgaben repräsentieren individuelle, fakturierbare Arbeitssitzungen. Manager erstellen Aufgaben, indem sie ein Objekt auswählen, geplante Daten/Zeiten zuweisen, Beschreibungen umreißen und zugewiesene Reinigungskräfte auswählen. Detaillierte Checklisten können manuell zusammengestellt oder mithilfe KI-vorgeschlagener Vorlagen ausgefüllt werden. Der Aufgaben-Lebenszyklus schreitet sequenziell voran: Geplant → Zugewiesen → In Bearbeitung (Reinigungskraft aktiv) → Eingereicht (Arbeit getan) → Genehmigt (Manager verifiziert) → Abgeschlossen (abgerechnet)."
  },
  "ch-8": {
    title: "Leitfaden für Reinigungskräfte",
    category: "Role Guides",
    content: "Reinigungskräfte greifen über Smartphones auf TidyFlow zu und werden von einem vereinfachten, fokussierten Tagesplan begrüßt. Reinigungskräfte klicken auf eine zugewiesene Aufgabe, um Checklisten-Meilensteine zu inspizieren, auf Notizen zuzugreifen und ihren Arbeitstimer zu starten. Reinigungskräfte klicken auf 'Arbeitssitzung starten', um Einstempel-Zeitstempel aufzuzeichnen, Raum-Checklisten ausführen, 'Vorher'- und 'Nachher'-Beweisfotos aufnehmen und klicken auf 'Auftrag einreichen', um Details sofort zur Manager-Genehmigung zu senden."
  },
  "ch-9": {
    title: "Leitfaden für Manager",
    category: "Role Guides",
    content: "Manager melden sich in einem dedizierten Browser-Dashboard oder einer mobilen Koordinator-App an. Der Startbildschirm hebt die heutigen nicht zugewiesenen Aufgaben, ausstehende Stundenzettel und offene Objektprobleme hervor. Manager können eingereichte Aufgaben schnell inspizieren, hochgeladene Vorher/Nachher-Fotografien überprüfen, Checklisten-Protokolle vergleichen und Sitzungen genehmigen oder ablehnen, um Stunden automatisch in aktive Zahlungsperioden zu leiten."
  },
  "ch-10": {
    title: "Leitfaden für Inhaber",
    category: "Role Guides",
    content: "Inhaber haben Hauptautorität über Geschäftskonten. Bei der Anmeldung greifen Inhaber auf Abrechnungskonfigurationen zu, verwalten aktive Stripe-Abonnements, passen Unternehmens-Branding-Layouts an (Logo-Einbettungen, Bankdetails und Beleg-Header) und auditieren Multi-User-Protokolle. Inhaber können auch auf Analyse-Interfaces zugreifen, die unternehmensweite Einnahmen, aktive Roster-Plätze und KI-gestützte betriebliche Einsichten verfolgen."
  },
  "ch-11": {
    title: "Dienstplan und Einsatzplanung",
    category: "Core Features",
    content: "Die Dienstplanung wird in Seitenleiste → Dienstplan-Generator koordiniert. Es präsentiert ein Raster-Layout, das Objekte gegen Reinigungskräfte für die Woche abbildet. Dispatcher ziehen, lassen fallen und tippen Slots an, um Personal zuzuweisen. TidyFlow verifiziert automatisch Feiertags-Sperren und verhindert, dass Manager versehentlich Reinigungskräfte im Urlaub einplanen. Das Planungssystem analysiert auch Kartenkoordinaten, um Routenoptimierungen zu berechnen und vorzuschlagen, wodurch Mitarbeiter-Reisekosten reduziert werden."
  },
  "ch-12": {
    title: "Wiederkehrende Aufträge",
    category: "Core Features",
    content: "Vermeiden Sie es, wiederkehrende Reinigungen manuell zu planen. Innerhalb jedes Objekt-Fensters können Manager wiederkehrende Reinigungspläne einrichten (z.B. wöchentliche Gewerbereinigungen oder monatliche Wohnungen). Die Dienstplan-Einstellungen ermöglichen das Festlegen individueller Wiederholungsperioden, Wochentage und Enddaten. Einmal gespeichert, plant und versendet TidyFlow automatisch Aufgaben, wann immer ein Wiederholungsdatum fällig wird, um ständige Kalenderabdeckung sicherzustellen."
  },
  "ch-13": {
    title: "Fotos, PDFs und Kundennachweise",
    category: "Core Features",
    content: "Dokumentieren Sie Sauberkeit visuell, um Ihr Unternehmen zu schützen. Reinigungskräfte laden geo-getaggte Ankunfts- und Abfahrtsfotos hoch. Manager können diese Bilder unter 'Eingereichte' Aufgaben überprüfen und auf Download klicken, um sofort white-labeled PDF-Stundenzettel-Berichte zu kompilieren. Alternativ können Manager sichere, teilbare Kunden-Portale generieren, in denen Kunden Abschluss-Checklisten und Bilder direkt einsehen können, wodurch E-Mail-Anhänge umgangen werden."
  },
  "ch-14": {
    title: "Lohn und Arbeitszeiten",
    category: "Core Features",
    content: "Vereinfachen Sie Lohnberechnungen. Wenn Reinigungskräfte aktive Timer einreichen, landen Stunden in Lohnabrechnung → Ausstehende Stunden. Manager überprüfen Gesamtzeiten, nehmen bei Bedarf Anpassungen vor und klicken auf Genehmigen. Einmal genehmigt, kompiliert das System Lohnlisten basierend auf individualisierten pro-Benutzer-Stundensätzen, Überstunden-Einstellungen oder Pauschaltarif-Profilen. Inhaber können Zahlungsperioden generieren und Lohnzettel als druckbare PDFs exportieren."
  },
  "ch-15": {
    title: "Kundenrechnungen",
    category: "Core Features",
    content: "Rechnen Sie Kunden direkt für abgeschlossene Reinigungen ab. In Seitenleiste → Kundenrechnungen können Manager genehmigte, nicht abgerechnete Aufgaben auswählen, um automatisch Kundenrechnungen zu generieren. Finanzmodule ziehen Standard-Objekt-Servicetarife oder individuelle Aufgabenbudgets und kompilieren sie in Unternehmensvorlagen. Manager können Rechnungen als gesendet, ausstehend oder bezahlt markieren und die Finanzverfolgung plattformweit synchronisieren."
  },
  "ch-16": {
    title: "Urlaubsanträge",
    category: "Core Features",
    content: "Reinigungskräfte reichen Kranken- und Urlaubsanträge in Seitenleiste → Urlaub ein. Der Bildschirm protokolliert Urlaubsdaten und Beschreibungen und versendet Benachrichtigungen an Koordinatoren. Manager genehmigen oder lehnen Urlaubslistungen unter Dienstplan/Urlaub ab. Einmal genehmigt, sperrt TidyFlow diese Daten im Dienstplan-Raster und verhindert, dass Koordinatoren die Reinigungskraft im Urlaub einplanen und Dienstplan-Fehler vermeiden."
  },
  "ch-17": {
    title: "Vorfälle und Sicherheit (SOS)",
    category: "Core Features",
    content: "Die Sicherheit der Außendienstmitarbeiter ist von größter Bedeutung. Reinigungskräfte haben Zugang zu einem permanenten, leuchtend roten SOS-Notfall-Panikknopf auf dem aktiven Aufgabenbildschirm. Das Drücken des SOS-Knopfs lädt sofort Koordinaten-Sperren auf Betriebsserver hoch und löst hochpriorisierte, blinkende Benachrichtigungen auf allen Manager-Dashboards aus, wobei der Vorfall mit einer Echtzeit-Sicherheitsdispatch-Zeitleiste protokolliert wird."
  },
  "ch-18": {
    title: "Materialien",
    category: "Advanced",
    content: "Halten Sie Materialien vollständig auf Lager mit unserem integrierten Inventar-Tracker (Seitenleiste → Materialien). Manager protokollieren Reinigungsausrüstung, Flüssigkeiten und Werkzeuge und setzen Nachbestellungsgrenzen. Während der Reinigungen können Reinigungskräfte verwendete Materialien (z.B. Papierhandtücher, Müllbeutel) auf der Aufgabenkarte protokollieren. Wenn Lagerbestände unter Sicherheitsgrenzen fallen, benachrichtigen automatische Dashboard-Warnungen Manager zur Nachbestellung."
  },
  "ch-19": {
    title: "TidyFlow KI",
    category: "Advanced",
    content: "Optimieren Sie Geschäftsentscheidungen mithilfe privater, serverseitiger KI-Modellvorschläge (Gemini). KI-Fähigkeiten unterstützen Manager während der Entsendung, indem sie am besten geeignetes Personal basierend auf Standort, Verfügbarkeit und vergangenen Bewertungen vorschlagen. Zusätzlich scannen KI-Modelle hochgeladene Abfahrtsfotos, um Qualitätsbewertungen zu bewerten und Bedenken auf dem Manager-Dashboard zur Verifizierung zu kennzeichnen, ohne den Arbeitsablauf der Reinigungskraft zu blockieren."
  },
  "ch-20": {
    title: "Offline-Modus",
    category: "Advanced",
    content: "Außendienstmitarbeiter arbeiten häufig in Kellern oder Gebieten mit schwachem Signal. TidyFlow ist offline-first entwickelt. Reinigungskräfte können Checklisten abhaken, Timer starten oder pausieren, Objekt-Problemnotizen protokollieren und Vorher/Nachher-Fotos aufnehmen, während sie vollständig offline sind. Die App reiht Datenänderungen lokal ein und synchronisiert automatisch mit Betriebsservern, sobald das Signal wiederhergestellt ist."
  },
  "ch-21": {
    title: "Einstellungen und Berechtigungen",
    category: "Advanced",
    content: "Konfigurieren Sie individuelle Benachrichtigungen, Ortungsdienste und Cache-Sync-Präferenzen in Seitenleiste → Einstellungen. Reinigungskräfte müssen Hintergrund-Ortungsberechtigungen aktivieren, um Einstempel-Zeitstempel aufzuzeichnen, und Kamera-/Fotozugang aktivieren, um saubere Bedingungen zu dokumentieren. Inhaber konfigurieren Standardwährung (z.B. £ GBP, $ USD, € EUR) und passen PDF-Branding-Vorlagen an."
  },
  "ch-22": {
    title: "Aufgabenstatus erklärt",
    category: "Advanced",
    content: "TidyFlow führt Aufgaben durch eine strukturierte Pipeline: Geplant (erstellt, aber kein zugewiesenes Personal), Zugewiesen (Personal zugeordnet, wartet auf Datum), In Bearbeitung (Reinigungskraft aktiv, Timer zählt), Eingereicht (Arbeit abgeschlossen, wartet auf QA), QA-Überprüfung (unter Qualitätsprüfung), Genehmigt (vom Manager verifiziert, bereit zur Abrechnung), Abgeschlossen (vollständig bezahlt), Abgelehnt (zur Nachbearbeitung zurückgesendet) und Archiviert (entfernt)."
  },
  "ch-23": {
    title: "Fehlerbehebung und FAQ",
    category: "Support",
    content: "Wenn Google Sheets-Daten nicht synchronisiert werden, überprüfen Sie, ob Sie Bearbeitungszugang mit der Service-Account-E-Mail geteilt haben und stellen Sie sicher, dass Tab-Titel genau 'Properties' und 'Tasks' sind. Wenn Hintergrund-Ortungsverfolgung fehlschlägt, überprüfen Sie den Ortungszugang in den Geräteeinstellungen. Wenn Fotos ohne Upload in die Warteschlange gelangen, bestätigen Sie den Internetzugang. Für weitere Unterstützung klicken Sie auf 'Hilfe & Tour' in der Seitenleiste."
  }
};