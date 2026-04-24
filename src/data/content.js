export const PROJECTS = [
  {
    id: "cetelem",
    title: "Cetelem",
    subtitle: "Réponse à appel d'offre",
    year: "2026",
    tag: "Concept product design",
    tasks: ["UI", "Figma", "Prototypage", "Concept"],
  },
  {
    id: "apec",
    title: "Apec",
    subtitle: "Progiciel Product Design",
    year: "2023 – 2025",
    tag: "Product design SI métier",
    tasks: ["Design system", "User Research", "Prototypage", "UI Kit", "Figma"],
  },
  {
    id: "autossimo",
    title: "Autossimo",
    subtitle: "B2B Product Design",
    year: "2022",
    tag: "Product design e-shop B2B",
    tasks: ["Discovery", "UX", "UI", "User Research", "UI Kit", "Figma"],
  },
  {
    id: "npc",
    title: "NPC Pérou",
    subtitle: "UI/UX & Développement CMS",
    year: "2021",
    tag: "Refonte UI/UX & dev CMS",
    tasks: ["UX", "UI", "Dev", "CMS"],
  },
  {
    id: "cerfal",
    title: "CFA Cerfal",
    subtitle: "UI/UX Design",
    year: "2020",
    tag: "Refonte UI/UX",
    tasks: ["Wireframe", "UX", "UI", "Mobile first"],
  },
  {
    id: "globedreamers",
    title: "Globedreamers",
    subtitle: "UI/UX Design",
    year: "2019 – 2021",
    tag: "Accompagnement UI/UX",
    tasks: ["User Research", "UX", "UI", "Mobile first"],
  },
];

export const EXPERIENCES = [
  {
    period: "2022 – 2025",
    role: "Product Designer",
    type: "Consultant",
    items: [
      "Apec — Product Design progiciel",
      "Autossimo — Product Design B2B",
    ],
  },
  {
    period: "2021",
    role: "Bénévole",
    type: "Bénévolat & design",
    items: [
      "NPC Pérou — UI/UX & Développement CMS",
      "IPBio Brazil — Collecte de données scientifiques & graphisme",
      "Rancho Galapagos — Graphisme",
    ],
  },
  {
    period: "2019 – 2021",
    role: "Designer UI/UX",
    type: "Freelance",
    items: ["Globedreamers — UI/UX", "CFA Cerfal — UI/UX"],
  },
  {
    period: "2017 – 2019",
    role: "Web Designer",
    type: "Alternance",
    items: ["Visiodent — Graphisme, marketing & web design"],
  },
  {
    period: "2016 – 2017",
    role: "Graphiste",
    type: "CDD / Alternance",
    items: ["Signarama — Signalétique", "Auchan — Graphisme & signalétique"],
  },
];

export const PROJECT_DETAILS = {
  cetelem: {
    client: "Cetelem",
    role: "Product Designer",
    duration: "2 semaines",
    tools: ["Figma", "Prototypage", "UI Design"],
    context:
      "Dans le cadre d'une réponse à appel d'offre, l'enjeu était de projeter une vision produit à l'horizon 2030 — repenser Cetelem non plus comme un simple outil de crédit, mais comme un assistant du quotidien capable d'accompagner l'utilisateur dans tous ses projets de vie. Budgétiser rapidement une idée, suivre l'avancement de ses projets, être guidé dans ses choix financiers : autant d'usages à rendre désirables dans un concept à la fois légèrement premium et accessible au plus grand nombre, avec des éléments de gamification pour rendre l'expérience plus engageante. L'ensemble du concept a été conçu et prototypé en 2 semaines.",
    challenges: [
      "Projeter une vision produit crédible à l'horizon 2030 dans un temps contraint",
      "Repositionner la marque : premium sans exclure, accessible sans être générique",
      "Intégrer des éléments de gamification dans un contexte financier sérieux",
      "Faire coexister assistant IA, budgétisation rapide et suivi de projets dans une interface cohérente",
    ],
    objectives: [
      "Positionner Cetelem comme l'assistant de tous les projets de vie à l'horizon 2030",
      "Concevoir une expérience premium et accessible, loin des codes austères du secteur bancaire",
      "Intégrer des mécaniques ludiques pour engager l'utilisateur dans la gestion de ses projets",
      "Raconter la vision à travers un prototype suffisamment abouti pour convaincre en soutenance",
    ],
    methodology: [
      {
        phase: "01",
        title: "Cadrage du concept",
        description:
          "Reformulation de la vision à l'horizon 2030, définition du positionnement 'assistant de vie' et identification des parcours structurants.",
      },
      {
        phase: "02",
        title: "Direction UI",
        description:
          "Exploration d'une direction premium accessible — ni luxe élitiste, ni interface bancaire classique. Travail sur les codes visuels, la gamification et le ton général.",
      },
      {
        phase: "03",
        title: "Prototypage",
        description:
          "Mise en forme des parcours clés dans Figma : création d'un projet, budgétisation assistée par IA, suivi et consultation des projets en cours.",
      },
      {
        phase: "04",
        title: "Support de soutenance",
        description:
          "Assemblage des écrans et transitions pour construire un récit fluide autour de la vision 2030 lors de la présentation de l'offre.",
      },
    ],
    modules: [
      {
        title: "Vision produit 2030",
        description:
          "Un repositionnement fort : Cetelem devient l'assistant de tous vos projets de vie. Chaque idée peut être budgétisée, suivie et concrétisée depuis une seule interface.",
        features: ["Assistant de vie", "Horizon 2030", "Vision de service"],
      },
      {
        title: "Parcours clés",
        description:
          "Les parcours structurants du concept — création et budgétisation d'un projet, assistance IA pour affiner les estimations, suivi de l'avancement avec des éléments de gamification.",
        features: ["Création de projet", "Budgétisation assistée", "Suivi & gamification"],
      },
      {
        title: "Prototype de démonstration",
        description:
          "Prototype Figma interactif construit pour rendre la vision tangible en soutenance — de l'écran d'accueil au parcours IA en passant par le flow de création de projet.",
        features: ["Prototype interactif", "Flow complet", "Soutien à la démo"],
      },
    ],
    deliverables: [
      "Concept UI formalisé dans Figma — vision produit à l'horizon 2030",
      "Direction visuelle premium et accessible avec éléments de gamification",
      "Parcours clés maquettés : création de projet, budgétisation IA, suivi",
      "Prototype de démonstration pour la soutenance de l'appel d'offre",
    ],
    impact: [
      "Vision 2030 rendue tangible et convaincante dès la phase d'avant-vente",
      "Repositionnement de Cetelem comme assistant du quotidien, au-delà du crédit",
      "Différenciation par la gamification et un ton premium accessible",
      "Base réutilisable pour approfondir le concept en phase projet",
    ],
    images: {
      cover: "/cetelem/card.png",
      coverWidth: "46%",
      context: ["/cetelem/parcours-compresse.png"],
      methodology: ["/cetelem/ecrans-test.png"],
      modules: [
        ["/cetelem/parcours-compresse.png"],
        ["/cetelem/parcours-assiste.png", "/cetelem/ecrans-projet.png"],
        ["/cetelem/prototype.png", "/cetelem/conv-ia-screens.png"],
      ],
      moduleLayouts: ["single", "grid", "grid"],
    },
  },

  apec: {
    client: "APEC",
    role: "Product Designer",
    duration: "2 ans",
    tools: ["Figma", "Design Tokens", "Atomic Design", "Variables"],
    context:
      "L'APEC avait besoin d'un écosystème produit complet au sein d'un progiciel interne « Production de Service » (PDS) pour remplacer un CRM Salesforce en fin de vie. À mon arrivée, j'ai repris et assimilé rapidement le travail de discovery et d'empathie initié par un autre UX designer, avant de prendre en charge la conception des interfaces et d'accompagner leur livraison jusqu'en phase de développement.",
    challenges: [
      "Reprise rapide d'une phase de discovery engagée par un autre designer",
      "Espace Figma vide — aucune UI library ni guidelines",
      "Absence de pratiques UX structurées dans l'équipe",
      "Besoin de livraisons rapides tout en posant des bases durables",
    ],
    objectives: [
      "Livrer des maquettes utilisables rapidement pour débloquer la production",
      "Créer une UI library scalable basée sur l'Atomic Design",
      "Mettre en place une démarche de Design Thinking sur les modules clés",
      "Structurer une culture design pérenne au sein de l'équipe",
    ],
    methodology: [
      {
        phase: "01",
        title: "Diagnostic & cadrage",
        description:
          "Reprise et assimilation de la phase de discovery existante, audit des écrans, alignement parties prenantes et priorisation des livrables.",
      },
      {
        phase: "02",
        title: "UI Library",
        description:
          "Composants Atomic Design — atomes, molécules, organismes — avec variables et documentation.",
      },
      {
        phase: "03",
        title: "Co-conception",
        description:
          "Ateliers de co-conception avec les Chefs de Projet Métier et les collaborateurs APEC. Les choix d'interface et d'expérience ont été guidés par les règles métier et les usages réels des équipes. Prototypage itératif sur les modules prioritaires.",
      },
      {
        phase: "04",
        title: "Livraison & recette",
        description:
          "Suivi actif de la livraison pendant la phase de développement, avec recette graphique et UX complète sur chaque module. Documentation des guidelines et culture design.",
      },
    ],
    modules: [
      {
        title: "Agenda",
        description:
          "Module le plus complexe du progiciel, directement conditionné par de lourdes règles métier : types de rendez-vous multiples, contraintes de planification, gestion des fuseaux horaires et logiques de partage spécifiques aux usages APEC. Chaque choix d'expérience a été arbitré en atelier avec les métiers pour coller aux réalités opérationnelles des conseillers.",
        features: ["Création & partage de RDV", "Association de documents", "Gestion des fuseaux horaires"],
      },
      {
        title: "Demandes",
        description:
          "Système de création de tickets pour les demandes clients avec tri, listes et workflow d'affectation aux managers.",
        features: ["Création de tickets", "Tri et filtres avancés", "Affectation manager"],
      },
      {
        title: "Relation Client",
        description:
          "Suivi des échanges clients intégrant nativement les communications Outlook et Teams au sein du progiciel.",
        features: ["Intégration Outlook", "Intégration Teams", "Historique unifié"],
      },
      {
        title: "Proposition Active",
        description:
          "Système de matching conseillers/candidats pour les recommandations offre-candidat avec suivi de statuts.",
        features: ["Matching candidat-offre", "Suivi de statuts", "Recommandations"],
      },
      {
        title: "Éditeur de Compétences",
        description:
          "Outil d'analyse des tendances du marché du travail avec recherche avancée et capacités d'export.",
        features: ["Analyse des tendances", "Recherche avancée", "Export de données"],
      },
    ],
    deliverables: [
      "UI Library Atomic Design avec états des composants et documentation complète",
      "Système de variables dynamiques pour les modes clair et sombre",
      "Design system garantissant la cohérence inter-modules",
      "Interfaces desktop & mobile sur 5 modules métier",
    ],
    impact: [
      "Écosystème design structuré pour l'ensemble de la plateforme PDS",
      "Cohérence visuelle et fonctionnelle améliorée sur tous les modules",
      "Recette graphique et UX menée sur l'ensemble des modules livrés",
      "Fondations solides pour une culture design long terme",
    ],
    images: {
      cover: "/apec/apec-cover.png",
      context: [
        "/apec/ui-atoms-molecules.png",
        "/apec/ui-input-states.png",
        "/apec/ui-variables.png",
      ],
      methodology: [
        "/apec/ux-cas-nominal.png",
        "/apec/ux-cas-marginaux.png",
        "/apec/ux-prototype-flow.png",
      ],
      modules: [
        ["/apec/agenda-5days-dark.png", "/apec/agenda-desktop-overview.png", "/apec/agenda-rdv-popup.png", "/apec/agenda-calendar-views.png", "/apec/agenda-mobile.png"],
        ["/apec/demandes-list.png", "/apec/demandes-detail.png"],
        ["/apec/rc-fiche-cadre.png", "/apec/rc-outlook.png"],
        ["/apec/pa-list.png", "/apec/pa-creation.png"],
        ["/apec/edc-search.png", "/apec/edc-results.png"],
      ],
      moduleLayouts: [null, "grid", "grid", "grid", "grid"],
    },
  },

  autossimo: {
    client: "Autossimo",
    role: "Product Designer",
    duration: "6 mois",
    tools: ["Figma", "Atomic Design", "User Research", "Design System"],
    context:
      "Autossimo est l'un des leaders français de la vente de pièces automobiles à destination des professionnels. Leur plateforme, en ligne depuis plus de 20 ans, a vu s'accumuler de nombreuses fonctionnalités au fil du temps, rendant la navigation complexe et peu intuitive.",
    challenges: [
      "Plateforme vieillissante avec une navigation complexe et peu intuitive",
      "Hétérogénéité graphique importante et règles design inexistantes",
      "Multiplicité de parcours et de logiques de navigation superposées",
      "Besoin de réconcilier plusieurs profils d'utilisateurs (petits / grands garages)",
    ],
    objectives: [
      "Analyser en profondeur la plateforme existante et ses irritants",
      "Identifier les points de friction via une étude utilisateur terrain",
      "Prioriser les parcours à refondre selon leur impact business",
      "Poser les fondations d'un design system unifié et évolutif",
    ],
    methodology: [
      {
        phase: "01",
        title: "Benchmark concurrentiel",
        description:
          "Analyse approfondie des plateformes concurrentes (Oscaro Pro, Mister Auto Pro, Partslink) selon trois critères : modernité visuelle, intuitivité de navigation et richesse fonctionnelle.",
      },
      {
        phase: "02",
        title: "Audit de l'interface",
        description:
          "Audit complet couvrant l'identification des parcours prioritaires, l'inventaire des composants UI et l'évaluation de la cohérence visuelle. Analyse Lighthouse pour la performance technique.",
      },
      {
        phase: "03",
        title: "Shadowing & Interviews",
        description:
          "Sessions de shadowing et d'entretiens auprès de garages de différentes tailles. Les observations ont mis en évidence une prédominance des usages sur mobiles et tablettes — les techniciens se déplaçant constamment entre les véhicules et les postes de travail. Ces insights ont orienté directement les choix de conception. Création de User Journeys et Personae représentatifs des usages réels.",
      },
      {
        phase: "04",
        title: "Refonte & Design System",
        description:
          "Conception des nouveaux parcours en privilégiant les formats mobiles et tablettes. Introduction d'un bandeau d'identification du véhicule persistant, pensé pour répondre aux changements fréquents de véhicules dans les garages. Initiation d'un design system modulable selon l'Atomic Design.",
      },
    ],
    modules: [
      {
        title: "Sélection véhicule",
        description:
          "Pré-sélection du véhicule dès l'entrée dans le tunnel, avec un bandeau d'identification persistant affichant les caractéristiques du véhicule en cours. Ce choix découle directement des observations terrain : dans les garages, les véhicules changent constamment — le technicien doit toujours savoir sur quel véhicule il travaille, même en navigant dans le catalogue.",
        features: ["Bandeau véhicule persistant", "Pré-sélection rapide", "Adapté aux changements fréquents"],
      },
      {
        title: "Vue catalogue",
        description:
          "Catalogue repensé mettant en avant la disponibilité en temps réel, les délais de livraison et la compatibilité des pièces pour accélérer la décision d'achat.",
        features: ["Disponibilité temps réel", "Délais de livraison", "Filtres avancés"],
      },
      {
        title: "Fiche produit",
        description:
          "Fiche enrichie clarifiant la compatibilité des pièces, proposant des alternatives compatibles et affichant les informations techniques essentielles pour les professionnels.",
        features: ["Compatibilité clarifiée", "Alternatives proposées", "Infos techniques"],
      },
      {
        title: "Vue éclatée moteur",
        description:
          "Navigation visuelle et intuitive dans la vue éclatée du moteur pour identifier et sélectionner rapidement les pièces par zone d'intervention.",
        features: ["Navigation visuelle", "Sélection par zone", "Identification rapide"],
      },
    ],
    deliverables: [
      "Rapport de benchmark concurrentiel avec grille d'analyse",
      "Audit complet de la plateforme existante (UX + technique)",
      "User Journeys et Personae issus des sessions terrain",
      "Maquettes des nouveaux parcours et design system initié",
    ],
    impact: [
      "Problèmes d'expérience utilisateur objectivés via approche data + terrain",
      "Parcours prioritaires identifiés et classés par impact business",
      "Fondations d'un design system unifié posées",
      "Dynamique UX centrée sur les usages réels des professionnels de l'automobile",
    ],
    images: {
      cover: "/autossimo/cover.png",
      context: ["/autossimo/context-devices.png"],
      methodology: [
        "/autossimo/method-benchmark.png",
        "/autossimo/method-persona.png",
      ],
      modules: [
        ["/autossimo/vehicle-selection-desk.png", "/autossimo/vehicle-selection-connected.png"],
        ["/autossimo/catalogue-list.png", "/autossimo/catalogue-responsive.png"],
        ["/autossimo/product-desk.png", "/autossimo/product-responsive.png"],
        ["/autossimo/exploded-view.png", "/autossimo/exploded-mobile.png"],
      ],
      moduleLayouts: ["grid", "grid", "grid", "grid"],
      phases: [
        ["/autossimo/phase-benchmark-1.png", "/autossimo/phase-benchmark-2.png"],
        ["/autossimo/phase-audit-1.png", "/autossimo/phase-audit-2.png"],
        ["/autossimo/phase-shadowing-journey.png", "/autossimo/phase-shadowing-persona.png"],
        [],
      ],
    },
  },

  npc: {
    client: "Neotropical Primate Conservation",
    role: "UX/UI Designer & Développeur CMS",
    duration: "8 mois",
    tools: ["Figma", "WordPress", "UI Kit", "Adobe XD"],
    context:
      "Neotropical Primate Conservation (NPC) est une ONG à but non lucratif œuvrant pour la préservation des forêts tropicales d'Amérique du Sud. Son site web obsolète ne reflétait plus l'envergure de ses missions ni sa présence internationale.",
    challenges: [
      "Site web obsolète ne reflétant plus l'image de l'organisation",
      "Absence d'expérience multilingue adaptée à un public international",
      "Contenu difficile à maintenir sans compétences techniques",
      "Besoin de valoriser plusieurs pôles d'activité distincts",
    ],
    objectives: [
      "Clarifier et renforcer la présence digitale via le site web et les réseaux sociaux",
      "Repenser la structure pour mieux valoriser toutes les actions de l'ONG",
      "Créer une expérience fluide, accessible et multilingue",
      "Offrir à l'équipe un outil simple à maintenir de façon autonome",
    ],
    methodology: [
      {
        phase: "01",
        title: "Analyse des besoins",
        description:
          "Recueil des besoins explicites et implicites via échanges directs avec l'équipe NPC. Identification des publics cibles et des contenus prioritaires à valoriser.",
      },
      {
        phase: "02",
        title: "UX & Architecture",
        description:
          "Refonte complète de l'architecture de l'information et des parcours utilisateurs. Création d'un UI Kit sur mesure en cohérence avec la mission environnementale de l'ONG.",
      },
      {
        phase: "03",
        title: "Développement CMS",
        description:
          "Intégration complète sous WordPress avec structure CMS personnalisée. Tests d'accessibilité, de performance et de compatibilité mobile/desktop avant mise en ligne.",
      },
      {
        phase: "04",
        title: "Formation & autonomie",
        description:
          "Création d'un guide utilisateur et formation de l'équipe NPC à la gestion du CMS pour permettre une administration autonome et durable du site.",
      },
    ],
    modules: [
      {
        title: "Accueil & Impact",
        description:
          "Page d'accueil repensée pour valoriser immédiatement l'impact de l'ONG, ses projets phares et ses appels à l'action pour dons et bénévolat.",
        features: ["Impact mis en avant", "Projets phares", "Appels à l'action"],
      },
      {
        title: "Projets & Programmes",
        description:
          "Section dédiée aux différents programmes de conservation, reforestation et recherche, avec fiches détaillées par projet et zone géographique.",
        features: ["Fiches projets", "Filtres géographiques", "Suivi des avancées"],
      },
      {
        title: "Site multilingue",
        description:
          "Expérience bilingue anglais/espagnol pour toucher un public international et faciliter les partenariats avec des organisations du monde entier.",
        features: ["Anglais & espagnol", "Navigation cohérente", "Contenu adapté"],
      },
    ],
    deliverables: [
      "Prototype interactif et UI Kit sur mesure",
      "Site WordPress complet en anglais et espagnol",
      "Nouvelle identité visuelle et direction artistique",
      "Documentation et tutoriel d'administration du CMS",
    ],
    impact: [
      "Visibilité internationale renforcée et image professionnelle consolidée",
      "Missions de l'ONG mieux comprises par le grand public et les partenaires",
      "Gestion du contenu facilitée grâce à un CMS structuré et accessible",
      "Base solide pour une communication digitale cohérente et durable",
    ],
    images: {
      cover: "/npc/cover.png",
      context: ["/npc/context-logo-countries.png"],
      methodology: ["/npc/visual-guide.png", "/npc/brand-logo.png", "/npc/brand-colors.png"],
      modules: [
        ["/npc/homepage.png"],
        ["/npc/projects-pages.png"],
        ["/npc/multilingual-es-desktop.png", "/npc/multilingual-es-mobile.png"],
      ],
      moduleLayouts: [null, null, "grid"],
    },
  },

  cerfal: {
    client: "CFA Cerfal",
    role: "UX/UI Designer",
    duration: "6 mois",
    tools: ["Adobe XD", "UI Kit", "Prototypage", "Wireframes"],
    context:
      "Le CFA CERFAL est un réseau de centres de formation par apprentissage en Île-de-France et dans toute la France. Son site historique, devenu obsolète, ne reflétait plus l'image moderne attendue d'une organisation de cette envergure et ne facilitait pas les prises de contact avec ses différents publics.",
    challenges: [
      "Site obsolète ne reflétant plus l'image et l'efficacité digitale attendues",
      "Parcours utilisateurs non différenciés selon les profils (étudiants, parents, entreprises)",
      "Structure de l'information complexe et difficile à naviguer",
      "Besoin de moderniser l'identité visuelle tout en restant accessible à un public jeune",
    ],
    objectives: [
      "Repenser entièrement l'expérience utilisateur pour trois profils distincts",
      "Moderniser l'interface et renforcer l'attractivité du réseau CERFAL",
      "Simplifier la structure de l'information et les prises de contact",
      "Préparer une base solide pour le développement du futur site institutionnel",
    ],
    methodology: [
      {
        phase: "01",
        title: "Research & Analysis",
        description:
          "Étude des besoins internes du CFA et benchmark concurrentiel sur les principaux sites d'organismes de formation pour identifier les meilleures pratiques UX/UI.",
      },
      {
        phase: "02",
        title: "UX Design",
        description:
          "Définition de trois parcours clés : étudiant cherchant une formation, parent accompagnant un projet d'orientation, et entreprise souhaitant devenir partenaire.",
      },
      {
        phase: "03",
        title: "UI Design",
        description:
          "Création d'une V1 graphique avec univers illustré pour renforcer la proximité avec un public jeune. Refonte de l'UI Kit (couleurs, typographie, composants, pictogrammes).",
      },
      {
        phase: "04",
        title: "Iteration & Optimisation",
        description:
          "Version V2 avec optimisation des visuels pour les temps de chargement. Ajustement des maquettes et prototypes selon les retours de l'équipe projet.",
      },
    ],
    modules: [
      {
        title: "Parcours Étudiant",
        description:
          "Expérience centrée sur la découverte des formations, la comparaison des options et la facilitation des démarches d'inscription pour les futurs apprentis.",
        features: ["Recherche de formations", "Comparaison des cursus", "Démarches d'inscription"],
      },
      {
        title: "Parcours Parent",
        description:
          "Espace dédié aux parents accompagnant un projet d'orientation, avec informations claires sur l'apprentissage, les débouchés et les démarches administratives.",
        features: ["Guide de l'apprentissage", "Débouchés professionnels", "FAQ parents"],
      },
      {
        title: "Parcours Entreprise",
        description:
          "Portail entreprises simplifiant les démarches pour devenir partenaire CFA, avec informations sur les avantages fiscaux et le processus de recrutement en alternance.",
        features: ["Devenir partenaire", "Avantages fiscaux", "Recrutement alternance"],
      },
    ],
    deliverables: [
      "Prototype fonctionnel développé sous Adobe XD",
      "UI Kit mis à jour pour intégration future",
      "Visuels retouchés et optimisés pour le web",
      "Documentation UX/UI pour suivi et continuité du projet",
    ],
    impact: [
      "Nouvelle identité visuelle plus moderne et engageante pour le réseau CERFAL",
      "Parcours utilisateurs clarifiés par profil (étudiants, parents, entreprises)",
      "Base solide posée pour le développement du futur site institutionnel",
      "Expérience utilisateur optimisée pour faciliter les prises de contact",
    ],
    images: {
      cover: "/cerfal/cover.png",
      context: ["/cerfal/context-homepage.png"],
      methodology: ["/cerfal/method-desktop.png", "/cerfal/method-mobile.png"],
      modules: [
        ["/cerfal/etudiant-guide.png", "/cerfal/etudiant-recherche.png"],
        ["/cerfal/parent-fiche-formation.png", "/cerfal/parent-fiche-site.png"],
        ["/cerfal/entreprise-guide.png", "/cerfal/entreprise-sites-map.png"],
      ],
      moduleLayouts: ["grid", "grid", "grid"],
    },
  },

  globedreamers: {
    client: "Globedreamers",
    role: "UX/UI Designer",
    duration: "2 ans",
    tools: ["Adobe XD", "Design System", "Prototypage", "UI Kit"],
    context:
      "Globedreamers est une plateforme de financement participatif dédiée aux projets de voyages responsables et porteurs de sens. Sa mission est de créer une communauté engagée autour de valeurs communes et de fédérer des entreprises partenaires souhaitant soutenir des initiatives à impact positif.",
    challenges: [
      "Expérience utilisateur fragmentée entre découverte, contribution et engagement",
      "Absence d'un design system unifié pour garantir cohérence et évolutivité",
      "Identité visuelle ne reflétant pas les valeurs de durabilité et d'impact positif",
      "Besoin d'adresser à la fois les voyageurs-porteurs de projets et les entreprises partenaires",
    ],
    objectives: [
      "Refondre les sections clés de la plateforme pour fluidifier la navigation",
      "Créer un design system et une identité visuelle cohérente avec les valeurs de la marque",
      "Améliorer l'engagement et la conversion sur les parcours donation et contribution",
      "Poser les bases d'une évolution produit cohérente et scalable",
    ],
    methodology: [
      {
        phase: "01",
        title: "Cadrage & recherche",
        description:
          "Entretiens avec les parties prenantes pour aligner la vision produit. Analyse concurrentielle des principales plateformes de crowdfunding et de leurs modèles d'engagement.",
      },
      {
        phase: "02",
        title: "UX & Architecture",
        description:
          "Réorganisation de l'architecture de l'information pour fluidifier la navigation entre découverte, contribution et engagement. Refonte des 6 sections principales.",
      },
      {
        phase: "03",
        title: "UI & Identité visuelle",
        description:
          "Refonte de l'UI Kit et mise en place d'un design system unifié. Création d'un univers graphique illustré, positif et inspirant, en phase avec les valeurs de durabilité.",
      },
      {
        phase: "04",
        title: "Tests & itérations",
        description:
          "Prototypage itératif haute fidélité sur Adobe XD. Tests utilisateurs pour valider les hypothèses de conception. Améliorations continues selon les retours.",
      },
    ],
    modules: [
      {
        title: "Accueil & Projets",
        description:
          "Refonte de la page d'accueil et de la section projets pour mettre en valeur les initiatives responsables et faciliter la découverte des voyages à soutenir.",
        features: ["Mise en valeur des projets", "Filtres par thématique", "Impact mis en avant"],
      },
      {
        title: "Dons & Contribution",
        description:
          "Parcours de don optimisé pour maximiser la conversion, avec affichage clair de l'impact de chaque contribution et options de suivi du projet soutenu.",
        features: ["Parcours de don simplifié", "Impact de la contribution", "Suivi du projet"],
      },
      {
        title: "Espace Entreprises",
        description:
          "Section dédiée aux entreprises partenaires avec présentation des offres de sponsoring, des avantages RSE et des modalités de soutien aux projets.",
        features: ["Offres partenariat", "Avantages RSE", "Modalités de soutien"],
      },
      {
        title: "E-learning & Communauté",
        description:
          "Espace communautaire et d'apprentissage pour partager des connaissances sur les voyages responsables et renforcer l'engagement de la communauté.",
        features: ["Contenus éducatifs", "Partage communautaire", "Engagement durable"],
      },
    ],
    deliverables: [
      "Prototype interactif complet du site (Adobe XD)",
      "Fichiers vectoriels et composants UI réutilisables",
      "Charte graphique et guide d'identité visuelle",
      "Kit social media et templates pour les réseaux sociaux",
    ],
    impact: [
      "Positionnement renforcé en tant que plateforme de référence pour les voyages responsables",
      "Expérience utilisateur plus claire et intuitive favorisant l'engagement et la conversion",
      "Design system et identité visuelle posant les bases d'une évolution produit cohérente",
      "Communication digitale unifiée sur tous les supports numériques",
    ],
    images: {
      cover: "/globedreamers/cover.png",
      context: ["/globedreamers/context.png"],
      methodology: ["/globedreamers/method-brand-1.png", "/globedreamers/method-brand-2.png"],
      modules: [
        ["/globedreamers/accueil-multidevice.png", "/globedreamers/accueil-screens.png"],
        ["/globedreamers/dons-payment.png", "/globedreamers/dons-flows.png"],
        ["/globedreamers/entreprises-screens.png"],
        ["/globedreamers/communaute-mobile.png"],
      ],
      moduleLayouts: ["grid", "grid", null, null],
    },
  },
};

export const SKILLS = [
  "UI",
  "UX",
  "Concept",
  "Discovery",
  "User Research",
  "Design system",
  "UI Kit",
  "Figma",
  "Prototypage",
  "Mobile first",
];

export const SKILLS_EN = [
  "UI",
  "UX",
  "Concept",
  "Discovery",
  "User Research",
  "Design system",
  "UI Kit",
  "Figma",
  "Prototyping",
  "Mobile first",
];

/* ─── English versions ───────────────────────────────────────── */

export const PROJECTS_EN = [
  {
    id: "cetelem",
    title: "Cetelem",
    subtitle: "Tender response concept",
    year: "2026",
    tag: "Concept product design",
    tasks: ["UI", "Figma", "Prototyping", "Concept"],
  },
  {
    id: "apec",
    title: "Apec",
    subtitle: "Enterprise Software Design",
    year: "2023 – 2025",
    tag: "Enterprise software product design",
    tasks: ["Design system", "User Research", "Prototyping", "UI Kit", "Figma"],
  },
  {
    id: "autossimo",
    title: "Autossimo",
    subtitle: "B2B Product Design",
    year: "2022",
    tag: "B2B e-shop product design",
    tasks: ["Discovery", "UX", "UI", "User Research", "UI Kit", "Figma"],
  },
  {
    id: "npc",
    title: "NPC Peru",
    subtitle: "UI/UX & CMS Development",
    year: "2021",
    tag: "UI/UX redesign & CMS dev",
    tasks: ["UX", "UI", "Dev", "CMS"],
  },
  {
    id: "cerfal",
    title: "CFA Cerfal",
    subtitle: "UI/UX Design",
    year: "2020",
    tag: "UI/UX Redesign",
    tasks: ["Wireframe", "UX", "UI", "Mobile first"],
  },
  {
    id: "globedreamers",
    title: "Globedreamers",
    subtitle: "UI/UX Design",
    year: "2019 – 2021",
    tag: "UI/UX Support",
    tasks: ["User Research", "UX", "UI", "Mobile first"],
  },
];

export const EXPERIENCES_EN = [
  {
    period: "2022 – 2025",
    role: "Product Designer",
    type: "Consultant",
    items: [
      "Apec — Enterprise software product design",
      "Autossimo — B2B product design",
    ],
  },
  {
    period: "2021",
    role: "Volunteer",
    type: "Volunteering & design",
    items: [
      "NPC Peru — UI/UX & CMS Development",
      "IPBio Brazil — Scientific data collection & graphic design",
      "Rancho Galapagos — Graphic design",
    ],
  },
  {
    period: "2019 – 2021",
    role: "UI/UX Designer",
    type: "Freelance",
    items: ["Globedreamers — UI/UX", "CFA Cerfal — UI/UX"],
  },
  {
    period: "2017 – 2019",
    role: "Web Designer",
    type: "Apprenticeship",
    items: ["Visiodent — Graphic design, marketing & web design"],
  },
  {
    period: "2016 – 2017",
    role: "Graphic Designer",
    type: "Fixed-term / Apprenticeship",
    items: ["Signarama — Signage", "Auchan — Graphic design & signage"],
  },
];

export const PROJECT_DETAILS_EN = {
  cetelem: {
    client: "Cetelem",
    role: "Product Designer",
    duration: "2 weeks",
    tools: ["Figma", "Prototyping", "UI Design"],
    context:
      "As part of a tender response, the challenge was to project a product vision for the 2030 horizon — reimagining Cetelem not as a simple credit tool, but as an everyday assistant supporting users across all their life projects. Quickly budgeting an idea, tracking project progress, being guided through financial choices: all use cases to be made desirable within a concept that is both slightly premium and accessible to the widest possible audience, with gamification elements to make the experience more engaging. The entire concept was designed and prototyped in 2 weeks.",
    challenges: [
      "Project a credible product vision for the 2030 horizon within tight timeframes",
      "Reposition the brand: premium without excluding, accessible without being generic",
      "Integrate gamification elements into a serious financial context",
      "Make AI assistance, quick budgeting and project tracking coexist in a coherent interface",
    ],
    objectives: [
      "Position Cetelem as the assistant for all life projects at the 2030 horizon",
      "Design a premium yet accessible experience, far from the austere codes of banking",
      "Integrate playful mechanics to engage users in managing their projects",
      "Tell the vision through a prototype refined enough to convince at pitch stage",
    ],
    methodology: [
      {
        phase: "01",
        title: "Concept framing",
        description:
          "Reframing the vision for the 2030 horizon, defining the 'life assistant' positioning and identifying the core flows.",
      },
      {
        phase: "02",
        title: "UI direction",
        description:
          "Exploring an accessible premium direction — neither elitist luxury nor classic banking interface. Working on visual codes, gamification and overall tone.",
      },
      {
        phase: "03",
        title: "Prototyping",
        description:
          "Structuring the key flows in Figma: project creation, AI-assisted budgeting, project tracking and follow-up.",
      },
      {
        phase: "04",
        title: "Pitch support",
        description:
          "Assembling screens and transitions into a smooth narrative around the 2030 vision for the tender presentation.",
      },
    ],
    modules: [
      {
        title: "Product vision 2030",
        description:
          "A strong repositioning: Cetelem becomes the assistant for all your life projects. Every idea can be budgeted, tracked and brought to life from a single interface.",
        features: ["Life assistant", "2030 horizon", "Service vision"],
      },
      {
        title: "Key flows",
        description:
          "The core flows of the concept — project creation and budgeting, AI assistance to refine estimates, progress tracking with gamification elements.",
        features: ["Project creation", "Assisted budgeting", "Tracking & gamification"],
      },
      {
        title: "Demo prototype",
        description:
          "Interactive Figma prototype built to make the vision tangible at pitch — from the home screen to the AI flow and the project creation journey.",
        features: ["Interactive prototype", "Full flow", "Demo support"],
      },
    ],
    deliverables: [
      "UI concept formalised in Figma — product vision for the 2030 horizon",
      "Premium and accessible visual direction with gamification elements",
      "Key flows designed: project creation, AI budgeting, tracking",
      "Demo prototype for the tender pitch presentation",
    ],
    impact: [
      "2030 vision made tangible and convincing at the pre-sales stage",
      "Cetelem repositioned as an everyday assistant, beyond credit",
      "Differentiation through gamification and a premium accessible tone",
      "Reusable base for deepening the concept in the project phase",
    ],
    images: {
      cover: "/cetelem/card.png",
      coverWidth: "46%",
      context: ["/cetelem/parcours-compresse.png"],
      methodology: ["/cetelem/ecrans-test.png"],
      modules: [
        ["/cetelem/parcours-compresse.png"],
        ["/cetelem/parcours-assiste.png", "/cetelem/ecrans-projet.png"],
        ["/cetelem/prototype.png", "/cetelem/conv-ia-screens.png"],
      ],
      moduleLayouts: ["single", "grid", "grid"],
    },
  },

  apec: {
    client: "APEC",
    role: "Product Designer",
    duration: "2 years",
    tools: ["Figma", "Design Tokens", "Atomic Design", "Variables"],
    context:
      "APEC needed a complete product ecosystem within an internal enterprise software called 'Production de Service' (PDS) to replace an end-of-life Salesforce CRM. When I joined, I picked up and quickly assimilated the discovery and empathy work initiated by a previous UX designer, before taking ownership of the interface design and supporting its delivery through the development phase.",
    challenges: [
      "Quickly taking over a discovery phase already initiated by another designer",
      "Empty Figma space — no UI library or guidelines",
      "Lack of structured UX practices within the team",
      "Need for fast delivery while laying durable foundations",
    ],
    objectives: [
      "Deliver usable mockups quickly to unblock production",
      "Create a scalable UI library based on Atomic Design",
      "Implement a Design Thinking approach on key modules",
      "Build a lasting design culture within the team",
    ],
    methodology: [
      {
        phase: "01",
        title: "Diagnosis & scoping",
        description:
          "Takeover and assimilation of the existing discovery phase, screen audit, stakeholder alignment and deliverable prioritisation.",
      },
      {
        phase: "02",
        title: "UI Library",
        description:
          "Atomic Design components — atoms, molecules, organisms — with variables and documentation.",
      },
      {
        phase: "03",
        title: "Co-design",
        description:
          "Co-design workshops with Business Project Managers and APEC collaborators. Interface and experience choices were driven by business rules and the actual working practices of the teams. Iterative prototyping on priority modules.",
      },
      {
        phase: "04",
        title: "Delivery & QA",
        description:
          "Active monitoring of delivery during the development phase, with full graphical and UX sign-off on each module. Guidelines documentation and design culture.",
      },
    ],
    modules: [
      {
        title: "Agenda",
        description:
          "The most complex module in the software, directly shaped by heavy business rules: multiple appointment types, scheduling constraints, timezone management and sharing logic specific to APEC's operational workflows. Every experience decision was arbitrated in co-design workshops with business teams to align with the day-to-day reality of advisors.",
        features: ["Create & share appointments", "Document association", "Timezone management"],
      },
      {
        title: "Requests",
        description:
          "Ticket creation system for client requests with sorting, lists and assignment workflow to managers.",
        features: ["Ticket creation", "Advanced sorting & filters", "Manager assignment"],
      },
      {
        title: "Client Relations",
        description:
          "Client communication tracking natively integrating Outlook and Teams communications within the software.",
        features: ["Outlook integration", "Teams integration", "Unified history"],
      },
      {
        title: "Active Proposal",
        description:
          "Advisor/candidate matching system for offer-candidate recommendations with status tracking.",
        features: ["Candidate-offer matching", "Status tracking", "Recommendations"],
      },
      {
        title: "Skills Editor",
        description:
          "Labour market trend analysis tool with advanced search and export capabilities.",
        features: ["Trend analysis", "Advanced search", "Data export"],
      },
    ],
    deliverables: [
      "Atomic Design UI Library with component states and full documentation",
      "Dynamic variable system for light and dark modes",
      "Design system ensuring inter-module consistency",
      "Desktop & mobile interfaces across 5 business modules",
    ],
    impact: [
      "Structured design ecosystem for the entire PDS platform",
      "Improved visual and functional consistency across all modules",
      "Full graphical and UX sign-off conducted across all delivered modules",
      "Solid foundations for a long-term design culture",
    ],
    images: {
      cover: "/apec/apec-cover.png",
      context: [
        "/apec/ui-atoms-molecules.png",
        "/apec/ui-input-states.png",
        "/apec/ui-variables.png",
      ],
      methodology: [
        "/apec/ux-cas-nominal.png",
        "/apec/ux-cas-marginaux.png",
        "/apec/ux-prototype-flow.png",
      ],
      modules: [
        ["/apec/agenda-5days-dark.png", "/apec/agenda-desktop-overview.png", "/apec/agenda-rdv-popup.png", "/apec/agenda-calendar-views.png", "/apec/agenda-mobile.png"],
        ["/apec/demandes-list.png", "/apec/demandes-detail.png"],
        ["/apec/rc-fiche-cadre.png", "/apec/rc-outlook.png"],
        ["/apec/pa-list.png", "/apec/pa-creation.png"],
        ["/apec/edc-search.png", "/apec/edc-results.png"],
      ],
      moduleLayouts: [null, "grid", "grid", "grid", "grid"],
    },
  },

  autossimo: {
    client: "Autossimo",
    role: "Product Designer",
    duration: "6 months",
    tools: ["Figma", "Atomic Design", "User Research", "Design System"],
    context:
      "Autossimo is one of France's leading automotive parts retailers for professionals. Their platform, online for over 20 years, had accumulated many features over time, making navigation complex and unintuitive.",
    challenges: [
      "Ageing platform with complex and unintuitive navigation",
      "Significant visual inconsistency and non-existent design rules",
      "Overlapping navigation flows and multiple conflicting logic patterns",
      "Need to reconcile multiple user profiles (small / large garages)",
    ],
    objectives: [
      "Thoroughly analyse the existing platform and its pain points",
      "Identify friction points through field user research",
      "Prioritise flows to redesign based on business impact",
      "Lay the foundations of a unified and scalable design system",
    ],
    methodology: [
      {
        phase: "01",
        title: "Competitive benchmark",
        description:
          "In-depth analysis of competitor platforms (Oscaro Pro, Mister Auto Pro, Partslink) across three criteria: visual modernity, navigation intuitiveness and functional richness.",
      },
      {
        phase: "02",
        title: "Interface audit",
        description:
          "Full audit covering identification of priority flows, UI component inventory and visual consistency evaluation. Lighthouse technical analysis for performance.",
      },
      {
        phase: "03",
        title: "Shadowing & Interviews",
        description:
          "Shadowing sessions and interviews with garages of various sizes. Observations revealed a strong predominance of mobile and tablet usage — technicians constantly moving between vehicles and workstations. These insights directly shaped the design decisions. Creation of User Journeys and Personas representative of real usage patterns.",
      },
      {
        phase: "04",
        title: "Redesign & Design System",
        description:
          "Design of new flows with a mobile and tablet-first approach. Introduction of a persistent vehicle identification banner, designed to accommodate the frequent vehicle changes typical of automotive garages. Initiation of a modular design system following Atomic Design.",
      },
    ],
    modules: [
      {
        title: "Vehicle selection",
        description:
          "Upfront vehicle selection at the start of the purchase funnel, with a persistent identification banner displaying the active vehicle's characteristics. This choice stems directly from field observations: in garages, vehicles change constantly — the technician must always know which vehicle they're working on, even while browsing the catalogue.",
        features: ["Persistent vehicle banner", "Quick selection", "Built for frequent vehicle changes"],
      },
      {
        title: "Catalogue view",
        description:
          "Redesigned catalogue highlighting real-time availability, delivery times and part compatibility to speed up purchasing decisions.",
        features: ["Real-time availability", "Delivery times", "Advanced filters"],
      },
      {
        title: "Product page",
        description:
          "Enriched page clarifying part compatibility, suggesting compatible alternatives and displaying key technical information for professionals.",
        features: ["Clarified compatibility", "Suggested alternatives", "Technical specs"],
      },
      {
        title: "Engine exploded view",
        description:
          "Visual and intuitive navigation within the engine exploded view to quickly identify and select parts by intervention zone.",
        features: ["Visual navigation", "Zone selection", "Quick identification"],
      },
    ],
    deliverables: [
      "Competitive benchmark report with analysis grid",
      "Full audit of the existing platform (UX + technical)",
      "User Journeys and Personas from field sessions",
      "New flow mockups and initiated design system",
    ],
    impact: [
      "User experience issues objectively assessed via data + field approach",
      "Priority flows identified and ranked by business impact",
      "Foundations of a unified design system established",
      "UX momentum centred on real-world automotive professionals' usage",
    ],
    images: {
      cover: "/autossimo/cover.png",
      context: ["/autossimo/context-devices.png"],
      methodology: [
        "/autossimo/method-benchmark.png",
        "/autossimo/method-persona.png",
      ],
      modules: [
        ["/autossimo/vehicle-selection-desk.png", "/autossimo/vehicle-selection-connected.png"],
        ["/autossimo/catalogue-list.png", "/autossimo/catalogue-responsive.png"],
        ["/autossimo/product-desk.png", "/autossimo/product-responsive.png"],
        ["/autossimo/exploded-view.png", "/autossimo/exploded-mobile.png"],
      ],
      moduleLayouts: ["grid", "grid", "grid", "grid"],
      phases: [
        ["/autossimo/phase-benchmark-1.png", "/autossimo/phase-benchmark-2.png"],
        ["/autossimo/phase-audit-1.png", "/autossimo/phase-audit-2.png"],
        ["/autossimo/phase-shadowing-journey.png", "/autossimo/phase-shadowing-persona.png"],
        [],
      ],
    },
  },

  npc: {
    client: "Neotropical Primate Conservation",
    role: "UX/UI Designer & CMS Developer",
    duration: "8 months",
    tools: ["Figma", "WordPress", "UI Kit", "Adobe XD"],
    context:
      "Neotropical Primate Conservation (NPC) is a non-profit NGO working to preserve South American tropical forests. Their outdated website no longer reflected the scale of their missions or their international presence.",
    challenges: [
      "Outdated website no longer reflecting the organisation's image",
      "No multilingual experience adapted to an international audience",
      "Content difficult to maintain without technical skills",
      "Need to showcase multiple distinct activity areas",
    ],
    objectives: [
      "Clarify and strengthen digital presence through the website and social media",
      "Rethink the structure to better showcase all of the NGO's work",
      "Create a fluid, accessible and multilingual experience",
      "Give the team a simple tool they can maintain independently",
    ],
    methodology: [
      {
        phase: "01",
        title: "Needs analysis",
        description:
          "Gathering explicit and implicit needs through direct exchanges with the NPC team. Identifying target audiences and priority content to highlight.",
      },
      {
        phase: "02",
        title: "UX & Architecture",
        description:
          "Full overhaul of the information architecture and user journeys. Creation of a custom UI Kit aligned with the NGO's environmental mission.",
      },
      {
        phase: "03",
        title: "CMS Development",
        description:
          "Full integration under WordPress with custom CMS structure. Accessibility, performance and mobile/desktop compatibility testing before launch.",
      },
      {
        phase: "04",
        title: "Training & autonomy",
        description:
          "Creation of a user guide and training the NPC team on CMS management to enable independent and sustainable site administration.",
      },
    ],
    modules: [
      {
        title: "Home & Impact",
        description:
          "Redesigned homepage to immediately showcase the NGO's impact, flagship projects and calls to action for donations and volunteering.",
        features: ["Impact highlighted", "Flagship projects", "Calls to action"],
      },
      {
        title: "Projects & Programmes",
        description:
          "Section dedicated to conservation, reforestation and research programmes, with detailed project sheets by project and geographical area.",
        features: ["Project sheets", "Geographical filters", "Progress tracking"],
      },
      {
        title: "Multilingual site",
        description:
          "Bilingual English/Spanish experience to reach an international audience and facilitate partnerships with organisations worldwide.",
        features: ["English & Spanish", "Consistent navigation", "Adapted content"],
      },
    ],
    deliverables: [
      "Interactive prototype and custom UI Kit",
      "Full WordPress site in English and Spanish",
      "New visual identity and art direction",
      "CMS documentation and administration tutorial",
    ],
    impact: [
      "Reinforced international visibility and consolidated professional image",
      "NGO missions better understood by the public and partners",
      "Content management made easier with a structured, accessible CMS",
      "Solid foundation for coherent and sustainable digital communication",
    ],
    images: {
      cover: "/npc/cover.png",
      context: ["/npc/context-logo-countries.png"],
      methodology: ["/npc/visual-guide.png", "/npc/brand-logo.png", "/npc/brand-colors.png"],
      modules: [
        ["/npc/homepage.png"],
        ["/npc/projects-pages.png"],
        ["/npc/multilingual-es-desktop.png", "/npc/multilingual-es-mobile.png"],
      ],
      moduleLayouts: [null, null, "grid"],
    },
  },

  cerfal: {
    client: "CFA Cerfal",
    role: "UX/UI Designer",
    duration: "6 months",
    tools: ["Adobe XD", "UI Kit", "Prototyping", "Wireframes"],
    context:
      "CFA CERFAL is a network of apprenticeship training centres in Île-de-France and across France. Their outdated website no longer reflected the modern image expected of an organisation of this scale and failed to facilitate contact with its various audiences.",
    challenges: [
      "Outdated website not reflecting the expected modern digital image",
      "Non-differentiated user flows across profiles (students, parents, companies)",
      "Complex information structure difficult to navigate",
      "Need to modernise the visual identity while remaining accessible to a young audience",
    ],
    objectives: [
      "Completely rethink the user experience for three distinct profiles",
      "Modernise the interface and strengthen the appeal of the CERFAL network",
      "Simplify the information structure and contact journeys",
      "Prepare a solid foundation for the future institutional website",
    ],
    methodology: [
      {
        phase: "01",
        title: "Research & Analysis",
        description:
          "Study of the CFA's internal needs and competitive benchmarking on leading training organisation websites to identify UX/UI best practices.",
      },
      {
        phase: "02",
        title: "UX Design",
        description:
          "Definition of three key user journeys: student looking for a course, parent supporting an orientation project, and company wishing to become a partner.",
      },
      {
        phase: "03",
        title: "UI Design",
        description:
          "Creation of a V1 graphic with an illustrated universe to strengthen proximity with a young audience. Overhaul of the UI Kit (colours, typography, components, pictograms).",
      },
      {
        phase: "04",
        title: "Iteration & Optimisation",
        description:
          "V2 with visual optimisation for loading times. Mockup and prototype adjustments based on project team feedback.",
      },
    ],
    modules: [
      {
        title: "Student journey",
        description:
          "Experience centred on discovering courses, comparing options and facilitating enrolment for future apprentices.",
        features: ["Course search", "Curriculum comparison", "Enrolment process"],
      },
      {
        title: "Parent journey",
        description:
          "Space dedicated to parents supporting an orientation project, with clear information on apprenticeship, career prospects and administrative procedures.",
        features: ["Apprenticeship guide", "Career prospects", "Parent FAQ"],
      },
      {
        title: "Company journey",
        description:
          "Company portal simplifying the process of becoming a CFA partner, with information on tax benefits and the work-study recruitment process.",
        features: ["Become a partner", "Tax benefits", "Work-study recruitment"],
      },
    ],
    deliverables: [
      "Functional prototype developed in Adobe XD",
      "Updated UI Kit for future integration",
      "Retouched and web-optimised visuals",
      "UX/UI documentation for project follow-up and continuity",
    ],
    impact: [
      "New, more modern and engaging visual identity for the CERFAL network",
      "User flows clarified by profile (students, parents, companies)",
      "Solid foundation laid for the future institutional website",
      "Optimised user experience to facilitate contact",
    ],
    images: {
      cover: "/cerfal/cover.png",
      context: ["/cerfal/context-homepage.png"],
      methodology: ["/cerfal/method-desktop.png", "/cerfal/method-mobile.png"],
      modules: [
        ["/cerfal/etudiant-guide.png", "/cerfal/etudiant-recherche.png"],
        ["/cerfal/parent-fiche-formation.png", "/cerfal/parent-fiche-site.png"],
        ["/cerfal/entreprise-guide.png", "/cerfal/entreprise-sites-map.png"],
      ],
      moduleLayouts: ["grid", "grid", "grid"],
    },
  },

  globedreamers: {
    client: "Globedreamers",
    role: "UX/UI Designer",
    duration: "2 years",
    tools: ["Adobe XD", "Design System", "Prototyping", "UI Kit"],
    context:
      "Globedreamers is a crowdfunding platform dedicated to responsible and meaningful travel projects. Its mission is to build an engaged community around shared values and bring together partner companies wishing to support positive-impact initiatives.",
    challenges: [
      "Fragmented user experience between discovery, contribution and engagement",
      "No unified design system to ensure consistency and scalability",
      "Visual identity not reflecting the brand's sustainability values",
      "Need to address both project-carrying travellers and corporate partners",
    ],
    objectives: [
      "Redesign key platform sections to streamline navigation",
      "Create a design system and visual identity consistent with brand values",
      "Improve engagement and conversion on donation and contribution journeys",
      "Lay the foundations for coherent and scalable product evolution",
    ],
    methodology: [
      {
        phase: "01",
        title: "Scoping & research",
        description:
          "Stakeholder interviews to align the product vision. Competitive analysis of leading crowdfunding platforms and their engagement models.",
      },
      {
        phase: "02",
        title: "UX & Architecture",
        description:
          "Reorganisation of the information architecture to streamline navigation between discovery, contribution and engagement. Redesign of 6 main sections.",
      },
      {
        phase: "03",
        title: "UI & Visual identity",
        description:
          "UI Kit overhaul and unified design system. Creation of an illustrated, positive and inspiring graphic universe aligned with sustainability values.",
      },
      {
        phase: "04",
        title: "Testing & iterations",
        description:
          "High-fidelity iterative prototyping in Adobe XD. User testing to validate design hypotheses. Continuous improvements based on feedback.",
      },
    ],
    modules: [
      {
        title: "Home & Projects",
        description:
          "Redesign of the homepage and projects section to showcase responsible initiatives and facilitate discovery of travel projects to support.",
        features: ["Project showcase", "Thematic filters", "Impact highlighted"],
      },
      {
        title: "Donations & Contribution",
        description:
          "Optimised donation flow to maximise conversion, with clear display of each contribution's impact and options to track the supported project.",
        features: ["Simplified donation flow", "Contribution impact", "Project tracking"],
      },
      {
        title: "Corporate space",
        description:
          "Section dedicated to corporate partners presenting sponsorship offers, CSR benefits and project support arrangements.",
        features: ["Partnership offers", "CSR benefits", "Support arrangements"],
      },
      {
        title: "E-learning & Community",
        description:
          "Community and learning space for sharing knowledge on responsible travel and strengthening community engagement.",
        features: ["Educational content", "Community sharing", "Lasting engagement"],
      },
    ],
    deliverables: [
      "Full interactive website prototype (Adobe XD)",
      "Vector files and reusable UI components",
      "Brand guidelines and visual identity guide",
      "Social media kit and templates for social networks",
    ],
    impact: [
      "Strengthened positioning as the reference platform for responsible travel",
      "Clearer and more intuitive user experience fostering engagement and conversion",
      "Design system and visual identity laying the foundations for coherent product evolution",
      "Unified digital communication across all digital channels",
    ],
    images: {
      cover: "/globedreamers/cover.png",
      context: ["/globedreamers/context.png"],
      methodology: ["/globedreamers/method-brand-1.png", "/globedreamers/method-brand-2.png"],
      modules: [
        ["/globedreamers/accueil-multidevice.png", "/globedreamers/accueil-screens.png"],
        ["/globedreamers/dons-payment.png", "/globedreamers/dons-flows.png"],
        ["/globedreamers/entreprises-screens.png"],
        ["/globedreamers/communaute-mobile.png"],
      ],
      moduleLayouts: ["grid", "grid", null, null],
    },
  },
};
