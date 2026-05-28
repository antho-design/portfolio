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
    isHub: true,
  },
  {
    id: "apec-agenda",
    title: "Agenda",
    subtitle: "Refonte d'un outil de gestion de rendez-vous pour les conseillers APEC",
    year: "2023 – 2024",
    tag: "Product design SI métier",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "UX Research", "Design System", "Figma", "Dark/Light Mode"],
  },
  {
    id: "apec-demande",
    title: "Demandes",
    subtitle: "Migration et refonte d'un système de gestion de demandes, du CRM Salesforce vers le SI interne APEC",
    year: "2024",
    tag: "Product design SI métier",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "Workflow Design", "Information Architecture", "Figma", "Design System"],
  },
  {
    id: "apec-relation-client",
    title: "Relation Client",
    subtitle: "Centralisation et traçabilité des échanges conseillers/clients dans le SI APEC, avec intégration Outlook native",
    year: "2024",
    tag: "Product design SI métier",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "UX Design", "API Integration", "Workflow Design", "Figma", "Design System"],
  },
  {
    id: "apec-proposition-active",
    title: "Proposition Active",
    subtitle: "Structuration de la mise en relation entre conseillers cadres et conseillers entreprise au sein du SI APEC",
    year: "2024 – 2025",
    tag: "Product design SI métier",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "Workflow Design", "Dual Pathway UX", "Figma", "Design System"],
  },
  {
    id: "apec-editeur",
    title: "Éditeur de Compétences",
    subtitle: "Productisation d'un outil d'analyse du marché de l'emploi, du script Python interne au module SI accessible à tous les conseillers",
    year: "2025",
    tag: "Product design SI métier",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "Data Visualization", "Search UX", "Export Design", "Figma", "Design System"],
  },
  {
    id: "autossimo",
    title: "Autossimo",
    subtitle: "Refonte de l'expérience d'achat B2B sur la plateforme leader de pièces détachées automobile",
    year: "2022",
    tag: "Product design e-shop B2B",
    tasks: ["Product Design", "UX Research", "Shadowing", "Benchmark", "Design System", "Figma"],
  },
  {
    id: "npc",
    title: "NPC Pérou",
    subtitle: "Refonte complète du site web d'une ONG de conservation en Amérique du Sud, en immersion au Pérou",
    year: "2021",
    tag: "Refonte UI/UX & dev CMS",
    tasks: ["UX Design", "Information Architecture", "WordPress", "Bilingue FR/EN", "Figma"],
  },
  {
    id: "cerfal",
    title: "CFA Cerfal",
    subtitle: "Refonte UX/UI d'un site institutionnel pour un réseau de centres de formation, dans le cadre d'un appel d'offre",
    year: "2020",
    tag: "Refonte UI/UX",
    tasks: ["UX Design", "UI Design", "Benchmark", "Tri-parcours", "Adobe XD"],
  },
  {
    id: "globedreamers",
    title: "Globedreamers",
    subtitle: "Refonte UX/UI et design system d'une plateforme de financement participatif pour les voyages responsables, en collaboration longue durée avec une startup",
    year: "2019 – 2021",
    tag: "Accompagnement UI/UX",
    tasks: ["UX Design", "UI Design", "Design System", "Benchmark", "Adobe XD"],
  },
];

export const EXPERIENCES = [
  {
    period: "2022 – 2025",
    role: "Product Designer",
    type: "Consultant",
    projectIds: ["apec", "autossimo"],
    items: [
      "Apec — Product Design progiciel",
      "Autossimo — Product Design B2B",
    ],
  },
  {
    period: "2021",
    role: "Bénévole",
    type: "Bénévolat & design",
    projectIds: ["npc"],
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
    projectIds: ["globedreamers", "cerfal"],
    items: ["Globedreamers — UI/UX", "CFA Cerfal — UI/UX"],
  },
  {
    period: "2017 – 2019",
    role: "Web Designer",
    type: "Alternance",
    projectIds: [],
    items: ["Visiodent — Graphisme, marketing & web design"],
  },
  {
    period: "2016 – 2017",
    role: "Graphiste",
    type: "CDD / Alternance",
    projectIds: [],
    items: ["Signarama — Signalétique", "Auchan — Graphisme & signalétique"],
  },
];

export const PROJECT_DETAILS = {
  cetelem: {
    client: "Cetelem",
    role: "Product Designer",
    duration: "2 semaines",
    tools: ["Figma", "Prototypage", "UI Design"],
    intro: "Une banque de crédit peut-elle devenir un compagnon de vie ? C'est le défi posé par cet appel d'offre : imaginer Cetelem en 2030, non plus comme un outil de financement, mais comme l'assistant de tous vos projets. Deux semaines pour rendre cette vision désirable, crédible et prototypable.",
    context:
      "Dans le cadre d'une réponse à appel d'offre, l'enjeu était de projeter une vision produit à l'horizon 2030 — repenser Cetelem non plus comme un simple outil de crédit, mais comme un assistant du quotidien capable d'accompagner l'utilisateur dans tous ses projets de vie. Budgétiser rapidement une idée, suivre l'avancement de ses projets, être guidé dans ses choix financiers : autant d'usages à rendre désirables dans un concept à la fois légèrement premium et accessible au plus grand nombre, avec des éléments de gamification pour rendre l'expérience plus engageante. L'ensemble du concept a été conçu et prototypé en 2 semaines.",
    decisions: [
      {
        number: "01",
        title: "Des intentions, pas des features",
        text: "Partir des moments de vie — projeter, budgétiser, suivre — plutôt que de construire autour des produits existants. L'interface se plie aux usages, pas l'inverse.",
      },
      {
        number: "02",
        title: "Gamification sans infantiliser",
        text: "Progress bars, milestones, visualisations de progression — mais pas de points ni de badges. L'engagement vient de la progression réelle vers un objectif concret.",
      },
      {
        number: "03",
        title: "L'IA comme facilitateur discret",
        text: "L'assistant intervient au bon moment — pour affiner une estimation, suggérer un ajustement — sans s'imposer comme la feature principale de l'expérience.",
      },
    ],
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
    isHub: true,
    client: "APEC",
    role: "Senior Product Designer — Mission consulting",
    duration: "3 ans",
    tools: ["Figma", "Design Tokens", "Atomic Design", "Variables"],
    subProjects: ["apec-agenda", "apec-demande", "apec-relation-client", "apec-proposition-active", "apec-editeur"],
    context:
      "En arrivant à l'APEC, je découvre un environnement design inexistant : aucune librairie de composants, aucune guideline, un espace Figma vide, et une charte graphique héritée du print, sans adaptation au digital. Les équipes produit et technique avancent projet par projet, sans référentiel partagé, ce qui génère des incohérences visuelles croissantes et ralentit chaque nouvelle production d'interfaces. Construire une librairie UI n'est pas un projet annexe, c'est une condition pour que le travail design ait un impact durable.",
    problematique:
      "Comment poser les bases d'un design system robuste et évolutif dans une organisation qui n'en a jamais eu, tout en livrant en parallèle des interfaces opérationnelles sur des projets produit en cours ?",
    designSystem: {
      description:
        "Création from scratch d'une librairie UI et d'un design system pour un progiciel métier sans culture design existante",
      items: [
        "Partir du terrain, pas de l'idéal — la librairie est construite en prise directe avec le premier projet à livrer : l'Agenda. Chaque composant nécessaire devient une brique de la librairie, garantissant que les composants produits répondent à des besoins réels, immédiatement testés en contexte.",
        "Structuration selon l'Atomic Design — atomes (couleurs, typographies, icônes, boutons), molécules (champs de formulaire, tags, badges), organismes (cartes, barres de navigation, modales). Cette hiérarchie rend la librairie lisible pour toute l'équipe et facilite l'extension progressive sans casser les bases existantes.",
        "Système de variables dynamiques dark / light — mis en place dès les premiers composants, il permet le basculement fluide entre les deux modes sans dupliquer les composants, et garantit la cohérence des deux modes à mesure que la librairie s'étofffe.",
        "Accessibilité intégrée dès la conception — contrastes, états de focus, hiérarchies typographiques et tailles minimales de zones interactives sont des contraintes de conception, pas des ajouts a posteriori.",
        "Adoption progressive et documentation — composants nommés, organisés et documentés pour être compréhensibles par un designer arrivant après. Librairie étendue et adoptée sur les 4 projets suivants : Demandes, Relation Client, Proposition Active, Éditeur de compétences.",
      ],
    },
    impact: [
      "Production d'interfaces accélérée sur chaque nouveau projet grâce à un socle de composants réutilisables",
      "Cohérence graphique imposée naturellement à l'échelle du progiciel, sans devoir la réimposer projet par projet",
      "Culture design durable : après la mission, les équipes disposent d'un référentiel commun pour continuer à produire des interfaces cohérentes",
    ],
    images: {
      cover: "/apec/apec-cover.png",
      context: [
        "/apec/ui-atoms-molecules.png",
        "/apec/ui-input-states.png",
        "/apec/ui-variables.png",
      ],
    },
  },

  "apec-agenda": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Mission consulting",
    duration: "8 mois",
    tools: ["Figma", "Atomic Design", "Prototypage"],
    context:
      "L'Agenda est le premier projet sur lequel j'interviens à mon arrivée à l'APEC. Il accuse déjà trois mois de retard, les équipes attendent des livrables, et il n'existe aucune base design sur laquelle s'appuyer. L'outil doit permettre aux conseillers de gérer l'intégralité de leurs rendez-vous : entretiens avec des particuliers, rendez-vous entreprises, ateliers collectifs publiés sur Apec.fr, le tout sur plusieurs fuseaux horaires et avec des règles métier complexes. Le défi n'est pas seulement de concevoir une interface fonctionnelle, c'est de le faire vite, dans un système technique vieillissant sous Angular, non responsive, et avec des parties prenantes aux attentes hétérogènes.",
    problematique:
      "Comment concevoir une interface d'agenda dense et multi-contextes, ergonomique pour des conseillers qui l'utilisent à plein temps, tout en respectant des contraintes techniques fortes et des règles métier nombreuses ?",
    methodology: [
      {
        phase: "01",
        title: "Cadrage par ateliers de co-création",
        description:
          "Avant toute maquette, j'ai animé des ateliers réunissant conseillers métier, managers et représentants de la DSI. L'objectif : faire émerger les besoins réels, identifier les contraintes terrain, et aligner les priorités entre des parties prenantes qui n'avaient pas toujours la même lecture du projet. Ces ateliers ont été déterminants pour structurer le périmètre fonctionnel et obtenir l'adhésion des équipes en amont de la conception.",
      },
      {
        phase: "02",
        title: "Benchmark pour ancrer les choix de design",
        description:
          "Face à la complexité d'un agenda multi-contextes dense, j'ai conduit un benchmark des outils de gestion de planning existants. Le résultat oriente clairement vers une expérience proche de Microsoft Teams : une interface connue des utilisateurs, reconnue pour son ergonomie efficace dans des contextes professionnels denses, et qui réduit la courbe d'apprentissage.",
      },
      {
        phase: "03",
        title: "Conception des parcours et des wireframes",
        description:
          "J'ai structuré les parcours autour des besoins clés identifiés en atelier : création de rendez-vous paramétrables selon le contexte (particulier, entreprise, atelier), partage et modification de plages entre collègues, gestion des fuseaux horaires, association de documents et de demandes aux rendez-vous. Les wireframes ont été présentés aux parties prenantes pour valider la logique fonctionnelle avant de passer à la haute fidélité.",
      },
      {
        phase: "04",
        title: "Validation itérative des maquettes",
        description:
          "J'ai structuré les cycles de review en plusieurs étapes : présentation des wireframes pour valider la logique, puis des maquettes haute fidélité pour valider le rendu et les interactions. Chaque session était préparée avec un cadrage clair des décisions attendues, pour éviter les allers-retours non structurés. Les feedbacks étaient collectés de manière systématique et priorisés selon leur impact sur l'expérience.",
      },
      {
        phase: "05",
        title: "Extension mobile lite",
        description:
          "Après plusieurs mois de travail sur la version desktop, une version mobile allégée a été envisagée et conçue, centrée uniquement sur la consultation des rendez-vous. Un périmètre volontairement restreint, dicté par les contraintes techniques du système Angular existant, mais qui répond à un besoin réel de mobilité des conseillers en déplacement.",
      },
    ],
    resultat:
      "Une interface d'agenda desktop complète, dark et light mode, couvrant l'ensemble des contextes de rendez-vous des conseillers APEC, avec une version mobile lite pour la consultation. Les maquettes ont été validées par les équipes métier et transmises à la DSI pour intégration.",
    impact: [
      "Approche UX structurée démontrée dans une organisation qui n'en avait pas l'habitude, posant les bases de tous les projets suivants",
      "Ateliers de co-création mis en place sur ce projet devenus la méthode de référence pour l'ensemble de la mission",
      "Composants conçus pour l'Agenda ayant constitué le point de départ de la librairie UI adoptée à l'échelle du progiciel",
    ],
    images: {
      cover: "/apec/agenda-cover.png",
      context: ["/apec/agenda-vues-overview.png"],
      phases: [
        ["/apec/agenda-wireframe-nominal.png"],
        null,
        ["/apec/agenda-wireframe-sidepanel.png"],
        ["/apec/agenda-popup-creation.png"],
        ["/apec/agenda-mobile-overview.png"],
      ],
      resultat: "/apec/agenda-desktop-dark.png",
    },
  },

  "apec-demande": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Mission consulting",
    duration: "6 mois",
    tools: ["Figma", "Atomic Design"],
    context:
      "Ce projet s'inscrit dans la continuité directe du projet Agenda, au sein du même SI de l'APEC. La librairie UI et les guidelines établies en amont ont servi de socle immédiat, permettant de démarrer la conception sans phase de cadrage design préalable. L'outil existait déjà dans Salesforce — l'enjeu n'était pas de créer un concept, mais de migrer et de réinventer un processus métier complexe dans un environnement propriétaire, en le rendant plus adapté aux usages réels des collaborateurs.",
    problematique:
      "Les demandes APEC naissent d'un appel téléphonique ou d'un email reçu par un conseiller, et doivent être formalisées, qualifiées et acheminées vers le bon interlocuteur. Dans Salesforce, ce processus reposait sur un orchestrateur de vues — un système de listes pré-filtrées par région géographique, spécialité métier et type de service — qui permettait aux managers d'attribuer les demandes efficacement. Recréer ce système dans le SI propriétaire APEC posait deux défis majeurs : d'abord, reproduire la puissance de configuration de Salesforce sans en hériter la complexité d'usage ; ensuite, enrichir l'objet « demande » pour qu'il centralise l'ensemble des échanges liés (emails, appels, fichiers, commentaires collaborateurs) — créant ainsi une adhérence forte avec le module Relation Client en cours de conception en parallèle.",
    methodology: [
      {
        phase: "01",
        title: "Cartographie du processus existant",
        description:
          "La première étape a été d'auditer le fonctionnement dans Salesforce : comment une demande était créée, quels champs étaient renseignés, comment l'orchestrateur de vues était configuré, et comment les managers attribuaient et clôturaient les demandes. Cet audit a servi de base pour identifier ce qui devait être conservé, simplifié ou repensé dans la nouvelle version.",
      },
      {
        phase: "02",
        title: "Ateliers de cadrage avec conseillers et managers",
        description:
          "Des ateliers distincts ont été menés avec les deux profils utilisateurs principaux. Avec les conseillers, l'objectif était de comprendre le moment de saisie (toujours en contexte post-appel ou post-email, souvent dans l'urgence) et les informations critiques à capturer rapidement. Avec les managers, il s'agissait de comprendre la logique de tri et d'attribution, et les critères qui rendaient une vue utile au quotidien.",
      },
      {
        phase: "03",
        title: "Conception de l'orchestrateur de vues",
        description:
          "Le défi central du projet était la recréation de l'orchestrateur. J'ai travaillé sur plusieurs itérations pour concevoir un module permettant aux managers de créer et configurer leurs propres vues selon des critères métier (région, spécialité, type de service) — aussi puissant que Salesforce, mais pensé pour des utilisateurs non-experts de la configuration. Chaque version a été soumise à validation avant d'avancer.",
      },
      {
        phase: "04",
        title: "Définition de l'objet demande et adhérence avec Relation Client",
        description:
          "Une demande ne se réduit pas à un formulaire : elle embarque des fichiers joints, une description, des commentaires collaborateurs, et des échanges emails et téléphoniques associés. J'ai travaillé en coordination avec le projet Relation Client pour garantir la cohérence des deux modules et éviter les doublons d'information dans l'interface.",
      },
      {
        phase: "05",
        title: "Validation itérative et cycles de feedback",
        description:
          "Chaque surface (création, liste, orchestrateur, clôture) a suivi un cycle de présentation et validation avec les équipes métier et la DSI. Les retours ont alimenté les itérations successives jusqu'à l'obtention de maquettes validées prêtes pour la mise en production.",
      },
    ],
    resultat:
      "Quatre surfaces livrées couvrant l'intégralité du cycle de vie d'une demande : le formulaire de création et d'édition (avec métadonnées géographiques, métier et service, fichiers joints et commentaires), l'écran de liste avec vues filtrées, l'orchestrateur de configuration des vues, et l'écran de clôture avec motifs. L'ensemble est nativement intégré au design system APEC et en cohérence directe avec le module Relation Client.",
    impact: [
      "Salesforce remplacé par un outil SI propriétaire couvrant l'intégralité du workflow demande, de la saisie à la clôture",
      "4 surfaces conçues et validées — création, gestion des listes, orchestration des vues, clôture",
      "1 objet unifié centralisant emails, appels, fichiers et commentaires autour de chaque demande, en cohérence avec le module Relation Client",
    ],
    images: { cover: "/apec/demandes-list.png", context: ["/apec/demandes-list.png", "/apec/demandes-detail.png"] },
  },

  "apec-relation-client": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Mission consulting",
    duration: "5 mois",
    tools: ["Figma", "Atomic Design"],
    context:
      "Troisième module conçu dans le cadre de la mission APEC, Relation Client s'appuie sur le design system et les pratiques établis lors des projets Agenda et Demandes. Il présente une adhérence directe avec le module Demandes : les emails et appels tracés dans Relation Client peuvent être associés à des demandes en cours, créant un historique unifié autour du profil de chaque cadre ou entreprise.",
    problematique:
      "Lorsqu'un cadre accompagné par l'APEC change de conseiller, la transmission de l'historique des échanges reposait entièrement sur la bonne volonté et la disponibilité du conseiller sortant : un résumé oral au mieux, un document Word dans les cas les plus soignés, et souvent rien du tout. Le nouveau conseiller devait fouiller l'historique du profil client sans garantie d'y trouver des informations utiles, et recommencer l'accompagnement depuis zéro — au détriment de l'expérience du cadre, contraint de tout réexpliquer, et au prix d'une perte de temps significative pour le conseiller. L'enjeu était double : concevoir un système de traçabilité des échanges suffisamment simple pour être adopté par tous les conseillers, et suffisamment riche pour capturer la réalité de leurs interactions — emails entrants et sortants via Outlook, appels téléphoniques aboutis ou non, échanges associés à des demandes en cours.",
    methodology: [
      {
        phase: "01",
        title: "Cartographie des flux d'échanges existants",
        description:
          "Les ateliers menés avec les conseillers ont révélé trois types d'interactions à couvrir : les emails reçus via Outlook, les emails envoyés aux cadres, et les appels téléphoniques. Chaque flux avait ses propres contraintes d'usage — les emails arrivaient en volume, les appels étaient souvent saisis en contexte post-appel avec peu de temps disponible. Cartographier ces flux a permis de définir des parcours adaptés à chaque cas.",
      },
      {
        phase: "02",
        title: "Conception du parcours email avec intégration Outlook",
        description:
          "L'intégration technique reposait sur un connecteur API Outlook. J'ai conçu un parcours en deux temps : le conseiller tague un email reçu \"SI\" dans Outlook, qui est automatiquement rapatrié dans une liste d'emails à attribuer dans le SI. Il sélectionne ensuite les emails correspondant à un cadre et les attribue à son profil. L'outil permet également d'envoyer des emails directement depuis le SI — depuis l'adresse du conseiller ou depuis une boîte no-reply — pour centraliser la traçabilité des échanges sortants.",
      },
      {
        phase: "03",
        title: "Conception du parcours de traçabilité des appels",
        description:
          "Pour les appels, le parti pris était la simplicité : depuis l'onglet \"Suivi des échanges\" du profil client, un bouton dédié permet d'ajouter manuellement un appel, de renseigner s'il a abouti, de lui donner un titre personnalisé et de décrire le contenu de l'échange. Ce parcours minimaliste a été conçu pour s'insérer naturellement dans le flux de travail post-appel, sans friction supplémentaire.",
      },
      {
        phase: "04",
        title: "Conception de la vue \"Suivi des échanges\"",
        description:
          "Le cœur du module est la vue unifiée de l'historique : emails entrants, emails sortants et appels tracés apparaissent dans une chronologie lisible sur le profil du cadre ou de l'entreprise. J'ai travaillé sur la densité d'information et la hiérarchie visuelle pour que le conseiller puisse scanner rapidement les dernières interactions sans avoir à ouvrir chaque entrée. Les échanges liés à une demande active sont également identifiables au premier coup d'œil.",
      },
      {
        phase: "05",
        title: "Validation itérative avec les conseillers",
        description:
          "Les cycles de présentation ont impliqué directement les conseillers utilisateurs finaux, en particulier sur les questions d'adoption : le parcours de saisie d'un appel était-il assez rapide ? La liste des emails à attribuer était-elle lisible en volume ? Leurs retours ont conduit à plusieurs simplifications, notamment dans la vue de saisie des appels et dans l'affichage condensé de l'historique.",
      },
    ],
    resultat:
      "Un module complet de traçabilité des échanges intégré au profil de chaque cadre et entreprise : liste des emails entrants Outlook à attribuer, envoi d'emails depuis le SI, saisie manuelle des appels avec résumé et statut, et vue chronologique unifiée \"Suivi des échanges\" accessible à tous les conseillers. L'ensemble est nativement connecté au module Demandes pour une cohérence complète des interactions associées.",
    impact: [
      "Historique centralisé et accessible — là où la transmission reposait sur un document Word ou une passation orale",
      "3 types d'échanges unifiés dans une seule vue chronologique — emails entrants, emails sortants, appels téléphoniques",
      "Intégration API Outlook permettant une attribution des emails sans double saisie ni copier-coller manuel",
      "Continuité de suivi garantie pour chaque cadre, quel que soit le conseiller en charge — fin des recommencements à zéro",
    ],
    images: { cover: "/apec/rc-fiche-cadre.png", context: ["/apec/rc-fiche-cadre.png", "/apec/rc-outlook.png"] },
  },

  "apec-proposition-active": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Mission consulting",
    duration: "5 mois",
    tools: ["Figma", "Atomic Design"],
    context:
      "Quatrième module conçu dans le cadre de la mission APEC, Proposition Active s'appuie sur le design system établi lors des projets précédents. Il s'articule autour d'un besoin organisationnel fort : créer un pont structuré entre deux populations de conseillers qui travaillaient jusqu'alors en silos — les conseillers Cadre, accompagnant les individus dans leur recherche d'emploi, et les conseillers Entreprise, gérant les offres et les recruteurs.",
    problematique:
      "La mise en relation entre conseillers Cadre et conseillers Entreprise — appelée « MER » en interne — reposait sur des échanges informels, opportunistes, sans cadre ni outil dédié. Dans la pratique, faute de processus structuré, certains conseillers prenaient des initiatives en solo : un conseiller Cadre proposait directement une offre à son client sans connaître le contexte entreprise, un conseiller Entreprise suggérait un candidat sans maîtriser sa situation réelle. Ces raccourcis généraient des erreurs et, dans un environnement aussi procédurier que l'APEC, des frictions entre collègues. Le défi de conception était double : créer un workflow bidirectionnel — chaque type de conseiller pouvant initier une mise en relation — tout en encodant dans l'outil la procédure interne de l'APEC : d'abord l'alignement entre les deux conseillers concernés, ensuite seulement la communication vers le cadre ou l'entreprise.",
    methodology: [
      {
        phase: "01",
        title: "Compréhension des deux populations et de leurs logiques",
        description:
          "Les ateliers ont réuni des conseillers Cadre et des conseillers Entreprise pour cartographier leurs perspectives respectives sur le processus de mise en relation. Il est rapidement apparu que les deux populations avaient des réflexes différents et des niveaux de connaissance asymétriques sur le contexte de l'autre côté. Cette asymétrie était précisément à l'origine des frictions constatées et a directement orienté la conception des deux parcours.",
      },
      {
        phase: "02",
        title: "Conception des deux parcours miroir",
        description:
          "J'ai conçu deux parcours distincts mais symétriques : le parcours « Cadre vers Offre » permettant à un conseiller Cadre de sélectionner une offre dans la base APEC et de proposer jusqu'à cinq candidats correspondants, et le parcours inverse permettant à un conseiller Entreprise de sélectionner un candidat et de lui associer une offre. Les deux parcours aboutissent au même objet — une Proposition Active — suivi conjointement par les deux conseillers impliqués.",
      },
      {
        phase: "03",
        title: "Encodage de la procédure interne dans le workflow",
        description:
          "L'environnement APEC étant fortement procédurier, l'outil devait refléter la bonne pratique sans la contraindre excessivement : l'alignement entre les deux conseillers devait précéder toute communication externe. J'ai travaillé avec les équipes métier pour définir les étapes de progression d'une PA et les droits de modification associés à chaque profil. L'envoi d'emails aux parties externes (cadre, entreprise, candidats) est un choix délibéré, disponible uniquement à partir d'une certaine étape de la proposition.",
      },
      {
        phase: "04",
        title: "Conception du tableau de suivi partagé",
        description:
          "Une fois une PA initiée, les deux conseillers concernés accèdent à un tableau de suivi commun où ils peuvent visualiser l'avancement, faire évoluer le statut et clôturer la proposition selon différents motifs. J'ai conçu cette vue pour qu'elle soit lisible d'un coup d'œil — chaque PA affichant les informations essentielles sans avoir à ouvrir le détail — et pour que la mise à jour de statut soit rapide et sans ambiguïté.",
      },
      {
        phase: "05",
        title: "Validation itérative avec les deux profils utilisateurs",
        description:
          "Les cycles de présentation ont impliqué des représentants des deux populations de conseillers en simultané, ce qui a permis de vérifier que chaque parcours était compris et accepté par l'autre partie. Plusieurs ajustements ont émergé de ces sessions, notamment sur la clarté des étapes de progression et sur la gestion des cas limites — une PA sans réponse du conseiller d'en face, une proposition clôturée prématurément.",
      },
    ],
    resultat:
      "Un module complet couvrant les deux sens de la mise en relation : formulaire d'initiation d'une PA avec sélection d'offre ou de candidat, proposition de jusqu'à cinq profils correspondants, choix granulaire des destinataires des emails de notification, tableau de suivi partagé avec gestion des statuts, et écran de clôture avec motifs. L'ensemble est intégré au design system APEC et accessible aux deux populations de conseillers depuis leur espace respectif.",
    impact: [
      "MER informelle transformée en processus structuré, traçable et partagé entre les deux types de conseillers",
      "2 parcours miroir couvrant les deux sens de la mise en relation, depuis l'offre vers le candidat et inversement",
      "0 email envoyé sans alignement préalable — le workflow encode la procédure interne APEC et prévient les communications prématurées",
      "Suivi partagé : les deux conseillers impliqués dans une PA ont une visibilité commune sur l'avancement, sans dépendre d'échanges informels",
    ],
    images: { cover: "/apec/pa-list.png", context: ["/apec/pa-list.png", "/apec/pa-creation.png"] },
  },

  "apec-editeur": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Mission consulting",
    duration: "4 mois",
    tools: ["Figma", "Atomic Design"],
    context:
      "Dernier module conçu dans le cadre de la mission APEC, l'Éditeur de compétences a une origine singulière : il a commencé comme un script Python développé par un collaborateur APEC pour ses propres besoins d'analyse. Face à l'utilité évidente de l'outil, des managers ont décidé de l'intégrer au SI interne pour le rendre accessible à l'ensemble des conseillers. Le projet de design consistait donc à transformer un outil technique et personnel en un produit utilisable, robuste et aligné sur le design system APEC.",
    problematique:
      "Les conseillers APEC accompagnent des cadres et des entreprises dans un marché de l'emploi en constante évolution. Pour produire des recommandations pertinentes — orienter un cadre dans sa trajectoire professionnelle, conseiller une entreprise sur les compétences recherchées, ou alimenter des études internes — ils avaient besoin d'un outil capable d'analyser des volumes importants d'offres d'emploi collectées sur plusieurs années, selon des critères croisés et paramétrables. Le défi de conception : rendre accessible à tous les conseillers, quel que soit leur niveau de maturité avec les données, un outil d'analyse complexe avec des filtres multiples et des résultats exportables vers les formats utilisés aussi bien en interne (Excel, Word) que chez les cadres et entreprises accompagnés (PDF).",
    methodology: [
      {
        phase: "01",
        title: "Analyse de l'outil existant et des usages réels",
        description:
          "La première étape a été d'étudier le script Python d'origine et d'interviewer les quelques collaborateurs qui l'utilisaient déjà. L'objectif était de comprendre quels types de recherches ils effectuaient, comment ils structuraient leurs résultats et ce qu'ils faisaient des données extraites. Ces usages réels ont servi de base pour définir les fonctionnalités prioritaires et les cas d'usage à couvrir en premier.",
      },
      {
        phase: "02",
        title: "Conception de l'orchestrateur de recherche",
        description:
          "Le cœur du module est un orchestrateur de recherche avancée permettant de croiser plusieurs critères simultanément — secteur d'activité, type de compétences, zone géographique, période, niveau de rémunération — et de hiérarchiser les résultats selon des critères principaux et secondaires. J'ai travaillé sur plusieurs itérations pour rendre cet orchestrateur suffisamment puissant pour les usages analytiques complexes, tout en restant lisible pour un conseiller sans culture data particulière.",
      },
      {
        phase: "03",
        title: "Conception du système d'export via presse-papier structuré",
        description:
          "Une fois les résultats obtenus, les conseillers devaient pouvoir les intégrer facilement dans leurs livrables — rapports Word, présentations, tableurs ou PDFs. J'ai conçu un mécanisme de presse-papier structuré permettant de sélectionner les données à exporter et de choisir le format de sortie selon l'interlocuteur visé : Excel pour un usage interne, Word ou PDF pour une transmission à un cadre ou une entreprise. L'objectif était de supprimer toute friction entre l'analyse dans le SI et la restitution à l'externe.",
      },
      {
        phase: "04",
        title: "Tests d'utilisabilité avec des profils variés",
        description:
          "L'outil étant destiné à des conseillers aux niveaux de maturité très différents avec les données, les sessions de validation ont impliqué des profils contrastés — conseillers à l'aise avec l'analyse et conseillers peu habitués à manipuler des données volumineuses. Ces tests ont révélé des points de friction sur la formulation des critères de recherche et sur la lisibilité des résultats croisés, conduisant à plusieurs simplifications dans la présentation des données.",
      },
    ],
    resultat:
      "Un module d'analyse du marché de l'emploi intégré au SI APEC : orchestrateur de recherche multi-critères avec hiérarchisation des résultats, visualisation des données croisées par compétences et rémunération, et système d'export structuré vers Excel, Word et PDF. L'outil transforme des volumes importants de données d'offres d'emploi en insights lisibles et directement exploitables dans les livrables des conseillers.",
    impact: [
      "Script Python transformé en module SI accessible à l'ensemble des conseillers APEC, sans prérequis technique",
      "Plusieurs années d'offres d'emploi collectées rendues interrogeables en quelques clics via un orchestrateur multi-critères",
      "3 formats d'export — Excel, Word et PDF — couvrant les usages internes comme les restitutions aux cadres et entreprises",
      "5 modules livrés sur le même design system APEC — l'Éditeur de compétences conclut un écosystème design cohérent construit de zéro en 3 ans",
    ],
    images: { cover: "/apec/edc-search.png", context: ["/apec/edc-search.png", "/apec/edc-results.png"] },
  },

  autossimo: {
    client: "Autossimo",
    role: "Product Designer",
    duration: "6 mois",
    tools: ["Figma", "Atomic Design", "User Research", "Design System"],
    context:
      "Autossimo est le leader français de la vente de pièces détachées en ligne pour les professionnels de l'automobile. Avec plus de 20 ans d'existence, la plateforme s'est construite couche par couche, fonctionnalité après fonctionnalité, au rythme des évolutions du marché. Le résultat : un outil dense, puissant, mais dont l'ergonomie n'avait jamais fait l'objet d'une démarche UX structurée. J'ai été missionné pour conduire une recherche utilisateur complète et proposer une refonte du parcours d'achat, du catalogue jusqu'à la fiche produit.",
    problematique:
      "Comment moderniser l'expérience d'une plateforme B2B historique sans trahir les usages ancrés de ses utilisateurs professionnels, tout en la rendant compétitive face à une nouvelle génération de concurrents ?",
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
        title: "Audit heuristique et analyse technique",
        description:
          "Point de départ : comprendre l'existant de façon objective. J'ai conduit un audit heuristique complet de la plateforme en m'appuyant sur les 10 heuristiques de Nielsen, complété par une analyse Lighthouse pour évaluer les performances techniques, et une vérification des niveaux d'accessibilité WCAG. Cet état des lieux a permis d'identifier les irritants structurels avant même de parler aux utilisateurs.",
      },
      {
        phase: "02",
        title: "Benchmark concurrentiel",
        description:
          "J'ai analysé en profondeur trois acteurs du marché : Oscaro Pro, Mister Auto Pro et Partslink24. L'objectif n'était pas de copier, mais de cartographier les standards implicites que les utilisateurs professionnels commencent à intégrer, et d'identifier les angles différenciants qu'Autossimo pouvait occuper.",
      },
      {
        phase: "03",
        title: "Recherche terrain",
        description:
          "J'ai mené des sessions de shadowing et d'entretiens utilisateurs dans des garages de taille variée : petites structures indépendantes, garages intermédiaires et ateliers multi-marques importants. J'ai observé une réalité que les specs initiales n'avaient pas anticipée : dans de nombreux garages, c'est la secrétaire qui passe les commandes, mais c'est le mécanicien qui valide la référence. La commande se fait par véhicule, pas par catégorie de pièce. Et l'urgence est une contrainte permanente : une pièce commandée le matin doit arriver l'après-midi.",
      },
      {
        phase: "04",
        title: "Modélisation et conception",
        description:
          "À partir de la recherche, j'ai construit des personas et des user journeys qui reflètent ces usages réels. Ces livrables ont servi de base à la conception des nouveaux parcours : pré-sélection du véhicule dès l'entrée dans la plateforme, refonte de la vue catalogue, redesign de la fiche produit, et intégration d'une vue moteur éclaté. En parallèle, j'ai initié un design system fondé sur les principes de l'Atomic Design.",
      },
    ],
    resultat:
      "Un parcours d'achat refondu de bout en bout, ancré dans les réalités du terrain plutôt que dans des hypothèses produit. La pré-sélection par véhicule — insight direct du shadowing — a restructuré l'ensemble du catalogue autour de la logique mentale des utilisateurs. Les livrables incluent wireframes, prototype interactif haute fidélité, et les premières fondations du design system Autossimo.",
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
      "Démarche ayant objectivé des décisions de refonte qui auraient pu rester intuitives",
      "Insights terrain ayant convaincu les équipes produit de prioriser la recherche utilisateur comme étape non négociable",
      "Design system initié posant un cadre réduisant significativement les coûts de conception sur les itérations suivantes",
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
    duration: "2 mois",
    tools: ["Figma", "WordPress", "UI Kit", "Adobe XD"],
    context:
      "Neotropical Primate Conservation est une ONG britannique dont la mission est de protéger les primates et leurs habitats en Amérique du Sud, en éduquant les populations locales et en faisant évoluer les pratiques touristiques. L'organisation est financée par des subventions du Royaume-Uni et par les dons du grand public. Sa présence en ligne se résumait à un blog WordPress standard : une seule page de présentation pour l'entité péruvienne, et les autres branches dispersées dans des posts de blog. Pas d'architecture, pas d'identité visuelle maîtrisée, pas de parcours pour convertir un visiteur en donateur. J'ai rejoint NPC pendant deux mois à Moyobamba, au cœur de l'Amazonie péruvienne, dans le cadre d'un échange : logement fourni, mission complète à ma charge.",
    problematique:
      "Comment donner à une ONG dispersée et sous-représentée en ligne la crédibilité et la visibilité nécessaires pour attirer des dons et des soutiens, avec zéro budget, deux mois, et un contexte entièrement hispanophone ?",
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
        title: "Découverte et cadrage",
        description:
          "Les premières semaines ont été consacrées à comprendre NPC de l'intérieur : son histoire, ses entités (Pérou et autres pays d'Amérique du Sud), ses actions sur le terrain, ses publics, ses besoins de communication. Sans brief formalisé, j'ai construit le périmètre du projet à partir d'entretiens informels avec l'équipe locale et d'une lecture complète des contenus existants, éparpillés entre le blog, les réseaux sociaux et des documents internes.",
      },
      {
        phase: "02",
        title: "Architecture de l'information",
        description:
          "Le premier enjeu était structurel : passer d'un blog monolithique à un site capable de présenter chaque entité de l'ONG de façon cohérente et indépendante, tout en maintenant une identité globale forte. J'ai défini l'arborescence du site, la structure du CMS WordPress et les gabarits de pages nécessaires, en anticipant les besoins de mise à jour autonome par l'équipe après mon départ.",
      },
      {
        phase: "03",
        title: "Design de l'interface",
        description:
          "Partant de l'identité existante de NPC, j'ai conçu une interface qui reflète sérieux scientifique et engagement humaniste, avec l'ambition de rassurer un donateur potentiel autant qu'un chercheur ou un journaliste. Chaque entité dispose de sa propre section, avec ses projets, ses actions, et un accès clair aux moyens de soutenir l'organisation.",
      },
      {
        phase: "04",
        title: "Intégration, contenu et bilingue",
        description:
          "J'ai assuré l'intégration complète du contenu en deux langues, espagnol et anglais. Le site intègre également un feed de publications Facebook et Instagram, pour ancrer la présence en ligne dans une dynamique vivante.",
      },
      {
        phase: "05",
        title: "Handoff et autonomie",
        description:
          "Avant la fin des deux mois, j'ai assuré le handoff complet auprès de l'équipe : prise en main du CMS, publication de nouveaux posts, gestion des contenus par entité. L'objectif était qu'ils puissent faire vivre le site sans dépendance technique après mon départ.",
      },
    ],
    resultat:
      "Un site complet, bilingue, structuré autour des entités de NPC et de leurs actions, avec une identité visuelle cohérente et un parcours orienté vers la confiance et l'engagement du visiteur. Livré en deux mois, de la définition de l'architecture au handoff, dans un environnement sans budget et en immersion totale dans le contexte péruvien.",
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
      "Présence en ligne à la hauteur des ambitions de NPC et de la réalité de ses actions sur le terrain",
      "Blog improvisé remplacé par une plateforme structurée et professionnelle, crédibilisant l'organisation auprès des donateurs et partenaires institutionnels",
      "Équipe autonome sur la gestion du CMS dès la fin de la mission, sans dépendance technique",
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
    duration: "2 mois",
    tools: ["Adobe XD", "UI Kit", "Prototypage", "Wireframes"],
    context:
      "Le CFA CERFAL est un réseau de centres de formation par apprentissage présent en Île-de-France, sur l'ensemble du territoire hexagonal et dans les DROM-COM. Son site web joue un rôle central : c'est le point de contact principal entre l'institution et ses trois publics distincts, les étudiants, les parents et les entreprises partenaires. Mais le site historique, figé dans une logique des années 2000, ne reflétait plus ni l'image ni les ambitions d'un réseau de cette envergure. Nous avons répondu à leur appel d'offre avec deux mois pour concevoir, convaincre, et livrer une proposition complète.",
    problematique:
      "Comment moderniser l'image et les parcours d'un organisme de formation dont les trois typologies d'utilisateurs ont des besoins radicalement différents, tout en servant à la fois un objectif d'attractivité et de mise en relation efficace ?",
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
        title: "Recherche et cadrage",
        description:
          "Avant de toucher à la moindre interface, j'ai conduit une analyse des besoins internes du CFA : objectifs institutionnels, contraintes techniques, volume et nature des contenus à intégrer. J'ai complété ce cadrage par un benchmark concurrentiel des principaux sites de CFA et d'organismes de formation, pour identifier les standards UX du secteur et les axes de différenciation disponibles.",
      },
      {
        phase: "02",
        title: "Conception UX",
        description:
          "La structuration des parcours utilisateurs a été le cœur du travail UX. J'ai défini trois parcours distincts correspondant aux trois profils cibles : l'étudiant en recherche de formation, le parent qui accompagne un projet d'orientation, et l'entreprise souhaitant devenir partenaire. Pour chaque parcours, j'ai identifié les points de friction du site existant et simplifié l'architecture de l'information pour réduire les obstacles à la mise en contact.",
      },
      {
        phase: "03",
        title: "Conception UI",
        description:
          "Pour l'appel d'offre, j'ai produit une V1 graphique avec un univers illustré, pensé pour renforcer la proximité avec un public jeune tout en maintenant la crédibilité attendue d'une institution. J'ai entièrement refondu l'UI Kit : couleurs, typographie, composants, pictogrammes, avec l'objectif de faciliter la maintenance et les évolutions futures du site.",
      },
      {
        phase: "04",
        title: "Itération et optimisation",
        description:
          "Une V2 a suivi, centrée sur l'optimisation : retouche et compression des visuels pour améliorer les temps de chargement, ajustements des maquettes selon les retours de l'équipe projet, et finalisation des prototypes interactifs sur Adobe XD.",
      },
    ],
    resultat:
      "Un prototype fonctionnel complet présentant les trois parcours utilisateurs, une bibliothèque UI entièrement refondue prête pour l'intégration, des visuels optimisés pour le web, et une documentation UX/UI pour assurer la continuité du projet. Le tout livré dans un délai de deux mois, dans le cadre d'une réponse à appel d'offre.",
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
      "Démonstration qu'une refonte UX ancrée dans les usages réels pouvait transformer la lisibilité et l'attractivité d'un site institutionnel",
      "Trois parcours distincts donnant à chaque profil un accès clair et direct à ce qu'il cherche, réduisant la friction à l'entrée",
      "Proposition complète livrée en deux mois — du cadrage au prototype fonctionnel — dans le cadre d'un appel d'offre",
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
      "Globedreamers est une startup française portant une plateforme de crowdfunding collaborative dédiée aux projets de voyages responsables et porteurs de sens. Sa mission est double : fédérer une communauté de voyageurs engagés autour de valeurs communes, et attirer des entreprises partenaires souhaitant soutenir des initiatives à impact positif. J'ai rejoint le projet en freelance et collaboré avec l'équipe pendant deux ans, sur un site déjà en ligne avec une base d'utilisateurs active, mais dont l'expérience et l'identité visuelle avaient besoin d'une refonte profonde pour soutenir les ambitions de croissance de la startup.",
    problematique:
      "Comment faire évoluer une plateforme existante pour qu'elle serve simultanément deux logiques très différentes, l'engagement émotionnel d'une communauté de voyageurs et la crédibilité attendue par des entreprises partenaires, sans perdre la cohérence de l'ensemble ?",
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
        title: "Cadrage et alignement produit",
        description:
          "Avant d'ouvrir Figma, j'ai conduit des entretiens réguliers avec les fondateurs et l'équipe produit pour comprendre la vision, les priorités business et les retours remontés par les utilisateurs existants. Ces échanges ont servi de base continue tout au long des deux ans de collaboration, pour calibrer les évolutions en fonction de ce qui fonctionnait ou non sur la plateforme réelle.",
      },
      {
        phase: "02",
        title: "Benchmark concurrentiel",
        description:
          "J'ai analysé les principales plateformes de crowdfunding et leurs modèles d'engagement — Ulule, KissKissBankBank, GoFundMe — mais aussi des plateformes de voyage communautaires, pour identifier les conventions UX attendues par les utilisateurs et les leviers de différenciation disponibles pour Globedreamers.",
      },
      {
        phase: "03",
        title: "Refonte UX et architecture de l'information",
        description:
          "La plateforme couvrait des sections très différentes : Accueil, Projets, Dons, Entreprises, Appel à projets, E-learning. J'ai restructuré l'architecture de l'information pour fluidifier la navigation entre ces univers et clarifier le parcours de chaque type d'utilisateur, du visiteur curieux au donateur engagé en passant par le partenaire entreprise.",
      },
      {
        phase: "04",
        title: "Conception UI et identité visuelle",
        description:
          "J'ai refondu l'UI Kit complet et mis en place un design system unifié pour garantir cohérence et évolutivité sur l'ensemble des sections. L'identité visuelle a été repensée avec un univers illustré, positif et inspirant, en phase avec les valeurs de durabilité. J'ai également produit un kit social media et une charte graphique pour assurer la cohérence des communications numériques.",
      },
      {
        phase: "05",
        title: "Itération continue sur deux ans",
        description:
          "La durée de la collaboration a permis un travail d'amélioration progressive, avec des cycles itératifs alimentés par les retours de l'équipe interne et l'observation des comportements réels des utilisateurs sur la plateforme live. Les prototypes interactifs haute fidélité produits sur Adobe XD ont servi à valider chaque évolution majeure avant intégration.",
      },
    ],
    resultat:
      "Une plateforme entièrement refondue sur le plan visuel et fonctionnel, avec un design system cohérent capable de soutenir les évolutions futures, une identité graphique différenciante et une architecture de l'information clarifiée autour des deux grandes logiques de la plateforme. L'ensemble des livrables (prototype interactif, composants UI, charte graphique, kit social media) a été transmis et intégré au produit live.",
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
      "Identité visuelle et expérience utilisateur à la hauteur des ambitions de croissance de la startup",
      "Design system cohérent couvrant l'ensemble de la plateforme et capable de soutenir les évolutions futures",
      "Deux ans de collaboration sur un produit vivant, avec de vrais utilisateurs et des contraintes réelles — l'une des expériences les plus formatrices en tant que designer freelance",
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
    isHub: true,
  },
  {
    id: "apec-agenda",
    title: "Agenda",
    subtitle: "Redesign of an appointment management tool for APEC advisors",
    year: "2023 – 2024",
    tag: "Enterprise software product design",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "UX Research", "Design System", "Figma", "Dark/Light Mode"],
  },
  {
    id: "apec-demande",
    title: "Requests",
    subtitle: "Migration and redesign of a request management system, from Salesforce CRM to APEC's internal platform",
    year: "2024",
    tag: "Enterprise software product design",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "Workflow Design", "Information Architecture", "Figma", "Design System"],
  },
  {
    id: "apec-relation-client",
    title: "Client Relations",
    subtitle: "Centralising and tracking advisor/client exchanges in APEC's internal platform, with native Outlook integration",
    year: "2024",
    tag: "Enterprise software product design",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "UX Design", "API Integration", "Workflow Design", "Figma", "Design System"],
  },
  {
    id: "apec-proposition-active",
    title: "Active Proposal",
    subtitle: "Structuring the connection between executive advisors and company advisors within APEC's internal platform",
    year: "2024 – 2025",
    tag: "Enterprise software product design",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "Workflow Design", "Dual Pathway UX", "Figma", "Design System"],
  },
  {
    id: "apec-editeur",
    title: "Skills Editor",
    subtitle: "Productising an internal job market analysis tool, from a Python script to a platform module accessible to all advisors",
    year: "2025",
    tag: "Enterprise software product design",
    parentId: "apec",
    parentTitle: "Apec",
    tasks: ["Product Design", "Data Visualization", "Search UX", "Export Design", "Figma", "Design System"],
  },
  {
    id: "autossimo",
    title: "Autossimo",
    subtitle: "Redesigning the B2B purchasing experience on France's leading automotive parts platform",
    year: "2022",
    tag: "B2B e-shop product design",
    tasks: ["Product Design", "UX Research", "Shadowing", "Benchmark", "Design System", "Figma"],
  },
  {
    id: "npc",
    title: "NPC Peru",
    subtitle: "Full website redesign for a South American conservation NGO, delivered in immersion in Peru",
    year: "2021",
    tag: "UI/UX redesign & CMS dev",
    tasks: ["UX Design", "Information Architecture", "WordPress", "Bilingual ES/EN", "Figma"],
  },
  {
    id: "cerfal",
    title: "CFA Cerfal",
    subtitle: "UX/UI redesign of an institutional website for a network of training centres, as part of a pitch",
    year: "2020",
    tag: "UI/UX Redesign",
    tasks: ["UX Design", "UI Design", "Benchmark", "Three-pathway UX", "Adobe XD"],
  },
  {
    id: "globedreamers",
    title: "Globedreamers",
    subtitle: "UX/UI redesign and design system for a responsible travel crowdfunding platform, in a long-term collaboration with a startup",
    year: "2019 – 2021",
    tag: "UI/UX Support",
    tasks: ["UX Design", "UI Design", "Design System", "Benchmark", "Adobe XD"],
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
    isHub: true,
    client: "APEC",
    role: "Senior Product Designer — Consulting mission",
    duration: "3 years",
    tools: ["Figma", "Design Tokens", "Atomic Design", "Variables"],
    subProjects: ["apec-agenda", "apec-demande", "apec-relation-client", "apec-proposition-active", "apec-editeur"],
    context:
      "Joining APEC, I discovered a non-existent design environment: no component library, no guidelines, an empty Figma workspace, and brand guidelines inherited from print with no digital adaptation. Product and tech teams were advancing project by project, with no shared reference, generating growing visual inconsistencies and slowing down every new interface production. Building a UI library was not a side project — it was the condition for design work to have any lasting impact.",
    problematique:
      "How do you lay the foundations of a robust, scalable design system in an organisation that has never had one, while simultaneously delivering operational interfaces on live product projects?",
    designSystem: {
      description:
        "Building a UI library and design system from scratch for an enterprise platform with no existing design culture",
      items: [
        "Starting from the field, not from the ideal — the library was built directly alongside the first project to deliver: the Agenda. Each component needed for the project becomes a building block of the library, ensuring everything produced answers a real need, immediately tested in context.",
        "Structured using Atomic Design — atoms (colours, typography, icons, buttons), molecules (form fields, tags, badges), organisms (cards, navigation bars, modals). This hierarchy makes the library readable for the whole team and enables progressive extension without breaking existing foundations.",
        "Dynamic dark / light variable system — set up from the very first components, enabling smooth switching between modes without duplicating components, and ensuring consistency across both modes as the library grew.",
        "Accessibility built in from the start — contrasts, focus states, typographic hierarchy and minimum interactive zone sizes are design constraints, not afterthoughts.",
        "Progressive adoption and documentation — components named, organised and documented to be understood by any designer joining later. Library extended and adopted across the 4 subsequent projects: Requests, Client Relations, Active Proposal, Skills Editor.",
      ],
    },
    impact: [
      "Interface production accelerated on every new project through a shared foundation of reusable components",
      "Visual consistency established naturally across the platform, without having to re-impose it project by project",
      "Lasting design culture: after the mission, teams have a shared reference to keep producing coherent interfaces",
    ],
    images: {
      cover: "/apec/apec-cover.png",
      context: [
        "/apec/ui-atoms-molecules.png",
        "/apec/ui-input-states.png",
        "/apec/ui-variables.png",
      ],
    },
  },

  "apec-agenda": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Consulting mission",
    duration: "8 months",
    tools: ["Figma", "Atomic Design", "Prototyping"],
    context:
      "The Agenda is the first project I work on when I join APEC. It is already three months behind schedule, teams are waiting for deliverables, and there is no design foundation to build on. The tool must allow advisors to manage all their appointments: individual consultations, company meetings, group workshops published on Apec.fr — across multiple time zones and with complex business rules. The challenge is not just designing a functional interface, it's doing it fast, on an ageing Angular system, with no responsive design, and with stakeholders who don't always share the same reading of the project.",
    problematique:
      "How do you design a dense, multi-context scheduling interface that works for advisors who use it full-time, while meeting strong technical constraints and numerous business rules?",
    methodology: [
      {
        phase: "01",
        title: "Scoping through co-creation workshops",
        description:
          "Before any mockup, I facilitated workshops bringing together business advisors, managers and IT representatives. The goal: surface real needs, identify field constraints, and align priorities among stakeholders who didn't always share the same reading of the project. These workshops were decisive in structuring the functional scope and securing team buy-in ahead of design.",
      },
      {
        phase: "02",
        title: "Benchmark to anchor design decisions",
        description:
          "Faced with the complexity of a dense, multi-context scheduling interface, I benchmarked existing planning tools. The result clearly pointed towards a Microsoft Teams-like experience: an interface familiar to users, recognised for its effective ergonomics in dense professional contexts, and one that reduces the learning curve.",
      },
      {
        phase: "03",
        title: "Journey design and wireframes",
        description:
          "I structured the journeys around the key needs identified in workshops: creating configurable appointments by context (individual, company, workshop), sharing and editing slots between colleagues, timezone management, and attaching documents and requests to appointments. Wireframes were presented to stakeholders to validate functional logic before moving to high-fidelity.",
      },
      {
        phase: "04",
        title: "Iterative mockup validation",
        description:
          "I structured review cycles in two steps: wireframe presentations to validate logic, then high-fidelity mockups to validate rendering and interactions. Each session was prepared with a clear framing of the decisions expected, to avoid unstructured back-and-forth. Feedback was collected systematically and prioritised by impact on the experience.",
      },
      {
        phase: "05",
        title: "Lite mobile extension",
        description:
          "After several months working on the desktop version, a lightweight mobile version was scoped and designed, focused solely on appointment consultation. A deliberately narrow scope, dictated by the constraints of the existing Angular system, but one that addresses a real mobility need for advisors on the move.",
      },
    ],
    resultat:
      "A complete desktop scheduling interface in dark and light mode, covering all appointment contexts for APEC advisors, with a lite mobile version for consultation. Mockups were validated by the business teams and handed over to IT for integration.",
    impact: [
      "Structured UX approach demonstrated in an organisation with no prior UX practice, laying the foundations for all subsequent projects",
      "Co-creation workshops established on this project became the reference method for the entire mission",
      "Components designed for the Agenda became the starting point for the UI library adopted across the full platform",
    ],
    images: {
      cover: "/apec/agenda-cover.png",
      context: ["/apec/agenda-vues-overview.png"],
      phases: [
        ["/apec/agenda-wireframe-nominal.png"],
        null,
        ["/apec/agenda-wireframe-sidepanel.png"],
        ["/apec/agenda-popup-creation.png"],
        ["/apec/agenda-mobile-overview.png"],
      ],
      resultat: "/apec/agenda-desktop-dark.png",
    },
  },

  "apec-demande": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Consulting mission",
    duration: "6 months",
    tools: ["Figma", "Atomic Design"],
    context:
      "This project is a direct continuation of the Agenda project, within the same APEC enterprise platform. The UI library and guidelines established upstream served as an immediate foundation, allowing design to start without a prior design framing phase. The tool already existed in Salesforce — the challenge was not to create a concept, but to migrate and reinvent a complex business process into a proprietary environment, making it better suited to employees' real-world usage.",
    problematique:
      "APEC requests originate from a phone call or email received by an advisor, and must be formalised, qualified and routed to the right person. In Salesforce, this process relied on a view orchestrator — a system of pre-filtered lists by geographic region, business speciality and service type — that allowed managers to assign requests efficiently. Recreating this system in APEC's proprietary platform posed two major challenges: first, reproducing the configuration power of Salesforce without inheriting its complexity; second, enriching the request object so it centralises all related exchanges (emails, calls, files, colleague comments) — creating a strong connection with the Client Relations module being designed in parallel.",
    methodology: [
      {
        phase: "01",
        title: "Mapping the existing process",
        description:
          "The first step was auditing how the system worked in Salesforce: how a request was created, which fields were filled in, how the view orchestrator was configured, and how managers assigned and closed requests. This audit served as a basis for identifying what should be kept, simplified or rethought in the new version.",
      },
      {
        phase: "02",
        title: "Scoping workshops with advisors and managers",
        description:
          "Separate workshops were held with the two main user profiles. With advisors, the goal was to understand the moment of entry (always in a post-call or post-email context, often under time pressure) and the critical information to capture quickly. With managers, the focus was on understanding the sorting and assignment logic, and the criteria that made a view useful day-to-day.",
      },
      {
        phase: "03",
        title: "Designing the view orchestrator",
        description:
          "The central challenge of the project was recreating the orchestrator. I worked through several iterations to design a module allowing managers to create and configure their own views based on business criteria (region, speciality, service type) — as powerful as Salesforce, but designed for users who are not configuration experts. Each version was submitted for validation before moving forward.",
      },
      {
        phase: "04",
        title: "Defining the request object and alignment with Client Relations",
        description:
          "A request is more than a form: it carries attachments, a description, colleague comments, and associated email and phone exchanges. I worked in coordination with the Client Relations project to ensure consistency between the two modules and avoid duplicated information in the interface.",
      },
      {
        phase: "05",
        title: "Iterative validation and feedback cycles",
        description:
          "Each surface (creation, list, orchestrator, closure) followed a presentation and validation cycle with the business teams and IT department. Feedback fed successive iterations until validated mockups ready for production were achieved.",
      },
    ],
    resultat:
      "Four surfaces delivered covering the entire lifecycle of a request: the creation and editing form (with geographic, business and service metadata, attachments and comments), the list screen with filtered views, the view configuration orchestrator, and the closure screen with reasons. The whole is natively integrated into the APEC design system and directly consistent with the Client Relations module.",
    impact: [
      "Salesforce replaced by a proprietary platform tool covering the entire request workflow, from entry to closure",
      "4 surfaces designed and validated — creation, list management, view orchestration, closure",
      "1 unified object centralising emails, calls, files and comments around each request, consistent with the Client Relations module",
    ],
    images: { cover: "/apec/demandes-list.png", context: ["/apec/demandes-list.png", "/apec/demandes-detail.png"] },
  },

  "apec-relation-client": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Consulting mission",
    duration: "5 months",
    tools: ["Figma", "Atomic Design"],
    context:
      "The third module designed as part of the APEC mission, Client Relations builds on the design system and practices established during the Agenda and Requests projects. It has a direct connection with the Requests module: emails and calls tracked in Client Relations can be linked to active requests, creating a unified history around each executive's or company's profile.",
    problematique:
      "When an executive supported by APEC changes advisor, the handover of communication history relied entirely on the outgoing advisor's goodwill and availability: an oral summary at best, a Word document in more careful cases, and often nothing at all. The new advisor had to dig through the client profile history with no guarantee of finding useful information, and restart the support from scratch — to the detriment of the executive, forced to re-explain everything, and at the cost of significant time loss for the advisor. The challenge was twofold: design a communication tracking system simple enough to be adopted by all advisors, and rich enough to capture the reality of their interactions — inbound and outbound emails via Outlook, completed or missed phone calls, exchanges linked to active requests.",
    methodology: [
      {
        phase: "01",
        title: "Mapping existing communication flows",
        description:
          "Workshops with advisors revealed three types of interactions to cover: emails received via Outlook, emails sent to executives, and phone calls. Each flow had its own usage constraints — emails arrived in volume, calls were often logged post-call with little time available. Mapping these flows allowed us to define journeys tailored to each case.",
      },
      {
        phase: "02",
        title: "Designing the email journey with Outlook integration",
        description:
          "The technical integration relied on an Outlook API connector. I designed a two-step journey: the advisor tags an inbound email \"SI\" in Outlook, which is automatically pulled into a list of emails to assign in the platform. They then select the emails for a given executive and attach them to their profile. The tool also allows sending emails directly from the platform — from the advisor's address or a no-reply mailbox — to centralise tracking of outbound exchanges.",
      },
      {
        phase: "03",
        title: "Designing the call tracking journey",
        description:
          "For calls, the guiding principle was simplicity: from the \"Communication history\" tab on the client profile, a dedicated button allows manually logging a call, recording whether it was answered, giving it a custom title and describing the exchange. This minimal journey was designed to fit naturally into the post-call workflow, without additional friction.",
      },
      {
        phase: "04",
        title: "Designing the \"Communication history\" view",
        description:
          "The heart of the module is the unified history view: inbound emails, outbound emails and logged calls appear in a readable timeline on the executive's or company's profile. I worked on information density and visual hierarchy so advisors could quickly scan recent interactions without opening each entry. Exchanges linked to an active request are also identifiable at a glance.",
      },
      {
        phase: "05",
        title: "Iterative validation with advisors",
        description:
          "Presentation cycles directly involved end-user advisors, particularly around adoption questions: was the call logging journey fast enough? Was the list of emails to assign readable at volume? Their feedback led to several simplifications, notably in the call entry view and the condensed history display.",
      },
    ],
    resultat:
      "A complete communication tracking module integrated into each executive's and company's profile: list of inbound Outlook emails to assign, email sending from the platform, manual call logging with summary and status, and a unified chronological \"Communication history\" view accessible to all advisors. The whole is natively connected to the Requests module for complete consistency of associated interactions.",
    impact: [
      "Centralised, accessible history — where handover previously relied on a Word document or an oral briefing",
      "3 types of exchanges unified in a single chronological view — inbound emails, outbound emails, phone calls",
      "Outlook API integration enabling email assignment without duplicate entry or manual copy-pasting",
      "Continuity of support guaranteed for every executive, regardless of the advisor in charge — no more starting from scratch",
    ],
    images: { cover: "/apec/rc-fiche-cadre.png", context: ["/apec/rc-fiche-cadre.png", "/apec/rc-outlook.png"] },
  },

  "apec-proposition-active": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Consulting mission",
    duration: "5 months",
    tools: ["Figma", "Atomic Design"],
    context:
      "The fourth module designed as part of the APEC mission, Active Proposal builds on the design system established in previous projects. It addresses a strong organisational need: creating a structured bridge between two advisor populations that had until then been working in silos — Executive advisors, supporting individuals in their job search, and Company advisors, managing job offers and recruiters.",
    problematique:
      "The connection between Executive and Company advisors — internally known as the MER process — relied on informal, opportunistic exchanges with no dedicated framework or tool. In practice, without a structured process, some advisors took solo initiatives: an Executive advisor would propose an offer directly to their client without knowing the company context; a Company advisor would suggest a candidate without fully understanding their situation. These shortcuts generated errors and, in an environment as process-driven as APEC, friction between colleagues. The design challenge was twofold: creating a bidirectional workflow — with either type of advisor able to initiate a connection — while encoding APEC's internal procedure into the tool: alignment between the two advisors first, only then communication to the executive or company.",
    methodology: [
      {
        phase: "01",
        title: "Understanding the two populations and their logic",
        description:
          "Workshops brought together Executive and Company advisors to map their respective perspectives on the connection process. It quickly became apparent that the two groups had different instincts and asymmetric knowledge of the context on the other side. This asymmetry was precisely the source of the observed friction and directly shaped the design of the two journeys.",
      },
      {
        phase: "02",
        title: "Designing the two mirror journeys",
        description:
          "I designed two distinct but symmetrical journeys: the Executive-to-Offer path, allowing an Executive advisor to select a job offer from the APEC database and propose up to five matching candidates; and the reverse path, allowing a Company advisor to select a candidate and match them with an offer. Both journeys produce the same object — an Active Proposal — jointly tracked by the two advisors involved.",
      },
      {
        phase: "03",
        title: "Encoding the internal procedure into the workflow",
        description:
          "APEC being a highly process-driven environment, the tool had to reflect best practice without being overly prescriptive: advisor alignment had to precede any external communication. I worked with the business teams to define the progression steps for a proposal and the editing rights associated with each profile. Sending emails to external parties (executives, companies, candidates) is a deliberate choice, available only from a certain stage of the proposal.",
      },
      {
        phase: "04",
        title: "Designing the shared tracking dashboard",
        description:
          "Once a proposal is initiated, both advisors involved access a shared tracking board where they can view progress, update the status and close the proposal with a reason. I designed this view to be readable at a glance — each proposal showing essential information without needing to open the detail — and to make status updates fast and unambiguous.",
      },
      {
        phase: "05",
        title: "Iterative validation with both user profiles",
        description:
          "Presentation cycles involved representatives from both advisor populations simultaneously, making it possible to verify that each journey was understood and accepted by the other party. Several adjustments emerged from these sessions, particularly around the clarity of progression steps and edge case handling — a proposal with no response from the other advisor, a proposal closed prematurely.",
      },
    ],
    resultat:
      "A complete module covering both directions of the connection: proposal initiation form with offer or candidate selection, proposal of up to five matching profiles, granular choice of email notification recipients, shared tracking dashboard with status management, and a closure screen with reasons. The whole is integrated into the APEC design system and accessible to both advisor populations from their respective workspaces.",
    impact: [
      "Informal MER process transformed into a structured, traceable workflow shared between both types of advisors",
      "2 mirror journeys covering both directions of the connection, from offer to candidate and vice versa",
      "0 emails sent without prior alignment — the workflow encodes APEC's internal procedure and prevents premature external communications",
      "Shared tracking: both advisors involved in a proposal have common visibility on progress, without relying on informal exchanges to stay informed",
    ],
    images: { cover: "/apec/pa-list.png", context: ["/apec/pa-list.png", "/apec/pa-creation.png"] },
  },

  "apec-editeur": {
    parentId: "apec",
    parentTitle: "Apec",
    client: "APEC",
    role: "Senior Product Designer — Consulting mission",
    duration: "4 months",
    tools: ["Figma", "Atomic Design"],
    context:
      "The last module designed as part of the APEC mission, the Skills Editor has a distinctive origin: it began as a Python script developed by an APEC employee for their own analysis needs. Recognising the tool's evident usefulness, managers decided to integrate it into the internal platform to make it accessible to all advisors. The design project was therefore about transforming a technical, personal tool into a usable, robust product aligned with the APEC design system.",
    problematique:
      "APEC advisors support executives and companies in a constantly evolving job market. To produce relevant recommendations — guiding an executive in their career path, advising a company on in-demand skills, or feeding internal research — they needed a tool capable of analysing large volumes of job offers collected over several years, using cross-referenced and configurable criteria. The design challenge: making a complex analysis tool with multiple filters and exportable results accessible to all advisors, regardless of their level of data literacy — covering formats used both internally (Excel, Word) and with the executives and companies they support (PDF).",
    methodology: [
      {
        phase: "01",
        title: "Analysing the existing tool and real-world usage",
        description:
          "The first step was studying the original Python script and interviewing the few employees who were already using it. The goal was to understand what types of searches they ran, how they structured their results and what they did with the extracted data. These real-world uses served as a foundation for defining the priority features and the use cases to cover first.",
      },
      {
        phase: "02",
        title: "Designing the search orchestrator",
        description:
          "The heart of the module is an advanced search orchestrator allowing multiple criteria to be crossed simultaneously — industry sector, skill type, geographic area, time period, salary level — with results ranked by primary and secondary criteria. I worked through several iterations to make this orchestrator powerful enough for complex analytical use cases, while remaining readable for advisors without a strong data background.",
      },
      {
        phase: "03",
        title: "Designing the structured clipboard export system",
        description:
          "Once results were obtained, advisors needed to be able to integrate them easily into their deliverables — Word reports, presentations, spreadsheets or PDFs. I designed a structured clipboard mechanism allowing users to select the data to export and choose the output format based on the intended recipient: Excel for internal use, Word or PDF for handover to an executive or company. The goal was to remove all friction between analysis in the platform and external reporting.",
      },
      {
        phase: "04",
        title: "Usability testing with varied profiles",
        description:
          "As the tool was intended for advisors with very different levels of data maturity, validation sessions involved contrasting profiles — advisors comfortable with analysis and advisors less used to handling large data sets. These tests revealed friction points around the formulation of search criteria and the readability of cross-referenced results, leading to several simplifications in how data was presented.",
      },
    ],
    resultat:
      "A job market analysis module integrated into the APEC platform: a multi-criteria search orchestrator with result ranking, cross-referenced data visualisation by skills and salary, and a structured export system to Excel, Word and PDF. The tool transforms large volumes of job offer data into readable insights directly usable in advisors' deliverables.",
    impact: [
      "Python script transformed into a platform module accessible to all APEC advisors, with no technical prerequisite",
      "Several years of collected job offers made queryable in a few clicks via a multi-criteria orchestrator",
      "3 export formats — Excel, Word and PDF — covering both internal use and external reporting to executives and companies",
      "5 modules delivered on the same APEC design system — the Skills Editor concludes a coherent design ecosystem built from scratch over 3 years",
    ],
    images: { cover: "/apec/edc-search.png", context: ["/apec/edc-search.png", "/apec/edc-results.png"] },
  },

  autossimo: {
    client: "Autossimo",
    role: "Product Designer",
    duration: "6 months",
    tools: ["Figma", "Atomic Design", "User Research", "Design System"],
    context:
      "Autossimo is France's leading online automotive parts retailer for professionals. With over 20 years of history, the platform was built layer by layer, feature by feature, keeping pace with market evolution. The result: a dense, powerful tool whose ergonomics had never been the subject of a structured UX approach. I was brought in to conduct comprehensive user research and propose a redesign of the purchasing journey, from the catalogue to the product page.",
    problematique:
      "How do you modernise the experience of a legacy B2B platform without betraying the ingrained habits of its professional users, while making it competitive against a new generation of rivals?",
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
        title: "Heuristic audit and technical analysis",
        description:
          "Starting point: understanding the existing platform objectively. I conducted a full heuristic audit using Nielsen's 10 heuristics, complemented by a Lighthouse analysis to assess technical performance and a WCAG accessibility review. This baseline made it possible to identify structural pain points before even speaking to users.",
      },
      {
        phase: "02",
        title: "Competitive benchmark",
        description:
          "I conducted an in-depth analysis of three market players: Oscaro Pro, Mister Auto Pro and Partslink24. The goal was not to copy, but to map the implicit standards that professional users are beginning to internalise, and to identify the differentiating angles Autossimo could occupy.",
      },
      {
        phase: "03",
        title: "Field research",
        description:
          "I conducted shadowing sessions and user interviews across garages of varying sizes: small independent workshops, mid-size garages and large multi-brand repair centres. I observed a reality the initial specs had not anticipated: in many garages, it's the receptionist who places orders, but the mechanic who validates the part reference. Orders are placed by vehicle, not by part category. And urgency is a permanent constraint: a part ordered in the morning must arrive by the afternoon.",
      },
      {
        phase: "04",
        title: "Modelling and design",
        description:
          "From the research, I built personas and user journeys reflecting these real-world usage patterns. These deliverables served as the foundation for the new journey designs: upfront vehicle pre-selection, catalogue view redesign, product page redesign, and integration of an exploded engine view. In parallel, I initiated a design system built on Atomic Design principles.",
      },
    ],
    resultat:
      "A fully redesigned purchasing journey, grounded in field realities rather than product assumptions. Vehicle pre-selection — a direct insight from shadowing — restructured the entire catalogue around users' mental model. Deliverables include wireframes, a high-fidelity interactive prototype, and the first foundations of the Autossimo design system.",
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
      "Redesign decisions objectified through a combined data and field approach, removing reliance on intuition",
      "Field insights convinced the product teams to treat user research as a non-negotiable step in future iterations",
      "Design system foundations laid, significantly reducing design and development costs on subsequent iterations",
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
    duration: "2 months",
    tools: ["Figma", "WordPress", "UI Kit", "Adobe XD"],
    context:
      "Neotropical Primate Conservation is a British NGO whose mission is to protect primates and their habitats in South America, by educating local communities and shifting tourism practices around wildlife. The organisation is funded by UK grants and public donations. Its online presence amounted to a standard WordPress blog: a single page for the Peruvian branch, with the other country branches scattered across blog posts. No architecture, no coherent visual identity, no journey to convert a visitor into a donor. I joined NPC for two months in Moyobamba, in the heart of the Peruvian Amazon, as part of an exchange: accommodation provided, the full mission on my shoulders.",
    problematique:
      "How do you give a scattered, under-represented NGO the credibility and visibility needed to attract donations and support, with zero budget, two months, and a fully Spanish-speaking context?",
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
        title: "Discovery and scoping",
        description:
          "The first weeks were spent understanding NPC from the inside: its history, its branches (Peru and other South American countries), its field actions, its audiences, its communication needs. With no formalised brief, I built the project scope from informal interviews with the local team and a thorough read of existing content scattered across the blog, social media and internal documents.",
      },
      {
        phase: "02",
        title: "Information architecture",
        description:
          "The first challenge was structural: moving from a monolithic blog to a site capable of presenting each NGO branch coherently and independently, while maintaining a strong overall identity. I defined the site structure, the WordPress CMS architecture and the page templates needed, anticipating the team's need to update content autonomously after my departure.",
      },
      {
        phase: "03",
        title: "Interface design",
        description:
          "Building on NPC's existing identity, I designed an interface reflecting both scientific rigour and humanist commitment, aiming to reassure a potential donor as much as a researcher or journalist. Each branch has its own section, with its projects, its actions and a clear path to support the organisation.",
      },
      {
        phase: "04",
        title: "Integration, content and bilingual",
        description:
          "I handled the full integration of content in two languages, Spanish and English. The site also integrates a Facebook and Instagram feed, anchoring the online presence in a living, active dynamic.",
      },
      {
        phase: "05",
        title: "Handoff and autonomy",
        description:
          "Before the end of the two months, I completed a full handoff with the team: CMS onboarding, publishing new posts, managing content by branch. The goal was for them to keep the site alive without any technical dependency after I left.",
      },
    ],
    resultat:
      "A complete, bilingual site structured around NPC's branches and their actions, with a coherent visual identity and a journey oriented towards visitor trust and engagement. Delivered in two months, from architecture definition to handoff, with zero budget and in full immersion in the Peruvian context.",
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
      "Online presence matching the ambition of NPC and the reality of its field work",
      "Improvised blog replaced by a structured, professional platform, building credibility with donors and institutional partners",
      "Team fully autonomous on CMS management by the end of the mission, with no technical dependency",
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
    duration: "2 months",
    tools: ["Adobe XD", "UI Kit", "Prototyping", "Wireframes"],
    context:
      "CFA CERFAL is a network of apprenticeship training centres present in Île-de-France, across mainland France and in the overseas territories. Their website plays a central role: it is the main point of contact between the institution and its three distinct audiences — students, parents and partner companies. But the legacy site, frozen in a late-2000s logic, no longer reflected the image or ambitions of a network of this scale. We responded to their pitch with two months to design, convince and deliver a complete proposal.",
    problematique:
      "How do you modernise the image and journeys of a training organisation whose three user types have radically different needs, while simultaneously serving both an attractiveness goal and an effective contact-facilitation objective?",
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
        title: "Research and scoping",
        description:
          "Before touching a single interface, I conducted an analysis of the CFA's internal needs: institutional objectives, technical constraints, volume and nature of content to integrate. I complemented this with a competitive benchmark of leading CFA and training organisation websites, to identify the sector's UX standards and available differentiation angles.",
      },
      {
        phase: "02",
        title: "UX design",
        description:
          "Structuring user journeys was the core of the UX work. I defined three distinct journeys for the three target profiles: the student searching for a course, the parent supporting a career guidance project, and the company looking to become a partner. For each journey, I identified friction points in the existing site and simplified the information architecture to reduce barriers to contact.",
      },
      {
        phase: "03",
        title: "UI design",
        description:
          "For the pitch, I produced a V1 graphic direction with an illustrated universe, designed to strengthen proximity with a young audience while maintaining the credibility expected of an institution. I fully overhauled the UI Kit: colours, typography, components, pictograms — with the goal of making future maintenance and evolution easier.",
      },
      {
        phase: "04",
        title: "Iteration and optimisation",
        description:
          "A V2 followed, focused on optimisation: visual retouching and compression to improve loading times, mockup adjustments based on project team feedback, and finalisation of interactive prototypes in Adobe XD.",
      },
    ],
    resultat:
      "A complete functional prototype covering all three user journeys, a fully redesigned UI library ready for integration, web-optimised visuals, and UX/UI documentation to ensure project continuity. All delivered within two months, as part of a competitive pitch response.",
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
      "Demonstrated that a UX redesign grounded in real usage patterns could transform the readability and attractiveness of an institutional site",
      "Three distinct journeys giving each profile clear, direct access to what they were looking for — reducing entry friction",
      "Complete proposal delivered in two months — from scoping to functional prototype — in response to a competitive pitch",
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
      "Globedreamers is a French startup behind a collaborative crowdfunding platform dedicated to responsible and meaningful travel projects. Its mission is twofold: building a community of engaged travellers around shared values, and attracting partner companies wishing to support positive-impact initiatives. I joined the project as a freelancer and collaborated with the team for two years, on a site already live with an active user base, but whose experience and visual identity needed a deep redesign to support the startup's growth ambitions.",
    problematique:
      "How do you evolve an existing platform so it simultaneously serves two very different logics — the emotional engagement of a traveller community and the credibility expected by corporate partners — without losing the coherence of the whole?",
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
        title: "Scoping and product alignment",
        description:
          "Before opening Figma, I ran regular interviews with the founders and product team to understand the vision, business priorities and feedback coming in from existing users. These exchanges served as a continuous foundation throughout the two-year collaboration, calibrating design decisions against what was and wasn't working on the live platform.",
      },
      {
        phase: "02",
        title: "Competitive benchmark",
        description:
          "I analysed the leading crowdfunding platforms and their engagement models — Ulule, KissKissBankBank, GoFundMe — as well as community travel platforms, to map the UX conventions users had internalised and identify the differentiation angles available to Globedreamers.",
      },
      {
        phase: "03",
        title: "UX redesign and information architecture",
        description:
          "The platform covered very different sections: Home, Projects, Donations, Companies, Open Call, E-learning. I restructured the information architecture to smooth navigation between these spaces and clarify the journey for each user type — from the curious visitor to the committed donor and the corporate partner.",
      },
      {
        phase: "04",
        title: "UI design and visual identity",
        description:
          "I fully overhauled the UI Kit and implemented a unified design system to ensure consistency and scalability across all sections. The visual identity was redesigned with an illustrated, positive and inspiring universe aligned with the platform's sustainability values. I also produced a social media kit and brand guidelines to ensure consistency across digital communications.",
      },
      {
        phase: "05",
        title: "Continuous iteration over two years",
        description:
          "The duration of the collaboration enabled progressive improvement, with iterative cycles fed by internal team feedback and observation of real user behaviour on the live platform. High-fidelity interactive prototypes in Adobe XD were used to validate each major evolution before integration.",
      },
    ],
    resultat:
      "A fully redesigned platform, visually and functionally, with a coherent design system capable of supporting future evolution, a distinctive visual identity, and an information architecture clarified around the two core logics of the platform. All deliverables (interactive prototype, UI components, brand guidelines, social media kit) were handed over and integrated into the live product.",
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
      "Visual identity and user experience matching the startup's growth ambitions",
      "Coherent design system covering the full platform and built to support future evolution",
      "Two years of collaboration on a live product, with real users and real constraints — one of the most formative experiences as a freelance designer",
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
