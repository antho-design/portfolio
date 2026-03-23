# Portfolio Anthonin Sautet

Portfolio de Product Designer construit avec **React + Vite**.

## Prérequis

- [Node.js](https://nodejs.org/) version 18 ou supérieure
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Installation

```bash
# 1. Ouvrir le dossier dans VS Code, puis ouvrir le terminal (Ctrl + `)

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Structure du projet

```
portfolio-anthonin/
├── index.html              ← Point d'entrée HTML
├── package.json            ← Dépendances & scripts
├── vite.config.js          ← Configuration Vite
├── public/                 ← Fichiers statiques (favicon, images…)
└── src/
    ├── main.jsx            ← Initialisation React
    ├── App.jsx             ← Composant principal (assemble les sections)
    ├── assets/
    │   └── motif.svg       ← Motif géométrique original
    ├── components/
    │   ├── About.jsx       ← Section À propos
    │   ├── Experience.jsx  ← Section Parcours / Timeline
    │   ├── Footer.jsx      ← Pied de page
    │   ├── Hero.jsx        ← Section d'accueil
    │   ├── MotifSVG.jsx    ← Composant du motif identité visuelle
    │   ├── Navbar.jsx      ← Barre de navigation fixe
    │   ├── ProjectCard.jsx ← Carte de projet
    │   └── UI.jsx          ← Composants partagés (Reveal, ProgressBar…)
    ├── data/
    │   └── content.js      ← Données des projets, expériences, compétences
    ├── hooks/
    │   └── useInView.js    ← Hooks personnalisés (scroll, intersection)
    └── styles/
        ├── global.css      ← Styles globaux
        └── tokens.js       ← Design tokens (couleurs, espacements…)
```

## Design Tokens

| Token        | Valeur    | Usage                    |
|-------------|-----------|--------------------------|
| accent      | `#1A4B5C` | Bleu pétrole — couleur principale |
| accentLight | `#E8F1F4` | Fond clair accent        |
| bg          | `#FAFAF8` | Fond de page             |
| text        | `#1A1A1A` | Texte principal          |
| textMuted   | `#888888` | Texte secondaire         |

## Typographie

- **Police** : Work Sans (Google Fonts)
- **Nom** : ANTHONIN (weight 200) + SAUTET (weight 700)
- **Casse** : uppercase, letter-spacing 0.07em

## Déploiement

```bash
# Générer le build de production
npm run build
```

Le dossier `dist/` contient le site statique prêt à être uploadé sur OVH via FTP.

## Modifier le contenu

Toutes les données sont dans `src/data/content.js`. Pour ajouter un projet, ajoutez un objet dans le tableau `PROJECTS`. Pour modifier les expériences, éditez `EXPERIENCES`.
