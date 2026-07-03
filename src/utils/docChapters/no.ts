import type { ChapterTranslation } from "../docTranslations";

export const noChapters: Record<string, ChapterTranslation> = {
  "ch-1": {
    title: "Hva er TidyFlow?",
    category: "Overview",
    content: "TidyFlow er en enhetlig operasjonsplattform designet spesielt for bolig- og kommersielle rengjøringsfirmaer og anleggsforvaltning. Den fungerer som den sentrale motoren som koordinerer aktiviteter mellom bedriftseiere, eksterne operasjonsledere og rengjørere i felten. Ved å erstatte fragmenterte og utdaterte verktøy som papirsjekklister, ustrukturerte WhatsApp-tråder og separate lønnsark, konsoliderer TidyFlow planlegging, stedsverifisering, kundefakturering og teamanalyse i en enkelt, sikker, offline-første databaseplattform."
  },
  "ch-2": {
    title: "Komme i gang",
    category: "Overview",
    content: "For å starte driften kan bedriftsadministratorer registrere seg i TidyFlow-portalen og etablere sin forretningsregistrering. Ved første installasjon opplever ansatte en interaktiv onboarding-tur som forklarer hovedmodulene. Når den er aktivert, veileder eiere til å sette opp sikre betalingsprofiler via Stripe. Derfra kan eiere invitere personale ved å gå til 'Brukere' i sidemenyen, legge inn ansattes navn, e-post og rollekategorier (Ledere eller Rengjørere) for å sende påloggingsopplysninger øyeblikkelig."
  },
  "ch-3": {
    title: "Forstå din rolle",
    category: "Overview",
    content: "TidyFlow anvender strenge rollebaserte tilgangskontroller for å sikre dataisolasjon og sikkerhet. Eiere/Administratorer overvåker abonnementsplaner, valutaformater, kundefaktureringsinnstillinger, hovedlenker til Google Sheets og finansrapporter for hele selskapet. Ledere fokuserer på å planlegge skiftvakter, løse eiendomsproblemer og validere innsendte timelister. Rengjørere opererer under et forenklet mobillayout designet utelukkende for å registrere timer, fullføre sjekklisteoppgaver rom for rom, laste opp før/etter-bilder og sende SOS-panikkalarm."
  },
  "ch-4": {
    title: "Navigere i appen",
    category: "Overview",
    content: "Menyen til venstre sidepanel fungerer som appens navigasjonskompass. Å klikke på menyknappen (☰) åpner ruter til: Hjem (rolletilpasset dashboard), Oppgaver (kategoriserte kalenderlister), Kalender, Eiendommer, Arbeidsskjema, Brukere, Fraværsforespørsler, Lønn, Kundefakturaer, Forsyninger og Innstillinger. Mobile brukere kan også utløse interaktive turer på hvilken som helst skjerm gjennom 'Hjelp og Tur'-snarveien i bunnteksten til sidemenyen."
  },
  "ch-5": {
    title: "Google Sheets — koble til og synkronisere",
    category: "Core Features",
    content: "Koble til bedriftens regneark for å aktivere toveis sanntidssynkronisering. Trinn 1: Åpne 'Eiendommer' og velg 'Google Sheets-synkronisering'. Trinn 2: Lim inn URL-en til hovedarket ditt. Trinn 3: Kopier den unike e-postadressen til vår tjenestekonto (f.eks. sync@project.iam.gserviceaccount.com) og gi den redigeringstillatelser i Google Sheets. Trinn 4: Klikk 'Synkroniser nå'. Systemet leser 'Properties' og 'Tasks' faner og synkroniserer endringer øyeblikkelig i begge retninger. Alle rengjørertildelinger, statusfullføringer og arbeidstimer kommer direkte tilbake til radene i hovedarket ditt."
  },
  "ch-6": {
    title: "Eiendommer",
    category: "Core Features",
    content: "Eiendomsregisteret er TidyFlows strukturelle grunnlag. Plassert i Sidepanel → Eiendommer, huser det en katalog over alle serviceadresser, postnumre, eiendomstyper (leiligheter, boliger, kommersielle), enhetsantall og standard servicetakster. Å klikke på enhver eiendom viser oppgavehistorikk, aktive gjentakende maler, GPS-koordinater på kartet og raske snarveier for å planlegge nye engangsoppgaver."
  },
  "ch-7": {
    title: "Oppgaver",
    category: "Core Features",
    content: "Oppgaver representerer individuelle, fakturerbare arbeidsøkter. Ledere lager oppgaver ved å velge en eiendom, tildele planlagte datoer og tider, legge inn detaljerte beskrivelser og allokere tilsvarende rengjørere. Detaljerte sjekklister kan lages manuelt eller genereres automatisk gjennom AI-forslag. Oppgavens livssyklus går frem i rekkefølge: Planlagt → Tildelt → Pågående (aktiv timer) → Sendt inn (arbeid fullført) → Godkjent (verifisert av leder) → Fullført (fakturert)."
  },
  "ch-8": {
    title: "Veiledning for rengjørere",
    category: "Role Guides",
    content: "Rengjørere får tilgang til TidyFlow på sine smarttelefoner, hvor de møtes av en forenklet og svært fokusert daglig tidsplan. De klikker på den tildelte oppgaven for å inspisere sjekklistepoeng, få tilgang til operasjonelle notater og starte arbeidsur. Ved å klikke 'Start arbeidsøkt' registrerer appen nøyaktig tid via GPS, slik at de kan merke av sjekklistene for hvert rom, ta før/etter-bilder og klikke 'Send inn arbeid' for umiddelbar forsendelse til ledergodkjenning."
  },
  "ch-9": {
    title: "Veiledning for ledere",
    category: "Role Guides",
    content: "Ledere får tilgang til et dedikert desktop browser-dashboard eller en mobil koordinator-app. Hjemmeskjermen fremhever dagens ikke-tildelte oppgaver, ventende timelister og åpne problemer. Ledere kan raskt inspisere innsendte oppgaver, gjennomgå før- og etter-bilder lastet opp av ansatte, sammenligne poster og godkjenne eller avslå økter for å automatisk sende timer til aktive lønnsperioder."
  },
  "ch-10": {
    title: "Veiledning for eiere",
    category: "Role Guides",
    content: "Eiere har maksimal myndighet over bedriftskontoer. Ved pålogging får de tilgang til faktureringsinnstillinger, administrerer Stripe-abonnementer, tilpasser bedriftens visuelle identitet (logo, bankdetaljer, regningsoverskrifter) og reviderer flerbrukerlogger. Eiere har også tilgang til detaljerte analytiske rapporter som overvåker inntekter, aktive teamplasser og AI-genererte operasjonelle innsikter."
  },
  "ch-11": {
    title: "Rota og planlegging",
    category: "Core Features",
    content: "Skiftplanlegging koordineres i Sidepanel → Arbeidsskjema. Det presenterer et rutenettlayout som kartlegger eiendommer mot rengjørere for uken. Disponenter drar, slipper og trykker på blokker for å tildele oppgaver. TidyFlow sjekker automatisk ferieblokkeringer og forhindrer at ledere planlegger rengjørere på permisjon ved et uhell. Systemet analyserer også koordinater for å foreslå optimaliserte ruter, noe som reduserer transportkostnader."
  },
  "ch-12": {
    title: "Gjentakende jobber",
    category: "Core Features",
    content: "Unngå å planlegge periodiske rengjøringer manuelt. Innenfor ethvert eiendomsvindu kan ledere etablere gjentakende tidsplaner (f.eks. ukentlige eller to-ukentlige kommersielle rengjøringer). Panelet tillater definering av tilpassede gjentagelsesperioder, ukedager og sluttdatoer. Når malen er lagret, planlegger og sender TidyFlow automatisk oppgaver etter hvert som datoene nærmer seg, noe som sikrer full kalenderdekning."
  },
  "ch-13": {
    title: "Bilder, PDF og kundedokumentasjon",
    category: "Core Features",
    content: "Dokumenter rengjøringskvalitet visuelt for å beskytte virksomheten din mot kundeklager. Rengjørere laster opp bilder tatt på stedet. Ledere gjennomgår bildene i innsendte oppgaver og kan umiddelbart kompilere merkevarefremstilte PDF-rapporter for kunder. Alternativt kan de generere sikre portallenker for kunder til å gjennomgå fullføringssjekklister og bilder direkte fra deres nettlesere."
  },
  "ch-14": {
    title: "Lønn og timer",
    category: "Core Features",
    content: "Forenkle lønnsberegning. Når rengjørere sender inn sine aktive oppgaveurur, kommer registrerte timer inn i Lønn → Ventende Timer. Ledere gjennomgår forløpt tid, gjør justeringer om nødvendig og godkjenner. Når godkjent, kompilerer systemet lønn basert på tilpassede timesatser, overtid eller fast satsavgiftsprofiler per bruker, slik at eksport av PDF-lønnsslipper for utskrift er mulig."
  },
  "ch-15": {
    title: "Kundefakturaer",
    category: "Core Features",
    content: "Belast kunder direkte for fullførte rengjøringer. I Sidepanel → Fakturaer velger ledere godkjente oppgaver for å generere automatiske kundefakturaer. Finansmodulene trekker ut standard servicetakster for eiendommen eller spesifikke oppgavebudsjetter og setter dem inn i bedriftsmaler. Systemet tillater merking av fakturaer som sendt, ventende eller betalt, og oppdaterer selskapets finansielle helse."
  },
  "ch-16": {
    title: "Permisjonsforespørsler",
    category: "Core Features",
    content: "Rengjørere sender inn sykemeldings- og ferieforespørsler direkte i menyen Sidepanel → Fravær. Skjermen registrerer fraværsdatoer og beskrivelser, og sender varsler til koordinatorer. Ledere godkjenner eller avslår permisjonsregister i Rute/Fravær-menyen. Når forespørselen er godkjent, blokkerer TidyFlow automatisk datoene i arbeidsskjemaet for å unngå planleggingsfeil."
  },
  "ch-17": {
    title: "Hendelser og sikkerhet (SOS)",
    category: "Core Features",
    content: "Sikkerhet for feltarbeidere er topp prioritet. Rengjørere har tilgang til en lys rød SOS-panikknapp permanent på den aktive oppgaveskjermen. Å trykke på SOS-knappen sender øyeblikkelig GPS-posisjon i sanntid til operasjonsservere og utløser blinkende røde varsler med høy prioritet på dashboardene til alle aktive ledere, med en nødresponslinje."
  },
  "ch-18": {
    title: "Forbruksvarer",
    category: "Advanced",
    content: "Hold oversikt over produktbeholdning gjennom vår integrerte tracker (Sidepanel → Forsyninger). Ledere registrerer rengjøringsprodukter, verktøy og forbruksvarer, og setter opp påfyllingsgrenser. Under besøk legger rengjørere inn brukte materialer (f.eks. søppelposer, papirhåndklær) i oppgavekortet. Hvis nivåer faller under sikre grenser, varsler automatiske advarsler ledelsen."
  },
  "ch-19": {
    title: "TidyFlow AI",
    category: "Advanced",
    content: "Optimaliser forretningsbeslutninger ved hjelp av AI-forslag basert på Gemini (sikker server). AI-en hjelper ledere under forsendelse ved å foreslå den mest passende fagpersonen basert på lokalisering, tilgjengelighet og tidligere ytelsesbetyringer. I tillegg analyserer modeller bilder etter rengjøring sendt inn av ansatte for å klassifisere kvaliteten på den utførte tjenesten."
  },
  "ch-20": {
    title: "Frakoblet modus",
    category: "Advanced",
    content: "Feltprofesjonelle opererer ofte i kjellere eller områder med ustabilt signal. TidyFlow er offline-først av design. Rengjørere kan fylle ut sjekklister, starte eller pause timere, registrere problemer og ta før/etter-bilder helt frakoblet. Appen køer endringer lokalt og synkroniserer alt med servere så snart den oppdager internettretur."
  },
  "ch-21": {
    title: "Innstillinger og tillatelser",
    category: "Advanced",
    content: "Konfigurer individuelle varsler, bakgrunnslokasjonstjenester og cache-synkroniseringsinnstillinger i Sidepanel → Innstillinger. Rengjørere må aktivere plasseringstillatelser for å registrere GPS-tilstedeværelse og kameratillatelse for å dokumentere arbeid. Eiere definerer faktureringsvalutaer (f.eks. € EUR, $ USD, kr NOK) og PDF-eksportmaler."
  },
  "ch-22": {
    title: "Oppgavestatuser forklart",
    category: "Advanced",
    content: "TidyFlow fører oppgaver gjennom en strukturert produksjonslinje: Planlagt (opprettet, intet definert team), Tildelt (team definert, venter på start), Pågående (aktiv rengjører på stedet, timer teller), Sendt inn (fullført av fagperson, venter på kvalitetskontrollgjennomgang), QA-gjennomgang (i visuell analyse), Godkjent (validert av leder, klar for faktura), Fullført (fullt betalt og arkivert)."
  },
  "ch-23": {
    title: "Feilsøking og FAQ",
    category: "Support",
    content: "Hvis Google Sheets mislykkes i synkronisering, sjekk om du har delt redigeringstilgang med tjenestekontoens e-post og om fanenes navn er nøyaktig 'Properties' og 'Tasks'. Hvis bakgrunnssporing mislykkes, sjekk om GPS er aktiv på telefonen din i innstillingene. Hvis det er bilder i synkroniseringskøen, bekreft internetttilkoblingen din."
  }
};