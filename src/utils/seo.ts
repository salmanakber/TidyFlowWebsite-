export type SeoPage = "home" | "documentation" | "features" | "pricing" | "integrations" | "contact" | "personas" | "how-it-works";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}

const SITE_URL = "https://tidyflowapp.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Google Search Console HTML tag verification token */
export const GOOGLE_SITE_VERIFICATION = "XkJtk16LIKzsYV3q7_pAVbgnD8nTbHt6mzeaXGbbWRQ";

const en: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow | Cleaning Company Software — Offline App, GPS Geofencing & Google Sheets",
    description:
      "All-in-one janitorial & facilities cleaning software. Offline iOS/Android field app, GPS on-site verification, two-way Google Sheets sync, QuickBooks invoices, task chat, Revenue AI, payroll automation & client proof. Start your 14-day free trial.",
    keywords:
      "cleaning company software, janitorial software, commercial cleaning software, cleaning business management software, offline cleaning app, GPS geofencing cleaners, Google Sheets cleaning schedule, QuickBooks cleaning invoices, task chat cleaners, Revenue AI cleaning, rota scheduling software, cleaning payroll software, facilities cleaning app, maid service software, field service cleaning app, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "TidyFlow User Guide — 23-Chapter Interactive Documentation & TidyBot",
    description:
      "Official TidyFlow documentation: setup, Google Sheets sync, cleaner app, SOS safety, payroll, offline mode, and AI features. Available in 11 languages with TidyBot AI assistant.",
    keywords: "TidyFlow docs, user guide, cleaning app documentation, Google Sheets integration, offline mode guide",
    canonicalPath: "/documentation"
  },
  features: {
    title: "TidyFlow Features — Scheduling, Offline Field App, GPS, AI & Integrations",
    description:
      "Explore TidyFlow: rota builder, offline cleaner app, GPS geofencing, task chat, QuickBooks sync, Revenue AI, photo proof, PDF reports, Stripe billing, and live Google Sheets sync.",
    keywords:
      "cleaning app features, rota scheduling, offline field app, GPS cleaning tracker, AI dispatch cleaning, QuickBooks cleaning, task chat cleaners",
    canonicalPath: "/features"
  },
  pricing: {
    title: "TidyFlow Pricing — Startup, Standard & Premium Plans for Cleaning Teams",
    description:
      "Transparent live pricing for cleaning and facilities companies. Scale by properties and cleaners. 14-day free trial, billed via Stripe.",
    keywords: "cleaning software pricing, TidyFlow plans, janitorial SaaS cost, cleaning business subscription",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "TidyFlow Integrations — Google Sheets, QuickBooks, Stripe & Maps",
    description:
      "Connect TidyFlow to Google Sheets for two-way sync, QuickBooks Online for invoices, Stripe for billing, and geofenced Google Maps — managed from one Integrations hub.",
    keywords:
      "Google Sheets cleaning software, QuickBooks Online cleaning, Stripe integration cleaning, spreadsheet sync janitorial, cleaning software integrations hub",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Book a TidyFlow Demo — Free 14-Day Trial for Cleaning Companies",
    description:
      "Schedule a live TidyFlow demo. Tell us about your team size, spreadsheet workflow, and operations goals. No credit card required.",
    keywords: "TidyFlow demo, cleaning software trial, contact TidyFlow sales",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow for Owners, Managers, Cleaners & Facility Clients",
    description:
      "See how TidyFlow serves business owners, operations managers, field cleaners, and facility clients with role-tailored workflows.",
    keywords: "cleaning business owner software, manager dashboard cleaning, cleaner mobile app offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "How TidyFlow Works — Spreadsheet to Field to Payroll in One Pipeline",
    description:
      "Learn the TidyFlow workflow: sync your master Google Sheet, dispatch jobs, track hours offline with GPS, approve payroll, and invoice clients.",
    keywords: "cleaning workflow software, operations pipeline, field to office sync cleaning",
    canonicalPath: "/how-it-works"
  }
};

const pt: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Software de Operações de Limpeza | App Offline, GPS e Google Sheets",
    description:
      "Software completo para empresas de limpeza: app offline iOS/Android, geofencing GPS, sync Google Sheets, QuickBooks, chat por tarefa, IA e folha de pagamento. Teste grátis 14 dias.",
    keywords: "software limpeza, app offline limpeza, GPS faxineiros, Google Sheets limpeza, QuickBooks limpeza, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "Guia do Usuário TidyFlow — Documentação Interativa (11 idiomas)",
    description: "Documentação oficial TidyFlow em 23 capítulos com assistente TidyBot: setup, Sheets, app offline, GPS, folha e IA.",
    keywords: "documentação TidyFlow, guia usuário limpeza, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "Recursos TidyFlow — Agendamento, App Offline, GPS, Chat e IA",
    description: "Explore agendamento, app de campo offline, GPS, chat por tarefa, QuickBooks, Revenue AI, folha e integrações para empresas de limpeza.",
    keywords: "recursos software limpeza, app offline, GPS limpeza, chat tarefas",
    canonicalPath: "/features"
  },
  pricing: {
    title: "Preços TidyFlow — Planos Startup, Standard e Premium",
    description: "Preços transparentes por propriedades e faxineiros. Teste grátis de 14 dias, faturação Stripe e limites claros de uso.",
    keywords: "preços software limpeza, planos TidyFlow, assinatura limpeza",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "Integrações TidyFlow — Sheets, QuickBooks, Stripe e Mapas",
    description: "Ligue Google Sheets, QuickBooks Online, Stripe e mapas geofence num único hub de integrações com saúde de sync.",
    keywords: "integração Google Sheets limpeza, QuickBooks limpeza, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Agendar Demo TidyFlow — Teste Grátis 14 Dias",
    description: "Marque uma demo ao vivo. Conte-nos sobre a equipa, planilhas e objetivos operacionais. Sem cartão de crédito.",
    keywords: "demo TidyFlow, teste software limpeza, contacto vendas TidyFlow",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow para Proprietários, Gestores, Faxineiros e Clientes",
    description: "Veja como o TidyFlow serve proprietários, gestores de operações, faxineiros de campo e clientes de facilities.",
    keywords: "software limpeza proprietário, app gestor limpeza, app faxineiro offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Como o TidyFlow Funciona — Da Planilha ao Campo e à Folha",
    description: "Sincronize a Google Sheet, despache tarefas, registe horas offline com GPS, aprove a folha e fatura clientes.",
    keywords: "fluxo operações limpeza, pipeline campo escritório, sync limpeza",
    canonicalPath: "/how-it-works"
  }
};

const es: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Software de Operaciones de Limpieza | App Offline y GPS",
    description: "Plataforma para empresas de limpieza: app offline iOS/Android, geofencing GPS, sync Google Sheets, QuickBooks, chat por tarea e IA. Prueba gratis 14 días.",
    keywords: "software limpieza, app offline limpieza, GPS limpiadores, Google Sheets limpieza, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "Guía TidyFlow — Documentación Interactiva Oficial",
    description: "Documentación oficial en 23 capítulos con TidyBot: setup, Sheets, app offline, GPS, nómina e IA en 11 idiomas.",
    keywords: "documentación TidyFlow, guía limpieza, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "Funciones TidyFlow — Programación, Offline, GPS, Chat e IA",
    description: "Explora programación, app de campo offline, GPS, chat por tarea, QuickBooks, Revenue AI y nómina para limpieza.",
    keywords: "funciones limpieza, app offline, GPS limpieza, chat tareas",
    canonicalPath: "/features"
  },
  pricing: {
    title: "Precios TidyFlow — Planes Startup, Standard y Premium",
    description: "Planes transparentes según propiedades y limpiadores. Prueba gratis 14 días y facturación Stripe.",
    keywords: "precios software limpieza, planes TidyFlow, suscripción limpieza",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "Integraciones TidyFlow — Sheets, QuickBooks, Stripe y Mapas",
    description: "Conecta Google Sheets, QuickBooks Online, Stripe y mapas geofence desde un hub de integraciones.",
    keywords: "integración Google Sheets limpieza, QuickBooks limpieza, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Demo TidyFlow — Prueba Gratis 14 Días",
    description: "Agenda una demo en vivo. Cuéntanos sobre tu equipo y flujo con hojas de cálculo. Sin tarjeta.",
    keywords: "demo TidyFlow, prueba software limpieza",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow para Propietarios, Gerentes, Limpiadores y Clientes",
    description: "Flujos a medida para dueños, gerentes de operaciones, limpiadores de campo y clientes de facilities.",
    keywords: "software limpieza roles, app gerentes limpieza, app limpiadores offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Cómo Funciona TidyFlow — De la Hoja al Campo y la Nómina",
    description: "Sincroniza tu Sheet, despacha trabajos, registra horas offline con GPS, aprueba nómina y factura clientes.",
    keywords: "flujo limpieza, pipeline operaciones, sync limpieza",
    canonicalPath: "/how-it-works"
  }
};

const fr: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Logiciel d'opérations de nettoyage | App hors ligne & GPS",
    description: "Plateforme pour entreprises de nettoyage : app hors ligne iOS/Android, géofencing GPS, sync Google Sheets, QuickBooks, chat par tâche et IA. Essai gratuit 14 jours.",
    keywords: "logiciel nettoyage, app hors ligne, GPS agents, Google Sheets nettoyage, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "Guide TidyFlow — Documentation interactive officielle",
    description: "Documentation officielle en 23 chapitres avec TidyBot : setup, Sheets, app offline, GPS, paie et IA.",
    keywords: "documentation TidyFlow, guide nettoyage, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "Fonctionnalités TidyFlow — Planning, Offline, GPS, Chat et IA",
    description: "Planning, app terrain hors ligne, GPS, chat par tâche, QuickBooks, Revenue AI et paie pour le nettoyage.",
    keywords: "fonctionnalités nettoyage, app offline, GPS nettoyage",
    canonicalPath: "/features"
  },
  pricing: {
    title: "Tarifs TidyFlow — Forfaits Startup, Standard et Premium",
    description: "Tarifs transparents selon propriétés et agents. Essai gratuit 14 jours, facturation Stripe.",
    keywords: "tarifs logiciel nettoyage, forfaits TidyFlow",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "Intégrations TidyFlow — Sheets, QuickBooks, Stripe et Cartes",
    description: "Connectez Google Sheets, QuickBooks Online, Stripe et cartes géofence depuis un hub d'intégrations.",
    keywords: "intégration Google Sheets nettoyage, QuickBooks nettoyage, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Démo TidyFlow — Essai gratuit 14 jours",
    description: "Planifiez une démo en direct. Parlez-nous de votre équipe et de vos tableurs. Sans carte bancaire.",
    keywords: "démo TidyFlow, essai logiciel nettoyage",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow pour propriétaires, managers, agents et clients",
    description: "Parcours adaptés aux propriétaires, managers ops, agents terrain et clients facilities.",
    keywords: "logiciel nettoyage rôles, app managers, app agents offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Comment fonctionne TidyFlow — De la feuille au terrain et à la paie",
    description: "Synchronisez votre Sheet, dispatchtez, suivez les heures offline avec GPS, approuvez la paie et facturez.",
    keywords: "workflow nettoyage, pipeline opérations, sync nettoyage",
    canonicalPath: "/how-it-works"
  }
};

const de: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Reinigungs-Operations-Software | Offline-App & GPS",
    description: "All-in-one für Reinigungsfirmen: Offline-App iOS/Android, GPS-Geofencing, Google-Sheets-Sync, QuickBooks, Aufgaben-Chat und KI. 14 Tage gratis testen.",
    keywords: "Reinigungssoftware, Offline-App Reinigung, GPS Reinigungskräfte, Google Sheets, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "TidyFlow Benutzerhandbuch — Interaktive Dokumentation",
    description: "Offizielle Dokumentation in 23 Kapiteln mit TidyBot: Setup, Sheets, Offline-App, GPS, Lohn und KI.",
    keywords: "TidyFlow Dokumentation, Handbuch Reinigung, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "TidyFlow Funktionen — Planung, Offline, GPS, Chat & KI",
    description: "Planung, Offline-Feldapp, GPS, Aufgaben-Chat, QuickBooks, Revenue AI und Lohn für Reinigungsteams.",
    keywords: "Reinigungssoftware Funktionen, Offline-App, GPS Reinigung",
    canonicalPath: "/features"
  },
  pricing: {
    title: "TidyFlow Preise — Startup-, Standard- & Premium-Pläne",
    description: "Transparente Preise nach Objekten und Kräften. 14-Tage-Test, Stripe-Abrechnung.",
    keywords: "Preise Reinigungssoftware, TidyFlow Pläne",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "TidyFlow Integrationen — Sheets, QuickBooks, Stripe & Karten",
    description: "Verbinden Sie Google Sheets, QuickBooks Online, Stripe und Geofence-Karten in einem Integrations-Hub.",
    keywords: "Google Sheets Integration Reinigung, QuickBooks Reinigung, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "TidyFlow Demo — 14 Tage kostenlos testen",
    description: "Buchen Sie eine Live-Demo. Erzählen Sie uns von Teamgröße und Tabellen-Workflow. Keine Kreditkarte.",
    keywords: "TidyFlow Demo, Reinigungssoftware testen",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow für Inhaber, Manager, Kräfte und Kunden",
    description: "Rollenbasierte Workflows für Betriebsinhaber, Ops-Manager, Feldkräfte und Facility-Kunden.",
    keywords: "Reinigungssoftware Rollen, Manager-Dashboard, Offline-App Kräfte",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "So funktioniert TidyFlow — Vom Sheet zum Feld zur Lohnabrechnung",
    description: "Sheet synchronisieren, Jobs dispatchen, Offline-Stunden mit GPS erfassen, Lohn freigeben und Kunden fakturieren.",
    keywords: "Reinigungs-Workflow, Operations-Pipeline, Sync Reinigung",
    canonicalPath: "/how-it-works"
  }
};

const pl: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Oprogramowanie operacyjne sprzątania | App offline i GPS",
    description: "Kompleksowa platforma dla firm sprzątających: app offline iOS/Android, geofencing GPS, sync Google Sheets, QuickBooks, czat zadań i AI. 14 dni za darmo.",
    keywords: "oprogramowanie sprzątanie, app offline, GPS sprzątanie, Google Sheets, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "Przewodnik TidyFlow — Oficjalna dokumentacja interaktywna",
    description: "Oficjalna dokumentacja w 23 rozdziałach z TidyBot: setup, Sheets, app offline, GPS, płace i AI.",
    keywords: "dokumentacja TidyFlow, przewodnik sprzątanie, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "Funkcje TidyFlow — Grafik, Offline, GPS, Czat i AI",
    description: "Grafik, app terenowa offline, GPS, czat zadań, QuickBooks, Revenue AI i płace dla firm sprzątających.",
    keywords: "funkcje sprzątanie, app offline, GPS sprzątanie",
    canonicalPath: "/features"
  },
  pricing: {
    title: "Cennik TidyFlow — Plany Startup, Standard i Premium",
    description: "Przejrzyste plany według obiektów i pracowników. 14-dniowy trial, rozliczenie Stripe.",
    keywords: "cennik oprogramowanie sprzątanie, plany TidyFlow",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "Integracje TidyFlow — Sheets, QuickBooks, Stripe i Mapy",
    description: "Połącz Google Sheets, QuickBooks Online, Stripe i mapy geofence w jednym hubie integracji.",
    keywords: "integracja Google Sheets sprzątanie, QuickBooks sprzątanie, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Demo TidyFlow — Bezpłatny okres próbny 14 dni",
    description: "Umów live demo. Opowiedz o zespole i arkuszach. Bez karty kredytowej.",
    keywords: "demo TidyFlow, trial oprogramowanie sprzątanie",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow dla właścicieli, menedżerów, pracowników i klientów",
    description: "Role: właściciele firm, menedżerowie operacji, pracownicy terenowi i klienci facilities.",
    keywords: "oprogramowanie sprzątanie role, panel menedżera, app offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Jak działa TidyFlow — Od arkusza przez pole do listy płac",
    description: "Zsynchronizuj Sheet, rozdziel zadania, rejestruj godziny offline z GPS, zatwierdź płace i wystaw faktury.",
    keywords: "workflow sprzątanie, pipeline operacje, sync sprzątanie",
    canonicalPath: "/how-it-works"
  }
};

const no: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Driftssprogramvare for rengjøring | Offline-app og GPS",
    description: "Alt-i-ett for rengjøringsfirmaer: offline-app iOS/Android, GPS-geofencing, Google Sheets-sync, QuickBooks, oppgavechat og AI. 14 dagers gratis prøve.",
    keywords: "rengjøringsprogramvare, offline-app, GPS renhold, Google Sheets, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "TidyFlow brukerveiledning — Interaktiv dokumentasjon",
    description: "Offisiell dokumentasjon i 23 kapitler med TidyBot: oppsett, Sheets, offline-app, GPS, lønn og AI.",
    keywords: "TidyFlow dokumentasjon, veiledning renhold, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "TidyFlow-funksjoner — Planlegging, Offline, GPS, Chat og AI",
    description: "Planlegging, offline feltapp, GPS, oppgavechat, QuickBooks, Revenue AI og lønn for renholdsteam.",
    keywords: "funksjoner rengjøring, offline-app, GPS renhold",
    canonicalPath: "/features"
  },
  pricing: {
    title: "TidyFlow-priser — Startup-, Standard- og Premium-planer",
    description: "Transparente planer etter eiendommer og renholdere. 14 dagers prøve, Stripe-fakturering.",
    keywords: "priser rengjøringsprogramvare, TidyFlow planer",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "TidyFlow-integrasjoner — Sheets, QuickBooks, Stripe og Kart",
    description: "Koble Google Sheets, QuickBooks Online, Stripe og geofence-kart i ett integrasjonshub.",
    keywords: "integrasjon Google Sheets renhold, QuickBooks renhold, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "TidyFlow-demo — Gratis prøveperiode 14 dager",
    description: "Bestill livedemo. Fortell oss om team og regneark. Ingen kredittkort.",
    keywords: "demo TidyFlow, prøve rengjøringsprogramvare",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow for eiere, ledere, renholdere og kunder",
    description: "Rollebaserte arbeidsflyter for bedriftseiere, driftsledere, feltrenholdere og facility-kunder.",
    keywords: "rengjøring roller, lederpanel, offline-app renhold",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Slik fungerer TidyFlow — Fra regneark til felt til lønn",
    description: "Synkroniser Sheet, dispatch jobber, spor timer offline med GPS, godkjenn lønn og fakturer kunder.",
    keywords: "arbeidsflyt rengjøring, driftspipeline, sync renhold",
    canonicalPath: "/how-it-works"
  }
};

const sv: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Driftprogramvara för städföretag | Offline-app & GPS",
    description: "Allt-i-ett för städföretag: offline-app iOS/Android, GPS-geofencing, Google Sheets-synk, QuickBooks, uppgiftschatt och AI. 14 dagars gratis provperiod.",
    keywords: "städprogramvara, offline-app städ, GPS städare, Google Sheets, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "TidyFlow användarhandbok — Interaktiv dokumentation",
    description: "Officiell dokumentation i 23 kapitel med TidyBot: setup, Sheets, offline-app, GPS, lön och AI.",
    keywords: "TidyFlow dokumentation, städhandbok, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "TidyFlow-funktioner — Schema, Offline, GPS, Chatt och AI",
    description: "Schemaläggning, offline fältapp, GPS, uppgiftschatt, QuickBooks, Revenue AI och lön för städteam.",
    keywords: "städfunktioner, offline-app, GPS städning",
    canonicalPath: "/features"
  },
  pricing: {
    title: "TidyFlow-priser — Startup-, Standard- och Premium-planer",
    description: "Transparenta planer efter objekt och städare. 14 dagars provperiod, Stripe-fakturering.",
    keywords: "priser städprogramvara, TidyFlow planer",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "TidyFlow-integrationer — Sheets, QuickBooks, Stripe och Kartor",
    description: "Anslut Google Sheets, QuickBooks Online, Stripe och geofence-kartor i ett integrationsnav.",
    keywords: "integration Google Sheets städ, QuickBooks städ, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "TidyFlow-demo — Gratis 14-dagarsprov",
    description: "Boka en livedemo. Berätta om team och kalkylblad. Inget kreditkort.",
    keywords: "demo TidyFlow, prova städprogramvara",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow för ägare, chefer, städare och kunder",
    description: "Arbetsflöden för företagsägare, driftschefer, fältstädare och facility-kunder.",
    keywords: "städning roller, chefspanel, offline-app städare",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Så fungerar TidyFlow — Från kalkylblad till fält till lön",
    description: "Synka Sheet, skicka jobb, spåra tid offline med GPS, godkänn lön och fakturera kunder.",
    keywords: "arbetsflöde städning, driftspipeline, sync städ",
    canonicalPath: "/how-it-works"
  }
};

const it: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — Software operativo per imprese di pulizie | App offline e GPS",
    description: "Piattaforma completa per imprese di pulizie: app offline iOS/Android, geofencing GPS, sync Google Sheets, QuickBooks, chat per task e IA. Prova gratis 14 giorni.",
    keywords: "software pulizie, app offline pulizie, GPS addetti, Google Sheets, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "Guida utente TidyFlow — Documentazione interattiva ufficiale",
    description: "Documentazione ufficiale in 23 capitoli con TidyBot: setup, Sheets, app offline, GPS, paghe e IA.",
    keywords: "documentazione TidyFlow, guida pulizie, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "Funzionalità TidyFlow — Pianificazione, Offline, GPS, Chat e IA",
    description: "Pianificazione, app campo offline, GPS, chat per task, QuickBooks, Revenue AI e paghe per team di pulizie.",
    keywords: "funzionalità pulizie, app offline, GPS pulizie",
    canonicalPath: "/features"
  },
  pricing: {
    title: "Prezzi TidyFlow — Piani Startup, Standard e Premium",
    description: "Piani trasparenti per immobili e operatori. Prova gratuita 14 giorni, fatturazione Stripe.",
    keywords: "prezzi software pulizie, piani TidyFlow",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "Integrazioni TidyFlow — Sheets, QuickBooks, Stripe e Mappe",
    description: "Collega Google Sheets, QuickBooks Online, Stripe e mappe geofence in un hub di integrazioni.",
    keywords: "integrazione Google Sheets pulizie, QuickBooks pulizie, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "Demo TidyFlow — Prova gratuita 14 giorni",
    description: "Prenota una demo live. Raccontaci del team e dei fogli di calcolo. Nessuna carta di credito.",
    keywords: "demo TidyFlow, prova software pulizie",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow per proprietari, manager, operatori e clienti",
    description: "Flussi su misura per titolari, operations manager, operatori sul campo e clienti facility.",
    keywords: "software pulizie ruoli, dashboard manager, app offline operatori",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "Come funziona TidyFlow — Dal foglio al campo alle paghe",
    description: "Sincronizza lo Sheet, assegna lavori, registra ore offline con GPS, approva le paghe e fattura i clienti.",
    keywords: "workflow pulizie, pipeline operazioni, sync pulizie",
    canonicalPath: "/how-it-works"
  }
};

const ar: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — برنامج عمليات التنظيف | تطبيق بدون إنترنت وGPS",
    description: "منصة متكاملة لشركات التنظيف: تطبيق بدون إنترنت، تحقق GPS، مزامنة Google Sheets، QuickBooks، دردشة المهام والذكاء الاصطناعي. تجربة مجانية 14 يوماً.",
    keywords: "برنامج تنظيف, تطبيق بدون إنترنت, GPS عمال نظافة, Google Sheets, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "دليل مستخدم TidyFlow — توثيق تفاعلي رسمي",
    description: "التوثيق الرسمي في 23 فصلاً مع TidyBot: الإعداد، Sheets، التطبيق دون اتصال، GPS، الرواتب والذكاء الاصطناعي.",
    keywords: "توثيق TidyFlow, دليل تنظيف, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "ميزات TidyFlow — جدولة، Offline، GPS، دردشة وذكاء اصطناعي",
    description: "جدولة، تطبيق ميداني دون اتصال، GPS، دردشة لكل مهمة، QuickBooks، Revenue AI وكشوف رواتب لفرق التنظيف.",
    keywords: "ميزات تنظيف, تطبيق offline, GPS تنظيف",
    canonicalPath: "/features"
  },
  pricing: {
    title: "أسعار TidyFlow — خطط Startup وStandard وPremium",
    description: "خطط شفافة حسب العقارات والعمال. تجربة 14 يوماً وفوترة Stripe.",
    keywords: "أسعار برنامج تنظيف, خطط TidyFlow",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "تكاملات TidyFlow — Sheets وQuickBooks وStripe والخرائط",
    description: "اربط Google Sheets وQuickBooks Online وStripe وخرائط السياج الجغرافي من مركز تكاملات واحد.",
    keywords: "تكامل Google Sheets تنظيف, QuickBooks تنظيف, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "عرض TidyFlow — تجربة مجانية 14 يوماً",
    description: "احجز عرضاً مباشراً. أخبرنا عن حجم الفريق وجداول العمل. بدون بطاقة ائتمان.",
    keywords: "عرض TidyFlow, تجربة برنامج تنظيف",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow للملاك والمديرين وعمال النظافة والعملاء",
    description: "مسارات عمل حسب الدور للملاك ومديري العمليات وعمال الميدان وعملاء المرافق.",
    keywords: "برنامج تنظيف أدوار, لوحة مدير, تطبيق offline",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "كيف يعمل TidyFlow — من الجدول إلى الميدان إلى الرواتب",
    description: "زامن Sheet، وزّع المهام، سجّل الساعات دون اتصال مع GPS، اعتمد الرواتب وفاتر العملاء.",
    keywords: "سير عمل تنظيف, خط أنابيب العمليات, مزامنة تنظيف",
    canonicalPath: "/how-it-works"
  }
};

const cn: Record<SeoPage, SeoMeta> = {
  home: {
    title: "TidyFlow — 保洁运营软件 | 离线 App、GPS 与 Google 表格",
    description: "保洁公司一体化平台：离线外勤 App、GPS 围栏核验、表格双向同步、QuickBooks、任务聊天与 AI 派单。免费试用 14 天。",
    keywords: "保洁软件, 离线 App, GPS 考勤, Google 表格同步, QuickBooks, TidyFlow",
    canonicalPath: "/"
  },
  documentation: {
    title: "TidyFlow 用户手册 — 官方互动文档",
    description: "23 章官方文档与 TidyBot：设置、表格同步、离线 App、GPS、薪酬与 AI，支持 11 种语言。",
    keywords: "TidyFlow 文档, 保洁软件指南, TidyBot",
    canonicalPath: "/documentation"
  },
  features: {
    title: "TidyFlow 功能 — 排班、离线、GPS、聊天与 AI",
    description: "排班、离线外勤 App、GPS、任务聊天、QuickBooks、Revenue AI 与薪酬，专为保洁团队打造。",
    keywords: "保洁软件功能, 离线 App, GPS 保洁",
    canonicalPath: "/features"
  },
  pricing: {
    title: "TidyFlow 定价 — Startup、Standard 与 Premium",
    description: "按物业与保洁员透明定价。14 天免费试用，Stripe 计费与用量限额一目了然。",
    keywords: "保洁软件价格, TidyFlow 套餐",
    canonicalPath: "/pricing"
  },
  integrations: {
    title: "TidyFlow 集成 — 表格、QuickBooks、Stripe 与地图",
    description: "在统一集成中心连接 Google Sheets、QuickBooks Online、Stripe 与地理围栏地图。",
    keywords: "表格集成保洁, QuickBooks 保洁, Stripe TidyFlow",
    canonicalPath: "/integrations"
  },
  contact: {
    title: "预约 TidyFlow 演示 — 免费试用 14 天",
    description: "预约现场演示，介绍团队规模与表格流程。无需信用卡。",
    keywords: "TidyFlow 演示, 保洁软件试用",
    canonicalPath: "/contact"
  },
  personas: {
    title: "TidyFlow 面向业主、经理、保洁员与客户",
    description: "为业主、运营经理、外勤保洁员与设施客户提供角色化工作流。",
    keywords: "保洁软件角色, 经理看板, 离线保洁 App",
    canonicalPath: "/personas"
  },
  "how-it-works": {
    title: "TidyFlow 如何运作 — 从表格到外勤再到工资",
    description: "同步主表、派发任务、离线 GPS 记工时、审批工资并为客户开票。",
    keywords: "保洁运营流程, 外勤办公同步, 表格同步",
    canonicalPath: "/how-it-works"
  }
};

const byLang: Record<string, Record<SeoPage, SeoMeta>> = { en, pt, es, fr, de, pl, no, sv, it, ar, cn };

const HREFLANG_MAP: Record<string, string> = {
  en: "en",
  pt: "pt",
  es: "es",
  fr: "fr",
  de: "de",
  pl: "pl",
  no: "nb",
  sv: "sv",
  it: "it",
  ar: "ar",
  cn: "zh-CN"
};

export function getSeoMeta(
  activeTab: "marketing" | "documentation",
  marketingPage: string,
  language: string
): SeoMeta {
  const langDict = byLang[language] || byLang.en;
  if (activeTab === "documentation") return langDict.documentation;
  const pageMap: Record<string, SeoPage> = {
    home: "home",
    features: "features",
    pricing: "pricing",
    integrations: "integrations",
    contact: "contact",
    personas: "personas",
    "how-it-works": "how-it-works"
  };
  const page = pageMap[marketingPage] || "home";
  return langDict[page] || langDict.home;
}

export function getHtmlLang(language: string): string {
  return HREFLANG_MAP[language] || language;
}

export const SEO_LANGUAGE_CODES = Object.keys(HREFLANG_MAP);

/** Resolve ?lang= to a supported SEO language code (fallback en). */
export function resolveSeoLanguage(lang?: string | null): string {
  if (lang && byLang[lang]) return lang;
  return "en";
}

/** Next.js Metadata API (server-safe — no document access). */
export function buildPageMetadata(
  page: SeoPage,
  language = "en",
  options?: { includeSiteVerification?: boolean }
) {
  const resolved = resolveSeoLanguage(language);
  const langDict = byLang[resolved] || byLang.en;
  const meta = langDict[page] || langDict.home;
  const path = meta.canonicalPath === "/" ? "" : meta.canonicalPath;
  const canonical = `${SITE_URL}${path}`;
  const htmlLang = getHtmlLang(resolved);
  const ogLocale = htmlLang.replace("-", "_");
  const alternateLocales = Object.values(HREFLANG_MAP)
    .map((h) => h.replace("-", "_"))
    .filter((h) => h !== ogLocale);

  const languages = buildAlternateLanguages(meta.canonicalPath);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.split(",").map((k) => k.trim()),
    authors: [{ name: "TidyFlow", url: SITE_URL }],
    creator: "TidyFlow",
    publisher: "TidyFlow",
    applicationName: "TidyFlow",
    category: "business",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonical || SITE_URL,
      languages,
    },
    openGraph: {
      type: "website" as const,
      url: canonical || SITE_URL,
      siteName: "TidyFlow",
      title: meta.title,
      description: meta.description,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "TidyFlow — Cleaning company software for field teams",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: "@tidyflowapp",
      creator: "@tidyflowapp",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    ...(options?.includeSiteVerification
      ? {
          verification: {
            google: GOOGLE_SITE_VERIFICATION,
          },
        }
      : {}),
  };
}

export function pageFromPath(pathname: string): SeoPage {
  const clean = pathname.replace(/\/$/, "") || "/";
  const map: Record<string, SeoPage> = {
    "/": "home",
    "/features": "features",
    "/pricing": "pricing",
    "/how-it-works": "how-it-works",
    "/personas": "personas",
    "/integrations": "integrations",
    "/contact": "contact",
    "/documentation": "documentation",
  };
  if (clean === "/whats-new" || clean.startsWith("/whats-new/")) {
    return "features";
  }
  return map[clean] || "home";
}

export function pathForPage(pageId: string): string {
  if (pageId === "home" || pageId === "") return "/";
  if (pageId === "documentation") return "/documentation";
  return `/${pageId}`;
}

/** Build hreflang map — clean canonical URLs only (language is cookie/client-side). */
export function buildAlternateLanguages(canonicalPath: string): Record<string, string> {
  const path = canonicalPath === "/" ? "" : canonicalPath;
  const canonical = `${SITE_URL}${path}` || SITE_URL;
  // Point all language tags at the same clean URL. Query ?lang= variants are
  // redirected by middleware and must not appear as separate indexable URLs.
  const languages: Record<string, string> = { "x-default": canonical };
  Object.values(HREFLANG_MAP).forEach((hreflang) => {
    languages[hreflang] = canonical;
  });
  return languages;
}

/** Generic Next metadata for dynamic marketing pages with full multilingual alternates. */
export function buildCustomPageMetadata(options: {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  language?: string;
}) {
  const language = resolveSeoLanguage(options.language);
  const path = options.canonicalPath === "/" ? "" : options.canonicalPath;
  const canonical = `${SITE_URL}${path}`;
  const htmlLang = getHtmlLang(language);
  const ogLocale = htmlLang.replace("-", "_");
  const alternateLocales = Object.values(HREFLANG_MAP)
    .map((h) => h.replace("-", "_"))
    .filter((h) => h !== ogLocale);
  const keywordList = options.keywords.split(",").map((k) => k.trim()).filter(Boolean);

  return {
    metadataBase: new URL(SITE_URL),
    title: options.title,
    description: options.description,
    keywords: keywordList,
    authors: [{ name: "TidyFlow", url: SITE_URL }],
    creator: "TidyFlow",
    publisher: "TidyFlow",
    applicationName: "TidyFlow",
    category: "business",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonical || SITE_URL,
      languages: buildAlternateLanguages(options.canonicalPath),
    },
    openGraph: {
      type: "website" as const,
      url: canonical || SITE_URL,
      siteName: "TidyFlow",
      title: options.title,
      description: options.description,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "TidyFlow — Cleaning company software for field teams",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      site: "@tidyflowapp",
      creator: "@tidyflowapp",
      title: options.title,
      description: options.description,
      images: [OG_IMAGE],
    },
  };
}

export { SITE_URL, OG_IMAGE, HREFLANG_MAP };

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]${rel === "canonical" ? "" : `[href="${href}"]`}`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

function injectJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applySeoMeta(meta: SeoMeta, language: string): void {
  const canonical = `${SITE_URL}${meta.canonicalPath === "/" ? "" : meta.canonicalPath}`;
  const htmlLang = getHtmlLang(language);

  document.title = meta.title;
  document.documentElement.lang = htmlLang;

  setMeta("description", meta.description);
  setMeta("keywords", meta.keywords);
  setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  setMeta("author", "TidyFlow");
  setMeta("application-name", "TidyFlow");

  setMeta("og:title", meta.title, "property");
  setMeta("og:description", meta.description, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", canonical, "property");
  setMeta("og:site_name", "TidyFlow", "property");
  setMeta("og:image", OG_IMAGE, "property");
  setMeta("og:image:alt", "TidyFlow — Cleaning Operations Hub", "property");
  setMeta("og:locale", htmlLang.replace("-", "_"), "property");

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", OG_IMAGE);
  setMeta("twitter:site", "@tidyflowapp");

  setLink("canonical", canonical);

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
  Object.values(HREFLANG_MAP).forEach((hreflang) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = hreflang;
    link.href = canonical;
    document.head.appendChild(link);
  });
  const xDefault = document.createElement("link");
  xDefault.rel = "alternate";
  xDefault.hreflang = "x-default";
  xDefault.href = canonical;
  document.head.appendChild(xDefault);

  injectJsonLd("seo-org", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TidyFlow",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: "tidyflaw@gmail.com",
    description: meta.description,
    sameAs: []
  });

  injectJsonLd("seo-software", {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TidyFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "9",
      priceCurrency: "USD",
      description: "14-day free trial · Startup plan from $9/month"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1200",
      bestRating: "5"
    },
    featureList: [
      "Offline field app",
      "GPS geofenced time tracking",
      "Google Sheets two-way sync",
      "AI cleaner assignment",
      "Payroll from verified hours",
      "Client photo proof PDFs",
      "SOS lone-worker safety"
    ]
  });

  injectJsonLd("seo-website", {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TidyFlow",
    url: SITE_URL,
    description: meta.description,
    inLanguage: Object.values(HREFLANG_MAP),
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/documentation?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  });
}
