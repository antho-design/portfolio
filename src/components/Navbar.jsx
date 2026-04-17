import { useState, useEffect } from "react";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { UI } from "../data/translations";


export default function Navbar({ activeSection, currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isTablet, isWideDesktop } = useBreakpoint();
  const { lang, toggle: toggleLang } = useLanguage();
  const { tokens: T, theme, toggle: toggleTheme } = useTheme();
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

  const hPad = isMobile ? "20px" : isTablet ? "24px" : "40px";

  const isDark = isOnDarkHero || theme === "dark";
  const logoColor = isDark ? "rgba(255,255,255,0.9)" : T.accent;
  const logoTextColor = isDark ? "rgba(255,255,255,0.7)" : T.text;
  const logoAccentColor = isDark ? "#fff" : T.accent;
  const linkColor = isDark ? "rgba(255,255,255,0.75)" : T.textMuted;
  const hamburgerColor = isDark ? "#fff" : T.text;
  const switchBorder = isDark ? "rgba(255,255,255,0.18)" : T.border;
  const switchBg = isDark ? "rgba(255,255,255,0.07)" : T.surfaceAlt;
  const switchText = isDark ? "rgba(255,255,255,0.92)" : T.text;
  const switchMuted = isDark ? "rgba(255,255,255,0.38)" : T.textLight;
  const glassBackground = theme === "dark"
    ? "linear-gradient(180deg, rgba(17,24,39,0.88) 0%, rgba(17,24,39,0.80) 100%)"
    : "linear-gradient(180deg, rgba(250,250,248,0.78) 0%, rgba(250,250,248,0.68) 100%)";
  const glassShadow = theme === "dark"
    ? "0 10px 28px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.06)"
    : "0 10px 28px rgba(51,51,51,0.06), inset 0 1px 0 rgba(255,255,255,0.32)";

  const langSwitchStyle = {
    padding: 4,
    borderRadius: 999,
    border: "1px solid transparent",
    background: `
      linear-gradient(${switchBg}, ${switchBg}) padding-box,
      linear-gradient(to right, transparent, ${switchBorder} 14%, ${switchBorder} 86%, transparent) border-box
    `,
    transition: "background .3s ease, border-color .3s ease",
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
      padding: isMobile ? "6px 10px" : isTablet ? "4px 6px" : "7px 12px",
      borderRadius: 999,
      border: "none",
      background: isActive ? (isDark ? "rgba(255,255,255,0.12)" : T.surface) : "transparent",
      color: isActive ? switchText : switchMuted,
      cursor: "pointer",
      transition: "background .25s ease, color .25s ease, box-shadow .25s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      boxShadow: isActive && !isDark ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
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
          transition: "padding .4s ease, background .4s ease, box-shadow .4s ease",
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
            if (currentPath.startsWith("/projects/") && !isMobile) {
              onNavigate("/", { transition: { type: "back-project" } });
            } else {
              onNavigate("/");
            }
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
          {!isMobile && !isTablet && (
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

        {/* Theme switch — centré (large desktop uniquement) */}
        {isWideDesktop && (
          <div
            role="group"
            aria-label="Theme switcher"
            style={{
              ...langSwitchStyle,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {[
              { value: "light", icon: "☀️", label: "Mode clair" },
              { value: "dark",  icon: "🌙", label: "Mode sombre" },
            ].map(({ value, icon, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={theme === value}
                aria-label={label}
                onClick={() => { if (theme !== value) toggleTheme(); }}
                style={{
                  ...langOptionStyle(value === "light" ? "fr" : "en"),
                  padding: isMobile ? "6px 9px" : "7px 10px",
                  background: theme === value
                    ? (isDark ? "rgba(255,255,255,0.12)" : T.surface)
                    : "transparent",
                  boxShadow: theme === value && !isDark ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                }}
              >
                <span style={{ fontSize: 13, lineHeight: 1 }}>{icon}</span>
              </button>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : isTablet ? 10 : 20 }}>

          {/* Links desktop/tablet */}
          {!isMobile && (
            <div style={{ display: "flex", gap: isTablet ? 12 : 32, alignItems: "center" }}>
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

                    if (l.href === "/" && currentPath.startsWith("/projects/") && !isMobile) {
                      event.preventDefault();
                      onNavigate("/", { transition: { type: "back-project" } });
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
                    fontSize: isTablet ? 10 : 13,
                    fontWeight: l.active ? 600 : l.type === "page" ? 600 : 500,
                    color: l.active ? (isDark ? "#fff" : T.accent) : linkColor,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "color .3s, border-color .3s, background-color .3s",
                    position: "relative",
                    padding: l.type === "page" ? (isTablet ? "5px 8px" : "10px 16px") : 0,
                    borderRadius: l.type === "page" ? 999 : 0,
                    border:
                      l.type === "page"
                        ? `1px solid ${isDark ? "rgba(255,255,255,0.22)" : (l.active ? T.accent : T.border)}`
                        : "none",
                    background:
                      l.type === "page" && l.active && !isDark ? T.accentLight : "transparent",
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
                        color={isDark ? "#fff" : T.accent}
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

          {/* Theme switch — dans le bloc de droite sous 1280px */}
          {!isMobile && !isWideDesktop && (
            <div role="group" aria-label="Theme switcher" style={langSwitchStyle}>
              {[
                { value: "light", icon: "☀️", label: "Mode clair" },
                { value: "dark",  icon: "🌙", label: "Mode sombre" },
              ].map(({ value, icon, label }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={theme === value}
                  aria-label={label}
                  onClick={() => { if (theme !== value) toggleTheme(); }}
                  style={{
                    ...langOptionStyle(value === "light" ? "fr" : "en"),
                    padding: "4px 6px",
                    background: theme === value ? (isDark ? "rgba(255,255,255,0.12)" : T.surface) : "transparent",
                    boxShadow: theme === value && !isDark ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <span style={{ fontSize: 13, lineHeight: 1 }}>{icon}</span>
                </button>
              ))}
            </div>
          )}

          {/* Bouton langue — masqué sur mobile (intégré dans le burger) */}
          {!isMobile && (
            <div role="group" aria-label="Language switcher" style={langSwitchStyle}>
              {["fr", "en"].map((optionLang) => (
                <button
                  key={optionLang}
                  type="button"
                  onClick={() => {
                    if (lang !== optionLang) toggleLang();
                  }}
                  aria-pressed={lang === optionLang}
                  style={langOptionStyle(optionLang)}
                >
                  <span>{optionLang.toUpperCase()}</span>
                </button>
              ))}
            </div>
          )}
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

          {/* Séparateur */}
          <div style={{ width: "100%", height: 1, background: `linear-gradient(to right, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`, margin: "10px 0 14px" }} />

          {/* Switches langue + thème */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center" }}>
            <div role="group" aria-label="Language switcher" style={langSwitchStyle}>
              {["fr", "en"].map((optionLang) => (
                <button
                  key={optionLang}
                  type="button"
                  onClick={() => { if (lang !== optionLang) toggleLang(); }}
                  aria-pressed={lang === optionLang}
                  style={langOptionStyle(optionLang)}
                >
                  <span>{optionLang.toUpperCase()}</span>
                </button>
              ))}
            </div>

            <div role="group" aria-label="Theme switcher" style={langSwitchStyle}>
              {[
                { value: "light", icon: "☀️", label: "Mode clair" },
                { value: "dark",  icon: "🌙", label: "Mode sombre" },
              ].map(({ value, icon, label }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={theme === value}
                  aria-label={label}
                  onClick={() => { if (theme !== value) toggleTheme(); }}
                  style={{
                    ...langOptionStyle(value === "light" ? "fr" : "en"),
                    padding: "6px 9px",
                    background: theme === value ? (isDark ? "rgba(255,255,255,0.12)" : T.surface) : "transparent",
                    boxShadow: theme === value && !isDark ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <span style={{ fontSize: 13, lineHeight: 1 }}>{icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
