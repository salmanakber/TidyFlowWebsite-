import type { ChapterTranslation } from "../docTranslations";

export const svChapters: Record<string, ChapterTranslation> = {
  "ch-1": {
    title: "Vad är TidyFlow?",
    category: "Overview",
    content: "TidyFlow är en enhetlig operationsplattform designad specifikt för bostads- och kommersiella städföretag och fastighetsförvaltning. Den fungerar som den centrala motorn som koordinerar aktiviteter mellan företagsägare, externa operationschefer och städare i fält. Genom att ersätta fragmenterade och föråldrade verktyg som papperschecklistor, ostrukturerade WhatsApp-trådar och separata löneark, konsoliderar TidyFlow schemaläggning, platsverifiering, kundfakturering och teamanalys i en enda, säker, offline-först databasplattform."
  },
  "ch-2": {
    title: "Komma igång",
    category: "Overview",
    content: "För att starta verksamheten kan företagsadministratörer registrera sig i TidyFlow-portalen och etablera sin företagsregistrering. Vid första installationen upplever anställda en interaktiv onboarding-tur som förklarar huvudmodulerna. När den är aktiverad vägleds ägare att sätta upp säkra betalningsprofiler via Stripe. Därifrån kan ägare bjuda in personal genom att gå till 'Användare' i sidomenyn, mata in anställdas namn, e-post och rollkategorier (Chefer eller Städare) för att skicka inloggningsuppgifter omedelbart."
  },
  "ch-3": {
    title: "Förstå din roll",
    category: "Overview",
    content: "TidyFlow tillämpar stränga rollbaserade åtkomstkontroller för att säkerställa dataisolering och säkerhet. Ägare/Administratörer övervakar abonnemangsplaner, valutaformat, kundfaktureringsinställningar, huvudlänkar för Google Sheets och finansrapporter för hela företaget. Chefer fokuserar på att planera skiftscheman, lösa fastighetsproblem och validera inlämnade tidrapporter. Städare arbetar under en förenklad mobil layout designad uteslutande för att registrera timmar, slutföra checklisteuppgifter rum för rum, ladda upp före/efter-bilder och skicka SOS-panikalarm."
  },
  "ch-4": {
    title: "Navigera i appen",
    category: "Overview",
    content: "Vänster sidopanelsmeny fungerar som appens navigationskompass. Att klicka på menyknappen (☰) öppnar rutter till: Hem (rollskräddarsydd dashboard), Uppgifter (kategoriserade kalenderlistor), Kalender, Fastigheter, Arbetsschema, Användare, Frånvaroförfrågningar, Löner, Kundfakturor, Förnödenheter och Inställningar. Mobila användare kan också utlösa interaktiva turer på vilken skärm som helst genom genvägen 'Hjälp och Tur' i sidomenyfootern."
  },
  "ch-5": {
    title: "Google Sheets — anslut och synkronisera",
    category: "Core Features",
    content: "Anslut ditt företags kalkylblad för att aktivera tvåvägs realtidssynkronisering. Steg 1: Öppna 'Fastigheter' och välj 'Google Sheets-synkronisering'. Steg 2: Klistra in URL:en för ditt huvudark. Steg 3: Kopiera den unika e-postadressen för vårt servicekonto (t.ex. sync@project.iam.gserviceaccount.com) och ge den redigeringsbehörigheter i Google Sheets. Steg 4: Klicka 'Synkronisera nu'. Systemet läser flikarna 'Properties' och 'Tasks' och synkroniserar redigeringar omedelbart åt båda hållen. Alla städartilldelningar, statusslutföranden och arbetade timmar kommer direkt tillbaka till raderna i ditt huvudark."
  },
  "ch-6": {
    title: "Fastigheter",
    category: "Core Features",
    content: "Fastighetsregistret är TidyFlows strukturella grund. Beläget i Sidopanel → Fastigheter, rymmer det en katalog över alla serviceadresser, postnummer, fastighetstyper (lägenheter, bostäder, kommersiella), enhetsantal och standardservicetaxor. Att klicka på vilken fastighet som helst visar uppgiftshistorik, aktiva återkommande mallar, GPS-koordinater på kartan och snabba genvägar för att planera nya engångsuppgifter."
  },
  "ch-7": {
    title: "Uppgifter",
    category: "Core Features",
    content: "Uppgifter representerar individuella, fakturerbara arbetssessioner. Chefer skapar uppgifter genom att välja en fastighet, tilldela planerade datum och tider, mata in detaljerade beskrivningar och allokera motsvarande städare. Detaljerade checklistor kan skapas manuellt eller genereras automatiskt genom AI-förslag. Uppgiftens livscykel fortskrider i ordning: Planerad → Tilldelad → Pågående (aktiv timer) → Inskickad (arbete slutfört) → Godkänd (verifierad av chef) → Slutförd (fakturerad)."
  },
  "ch-8": {
    title: "Guide för städare",
    category: "Role Guides",
    content: "Städare får tillgång till TidyFlow på sina smartphones, där de möts av ett förenklat och mycket fokuserat dagligt schema. De klickar på den tilldelade uppgiften för att inspektera checklistpunkter, komma åt operativa anteckningar och starta arbetstimer. Genom att klicka 'Starta arbetssession' registrerar appen exakt tid via GPS, vilket gör det möjligt att markera checklistor för varje rum, ta före/efter-bilder och klicka 'Skicka in arbete' för omedelbar sändning till chefsgodkännande."
  },
  "ch-9": {
    title: "Guide för chefer",
    category: "Role Guides",
    content: "Chefer får tillgång till en dedikerad desktop webbläsardashboard eller en mobil koordinator-app. Hemskärmen framhäver dagens icke-tilldelade uppgifter, väntande tidrapporter och öppna problem. Chefer kan snabbt inspektera inskickade uppgifter, granska före- och efter-bilder uppladdade av anställda, jämföra register och godkänna eller avslå sessioner för att automatiskt skicka timmar till aktiva löneperioder."
  },
  "ch-10": {
    title: "Guide för ägare",
    category: "Role Guides",
    content: "Ägare har maximal auktoritet över företagskonton. Vid inloggning får de tillgång till faktureringsinställningar, hanterar Stripe-prenumerationer, anpassar företagets visuella identitet (logotype, bankdetaljer, fakturarubriker) och granskar fleranvändarloggar. Ägare har också tillgång till detaljerade analytiska rapporter som övervakar intäkter, aktiva teamplatser och AI-genererade operativa insikter."
  },
  "ch-11": {
    title: "Schema och planering",
    category: "Core Features",
    content: "Skiftschemaläggning koordineras i Sidopanel → Arbetsschema. Det presenterar en rutnätslayout som kartlägger fastigheter mot städare för veckan. Disponenter drar, släpper och trycker på block för att tilldela uppgifter. TidyFlow kontrollerar automatiskt semesterblockering och förhindrar att chefer schemalägger städare på ledighet av misstag. Systemet analyserar också koordinater för att föreslå optimerade rutter, vilket minskar transportkostnader."
  },
  "ch-12": {
    title: "Återkommande jobb",
    category: "Core Features",
    content: "Undvik att schemalägga periodiska städningar manuellt. Inom vilket fastighetsfönster som helst kan chefer etablera återkommande scheman (t.ex. veckovisa eller varannan vecka kommersiella städningar). Panelen tillåter definition av anpassade upprepningsperioder, veckodagar och slutdatum. När mallen är sparad schemalägger och skickar TidyFlow automatiskt uppgifter när datum närmar sig, vilket säkerställer full kalender täckning."
  },
  "ch-13": {
    title: "Foton, PDF och kundbevis",
    category: "Core Features",
    content: "Dokumentera städkvalitet visuellt för att skydda ditt företag mot kundklagomål. Städare laddar upp bilder tagna på plats. Chefer granskar bilderna i inskickade uppgifter och kan omedelbart kompilera märkesproducerade PDF-rapporter för kunder. Alternativt kan de generera säkra portallänkar för kunder att granska slutförandechecklistor och bilder direkt från sina webbläsare."
  },
  "ch-14": {
    title: "Löner och timmar",
    category: "Core Features",
    content: "Förenkla löneberäkning. När städare skickar in sina aktiva uppgiftstimers kommer registrerade timmar in i Löner → Väntande Timmar. Chefer granskar förfluten tid, gör justeringar vid behov och godkänner. När det är godkänt kompilerar systemet löner baserat på anpassade timtaxor, övertid eller fast avgiftsprofiler per användare, vilket möjliggör export av PDF-lönespecifikationer för utskrift."
  },
  "ch-15": {
    title: "Kundfakturor",
    category: "Core Features",
    content: "Debitera kunder direkt för slutförda städningar. I Sidopanel → Fakturor väljer chefer godkända uppgifter för att generera automatiska kundfakturor. Finansmodulerna extraherar standardservicetaxor för fastigheten eller specifika uppgiftsbudgetar och infogar dem i företagsmallar. Systemet tillåter märkning av fakturor som skickade, väntande eller betalda, vilket uppdaterar företagets finansiella hälsa."
  },
  "ch-16": {
    title: "Ledighetsförfrågningar",
    category: "Core Features",
    content: "Städare skickar in sjukskrivnings- och semesterförfrågningar direkt i menyn Sidopanel → Frånvaro. Skärmen registrerar frånvaroperioder och beskrivningar, skickar meddelanden till koordinatorer. Chefer godkänner eller avslår ledighetsregister i Rutt/Frånvaro-menyn. När förfrågan är godkänd blockerar TidyFlow automatiskt datumen i arbetsschemat för att undvika schemaläggningsfel."
  },
  "ch-17": {
    title: "Ärenden och säkerhet (SOS)",
    category: "Core Features",
    content: "Säkerheten för fältarbetare är högsta prioritet. Städare har tillgång till en klarröd SOS-panikknapp permanent på den aktiva uppgiftsskärmen. Att trycka på SOS-knappen skickar omedelbart GPS-position i realtid till operationsservrar och utlöser blinkande röda varningar med hög prioritet på dashboards för alla aktiva chefer, med en nödresponslinje."
  },
  "ch-18": {
    title: "Förbrukningsmaterial",
    category: "Advanced",
    content: "Håll koll på produktlager genom vår integrerade tracker (Sidopanel → Förnödenheter). Chefer registrerar rengöringsprodukter, verktyg och förbrukningsmaterial, ställer in påfyllningsgränser. Under besök matar städare in använda material (t.ex. soppåsar, pappershanddukar) i uppgiftskortet. Om nivåer faller under säkra gränser varnar automatiska aviseringar ledningen."
  },
  "ch-19": {
    title: "TidyFlow AI",
    category: "Advanced",
    content: "Optimera affärsbeslut genom att använda AI-förslag baserade på Gemini (säker server). AI:n hjälper chefer under sändning genom att föreslå den mest lämpliga professionella baserat på plats, tillgänglighet och tidigare prestationsbetyg. Dessutom analyserar modeller efter-städning bilder inskickade av anställda för att klassificera kvaliteten på den utförda tjänsten."
  },
  "ch-20": {
    title: "Offlineläge",
    category: "Advanced",
    content: "Fältprofessionella arbetar ofta i källare eller områden med instabil signal. TidyFlow är offline-först av design. Städare kan fylla i checklistor, starta eller pausa timers, registrera problem och ta före/efter-bilder helt frånkopplade. Appen köar ändringar lokalt och synkroniserar allt med servrar så snart den upptäcker internetåterkomst."
  },
  "ch-21": {
    title: "Inställningar och behörigheter",
    category: "Advanced",
    content: "Konfigurera individuella meddelanden, bakgrundsplatstjänster och cache-synkroniseringsinställningar i Sidopanel → Inställningar. Städare måste aktivera platsbehörigheter för att registrera GPS-närvaro och kamerabehörighet för att dokumentera arbete. Ägare definierar faktureringsvalutor (t.ex. € EUR, $ USD, kr SEK) och PDF-exportmallar."
  },
  "ch-22": {
    title: "Uppgiftsstatusar förklarade",
    category: "Advanced",
    content: "TidyFlow guidar uppgifter genom en strukturerad produktionslinje: Planerad (skapad, inget definierat team), Tilldelad (team definierat, väntar på start), Pågående (aktiv städare på plats, timer räknar), Inskickad (slutförd av professionell, väntar på kvalitetskontrollgranskning), QA-granskning (i visuell analys), Godkänd (validerad av chef, redo för faktura), Slutförd (fullt betald och arkiverad)."
  },
  "ch-23": {
    title: "Felsökning och FAQ",
    category: "Support",
    content: "Om Google Sheets misslyckas med synkronisering, kontrollera om du har delat redigeringsåtkomst med servicekontos e-post och om flikarnas namn är exakt 'Properties' och 'Tasks'. Om bakgrundsspårning misslyckas, kontrollera om GPS är aktiv på din telefon i inställningarna. Om det finns bilder i synkroniseringskön, bekräfta din internetanslutning."
  }
};