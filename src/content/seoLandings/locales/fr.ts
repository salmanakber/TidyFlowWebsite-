import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_FR: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "Logiciel pour entreprise de nettoyage | Planifier, suivre et payer les équipes | TidyFlow",
    seoDescription:
      "TidyFlow est un logiciel pour entreprises de nettoyage : planification des missions, travail terrain vérifié par GPS, preuves photo, paie à partir d'heures validées et rapports clients — en ligne ou hors ligne.",
    keywords:
      "logiciel entreprise de nettoyage, plateforme nettoyage professionnel, logiciel opérations nettoyage, application nettoyage terrain, logiciel dispatch nettoyage, TidyFlow",
    eyebrow: "Logiciel pour entreprise de nettoyage",
    h1: "Le système d'exploitation des entreprises de nettoyage",
    heroSubtitle:
      "TidyFlow connecte propriétaires, responsables et agents de nettoyage sur une seule plateforme — planifiez les missions récurrentes, vérifiez le travail sur site avec GPS et photos, gérez la paie à partir des heures enregistrées et envoyez des preuves aux clients.",
    navLabel: "Logiciel entreprise de nettoyage",
    problems: {
      title: "Ce qui dysfonctionne quand vous gérez une entreprise de nettoyage avec des tableurs et des groupes de discussion",
      items: [
        "Les contrats récurrents sont dans un fichier, la disponibilité des agents dans un autre, et les réclamations clients sur WhatsApp.",
        "Les responsables ne savent pas si une équipe a réellement commencé une mission ou si elle est seulement passée devant le bâtiment.",
        "Les litiges de paie commencent parce que les heures ont été saisies de mémoire au lieu d'être vérifiées sur site.",
        "Les clients demandent une preuve de travail et vous cherchez désespérément des photos noyées dans la pellicule.",
        "Les équipes terrain perdent le signal dans les sous-sols, parkings et locaux techniques — et ne peuvent plus finaliser la mission dans l'app.",
      ],
    },
    solution: {
      title: "Une plateforme unique, du planning à la preuve en passant par la paie",
      paragraphs: [
        "TidyFlow est conçu spécifiquement pour les opérations des entreprises de nettoyage — pas pour la maintenance générique. Les propriétaires ont une visibilité sur le chiffre d'affaires et le contrôle des abonnements. Les responsables construisent les plannings, assignent les agents et contrôlent les missions validées par GPS. Les agents disposent d'une liste de missions mobile simple avec checklists hors ligne, chronomètres et envoi de photos.",
        "Quand une mission est terminée, les heures alimentent les workflows de paie, les photos peuvent générer des rapports PDF clients, et les responsables conservent une piste d'audit sans courir après les messages sur cinq applications.",
      ],
    },
    features: [
      {
        title: "Planification des missions et contrats récurrents",
        description: "Calendrier, constructeur de planning et visites récurrentes par site, avec affectation tenant compte des congés.",
        benefit: "Arrêtez de reconstruire la semaine dans des tableurs chaque dimanche soir.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Logiciel de planification nettoyage",
      },
      {
        title: "Suivi terrain vérifié par GPS",
        description: "Localisation contrôlée au démarrage et à la fin ; GPS en direct pendant les missions actives sur les workflows pris en charge.",
        benefit: "Sachez quels sites ont réellement été nettoyés — pas seulement déclarés.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Suivi du temps pour agents de nettoyage",
      },
      {
        title: "Paie à partir d'heures vérifiées",
        description: "Chronomètres de mission, validation des heures travaillées et cycles de paie à partir du temps enregistré.",
        benefit: "Réduisez les litiges avec des heures liées au travail accompli.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Logiciel de paie nettoyage",
      },
      {
        title: "Opérations terrain hors ligne",
        description: "Finalisation complète des missions sans internet — checklists, chronomètre, photos en file d'attente et synchronisation ultérieure.",
        benefit: "Les agents terminent les missions dans les bâtiments à faible signal au lieu d'appeler le bureau.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Application nettoyage hors ligne",
      },
    ],
    howItWorks: {
      title: "Planifier → Assigner → Suivre → Vérifier → Rapporter",
      steps: [
        { title: "Planifier", description: "Créez des missions ponctuelles ou récurrentes depuis le web ou le mobile. Synchronisez avec Google Sheets si votre équipe conserve encore un planning maître." },
        { title: "Assigner", description: "Glissez les agents sur le planning. L'IA peut suggérer le meilleur candidat selon l'historique, la localisation et les congés — les responsables valident toujours." },
        { title: "Suivre", description: "Les agents démarrent le chronomètre sur site. La vérification GPS signale les démarrages et fins de mission loin du site." },
        { title: "Vérifier", description: "Checklists, photos avant/après et notation photo IA optionnelle fournissent aux responsables des preuves de qualité." },
        { title: "Rapporter", description: "Générez des rapports PDF de mission ou partagez un lien portail client. Les heures alimentent la paie et la facturation." },
      ],
    },
    useCases: {
      title: "Les entreprises de nettoyage qui fonctionnent avec TidyFlow",
      items: [
        { title: "Nettoyage commercial et contractuel", description: "Contrats multi-sites avec visites récurrentes, preuves clients et workflows QA responsables." },
        { title: "Équipes de conciergerie et maintenance", description: "Équipes de nuit, locaux techniques et bâtiments à signal faible — le mode hors ligne maintient le rythme." },
        { title: "PME locales en croissance", description: "Remplacez le chaos des tableurs en ajoutant des sites et des agents sans recruter d'abord un admin ops." },
        { title: "Équipes multilingues", description: "Plateforme disponible en 11 langues pour propriétaires, responsables et personnel terrain." },
      ],
    },
    faqs: [
      { q: "Qu'est-ce qu'un logiciel pour entreprise de nettoyage ?", a: "C'est un logiciel qui aide les entreprises de nettoyage à planifier les missions, gérer les agents, suivre le travail terrain, vérifier la qualité et gérer la paie ou la facturation client depuis un seul système, au lieu de tableurs et messageries." },
      { q: "TidyFlow est-il réservé aux grandes entreprises ?", a: "Non. Les forfaits commencent à 25 $/mois pour les petites équipes. Vous pouvez gérer planning, suivi terrain et preuves avec une équipe en croissance sans configuration enterprise." },
      { q: "TidyFlow fonctionne-t-il hors ligne ?", a: "Oui. Les agents peuvent compléter les checklists, lancer le chronomètre et prendre des photos hors ligne. Les données se synchronisent au retour de la connexion." },
      { q: "Puis-je continuer à utiliser Google Sheets ?", a: "Oui. TidyFlow propose une synchronisation bidirectionnelle Google Sheets pour conserver une liste maître tout en laissant l'app gérer l'exécution terrain." },
      { q: "Comment démarrer ?", a: "Lancez un essai gratuit de 14 jours depuis la page tarifs. Les propriétaires configurent les sites, invitent les agents et assignent les premières missions depuis le web ou le mobile." },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "Logiciel de gestion nettoyage | Contrôle des opérations | TidyFlow",
    seoDescription:
      "Logiciel de gestion pour entreprises de nettoyage — plannings, statut des missions en direct, congés équipe, suivi des incidents, validation paie et preuves clients dans un seul tableau de bord.",
    keywords:
      "logiciel gestion nettoyage, plateforme opérations nettoyage, système gestion conciergerie, gestion entreprise nettoyage, TidyFlow",
    eyebrow: "Logiciel de gestion nettoyage",
    h1: "Pilotez les opérations de nettoyage depuis un tableau de bord de gestion unique",
    heroSubtitle:
      "Donnez aux responsables une visibilité sur les plannings, les missions terminées, les contrôles qualité et les validations de paie — sans courir après les agents sur WhatsApp ni reconstruire les plannings dans des tableurs.",
    navLabel: "Gestion nettoyage",
    problems: {
      title: "Pourquoi les opérations de nettoyage s'effondrent à l'échelle",
      items: [
        "Le propriétaire est la seule personne à savoir quel client manque d'effectif le jeudi.",
        "Les responsables ressaisissent les mêmes missions récurrentes chaque semaine car rien n'automatise les visites contractuelles.",
        "Les réclamations qualité arrivent avant que quiconque n'examine les photos ou résultats de checklist de la mission.",
        "Les demandes de congé restent dans les messages et le planning est publié avec des conflits connus.",
        "La validation paie signifie comparer des feuilles de temps manuscrites à la mémoire.",
      ],
    },
    solution: {
      title: "Des outils de gestion connectés aux données terrain réelles",
      paragraphs: [
        "Le logiciel de gestion TidyFlow relie planification, RH équipe et exécution terrain. Les responsables voient les mises à jour de statut en temps réel, contrôlent les missions validées par GPS et approuvent les heures avant les cycles de paie.",
        "Le suivi des incidents, la notation QA et les preuves clients vivent à côté du planning — les décisions de gestion s'appuient sur les mêmes données que les agents génèrent sur site.",
      ],
    },
    features: [
      {
        title: "Constructeur de planning avec gestion des congés",
        description: "Affectation par glisser-déposer respectant congés approuvés et disponibilités.",
        benefit: "Publiez les plannings sans vérifications manuelles de conflits.",
        linkHref: "/features",
        linkLabel: "Fonctionnalités équipe et planning",
      },
      {
        title: "Statut des missions en temps réel",
        description: "Voyez quand les missions démarrent, sont en pause et se terminent sur tous les sites.",
        benefit: "Intervenez avant qu'une visite manquée ne devienne une escalade client.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Logiciel de planification",
      },
      {
        title: "Workflows QA et incidents",
        description: "Contrôles qualité responsables, journal des incidents et preuves photo sur les missions terminées.",
        benefit: "Traitez les réclamations avec des pistes d'audit par mission.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Logiciel d'inspection",
      },
      {
        title: "Tableau de bord revenus propriétaire",
        description: "Visibilité financière et insights Revenue AI sur les forfaits pris en charge.",
        benefit: "Les propriétaires voient la performance sans exporter cinq rapports.",
        linkHref: "/pricing",
        linkLabel: "Forfaits et tarifs",
      },
    ],
    howItWorks: {
      title: "Planifier → Assigner → Surveiller → Contrôler → Approuver",
      steps: [
        { title: "Planifier", description: "Construisez la semaine en vue calendrier ou planning. Les missions récurrentes génèrent automatiquement les visites contractuelles." },
        { title: "Assigner", description: "Placez les agents sur les missions. Recommandations IA optionnelles — les responsables choisissent les affectations finales." },
        { title: "Surveiller", description: "Suivez démarrages, alertes GPS et progression des checklists depuis le tableau de bord de gestion." },
        { title: "Contrôler", description: "Ouvrez les missions terminées pour photos, scores QA et brouillons de rapports clients." },
        { title: "Approuver", description: "Validez les heures travaillées et les cycles de paie à partir du temps de mission vérifié." },
      ],
    },
    useCases: {
      title: "Scénarios de gestion pris en charge par TidyFlow",
      items: [
        { title: "Responsables des opérations", description: "Dispatch quotidien, suivi qualité et coordination d'équipe sur plusieurs sites." },
        { title: "Dirigeants d'entreprise", description: "Contrôle des abonnements, vue revenus et preuve que les contrats sont bien exécutés." },
        { title: "Superviseurs multi-sites", description: "Comparez statut de complétion et incidents sur tous les sites en un seul endroit." },
        { title: "Coordinateurs franchise", description: "Workflows cohérents et accès par rôle à mesure que les équipes grandissent." },
      ],
    },
    faqs: [
      { q: "Que doit inclure un logiciel de gestion nettoyage ?", a: "Au minimum : planification, affectation d'équipe, statut terrain, suivi du temps, preuve qualité et validation paie ou heures. TidyFlow couvre tout cela sur une plateforme." },
      { q: "Les responsables peuvent-ils utiliser TidyFlow sur mobile ?", a: "Oui. Les responsables peuvent planifier, assigner et contrôler les missions depuis mobile ou web." },
      { q: "Comment fonctionne l'accès par rôle ?", a: "Propriétaires, responsables et agents voient des écrans différents. Les agents ont listes de missions et outils terrain ; les responsables ont planning, validations et rapports." },
      { q: "TidyFlow remplace-t-il mon comptable ?", a: "Non. TidyFlow gère les opérations et peut synchroniser les factures vers QuickBooks Online. Votre comptable reste responsable de la fiscalité et de la stratégie comptable." },
    ],
  },

  "janitorial-software": {
    seoTitle: "Logiciel conciergerie | Équipes de nuit et multi-sites | TidyFlow",
    seoDescription:
      "Logiciel de conciergerie pour prestataires contractuels — visites récurrentes, app terrain hors ligne, pointages GPS, checklists et preuves pour clients facility.",
    keywords:
      "logiciel conciergerie, logiciel gestion conciergerie, application planification conciergerie, logiciel conciergerie contractuelle, TidyFlow",
    eyebrow: "Logiciel conciergerie",
    h1: "Logiciel de conciergerie conçu pour le travail contractuel sur site",
    heroSubtitle:
      "Gérez des tournées de conciergerie récurrentes dans bureaux, écoles et établissements. Les agents travaillent hors ligne dans locaux techniques et sous-sols tandis que les responsables vérifient chaque visite avec GPS, checklists et photos.",
    navLabel: "Logiciel conciergerie",
    problems: {
      title: "Les contrats de conciergerie échouent quand l'app terrain échoue",
      items: [
        "Les équipes de nuit perdent le signal dans les cages d'escalier et ne peuvent pas enregistrer la complétion.",
        "Les remplaçants arrivent sans notes de site qui vivaient dans un groupe de discussion.",
        "Les facility managers demandent une preuve et vous envoyez un e-mail générique sans horodatage.",
        "Le dépassement de périmètre sur des pièces supplémentaires reste invisible jusqu'à la facturation.",
        "Plusieurs bâtiments partagent un superviseur qui ne peut pas vérifier physiquement chaque heure de début.",
      ],
    },
    solution: {
      title: "Workflows de conciergerie contractuelle dans un seul système",
      paragraphs: [
        "TidyFlow prend en charge plannings récurrents, checklists par site et complétion hors ligne — la combinaison dont les prestataires contractuels ont besoin quand chaque bâtiment a des règles d'accès et une qualité de signal différentes.",
        "Le chat par mission conserve les consignes sur la mission. La vérification GPS et les preuves photo fournissent aux clients facility des éléments probants sans charge admin supplémentaire.",
      ],
    },
    features: [
      {
        title: "Tournées de conciergerie récurrentes",
        description: "Automatisez visites hebdomadaires et mensuelles par site avec affectation d'équipe.",
        benefit: "Les plannings contractuels se régénèrent sans copier-coller manuel.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Logiciel de planification",
      },
      {
        title: "App conciergerie hors ligne",
        description: "Chronomètre, checklist et photos sans connexion ; synchronisation au retour du réseau.",
        benefit: "Les équipes de nuit terminent les missions sous terre au lieu de contourner l'app.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Logiciel nettoyage hors ligne",
      },
      {
        title: "Checklists et photos par site",
        description: "Tâches pièce par pièce avec preuves avant/après à la complétion.",
        benefit: "Documentez le périmètre pour QA et litiges clients.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspection et contrôle qualité",
      },
      {
        title: "Bouton SOS sécurité",
        description: "Alerte en un clic aux responsables pour travailleurs isolés en fin de shift.",
        benefit: "Offrez aux agents de nuit une ligne de sécurité directe depuis l'écran mission.",
        linkHref: "/features",
        linkLabel: "Fonctionnalités sécurité terrain",
      },
    ],
    howItWorks: {
      title: "Contrat → Planifier → Exécuter → Prouver → Facturer",
      steps: [
        { title: "Contrat", description: "Configurez les sites avec notes d'accès et modèles de checklist par site." },
        { title: "Planifier", description: "Créez visites récurrentes et assignez équipes fixes ou personnel rotatif." },
        { title: "Exécuter", description: "Les agents lancent la mission hors ligne ou en ligne — chronomètre, checklist, photos sur site." },
        { title: "Prouver", description: "Les responsables contrôlent complétion vérifiée GPS et preuves photo." },
        { title: "Facturer", description: "Facturez les clients à partir du travail accompli ; synchronisez vers QuickBooks sur les forfaits pris en charge." },
      ],
    },
    useCases: {
      title: "Équipes de conciergerie utilisant TidyFlow",
      items: [
        { title: "Conciergerie bureaux et entreprises", description: "Nettoyage après heures avec PDF de preuve client." },
        { title: "Éducation et bâtiments publics", description: "Sites multi-étages à signal intérieur faible — mode hors ligne inclus." },
        { title: "Conciergerie industrielle et technique", description: "Checklists pour zones restreintes et secteurs sensibles sécurité." },
        { title: "Prestataires sous-traitants", description: "Accès par rôle pour responsables clients et personnel terrain." },
      ],
    },
    faqs: [
      { q: "TidyFlow est-il un logiciel de conciergerie ou résidentiel ?", a: "TidyFlow est conçu pour le nettoyage professionnel — commercial, conciergerie et travail contractuel sont le cœur de métier." },
      { q: "Les agents peuvent-ils pointer sans signal ?", a: "Oui. L'app terrain met en file d'attente GPS et événements de mission hors ligne et synchronise au retour de la connexion." },
      { q: "Pouvons-nous partager des preuves avec les facility managers ?", a: "Oui. Rapports PDF de mission et liens portail client sécurisés partagent les preuves de complétion." },
      { q: "TidyFlow gère-t-il les shifts de nuit récurrents ?", a: "Oui. Missions récurrentes et outils de planning prennent en charge tournées de nuit fixes et équipes rotatives." },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "Logiciel nettoyage commercial | Contrats multi-sites | TidyFlow",
    seoDescription:
      "Logiciel de nettoyage commercial pour bureaux, retail et contrats facility — planification, inspections QC, preuves clients, facturation et gestion d'équipe.",
    keywords:
      "logiciel nettoyage commercial, logiciel nettoyage bureaux, plateforme nettoyage contractuel, logiciel nettoyage facility, TidyFlow",
    eyebrow: "Logiciel nettoyage commercial",
    h1: "Logiciel de nettoyage commercial pour opérations contractuelles",
    heroSubtitle:
      "Gérez des contrats commerciaux multi-sites avec plannings récurrents, checklists d'inspection, preuves photo pour clients et paie à partir d'heures terrain vérifiées.",
    navLabel: "Nettoyage commercial",
    problems: {
      title: "Les contrats commerciaux exigent plus qu'une app calendrier",
      items: [
        "Chaque site client a un périmètre, des clés et des normes d'inspection différents.",
        "Les account managers promettent la qualité mais les ops n'ont aucun registre QC central.",
        "Les bons de travail supplémentaires se perdent entre e-mail et planning hebdomadaire.",
        "Les factures partent avant que personne ne confirme que toutes les visites prévues sont terminées.",
        "Le churn client suit un grand nettoyage manqué que personne n'a documenté.",
      ],
    },
    solution: {
      title: "Workflows commerciaux de l'appel d'offres à la preuve",
      paragraphs: [
        "TidyFlow relie planification commerciale, vérification qualité et rapports clients. Les responsables appliquent la notation QA sur les missions terminées, enregistrent les incidents par site et partagent des preuves PDF brandées.",
        "Facturation et synchronisation QuickBooks sur les forfaits pris en charge alignent finance et travail contractuel accompli.",
      ],
    },
    features: [
      {
        title: "Planification multi-sites",
        description: "Calendrier et missions récurrentes sur l'ensemble du portefeuille commercial.",
        benefit: "Une vue de chaque site du contrat.",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "Planification",
      },
      {
        title: "Preuves client et rapports PDF",
        description: "Rapports téléchargeables brandés et liens portail sécurisés.",
        benefit: "Fournissez aux facility managers des preuves sans e-mails photo manuels.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Inspection et preuves",
      },
      {
        title: "Facturation client",
        description: "Facturez à partir des tâches terminées avec lignes détaillées.",
        benefit: "Facturez sur des complétions vérifiées, pas des estimations.",
        linkHref: "/integrations",
        linkLabel: "Intégration QuickBooks",
      },
      {
        title: "Suivi des incidents",
        description: "Enregistrez et résolvez les incidents sur site depuis le terrain ou le bureau.",
        benefit: "Bouclez la boucle quand un site signale un problème.",
        linkHref: "/features",
        linkLabel: "Fonctionnalités qualité",
      },
    ],
    howItWorks: {
      title: "Périmètre → Planifier → Intervenir → Inspecter → Facturer",
      steps: [
        { title: "Périmètre", description: "Définissez sites, checklists et notes d'accès par client commercial." },
        { title: "Planifier", description: "Fixez fréquence de service récurrente et assignez les équipes." },
        { title: "Intervenir", description: "Les agents terminent les missions avec chronomètre, GPS et checklist sur mobile." },
        { title: "Inspecter", description: "Les responsables contrôlent le travail accompli avec photos et workflows de notation." },
        { title: "Facturer", description: "Facturez les clients et synchronisez optionnellement vers QuickBooks Online." },
      ],
    },
    useCases: {
      title: "Cas d'usage nettoyage commercial",
      items: [
        { title: "Bureaux et espaces de coworking", description: "Service quotidien et hebdomadaire avec preuve visible par le client." },
        { title: "Chaînes retail et hôtellerie", description: "Plusieurs sites avec checklists cohérentes." },
        { title: "Portefeuilles gestion immobilière", description: "Suivez incidents et visites sur tous les bâtiments." },
        { title: "Prestataires B2B", description: "Visibilité ops pour propriétaires vendant aux facility managers." },
      ],
    },
    faqs: [
      { q: "Qu'est-ce qu'un logiciel de nettoyage commercial ?", a: "Un logiciel qui aide les entreprises B2B à planifier les sites contractuels, vérifier la prestation, gérer les équipes et facturer les clients depuis une plateforme unique." },
      { q: "Les clients peuvent-ils voir les photos de mission ?", a: "Vous contrôlez les preuves clients via rapports PDF et liens portail — pas le chat interne responsables." },
      { q: "TidyFlow prend-il en charge les contrats multi-sites ?", a: "Oui. Sites, missions récurrentes et plannings s'adaptent aux portefeuilles commerciaux multi-sites." },
      { q: "Pouvons-nous collecter des avis clients ?", a: "Oui. TidyFlow inclut la collecte d'avis clients avec routage pour retours négatifs." },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "Logiciel planification nettoyage | Missions récurrentes et plannings | TidyFlow",
    seoDescription:
      "Logiciel de planification nettoyage avec calendrier, constructeur de planning, missions récurrentes, suggestions d'affectation IA, gestion des congés et sync Google Sheets.",
    keywords:
      "logiciel planification nettoyage, logiciel dispatch nettoyage, planification ménage, application planification conciergerie, TidyFlow",
    eyebrow: "Logiciel planification nettoyage",
    h1: "Logiciel de planification nettoyage adapté aux vrais plannings",
    heroSubtitle:
      "Construisez des plannings hebdomadaires, automatisez visites récurrentes, assignez les agents en tenant compte des congés et envoyez les mises à jour instantanément à l'app terrain.",
    navLabel: "Planification",
    problems: {
      title: "La planification casse quand l'outil ignore la réalité du nettoyage",
      items: [
        "Les contrats récurrents sont ressaisis manuellement chaque mois.",
        "Les remplaçants sont assignés sans voir qui est en congé.",
        "Les agents apprennent les changements de planning par message de groupe, pas par l'app.",
        "La planification des tournées est au feeling — le temps de trajet entre sites est invisible.",
        "Le planning tableur et l'app terrain ne correspondent jamais.",
      ],
    },
    solution: {
      title: "Planification connectée à l'app terrain",
      paragraphs: [
        "La planification TidyFlow n'est pas un calendrier isolé — les affectations arrivent en temps réel sur les listes de missions mobile. Les missions récurrentes génèrent automatiquement les visites contractuelles. Le constructeur de planning respecte les congés approuvés.",
        "La sync bidirectionnelle Google Sheets permet de conserver une liste maître tableur pendant que TidyFlow exécute le dispatch. L'IA peut suggérer des affectations ; les responsables décident toujours.",
      ],
    },
    features: [
      {
        title: "Calendrier et constructeur de planning",
        description: "Vue semaine, affectation glisser-déposer, planification tenant compte des congés.",
        benefit: "Construisez le planning une fois et publiez-le sur le terrain.",
        linkHref: "/how-it-works",
        linkLabel: "Comment fonctionne la planification",
      },
      {
        title: "Missions récurrentes",
        description: "Répétitions hebdomadaires, mensuelles et personnalisées par site.",
        benefit: "Arrêtez de copier les mêmes visites à chaque cycle.",
        linkHref: "/features",
        linkLabel: "Fonctionnalités planification",
      },
      {
        title: "Recommandations IA d'agents",
        description: "Suggère le meilleur candidat selon historique, localisation et disponibilité.",
        benefit: "Dispatch plus rapide les matins chargés — le responsable valide.",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "Affectation IA",
      },
      {
        title: "Optimisation des tournées",
        description: "Réduit le temps de trajet entre sites sur les workflows pris en charge.",
        benefit: "Plus de missions par shift sans deviner les heures sup.",
        linkHref: "/integrations",
        linkLabel: "Intégration cartes",
      },
    ],
    howItWorks: {
      title: "Planifier → Assigner → Notifier → Exécuter → Ajuster",
      steps: [
        { title: "Planifier", description: "Créez des missions en vue calendrier ou importez depuis Google Sheets." },
        { title: "Assigner", description: "Glissez les agents sur les shifts ; le planning signale les conflits de congés." },
        { title: "Notifier", description: "Les affectations apparaissent instantanément sur les appareils des agents." },
        { title: "Exécuter", description: "Les équipes terrain démarrent les missions avec pointage vérifié GPS." },
        { title: "Ajuster", description: "Réassignez les missions ouvertes depuis le mobile quand quelqu'un appelle malade." },
      ],
    },
    useCases: {
      title: "Scénarios de planification",
      items: [
        { title: "Prestataires contractuels récurrents", description: "Automatisez tournées hebdomadaires fixes sur les sites clients." },
        { title: "Services résidentiels et ménage", description: "Plannings hebdomadaires variables avec réaffectation rapide." },
        { title: "Dispatch multi-équipes", description: "Plusieurs superviseurs planifiant des territoires qui se chevauchent." },
        { title: "Entreprises quittant les tableurs", description: "Sync Sheets pendant la transition du dispatch vers l'app." },
      ],
    },
    faqs: [
      { q: "TidyFlow peut-il gérer des missions récurrentes ?", a: "Oui. Les missions récurrentes automatisent les visites répétées par site avec affectation d'équipe." },
      { q: "La planification se synchronise-t-elle avec Google Sheets ?", a: "Oui. La sync bidirectionnelle aligne listes maîtres tableur et affectations app." },
      { q: "Les agents voient-ils uniquement leur propre planning ?", a: "Oui. Les agents voient la liste du jour ; les responsables voient le planning complet." },
      { q: "Y a-t-il une optimisation de tournées ?", a: "Oui. TidyFlow inclut des outils de planification de tournées avec intégration Google Maps." },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "Logiciel paie nettoyage | Heures vérifiées et feuilles de temps | TidyFlow",
    seoDescription:
      "Logiciel de paie nettoyage basé sur heures de mission vérifiées GPS, validation feuilles de temps, règles de rémunération, cycles de paie et bulletins PDF pour équipes de nettoyage.",
    keywords:
      "logiciel paie nettoyage, application paie agents nettoyage, paie conciergerie, logiciel feuilles de temps nettoyage, TidyFlow",
    eyebrow: "Logiciel paie nettoyage",
    h1: "Logiciel de paie nettoyage à partir d'heures de mission vérifiées",
    heroSubtitle:
      "Générez la paie à partir de chronomètres de mission et heures travaillées approuvées — pas de feuilles manuscrites. La vérification GPS réduit les litiges et offre aux responsables une piste d'audit.",
    navLabel: "Paie",
    problems: {
      title: "Les litiges de paie commencent avec des heures non vérifiées",
      items: [
        "Les agents arrondissent le temps car les feuilles papier sont faciles à gonfler.",
        "Les responsables ne peuvent pas lier une ligne de bulletin à une mission précise terminée.",
        "Les surprises d'heures sup apparaissent car les missions extra n'étaient pas enregistrées centralement.",
        "Les taux salariés vs prestataires vivent dans des carnets différents.",
        "La finance ressaisit les heures en compta après que les ops ont déjà validé autre chose.",
      ],
    },
    solution: {
      title: "Paie liée au travail terrain accompli",
      paragraphs: [
        "TidyFlow enregistre les heures depuis le chronomètre sur site. La vérification GPS signale démarrages et fins loin du site. Les responsables approuvent les heures travaillées avant les cycles de paie.",
        "Règles de rémunération, factures de paie et sync QuickBooks paie sur les forfaits pris en charge alignent ops et finance.",
      ],
    },
    features: [
      {
        title: "Chronomètre et feuilles de temps",
        description: "Démarrer, pause, reprendre, soumettre — heures attachées à chaque mission.",
        benefit: "Chaque heure est liée à une visite sur site.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Suivi du temps",
      },
      {
        title: "Présence vérifiée GPS",
        description: "Localisation contrôlée au pointage et à la fin de mission.",
        benefit: "Contester les litiges avec preuve de localisation.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Vérification GPS",
      },
      {
        title: "Règles de paie et cycles",
        description: "Taux par utilisateur et génération de paie à partir d'heures approuvées.",
        benefit: "Un flux de validation avant envoi des bulletins.",
        linkHref: "/features",
        linkLabel: "Fonctionnalités paie",
      },
      {
        title: "Factures paie QuickBooks",
        description: "Synchronisez la paie approuvée vers QuickBooks sur les forfaits pris en charge.",
        benefit: "La compta reçoit les totaux validés par les ops.",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "Sync QuickBooks",
      },
    ],
    howItWorks: {
      title: "Planifier → Suivre heures → Vérifier → Approuver → Payer",
      steps: [
        { title: "Planifier", description: "Assignez les missions pour que les heures prévues soient visibles avant le shift." },
        { title: "Suivre", description: "Les agents lancent le chronomètre sur site ; le GPS valide la localisation." },
        { title: "Vérifier", description: "Les responsables contrôlent pointages signalés et checklists incomplètes." },
        { title: "Approuver", description: "Validez heures travaillées et ajustements." },
        { title: "Payer", description: "Lancez la paie et exportez factures PDF ou sync vers QuickBooks." },
      ],
    },
    useCases: {
      title: "Scénarios paie",
      items: [
        { title: "Équipes horaires", description: "Paie à partir du temps de mission vérifié au lieu de bons papier." },
        { title: "Salariés et prestataires mixtes", description: "Règles de paie par utilisateur avec factures PDF." },
        { title: "Équipes sujettes aux litiges", description: "GPS et historique mission pour chaque ligne de bulletin." },
        { title: "Propriétaires faisant la paie le soir", description: "Validation groupée depuis le tableau de bord de gestion." },
      ],
    },
    faqs: [
      { q: "TidyFlow peut-il suivre les heures des agents ?", a: "Oui. Les chronomètres de mission enregistrent les heures par tâche. Les agents peuvent aussi soumettre des heures travaillées pour validation responsable." },
      { q: "Le GPS prouve-t-il que les agents étaient sur site ?", a: "La vérification GPS contrôle la localisation au démarrage et à la fin. Les responsables reçoivent des alertes pour pointages hors site." },
      { q: "Puis-je exporter la paie vers QuickBooks ?", a: "Sur les forfaits pris en charge, la paie approuvée peut se synchroniser en factures vers QuickBooks Online." },
      { q: "TidyFlow remplace-t-il un prestataire paie RH complet ?", a: "TidyFlow génère la paie à partir d'heures opérationnelles vérifiées. Déclarations fiscales et conformité RH complète restent du ressort de votre comptable." },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "Logiciel inspection nettoyage | Checklists et preuves photo | TidyFlow",
    seoDescription:
      "Logiciel d'inspection nettoyage avec checklists par pièce, photos avant/après, notation QA, rapports PDF clients et suivi des incidents pour vérification qualité.",
    keywords:
      "logiciel inspection nettoyage, logiciel contrôle qualité nettoyage, application checklist nettoyage, logiciel inspection conciergerie, TidyFlow",
    eyebrow: "Logiciel inspection nettoyage",
    h1: "Logiciel d'inspection nettoyage avec checklist et preuves photo",
    heroSubtitle:
      "Réalisez des inspections pièce par pièce, capturez photos avant/après, notez la qualité avec workflows QA responsables et partagez des preuves brandées avec les clients.",
    navLabel: "Inspections",
    problems: {
      title: "Problèmes qualité quand les inspections vivent en dehors de la mission",
      items: [
        "Les checklists sont des PDF papier cochés sans ouverture sur site.",
        "Les photos avant/après restent dans la pellicule personnelle — pas liées au site.",
        "Les responsables inspectent au hasard au lieu de suivre un workflow de notation.",
        "Les clients contestent la qualité mais vous n'avez pas de dossier probant horodaté.",
        "Les incidents trouvés sur site sont oubliés avant d'être enregistrés.",
      ],
    },
    solution: {
      title: "Inspections exécutées et stockées sur la fiche mission",
      paragraphs: [
        "Les checklists TidyFlow s'exécutent sur l'app mobile agent — des règles optionnelles peuvent exiger la checklist avant le chronomètre. Les photos s'envoient sur site, y compris hors ligne avec sync ultérieure.",
        "Les responsables utilisent les workflows de notation QA pour contrôler les complétions. L'analyse photo IA peut signaler des problèmes qualité sur les forfaits pris en charge. Rapports PDF et liens portail client emballent les preuves pour clients facility.",
      ],
    },
    features: [
      {
        title: "Checklists pièce par pièce",
        description: "Modèles de checklist par site avec éléments obligatoires.",
        benefit: "Standardisez le périmètre à chaque visite.",
        linkHref: "/features",
        linkLabel: "Fonctionnalités checklist",
      },
      {
        title: "Photos avant/après",
        description: "Capturez les preuves sur la mission ; fonctionne hors ligne.",
        benefit: "Les photos restent attachées à la visite, pas à la pellicule.",
        linkHref: "/offline-cleaning-software",
        linkLabel: "Photos hors ligne",
      },
      {
        title: "Workflow notation QA",
        description: "Contrôle responsable et scores qualité sur missions terminées.",
        benefit: "Transformez les contrôles ponctuels en processus reproductible.",
        linkHref: "/how-it-works",
        linkLabel: "Workflow qualité",
      },
      {
        title: "Rapports PDF clients",
        description: "Rapports de mission brandés et liens de partage sécurisés.",
        benefit: "Envoyez des preuves sans reconstruire des slides manuellement.",
        linkHref: "/documentation",
        linkLabel: "Documentation rapports",
      },
    ],
    howItWorks: {
      title: "Créer checklist → Inspecter → Capturer preuves → Contrôler → Partager",
      steps: [
        { title: "Créer", description: "Construisez modèles de checklist par site client ou type de service." },
        { title: "Inspecter", description: "Les agents complètent les éléments sur mobile pendant la mission." },
        { title: "Capturer", description: "Ajoutez photos avant/après ; capture hors ligne synchronisée ensuite." },
        { title: "Contrôler", description: "Les responsables notent les complétions QA et enregistrent les incidents." },
        { title: "Partager", description: "Exportez PDF ou envoyez lien portail client avec preuves." },
      ],
    },
    useCases: {
      title: "Cas d'usage inspection",
      items: [
        { title: "Programmes QC commercial", description: "Notation standardisée sur un portefeuille client." },
        { title: "États des lieux et grands nettoyages", description: "Dossiers photo avant/après pour propriétaires." },
        { title: "Normes qualité franchise", description: "Checklists cohérentes sur tous les sites." },
        { title: "Demandes d'audit client", description: "Historique mission horodaté quand les facilities demandent une preuve." },
      ],
    },
    faqs: [
      { q: "Les agents peuvent-ils compléter les checklists hors ligne ?", a: "Oui. Checklists et photos fonctionnent hors ligne et se synchronisent au retour de la connexion." },
      { q: "TidyFlow utilise-t-il l'IA pour la qualité photo ?", a: "Sur les forfaits pris en charge, l'analyse photo IA peut noter les photos de nettoyage. Les responsables prennent toujours la décision QA finale." },
      { q: "Les clients peuvent-ils accéder aux rapports d'inspection ?", a: "Oui. Rapports PDF de mission et liens portail sécurisés partagent les preuves de complétion avec les clients." },
      { q: "Puis-je exiger la checklist avant le pointage ?", a: "Oui. Des règles optionnelles peuvent exiger des étapes checklist avant de démarrer le chronomètre." },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "Logiciel suivi temps nettoyage | Pointage GPS | TidyFlow",
    seoDescription:
      "Logiciel de suivi du temps nettoyage avec chronomètres sur site, vérification GPS, géorepérage, suivi en direct pendant missions actives et heures pour la paie.",
    keywords:
      "logiciel suivi temps nettoyage, suivi temps conciergerie, application pointage agents nettoyage, suivi GPS nettoyage, TidyFlow",
    eyebrow: "Suivi du temps",
    h1: "Logiciel de suivi du temps nettoyage avec vérification GPS",
    heroSubtitle:
      "Pointez les agents sur site avec chronomètres de mission, vérification GPS et géorepérage — les heures enregistrées reflètent de vraies visites, pas des estimations.",
    navLabel: "Suivi du temps",
    problems: {
      title: "Le suivi du temps échoue quand les pointages sont faciles à falsifier",
      items: [
        "Les agents démarrent le chronomètre depuis le parking de l'autre côté de la rue.",
        "Les responsables n'ont pas de vue en direct de qui est activement en mission.",
        "Le pointage par procuration existe car n'importe qui peut envoyer « je suis là ».",
        "Les heures d'un site client se mélangent au temps de trajet.",
        "Les bâtiments à faible signal forcent les agents à ignorer le chronomètre.",
      ],
    },
    solution: {
      title: "Suivi du temps intégré à la mission de nettoyage",
      paragraphs: [
        "Le suivi TidyFlow est par tâche — démarrer, pause, reprendre, soumettre sur l'écran mission. La vérification GPS compare le pointage à la localisation du site. Les responsables peuvent voir le GPS en direct pendant les missions actives.",
        "Le mode hors ligne met en file d'attente chronomètre et événements GPS quand le signal chute, puis synchronise — les nettoyages en sous-sol produisent quand même des heures vérifiables.",
      ],
    },
    features: [
      {
        title: "Chronomètre sur site",
        description: "Flux simple démarrer/pause/soumettre sur l'app agent.",
        benefit: "Les heures s'attachent au site, pas à un shift générique.",
        linkHref: "/features",
        linkLabel: "App terrain",
      },
      {
        title: "GPS et géorepérage",
        description: "Vérifie la localisation au démarrage/fin ; intégration cartes pour les sites.",
        benefit: "Signalez les pointages loin du bâtiment.",
        linkHref: "/integrations",
        linkLabel: "Cartes et géorepérage",
      },
      {
        title: "File d'attente GPS hors ligne",
        description: "Met en file les événements de localisation sans signal ; sync ultérieure.",
        benefit: "Suivez le temps dans locaux techniques et parkings souterrains.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS hors ligne",
      },
      {
        title: "Heures prêtes pour la paie",
        description: "Les heures approuvées alimentent les cycles de paie.",
        benefit: "Bouclez du pointage au bulletin.",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "Logiciel paie",
      },
    ],
    howItWorks: {
      title: "Assigner → Arriver → Pointer → Travailler → Soumettre heures",
      steps: [
        { title: "Assigner", description: "L'agent reçoit les missions du jour sur mobile." },
        { title: "Arriver", description: "Le GPS confirme la proximité du géorepérage du site." },
        { title: "Pointer", description: "Démarrez le chronomètre sur la mission — checklist optionnelle en amont." },
        { title: "Travailler", description: "Pause/reprise si besoin ; GPS en direct pendant missions actives." },
        { title: "Soumettre", description: "Terminez la mission ; les heures attendent validation responsable pour la paie." },
      ],
    },
    useCases: {
      title: "Scénarios suivi du temps",
      items: [
        { title: "Conciergerie commercial", description: "Vérifiez présence des shifts de nuit sur tous les sites." },
        { title: "Équipes résidentielles", description: "Chronomètres par domicile pour agents horaires." },
        { title: "Missions multi-agents", description: "Chaque assigné enregistre son temps sur la même tâche." },
        { title: "Sites faible connectivité", description: "La file hors ligne préserve heures et GPS." },
      ],
    },
    faqs: [
      { q: "TidyFlow peut-il suivre les heures automatiquement ?", a: "Oui. Le chronomètre de mission enregistre les heures au démarrage et à la soumission. Le GPS ajoute la vérification de localisation." },
      { q: "Que se passe-t-il si le GPS est indisponible ?", a: "Les événements se mettent en file hors ligne et se synchronisent au retour du signal. Les responsables voient toujours la fiche de complétion." },
      { q: "Le GPS en direct est-il toujours actif ?", a: "Le suivi GPS en direct s'applique pendant les missions actives sur les workflows pris en charge — pas une surveillance 24h/24." },
      { q: "Les responsables peuvent-ils modifier les heures ?", a: "Les responsables approuvent ou ajustent les heures travaillées via le workflow de validation avant la paie." },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "Logiciel nettoyage hors ligne | App terrain sans signal | TidyFlow",
    seoDescription:
      "Logiciel nettoyage hors ligne pour équipes en sous-sols, parkings et bâtiments à faible signal — checklists, chronomètre, photos et file GPS avec sync automatique.",
    keywords:
      "logiciel nettoyage hors ligne, application nettoyage hors ligne, app nettoyage sans internet, application conciergerie hors ligne, TidyFlow",
    eyebrow: "Logiciel nettoyage hors ligne",
    h1: "Logiciel de nettoyage hors ligne pour les vraies conditions terrain",
    heroSubtitle:
      "Les agents terminent les missions sans internet — checklists, chronomètre, photos et événements GPS s'enregistrent localement et se synchronisent automatiquement au retour de la connexion.",
    navLabel: "Nettoyage hors ligne",
    problems: {
      title: "Les apps terrain échouent là où le nettoyage se fait vraiment",
      items: [
        "Sous-sols et locaux techniques bloquent la data mobile — les agents contournent l'app.",
        "Les photos attendent le parking puis se mélangent entre missions.",
        "Les chronomètres s'arrêtent car l'app exige une connexion constante.",
        "Les responsables supposent « pas de sync » = « pas venu ».",
        "Les concurrents promettent hors ligne mais ne mettent en cache que la liste, pas la complétion.",
      ],
    },
    solution: {
      title: "Complétion complète hors ligne — pas un simple cache lecture seule",
      paragraphs: [
        "Le mode hors ligne TidyFlow prend en charge les workflows nécessaires sur site : chronomètre, checklists, photos et file d'événements GPS. Au retour de la connexion, les données se synchronisent vers le tableau de bord de gestion.",
        "Conçu pour sites conciergerie et commercial où la perte de signal est normale — pas un cas marginal.",
      ],
    },
    features: [
      {
        title: "Checklists hors ligne",
        description: "Complétez les tâches par pièce sans connexion.",
        benefit: "Les inspections se terminent sous terre, pas dans le parking.",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "Logiciel inspection",
      },
      {
        title: "Chronomètre hors ligne",
        description: "Suivez les heures sur site ; synchronisez les horodatages ensuite.",
        benefit: "La paie reçoit le vrai temps de mission, pas des estimations.",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "Suivi du temps",
      },
      {
        title: "Capture photo hors ligne",
        description: "Photos avant/après stockées localement jusqu'à l'envoi.",
        benefit: "Les preuves restent liées à la bonne mission.",
        linkHref: "/features",
        linkLabel: "Preuves photo",
      },
      {
        title: "File GPS hors ligne",
        description: "Événements de localisation en file sans signal ; sync au retour.",
        benefit: "Vérifiez la présence même après avoir quitté une zone sans réseau.",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "Fonctionnalité GPS hors ligne",
      },
    ],
    howItWorks: {
      title: "Charger missions → Travailler hors ligne → Mettre en file → Reconnecter → Sync",
      steps: [
        { title: "Charger", description: "Les missions assignées se téléchargent sur l'appareil en ligne." },
        { title: "Travailler hors ligne", description: "Chronomètre, checklist et photos fonctionnent sans internet." },
        { title: "Mettre en file", description: "GPS et événements de complétion stockés localement." },
        { title: "Reconnecter", description: "Le téléphone retrouve le signal en quittant le bâtiment ou le parking." },
        { title: "Sync", description: "Les responsables voient mission terminée, photos et heures dans le tableau de bord." },
      ],
    },
    useCases: {
      title: "Scénarios hors ligne",
      items: [
        { title: "Conciergerie sous-sols et locaux techniques", description: "Terminez les missions sans signal intérieur." },
        { title: "Nettoyage parkings souterrains", description: "Le GPS se met en file jusqu'à la sortie du garage." },
        { title: "Sites ruraux ou industriels", description: "Couverture intermittente ne bloque plus la conformité terrain." },
        { title: "Équipes internationales", description: "Même comportement hors ligne dans les 11 langues prises en charge." },
      ],
    },
    faqs: [
      { q: "TidyFlow peut-il fonctionner sans connexion internet ?", a: "Oui. Les agents peuvent lancer chronomètres, checklists et photos hors ligne. Les données se synchronisent au retour de la connexion." },
      { q: "Que se synchronise après reconnexion ?", a: "Statut de complétion, photos, heures chronomètre, événements GPS en file et réponses checklist se synchronisent vers le serveur." },
      { q: "Les agents doivent-ils synchroniser manuellement ?", a: "La sync s'exécute automatiquement à la reconnexion — pas d'étape d'envoi séparée." },
      { q: "Le hors ligne est-il disponible sur tous les forfaits ?", a: "Les opérations terrain hors ligne sont une capacité centrale TidyFlow. Certaines fonctionnalités IA et intégrations avancées varient selon le forfait — voir Tarifs." },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "Logiciel entreprise de nettoyage | Piloter et développer les ops | TidyFlow",
    seoDescription:
      "Logiciel pour entreprises de nettoyage passant de solo à multi-équipes — planification, facturation, paie, preuves clients et insights Revenue AI.",
    keywords:
      "logiciel entreprise nettoyage, application petite entreprise nettoyage, logiciel croissance entreprise nettoyage, logiciel startup nettoyage, TidyFlow",
    eyebrow: "Logiciel entreprise de nettoyage",
    h1: "Logiciel d'entreprise de nettoyage qui évolue avec votre société",
    heroSubtitle:
      "Commencez par planification et preuves terrain, puis ajoutez paie, facturation client et tableaux de bord propriétaire en grandissant — une plateforme au lieu d'assembler des outils.",
    navLabel: "Entreprise de nettoyage",
    problems: {
      title: "Les petites entreprises de nettoyage dépassent vite leurs premiers outils",
      items: [
        "Vous commencez avec une app calendrier, puis ajoutez paie, puis dossiers photo — rien ne se connecte.",
        "Gagner plus de contrats signifie plus d'heures admin, pas plus de marge.",
        "Vous ne savez pas quels clients sont rentables sans exporter des tableurs.",
        "Recruter votre premier responsable duplique le travail faute de système ops partagé.",
        "Les essais facturent au siège d'une manière qui pénalise les équipes en croissance.",
      ],
    },
    solution: {
      title: "Développez les ops sur une plateforme unique",
      paragraphs: [
        "Les forfaits TidyFlow vont des startups aux grandes équipes avec limites de sites selon usage. Les propriétaires gèrent abonnement et facturation in-app. Planification, preuves terrain, paie et facturation client coexistent.",
        "Revenue AI sur les forfaits pris en charge met en avant risques et opportunités sur le tableau de bord propriétaire — les décisions de croissance s'appuient sur des données opérationnelles, pas l'intuition.",
      ],
    },
    features: [
      {
        title: "Forfaits dès 25 $/mois",
        description: "Forfait Startup pour petites équipes ; upgrade au fil de la croissance sites et agents.",
        benefit: "Démarrez sans contrats enterprise.",
        linkHref: "/pricing",
        linkLabel: "Voir les tarifs",
      },
      {
        title: "Facturation self-service",
        description: "Essai, upgrade et gestion d'abonnement dans l'app.",
        benefit: "Les propriétaires maîtrisent les coûts sans appeler les ventes.",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "Fonctionnalités facturation",
      },
      {
        title: "Facturation client et QuickBooks",
        description: "Facturez depuis les missions ; sync vers QuickBooks Online.",
        benefit: "La finance reste alignée en ajoutant des clients.",
        linkHref: "/integrations",
        linkLabel: "Intégrations",
      },
      {
        title: "Tableau de bord Revenue AI",
        description: "Insights propriétaire sur les forfaits pris en charge.",
        benefit: "Identifiez tôt les contrats à surveiller.",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "Démarrer → Opérer → Prouver → Facturer → Grandir",
      steps: [
        { title: "Démarrer", description: "Essai 14 jours — configurez sites et invitez vos premiers agents." },
        { title: "Opérer", description: "Planifiez missions et exécutez le terrain avec GPS et photos." },
        { title: "Prouver", description: "Envoyez des preuves clients en gagnant des contrats plus importants." },
        { title: "Facturer", description: "Facturez clients et lancez la paie à partir d'heures vérifiées." },
        { title: "Grandir", description: "Augmentez limites de forfait et utilisez tableaux de bord propriétaire pour décider." },
      ],
    },
    useCases: {
      title: "Étapes de développement",
      items: [
        { title: "Indépendant passant multi-agents", description: "Remplacez agendas personnels par planification partagée." },
        { title: "Entreprise locale gagnant des appels d'offres", description: "Preuves client et QC pour contrats facility." },
        { title: "Marque régionale de nettoyage", description: "Limites multi-sites, rôles et intégrations." },
        { title: "Dirigeant cumulant tous les rôles", description: "Une connexion pour planning, paie et facturation." },
      ],
    },
    faqs: [
      { q: "Qu'est-ce qu'un logiciel d'entreprise de nettoyage ?", a: "Un logiciel qui aide les dirigeants à gérer planification, équipes, travail terrain, facturation client et paie — en remplaçant généralement les tableurs en grandissant." },
      { q: "Combien coûte TidyFlow ?", a: "Les forfaits commencent à 25 $/mois pour Startup. Standard et Premium ajoutent plus de sites, agents et fonctionnalités comme sync Google Sheets et QuickBooks." },
      { q: "Y a-t-il un essai gratuit ?", a: "Oui. Tous les forfaits incluent un essai gratuit de 14 jours avec inscription self-service." },
      { q: "Puis-je upgrader en grandissant ?", a: "Oui. Changez de forfait in-app quand limites sites et équipe augmentent." },
    ],
  },
};
