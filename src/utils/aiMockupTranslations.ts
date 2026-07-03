export interface AiCandidate {
  id: number;
  name: string;
  rating: string;
  distance: string;
  history: string;
  score: string;
  status: string;
  reason: string;
  onLeave: boolean;
}

interface AiDict {
  assigneeSearch: string;
  cleanersCount: string;
  engineBadge: string;
  title: string;
  desc: string;
  btnRun: string;
  btnRunning: string;
  recTitle: string;
  recDesc: string;
  statusRec: string;
  candidates: AiCandidate[];
}

const enCandidates: AiCandidate[] = [
  { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 miles away", history: "Cleaned 8 times", score: "98% Fit Score", status: "Available", reason: "Local neighborhood, flawless rating", onLeave: false },
  { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 miles away", history: "Cleaned 2 times", score: "85% Fit Score", status: "Available", reason: "Available all morning", onLeave: false },
  { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 miles away", history: "New property", score: "60% Fit Score", status: "On Approved Leave", reason: "Approved Leave block", onLeave: true },
];

const en: AiDict = {
  assigneeSearch: "Assignee Search",
  cleanersCount: "Cleaners",
  engineBadge: "SMART AUTOMATION ENGINE",
  title: "TidyFlow AI Recommender",
  desc: "Assign the best cleaner to each job in seconds. Our smart scheduling analyzer checks distance, past history with that client, preferences, and cleaner calendars automatically.",
  btnRun: "Find Best-Fit Cleaner (AI)",
  btnRunning: "Analyzing parameters...",
  recTitle: "Recommended Assignee: Samira Ahmed",
  recDesc: "Samira is nearby (0.8 miles), holds a perfect score, and has successfully cleaned this specific property 8 times previously.",
  statusRec: "★ REC",
  candidates: enCandidates,
};

const pt: AiDict = {
  ...en,
  assigneeSearch: "Buscar Atribuído",
  cleanersCount: "Limpadores",
  engineBadge: "MOTOR DE AUTOMAÇÃO INTELIGENTE",
  title: "Recomendador de IA TidyFlow",
  desc: "Atribua o melhor limpador a cada trabalho em segundos. Nossa análise verifica distância, histórico, preferências e agendas automaticamente.",
  btnRun: "Encontrar Melhor Limpador (IA)",
  btnRunning: "Analisando parâmetros...",
  recTitle: "Atribuído Recomendado: Samira Ahmed",
  recDesc: "Samira está por perto (0.8 milhas), possui avaliação impecável e já limpou este imóvel 8 vezes.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 milhas de distância", history: "Limpou 8 vezes", score: "98% de Compatibilidade", status: "Disponível", reason: "Bairro local, classificação perfeita", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 milhas de distância", history: "Limpou 2 vezes", score: "85% de Compatibilidade", status: "Disponível", reason: "Disponível toda a manhã", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 milhas de distância", history: "Nova propriedade", score: "60% de Compatibilidade", status: "Licença Aprovada", reason: "Bloqueio de licença aprovada", onLeave: true },
  ],
};

const es: AiDict = {
  ...en,
  assigneeSearch: "Buscar Asignado",
  cleanersCount: "Limpiadores",
  engineBadge: "MOTOR DE AUTOMATIZACIÓN INTELIGENTE",
  title: "Recomendador de IA de TidyFlow",
  desc: "Asigne al mejor limpiador en segundos. El análisis comprueba distancia, historial, preferencias y calendarios automáticamente.",
  btnRun: "Buscar Mejor Limpiador (IA)",
  btnRunning: "Analizando parámetros...",
  recTitle: "Asignado Recomendado: Samira Ahmed",
  recDesc: "Samira está cerca (0.8 millas), tiene puntuación perfecta y ya limpió esta propiedad 8 veces.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "a 0.8 millas de distancia", history: "Limpió 8 veces", score: "98% de Ajuste", status: "Disponible", reason: "Barrio local, calificación impecable", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "a 2.4 millas de distancia", history: "Limpió 2 veces", score: "85% de Ajuste", status: "Disponible", reason: "Disponible toda la mañana", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "a 5.1 millas de distancia", history: "Nueva propiedad", score: "60% de Ajuste", status: "Licencia Aprobada", reason: "Bloque de licencia aprobada", onLeave: true },
  ],
};

const ar: AiDict = {
  ...en,
  assigneeSearch: "البحث عن المكلف",
  cleanersCount: "عمال نظافة",
  engineBadge: "محرك الأتمتة الذكي",
  title: "موصي الذكاء الاصطناعي TidyFlow",
  desc: "عيّن أفضل عامل نظافة لكل وظيفة في ثوانٍ. يتحقق المحلل من المسافة والسجل والتقويم تلقائيًا.",
  btnRun: "العثور على أفضل عامل نظافة (IA)",
  btnRunning: "جاري تحليل المعلمات...",
  recTitle: "المكلف الموصى به: سميرة أحمد",
  recDesc: "سميرة قريبة (0.8 ميل)، وتحمل درجة مثالية، ونظفت هذا العقار 8 مرات سابقًا.",
  candidates: [
    { id: 1, name: "سميرة أحمد", rating: "4.9★", distance: "على بعد 0.8 ميل", history: "نظفت 8 مرات", score: "98% درجة الملاءمة", status: "متاح", reason: "حي محلي، تقييم لا تشوبه شائبة", onLeave: false },
    { id: 2, name: "ماركوس كوالسكي", rating: "4.7★", distance: "على بعد 2.4 ميل", history: "نظف مرتين", score: "85% درجة الملاءمة", status: "متاح", reason: "متاح طوال الصباح", onLeave: false },
    { id: 3, name: "كلوي دوبونت", rating: "4.8★", distance: "على بعد 5.1 ميل", history: "عقار جديد", score: "60% درجة الملاءمة", status: "في إجازة معتمدة", reason: "إجازة معتمدة حاليًا", onLeave: true },
  ],
};

const cn: AiDict = {
  ...en,
  assigneeSearch: "查找外勤人员候选",
  cleanersCount: "位外勤保洁员",
  engineBadge: "AI 智能自动派单引擎",
  title: "TidyFlow AI 智能推荐派单",
  desc: "数秒内为每项作业指派最佳外勤人员。智能分析器自动核对路程、客户历史、偏好和排班。",
  btnRun: "立即一键智能指派候选人 (AI)",
  btnRunning: "正在智能建模分析参数...",
  recTitle: "AI 推荐第一候选人：Samira Ahmed",
  recDesc: "Samira 距离极近 (0.8 英里)，历史评分完美，且曾成功保洁此物业 8 次。",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 英里以内", history: "已保洁 8 次", score: "98% 智能适配度", status: "空闲可用", reason: "同社区就近分派，历史评分近乎完美", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 英里", history: "已保洁 2 次", score: "85% 智能适配度", status: "空闲可用", reason: "上午时间段全部空闲", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 英里", history: "全新物业地址", score: "60% 智能适配度", status: "请假中 (已审批)", reason: "审批假期占位保护", onLeave: true },
  ],
};

const fr: AiDict = {
  ...en,
  assigneeSearch: "Recherche d'assigné",
  cleanersCount: "Agents",
  engineBadge: "MOTEUR D'AUTOMATISATION IA",
  title: "Recommandeur IA TidyFlow",
  desc: "Assignez le meilleur agent en quelques secondes. L'analyseur vérifie distance, historique, préférences et calendriers.",
  btnRun: "Trouver le meilleur agent (IA)",
  btnRunning: "Analyse des paramètres...",
  recTitle: "Assigné recommandé : Samira Ahmed",
  recDesc: "Samira est proche (0.8 mile), a une note parfaite et a déjà nettoyé ce site 8 fois.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "à 0.8 mile", history: "8 nettoyages", score: "98% compatibilité", status: "Disponible", reason: "Quartier local, note parfaite", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "à 2.4 miles", history: "2 nettoyages", score: "85% compatibilité", status: "Disponible", reason: "Disponible toute la matinée", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "à 5.1 miles", history: "Nouveau site", score: "60% compatibilité", status: "En congé approuvé", reason: "Congé approuvé", onLeave: true },
  ],
};

const de: AiDict = {
  ...en,
  assigneeSearch: "Mitarbeiter-Suche",
  cleanersCount: "Reinigungskräfte",
  engineBadge: "SMART-AUTOMATISIERUNGS-ENGINE",
  title: "TidyFlow KI-Empfehlung",
  desc: "Weisen Sie in Sekunden die beste Kraft zu. Der Analyzer prüft Distanz, Historie, Präferenzen und Kalender.",
  btnRun: "Beste Kraft finden (KI)",
  btnRunning: "Parameter werden analysiert...",
  recTitle: "Empfohlene Kraft: Samira Ahmed",
  recDesc: "Samira ist nah (0.8 Meilen), hat perfekte Bewertung und hat dieses Objekt 8 Mal gereinigt.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 Meilen entfernt", history: "8 Mal gereinigt", score: "98% Eignung", status: "Verfügbar", reason: "Lokale Nähe, perfekte Bewertung", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 Meilen entfernt", history: "2 Mal gereinigt", score: "85% Eignung", status: "Verfügbar", reason: "Vormittags verfügbar", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 Meilen entfernt", history: "Neues Objekt", score: "60% Eignung", status: "Genehmigter Urlaub", reason: "Genehmigter Urlaub", onLeave: true },
  ],
};

const pl: AiDict = {
  ...en,
  assigneeSearch: "Wyszukiwanie pracownika",
  cleanersCount: "Pracownicy",
  engineBadge: "SILNIK AUTOMATYZACJI AI",
  title: "Rekomendacje AI TidyFlow",
  desc: "Przypisz najlepszego pracownika w sekundach. Analizator sprawdza odległość, historię i kalendarze.",
  btnRun: "Znajdź najlepszego pracownika (AI)",
  btnRunning: "Analizowanie parametrów...",
  recTitle: "Rekomendowany: Samira Ahmed",
  recDesc: "Samira jest blisko (0.8 mili), ma idealną ocenę i czyściła ten obiekt 8 razy.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 mili stąd", history: "8 sprzątań", score: "98% dopasowania", status: "Dostępny", reason: "Lokalna okolica, idealna ocena", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 mili stąd", history: "2 sprzątania", score: "85% dopasowania", status: "Dostępny", reason: "Dostępny całe rano", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 mili stąd", history: "Nowy obiekt", score: "60% dopasowania", status: "Zatwierdzony urlop", reason: "Zatwierdzony urlop", onLeave: true },
  ],
};

const no: AiDict = {
  ...en,
  assigneeSearch: "Søk etter rengjører",
  cleanersCount: "Rengjørere",
  engineBadge: "SMART AUTOMATISERINGS-MOTOR",
  title: "TidyFlow AI-anbefaling",
  desc: "Tildel beste rengjører på sekunder. Analysatoren sjekker avstand, historikk og kalendere.",
  btnRun: "Finn beste rengjører (AI)",
  btnRunning: "Analyserer parametere...",
  recTitle: "Anbefalt: Samira Ahmed",
  recDesc: "Samira er nær (0.8 mile), har perfekt vurdering og har rengjort dette objektet 8 ganger.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 mile unna", history: "8 rengjøringer", score: "98% treff", status: "Tilgjengelig", reason: "Lokalt nabolag, perfekt vurdering", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 mile unna", history: "2 rengjøringer", score: "85% treff", status: "Tilgjengelig", reason: "Tilgjengelig hele morgenen", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 mile unna", history: "Nytt objekt", score: "60% treff", status: "Godkjent permisjon", reason: "Godkjent permisjon", onLeave: true },
  ],
};

const sv: AiDict = {
  ...en,
  assigneeSearch: "Sök tilldelad",
  cleanersCount: "Städare",
  engineBadge: "SMART AUTOMATIONS-MOTOR",
  title: "TidyFlow AI-rekommendation",
  desc: "Tilldela bästa städare på sekunder. Analysatorn kontrollerar avstånd, historik och scheman.",
  btnRun: "Hitta bästa städare (AI)",
  btnRunning: "Analyserar parametrar...",
  recTitle: "Rekommenderad: Samira Ahmed",
  recDesc: "Samira är nära (0.8 mile), har perfekt betyg och har städat denna fastighet 8 gånger.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "0.8 mile bort", history: "8 städningar", score: "98% matchning", status: "Tillgänglig", reason: "Lokalt område, perfekt betyg", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "2.4 mile bort", history: "2 städningar", score: "85% matchning", status: "Tillgänglig", reason: "Tillgänglig hela morgonen", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "5.1 mile bort", history: "Ny fastighet", score: "60% matchning", status: "Godkänd ledighet", reason: "Godkänd ledighet", onLeave: true },
  ],
};

const it: AiDict = {
  ...en,
  assigneeSearch: "Ricerca assegnatario",
  cleanersCount: "Operatori",
  engineBadge: "MOTORE DI AUTOMAZIONE IA",
  title: "Raccomandatore IA TidyFlow",
  desc: "Assegna il miglior operatore in pochi secondi. L'analizzatore verifica distanza, storico e calendari.",
  btnRun: "Trova miglior operatore (IA)",
  btnRunning: "Analisi parametri in corso...",
  recTitle: "Assegnato consigliato: Samira Ahmed",
  recDesc: "Samira è vicina (0.8 miglia), ha valutazione perfetta e ha pulito questa proprietà 8 volte.",
  candidates: [
    { id: 1, name: "Samira Ahmed", rating: "4.9★", distance: "a 0.8 miglia", history: "8 pulizie", score: "98% compatibilità", status: "Disponibile", reason: "Quartiere locale, valutazione perfetta", onLeave: false },
    { id: 2, name: "Marcus Kowalski", rating: "4.7★", distance: "a 2.4 miglia", history: "2 pulizie", score: "85% compatibilità", status: "Disponibile", reason: "Disponibile tutta la mattina", onLeave: false },
    { id: 3, name: "Chloe Dupont", rating: "4.8★", distance: "a 5.1 miglia", history: "Nuova proprietà", score: "60% compatibilità", status: "In ferie approvate", reason: "Ferie approvate", onLeave: true },
  ],
};

export const aiMockupTranslations: Record<string, AiDict> = { en, pt, es, ar, cn, fr, de, pl, no, sv, it };

export function getAiTranslation(lang: string): AiDict {
  return aiMockupTranslations[lang] || aiMockupTranslations.en;
}
