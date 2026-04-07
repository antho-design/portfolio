import { useState, useEffect } from "react";
import { tokens as T } from "../styles/tokens";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";

function FlagIcon({ lang, mutedColor }) {
  if (lang === "fr") {
    return (
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1.25" y="2" width="11.5" height="10" rx="2.5" stroke={mutedColor} />
        <path d="M2.5 2.5h2.333v9H2.5z" fill="#244B9A" />
        <path d="M4.833 2.5h4.334v9H4.833z" fill="#F7F6F2" />
        <path d="M9.167 2.5H11.5v9H9.167z" fill="#D14A44" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.25" y="2" width="11.5" height="10" rx="2.5" stroke={mutedColor} />
      <path d="M2.5 2.5h9v9h-9z" fill="#244B9A" />
      <path d="M6.125 2.5h1.75v9h-1.75z" fill="#F7F6F2" />
      <path d="M2.5 6.125h9v1.75h-9z" fill="#F7F6F2" />
      <path
        d="M2.5 3.4L5.1 6M4.35 2.5l2.6 2.6M9.65 2.5L7.05 5.1M11.5 3.4L8.9 6M2.5 10.6L5.1 8M4.35 11.5l2.6-2.6M11.5 10.6L8.9 8M9.65 11.5l-2.6-2.6"
        stroke="#D14A44"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export default function Navbar({ activeSection, currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useBreakpoint();
  const { lang, toggle } = useLanguage();
  const t = UI[lang].nav;
  const isAboutPage = currentPath === "/about";
  const isLegalPage = currentPath === "/legal";

  const isOnDarkHero = currentPath.startsWith("/projects/") && !scrolled && !menuOpen;

  const links = (isAboutPage || isLegalPage)
    ? [
        {
          label: t.projects,
          href: "#projects",
          active: false,
          type: "anchor",
        },
        {
          label: t.experience,
          href: "#experience",
          active: false,
          type: "anchor",
        },
        { label: t.about, href: "/about", active: isAboutPage, type: "page" },
      ]
    : currentPath.startsWith("/projects/")
    ? [{ label: t.backToProjects, href: "/", type: "anchor" }]
    : [
        {
          label: t.projects,
          href: "#projects",
          active: activeSection === "projects",
          type: "anchor",
        },
        {
          label: t.experience,
          href: "#experience",
          active: activeSection === "experience",
          type: "anchor",
        },
        { label: t.about, href: "/about", active: false, type: "page" },
      ];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const hPad = isMobile ? "20px" : "40px";

  const logoColor = isOnDarkHero ? "rgba(255,255,255,0.9)" : T.accent;
  const logoTextColor = isOnDarkHero ? "rgba(255,255,255,0.7)" : T.text;
  const logoAccentColor = isOnDarkHero ? "#fff" : T.accent;
  const linkColor = isOnDarkHero ? "rgba(255,255,255,0.75)" : T.textMuted;
  const hamburgerColor = isOnDarkHero ? "#fff" : T.text;
  const switchBorder = isOnDarkHero ? "rgba(255,255,255,0.3)" : T.border;
  const switchBg = isOnDarkHero ? "rgba(255,255,255,0.08)" : "#F1EFEB";
  const switchText = isOnDarkHero ? "rgba(255,255,255,0.92)" : T.text;
  const switchMuted = isOnDarkHero ? "rgba(255,255,255,0.5)" : T.textLight;
  const glassBackground =
    "linear-gradient(180deg, rgba(250,250,248,0.78) 0%, rgba(250,250,248,0.68) 100%)";
  const glassShadow = "0 10px 28px rgba(51,51,51,0.06), inset 0 1px 0 rgba(255,255,255,0.32)";

  const langSwitchStyle = {
    padding: 4,
    borderRadius: 999,
    border: "1px solid transparent",
    background: `
      linear-gradient(${switchBg}, ${switchBg}) padding-box,
      linear-gradient(to right, transparent, ${switchBorder} 14%, ${switchBorder} 86%, transparent) border-box
    `,
    transition: "all .3s ease",
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    gap: 2,
  };

  const langOptionStyle = (optionLang) => {
    const isActive = lang === optionLang;

    return {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 11,
      fontWeight: isActive ? 700 : 600,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      padding: isMobile ? "6px 10px" : "7px 12px",
      borderRadius: 999,
      border: "none",
      background: isActive ? (isOnDarkHero ? "rgba(255,255,255,0.12)" : T.surface) : "transparent",
      color: isActive ? switchText : switchMuted,
      cursor: "pointer",
      transition: "all .25s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      boxShadow: isActive && !isOnDarkHero ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
    };
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 3,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isMobile
            ? `${scrolled ? 12 : 16}px ${hPad}`
            : scrolled
            ? `14px ${hPad}`
            : `24px ${hPad}`,
          background: scrolled || menuOpen ? glassBackground : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(18px) saturate(135%)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(18px) saturate(135%)" : "none",
          boxShadow: scrolled || menuOpen ? glassShadow : "none",
          transition: "all .4s ease",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {(scrolled || menuOpen) && (
          <div
            style={{
              position: "absolute",
              left: hPad,
              right: hPad,
              bottom: 0,
              height: 1,
              background: `linear-gradient(to right, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`,
              pointerEvents: "none",
            }}
          />
        )}
        {/* Logo */}
        <a
          href="/"
          onClick={(event) => {
            if (currentPath === "/") return;
            event.preventDefault();
            onNavigate("/");
          }}
          style={{
            fontFamily: "'Work Sans', sans-serif",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <MotifSVG size={24} color={logoColor} opacity={1} outerOpacity={0.35} />
          {!isMobile && (
            <span
              style={{
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                lineHeight: 1,
                transition: "color .4s ease",
              }}
            >
              <span style={{ fontWeight: 200, color: logoTextColor }}>ANTHONIN </span>
              <span style={{ fontWeight: 700, color: logoAccentColor }}>SAUTET</span>
            </span>
          )}
        </a>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 20 }}>

          {/* Links desktop/tablet */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(event) => {
                    if (l.href.startsWith("#")) {
                      if (currentPath === "/") return;
                      event.preventDefault();
                      onNavigate(`/${l.href}`);
                      return;
                    }

                    if (l.href === "/about" && currentPath !== "/about" && !isMobile) {
                      event.preventDefault();
                      const rect = event.currentTarget.getBoundingClientRect();
                      onNavigate(l.href, {
                        transition: {
                          type: "about",
                          label: l.label,
                          rect: {
                            left: rect.left,
                            top: rect.top,
                            width: rect.width,
                            height: rect.height,
                          },
                        },
                      });
                      return;
                    }

                    event.preventDefault();
                    onNavigate(l.href);
                  }}
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: l.active ? 600 : l.type === "page" ? 600 : 500,
                    color: l.active ? (isOnDarkHero ? "#fff" : T.accent) : linkColor,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "color .3s, border-color .3s, background-color .3s",
                    position: "relative",
                    padding: l.type === "page" ? "10px 16px" : 0,
                    borderRadius: l.type === "page" ? 999 : 0,
                    border:
                      l.type === "page"
                        ? `1px solid ${isOnDarkHero ? "rgba(255,255,255,0.3)" : (l.active ? T.accent : T.border)}`
                        : "none",
                    background:
                      l.type === "page" && l.active && !isOnDarkHero ? T.accentLight : "transparent",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {l.label}
                  {l.active && l.type === "anchor" && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: -13,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 12,
                        height: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                      }}
                    >
                      <MotifSVG
                        size={12}
                        color={isOnDarkHero ? "#fff" : T.accent}
                        opacity={0.9}
                        outerOpacity={0.3}
                      />
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}

          {/* Lien simple sur les pages projet (mobile) */}
          {isMobile && currentPath.startsWith("/projects/") && (
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate("/"); }}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: linkColor,
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "color .4s ease",
              }}
            >
              {t.home}
            </a>
          )}

          {/* Hamburger button mobile (hors pages projet) */}
          {isMobile && !currentPath.startsWith("/projects/") && (
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
            >
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 1.25,
                  background: hamburgerColor,
                  borderRadius: 999,
                  transition: "transform .3s ease, opacity .3s ease, background .4s ease",
                  transform: menuOpen ? "translateY(5.25px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 14,
                  height: 1.25,
                  background: hamburgerColor,
                  borderRadius: 999,
                  transition: "opacity .3s ease, transform .3s ease, background .4s ease",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0.6)" : "scaleX(1)",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 1.25,
                  background: hamburgerColor,
                  borderRadius: 999,
                  transition: "transform .3s ease, opacity .3s ease, background .4s ease",
                  transform: menuOpen ? "translateY(-5.25px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          )}

          {/* Bouton langue */}
          <div role="group" aria-label="Language switcher" style={langSwitchStyle}>
            {["fr", "en"].map((optionLang) => (
              <button
                key={optionLang}
                type="button"
                onClick={() => {
                  if (lang !== optionLang) toggle();
                }}
                aria-pressed={lang === optionLang}
                style={langOptionStyle(optionLang)}
              >
                <FlagIcon
                  lang={optionLang}
                  mutedColor={switchBorder}
                />
                <span>{optionLang.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      {isMobile && (
        <div
          id="mobile-nav"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99,
            paddingTop: 72,
            paddingBottom: 24,
            paddingLeft: 20,
            paddingRight: 20,
            background: glassBackground,
            backdropFilter: "blur(18px) saturate(135%)",
            WebkitBackdropFilter: "blur(18px) saturate(135%)",
            boxShadow: glassShadow,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
            transition: "transform .4s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 20,
              right: 20,
              bottom: 0,
              height: 1,
              background: `linear-gradient(to right, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`,
              pointerEvents: "none",
            }}
          />
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(event) => {
                setMenuOpen(false);
                if (l.href.startsWith("#")) {
                  if (currentPath === "/") return;
                  event.preventDefault();
                  onNavigate(`/${l.href}`);
                  return;
                }
                event.preventDefault();
                onNavigate(l.href);
              }}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 18,
                fontWeight: l.active ? 600 : 400,
                color: l.active ? T.accent : T.text,
                textDecoration: "none",
                letterSpacing: "0.03em",
                padding: "10px 0",
                textAlign: "center",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
