import type { ChapterTranslation } from "../docTranslations";

export const itChapters: Record<string, ChapterTranslation> = {
  "ch-1": {
    title: "Cos'è TidyFlow?",
    category: "Overview",
    content: "TidyFlow è una piattaforma operativa unificata progettata su misura per aziende di pulizie residenziali e commerciali e gestione delle strutture. Funge da motore centrale che coordina le attività tra proprietari di aziende, manager operativi remoti e addetti alle pulizie sul campo. Sostituendo strumenti frammentati e obsoleti come liste di controllo cartacee, conversazioni WhatsApp non strutturate e fogli paga separati, TidyFlow consolida pianificazione, verifica della posizione, fatturazione clienti e analisi del team in un'unica piattaforma database sicura e offline-first."
  },
  "ch-2": {
    title: "Per iniziare",
    category: "Overview",
    content: "Per avviare le operazioni, gli amministratori aziendali possono registrarsi nel portale TidyFlow, stabilendo la loro registrazione commerciale. Alla prima installazione, i dipendenti sperimentano un tour di onboarding interattivo che spiega i moduli principali. Una volta attivati, i proprietari sono guidati a configurare profili di pagamento sicuri tramite Stripe. Da lì, i proprietari possono invitare il personale accedendo a 'Utenti' nella Barra Laterale, inserendo nomi, email e categorie di ruolo dei dipendenti (Manager o Addetti alle pulizie) per inviare le credenziali di accesso immediatamente."
  },
  "ch-3": {
    title: "Comprendere il proprio ruolo",
    category: "Overview",
    content: "TidyFlow applica rigorosi controlli di accesso basati sui ruoli per garantire l'isolamento e la sicurezza dei dati. Proprietari/Amministratori supervisionano piani di abbonamento, formati di valuta, impostazioni di fatturazione clienti, link principali di Google Sheets e report finanziari dell'intera azienda. I Manager si concentrano sulla pianificazione dei turni, risoluzione dei problemi delle proprietà e validazione dei timesheet inviati. Gli Addetti alle pulizie operano sotto un layout mobile semplificato progettato esclusivamente per registrare ore, completare attività di checklist stanza per stanza, caricare foto prima/dopo e inviare allarmi di panico SOS."
  },
  "ch-4": {
    title: "Navigare nell'app",
    category: "Overview",
    content: "Il menu della barra laterale sinistra funge da bussola di navigazione dell'app. Fare clic sul pulsante menu (☰) apre percorsi verso: Home (dashboard personalizzata per ruolo), Attività (liste calendario categorizzate), Calendario, Proprietà, Programmazione Lavoro, Utenti, Richieste Assenza, Buste Paga, Fatture Clienti, Forniture e Preferenze. Gli utenti mobili possono anche attivare tour interattivi su qualsiasi schermata attraverso la scorciatoia 'Aiuto e Tour' nel footer del menu laterale."
  },
  "ch-5": {
    title: "Google Sheets — connessione e sincronizzazione",
    category: "Core Features",
    content: "Connetti il foglio di calcolo aziendale per abilitare la sincronizzazione bidirezionale in tempo reale. Passo 1: Apri 'Proprietà' e seleziona 'Sincronizzazione Google Sheets'. Passo 2: Incolla l'URL del tuo foglio principale. Passo 3: Copia l'email unica del nostro account di servizio (es. sync@project.iam.gserviceaccount.com) e concedigli permessi di modifica in Google Sheets. Passo 4: Clicca 'Sincronizza Ora'. Il sistema legge le schede 'Properties' e 'Tasks', sincronizzando le modifiche istantaneamente in entrambe le direzioni. Tutte le assegnazioni degli addetti, completamenti di stato e ore lavorate tornano direttamente alle righe del tuo foglio principale."
  },
  "ch-6": {
    title: "Proprietà",
    category: "Core Features",
    content: "Il registro delle proprietà è la base strutturale di TidyFlow. Situato in Barra Laterale → Proprietà, ospita un catalogo di tutti gli indirizzi di servizio, codici postali, tipi di proprietà (appartamenti, residenziali, commerciali), conteggio unità e tariffe di servizio standard. Fare clic su qualsiasi proprietà mostra la cronologia delle attività, modelli ricorrenti attivi, coordinate GPS sulla mappa e scorciatoie rapide per pianificare nuove attività singole."
  },
  "ch-7": {
    title: "Attività",
    category: "Core Features",
    content: "Le attività rappresentano singole sessioni di lavoro fatturabili. I manager creano attività selezionando una proprietà, assegnando date e orari pianificati, inserendo descrizioni dettagliate e allocando gli addetti alle pulizie corrispondenti. Le checklist dettagliate possono essere create manualmente o generate automaticamente attraverso suggerimenti AI. Il ciclo di vita dell'attività procede in ordine: Pianificata → Assegnata → In Corso (timer attivo) → Inviata (lavoro completato) → Approvata (verificata dal manager) → Completata (fatturata)."
  },
  "ch-8": {
    title: "Guida per gli operatori",
    category: "Role Guides",
    content: "Gli addetti alle pulizie accedono a TidyFlow sui loro smartphone, dove vengono accolti da un programma giornaliero semplificato e altamente focalizzato. Cliccano sull'attività assegnata per ispezionare i punti della checklist, accedere alle note operative e avviare il timer di lavoro. Cliccando 'Inizia Sessione di Lavoro', l'app registra l'ora esatta tramite GPS, permettendo di contrassegnare le checklist di ogni stanza, scattare foto prima/dopo e cliccare 'Invia Lavoro' per l'invio immediato all'approvazione dei manager."
  },
  "ch-9": {
    title: "Guida per i manager",
    category: "Role Guides",
    content: "I manager accedono a una dashboard browser desktop dedicata o a un'app coordinatore mobile. La schermata principale evidenzia le attività non assegnate del giorno, timesheet in sospeso e problemi aperti. I manager possono ispezionare rapidamente le attività inviate, rivedere le foto prima/dopo caricate dai dipendenti, confrontare i record e approvare o rifiutare le sessioni per inviare automaticamente le ore ai periodi di paga attivi."
  },
  "ch-10": {
    title: "Guida per i proprietari",
    category: "Role Guides",
    content: "I proprietari hanno la massima autorità sui conti aziendali. Al login, accedono alle impostazioni di fatturazione, gestiscono gli abbonamenti Stripe, personalizzano l'identità visiva aziendale (logo, dettagli bancari, intestazioni fatture) e verificano i log multi-utente. I proprietari hanno anche accesso a report analitici dettagliati che monitorano ricavi, posti team attivi e insight operativi generati dall'AI."
  },
  "ch-11": {
    title: "Turni e pianificazione",
    category: "Core Features",
    content: "La pianificazione dei turni è coordinata in Barra Laterale → Programmazione Lavoro. Presenta un layout a griglia che mappa le proprietà contro gli addetti alle pulizie per la settimana. I dispatcher trascinano, rilasciano e toccano i blocchi per assegnare attività. TidyFlow controlla automaticamente i blocchi ferie, impedendo ai manager di programmare erroneamente addetti in congedo. Il sistema analizza anche le coordinate per suggerire percorsi ottimizzati, riducendo i costi di trasporto."
  },
  "ch-12": {
    title: "Lavori ricorrenti",
    category: "Core Features",
    content: "Evita di programmare manualmente le pulizie periodiche. All'interno di qualsiasi finestra Proprietà, i manager possono stabilire programmi ricorrenti (es. pulizie commerciali settimanali o bisettimanali). Il pannello consente di definire periodi di ricorrenza personalizzati, giorni della settimana e date di fine. Salvato il modello, TidyFlow pianifica e invia automaticamente le attività man mano che si avvicinano le date, garantendo una copertura completa del calendario."
  },
  "ch-13": {
    title: "Foto, PDF e prove per il cliente",
    category: "Core Features",
    content: "Documenta visivamente la qualità delle pulizie per proteggere la tua attività dai reclami dei clienti. Gli addetti alle pulizie caricano foto scattate in loco. I manager rivedono le immagini nelle attività inviate e possono compilare immediatamente report PDF brandizzati per i clienti. In alternativa, possono generare link di portali sicuri per i clienti per rivedere le checklist di completamento e le immagini direttamente dai loro browser."
  },
  "ch-14": {
    title: "Paghe e ore",
    category: "Core Features",
    content: "Semplifica il calcolo delle buste paga. Quando gli addetti alle pulizie inviano i loro timer delle attività attive, le ore registrate entrano in Buste Paga → Ore in Sospeso. I manager rivedono il tempo trascorso, fanno aggiustamenti se necessario e approvano. Una volta approvato, il sistema compila gli stipendi basati su tariffe orarie personalizzate, straordinari o profili a tariffa fissa per utente, permettendo l'esportazione di buste paga PDF per la stampa."
  },
  "ch-15": {
    title: "Fatture clienti",
    category: "Core Features",
    content: "Addebita ai clienti direttamente per le pulizie completate. In Barra Laterale → Fatture, i manager selezionano le attività approvate per generare fatture clienti automatiche. I moduli finanziari estraggono le tariffe di servizio standard della proprietà o i budget di attività specifiche e li inseriscono nei modelli aziendali. Il sistema consente di contrassegnare le fatture come inviate, in sospeso o pagate, aggiornando la salute finanziaria dell'azienda."
  },
  "ch-16": {
    title: "Richieste di ferie",
    category: "Core Features",
    content: "Gli addetti alle pulizie inviano richieste di malattia e ferie direttamente nel menu Barra Laterale → Assenze. Lo schermo registra le date di assenza e le descrizioni, inviando notifiche ai coordinatori. I manager approvano o rifiutano i record di congedo nel menu Percorso/Assenze. Una volta approvata la richiesta, TidyFlow blocca automaticamente le date nella programmazione del lavoro per evitare errori di pianificazione."
  },
  "ch-17": {
    title: "Problemi e sicurezza (SOS)",
    category: "Core Features",
    content: "La sicurezza dei lavoratori sul campo è la massima priorità. Gli addetti alle pulizie hanno accesso a un pulsante di panico SOS rosso brillante permanente sulla schermata delle attività attive. Premere il pulsante SOS invia immediatamente la posizione GPS in tempo reale ai server operativi e attiva notifiche di allarme rosso lampeggiante ad alta priorità sui dashboard di tutti i manager attivi, con una timeline di risposta di emergenza."
  },
  "ch-18": {
    title: "Forniture",
    category: "Advanced",
    content: "Tieni traccia dell'inventario dei prodotti attraverso il nostro tracker integrato (Barra Laterale → Forniture). I manager registrano prodotti per la pulizia, strumenti e materiali di consumo, impostando limiti di rifornimento. Durante le visite, gli addetti alle pulizie inseriscono i materiali utilizzati (es. sacchi della spazzatura, carta assorbente) nella scheda dell'attività. Se i livelli scendono sotto i limiti di sicurezza, allarmi automatici avvisano il management."
  },
  "ch-19": {
    title: "TidyFlow IA",
    category: "Advanced",
    content: "Ottimizza le decisioni aziendali utilizzando suggerimenti AI basati su Gemini (server sicuro). L'AI assiste i manager durante l'invio suggerendo il professionista più adatto basato su posizione, disponibilità e valutazioni di performance precedenti. Inoltre, i modelli analizzano le foto post-pulizia inviate dai dipendenti per classificare la qualità del servizio eseguito."
  },
  "ch-20": {
    title: "Modalità offline",
    category: "Advanced",
    content: "I professionisti sul campo operano spesso in scantinati o aree con segnale instabile. TidyFlow è offline-first per design. Gli addetti alle pulizie possono compilare checklist, avviare o mettere in pausa timer, registrare problemi e catturare foto prima/dopo completamente scollegati. L'app accoda le modifiche localmente e sincronizza tutto con i server non appena rileva il ritorno di internet."
  },
  "ch-21": {
    title: "Impostazioni e permessi",
    category: "Advanced",
    content: "Configura notifiche individuali, servizi di localizzazione in background e preferenze di sincronizzazione cache in Barra Laterale → Impostazioni. Gli addetti alle pulizie devono attivare i permessi di localizzazione per registrare la presenza GPS e i permessi della fotocamera per documentare il lavoro. I proprietari definiscono le valute di fatturazione (es. € EUR, $ USD, £ GBP) e i modelli di esportazione PDF."
  },
  "ch-22": {
    title: "Stati delle attività spiegati",
    category: "Advanced",
    content: "TidyFlow guida le attività attraverso una pipeline di produzione strutturata: Pianificata (creata, nessun team definito), Assegnata (team definito, in attesa di inizio), In Corso (addetto attivo in loco, timer in funzione), Inviata (completata dal professionista, in attesa di revisione controllo qualità), Revisione QA (in analisi visuale), Approvata (validata dal manager, pronta per fattura), Completata (completamente pagata e archiviata)."
  },
  "ch-23": {
    title: "Risoluzione problemi e FAQ",
    category: "Support",
    content: "Se Google Sheets fallisce nella sincronizzazione, verifica di aver condiviso l'accesso di modifica con l'email dell'account di servizio e che i nomi delle schede siano esattamente 'Properties' e 'Tasks'. Se il tracking in background fallisce, verifica che il GPS sia attivo sul tuo telefono nelle impostazioni. Se ci sono foto nella coda di sincronizzazione, conferma la tua connessione internet."
  }
};