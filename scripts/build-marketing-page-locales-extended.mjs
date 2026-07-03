import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "src/utils/marketingPageLocales.ts");
const outPath = path.join(root, "src/utils/marketingPageLocalesExtended.ts");

const src = fs.readFileSync(srcPath, "utf8");
const frMatch = src.match(/const fr: Record<string, string> = \{([\s\S]*?)\n\};/);
const frEntries = [...frMatch[1].matchAll(/^\s+(\w+):\s*"((?:\\.|[^"\\])*)",?\s*$/gm)].map((m) => [
  m[1],
  m[2].replace(/\\"/g, '"').replace(/\\n/g, "\n"),
]);

const extra = {
  billingBadge: {
    pt: "CONFORMIDADE FINANCEIRA",
    es: "CUMPLIMIENTO FINANCIERO",
    ar: "الامتثال المالي",
    cn: "财务合规",
  },
  billingTitle: {
    pt: "Folha de Pagamento Automatizada, Registros de Horas Transparentes",
    es: "Nómina Automatizada, Partes de Horas Transparentes",
    ar: "رواتب آلية وجداول زمنية شفافة",
    cn: "自动化薪资，透明工时表",
  },
  billingDesc: {
    pt: "Consolide automaticamente as horas de trabalho de contratados e profissionais de limpeza em campo. Evite horas de transcrição de registros em papel: aprove carimbos validados em segundo plano, calcule pagamentos salariais brutos dinamicamente e exporte registros de faturas personalizados para clientes.",
    es: "Consolida automáticamente las horas de trabajo de contratistas y limpiadores de campo. Evita horas de transcripción de registros en papel: aprueba marcas de tiempo validadas en segundo plano, calcula pagos salariales brutos dinámicamente y exporta registros de facturas personalizados para clientes.",
    ar: "اجمع ساعات عمل المتعاقدين وعمال النظافة الميدانيين تلقائياً. تجنب ساعات النسخ من السجلات الورقية: اعتمد الطوابع الزمنية المُحققة في الخلفية، واحسب صافي الرواتب ديناميكياً، وصدّر سجلات فواتير العملاء المخصصة.",
    cn: "自动汇总承包商和现场保洁员工时。告别手工纸质记录转录：审批后台验证的时间戳，动态计算工资总额，并导出品牌化客户发票记录。",
  },
  billingCheck1: {
    pt: "Configurações salariais personalizadas mapeadas por contrato de operador.",
    es: "Configuraciones salariales personalizadas asignadas por contrato de operador.",
    ar: "إعدادات أجور مخصصة مرتبطة بعقد كل عامل.",
    cn: "按操作员合同映射的自定义工资配置。",
  },
  billingCheck2: {
    pt: "Exportações com um clique para portais contábeis padrão.",
    es: "Exportaciones con un clic a portales contables estándar.",
    ar: "تصدير بنقرة واحدة إلى بوابات المحاسبة القياسية.",
    cn: "一键导出至标准会计门户。",
  },
  homeSosMockBadge: {
    pt: "Sistema de segurança em segundo plano",
    es: "Sistema de seguridad en segundo plano",
    ar: "نظام السلامة في الخلفية",
    cn: "后台安全系统",
  },
  homeSosMockTitle: {
    pt: "Terminal SOS para Trabalhadores Isolados",
    es: "Terminal SOS para Trabajadores Aislados",
    ar: "محطة طوارئ SOS للعاملين المنفردين",
    cn: "孤工 SOS 终端",
  },
  homeSosMockActive: {
    pt: "Interruptor SOS de Emergência Ativo",
    es: "Interruptor SOS de Emergencia Activo",
    ar: "مفتاح طوارئ SOS نشط",
    cn: "紧急 SOS 开关已激活",
  },
  homeSosMockDesc: {
    pt: "Manter este botão pressionado transmite registros GPS ao vivo para operadores ativos e aciona alarmes visuais de aviso.",
    es: "Mantener este botón transmite registros GPS en vivo a operadores activos y activa alarmas visuales de advertencia.",
    ar: "الضغط المستمر على هذا الزر يرسل سجلات GPS المباشرة للمشغلين النشطين ويشغّل إنذارات بصرية.",
    cn: "按住此按钮将向活跃操作员传输实时 GPS 日志并触发视觉警报。",
  },
  homeSosMockBroadcast: {
    pt: "TRANSMISSÃO DO SISTEMA DE ALARME",
    es: "TRANSMISIÓN DEL SISTEMA DE ALARMA",
    ar: "بث نظام الإنذار",
    cn: "警报系统广播",
  },
  homeSosMockActive2: {
    pt: "Ativo●",
    es: "Activo●",
    ar: "نشط●",
    cn: "活跃●",
  },
  homeSosMockQueued: {
    pt: "Carga: Registros de alerta do despachante em fila",
    es: "Carga: Registros de alerta del despachador en cola",
    ar: "الحمولة: سجلات تنبيه المنسق في قائمة الانتظار",
    cn: "负载：调度员警报日志已排队",
  },
  homeSosMockTarget: {
    pt: "Destino: Centro de segurança das instalações",
    es: "Destino: Centro de seguridad de instalaciones",
    ar: "الهدف: مركز أمن المنشآت",
    cn: "目标：设施安全中心",
  },
  featuresSchedTitle: {
    pt: "Agendamento e Despacho de Rotas",
    es: "Programación y Despacho de Rotas",
    ar: "الجدولة وتوزيع المناوبات",
    cn: "排班与轮班调度",
  },
  featuresSchedDesc: {
    pt: "Capacite seus gerentes a gerenciar escalas com facilidade. Crie perfis de visitas recorrentes para propriedades comerciais, visualize escalas em calendários dinâmicos e coordene rotas para reduzir o tempo de deslocamento da equipe.",
    es: "Empodera a tus gerentes para gestionar escalas fácilmente. Crea perfiles de visitas recurrentes para propiedades comerciales, visualiza escalas en calendarios dinámicos y coordina rutas para reducir los tiempos de desplazamiento del personal.",
    ar: "مكّن مديريك من إدارة الجداول بسهولة. أنشئ ملفات زيارات متكررة للعقارات التجارية، واعرض الجداول في تقاويم ديناميكية، ونسّق مسارات التنقل لتقليل أوقات السفر.",
    cn: "让经理轻松管理排班。为商业物业创建定期访问档案，在动态日历中查看排班，并协调路线以减少员工通勤时间。",
  },
  featuresSchedCard1Title: {
    pt: "Construtor de Grade de Rotas",
    es: "Constructor de Cuadrícula de Rotas",
    ar: "منشئ شبكة المناوبات",
    cn: "轮班网格构建器",
  },
  featuresSchedCard1Desc: {
    pt: "Arraste e solte funcionários em vagas de propriedades ativas com base em qualificações personalizadas.",
    es: "Arrastra y suelta personal en espacios de propiedades activas según calificaciones personalizadas.",
    ar: "اسحب وأفلت الموظفين في فتحات العقارات النشطة وفق المؤهلات المخصصة.",
    cn: "根据自定义资质将员工拖放到活跃物业岗位。",
  },
  featuresSchedCard2Title: {
    pt: "Google Sheet Bidirecional",
    es: "Google Sheet Bidireccional",
    ar: "جداول Google ثنائية الاتجاه",
    cn: "双向 Google 表格",
  },
  featuresSchedCard2Desc: {
    pt: "Integração direta conecta registros de propriedades e tarefas a uma planilha na nuvem.",
    es: "La integración directa conecta registros de propiedades y tareas a una hoja de cálculo en la nube.",
    ar: "التكامل المباشر يربط سجلات العقارات والمهام بجدول بيانات سحابي.",
    cn: "直接集成将物业和任务登记连接到云端电子表格。",
  },
  featuresFieldTitle: {
    pt: "App do Profissional e Rastreador de Trabalho em Campo",
    es: "App del Limpiador y Rastreador de Trabajo de Campo",
    ar: "تطبيق عامل النظافة وتتبع العمل الميداني",
    cn: "保洁员应用与现场工作追踪",
  },
  featuresFieldDesc: {
    pt: "Ofereça à sua equipe remota uma ferramenta moderna e ultrarrápida para smartphone. Os profissionais acessam checklists, executam timers de rastreamento, capturam fotos e consultam detalhes — tudo operacional sem acesso à internet.",
    es: "Ofrece a tu fuerza laboral remota una herramienta moderna y ultrarrápida para smartphone. Los limpiadores acceden a listas de verificación, ejecutan temporizadores de seguimiento, capturan fotos y consultan detalles, todo operativo sin acceso a internet.",
    ar: "زوّد قوة العمل عن بُعد بأداة حديثة وسريعة على الهاتف. يصل عمال النظافة إلى قوائم المراجعة، ويشغّلون مؤقتات التتبع، ويلتقطون الصور، ويطّلعون على التفاصيل — كل ذلك دون اتصال بالإنترنت.",
    cn: "为远程团队提供现代、极速的智能手机工具。保洁员可访问清单、运行追踪计时器、拍摄照片并查看详情——全部支持离线操作。",
  },
  featuresFieldCard1Title: {
    pt: "Timer de Trabalho e Pausas",
    es: "Temporizador de Trabajo y Descansos",
    ar: "مؤقت العمل والاستراحات",
    cn: "工作计时与休息",
  },
  featuresFieldCard1Desc: {
    pt: "Registros de ponto, pausas e registros completos de envio com carimbos GPS em segundo plano.",
    es: "Registros de entrada, pausas y registros completos de envío con marcas de tiempo GPS en segundo plano.",
    ar: "سجلات الدخول والخروج، وتعليق الاستراحات، وسجلات الإرسال الكاملة مع طوابع GPS في الخلفية.",
    cn: "打卡记录、休息暂停及完整提交记录，含后台 GPS 时间戳。",
  },
  featuresFieldCard2Title: {
    pt: "Alerta de Emergência SOS",
    es: "Alerta de Emergencia SOS",
    ar: "تنبيه طوارئ SOS",
    cn: "SOS 紧急警报",
  },
  featuresFieldCard2Desc: {
    pt: "Alarme de emergência com um toque registra incidentes do despachante e notifica contatos dos gerentes.",
    es: "Alarma de emergencia con un toque registra incidentes del despachador y notifica a los contactos de los gerentes.",
    ar: "إنذار طوارئ بنقرة واحدة يسجّل حوادث المنسق ويُبلّغ جهات اتصال المديرين.",
    cn: "一键紧急警报记录调度事件并通知经理联系人。",
  },
  featuresQualityTitle: {
    pt: "Garantia de Qualidade e Prova para o Cliente",
    es: "Garantía de Calidad y Prueba para el Cliente",
    ar: "ضمان الجودة وإثبات العمل للعميل",
    cn: "质量保证与客户证明",
  },
  featuresQualityDesc: {
    pt: "Forneça provas claras de limpeza para responsáveis de instalações corporativas e clientes de propriedades. Gere PDFs profissionais com fotos antes/depois, checklists e revisões de QA.",
    es: "Proporciona pruebas claras de limpieza a responsables de instalaciones corporativas y clientes de propiedades. Genera PDFs profesionales con fotos antes/después, listas de verificación y revisiones de QA.",
    ar: "قدّم أدلة تنظيف واضحة لمسؤولي المنشآت والعملاء. أنشئ ملفات PDF احترافية تتضمن صور قبل/بعد وقوائم مراجعة وتقييمات ضمان الجودة.",
    cn: "为企业设施负责人和物业客户提供清晰的保洁证明。生成包含前后对比照片、清单和 QA 审核的专业 PDF。",
  },
  featuresQualityCard1Title: {
    pt: "Pontuação de Fotos por IA",
    es: "Puntuación de Fotos por IA",
    ar: "تقييم الصور بالذكاء الاصطناعي",
    cn: "AI 照片评分",
  },
  featuresQualityCard1Desc: {
    pt: "Analisa condições de saída automaticamente para pontuar classificações de limpeza instantaneamente.",
    es: "Analiza condiciones de salida automáticamente para puntuar clasificaciones de limpieza al instante.",
    ar: "يفحص حالة المغادرة تلقائياً لتقييم مستوى النظافة فوراً.",
    cn: "自动扫描离场状况，即时评分清洁度。",
  },
  featuresQualityCard2Title: {
    pt: "Portais Compartilháveis",
    es: "Portales Compartibles",
    ar: "بوابات قابلة للمشاركة",
    cn: "可分享门户",
  },
  featuresQualityCard2Desc: {
    pt: "Clientes visualizam checklists de trabalho e capturas de fotos por links públicos seguros.",
    es: "Los clientes ven listas de verificación de trabajo y capturas de fotos mediante enlaces públicos seguros.",
    ar: "يعرض العملاء قوائم المهام ولقطات الصور عبر روابط عامة آمنة.",
    cn: "客户通过安全公开链接查看工作清单和照片记录。",
  },
  featuresPayrollTitle: {
    pt: "RH de Escalas e Automação de Folha de Pagamento",
    es: "RRHH de Escalas y Automatización de Nómina",
    ar: "الموارد البشرية للجداول وأتمتة الرواتب",
    cn: "排班人事与薪资自动化",
  },
  featuresPayrollDesc: {
    pt: "Consolide a administração salarial da equipe. Revise registros de timers concluídos, aprove planilhas horárias, acompanhe férias dos profissionais e exporte documentos de holerite automaticamente.",
    es: "Consolida la administración salarial del personal. Revisa registros de temporizadores completados, aprueba hojas horarias, rastrea vacaciones de limpiadores y exporta documentos de nómina automáticamente.",
    ar: "وحّد إدارة أجور الموظفين. راجع سجلات المؤقتات المكتملة، واعتمد الجداول الساعية، وتتبع إجازات عمال النظافة، وصدّر مستندات الرواتب تلقائياً.",
    cn: "整合员工薪资管理。审核已完成的计时记录、批准工时表、跟踪保洁员假期，并自动导出工资单文件。",
  },
  featuresPayrollCard1Title: {
    pt: "Regras Salariais Personalizadas",
    es: "Reglas Salariales Personalizadas",
    ar: "قواعد أجور مخصصة",
    cn: "自定义工资规则",
  },
  featuresPayrollCard1Desc: {
    pt: "Defina salários fixos e por hora individualmente para cada membro da equipe.",
    es: "Define salarios fijos y por hora individualmente para cada miembro del personal.",
    ar: "حدّد الرواتب الثابتة والساعية لكل عامل على حدة.",
    cn: "为每位员工单独设定固定工资和时薪。",
  },
  featuresPayrollCard2Title: {
    pt: "Proteção de Bloqueio de Férias",
    es: "Protección de Bloqueo de Vacaciones",
    ar: "حماية حظر الإجازات",
    cn: "假期封锁保护",
  },
  featuresPayrollCard2Desc: {
    pt: "Bloqueios de férias aprovados impedem que despachantes atribuam profissionais a turnos.",
    es: "Los bloqueos de vacaciones aprobados impiden que los despachadores asignen limpiadores a turnos.",
    ar: "تمنع فترات الإجازة المعتمدة المنسقين من تعيين عمال النظافة في المناوبات.",
    cn: "已批准的假期封锁可防止调度员将保洁员分配到班次。",
  },
  featuresPayrollPlaceholder: {
    pt: "Ferramentas completas de folha de pagamento disponíveis no portal web.",
    es: "Herramientas completas de nómina disponibles en el portal web.",
    ar: "أدوات رواتب شاملة متاحة في بوابة الويب.",
    cn: "全面的薪资工具可在 Web 门户中使用。",
  },
  featuresFinanceTitle: {
    pt: "Faturamento e Finanças do Cliente",
    es: "Facturación y Finanzas del Cliente",
    ar: "فوترة العملاء والمالية",
    cn: "客户账单与财务",
  },
  featuresFinanceDesc: {
    pt: "Conecte as finanças do seu negócio de forma integrada. Acompanhe faturas de serviços operacionais, automatize estruturas de cobrança de clientes a partir de registros de trabalhos concluídos e exporte PDFs personalizados.",
    es: "Conecta las finanzas de tu negocio sin fricciones. Rastrea facturas de servicios operativos, automatiza estructuras de facturación de clientes desde registros de trabajos completados y exporta PDFs personalizados.",
    ar: "اربط شؤونك المالية بسلاسة. تتبع فواتير الخدمات التشغيلية، وأتمت هياكل فوترة العملاء من سجلات الأعمال المكتملة، وصدّر ملفات PDF مخصصة.",
    cn: "无缝连接业务财务。跟踪运营服务发票，根据已完成工作登记自动构建客户账单结构，并导出品牌化 PDF。",
  },
  featuresFinanceCard1Title: {
    pt: "Faturamento SaaS de Rotas da Empresa",
    es: "Facturación SaaS de Rotas de la Empresa",
    ar: "فوترة SaaS لجداول الشركة",
    cn: "SaaS 公司轮班计费",
  },
  featuresFinanceCard1Desc: {
    pt: "O faturamento Stripe gerencia a assinatura base da empresa e a contagem de unidades de propriedades.",
    es: "La facturación Stripe gestiona la suscripción base de la empresa y el recuento de unidades de propiedades.",
    ar: "تتولى فوترة Stripe اشتراك الشركة الأساسي وعدد وحدات العقارات.",
    cn: "Stripe 计费处理公司基础订阅和物业单元数量。",
  },
  featuresFinanceCard2Title: {
    pt: "PDFs Personalizados",
    es: "PDFs Personalizados",
    ar: "ملفات PDF مخصصة",
    cn: "品牌化 PDF",
  },
  featuresFinanceCard2Desc: {
    pt: "Entregue faturas e registros de horas personalizados com as cores exatas da sua marca.",
    es: "Entrega facturas y registros de horas personalizados con los colores exactos de tu marca.",
    ar: "قدّم فواتير وجداول زمنية مخصصة بألوان علامتك التجارية.",
    cn: "交付与品牌色彩完全匹配的个性化发票和工时表。",
  },
  featuresAiTitle: {
    pt: "Recursos de IA do TidyFlow",
    es: "Capacidades de IA de TidyFlow",
    ar: "قدرات TidyFlow للذكاء الاصطناعي",
    cn: "TidyFlow AI 功能",
  },
  featuresAiDesc: {
    pt: "Melhore decisões operacionais com sugestões seguras do modelo Gemini privado. Destaque checklists de limpeza automaticamente, receba recomendações de despacho e analise varreduras de imagens automaticamente.",
    es: "Mejora decisiones operativas con sugerencias seguras del modelo Gemini privado. Resalta listas de verificación de limpieza automáticamente, recibe recomendaciones de despacho y analiza escaneos de imágenes automáticamente.",
    ar: "حسّن القرارات التشغيلية باقتراحات آمنة من نموذج Gemini الخاص. أبرز قوائم التنظيف تلقائياً، واستلم توصيات التوزيع، وحلّل مسح الصور تلقائياً.",
    cn: "利用安全私密的 Gemini 模型建议改进运营决策。自动高亮保洁清单、接收调度推荐并自动分析图片扫描。",
  },
  featuresAiCard1Title: {
    pt: "Atribuições Inteligentes",
    es: "Asignaciones Inteligentes",
    ar: "تعيينات ذكية",
    cn: "智能指派",
  },
  featuresAiCard1Desc: {
    pt: "Recomenda encaixes de despacho com base em proximidade de localização, calendários de turnos e históricos.",
    es: "Recomienda asignaciones de despacho según proximidad de ubicación, calendarios de turnos e historiales.",
    ar: "يوصي بتوزيعات بناءً على القرب الجغرافي وتقويمات المناوبات والسجلات السابقة.",
    cn: "根据位置邻近度、班次日历和历史记录推荐调度匹配。",
  },
  featuresAiCard2Title: {
    pt: "Diagnóstico de Riscos",
    es: "Diagnóstico de Riesgos",
    ar: "تشخيص المخاطر",
    cn: "风险诊断",
  },
  featuresAiCard2Desc: {
    pt: "Notificações destacadas alertam gerentes sobre tarefas não atribuídas e conflitos de agenda.",
    es: "Las notificaciones destacadas alertan a los gerentes sobre tareas sin asignar y conflictos de horario.",
    ar: "تنبيهات بارزة تحذّر المديرين من المهام غير المعيّنة وتعارضات الجدول.",
    cn: "高亮通知提醒经理未分配任务和日程冲突。",
  },
};

// Section-based translations for fr keys (pt, es, ar, cn)
const sectionTranslations = JSON.parse(
  fs.readFileSync(path.join(__dirname, "locale-section-translations.json"), "utf8")
);

function escapeStr(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function formatBlock(langCode, entries) {
  const lines = entries.map(([k, v]) => `  ${k}: "${escapeStr(v)}",`);
  return `const ${langCode}: Record<string, string> = {\n${lines.join("\n")}\n};`;
}

const langs = ["pt", "es", "ar", "cn"];
const langBlocks = {};

for (const lang of langs) {
  const entries = frEntries.map(([key, frVal]) => {
    if (extra[key]?.[lang]) {
      return [key, extra[key][lang]];
    }
    if (sectionTranslations[key]?.[lang]) {
      return [key, sectionTranslations[key][lang]];
    }
    return [key, frVal];
  });
  langBlocks[lang] = entries;
}

const output = `// Dedicated page-level marketing strings for pt, es, ar, and cn.

${formatBlock("pt", langBlocks.pt)}

${formatBlock("es", langBlocks.es)}

${formatBlock("ar", langBlocks.ar)}

${formatBlock("cn", langBlocks.cn)}

export const marketingPageLocalesExtended: Record<string, Record<string, string>> = { pt, es, ar, cn };
`;

fs.writeFileSync(outPath, output, "utf8");

for (const lang of langs) {
  console.log(`${lang}: ${langBlocks[lang].length} keys`);
}
