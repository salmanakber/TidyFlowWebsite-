import type { ChapterTranslation } from "../docTranslations";

export const plChapters: Record<string, ChapterTranslation> = {
  "ch-1": {
    title: "Czym jest TidyFlow?",
    category: "Overview",
    content: "TidyFlow to jednolita platforma operacyjna zaprojektowana specjalnie dla firm sprzątających mieszkania, biura i zarządzających obiektami. Służy jako centralny silnik koordynujący działania między właścicielami firm, zdalnymi menedżerami operacyjnymi oraz sprzątaczami w terenie. Zastępując rozdrobnione i przestarzałe narzędzia, takie jak papierowe listy kontrolne, nieustrukturyzowane wątki WhatsApp i oddzielne arkusze płac, TidyFlow konsoliduje planowanie, weryfikację lokalizacji, fakturowanie klientów i analizę zespołu w jednej bezpiecznej, offline-first platformie bazodanowej."
  },
  "ch-2": {
    title: "Pierwsze kroki",
    category: "Overview",
    content: "Aby rozpocząć operacje, administratorzy firmy mogą zarejestrować się w portalu TidyFlow, zakładając swoją rejestrację biznesową. Przy pierwszym logowaniu pracownicy doświadczają interaktywnego przewodnika wdrożeniowego, który objaśnia główne moduły. Po aktywacji właściciele są prowadzeni przez konfigurację bezpiecznych profili płatności przez Stripe. Stamtąd właściciele mogą zapraszać personel, wchodząc do 'Użytkownicy' na Pasku Bocznym, wprowadzając nazwiska, e-maile i kategorie ról pracowników (Menedżerowie lub Sprzątacze) w celu natychmiastowego wysłania danych logowania."
  },
  "ch-3": {
    title: "Zrozumienie swojej roli",
    category: "Overview",
    content: "TidyFlow stosuje rygorystyczne kontrole dostępu oparte na rolach, aby zapewnić izolację i bezpieczeństwo danych. Właściciele/Administratorzy nadzorują plany subskrypcji, formaty walut, ustawienia fakturowania klientów, główne linki Google Sheets i raporty finansowe całej firmy. Menedżerowie skupiają się na planowaniu zmian, rozwiązywaniu problemów z obiektami i walidacji przesłanych kart czasu pracy. Sprzątacze działają na uproszczonym układzie mobilnym, zaprojektowanym wyłącznie do rejestrowania godzin, wykonywania zadań z list kontrolnych pokój po pokoju, przesyłania zdjęć przed/po oraz wysyłania alarmów SOS."
  },
  "ch-4": {
    title: "Nawigacja w aplikacji",
    category: "Overview",
    content: "Menu lewego paska bocznego służy jako kompas nawigacyjny aplikacji. Kliknięcie przycisku menu (☰) otwiera trasy do: Strona Główna (panel dostosowany do roli), Zadania (skategoryzowane listy kalendarzy), Kalendarz, Obiekty, Grafik Pracy, Użytkownicy, Wnioski Urlopowe, Lista Płac, Faktury Klientów, Materiały i Preferencje. Użytkownicy mobilni mogą również uruchamiać interaktywne przewodniki na każdym ekranie przez skrót 'Pomoc i Przewodnik' w stopce menu bocznego."
  },
  "ch-5": {
    title: "Google Sheets — połączenie i synchronizacja",
    category: "Core Features",
    content: "Połącz arkusz kalkulacyjny swojej firmy, aby włączyć dwukierunkową synchronizację w czasie rzeczywistym. Krok 1: Otwórz 'Obiekty' i wybierz 'Synchronizacja Google Sheets'. Krok 2: Wklej URL swojego głównego arkusza. Krok 3: Skopiuj unikalny e-mail naszego konta usługi (np. sync@project.iam.gserviceaccount.com) i nadaj mu uprawnienia edycji w Google Sheets. Krok 4: Kliknij 'Synchronizuj Teraz'. System odczytuje karty 'Properties' i 'Tasks', synchronizując edycje natychmiastowo w obu kierunkach. Wszystkie przypisania sprzątaczy, ukończenia statusów i przepracowane godziny wracają bezpośrednio do wierszy głównego arkusza."
  },
  "ch-6": {
    title: "Obiekty",
    category: "Core Features",
    content: "Rejestr obiektów to strukturalna podstawa TidyFlow. Znajdujący się w Pasek Boczny → Obiekty, mieści katalog wszystkich adresów serwisowych, kodów pocztowych, typów obiektów (apartamenty, mieszkalne, komercyjne), liczby jednostek i standardowych stawek serwisowych. Kliknięcie na dowolny obiekt wyświetla historię zadań, aktywne wzorce powtarzalne, współrzędne GPS na mapie i szybkie skróty do planowania nowych jednorazowych zadań."
  },
  "ch-7": {
    title: "Zadania",
    category: "Core Features",
    content: "Zadania reprezentują indywidualne, płatne sesje pracy. Menedżerowie tworzą zadania wybierając obiekt, przypisując zaplanowane daty i godziny, wprowadzając szczegółowe opisy i alokując odpowiednich sprzątaczy. Szczegółowe listy kontrolne mogą być tworzone ręcznie lub generowane automatycznie przez sugestie AI. Cykl życia zadania postępuje w kolejności: Zaplanowane → Przypisane → W Toku (aktywny timer) → Przesłane (praca ukończona) → Zatwierdzone (zweryfikowane przez menedżera) → Ukończone (zafakturowane)."
  },
  "ch-8": {
    title: "Przewodnik dla pracowników",
    category: "Role Guides",
    content: "Sprzątacze uzyskują dostęp do TidyFlow na swoich smartfonach, gdzie są witani uproszczonym i bardzo skupionym harmonogramem dziennym. Klikają na przypisane zadanie, aby sprawdzić punkty kontrolne, uzyskać dostęp do notatek operacyjnych i uruchomić timer pracy. Klikając 'Rozpocznij Sesję Pracy', aplikacja rejestruje dokładny czas przez GPS, umożliwiając oznaczanie list kontrolnych każdego pomieszczenia, robienie zdjęć przed/po i klikanie 'Prześlij Pracę' dla natychmiastowej wysyłki do zatwierdzenia przez menedżerów."
  },
  "ch-9": {
    title: "Przewodnik dla menedżerów",
    category: "Role Guides",
    content: "Menedżerowie uzyskują dostęp do dedykowanego pulpitu przeglądarki desktopowej lub aplikacji koordynatora mobilnego. Ekran główny podkreśla nieprzypisane zadania dnia, oczekujące karty czasu pracy i otwarte problemy. Menedżerowie mogą szybko sprawdzać przesłane zadania, przeglądać zdjęcia przed i po przesłane przez pracowników, porównywać zapisy i zatwierdzać lub odrzucać sesje w celu automatycznego wysłania godzin do aktywnych okresów płacowych."
  },
  "ch-10": {
    title: "Przewodnik dla właścicieli",
    category: "Role Guides",
    content: "Właściciele mają najwyższą władzę nad kontami firmowymi. Po zalogowaniu uzyskują dostęp do ustawień fakturowania, zarządzają subskrypcjami Stripe, dostosowują korporacyjną tożsamość wizualną (logo, dane bankowe, nagłówki rachunków) i auditują zapisy wieloużytkownikowe. Właściciele mają również dostęp do szczegółowych raportów analitycznych, które monitorują przychody, aktywne miejsca zespołu i spostrzeżenia operacyjne generowane przez AI."
  },
  "ch-11": {
    title: "Grafik i planowanie",
    category: "Core Features",
    content: "Harmonogram zmian jest koordynowany w Pasek Boczny → Grafik Pracy. Przedstawia układ siatki mapujący obiekty względem sprzątaczy na tydzień. Dyspozytorzy przeciągają, upuszczają i dotykają bloków, aby przypisać zadania. TidyFlow automatycznie sprawdza blokady urlopowe, zapobiegając przypadkowemu planowaniu sprzątaczy na zwolnieniu. System analizuje również współrzędne, aby sugerować zoptymalizowane trasy, redukując koszty transportu."
  },
  "ch-12": {
    title: "Zlecenia cykliczne",
    category: "Core Features",
    content: "Unikaj ręcznego planowania okresowych sprzątań. W dowolnym oknie Obiektu menedżerowie mogą ustalić harmonogramy powtarzalne (np. cotygodniowe lub co dwa tygodnie sprzątania komercyjne). Panel umożliwia definiowanie niestandardowych okresów powtarzania, dni tygodnia i dat zakończenia. Po zapisaniu wzorca TidyFlow automatycznie planuje i wysyła zadania w miarę zbliżania się dat, zapewniając pełne pokrycie kalendarza."
  },
  "ch-13": {
    title: "Zdjęcia, PDF i dowody dla klienta",
    category: "Core Features",
    content: "Dokumentuj jakość sprzątania wizualnie, aby chronić swoją działalność przed skargami klientów. Sprzątacze przesyłają zdjęcia robione na miejscu. Menedżerowie przeglądają obrazy w przesłanych zadaniach i mogą natychmiastowo kompilować raporty PDF z marką firmy dla klientów. Alternatywnie mogą generować bezpieczne linki portali dla klientów do przeglądania list kontrolnych ukończenia i obrazów bezpośrednio z ich przeglądarek."
  },
  "ch-14": {
    title: "Płace i godziny",
    category: "Core Features",
    content: "Uprość obliczanie listy płac. Gdy sprzątacze przesyłają swoje aktywne timery zadań, zarejestrowane godziny trafiają do Lista Płac → Oczekujące Godziny. Menedżerowie przeglądają upłynięty czas, dokonują korekt w razie potrzeby i zatwierdzają. Po zatwierdzeniu system kompiluje wynagrodzenia na podstawie niestandardowych stawek godzinowych, nadgodzin lub profili stawek zryczałtowanych na użytkownika, umożliwiając eksport pasków płac PDF do druku."
  },
  "ch-15": {
    title: "Faktury klientów",
    category: "Core Features",
    content: "Obciążaj klientów bezpośrednio za ukończone sprzątania. W Pasek Boczny → Faktury menedżerowie wybierają zatwierdzone zadania do generowania automatycznych faktur klientów. Moduły finansowe wyciągają standardowe stawki serwisowe obiektu lub budżety konkretnych zadań i wstawiają je do szablonów korporacyjnych. System pozwala na oznaczanie faktur jako wysłane, oczekujące lub opłacone, aktualizując kondycję finansową firmy."
  },
  "ch-16": {
    title: "Wnioski urlopowe",
    category: "Core Features",
    content: "Sprzątacze przesyłają wnioski o zwolnienie lekarskie i urlopy bezpośrednio w menu Pasek Boczny → Urlopy. Ekran rejestruje daty nieobecności i opisy, wysyłając powiadomienia do koordynatorów. Menedżerowie zatwierdzają lub odrzucają zapisy urlopów w menu Trasa/Urlop. Po zatwierdzeniu wniosku TidyFlow automatycznie blokuje daty w grafiku pracy, aby uniknąć błędów w planowaniu."
  },
  "ch-17": {
    title: "Problemy i bezpieczeństwo (SOS)",
    category: "Core Features",
    content: "Bezpieczeństwo pracowników terenowych ma najwyższy priorytet. Sprzątacze mają dostęp do jasno czerwonego przycisku paniki SOS na stałe w ekranie aktywnych zadań. Naciśnięcie przycisku SOS natychmiastowo wysyła lokalizację GPS w czasie rzeczywistym do serwerów operacyjnych i uruchamia migające czerwone powiadomienia alertów o wysokim priorytecie na pulpitach wszystkich aktywnych menedżerów, z linią czasową reagowania awaryjnego."
  },
  "ch-18": {
    title: "Materiały",
    category: "Advanced",
    content: "Śledź zapasy produktów za pomocą naszego zintegrowanego trackera (Pasek Boczny → Materiały). Menedżerowie rejestrują produkty czyszczące, narzędzia i materiały eksploatacyjne, ustawiając limity uzupełniania. Podczas wizyt sprzątacze wprowadzają używane materiały (np. worki na śmieci, ręczniki papierowe) w karcie zadania. Jeśli poziomy spadną poniżej bezpiecznego limitu, automatyczne alerty powiadamiają zarząd."
  },
  "ch-19": {
    title: "TidyFlow AI",
    category: "Advanced",
    content: "Optymalizuj decyzje biznesowe używając sugestii AI opartych na Gemini (bezpieczny serwer). AI pomaga menedżerom podczas wysyłki, sugerując najodpowiedniejszego profesjonalistę na podstawie lokalizacji, dostępności i poprzednich ocen wydajności. Dodatkowo modele analizują zdjęcia po sprzątaniu przesłane przez pracowników do klasyfikacji jakości wykonanej usługi."
  },
  "ch-20": {
    title: "Tryb offline",
    category: "Advanced",
    content: "Profesjonaliści terenowi często działają w piwnicach lub obszarach z niestabilnym sygnałem. TidyFlow jest offline-first z założenia. Sprzątacze mogą wypełniać listy kontrolne, uruchamiać lub zatrzymywać timery, rejestrować problemy i robić zdjęcia przed i po całkowicie odłączeni. Aplikacja kolejkuje zmiany lokalnie i synchronizuje wszystko z serwerami, gdy tylko wykryje powrót internetu."
  },
  "ch-21": {
    title: "Ustawienia i uprawnienia",
    category: "Advanced",
    content: "Konfiguruj indywidualne powiadomienia, usługi lokalizacji w tle i preferencje synchronizacji cache w Pasek Boczny → Ustawienia. Sprzątacze muszą włączyć uprawnienia lokalizacji do rejestrowania obecności GPS i uprawnienia kamery do dokumentowania pracy. Właściciele definiują waluty fakturowania (np. € EUR, $ USD, zł PLN) i szablony eksportu PDF."
  },
  "ch-22": {
    title: "Statusy zadań wyjaśnione",
    category: "Advanced",
    content: "TidyFlow prowadzi zadania przez ustrukturyzowany taśmociąg produkcyjny: Zaplanowane (utworzone, bez określonego zespołu), Przypisane (zespół określony, oczekuje na start), W Toku (aktywny sprzątacz na miejscu, timer liczy), Przesłane (ukończone przez profesjonalistę, oczekuje na przegląd kontroli jakości), Przegląd QA (w analizie wizualnej), Zatwierdzone (zatwierdzone przez menedżera, gotowe do faktury), Ukończone (w pełni opłacone i zarchiwizowane)."
  },
  "ch-23": {
    title: "Rozwiązywanie problemów i FAQ",
    category: "Support",
    content: "Jeśli arkusz Google Sheets nie synchronizuje się, sprawdź czy udostępniłeś dostęp do edycji e-mailowi konta usługi i czy nazwy kart to dokładnie 'Properties' i 'Tasks'. Jeśli śledzenie w tle nie działa, sprawdź czy GPS jest aktywny w ustawieniach telefonu. Jeśli zdjęcia są w kolejce synchronizacji, potwierdź swoje połączenie internetowe."
  }
};