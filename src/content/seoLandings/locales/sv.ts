import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_SV: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Programvara för städföretag | Schemalägg, spåra och betala team | TidyFlow",
    seoDescription:
      "TidyFlow är programvara för städföretag för schemaläggning av jobb, GPS-verifierat fältarbete, fotobevis, löner från verifierade timmar och kundrapporter — online eller offline.",
    keywords:
      "programvara städföretag, plattform städföretag, driftprogramvara städ, fältapp städ, dispatch-programvara städ, TidyFlow",
    eyebrow: "Programvara för städföretag",
    h1: "Operativsystemet för städföretag",
    heroSubtitle:
      "TidyFlow kopplar ägare, chefer och städare på en plattform — schemalägg återkommande jobb, verifiera arbete på plats med GPS och foton, kör löner från loggade timmar och skicka bevis till kunder.",
    navLabel: "Programvara för städföretag",
    problems: {
      title: "Det som går sönder när du driver ett städföretag med kalkylblad och gruppchattar",
      items: [
        "Återkommande kontrakt ligger i ett ark, städares tillgänglighet i ett annat och kundklagomål på WhatsApp.",
        "Chefer ser inte om ett team faktiskt startade ett jobb eller bara körde förbi byggnaden.",
        "Lönetvister börjar eftersom timmar skrevs från minnet i stället för verifierades på plats.",
        "Kunder ber om arbetsbevis och du letar efter foton begravda i kamerarullar.",
        "Fältteam tappar signal i källare, parkeringshus och teknikrum — och kan inte slutföra jobbet i appen.",
      ],
    },
    solution: {
      title: "En plattform från schema till bevis till lön",
      paragraphs: [
        "TidyFlow är byggt specifikt för städföretags drift — inte generell fältservice. Ägare får intäktsöversikt och abonnemangskontroll. Chefer bygger scheman, tilldelar städare och granskar GPS-verifierade slutföranden. Städare får en enkel mobil jobblista med offline-checklistor, timers och bilduppladdning.",
        "När ett jobb slutförs går timmar in i löneprocesser, foton kan generera PDF-kundrapporter och chefer behåller ett revisionsspår utan att jaga meddelanden i fem appar.",
      ],
    },
    features: [
      {
        title: "Jobbschemaläggning och återkommande kontrakt",
        description: "Kalender, schemabyggare och återkommande fastighetsbesök med ledighetsmedveten tilldelning.",
        benefit: "Sluta bygga om veckan i kalkylblad varje söndagskväll.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Schemaläggningsprogramvara för städ",
      },
      {
        title: "GPS-verifierad fältspårning",
        description: "Plats kontrolleras vid start och slutförande; live GPS under aktiva jobb i stödda arbetsflöden.",
        benefit: "Vet vilka platser som faktiskt betjänades — inte bara påståtts.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tidsregistrering för städare",
      },
      {
        title: "Löner från verifierade timmar",
        description: "Uppgiftstimers, godkännande av arbetstimmar och lönekörningar från loggad jobbtid.",
        benefit: "Minska tvister med timmar kopplade till slutfört arbete.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Löneprogramvara för städ",
      },
      {
        title: "Offline fältoperationer",
        description: "Fullständigt jobbslutförande utan internet — checklistor, timer, foton i kö och synk senare.",
        benefit: "Städare slutför jobb i byggnader med dålig signal i stället för att ringa kontoret.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline städapp",
      },
    ],
    howItWorks: {
      title: "Schemalägg → Tilldela → Spåra → Verifiera → Rapportera",
      steps: [
        { title: "Schemalägg", description: "Skapa engångs- eller återkommande jobb från webb eller mobil. Synka med Google Sheets om teamet fortfarande underhåller ett huvudschema i kalkylblad." },
        { title: "Tilldela", description: "Dra städare till schemat. AI kan föreslå bäst passande person baserat på historik, plats och ledighet — chef bekräftar alltid." },
        { title: "Spåra", description: "Städare startar jobbtimern på plats. GPS-verifiering flaggar starter och slutföranden bort från fastigheten." },
        { title: "Verifiera", description: "Checklistor, före/efter-foton och valfri AI-bildbedömning ger chefer kvalitetsbevis." },
        { title: "Rapportera", description: "Generera PDF-jobbrapport eller dela en kundportal-länk. Timmar går in i lön och faktureringsprocesser." },
      ],
    },
    useCases: {
      title: "Städföretag som kör på TidyFlow",
      items: [
        { title: "Kommersiell och kontraktsstäd", description: "Flerstads-kontrakt med återkommande besök, kundbevis och chef-QA-arbetsflöden." },
        { title: "Städ- och facility-team", description: "Nattskift, teknikrum och byggnader där signalen faller — offlineläge håller teamet i rörelse." },
        { title: "Växande lokala företag", description: "Ersätt kalkylbladskaos när du lägger till fastigheter och städare utan att anställa en driftsadministratör först." },
        { title: "Flerspråkiga team", description: "Plattform tillgänglig på 11 språk för ägare, chefer och fältpersonal." },
      ],
    },
    faqs: [
      { q: "Vad är programvara för städföretag?", a: "Det är programvara som hjälper städföretag schemalägga jobb, hantera städare, spåra fältarbete, verifiera kvalitet och köra lön eller kundfakturering från ett system i stället för kalkylblad och meddelandeappar." },
      { q: "Är TidyFlow bara för stora företag?", a: "Nej. Planer börjar på $25/månad för mindre team. Du kan köra schemaläggning, fältspårning och bevis på en växande personalstyrka utan enterprise-uppsättning." },
      { q: "Fungerar TidyFlow offline?", a: "Ja. Städare kan slutföra checklistor, köra jobbtimern och ta foton offline. Data synkas när anslutningen återkommer." },
      { q: "Kan jag fortsätta använda Google Sheets?", a: "Ja. TidyFlow erbjuder tvåvägs Google Sheets-synk så att du kan behålla en kalkylbladshuvudlista medan appen hanterar fältutförande." },
      { q: "Hur kommer jag igång?", a: "Starta en 14 dagars gratis provperiod från prissidan. Ägare sätter upp fastigheter, bjuder in städare och tilldelar de första jobben från webb eller mobil." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Städadministrationsprogramvara | Driftskontroll | TidyFlow",
    seoDescription:
      "Städadministrationsprogramvara för ägare och driftschefer — scheman, live jobbstatus, teamledighet, problemspårning, lönegodkännande och kundbevis i en instrumentpanel.",
    keywords:
      "städadministrationsprogramvara, städdrift plattform, städadministrationssystem, städföretagsadministration, TidyFlow",
    eyebrow: "Städadministrationsprogramvara",
    h1: "Kör städdrift från en administrationsinstrumentpanel",
    heroSubtitle:
      "Ge chefer synlighet i scheman, fältslutföranden, kvalitetskontroller och lönegodkännanden — utan att jaga städare på WhatsApp eller bygga om scheman i kalkylblad.",
    navLabel: "Städadministration",
    problems: {
      title: "Varför städdrift faller isär i skala",
      items: [
        "Ägaren är den enda som vet vilken kund som är underbemannad på torsdag.",
        "Chefer skriver in samma återkommande jobb varje vecka eftersom inget automatiserar kontraktsbesök.",
        "Kvalitetsklagomål kommer innan någon granskar foton eller checklistresultat från jobbet.",
        "Ledighetsförfrågningar ligger i meddelanden och schemat publiceras med kända konflikter.",
        "Lönegodkännande innebär att jämföra handskrivna tidrapporter med minnet.",
      ],
    },
    solution: {
      title: "Administrationsverktyg kopplade till verklig fältdata",
      paragraphs: [
        "TidyFlow administrationsprogramvara kopplar schemaläggning, team-HR och fältutförande. Chefer ser jobbstatusuppdateringar i realtid, granskar GPS-verifierade slutföranden och godkänner timmar före lönekörningar.",
        "Problemspårning, QA-bedömning och kundbevis ligger bredvid schemat — så att ledningsbeslut använder samma data som städare genererar på plats.",
      ],
    },
    features: [
      {
        title: "Schemabyggare med ledighetsmedvetenhet",
        description: "Dra-och-släpp-tilldelning som respekterar godkänd ledighet och tillgänglighet.",
        benefit: "Publicera scheman utan manuella konfliktkontroller.",
        linkHref: "/features",
        linkLabel: "Team- och schemaläggningsfunktioner",
      },
      {
        title: "Realtids jobbstatus",
        description: "Se när jobb startar, pausas och slutförs över fastigheter.",
        benefit: "Ingrip innan ett missat besök blir en kundeskalering.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Schemaläggningsprogramvara",
      },
      {
        title: "QA- och problemarbetsflöden",
        description: "Chefens kvalitetsgranskningar, problemloggar och fotobevis på slutförda jobb.",
        benefit: "Hantera klagomål med revisionsspår på jobbnivå.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektionsprogramvara",
      },
      {
        title: "Ägarens intäktsinstrumentpanel",
        description: "Finansiell synlighet och Revenue AI-insikter i stödda planer.",
        benefit: "Ägare ser prestanda utan att exportera fem rapporter.",
        linkHref: "/pricing",
        linkLabel: "Planer och priser",
      },
    ],
    howItWorks: {
      title: "Planera → Tilldela → Övervaka → Granska → Godkänn",
      steps: [
        { title: "Planera", description: "Bygg veckan i kalender- eller schemavy. Återkommande jobb genererar kontraktsbesök automatiskt." },
        { title: "Tilldela", description: "Placera städare på jobb. AI-rekommendationer valfritt — chefer väljer slutliga tilldelade." },
        { title: "Övervaka", description: "Spåra starter, GPS-flaggor och checklistframsteg från administrationsinstrumentpanelen." },
        { title: "Granska", description: "Öppna slutförda jobb för foton, QA-poäng och kundvända rapportutkast." },
        { title: "Godkänn", description: "Signera av arbetstimmar och lönekörningar från verifierad uppgiftstid." },
      ],
    },
    useCases: {
      title: "Administrationsscenarier TidyFlow stödjer",
      items: [
        { title: "Driftschefer", description: "Daglig dispatch, kvalitetsuppföljning och teamkoordinering över flera platser." },
        { title: "Företagsägare", description: "Abonnemangskontroll, intäktsvy och bevis på att kontrakt betjänas." },
        { title: "Flerstads-supervisorer", description: "Jämför slutförandestatus och problem över fastigheter på ett ställe." },
        { title: "Franchise-koordinatorer", description: "Konsekventa arbetsflöden och rollbaserad åtkomst när team växer." },
      ],
    },
    faqs: [
      { q: "Vad bör städadministrationsprogramvara innehålla?", a: "Minst: schemaläggning, teamtilldelning, fältstatus, tidsregistrering, kvalitetsbevis och lön- eller timgodkännande. TidyFlow täcker detta på en plattform." },
      { q: "Kan chefer använda TidyFlow på mobil?", a: "Ja. Chefer kan schemalägga, tilldela och granska jobb från mobil eller webb." },
      { q: "Hur fungerar rollbaserad åtkomst?", a: "Ägare, chefer och städare ser olika skärmar. Städare får jobblistor och fältverktyg; chefer får schema, godkännanden och rapporter." },
      { q: "Ersätter TidyFlow min revisor?", a: "Nej. TidyFlow hanterar drift och kan synka fakturor till QuickBooks Online. Din revisor äger fortfarande skatt och redovisningsstrategi." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Städprogramvara | Nattskift och flerstads-team | TidyFlow",
    seoDescription:
      "Städprogramvara för kontraktsstädare — återkommande platsbesök, offline fältapp, GPS-instämpling, checklistor och bevis för facility-kunder.",
    keywords:
      "städprogramvara, städadministrationsprogramvara, städschemaläggningsapp, kontraktsstäd programvara, TidyFlow",
    eyebrow: "Städprogramvara",
    h1: "Städprogramvara byggd för kontraktsarbete på plats",
    heroSubtitle:
      "Kör återkommande städrutter över kontor, skolor och facility. Städare arbetar offline i teknikrum och källare medan chefer verifierar varje besök med GPS, checklistor och foton.",
    navLabel: "Städprogramvara",
    problems: {
      title: "Städkontrakt misslyckas när fältappen misslyckas",
      items: [
        "Natteam träffar döda zoner i trapphus och kan inte logga slutförande.",
        "Vikarier anländer utan platsanteckningar som låg i en gruppchatt.",
        "Facility-chefer begär bevis och du skickar ett generiskt e-postmeddelande utan tidsstämplar.",
        "Omfattningsutvidgning på extra rum är osynlig till faktureringstid.",
        "Flera byggnader delar en supervisor som inte fysiskt kan verifiera varje starttid.",
      ],
    },
    solution: {
      title: "Kontraktsstäd-arbetsflöden i ett system",
      paragraphs: [
        "TidyFlow stödjer återkommande städscheman, checklistor per plats och offline jobbslutförande — kombinationen kontraktsstädare behöver när varje byggnad har olika tillgangsregler och signalkvalitet.",
        "Per-uppgift-chatt håller platsinstruktioner på jobbet. GPS-verifiering och fotobevis ger facility-kunder dokumentation utan extra admin-arbete.",
      ],
    },
    features: [
      {
        title: "Återkommande städrutter",
        description: "Automatisera veckovisa och månatliga besök per fastighet med teamtilldelning.",
        benefit: "Kontraktsscheman regenereras utan manuell kopiering.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Schemaläggningsprogramvara",
      },
      {
        title: "Offline städapp",
        description: "Timer, checklista och foton fungerar utan anslutning; synk vid återanslutning.",
        benefit: "Natteam slutför jobb under jord i stället för att hoppa över appen.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline städprogramvara",
      },
      {
        title: "Platschecklistor och foton",
        description: "Rum-för-rum-uppgifter med före/efter-bevis vid slutförande.",
        benefit: "Dokumentera omfattning för QA och kundtvister.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektion och QC",
      },
      {
        title: "SOS-säkerhetsknapp",
        description: "Ett tryck varnar chefer för ensamarbetare på sena skift.",
        benefit: "Ge nattstädare en direkt säkerhetslinje från jobbskärmen.",
        linkHref: "/features",
        linkLabel: "Fältsäkerhetsfunktioner",
      },
    ],
    howItWorks: {
      title: "Kontrakt → Schemalägg → Utför → Bevisa → Fakturera",
      steps: [
        { title: "Kontrakt", description: "Sätt upp fastigheter med tillgangsanteckningar och checklistmallar per plats." },
        { title: "Schemalägg", description: "Skapa återkommande städbesök och tilldela fasta team eller roterande personal." },
        { title: "Utför", description: "Städare kör jobbet offline eller online — timer, checklista, foton på plats." },
        { title: "Bevisa", description: "Chefer granskar GPS-verifierat slutförande och fotobevis." },
        { title: "Fakturera", description: "Fakturera kunder från slutfört arbete; synka fakturor till QuickBooks i stödda planer." },
      ],
    },
    useCases: {
      title: "Städteam som använder TidyFlow",
      items: [
        { title: "Kontors- och företagsstäd", description: "Efter-hours-städ med PDF-kundbevis." },
        { title: "Utbildning och offentliga byggnader", description: "Fler vånings platser med dålig inomhussignal — offlineläge inkluderat." },
        { title: "Industriellt och anläggningsstäd", description: "Checklistor för begränsade områden och säkerhetskänsliga zoner." },
        { title: "Underleverantörer av städ", description: "Rollbaserad åtkomst för kundvända chefer och fältpersonal." },
      ],
    },
    faqs: [
      { q: "Är TidyFlow städ- eller bostadsprogramvara?", a: "TidyFlow är byggt för professionell städdrift — kommersiell, städ- och kontraktsarbete är huvudfokus." },
      { q: "Kan städare stämpla in utan signal?", a: "Ja. Fältappen köar GPS och jobbhändelser offline och synkar när anslutningen återkommer." },
      { q: "Kan vi dela bevis med facility-chefer?", a: "Ja. PDF-jobbrapport och säkra kundportal-länkar delar slutförandebevis." },
      { q: "Hanterar TidyFlow återkommande nattskift?", a: "Ja. Återkommande jobb och schemaverktyg stödjer fasta nattrutter och roterande team." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Kommersiell städprogramvara | Flerstads-kontrakt | TidyFlow",
    seoDescription:
      "Kommersiell städprogramvara för kontors-, retail- och facility-kontrakt — schemaläggning, QC-inspektioner, kundbevis, fakturering och teamhantering.",
    keywords:
      "kommersiell städprogramvara, kontorsstäd programvara, kontraktsstäd plattform, facility-städ programvara, TidyFlow",
    eyebrow: "Kommersiell städprogramvara",
    h1: "Kommersiell städprogramvara för kontraktsdrift",
    heroSubtitle:
      "Hantera flerstads kommersiella kontrakt med återkommande scheman, inspektionschecklistor, fotobevis för kunder och löner från verifierade fälttimmar.",
    navLabel: "Kommersiell städ",
    problems: {
      title: "Kommersiella kontrakt behöver mer än en kalenderapp",
      items: [
        "Varje kundplats har olika omfattning, nycklar och inspektionsstandarder.",
        "Account managers lovar kvalitet men drift har ingen central QC-registrering.",
        "Extra arbetsorder försvinner mellan e-post och veckoschemat.",
        "Fakturor skickas innan någon bekräftar att alla schemalagda besök slutförts.",
        "Kundförlust följer ett missat djupstäd som ingen dokumenterade.",
      ],
    },
    solution: {
      title: "Kommersiella arbetsflöden från anbud till bevis",
      paragraphs: [
        "TidyFlow kopplar kommersiell schemaläggning till kvalitetsverifiering och kundvända rapporter. Chefer kör QA-bedömning på slutförda jobb, loggar problem per fastighet och delar märkta PDF-bevis.",
        "Fakturering och QuickBooks-synk i stödda planer håller finans i linje med slutfört kontraktsarbete.",
      ],
    },
    features: [
      {
        title: "Flerstads-schemaläggning",
        description: "Kalender och återkommande jobb över kommersiella portföljer.",
        benefit: "En vy av varje plats i kontraktet.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Schemaläggning",
      },
      {
        title: "Kundbevis och PDF-rapporter",
        description: "Märkesrapporter för nedladdning och säkra portal-länkar.",
        benefit: "Ge facility-chefer bevis utan manuella foto-e-postmeddelanden.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektion och bevis",
      },
      {
        title: "Kundfakturering",
        description: "Fakturera från slutförda uppgifter med radposter.",
        benefit: "Fakturera mot verifierade slutföranden, inte gissningar.",
        linkHref: "/integrations",
        linkLabel: "QuickBooks-integration",
      },
      {
        title: "Problemspårning",
        description: "Logga och lösa fastighetsproblem från fält eller kontor.",
        benefit: "Stäng loopen när en plats rapporterar ett problem.",
        linkHref: "/features",
        linkLabel: "Kvalitetsfunktioner",
      },
    ],
    howItWorks: {
      title: "Omfattning → Schemalägg → Betjäna → Inspektera → Fakturera",
      steps: [
        { title: "Omfattning", description: "Definiera fastigheter, checklistor och tillgangsanteckningar per kommersiell kund." },
        { title: "Schemalägg", description: "Sätt återkommande servicefrekvens och tilldela team." },
        { title: "Betjäna", description: "Städare slutför jobb med timer, GPS och checklista på mobil." },
        { title: "Inspektera", description: "Chefer QA slutfört arbete med foton och bedömningsarbetsflöden." },
        { title: "Fakturera", description: "Fakturera kunder och synka eventuellt till QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Användningsfall för kommersiell städ",
      items: [
        { title: "Kontors- och coworking-operatörer", description: "Daglig och veckovis service med kundsynligt bevis." },
        { title: "Retail- och hospitality-kedjor", description: "Flera platser med konsekventa checklistor." },
        { title: "Fastighetsförvaltningsportföljer", description: "Spåra problem och besök över byggnader." },
        { title: "B2B-kontraktsstädare", description: "Driftssynlighet för ägare som säljer till facility-chefer." },
      ],
    },
    faqs: [
      { q: "Vad är kommersiell städprogramvara?", a: "Programvara som hjälper B2B-städföretag schemalägga kontraktsplatser, verifiera tjänsteleverans, hantera team och fakturera kunder från en plattform." },
      { q: "Kan kunder se jobbfoton?", a: "Du kontrollerar kundvänt bevis via PDF-rapporter och portal-länkar — inte intern chefchatt." },
      { q: "Stödjer TidyFlow flerstads-kontrakt?", a: "Ja. Fastigheter, återkommande jobb och scheman skalar till flerstads kommersiella portföljer." },
      { q: "Kan vi samla in kundrecensioner?", a: "Ja. TidyFlow inkluderar insamling av kundrecensioner med routing för negativ feedback." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Schemaläggningsprogramvara för städ | Återkommande jobb och scheman | TidyFlow",
    seoDescription:
      "Schemaläggningsprogramvara för städ med kalender, schemabyggare, återkommande jobb, AI-tilldelningsförslag, ledighetshantering och Google Sheets-synk.",
    keywords:
      "schemaläggningsprogramvara städ, dispatch-programvara städ, hemstäd schemaläggning, städ schemaläggningsapp, TidyFlow",
    eyebrow: "Schemaläggningsprogramvara för städ",
    h1: "Schemaläggningsprogramvara för städ som matchar verkliga scheman",
    heroSubtitle:
      "Bygg veckoscheman, automatisera återkommande fastighetsbesök, tilldela städare med ledighetsmedvetenhet och skicka uppdateringar till fältappen direkt.",
    navLabel: "Schemaläggning",
    problems: {
      title: "Schemaläggning går sönder när verktyget ignorerar städverkligheten",
      items: [
        "Återkommande kontrakt matas in manuellt varje månad.",
        "Vikarier tilldelas utan att se vem som är ledig.",
        "Städare får veta om schemaändringar från en gruppchatt, inte appen.",
        "Ruttplanering är gissning — restid mellan platser är osynlig.",
        "Kalkylbladsschemat och fältappen matchar aldrig.",
      ],
    },
    solution: {
      title: "Schemaläggning kopplad till fältappen",
      paragraphs: [
        "TidyFlow-schemaläggning är inte en fristående kalender — tilldelningar pushas till städares mobila jobblistor i realtid. Återkommande jobb genererar kontraktsbesök automatiskt. Schemabyggaren respekterar godkänd ledighet.",
        "Tvåvägs Google Sheets-synk låter team behålla ett kalkylbladshuvuddokument medan TidyFlow utför dispatch. AI kan föreslå tilldelade; chefer fattar alltid slutgiltigt beslut.",
      ],
    },
    features: [
      {
        title: "Kalender och schemabyggare",
        description: "Veckovy, dra-och-släpp-tilldelning, ledighetsmedveten planering.",
        benefit: "Bygg schemat en gång och publicera till fältet.",
        linkHref: "/how-it-works",
        linkLabel: "Så fungerar schemaläggning",
      },
      {
        title: "Återkommande jobb",
        description: "Veckovisa, månatliga och anpassade upprepingsmönster per fastighet.",
        benefit: "Sluta kopiera samma besök varje cykel.",
        linkHref: "/features",
        linkLabel: "Schemaläggningsfunktioner",
      },
      {
        title: "AI-rekommendationer för städare",
        description: "Föreslå bäst passande person efter historik, plats och tillgänglighet.",
        benefit: "Snabbare dispatch på hektiska morgnar — chef bekräftar.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "AI-tilldelning",
      },
      {
        title: "Ruttoptimering",
        description: "Minska restid mellan fastigheter i stödda arbetsflöden.",
        benefit: "Få plats med fler jobb per skift utan övertidsgissning.",
        linkHref: "/integrations",
        linkLabel: "Kartintegration",
      },
    ],
    howItWorks: {
      title: "Schemalägg → Tilldela → Meddela → Utför → Justera",
      steps: [
        { title: "Schemalägg", description: "Skapa jobb i kalendervy eller importera från Google Sheets." },
        { title: "Tilldela", description: "Dra städare till skift; schema flaggar ledighetskonflikter." },
        { title: "Meddela", description: "Tilldelningar visas direkt på städares enheter." },
        { title: "Utför", description: "Fältteam startar jobb med GPS-verifierad instämpling." },
        { title: "Justera", description: "Tilldela om öppna jobb från mobil när någon sjukanmäler sig." },
      ],
    },
    useCases: {
      title: "Schemaläggningsscenarier",
      items: [
        { title: "Återkommande kontraktsstädare", description: "Automatisera fasta veckorutter över kundplatser." },
        { title: "Bostads- och hemstäd", description: "Variabla veckoscheman med snabb omtilldelning." },
        { title: "Dispatch för flera team", description: "Flera supervisorer schemalägger överlappande territorier." },
        { title: "Växande företag som lämnar kalkylblad", description: "Ark-synk medan du övergår dispatch till appen." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow hantera återkommande städjobb?", a: "Ja. Återkommande jobb automatiserar upprepade besök per fastighet med teamtilldelning." },
      { q: "Synkar schemaläggning med Google Sheets?", a: "Ja. Tvåvägs synk håller kalkylbladshuvuddokument i linje med app-tilldelningar." },
      { q: "Ser städare bara sitt eget schema?", a: "Ja. Städare ser dagens jobblista; chefer ser hela schemat." },
      { q: "Finns ruttoptimering?", a: "Ja. TidyFlow inkluderar ruttplaneringsverktyg med Google Maps-integration." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Löneprogramvara för städ | Verifierade timmar och tidrapporter | TidyFlow",
    seoDescription:
      "Löneprogramvara för städ byggd på GPS-verifierade uppgiftstimers, tidrapportgodkännande, löneregler, lönekörningar och PDF-lönespecifikationer för städteam.",
    keywords:
      "löneprogramvara städ, lönapp städare, städ lön, tidrapportprogramvara städ, TidyFlow",
    eyebrow: "Löneprogramvara för städ",
    h1: "Löneprogramvara för städ från verifierade jobbtimmar",
    heroSubtitle:
      "Generera lön från uppgiftstimers och godkända arbetstimmar — inte handskrivna tidrapporter. GPS-verifiering minskar tvister och ger chefer ett revisionsspår.",
    navLabel: "Lön",
    problems: {
      title: "Lönetvister börjar med overifierade timmar",
      items: [
        "Städare avrundar tid eftersom pappersrapporter är lätta att blåsa upp.",
        "Chefer kan inte koppla en lönespecifikationsrad till ett specifikt slutfört jobb.",
        "Övertidsöverraskningar dyker upp eftersom extra jobb inte loggades centralt.",
        "Entreprenör- vs anställningssatser ligger i olika anteckningsböcker.",
        "Finans matar in timmar i redovisning efter att drift redan godkänt något annat.",
      ],
    },
    solution: {
      title: "Lön kopplad till slutfört fältarbete",
      paragraphs: [
        "TidyFlow loggar timmar från jobbtimern på plats. GPS-verifiering flaggar starter och slutföranden bort från fastigheten. Chefer godkänner arbetstimmar före lönekörningar.",
        "Anställningslöneregler, lönefakturor och QuickBooks löneräkning-synk i stödda planer håller drift och finans i linje.",
      ],
    },
    features: [
      {
        title: "Uppgiftstimer och tidrapporter",
        description: "Start, paus, återuppta, skicka in — timmar kopplade till varje jobb.",
        benefit: "Varje timme kopplas till ett fastighetsbesök.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tidsregistrering",
      },
      {
        title: "GPS-verifierad närvaro",
        description: "Plats kontrolleras vid instämpling och jobbslutförande.",
        benefit: "Utmana tvister med platsbevis.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS-verifiering",
      },
      {
        title: "Löneregler och lönekörningar",
        description: "Satser per användare och lönegenerering från godkända timmar.",
        benefit: "Ett godkänningsflöde innan lönespecifikationer skickas ut.",
        linkHref: "/features",
        linkLabel: "Lönefunktioner",
      },
      {
        title: "QuickBooks löneräkningar",
        description: "Synka godkänd lön till QuickBooks i stödda planer.",
        benefit: "Redovisning får driftsgodkända totaler.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "QuickBooks-synk",
      },
    ],
    howItWorks: {
      title: "Schemalägg → Registrera timmar → Verifiera → Godkänn → Betala",
      steps: [
        { title: "Schemalägg", description: "Tilldela jobb så att förväntade timmar syns före skiftet." },
        { title: "Registrera", description: "Städare kör timern på plats; GPS validerar plats." },
        { title: "Verifiera", description: "Chefer granskar flaggade instämplingar och ofullständiga checklistor." },
        { title: "Godkänn", description: "Signera av arbetstimmar och justeringar." },
        { title: "Betala", description: "Kör lön och exportera PDF-fakturor eller synka till QuickBooks." },
      ],
    },
    useCases: {
      title: "Lönescenarier",
      items: [
        { title: "Timlönade städteam", description: "Betala från verifierad uppgiftstid i stället för papperslappar." },
        { title: "Blandat W-2 och entreprenörer", description: "Löneregler per användare med PDF-lönefakturor." },
        { title: "Tvistbenägna team", description: "GPS och jobbhistorik för varje lönespecifikationsrad." },
        { title: "Ägare som kör lön på natten", description: "Batch-godkännande från administrationsinstrumentpanelen." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow spåra städares timmar?", a: "Ja. Jobbtimers loggar timmar per uppgift. Städare kan också skicka in arbetstimmar för chefsgodkännande." },
      { q: "Bevisar GPS att städare var på plats?", a: "GPS-verifiering kontrollerar plats vid start och slutförande. Chefer får varningar för instämpling utanför byggnaden." },
      { q: "Kan jag exportera lön till QuickBooks?", a: "I stödda planer kan godkänd lön synkas som räkningar till QuickBooks Online." },
      { q: "Ersätter TidyFlow en full HR/löneleverantör?", a: "TidyFlow genererar lön från verifierade driftstimmar. Skatteinlämning och full HR-compliance förblir din revisors domän." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Inspektionsprogramvara för städ | Checklistor och fotobevis | TidyFlow",
    seoDescription:
      "Inspektionsprogramvara för städ med rumschecklistor, före/efter-foton, QA-bedömning, PDF-kundrapporter och problemspårning för kvalitetsverifiering.",
    keywords:
      "inspektionsprogramvara städ, kvalitetskontrollprogramvara städ, checklistapp städ, städ inspektionsprogramvara, TidyFlow",
    eyebrow: "Inspektionsprogramvara för städ",
    h1: "Inspektionsprogramvara för städ med checklista och fotobevis",
    heroSubtitle:
      "Kör rum-för-rum-inspektioner, ta före/efter-foton, bedöm kvalitet med chef-QA-arbetsflöden och dela märkta bevis med kunder.",
    navLabel: "Inspektioner",
    problems: {
      title: "Kvalitetsproblem när inspektioner ligger utanför jobbet",
      items: [
        "Checklistor är pappers-PDF:er städare bockar av utan att öppna på plats.",
        "Före/efter-foton ligger i personliga kamerarullar — inte kopplade till fastigheten.",
        "Chefer inspekterar slumpmässigt i stället för att följa ett bedömningsarbetsflöde.",
        "Kunder bestrider kvalitet men du har inget tidsstämplat bevispaket.",
        "Problem hittade på plats glöms bort innan någon loggar dem.",
      ],
    },
    solution: {
      title: "Inspektioner utförda och lagrade på jobbposten",
      paragraphs: [
        "TidyFlow-checklistor körs i städarens mobilapp — valfria regler kan kräva checklistslutförande före timern startar. Foton laddas upp på plats, inklusive offline med senare synk.",
        "Chefer använder QA-bedömningsarbetsflöden för att granska slutföranden. AI-bildanalys kan flagga kvalitetsproblem i stödda planer. PDF-rapporter och kundportal-länkar paketerar bevis för facility-kunder.",
      ],
    },
    features: [
      {
        title: "Rum-för-rum-checklistor",
        description: "Checklistmallar per fastighet med obligatoriska poster.",
        benefit: "Standardisera omfattning vid varje besök.",
        linkHref: "/features",
        linkLabel: "Checklistfunktioner",
      },
      {
        title: "Före/efter-foton",
        description: "Fånga bevis på jobbet; fungerar offline.",
        benefit: "Foton förblir kopplade till besöket, inte en kamerarulle.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Offline-foton",
      },
      {
        title: "QA-bedömningsarbetsflöde",
        description: "Chefens granskning och kvalitetspoäng på slutförda jobb.",
        benefit: "Gör stickprov till en repeterbar process.",
        linkHref: "/how-it-works",
        linkLabel: "Kvalitetsarbetsflöde",
      },
      {
        title: "PDF-kundrapporter",
        description: "Märkesjobbrapporter och säkra delningslänkar.",
        benefit: "Skicka bevis utan att bygga bildspel manuellt.",
        linkHref: "/documentation",
        linkLabel: "Rapporteringsdokumentation",
      },
    ],
    howItWorks: {
      title: "Skapa checklista → Inspektera → Fånga bevis → Granska → Dela bevis",
      steps: [
        { title: "Skapa", description: "Bygg checklistmallar per kundplats eller tjänstetyp." },
        { title: "Inspektera", description: "Städare slutför poster på mobil under jobbet." },
        { title: "Fånga", description: "Lägg till före/efter-foton; offline-inspelning synkas senare." },
        { title: "Granska", description: "Chefer QA-bedömer slutföranden och loggar problem." },
        { title: "Dela", description: "Exportera PDF eller skicka kundportal-länk med bevis." },
      ],
    },
    useCases: {
      title: "Inspektionsanvändningsfall",
      items: [
        { title: "Kommersiella QC-program", description: "Standardiserad bedömning över en kundportfölj." },
        { title: "Flyttstäd och djupstäd", description: "Före/efter-fotopaket för hyresvärdar." },
        { title: "Franchise-kvalitetsstandarder", description: "Konsekventa checklistor över platser." },
        { title: "Kundrevisionsförfrågningar", description: "Tidsstämplad jobbhistorik när facility ber om bevis." },
      ],
    },
    faqs: [
      { q: "Kan städare slutföra checklistor offline?", a: "Ja. Checklistor och foton fungerar offline och synkas när anslutningen återkommer." },
      { q: "Använder TidyFlow AI för bildkvalitet?", a: "I stödda planer kan AI-bildanalys bedöma uppladdade städfoton. Chefer fattar fortfarande slutgiltiga QA-beslut." },
      { q: "Kan kunder få tillgång till inspektionsrapporter?", a: "Ja. PDF-jobbrapport och säkra portal-länkar delar slutförandebevis med kunder." },
      { q: "Kan jag kräva checklistslutförande före instämpling?", a: "Ja. Valfria regler kan kräva checkliststeg före jobbtimern startar." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Tidsregistreringsprogramvara för städ | GPS-instämpling | TidyFlow",
    seoDescription:
      "Tidsregistreringsprogramvara för städ med jobbtimers på plats, GPS-verifiering, geofencing, live spårning under aktiva jobb och timmar för lön.",
    keywords:
      "tidsregistrering städ, städ tidsregistrering, instämplingsapp städare, GPS tidsregistrering städ, TidyFlow",
    eyebrow: "Tidsregistrering",
    h1: "Tidsregistreringsprogramvara för städ med GPS-verifiering",
    heroSubtitle:
      "Stämpla in städare på plats med jobbtimers, GPS-verifiering och geofencing — så att loggade timmar reflekterar verkliga fastighetsbesök, inte uppskattningar.",
    navLabel: "Tidsregistrering",
    problems: {
      title: "Tidsregistrering misslyckas när instämpling är lätt att förfalska",
      items: [
        "Städare startar timern från parkeringsplatsen på andra sidan gatan.",
        "Chefer har ingen live-vy av vem som aktivt arbetar på ett jobb.",
        "Kompisinstämpling sker eftersom vem som helst kan skicka «jag är här».",
        "Timmar från en kundplats flyter in i restid.",
        "Byggnader med dålig signal tvingar städare att hoppa över timern.",
      ],
    },
    solution: {
      title: "Tidsregistrering inbyggd i städjobbet",
      paragraphs: [
        "TidyFlow tidsregistrering är per uppgift — start, paus, återuppta, skicka in på jobbskärmen. GPS-verifiering jämför instämplingsplats med fastigheten. Chefer kan se live GPS under aktiva jobb.",
        "Offlineläge köar timer och GPS-händelser när signalen faller och synkar vid återanslutning — så att källarstäd fortfarande ger verifierbara timmar.",
      ],
    },
    features: [
      {
        title: "Jobbtimer på plats",
        description: "Enkel start/paus/skicka in-flöde i städappen.",
        benefit: "Timmar kopplas till fastigheten, inte ett generiskt skift.",
        linkHref: "/features",
        linkLabel: "Fältapp",
      },
      {
        title: "GPS och geofencing",
        description: "Verifiera plats vid start/slutförande; kartintegration för platser.",
        benefit: "Flagga instämpling bort från byggnaden.",
        linkHref: "/integrations",
        linkLabel: "Kartor och geofencing",
      },
      {
        title: "Offline GPS-kö",
        description: "Kö plats händelser utan signal; synk senare.",
        benefit: "Registrera tid i teknikrum och underjordiska garage.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Offline GPS",
      },
      {
        title: "Löneklara timmar",
        description: "Godkända timmar går in i lönekörningar.",
        benefit: "Stäng loopen från instämpling till lönespecifikation.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Löneprogramvara",
      },
    ],
    howItWorks: {
      title: "Tilldela → Ankom → Stämpla in → Arbeta → Skicka in timmar",
      steps: [
        { title: "Tilldela", description: "Städare får dagens jobb på mobil." },
        { title: "Ankom", description: "GPS bekräftar närhet till fastighetens geofence." },
        { title: "Stämpla in", description: "Starta timer på jobbet — valfri checklistgrind." },
        { title: "Arbeta", description: "Paus/återuppta vid behov; live GPS under aktiva jobb." },
        { title: "Skicka in", description: "Slutför jobb; timmar väntar på chefsgodkännande för lön." },
      ],
    },
    useCases: {
      title: "Tidsregistreringsscenarier",
      items: [
        { title: "Kommersiell städ", description: "Verifiera nattskift-närvaro över platser." },
        { title: "Bostadsteam", description: "Per-hem-timers för timlönade hemstädare." },
        { title: "Flerstädare-jobb", description: "Varje tilldelad loggar tid på samma uppgift." },
        { title: "Platser med dålig anslutning", description: "Offline-kö bevarar timmar och GPS." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow spåra städares timmar automatiskt?", a: "Ja. Jobbtimern loggar timmar när städare startar och skickar in uppgifter. GPS lägger till platsverifiering." },
      { q: "Vad händer om GPS är otillgänglig?", a: "Händelser köas offline och synkas när signalen återkommer. Chefer ser fortfarande jobbslutförandeposten." },
      { q: "Är live GPS alltid på?", a: "Live GPS-spårning gäller under aktiva jobb i stödda arbetsflöden — inte 24/7 övervakning." },
      { q: "Kan chefer redigera timmar?", a: "Chefer godkänner eller justerar arbetstimmar genom godkänningsarbetsflödet före lön." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Offline städprogramvara | Fältapp utan signal | TidyFlow",
    seoDescription:
      "Offline städprogramvara för team i källare, parkeringshus och byggnader med dålig signal — offline-checklistor, timer, foton och GPS-kö med autosynk.",
    keywords:
      "offline städprogramvara, offline städapp, städapp utan internet, offline städapp, TidyFlow",
    eyebrow: "Offline städprogramvara",
    h1: "Offline städprogramvara för verkliga fältförhållanden",
    heroSubtitle:
      "Städare slutför jobb utan internet — checklistor, jobbtimer, foton och GPS-händelser köas lokalt och synkas automatiskt när anslutningen återkommer.",
    navLabel: "Offline städ",
    problems: {
      title: "Fältappar misslyckas där städarbete faktiskt sker",
      items: [
        "Källare och teknikrum blockerar mobildata — städare hoppar över appen.",
        "Foton väntar tills de når parkeringsplatsen och blandas mellan jobb.",
        "Timers stoppas eftersom appen kräver konstant anslutning.",
        "Chefer antar att «ingen synk» betyder «utebliven».",
        "Konkurrenter påstår offline men cachar bara jobblistan, inte slutförande.",
      ],
    },
    solution: {
      title: "Fullständigt jobbslutförande offline — inte en skrivskyddad cache",
      paragraphs: [
        "TidyFlow offlineläge stödjer arbetsflöden städare behöver på plats: kör jobbtimer, slutför checklistor, ta foton och kö GPS-verifieringshändelser. När enheten återansluter synkas data till administrationsinstrumentpanelen.",
        "Detta är byggt för städ- och kommersiella platser där signal faller är normalt — inte undantag.",
      ],
    },
    features: [
      {
        title: "Offline-checklistor",
        description: "Slutför rumsuppgifter utan anslutning.",
        benefit: "Inspektioner slutförs under jord, inte på parkeringsplatsen.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspektionsprogramvara",
      },
      {
        title: "Offline jobbtimer",
        description: "Registrera timmar på plats; synka tidsstämplar senare.",
        benefit: "Lön får verklig jobbtid, inte uppskattningar.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Tidsregistrering",
      },
      {
        title: "Offline foto capture",
        description: "Före/efter-foton lagras lokalt till uppladdning.",
        benefit: "Bevis förblir kopplade till rätt jobb.",
        linkHref: "/features",
        linkLabel: "Fotobevis",
      },
      {
        title: "Offline GPS-kö",
        description: "Plats händelser köas utan signal; synk vid återanslutning.",
        benefit: "Verifiera närvaro även efter att ha lämnat en död zon.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Offline GPS-funktion",
      },
    ],
    howItWorks: {
      title: "Ladda jobb → Arbeta offline → Kö data → Återanslut → Synka",
      steps: [
        { title: "Ladda", description: "Tilldelade jobb laddas ner till enheten medan den är online." },
        { title: "Arbeta offline", description: "Timer, checklista och foton körs utan internet." },
        { title: "Kö", description: "GPS och slutförandehändelser lagras lokalt." },
        { title: "Återanslut", description: "Telefonen får signal igen när man lämnar byggnaden eller parkeringshuset." },
        { title: "Synka", description: "Chefer ser slutfört jobb, foton och timmar i instrumentpanelen." },
      ],
    },
    useCases: {
      title: "Offline-scenarier",
      items: [
        { title: "Källar- och teknikrumsstäd", description: "Slutför jobb med noll inomhussignal." },
        { title: "Underjordisk parkeringsstäd", description: "GPS köas tills enheten lämnar garaget." },
        { title: "Lantliga eller industriella platser", description: "Ojämn täckning blockerar inte längre fältcompliance." },
        { title: "Internationella team", description: "Samma offline-beteende över 11 stödda språk." },
      ],
    },
    faqs: [
      { q: "Kan TidyFlow fungera utan internetanslutning?", a: "Ja. Städare kan köra timers, checklistor och ta foton offline. Data synkas när anslutningen återkommer." },
      { q: "Vad synkas efter återanslutning?", a: "Jobbslutförandestatus, foton, timertimmar, köade GPS-händelser och checklist svar synkas till servern." },
      { q: "Måste städare synka manuellt?", a: "Synk körs automatiskt när enheten återansluter — inget separat uppladdningssteg." },
      { q: "Är offline tillgängligt i alla planer?", a: "Offline fältoperation är en kärnfunktion i TidyFlow. Avancerade AI- och integrationsfunktioner varierar per plan — se Priser." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Programvara för städföretag | Driv och väx drift | TidyFlow",
    seoDescription:
      "Programvara för städföretag för ägare som växer från solooperatör till flera team — schemaläggning, fakturering, lön, kundbevis och Revenue AI-insikter.",
    keywords:
      "programvara städföretag, app litet städföretag, växa städföretag programvara, startup-programvara städ, TidyFlow",
    eyebrow: "Programvara för städföretag",
    h1: "Programvara för städföretag som skalar med ditt företag",
    heroSubtitle:
      "Börja med schemaläggning och fältbevis, lägg sedan till lön, kundfakturering och ägarinstrumentpaneler när du växer — en plattform i stället för att sy ihop verktyg.",
    navLabel: "Städföretag",
    problems: {
      title: "Små städföretag växer ur sina första verktyg snabbt",
      items: [
        "Du börjar med en kalenderapp, lägger till löneprogramvara, sedan fotomappar — inget kopplas ihop.",
        "Fler kontrakt betyder fler admin-timmar, inte mer vinst.",
        "Du kan inte säga vilka kunder som är lönsamma utan att exportera kalkylblad.",
        "Att anställa din första chef duplicerar arbete eftersom det inte finns ett delat driftssystem.",
        "Provverktyg tar betalt per plats på sätt som straffar växande team.",
      ],
    },
    solution: {
      title: "Väx drift på en plattform för städföretag",
      paragraphs: [
        "TidyFlow-planer skalar från startup-team till större personalstyrkor med användningsbaserade fastighetsgränser. Ägare hanterar abonnemang och fakturering i appen. Schemaläggning, fältbevis, lön och kundfakturering lever tillsammans.",
        "Revenue AI i stödda planer lyfter fram risker och möjligheter på ägarinstrumentpanelen — så att tillväxtbeslut använder driftsdata, inte magkänsla.",
      ],
    },
    features: [
      {
        title: "Planer från $25/månad",
        description: "Startup-plan för mindre team; uppgradera när fastigheter och städare växer.",
        benefit: "Börja utan enterprise-kontrakt.",
        linkHref: "/pricing",
        linkLabel: "Se priser",
      },
      {
        title: "Självbetjänad fakturering",
        description: "Provperiod, uppgradering och abonnemangshantering i appen.",
        benefit: "Ägare kontrollerar kostnader utan att ringa försäljning.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Faktureringsfunktioner",
      },
      {
        title: "Kundfakturering och QuickBooks",
        description: "Fakturera från jobb; synka till QuickBooks Online.",
        benefit: "Finans förblir i linje när du lägger till kunder.",
        linkHref: "/integrations",
        linkLabel: "Integrationer",
      },
      {
        title: "Revenue AI-instrumentpanel",
        description: "Ägarinsikter i stödda planer.",
        benefit: "Se vilka kontrakt som behöver uppmärksamhet tidigt.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Starta → Driv → Bevisa → Fakturera → Väx",
      steps: [
        { title: "Starta", description: "14 dagars provperiod — sätt upp fastigheter och bjud in dina första städare." },
        { title: "Driv", description: "Schemalägg jobb och kör fältarbete med GPS och foton." },
        { title: "Bevisa", description: "Skicka kundbevis när du vinner större kontrakt." },
        { title: "Fakturera", description: "Fakturera kunder och kör lön från verifierade timmar." },
        { title: "Väx", description: "Uppgradera plangränser och använd ägarinstrumentpaneler för beslut." },
      ],
    },
    useCases: {
      title: "Affärsstadier",
      items: [
        { title: "Solooperatör som blir flerstädare", description: "Ersätt personliga kalendrar med delad schemaläggning." },
        { title: "Lokalt företag som vinner kommersiella anbud", description: "Kundbevis och QC för facility-kontrakt." },
        { title: "Regionalt städmärke", description: "Flerstads-gränser, roller och integrationer." },
        { title: "Ägare-operatör med alla hattar", description: "En inloggning för schema, lön och fakturering." },
      ],
    },
    faqs: [
      { q: "Vad är programvara för städföretag?", a: "Programvara som hjälper ägare köra schemaläggning, team, fältarbete, kundfakturering och lön för ett städföretag — ersätter typiskt kalkylblad när du växer." },
      { q: "Vad kostar TidyFlow?", a: "Planer börjar på $25/månad för Startup. Standard och Premium lägger till fler fastigheter, städare och funktioner som Google Sheets och QuickBooks-synk." },
      { q: "Finns det gratis provperiod?", a: "Ja. Alla planer inkluderar 14 dagars gratis provperiod med självbetjänad registrering." },
      { q: "Kan jag uppgradera när mitt företag växer?", a: "Ja. Byt plan i appen när fastighets- och teamgränser ökar." },
    ],
  },
};
