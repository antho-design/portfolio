/* ─── Constantes partagées ─── */

export const CV_URL = "/cv-anthonin-sautet.pdf";

export const PROJECT_COLORS = {
  cetelem:       { from: "#052E2B", to: "#1F6660" },
  apec:          { from: "#1A4B5C", to: "#2D7D9A" },
  autossimo:     { from: "#7A3B1E", to: "#C4714A" },
  npc:           { from: "#1E5C3B", to: "#4A9B6F" },
  cerfal:        { from: "#3D2B6B", to: "#7B5EA7" },
  globedreamers: { from: "#6B2B2B", to: "#C4655A" },
};

/* Grille décorative sur fond coloré (pages projet + cards) */
export const BLUEPRINT_GRID_BG = `
  repeating-linear-gradient(to right, rgba(255,255,255,0.045) 0 1px, transparent 1px 18px),
  repeating-linear-gradient(to bottom, rgba(255,255,255,0.045) 0 1px, transparent 1px 18px),
  repeating-linear-gradient(to right, rgba(255,255,255,0.1) 0 1px, transparent 1px 72px),
  repeating-linear-gradient(to bottom, rgba(255,255,255,0.1) 0 1px, transparent 1px 72px),
  linear-gradient(115deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.006) 46%, transparent 47%, transparent 53%, rgba(255,255,255,0.006) 54%, rgba(255,255,255,0.03) 100%),
  linear-gradient(12deg, rgba(255,255,255,0.025) 0%, transparent 38%, rgba(255,255,255,0.018) 50%, transparent 62%, rgba(255,255,255,0.025) 100%)
`;

/* Bordure dégradée (s'estompe aux coins) — fond blanc/clair */
export const CARD_BORDER_BG = `
  linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) top / 100% 1px no-repeat,
  linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) bottom / 100% 1px no-repeat,
  linear-gradient(to bottom, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) left / 1px 100% no-repeat,
  linear-gradient(to bottom, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) right / 1px 100% no-repeat
`;

/* Aura de grille sur fond clair (About + Experience) */
export const BLUEPRINT_AURA_BG = `
  repeating-linear-gradient(to right, rgba(176,168,156,0.08) 0 1px, transparent 1px 18px),
  repeating-linear-gradient(to bottom, rgba(176,168,156,0.08) 0 1px, transparent 1px 18px),
  repeating-linear-gradient(to right, rgba(176,168,156,0.12) 0 1px, transparent 1px 72px),
  repeating-linear-gradient(to bottom, rgba(176,168,156,0.12) 0 1px, transparent 1px 72px)
`;
