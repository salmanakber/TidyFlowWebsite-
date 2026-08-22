import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_NO: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Programvare for rengjøringsfirma | Planlegg, spor og lønn | TidyFlow",
    seoDescription:
      "TidyFlow er programvare for rengjøringsfirmaer til planlegging av oppdrag, GPS-verifisert feltarbeid, fotobevis, lønn fra verifiserte timer og kunderapporter — online eller offline.",
    keywords:
      "programvare for rengjøringsfirma, plattform for rengjøringsbedrift, driftsprogramvare for renhold, feltapp for rengjøring, dispatch-programvare rengjøring, TidyFlow",
    eyebrow: "Programvare for rengjøringsfirma",
    h1: "Operativsystemet for rengjøringsfirmaer",
    heroSubtitle:
      "TidyFlow kobler eiere, ledere og rengjørere på én plattform — planlegg gjentakende oppdrag, verifiser arbeid på stedet med GPS og bilder, kjør lønn fra loggede timer og send bevis til kunder.",
    navLabel: "Programvare for rengjøringsfirma",
    problems: {
      title: "Det som går galt når du driver et rengjøringsfirma med regneark og gruppesamtaler",
      items: [
        "Gjentakende kontrakter ligger i ett ark, tilgjengelighet for rengjørere i et annet, og klage fra kunder på WhatsApp.",
        "Ledere ser ikke om et team faktisk startet et oppdrag eller bare kjørte forbi bygningen.",
        "Lønnskonflikter starter fordi timer ble skrevet fra hukommelsen i stedet for verifisert på stedet.",
        "Kunder ber om arbeidsbevis og du leter etter bilder begravet i kameraruller.",
        "Felteam mister signal i kjellere, parkeringshus og tekniske rom — og kan ikke fullføre oppdraget i appen.",
      ],
    },
    solution: {
      title: "Én plattform fra planlegging til bevis til lønn",
      paragraphs: [
        "TidyFlow er bygget spesifikt for rengjøringsfirmaers drift — ikke generell felttjeneste. Eiere får inntektsoversikt og abonnementskontroll. Ledere bygger vaktplaner, tildeler rengjørere og gjennomgår GPS-verifiserte fullføringer. Rengjørere får en enkel mobil jobbliste med offline-sjekklister, timere og bildeopplasting.",
        "Når et oppdrag fullføres, går timer inn i lønnsarbeidsflyter, bilder kan generere PDF-kunderapporter, og ledere beholder et revisjonsspor uten å jage meldinger på tvers av fem apper.",
      ],
    },
    features: [
      {
        title: "Oppdragsplanlegging og gjentakende kontrakter",
        description: "Kalender, vaktplanbygger og gjentakende eiendomsbesøk med fraværsbevisst tildeling.",
        benefit: "Slutt å bygge uken på nytt i regneark hver søndag kveld.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planleggingsprogramvare for rengjøring",
      },
      {
        title: "GPS-verifisert feltsporing",
        description: "Plassering sjekkes ved start og fullføring; live GPS under aktive oppdrag på støttede arbeidsflyter.",
        benefit: "Vit hvilke steder som faktisk ble betjent — ikke bare påstått.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tidsregistrering for rengjørere",
      },
      {
        title: "Lønn fra verifiserte timer",
        description: "Oppdragstimere, godkjenning av arbeidstimer og lønnskjøringer fra logget jobbtid.",
        benefit: "Reduser konflikter med timer knyttet til fullført arbeid.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Lønnsprogramvare for rengjøring",
      },
      {
        title: "Offline feltoperasjoner",
        description: "Full jobbfullføring uten internett — sjekklister, timer, bilder i kø og synk senere.",
        benefit: "Rengjørere fullfører oppdrag i bygninger med dårlig signal i stedet for å ringe kontoret.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline rengjøringsapp",
      },
    ],
    howItWorks: {
      title: "Planlegg → Tildel → Spor → Verifiser → Rapporter",
      steps: [
        { title: "Planlegg", description: "Opprett engangs- eller gjentakende oppdrag fra web eller mobil. Synk med Google Sheets hvis teamet fortsatt vedlikeholder en hovedvaktplan i regneark." },
        { title: "Tildel", description: "Dra rengjørere inn på vaktplanen. AI kan foreslå best passende person basert på historikk, plassering og fravær — leder bekrefter alltid." },
        { title: "Spor", description: "Rengjørere starter jobbtimeren på stedet. GPS-verifisering flagger starter og fullføringer langt fra eiendommen." },
        { title: "Verifiser", description: "Sjekklister, før/etter-bilder og valgfri AI-bildescoring gir ledere kvalitetsbevis." },
        { title: "Rapporter", description: "Generer PDF-jobbrapporter eller del en kundeportal-lenke. Timer går inn i lønn og faktureringsarbeidsflyter." },
      ],
    },
    useCases: {
      title: "Rengjøringsfirmaer som kjører på TidyFlow",
      items: [
        { title: "Kommersiell og kontraktsrenhold", description: "Flersteds-kontrakter med gjentakende besøk, kundebevis og leder-QA-arbeidsflyter." },
        { title: "Renholds- og facility-team", description: "Nattskift, tekniske rom og bygninger der signalet faller — offline-modus holder teamet i gang." },
        { title: "Voksende lokale bedrifter", description: "Erstatt regnearkkaos når du legger til eiendommer og rengjørere uten å ansette en driftsadministrator først." },
        { title: "Flerspråklige team", description: "Plattform tilgjengelig på 11 språk for eiere, ledere og feltpersonell." },
      ],
    },
    faqs: [
      { q: "Hva er programvare for rengjøringsfirma?", a: "Det er programvare som hjelper rengjøringsbedrifter med å planlegge oppdrag, administrere rengjørere, spore feltarbeid, verifisere kvalitet og kjøre lønn eller kundefakturering fra ett system i stedet for regneark og meldingsapper." },
      { q: "Er TidyFlow bare for store selskaper?", a: "Nei. Planer starter på $25/måned for mindre team. Du kan kjøre planlegging, feltsporing og bevis på en voksende stab uten enterprise-oppsett." },
      { q: "Fungerer TidyFlow offline?", a: "Ja. Rengjørere kan fullføre sjekklister, kjøre jobbtimeren og ta bilder offline. Data synkroniseres når tilkoblingen kommer tilbake." },
      { q: "Kan jeg fortsette å bruke Google Sheets?", a: "Ja. TidyFlow tilbyr toveis Google Sheets-synk slik at du kan beholde en regneark-hovedliste mens appen håndterer feltutførelse." },
      { q: "Hvordan kommer jeg i gang?", a: "Start en 14-dagers gratis prøveperiode fra prissiden. Eiere setter opp eiendommer, inviterer rengjørere og tildeler de første oppdragene fra web eller mobil." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Administrasjonsprogramvare for rengjøring | Driftskontroll | TidyFlow",
    seoDescription:
      "Administrasjonsprogramvare for rengjøring for eiere og driftsledere — vaktplaner, live jobbstatus, teamfravær, problemsporing, lønnsgodkjenning og kundebevis i ett dashbord.",
    keywords:
      "administrasjonsprogramvare rengjøring, driftsplattform renhold, administrasjonssystem renhold, bedriftsadministrasjon rengjøring, TidyFlow",
    eyebrow: "Administrasjonsprogramvare for rengjøring",
    h1: "Kjør renholdsdrift fra ett administrasjonsdashbord",
    heroSubtitle:
      "Gi ledere oversikt over planer, feltfullføringer, kvalitetskontroller og lønnsgodkjenninger — uten å jage rengjørere på WhatsApp eller bygge vaktplaner på nytt i regneark.",
    navLabel: "Renholdsadministrasjon",
    problems: {
      title: "Hvorfor renholdsdrift faller fra hverandre i skala",
      items: [
        "Eieren er den eneste som vet hvilken kunde som er underbemannet på torsdag.",
        "Ledere skriver inn de samme gjentakende jobbene hver uke fordi ingenting automatiserer kontraktsbesøk.",
        "Kvalitetsklager kommer før noen gjennomgår bilder eller sjekklistresultater fra jobben.",
        "Fraværsforespørsler ligger i meldinger og vaktplanen publiseres med kjente konflikter.",
        "Lønnsgodkjenning betyr å sammenligne håndskrevne timelister med hukommelsen.",
      ],
    },
    solution: {
      title: "Administrasjonsverktøy knyttet til ekte feltdata",
      paragraphs: [
        "TidyFlow administrasjonsprogramvare kobler planlegging, team-HR og feltutførelse. Ledere ser jobbstatusoppdateringer i sanntid, gjennomgår GPS-verifiserte fullføringer og godkjenner timer før lønnskjøringer.",
        "Problemsporing, QA-scoring og kundebevis ligger ved siden av vaktplanen — slik at lederbeslutninger bruker de samme dataene rengjørere genererer på stedet.",
      ],
    },
    features: [
      {
        title: "Vaktplanbygger med fraværsbevissthet",
        description: "Dra-og-slipp-tildeling som respekterer godkjent fravær og tilgjengelighet.",
        benefit: "Publiser vaktplaner uten manuelle konfliktsjekker.",
        linkHref: "/features",
        linkLabel: "Team- og planleggingsfunksjoner",
      },
      {
        title: "Sanntids jobbstatus",
        description: "Se når jobber starter, pauses og fullføres på tvers av eiendommer.",
        benefit: "Grip inn før et utelatt besøk blir en kunde-eskalering.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planleggingsprogramvare",
      },
      {
        title: "QA- og problemarbeidsflyter",
        description: "Lederkvalitetsgjennomganger, problemlogger og fotobevis på fullførte jobber.",
        benefit: "Håndter klager med revisjonsspor på jobbnivå.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspeksjonsprogramvare",
      },
      {
        title: "Eierens inntektsdashbord",
        description: "Finansiell oversikt og Revenue AI-innsikt på støttede planer.",
        benefit: "Eiere ser ytelse uten å eksportere fem rapporter.",
        linkHref: "/pricing",
        linkLabel: "Planer og priser",
      },
    ],
    howItWorks: {
      title: "Planlegg → Tildel → Overvåk → Gjennomgå → Godkjenn",
      steps: [
        { title: "Planlegg", description: "Bygg uken i kalender- eller vaktplanvisning. Gjentakende jobber genererer kontraktsbesøk automatisk." },
        { title: "Tildel", description: "Plasser rengjørere på jobber. AI-anbefalinger valgfritt — ledere velger endelige tildelte." },
        { title: "Overvåk", description: "Spor starter, GPS-flagg og sjekklistefremdrift fra administrasjonsdashbordet." },
        { title: "Gjennomgå", description: "Åpne fullførte jobber for bilder, QA-scorer og kundevendte rapportutkast." },
        { title: "Godkjenn", description: "Signer av arbeidstimer og lønnskjøringer fra verifisert oppgavetid." },
      ],
    },
    useCases: {
      title: "Administrasjonsscenarier TidyFlow støtter",
      items: [
        { title: "Driftsledere", description: "Daglig dispatch, kvalitetsoppfølging og teamkoordinering på tvers av flere steder." },
        { title: "Bedriftseiere", description: "Abonnementskontroll, inntektsvisning og bevis på at kontrakter betjenes." },
        { title: "Flersteds-supervisorer", description: "Sammenlign fullføringsstatus og problemer på tvers av eiendommer på ett sted." },
        { title: "Franchise-koordinatorer", description: "Konsekvente arbeidsflyter og rollebasert tilgang når team vokser." },
      ],
    },
    faqs: [
      { q: "Hva bør administrasjonsprogramvare for rengjøring inneholde?", a: "Minimum: planlegging, teamtildeling, feltstatus, tidsregistrering, kvalitetsbevis og lønns- eller timegodkjenning. TidyFlow dekker dette på én plattform." },
      { q: "Kan ledere bruke TidyFlow på mobil?", a: "Ja. Ledere kan planlegge, tildele og gjennomgå jobber fra mobil eller web." },
      { q: "Hvordan fungerer rollebasert tilgang?", a: "Eiere, ledere og rengjørere ser ulike skjermer. Rengjørere får jobblister og feltverktøy; ledere får vaktplan, godkjenninger og rapporter." },
      { q: "Erstatter TidyFlow regnskapsføreren min?", a: "Nei. TidyFlow håndterer drift og kan synke fakturaer til QuickBooks Online. Regnskapsføreren eier fortsatt skatt og regnskapsstrategi." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Renholdsprogramvare | Nattskift og flersteds-team | TidyFlow",
    seoDescription:
      "Renholdsprogramvare for kontraktsrengjørere — gjentakende stedsbesøk, offline feltapp, GPS-innstempling, sjekklister og bevis for facility-kunder.",
    keywords:
      "renholdsprogramvare, administrasjonsprogramvare renhold, planleggingsapp renhold, kontraktsrenhold programvare, TidyFlow",
    eyebrow: "Renholdsprogramvare",
    h1: "Renholdsprogramvare bygget for kontraktsarbeid på sted",
    heroSubtitle:
      "Kjør gjentakende renholdsruter på tvers av kontorer, skoler og facility. Rengjørere jobber offline i tekniske rom og kjellere mens ledere verifiserer hvert besøk med GPS, sjekklister og bilder.",
    navLabel: "Renholdsprogramvare",
    problems: {
      title: "Renholdskontrakter feiler når feltappen feiler",
      items: [
        "Natteam treffer døde soner i trappeløp og kan ikke logge fullføring.",
        "Vikarer ankommer uten stedsnotater som lå i en gruppesamtale.",
        "Facility-ledere ber om bevis og du sender en generisk e-post uten tidsstempler.",
        "Omfangsutvidelse på ekstra rom er usynlig til faktureringstid.",
        "Flere bygninger deler én supervisor som ikke fysisk kan verifisere hver starttid.",
      ],
    },
    solution: {
      title: "Kontraktsrenholds-arbeidsflyter i ett system",
      paragraphs: [
        "TidyFlow støtter gjentakende renholdsplaner, sjekklister per sted og offline jobbfullføring — kombinasjonen kontraktsrengjørere trenger når hver bygning har ulike tilgangsregler og signal kvalitet.",
        "Per-oppdrag-chat holder stedsinstruksjoner på jobben. GPS-verifisering og fotobevis gir facility-kunder dokumentasjon uten ekstra admin-arbeid.",
      ],
    },
    features: [
      {
        title: "Gjentakende renholdsruter",
        description: "Automatiser ukentlige og månedlige besøk per eiendom med teamtildeling.",
        benefit: "Kontraktsplaner regenereres uten manuell kopiering.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planleggingsprogramvare",
      },
      {
        title: "Offline renholdsapp",
        description: "Timer, sjekkliste og bilder fungerer uten tilkobling; synk ved gjenoppretting.",
        benefit: "Natteam fullfører jobber under bakken i stedet for å hoppe over appen.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline rengjøringsprogramvare",
      },
      {
        title: "Stedssjekklister og bilder",
        description: "Rom-for-rom-oppgaver med før/etter-bevis ved fullføring.",
        benefit: "Dokumenter omfang for QA og kundetvister.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspeksjon og QC",
      },
      {
        title: "SOS-sikkerhetsknapp",
        description: "Ett trykk varsler ledere for enearbeidere på sene skift.",
        benefit: "Gi nattevaktrenholdere en direkte sikkerhetslinje fra jobbskjermen.",
        linkHref: "/features",
        linkLabel: "Feltsikkerhetsfunksjoner",
      },
    ],
    howItWorks: {
      title: "Kontrakt → Planlegg → Utfør → Bevis → Fakturer",
      steps: [
        { title: "Kontrakt", description: "Sett opp eiendommer med tilgangsnotater og sjekklistemaler per sted." },
        { title: "Planlegg", description: "Opprett gjentakende renholdsbesøk og tildel faste team eller roterende personell." },
        { title: "Utfør", description: "Rengjørere kjører jobben offline eller online — timer, sjekkliste, bilder på stedet." },
        { title: "Bevis", description: "Ledere gjennomgår GPS-verifisert fullføring og fotobevis." },
        { title: "Fakturer", description: "Fakturer kunder fra fullført arbeid; synk fakturaer til QuickBooks på støttede planer." },
      ],
    },
    useCases: {
      title: "Renholdsteam som bruker TidyFlow",
      items: [
        { title: "Kontor- og bedriftsrenhold", description: "Etter-hours-renhold med PDF-kundebevis." },
        { title: "Utdanning og offentlige bygninger", description: "Fleretasjes steder med dårlig innendørs signal — offline-modus inkludert." },
        { title: "Industrielt og anleggsrenhold", description: "Sjekklister for begrensede områder og sikkerhetsfølsomme soner." },
        { title: "Underleverandører av renhold", description: "Rollebasert tilgang for kundevendte ledere og feltpersonell." },
      ],
    },
    faqs: [
      { q: "Er TidyFlow renholds- eller boligprogramvare?", a: "TidyFlow er bygget for profesjonell rengjøringsdrift — kommersiell, renholds- og kontraktsarbeid er hovedfokus." },
      { q: "Kan renholdere stemple inn uten signal?", a: "Ja. Feltappen køer GPS og jobbhendelser offline og synker når tilkoblingen kommer tilbake." },
      { q: "Kan vi dele bevis med facility-ledere?", a: "Ja. PDF-jobbrapporter og sikre kundeportal-lenker deler fullføringsbevis." },
      { q: "Håndterer TidyFlow gjentakende nattskift?", a: "Ja. Gjentakende jobber og vaktplanverktøy støtter faste nattruter og roterende team." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Kommersiell rengjøringsprogramvare | Flersteds-kontrakter | TidyFlow",
    seoDescription:
      "Kommersiell rengjøringsprogramvare for kontor-, retail- og facility-kontrakter — planlegging, QC-inspeksjoner, kundebevis, fakturering og teamadministrasjon.",
    keywords:
      "kommersiell rengjøringsprogramvare, kontorrenhold programvare, kontraktsrenhold plattform, facility-renhold programvare, TidyFlow",
    eyebrow: "Kommersiell rengjøringsprogramvare",
    h1: "Kommersiell rengjøringsprogramvare for kontraktsdrift",
    heroSubtitle:
      "Administrer flersteds kommersielle kontrakter med gjentakende planer, inspeksjonssjekklister, fotobevis for kunder og lønn fra verifiserte felttimer.",
    navLabel: "Kommersiell rengjøring",
    problems: {
      title: "Kommersielle kontrakter trenger mer enn en kalenderapp",
      items: [
        "Hvert kundested har ulikt omfang, nøkler og inspeksjonsstandarder.",
        "Account managere lover kvalitet, men drift har ingen sentral QC-registrering.",
        "Ekstra arbeidsordrer forsvinner mellom e-post og ukentlig vaktplan.",
        "Fakturaer sendes før noen bekrefter at alle planlagte besøk er fullført.",
        "Kundetap følger én utelatt dyprengjøring som ingen dokumenterte.",
      ],
    },
    solution: {
      title: "Kommersielle arbeidsflyter fra tilbud til bevis",
      paragraphs: [
        "TidyFlow knytter kommersiell planlegging til kvalitetsverifisering og kundevendte rapporter. Ledere kjører QA-scoring på fullførte jobber, logger problemer per eiendom og deler merkede PDF-bevis.",
        "Fakturering og QuickBooks-synk på støttede planer holder finans i tråd med fullført kontraktsarbeid.",
      ],
    },
    features: [
      {
        title: "Flersteds-planlegging",
        description: "Kalender og gjentakende jobber på tvers av kommersielle porteføljer.",
        benefit: "Én visning av hvert sted i kontrakten.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planlegging",
      },
      {
        title: "Kundebevis og PDF-rapporter",
        description: "Merkevarede nedlastbare rapporter og sikre portal-lenker.",
        benefit: "Gi facility-ledere bevis uten manuelle bilde-e-poster.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspeksjon og bevis",
      },
      {
        title: "Kundefakturering",
        description: "Fakturer fra fullførte oppgaver med linjeposter.",
        benefit: "Fakturer mot verifiserte fullføringer, ikke gjetninger.",
        linkHref: "/integrations",
        linkLabel: "QuickBooks-integrasjon",
      },
      {
        title: "Problemsporing",
        description: "Logg og løs eiendomsproblemer fra felt eller kontor.",
        benefit: "Lukk loopen når et sted rapporterer et problem.",
        linkHref: "/features",
        linkLabel: "Kvalitetsfunksjoner",
      },
    ],
    howItWorks: {
      title: "Omfang → Planlegg → Betjen → Inspiser → Fakturer",
      steps: [
        { title: "Omfang", description: "Definer eiendommer, sjekklister og tilgangsnotater per kommersiell kunde." },
        { title: "Planlegg", description: "Sett gjentakende servicefrekvens og tildel team." },
        { title: "Betjen", description: "Rengjørere fullfører jobber med timer, GPS og sjekkliste på mobil." },
        { title: "Inspiser", description: "Ledere QA fullført arbeid med bilder og scoring-arbeidsflyter." },
        { title: "Fakturer", description: "Fakturer kunder og synk eventuelt til QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Brukstilfeller for kommersiell rengjøring",
      items: [
        { title: "Kontor- og coworking-operatører", description: "Daglig og ukentlig service med kundesynlig bevis." },
        { title: "Retail- og hospitality-kjeder", description: "Flere lokasjoner med konsekvente sjekklister." },
        { title: "Eiendomsforvaltningsporteføljer", description: "Spor problemer og besøk på tvers av bygninger." },
        { title: "B2B-kontraktsrengjørere", description: "Driftsoversikt for eiere som selger til facility-ledere." },
      ],
    },
    faqs: [
      { q: "Hva er kommersiell rengjøringsprogramvare?", a: "Programvare som hjelper B2B-renholdsbedrifter med å planlegge kontraktssteder, verifisere tjenestelevering, administrere team og fakturere kunder fra én plattform." },
      { q: "Kan kunder se jobbbilder?", a: "Du kontrollerer kundevendt bevis via PDF-rapporter og portal-lenker — ikke intern lederchat." },
      { q: "Støtter TidyFlow flersteds-kontrakter?", a: "Ja. Eiendommer, gjentakende jobber og vaktplaner skalerer til flersteds kommersielle porteføljer." },
      { q: "Kan vi samle inn kundeanmeldelser?", a: "Ja. TidyFlow inkluderer innsamling av kundeanmeldelser med ruting for negativ tilbakemelding." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Planleggingsprogramvare for rengjøring | Gjentakende jobber og vaktplaner | TidyFlow",
    seoDescription:
      "Planleggingsprogramvare for rengjøring med kalender, vaktplanbygger, gjentakende jobber, AI-tildelingsforslag, fraværsadministrasjon og Google Sheets-synk.",
    keywords:
      "planleggingsprogramvare rengjøring, dispatch-programvare rengjøring, hjemmerenhold planlegging, renhold planleggingsapp, TidyFlow",
    eyebrow: "Planleggingsprogramvare for rengjøring",
    h1: "Planleggingsprogramvare for rengjøring som matcher ekte vaktplaner",
    heroSubtitle:
      "Bygg ukentlige vaktplaner, automatiser gjentakende eiendomsbesøk, tildel rengjørere med fraværsbevissthet og send oppdateringer til feltappen umiddelbart.",
    navLabel: "Planlegging",
    problems: {
      title: "Planlegging feiler når verktøyet ignorerer renholdsrealiteten",
      items: [
        "Gjentakende kontrakter legges inn manuelt hver måned.",
        "Vikarer tildeles uten å se hvem som er på fravær.",
        "Rengjørere får vite om planendringer fra en gruppesamtale, ikke appen.",
        "Ruteplanlegging er gjetning — reisetid mellom steder er usynlig.",
        "Regneark-vaktplanen og feltappen matcher aldri.",
      ],
    },
    solution: {
      title: "Planlegging koblet til feltappen",
      paragraphs: [
        "TidyFlow-planlegging er ikke en frittstående kalender — tildelinger pushes til rengjørernes mobile jobblister i sanntid. Gjentakende jobber genererer kontraktsbesøk automatisk. Vaktplanbyggeren respekterer godkjent fravær.",
        "Toveis Google Sheets-synk lar team beholde et regneark-hoveddokument mens TidyFlow utfører dispatch. AI kan foreslå tildelte; ledere tar alltid endelig beslutning.",
      ],
    },
    features: [
      {
        title: "Kalender og vaktplanbygger",
        description: "Ukevisning, dra-og-slipp-tildeling, fraværsbevisst planlegging.",
        benefit: "Bygg vaktplanen én gang og publiser til feltet.",
        linkHref: "/how-it-works",
        linkLabel: "Slik fungerer planlegging",
      },
      {
        title: "Gjentakende jobber",
        description: "Ukentlige, månedlige og tilpassede gjentakelsesmønstre per eiendom.",
        benefit: "Slutt å kopiere de samme besøkene hver syklus.",
        linkHref: "/features",
        linkLabel: "Planleggingsfunksjoner",
      },
      {
        title: "AI-anbefalinger for rengjørere",
        description: "Foreslå best passende person etter historikk, plassering og tilgjengelighet.",
        benefit: "Raskere dispatch på travle morgener — leder bekrefter.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "AI-tildeling",
      },
      {
        title: "Ruteoptimalisering",
        description: "Reduser reisetid mellom eiendommer på støttede arbeidsflyter.",
        benefit: "Få plass til flere jobber per skift uten overtidsgjetning.",
        linkHref: "/integrations",
        linkLabel: "Kartintegrasjon",
      },
    ],
    howItWorks: {
      title: "Planlegg → Tildel → Varsle → Utfør → Juster",
      steps: [
        { title: "Planlegg", description: "Opprett jobber i kalendervisning eller importer fra Google Sheets." },
        { title: "Tildel", description: "Dra rengjørere inn på skift; vaktplan flagger fraværskonflikter." },
        { title: "Varsle", description: "Tildelinger vises umiddelbart på rengjørernes enheter." },
        { title: "Utfør", description: "Felteam starter jobber med GPS-verifisert innstempling." },
        { title: "Juster", description: "Tildel åpne jobber på nytt fra mobil når noen melder seg syk." },
      ],
    },
    useCases: {
      title: "Planleggingsscenarier",
      items: [
        { title: "Gjentakende kontraktsrengjørere", description: "Automatiser faste ukentlige ruter på tvers av kundesteder." },
        { title: "Bolig- og hjemmerenhold", description: "Variable ukentlige planer med rask omtildeling." },
        { title: "Dispatch for flere team", description: "Flere supervisorer planlegger overlappende territorier." },
        { title: "Voksende selskaper som forlater regneark", description: "Ark-synk mens du overgår dispatch til appen." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow administrere gjentakende rengjøringsjobber?", a: "Ja. Gjentakende jobber automatiserer gjentatte besøk per eiendom med teamtildeling." },
      { q: "Synker planlegging med Google Sheets?", a: "Ja. Toveis synk holder regneark-hoveddokumenter i tråd med app-tildelinger." },
      { q: "Ser rengjørere bare sin egen plan?", a: "Ja. Rengjørere ser dagens jobbliste; ledere ser hele vaktplanen." },
      { q: "Finnes ruteoptimalisering?", a: "Ja. TidyFlow inkluderer ruteplanleggingsverktøy med Google Maps-integrasjon." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Lønnsprogramvare for rengjøring | Verifiserte timer og timelister | TidyFlow",
    seoDescription:
      "Lønnsprogramvare for rengjøring bygget på GPS-verifiserte oppgavetimer, timelistegodkjenning, lønnsregler, lønnskjøringer og PDF-lønnsslipper for rengjøringsteam.",
    keywords:
      "lønnsprogramvare rengjøring, lønnsapp rengjørere, renhold lønn, timelistprogramvare rengjøring, TidyFlow",
    eyebrow: "Lønnsprogramvare for rengjøring",
    h1: "Lønnsprogramvare for rengjøring fra verifiserte jobbtimer",
    heroSubtitle:
      "Generer lønn fra oppgavetimere og godkjente arbeidstimer — ikke håndskrevne timelister. GPS-verifisering reduserer konflikter og gir ledere et revisjonsspor.",
    navLabel: "Lønn",
    problems: {
      title: "Lønnskonflikter starter med uverifiserte timer",
      items: [
        "Rengjørere runder opp tid fordi papirtimelister er enkle å blåse opp.",
        "Ledere kan ikke knytte en lønnsslipp-linje til et spesifikt fullført oppdrag.",
        "Overtidssjokk dukker opp fordi ekstra jobber ikke ble logget sentralt.",
        "Kontraktør- vs ansatt-satser ligger i ulike notatbøker.",
        "Finans skriver timer inn i regnskap etter at drift allerede godkjente noe annet.",
      ],
    },
    solution: {
      title: "Lønn knyttet til fullført feltarbeid",
      paragraphs: [
        "TidyFlow logger timer fra jobbtimeren på stedet. GPS-verifisering flagger starter og fullføringer langt fra eiendommen. Ledere godkjenner arbeidstimer før lønnskjøringer.",
        "Ansattlønnsregler, lønnsfakturaer og QuickBooks lønnsregning-synk på støttede planer holder drift og finans på linje.",
      ],
    },
    features: [
      {
        title: "Oppdragstimer og timelister",
        description: "Start, pause, gjenoppta, send inn — timer knyttet til hvert oppdrag.",
        benefit: "Hver time knyttes til et eiendomsbesøk.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tidsregistrering",
      },
      {
        title: "GPS-verifisert oppmøte",
        description: "Plassering sjekkes ved innstempling og jobbfullføring.",
        benefit: "Utfordre konflikter med plasseringsbevis.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS-verifisering",
      },
      {
        title: "Lønnsregler og lønnskjøringer",
        description: "Satser per bruker og lønnsgenerering fra godkjente timer.",
        benefit: "Én godkjenningsflyt før lønnsslipper sendes ut.",
        linkHref: "/features",
        linkLabel: "Lønnsfunksjoner",
      },
      {
        title: "QuickBooks lønnsregninger",
        description: "Synk godkjent lønn til QuickBooks på støttede planer.",
        benefit: "Regnskap mottar driftsgodkjente totaler.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "QuickBooks-synk",
      },
    ],
    howItWorks: {
      title: "Planlegg → Registrer timer → Verifiser → Godkjenn → Betal",
      steps: [
        { title: "Planlegg", description: "Tildel jobber slik at forventede timer er synlige før skiftet." },
        { title: "Registrer", description: "Rengjørere kjører timeren på stedet; GPS validerer plassering." },
        { title: "Verifiser", description: "Ledere gjennomgår flaggede innstemplinger og ufullstendige sjekklister." },
        { title: "Godkjenn", description: "Signer av arbeidstimer og justeringer." },
        { title: "Betal", description: "Kjør lønn og eksporter PDF-fakturaer eller synk til QuickBooks." },
      ],
    },
    useCases: {
      title: "Lønnsscenarier",
      items: [
        { title: "Timelønnede rengjøringsteam", description: "Betal fra verifisert oppgavetid i stedet for papirlapper." },
        { title: "Blandet W-2 og kontraktører", description: "Lønnsregler per bruker med PDF-lønnsfakturaer." },
        { title: "Konfliktutsatte team", description: "GPS og jobbhistorikk for hver lønnsslipp-linje." },
        { title: "Eiere som kjører lønn om natten", description: "Batch-godkjenning fra administrasjonsdashbordet." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow spore rengjørertimer?", a: "Ja. Jobbtimere logger timer per oppgave. Rengjørere kan også sende inn arbeidstimer for ledergodkjenning." },
      { q: "Beviser GPS at rengjørere var på stedet?", a: "GPS-verifisering sjekker plassering ved start og fullføring. Ledere mottar varsler for innstempling utenfor bygningen." },
      { q: "Kan jeg eksportere lønn til QuickBooks?", a: "På støttede planer kan godkjent lønn synkes som regninger til QuickBooks Online." },
      { q: "Erstatter TidyFlow en full HR/lønnsleverandør?", a: "TidyFlow genererer lønn fra verifiserte driftstimer. Skatteinnlevering og full HR-compliance forblir regnskapsførerens domene." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Inspeksjonsprogramvare for rengjøring | Sjekklister og fotobevis | TidyFlow",
    seoDescription:
      "Inspeksjonsprogramvare for rengjøring med romsjekklister, før/etter-bilder, QA-scoring, PDF-kunderapporter og problemsporing for kvalitetsverifisering.",
    keywords:
      "inspeksjonsprogramvare rengjøring, kvalitetskontrollprogramvare rengjøring, sjekklisteapp rengjøring, renhold inspeksjonsprogramvare, TidyFlow",
    eyebrow: "Inspeksjonsprogramvare for rengjøring",
    h1: "Inspeksjonsprogramvare for rengjøring med sjekkliste og fotobevis",
    heroSubtitle:
      "Kjør rom-for-rom-inspeksjoner, ta før/etter-bilder, score kvalitet med leder-QA-arbeidsflyter og del merkede bevis med kunder.",
    navLabel: "Inspeksjoner",
    problems: {
      title: "Kvalitetsproblemer når inspeksjoner ligger utenfor jobben",
      items: [
        "Sjekklister er papir-PDF-er rengjørere krysser av uten å åpne på stedet.",
        "Før/etter-bilder ligger i personlige kameraruller — ikke knyttet til eiendommen.",
        "Ledere inspiserer tilfeldig i stedet for å følge en scoring-arbeidsflyt.",
        "Kunder bestrider kvalitet, men du har ingen tidsstemplede bevispakke.",
        "Problemer funnet på stedet glemmes før noen logger dem.",
      ],
    },
    solution: {
      title: "Inspeksjoner utført og lagret på jobbposten",
      paragraphs: [
        "TidyFlow-sjekklister kjører i rengjørerens mobilapp — valgfrie regler kan kreve sjekklistefullføring før timeren starter. Bilder lastes opp på stedet, inkludert offline med senere synk.",
        "Ledere bruker QA-scoring-arbeidsflyter for å gjennomgå fullføringer. AI-bildeanalyse kan flagge kvalitetsproblemer på støttede planer. PDF-rapporter og kundeportal-lenker pakker bevis for facility-kunder.",
      ],
    },
    features: [
      {
        title: "Rom-for-rom-sjekklister",
        description: "Sjekklistemaler per eiendom med påkrevde elementer.",
        benefit: "Standardiser omfang på hvert besøk.",
        linkHref: "/features",
        linkLabel: "Sjekklistefunksjoner",
      },
      {
        title: "Før/etter-bilder",
        description: "Fang bevis på jobben; fungerer offline.",
        benefit: "Bilder forblir knyttet til besøket, ikke en kamerarull.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline-bilder",
      },
      {
        title: "QA-scoring-arbeidsflyt",
        description: "Ledergjennomgang og kvalitetsscorer på fullførte jobber.",
        benefit: "Gjør stikkprøver til en repeterbar prosess.",
        linkHref: "/how-it-works",
        linkLabel: "Kvalitetsarbeidsflyt",
      },
      {
        title: "PDF-kunderapporter",
        description: "Merkevarede jobbrapporter og sikre delingslenker.",
        benefit: "Send bevis uten å bygge lysbilder manuelt.",
        linkHref: "/documentation",
        linkLabel: "Rapporteringsdokumentasjon",
      },
    ],
    howItWorks: {
      title: "Opprett sjekkliste → Inspiser → Fang bevis → Gjennomgå → Del bevis",
      steps: [
        { title: "Opprett", description: "Bygg sjekklistemaler per kundested eller tjenestetype." },
        { title: "Inspiser", description: "Rengjørere fullfører elementer på mobil under jobben." },
        { title: "Fang", description: "Legg til før/etter-bilder; offline-opptak synker senere." },
        { title: "Gjennomgå", description: "Ledere QA-scorer fullføringer og logger problemer." },
        { title: "Del", description: "Eksporter PDF eller send kundeportal-lenke med bevis." },
      ],
    },
    useCases: {
      title: "Inspeksjonsbrukstilfeller",
      items: [
        { title: "Kommersielle QC-programmer", description: "Standardisert scoring på tvers av en kundeportefølje." },
        { title: "Flytte- og dyprengjøring", description: "Før/etter-bildepakker for utleiere." },
        { title: "Franchise-kvalitetsstandarder", description: "Konsekvente sjekklister på tvers av lokasjoner." },
        { title: "Kunderevisjonsforespørsler", description: "Tidsstemplet jobbhistorikk når facility ber om bevis." },
      ],
    },
    faqs: [
      { q: "Kan rengjørere fullføre sjekklister offline?", a: "Ja. Sjekklister og bilder fungerer offline og synker når tilkoblingen kommer tilbake." },
      { q: "Bruker TidyFlow AI for bildekvalitet?", a: "På støttede planer kan AI-bildeanalyse score opplastede rengjøringsbilder. Ledere tar fortsatt endelige QA-beslutninger." },
      { q: "Kan kunder få tilgang til inspeksjonsrapporter?", a: "Ja. PDF-jobbrapporter og sikre portal-lenker deler fullføringsbevis med kunder." },
      { q: "Kan jeg kreve sjekklistefullføring før innstempling?", a: "Ja. Valgfrie regler kan kreve sjekklistetrinn før jobbtimeren starter." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Tidsregistreringsprogramvare for rengjøring | GPS-innstempling | TidyFlow",
    seoDescription:
      "Tidsregistreringsprogramvare for rengjøring med jobbtimere på stedet, GPS-verifisering, geofencing, live sporing under aktive jobber og timer for lønn.",
    keywords:
      "tidsregistrering rengjøring, renhold tidsregistrering, innstemplingsapp rengjørere, GPS tidsregistrering rengjøring, TidyFlow",
    eyebrow: "Tidsregistrering",
    h1: "Tidsregistreringsprogramvare for rengjøring med GPS-verifisering",
    heroSubtitle:
      "Stemple rengjørere inn på stedet med jobbtimere, GPS-verifisering og geofencing — slik at loggede timer reflekterer ekte eiendomsbesøk, ikke estimater.",
    navLabel: "Tidsregistrering",
    problems: {
      title: "Tidsregistrering feiler når innstempling er enkel å forfalske",
      items: [
        "Rengjørere starter timeren fra parkeringsplassen på tvers av gaten.",
        "Ledere har ingen live-visning av hvem som er aktivt på en jobb.",
        "Kamerat-innstempling skjer fordi hvem som helst kan sende «jeg er her».",
        "Timer fra ett kundested flyter inn i reisetid.",
        "Bygninger med dårlig signal tvinger rengjørere til å hoppe over timeren.",
      ],
    },
    solution: {
      title: "Tidsregistrering bygget inn i rengjøringsjobben",
      paragraphs: [
        "TidyFlow tidsregistrering er per oppgave — start, pause, gjenoppta, send inn på jobbskjermen. GPS-verifisering sammenligner innstemplingsplassering med eiendommen. Ledere kan se live GPS under aktive jobber.",
        "Offline-modus køer timer og GPS-hendelser når signalet faller, og synker ved gjenoppretting — slik at kjellerrengjøring fortsatt gir verifiserbare timer.",
      ],
    },
    features: [
      {
        title: "Jobbtimer på stedet",
        description: "Enkel start/pause/send inn-flyt i rengjørerappen.",
        benefit: "Timer knyttes til eiendommen, ikke en generisk skift.",
        linkHref: "/features",
        linkLabel: "Feltapp",
      },
      {
        title: "GPS og geofencing",
        description: "Verifiser plassering ved start/fullføring; kartintegrasjon for steder.",
        benefit: "Flagg innstempling langt fra bygningen.",
        linkHref: "/integrations",
        linkLabel: "Kart og geofencing",
      },
      {
        title: "Offline GPS-kø",
        description: "Kø plasseringshendelser uten signal; synk senere.",
        benefit: "Registrer tid i tekniske rom og underjordiske garasjer.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Offline GPS",
      },
      {
        title: "Lønnsklare timer",
        description: "Godkjente timer går inn i lønnskjøringer.",
        benefit: "Lukk loopen fra innstempling til lønnsslipp.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Lønnsprogramvare",
      },
    ],
    howItWorks: {
      title: "Tildel → Ankom → Stemple inn → Arbeid → Send inn timer",
      steps: [
        { title: "Tildel", description: "Rengjører mottar dagens jobber på mobil." },
        { title: "Ankom", description: "GPS bekrefter nærhet til eiendommens geofence." },
        { title: "Stemple inn", description: "Start timer på jobben — valgfri sjekklistegate." },
        { title: "Arbeid", description: "Pause/gjenoppta etter behov; live GPS under aktive jobber." },
        { title: "Send inn", description: "Fullfør jobb; timer venter på ledergodkjenning for lønn." },
      ],
    },
    useCases: {
      title: "Tidsregistreringsscenarier",
      items: [
        { title: "Kommersielt renhold", description: "Verifiser nattskift-oppmøte på tvers av steder." },
        { title: "Boligteam", description: "Per-hjem-timere for timelønnede hjemmerengjørere." },
        { title: "Flerrengjører-jobber", description: "Hver tildelt logger tid på samme oppgave." },
        { title: "Steder med dårlig tilkobling", description: "Offline-kø bevarer timer og GPS." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow spore rengjørertimer automatisk?", a: "Ja. Jobbtimeren logger timer når rengjørere starter og sender inn oppgaver. GPS legger til plassverifisering." },
      { q: "Hva skjer hvis GPS er utilgjengelig?", a: "Hendelser køes offline og synker når signalet kommer tilbake. Ledere ser fortsatt jobbfullføringsposten." },
      { q: "Er live GPS alltid på?", a: "Live GPS-sporing gjelder under aktive jobber på støttede arbeidsflyter — ikke 24/7 overvåking." },
      { q: "Kan ledere redigere timer?", a: "Ledere godkjenner eller justerer arbeidstimer gjennom godkjenningsarbeidsflyten før lønn." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Offline rengjøringsprogramvare | Feltapp uten signal | TidyFlow",
    seoDescription:
      "Offline rengjøringsprogramvare for team i kjellere, parkeringshus og bygninger med dårlig signal — offline-sjekklister, timer, bilder og GPS-kø med autosynk.",
    keywords:
      "offline rengjøringsprogramvare, offline rengjøringsapp, rengjøringsapp uten internett, offline renholdsapp, TidyFlow",
    eyebrow: "Offline rengjøringsprogramvare",
    h1: "Offline rengjøringsprogramvare for ekte feltforhold",
    heroSubtitle:
      "Rengjørere fullfører jobber uten internett — sjekklister, jobbtimer, bilder og GPS-hendelser køes lokalt og synker automatisk når tilkoblingen kommer tilbake.",
    navLabel: "Offline rengjøring",
    problems: {
      title: "Feltapper feiler der rengjøringsarbeid faktisk skjer",
      items: [
        "Kjellere og tekniske rom blokkerer mobildata — rengjørere hopper over appen.",
        "Bilder venter til de når parkeringsplassen, og blir blandet mellom jobber.",
        "Timere stopper fordi appen krever konstant tilkobling.",
        "Ledere antar at «ingen synk» betyr «uteblitt».",
        "Konkurrenter hevder offline, men cacher bare jobblisten, ikke fullføring.",
      ],
    },
    solution: {
      title: "Full jobbfullføring offline — ikke en skrivebeskyttet cache",
      paragraphs: [
        "TidyFlow offline-modus støtter arbeidsflytene rengjørere trenger på stedet: kjør jobbtimer, fullfør sjekklister, ta bilder og kø GPS-verifiseringshendelser. Når enheten kobler til igjen, synker data til administrasjonsdashbordet.",
        "Dette er bygget for renholds- og kommersielle steder der signal faller er normalt — ikke unntak.",
      ],
    },
    features: [
      {
        title: "Offline-sjekklister",
        description: "Fullfør romoppgaver uten tilkobling.",
        benefit: "Inspeksjoner fullføres under bakken, ikke på parkeringsplassen.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspeksjonsprogramvare",
      },
      {
        title: "Offline jobbtimer",
        description: "Registrer timer på stedet; synk tidsstempler senere.",
        benefit: "Lønn får ekte jobbtid, ikke estimater.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tidsregistrering",
      },
      {
        title: "Offline bildeopptak",
        description: "Før/etter-bilder lagres lokalt til opplasting.",
        benefit: "Bevis forblir knyttet til riktig jobb.",
        linkHref: "/features",
        linkLabel: "Fotobevis",
      },
      {
        title: "Offline GPS-kø",
        description: "Plasseringshendelser køes uten signal; synk ved gjenoppretting.",
        benefit: "Verifiser oppmøte selv etter å ha forlatt en død sone.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Offline GPS-funksjon",
      },
    ],
    howItWorks: {
      title: "Last jobber → Arbeid offline → Kø data → Koble til → Synk",
      steps: [
        { title: "Last", description: "Tildelte jobber lastes ned til enheten mens den er online." },
        { title: "Arbeid offline", description: "Timer, sjekkliste og bilder kjører uten internett." },
        { title: "Kø", description: "GPS og fullføringshendelser lagres lokalt." },
        { title: "Koble til", description: "Telefonen får signal igjen når man forlater bygningen eller parkeringshuset." },
        { title: "Synk", description: "Ledere ser fullført jobb, bilder og timer i dashbordet." },
      ],
    },
    useCases: {
      title: "Offline-scenarier",
      items: [
        { title: "Kjeller- og teknisk rom-renhold", description: "Fullfør jobber med null innendørs signal." },
        { title: "Underjordisk parkeringsrengjøring", description: "GPS køes til enheten forlater garasjen." },
        { title: "Landlige eller industrielle steder", description: "Ujevn dekning blokkerer ikke lenger feltcompliance." },
        { title: "Internasjonale team", description: "Samme offline-atferd på tvers av 11 støttede språk." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow fungere uten internett?", a: "Ja. Rengjørere kan kjøre timere, sjekklister og ta bilder offline. Data synker når tilkoblingen kommer tilbake." },
      { q: "Hva synker etter gjenoppretting?", a: "Jobbfullføringsstatus, bilder, timertimer, køede GPS-hendelser og sjekklistesvar synker til serveren." },
      { q: "Må rengjørere synke manuelt?", a: "Synk kjører automatisk når enheten kobler til igjen — ingen separat opplastingssteg." },
      { q: "Er offline tilgjengelig på alle planer?", a: "Offline feltoperasjon er en kjernefunksjon i TidyFlow. Avanserte AI- og integrasjonsfunksjoner varierer etter plan — se Priser." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Programvare for rengjøringsbedrift | Driv og voks drift | TidyFlow",
    seoDescription:
      "Programvare for rengjøringsbedrift for eiere som vokser fra solooperatør til flerteam — planlegging, fakturering, lønn, kundebevis og Revenue AI-innsikt.",
    keywords:
      "programvare rengjøringsbedrift, app liten rengjøringsbedrift, vokse rengjøringsfirma programvare, oppstartsprogramvare rengjøring, TidyFlow",
    eyebrow: "Programvare for rengjøringsbedrift",
    h1: "Programvare for rengjøringsbedrift som skalerer med selskapet ditt",
    heroSubtitle:
      "Start med planlegging og feltbevis, legg deretter til lønn, kundefakturering og eierdashbord etter hvert som du vokser — én plattform i stedet for å sy sammen verktøy.",
    navLabel: "Rengjøringsbedrift",
    problems: {
      title: "Små rengjøringsbedrifter vokser ut av de første verktøyene raskt",
      items: [
        "Du starter med en kalenderapp, legger til lønnsprogramvare, deretter bilde-mapper — ingenting kobles sammen.",
        "Flere kontrakter betyr flere admin-timer, ikke mer fortjeneste.",
        "Du kan ikke si hvilke kunder som er lønnsomme uten å eksportere regneark.",
        "Å ansette din første leder dupliserer arbeid fordi det ikke finnes et delt driftssystem.",
        "Prøveverktøy tar betalt per sete på måter som straffer voksende team.",
      ],
    },
    solution: {
      title: "Voks drift på én plattform for rengjøringsbedrift",
      paragraphs: [
        "TidyFlow-planer skalerer fra oppstartsteam til større staber med bruksbaserte eiendomsgrenser. Eiere administrerer abonnement og fakturering i appen. Planlegging, feltbevis, lønn og kundefakturering lever sammen.",
        "Revenue AI på støttede planer fremhever risiko og muligheter på eierdashbordet — slik at vekstbeslutninger bruker driftsdata, ikke magefølelse.",
      ],
    },
    features: [
      {
        title: "Planer fra $25/måned",
        description: "Oppstartsplan for mindre team; oppgrader etter hvert som eiendommer og rengjørere vokser.",
        benefit: "Start uten enterprise-kontrakter.",
        linkHref: "/pricing",
        linkLabel: "Se priser",
      },
      {
        title: "Selvbetjent fakturering",
        description: "Prøveperiode, oppgradering og abonnementsadministrasjon i appen.",
        benefit: "Eiere kontrollerer kostnader uten å ringe salg.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Faktureringsfunksjoner",
      },
      {
        title: "Kundefakturering og QuickBooks",
        description: "Fakturer fra jobber; synk til QuickBooks Online.",
        benefit: "Finans forblir på linje når du legger til kunder.",
        linkHref: "/integrations",
        linkLabel: "Integrasjoner",
      },
      {
        title: "Revenue AI-dashbord",
        description: "Eierinnsikt på støttede planer.",
        benefit: "Se hvilke kontrakter som trenger oppmerksomhet tidlig.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Start → Drift → Bevis → Fakturer → Voks",
      steps: [
        { title: "Start", description: "14-dagers prøveperiode — sett opp eiendommer og inviter de første rengjørerne." },
        { title: "Drift", description: "Planlegg jobber og kjør feltarbeid med GPS og bilder." },
        { title: "Bevis", description: "Send kundebevis når du vinner større kontrakter." },
        { title: "Fakturer", description: "Fakturer kunder og kjør lønn fra verifiserte timer." },
        { title: "Voks", description: "Oppgrader plangrenser og bruk eierdashbord for beslutninger." },
      ],
    },
    useCases: {
      title: "Forretningsfaser",
      items: [
        { title: "Solooperatør som blir flerrengjører", description: "Erstatt personlige kalendere med delt planlegging." },
        { title: "Lokalt selskap som vinner kommersielle anbud", description: "Kundebevis og QC for facility-kontrakter." },
        { title: "Regional rengjøringsmerkevare", description: "Flersteds-grenser, roller og integrasjoner." },
        { title: "Eier-operatør med alle hatter", description: "Én innlogging for plan, lønn og fakturering." },
      ],
    },
    faqs: [
      { q: "Hva er programvare for rengjøringsbedrift?", a: "Programvare som hjelper eiere med å kjøre planlegging, team, feltarbeid, kundefakturering og lønn for et rengjøringsfirma — typisk erstatter regneark etter hvert som du vokser." },
      { q: "Hva koster TidyFlow?", a: "Planer starter på $25/måned for Startup. Standard og Premium legger til flere eiendommer, rengjørere og funksjoner som Google Sheets og QuickBooks-synk." },
      { q: "Finnes det gratis prøveperiode?", a: "Ja. Alle planer inkluderer 14-dagers gratis prøveperiode med selvbetjent registrering." },
      { q: "Kan jeg oppgradere etter hvert som bedriften vokser?", a: "Ja. Bytt plan i appen når eiendoms- og teamgrenser øker." },
    ],
  },
};
