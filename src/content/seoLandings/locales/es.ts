import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_ES: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Software para Empresas de Limpieza | Agenda, Controla y Paga Equipos | TidyFlow",
    seoDescription:
      "TidyFlow es un software para empresas de limpieza que permite programar trabajos, verificar trabajo de campo con GPS, comprobar con fotos, calcular nómina con horas verificadas y enviar informes al cliente — en línea o sin conexión.",
    keywords:
      "software para empresa de limpieza, plataforma de limpieza, software de operaciones de conserjería, app de limpieza de campo, software de despacho de limpieza, TidyFlow",
    eyebrow: "Software para empresas de limpieza",
    h1: "El sistema operativo para empresas de limpieza",
    heroSubtitle:
      "TidyFlow conecta propietarios, gerentes y personal de limpieza en una sola plataforma — programa trabajos recurrentes, verifica el trabajo en sitio con GPS y fotos, calcula la nómina con horas registradas y envía comprobantes a los clientes.",
    navLabel: "Software para empresas de limpieza",
    problems: {
      title: "Qué se rompe cuando gestionas una empresa de limpieza con hojas de cálculo y grupos de chat",
      items: [
        "Los contratos recurrentes están en una hoja, la disponibilidad del personal en otra, y las quejas de clientes en WhatsApp.",
        "Los gerentes no pueden saber si el equipo realmente inició el trabajo o solo pasó por el edificio.",
        "Las disputas de nómina empiezan porque las horas se anotaron de memoria en lugar de verificarse en sitio.",
        "Los clientes piden comprobante del trabajo y corres a buscar fotos enterradas en el carrete del teléfono.",
        "Los equipos de campo pierden señal en sótanos, estacionamientos y cuartos de máquinas — y no pueden terminar el trabajo en la app.",
      ],
    },
    solution: {
      title: "Una plataforma desde la programación hasta el comprobante y la nómina",
      paragraphs: [
        "TidyFlow está diseñado específicamente para operaciones de empresas de limpieza — no es un software genérico de servicios de campo. Los propietarios tienen visibilidad de ingresos y control de suscripción. Los gerentes arman turnos, asignan personal y revisan finalizaciones verificadas por GPS. El personal de limpieza recibe una lista de trabajos sencilla en el móvil, con listas de verificación sin conexión, temporizadores y carga de fotos.",
        "Cuando un trabajo se completa, las horas alimentan flujos de nómina, las fotos pueden generar informes PDF para clientes y los gerentes mantienen un historial auditable sin perseguir mensajes en cinco apps distintas.",
      ],
    },
    features: [
      {
        title: "Programación de trabajos y contratos recurrentes",
        description: "Calendario, constructor de turnos y visitas recurrentes a propiedades con asignación que considera vacaciones.",
        benefit: "Deja de reconstruir la semana en hojas de cálculo cada domingo por la noche.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Software de programación de limpieza",
      },
      {
        title: "Seguimiento de campo verificado por GPS",
        description: "Ubicación verificada al iniciar y completar; GPS en vivo durante trabajos activos en flujos compatibles.",
        benefit: "Sabe qué sitios se atendieron de verdad — no solo los declarados.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Control de horas para personal de limpieza",
      },
      {
        title: "Nómina con horas verificadas",
        description: "Temporizadores de tareas, aprobación de horas trabajadas y procesamiento de nómina según el tiempo registrado.",
        benefit: "Reduce disputas con horas vinculadas a trabajos completados.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Software de nómina para limpieza",
      },
      {
        title: "Operaciones de campo sin conexión",
        description: "Finalización completa del trabajo sin internet — listas de verificación, temporizador y fotos en cola que se sincronizan después.",
        benefit: "El personal termina trabajos en edificios con señal débil en lugar de llamar a la oficina.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "App de limpieza sin conexión",
      },
    ],
    howItWorks: {
      title: "Programar → Asignar → Rastrear → Verificar → Informar",
      steps: [
        { title: "Programar", description: "Crea trabajos puntuales o recurrentes desde la web o el móvil. Sincroniza con Google Sheets si tu equipo aún mantiene una hoja maestra." },
        { title: "Asignar", description: "Arrastra personal al turno. La IA puede sugerir al mejor candidato según historial, ubicación y vacaciones — los gerentes siempre confirman." },
        { title: "Rastrear", description: "El personal inicia el temporizador en sitio. La verificación por GPS señala inicios y finalizaciones lejos de la propiedad." },
        { title: "Verificar", description: "Listas de verificación, fotos antes/después y puntuación opcional por IA dan a los gerentes evidencia de calidad." },
        { title: "Informar", description: "Genera informes PDF de trabajos o comparte un enlace del portal del cliente. Las horas fluyen hacia nómina y facturación." },
      ],
    },
    useCases: {
      title: "Empresas de limpieza que operan con TidyFlow",
      items: [
        { title: "Limpieza comercial y por contrato", description: "Contratos multi-sitio con visitas recurrentes, comprobantes para clientes y flujos de QA para gerentes." },
        { title: "Equipos de conserjería y facilities", description: "Turnos nocturnos, cuartos de máquinas y edificios con señal débil — el modo sin conexión mantiene a los equipos en movimiento." },
        { title: "Negocios locales en crecimiento", description: "Sustituye el caos de las hojas de cálculo al añadir propiedades y personal sin contratar primero un administrador de operaciones." },
        { title: "Equipos multilingües", description: "Plataforma disponible en 11 idiomas para propietarios, gerentes y personal de campo." },
      ],
    },
    faqs: [
      { q: "¿Qué es un software para empresas de limpieza?", a: "Es un software que ayuda a empresas de limpieza a programar trabajos, gestionar personal, rastrear trabajo de campo, verificar calidad y procesar nómina o facturación de clientes en un solo sistema, en lugar de hojas de cálculo y apps de mensajería." },
      { q: "¿TidyFlow es solo para grandes empresas?", a: "No. Los planes empiezan en $25/mes para equipos más pequeños. Puedes gestionar programación, seguimiento de campo y comprobantes con un equipo en crecimiento, sin configuración enterprise." },
      { q: "¿TidyFlow funciona sin conexión?", a: "Sí. El personal puede completar listas de verificación, usar el temporizador del trabajo y capturar fotos sin conexión. Los datos se sincronizan cuando vuelve la conectividad." },
      { q: "¿Puedo seguir usando Google Sheets?", a: "Sí. TidyFlow ofrece sincronización bidireccional con Google Sheets para mantener una hoja maestra mientras la app gestiona la ejecución de campo." },
      { q: "¿Cómo empiezo?", a: "Inicia una prueba gratuita de 14 días desde la página de precios. Los propietarios configuran propiedades, invitan al personal y asignan los primeros trabajos desde la web o el móvil." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Software de Gestión de Limpieza | Control Operativo | TidyFlow",
    seoDescription:
      "Software de gestión de limpieza para propietarios y gerentes de operaciones — turnos, estado de trabajos en vivo, vacaciones del equipo, registro de incidencias, aprobación de nómina y comprobantes para clientes en un solo panel.",
    keywords:
      "software de gestión de limpieza, plataforma de operaciones de limpieza, sistema de gestión de conserjería, gestión de negocio de limpieza, TidyFlow",
    eyebrow: "Software de gestión de limpieza",
    h1: "Gestiona operaciones de limpieza desde un panel de gestión",
    heroSubtitle:
      "Da a los gerentes visibilidad sobre turnos, finalizaciones de campo, revisiones de calidad y aprobaciones de nómina — sin perseguir al personal en WhatsApp o reconstruir turnos en hojas de cálculo.",
    navLabel: "Gestión de limpieza",
    problems: {
      title: "Por qué las operaciones de limpieza se desmoronan al crecer",
      items: [
        "El propietario es la única persona que sabe qué cliente está con personal insuficiente el jueves.",
        "Los gerentes vuelven a escribir los mismos trabajos recurrentes cada semana porque nada automatiza las visitas contractuales.",
        "Las quejas de calidad llegan antes de que alguien revise fotos o resultados de listas de verificación del trabajo.",
        "Las solicitudes de vacaciones quedan en mensajes y el turno se publica con conflictos conocidos.",
        "Aprobar la nómina significa comparar hojas de horas manuscritas con la memoria.",
      ],
    },
    solution: {
      title: "Herramientas de gestión conectadas a datos reales de campo",
      paragraphs: [
        "El software de gestión TidyFlow conecta programación, RR. HH. del equipo y ejecución de campo. Los gerentes ven actualizaciones de estado en tiempo real, revisan finalizaciones verificadas por GPS y aprueban horas antes del procesamiento de nómina.",
        "El registro de incidencias, la puntuación de QA y los comprobantes para clientes están junto al turno — para que las decisiones de gestión usen los mismos datos que el personal genera en sitio.",
      ],
    },
    features: [
      {
        title: "Constructor de turnos con control de vacaciones",
        description: "Asignación por arrastrar y soltar que respeta vacaciones aprobadas y disponibilidad.",
        benefit: "Publica turnos sin verificación manual de conflictos.",
        linkHref: "/features",
        linkLabel: "Funciones de equipo y programación",
      },
      {
        title: "Estado de trabajos en tiempo real",
        description: "Ve cuándo los trabajos inician, pausan y completan en todas las propiedades.",
        benefit: "Interviene antes de que una visita perdida se convierta en escalada con el cliente.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Software de programación",
      },
      {
        title: "Flujos de QA e incidencias",
        description: "Revisiones de calidad por gerentes, registro de incidencias y evidencia fotográfica en trabajos completados.",
        benefit: "Atiende quejas con historial auditable por trabajo.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Software de inspección",
      },
      {
        title: "Panel de ingresos para propietarios",
        description: "Visibilidad financiera e insights de Revenue AI en planes compatibles.",
        benefit: "Los propietarios ven el rendimiento sin exportar cinco informes.",
        linkHref: "/pricing",
        linkLabel: "Planes y precios",
      },
    ],
    howItWorks: {
      title: "Planificar → Asignar → Monitorizar → Revisar → Aprobar",
      steps: [
        { title: "Planificar", description: "Arma la semana en calendario o vista de turnos. Los trabajos recurrentes generan visitas contractuales automáticamente." },
        { title: "Asignar", description: "Coloca personal en los trabajos. Recomendaciones de IA opcionales — los gerentes eligen los responsables finales." },
        { title: "Monitorizar", description: "Sigue inicios, alertas de GPS y progreso de listas de verificación desde el panel de gestión." },
        { title: "Revisar", description: "Abre trabajos completados para fotos, puntuaciones de QA y borradores de informes para clientes." },
        { title: "Aprobar", description: "Aprueba horas trabajadas y procesa la nómina según el tiempo verificado de las tareas." },
      ],
    },
    useCases: {
      title: "Escenarios de gestión que TidyFlow cubre",
      items: [
        { title: "Gerentes de operaciones", description: "Despacho diario, seguimiento de calidad y coordinación de equipo en múltiples sitios." },
        { title: "Propietarios de negocios", description: "Control de suscripción, vista de ingresos y comprobación de que los contratos se están atendiendo." },
        { title: "Supervisores multi-sitio", description: "Compara estado de finalización e incidencias entre propiedades en un solo lugar." },
        { title: "Coordinadores de franquicia", description: "Flujos consistentes y acceso por rol conforme crecen los equipos." },
      ],
    },
    faqs: [
      { q: "¿Qué debe incluir un software de gestión de limpieza?", a: "Como mínimo: programación, asignación de equipo, estado de campo, control de horas, comprobante de calidad y aprobación de nómina u horas. TidyFlow cubre todo esto en una plataforma." },
      { q: "¿Los gerentes pueden usar TidyFlow en el móvil?", a: "Sí. Los gerentes pueden programar, asignar y revisar trabajos desde el móvil o la web." },
      { q: "¿Cómo funciona el acceso por rol?", a: "Propietarios, gerentes y personal de limpieza ven pantallas distintas. El personal recibe listas de trabajos y herramientas de campo; los gerentes tienen turnos, aprobaciones e informes." },
      { q: "¿TidyFlow sustituye a mi contador?", a: "No. TidyFlow gestiona las operaciones y puede sincronizar facturas con QuickBooks Online. Tu contador sigue siendo responsable de impuestos y estrategia contable." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Software de Conserjería | Turnos Nocturnos y Equipos Multi-Sitio | TidyFlow",
    seoDescription:
      "Software de conserjería para limpieza por contrato — visitas recurrentes a sitios, app de campo sin conexión, registro de entrada con GPS, listas de verificación y comprobantes para clientes de facilities.",
    keywords:
      "software de conserjería, software de gestión de conserjería, app de programación de conserjería, software de conserjería por contrato, TidyFlow",
    eyebrow: "Software de conserjería",
    h1: "Software de conserjería hecho para trabajo en sitios por contrato",
    heroSubtitle:
      "Gestiona rutas recurrentes de conserjería en oficinas, escuelas e instalaciones. El personal trabaja sin conexión en cuartos de máquinas y sótanos mientras los gerentes verifican cada visita con GPS, listas de verificación y fotos.",
    navLabel: "Software de conserjería",
    problems: {
      title: "Los contratos de conserjería fallan cuando la app de campo falla",
      items: [
        "Los equipos nocturnos encuentran zonas sin señal en escaleras y no pueden registrar la finalización.",
        "El personal sustituto llega sin las notas del sitio que quedaron en un grupo de chat.",
        "Los gestores de facilities piden comprobante y envías un correo genérico sin marca de tiempo.",
        "El trabajo extra en salas adicionales pasa desapercibido hasta la hora de la factura.",
        "Varios edificios comparten un supervisor que no puede verificar físicamente cada hora de inicio.",
      ],
    },
    solution: {
      title: "Flujos de conserjería por contrato en un solo sistema",
      paragraphs: [
        "TidyFlow soporta turnos recurrentes de conserjería, listas de verificación por sitio y finalización de trabajos sin conexión — la combinación que las empresas de limpieza por contrato necesitan cuando cada edificio tiene reglas de acceso y calidad de señal distintas.",
        "El chat por tarea mantiene las instrucciones del sitio en el trabajo. La verificación por GPS y el comprobante fotográfico dan a los clientes de facilities evidencia sin trabajo administrativo extra.",
      ],
    },
    features: [
      {
        title: "Rutas recurrentes de conserjería",
        description: "Automatiza visitas semanales y mensuales por propiedad con asignación de equipo.",
        benefit: "Los turnos contractuales se regeneran sin copiar y pegar manualmente.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Software de programación",
      },
      {
        title: "App de conserjería sin conexión",
        description: "Temporizador, lista de verificación y fotos funcionan sin conexión; se sincronizan al reconectar.",
        benefit: "Los equipos nocturnos terminan trabajos bajo tierra en lugar de saltarse la app.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Software de limpieza sin conexión",
      },
      {
        title: "Listas de verificación y fotos por sitio",
        description: "Tareas sala a sala con evidencia antes/después al completar.",
        benefit: "Documenta el alcance para QA y disputas con clientes.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspección y control de calidad",
      },
      {
        title: "Botón SOS de seguridad",
        description: "Alerta con un toque a gerentes para trabajadores solos en turnos nocturnos.",
        benefit: "Da a los conserjes nocturnos una línea directa de seguridad en la pantalla del trabajo.",
        linkHref: "/features",
        linkLabel: "Funciones de seguridad de campo",
      },
    ],
    howItWorks: {
      title: "Contrato → Programar → Ejecutar → Comprobar → Facturar",
      steps: [
        { title: "Contrato", description: "Configura propiedades con notas de acceso y plantillas de lista de verificación por sitio." },
        { title: "Programar", description: "Crea visitas recurrentes de conserjería y asigna equipos fijos o rotativos." },
        { title: "Ejecutar", description: "El personal ejecuta el trabajo sin conexión o en línea — temporizador, lista de verificación y fotos en sitio." },
        { title: "Comprobar", description: "Los gerentes revisan finalización verificada por GPS y evidencia fotográfica." },
        { title: "Facturar", description: "Factura a clientes según el trabajo completado; sincroniza facturas con QuickBooks en planes compatibles." },
      ],
    },
    useCases: {
      title: "Equipos de conserjería que usan TidyFlow",
      items: [
        { title: "Conserjería corporativa y de oficinas", description: "Limpieza fuera de horario con PDFs de comprobante para clientes." },
        { title: "Educación y edificios públicos", description: "Sitios de varios pisos con señal interior débil — modo sin conexión incluido." },
        { title: "Conserjería industrial y de plantas", description: "Listas de verificación para áreas restringidas y zonas sensibles a la seguridad." },
        { title: "Proveedores de conserjería subcontratados", description: "Acceso por rol para gerentes orientados al cliente y personal de campo." },
      ],
    },
    faqs: [
      { q: "¿TidyFlow es software de conserjería o residencial?", a: "TidyFlow está diseñado para operaciones profesionales de limpieza — comercial, conserjería y trabajo por contrato son el enfoque principal." },
      { q: "¿Los conserjes pueden fichar sin señal?", a: "Sí. La app de campo encola GPS y eventos del trabajo sin conexión y se sincroniza cuando vuelve la conectividad." },
      { q: "¿Podemos compartir comprobantes con gestores de facilities?", a: "Sí. Informes PDF de trabajos y enlaces seguros del portal del cliente comparten evidencia de finalización." },
      { q: "¿TidyFlow gestiona turnos nocturnos recurrentes?", a: "Sí. Trabajos recurrentes y herramientas de turnos soportan rutas nocturnas fijas y equipos rotativos." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Software de Limpieza Comercial | Contratos Multi-Sitio | TidyFlow",
    seoDescription:
      "Software de limpieza comercial para contratos de oficinas, retail e instalaciones — programación, inspecciones de QC, comprobantes para clientes, facturación y gestión de equipo.",
    keywords:
      "software de limpieza comercial, software de limpieza de oficinas, plataforma de limpieza por contrato, software de limpieza de facilities, TidyFlow",
    eyebrow: "Software de limpieza comercial",
    h1: "Software de limpieza comercial para operaciones por contrato",
    heroSubtitle:
      "Gestiona contratos comerciales multi-sitio con turnos recurrentes, listas de verificación de inspección, comprobantes fotográficos para clientes y nómina con horas verificadas de campo.",
    navLabel: "Limpieza comercial",
    problems: {
      title: "Los contratos comerciales necesitan más que una app de calendario",
      items: [
        "Cada sitio del cliente tiene alcance, llaves y estándares de inspección distintos.",
        "Los gestores de cuentas prometen calidad, pero operaciones no tiene registro centralizado de QC.",
        "Las órdenes de trabajo extra se pierden entre el correo y el turno semanal.",
        "Las facturas salen antes de que alguien confirme que todas las visitas programadas se completaron.",
        "La pérdida de clientes sigue a una limpieza profunda perdida que nadie documentó.",
      ],
    },
    solution: {
      title: "Flujos comerciales desde la propuesta hasta el comprobante",
      paragraphs: [
        "TidyFlow conecta la programación comercial con la verificación de calidad e informes para clientes. Los gerentes aplican puntuación de QA en trabajos completados, registran incidencias por propiedad y comparten comprobantes PDF con la marca de la empresa.",
        "La facturación y la sincronización con QuickBooks en planes compatibles mantienen las finanzas alineadas con el trabajo contractual completado.",
      ],
    },
    features: [
      {
        title: "Programación multi-propiedad",
        description: "Calendario y trabajos recurrentes en carteras comerciales.",
        benefit: "Una vista de cada sitio del contrato.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Programación",
      },
      {
        title: "Comprobantes e informes PDF para clientes",
        description: "Informes descargables con tu marca y enlaces seguros del portal.",
        benefit: "Entrega evidencia a gestores de facilities sin correos manuales con fotos.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspección y comprobantes",
      },
      {
        title: "Facturación de clientes",
        description: "Factura según tareas completadas con partidas detalladas.",
        benefit: "Cobra según finalizaciones verificadas, no estimaciones.",
        linkHref: "/integrations",
        linkLabel: "Integración con QuickBooks",
      },
      {
        title: "Registro de incidencias",
        description: "Registra y resuelve incidencias por propiedad en campo u oficina.",
        benefit: "Cierra el ciclo cuando un sitio reporta un problema.",
        linkHref: "/features",
        linkLabel: "Funciones de calidad",
      },
    ],
    howItWorks: {
      title: "Alcance → Programar → Atender → Inspeccionar → Facturar",
      steps: [
        { title: "Alcance", description: "Define propiedades, listas de verificación y notas de acceso por cliente comercial." },
        { title: "Programar", description: "Configura frecuencia recurrente de servicio y asigna equipos." },
        { title: "Atender", description: "El personal completa trabajos con temporizador, GPS y lista de verificación en el móvil." },
        { title: "Inspeccionar", description: "Los gerentes hacen QA del trabajo completado con fotos y flujos de puntuación." },
        { title: "Facturar", description: "Factura a clientes y, opcionalmente, sincroniza con QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Casos de uso de limpieza comercial",
      items: [
        { title: "Operadores de oficinas y coworkings", description: "Servicio diario y semanal con comprobante visible al cliente." },
        { title: "Cadenas de retail y hospitalidad", description: "Múltiples ubicaciones con listas de verificación consistentes." },
        { title: "Carteras de gestión de propiedades", description: "Sigue incidencias y visitas en varios edificios." },
        { title: "Empresas de limpieza B2B", description: "Visibilidad operativa para propietarios que venden a gestores de facilities." },
      ],
    },
    faqs: [
      { q: "¿Qué es un software de limpieza comercial?", a: "Software que ayuda a empresas de limpieza B2B a programar sitios contractuales, verificar la entrega del servicio, gestionar equipos y facturar clientes en una plataforma." },
      { q: "¿Los clientes pueden ver fotos de los trabajos?", a: "Tú controlas los comprobantes para clientes vía informes PDF y enlaces del portal — no el chat interno de gerentes." },
      { q: "¿TidyFlow soporta contratos multi-ubicación?", a: "Sí. Propiedades, trabajos recurrentes y turnos escalan a carteras comerciales multi-sitio." },
      { q: "¿Podemos recopilar reseñas de clientes?", a: "Sí. TidyFlow incluye recopilación de reseñas de clientes con enrutamiento de feedback negativo." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Software de Programación de Limpieza | Trabajos Recurrentes y Turnos | TidyFlow",
    seoDescription:
      "Software de programación de limpieza con calendario, constructor de turnos, trabajos recurrentes, sugerencias de asignación por IA, gestión de vacaciones y sincronización con Google Sheets.",
    keywords:
      "software de programación de limpieza, software de despacho de limpieza, programación de servicios de limpieza, app de programación de conserjería, TidyFlow",
    eyebrow: "Software de programación de limpieza",
    h1: "Software de programación de limpieza que refleja turnos reales",
    heroSubtitle:
      "Arma turnos semanales, automatiza visitas recurrentes a propiedades, asigna personal considerando vacaciones y envía actualizaciones de despacho al instante a la app de campo.",
    navLabel: "Programación",
    problems: {
      title: "La programación se rompe cuando la herramienta ignora la realidad de la limpieza",
      items: [
        "Los contratos recurrentes se vuelven a escribir manualmente cada mes.",
        "Los sustitutos se asignan sin ver quién está de vacaciones.",
        "El personal se entera de cambios de turno por mensaje grupal, no por la app.",
        "La planificación de rutas es a ciegas — el tiempo de desplazamiento entre sitios es invisible.",
        "El turno de la hoja de cálculo y la app de campo nunca coinciden.",
      ],
    },
    solution: {
      title: "Programación conectada a la app de campo",
      paragraphs: [
        "La programación de TidyFlow no es un calendario aislado — las asignaciones llegan a las listas de trabajos del móvil en tiempo real. Los trabajos recurrentes generan visitas contractuales automáticamente. El constructor de turnos respeta vacaciones aprobadas.",
        "La sincronización bidireccional con Google Sheets permite mantener una hoja maestra mientras TidyFlow ejecuta el despacho. La IA puede sugerir personal; los gerentes siempre toman la decisión final.",
      ],
    },
    features: [
      {
        title: "Calendario y constructor de turnos",
        description: "Vista semanal, asignación por arrastrar y soltar, planificación que considera vacaciones.",
        benefit: "Arma el turno una vez y publícalo en campo.",
        linkHref: "/how-it-works",
        linkLabel: "Cómo funciona la programación",
      },
      {
        title: "Trabajos recurrentes",
        description: "Patrones semanales, mensuales y personalizados por propiedad.",
        benefit: "Deja de copiar las mismas visitas en cada ciclo.",
        linkHref: "/features",
        linkLabel: "Funciones de programación",
      },
      {
        title: "Recomendaciones de personal por IA",
        description: "Sugiere al mejor candidato según historial, ubicación y disponibilidad.",
        benefit: "Despacho más rápido en mañanas ajetreadas — el gerente confirma.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "Asignación por IA",
      },
      {
        title: "Optimización de rutas",
        description: "Reduce tiempo de desplazamiento entre propiedades en flujos compatibles.",
        benefit: "Encaja más trabajos por turno sin adivinar horas extra.",
        linkHref: "/integrations",
        linkLabel: "Integración con mapas",
      },
    ],
    howItWorks: {
      title: "Programar → Asignar → Notificar → Ejecutar → Ajustar",
      steps: [
        { title: "Programar", description: "Crea trabajos en vista de calendario o importa desde Google Sheets." },
        { title: "Asignar", description: "Arrastra personal a los turnos; el turno señala conflictos de vacaciones." },
        { title: "Notificar", description: "Las asignaciones aparecen al instante en los dispositivos del personal." },
        { title: "Ejecutar", description: "Los equipos de campo inician trabajos con registro de entrada verificado por GPS." },
        { title: "Ajustar", description: "Reasigna trabajos abiertos desde el móvil cuando alguien falta por enfermedad." },
      ],
    },
    useCases: {
      title: "Escenarios de programación",
      items: [
        { title: "Limpieza por contrato recurrente", description: "Automatiza rutas semanales fijas en sitios de clientes." },
        { title: "Servicios residenciales y domésticos", description: "Turnos semanales variables con reasignación rápida." },
        { title: "Despacho multi-equipo", description: "Varios supervisores programando territorios superpuestos." },
        { title: "Empresas en crecimiento que dejan las hojas de cálculo", description: "Sincronización con Sheets mientras migras el despacho a la app." },
      ],
    },
    faqs: [
      { q: "¿TidyFlow gestiona trabajos de limpieza recurrentes?", a: "Sí. Los trabajos recurrentes automatizan visitas repetidas por propiedad con asignación de equipo." },
      { q: "¿La programación se sincroniza con Google Sheets?", a: "Sí. La sincronización bidireccional mantiene hojas maestras alineadas con asignaciones de la app." },
      { q: "¿El personal ve solo su propio turno?", a: "Sí. El personal ve la lista de trabajos del día; los gerentes ven el turno completo." },
      { q: "¿Hay optimización de rutas?", a: "Sí. TidyFlow incluye herramientas de planificación de rutas con integración a Google Maps." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Software de Nómina para Limpieza | Horas Verificadas y Hojas de Horas | TidyFlow",
    seoDescription:
      "Software de nómina para limpieza basado en horas de tareas verificadas por GPS, aprobación de hojas de horas, reglas de pago, procesamiento de nómina y recibos PDF para equipos de limpieza.",
    keywords:
      "software de nómina para limpieza, app de nómina para personal de limpieza, nómina de conserjería, software de hojas de horas de limpieza, TidyFlow",
    eyebrow: "Software de nómina para limpieza",
    h1: "Software de nómina para limpieza con horas verificadas",
    heroSubtitle:
      "Genera nómina a partir de temporizadores de tareas y horas trabajadas aprobadas — no de hojas de horas manuscritas. La verificación por GPS reduce disputas y da a los gerentes un historial auditable.",
    navLabel: "Nómina",
    problems: {
      title: "Las disputas de nómina empiezan con horas no verificadas",
      items: [
        "El personal redondea horas porque las hojas de horas en papel son fáciles de inflar.",
        "Los gerentes no pueden vincular una línea del recibo a un trabajo específico completado.",
        "Sorpresas con horas extra aparecen porque trabajos extra no se registraron centralmente.",
        "Las tarifas de contratistas vs. empleados están en cuadernos distintos.",
        "Finanzas vuelve a escribir horas en contabilidad después de que operaciones ya aprobó otra cosa.",
      ],
    },
    solution: {
      title: "Nómina vinculada al trabajo de campo completado",
      paragraphs: [
        "TidyFlow registra horas con el temporizador del trabajo en sitio. La verificación por GPS señala inicios y finalizaciones lejos de la propiedad. Los gerentes aprueban horas trabajadas antes del procesamiento de nómina.",
        "Reglas de pago por empleado, facturas de nómina y sincronización de cuentas de nómina con QuickBooks en planes compatibles mantienen operaciones y finanzas alineadas.",
      ],
    },
    features: [
      {
        title: "Temporizador de tareas y hojas de horas",
        description: "Iniciar, pausar, reanudar, enviar — horas vinculadas a cada trabajo.",
        benefit: "Cada hora está ligada a una visita a la propiedad.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Control de horas",
      },
      {
        title: "Asistencia verificada por GPS",
        description: "Ubicación verificada al fichar y al completar el trabajo.",
        benefit: "Contesta disputas con evidencia de ubicación.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Verificación por GPS",
      },
      {
        title: "Reglas de pago y procesamiento de nómina",
        description: "Tarifas por usuario y generación de nómina según horas aprobadas.",
        benefit: "Un flujo de aprobación antes de que salgan los recibos.",
        linkHref: "/features",
        linkLabel: "Funciones de nómina",
      },
      {
        title: "Cuentas de nómina en QuickBooks",
        description: "Sincroniza nómina aprobada con QuickBooks en planes compatibles.",
        benefit: "Contabilidad recibe totales aprobados por operaciones.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "Sincronización con QuickBooks",
      },
    ],
    howItWorks: {
      title: "Programar → Registrar horas → Verificar → Aprobar → Pagar",
      steps: [
        { title: "Programar", description: "Asigna trabajos para que las horas esperadas sean visibles antes del turno." },
        { title: "Registrar", description: "El personal usa el temporizador en sitio; GPS valida la ubicación." },
        { title: "Verificar", description: "Los gerentes revisan fichajes señalados y listas de verificación incompletas." },
        { title: "Aprobar", description: "Aprueba horas trabajadas y ajustes." },
        { title: "Pagar", description: "Procesa la nómina y exporta facturas PDF o sincroniza con QuickBooks." },
      ],
    },
    useCases: {
      title: "Escenarios de nómina",
      items: [
        { title: "Equipos de limpieza por hora", description: "Paga según el tiempo verificado de tareas en lugar de papeles." },
        { title: "Empleados y contratistas mixtos", description: "Reglas de pago por usuario con facturas PDF de nómina." },
        { title: "Equipos propensos a disputas", description: "GPS e historial de trabajos para cada línea del recibo." },
        { title: "Propietarios que procesan nómina por la noche", description: "Aprobación en lote desde el panel de gestión." },
      ],
    },
    faqs: [
      { q: "¿TidyFlow registra horas del personal de limpieza?", a: "Sí. Los temporizadores de trabajos registran horas por tarea. El personal también puede enviar horas trabajadas para aprobación del gerente." },
      { q: "¿El GPS demuestra que el personal estaba en sitio?", a: "La verificación por GPS comprueba la ubicación al iniciar y completar. Los gerentes reciben alertas de fichajes fuera del sitio." },
      { q: "¿Puedo exportar nómina a QuickBooks?", a: "En planes compatibles, la nómina aprobada puede sincronizarse como cuentas en QuickBooks Online." },
      { q: "¿TidyFlow sustituye a un proveedor completo de nómina y RR. HH.?", a: "TidyFlow genera nómina a partir de horas operativas verificadas. La declaración fiscal y el cumplimiento completo de RR. HH. siguen siendo responsabilidad de tu contador." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Software de Inspección de Limpieza | Listas de Verificación y Comprobante Fotográfico | TidyFlow",
    seoDescription:
      "Software de inspección de limpieza con listas de verificación por sala, fotos antes/después, puntuación de QA, informes PDF para clientes y registro de incidencias para verificación de calidad.",
    keywords:
      "software de inspección de limpieza, software de control de calidad de limpieza, app de listas de verificación de limpieza, software de inspección de conserjería, TidyFlow",
    eyebrow: "Software de inspección de limpieza",
    h1: "Software de inspección de limpieza con listas de verificación y comprobante fotográfico",
    heroSubtitle:
      "Realiza inspecciones sala a sala, captura fotos antes/después, evalúa calidad con flujos de QA para gerentes y comparte comprobantes con la marca de la empresa con clientes.",
    navLabel: "Inspecciones",
    problems: {
      title: "Problemas de calidad cuando las inspecciones quedan fuera del trabajo",
      items: [
        "Las listas de verificación son PDFs en papel que el personal marca sin abrir en sitio.",
        "Las fotos antes/después quedan en el carrete personal — sin vínculo con la propiedad.",
        "Los gerentes inspeccionan al azar en lugar de seguir un flujo de puntuación.",
        "Los clientes disputan la calidad, pero no tienes un paquete de evidencias con marca de tiempo.",
        "Las incidencias encontradas en sitio se olvidan antes de que alguien las registre.",
      ],
    },
    solution: {
      title: "Inspecciones ejecutadas y almacenadas en el registro del trabajo",
      paragraphs: [
        "Las listas de verificación de TidyFlow se ejecutan en la app móvil del personal — reglas opcionales pueden exigir completar la lista antes de iniciar el temporizador. Las fotos se suben en sitio, incluso sin conexión con sincronización posterior.",
        "Los gerentes usan flujos de puntuación de QA para revisar finalizaciones. El análisis de fotos por IA puede señalar problemas de calidad en planes compatibles. Informes PDF y enlaces del portal del cliente empaquetan comprobantes para clientes de facilities.",
      ],
    },
    features: [
      {
        title: "Listas de verificación sala a sala",
        description: "Plantillas de lista de verificación por propiedad con ítems obligatorios.",
        benefit: "Estandariza el alcance en cada visita.",
        linkHref: "/features",
        linkLabel: "Funciones de listas de verificación",
      },
      {
        title: "Fotos antes/después",
        description: "Captura evidencia en el trabajo; funciona sin conexión.",
        benefit: "Las fotos quedan vinculadas a la visita, no al carrete del teléfono.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Fotos sin conexión",
      },
      {
        title: "Flujo de puntuación de QA",
        description: "Revisión por gerente y puntuaciones de calidad en trabajos completados.",
        benefit: "Convierte revisiones puntuales en un proceso repetible.",
        linkHref: "/how-it-works",
        linkLabel: "Flujo de calidad",
      },
      {
        title: "Informes PDF para clientes",
        description: "Informes de trabajos con tu marca y enlaces seguros de compartición.",
        benefit: "Envía comprobantes sin reconstruir presentaciones manualmente.",
        linkHref: "/documentation",
        linkLabel: "Documentación de informes",
      },
    ],
    howItWorks: {
      title: "Crear lista → Inspeccionar → Capturar evidencia → Revisar → Compartir comprobante",
      steps: [
        { title: "Crear", description: "Arma plantillas de lista de verificación por sitio del cliente o tipo de servicio." },
        { title: "Inspeccionar", description: "El personal completa ítems en el móvil durante el trabajo." },
        { title: "Capturar", description: "Añade fotos antes/después; la captura sin conexión se sincroniza después." },
        { title: "Revisar", description: "Los gerentes puntúan finalizaciones en QA y registran incidencias." },
        { title: "Compartir", description: "Exporta PDF o envía enlace del portal del cliente con evidencia." },
      ],
    },
    useCases: {
      title: "Casos de uso de inspección",
      items: [
        { title: "Programas de QC comercial", description: "Puntuación estandarizada en una cartera de clientes." },
        { title: "Limpiezas de mudanza y profundas", description: "Paquetes de fotos antes/después para propietarios." },
        { title: "Estándares de calidad de franquicia", description: "Listas de verificación consistentes en todas las ubicaciones." },
        { title: "Solicitudes de auditoría de clientes", description: "Historial de trabajos con marca de tiempo cuando facilities piden comprobante." },
      ],
    },
    faqs: [
      { q: "¿El personal puede completar listas de verificación sin conexión?", a: "Sí. Listas de verificación y fotos funcionan sin conexión y se sincronizan cuando vuelve la conectividad." },
      { q: "¿TidyFlow usa IA para calidad de fotos?", a: "En planes compatibles, el análisis de fotos por IA puede puntuar fotos de limpieza subidas. Los gerentes siguen tomando las decisiones finales de QA." },
      { q: "¿Los clientes pueden acceder a informes de inspección?", a: "Sí. Informes PDF de trabajos y enlaces seguros del portal comparten evidencia de finalización con clientes." },
      { q: "¿Puedo exigir completar la lista antes de fichar?", a: "Sí. Reglas opcionales pueden exigir pasos de la lista antes de iniciar el temporizador del trabajo." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Software de Control de Horas para Limpieza | Registro de Entrada con GPS | TidyFlow",
    seoDescription:
      "Software de control de horas para limpieza con temporizadores de trabajo en sitio, verificación por GPS, geofencing, seguimiento en vivo durante trabajos activos y horas para nómina.",
    keywords:
      "software de control de horas de limpieza, control de horas de conserjería, app de registro de entrada para limpieza, control de horas con GPS para limpieza, TidyFlow",
    eyebrow: "Control de horas",
    h1: "Software de control de horas para limpieza con verificación por GPS",
    heroSubtitle:
      "Ficha al personal en sitio con temporizadores de trabajo, verificación por GPS y geofencing — para que las horas registradas reflejen visitas reales a la propiedad, no estimaciones.",
    navLabel: "Control de horas",
    problems: {
      title: "El control de horas falla cuando los fichajes son fáciles de falsificar",
      items: [
        "El personal inicia el temporizador desde el estacionamiento al otro lado de la calle.",
        "Los gerentes no tienen vista en vivo de quién está activamente en un trabajo.",
        "Los fichajes fraudulentos ocurren porque cualquiera puede mandar un mensaje de 'ya llegué'.",
        "Las horas de un sitio de cliente se mezclan con tiempo de desplazamiento.",
        "Edificios con señal débil obligan al personal a saltarse el temporizador por completo.",
      ],
    },
    solution: {
      title: "Control de horas integrado en el trabajo de limpieza",
      paragraphs: [
        "El control de horas de TidyFlow es por tarea — iniciar, pausar, reanudar y enviar en la pantalla del trabajo. La verificación por GPS compara la ubicación del fichaje con la propiedad. Los gerentes pueden ver GPS en vivo durante trabajos activos.",
        "El modo sin conexión encola eventos de temporizador y GPS cuando cae la señal, y se sincroniza al reconectar — para que limpiezas en sótanos sigan produciendo horas verificables.",
      ],
    },
    features: [
      {
        title: "Temporizador de trabajo en sitio",
        description: "Flujo sencillo de iniciar/pausar/enviar en la app del personal.",
        benefit: "Horas vinculadas a la propiedad, no a un turno genérico.",
        linkHref: "/features",
        linkLabel: "App de campo",
      },
      {
        title: "GPS y geofencing",
        description: "Verifica ubicación al iniciar/completar; integración con mapas para sitios.",
        benefit: "Señala fichajes lejos del edificio.",
        linkHref: "/integrations",
        linkLabel: "Mapas y geofencing",
      },
      {
        title: "Cola de GPS sin conexión",
        description: "Encola eventos de ubicación sin señal; se sincroniza después.",
        benefit: "Registra horas en cuartos de máquinas y garajes subterráneos.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS sin conexión",
      },
      {
        title: "Horas listas para nómina",
        description: "Horas aprobadas alimentan el procesamiento de nómina.",
        benefit: "Cierra el ciclo del fichaje al recibo.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Software de nómina",
      },
    ],
    howItWorks: {
      title: "Asignar → Llegar → Fichar → Trabajar → Enviar horas",
      steps: [
        { title: "Asignar", description: "El personal recibe los trabajos del día en el móvil." },
        { title: "Llegar", description: "GPS confirma proximidad con el geofence de la propiedad." },
        { title: "Fichar", description: "Inicia el temporizador en el trabajo — bloqueo opcional por lista de verificación." },
        { title: "Trabajar", description: "Pausa/reanuda según necesidad; GPS en vivo durante trabajos activos." },
        { title: "Enviar", description: "Completa el trabajo; las horas esperan aprobación del gerente para nómina." },
      ],
    },
    useCases: {
      title: "Escenarios de control de horas",
      items: [
        { title: "Conserjería comercial", description: "Verifica asistencia en turnos nocturnos en varios sitios." },
        { title: "Equipos residenciales", description: "Temporizadores por hogar para personal por hora." },
        { title: "Trabajos con varios operarios", description: "Cada responsable registra horas en la misma tarea." },
        { title: "Sitios con conectividad débil", description: "La cola sin conexión preserva horas y GPS." },
      ],
    },
    faqs: [
      { q: "¿TidyFlow registra horas del personal automáticamente?", a: "Sí. El temporizador del trabajo registra horas cuando el personal inicia y envía tareas. GPS añade verificación de ubicación." },
      { q: "¿Qué pasa si el GPS no está disponible?", a: "Los eventos quedan en cola sin conexión y se sincronizan cuando vuelve la señal. Los gerentes siguen viendo el registro de finalización del trabajo." },
      { q: "¿El GPS en vivo está siempre activo?", a: "El seguimiento GPS en vivo aplica durante trabajos activos en flujos compatibles — no es vigilancia 24 horas." },
      { q: "¿Los gerentes pueden editar horas?", a: "Los gerentes aprueban o ajustan horas trabajadas mediante el flujo de aprobación antes de la nómina." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Software de Limpieza Sin Conexión | App de Campo Sin Señal | TidyFlow",
    seoDescription:
      "Software de limpieza sin conexión para equipos en sótanos, estacionamientos y edificios con señal débil — listas de verificación sin conexión, temporizador, fotos y cola de GPS con sincronización automática.",
    keywords:
      "software de limpieza sin conexión, app de limpieza sin conexión, app de limpieza sin internet, app de conserjería sin conexión, TidyFlow",
    eyebrow: "Software de limpieza sin conexión",
    h1: "Software de limpieza sin conexión para condiciones reales de campo",
    heroSubtitle:
      "El personal completa trabajos sin internet — listas de verificación, temporizador, fotos y eventos de GPS quedan en cola local y se sincronizan automáticamente cuando vuelve la conectividad.",
    navLabel: "Limpieza sin conexión",
    problems: {
      title: "Las apps de campo fallan donde el trabajo de limpieza realmente ocurre",
      items: [
        "Sótanos y cuartos de máquinas bloquean datos móviles — el personal salta la app.",
        "Las fotos esperan hasta llegar al estacionamiento y se mezclan entre trabajos.",
        "Los temporizadores se detienen porque la app exige conexión constante.",
        "Los gerentes asumen que 'sin sincronización' significa 'no se presentó'.",
        "Los competidores prometen sin conexión, pero solo almacenan en caché la lista de trabajos, no la finalización.",
      ],
    },
    solution: {
      title: "Finalización completa del trabajo sin conexión — no una caché de solo lectura",
      paragraphs: [
        "El modo sin conexión de TidyFlow soporta los flujos que el personal necesita en sitio: usar el temporizador, completar listas de verificación, capturar fotos y encolar eventos de verificación por GPS. Cuando el dispositivo reconecta, los datos se sincronizan con el panel de gestión.",
        "Está diseñado para sitios de conserjería y comercial donde la caída de señal es normal — no casos excepcionales.",
      ],
    },
    features: [
      {
        title: "Listas de verificación sin conexión",
        description: "Completa tareas por sala sin conexión.",
        benefit: "Las inspecciones terminan bajo tierra, no en el estacionamiento.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Software de inspección",
      },
      {
        title: "Temporizador de trabajo sin conexión",
        description: "Registra horas en sitio; sincroniza marcas de tiempo después.",
        benefit: "La nómina recibe tiempo real del trabajo, no estimaciones.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Control de horas",
      },
      {
        title: "Captura de fotos sin conexión",
        description: "Fotos antes/después almacenadas localmente hasta la subida.",
        benefit: "La evidencia queda vinculada al trabajo correcto.",
        linkHref: "/features",
        linkLabel: "Comprobante fotográfico",
      },
      {
        title: "Cola de GPS sin conexión",
        description: "Eventos de ubicación en cola sin señal; se sincronizan al reconectar.",
        benefit: "Verifica asistencia incluso después de salir de una zona sin señal.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Función de GPS sin conexión",
      },
    ],
    howItWorks: {
      title: "Cargar trabajos → Trabajar sin conexión → Encolar datos → Reconectar → Sincronizar",
      steps: [
        { title: "Cargar", description: "Los trabajos asignados se descargan en el dispositivo mientras hay conexión." },
        { title: "Trabajar sin conexión", description: "Temporizador, lista de verificación y fotos funcionan sin internet." },
        { title: "Encolar", description: "Eventos de GPS y finalización se almacenan localmente." },
        { title: "Reconectar", description: "El teléfono recupera señal al salir del edificio o estacionamiento." },
        { title: "Sincronizar", description: "Los gerentes ven trabajo completado, fotos y horas en el panel." },
      ],
    },
    useCases: {
      title: "Escenarios sin conexión",
      items: [
        { title: "Conserjería en sótanos y cuartos de máquinas", description: "Completa trabajos con cero señal interior." },
        { title: "Limpieza de estacionamientos subterráneos", description: "GPS en cola hasta que el dispositivo sale del garaje." },
        { title: "Sitios rurales o industriales", description: "Cobertura irregular ya no bloquea el cumplimiento de campo." },
        { title: "Equipos internacionales", description: "Mismo comportamiento sin conexión en 11 idiomas compatibles." },
      ],
    },
    faqs: [
      { q: "¿TidyFlow funciona sin conexión a internet?", a: "Sí. El personal puede usar temporizadores, listas de verificación y fotos sin conexión. Los datos se sincronizan cuando vuelve la conectividad." },
      { q: "¿Qué se sincroniza tras reconectar?", a: "Estado de finalización del trabajo, fotos, horas del temporizador, eventos de GPS en cola y respuestas de listas de verificación se sincronizan con el servidor." },
      { q: "¿El personal necesita sincronizar manualmente?", a: "La sincronización ocurre automáticamente cuando el dispositivo reconecta — sin paso separado de subida." },
      { q: "¿Sin conexión está disponible en todos los planes?", a: "La operación de campo sin conexión es una capacidad central de TidyFlow. Algunas funciones avanzadas de IA e integración varían por plan — consulta Precios." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Software para Negocios de Limpieza | Operar y Crecer | TidyFlow",
    seoDescription:
      "Software para negocios de limpieza para propietarios que crecen de operador solo a multi-equipo — programación, facturación, nómina, comprobantes para clientes e insights de Revenue AI.",
    keywords:
      "software para negocio de limpieza, app para pequeña empresa de limpieza, software para crecer empresa de limpieza, software para startup de limpieza, TidyFlow",
    eyebrow: "Software para negocios de limpieza",
    h1: "Software para negocios de limpieza que crece con tu empresa",
    heroSubtitle:
      "Empieza con programación y comprobantes de campo, luego añade nómina, facturación de clientes y paneles para propietarios conforme creces — una plataforma en lugar de unir herramientas.",
    navLabel: "Negocio de limpieza",
    problems: {
      title: "Los pequeños negocios de limpieza superan sus primeras herramientas rápido",
      items: [
        "Empiezas con una app de calendario, luego añades software de nómina, luego carpetas de fotos — nada se conecta.",
        "Ganar más contratos significa más horas administrativas, no más beneficio.",
        "No puedes saber qué clientes son rentables sin exportar hojas de cálculo.",
        "Contratar a tu primer gerente duplica el trabajo porque no hay sistema operativo compartido.",
        "Las herramientas de prueba cobran por usuario de formas que penalizan equipos en crecimiento.",
      ],
    },
    solution: {
      title: "Crece operaciones en una plataforma para negocios de limpieza",
      paragraphs: [
        "Los planes de TidyFlow escalan desde equipos iniciales hasta turnos más grandes con límites de propiedades basados en uso. Los propietarios gestionan suscripción y facturación en la app. Programación, comprobantes de campo, nómina y facturación de clientes están juntos.",
        "Revenue AI en planes compatibles destaca riesgos y oportunidades en el panel del propietario — para que las decisiones de crecimiento usen datos operativos, no intuición.",
      ],
    },
    features: [
      {
        title: "Planes desde $25/mes",
        description: "Plan Startup para equipos más pequeños; mejora conforme crecen propiedades y personal.",
        benefit: "Empieza sin contratos enterprise.",
        linkHref: "/pricing",
        linkLabel: "Ver precios",
      },
      {
        title: "Facturación self-service",
        description: "Prueba, mejora y gestiona suscripción en la app.",
        benefit: "Los propietarios controlan costes sin llamar a ventas.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Funciones de facturación",
      },
      {
        title: "Facturación de clientes y QuickBooks",
        description: "Factura según trabajos; sincroniza con QuickBooks Online.",
        benefit: "Finanzas se mantiene alineada conforme añades clientes.",
        linkHref: "/integrations",
        linkLabel: "Integraciones",
      },
      {
        title: "Panel Revenue AI",
        description: "Insights para propietarios en planes compatibles.",
        benefit: "Ve qué contratos necesitan atención pronto.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Empezar → Operar → Comprobar → Facturar → Crecer",
      steps: [
        { title: "Empezar", description: "Prueba de 14 días — configura propiedades e invita a tu primer personal." },
        { title: "Operar", description: "Programa trabajos y ejecuta trabajo de campo con GPS y fotos." },
        { title: "Comprobar", description: "Envía comprobantes a clientes conforme ganas contratos mayores." },
        { title: "Facturar", description: "Factura a clientes y procesa nómina con horas verificadas." },
        { title: "Crecer", description: "Mejora los límites del plan y usa paneles del propietario para decisiones." },
      ],
    },
    useCases: {
      title: "Etapas del negocio",
      items: [
        { title: "Operador solo pasando a multi-personal", description: "Sustituye calendarios personales por programación compartida." },
        { title: "Empresa local ganando licitaciones comerciales", description: "Comprobantes para clientes y QC para contratos de facilities." },
        { title: "Marca regional de limpieza", description: "Límites multi-propiedad, roles e integraciones." },
        { title: "Propietario-operador que lo hace todo", description: "Un inicio de sesión para turno, nómina y facturación." },
      ],
    },
    faqs: [
      { q: "¿Qué es un software para negocios de limpieza?", a: "Software que ayuda a propietarios a gestionar programación, equipos, trabajo de campo, facturación de clientes y nómina para una empresa de limpieza — normalmente sustituyendo hojas de cálculo conforme creces." },
      { q: "¿Cuánto cuesta TidyFlow?", a: "Los planes empiezan en $25/mes en Startup. Standard y Premium añaden más propiedades, personal y funciones como sincronización con Google Sheets y QuickBooks." },
      { q: "¿Hay prueba gratuita?", a: "Sí. Todos los planes incluyen prueba gratuita de 14 días con registro self-service." },
      { q: "¿Puedo mejorar conforme crece mi negocio?", a: "Sí. Cambia planes en la app conforme aumentan los límites de propiedades y equipo." },
    ],
  },
};
