"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, portfolioContent, PortfolioContent } from "@/data/portfolioData";

interface ThemeLanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
  content: PortfolioContent;
  isRtl: boolean;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export function ThemeLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Read from localStorage if available
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang === "en" || savedLang === "ar") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      }

      const savedTheme = localStorage.getItem("portfolio_theme") as "light" | "dark" | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        setThemeState(savedTheme);
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        setThemeState("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch {
      // Ignore storage access errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const setTheme = (t: "light" | "dark") => {
    setThemeState(t);
    if (typeof document !== "undefined") {
      if (t === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    try {
      localStorage.setItem("portfolio_theme", t);
    } catch {
      // Ignore storage access errors
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const content = portfolioContent[language];
  const isRtl = language === "ar";

  return (
    <ThemeLanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        content,
        isRtl,
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error("useThemeLanguage must be used within a ThemeLanguageProvider");
  }
  return context;
}
