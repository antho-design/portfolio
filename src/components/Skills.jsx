import { useTheme } from "../context/ThemeContext";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";
import { TOOLS } from "../data/constants";

function ToolLogo({ slug, size = 24, color }) {
  switch (slug) {
    case "figma":
      return (
        <svg width={size} height={size} viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF" />
        </svg>
      );

    case "adobeillustrator":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="7" fill="#300" />
          <text x="5" y="30" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold" fill="#FF9A00">Ai</text>
        </svg>
      );

    case "adobephotoshop":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="7" fill="#001E36" />
          <text x="4" y="30" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold" fill="#31A8FF">Ps</text>
        </svg>
      );

    case "openai":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M22.28 9.82a5.99 5.99 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.06 6.06 0 0 0 10.27.74a6.05 6.05 0 0 0-5.77 4.19 6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 6 6 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zM13.25 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .4-.68V11.6l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.03zM3.6 18.3a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.84 2.79A4.5 4.5 0 0 1 3.6 18.3zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.67a.77.77 0 0 0 .39.68l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.86-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1V12.44a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.08-4.78-2.76a.78.78 0 0 0-.78 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.3 12.86 6.27 11.7a.08.08 0 0 1-.04-.06V6.08a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z" />
        </svg>
      );

    case "anthropic":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5C12 2.5 13.1 8.9 16.3 10.4C18.3 11.3 21.5 12 21.5 12C21.5 12 18.3 12.7 16.3 13.6C13.1 15.1 12 21.5 12 21.5C12 21.5 10.9 15.1 7.7 13.6C5.7 12.7 2.5 12 2.5 12C2.5 12 5.7 11.3 7.7 10.4C10.9 8.9 12 2.5 12 2.5Z"
            fill="#D97706"
          />
        </svg>
      );

    case "protopie":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#7B5CF6" />
          <path d="M12 2v10l7.07 7.07A10 10 0 0 0 12 2z" fill="#A78BFA" />
          <circle cx="12" cy="12" r="3" fill="white" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Skills() {
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T, theme } = useTheme();
  const t = UI[lang].skills;

  const iconColor = theme === "dark" ? T.text : "#333333";

  return (
    <section
      style={{
        padding: isMobile ? "0 20px 60px" : "0 40px 60px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <Reveal>
        <div style={{ marginBottom: 36 }}>
          <SectionLabel>{t.label}</SectionLabel>
          <SectionTitle>{t.title}</SectionTitle>
        </div>
      </Reveal>

      {/* Blocs compétences — intégrés dans le fond */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? "32px 0" : "36px 48px",
        }}
      >
        {t.categories.map((cat, i) => (
          <Reveal key={i} delay={i * 0.08} style={!isMobile && i === t.categories.length - 1 && t.categories.length % 2 !== 0 ? { gridColumn: "1 / -1" } : {}}>
            <div style={{ paddingTop: 20, position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 1,
                  background: `linear-gradient(to right, ${T.accent}60, transparent)`,
                }}
              />
              <h3
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: T.text,
                  margin: "0 0 6px",
                  letterSpacing: "-0.01em",
                }}
              >
                {cat.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 13,
                  color: T.textMuted,
                  lineHeight: 1.6,
                  margin: "0 0 14px",
                }}
              >
                {cat.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: T.accentLight,
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: T.accent,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bande outils */}
      <Reveal delay={0.2}>
        <div
          style={{
            marginTop: 40,
            padding: isMobile ? "18px 20px" : "18px 28px",
            borderRadius: T.radius,
            border: `1px solid ${T.border}`,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 16 : 32,
          }}
        >
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: T.textLight,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {t.toolsLabel}
          </span>

          <div
            style={{
              width: isMobile ? "100%" : 1,
              height: isMobile ? 1 : 28,
              background: T.border,
              flexShrink: 0,
            }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? 16 : 28,
              alignItems: "center",
            }}
          >
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <ToolLogo slug={tool.slug} size={22} color={iconColor} />
                <span
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: T.textMuted,
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: T.textLight,
                fontStyle: "italic",
              }}
            >
              {t.toolsMore}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
