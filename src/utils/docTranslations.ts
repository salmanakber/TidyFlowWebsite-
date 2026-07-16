// Localization dictionary for the User Guide (23 Chapters) and TidyBot documentation chatbot across all 11 supported languages.

import {
  frChapters,
  deChapters,
  arChapters,
  plChapters,
  noChapters,
  svChapters,
  itChapters
} from "./docChapters";

export const STATIC_CHAPTER_LANGS = ["en", "pt", "es", "cn", "ar", "fr", "de", "pl", "no", "sv", "it"] as const;

export interface DocPortalTranslation {
  title: string;
  searchPlaceholder: string;
  clearBtn: string;
  chaptersCount: string;
  hideTOC: string;
  showTOC: string;
  categoryLabel: string;
  printBtn: string;
  copyBtn: string;
  copiedMsg: string;
  interactiveSimLabel: string;
  botName: string;
  botSubtitle: string;
  botGreeting: string;
  botSearching: string;
  botFallback: string;
  botConnectionError: string;
  askPlaceholder: string;
  openRefChapter: string;
  suggestSheets: string;
  suggestOffline: string;
  suggestSOS: string;
  suggestPayroll: string;
  suggestAbout: string;
  suggestPricing: string;
  suggestDemo: string;
  suggestWhatsNew: string;
  recTemplateCols: string;
  colName: string;
  colLocation: string;
  colRequired: string;
  colNotes: string;
}

export const portalTranslations: Record<string, DocPortalTranslation> = {
  en: {
    title: "TidyFlow Interactive User Guide",
    searchPlaceholder: "Search User Guide...",
    clearBtn: "Clear",
    chaptersCount: "Chapter {num} of 23",
    hideTOC: "Hide Table of Contents",
    showTOC: "Show Table of Contents",
    categoryLabel: "Category:",
    printBtn: "Print chapter",
    copyBtn: "Copy chapter text",
    copiedMsg: "Copied!",
    interactiveSimLabel: "Contextual Live Simulator",
    botName: "TidyBot",
    botSubtitle: "Trained on the full site, What's New & 23 guide chapters",
    botGreeting: "Hi! 👋 I'm **TidyBot** — ask me anything about **TidyFlow**.\n\n• **What's New** — chat, QuickBooks, Revenue AI & more\n• **Pricing** & self-serve billing\n• **Features**, GPS, Sheets, offline\n• **Demo** & 14-day trial\n• **23 guide chapters** & how-tos\n\nTry a quick button below! 🧹",
    botSearching: "Thinking...",
    botFallback: "I couldn't find a direct match. Try asking about:\n\n• **What's New** (chat, QuickBooks, Revenue AI)\n• **Pricing** or a **free demo**\n• **Google Sheets** sync\n• **Offline** mode\n• Who **founded** TidyFlow",
    botConnectionError: "Sorry, I'm having trouble connecting right now 😅 ({error}). Try asking about What's New, pricing, who founded TidyFlow, or browse the User Guide!",
    askPlaceholder: "Ask about What's New, features, pricing, demo, or docs...",
    openRefChapter: "Open Reference Chapter",
    suggestSheets: "📊 Sheets Sync",
    suggestOffline: "🔌 Offline Mode",
    suggestSOS: "🚨 SOS Alarm",
    suggestPayroll: "💰 Payroll approval",
    suggestAbout: "✨ About TidyFlow",
    suggestPricing: "💳 Pricing",
    suggestDemo: "🎯 Free demo",
    suggestWhatsNew: "🆕 What's New",
    recTemplateCols: "Recommended Spreadsheet Templates Columns",
    colName: "Column Name",
    colLocation: "Tab Location",
    colRequired: "Required",
    colNotes: "Notes"
  },
  pt: {
    title: "Guia Interativo do Usuário TidyFlow",
    searchPlaceholder: "Pesquisar no Guia...",
    clearBtn: "Limpar",
    chaptersCount: "Capítulo {num} de 23",
    hideTOC: "Ocultar Índice de Conteúdos",
    showTOC: "Mostrar Índice de Conteúdos",
    categoryLabel: "Categoria:",
    printBtn: "Imprimir capítulo",
    copyBtn: "Copiar texto do capítulo",
    copiedMsg: "Copiado!",
    interactiveSimLabel: "Simulador Contextual ao Vivo",
    botName: "TidyBot — Assistente de Docs",
    botSubtitle: "Treinado nos 23 Capítulos do Guia",
    botGreeting: "Olá! 👋 Sou o **TidyBot** — seu guia amigável do TidyFlow.\n\nPergunte sobre configuração, **Google Sheets**, modo offline, folha de pagamento, quem fundou o TidyFlow ou qualquer um dos **23 capítulos**. Use um botão rápido abaixo! 🧹",
    botSearching: "Analisando o Guia do Usuário...",
    botFallback: "Não encontrei uma correspondência direta em nossos 23 capítulos. Experimente pesquisar por tópicos como:\n\n• **\"Google Sheets\"** para aprender sobre sincronização em tempo real.\n• **\"Offline\"** para ler sobre operações sem sinal.\n• **\"SOS\"** para ver alertas de emergência.\n• **\"Folha de pagamento\"** para aprovação de horas.",
    botConnectionError: "Desculpe, estou com problemas de conexão agora 😅 ({error}). Você ainda pode navegar pelos capítulos — ou perguntar quem fundou o TidyFlow!",
    askPlaceholder: "Pergunte ao TidyBot sobre a documentação...",
    openRefChapter: "Abrir Capítulo de Referência",
    suggestSheets: "📊 Sincronia Sheets",
    suggestOffline: "🔌 Modo Offline",
    suggestSOS: "🚨 Alerta SOS",
    suggestPayroll: "💰 Aprovar Horas",
    suggestAbout: "✨ Sobre o TidyFlow",
    suggestPricing: "💳 Preços",
    suggestDemo: "🎯 Demo grátis",
    suggestWhatsNew: "🆕 Novidades",
    recTemplateCols: "Colunas Recomendadas para Planilhas do Google",
    colName: "Nome da Coluna",
    colLocation: "Aba da Planilha",
    colRequired: "Obrigatório",
    colNotes: "Notas explicativas"
  },
  es: {
    title: "Guía Interactiva de Usuario de TidyFlow",
    searchPlaceholder: "Buscar en la guía de usuario...",
    clearBtn: "Borrar",
    chaptersCount: "Capítulo {num} de 23",
    hideTOC: "Ocultar Tabla de Contenidos",
    showTOC: "Mostrar Tabla de Contenidos",
    categoryLabel: "Categoría:",
    printBtn: "Imprimir capítulo",
    copyBtn: "Copiar texto del capítulo",
    copiedMsg: "¡Copiado!",
    interactiveSimLabel: "Simulador Contextual en Vivo",
    botName: "TidyBot — Asistente de Docs",
    botSubtitle: "Entrenado en los 23 Capítulos de la Guía",
    botGreeting: "¡Hola! 👋 Soy **TidyBot**, tu guía amigable de TidyFlow.\n\nPregúntame sobre configuración, **Google Sheets**, modo offline, nómina, quién fundó TidyFlow o cualquiera de los **23 capítulos**. ¡Prueba un botón rápido abajo! 🧹",
    botSearching: "Analizando la Guía del Usuario...",
    botFallback: "No encontré una coincidencia directa en nuestros 23 capítulos. Intenta buscar temas como:\n\n• **\"Google Sheets\"** para aprender sobre la sincronización en vivo.\n• **\"Offline\"** para leer sobre operaciones sin señal celular.\n• **\"SOS\"** para ver alertas de pánico.\n• **\"Nómina\"** para verificar la aprobación de horas de trabajo.",
    botConnectionError: "Lo siento, tengo problemas de conexión ahora 😅 ({error}). Aún puedes explorar los capítulos — o preguntar quién fundó TidyFlow.",
    askPlaceholder: "Pregunta a TidyBot sobre la documentación...",
    openRefChapter: "Abrir Capítulo de Referencia",
    suggestSheets: "📊 Sincro Sheets",
    suggestOffline: "🔌 Modo Offline",
    suggestSOS: "🚨 Alerta SOS",
    suggestPayroll: "💰 Aprobar Horas",
    suggestAbout: "✨ Sobre TidyFlow",
    suggestPricing: "💳 Precios",
    suggestDemo: "🎯 Demo gratis",
    suggestWhatsNew: "🆕 Novedades",
    recTemplateCols: "Columnas Recomendadas para Plantillas de Hojas de Cálculo",
    colName: "Nombre de Columna",
    colLocation: "Pestaña de Ubicación",
    colRequired: "Requerido",
    colNotes: "Notas de Configuración"
  },
  ar: {
    title: "دليل مستخدم تيدي فلو التفاعلي",
    searchPlaceholder: "البحث في دليل المستخدم...",
    clearBtn: "مسح",
    chaptersCount: "الفصل {num} من أصل ٢٣",
    hideTOC: "إخفاء جدول المحتويات",
    showTOC: "عرض جدول المحتويات",
    categoryLabel: "الفئة:",
    printBtn: "طباعة الفصل",
    copyBtn: "نسخ نص الفصل",
    copiedMsg: "تم النسخ!",
    interactiveSimLabel: "محاكاة تشغيلية حية وتفاعلية",
    botName: "تيدي بوت — مساعد المستندات",
    botSubtitle: "مدرب على ٢٣ فصلاً رسمياً بالكامل",
    botGreeting: "أهلاً! 👋 أنا **تيدي بوت** — دليلك الودود لتيدي فلو.\n\nاسألني عن الإعداد، **Google Sheets**، العمل دون إنترنت، الرواتب، مؤسس تيدي فلو، أو أي من **الفصول الـ ٢٣**. جرّب أحد الأزرار السريعة! 🧹",
    botSearching: "جاري تحليل دليل المستخدم...",
    botFallback: "لم أتمكن من العثور على تطابق مباشر في الفصول الـ ٢٣. حاول البحث عن مواضيع مثل:\n\n• **\"Google Sheets\"** لمعرفة تفاصيل المزامنة المباشرة.\n• **\"Offline\"** للتعرف على العمل دون تغطية خلوية.\n• **\"SOS\"** لمراجعة إنذارات الطوارئ.\n• **\"الرواتب\"** للتحقق من اعتماد ساعات العمل وتصديرها.",
    botConnectionError: "عذراً، أواجه مشكلة في الاتصال الآن 😅 ({error}). يمكنك تصفح الفصول — أو السؤال عن مؤسس تيدي فلو!",
    askPlaceholder: "اسأل تيدي بوت أي سؤال حول الدليل التشغيلي...",
    openRefChapter: "فتح الفصل المرجعي المباشر",
    suggestSheets: "📊 مزامنة الجداول",
    suggestOffline: "🔌 العمل دون إنترنت",
    suggestSOS: "🚨 طوارئ SOS",
    suggestPayroll: "💰 اعتماد الرواتب",
    suggestAbout: "✨ عن تيدي فلو",
    suggestPricing: "💳 الأسعار",
    suggestDemo: "🎯 عرض تجريبي",
    suggestWhatsNew: "🆕 ما الجديد",
    recTemplateCols: "الأعمدة الموصى بها في جداول البيانات المستوردة",
    colName: "اسم العمود",
    colLocation: "مكان التبويب",
    colRequired: "مطلوب",
    colNotes: "ملاحظات وتلميحات"
  },
  cn: {
    title: "TidyFlow 交互式用户操作指南",
    searchPlaceholder: "搜索用户指南内容...",
    clearBtn: "清除",
    chaptersCount: "第 {num} 章 / 共 23 章",
    hideTOC: "隐藏章节目录清单",
    showTOC: "展开章节目录清单",
    categoryLabel: "分类模块:",
    printBtn: "打印当前章节",
    copyBtn: "复制章节文本",
    copiedMsg: "复制成功！",
    interactiveSimLabel: "业务场景实时模拟器",
    botName: "TidyBot — 操作助理",
    botSubtitle: "已深度整合 23 章用户手册",
    botGreeting: "您好！👋 我是 **TidyBot** — 您友好的 TidyFlow 向导。\n\n可咨询配置、**Google 表格**、离线模式、工资结算、TidyFlow 创始人，或 **23 章指南**任意内容。点击下方快捷按钮试试！🧹",
    botSearching: "正在深入分析用户指南数据库...",
    botFallback: "很抱歉，在 23 个官方章节中未找到完全匹配的结果。推荐您搜索以下核心词汇：\n\n• **“Google Sheets”** 了解电子表格同步。\n• **“离线”** 了解地下室断网工作机制。\n• **“SOS”** 查看安全警报流程。\n• **“工资”** 了解如何审核工时发放薪酬。",
    botConnectionError: "抱歉，暂时无法连接 AI 助手 😅（{error}）。您仍可浏览章节 — 或问我 TidyFlow 是谁创立的！",
    askPlaceholder: "向 TidyBot 提问任何关于 TidyFlow 的操作要点...",
    openRefChapter: "打开对应参考章节",
    suggestSheets: "📊 表格双向同步",
    suggestOffline: "🔌 离线断网模式",
    suggestSOS: "🚨 SOS 一键报警",
    suggestPayroll: "💰 考勤薪资审核",
    suggestAbout: "✨ 了解 TidyFlow",
    suggestPricing: "💳 定价",
    suggestDemo: "🎯 免费演示",
    suggestWhatsNew: "🆕 新功能",
    recTemplateCols: "推荐的谷歌电子表格模板字段配置",
    colName: "字段/列名称",
    colLocation: "工作表位置",
    colRequired: "是否必填",
    colNotes: "字段规则备注说明"
  },
  fr: {
    title: "Guide de l'Utilisateur Interactif TidyFlow",
    searchPlaceholder: "Rechercher dans le guide...",
    clearBtn: "Effacer",
    chaptersCount: "Chapitre {num} de 23",
    hideTOC: "Masquer la table des matières",
    showTOC: "Afficher la table des matières",
    categoryLabel: "Catégorie :",
    printBtn: "Imprimer le chapitre",
    copyBtn: "Copier le texte",
    copiedMsg: "Copié !",
    interactiveSimLabel: "Simulateur Interactif en Direct",
    botName: "TidyBot — Assistant Doc",
    botSubtitle: "Formé sur les 23 Chapitres de l'Aide",
    botGreeting: "Bonjour ! 👋 Je suis **TidyBot** — votre guide TidyFlow.\n\nPosez-moi des questions sur la config, **Google Sheets**, le mode hors ligne, la paie, le fondateur de TidyFlow ou l'un des **23 chapitres**. Essayez un bouton ci-dessous ! 🧹",
    botSearching: "Analyse du Guide de l'Utilisateur...",
    botFallback: "Je n'ai pas trouvé de correspondance exacte. Essayez de chercher des thèmes comme :\n\n• **\"Google Sheets\"** pour apprendre la synchronisation.\n• **\"Hors-ligne\"** pour les interventions en sous-sol.\n• **\"SOS\"** pour la gestion de la sécurité des équipes.\n• **\"Paie\"** pour la validation des feuilles de temps.",
    botConnectionError: "Désolé, j'ai du mal à me connecter 😅 ({error}). Parcourez les chapitres — ou demandez qui a fondé TidyFlow !",
    askPlaceholder: "Posez une question sur le fonctionnement à TidyBot...",
    openRefChapter: "Ouvrir le Chapitre de Référence",
    suggestSheets: "📊 Synchro Sheets",
    suggestOffline: "🔌 Mode Hors-ligne",
    suggestSOS: "🚨 Signalement SOS",
    suggestPayroll: "💰 Validation Heures",
    suggestAbout: "✨ À propos de TidyFlow",
    suggestPricing: "💳 Tarifs",
    suggestDemo: "🎯 Démo gratuite",
    suggestWhatsNew: "🆕 Nouveautés",
    recTemplateCols: "Colonnes Recommandées pour les Modèles Google Sheets",
    colName: "Nom de la colonne",
    colLocation: "Onglet cible",
    colRequired: "Requis",
    colNotes: "Description et notes"
  },
  de: {
    title: "TidyFlow Interaktives Benutzerhandbuch",
    searchPlaceholder: "Handbuch durchsuchen...",
    clearBtn: "Leeren",
    chaptersCount: "Kapitel {num} von 23",
    hideTOC: "Inhaltsverzeichnis ausblenden",
    showTOC: "Inhaltsverzeichnis anzeigen",
    categoryLabel: "Kategorie:",
    printBtn: "Kapitel drucken",
    copyBtn: "Kapiteltext kopieren",
    copiedMsg: "Kopiert!",
    interactiveSimLabel: "Kontextbezogener Live-Simulator",
    botName: "TidyBot — Handbuch-Assistent",
    botSubtitle: "Geschult auf allen 23 Kapiteln",
    botGreeting: "Hallo! 👋 Ich bin **TidyBot** — dein freundlicher TidyFlow-Guide.\n\nFrag mich zu Setup, **Google Sheets**, Offline-Modus, Lohn, Gründer von TidyFlow oder einem der **23 Kapitel**. Probier einen Schnellbutton! 🧹",
    botSearching: "Analysiere Benutzerhandbuch...",
    botFallback: "Ich konnte keinen direkten Treffer finden. Versuche es mit Begriffen wie:\n\n• **\"Google Sheets\"** für die Live-Synchronisation.\n• **\"Offline\"** für die Erfassung ohne Signal.\n• **\"SOS\"** für Notrufe am Arbeitsplatz.\n• **\"Lohn\"** für die Genehmigung von Zeiten.",
    botConnectionError: "Entschuldigung, Verbindungsprobleme 😅 ({error}). Du kannst die Kapitel durchstöbern — oder fragen, wer TidyFlow gegründet hat!",
    askPlaceholder: "Stelle TidyBot eine Frage zum System...",
    openRefChapter: "Referenzkapitel öffnen",
    suggestSheets: "📊 Sheets-Abgleich",
    suggestOffline: "🔌 Offline-Modus",
    suggestSOS: "🚨 SOS-Notfall",
    suggestPayroll: "💰 Zeiten freigeben",
    suggestAbout: "✨ Über TidyFlow",
    suggestPricing: "💳 Preise",
    suggestDemo: "🎯 Kostenlose Demo",
    suggestWhatsNew: "🆕 Neuigkeiten",
    recTemplateCols: "Empfohlene Spaltenstruktur für Google Sheets",
    colName: "Spaltenname",
    colLocation: "Arbeitsblatt-Tab",
    colRequired: "Erforderlich",
    colNotes: "Erläuterung & Format"
  },
  pl: {
    title: "Interaktywny Podręcznik Użytkownika TidyFlow",
    searchPlaceholder: "Szukaj w podręczniku...",
    clearBtn: "Wyczyść",
    chaptersCount: "Rozdział {num} z 23",
    hideTOC: "Ukryj Spis Treści",
    showTOC: "Pokaż Spis Treści",
    categoryLabel: "Kategoria:",
    printBtn: "Drukuj rozdział",
    copyBtn: "Skopiuj tekst",
    copiedMsg: "Skopiowano!",
    interactiveSimLabel: "Interaktywny Symulator na Żywo",
    botName: "TidyBot — Asystent Pomocy",
    botSubtitle: "Przeszkolony na 23 Rozdziałach Pomocy",
    botGreeting: "Cześć! 👋 Jestem **TidyBot** — Twój przyjazny przewodnik TidyFlow.\n\nZapytaj o konfigurację, **Google Sheets**, tryb offline, płace, założyciela TidyFlow lub którykolwiek z **23 rozdziałów**. Wypróbuj szybki przycisk! 🧹",
    botSearching: "Przeszukiwanie bazy dokumentacji...",
    botFallback: "Nie znalazłem dokładnej odpowiedzi. Spróbuj wyszukać słowa takie jak:\n\n• **\"Google Sheets\"** aby poznać synchronizację arkuszy.\n• **\"Offline\"** aby przeczytać o pracy bez zasięgu.\n• **\"SOS\"** w celu sprawdzenia alarmów bezpieczeństwa.\n• **\"Lista płac\"** by zweryfikować godziny pracy.",
    botConnectionError: "Przepraszam, problem z połączeniem 😅 ({error}). Możesz przeglądać rozdziały — lub zapytać, kto założył TidyFlow!",
    askPlaceholder: "Zadaj pytanie TidyBotowi o działanie aplikacji...",
    openRefChapter: "Otwórz Rozdział Referencyjny",
    suggestSheets: "📊 Synchro Sheets",
    suggestOffline: "🔌 Tryb Offline",
    suggestSOS: "🚨 Alarm SOS",
    suggestPayroll: "💰 Zatwierdzanie Godzin",
    suggestAbout: "✨ O TidyFlow",
    suggestPricing: "💳 Cennik",
    suggestDemo: "🎯 Darmowe demo",
    suggestWhatsNew: "🆕 Nowości",
    recTemplateCols: "Sugerowana Struktura Kolumn w Arkuszach Google",
    colName: "Nazwa Kolumny",
    colLocation: "Zakładka Arkusza",
    colRequired: "Wymagane",
    colNotes: "Wskazówki i uwagi"
  },
  no: {
    title: "TidyFlow Interaktiv Brukerveiledning",
    searchPlaceholder: "Søk i brukerveiledningen...",
    clearBtn: "Nullstill",
    chaptersCount: "Kapittel {num} av 23",
    hideTOC: "Skjul Innholdsfortegnelse",
    showTOC: "Vis Innholdsfortegnelse",
    categoryLabel: "Kategori:",
    printBtn: "Skriv ut kapittel",
    copyBtn: "Kopier kapitteltekst",
    copiedMsg: "Kopiert!",
    interactiveSimLabel: "Kontekstuell Live-Simulator",
    botName: "TidyBot — Dokumentasjonsassistent",
    botSubtitle: "Trent på alle 23 Brukerkapitler",
    botGreeting: "Hei! 👋 Jeg er **TidyBot** — din vennlige TidyFlow-guide.\n\nSpør om oppsett, **Google Sheets**, offline-modus, lønn, hvem som grunnla TidyFlow, eller et av **23 kapitlene**. Prøv en hurtigknapp! 🧹",
    botSearching: "Søker i brukerveiledningen...",
    botFallback: "Fant ikke et direkte treff. Prøv å søke etter populære temaer som:\n\n• **\"Google Sheets\"** for å lære om synkronisering.\n• **\"Offline\"** for å lese om frakoblet lagring.\n• **\"SOS\"** for informasjon om nødalarm.\n• **\"Lønn\"** for å godkjenne timelister.",
    botConnectionError: "Beklager, tilkoblingsproblemer 😅 ({error}). Du kan fortsatt lese kapitlene — eller spørre hvem som grunnla TidyFlow!",
    askPlaceholder: "Spør TidyBot om veiledning i systemet...",
    openRefChapter: "Åpne Referenskapittel",
    suggestSheets: "📊 Sheets-synkronisering",
    suggestOffline: "🔌 Frakoblet Modus",
    suggestSOS: "🚨 SOS-alarm",
    suggestPayroll: "💰 Godkjenne Timer",
    suggestAbout: "✨ Om TidyFlow",
    suggestPricing: "💳 Priser",
    suggestDemo: "🎯 Gratis demo",
    suggestWhatsNew: "🆕 Nyheter",
    recTemplateCols: "Anbefalt Kolonnestruktur for Google Sheets-maler",
    colName: "Kolonnenavn",
    colLocation: "Arkfane-plassering",
    colRequired: "Påkrevd",
    colNotes: "Merknader og oppsett"
  },
  sv: {
    title: "TidyFlow Interaktiv Användarhandbok",
    searchPlaceholder: "Sök i användarhandboken...",
    clearBtn: "Rensa",
    chaptersCount: "Kapitel {num} av 23",
    hideTOC: "Dölj Innehållsförteckning",
    showTOC: "Visa Innehållsförteckning",
    categoryLabel: "Kategori:",
    printBtn: "Skriv ut kapitel",
    copyBtn: "Kopiera kapiteltext",
    copiedMsg: "Kopierat!",
    interactiveSimLabel: "Kontextuell Live-Simulator",
    botName: "TidyBot — Handboksassistent",
    botSubtitle: "Utbildad på samtliga 23 kapitel",
    botGreeting: "Hej! 👋 Jag är **TidyBot** — din vänliga TidyFlow-guide.\n\nFråga om inställningar, **Google Sheets**, offline-läge, lön, vem som grundade TidyFlow, eller något av **23 kapitlen**. Prova en snabbknapp! 🧹",
    botSearching: "Söker i användarhandboken...",
    botFallback: "Jag hittade ingen exakt matchning. Testa att söka efter ämnen som:\n\n• **\"Google Sheets\"** för att lära dig om synkronisering.\n• **\"Offline\"** för att läsa om signal-lösa områden.\n• **\"SOS\"** för personalens trygghetslarm.\n• **\"Löner\"** för att godkänna arbetade timmar.",
    botConnectionError: "Tyvärr, anslutningsproblem 😅 ({error}). Du kan fortfarande läsa kapitlen — eller fråga vem som grundade TidyFlow!",
    askPlaceholder: "Ställ en fråga till TidyBot om handboken...",
    openRefChapter: "Öppna Referenskapitel",
    suggestSheets: "📊 Sheets-synk",
    suggestOffline: "🔌 Offline-läge",
    suggestSOS: "🚨 SOS-larm",
    suggestPayroll: "💰 Löneunderlag",
    suggestAbout: "✨ Om TidyFlow",
    suggestPricing: "💳 Priser",
    suggestDemo: "🎯 Gratis demo",
    suggestWhatsNew: "🆕 Nyheter",
    recTemplateCols: "Rekommenderad Kolumnstruktur för Google Sheets-mallar",
    colName: "Kolumnnamn",
    colLocation: "Flik-placering",
    colRequired: "Obligatorisk",
    colNotes: "Information & format"
  },
  it: {
    title: "Guida Utente Interattiva TidyFlow",
    searchPlaceholder: "Cerca nella guida utente...",
    clearBtn: "Svuota",
    chaptersCount: "Capitolo {num} di 23",
    hideTOC: "Nascondi Indice",
    showTOC: "Mostra Indice",
    categoryLabel: "Categoria:",
    printBtn: "Stampa capitolo",
    copyBtn: "Copia testo capitolo",
    copiedMsg: "Copiato!",
    interactiveSimLabel: "Simulatore di Contesto Live",
    botName: "TidyBot — Assistente Guida",
    botSubtitle: "Istruito su tutti i 23 Capitoli Utente",
    botGreeting: "Ciao! 👋 Sono **TidyBot** — la tua guida amichevole TidyFlow.\n\nChiedimi di configurazione, **Google Sheets**, modalità offline, paghe, chi ha fondato TidyFlow o uno dei **23 capitoli**. Prova un pulsante rapido! 🧹",
    botSearching: "Analisi della Guida Utente in corso...",
    botFallback: "Non ho trovato un riscontro esatto nei capitoli. Prova a cercare argomenti caldi come:\n\n• **\"Google Sheets\"** per saperne di più sulla sincronia bidirezionale.\n• **\"Offline\"** per le operazioni in assenza di segnale.\n• **\"SOS\"** per la sicurezza degli addetti in loco.\n• **\"Busta paga\"** per approvare ore e compensi.",
    botConnectionError: "Mi dispiace, problemi di connessione 😅 ({error}). Puoi sfogliare i capitoli — o chiedere chi ha fondato TidyFlow!",
    askPlaceholder: "Fai una domanda a TidyBot sulla guida...",
    openRefChapter: "Apri Capitolo di Riferimento",
    suggestSheets: "📊 Sincronia Sheets",
    suggestOffline: "🔌 Modalità Offline",
    suggestSOS: "🚨 Allarme SOS",
    suggestPayroll: "💰 Approva Turni",
    suggestAbout: "✨ Su TidyFlow",
    suggestPricing: "💳 Prezzi",
    suggestDemo: "🎯 Demo gratuita",
    suggestWhatsNew: "🆕 Novità",
    recTemplateCols: "Colonne Consigliate per Modelli Google Sheets",
    colName: "Nome Colonna",
    colLocation: "Scheda di Destinazione",
    colRequired: "Richiesto",
    colNotes: "Note operative"
  }
};

// Complete translated text database for all 23 Chapters in all 11 supported languages.
export interface ChapterTranslation {
  title: string;
  category: "Overview" | "Role Guides" | "Core Features" | "Advanced" | "Support";
  content: string;
}

export const chapterTranslations: Record<string, Record<string, ChapterTranslation>> = {
  pt: {
    "ch-1": {
      title: "O que é o TidyFlow?",
      category: "Overview",
      content: "O TidyFlow é uma plataforma de operações unificada, projetada sob medida para empresas de limpeza residencial e comercial e gestão de instalações. Ele serve como o motor central que coordena as atividades entre proprietários de empresas, gerentes operacionais remotos e profissionais de limpeza no campo. Ao substituir ferramentas fragmentadas e offline, como listas de verificação em papel, tópicos desestruturados do WhatsApp e planilhas de folha de pagamento separadas, o TidyFlow consolida agendamento, verificação de localização, faturamento de clientes e análise de equipe em uma plataforma de banco de dados única, segura e offline."
    },
    "ch-2": {
      title: "Primeiros passos",
      category: "Overview",
      content: "Para iniciar as operações, os administradores da empresa podem se inscrever no portal TidyFlow, estabelecendo seu registro comercial. Na primeira instalação, os funcionários encontram um tour de integração interativo que explica os módulos principais. Uma vez ativado, os proprietários são guiados a configurar perfis de pagamento seguros via Stripe. A partir daí, os proprietários podem convidar a equipe acessando 'Usuários' na Barra Lateral, inserindo nomes, e-mails e categorias de função dos funcionários (Gerentes ou Faxineiros) para enviar credenciais de acesso imediatamente."
    },
    "ch-3": {
      title: "Compreender a sua função",
      category: "Overview",
      content: "O TidyFlow aplica controles rígidos de acesso baseados em funções para garantir o isolamento e a segurança dos dados. Proprietários/Administradores supervisionam planos de assinatura, formatos de moeda, configurações de cobrança de clientes, links mestre do Google Sheets e relatórios financeiros de toda a empresa. Os gerentes concentram-se no agendamento de escalas de turnos, resolução de problemas em propriedades e validação de folhas de ponto enviadas. Os faxineiros operam em um layout móvel simplificado, projetado exclusivamente para registrar horas, concluir tarefas de checklist quarto a quarto, enviar fotos antes/depois e emitir alarmes de pânico SOS."
    },
    "ch-4": {
      title: "Navegar na aplicação",
      category: "Overview",
      content: "O menu da barra lateral esquerda serve como a bússola de navegação do aplicativo. Clicar no botão de menu (☰) abre rotas para: Início (painel personalizado por função), Tarefas (listas de calendário categorizadas), Calendário, Propriedades, Escala de Trabalho, Usuários, Pedidos de Ausência, Folha de Pagamento, Faturas de Clientes, Suprimentos e Preferências. Os usuários móveis também podem acionar tours interativos em qualquer tela através do atalho 'Ajuda e Tour' no rodapé do menu lateral."
    },
    "ch-5": {
      title: "Google Sheets — ligar e sincronizar",
      category: "Core Features",
      content: "Conecte sua planilha corporativa para habilitar a sincronização bidirecional em tempo real. Passo 1: Abra 'Propriedades' e selecione 'Sincronização do Google Sheets'. Passo 2: Cole a URL da sua planilha mestre. Passo 3: Copie o e-mail exclusivo da nossa conta de serviço (ex. sync@project.iam.gserviceaccount.com) e dê permissões de edição a ele no Google Sheets. Passo 4: Clique em 'Sincronizar Agora'. O sistema lê as guias 'Propriedades' e 'Tarefas', sincronizando edições instantaneamente em ambas as direções. Todas as atribuições de faxineiros, conclusões de status e horas trabalhadas voltam diretamente para as linhas de sua planilha principal."
    },
    "ch-6": {
      title: "Propriedades",
      category: "Core Features",
      content: "O registro de propriedades é a base estrutural do TidyFlow. Localizado em Barra Lateral → Propriedades, ele abriga um catálogo de todos os endereços de serviço, códigos postais, tipos de propriedades (apartamentos, residenciais, comerciais), contagem de unidades e taxas de serviço padrão. Clicar em qualquer propriedade exibe o histórico de tarefas, modelos recorrentes ativos, coordenadas no mapa GPS e atalhos rápidos para agendar novas tarefas avulsas."
    },
    "ch-7": {
      title: "Tarefas",
      category: "Core Features",
      content: "As tarefas representam sessões de trabalho individuais e faturáveis. Os gerentes criam tarefas selecionando uma propriedade, atribuindo datas e horários agendados, inserindo descrições detalhadas e alocando faxineiros correspondentes. Checklists detalhados podem ser criados manualmente ou gerados automaticamente por meio de sugestões de IA. O ciclo de vida da tarefa avança em ordem: Planejado → Atribuído → Em Andamento (cronômetro ativo) → Enviado (trabalho concluído) → Aprovado (verificado pelo gerente) → Concluído (faturado)."
    },
    "ch-8": {
      title: "Guia para faxineiros",
      category: "Role Guides",
      content: "Os faxineiros acessam o TidyFlow em seus smartphones, sendo recebidos por um cronograma diário simplificado e altamente focado. Eles clicam na tarefa atribuída para inspecionar os marcos do checklist, acessar notas operacionais e iniciar o temporizador de trabalho. Clicando em 'Iniciar Sessão de Trabalho', o aplicativo registra a hora exata via GPS, permitindo marcar os checklists de cada cômodo, tirar fotos antes/depois e clicar em 'Enviar Trabalho' para despacho imediato à aprovação dos gestores."
    },
    "ch-9": {
      title: "Guia para gestores",
      category: "Role Guides",
      content: "Os gerentes acessam um painel de navegador de desktop dedicado ou um aplicativo coordenador para celular. A tela inicial destaca as tarefas não atribuídas do dia, folhas de ponto pendentes e problemas em aberto. Os gerentes podem inspecionar tarefas enviadas rapidamente, revisar as fotos de antes e depois carregadas pelos funcionários, comparar registros e aprovar ou rejeitar sessões para enviar as horas automaticamente aos períodos de pagamento ativos."
    },
    "ch-10": {
      title: "Guia para proprietários",
      category: "Role Guides",
      content: "Os proprietários têm autoridade máxima sobre as contas da empresa. Ao fazer o login, eles acessam as configurações de faturamento, gerenciam assinaturas do Stripe, personalizam a identidade visual corporativa (logotipo, dados bancários, cabeçalhos de recibos) e auditam registros multiusuário. Os proprietários também têm acesso a relatórios de análises detalhadas que monitoram receita, assentos ativos da equipe e insights operacionais gerados por IA."
    },
    "ch-11": {
      title: "Escalas e agendamento",
      category: "Core Features",
      content: "A escala de horários é coordenada em Barra Lateral → Escala de Trabalho. Apresenta um layout de grade que mapeia as propriedades contra os faxineiros para a semana. Os despachantes arrastam, soltam e tocam nos blocos para atribuir tarefas. O TidyFlow verifica bloqueios de férias automaticamente, impedindo que gerentes agendem faxineiros em licença por engano. O sistema também analisa coordenadas para sugerir rotas otimizadas, reduzindo custos de transporte."
    },
    "ch-12": {
      title: "Trabalhos recorrentes",
      category: "Core Features",
      content: "Evite agendar limpezas periódicas manualmente. Dentro de qualquer janela de Propriedade, os gerentes podem estabelecer escalas recorrentes (ex. limpezas comerciais semanais ou quinzenais). O painel permite definir períodos de recorrência personalizados, dias da semana e datas de término. Salvo o modelo, o TidyFlow programa e despacha as tarefas automaticamente à medida que as datas se aproximam, garantindo cobertura total do calendário."
    },
    "ch-13": {
      title: "Fotos, PDFs e comprovativos de cliente",
      category: "Core Features",
      content: "Documente a qualidade da limpeza visualmente para proteger seus negócios de reclamações de clientes. Os faxineiros carregam fotos tiradas no local. Os gerentes analisam as imagens nas tarefas enviadas e podem compilar relatórios PDF com a marca própria da empresa imediatamente para os clientes. Alternativamente, podem gerar links de portais seguros para que os clientes revisem os checklists de conclusão e as imagens diretamente de seus navegadores."
    },
    "ch-14": {
      title: "Processamento salarial e horas",
      category: "Core Features",
      content: "Simplifique o cálculo da folha de pagamento. Quando os faxineiros enviam seus temporizadores de tarefas ativas, as horas registradas entram em Folha de Pagamento → Horas Pendentes. Os gerentes revisam o tempo decorrido, fazem ajustes se necessário e aprovam. Uma vez aprovado, o sistema compila os salários com base nas taxas horárias personalizadas, horas extras ou perfis de taxa fixa por usuário, permitindo exportar holerites em PDF para impressão."
    },
    "ch-15": {
      title: "Faturas de cliente",
      category: "Core Features",
      content: "Cobre os clientes diretamente pelas limpezas concluídas. Em Barra Lateral → Faturas, os gerentes selecionam tarefas aprovadas para gerar faturas automáticas de clientes. Os módulos financeiros extraem taxas de serviço padrão da propriedade ou orçamentos de tarefas específicas e as inserem nos modelos corporativos. O sistema permite marcar faturas como enviadas, pendentes ou pagas, atualizando a saúde financeira da empresa."
    },
    "ch-16": {
      title: "Pedidos de ausência",
      category: "Core Features",
      content: "Os faxineiros enviam solicitações de licença médica e férias diretamente no menu Barra Lateral → Licenças. A tela registra as datas da ausência e descrições, enviando notificações aos coordenadores. Os gerentes aprovam ou rejeitam os registros de licença no menu Rota/Licença. Uma vez aprovado o pedido, o TidyFlow bloqueia automaticamente as datas na escala de trabalho para evitar erros de escalação."
    },
    "ch-17": {
      title: "Problemas e segurança (SOS)",
      category: "Core Features",
      content: "A segurança do trabalhador de campo é prioridade máxima. Os faxineiros têm acesso a um botão de pânico SOS vermelho brilhante permanente na tela de tarefas ativas. Pressionar o botão SOS envia instantaneamente a localização GPS em tempo real aos servidores operacionais e aciona notificações de alerta visual piscando em vermelho de alta prioridade nos painéis de todos os gerentes ativos, com uma linha do tempo de resposta emergencial."
    },
    "ch-18": {
      title: "Consumíveis e stock",
      category: "Advanced",
      content: "Mantenha o controle de estoque de produtos por meio de nosso rastreador integrado (Barra Lateral → Suprimentos). Os gerentes registram produtos de limpeza, ferramentas e consumíveis, configurando limites de reabastecimento. Durante as visitas, os faxineiros inserem os materiais utilizados (ex. sacos de lixo, papel toalha) no card da tarefa. Se os níveis caírem abaixo do limite seguro, alertas automáticos notificam a gerência."
    },
    "ch-19": {
      title: "TidyFlow Inteligência Artificial",
      category: "Advanced",
      content: "Otimize as decisões de negócios usando sugestões de IA baseadas no Gemini (servidor seguro). A IA auxilia os gerentes durante o despacho sugerindo o profissional mais adequado com base em localização, disponibilidade e classificações de desempenho anteriores. Além disso, os modelos analisam fotos de pós-limpeza enviadas pelos funcionários para classificar a qualidade do serviço executado."
    },
    "ch-20": {
      title: "Modo offline",
      category: "Advanced",
      content: "Os profissionais de campo operam frequentemente em porões ou áreas de sinal instável. O TidyFlow é offline-first por design. Os faxineiros podem preencher checklists, iniciar ou pausar temporizadores, registrar problemas e capturar fotos de antes e depois totalmente desconectados. O aplicativo enfileira as alterações localmente e sincroniza tudo com os servidores assim que detecta o retorno da internet."
    },
    "ch-21": {
      title: "Definições e permissões",
      category: "Advanced",
      content: "Configure notificações individuais, serviços de localização de fundo e preferências de sincronização de cache em Barra Lateral → Definições. Os faxineiros devem ativar permissões de localização para registrar a presença GPS e permissão de câmera para documentar o trabalho. Proprietários definem moedas de faturamento (ex. € EUR, $ USD, R$ BRL) e modelos de exportação em PDF."
    },
    "ch-22": {
      title: "Explicação dos estados das tarefas",
      category: "Advanced",
      content: "O TidyFlow guia as tarefas por uma esteira de produção estruturada: Planejado (criado, sem equipe definida), Atribuído (equipe definida, aguardando início), Em Andamento (faxineiro ativo no local, temporizador contando), Enviado (concluído pelo profissional, aguardando revisão de controle de qualidade), Revisão QA (em análise visual), Aprovado (validado pelo gerente, pronto para fatura), Concluído (totalmente pago e arquivado)."
    },
    "ch-23": {
      title: "Resolução de problemas e Perguntas Frequentes",
      category: "Support",
      content: "Se a planilha do Google Sheets falhar na sincronização, verifique se você compartilhou acesso de edição com o e-mail da conta de serviço e se os nomes das abas estão exatamente como 'Properties' e 'Tasks'. Se o rastreamento em segundo plano falhar, verifique se o GPS está ativo em seu telefone nas configurações. Se houver fotos na fila de sincronização, confirme sua conexão à internet."
    }
  },
  es: {
    "ch-1": {
      title: "¿Qué es TidyFlow?",
      category: "Overview",
      content: "TidyFlow es una plataforma unificada de operaciones diseñada a medida para empresas de limpieza residencial, comercial y de gestión de instalaciones. Actúa como el motor central que coordina las actividades entre propietarios de empresas, administradores de operaciones remotos y limpiadores en el campo. Reemplaza herramientas fragmentadas como listas en papel, hilos de WhatsApp desorganizados y hojas de pago independientes. TidyFlow consolida la programación, la verificación de ubicación, la facturación al cliente y el análisis de personal en una base de datos única, segura y con soporte sin conexión celular."
    },
    "ch-2": {
      title: "Primeros pasos",
      category: "Overview",
      content: "Para comenzar las operaciones, los administradores de la empresa pueden registrarse en el portal TidyFlow, creando su registro comercial. Al ingresar por primera vez, el personal experimenta un recorrido interactivo de bienvenida que explica los módulos principales. Una vez activado, se guía a los propietarios para configurar perfiles de pago seguros a través de Stripe. Desde allí, los propietarios invitan al personal ingresando a 'Usuarios' en la barra lateral, capturando el nombre, correo electrónico y rol del trabajador (Gerentes o Limpiadores) para enviar sus credenciales al instante."
    },
    "ch-3": {
      title: "Comprender su rol",
      category: "Overview",
      content: "TidyFlow aplica estrictos controles de acceso basados en roles para garantizar el aislamiento de datos. Los Propietarios/Administradores supervisan los planes de suscripción, configuraciones de facturación al cliente, enlaces maestros de Google Sheets e informes financieros globales de la empresa. Los Gerentes se enfocan en programar turnos de trabajo, resolver incidencias de propiedades y validar las hojas de tiempo enviadas. Los Limpiadores operan bajo una interfaz móvil simplificada diseñada únicamente para registrar horas, completar checklists habitación por habitación, subir fotos de antes/después y emitir alarmas SOS."
    },
    "ch-4": {
      title: "Navegando por la aplicación",
      category: "Overview",
      content: "El menú lateral izquierdo funciona como la brújula de navegación. Al pulsar el botón de menú (☰) se despliegan rutas hacia: Inicio (tablero según rol), Tareas (calendarios de actividades), Calendario global, Propiedades, Constructor de Turnos, Usuarios, Solicitudes de Ausencia, Nómina, Facturas, Inventario de Insumos y Preferencias. Los usuarios móviles también pueden activar guías rápidas en cualquier pantalla mediante el botón 'Ayuda y Recorrido' en el pie del menú."
    },
    "ch-5": {
      title: "Google Sheets — conectar y sincronizar",
      category: "Core Features",
      content: "Conecte la hoja de cálculo de su empresa para activar la sincronización bidireccional en tiempo real. Paso 1: Abra 'Propiedades', luego 'Sincronización de Google Sheets'. Paso 2: Pegue la URL de su hoja maestra. Paso 3: Copie la dirección de correo única de nuestra cuenta de servicio (p. ej., sync@project.iam.gserviceaccount.com) y otorgue permisos de edición en la configuración de compartir de su hoja de cálculo. Paso 4: Haga clic en 'Sincronizar ahora'. El sistema lee las pestañas 'Properties' y 'Tasks' y replica los cambios instantáneamente en ambas direcciones de forma bidireccional."
    },
    "ch-6": {
      title: "Propiedades",
      category: "Core Features",
      content: "El registro de propiedades es la base estructural de TidyFlow. Ubicado en Barra Lateral → Propiedades, aloja un catálogo con todas las direcciones de servicio, códigos postales, tipos de distribución de propiedad (apartamentos, casas residenciales, locales comerciales), recuento de habitaciones y tarifas predeterminadas. Al hacer clic en cualquier propiedad se visualiza el historial de tareas, plantillas recurrentes activas, ubicación GPS en el mapa y atajos para programar nuevas tareas."
    },
    "ch-7": {
      title: "Tareas",
      category: "Core Features",
      content: "Las tareas representan sesiones de trabajo individuales y facturables. Los gerentes crean tareas seleccionando una propiedad, asignando fechas y horas planificadas, describiendo el trabajo y seleccionando a los limpiadores asignados. Las listas de tareas pueden capturarse a mano o generarse a través de sugerencias inteligentes con IA. El ciclo de vida de la tarea avanza de manera ordenada: Planificado → Asignado → En Progreso (limpiador activo con cronómetro) → Enviado (por el limpiador) → Aprobado (por el gerente) → Completado (facturado)."
    },
    "ch-8": {
      title: "Guía para limpiadores",
      category: "Role Guides",
      content: "Los limpiadores acceden a TidyFlow desde sus teléfonos inteligentes, donde se les presenta una agenda diaria clara y enfocada. Al hacer clic en una tarea asignada, revisan los hitos de limpieza, leen las notas del servicio e inician el temporizador de trabajo. Al tocar 'Iniciar Sesión', el sistema registra las coordenadas del inicio del turno, permitiendo marcar los puntos del checklist, subir fotos de antes/después y enviar el trabajo para su aprobación final."
    },
    "ch-9": {
      title: "Guía para gerentes",
      category: "Role Guides",
      content: "Los gerentes acceden mediante un panel de control web de escritorio o desde la aplicación coordinadora móvil. La pantalla de Inicio destaca las tareas sin asignar del día, hojas de asistencia pendientes e incidencias abiertas. Los gerentes inspeccionan las tareas entregadas por el personal, comparan el checklist, examinan las fotos de antes y después y aprueban o rechazan las sesiones para calcular las horas de la nómina activa."
    },
    "ch-10": {
      title: "Guía para propietarios",
      category: "Role Guides",
      content: "Los propietarios poseen la máxima autoridad sobre las cuentas comerciales. Al iniciar sesión, configuran los parámetros de facturación, administran la suscripción del Stripe, personalizan el diseño de marca corporativa (logotipo, detalles bancarios, encabezados de facturas) y auditan los registros de seguridad. También acceden a los gráficos de rentabilidad operativa, recuento de limpiadores activos e informes gerenciales con IA."
    },
    "ch-11": {
      title: "Turnos y programación",
      category: "Core Features",
      content: "Los turnos se coordinan en Barra Lateral → Constructor de Turnos, que presenta una cuadrícula semanal que mapea propiedades contra limpiadores. Los despachadores arrastran, sueltan y guardan las asignaciones. TidyFlow comprueba automáticamente los días de vacaciones de los trabajadores, bloqueando asignaciones accidentales. El sistema analiza la ubicación GPS de las propiedades para sugerir la optimización de rutas, disminuyendo el costo de combustible."
    },
    "ch-12": {
      title: "Trabajos recurrentes",
      category: "Core Features",
      content: "Evite programar limpiezas periódicas manualmente. Dentro de la sección de cualquier Propiedad, los gerentes configuran reglas de recurrencia (como limpiezas de oficinas semanales o visitas residenciales mensuales). TidyFlow genera y distribuye de forma automática las tareas correspondientes a medida que se aproximan los días del calendario, garantizando una planificación ininterrumpida."
    },
    "ch-13": {
      title: "Fotos, PDFs y pruebas de clientes",
      category: "Core Features",
      content: "Respalde la calidad de su servicio de manera visual contra cualquier reclamo. Los limpiadores suben fotos con etiquetas geográficas al iniciar y concluir el turno. Los gerentes pueden revisar estas fotos desde las tareas entregadas y generar reportes profesionales de calidad en formato PDF con el logotipo de su empresa, o compartir un enlace a un portal seguro para que los clientes auditen el trabajo directamente."
    },
    "ch-14": {
      title: "Nómina y horas de trabajo",
      category: "Core Features",
      content: "Optimice el cálculo de su nómina. Las horas registradas de los limpiadores ingresan automáticamente a Nómina → Horas Pendientes. Los gerentes auditan los tiempos reales, hacen correcciones si es necesario y aprueban la sesión. Con esto, el sistema procesa los pagos basándose en las tarifas por hora asignadas a cada empleado o montos fijos por servicio, permitiendo generar recibos de nómina listos para impresión en PDF."
    },
    "ch-15": {
      title: "Facturas de clientes",
      category: "Core Features",
      content: "Genere facturas para sus clientes directamente por los servicios de limpieza completados. En Barra Lateral → Facturas de Clientes, los gerentes eligen las tareas aprobadas que aún no han sido cobradas para generar su factura. El sistema incorpora las tarifas base de la propiedad y permite monitorear las facturas como enviadas, pendientes o pagadas, registrando los ingresos de la plataforma."
    },
    "ch-16": {
      title: "Solicitudes de ausencias",
      category: "Core Features",
      content: "Los limpiadores capturan ausencias por enfermedad o vacaciones en Barra Lateral → Ausencias. Se registran las fechas del período solicitado junto con los comentarios del trabajador y se notifica al coordinador. Los gerentes aprueban o rechazan el registro en el Constructor de Turnos. Al ser aprobada, TidyFlow bloquea las fechas del trabajador en el cuadrante de asignación para prevenir conflictos."
    },
    "ch-17": {
      title: "Incidencias y seguridad (SOS)",
      category: "Core Features",
      content: "La seguridad del personal en campo es lo más importante. Los limpiadores cuentan con un botón de pánico SOS rojo de emergencia en la interfaz del turno activo. Al pulsarlo, el sistema comparte de forma inmediata las coordenadas del trabajador con los servidores de la empresa y muestra una notificación visual urgente con sonido en el panel de todos los gerentes activos para el despacho inmediato de auxilio."
    },
    "ch-18": {
      title: "Insumos y suministros",
      category: "Advanced",
      content: "Mantenga un control estricto de su material de limpieza en Barra Lateral → Suministros. Los gerentes registran líquidos, detergentes y herramientas configurando cantidades críticas de seguridad. Al finalizar el turno, los limpiadores pueden indicar la cantidad de suministros consumidos en la propiedad. Si las cantidades descienden por debajo de los límites seguros, el sistema genera alertas de reabastecimiento."
    },
    "ch-19": {
      title: "IA de TidyFlow",
      category: "Advanced",
      content: "Tome mejores decisiones operativas gracias a las sugerencias del modelo seguro Gemini (servidor central). La inteligencia artificial ayuda en la asignación sugiriendo al mejor limpiador disponible según ubicación geográfica y puntajes históricos. Adicionalmente, el sistema audita de manera visual las fotos de salida de las propiedades calificando el orden y la calidad del servicio realizado."
    },
    "ch-20": {
      title: "Modo sin conexión",
      category: "Advanced",
      content: "El personal de limpieza trabaja con frecuencia en sótanos o zonas sin cobertura móvil. TidyFlow funciona bajo el principio de offline-first. Los limpiadores marcan tareas, inician o pausan cronómetros, registran notas de incidentes y toman fotos antes/después sin conexión celular. La aplicación almacena los cambios localmente en la cola de sincronización y los sube automáticamente al recuperar señal."
    },
    "ch-21": {
      title: "Ajustes y permisos",
      category: "Advanced",
      content: "Personalice notificaciones, servicios de ubicación y almacenamiento local en Barra Lateral → Ajustes. El personal de limpieza debe otorgar acceso a la ubicación GPS de fondo para certificar la asistencia y permisos de cámara para capturar fotos de las propiedades. Los propietarios configuran el tipo de divisa oficial (p. ej. €, $, MXN) y cargan logotipos corporativos para PDF."
    },
    "ch-22": {
      title: "Estados de tareas explicados",
      category: "Advanced",
      content: "TidyFlow gestiona las tareas a través de fases estructuradas: Planificado (creada, sin limpiador), Asignado (limpiador asignado, esperando fecha), En Progreso (limpiador activo con cronómetro en marcha), Enviado (trabajo concluido, listo para control de calidad), Revisión de Calidad (en inspección visual), Aprobado (verificado por gerente, listo para nómina/cobro), Completado (totalmente cobrado)."
    },
    "ch-23": {
      title: "Resolución de problemas y FAQ",
      category: "Support",
      content: "Si Google Sheets no sincroniza, valide que el archivo esté compartido con permisos de edición con el e-mail de servicio de TidyFlow, y que las pestañas se llamen exactamente 'Properties' y 'Tasks'. Si el GPS del teléfono falla, habilite el acceso a ubicación de fondo. Si hay fotos en la cola de carga, revise que la conexión de red del celular sea estable."
    }
  },
  cn: {
    "ch-1": {
      title: "什么是 TidyFlow？",
      category: "Overview",
      content: "TidyFlow 是一款专为现代设施管理、住宅及商业清洁公司深度定制的数字化运营管理平台。它作为核心中枢系统，将业务主管、远程调度经理与外勤清洁人员紧密连接。通过取代落后的纸质表格、无序的微信聊天群以及零散的工资核算表格，TidyFlow 将排班、工时考勤、定位打卡、客户开票以及外勤绩效分析完美整合到安全、支持断网离线工作的云端数据库中。"
    },
    "ch-2": {
      title: "快速入门指南",
      category: "Overview",
      content: "要启动业务，企业管理员只需注册 TidyFlow 账户即可。员工首次登录系统时，将自动开启交互式功能引导，演示各大核心模块。账户开通后，企业主可通过 Stripe 安全配置支付信息。随后可在侧边栏的“员工管理”中输入员工姓名、邮箱并设置对应角色权限（调度经理或清洁人员），系统将立即向其发送带有登录信息的激活邮件。"
    },
    "ch-3": {
      title: "了解您的角色权限",
      category: "Overview",
      content: "TidyFlow 拥有严格的角色权限隔离，保障企业核心数据安全。企业主/管理员（Owners）拥有全部权限，负责管理订阅套餐、结算货币格式、客户账单设置、谷歌表格链接及企业综合财务报告；调度经理（Managers）专注于日程排班、处理物业突发故障并审核工时单；清洁人员（Cleaners）使用极简的手机客户端，仅查看个人工单、执行房间清洁清单、上传对比照片并发送紧急 SOS 求救。"
    },
    "ch-4": {
      title: "应用界面导航",
      category: "Overview",
      content: "左侧菜单侧边栏是系统导航核心。点击（☰）按钮可展开功能菜单：首页（根据角色展示核心面板）、清洁任务、全局日历、物业管理、智能排班工具、员工管理、请假审批、考勤结算、发票管理、清洁物料库存及系统设置。移动端用户可在侧边栏底部随时通过“帮助与教程”按钮重新开启互动式功能指导。"
    },
    "ch-5": {
      title: "谷歌表格连接与双向同步",
      category: "Core Features",
      content: "连接企业现有的谷歌电子表格，实现数据的实时双向同步。第 1 步：进入物业管理，选择“Google 表格同步”选项；第 2 步：粘贴您的主表格 URL 链接；第 3 步：复制系统生成的唯一服务账号邮箱（例如：sync@project.iam.gserviceaccount.com），并在您的谷歌表格共享设置中授予其编辑权限；第 4 步：点击“立即同步”。系统将自动读取和更新名为 Properties 和 Tasks 的工作表，实现考勤数据、物业修改的双向无缝对接。"
    },
    "ch-6": {
      title: "物业和地址管理",
      category: "Core Features",
      content: "物业管理是 TidyFlow 的结构基石。在侧边栏的“物业管理”中，记录着所有服务地址、邮编、房型设计（如公寓、独栋、商用建筑）、房间总数及默认清洁单价。点击任一物业即可追溯该地址的清洁历史、当前活动的循环清洁模板、地图 GPS 坐标定位，并可一键为该地址发起临时的清洁工单。"
    },
    "ch-7": {
      title: "清洁任务与工单管理",
      category: "Core Features",
      content: "清洁任务代表可计费的独立清洁工单。经理可以通过选择特定物业、指派排班时间、撰写清洁要求并选择外勤人员来生成工单。每个任务可包含手动添加的清洁步骤，或由 AI 推荐模板一键生成。工单状态遵循标准的业务流程：已规划 → 已指派 → 进行中（外勤已打卡上工） → 已提交（已上传完工照） → 已审核（经理质检通过） → 已归档（结算开票）。"
    },
    "ch-8": {
      title: "清洁人员外勤端指南",
      category: "Role Guides",
      content: "清洁人员登录手机端后，会看到简单清晰的当日日程表。点击工单可查看房间清洁指南、客户备注并开启打卡。点击“开始计时上工”将自动记录包含 GPS 地址的打卡时间，并在清洁过程中逐一勾选完成项，拍摄“清洁前”和“清洁后”对比照，最后点击“提交工单”实时发送至后台等待审核。"
    },
    "ch-9": {
      title: "运营经理调度端指南",
      category: "Role Guides",
      content: "经理可以通过桌面端控制台或移动管理员端进行日常管理。首页会高亮提醒今日未指派的任务、待审批工时以及未解决的物业问题。经理能快速审阅员工提交的完工报告、检查上传的对比照片、核对房间清扫打卡步骤，并一键批准或驳回，数据将自动流入工资考勤计算期。"
    },
    "ch-10": {
      title: "企业主管理端指南",
      category: "Role Guides",
      content: "企业主对系统拥有最高控制权。登录后可设定开票抬头、开户行信息，配置 Stripe 订阅套餐，并能自定义输出报告的品牌 LOGO 样式。同时系统内置高级数据分析，帮助企业主洞察多项目总营收、员工出勤效率、平均清洁评分以及由 AI 生成的业务增长与成本分析简报。"
    },
    "ch-11": {
      title: "排班与智能调度系统",
      category: "Core Features",
      content: "在侧边栏“智能排班”中进行团队排班。网格化界面清晰展示出本周各物业的清洁人员分配。调度员只需拖拽方块即可快速调配。系统内置自动冲突检测，遇到请假员工会自动锁定避免误排。系统还会根据地图定位自动规划最佳保洁路线，大幅节省员工往返通勤时间和路费成本。"
    },
    "ch-12": {
      title: "循环/定期任务设置",
      category: "Core Features",
      content: "无需反复手动添加周期性清洁。在任意物业详情中，经理都可以一键设定循环清洁规则（如每周办公楼清洁或每月公寓退租清扫），自由设置循环周期、周几执勤及结束日期。保存后，TidyFlow 将随着日期临近自动生成工单并下发至员工手机，彻底解放双手。"
    },
    "ch-13": {
      title: "质检对比照、PDF导出与完工证明",
      category: "Core Features",
      content: "用图片记录清洁成效，防止客户恶意差评。员工打卡和拍照附带地理及时间戳。经理可在工单中随时审阅这些资料，并一键打包导出印有您公司品牌 LOGO 的精美 PDF 完工证明发送给客户；或者直接分享一个安全的外部链接，供客户自助查看各房间对比照和验收单，免去发邮件附件的烦恼。"
    },
    "ch-14": {
      title: "考勤工时与工资单管理",
      category: "Core Features",
      content: "让发薪变得轻而易举。外勤人员提交的打卡计时将实时汇集到“考勤结算”待审批中。经理可查阅实际工时，必要时进行编辑调整并批准。系统将基于员工设定的个性化时薪、加班系数或按单计件规则自动核算工资数额，支持批量一键导出 PDF 工资条，随时可以打印发放。"
    },
    "ch-15": {
      title: "客户账单与发票管理",
      category: "Core Features",
      content: "直接为完成的清洁任务向客户发起收款。在“发票管理”中，经理可以勾选已完成且未结算的工单，一键合成专业的客户账单。系统会自动调取该物业设定的基准价格。发票可标记为已发送、待处理或已支付，实时更新并汇总在系统财务明细中，让账目一目了然。"
    },
    "ch-16": {
      title: "员工请假申请与自动审批",
      category: "Core Features",
      content: "外勤人员可在手机端“我的请假”中提交请假或病假申请。填写请假日期和理由后，系统会自动推送至经理端进行审批。一经经理核准，TidyFlow 智能排班网格将自动锁定该员工在这段日期内的排班状态，防止调度员误指派工单，有效避免人事纠纷。"
    },
    "ch-17": {
      title: "现场问题反馈与紧急求助 (SOS)",
      category: "Core Features",
      content: "一线清洁人员的人身安全是平台关注的首要焦点。外勤打卡执勤界面中，常驻着醒目的红色“SOS 紧急求助”按钮。员工一旦遇到突发紧急状况，点击此按钮将立即上报当前精准的 GPS 地理位置，并向所有后台在线经理的电脑和手机推送闪烁的红色报警弹窗，支持全天候安全调度处置。"
    },
    "ch-18": {
      title: "清洁物料与库存跟踪",
      category: "Advanced",
      content: "物料库存管理模块能帮您解决药剂工具遗失和短缺的问题。经理可在系统中录入所有消毒水、抹布、拖把等耗材，并设置安全警戒线。员工在清扫完成提交工单时，可勾选使用了多少耗材（如消耗了 2 个垃圾袋），库存将自动扣减。若库存降至警戒线以下，系统将自动高亮提醒采购。"
    },
    "ch-19": {
      title: "AI 智能自动排班分配",
      category: "Advanced",
      content: "基于谷歌 Gemini 核心，为经理决策提供可靠的技术支撑。在分派任务时，AI 可综合评估员工的当前位置、排班空闲及历史保洁服务评分，一键推荐最合适的外勤人选。此外，AI 还能自动识别上传的离场完工照，为保洁质量打分，自动识别并高亮潜在的清扫死角，提升质检效率。"
    },
    "ch-20": {
      title: "地下室离线断网模式",
      category: "Advanced",
      content: "外勤保洁经常需要在无网络信号的地下室或偏远独栋中上工。TidyFlow 采用离线优先架构。清洁工即使完全断网，依然能打卡计时、勾选清单、提交现场问题并拍摄对比照片。手机客户端会安全地将数据缓存在本地，一旦重新检测到网络连接，将自动无缝上传同步至服务器。"
    },
    "ch-21": {
      title: "系统设置与权限配置",
      category: "Advanced",
      content: "在“系统设置”中可自由调整消息推送、定位权限与本地缓存偏好。清洁工需开启后台 GPS 定位和相机权限以正常记录考勤并完成质检拍照。企业主可配置公司的首选货币符号（如英镑、美元、人民币等），并能在这里上传定制化 PDF 抬头及页眉 LOGO 图片。"
    },
    "ch-22": {
      title: "清洁任务状态生命周期详解",
      category: "Advanced",
      content: "系统中的清洁任务将依次流转以下状态：已规划（已生成，未配人）、已指派（已指派外勤员工，等待出发）、进行中（员工已抵达现场打卡，计时中）、已提交（员工清扫完毕并拍照上报）、控制质量（等待管理层远程审查完工照）、已批准（经理确认无误，工时归档）、已完成（发票已付，单据归档）。"
    },
    "ch-23": {
      title: "常见问题解答与故障排除",
      category: "Support",
      content: "若遇到谷歌表格无法同步，请检查是否已正确在表格共享中添加服务账号邮箱，并确认表格中的工作页名称完全为英文的 Properties 和 Tasks。若手机定位打卡失败，请在手机系统设置中确保已授予 TidyFlow 后台定位权限。若完工照片显示在本地队列中未上传，请确认网络是否已畅通。"
    }
  },
  fr: frChapters,
  de: deChapters,
  ar: arChapters,
  pl: plChapters,
  no: noChapters,
  sv: svChapters,
  it: itChapters
};

// Localized chapter titles for languages that use API for full chapter body
export const chapterTitleTranslations: Record<string, Record<string, string>> = {
  fr: {
    "ch-1": "Qu'est-ce que TidyFlow ?", "ch-2": "Premiers pas", "ch-3": "Comprendre votre rôle",
    "ch-4": "Naviguer dans l'application", "ch-5": "Google Sheets — connexion et synchronisation",
    "ch-6": "Propriétés", "ch-7": "Tâches", "ch-8": "Guide pour les agents",
    "ch-9": "Guide pour les gestionnaires", "ch-10": "Guide pour les propriétaires",
    "ch-11": "Planning et rota", "ch-12": "Travaux récurrents", "ch-13": "Photos, PDF et preuves client",
    "ch-14": "Paie et heures", "ch-15": "Factures clients", "ch-16": "Demandes de congé",
    "ch-17": "Incidents et sécurité (SOS)", "ch-18": "Fournitures", "ch-19": "TidyFlow IA",
    "ch-20": "Mode hors ligne", "ch-21": "Paramètres et permissions", "ch-22": "Statuts des tâches expliqués",
    "ch-23": "Dépannage et FAQ"
  },
  de: {
    "ch-1": "Was ist TidyFlow?", "ch-2": "Erste Schritte", "ch-3": "Ihre Rolle verstehen",
    "ch-4": "In der App navigieren", "ch-5": "Google Sheets — verbinden und synchronisieren",
    "ch-6": "Objekte", "ch-7": "Aufgaben", "ch-8": "Leitfaden für Reinigungskräfte",
    "ch-9": "Leitfaden für Manager", "ch-10": "Leitfaden für Inhaber",
    "ch-11": "Dienstplan und Einsatzplanung", "ch-12": "Wiederkehrende Aufträge", "ch-13": "Fotos, PDFs und Kundennachweise",
    "ch-14": "Lohn und Arbeitszeiten", "ch-15": "Kundenrechnungen", "ch-16": "Urlaubsanträge",
    "ch-17": "Vorfälle und Sicherheit (SOS)", "ch-18": "Materialien", "ch-19": "TidyFlow KI",
    "ch-20": "Offline-Modus", "ch-21": "Einstellungen und Berechtigungen", "ch-22": "Aufgabenstatus erklärt",
    "ch-23": "Fehlerbehebung und FAQ"
  },
  pl: {
    "ch-1": "Czym jest TidyFlow?", "ch-2": "Pierwsze kroki", "ch-3": "Zrozumienie swojej roli",
    "ch-4": "Nawigacja w aplikacji", "ch-5": "Google Sheets — połączenie i synchronizacja",
    "ch-6": "Obiekty", "ch-7": "Zadania", "ch-8": "Przewodnik dla pracowników",
    "ch-9": "Przewodnik dla menedżerów", "ch-10": "Przewodnik dla właścicieli",
    "ch-11": "Grafik i planowanie", "ch-12": "Zlecenia cykliczne", "ch-13": "Zdjęcia, PDF i dowody dla klienta",
    "ch-14": "Płace i godziny", "ch-15": "Faktury klientów", "ch-16": "Wnioski urlopowe",
    "ch-17": "Problemy i bezpieczeństwo (SOS)", "ch-18": "Materiały", "ch-19": "TidyFlow AI",
    "ch-20": "Tryb offline", "ch-21": "Ustawienia i uprawnienia", "ch-22": "Statusy zadań wyjaśnione",
    "ch-23": "Rozwiązywanie problemów i FAQ"
  },
  no: {
    "ch-1": "Hva er TidyFlow?", "ch-2": "Komme i gang", "ch-3": "Forstå din rolle",
    "ch-4": "Navigere i appen", "ch-5": "Google Sheets — koble til og synkronisere",
    "ch-6": "Eiendommer", "ch-7": "Oppgaver", "ch-8": "Veiledning for rengjørere",
    "ch-9": "Veiledning for ledere", "ch-10": "Veiledning for eiere",
    "ch-11": "Rota og planlegging", "ch-12": "Gjentakende jobber", "ch-13": "Bilder, PDF og kundedokumentasjon",
    "ch-14": "Lønn og timer", "ch-15": "Kundefakturaer", "ch-16": "Permisjonsforespørsler",
    "ch-17": "Hendelser og sikkerhet (SOS)", "ch-18": "Forbruksvarer", "ch-19": "TidyFlow AI",
    "ch-20": "Frakoblet modus", "ch-21": "Innstillinger og tillatelser", "ch-22": "Oppgavestatuser forklart",
    "ch-23": "Feilsøking og FAQ"
  },
  sv: {
    "ch-1": "Vad är TidyFlow?", "ch-2": "Komma igång", "ch-3": "Förstå din roll",
    "ch-4": "Navigera i appen", "ch-5": "Google Sheets — anslut och synkronisera",
    "ch-6": "Fastigheter", "ch-7": "Uppgifter", "ch-8": "Guide för städare",
    "ch-9": "Guide för chefer", "ch-10": "Guide för ägare",
    "ch-11": "Schema och planering", "ch-12": "Återkommande jobb", "ch-13": "Foton, PDF och kundbevis",
    "ch-14": "Lön och timmar", "ch-15": "Kundfakturor", "ch-16": "Ledighetsförfrågningar",
    "ch-17": "Ärenden och säkerhet (SOS)", "ch-18": "Förbrukningsmaterial", "ch-19": "TidyFlow AI",
    "ch-20": "Offlineläge", "ch-21": "Inställningar och behörigheter", "ch-22": "Uppgiftsstatusar förklarade",
    "ch-23": "Felsökning och FAQ"
  },
  it: {
    "ch-1": "Cos'è TidyFlow?", "ch-2": "Per iniziare", "ch-3": "Comprendere il proprio ruolo",
    "ch-4": "Navigare nell'app", "ch-5": "Google Sheets — connessione e sincronizzazione",
    "ch-6": "Proprietà", "ch-7": "Attività", "ch-8": "Guida per gli operatori",
    "ch-9": "Guida per i manager", "ch-10": "Guida per i proprietari",
    "ch-11": "Turni e pianificazione", "ch-12": "Lavori ricorrenti", "ch-13": "Foto, PDF e prove per il cliente",
    "ch-14": "Paghe e ore", "ch-15": "Fatture clienti", "ch-16": "Richieste di ferie",
    "ch-17": "Problemi e sicurezza (SOS)", "ch-18": "Forniture", "ch-19": "TidyFlow IA",
    "ch-20": "Modalità offline", "ch-21": "Impostazioni e permessi", "ch-22": "Stati delle attività spiegati",
    "ch-23": "Risoluzione problemi e FAQ"
  }
};

export const getDocTranslation = (
  chapterId: string,
  key: "title" | "content",
  lang: string,
  fallbackText: string
): string => {
  const langTrans = chapterTranslations[lang];
  if (langTrans && langTrans[chapterId]) {
    return langTrans[chapterId][key];
  }
  if (key === "title") {
    const titleOnly = chapterTitleTranslations[lang]?.[chapterId];
    if (titleOnly) return titleOnly;
  }
  return fallbackText;
};

export const getCategoryTranslation = (cat: string, lang: string): string => {
  const mapping: Record<string, Record<string, string>> = {
    pt: {
      "Overview": "Visão Geral",
      "Role Guides": "Guias de Função",
      "Core Features": "Recursos Principais",
      "Advanced": "Avançado",
      "Support": "Suporte"
    },
    es: {
      "Overview": "Vista General",
      "Role Guides": "Guías de Roles",
      "Core Features": "Características Clave",
      "Advanced": "Avanzado",
      "Support": "Soporte"
    },
    ar: {
      "Overview": "نظرة عامة",
      "Role Guides": "أدلة الأدوار",
      "Core Features": "الميزات الأساسية",
      "Advanced": "خيارات متقدمة",
      "Support": "الدعم"
    },
    cn: {
      "Overview": "概述介绍",
      "Role Guides": "角色指南",
      "Core Features": "核心功能",
      "Advanced": "高级功能",
      "Support": "客户支持"
    },
    fr: {
      "Overview": "Présentation",
      "Role Guides": "Guides des Rôles",
      "Core Features": "Fonctionnalités Clés",
      "Advanced": "Options Avancées",
      "Support": "Support Client"
    },
    de: {
      "Overview": "Übersicht",
      "Role Guides": "Rollenhandbücher",
      "Core Features": "Kernfunktionen",
      "Advanced": "Fortgeschritten",
      "Support": "Support"
    },
    pl: {
      "Overview": "Przegląd",
      "Role Guides": "Przewodniki po Rolach",
      "Core Features": "Główne Funkcje",
      "Advanced": "Zaawansowane",
      "Support": "Wsparcie"
    },
    no: {
      "Overview": "Oversikt",
      "Role Guides": "Rolleguider",
      "Core Features": "Kjernefunksjoner",
      "Advanced": "Avansert",
      "Support": "Kundestøtte"
    },
    sv: {
      "Overview": "Översikt",
      "Role Guides": "Rollguider",
      "Core Features": "Kärnfunktioner",
      "Advanced": "Avancerat",
      "Support": "Support"
    },
    it: {
      "Overview": "Panoramica",
      "Role Guides": "Guide ai Ruoli",
      "Core Features": "Funzionalità Principali",
      "Advanced": "Avanzate",
      "Support": "Supporto"
    }
  };

  return (mapping[lang] && mapping[lang][cat]) || cat;
};

// Returns dynamic local-synthesized bot reply based on matched chapter and language
export const getLocalizedBotReply = (
  chapterId: string,
  lang: string,
  bestTitle: string,
  bestContent: string
): string => {
  const responseData: Record<string, Record<string, string>> = {
    pt: {
      "ch-5": "A conexão do TidyFlow ao **Google Sheets** leva apenas 4 etapas fáceis:\n\n1. Acesse **Barra Lateral** → **Propriedades** → **Sincronização Google Sheets**.\n2. Cole o link mestre de sua planilha do Google.\n3. Compartilhe permissão de edição com nossa conta de serviço segura: **sync@project.iam.gserviceaccount.com**\n4. Clique em **\"Sincronizar Agora\"**.\n\nPronto! Qualquer alteração nos dados propagará bidirecionalmente em tempo real.",
      "ch-17": "O **botão de pânico SOS** é um recurso crítico de segurança para faxineiros em campo:\n\n• Ele permanece visível como um botão vermelho brilhante na tela de trabalho ativa do faxineiro.\n• Pressionar ele envia imediatamente a localização GPS aos servidores operacionais da empresa.\n• Um alarme sonoro-visual vermelho piscando de alta prioridade alerta a gerência em seus painéis operacionais instantaneamente.",
      "ch-20": "Sim! O TidyFlow é totalmente otimizado para funcionamento em **Modo Offline**:\n\n• Os profissionais de limpeza podem registrar horas, completar checklists, reportar problemas e tirar fotos antes/depois sem sinal de celular.\n• O aplicativo enfileira todas as modificações no banco de dados local com segurança.\n• Assim que uma conexão de internet estável for detectada, o app faz o upload automático dos registros pendentes.",
      "ch-14": "Para gerenciar o **Processamento Salarial (Folha de Pagamento) e Horas**:\n\n• As horas registradas pelos temporizadores dos faxineiros chegam em **Folha de Pagamento → Horas Pendentes**.\n• Os coordenadores auditam o tempo total, efetuam correções necessárias e clicam em Aprovar.\n• O sistema gera salários automaticamente conforme as taxas horárias do profissional, permitindo exportar holerites em PDF.",
      "ch-22": "Veja a esteira de estados das **Tarefas do TidyFlow**:\n\n• *Planejado*: Criado sem faxineiro atribuído.\n• *Atribuído*: Faxineiro definido, aguardando início do turno.\n• *Em Andamento*: Faxineiro ativo com o temporizador contando no local.\n• *Enviado*: Limpeza concluída, aguardando controle de qualidade.\n• *Aprovado*: Validado pelo gestor operante, integrado à folha de pagamento.\n• *Concluído*: Faturado e quitado pelo cliente."
    },
    es: {
      "ch-5": "Conectar TidyFlow con **Google Sheets** toma solo 4 pasos sencillos:\n\n1. Ve a la **Barra Lateral** → **Propiedades** → **Sincronización de Google Sheets**.\n2. Pega la URL de tu hoja de cálculo de Google.\n3. Comparte acceso de edición con nuestro correo de servicio seguro: **sync@project.iam.gserviceaccount.com**\n4. Presiona **\"Sincronizar ahora\"**.\n\nLos cambios en tus propiedades y tareas se actualizarán automáticamente en tiempo real.",
      "ch-17": "El **botón de pánico SOS** es un sistema esencial de seguridad en campo para limpiadores:\n\n• Se mantiene visible como un botón rojo brillante en la pantalla del turno activo del limpiador.\n• Al pulsarlo, comparte de inmediato la ubicación GPS exacta del limpiador con los servidores centrales.\n• Un aviso visual urgente y sonido de alarma alerta a todos los coordinadores en sus paneles operativos.",
      "ch-20": "¡Sí! TidyFlow está diseñado para funcionar en **Modo sin conexión (Offline)**:\n\n• Los limpiadores pueden iniciar asistencia, marcar checklists, reportar incidencias y tomar fotos antes/después sin señal móvil.\n• El sistema guarda de manera segura todos los cambios en la cola de almacenamiento local.\n• La aplicación subirá los cambios guardados automáticamente tan pronto como se detecte conexión a internet.",
      "ch-14": "Para administrar la **Nómina y Horas de Trabajo**:\n\n• Las horas de los limpiadores llegan a **Nómina → Horas Pendientes** al enviar su cronómetro.\n• Los gerentes revisan los tiempos reales registrados, editan de ser necesario y aprueban la sesión.\n• El sistema calcula salarios según las tarifas por hora configuradas, con soporte de impresión en PDF.",
      "ch-22": "Aquí tienes los estados de las **Tareas en TidyFlow**:\n\n• *Planificado*: Creado sin personal de limpieza.\n• *Asignado*: Limpiador asignado, esperando fecha de inicio.\n• *En Progreso*: Limpiador activo en el lugar con temporizador corriendo.\n• *Enviado*: Servicio finalizado, esperando revisión de calidad.\n• *Aprobado*: Verificado por gerencia, enviado a nómina.\n• *Completado*: Facturado y pagado de manera exitosa."
    },
    cn: {
      "ch-5": "连接 TidyFlow 与 **谷歌电子表格** 仅需简单 4 步：\n\n1. 进入 **侧边栏** → **物业管理** → **Google 表格同步**。\n2. 粘贴您的谷歌主表格 URL 链接。\n3. 在表格共享设置中将编辑权限授予我们的服务账号：**sync@project.iam.gserviceaccount.com**\n4. 点击 **“立即同步”** 按钮。\n\n配置完成后，物业和任务工作表将在两端实现秒级双向同步！",
      "ch-17": "**SOS 紧急求助按钮** 是保障外勤保洁人身安全的核心功能：\n\n• 该按钮常驻于清洁人员手机端工单执勤页面的显眼位置（大红色）。\n• 员工点击求助后，将瞬间向服务器发送当前高精度的 GPS 定位信息。\n• 所有在线的调度经理端控制台将触发闪烁的红色高阶警报，确保安全调度处置。",
      "ch-20": "是的！TidyFlow 完美支持强大的 **离线模式**：\n\n• 员工在没有手机信号的地下室仍然能打卡上工、勾选房间清单、反馈问题并拍照质检。\n• 所有离线数据都会加密存储在手机本地的待同步队列中。\n• 只要手机重新检测到稳定的网络连接，客户端将自动静默上传同步所有待处理变更！",
      "ch-14": "管理 **考勤结算与工资发放** 流程如下：\n\n• 员工提交计时工单后，考勤记录将自动流入 **考勤结算 → 待审批** 列表中。\n• 经理核实实际清扫时间并进行必要微调，点击“批准”。\n• 系统根据每位清洁工设定的时薪规则自动计算总额，支持一键批量输出 PDF 工资单。",
      "ch-22": "清洁工单的 **任务状态生命周期** 详解如下：\n\n• *已规划*: 工单已创建，暂未指派具体清洁人员。\n• *已指派*: 员工已指派锁定，等待排班时间到达出发。\n• *进行中*: 清洁员已抵达现场打卡，工时计时器正后台计数中。\n• *已提交*: 保洁清扫完毕并拍照上传，等待经理端质量控制检验。\n• *已批准*: 经理质检并核对工时通过，该工单自动流入工资结算模块。\n• *已完成*: 发票已开具，且客户已成功支付款项。"
    },
    fr: {
      "ch-5": "Connecter TidyFlow à **Google Sheets** ne prend que 4 étapes :\n\n1. Ouvrez **Barre latérale** → **Propriétés** → **Synchronisation Google Sheets**.\n2. Collez l'URL de votre feuille de calcul.\n3. Partagez l'accès en édition avec notre compte de service : **sync@project.iam.gserviceaccount.com**\n4. Cliquez sur **« Synchroniser maintenant »**.\n\nLes modifications se propagent en temps réel dans les deux sens.",
      "ch-17": "Le **bouton SOS** est un outil de sécurité essentiel pour les agents sur le terrain :\n\n• Il reste visible comme un bouton rouge sur l'écran de tâche active.\n• Un appui envoie immédiatement la position GPS aux serveurs opérationnels.\n• Une alerte visuelle et sonore haute priorité prévient tous les gestionnaires.",
      "ch-20": "Oui ! TidyFlow est conçu pour le **mode hors ligne** :\n\n• Les agents peuvent pointer, cocher des listes, signaler des problèmes et prendre des photos sans réseau.\n• L'application met en file d'attente les modifications localement.\n• Dès qu'une connexion stable est détectée, tout est synchronisé automatiquement.",
      "ch-14": "Pour gérer la **paie et les heures** :\n\n• Les heures arrivent dans **Paie → Heures en attente**.\n• Les gestionnaires vérifient, ajustent si besoin et approuvent.\n• Le système calcule les salaires selon les taux horaires configurés et exporte des bulletins PDF.",
      "ch-22": "Voici le cycle de vie des **tâches TidyFlow** :\n\n• *Planifié* : créé sans agent assigné.\n• *Assigné* : agent défini, en attente du début.\n• *En cours* : agent actif sur site, chronomètre en marche.\n• *Soumis* : travail terminé, en attente de contrôle qualité.\n• *Approuvé* : validé par le gestionnaire, prêt à facturer.\n• *Terminé* : facturé et payé."
    },
    de: {
      "ch-5": "TidyFlow mit **Google Sheets** zu verbinden dauert nur 4 Schritte:\n\n1. Öffnen Sie **Seitenleiste** → **Objekte** → **Google Sheets Sync**.\n2. Fügen Sie die URL Ihrer Tabelle ein.\n3. Teilen Sie Bearbeitungsrechte mit: **sync@project.iam.gserviceaccount.com**\n4. Klicken Sie auf **„Jetzt synchronisieren“**.\n\nÄnderungen werden in Echtzeit bidirektional übertragen.",
      "ch-17": "Der **SOS-Knopf** ist ein kritisches Sicherheitsfeature für Außendienstmitarbeiter:\n\n• Er bleibt als roter Button auf dem aktiven Aufgabenbildschirm sichtbar.\n• Ein Tipp sendet sofort GPS-Koordinaten an die Betriebsserver.\n• Eine hochpriorisierte Alarmmeldung warnt alle Manager sofort.",
      "ch-20": "Ja! TidyFlow ist für den **Offline-Modus** optimiert:\n\n• Kräfte können stempeln, Checklisten abhaken, Probleme melden und Fotos ohne Netz aufnehmen.\n• Die App speichert Änderungen sicher in einer lokalen Warteschlange.\n• Sobald eine Verbindung besteht, werden alle Daten automatisch hochgeladen.",
      "ch-14": "So verwalten Sie **Lohn und Arbeitszeiten**:\n\n• Stunden landen unter **Lohn → Ausstehende Stunden**.\n• Manager prüfen, korrigieren bei Bedarf und genehmigen.\n• Das System berechnet Löhne nach Stundensätzen und exportiert PDF-Abrechnungen.",
      "ch-22": "So laufen **Aufgabenstatus** in TidyFlow:\n\n• *Geplant*: erstellt, noch nicht zugewiesen.\n• *Zugewiesen*: Kraft festgelegt, wartet auf Start.\n• *In Bearbeitung*: aktiv vor Ort, Timer läuft.\n• *Eingereicht*: Arbeit fertig, wartet auf QA.\n• *Genehmigt*: vom Manager bestätigt, bereit zur Abrechnung.\n• *Abgeschlossen*: fakturiert und bezahlt."
    },
    pl: {
      "ch-5": "Połączenie TidyFlow z **Google Sheets** to tylko 4 kroki:\n\n1. Otwórz **Panel boczny** → **Obiekty** → **Synchronizacja Google Sheets**.\n2. Wklej URL arkusza.\n3. Udostępnij edycję kontu usługi: **sync@project.iam.gserviceaccount.com**\n4. Kliknij **„Synchronizuj teraz”**.\n\nZmiany synchronizują się w czasie rzeczywistym w obie strony.",
      "ch-17": "Przycisk **SOS** to kluczowe narzędzie bezpieczeństwa w terenie:\n\n• Pozostaje widoczny jako czerwony przycisk na ekranie aktywnego zadania.\n• Naciśnięcie natychmiast wysyła lokalizację GPS do serwerów.\n• Alarm wysokiego priorytetu ostrzega wszystkich menedżerów.",
      "ch-20": "Tak! TidyFlow działa w trybie **offline**:\n\n• Pracownicy mogą rejestrować czas, odhaczać listy, zgłaszać problemy i robić zdjęcia bez sieci.\n• Aplikacja kolejkuje zmiany lokalnie.\n• Po przywróceniu połączenia wszystko synchronizuje się automatycznie.",
      "ch-14": "Zarządzanie **płacami i godzinami**:\n\n• Godziny trafiają do **Płace → Oczekujące godziny**.\n• Menedżerowie weryfikują, korygują i zatwierdzają.\n• System oblicza wynagrodzenia według stawek godzinowych i eksportuje PDF.",
      "ch-22": "Cykl życia **zadań w TidyFlow**:\n\n• *Zaplanowane*: utworzone bez przypisania.\n• *Przypisane*: pracownik wybrany, czeka na start.\n• *W toku*: aktywny na miejscu, licznik działa.\n• *Zgłoszone*: praca zakończona, czeka na kontrolę.\n• *Zatwierdzone*: zweryfikowane przez menedżera.\n• *Ukończone*: zafakturowane i opłacone."
    },
    no: {
      "ch-5": "Koble TidyFlow til **Google Sheets** i bare 4 trinn:\n\n1. Åpne **Sidepanel** → **Eiendommer** → **Google Sheets-synk**.\n2. Lim inn regneark-URL.\n3. Del redigeringstilgang med: **sync@project.iam.gserviceaccount.com**\n4. Klikk **«Synkroniser nå»**.\n\nEndringer synkroniseres i sanntid begge veier.",
      "ch-17": "**SOS-knappen** er et kritisk sikkerhetsverktøy for feltarbeidere:\n\n• Den er synlig som en rød knapp på aktiv oppgaveskjerm.\n• Et trykk sender GPS-posisjon umiddelbart til serverne.\n• Høyprioritets alarm varsler alle ledere.",
      "ch-20": "Ja! TidyFlow er bygget for **frakoblet modus**:\n\n• Rengjørere kan stemple inn, sjekke lister, rapportere problemer og ta bilder uten nett.\n• Appen køer endringer lokalt.\n• Når tilkobling gjenopprettes, synkroniseres alt automatisk.",
      "ch-14": "Slik håndterer du **lønn og timer**:\n\n• Timer havner i **Lønn → Ventende timer**.\n• Ledere gjennomgår, justerer og godkjenner.\n• Systemet beregner lønn etter timelønn og eksporterer PDF.",
      "ch-22": "Slik flyter **oppgavestatuser** i TidyFlow:\n\n• *Planlagt*: opprettet uten tildeling.\n• *Tildelt*: rengjører valgt, venter på start.\n• *Pågår*: aktiv på stedet, timer kjører.\n• *Sendt inn*: ferdig, venter på kvalitetskontroll.\n• *Godkjent*: verifisert av leder, klar til fakturering.\n• *Fullført*: fakturert og betalt."
    },
    sv: {
      "ch-5": "Anslut TidyFlow till **Google Sheets** i bara 4 steg:\n\n1. Öppna **Sidopanel** → **Fastigheter** → **Google Sheets-synk**.\n2. Klistra in kalkylbladets URL.\n3. Dela redigeringsåtkomst med: **sync@project.iam.gserviceaccount.com**\n4. Klicka på **«Synkronisera nu»**.\n\nÄndringar synkas i realtid åt båda hållen.",
      "ch-17": "**SOS-knappen** är ett kritiskt säkerhetsverktyg för fältpersonal:\n\n• Den syns som en röd knapp på den aktiva uppgiftsskärmen.\n• Ett tryck skickar GPS-position direkt till servrarna.\n• Högprioriterat larm varnar alla chefer.",
      "ch-20": "Ja! TidyFlow är byggt för **offlineläge**:\n\n• Städare kan stämpla in, bocka av listor, rapportera problem och ta foton utan nät.\n• Appen köar ändringar lokalt.\n• När anslutning återställs synkas allt automatiskt.",
      "ch-14": "Så hanterar du **lön och timmar**:\n\n• Timmar hamnar i **Lön → Väntande timmar**.\n• Chefer granskar, justerar och godkänner.\n• Systemet beräknar lön efter timtaxa och exporterar PDF.",
      "ch-22": "Så flyter **uppgiftsstatusar** i TidyFlow:\n\n• *Planerad*: skapad utan tilldelning.\n• *Tilldelad*: städare vald, väntar på start.\n• *Pågår*: aktiv på plats, timer igång.\n• *Inskickad*: klar, väntar på kvalitetskontroll.\n• *Godkänd*: verifierad av chef, redo att fakturera.\n• *Slutförd*: fakturerad och betald."
    },
    it: {
      "ch-5": "Collegare TidyFlow a **Google Sheets** richiede solo 4 passaggi:\n\n1. Apri **Barra laterale** → **Proprietà** → **Sincronizzazione Google Sheets**.\n2. Incolla l'URL del foglio di calcolo.\n3. Condividi l'accesso in modifica con: **sync@project.iam.gserviceaccount.com**\n4. Clicca **«Sincronizza ora»**.\n\nLe modifiche si propagano in tempo reale in entrambe le direzioni.",
      "ch-17": "Il pulsante **SOS** è uno strumento di sicurezza critico per gli operatori sul campo:\n\n• Resta visibile come pulsante rosso nella schermata attività attiva.\n• Una pressione invia subito la posizione GPS ai server operativi.\n• Un allarme ad alta priorità avvisa tutti i manager.",
      "ch-20": "Sì! TidyFlow è ottimizzato per la **modalità offline**:\n\n• Gli operatori possono timbrare, spuntare liste, segnalare problemi e scattare foto senza rete.\n• L'app accoda le modifiche in locale.\n• Al ripristino della connessione tutto si sincronizza automaticamente.",
      "ch-14": "Per gestire **paghe e ore**:\n\n• Le ore arrivano in **Paghe → Ore in sospeso**.\n• I manager verificano, correggono e approvano.\n• Il sistema calcola gli stipendi in base alle tariffe orarie ed esporta PDF.",
      "ch-22": "Ecco il ciclo di vita delle **attività TidyFlow**:\n\n• *Pianificata*: creata senza assegnazione.\n• *Assegnata*: operatore scelto, in attesa di inizio.\n• *In corso*: attivo sul sito, timer avviato.\n• *Inviata*: lavoro completato, in attesa di controllo qualità.\n• *Approvata*: verificata dal manager, pronta per la fatturazione.\n• *Completata*: fatturata e pagata."
    }
  };

  const matchedResponse = responseData[lang] && responseData[lang][chapterId];
  if (matchedResponse) return matchedResponse;

  // Generic localized template fallback
  const fallbackDict: Record<string, string> = {
    en: `I found a highly relevant guide in **Chapter {num}: {title}**:\n\n"{content}..."\n\nYou can click the link below to open this chapter directly and view the complete setup guide!`,
    pt: `Encontrei um guia altamente relevante no **Capítulo {num}: {title}**:\n\n"{content}..."\n\nVocê pode clicar no link abaixo para abrir este capítulo diretamente e ver o guia completo!`,
    es: `Encontré una guía muy relevante en el **Capítulo {num}: {title}**:\n\n"{content}..."\n\n¡Puedes hacer clic en el botón de abajo para abrir este capítulo directamente y ver el manual completo!`,
    ar: `لقد عثرت على دليل ذي صلة وثيقة في **الفصل {num}: {title}**:\n\n"{content}..."\n\nيمكنك النقر فوق الزر أدناه لفتح هذا الفصل مباشرة وتصفح الدليل التشغيلي بالكامل!`,
    cn: `我在 **第 {num} 章: {title}** 中为您找到了高度相关的操作指南：\n\n“{content}...”\n\n您可以点击下方按钮直接打开该章节，查看最详尽的步骤说明！`,
    fr: `J'ai trouvé un guide très pertinent dans le **Chapitre {num}: {title}** :\n\n"{content}..."\n\nVous pouvez cliquer sur le bouton ci-dessous pour ouvrir directement ce chapitre !`,
    de: `Ich habe eine relevante Anleitung in **Kapitel {num}: {title}** gefunden:\n\n"{content}..."\n\nKlicke auf den Button unten, um dieses Kapitel direkt zu öffnen und die Anleitung zu lesen!`,
    pl: `Znalazłem pomocny poradnik w **Rozdziale {num}: {title}**:\n\n"{content}..."\n\nMożesz kliknąć poniższy przycisk, aby otworzyć ten rozdział bezpośrednio i przeczytać pełną instrukcję!`,
    no: `Jeg fant en relevant veiledning i **Kapittel {num}: {title}**:\n\n"{content}..."\n\nDu kan klikke på knappen nedenfor for å åpne dette kapittelet direkte og lese hele veiledningen!`,
    sv: `Jag hittade en relevant guide i **Kapitel {num}: {title}**:\n\n"{content}..."\n\nDu kan klicka på knappen nedan för att öppna detta kapitel direkt och läsa hela handboken!`,
    it: `Ho trovato una guida molto pertinente nel **Capitolo {num}: {title}**:\n\n"{content}..."\n\nPuoi fare clic sul pulsante in basso per aprire direttamente questo capitolo e leggere la guida!`
  };

  const phrase = fallbackDict[lang] || fallbackDict["en"];
  return phrase
    .replace("{num}", String(chapterId.replace("ch-", "")))
    .replace("{title}", bestTitle)
    .replace("{content}", bestContent.substring(0, 240));
};
