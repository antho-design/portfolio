import { useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../context/ThemeContext";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";
import { BLUEPRINT_AURA_BG } from "../data/constants";

const GALLERY_PHOTOS = [
  "20211024_155426.jpg","20220103_133041.jpg","20220104_165247.jpg","20220110_122444.jpg",
  "20220306_131327.jpg","20220308_094943.jpg","20220322_143231.jpg","20250606_111202.jpg",
  "DSC_0008.jpg","DSC_0025.jpg","DSC_0030.jpg","DSC_0035.jpg","DSC_0045.jpg","DSC_0045_1.jpg",
  "DSC_0046_1 (1).jpg","DSC_0055_1.jpg","DSC_0058-1.jpg","DSC_0063.jpg","DSC_0075.jpg",
  "DSC_0075_1.jpg","DSC_0091.jpg","DSC_0099.jpg","DSC_0103.jpg","DSC_0104.jpg","DSC_0124.jpg",
  "DSC_0131.jpg","DSC_0132.jpg","DSC_0138 (1).jpg","DSC_0170-1.jpg","DSC_0170.jpg",
  "DSC_0177.jpg","DSC_0180.jpg","DSC_0181 (1).jpg","DSC_0185.jpg","DSC_0189.jpg",
  "DSC_0201.jpg","DSC_0205.jpg","DSC_0217_1.jpg","DSC_0219.jpg","DSC_0227.jpg","DSC_0233.jpg",
  "DSC_0250.jpg","DSC_0254.jpg","DSC_0266.jpg","DSC_0268 (1).jpg","DSC_0271.jpg","DSC_0276.jpg",
  "DSC_0278.jpg","DSC_0285.jpg","DSC_0313_1.jpg","DSC_0320.jpg","DSC_0326.jpg","DSC_0329.jpg",
  "DSC_0331_1.jpg","DSC_0367.jpg","DSC_0399_1.jpg","DSC_0401.jpg","DSC_0411_1.jpg",
  "DSC_0433.jpg","DSC_0441.jpg","DSC_0454.jpg","DSC_0455.jpg","DSC_0483.jpg","DSC_0487.jpg",
  "DSC_0493.jpg","DSC_0495.jpg","DSC_0498.jpg","DSC_0510.jpg","DSC_0512.jpg","DSC_0525.jpg",
  "DSC_0544_1.jpg","DSC_0556.jpg","DSC_0562-1.jpg","DSC_0567.jpg","DSC_0574.jpg",
  "DSC_0576 (1).jpg","DSC_0579.jpg","DSC_0599.jpg","DSC_0601_1.jpg","DSC_0618_1.jpg",
  "DSC_0623.jpg","DSC_0626.jpg","DSC_0630_1.jpg","DSC_0634-1.jpg","DSC_0638_1.jpg",
  "DSC_0643.jpg","DSC_0665-1.jpg","DSC_0681.jpg","DSC_0687-1.jpg","DSC_0687.jpg",
  "DSC_06877.jpg","DSC_0698 (1).jpg","DSC_0700.jpg","DSC_0716.jpg","DSC_0720.jpg",
  "DSC_0732.jpg","DSC_0733-1.jpg","DSC_0741.jpg","DSC_0750.jpg","DSC_0753.jpg",
  "DSC_0764-1.jpg","DSC_0765-1.jpg","DSC_0771.jpg","DSC_0788.jpg","DSC_0854.jpg",
  "DSC_0868.jpg","DSC_0878.jpg","DSC_0954.jpg","DSC_0955-1.jpg","DSC_1002-1.jpg",
  "DSC_1044.jpg","DSC_1099.jpg","DSC_1108.jpg","DSC_1265.jpg","DSC_1496.jpg","DSC_1552.jpg",
  "DSC_1560.jpg","DSC_1692.jpg","DSC_1710.jpg","DSC_1790.jpg","DSC_2076.jpg","DSC_2237.jpg",
  "DSC_2252.jpg","DSC_2279-1.jpg","IMG-20250531-WA0039.jpg","IMG-20250608-WA0053.jpg",
  "IMG-20250608-WA0059.jpg","P6120331.jpg","P6120346.jpg",
  "PXL_20250610_021034550.RAW-02.ORIGINAL.jpg","PXL_20250610_021646709.RAW-01.COVER.jpg",
  "PXL_20250610_030416310.RAW-02.ORIGINAL.jpg","PXL_20250610_031350299.LONG_EXPOSURE-01.COVER.jpg",
];


function Gallery({ isMobile, isTablet }) {
  const [lightbox, setLightbox] = useState(null);
  const { tokens: T } = useTheme();
  const cols = isMobile ? 2 : isTablet ? 3 : 4;

  return (
    <>
      <div
        style={{
          columns: cols,
          columnGap: 10,
        }}
      >
        {GALLERY_PHOTOS.map((filename) => {
          const src = `/gallery/${encodeURIComponent(filename)}`;
          return (
            <div
              key={filename}
              style={{
                breakInside: "avoid",
                marginBottom: 10,
                borderRadius: 10,
                overflow: "hidden",
                cursor: "zoom-in",
              }}
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform .4s cubic-bezier(.22,1,.36,1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />
            </div>
          );
        })}
      </div>

      {lightbox && createPortal(
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.72)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "92vh", borderRadius: 12, objectFit: "contain" }}
          />
        </div>,
        document.body
      )}
    </>
  );
}

export default function About() {
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T } = useTheme();
  const t = UI[lang].about;
  const blueprintAura = {
    position: "absolute",
    inset: "-14% -16% -12% -8%",
    backgroundImage: BLUEPRINT_AURA_BG,
    opacity: 0.26,
    maskImage: "radial-gradient(circle at 86% 14%, black 0%, black 26%, transparent 66%)",
    WebkitMaskImage: "radial-gradient(circle at 86% 14%, black 0%, black 26%, transparent 66%)",
    pointerEvents: "none",
  };

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "100px 20px 80px" : isTablet ? "120px 32px 80px" : "140px 40px 100px",
        maxWidth: 1200,
        margin: "0 auto",
        minHeight: "100vh",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div style={blueprintAura} />
      <MotifSVG
        size={432}
        color="#D9D4CC"
        opacity={0.22}
        outerOpacity={0.12}
        style={{
          position: "absolute",
          top: "12%",
          right: -116,
          pointerEvents: "none",
          filter:
            "drop-shadow(1px 1px 0 rgba(255,255,255,0.8)) drop-shadow(-1px -1px 0 rgba(176,168,156,0.16))",
          mixBlendMode: "multiply",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 56,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <img
            src="/mask-group.png"
            alt="Anthonin Sautet"
            style={{
              width: "100%",
              maxWidth: 420,
              display: "block",
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <SectionLabel>{t.label}</SectionLabel>
          </Reveal>

          <Reveal delay={0.2}>
            <SectionTitle>
              {t.titleParts[0]}{" "}
              <span style={{ color: T.accent }}>{t.titleParts[1]}</span>{" "}
              {t.titleParts[2]}
            </SectionTitle>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 16,
                color: T.textMuted,
                lineHeight: 1.8,
                margin: "20px 0 0",
              }}
            >
              {t.p1}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 16,
                color: T.textMuted,
                lineHeight: 1.8,
                margin: "12px 0 0",
              }}
            >
              {t.p2}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              style={{
                marginTop: 36,
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 28,
                fontWeight: 200,
                color: T.accent,
                letterSpacing: "0.07em",
                flexWrap: "wrap",
              }}
            >
              <span style={{ width: 40, height: 1, background: T.accentMid }} />
              {t.quote}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        style={{
          marginTop: isMobile ? 60 : 120,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <SectionLabel>{t.galleryLabel}</SectionLabel>
            <SectionTitle>{t.galleryTitle}</SectionTitle>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 15,
                color: T.textMuted,
                lineHeight: 1.7,
                margin: "12px 0 0",
                maxWidth: 480,
              }}
            >
              {t.galleryIntro}
            </p>
          </div>
        </Reveal>

        <Gallery isMobile={isMobile} isTablet={isTablet} />
      </div>
    </section>
  );
}
