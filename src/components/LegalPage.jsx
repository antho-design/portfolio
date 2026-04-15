import { useTheme } from "../context/ThemeContext";
import { SectionLabel, SectionTitle } from "./UI";
import { useLanguage } from "../context/LanguageContext";

const CONTENT = {
  fr: {
    label: "Informations",
    title: "Mentions légales",
    sections: [
      {
        title: "Éditeur du site",
        body: [
          "Anthonin Sautet",
          "Portfolio personnel",
          "Paris, France",
          "Contact via LinkedIn",
        ],
      },
      {
        title: "Hébergement",
        body: [
          "Le site est hébergé par OVH.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        body: [
          "L'ensemble des contenus présents sur ce site, sauf mention contraire, est la propriété d'Anthonin Sautet.",
          "Toute reproduction, représentation ou diffusion, même partielle, sans autorisation préalable est interdite.",
        ],
      },
      {
        title: "Données personnelles",
        body: [
          "Ce site ne collecte pas de données personnelles à des fins commerciales.",
          "En cas de prise de contact via une plateforme externe, les données transmises le sont uniquement dans le cadre de cet échange.",
        ],
      },
    ],
  },
  en: {
    label: "Information",
    title: "Legal notice",
    sections: [
      {
        title: "Site owner",
        body: [
          "Anthonin Sautet",
          "Personal portfolio",
          "Paris, France",
          "Contact via LinkedIn",
        ],
      },
      {
        title: "Hosting",
        body: [
          "This website is hosted by OVH.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "Unless otherwise stated, all content on this website is the property of Anthonin Sautet.",
          "Any reproduction, representation or distribution, even partial, without prior permission is prohibited.",
        ],
      },
      {
        title: "Personal data",
        body: [
          "This website does not collect personal data for commercial purposes.",
          "If contact is made through an external platform, the transmitted data is used solely within the scope of that exchange.",
        ],
      },
    ],
  },
};

export default function LegalPage() {
  const { lang } = useLanguage();
  const { tokens: T } = useTheme();
  const content = CONTENT[lang];

  return (
    <section
      style={{
        padding: "140px 40px 100px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <SectionLabel>{content.label}</SectionLabel>
      <SectionTitle style={{ marginBottom: 40 }}>{content.title}</SectionTitle>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {content.sections.map((section) => (
          <div
            key={section.title}
            style={{
              padding: "24px 26px",
              border: `1px solid ${T.border}`,
              borderRadius: T.radius,
              background: T.surface,
            }}
          >
            <h2
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: T.text,
                margin: 0,
              }}
            >
              {section.title}
            </h2>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: T.textMuted,
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
