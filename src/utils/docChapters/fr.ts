import type { ChapterTranslation } from "../docTranslations";

export const frChapters: Record<string, ChapterTranslation> = {
  "ch-1": {
    title: "Qu'est-ce que TidyFlow ?",
    category: "Overview",
    content: "TidyFlow est une plateforme d'opérations unifiée conçue sur mesure pour les entreprises modernes de gestion d'installations et de nettoyage résidentiel/commercial. Il agit comme le moteur central qui coordonne les activités entre les propriétaires d'entreprises, les gestionnaires opérationnels à distance et les agents de nettoyage sur le terrain. En remplaçant les outils fragmentés et hors ligne comme les listes de contrôle papier, les fils WhatsApp non structurés et les feuilles de paie séparées, TidyFlow consolide la planification, la vérification de localisation, la génération de factures clients et l'analyse du personnel dans une seule plateforme de base de données sécurisée et compatible hors ligne."
  },
  "ch-2": {
    title: "Premiers pas",
    category: "Overview",
    content: "Pour lancer les opérations, les administrateurs d'entreprise peuvent s'inscrire sur un portail TidyFlow, établissant ainsi leur dossier commercial. Lors de la première installation, le personnel rencontre une visite interactive d'intégration expliquant les modules principaux. Une fois activé, les propriétaires sont guidés pour configurer des profils de paiement sécurisés via Stripe. De là, les propriétaires peuvent inviter le personnel en accédant aux Utilisateurs dans la barre latérale, en saisissant les noms des travailleurs, leurs e-mails et leurs catégories de rôles (Gestionnaires ou Agents de nettoyage) pour envoyer immédiatement les identifiants de connexion."
  },
  "ch-3": {
    title: "Comprendre votre rôle",
    category: "Overview",
    content: "TidyFlow applique des contrôles d'accès stricts basés sur les rôles pour garantir l'isolement des données. Les Propriétaires/Administrateurs supervisent les plans d'abonnement, les formats de devise, les paramètres de facturation client, les liens Google Sheets maîtres et les rapports financiers à l'échelle de l'entreprise. Les Gestionnaires se concentrent sur la planification des plannings de quarts, la résolution des journaux de problèmes de propriété et la validation des feuilles de temps soumises. Les Agents de nettoyage opèrent dans une disposition mobile simplifiée conçue uniquement pour enregistrer les heures, accomplir les tâches pièce par pièce, télécharger des photos avant/après et émettre des alarmes SOS."
  },
  "ch-4": {
    title: "Naviguer dans l'application",
    category: "Overview",
    content: "Le menu de la barre latérale gauche forme la boussole de navigation. Cliquer sur le bouton menu (☰) fait glisser les routes vers : Accueil (tableau de bord personnalisé par rôle), Tâches (listes de calendrier catégorisées), Calendrier, Propriétés, Constructeur de Planning, Utilisateurs (registre du personnel), Demandes de congé, Paie, Factures clients, Fournitures et Préférences. Les utilisateurs mobiles peuvent également déclencher des visites d'intégration personnalisées depuis n'importe quel écran via le raccourci Aide et Visite dans le pied de page du menu."
  },
  "ch-5": {
    title: "Google Sheets — connexion et synchronisation",
    category: "Core Features",
    content: "Connectez votre feuille de calcul d'entreprise pour activer la synchronisation bidirectionnelle. Étape 1 : Ouvrez Propriétés, puis Synchronisation Google Sheets. Étape 2 : Collez l'URL de votre feuille de calcul. Étape 3 : Copiez notre e-mail de compte de service unique (par exemple sync@project.iam.gserviceaccount.com) et partagez les autorisations d'édition avec lui dans Google Sheets. Étape 4 : Cliquez sur Synchroniser maintenant. Le système lit les onglets 'Properties' et 'Tasks', synchronisant les modifications instantanément en temps réel. Toutes les affectations d'agents de nettoyage, les achèvements de statut et les heures de chronologie se synchronisent de manière bidirectionnelle dans les lignes de votre feuille maîtresse."
  },
  "ch-6": {
    title: "Propriétés",
    category: "Core Features",
    content: "Le registre des Propriétés est la fondation structurelle de TidyFlow. Situé dans Barre latérale → Propriétés, il abrite un catalogue de toutes les adresses de service, codes postaux, dispositions de propriété (appartements, résidentiel, commercial), nombre d'unités et tarifs de service par défaut. Cliquer sur n'importe quelle propriété liste les affectations de tâches historiques, les modèles récurrents actifs, les points de coordonnées de localisation cartographique et les raccourcis directs pour initier de nouveaux plannings de tâches ponctuelles."
  },
  "ch-7": {
    title: "Tâches",
    category: "Core Features",
    content: "Les tâches représentent des sessions de travail individuelles et facturables. Les gestionnaires créent des tâches en sélectionnant une Propriété, en assignant des dates/heures planifiées, en décrivant les descriptions et en sélectionnant les agents de nettoyage assignés. Des listes de contrôle détaillées peuvent être compilées manuellement ou peuplées en utilisant des modèles suggérés par l'IA. Le cycle de vie de la tâche progresse séquentiellement : Planifié → Assigné → En cours (agent actif) → Soumis (travail terminé) → Approuvé (gestionnaire vérifié) → Terminé (facturé)."
  },
  "ch-8": {
    title: "Guide pour les agents de nettoyage",
    category: "Role Guides",
    content: "Les agents de nettoyage accèdent à TidyFlow sur smartphones, accueillis par un planning quotidien rationalisé et focalisé. Les agents cliquent sur une tâche assignée pour inspecter les jalons de liste de contrôle, accéder aux notes et démarrer leur chronomètre de travail. Les agents cliquent sur 'Démarrer la session de suivi' pour enregistrer les horodatages de pointage, exécuter les listes de contrôle de pièce, prendre des photos de preuve 'Avant' et 'Après', et cliquer sur 'Soumettre le travail' pour envoyer les détails immédiatement pour approbation du gestionnaire."
  },
  "ch-9": {
    title: "Guide pour les gestionnaires",
    category: "Role Guides",
    content: "Les gestionnaires se connectent à un tableau de bord de navigateur dédié ou une application coordinateur mobile. L'écran d'accueil met en évidence les tâches non assignées d'aujourd'hui, les feuilles de temps en attente et les problèmes de propriété ouverts. Les gestionnaires peuvent rapidement inspecter les tâches soumises, examiner les photographies avant/après téléchargées, comparer les journaux de liste de contrôle, et approuver ou rejeter les sessions pour acheminer automatiquement les heures dans les périodes de paie actives."
  },
  "ch-10": {
    title: "Guide pour les propriétaires",
    category: "Role Guides",
    content: "Les propriétaires ont une autorité maîtresse sur les comptes d'entreprise. Lors de la connexion, les propriétaires accèdent aux configurations de facturation, gèrent les abonnements Stripe actifs, personnalisent les dispositions de marque d'entreprise (intégrations de logo, détails bancaires et en-têtes de reçu), et auditent les journaux multi-utilisateurs. Les propriétaires peuvent également accéder aux interfaces d'analyse suivant les revenus à l'échelle de l'entreprise, les sièges de personnel actifs et les insights opérationnels alimentés par l'IA."
  },
  "ch-11": {
    title: "Planning et planification",
    category: "Core Features",
    content: "La planification est coordonnée dans Barre latérale → Constructeur de Planning. Il présente une disposition de grille mappant les propriétés contre les agents de nettoyage pour la semaine. Les répartiteurs glissent, déposent et tapent les créneaux pour assigner le personnel. TidyFlow vérifie automatiquement les verrous de vacances, empêchant les gestionnaires de planifier accidentellement des agents de nettoyage en congé. Le système de planification analyse également les coordonnées cartographiques pour calculer et suggérer des optimisations de route, réduisant les dépenses de voyage du personnel."
  },
  "ch-12": {
    title: "Travaux récurrents",
    category: "Core Features",
    content: "Évitez de planifier manuellement les nettoyages récurrents. À l'intérieur de n'importe quelle fenêtre de Propriété, les gestionnaires peuvent établir des horaires de nettoyage récurrents (par exemple, nettoyages commerciaux hebdomadaires ou appartements mensuels). Les paramètres de planning permettent de définir des périodes de récurrence personnalisées, des jours de semaine et des dates de fin. Une fois sauvegardé, TidyFlow planifie et envoie automatiquement les tâches chaque fois qu'une date de récurrence devient due, assurant une couverture constante du calendrier."
  },
  "ch-13": {
    title: "Photos, PDFs et preuves client",
    category: "Core Features",
    content: "Documentez la propreté visuellement pour protéger votre entreprise. Les agents de nettoyage téléchargent des photos d'arrivée et de départ géo-taguées. Les gestionnaires peuvent examiner ces images sous les tâches 'Soumises' et cliquer sur Télécharger pour compiler instantanément des rapports de feuille de temps PDF en marque blanche. Alternativement, les gestionnaires peuvent générer des portails clients sécurisés et partageables où les clients inspectent directement les listes de contrôle d'achèvement et les images, contournant les pièces jointes d'e-mail."
  },
  "ch-14": {
    title: "Paie et heures",
    category: "Core Features",
    content: "Simplifiez les calculs de paie. Quand les agents de nettoyage soumettent des chronomètres actifs, les heures atterrissent dans Paie → Heures en attente. Les gestionnaires examinent les temps écoulés totaux, font des ajustements si nécessaire, et cliquent sur Approuver. Une fois approuvé, le système compile les listes de salaires basées sur les taux horaires personnalisés par utilisateur, les paramètres d'heures supplémentaires, ou les profils de taux fixes. Les propriétaires peuvent générer des périodes de paie et exporter des bulletins de paie comme PDFs imprimables."
  },
  "ch-15": {
    title: "Factures clients",
    category: "Core Features",
    content: "Facturez les clients pour les nettoyages terminés directement. Situé dans Barre latérale → Factures clients, les gestionnaires peuvent sélectionner des tâches approuvées non facturées pour auto-générer des factures clients. Les modules financiers tirent les tarifs de service de propriété par défaut ou les budgets de tâches personnalisées, les compilant dans des modèles d'entreprise. Les gestionnaires peuvent marquer les factures comme envoyées, en attente ou payées, synchronisant le suivi financier à travers la plateforme."
  },
  "ch-16": {
    title: "Demandes de congé",
    category: "Core Features",
    content: "Les agents de nettoyage soumettent des demandes de congé maladie et de vacances dans Barre latérale → Congé. L'écran enregistre les dates de vacances et descriptions, envoyant des notifications aux coordinateurs. Les gestionnaires approuvent ou rejettent les listes de congé sous Planning/Congé. Une fois approuvé, TidyFlow verrouille ces dates sur la grille de planning, empêchant les coordinateurs de planifier l'agent de nettoyage en congé et évitant les erreurs de planning."
  },
  "ch-17": {
    title: "Problèmes et sécurité (SOS)",
    category: "Core Features",
    content: "La sécurité des travailleurs de terrain est primordiale. Les agents de nettoyage ont accès à un bouton de panique SOS d'urgence rouge vif permanent sur l'écran de tâche active. Appuyer sur le bouton SOS télécharge instantanément les verrous de coordonnées vers les serveurs d'opérations et déclenche des notifications clignotantes de haute priorité sur tous les tableaux de bord des gestionnaires, enregistrant l'incident avec une chronologie de répartition de sécurité en temps réel."
  },
  "ch-18": {
    title: "Fournitures",
    category: "Advanced",
    content: "Gardez les fournitures entièrement stockées en utilisant notre traqueur d'inventaire intégré (Barre latérale → Fournitures). Les gestionnaires enregistrent l'équipement de nettoyage, les liquides et les outils, définissant les limites de réapprovisionnement. Pendant les nettoyages, les agents de nettoyage peuvent enregistrer les matériaux utilisés (par exemple, essuie-tout, sacs poubelles) sur la carte de tâche. Si les niveaux de stock glissent en dessous des marges de sécurité, les avertissements automatiques de tableau de bord notifient les gestionnaires de réapprovisionner."
  },
  "ch-19": {
    title: "TidyFlow IA",
    category: "Advanced",
    content: "Optimisez les décisions commerciales en utilisant des suggestions de modèle IA privées côté serveur (Gemini). Les capacités IA assistent les gestionnaires pendant la répartition en suggérant le personnel le mieux adapté basé sur la localisation, la disponibilité et les évaluations passées. De plus, les modèles IA scannent les photos de départ téléchargées pour scorer les évaluations de qualité, signalant les préoccupations sur le tableau de bord gestionnaire pour vérification sans bloquer le flux de travail de l'agent de nettoyage."
  },
  "ch-20": {
    title: "Mode hors ligne",
    category: "Advanced",
    content: "Les travailleurs de terrain opèrent fréquemment dans des sous-sols ou des quartiers à faible signal. TidyFlow est conçu hors ligne d'abord. Les agents de nettoyage peuvent cocher les listes de contrôle, démarrer ou interrompre les chronomètres, enregistrer les notes de problèmes de propriété, et capturer des photos avant/après tout en étant complètement hors ligne. L'application met en file d'attente les changements de données localement et se synchronise automatiquement avec les serveurs d'opérations une fois que le signal est restauré."
  },
  "ch-21": {
    title: "Paramètres et autorisations",
    category: "Advanced",
    content: "Configurez les notifications individuelles, les services de localisation et les préférences de synchronisation de cache dans Barre latérale → Paramètres. Les agents de nettoyage doivent activer les autorisations de localisation en arrière-plan pour enregistrer les horodatages de pointage, et activer l'accès caméra/photo pour documenter les conditions de nettoyage. Les propriétaires configurent la devise par défaut (par exemple £ GBP, $ USD, € EUR) et personnalisent les modèles de marque PDF."
  },
  "ch-22": {
    title: "Statuts des tâches expliqués",
    category: "Advanced",
    content: "TidyFlow guide les tâches à travers un pipeline structuré : Planifié (créé mais pas de personnel assigné), Assigné (personnel alloué, en attente de date), En cours (agent de nettoyage actif, chronomètre comptant), Soumis (travail terminé, en attente de QA), Révision QA (sous révision de qualité), Approuvé (vérifié par gestionnaire, prêt à facturer), Terminé (entièrement payé), Rejeté (renvoyé pour refaire), et Archivé (supprimé)."
  },
  "ch-23": {
    title: "Dépannage et FAQ",
    category: "Support",
    content: "Si les données Google Sheets échouent à se synchroniser, vérifiez que vous avez partagé l'accès d'édition avec l'e-mail de compte de service, et assurez-vous que les titres d'onglets sont exactement 'Properties' et 'Tasks'. Si le suivi de localisation en arrière-plan échoue, vérifiez l'accès de localisation dans les Paramètres de l'appareil. Si les photos se mettent en file d'attente sans télécharger, confirmez l'accès internet. Pour une assistance supplémentaire, cliquez sur 'Aide et Visite' dans la barre latérale."
  }
};