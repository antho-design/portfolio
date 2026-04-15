import { createContext, useContext, useEffect, useState } from "react";
import { tokens, tokensDark } from "../styles/tokens";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });

  const t = theme === "dark" ? tokensDark : tokens;

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.body.style.background = t.bg;
    document.body.style.color = t.text;
  }, [theme, t.bg, t.text]);

  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, tokens: t, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
