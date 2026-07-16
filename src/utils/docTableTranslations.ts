type TableRow = {
  colName: string;
  colLocation: string;
  colRequired: string;
  colNotes: string;
};

type TableDict = {
  propertyId: TableRow;
  address: TableRow;
  assignedEmail: TableRow;
};

const en: TableDict = {
  propertyId: { colName: "Property ID", colLocation: "Both Tabs", colRequired: "Yes", colNotes: "Matches task entries to addresses" },
  address: { colName: "Address", colLocation: "Properties", colRequired: "Yes", colNotes: "Full clean address line" },
  assignedEmail: { colName: "Assigned User Email", colLocation: "Tasks", colRequired: "No", colNotes: "Comma-separated staff logins" }
};

const pt: TableDict = {
  propertyId: { colName: "ID da Propriedade", colLocation: "Ambas as Abas", colRequired: "Sim", colNotes: "Associa tarefas aos endereços das propriedades" },
  address: { colName: "Endereço", colLocation: "Propriedades", colRequired: "Sim", colNotes: "Linha de endereço completo" },
  assignedEmail: { colName: "E-mail do Usuário Atribuído", colLocation: "Tarefas", colRequired: "Não", colNotes: "E-mails de funcionários separados por vírgula" }
};

const es: TableDict = {
  propertyId: { colName: "ID de Propiedad", colLocation: "Ambas Pestañas", colRequired: "Sí", colNotes: "Vincula tareas con las direcciones de propiedades" },
  address: { colName: "Dirección", colLocation: "Propiedades", colRequired: "Sí", colNotes: "Línea de dirección completa" },
  assignedEmail: { colName: "Correo de Usuario Asignado", colLocation: "Tareas", colRequired: "No", colNotes: "Correos de empleados separados por comas" }
};

const ar: TableDict = {
  propertyId: { colName: "معرّف العقار", colLocation: "كلا التبويبين", colRequired: "نعم", colNotes: "يربط المهام بعناوين العقارات" },
  address: { colName: "العنوان", colLocation: "Properties", colRequired: "نعم", colNotes: "سطر العنوان الكامل للتنظيف" },
  assignedEmail: { colName: "بريد المستخدم المعيّن", colLocation: "Tasks", colRequired: "لا", colNotes: "حسابات الموظفين مفصولة بفواصل" }
};

const cn: TableDict = {
  propertyId: { colName: "物业 ID", colLocation: "工作表两端", colRequired: "是", colNotes: "将清洁工单映射至地址" },
  address: { colName: "服务地址", colLocation: "物业详情", colRequired: "是", colNotes: "完整的物业服务详细地址" },
  assignedEmail: { colName: "分配的清洁工邮箱", colLocation: "清洁工单", colRequired: "否", colNotes: "英文逗号分隔的员工账号邮箱" }
};

const fr: TableDict = {
  propertyId: { colName: "ID de propriété", colLocation: "Les deux onglets", colRequired: "Oui", colNotes: "Associe les tâches aux adresses" },
  address: { colName: "Adresse", colLocation: "Properties", colRequired: "Oui", colNotes: "Ligne d'adresse complète" },
  assignedEmail: { colName: "E-mail de l'agent assigné", colLocation: "Tasks", colRequired: "Non", colNotes: "E-mails du personnel séparés par des virgules" }
};

const de: TableDict = {
  propertyId: { colName: "Objekt-ID", colLocation: "Beide Register", colRequired: "Ja", colNotes: "Verknüpft Aufgaben mit Adressen" },
  address: { colName: "Adresse", colLocation: "Properties", colRequired: "Ja", colNotes: "Vollständige Adresszeile" },
  assignedEmail: { colName: "Zugewiesene Benutzer-E-Mail", colLocation: "Tasks", colRequired: "Nein", colNotes: "Mitarbeiter-E-Mails durch Kommas getrennt" }
};

const pl: TableDict = {
  propertyId: { colName: "ID obiektu", colLocation: "Oba arkusze", colRequired: "Tak", colNotes: "Łączy zadania z adresami" },
  address: { colName: "Adres", colLocation: "Properties", colRequired: "Tak", colNotes: "Pełny wiersz adresu" },
  assignedEmail: { colName: "E-mail przypisanego użytkownika", colLocation: "Tasks", colRequired: "Nie", colNotes: "Adresy e-mail pracowników oddzielone przecinkami" }
};

const no: TableDict = {
  propertyId: { colName: "Eiendoms-ID", colLocation: "Begge faner", colRequired: "Ja", colNotes: "Kobler oppgaver til adresser" },
  address: { colName: "Adresse", colLocation: "Properties", colRequired: "Ja", colNotes: "Full adresselinje" },
  assignedEmail: { colName: "Tildelt bruker-e-post", colLocation: "Tasks", colRequired: "Nei", colNotes: "Ansattes e-poster separert med komma" }
};

const sv: TableDict = {
  propertyId: { colName: "Fastighets-ID", colLocation: "Båda flikarna", colRequired: "Ja", colNotes: "Kopplar uppgifter till adresser" },
  address: { colName: "Adress", colLocation: "Properties", colRequired: "Ja", colNotes: "Fullständig adressrad" },
  assignedEmail: { colName: "Tilldelad användar-e-post", colLocation: "Tasks", colRequired: "Nej", colNotes: "Personalens e-post separerade med kommatecken" }
};

const it: TableDict = {
  propertyId: { colName: "ID proprietà", colLocation: "Entrambe le schede", colRequired: "Sì", colNotes: "Collega le attività agli indirizzi" },
  address: { colName: "Indirizzo", colLocation: "Properties", colRequired: "Sì", colNotes: "Riga indirizzo completa" },
  assignedEmail: { colName: "E-mail utente assegnato", colLocation: "Tasks", colRequired: "No", colNotes: "E-mail del personale separate da virgole" }
};

export const docTableTranslations: Record<string, TableDict> = { en, pt, es, ar, cn, fr, de, pl, no, sv, it };

export function getDocTableRow(row: keyof TableDict, lang: string): TableRow {
  const dict = docTableTranslations[lang] || docTableTranslations.en;
  return dict[row];
}

export function getDocSuggestQuestion(
  key: "sheets" | "offline" | "sos" | "payroll" | "about" | "pricing" | "demo" | "whatsNew",
  lang: string
): string {
  const questions: Record<string, Record<string, string>> = {
    en: {
      sheets: "How do I connect Google Sheets?",
      offline: "Does the app work offline?",
      sos: "What does the red SOS button do?",
      payroll: "How do I approve hours for payroll?",
      about: "What is TidyFlow and who founded it?",
      pricing: "What are TidyFlow pricing plans?",
      demo: "How do I get a free demo or trial?",
      whatsNew: "What is new in TidyFlow? Tell me about the latest features.",
    },
    pt: {
      sheets: "Como posso ligar o Google Sheets?",
      offline: "O aplicativo funciona offline?",
      sos: "O que faz o botão de pânico SOS?",
      payroll: "Como posso aprovar as horas da folha de pagamento?",
      about: "O que é o TidyFlow e quem o fundou?",
      pricing: "Quais são os planos e preços do TidyFlow?",
      demo: "Como obter uma demonstração ou avaliação gratuita?",
      whatsNew: "Quais são as novidades do TidyFlow? Conte-me sobre os recursos novos.",
    },
    es: {
      sheets: "¿Cómo conectar Google Sheets?",
      offline: "¿La aplicación funciona sin conexión?",
      sos: "¿Qué hace el botón de pánico SOS?",
      payroll: "¿Cómo aprobar las horas de la nómina?",
      about: "¿Qué es TidyFlow y quién lo fundó?",
      pricing: "¿Cuáles son los planes y precios de TidyFlow?",
      demo: "¿Cómo obtener una demo o prueba gratuita?",
      whatsNew: "¿Qué hay de nuevo en TidyFlow? Cuéntame las últimas funciones.",
    },
    ar: {
      sheets: "كيف أربط Google Sheets؟",
      offline: "هل يعمل التطبيق دون اتصال؟",
      sos: "ماذا يفعل زر SOS الأحمر؟",
      payroll: "كيف أعتمد ساعات العمل للرواتب؟",
      about: "ما هو تيدي فلو ومن أسسه؟",
      pricing: "ما هي خطط وأسعار تيدي فلو؟",
      demo: "كيف أحصل على عرض تجريبي أو تقييم مجاني؟",
      whatsNew: "ما الجديد في TidyFlow؟ أخبرني عن أحدث الميزات.",
    },
    cn: {
      sheets: "如何连接谷歌电子表格同步？",
      offline: "离线断网时应用能正常工作吗？",
      sos: "红色 SOS 紧急求救按钮有什么作用？",
      payroll: "如何审核和批准考勤工时工资？",
      about: "TidyFlow 是什么？由谁创立？",
      pricing: "TidyFlow 有哪些定价方案？",
      demo: "如何申请免费演示或试用？",
      whatsNew: "TidyFlow 有哪些新功能？请介绍最新特性。",
    },
    fr: {
      sheets: "Comment connecter Google Sheets ?",
      offline: "L'application fonctionne-t-elle hors ligne ?",
      sos: "À quoi sert le bouton SOS rouge ?",
      payroll: "Comment approuver les heures pour la paie ?",
      about: "Qu'est-ce que TidyFlow et qui l'a fondé ?",
      pricing: "Quels sont les forfaits et tarifs TidyFlow ?",
      demo: "Comment obtenir une démo ou un essai gratuit ?",
      whatsNew: "Quelles sont les nouveautés TidyFlow ? Parle-moi des dernières fonctionnalités.",
    },
    de: {
      sheets: "Wie verbinde ich Google Sheets?",
      offline: "Funktioniert die App offline?",
      sos: "Was macht der rote SOS-Knopf?",
      payroll: "Wie genehmige ich Stunden für die Lohnabrechnung?",
      about: "Was ist TidyFlow und wer hat es gegründet?",
      pricing: "Welche TidyFlow-Preispläne gibt es?",
      demo: "Wie bekomme ich eine kostenlose Demo oder Testversion?",
      whatsNew: "Was ist neu bei TidyFlow? Erzähl mir von den neuesten Funktionen.",
    },
    pl: {
      sheets: "Jak połączyć Google Sheets?",
      offline: "Czy aplikacja działa offline?",
      sos: "Do czego służy czerwony przycisk SOS?",
      payroll: "Jak zatwierdzić godziny do listy płac?",
      about: "Czym jest TidyFlow i kto go założył?",
      pricing: "Jakie są plany cenowe TidyFlow?",
      demo: "Jak uzyskać bezpłatną demonstrację lub okres próbny?",
      whatsNew: "Co nowego w TidyFlow? Opowiedz o najnowszych funkcjach.",
    },
    no: {
      sheets: "Hvordan kobler jeg til Google Sheets?",
      offline: "Fungerer appen offline?",
      sos: "Hva gjør den røde SOS-knappen?",
      payroll: "Hvordan godkjenner jeg timer til lønn?",
      about: "Hva er TidyFlow og hvem grunnla det?",
      pricing: "Hva koster TidyFlow og hvilke planer finnes?",
      demo: "Hvordan får jeg en gratis demo eller prøveperiode?",
      whatsNew: "Hva er nytt i TidyFlow? Fortell meg om de nyeste funksjonene.",
    },
    sv: {
      sheets: "Hur ansluter jag Google Sheets?",
      offline: "Fungerar appen offline?",
      sos: "Vad gör den röda SOS-knappen?",
      payroll: "Hur godkänner jag timmar för lön?",
      about: "Vad är TidyFlow och vem grundade det?",
      pricing: "Vilka prisplaner har TidyFlow?",
      demo: "Hur får jag en gratis demo eller provperiod?",
      whatsNew: "Vad är nytt i TidyFlow? Berätta om de senaste funktionerna.",
    },
    it: {
      sheets: "Come collego Google Sheets?",
      offline: "L'app funziona offline?",
      sos: "A cosa serve il pulsante SOS rosso?",
      payroll: "Come approvo le ore per le paghe?",
      about: "Cos'è TidyFlow e chi l'ha fondato?",
      pricing: "Quali sono i piani e i prezzi di TidyFlow?",
      demo: "Come ottengo una demo o prova gratuita?",
      whatsNew: "Cosa c'è di nuovo in TidyFlow? Dimmi le ultime funzionalità.",
    },
  };
  return (questions[lang] || questions.en)[key];
}

export function getTranslatingChapterMessage(lang: string): string {
  const messages: Record<string, string> = {
    en: "AI translating chapter...",
    pt: "IA traduzindo o capítulo...",
    es: "IA traduciendo el capítulo...",
    ar: "جاري ترجمة الفصل بالذكاء الاصطناعي...",
    cn: "AI 正在翻译章节内容...",
    fr: "Traduction du chapitre par IA...",
    de: "KI übersetzt das Kapitel...",
    pl: "AI tłumaczy rozdział...",
    no: "AI oversetter kapittelet...",
    sv: "AI översätter kapitlet...",
    it: "IA traduzione del capitolo in corso..."
  };
  return messages[lang] || messages.en;
}

export function getMasterSheetDocsLabel(lang: string): string {
  const labels: Record<string, string> = {
    en: "Master Sheet Docs",
    pt: "Documentação da Planilha Mestra",
    es: "Documentación de Hoja Maestra",
    ar: "وثائق الجدول الرئيسي",
    cn: "主表格文档",
    fr: "Documentation feuille maîtresse",
    de: "Master-Tabellen-Dokumentation",
    pl: "Dokumentacja arkusza głównego",
    no: "Hovedark-dokumentasjon",
    sv: "Huvudark-dokumentation",
    it: "Documentazione foglio master"
  };
  return labels[lang] || labels.en;
}
