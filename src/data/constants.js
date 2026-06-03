/* ─── Constantes partagées ─── */

export const CV_URL = "/cv-anthonin-sautet.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/anthonin-sautet/";

export const PROJECT_COLORS = {
  "le-design-lab": { from: "#052E2B", to: "#1F6660" },
  cetelem:         { from: "#052E2B", to: "#1F6660" },
  ypo:             { from: "#0A0B1E", to: "#3B2D8A" },
  apec:          { from: "#1A4B5C", to: "#2D7D9A" },
  autossimo:     { from: "#7A3B1E", to: "#C4714A" },
  npc:           { from: "#1E5C3B", to: "#4A9B6F" },
  cerfal:        { from: "#3D2B6B", to: "#7B5EA7" },
  globedreamers: { from: "#6B2B2B", to: "#C4655A" },
};

/* Motif hexagonal répété — remplace blueprint sur fonds colorés */
export const HEX_MESH_BG = (() => {
  const R = 22;
  const W = +(R * Math.sqrt(3)).toFixed(2);
  const H = 3 * R;
  const hex = (cx, cy) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      pts.push(`${(cx + R * Math.sin(a)).toFixed(2)},${(cy - R * Math.cos(a)).toFixed(2)}`);
    }
    return `M${pts.join("L")}Z`;
  };
  const d = [hex(W / 2, R), hex(0, 2.5 * R), hex(W, 2.5 * R)].join(" ");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}'><path d='${d}' stroke='rgba(255,255,255,0.07)' stroke-width='0.6' fill='none'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
})();


/* Bordure dégradée (s'estompe aux coins) — fond blanc/clair */
export const CARD_BORDER_BG = `
  linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) top / 100% 1px no-repeat,
  linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) bottom / 100% 1px no-repeat,
  linear-gradient(to bottom, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) left / 1px 100% no-repeat,
  linear-gradient(to bottom, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) right / 1px 100% no-repeat
`;

/* Bordure dégradée — fond sombre */
export const CARD_BORDER_BG_DARK = `
  linear-gradient(to right, transparent, rgba(255,255,255,0.10) 14%, rgba(255,255,255,0.10) 86%, transparent) top / 100% 1px no-repeat,
  linear-gradient(to right, transparent, rgba(255,255,255,0.10) 14%, rgba(255,255,255,0.10) 86%, transparent) bottom / 100% 1px no-repeat,
  linear-gradient(to bottom, transparent, rgba(255,255,255,0.10) 14%, rgba(255,255,255,0.10) 86%, transparent) left / 1px 100% no-repeat,
  linear-gradient(to bottom, transparent, rgba(255,255,255,0.10) 14%, rgba(255,255,255,0.10) 86%, transparent) right / 1px 100% no-repeat
`;

export const TOOLS = [
  { name: "Figma",        slug: "figma" },
  { name: "Illustrator",  slug: "adobeillustrator" },
  { name: "Photoshop",    slug: "adobephotoshop" },
  { name: "ChatGPT",      slug: "openai" },
  { name: "Claude",       slug: "anthropic" },
  { name: "ProtoPie",     slug: "protopie" },
];

/* Aura de grille sur fond clair (About + Experience) */
export const BLUEPRINT_AURA_BG = `
  repeating-linear-gradient(to right, rgba(176,168,156,0.08) 0 1px, transparent 1px 18px),
  repeating-linear-gradient(to bottom, rgba(176,168,156,0.08) 0 1px, transparent 1px 18px),
  repeating-linear-gradient(to right, rgba(176,168,156,0.12) 0 1px, transparent 1px 72px),
  repeating-linear-gradient(to bottom, rgba(176,168,156,0.12) 0 1px, transparent 1px 72px)
`;
