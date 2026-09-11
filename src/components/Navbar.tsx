"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const { content, language, toggleLanguage, theme, toggleTheme } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { id: "home", label: content.nav.home },
      { id: "about", label: content.nav.about },
      { id: "skills", label: content.nav.skills },
      { id: "experience", label: content.nav.experience },
      { id: "projects", label: content.nav.projects },
      { id: "services", label: content.nav.services },
      { id: "education", label: content.nav.education },
      { id: "achievements", label: content.nav.achievements },
      { id: "contact", label: content.nav.contact },
    ],
    [content.nav]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined" && window.history && window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="text-left rtl:text-right group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
              {language === "ar" ? "مصطفى مراد" : "Mostafa Morad"}
            </span>
            <span className="text-xs text-indigo-600 dark:text-cyan-400 font-medium leading-none">
              {language === "ar" ? "مهندس بيانات" : "Data Engineer"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/70 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-sm"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Toggles & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            aria-label={language === "en" ? "تبديل إلى العربية" : "Switch to English"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
            <span>{language === "en" ? "عربي" : "EN"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="xl:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl mt-2 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className={`text-left rtl:text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/20"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
