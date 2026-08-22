import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_PL: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Oprogramowanie dla firm sprzątających | Harmonogram, śledzenie i wynagrodzenia | TidyFlow",
    seoDescription:
      "TidyFlow to oprogramowanie dla firm sprzątających do planowania zleceń, weryfikacji pracy w terenie przez GPS, dowodów fotograficznych, wynagrodzeń z potwierdzonych godzin i raportów dla klientów — online lub offline.",
    keywords:
      "oprogramowanie dla firm sprzątających, platforma dla firm sprzątających, oprogramowanie operacyjne dla sprzątania, aplikacja terenowa dla sprzątaczy, oprogramowanie dyspozycji sprzątania, TidyFlow",
    eyebrow: "Oprogramowanie dla firm sprzątających",
    h1: "System operacyjny dla firm sprzątających",
    heroSubtitle:
      "TidyFlow łączy właścicieli, managerów i sprzątaczy na jednej platformie — planuj cykliczne zlecenia, weryfikuj pracę na miejscu przez GPS i zdjęcia, naliczaj wynagrodzenia z zarejestrowanych godzin i wysyłaj dowody klientom.",
    navLabel: "Oprogramowanie dla firm sprzątających",
    problems: {
      title: "Co się psuje, gdy firma sprzątająca działa na arkuszach kalkulacyjnych i czatach grupowych",
      items: [
        "Umowy cykliczne są w jednym arkuszu, dostępność sprzątaczy w drugim, a skargi klientów na WhatsApp.",
        "Managerowie nie widzą, czy zespół faktycznie rozpoczął zlecenie, czy tylko przejechał obok budynku.",
        "Spory o wynagrodzenie zaczynają się, bo godziny wpisywano z pamięci zamiast weryfikować na miejscu.",
        "Klienci proszą o dowód wykonania pracy, a Ty szukasz zdjęć w galerii telefonu.",
        "Zespoły terenowe tracą sygnał w piwnicach, parkingach i pomieszczeniach technicznych — i nie mogą dokończyć zlecenia w aplikacji.",
      ],
    },
    solution: {
      title: "Jedna platforma od harmonogramu po dowód i wynagrodzenie",
      paragraphs: [
        "TidyFlow jest stworzony specjalnie dla operacji firm sprzątających — nie dla ogólnego serwisu terenowego. Właściciele mają widoczność przychodów i kontrolę subskrypcji. Managerowie tworzą grafiki, przydzielają sprzątaczy i przeglądają zakończenia zweryfikowane GPS. Sprzątacze dostają prostą listę zleceń mobilnych z checklistami offline, timerami i przesyłaniem zdjęć.",
        "Gdy zlecenie się kończy, godziny trafiają do procesów wynagrodzeń, zdjęcia mogą generować raporty PDF dla klientów, a managerowie mają ślad audytowy bez gonienia wiadomości w pięciu aplikacjach.",
      ],
    },
    features: [
      {
        title: "Planowanie zleceń i umowy cykliczne",
        description: "Kalendarz, kreator grafiku i cykliczne wizyty z uwzględnieniem urlopów przy przydzielaniu.",
        benefit: "Przestań co niedzielę wieczorem budować tydzień od nowa w arkuszach.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Oprogramowanie do planowania sprzątania",
      },
      {
        title: "Śledzenie terenowe z weryfikacją GPS",
        description: "Lokalizacja sprawdzana przy starcie i zakończeniu; na żywo GPS podczas aktywnych zleceń w obsługiwanych procesach.",
        benefit: "Wiedz, które obiekty faktycznie obsłużono — nie tylko deklarowano.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Rejestracja czasu pracy sprzątaczy",
      },
      {
        title: "Wynagrodzenia z zweryfikowanych godzin",
        description: "Timery zadań, zatwierdzanie godzin pracy i naliczanie wynagrodzeń z zarejestrowanego czasu zlecenia.",
        benefit: "Ogranicz spory dzięki godzinom powiązanym z wykonanymi zleceniami.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Oprogramowanie do wynagrodzeń w sprzątaniu",
      },
      {
        title: "Operacje terenowe offline",
        description: "Pełne zakończenie zlecenia bez internetu — checklisty, timer, zdjęcia w kolejce i synchronizacja później.",
        benefit: "Sprzątacze kończą zlecenia w budynkach ze słabym sygnałem zamiast dzwonić do biura.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Aplikacja sprzątająca offline",
      },
    ],
    howItWorks: {
      title: "Planuj → Przydziel → Śledź → Weryfikuj → Raportuj",
      steps: [
        { title: "Planuj", description: "Twórz jednorazowe lub cykliczne zlecenia z webu lub telefonu. Synchronizuj z Google Sheets, jeśli zespół nadal prowadzi główny grafik w arkuszu." },
        { title: "Przydziel", description: "Przeciągaj sprzątaczy na grafik. AI może zasugerować najlepszego kandydata na podstawie historii, lokalizacji i urlopów — manager zawsze potwierdza." },
        { title: "Śledź", description: "Sprzątacze uruchamiają timer zlecenia na miejscu. Weryfikacja GPS oznacza starty i zakończenia z dala od obiektu." },
        { title: "Weryfikuj", description: "Checklisty, zdjęcia przed/po i opcjonalna ocena AI dają managerom dowody jakości." },
        { title: "Raportuj", description: "Generuj raporty PDF zleceń lub udostępniaj link do portalu klienta. Godziny trafiają do wynagrodzeń i fakturowania." },
      ],
    },
    useCases: {
      title: "Firmy sprzątające działające na TidyFlow",
      items: [
        { title: "Sprzątanie komercyjne i kontraktowe", description: "Umowy wieloobiektowe z cyklicznymi wizytami, dowodami dla klientów i procesami QA managerów." },
        { title: "Zespoły sprzątające i facility", description: "Zmiany nocne, pomieszczenia techniczne i budynki ze słabym sygnałem — tryb offline utrzymuje zespół w ruchu." },
        { title: "Rosnące lokalne firmy", description: "Zastąp chaos arkuszy, dodając obiekty i sprzątaczy bez wcześniejszego zatrudniania admina operacyjnego." },
        { title: "Zespoły wielojęzyczne", description: "Platforma dostępna w 11 językach dla właścicieli, managerów i pracowników terenowych." },
      ],
    },
    faqs: [
      { q: "Czym jest oprogramowanie dla firm sprzątających?", a: "To oprogramowanie, które pomaga firmom sprzątającym planować zlecenia, zarządzać sprzątaczami, śledzić pracę w terenie, weryfikować jakość oraz naliczać wynagrodzenia lub rozliczać klientów z jednego systemu zamiast arkuszy i komunikatorów." },
      { q: "Czy TidyFlow jest tylko dla dużych firm?", a: "Nie. Plany zaczynają się od 25 USD/miesiąc dla mniejszych zespołów. Możesz prowadzić planowanie, śledzenie terenowe i dowody na rosnącym składzie bez wdrożenia enterprise." },
      { q: "Czy TidyFlow działa offline?", a: "Tak. Sprzątacze mogą wypełniać checklisty, uruchamiać timer zlecenia i robić zdjęcia offline. Dane synchronizują się po powrocie łączności." },
      { q: "Czy mogę nadal używać Google Sheets?", a: "Tak. TidyFlow oferuje dwukierunkową synchronizację z Google Sheets, więc możesz zachować główną listę w arkuszu, a aplikacja obsłuży wykonanie w terenie." },
      { q: "Jak zacząć?", a: "Rozpocznij 14-dniowy bezpłatny okres próbny ze strony cennika. Właściciele konfigurują obiekty, zapraszają sprzątaczy i przydzielają pierwsze zlecenia z webu lub telefonu." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Oprogramowanie do zarządzania sprzątaniem | Kontrola operacji | TidyFlow",
    seoDescription:
      "Oprogramowanie do zarządzania sprzątaniem dla właścicieli i managerów operacyjnych — grafiki, status zleceń na żywo, urlopy zespołu, śledzenie problemów, zatwierdzanie wynagrodzeń i dowody dla klientów w jednym panelu.",
    keywords:
      "oprogramowanie do zarządzania sprzątaniem, platforma operacyjna sprzątania, system zarządzania sprzątaniem, zarządzanie firmą sprzątającą, TidyFlow",
    eyebrow: "Oprogramowanie do zarządzania sprzątaniem",
    h1: "Prowadź operacje sprzątania z jednego panelu zarządzania",
    heroSubtitle:
      "Daj managerom widoczność harmonogramów, zakończeń w terenie, kontroli jakości i zatwierdzeń wynagrodzeń — bez gonienia sprzątaczy na WhatsApp ani przebudowywania grafików w arkuszach.",
    navLabel: "Zarządzanie sprzątaniem",
    problems: {
      title: "Dlaczego operacje sprzątania rozpadają się w skali",
      items: [
        "Tylko właściciel wie, który klient w czwartek jest niedostatecznie obsadzony.",
        "Managerowie co tydzień wpisują te same cykliczne zlecenia, bo nic nie automatyzuje wizyt kontraktowych.",
        "Skargi jakościowe docierają, zanim ktoś przejrzy zdjęcia lub wyniki checklist z zlecenia.",
        "Wnioski urlopowe wiszą w wiadomościach, a grafik publikuje się z znanymi konfliktami.",
        "Zatwierdzanie wynagrodzeń to porównywanie ręcznych kart czasu pracy z pamięcią.",
      ],
    },
    solution: {
      title: "Narzędzia zarządzania powiązane z realnymi danymi terenowymi",
      paragraphs: [
        "Oprogramowanie zarządzania TidyFlow łączy planowanie, HR zespołu i wykonanie w terenie. Managerowie widzą aktualizacje statusu zleceń w czasie rzeczywistym, przeglądają zakończenia zweryfikowane GPS i zatwierdzają godziny przed naliczeniem wynagrodzeń.",
        "Śledzenie problemów, ocena QA i dowody dla klientów są obok grafiku — więc decyzje zarządcze opierają się na tych samych danych, które sprzątacze generują na miejscu.",
      ],
    },
    features: [
      {
        title: "Kreator grafiku z uwzględnieniem urlopów",
        description: "Przydzielanie metodą drag-and-drop z poszanowaniem zatwierdzonych urlopów i dostępności.",
        benefit: "Publikuj grafiki bez ręcznego sprawdzania konfliktów.",
        linkHref: "/features",
        linkLabel: "Funkcje zespołu i planowania",
      },
      {
        title: "Status zleceń w czasie rzeczywistym",
        description: "Widzisz, kiedy zlecenia startują, są wstrzymane i kończą się na wszystkich obiektach.",
        benefit: "Interweniuj, zanim pominięta wizyta stanie się eskalacją u klienta.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Oprogramowanie do planowania",
      },
      {
        title: "Procesy QA i problemów",
        description: "Przeglądy jakości managerów, dzienniki problemów i dowody fotograficzne przy zakończonych zleceniach.",
        benefit: "Obsługuj reklamacje ze śladem audytowym na poziomie zlecenia.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Oprogramowanie inspekcyjne",
      },
      {
        title: "Panel przychodów właściciela",
        description: "Widoczność finansowa i analizy Revenue AI w obsługiwanych planach.",
        benefit: "Właściciele widzą wyniki bez eksportu pięciu raportów.",
        linkHref: "/pricing",
        linkLabel: "Plany i cennik",
      },
    ],
    howItWorks: {
      title: "Planuj → Przydziel → Monitoruj → Przeglądaj → Zatwierdzaj",
      steps: [
        { title: "Planuj", description: "Buduj tydzień w widoku kalendarza lub grafiku. Cykliczne zlecenia automatycznie generują wizyty kontraktowe." },
        { title: "Przydziel", description: "Umieszczaj sprzątaczy na zleceniach. Rekomendacje AI opcjonalne — managerowie wybierają ostatecznych wykonawców." },
        { title: "Monitoruj", description: "Śledź starty, flagi GPS i postęp checklist z panelu zarządzania." },
        { title: "Przeglądaj", description: "Otwieraj zakończone zlecenia pod kątem zdjęć, wyników QA i szkiców raportów dla klientów." },
        { title: "Zatwierdzaj", description: "Zatwierdzaj godziny pracy i naliczaj wynagrodzenia z zweryfikowanego czasu zadań." },
      ],
    },
    useCases: {
      title: "Scenariusze zarządzania obsługiwane przez TidyFlow",
      items: [
        { title: "Managerowie operacyjni", description: "Codzienna dyspozycja, follow-up jakości i koordynacja zespołu na wielu obiektach." },
        { title: "Właściciele firm", description: "Kontrola subskrypcji, widok przychodów i dowód, że umowy są realizowane." },
        { title: "Nadzorcy wieloobiektowi", description: "Porównuj status zakończeń i problemy między obiektami w jednym miejscu." },
        { title: "Koordynatorzy franczyz", description: "Spójne procesy i dostęp oparty na rolach wraz ze wzrostem zespołów." },
      ],
    },
    faqs: [
      { q: "Co powinno zawierać oprogramowanie do zarządzania sprzątaniem?", a: "Minimum: planowanie, przydzielanie zespołu, status terenowy, rejestracja czasu, dowód jakości i zatwierdzanie wynagrodzeń lub godzin. TidyFlow obejmuje to w jednej platformie." },
      { q: "Czy managerowie mogą używać TidyFlow na telefonie?", a: "Tak. Managerowie mogą planować, przydzielać i przeglądać zlecenia z telefonu lub webu." },
      { q: "Jak działa dostęp oparty na rolach?", a: "Właściciele, managerowie i sprzątacze widzą różne ekrany. Sprzątacze dostają listy zleceń i narzędzia terenowe; managerowie — grafik, zatwierdzenia i raporty." },
      { q: "Czy TidyFlow zastępuje mojego księgowego?", a: "Nie. TidyFlow obsługuje operacje i może synchronizować faktury z QuickBooks Online. Księgowy nadal odpowiada za podatki i strategię księgową." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Oprogramowanie dla sprzątania kontraktowego | Zmiany nocne i zespoły wieloobiektowe | TidyFlow",
    seoDescription:
      "Oprogramowanie dla sprzątania kontraktowego — cykliczne wizyty, aplikacja terenowa offline, rejestracja GPS, checklisty i dowody dla klientów facility.",
    keywords:
      "oprogramowanie dla sprzątania kontraktowego, oprogramowanie zarządzania sprzątaniem kontraktowym, aplikacja do planowania sprzątania kontraktowego, oprogramowanie kontraktowe, TidyFlow",
    eyebrow: "Oprogramowanie dla sprzątania kontraktowego",
    h1: "Oprogramowanie dla sprzątania kontraktowego stworzone do pracy na obiektach",
    heroSubtitle:
      "Prowadź cykliczne trasy sprzątania w biurach, szkołach i obiektach użytkowych. Sprzątacze pracują offline w pomieszczeniach technicznych i piwnicach, a managerowie weryfikują każdą wizytę przez GPS, checklisty i zdjęcia.",
    navLabel: "Oprogramowanie kontraktowe",
    problems: {
      title: "Umowy kontraktowe upadają, gdy aplikacja terenowa zawodzi",
      items: [
        "Nocne ekipy trafiają w martwe strefy na klatkach schodowych i nie mogą zalogować zakończenia.",
        "Zastępcy przyjeżdżają bez notatek obiektowych, które były na czacie grupowym.",
        "Managerowie obiektów proszą o dowód, a Ty wysyłasz ogólny e-mail bez znaczników czasu.",
        "Rozszerzenie zakresu o dodatkowe pomieszczenia jest niewidoczne aż do fakturowania.",
        "Wiele budynków ma jednego nadzorę, który nie może fizycznie zweryfikować każdego startu.",
      ],
    },
    solution: {
      title: "Procesy sprzątania kontraktowego w jednym systemie",
      paragraphs: [
        "TidyFlow obsługuje cykliczne harmonogramy, checklisty per obiekt i zakończenie zlecenia offline — kombinację potrzebną firmom kontraktowym, gdy każdy budynek ma inne zasady dostępu i jakość sygnału.",
        "Czat per zadanie trzyma instrukcje obiektowe przy zleceniu. Weryfikacja GPS i dowody fotograficzne dają klientom facility dowody bez dodatkowej pracy administracyjnej.",
      ],
    },
    features: [
      {
        title: "Cykliczne trasy kontraktowe",
        description: "Automatyzuj tygodniowe i miesięczne wizyty per obiekt z przydzieleniem zespołu.",
        benefit: "Harmonogramy kontraktowe odnawiają się bez ręcznego kopiowania.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Oprogramowanie do planowania",
      },
      {
        title: "Aplikacja kontraktowa offline",
        description: "Timer, checklista i zdjęcia działają bez łączności; synchronizacja po ponownym połączeniu.",
        benefit: "Nocne ekipy kończą zlecenia pod ziemią zamiast pomijać aplikację.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Oprogramowanie sprzątające offline",
      },
      {
        title: "Checklisty obiektowe i zdjęcia",
        description: "Zadania pokój po pokoju z dowodami przed/po przy zakończeniu.",
        benefit: "Dokumentuj zakres dla QA i sporów z klientami.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspekcja i kontrola jakości",
      },
      {
        title: "Przycisk bezpieczeństwa SOS",
        description: "Jedno dotknięcie alertu do managerów dla pracowników samotnie na późnych zmianach.",
        benefit: "Daj nocnym sprzątaczom bezpośrednią linię bezpieczeństwa z ekranu zlecenia.",
        linkHref: "/features",
        linkLabel: "Funkcje bezpieczeństwa terenowego",
      },
    ],
    howItWorks: {
      title: "Kontrakt → Planuj → Wykonuj → Udowadniaj → Fakturuj",
      steps: [
        { title: "Kontrakt", description: "Skonfiguruj obiekty z notatkami dostępu i szablonami checklist per lokalizacja." },
        { title: "Planuj", description: "Twórz cykliczne wizyty i przydzielaj stałe zespoły lub rotujący personel." },
        { title: "Wykonuj", description: "Sprzątacze realizują zlecenie offline lub online — timer, checklista, zdjęcia na miejscu." },
        { title: "Udowadniaj", description: "Managerowie przeglądają zakończenia zweryfikowane GPS i dowody fotograficzne." },
        { title: "Fakturuj", description: "Rozliczaj klientów z wykonanej pracy; synchronizuj faktury z QuickBooks w obsługiwanych planach." },
      ],
    },
    useCases: {
      title: "Zespoły kontraktowe korzystające z TidyFlow",
      items: [
        { title: "Sprzątanie biurowe i korporacyjne", description: "Sprzątanie po godzinach z raportami PDF dla klientów." },
        { title: "Edukacja i budynki publiczne", description: "Wielopiętrowe obiekty ze słabym sygnałem wewnętrznym — tryb offline w zestawie." },
        { title: "Sprzątanie przemysłowe i techniczne", description: "Checklisty dla stref ograniczonych i wrażliwych pod względem bezpieczeństwa." },
        { title: "Podwykonawcy kontraktowi", description: "Dostęp oparty na rolach dla managerów klienta i personelu terenowego." },
      ],
    },
    faqs: [
      { q: "Czy TidyFlow to oprogramowanie kontraktowe czy domowe?", a: "TidyFlow jest stworzony dla profesjonalnych operacji sprzątania — komercyjne, kontraktowe i facility to główne zastosowanie." },
      { q: "Czy sprzątacze mogą rejestrować wejście bez sygnału?", a: "Tak. Aplikacja terenowa kolejkuje GPS i zdarzenia zlecenia offline i synchronizuje po powrocie łączności." },
      { q: "Czy możemy udostępniać dowody managerom obiektów?", a: "Tak. Raporty PDF zleceń i bezpieczne linki portalu klienta udostępniają dowody wykonania." },
      { q: "Czy TidyFlow obsługuje cykliczne zmiany nocne?", a: "Tak. Cykliczne zlecenia i narzędzia grafiku obsługują stałe trasy nocne i rotujące zespoły." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Oprogramowanie do sprzątania komercyjnego | Umowy wieloobiektowe | TidyFlow",
    seoDescription:
      "Oprogramowanie do sprzątania komercyjnego dla umów biurowych, retail i facility — planowanie, inspekcje QC, dowody dla klientów, fakturowanie i zarządzanie zespołem.",
    keywords:
      "oprogramowanie do sprzątania komercyjnego, oprogramowanie do sprzątania biurowego, platforma kontraktowa, oprogramowanie facility, TidyFlow",
    eyebrow: "Oprogramowanie do sprzątania komercyjnego",
    h1: "Oprogramowanie do sprzątania komercyjnego dla operacji kontraktowych",
    heroSubtitle:
      "Zarządzaj wieloobiektowymi umowami komercyjnymi z cyklicznymi harmonogramami, checklistami inspekcyjnymi, dowodami fotograficznymi dla klientów i wynagrodzeniami z zweryfikowanych godzin terenowych.",
    navLabel: "Sprzątanie komercyjne",
    problems: {
      title: "Umowy komercyjne wymagają więcej niż aplikacji kalendarza",
      items: [
        "Każdy obiekt klienta ma inny zakres, klucze i standardy inspekcji.",
        "Account managerowie obiecują jakość, a operacje nie mają centralnego rejestru QC.",
        "Dodatkowe zlecenia giną między e-mailem a tygodniowym grafikiem.",
        "Faktury wychodzą, zanim ktoś potwierdzi wszystkie zaplanowane wizyty.",
        "Utrata klienta następuje po jednym pominiętym generalnym sprzątaniu, którego nikt nie udokumentował.",
      ],
    },
    solution: {
      title: "Procesy komercyjne od oferty po dowód",
      paragraphs: [
        "TidyFlow łączy planowanie komercyjne z weryfikacją jakości i raportami dla klientów. Managerowie oceniają QA zakończonych zleceń, logują problemy per obiekt i udostępniają markowe dowody PDF.",
        "Fakturowanie i synchronizacja QuickBooks w obsługiwanych planach utrzymują finanse zgodne z wykonaną pracą kontraktową.",
      ],
    },
    features: [
      {
        title: "Planowanie wieloobiektowe",
        description: "Kalendarz i cykliczne zlecenia w całym portfolio komercyjnym.",
        benefit: "Jeden widok każdego obiektu w umowie.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planowanie",
      },
      {
        title: "Dowody dla klientów i raporty PDF",
        description: "Markowe raporty do pobrania i bezpieczne linki portalu.",
        benefit: "Daj managerom obiektów dowody bez ręcznych e-maili ze zdjęciami.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspekcja i dowody",
      },
      {
        title: "Fakturowanie klientów",
        description: "Faktury z wykonanych zadań z pozycjami szczegółowymi.",
        benefit: "Rozliczaj na podstawie zweryfikowanych zakończeń, nie domysłów.",
        linkHref: "/integrations",
        linkLabel: "Integracja QuickBooks",
      },
      {
        title: "Śledzenie problemów",
        description: "Rejestruj i rozwiązuj problemy obiektowe z terenu lub biura.",
        benefit: "Zamknij pętlę, gdy obiekt zgłasza problem.",
        linkHref: "/features",
        linkLabel: "Funkcje jakości",
      },
    ],
    howItWorks: {
      title: "Zakres → Planuj → Obsługuj → Inspekcja → Rozlicz",
      steps: [
        { title: "Zakres", description: "Definiuj obiekty, checklisty i notatki dostępu per klient komercyjny." },
        { title: "Planuj", description: "Ustaw częstotliwość cyklicznej obsługi i przydziel zespoły." },
        { title: "Obsługuj", description: "Sprzątacze kończą zlecenia z timerem, GPS i checklistą na telefonie." },
        { title: "Inspekcja", description: "Managerowie oceniają QA wykonanej pracy ze zdjęciami i procesami scoringu." },
        { title: "Rozlicz", description: "Fakturuj klientów i opcjonalnie synchronizuj z QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Przypadki użycia sprzątania komercyjnego",
      items: [
        { title: "Biura i coworkingi", description: "Codzienna i tygodniowa obsługa z widocznymi dowodami dla klientów." },
        { title: "Sieci retail i hospitality", description: "Wiele lokalizacji ze spójnymi checklistami." },
        { title: "Portfele zarządzania nieruchomościami", description: "Śledź problemy i wizyty w wielu budynkach." },
        { title: "Firmy B2B kontraktowe", description: "Widoczność operacji dla właścicieli sprzedających managerom facility." },
      ],
    },
    faqs: [
      { q: "Czym jest oprogramowanie do sprzątania komercyjnego?", a: "Oprogramowanie, które pomaga firmom B2B planować obiekty kontraktowe, weryfikować realizację usług, zarządzać zespołami i fakturować klientów z jednej platformy." },
      { q: "Czy klienci widzą zdjęcia zleceń?", a: "Kontrolujesz dowody dla klientów przez raporty PDF i linki portalu — nie wewnętrzny czat managerów." },
      { q: "Czy TidyFlow obsługuje umowy wielolokalizacyjne?", a: "Tak. Obiekty, cykliczne zlecenia i grafiki skalują się do wieloobiektowych portfolio komercyjnych." },
      { q: "Czy możemy zbierać opinie klientów?", a: "Tak. TidyFlow obejmuje zbieranie opinii klientów z routingiem negatywnej informacji zwrotnej." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Oprogramowanie do planowania sprzątania | Cykliczne zlecenia i grafiki | TidyFlow",
    seoDescription:
      "Oprogramowanie do planowania sprzątania z kalendarzem, kreatorem grafiku, cyklicznymi zleceniami, sugestiami AI, zarządzaniem urlopami i synchronizacją Google Sheets.",
    keywords:
      "oprogramowanie do planowania sprzątania, oprogramowanie dyspozycji sprzątania, planowanie usług domowych, aplikacja do planowania kontraktowego, TidyFlow",
    eyebrow: "Oprogramowanie do planowania sprzątania",
    h1: "Oprogramowanie do planowania sprzątania dopasowane do realnych grafików",
    heroSubtitle:
      "Buduj tygodniowe grafiki, automatyzuj cykliczne wizyty, przydzielaj sprzątaczy z uwzględnieniem urlopów i wysyłaj aktualizacje do aplikacji terenowej natychmiast.",
    navLabel: "Planowanie",
    problems: {
      title: "Planowanie się psuje, gdy narzędzie ignoruje rzeczywistość sprzątania",
      items: [
        "Umowy cykliczne wpisywane ręcznie co miesiąc.",
        "Zastępcy przydzielani bez wiedzy, kto jest na urlopie.",
        "Sprzątacze dowiadują się o zmianach grafiku z czatu grupowego, nie z aplikacji.",
        "Planowanie tras to zgadywanie — czas dojazdu między obiektami jest niewidoczny.",
        "Grafik w arkuszu i aplikacja terenowa nigdy się nie zgadzają.",
      ],
    },
    solution: {
      title: "Planowanie połączone z aplikacją terenową",
      paragraphs: [
        "Planowanie TidyFlow to nie samodzielny kalendarz — przydzielenia trafiają na listy zleceń sprzątaczy w czasie rzeczywistym. Cykliczne zlecenia automatycznie generują wizyty kontraktowe. Kreator grafiku respektuje zatwierdzone urlopy.",
        "Dwukierunkowa synchronizacja Google Sheets pozwala zachować główny arkusz, podczas gdy TidyFlow wykonuje dyspozycję. AI może sugerować wykonawców; manager zawsze podejmuje ostateczną decyzję.",
      ],
    },
    features: [
      {
        title: "Kalendarz i kreator grafiku",
        description: "Widok tygodnia, przydzielanie drag-and-drop, planowanie z uwzględnieniem urlopów.",
        benefit: "Zbuduj grafik raz i opublikuj w terenie.",
        linkHref: "/how-it-works",
        linkLabel: "Jak działa planowanie",
      },
      {
        title: "Zlecenia cykliczne",
        description: "Tygodniowe, miesięczne i niestandardowe wzorce powtórzeń per obiekt.",
        benefit: "Przestań kopiować te same wizyty w każdym cyklu.",
        linkHref: "/features",
        linkLabel: "Funkcje planowania",
      },
      {
        title: "Rekomendacje AI dla sprzątaczy",
        description: "Sugeruj najlepszego wykonawcę według historii, lokalizacji i dostępności.",
        benefit: "Szybsza dyspozycja w ruchliwe poranki — manager potwierdza.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "Przydzielanie AI",
      },
      {
        title: "Optymalizacja tras",
        description: "Skróć czas dojazdu między obiektami w obsługiwanych procesach.",
        benefit: "Więcej zleceń na zmianę bez zgadywania nadgodzin.",
        linkHref: "/integrations",
        linkLabel: "Integracja map",
      },
    ],
    howItWorks: {
      title: "Planuj → Przydziel → Powiadom → Wykonaj → Dostosuj",
      steps: [
        { title: "Planuj", description: "Twórz zlecenia w widoku kalendarza lub importuj z Google Sheets." },
        { title: "Przydziel", description: "Przeciągaj sprzątaczy na zmiany; grafik oznacza konflikty urlopowe." },
        { title: "Powiadom", description: "Przydzielenia pojawiają się natychmiast na urządzeniach sprzątaczy." },
        { title: "Wykonaj", description: "Zespoły terenowe startują zlecenia z rejestracją zweryfikowaną GPS." },
        { title: "Dostosuj", description: "Przydziel ponownie otwarte zlecenia z telefonu, gdy ktoś zgłosi chorobę." },
      ],
    },
    useCases: {
      title: "Scenariusze planowania",
      items: [
        { title: "Sprzątanie kontraktowe cykliczne", description: "Automatyzuj stałe tygodniowe trasy między obiektami klientów." },
        { title: "Usługi domowe", description: "Zmienne tygodniowe harmonogramy z szybkim przydzielaniem." },
        { title: "Dyspozycja wielu zespołów", description: "Kilku nadzorców planuje nakładające się terytoria." },
        { title: "Rosnące firmy opuszczające arkusze", description: "Synchronizacja z arkuszami podczas przejścia dyspozycji do aplikacji." },
      ],
    },
    faqs: [
      { q: "Czy TidyFlow obsługuje cykliczne zlecenia sprzątania?", a: "Tak. Cykliczne zlecenia automatyzują powtarzające się wizyty per obiekt z przydzieleniem zespołu." },
      { q: "Czy planowanie synchronizuje się z Google Sheets?", a: "Tak. Dwukierunkowa synchronizacja utrzymuje główne arkusze zgodne z przydzieleniami w aplikacji." },
      { q: "Czy sprzątacze widzą tylko własny harmonogram?", a: "Tak. Sprzątacze widzą dzisiejszą listę zleceń; managerowie pełny grafik." },
      { q: "Czy jest optymalizacja tras?", a: "Tak. TidyFlow obejmuje narzędzia planowania tras z integracją Google Maps." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Oprogramowanie do wynagrodzeń w sprzątaniu | Zweryfikowane godziny i karty czasu | TidyFlow",
    seoDescription:
      "Oprogramowanie do wynagrodzeń w sprzątaniu oparte na godzinach zadań zweryfikowanych GPS, zatwierdzaniu kart czasu, regułach płacowych, naliczaniu wynagrodzeń i PDF pasków dla zespołów sprzątających.",
    keywords:
      "oprogramowanie do wynagrodzeń w sprzątaniu, aplikacja wynagrodzeń sprzątaczy, wynagrodzenia kontraktowe, oprogramowanie kart czasu sprzątania, TidyFlow",
    eyebrow: "Oprogramowanie do wynagrodzeń w sprzątaniu",
    h1: "Oprogramowanie do wynagrodzeń w sprzątaniu z zweryfikowanych godzin zleceń",
    heroSubtitle:
      "Generuj wynagrodzenia z timerów zadań i zatwierdzonych godzin pracy — nie z ręcznych kart czasu. Weryfikacja GPS ogranicza spory i daje managerom ślad audytowy.",
    navLabel: "Wynagrodzenia",
    problems: {
      title: "Spory o wynagrodzenie zaczynają się od niezweryfikowanych godzin",
      items: [
        "Sprzątacze zaokrąglają czas, bo papierowe karty łatwo zawyżyć.",
        "Managerowie nie mogą powiązać pozycji paska z konkretnym zakończonym zleceniem.",
        "Nadgodziny zaskakują, bo dodatkowe zlecenia nie były centralnie logowane.",
        "Stawki kontrahentów i pracowników są w różnych notatnikach.",
        "Finanse wpisują godziny do księgowości po tym, jak operacje zatwierdziły coś innego.",
      ],
    },
    solution: {
      title: "Wynagrodzenia powiązane z wykonaną pracą terenową",
      paragraphs: [
        "TidyFlow loguje godziny z timera zlecenia na miejscu. Weryfikacja GPS oznacza starty i zakończenia z dala od obiektu. Managerowie zatwierdzają godziny pracy przed naliczeniem wynagrodzeń.",
        "Reguły płacowe pracowników, faktury wynagrodzeń i synchronizacja rachunków QuickBooks w obsługiwanych planach utrzymują zgodność operacji i finansów.",
      ],
    },
    features: [
      {
        title: "Timer zadań i karty czasu",
        description: "Start, przerwa, wznowienie, złożenie — godziny przypisane do każdego zlecenia.",
        benefit: "Każda godzina powiązana z wizytą na obiekcie.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Rejestracja czasu",
      },
      {
        title: "Obecność zweryfikowana GPS",
        description: "Lokalizacja sprawdzana przy rejestracji wejścia i zakończeniu zlecenia.",
        benefit: "Kwestionuj spory z dowodami lokalizacji.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Weryfikacja GPS",
      },
      {
        title: "Reguły płacowe i naliczanie wynagrodzeń",
        description: "Stawki per użytkownik i generowanie wynagrodzeń z zatwierdzonych godzin.",
        benefit: "Jeden proces zatwierdzania przed wysyłką pasków.",
        linkHref: "/features",
        linkLabel: "Funkcje wynagrodzeń",
      },
      {
        title: "Rachunki wynagrodzeń QuickBooks",
        description: "Synchronizuj zatwierdzone wynagrodzenia z QuickBooks w obsługiwanych planach.",
        benefit: "Księgowość otrzymuje sumy zatwierdzone przez operacje.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "Synchronizacja QuickBooks",
      },
    ],
    howItWorks: {
      title: "Planuj → Rejestruj godziny → Weryfikuj → Zatwierdzaj → Wypłać",
      steps: [
        { title: "Planuj", description: "Przydziel zlecenia, aby oczekiwane godziny były widoczne przed zmianą." },
        { title: "Rejestruj", description: "Sprzątacze uruchamiają timer na miejscu; GPS weryfikuje lokalizację." },
        { title: "Weryfikuj", description: "Managerowie przeglądają oznaczone rejestracje i niekompletne checklisty." },
        { title: "Zatwierdzaj", description: "Zatwierdzaj godziny pracy i korekty." },
        { title: "Wypłać", description: "Nalicz wynagrodzenia i eksportuj faktury PDF lub synchronizuj z QuickBooks." },
      ],
    },
    useCases: {
      title: "Scenariusze wynagrodzeń",
      items: [
        { title: "Zespoły sprzątające godzinowe", description: "Płatność z zweryfikowanego czasu zadań zamiast papierowych kart." },
        { title: "Mieszane W-2 i kontrahenci", description: "Reguły płacowe per użytkownik z fakturami PDF wynagrodzeń." },
        { title: "Ekipy z częstymi sporami", description: "GPS i historia zleceń dla każdej pozycji paska." },
        { title: "Właściciele naliczający wynagrodzenia nocą", description: "Zbiorcze zatwierdzanie z panelu zarządzania." },
      ],
    },
    faqs: [
      { q: "Czy TidyFlow śledzi godziny sprzątaczy?", a: "Tak. Timery zleceń logują godziny per zadanie. Sprzątacze mogą też składać godziny pracy do zatwierdzenia przez managera." },
      { q: "Czy GPS dowodzi obecności sprzątaczy na obiekcie?", a: "Weryfikacja GPS sprawdza lokalizację przy starcie i zakończeniu. Managerowie otrzymują alerty przy rejestracji z dala od budynku." },
      { q: "Czy mogę eksportować wynagrodzenia do QuickBooks?", a: "W obsługiwanych planach zatwierdzone wynagrodzenia mogą synchronizować się jako rachunki w QuickBooks Online." },
      { q: "Czy TidyFlow zastępuje pełnego dostawcę HR/płac?", a: "TidyFlow generuje wynagrodzenia z zweryfikowanych godzin operacyjnych. Rozliczenia podatkowe i pełna zgodność HR pozostają w gestii księgowego." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Oprogramowanie inspekcyjne do sprzątania | Checklisty i dowody fotograficzne | TidyFlow",
    seoDescription:
      "Oprogramowanie inspekcyjne do sprzątania z checklistami pokojowymi, zdjęciami przed/po, oceną QA, raportami PDF dla klientów i śledzeniem problemów w weryfikacji jakości.",
    keywords:
      "oprogramowanie inspekcyjne do sprzątania, oprogramowanie kontroli jakości sprzątania, aplikacja checklist sprzątania, oprogramowanie inspekcyjne kontraktowe, TidyFlow",
    eyebrow: "Oprogramowanie inspekcyjne do sprzątania",
    h1: "Oprogramowanie inspekcyjne do sprzątania z checklistą i dowodami fotograficznymi",
    heroSubtitle:
      "Prowadź inspekcje pokój po pokoju, rób zdjęcia przed/po, oceniaj jakość w procesach QA managerów i udostępniaj markowe dowody klientom.",
    navLabel: "Inspekcje",
    problems: {
      title: "Problemy jakości, gdy inspekcje są poza zleceniem",
      items: [
        "Checklisty to papierowe PDF-y, które sprzątacze zaznaczają bez otwierania na miejscu.",
        "Zdjęcia przed/po siedzą w osobistych galeriach — niepowiązane z obiektem.",
        "Managerowie inspekcjonują losowo zamiast według procesu scoringu.",
        "Klienci kwestionują jakość, a Ty nie masz pakietu dowodów ze znacznikami czasu.",
        "Problemy znalezione na miejscu giną, zanim ktoś je zaloguje.",
      ],
    },
    solution: {
      title: "Inspekcje wykonywane i przechowywane w rekordzie zlecenia",
      paragraphs: [
        "Checklisty TidyFlow działają w aplikacji mobilnej sprzątacza — opcjonalne reguły mogą wymagać ukończenia checklisty przed startem timera. Zdjęcia przesyłane na miejscu, także offline z późniejszą synchronizacją.",
        "Managerowie używają procesów oceny QA do przeglądu zakończeń. Analiza zdjęć AI może oznaczać problemy jakości w obsługiwanych planach. Raporty PDF i linki portalu klienta pakują dowody dla klientów facility.",
      ],
    },
    features: [
      {
        title: "Checklisty pokój po pokoju",
        description: "Szablony checklist per obiekt z wymaganymi pozycjami.",
        benefit: "Standaryzuj zakres przy każdej wizycie.",
        linkHref: "/features",
        linkLabel: "Funkcje checklist",
      },
      {
        title: "Zdjęcia przed/po",
        description: "Rejestruj dowody przy zleceniu; działa offline.",
        benefit: "Zdjęcia pozostają przy wizycie, nie w galerii telefonu.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Zdjęcia offline",
      },
      {
        title: "Proces oceny QA",
        description: "Przegląd managera i wyniki jakości przy zakończonych zleceniach.",
        benefit: "Zamień kontrole punktowe w powtarzalny proces.",
        linkHref: "/how-it-works",
        linkLabel: "Proces jakości",
      },
      {
        title: "Raporty PDF dla klientów",
        description: "Markowe raporty zleceń i bezpieczne linki udostępniania.",
        benefit: "Wysyłaj dowody bez ręcznego budowania slajdów.",
        linkHref: "/documentation",
        linkLabel: "Dokumentacja raportowania",
      },
    ],
    howItWorks: {
      title: "Utwórz checklistę → Inspekcja → Zbierz dowody → Przegląd → Udostępnij dowód",
      steps: [
        { title: "Utwórz", description: "Buduj szablony checklist per obiekt klienta lub typ usługi." },
        { title: "Inspekcja", description: "Sprzątacze wypełniają pozycje na telefonie podczas zlecenia." },
        { title: "Zbierz", description: "Dodawaj zdjęcia przed/po; rejestracja offline synchronizuje się później." },
        { title: "Przegląd", description: "Managerowie oceniają QA zakończeń i logują problemy." },
        { title: "Udostępnij", description: "Eksportuj PDF lub wyślij link portalu klienta z dowodami." },
      ],
    },
    useCases: {
      title: "Przypadki użycia inspekcji",
      items: [
        { title: "Programy QC komercyjne", description: "Standaryzowany scoring w portfolio klienta." },
        { title: "Sprzątanie po wyprowadzce i generalne", description: "Pakiety zdjęć przed/po dla wynajmujących." },
        { title: "Standardy jakości franczyz", description: "Spójne checklisty we wszystkich lokalizacjach." },
        { title: "Audyty klientów", description: "Historia zleceń ze znacznikami czasu, gdy facility proszą o dowód." },
      ],
    },
    faqs: [
      { q: "Czy sprzątacze mogą wypełniać checklisty offline?", a: "Tak. Checklisty i zdjęcia działają offline i synchronizują się po powrocie łączności." },
      { q: "Czy TidyFlow używa AI do jakości zdjęć?", a: "W obsługiwanych planach analiza zdjęć AI może oceniać przesłane zdjęcia sprzątania. Managerowie nadal podejmują ostateczne decyzje QA." },
      { q: "Czy klienci mają dostęp do raportów inspekcyjnych?", a: "Tak. Raporty PDF zleceń i bezpieczne linki portalu udostępniają dowody wykonania klientom." },
      { q: "Czy mogę wymagać ukończenia checklisty przed rejestracją wejścia?", a: "Tak. Opcjonalne reguły mogą wymagać kroków checklisty przed startem timera zlecenia." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Oprogramowanie do rejestracji czasu sprzątania | Rejestracja GPS | TidyFlow",
    seoDescription:
      "Oprogramowanie do rejestracji czasu sprzątania z timerami zleceń na miejscu, weryfikacją GPS, geofencingiem, śledzeniem na żywo podczas aktywnych zleceń i godzinami do wynagrodzeń.",
    keywords:
      "oprogramowanie rejestracji czasu sprzątania, rejestracja czasu kontraktowego, aplikacja rejestracji wejścia sprzątaczy, GPS rejestracja czasu sprzątania, TidyFlow",
    eyebrow: "Rejestracja czasu",
    h1: "Oprogramowanie do rejestracji czasu sprzątania z weryfikacją GPS",
    heroSubtitle:
      "Rejestruj wejście sprzątaczy na miejscu z timerami zleceń, weryfikacją GPS i geofencingiem — aby zalogowane godziny odzwierciedlały realne wizyty, nie szacunki.",
    navLabel: "Rejestracja czasu",
    problems: {
      title: "Rejestracja czasu zawodzi, gdy wejście łatwo sfałszować",
      items: [
        "Sprzątacze startują timer z parkingu po drugiej stronie ulicy.",
        "Managerowie nie mają widoku na żywo, kto aktywnie pracuje przy zleceniu.",
        "Fałszywe rejestracje kolegów, bo każdy może napisać „jestem na miejscu”.",
        "Godziny z jednego obiektu mieszają się z czasem dojazdu.",
        "Budynki ze słabym sygnałem zmuszają sprzątaczy do pomijania timera.",
      ],
    },
    solution: {
      title: "Rejestracja czasu wbudowana w zlecenie sprzątania",
      paragraphs: [
        "Rejestracja czasu TidyFlow jest per zadanie — start, przerwa, wznowienie, złożenie na ekranie zlecenia. Weryfikacja GPS porównuje lokalizację rejestracji z obiektem. Managerowie widzą GPS na żywo podczas aktywnych zleceń.",
        "Tryb offline kolejkuje timer i zdarzenia GPS przy utracie sygnału, potem synchronizuje — więc sprzątanie piwnic nadal daje weryfikowalne godziny.",
      ],
    },
    features: [
      {
        title: "Timer zlecenia na miejscu",
        description: "Prosty start/przerwa/złożenie w aplikacji sprzątacza.",
        benefit: "Godziny przypisane do obiektu, nie ogólnej zmiany.",
        linkHref: "/features",
        linkLabel: "Aplikacja terenowa",
      },
      {
        title: "GPS i geofencing",
        description: "Weryfikacja lokalizacji przy starcie/zakończeniu; integracja map dla obiektów.",
        benefit: "Oznaczaj rejestracje z dala od budynku.",
        linkHref: "/integrations",
        linkLabel: "Mapy i geofencing",
      },
      {
        title: "Kolejka GPS offline",
        description: "Kolejkuj zdarzenia lokalizacji bez sygnału; synchronizacja później.",
        benefit: "Rejestruj czas w pomieszczeniach technicznych i podziemnych garażach.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS offline",
      },
      {
        title: "Godziny gotowe do wynagrodzeń",
        description: "Zatwierdzone godziny trafiają do naliczania wynagrodzeń.",
        benefit: "Zamknij pętlę od rejestracji wejścia do paska.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Oprogramowanie wynagrodzeń",
      },
    ],
    howItWorks: {
      title: "Przydziel → Przyjedź → Zarejestruj wejście → Pracuj → Złóż godziny",
      steps: [
        { title: "Przydziel", description: "Sprzątacz otrzymuje dzisiejsze zlecenia na telefonie." },
        { title: "Przyjedź", description: "GPS potwierdza bliskość geofence obiektu." },
        { title: "Zarejestruj wejście", description: "Uruchom timer przy zleceniu — opcjonalna brama checklisty." },
        { title: "Pracuj", description: "Przerwa/wznowienie w razie potrzeby; GPS na żywo podczas aktywnych zleceń." },
        { title: "Złóż", description: "Zakończ zlecenie; godziny czekają na zatwierdzenie managera do wynagrodzeń." },
      ],
    },
    useCases: {
      title: "Scenariusze rejestracji czasu",
      items: [
        { title: "Sprzątanie komercyjne kontraktowe", description: "Weryfikuj obecność na zmianach nocnych między obiektami." },
        { title: "Zespoły domowe", description: "Timery per dom dla sprzątaczek godzinowych." },
        { title: "Zlecenia wieloosobowe", description: "Każdy wykonawca loguje czas przy tym samym zadaniu." },
        { title: "Obiekty ze słabą łącznością", description: "Kolejka offline zachowuje godziny i GPS." },
      ],
    },
    faqs: [
      { q: "Czy TidyFlow automatycznie śledzi godziny sprzątaczy?", a: "Tak. Timer zlecenia loguje godziny przy starcie i złożeniu zadań. GPS dodaje weryfikację lokalizacji." },
      { q: "Co się dzieje, gdy GPS jest niedostępny?", a: "Zdarzenia kolejkują się offline i synchronizują po powrocie sygnału. Managerowie nadal widzą rekord zakończenia zlecenia." },
      { q: "Czy GPS na żywo jest zawsze włączony?", a: "Śledzenie GPS na żywo dotyczy aktywnych zleceń w obsługiwanych procesach — nie całodobowej inwigilacji." },
      { q: "Czy managerowie mogą edytować godziny?", a: "Managerowie zatwierdzają lub korygują godziny pracy przez proces zatwierdzania przed wynagrodzeniami." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Oprogramowanie sprzątające offline | Aplikacja terenowa bez sygnału | TidyFlow",
    seoDescription:
      "Oprogramowanie sprzątające offline dla zespołów w piwnicach, parkingach i budynkach ze słabym sygnałem — checklisty offline, timer, zdjęcia i kolejka GPS z automatyczną synchronizacją.",
    keywords:
      "oprogramowanie sprzątające offline, aplikacja sprzątająca offline, aplikacja sprzątania bez internetu, aplikacja kontraktowa offline, TidyFlow",
    eyebrow: "Oprogramowanie sprzątające offline",
    h1: "Oprogramowanie sprzątające offline dla realnych warunków terenowych",
    heroSubtitle:
      "Sprzątacze kończą zlecenia bez internetu — checklisty, timer zlecenia, zdjęcia i zdarzenia GPS kolejkują się lokalnie i synchronizują automatycznie po powrocie łączności.",
    navLabel: "Sprzątanie offline",
    problems: {
      title: "Aplikacje terenowe zawodzą tam, gdzie faktycznie odbywa się sprzątanie",
      items: [
        "Piwnice i pomieszczenia techniczne blokują dane mobilne — sprzątacze pomijają aplikację.",
        "Zdjęcia czekają do parkingu, potem mieszają się między zleceniami.",
        "Timery zatrzymują się, bo aplikacja wymaga stałej łączności.",
        "Managerowie zakładają, że „brak synchronizacji” oznacza „nieobecność”.",
        "Konkurenci obiecuje offline, ale cache'uje tylko listę zleceń, nie zakończenie.",
      ],
    },
    solution: {
      title: "Pełne zakończenie zlecenia offline — nie tylko cache tylko do odczytu",
      paragraphs: [
        "Tryb offline TidyFlow obsługuje procesy potrzebne sprzątaczom na miejscu: timer zlecenia, checklisty, zdjęcia i kolejkowanie zdarzeń weryfikacji GPS. Po ponownym połączeniu dane synchronizują się z panelem zarządzania.",
        "To rozwiązanie dla obiektów kontraktowych i komercyjnych, gdzie utrata sygnału jest normą — nie wyjątkiem.",
      ],
    },
    features: [
      {
        title: "Checklisty offline",
        description: "Wykonuj zadania pokojowe bez łączności.",
        benefit: "Inspekcje kończą się pod ziemią, nie na parkingu.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Oprogramowanie inspekcyjne",
      },
      {
        title: "Timer zlecenia offline",
        description: "Rejestruj godziny na miejscu; synchronizuj znaczniki czasu później.",
        benefit: "Wynagrodzenia dostają realny czas zlecenia, nie szacunki.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Rejestracja czasu",
      },
      {
        title: "Rejestracja zdjęć offline",
        description: "Zdjęcia przed/po przechowywane lokalnie do przesłania.",
        benefit: "Dowody pozostają przy właściwym zleceniu.",
        linkHref: "/features",
        linkLabel: "Dowody fotograficzne",
      },
      {
        title: "Kolejka GPS offline",
        description: "Zdarzenia lokalizacji kolejkują się bez sygnału; synchronizacja po ponownym połączeniu.",
        benefit: "Weryfikuj obecność nawet po opuszczeniu martwej strefy.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Funkcja GPS offline",
      },
    ],
    howItWorks: {
      title: "Załaduj zlecenia → Pracuj offline → Kolejkuj dane → Połącz → Synchronizuj",
      steps: [
        { title: "Załaduj", description: "Przydzielone zlecenia pobierają się na urządzenie online." },
        { title: "Pracuj offline", description: "Timer, checklista i zdjęcia działają bez internetu." },
        { title: "Kolejkuj", description: "Zdarzenia GPS i zakończenia przechowywane lokalnie." },
        { title: "Połącz", description: "Telefon odzyskuje sygnał po wyjściu z budynku lub parkingu." },
        { title: "Synchronizuj", description: "Managerowie widzą zakończone zlecenie, zdjęcia i godziny w panelu." },
      ],
    },
    useCases: {
      title: "Scenariusze offline",
      items: [
        { title: "Sprzątanie piwnic i pomieszczeń technicznych", description: "Kończ zlecenia przy zerowym sygnale wewnętrznym." },
        { title: "Sprzątanie parkingów podziemnych", description: "GPS kolejkuje się, aż urządzenie wyjedzie z garażu." },
        { title: "Obiekty wiejskie lub przemysłowe", description: "Nierówna łączność nie blokuje już zgodności terenowej." },
        { title: "Zespoły międzynarodowe", description: "To samo zachowanie offline w 11 obsługiwanych językach." },
      ],
    },
    faqs: [
      { q: "Czy TidyFlow działa bez połączenia z internetem?", a: "Tak. Sprzątacze mogą uruchamiać timery, checklisty i robić zdjęcia offline. Dane synchronizują się po powrocie łączności." },
      { q: "Co synchronizuje się po ponownym połączeniu?", a: "Status zakończenia zlecenia, zdjęcia, godziny timera, kolejkowane zdarzenia GPS i odpowiedzi checklist synchronizują się z serwerem." },
      { q: "Czy sprzątacze muszą synchronizować ręcznie?", a: "Synchronizacja uruchamia się automatycznie po ponownym połączeniu — bez osobnego kroku przesyłania." },
      { q: "Czy offline jest dostępne we wszystkich planach?", a: "Operacje terenowe offline to podstawowa funkcja TidyFlow. Zaawansowane funkcje AI i integracji różnią się według planu — zobacz Cennik." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Oprogramowanie dla firm sprzątających | Prowadź i rozwijaj operacje | TidyFlow",
    seoDescription:
      "Oprogramowanie dla firm sprzątających dla właścicieli rosnących od solo operatora do wielu zespołów — planowanie, rozliczenia, wynagrodzenia, dowody dla klientów i analizy Revenue AI.",
    keywords:
      "oprogramowanie dla firm sprzątających, aplikacja dla małej firmy sprzątającej, oprogramowanie do rozwoju firmy sprzątającej, oprogramowanie startup sprzątania, TidyFlow",
    eyebrow: "Oprogramowanie dla firm sprzątających",
    h1: "Oprogramowanie dla firm sprzątających, które rośnie z Twoją firmą",
    heroSubtitle:
      "Zacznij od planowania i dowodów terenowych, potem dodaj wynagrodzenia, fakturowanie klientów i panele właściciela w miarę wzrostu — jedna platforma zamiast sklejania narzędzi.",
    navLabel: "Firma sprzątająca",
    problems: {
      title: "Małe firmy sprzątające szybko przerastają pierwsze narzędzia",
      items: [
        "Zaczynasz od aplikacji kalendarza, potem dodajesz oprogramowanie wynagrodzeń, potem foldery ze zdjęciami — nic się nie łączy.",
        "Więcej kontraktów oznacza więcej godzin administracji, nie więcej zysku.",
        "Nie wiesz, które kontrakty są rentowne bez eksportu arkuszy.",
        "Pierwszy manager duplikuje pracę, bo nie ma wspólnego systemu operacyjnego.",
        "Narzędzia testowe naliczają per stanowisko w sposób karzący rosnące zespoły.",
      ],
    },
    solution: {
      title: "Rozwijaj operacje na jednej platformie dla firm sprzątających",
      paragraphs: [
        "Plany TidyFlow skalują się od zespołów startupowych do większych składów z limitami obiektów opartymi na użyciu. Właściciele zarządzają subskrypcją i rozliczeniami w aplikacji. Planowanie, dowody terenowe, wynagrodzenia i fakturowanie klientów są razem.",
        "Revenue AI w obsługiwanych planach wskazuje ryzyka i możliwości na panelu właściciela — więc decyzje o wzroście opierają się na danych operacyjnych, nie na intuicji.",
      ],
    },
    features: [
      {
        title: "Plany od 25 USD/miesiąc",
        description: "Plan Startup dla mniejszych zespołów; upgrade w miarę wzrostu obiektów i sprzątaczy.",
        benefit: "Zacznij bez kontraktów enterprise.",
        linkHref: "/pricing",
        linkLabel: "Zobacz cennik",
      },
      {
        title: "Samodzielne rozliczenia",
        description: "Okres próbny, upgrade i zarządzanie subskrypcją w aplikacji.",
        benefit: "Właściciele kontrolują koszty bez dzwonienia do sprzedaży.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Funkcje rozliczeń",
      },
      {
        title: "Fakturowanie klientów i QuickBooks",
        description: "Faktury z zleceń; synchronizacja z QuickBooks Online.",
        benefit: "Finanse pozostają zgodne w miarę dodawania klientów.",
        linkHref: "/integrations",
        linkLabel: "Integracje",
      },
      {
        title: "Panel Revenue AI",
        description: "Analizy właściciela w obsługiwanych planach.",
        benefit: "Wcześnie zobacz, które kontrakty wymagają uwagi.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Start → Operuj → Udowadniaj → Rozlicz → Rośnij",
      steps: [
        { title: "Start", description: "14-dniowy okres próbny — skonfiguruj obiekty i zaproś pierwszych sprzątaczy." },
        { title: "Operuj", description: "Planuj zlecenia i prowadź pracę terenową z GPS i zdjęciami." },
        { title: "Udowadniaj", description: "Wysyłaj dowody klientom, gdy wygrywasz większe kontrakty." },
        { title: "Rozlicz", description: "Fakturuj klientów i naliczaj wynagrodzenia z zweryfikowanych godzin." },
        { title: "Rośnij", description: "Podnoś limity planu i używaj paneli właściciela do decyzji." },
      ],
    },
    useCases: {
      title: "Etapy rozwoju firmy",
      items: [
        { title: "Solo operator przechodzący na wielu sprzątaczy", description: "Zastąp osobiste kalendarze wspólnym planowaniem." },
        { title: "Lokalna firma wygrywająca przetargi komercyjne", description: "Dowody dla klientów i QC dla umów facility." },
        { title: "Regionalna marka sprzątająca", description: "Limity wieloobiektowe, role i integracje." },
        { title: "Właściciel-operator w wielu rolach", description: "Jeden login do harmonogramu, wynagrodzeń i rozliczeń." },
      ],
    },
    faqs: [
      { q: "Czym jest oprogramowanie dla firm sprzątających?", a: "Oprogramowanie, które pomaga właścicielom prowadzić planowanie, zespoły, pracę terenową, rozliczenia klientów i wynagrodzenia firmy sprzątającej — zwykle zastępując arkusze w miarę wzrostu." },
      { q: "Ile kosztuje TidyFlow?", a: "Plany zaczynają się od 25 USD/miesiąc w planie Startup. Standard i Premium dodają więcej obiektów, sprzątaczy i funkcji jak Google Sheets i synchronizacja QuickBooks." },
      { q: "Czy jest bezpłatny okres próbny?", a: "Tak. Wszystkie plany obejmują 14-dniowy bezpłatny okres próbny z samodzielną rejestracją." },
      { q: "Czy mogę upgrade'ować w miarę wzrostu firmy?", a: "Tak. Zmieniaj plany w aplikacji w miarę wzrostu limitów obiektów i zespołu." },
    ],
  },
};
