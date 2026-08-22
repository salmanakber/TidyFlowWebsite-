import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_IT: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Software per imprese di pulizie | Pianifica, monitora e paga i team | TidyFlow",
    seoDescription:
      "TidyFlow è software per imprese di pulizie: pianificazione interventi, lavoro sul campo verificato via GPS, prove fotografiche, paghe da ore verificate e report clienti — online o offline.",
    keywords:
      "software impresa pulizie, piattaforma pulizie professionali, software operazioni pulizie, app pulizie sul campo, software dispatch pulizie, TidyFlow",
    eyebrow: "Software per imprese di pulizie",
    h1: "Il sistema operativo per le imprese di pulizie",
    heroSubtitle:
      "TidyFlow collega titolari, responsabili e operatori su un'unica piattaforma — pianifica interventi ricorrenti, verifica il lavoro in loco con GPS e foto, gestisci le paghe dalle ore registrate e invia prove ai clienti.",
    navLabel: "Software impresa pulizie",
    problems: {
      title: "Cosa non funziona quando gestisci un'impresa di pulizie con fogli di calcolo e chat di gruppo",
      items: [
        "I contratti ricorrenti stanno in un file, la disponibilità degli operatori in un altro e i reclami clienti su WhatsApp.",
        "I responsabili non sanno se un team ha davvero iniziato un intervento o è passato solo davanti all'edificio.",
        "Le dispute sulle paghe nascono perché le ore sono state inserite a memoria invece che verificate in loco.",
        "I clienti chiedono prove del lavoro e tu cerchi foto sepolte nel rullino.",
        "I team sul campo perdono segnale in scantinati, parcheggi e locali tecnici — e non riescono a completare l'intervento nell'app.",
      ],
    },
    solution: {
      title: "Un'unica piattaforma dalla pianificazione alla prova fino alle paghe",
      paragraphs: [
        "TidyFlow è pensato specificamente per le operazioni delle imprese di pulizie — non per la manutenzione generica. I titolari hanno visibilità sui ricavi e controllo degli abbonamenti. I responsabili creano turni, assegnano operatori e verificano completamenti GPS. Gli operatori hanno un elenco interventi mobile semplice con checklist offline, timer e caricamento foto.",
        "Quando un intervento si completa, le ore alimentano i flussi paghe, le foto possono generare report PDF clienti e i responsabili mantengono una traccia di audit senza rincorrere messaggi su cinque app.",
      ],
    },
    features: [
      {
        title: "Pianificazione interventi e contratti ricorrenti",
        description: "Calendario, costruttore turni e visite ricorrenti per immobile con assegnazione consapevole dei congedi.",
        benefit: "Smetti di ricostruire la settimana nei fogli ogni domenica sera.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Software pianificazione pulizie",
      },
      {
        title: "Monitoraggio sul campo verificato GPS",
        description: "Posizione controllata all'avvio e al completamento; GPS live durante interventi attivi nei flussi supportati.",
        benefit: "Sapere quali siti sono stati davvero serviti — non solo dichiarati.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tracciamento ore per operatori",
      },
      {
        title: "Paghe da ore verificate",
        description: "Timer attività, approvazione ore lavorate e cicli paghe dal tempo registrato.",
        benefit: "Riduci le dispute con ore legate al lavoro completato.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Software paghe pulizie",
      },
      {
        title: "Operazioni sul campo offline",
        description: "Completamento intervento senza internet — checklist, timer, foto in coda e sync successiva.",
        benefit: "Gli operatori completano interventi in edifici con segnale debole invece di chiamare l'ufficio.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "App pulizie offline",
      },
    ],
    howItWorks: {
      title: "Pianifica → Assegna → Monitora → Verifica → Report",
      steps: [
        { title: "Pianifica", description: "Crea interventi singoli o ricorrenti da web o mobile. Sincronizza con Google Sheets se il team mantiene ancora un registro master." },
        { title: "Assegna", description: "Trascina operatori sul turno. L'IA può suggerire l'assegnatario ideale in base a storico, posizione e congedi — i responsabili confermano sempre." },
        { title: "Monitora", description: "Gli operatori avviano il timer in loco. La verifica GPS segnala avvii e completamenti lontani dall'immobile." },
        { title: "Verifica", description: "Checklist, foto prima/dopo e punteggio foto IA opzionale forniscono ai responsabili prove di qualità." },
        { title: "Report", description: "Genera report PDF intervento o condividi link portale cliente. Le ore fluiscono in paghe e fatturazione." },
      ],
    },
    useCases: {
      title: "Imprese di pulizie che usano TidyFlow",
      items: [
        { title: "Pulizie commerciali e contrattuali", description: "Contratti multi-sede con visite ricorrenti, prove clienti e flussi QA responsabili." },
        { title: "Team di concierge e facility", description: "Turni notturni, locali tecnici e edifici con segnale debole — la modalità offline mantiene il ritmo." },
        { title: "PMI locali in crescita", description: "Sostituisci il caos dei fogli aggiungendo immobili e operatori senza assumere prima un admin ops." },
        { title: "Team multilingue", description: "Piattaforma disponibile in 11 lingue per titolari, responsabili e personale sul campo." },
      ],
    },
    faqs: [
      { q: "Cos'è un software per imprese di pulizie?", a: "È software che aiuta le imprese di pulizie a pianificare interventi, gestire operatori, monitorare lavoro sul campo, verificare qualità e gestire paghe o fatturazione clienti da un unico sistema invece di fogli e app di messaggistica." },
      { q: "TidyFlow è solo per grandi aziende?", a: "No. I piani partono da 25 $/mese per team più piccoli. Puoi gestire pianificazione, monitoraggio sul campo e prove con un organico in crescita senza setup enterprise." },
      { q: "TidyFlow funziona offline?", a: "Sì. Gli operatori possono completare checklist, avviare il timer e scattare foto offline. I dati si sincronizzano al ritorno della connessione." },
      { q: "Posso continuare a usare Google Sheets?", a: "Sì. TidyFlow offre sync bidirezionale Google Sheets per mantenere una lista master mentre l'app gestisce l'esecuzione sul campo." },
      { q: "Come iniziare?", a: "Avvia una prova gratuita di 14 giorni dalla pagina prezzi. I titolari configurano immobili, invitano operatori e assegnano i primi interventi da web o mobile." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Software gestione pulizie | Controllo operativo | TidyFlow",
    seoDescription:
      "Software di gestione pulizie per titolari e responsabili ops — turni, stato interventi live, congedi team, tracciamento problemi, approvazione paghe e prove clienti in un unico dashboard.",
    keywords:
      "software gestione pulizie, piattaforma operazioni pulizie, sistema gestione concierge, gestione impresa pulizie, TidyFlow",
    eyebrow: "Software gestione pulizie",
    h1: "Gestisci le operazioni di pulizia da un unico dashboard",
    heroSubtitle:
      "Offri ai responsabili visibilità su pianificazioni, completamenti sul campo, controlli qualità e approvazioni paghe — senza rincorrere operatori su WhatsApp o ricostruire turni nei fogli.",
    navLabel: "Gestione pulizie",
    problems: {
      title: "Perché le operazioni di pulizia crollano in scala",
      items: [
        "Il titolare è l'unica persona che sa quale cliente è sotto-organico il giovedì.",
        "I responsabili reinseriscono gli stessi interventi ricorrenti ogni settimana perché nulla automatizza le visite contrattuali.",
        "I reclami qualità arrivano prima che qualcuno esamini foto o risultati checklist dell'intervento.",
        "Le richieste di congedo restano nei messaggi e il turno viene pubblicato con conflitti noti.",
        "L'approvazione paghe significa confrontare fogli ore scritti a mano con la memoria.",
      ],
    },
    solution: {
      title: "Strumenti di gestione collegati ai dati reali sul campo",
      paragraphs: [
        "Il software di gestione TidyFlow collega pianificazione, HR team ed esecuzione sul campo. I responsabili vedono aggiornamenti stato intervento in tempo reale, verificano completamenti GPS e approvano ore prima dei cicli paghe.",
        "Tracciamento problemi, punteggio QA e prove clienti vivono accanto al turno — le decisioni di gestione usano gli stessi dati che gli operatori generano in loco.",
      ],
    },
    features: [
      {
        title: "Costruttore turni con gestione congedi",
        description: "Assegnazione drag-and-drop che rispetta congedi approvati e disponibilità.",
        benefit: "Pubblica turni senza controlli manuali dei conflitti.",
        linkHref: "/features",
        linkLabel: "Funzionalità team e pianificazione",
      },
      {
        title: "Stato interventi in tempo reale",
        description: "Vedi quando gli interventi iniziano, si mettono in pausa e si completano su tutti gli immobili.",
        benefit: "Intervieni prima che una visita mancata diventi escalation cliente.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Software pianificazione",
      },
      {
        title: "Flussi QA e problemi",
        description: "Revisioni qualità responsabili, log problemi e prove foto su interventi completati.",
        benefit: "Gestisci reclami con tracce audit per intervento.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Software ispezione",
      },
      {
        title: "Dashboard ricavi titolare",
        description: "Visibilità finanziaria e insight Revenue AI sui piani supportati.",
        benefit: "I titolari vedono le performance senza esportare cinque report.",
        linkHref: "/pricing",
        linkLabel: "Piani e prezzi",
      },
    ],
    howItWorks: {
      title: "Pianifica → Assegna → Monitora → Revisiona → Approva",
      steps: [
        { title: "Pianifica", description: "Costruisci la settimana in vista calendario o turni. Gli interventi ricorrenti generano automaticamente visite contrattuali." },
        { title: "Assegna", description: "Posiziona operatori sugli interventi. Raccomandazioni IA opzionali — i responsabili scelgono le assegnazioni finali." },
        { title: "Monitora", description: "Traccia avvii, segnalazioni GPS e progresso checklist dal dashboard di gestione." },
        { title: "Revisiona", description: "Apri interventi completati per foto, punteggi QA e bozze report clienti." },
        { title: "Approva", description: "Valida ore lavorate e cicli paghe dal tempo attività verificato." },
      ],
    },
    useCases: {
      title: "Scenari di gestione supportati da TidyFlow",
      items: [
        { title: "Responsabili operativi", description: "Dispatch quotidiano, follow-up qualità e coordinamento team su più sedi." },
        { title: "Titolari d'impresa", description: "Controllo abbonamenti, vista ricavi e prova che i contratti vengono serviti." },
        { title: "Supervisori multi-sede", description: "Confronta stato completamento e problemi tra immobili in un unico posto." },
        { title: "Coordinatori franchise", description: "Flussi coerenti e accesso basato su ruoli con la crescita dei team." },
      ],
    },
    faqs: [
      { q: "Cosa deve includere un software di gestione pulizie?", a: "Al minimo: pianificazione, assegnazione team, stato sul campo, tracciamento ore, prova qualità e approvazione paghe o ore. TidyFlow copre tutto su un'unica piattaforma." },
      { q: "I responsabili possono usare TidyFlow su mobile?", a: "Sì. I responsabili possono pianificare, assegnare e revisionare interventi da mobile o web." },
      { q: "Come funziona l'accesso basato su ruoli?", a: "Titolari, responsabili e operatori vedono schermate diverse. Gli operatori hanno elenchi interventi e strumenti sul campo; i responsabili hanno turni, approvazioni e report." },
      { q: "TidyFlow sostituisce il mio commercialista?", a: "No. TidyFlow gestisce le operazioni e può sincronizzare fatture con QuickBooks Online. Il commercialista resta responsabile di fiscalità e strategia contabile." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Software concierge | Turni notturni e team multi-sede | TidyFlow",
    seoDescription:
      "Software concierge per pulizie contrattuali — visite ricorrenti, app sul campo offline, timbrature GPS, checklist e prove per clienti facility.",
    keywords:
      "software concierge, software gestione concierge, app pianificazione concierge, software concierge contrattuale, TidyFlow",
    eyebrow: "Software concierge",
    h1: "Software concierge pensato per il lavoro contrattuale in loco",
    heroSubtitle:
      "Gestisci percorsi concierge ricorrenti in uffici, scuole e strutture. Gli operatori lavorano offline in locali tecnici e scantinati mentre i responsabili verificano ogni visita con GPS, checklist e foto.",
    navLabel: "Software concierge",
    problems: {
      title: "I contratti concierge falliscono quando l'app sul campo fallisce",
      items: [
        "I team notturni incontrano zone senza segnale nelle scale e non possono registrare il completamento.",
        "I sostituti arrivano senza note del sito che erano in una chat di gruppo.",
        "I facility manager chiedono prove e tu invii un'email generica senza timestamp.",
        "L'espansione del perimetro su stanze extra resta invisibile fino alla fattura.",
        "Più edifici condividono un supervisore che non può verificare fisicamente ogni ora di inizio.",
      ],
    },
    solution: {
      title: "Flussi concierge contrattuali in un unico sistema",
      paragraphs: [
        "TidyFlow supporta pianificazioni concierge ricorrenti, checklist per sito e completamento offline — la combinazione che serve ai pulitori contrattuali quando ogni edificio ha regole di accesso e qualità segnale diverse.",
        "La chat per attività mantiene le istruzioni del sito sull'intervento. Verifica GPS e prove foto danno ai clienti facility evidenze senza lavoro admin extra.",
      ],
    },
    features: [
      {
        title: "Percorsi concierge ricorrenti",
        description: "Automatizza visite settimanali e mensili per immobile con assegnazione team.",
        benefit: "I piani contrattuali si rigenerano senza copia-incolla manuale.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Software pianificazione",
      },
      {
        title: "App concierge offline",
        description: "Timer, checklist e foto senza connessione; sync al ritorno della rete.",
        benefit: "I team notturni completano interventi sottoterra invece di saltare l'app.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Software pulizie offline",
      },
      {
        title: "Checklist e foto per sito",
        description: "Attività stanza per stanza con evidenze prima/dopo al completamento.",
        benefit: "Documenta il perimetro per QA e dispute clienti.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Ispezione e controllo qualità",
      },
      {
        title: "Pulsante SOS sicurezza",
        description: "Allerta con un tap ai responsabili per lavoratori soli in turni tardivi.",
        benefit: "Offri agli operatori notturni una linea di sicurezza diretta dalla schermata intervento.",
        linkHref: "/features",
        linkLabel: "Funzionalità sicurezza sul campo",
      },
    ],
    howItWorks: {
      title: "Contratto → Pianifica → Esegui → Prova → Fattura",
      steps: [
        { title: "Contratto", description: "Configura immobili con note accesso e modelli checklist per sito." },
        { title: "Pianifica", description: "Crea visite concierge ricorrenti e assegna team fissi o personale rotativo." },
        { title: "Esegui", description: "Gli operatori eseguono l'intervento offline o online — timer, checklist, foto in loco." },
        { title: "Prova", description: "I responsabili revisionano completamento verificato GPS e prove foto." },
        { title: "Fattura", description: "Fattura clienti dal lavoro completato; sync fatture con QuickBooks sui piani supportati." },
      ],
    },
    useCases: {
      title: "Team concierge che usano TidyFlow",
      items: [
        { title: "Concierge uffici e aziende", description: "Pulizie fuori orario con PDF prove clienti." },
        { title: "Istruzione e edifici pubblici", description: "Siti multi-piano con segnale interno debole — modalità offline inclusa." },
        { title: "Concierge industriale e impianti", description: "Checklist per aree ristrette e zone sensibili alla sicurezza." },
        { title: "Fornitori concierge in subappalto", description: "Accesso basato su ruoli per responsabili clienti e personale sul campo." },
      ],
    },
    faqs: [
      { q: "TidyFlow è software concierge o residenziale?", a: "TidyFlow è pensato per operazioni di pulizia professionali — commerciale, concierge e lavoro contrattuale sono il focus principale." },
      { q: "Gli operatori possono timbrare senza segnale?", a: "Sì. L'app sul campo mette in coda GPS ed eventi intervento offline e sincronizza al ritorno della connessione." },
      { q: "Possiamo condividere prove con i facility manager?", a: "Sì. Report PDF intervento e link portale cliente sicuri condividono evidenze di completamento." },
      { q: "TidyFlow gestisce turni notturni ricorrenti?", a: "Sì. Interventi ricorrenti e strumenti turni supportano percorsi notturni fissi e team rotativi." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Software pulizie commerciali | Contratti multi-sede | TidyFlow",
    seoDescription:
      "Software pulizie commerciali per contratti ufficio, retail e facility — pianificazione, ispezioni QC, prove clienti, fatturazione e gestione team.",
    keywords:
      "software pulizie commerciali, software pulizie uffici, piattaforma pulizie contrattuali, software pulizie facility, TidyFlow",
    eyebrow: "Software pulizie commerciali",
    h1: "Software pulizie commerciali per operazioni contrattuali",
    heroSubtitle:
      "Gestisci contratti commerciali multi-sede con pianificazioni ricorrenti, checklist ispezione, prove foto per clienti e paghe da ore sul campo verificate.",
    navLabel: "Pulizie commerciali",
    problems: {
      title: "I contratti commerciali richiedono più di un'app calendario",
      items: [
        "Ogni sito cliente ha perimetro, chiavi e standard ispezione diversi.",
        "Gli account manager promettono qualità ma ops non ha un registro QC centrale.",
        "Gli ordini di lavoro extra si perdono tra email e turno settimanale.",
        "Le fatture partono prima che qualcuno confermi che tutte le visite programmate siano completate.",
        "Il churn cliente segue una pulizia profonda mancata che nessuno ha documentato.",
      ],
    },
    solution: {
      title: "Flussi commerciali dall'offerta alla prova",
      paragraphs: [
        "TidyFlow collega pianificazione commerciale, verifica qualità e report clienti. I responsabili applicano punteggio QA su interventi completati, registrano problemi per immobile e condividono prove PDF brandizzate.",
        "Fatturazione e sync QuickBooks sui piani supportati allineano finanza e lavoro contrattuale completato.",
      ],
    },
    features: [
      {
        title: "Pianificazione multi-immobile",
        description: "Calendario e interventi ricorrenti su portafogli commerciali.",
        benefit: "Una vista di ogni sito nel contratto.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Pianificazione",
      },
      {
        title: "Prove clienti e report PDF",
        description: "Report scaricabili brandizzati e link portale sicuri.",
        benefit: "Fornisci ai facility manager evidenze senza email foto manuali.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Ispezione e prove",
      },
      {
        title: "Fatturazione clienti",
        description: "Fattura da attività completate con voci di dettaglio.",
        benefit: "Fattura su completamenti verificati, non stime.",
        linkHref: "/integrations",
        linkLabel: "Integrazione QuickBooks",
      },
      {
        title: "Tracciamento problemi",
        description: "Registra e risolvi problemi immobile dal campo o ufficio.",
        benefit: "Chiudi il cerchio quando un sito segnala un problema.",
        linkHref: "/features",
        linkLabel: "Funzionalità qualità",
      },
    ],
    howItWorks: {
      title: "Perimetro → Pianifica → Eroga → Ispeziona → Fattura",
      steps: [
        { title: "Perimetro", description: "Definisci immobili, checklist e note accesso per cliente commerciale." },
        { title: "Pianifica", description: "Imposta frequenza servizio ricorrente e assegna team." },
        { title: "Eroga", description: "Gli operatori completano interventi con timer, GPS e checklist su mobile." },
        { title: "Ispeziona", description: "I responsabili verificano lavoro completato con foto e flussi di punteggio." },
        { title: "Fattura", description: "Fattura clienti e sincronizza opzionalmente con QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Casi d'uso pulizie commerciali",
      items: [
        { title: "Operatori uffici e coworking", description: "Servizio quotidiano e settimanale con prova visibile al cliente." },
        { title: "Catene retail e hospitality", description: "Più sedi con checklist coerenti." },
        { title: "Portafogli gestione immobiliare", description: "Traccia problemi e visite tra edifici." },
        { title: "Pulitori contrattuali B2B", description: "Visibilità ops per titolari che vendono ai facility manager." },
      ],
    },
    faqs: [
      { q: "Cos'è un software per pulizie commerciali?", a: "Software che aiuta le imprese B2B a pianificare siti contrattuali, verificare l'erogazione del servizio, gestire team e fatturare clienti da un'unica piattaforma." },
      { q: "I clienti possono vedere le foto degli interventi?", a: "Controlli le prove clienti via report PDF e link portale — non la chat interna responsabili." },
      { q: "TidyFlow supporta contratti multi-sede?", a: "Sì. Immobili, interventi ricorrenti e turni scalano su portafogli commerciali multi-sede." },
      { q: "Possiamo raccogliere recensioni clienti?", a: "Sì. TidyFlow include raccolta recensioni clienti con routing per feedback negativi." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Software pianificazione pulizie | Interventi ricorrenti e turni | TidyFlow",
    seoDescription:
      "Software pianificazione pulizie con calendario, costruttore turni, interventi ricorrenti, suggerimenti assegnazione IA, gestione congedi e sync Google Sheets.",
    keywords:
      "software pianificazione pulizie, software dispatch pulizie, pianificazione servizi domestici, app pianificazione concierge, TidyFlow",
    eyebrow: "Software pianificazione pulizie",
    h1: "Software pianificazione pulizie che rispecchia i turni reali",
    heroSubtitle:
      "Costruisci turni settimanali, automatizza visite ricorrenti, assegna operatori con gestione congedi e invia aggiornamenti all'app sul campo all'istante.",
    navLabel: "Pianificazione",
    problems: {
      title: "La pianificazione si rompe quando lo strumento ignora la realtà delle pulizie",
      items: [
        "I contratti ricorrenti vengono reinseriti manualmente ogni mese.",
        "I sostituti vengono assegnati senza vedere chi è in congedo.",
        "Gli operatori scoprono cambi di turno da un messaggio di gruppo, non dall'app.",
        "La pianificazione percorsi è a intuito — il tempo di viaggio tra siti è invisibile.",
        "Il turno nel foglio e l'app sul campo non corrispondono mai.",
      ],
    },
    solution: {
      title: "Pianificazione collegata all'app sul campo",
      paragraphs: [
        "La pianificazione TidyFlow non è un calendario isolato — le assegnazioni arrivano in tempo reale sugli elenchi interventi mobile. Gli interventi ricorrenti generano automaticamente visite contrattuali. Il costruttore turni rispetta i congedi approvati.",
        "La sync bidirezionale Google Sheets permette di mantenere una lista master nel foglio mentre TidyFlow esegue il dispatch. L'IA può suggerire assegnazioni; i responsabili decidono sempre.",
      ],
    },
    features: [
      {
        title: "Calendario e costruttore turni",
        description: "Vista settimana, assegnazione drag-and-drop, pianificazione consapevole congedi.",
        benefit: "Costruisci il turno una volta e pubblicalo sul campo.",
        linkHref: "/how-it-works",
        linkLabel: "Come funziona la pianificazione",
      },
      {
        title: "Interventi ricorrenti",
        description: "Pattern ripetizione settimanali, mensili e personalizzati per immobile.",
        benefit: "Smetti di copiare le stesse visite ogni ciclo.",
        linkHref: "/features",
        linkLabel: "Funzionalità pianificazione",
      },
      {
        title: "Raccomandazioni IA operatori",
        description: "Suggerisce assegnatario ideale per storico, posizione e disponibilità.",
        benefit: "Dispatch più veloce nelle mattine intense — il responsabile conferma.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "Assegnazione IA",
      },
      {
        title: "Ottimizzazione percorsi",
        description: "Riduce tempo di viaggio tra immobili nei flussi supportati.",
        benefit: "Più interventi per turno senza indovinare gli straordinari.",
        linkHref: "/integrations",
        linkLabel: "Integrazione mappe",
      },
    ],
    howItWorks: {
      title: "Pianifica → Assegna → Notifica → Esegui → Regola",
      steps: [
        { title: "Pianifica", description: "Crea interventi in vista calendario o importa da Google Sheets." },
        { title: "Assegna", description: "Trascina operatori sui turni; il planning segnala conflitti congedo." },
        { title: "Notifica", description: "Le assegnazioni compaiono istantaneamente sui dispositivi degli operatori." },
        { title: "Esegui", description: "I team sul campo avviano interventi con timbratura verificata GPS." },
        { title: "Regola", description: "Riassegna interventi aperti da mobile quando qualcuno chiama malato." },
      ],
    },
    useCases: {
      title: "Scenari di pianificazione",
      items: [
        { title: "Pulitori contrattuali ricorrenti", description: "Automatizza percorsi settimanali fissi su siti clienti." },
        { title: "Servizi domestici e pulizie casa", description: "Pianificazioni settimanali variabili con riassegnazione rapida." },
        { title: "Dispatch multi-team", description: "Più supervisori che pianificano territori sovrapposti." },
        { title: "Aziende in crescita che abbandonano i fogli", description: "Sync Sheets durante la transizione al dispatch app." },
      ],
    },
    faqs: [
      { q: "TidyFlow può gestire interventi pulizie ricorrenti?", a: "Sì. Gli interventi ricorrenti automatizzano visite ripetute per immobile con assegnazione team." },
      { q: "La pianificazione si sincronizza con Google Sheets?", a: "Sì. La sync bidirezionale allinea liste master foglio e assegnazioni app." },
      { q: "Gli operatori vedono solo il proprio turno?", a: "Sì. Gli operatori vedono l'elenco interventi di oggi; i responsabili vedono il turno completo." },
      { q: "C'è ottimizzazione percorsi?", a: "Sì. TidyFlow include strumenti pianificazione percorsi con integrazione Google Maps." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Software paghe pulizie | Ore verificate e fogli presenze | TidyFlow",
    seoDescription:
      "Software paghe pulizie basato su ore attività verificate GPS, approvazione fogli presenze, regole retribuzione, cicli paghe e buste paga PDF per team pulizie.",
    keywords:
      "software paghe pulizie, app paghe operatori pulizie, paghe concierge, software fogli presenze pulizie, TidyFlow",
    eyebrow: "Software paghe pulizie",
    h1: "Software paghe pulizie da ore intervento verificate",
    heroSubtitle:
      "Genera paghe da timer attività e ore lavorate approvate — non da fogli scritti a mano. La verifica GPS riduce le dispute e offre ai responsabili una traccia di audit.",
    navLabel: "Paghe",
    problems: {
      title: "Le dispute paghe iniziano con ore non verificate",
      items: [
        "Gli operatori arrotondano il tempo perché i fogli cartacei sono facili da gonfiare.",
        "I responsabili non possono collegare una riga busta paga a un intervento specifico completato.",
        "Sorprese straordinari perché interventi extra non erano registrati centralmente.",
        "Tariffe dipendenti vs collaboratori in quaderni diversi.",
        "La finanza reinserisce ore in contabilità dopo che ops ha già approvato altro.",
      ],
    },
    solution: {
      title: "Paghe legate al lavoro sul campo completato",
      paragraphs: [
        "TidyFlow registra ore dal timer intervento in loco. La verifica GPS segnala avvii e completamenti lontani dall'immobile. I responsabili approvano ore lavorate prima dei cicli paghe.",
        "Regole retribuzione dipendenti, fatture paghe e sync paghe QuickBooks sui piani supportati allineano ops e finanza.",
      ],
    },
    features: [
      {
        title: "Timer attività e fogli presenze",
        description: "Avvia, pausa, riprendi, invia — ore collegate a ogni intervento.",
        benefit: "Ogni ora collegata a una visita immobile.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tracciamento ore",
      },
      {
        title: "Presenza verificata GPS",
        description: "Posizione controllata alla timbratura e al completamento intervento.",
        benefit: "Contestare dispute con evidenza di posizione.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Verifica GPS",
      },
      {
        title: "Regole retribuzione e cicli paghe",
        description: "Tariffe per utente e generazione paghe da ore approvate.",
        benefit: "Un flusso approvazione prima dell'invio buste paga.",
        linkHref: "/features",
        linkLabel: "Funzionalità paghe",
      },
      {
        title: "Fatture paghe QuickBooks",
        description: "Sincronizza paghe approvate con QuickBooks sui piani supportati.",
        benefit: "La contabilità riceve totali approvati da ops.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "Sync QuickBooks",
      },
    ],
    howItWorks: {
      title: "Pianifica → Traccia ore → Verifica → Approva → Paga",
      steps: [
        { title: "Pianifica", description: "Assegna interventi così le ore previste sono visibili prima del turno." },
        { title: "Traccia", description: "Gli operatori avviano il timer in loco; il GPS valida la posizione." },
        { title: "Verifica", description: "I responsabili revisionano timbrature segnalate e checklist incomplete." },
        { title: "Approva", description: "Valida ore lavorate e rettifiche." },
        { title: "Paga", description: "Esegui paghe ed esporta fatture PDF o sincronizza con QuickBooks." },
      ],
    },
    useCases: {
      title: "Scenari paghe",
      items: [
        { title: "Team pulizie a ore", description: "Paga da tempo attività verificato invece di fogli cartacei." },
        { title: "Dipendenti e collaboratori misti", description: "Regole retribuzione per utente con fatture paghe PDF." },
        { title: "Team inclini a dispute", description: "GPS e storico interventi per ogni riga busta paga." },
        { title: "Titolari che fanno paghe di sera", description: "Approvazione batch dal dashboard di gestione." },
      ],
    },
    faqs: [
      { q: "TidyFlow può tracciare le ore degli operatori?", a: "Sì. I timer intervento registrano ore per attività. Gli operatori possono anche inviare ore lavorate per approvazione responsabile." },
      { q: "Il GPS prova che gli operatori erano in loco?", a: "La verifica GPS controlla la posizione all'avvio e al completamento. I responsabili ricevono alert per timbrature fuori sito." },
      { q: "Posso esportare paghe su QuickBooks?", a: "Sui piani supportati, le paghe approvate possono sincronizzarsi come fatture su QuickBooks Online." },
      { q: "TidyFlow sostituisce un provider paghe HR completo?", a: "TidyFlow genera paghe da ore operative verificate. Dichiarazioni fiscali e conformità HR completa restano competenza del commercialista." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Software ispezione pulizie | Checklist e prove foto | TidyFlow",
    seoDescription:
      "Software ispezione pulizie con checklist per stanza, foto prima/dopo, punteggio QA, report PDF clienti e tracciamento problemi per verifica qualità.",
    keywords:
      "software ispezione pulizie, software controllo qualità pulizie, app checklist pulizie, software ispezione concierge, TidyFlow",
    eyebrow: "Software ispezione pulizie",
    h1: "Software ispezione pulizie con checklist e prove foto",
    heroSubtitle:
      "Esegui ispezioni stanza per stanza, cattura foto prima/dopo, valuta qualità con flussi QA responsabili e condividi prove brandizzate con i clienti.",
    navLabel: "Ispezioni",
    problems: {
      title: "Problemi qualità quando le ispezioni vivono fuori dall'intervento",
      items: [
        "Le checklist sono PDF cartacei che gli operatori spuntano senza aprirle in loco.",
        "Le foto prima/dopo restano nel rullino personale — non collegate all'immobile.",
        "I responsabili ispezionano a caso invece di seguire un flusso di punteggio.",
        "I clienti contestano la qualità ma non hai un pacchetto probatorio con timestamp.",
        "I problemi trovati in loco vengono dimenticati prima che qualcuno li registri.",
      ],
    },
    solution: {
      title: "Ispezioni eseguite e archiviate sulla scheda intervento",
      paragraphs: [
        "Le checklist TidyFlow girano sull'app mobile operatori — regole opzionali possono richiedere completamento checklist prima del timer. Le foto si caricano in loco, anche offline con sync successiva.",
        "I responsabili usano flussi punteggio QA per revisionare completamenti. L'analisi foto IA può segnalare problemi qualità sui piani supportati. Report PDF e link portale cliente impacchettano prove per clienti facility.",
      ],
    },
    features: [
      {
        title: "Checklist stanza per stanza",
        description: "Modelli checklist per immobile con voci obbligatorie.",
        benefit: "Standardizza il perimetro a ogni visita.",
        linkHref: "/features",
        linkLabel: "Funzionalità checklist",
      },
      {
        title: "Foto prima/dopo",
        description: "Cattura evidenze sull'intervento; funziona offline.",
        benefit: "Le foto restano sulla visita, non sul rullino.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Foto offline",
      },
      {
        title: "Flusso punteggio QA",
        description: "Revisione responsabile e punteggi qualità su interventi completati.",
        benefit: "Trasforma controlli spot in processo ripetibile.",
        linkHref: "/how-it-works",
        linkLabel: "Flusso qualità",
      },
      {
        title: "Report PDF clienti",
        description: "Report intervento brandizzati e link condivisione sicuri.",
        benefit: "Invia prove senza ricostruire slide manualmente.",
        linkHref: "/documentation",
        linkLabel: "Documentazione report",
      },
    ],
    howItWorks: {
      title: "Crea checklist → Ispeziona → Cattura prove → Revisiona → Condividi",
      steps: [
        { title: "Crea", description: "Costruisci modelli checklist per sito cliente o tipo servizio." },
        { title: "Ispeziona", description: "Gli operatori completano voci su mobile durante l'intervento." },
        { title: "Cattura", description: "Aggiungi foto prima/dopo; cattura offline sincronizzata dopo." },
        { title: "Revisiona", description: "I responsabili valutano completamenti QA e registrano problemi." },
        { title: "Condividi", description: "Esporta PDF o invia link portale cliente con evidenze." },
      ],
    },
    useCases: {
      title: "Casi d'uso ispezione",
      items: [
        { title: "Programmi QC commerciali", description: "Punteggio standardizzato su portafoglio clienti." },
        { title: "Svuotamento e pulizie profonde", description: "Pacchetti foto prima/dopo per proprietari." },
        { title: "Standard qualità franchise", description: "Checklist coerenti tra sedi." },
        { title: "Richieste audit clienti", description: "Storico interventi con timestamp quando le facility chiedono prove." },
      ],
    },
    faqs: [
      { q: "Gli operatori possono completare checklist offline?", a: "Sì. Checklist e foto funzionano offline e si sincronizzano al ritorno della connessione." },
      { q: "TidyFlow usa IA per qualità foto?", a: "Sui piani supportati, l'analisi foto IA può valutare foto pulizie caricate. I responsabili prendono sempre la decisione QA finale." },
      { q: "I clienti possono accedere ai report ispezione?", a: "Sì. Report PDF intervento e link portale sicuri condividono evidenze completamento con i clienti." },
      { q: "Posso richiedere completamento checklist prima della timbratura?", a: "Sì. Regole opzionali possono richiedere passaggi checklist prima di avviare il timer." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Software tracciamento ore pulizie | Timbratura GPS | TidyFlow",
    seoDescription:
      "Software tracciamento ore pulizie con timer intervento in loco, verifica GPS, geofencing, monitoraggio live durante interventi attivi e ore per paghe.",
    keywords:
      "software tracciamento ore pulizie, tracciamento ore concierge, app timbratura operatori pulizie, tracciamento GPS pulizie, TidyFlow",
    eyebrow: "Tracciamento ore",
    h1: "Software tracciamento ore pulizie con verifica GPS",
    heroSubtitle:
      "Timbratura operatori in loco con timer intervento, verifica GPS e geofencing — le ore registrate riflettono visite reali, non stime.",
    navLabel: "Tracciamento ore",
    problems: {
      title: "Il tracciamento ore fallisce quando le timbrature sono facili da falsificare",
      items: [
        "Gli operatori avviano il timer dal parcheggio dall'altra parte della strada.",
        "I responsabili non hanno vista live di chi è attivamente su un intervento.",
        "Il buddy punching accade perché chiunque può scrivere «sono qui».",
        "Le ore di un sito cliente si mescolano con tempo di viaggio.",
        "Edifici con segnale debole costringono gli operatori a saltare il timer.",
      ],
    },
    solution: {
      title: "Tracciamento ore integrato nell'intervento pulizie",
      paragraphs: [
        "Il tracciamento TidyFlow è per attività — avvia, pausa, riprendi, invia sulla schermata intervento. La verifica GPS confronta posizione timbratura con l'immobile. I responsabili possono vedere GPS live durante interventi attivi.",
        "La modalità offline mette in coda timer ed eventi GPS quando il segnale cade, poi sincronizza — le pulizie in scantinato producono comunque ore verificabili.",
      ],
    },
    features: [
      {
        title: "Timer intervento in loco",
        description: "Flusso semplice avvia/pausa/invia sull'app operatori.",
        benefit: "Le ore si collegano all'immobile, non a un turno generico.",
        linkHref: "/features",
        linkLabel: "App sul campo",
      },
      {
        title: "GPS e geofencing",
        description: "Verifica posizione all'avvio/completamento; integrazione mappe per siti.",
        benefit: "Segnala timbrature lontane dall'edificio.",
        linkHref: "/integrations",
        linkLabel: "Mappe e geofencing",
      },
      {
        title: "Coda GPS offline",
        description: "Mette in coda eventi posizione senza segnale; sync successiva.",
        benefit: "Traccia ore in locali tecnici e garage sotterranei.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS offline",
      },
      {
        title: "Ore pronte per paghe",
        description: "Ore approvate alimentano cicli paghe.",
        benefit: "Chiudi il cerchio dalla timbratura alla busta paga.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Software paghe",
      },
    ],
    howItWorks: {
      title: "Assegna → Arriva → Timbratura → Lavora → Invia ore",
      steps: [
        { title: "Assegna", description: "L'operatore riceve gli interventi di oggi su mobile." },
        { title: "Arriva", description: "Il GPS conferma prossimità al geofence dell'immobile." },
        { title: "Timbratura", description: "Avvia timer sull'intervento — gate checklist opzionale." },
        { title: "Lavora", description: "Pausa/riprendi se serve; GPS live durante interventi attivi." },
        { title: "Invia", description: "Completa intervento; le ore attendono approvazione responsabile per paghe." },
      ],
    },
    useCases: {
      title: "Scenari tracciamento ore",
      items: [
        { title: "Concierge commerciale", description: "Verifica presenza turni notturni su tutti i siti." },
        { title: "Team residenziali", description: "Timer per casa per operatori a ore." },
        { title: "Interventi multi-operatore", description: "Ogni assegnato registra tempo sulla stessa attività." },
        { title: "Siti bassa connettività", description: "La coda offline preserva ore e GPS." },
      ],
    },
    faqs: [
      { q: "TidyFlow può tracciare ore operatori automaticamente?", a: "Sì. Il timer intervento registra ore all'avvio e all'invio. Il GPS aggiunge verifica posizione." },
      { q: "Cosa succede se il GPS non è disponibile?", a: "Gli eventi si mettono in coda offline e sincronizzano al ritorno del segnale. I responsabili vedono comunque il record completamento." },
      { q: "Il GPS live è sempre attivo?", a: "Il monitoraggio GPS live si applica durante interventi attivi nei flussi supportati — non sorveglianza 24/7." },
      { q: "I responsabili possono modificare le ore?", a: "I responsabili approvano o rettificano ore lavorate tramite flusso approvazione prima delle paghe." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Software pulizie offline | App sul campo senza segnale | TidyFlow",
    seoDescription:
      "Software pulizie offline per team in scantinati, parcheggi e edifici con segnale debole — checklist, timer, foto e coda GPS con sync automatica.",
    keywords:
      "software pulizie offline, app pulizie offline, app pulizie senza internet, app concierge offline, TidyFlow",
    eyebrow: "Software pulizie offline",
    h1: "Software pulizie offline per condizioni reali sul campo",
    heroSubtitle:
      "Gli operatori completano interventi senza internet — checklist, timer, foto ed eventi GPS si salvano localmente e si sincronizzano automaticamente al ritorno della connessione.",
    navLabel: "Pulizie offline",
    problems: {
      title: "Le app sul campo falliscono dove il lavoro pulizie avviene davvero",
      items: [
        "Scantinati e locali tecnici bloccano i dati mobile — gli operatori saltano l'app.",
        "Le foto aspettano il parcheggio e si confondono tra interventi.",
        "I timer si fermano perché l'app richiede connessione costante.",
        "I responsabili assumono «nessuna sync» = «assente».",
        "I concorrenti promettono offline ma mettono in cache solo l'elenco interventi, non il completamento.",
      ],
    },
    solution: {
      title: "Completamento intervento completo offline — non una cache in sola lettura",
      paragraphs: [
        "La modalità offline TidyFlow supporta i flussi necessari in loco: timer intervento, checklist, foto e coda eventi verifica GPS. Al riconnect, i dati si sincronizzano con il dashboard di gestione.",
        "Pensato per siti concierge e commerciali dove la perdita segnale è normale — non un caso limite.",
      ],
    },
    features: [
      {
        title: "Checklist offline",
        description: "Completa attività stanza senza connessione.",
        benefit: "Le ispezioni finiscono sottoterra, non nel parcheggio.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Software ispezione",
      },
      {
        title: "Timer intervento offline",
        description: "Traccia ore in loco; sincronizza timestamp dopo.",
        benefit: "Le paghe ricevono tempo reale intervento, non stime.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tracciamento ore",
      },
      {
        title: "Cattura foto offline",
        description: "Foto prima/dopo salvate localmente fino al caricamento.",
        benefit: "Le prove restano collegate all'intervento corretto.",
        linkHref: "/features",
        linkLabel: "Prove foto",
      },
      {
        title: "Coda GPS offline",
        description: "Eventi posizione in coda senza segnale; sync al riconnect.",
        benefit: "Verifica presenza anche dopo aver lasciato una zona senza rete.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Funzionalità GPS offline",
      },
    ],
    howItWorks: {
      title: "Carica interventi → Lavora offline → Accoda dati → Riconnetti → Sync",
      steps: [
        { title: "Carica", description: "Gli interventi assegnati si scaricano sul dispositivo online." },
        { title: "Lavora offline", description: "Timer, checklist e foto funzionano senza internet." },
        { title: "Accoda", description: "GPS ed eventi completamento salvati localmente." },
        { title: "Riconnetti", description: "Il telefono ritrova segnale uscendo dall'edificio o parcheggio." },
        { title: "Sync", description: "I responsabili vedono intervento completato, foto e ore nel dashboard." },
      ],
    },
    useCases: {
      title: "Scenari offline",
      items: [
        { title: "Concierge scantinati e locali tecnici", description: "Completa interventi con zero segnale interno." },
        { title: "Pulizie parcheggi sotterranei", description: "Il GPS resta in coda fino all'uscita dal garage." },
        { title: "Siti rurali o industriali", description: "Copertura irregolare non blocca più la conformità sul campo." },
        { title: "Team internazionali", description: "Stesso comportamento offline nelle 11 lingue supportate." },
      ],
    },
    faqs: [
      { q: "TidyFlow può funzionare senza connessione internet?", a: "Sì. Gli operatori possono usare timer, checklist e foto offline. I dati si sincronizzano al ritorno della connessione." },
      { q: "Cosa si sincronizza dopo il riconnect?", a: "Stato completamento, foto, ore timer, eventi GPS in coda e risposte checklist si sincronizzano col server." },
      { q: "Gli operatori devono sincronizzare manualmente?", a: "La sync avviene automaticamente al riconnect — nessun passaggio upload separato." },
      { q: "L'offline è disponibile su tutti i piani?", a: "Le operazioni sul campo offline sono capacità centrale TidyFlow. Alcune funzionalità IA e integrazioni avanzate variano per piano — vedi Prezzi." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Software impresa pulizie | Gestisci e fai crescere le ops | TidyFlow",
    seoDescription:
      "Software impresa pulizie per titolari che passano da solo operatore a multi-team — pianificazione, fatturazione, paghe, prove clienti e insight Revenue AI.",
    keywords:
      "software impresa pulizie, app piccola impresa pulizie, software crescita impresa pulizie, software startup pulizie, TidyFlow",
    eyebrow: "Software impresa pulizie",
    h1: "Software impresa pulizie che cresce con la tua azienda",
    heroSubtitle:
      "Inizia con pianificazione e prove sul campo, poi aggiungi paghe, fatturazione clienti e dashboard titolare crescendo — un'unica piattaforma invece di assemblare strumenti.",
    navLabel: "Impresa pulizie",
    problems: {
      title: "Le piccole imprese di pulizie superano presto i primi strumenti",
      items: [
        "Inizi con un'app calendario, poi aggiungi software paghe, poi cartelle foto — nulla si collega.",
        "Vincere più contratti significa più ore admin, non più profitto.",
        "Non sai quali clienti sono profittevoli senza esportare fogli.",
        "Assumere il primo responsabile duplica il lavoro perché non c'è un sistema ops condiviso.",
        "Gli strumenti trial addebitano per posto in modi che penalizzano team in crescita.",
      ],
    },
    solution: {
      title: "Fai crescere le operazioni su un'unica piattaforma pulizie",
      paragraphs: [
        "I piani TidyFlow scalano da team startup a organici più grandi con limiti immobili basati sull'uso. I titolari gestiscono abbonamento e fatturazione in-app. Pianificazione, prove sul campo, paghe e fatturazione clienti convivono.",
        "Revenue AI sui piani supportati evidenzia rischi e opportunità nel dashboard titolare — le decisioni di crescita usano dati operativi, non intuito.",
      ],
    },
    features: [
      {
        title: "Piani da 25 $/mese",
        description: "Piano Startup per team più piccoli; upgrade con crescita immobili e operatori.",
        benefit: "Inizia senza contratti enterprise.",
        linkHref: "/pricing",
        linkLabel: "Vedi prezzi",
      },
      {
        title: "Fatturazione self-service",
        description: "Prova, upgrade e gestione abbonamento nell'app.",
        benefit: "I titolari controllano i costi senza chiamare le vendite.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Funzionalità fatturazione",
      },
      {
        title: "Fatturazione clienti e QuickBooks",
        description: "Fattura da interventi; sync con QuickBooks Online.",
        benefit: "La finanza resta allineata aggiungendo clienti.",
        linkHref: "/integrations",
        linkLabel: "Integrazioni",
      },
      {
        title: "Dashboard Revenue AI",
        description: "Insight titolare sui piani supportati.",
        benefit: "Individua presto quali contratti richiedono attenzione.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Inizia → Opera → Prova → Fattura → Cresci",
      steps: [
        { title: "Inizia", description: "Prova 14 giorni — configura immobili e invita i primi operatori." },
        { title: "Opera", description: "Pianifica interventi ed esegui lavoro sul campo con GPS e foto." },
        { title: "Prova", description: "Invia prove clienti vincendo contratti più grandi." },
        { title: "Fattura", description: "Fattura clienti ed esegui paghe da ore verificate." },
        { title: "Cresci", description: "Aumenta limiti piano e usa dashboard titolare per le decisioni." },
      ],
    },
    useCases: {
      title: "Fasi aziendali",
      items: [
        { title: "Solo operatore che diventa multi-operatore", description: "Sostituisci calendari personali con pianificazione condivisa." },
        { title: "Azienda locale che vince gare commerciali", description: "Prove clienti e QC per contratti facility." },
        { title: "Brand pulizie regionale", description: "Limiti multi-immobile, ruoli e integrazioni." },
        { title: "Titolare-operatore con tutti i cappelli", description: "Un login per turno, paghe e fatturazione." },
      ],
    },
    faqs: [
      { q: "Cos'è un software per impresa di pulizie?", a: "Software che aiuta i titolari a gestire pianificazione, team, lavoro sul campo, fatturazione clienti e paghe per un'impresa di pulizie — tipicamente sostituendo i fogli crescendo." },
      { q: "Quanto costa TidyFlow?", a: "I piani partono da 25 $/mese per Startup. Standard e Premium aggiungono più immobili, operatori e funzionalità come sync Google Sheets e QuickBooks." },
      { q: "C'è una prova gratuita?", a: "Sì. Tutti i piani includono prova gratuita di 14 giorni con registrazione self-service." },
      { q: "Posso fare upgrade crescendo?", a: "Sì. Cambia piano in-app quando aumentano limiti immobili e team." },
    ],
  },
};
