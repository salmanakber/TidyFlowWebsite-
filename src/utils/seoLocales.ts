import type { SeoMeta, SeoPage } from "./seoTypes";

const homeKw = {
  en: "cleaning company software, janitorial management software, commercial cleaning software, cleaning business software, maid service software, house cleaning software, office cleaning software, contract cleaning software, facility cleaning software, janitorial time tracking, cleaning dispatch software, cleaning quality control software, cleaner timesheet app, night janitorial software, building services software, offline cleaning app, cleaner GPS tracking, cleaning scheduling software, cleaning payroll software, Google Sheets cleaning, QuickBooks cleaning invoices, field service cleaning app, proof of cleaning software, TidyFlow",
};

export const seoLocales: Record<string, Record<SeoPage, SeoMeta>> = {
  en: {
    home: {
      title: "Cleaning Company Software | TidyFlow",
      description:
        "Janitorial management software with offline cleaner app, GPS clock-in, Google Sheets sync, QuickBooks invoices, payroll, and photo proof. Free 14-day trial. Plans from $25/mo.",
      keywords: homeKw.en,
      canonicalPath: "/",
    },
    documentation: {
      title: "TidyFlow User Guide | Cleaning Software Docs",
      description:
        "How to run TidyFlow: Google Sheets sync, offline cleaner app, GPS clock-ins, task chat, QuickBooks invoices, payroll, rota, and Revenue AI — 11 languages.",
      keywords:
        "cleaning software user guide, janitorial app tutorial, Google Sheets cleaning sync, QuickBooks cleaning setup, offline cleaner app guide, TidyFlow documentation",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Cleaning Software Features | Scheduling, GPS, Payroll",
      description:
        "Explore cleaning ops features: rota scheduling, offline timers, GPS geofencing, photo proof, AI dispatch, payroll, QuickBooks, and Sheets sync.",
      keywords:
        "cleaning software features, janitorial scheduling software, cleaner GPS tracking app, cleaning payroll software, rota builder cleaning, offline field service app, AI dispatch cleaning",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Cleaning Software Pricing | TidyFlow Plans",
      description:
        "Simple Startup ($25), Standard ($79), and Premium ($149) plans for cleaning companies. Transparent limits, self-serve billing, and a 14-day free trial.",
      keywords:
        "cleaning software pricing, janitorial software cost, cleaning business software plans, commercial cleaning software price, maid service software pricing, TidyFlow pricing, cleaning software $25",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Cleaning Software Integrations | Sheets & QuickBooks",
      description:
        "Connect Google Sheets two-way sync, QuickBooks Online invoices, and Google Maps geofencing for cleaning companies.",
      keywords:
        "Google Sheets cleaning software, QuickBooks Online cleaning invoices, cleaning software integrations, Maps geofencing cleaners, janitorial accounting sync",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Book a Cleaning Software Demo | TidyFlow",
      description:
        "See TidyFlow on your sites — offline app, GPS proof, Sheets sync, and payroll. Book a live demo or start a 14-day free trial.",
      keywords:
        "cleaning software demo, janitorial software trial, book cleaning software demo, TidyFlow contact",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Cleaning Software for Owners, Managers & Cleaners",
      description:
        "Role-based workflows for cleaning company owners, operations managers, field cleaners, and facility clients.",
      keywords:
        "cleaning company owner software, cleaning manager dashboard, cleaner mobile app, facilities cleaning client portal",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "How Cleaning Ops Software Works | TidyFlow",
      description:
        "Sync your Google Sheet, dispatch jobs, track hours offline with GPS, approve payroll, and invoice clients in one cleaning operations pipeline.",
      keywords:
        "how cleaning software works, cleaning operations workflow, field to office cleaning sync, commercial cleaning process software",
      canonicalPath: "/how-it-works",
    },
  },
  pt: {
    home: {
      title: "Software para Empresas de Limpeza | TidyFlow",
      description:
        "Software de gestão de limpeza com app offline, ponto GPS, Google Sheets, faturas QuickBooks, folha de pagamento e fotos. Teste grátis 14 dias. Planos desde $25/mês.",
      keywords:
        "software empresa de limpeza, software de limpeza comercial, app faxineiros offline, gestão de limpeza, software faxina, software limpeza de escritório, software limpeza contratual, controle de ponto limpeza, GPS faxineiros, folha de pagamento limpeza, software dispatch limpeza, qualidade limpeza, Google Sheets limpeza, QuickBooks limpeza, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "Guia TidyFlow | Documentação Software de Limpeza",
      description:
        "Como usar TidyFlow: sync Google Sheets, app offline, ponto GPS, chat por tarefa, QuickBooks, folha, rota e Revenue AI — 11 idiomas.",
      keywords:
        "guia software limpeza, tutorial app faxineiros, sync Google Sheets limpeza, configurar QuickBooks limpeza, documentação TidyFlow",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funções Software de Limpeza | Agenda, GPS, Folha",
      description:
        "Agendamento por rota, temporizadores offline, geofence GPS, fotos, despacho IA, folha, QuickBooks e sync Sheets para empresas de limpeza.",
      keywords:
        "funções software limpeza, software escala faxineiros, app GPS limpeza, folha pagamento limpeza, rota limpeza, app campo offline, despacho IA limpeza",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Preços Software de Limpeza | Planos TidyFlow",
      description:
        "Planos Startup ($25), Standard ($79) e Premium ($149) para empresas de limpeza. Limites claros, faturação self-service e teste de 14 dias.",
      keywords:
        "preço software limpeza, custo software faxina, planos software limpeza comercial, TidyFlow preços, software limpeza $25",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integrações Limpeza | Sheets e QuickBooks",
      description:
        "Ligue Google Sheets (dois sentidos), faturas QuickBooks Online e geofence no Maps para empresas de limpeza.",
      keywords:
        "Google Sheets software limpeza, QuickBooks faturas limpeza, integrações software limpeza, geofence Maps faxineiros",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Marcar Demo Software de Limpeza | TidyFlow",
      description:
        "Veja TidyFlow nos seus sites — app offline, prova GPS, Sheets e folha. Marque uma demo ou comece o teste de 14 dias.",
      keywords: "demo software limpeza, teste software faxina, agendar demo TidyFlow, contacto TidyFlow",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Software de Limpeza para Donos, Gestores e Faxineiros",
      description:
        "Fluxos por função para donos de empresas de limpeza, gestores de operações, faxineiros de campo e clientes de facilities.",
      keywords:
        "software dono empresa limpeza, painel gestor limpeza, app faxineiro, portal cliente facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Como Funciona o Software de Operações de Limpeza",
      description:
        "Sincronize a planilha, despache trabalhos, registe horas offline com GPS, aprove a folha e fatura clientes num só pipeline.",
      keywords:
        "como funciona software limpeza, fluxo operações limpeza, sync campo escritório, processo limpeza comercial",
      canonicalPath: "/how-it-works",
    },
  },
  es: {
    home: {
      title: "Software para Empresas de Limpieza | TidyFlow",
      description:
        "Software de gestión de limpieza con app offline, fichaje GPS, Google Sheets, facturas QuickBooks, nómina y fotos. Prueba 14 días. Planes desde $25/mes.",
      keywords:
        "software empresa de limpieza, software limpieza comercial, app limpiadores offline, gestión de limpieza, software limpieza hogar, software limpieza de oficinas, software limpieza por contrato, control horario limpieza, GPS limpiadores, nómina limpieza, software despacho limpieza, control calidad limpieza, Google Sheets limpieza, QuickBooks limpieza, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "Guía TidyFlow | Documentación Software de Limpieza",
      description:
        "Cómo usar TidyFlow: sync Google Sheets, app offline, fichaje GPS, chat por tarea, QuickBooks, nómina, rota y Revenue AI — 11 idiomas.",
      keywords:
        "guía software limpieza, tutorial app limpiadores, sync Google Sheets limpieza, configurar QuickBooks limpieza, documentación TidyFlow",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funciones Software de Limpieza | Agenda, GPS, Nómina",
      description:
        "Rota, temporizadores offline, geovalla GPS, fotos, despacho IA, nómina, QuickBooks y sync Sheets para empresas de limpieza.",
      keywords:
        "funciones software limpieza, software turnos limpiadores, app GPS limpieza, nómina limpieza, rota limpieza, app campo offline",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Precios Software de Limpieza | Planes TidyFlow",
      description:
        "Planes Startup ($25), Standard ($79) y Premium ($149) para empresas de limpieza. Límites claros, facturación self-service y prueba de 14 días.",
      keywords:
        "precio software limpieza, coste software limpieza, planes software limpieza comercial, precios TidyFlow",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integraciones Limpieza | Sheets y QuickBooks",
      description:
        "Conecta Google Sheets bidireccional, facturas QuickBooks Online y geovalla Maps para empresas de limpieza.",
      keywords:
        "Google Sheets software limpieza, QuickBooks facturas limpieza, integraciones software limpieza, geovalla Maps",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Reservar Demo Software de Limpieza | TidyFlow",
      description:
        "Prueba TidyFlow en tus sedes — app offline, prueba GPS, Sheets y nómina. Reserva una demo o empieza 14 días gratis.",
      keywords: "demo software limpieza, prueba software limpieza, agendar demo TidyFlow",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Software de Limpieza para Dueños, Gerentes y Limpiadores",
      description:
        "Flujos por rol para dueños, gerentes de operaciones, limpiadores de campo y clientes de facilities.",
      keywords:
        "software dueño empresa limpieza, panel gerente limpieza, app limpiador, portal cliente facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Cómo Funciona el Software de Operaciones de Limpieza",
      description:
        "Sincroniza tu hoja, despacha trabajos, registra horas offline con GPS, aprueba nómina y factura clientes en un pipeline.",
      keywords:
        "cómo funciona software limpieza, flujo operaciones limpieza, sync campo oficina, proceso limpieza comercial",
      canonicalPath: "/how-it-works",
    },
  },
  fr: {
    home: {
      title: "Logiciel Entreprise de Nettoyage | TidyFlow",
      description:
        "Logiciel de gestion de nettoyage : app hors ligne, pointeuse GPS, Google Sheets, factures QuickBooks, paie et photos. Essai 14 jours. À partir de 25 $/mois.",
      keywords:
        "logiciel entreprise de nettoyage, logiciel nettoyage commercial, application agents hors ligne, gestion nettoyage, logiciel ménage, logiciel nettoyage bureaux, logiciel nettoyage sous contrat, pointeuse nettoyage, GPS agents, paie nettoyage, logiciel dispatch nettoyage, contrôle qualité nettoyage, Google Sheets nettoyage, QuickBooks nettoyage, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "Guide TidyFlow | Docs Logiciel de Nettoyage",
      description:
        "Utiliser TidyFlow : sync Google Sheets, app hors ligne, pointage GPS, chat par tâche, QuickBooks, paie, planning et Revenue AI — 11 langues.",
      keywords:
        "guide logiciel nettoyage, tutoriel app agents, sync Google Sheets nettoyage, QuickBooks nettoyage, documentation TidyFlow",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Fonctions Logiciel Nettoyage | Planning, GPS, Paie",
      description:
        "Planning des rotations, minuteurs hors ligne, géofence GPS, photos, dispatch IA, paie, QuickBooks et sync Sheets.",
      keywords:
        "fonctions logiciel nettoyage, logiciel planning agents, app GPS nettoyage, paie nettoyage, planning rotation, app terrain hors ligne",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Tarifs Logiciel de Nettoyage | Forfaits TidyFlow",
      description:
        "Forfaits Startup (25 $), Standard (79 $) et Premium (149 $) pour entreprises de nettoyage. Limites claires, facturation self-service, essai 14 jours.",
      keywords:
        "prix logiciel nettoyage, coût logiciel ménage, tarifs nettoyage commercial, prix TidyFlow",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Intégrations Nettoyage | Sheets et QuickBooks",
      description:
        "Connectez Google Sheets bidirectionnel, factures QuickBooks Online et géofence Maps pour entreprises de nettoyage.",
      keywords:
        "Google Sheets logiciel nettoyage, QuickBooks factures nettoyage, intégrations logiciel nettoyage",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Réserver une Démo Logiciel de Nettoyage",
      description:
        "Voyez TidyFlow sur vos sites — app hors ligne, preuves GPS, Sheets et paie. Démo live ou essai 14 jours.",
      keywords: "démo logiciel nettoyage, essai logiciel nettoyage, rendez-vous TidyFlow",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Logiciel Nettoyage pour Dirigeants, Managers et Agents",
      description:
        "Parcours par rôle pour propriétaires, managers ops, agents terrain et clients facilities.",
      keywords:
        "logiciel dirigeant nettoyage, tableau de bord manager nettoyage, app agent, portail client facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Comment Fonctionne un Logiciel d'Ops Nettoyage",
      description:
        "Synchronisez la feuille, dispatchez les interventions, pointez hors ligne avec GPS, validez la paie et facturez dans un seul flux.",
      keywords:
        "comment fonctionne logiciel nettoyage, workflow opérations nettoyage, sync terrain bureau",
      canonicalPath: "/how-it-works",
    },
  },
  de: {
    home: {
      title: "Software für Reinigungsunternehmen | TidyFlow",
      description:
        "Reinigungsmanagement mit Offline-App, GPS-Stempel, Google Sheets, QuickBooks-Rechnungen, Lohn und Fotos. 14 Tage testen. Ab 25 $/Monat.",
      keywords:
        "Software Reinigungsunternehmen, Gebäudereinigung Software, Offline-App Reinigungskräfte, Reinigungsmanagement, Haushaltshilfe Software, Büroreinigung Software, Unterhaltsreinigung Software, Zeiterfassung Reinigung, GPS Reinigungskräfte, Lohn Reinigung, Disposition Reinigung, Qualitätskontrolle Reinigung, Google Sheets Reinigung, QuickBooks Reinigung, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "TidyFlow Handbuch | Reinigungssoftware-Doku",
      description:
        "TidyFlow nutzen: Google-Sheets-Sync, Offline-App, GPS, Task-Chat, QuickBooks, Lohn, Rota und Revenue AI — 11 Sprachen.",
      keywords:
        "Handbuch Reinigungssoftware, Tutorial Reinigungs-App, Google Sheets Reinigung, QuickBooks Reinigung einrichten, TidyFlow Dokumentation",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funktionen Reinigungssoftware | Planung, GPS, Lohn",
      description:
        "Rota-Planung, Offline-Timer, GPS-Geofence, Fotos, KI-Disposition, Lohn, QuickBooks und Sheets-Sync.",
      keywords:
        "Funktionen Reinigungssoftware, Schichtplanung Reinigung, GPS-App Reinigung, Lohnsoftware Reinigung, Offline Field-App",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Preise Reinigungssoftware | TidyFlow-Tarife",
      description:
        "Startup (25 $), Standard (79 $) und Premium (149 $) für Reinigungsfirmen. Klare Limits, Self-Service-Abrechnung, 14 Tage Test.",
      keywords:
        "Preis Reinigungssoftware, Kosten Gebäudereinigung Software, Tarife Reinigungsfirma, TidyFlow Preise",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integrationen Reinigung | Sheets und QuickBooks",
      description:
        "Google Sheets bidirektional, QuickBooks-Online-Rechnungen und Maps-Geofence für Reinigungsunternehmen.",
      keywords:
        "Google Sheets Reinigungssoftware, QuickBooks Rechnungen Reinigung, Integrationen Reinigungssoftware",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Demo Reinigungssoftware buchen | TidyFlow",
      description:
        "TidyFlow auf Ihren Objekten sehen — Offline-App, GPS-Nachweis, Sheets und Lohn. Demo oder 14-Tage-Test.",
      keywords: "Demo Reinigungssoftware, Test Gebäudereinigung Software, TidyFlow Kontakt",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Reinigungssoftware für Inhaber, Leiter und Kräfte",
      description:
        "Rollen für Firmeninhaber, Operations-Leiter, Field-Kräfte und Facility-Kunden.",
      keywords:
        "Software Inhaber Reinigungsfirma, Dashboard Objektleiter, App Reinigungskraft, Kundenportal Facility",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "So Funktioniert Reinigungs-Ops-Software | TidyFlow",
      description:
        "Tabelle synchronisieren, Einsätze disponieren, Stunden offline mit GPS erfassen, Lohn freigeben und Kunden rechnen — in einer Pipeline.",
      keywords:
        "wie Reinigungssoftware funktioniert, Workflow Gebäudereinigung, Sync Feld Büro",
      canonicalPath: "/how-it-works",
    },
  },
  pl: {
    home: {
      title: "Oprogramowanie dla Firm Sprzątających | TidyFlow",
      description:
        "Zarządzanie sprzątaniem: aplikacja offline, wejście GPS, Google Sheets, faktury QuickBooks, płace i zdjęcia. 14 dni za darmo. Od 25 $/mies.",
      keywords:
        "oprogramowanie firma sprzątająca, software sprzątanie komercyjne, aplikacja sprzątacze offline, zarządzanie sprzątaniem, software sprzątanie domów, software sprzątanie biur, software sprzątanie kontraktowe, ewidencja czasu sprzątanie, GPS sprzątacze, płace sprzątanie, dyspozycja sprzątanie, kontrola jakości sprzątanie, Google Sheets sprzątanie, QuickBooks sprzątanie, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "Przewodnik TidyFlow | Dokumentacja Software Sprzątanie",
      description:
        "Jak obsługiwać TidyFlow: sync Google Sheets, aplikacja offline, GPS, czat zadań, QuickBooks, płace, grafiki i Revenue AI — 11 języków.",
      keywords:
        "przewodnik software sprzątanie, tutorial aplikacja sprzątacze, Google Sheets sprzątanie, QuickBooks sprzątanie, dokumentacja TidyFlow",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funkcje Software Sprzątanie | Grafik, GPS, Płace",
      description:
        "Grafik, timery offline, geofence GPS, zdjęcia, dyspozycja AI, płace, QuickBooks i sync Sheets.",
      keywords:
        "funkcje software sprzątanie, grafik sprzątacze, aplikacja GPS sprzątanie, płace sprzątanie, aplikacja terenowa offline",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Cennik Software Sprzątanie | Plany TidyFlow",
      description:
        "Plany Startup (25 $), Standard (79 $) i Premium (149 $) dla firm sprzątających. Jasne limity, self-service i 14 dni trial.",
      keywords:
        "cena software sprzątanie, koszt oprogramowania sprzątanie, plany TidyFlow, cennik firma sprzątająca",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integracje Sprzątanie | Sheets i QuickBooks",
      description:
        "Połącz dwukierunkowy Google Sheets, faktury QuickBooks Online i geofence Maps dla firm sprzątających.",
      keywords:
        "Google Sheets software sprzątanie, QuickBooks faktury sprzątanie, integracje software sprzątanie",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Umów Demo Software Sprzątanie | TidyFlow",
      description:
        "Zobacz TidyFlow na obiektach — aplikacja offline, dowód GPS, Sheets i płace. Demo lub 14 dni trial.",
      keywords: "demo software sprzątanie, test oprogramowania sprzątanie, kontakt TidyFlow",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Software Sprzątanie dla Właścicieli, Menedżerów i Sprzątaczy",
      description:
        "Role dla właścicieli firm sprzątających, menedżerów operacji, sprzątaczy terenowych i klientów facilities.",
      keywords:
        "software właściciel firma sprzątająca, panel menedżera sprzątanie, aplikacja sprzątacz, portal klienta facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Jak Działa Software Operacji Sprzątania | TidyFlow",
      description:
        "Zsynchronizuj arkusz, wyślij zlecenia, licz godziny offline z GPS, zatwierdź płace i wystaw faktury w jednym pipeline.",
      keywords:
        "jak działa software sprzątanie, workflow operacje sprzątanie, sync teren biuro",
      canonicalPath: "/how-it-works",
    },
  },
  no: {
    home: {
      title: "Programvare for Rengjøringsbedrifter | TidyFlow",
      description:
        "Rengjøringsstyring med offline-app, GPS-stempling, Google Sheets, QuickBooks-fakturaer, lønn og bilder. 14 dagers prøve. Fra $25/mnd.",
      keywords:
        "programvare rengjøringsbedrift, programvare næringrengjøring, app renholdere offline, rengjøringsstyring, programvare hjemmerengjøring, programvare kontorrengjøring, kontraktrengjøring programvare, timeføring rengjøring, GPS renholdere, lønn rengjøring, utsendelse rengjøring, kvalitetskontroll rengjøring, Google Sheets rengjøring, QuickBooks rengjøring, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "TidyFlow-veiledning | Dokumentasjon Rengjøring",
      description:
        "Slik bruker du TidyFlow: Google Sheets-synk, offline-app, GPS, oppgavechat, QuickBooks, lønn, vaktliste og Revenue AI — 11 språk.",
      keywords:
        "veiledning rengjøringsprogramvare, opplæring app renholdere, Google Sheets rengjøring, QuickBooks rengjøring, TidyFlow dokumentasjon",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funksjoner Rengjøringsprogramvare | Plan, GPS, Lønn",
      description:
        "Vaktlister, offline-tidsur, GPS-geofence, bilder, AI-utsendelse, lønn, QuickBooks og Sheets-synk.",
      keywords:
        "funksjoner rengjøringsprogramvare, vaktliste renholdere, GPS-app rengjøring, lønn rengjøring, offline feltapp",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Priser Rengjøringsprogramvare | TidyFlow-planer",
      description:
        "Startup ($25), Standard ($79) og Premium ($149) for rengjøringsbedrifter. Tydelige grenser, selvbetjent fakturering, 14 dagers prøve.",
      keywords:
        "pris rengjøringsprogramvare, kostnad programvare renhold, priser TidyFlow",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integrasjoner Rengjøring | Sheets og QuickBooks",
      description:
        "Koble toveis Google Sheets, QuickBooks Online-fakturaer og Maps-geofence for rengjøringsbedrifter.",
      keywords:
        "Google Sheets rengjøringsprogramvare, QuickBooks fakturaer rengjøring, integrasjoner rengjøring",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Bestill Demo Rengjøringsprogramvare | TidyFlow",
      description:
        "Se TidyFlow på objektene — offline-app, GPS-bevis, Sheets og lønn. Live demo eller 14 dagers prøve.",
      keywords: "demo rengjøringsprogramvare, prøve programvare renhold, TidyFlow kontakt",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Rengjøringsprogramvare for Eiere, Ledere og Renholdere",
      description:
        "Roller for eiere, driftsledere, felt-renholdere og facilities-kunder.",
      keywords:
        "programvare eier rengjøringsbedrift, dashbord driftsleder, app renholder, kundportal facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Slik Fungerer Rengjørings-programvare | TidyFlow",
      description:
        "Synk arket, send jobber, før timer offline med GPS, godkjenn lønn og fakturer kunder i én pipeline.",
      keywords:
        "hvordan rengjøringsprogramvare virker, arbeidsflyt rengjøringsdrift, synk felt kontor",
      canonicalPath: "/how-it-works",
    },
  },
  sv: {
    home: {
      title: "Programvara för Städföretag | TidyFlow",
      description:
        "Städledning med offline-app, GPS-stämpling, Google Sheets, QuickBooks-fakturor, lön och foton. 14 dagars test. Från $25/mån.",
      keywords:
        "programvara städföretag, programvara kommersiell städning, app städare offline, städledning, programvara hemstädning, programvara kontorsstädning, kontraktsstädning programvara, tidrapportering städning, GPS städare, lön städning, utskick städning, kvalitetskontroll städning, Google Sheets städning, QuickBooks städning, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "TidyFlow-guide | Dokumentation Städprogramvara",
      description:
        "Så använder du TidyFlow: Google Sheets-synk, offline-app, GPS, uppgiftschatt, QuickBooks, lön, schema och Revenue AI — 11 språk.",
      keywords:
        "guide städprogramvara, handledning app städare, Google Sheets städning, QuickBooks städning, TidyFlow dokumentation",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funktioner Städprogramvara | Schema, GPS, Lön",
      description:
        "Schema, offline-timers, GPS-geofence, foton, AI-utskick, lön, QuickBooks och Sheets-synk.",
      keywords:
        "funktioner städprogramvara, schema städare, GPS-app städning, lön städning, offline fältapp",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Priser Städprogramvara | TidyFlow-planer",
      description:
        "Startup ($25), Standard ($79) och Premium ($149) för städföretag. Tydliga gränser, self-service och 14 dagars test.",
      keywords:
        "pris städprogramvara, kostnad programvara städning, priser TidyFlow",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integrationer Städning | Sheets och QuickBooks",
      description:
        "Koppla tvåvägs Google Sheets, QuickBooks Online-fakturor och Maps-geofence för städföretag.",
      keywords:
        "Google Sheets städprogramvara, QuickBooks fakturor städning, integrationer städprogramvara",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Boka Demo Städprogramvara | TidyFlow",
      description:
        "Se TidyFlow på objekten — offline-app, GPS-bevis, Sheets och lön. Live-demo eller 14 dagars test.",
      keywords: "demo städprogramvara, prova städprogramvara, TidyFlow kontakt",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Städprogramvara för Ägare, Chefer och Städare",
      description:
        "Flöden för ägare, driftschefer, fältstädare och facility-kunder.",
      keywords:
        "programvara ägare städföretag, dashboard driftschef, app städare, kundportal facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Så Fungerar Städdriftsprogramvara | TidyFlow",
      description:
        "Synka arket, skicka jobb, rapportera tid offline med GPS, godkänn lön och fakturera i en pipeline.",
      keywords:
        "hur städprogramvara fungerar, arbetsflöde städdrift, synk fält kontor",
      canonicalPath: "/how-it-works",
    },
  },
  it: {
    home: {
      title: "Software per Imprese di Pulizia | TidyFlow",
      description:
        "Gestione pulizie con app offline, timbratura GPS, Google Sheets, fatture QuickBooks, buste paga e foto. Prova 14 giorni. Da $25/mese.",
      keywords:
        "software impresa di pulizia, software pulizie commerciali, app addetti offline, gestione pulizie, software pulizie domestiche, software pulizie uffici, software pulizie su contratto, rilevazione presenze pulizie, GPS addetti pulizie, buste paga pulizie, dispatch pulizie, controllo qualità pulizie, Google Sheets pulizie, QuickBooks pulizie, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "Guida TidyFlow | Documentazione Software Pulizie",
      description:
        "Come usare TidyFlow: sync Google Sheets, app offline, GPS, chat per task, QuickBooks, buste paga, turni e Revenue AI — 11 lingue.",
      keywords:
        "guida software pulizie, tutorial app addetti, Google Sheets pulizie, QuickBooks pulizie, documentazione TidyFlow",
      canonicalPath: "/documentation",
    },
    features: {
      title: "Funzioni Software Pulizie | Turni, GPS, Buste Paga",
      description:
        "Turni, timer offline, geofence GPS, foto, dispatch IA, buste paga, QuickBooks e sync Sheets.",
      keywords:
        "funzioni software pulizie, pianificazione turni pulizie, app GPS pulizie, buste paga pulizie, app campo offline",
      canonicalPath: "/features",
    },
    pricing: {
      title: "Prezzi Software Pulizie | Piani TidyFlow",
      description:
        "Piani Startup ($25), Standard ($79) e Premium ($149) per imprese di pulizie. Limiti chiari, billing self-service, prova 14 giorni.",
      keywords:
        "prezzo software pulizie, costo software impresa pulizie, piani TidyFlow, tariffe pulizie commerciali",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "Integrazioni Pulizie | Sheets e QuickBooks",
      description:
        "Collega Google Sheets bidirezionale, fatture QuickBooks Online e geofence Maps per imprese di pulizie.",
      keywords:
        "Google Sheets software pulizie, QuickBooks fatture pulizie, integrazioni software pulizie",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "Prenota Demo Software Pulizie | TidyFlow",
      description:
        "Vedi TidyFlow sui tuoi siti — app offline, prove GPS, Sheets e buste paga. Demo live o prova 14 giorni.",
      keywords: "demo software pulizie, prova software pulizie, contatto TidyFlow",
      canonicalPath: "/contact",
    },
    personas: {
      title: "Software Pulizie per Titolari, Manager e Addetti",
      description:
        "Flussi per titolari, operations manager, addetti sul campo e clienti facilities.",
      keywords:
        "software titolare impresa pulizie, dashboard manager pulizie, app addetto pulizie, portale cliente facilities",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "Come Funziona il Software Operativo per le Pulizie",
      description:
        "Sincronizza il foglio, smista i lavori, registra ore offline con GPS, approva buste paga e fattura i clienti in un'unica pipeline.",
      keywords:
        "come funziona software pulizie, workflow operazioni pulizie, sync campo ufficio",
      canonicalPath: "/how-it-works",
    },
  },
  ar: {
    home: {
      title: "برنامج شركات التنظيف | TidyFlow",
      description:
        "إدارة شركات التنظيف بتطبيق دون إنترنت، تسجيل حضور GPS، Google Sheets، فواتير QuickBooks، رواتب وصور. تجربة 14 يوماً. خطط من 25$ شهرياً.",
      keywords:
        "برنامج شركات التنظيف, برنامج تنظيف تجاري, تطبيق منظفين دون إنترنت, إدارة التنظيف, برنامج تنظيف منازل, برنامج تنظيف مكاتب, برنامج تنظيف تعاقدي, تتبع وقت التنظيف, GPS للمنظفين, رواتب التنظيف, توزيع مهام التنظيف, ضبط جودة التنظيف, Google Sheets تنظيف, QuickBooks تنظيف, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "دليل TidyFlow | توثيق برنامج التنظيف",
      description:
        "كيف تستخدم TidyFlow: مزامنة Google Sheets، تطبيق دون إنترنت، GPS، دردشة المهام، QuickBooks، الرواتب والورديات وRevenue AI — 11 لغة.",
      keywords:
        "دليل برنامج التنظيف, شرح تطبيق المنظفين, Google Sheets تنظيف, إعداد QuickBooks تنظيف, توثيق TidyFlow",
      canonicalPath: "/documentation",
    },
    features: {
      title: "ميزات برنامج التنظيف | جدولة وGPS ورواتب",
      description:
        "جداول الورديات، مؤقتات دون إنترنت، سياج GPS، صور، توزيع بالذكاء الاصطناعي، رواتب، QuickBooks ومزامنة Sheets.",
      keywords:
        "ميزات برنامج التنظيف, جدولة المنظفين, تطبيق GPS تنظيف, رواتب التنظيف, تطبيق ميداني دون إنترنت",
      canonicalPath: "/features",
    },
    pricing: {
      title: "أسعار برنامج التنظيف | خطط TidyFlow",
      description:
        "خطط Startup (25$)، Standard (79$) وPremium (149$) لشركات التنظيف. حدود واضحة، فوترة ذاتية وتجربة 14 يوماً.",
      keywords:
        "سعر برنامج التنظيف, تكلفة برنامج شركات التنظيف, أسعار TidyFlow",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "تكاملات التنظيف | Sheets وQuickBooks",
      description:
        "اربط Google Sheets باتجاهين، فواتير QuickBooks Online وسياج Maps الجغرافي لشركات التنظيف.",
      keywords:
        "Google Sheets برنامج تنظيف, QuickBooks فواتير تنظيف, تكاملات برنامج تنظيف",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "احجز عرضاً لبرنامج التنظيف | TidyFlow",
      description:
        "شاهد TidyFlow في مواقعك — تطبيق دون إنترنت، إثبات GPS، Sheets ورواتب. عرض مباشر أو تجربة 14 يوماً.",
      keywords: "عرض برنامج تنظيف, تجربة برنامج تنظيف, تواصل TidyFlow",
      canonicalPath: "/contact",
    },
    personas: {
      title: "برنامج تنظيف للمالكين والمديرين والمنظفين",
      description:
        "مسارات حسب الدور لأصحاب شركات التنظيف ومديري العمليات والمنظفين الميدانيين وعملاء المرافق.",
      keywords:
        "برنامج مالك شركة تنظيف, لوحة مدير تنظيف, تطبيق المنظف, بوابة عميل المرافق",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "كيف يعمل برنامج عمليات التنظيف | TidyFlow",
      description:
        "زامن الجدول، وزّع المهام، سجّل الساعات دون إنترنت عبر GPS، اعتمد الرواتب وأصدر الفواتير في مسار واحد.",
      keywords:
        "كيف يعمل برنامج التنظيف, سير عمل عمليات التنظيف, مزامنة الميدان والمكتب",
      canonicalPath: "/how-it-works",
    },
  },
  cn: {
    home: {
      title: "保洁公司软件 | TidyFlow",
      description:
        "保洁管理软件：离线 App、GPS 打卡、Google 表格、QuickBooks 发票、工资与照片举证。免费试用 14 天。套餐低至 $25/月。",
      keywords:
        "保洁公司软件, 商业保洁软件, 离线保洁 App, 保洁管理, 家政软件, 写字楼保洁软件, 合同保洁软件, 保洁工时统计, 保洁 GPS, 保洁工资, 保洁派工, 保洁质检, Google 表格保洁, QuickBooks 保洁发票, TidyFlow",
      canonicalPath: "/",
    },
    documentation: {
      title: "TidyFlow 使用指南 | 保洁软件文档",
      description:
        "如何使用 TidyFlow：Google 表格同步、离线 App、GPS 打卡、任务聊天、QuickBooks、工资、排班与 Revenue AI — 11 种语言。",
      keywords:
        "保洁软件指南, 保洁 App 教程, Google 表格保洁同步, QuickBooks 保洁设置, TidyFlow 文档",
      canonicalPath: "/documentation",
    },
    features: {
      title: "保洁软件功能 | 排班、GPS、工资",
      description:
        "轮班排班、离线计时、GPS 围栏、照片举证、AI 派工、工资、QuickBooks 与表格同步。",
      keywords:
        "保洁软件功能, 保洁排班软件, 保洁 GPS App, 保洁工资软件, 离线外勤 App",
      canonicalPath: "/features",
    },
    pricing: {
      title: "保洁软件价格 | TidyFlow 套餐",
      description:
        "Startup（$25）、Standard（$79）与 Premium（$149）套餐。限额清晰、自助计费，14 天免费试用。",
      keywords:
        "保洁软件价格, 保洁公司软件费用, TidyFlow 价格, 商业保洁软件报价",
      canonicalPath: "/pricing",
    },
    integrations: {
      title: "保洁软件集成 | 表格与 QuickBooks",
      description:
        "连接双向 Google 表格、QuickBooks Online 发票以及 Maps 地理围栏。",
      keywords:
        "Google 表格保洁软件, QuickBooks 保洁发票, 保洁软件集成",
      canonicalPath: "/integrations",
    },
    contact: {
      title: "预约保洁软件演示 | TidyFlow",
      description:
        "在你的现场查看 TidyFlow — 离线 App、GPS 举证、表格与工资。预约演示或开始 14 天试用。",
      keywords: "保洁软件演示, 保洁软件试用, TidyFlow 联系",
      canonicalPath: "/contact",
    },
    personas: {
      title: "面向老板、经理与保洁员的保洁软件",
      description:
        "为保洁公司老板、运营经理、现场保洁员和设施客户提供角色化流程。",
      keywords:
        "保洁公司老板软件, 保洁经理看板, 保洁员 App, 设施客户门户",
      canonicalPath: "/personas",
    },
    "how-it-works": {
      title: "保洁运营软件如何运作 | TidyFlow",
      description:
        "同步表格、派发任务、离线 GPS 记工时、审批工资并为客户开票，一条流水线完成。",
      keywords:
        "保洁软件如何运作, 保洁运营流程, 现场与办公室同步",
      canonicalPath: "/how-it-works",
    },
  },
};

export const extraPageSeo: Record<
  "blog" | "careers",
  Record<string, { title: string; description: string; keywords: string }>
> = {
  blog: {
    en: {
      title: "TidyFlow Blog | Cleaning Ops Guides",
      description:
        "Guides for cleaning owners: office & night crews, maid services, contract janitorial, time tracking, dispatch, QC, QuickBooks, payroll, and scaling commercial cleaning.",
      keywords:
        "office cleaning software, maid service software, contract cleaning software, janitorial time tracking, cleaning dispatch software, cleaning quality control, commercial cleaning software, QuickBooks cleaning invoices, TidyFlow blog",
    },
    pt: {
      title: "Blog TidyFlow | Guias de Operações de Limpeza",
      description:
        "Guias para donos: escritórios e turnos noturnos, faxina, limpeza contratual, ponto, despacho, qualidade, QuickBooks, folha e crescimento.",
      keywords:
        "software limpeza escritório, software faxina, software limpeza contratual, ponto faxineiros, despacho limpeza, blog TidyFlow",
    },
    es: {
      title: "Blog TidyFlow | Guías de Operaciones de Limpieza",
      description:
        "Guías para dueños: oficinas y turnos nocturnos, limpieza doméstica, contratos, horario, despacho, QC, QuickBooks, nómina y crecimiento.",
      keywords:
        "software limpieza oficinas, software limpieza doméstica, software limpieza contratos, control horario limpieza, blog TidyFlow",
    },
    fr: {
      title: "Blog TidyFlow | Guides Ops Nettoyage",
      description:
        "Guides pour dirigeants : bureaux et équipes de nuit, ménage, contrats, pointeuse, dispatch, qualité, QuickBooks, paie et croissance.",
      keywords:
        "logiciel nettoyage bureaux, logiciel ménage, logiciel nettoyage sous contrat, pointeuse nettoyage, blog TidyFlow",
    },
    de: {
      title: "TidyFlow Blog | Reinigungs-Ops-Ratgeber",
      description:
        "Ratgeber für Inhaber: Büro- und Nachtschichten, Haushalt, Verträge, Zeiterfassung, Disposition, QA, QuickBooks, Lohn und Wachstum.",
      keywords:
        "Büroreinigung Software, Haushaltsreinigung Software, Unterhaltsreinigung Software, Zeiterfassung Reinigung, TidyFlow Blog",
    },
    pl: {
      title: "Blog TidyFlow | Poradniki Operacji Sprzątania",
      description:
        "Poradniki dla właścicieli: biura i noce, sprzątanie domów, kontrakty, czas pracy, dyspozycja, QC, QuickBooks, płace i wzrost.",
      keywords:
        "software sprzątanie biur, software sprzątanie domów, software sprzątanie kontraktowe, ewidencja czasu sprzątanie, blog TidyFlow",
    },
    no: {
      title: "TidyFlow-blogg | Guider for Rengjøringsdrift",
      description:
        "Guider for eiere: kontor og natt, hjemmerengjøring, kontrakter, timeføring, utsendelse, QA, QuickBooks, lønn og vekst.",
      keywords:
        "programvare kontorrengjøring, programvare hjemmerengjøring, kontraktrengjøring, timeføring rengjøring, TidyFlow blogg",
    },
    sv: {
      title: "TidyFlow-blogg | Guider för Städdrift",
      description:
        "Guider för ägare: kontor och natt, hemstädning, kontrakt, tid, utskick, QA, QuickBooks, lön och tillväxt.",
      keywords:
        "programvara kontorsstädning, programvara hemstädning, kontraktsstädning, tidrapportering städning, TidyFlow blogg",
    },
    it: {
      title: "Blog TidyFlow | Guide alle Operazioni di Pulizia",
      description:
        "Guide per titolari: uffici e notturni, pulizie domestiche, contratti, ore, dispatch, QC, QuickBooks, buste paga e crescita.",
      keywords:
        "software pulizie uffici, software pulizie domestiche, software pulizie contratto, rilevazione presenze pulizie, blog TidyFlow",
    },
    ar: {
      title: "مدونة TidyFlow | أدلة عمليات التنظيف",
      description:
        "أدلة للمالكين: مكاتب وورديات ليلية، تنظيف منزلي، عقود، تتبع الوقت، توزيع المهام، الجودة، QuickBooks والرواتب.",
      keywords:
        "برنامج تنظيف مكاتب, برنامج تنظيف منازل, برنامج تنظيف تعاقدي, تتبع وقت التنظيف, مدونة TidyFlow",
    },
    cn: {
      title: "TidyFlow 博客 | 保洁运营指南",
      description:
        "写给老板：写字楼与夜班、家政、合同保洁、工时、派工、质检、QuickBooks、工资与规模化。",
      keywords:
        "写字楼保洁软件, 家政软件, 合同保洁软件, 保洁工时, TidyFlow 博客",
    },
  },
  careers: {
    en: {
      title: "Careers at TidyFlow | Cleaning Software Jobs",
      description:
        "Remote-first roles in operations, customer success, sales, and engineering. Help cleaning companies run better with TidyFlow.",
      keywords: "TidyFlow careers, cleaning software jobs, remote SaaS jobs, operations manager careers",
    },
    pt: {
      title: "Carreiras na TidyFlow | Vagas Software de Limpeza",
      description:
        "Vagas remotas em operações, sucesso do cliente, vendas e engenharia. Ajude empresas de limpeza a operar melhor.",
      keywords: "carreiras TidyFlow, vagas software limpeza, empregos SaaS remoto",
    },
    es: {
      title: "Empleo en TidyFlow | Trabajos Software de Limpieza",
      description:
        "Roles remotos en operaciones, éxito del cliente, ventas e ingeniería. Ayuda a empresas de limpieza a operar mejor.",
      keywords: "empleo TidyFlow, trabajos software limpieza, empleo SaaS remoto",
    },
    fr: {
      title: "Carrières TidyFlow | Emplois Logiciel de Nettoyage",
      description:
        "Postes remote en operations, customer success, ventes et ingénierie. Aidez les entreprises de nettoyage à mieux fonctionner.",
      keywords: "carrières TidyFlow, emplois logiciel nettoyage, emplois SaaS remote",
    },
    de: {
      title: "Karriere bei TidyFlow | Jobs Reinigungssoftware",
      description:
        "Remote-Rollen in Operations, Customer Success, Vertrieb und Engineering. Helfen Sie Reinigungsfirmen, besser zu laufen.",
      keywords: "Karriere TidyFlow, Jobs Reinigungssoftware, Remote SaaS Jobs",
    },
    pl: {
      title: "Kariera w TidyFlow | Praca Software Sprzątanie",
      description:
        "Role zdalne w operations, customer success, sprzedaży i inżynierii. Pomóż firmom sprzątającym działać lepiej.",
      keywords: "kariera TidyFlow, praca software sprzątanie, praca SaaS zdalnie",
    },
    no: {
      title: "Karriere i TidyFlow | Jobber Rengjøringsprogramvare",
      description:
        "Remote-roller i drift, customer success, salg og engineering. Hjelp rengjøringsbedrifter å kjøre bedre.",
      keywords: "karriere TidyFlow, jobber rengjøringsprogramvare, remote SaaS-jobber",
    },
    sv: {
      title: "Karriär på TidyFlow | Jobb Städprogramvara",
      description:
        "Remote-roller inom drift, customer success, sälj och engineering. Hjälp städföretag att köra bättre.",
      keywords: "karriär TidyFlow, jobb städprogramvara, remote SaaS-jobb",
    },
    it: {
      title: "Lavora in TidyFlow | Lavori Software Pulizie",
      description:
        "Ruoli remote in operations, customer success, vendite e engineering. Aiuta le imprese di pulizie a lavorare meglio.",
      keywords: "carriere TidyFlow, lavori software pulizie, lavori SaaS remote",
    },
    ar: {
      title: "وظائف TidyFlow | وظائف برنامج التنظيف",
      description:
        "أدوار عن بُعد في العمليات ونجاح العملاء والمبيعات والهندسة. ساعد شركات التنظيف على العمل بشكل أفضل.",
      keywords: "وظائف TidyFlow, وظائف برنامج تنظيف, وظائف SaaS عن بعد",
    },
    cn: {
      title: "加入 TidyFlow | 保洁软件职位",
      description:
        "运营、客户成功、销售与工程的远程岗位。帮助保洁公司把作业做得更好。",
      keywords: "TidyFlow 招聘, 保洁软件工作, 远程 SaaS 职位",
    },
  },
};

export const ogImageAlt: Record<string, string> = {
  en: "TidyFlow — Cleaning company software for field teams",
  pt: "TidyFlow — Software para empresas de limpeza e equipas de campo",
  es: "TidyFlow — Software para empresas de limpieza y equipos de campo",
  fr: "TidyFlow — Logiciel pour entreprises de nettoyage et équipes terrain",
  de: "TidyFlow — Software für Reinigungsunternehmen und Field-Teams",
  pl: "TidyFlow — Oprogramowanie dla firm sprzątających i zespołów terenowych",
  no: "TidyFlow — Programvare for rengjøringsbedrifter og feltteam",
  sv: "TidyFlow — Programvara för städföretag och fältteam",
  it: "TidyFlow — Software per imprese di pulizia e team sul campo",
  ar: "TidyFlow — برنامج شركات التنظيف للفرق الميدانية",
  cn: "TidyFlow — 面向现场团队的保洁公司软件",
};
