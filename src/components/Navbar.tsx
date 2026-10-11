"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { content, language, toggleLanguage, theme, toggleTheme } = useThemeLanguage();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { id: "home", label: content.nav.home },
      { id: "about", label: content.nav.about },
      { id: "education", label: content.nav.education },
      { id: "credentials", label: content.nav.credentials },
      { id: "skills", label: content.nav.skills },
      { id: "experience", label: content.nav.experience },
      { id: "services", label: content.nav.services },
      { id: "projects", label: content.nav.projects },
      { id: "achievements", label: content.nav.achievements },
      { id: "testimonials", label: content.nav.testimonials },
    ],
    [content.nav]
  );

  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check bottom of page
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
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(hash);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      }
    };

    window.addEventListener("popstate", handleHashChange);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      const timer = setTimeout(handleHashChange, 120);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("popstate", handleHashChange);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined" && window.history && window.history.pushState) {
        window.history.pushState({ section: id }, "", `#${id}`);
      }
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      scrollTo(id);
    }
  };

  return (
    <motion.header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6 lg:px-8"
      initial={{ y: -70, opacity: 0 }}
      animate={{
        y: isScrolled ? 10 : 18,
        opacity: 1,
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* WCAG Skip to Main Content Link */}
      <a
        href="#main-content"
        className="pointer-events-auto sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-indigo-600 focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400"
      >
        {language === "ar" ? "الانتقال إلى المحتوى الرئيسي" : "Skip to main content"}
      </a>

      {/* Floating Glass Dock Navbar */}
      <motion.div
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-7xl pointer-events-auto flex items-center justify-between rounded-full backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "py-2 sm:py-2.5 px-3 sm:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            : "py-3.5 sm:py-4 px-4 sm:px-8 shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
        } ${
          isDark
            ? isScrolled
              ? "bg-slate-950/75 border border-white/15"
              : "bg-slate-950/45 border border-white/10"
            : isScrolled
            ? "bg-white/90 border border-slate-900/10 shadow-[0_15px_45px_rgba(251,191,36,0.18)]"
            : "bg-white/75 border border-slate-900/10 shadow-[0_10px_35px_rgba(251,191,36,0.12)]"
        }`}
      >
        {/* Brand / Logo (Dynamic Theme-Adaptive) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label={language === "ar" ? "مصطفى مراد - الصفحة الرئيسية" : "Mostafa Morad - Homepage"}
          className="group flex items-center justify-center self-center my-auto rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex-shrink-0"
        >
          <div
            className={`transition-all duration-300 flex items-center justify-center relative ${
              isScrolled ? "h-10 sm:h-11" : "h-12 sm:h-14"
            }`}
          >
            {/* Dark Mode Logo (White Text) */}
            <img
              src="/assets/logo_light_text.png"
              alt="Mostafa Morad"
              className={`h-full w-auto object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] block ${
                isDark ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
              }`}
            />
            {/* Light Mode Logo (Navy Text) */}
            <img
              src="/assets/logo.png"
              alt="Mostafa Morad"
              className={`h-full w-auto object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(255,200,100,0.3)] block ${
                !isDark ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
              }`}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label={language === "ar" ? "شريط التنقل الرئيسي" : "Main Navigation"}
          className="hidden xl:flex items-center xl:gap-0.5 2xl:gap-1 p-1 rounded-full bg-transparent"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`relative xl:px-2.5 2xl:px-3 py-1.5 rounded-full xl:text-[13px] 2xl:text-sm whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 font-medium ${
                  isActive
                    ? "text-white font-semibold"
                    : isDark
                    ? "text-slate-300 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-900/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isDark
                        ? "bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.55)]"
                        : "bg-gradient-to-r from-amber-500 to-indigo-600 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    }`}
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Toggles & CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs whitespace-nowrap font-semibold rounded-full text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              isDark
                ? "bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                : "bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-600 hover:to-indigo-700 shadow-[0_0_20px_rgba(245,158,11,0.35)]"
            }`}
          >
            {language === "ar" ? "لنتعاون معاً" : "Let's Collaborate"}
          </motion.a>

          {/* Language & Theme Switchers */}
          <div
            className={`flex items-center gap-1 p-1 rounded-full border transition-colors duration-500 ${
              isDark
                ? "border-white/15 bg-white/5 text-slate-200"
                : "border-slate-900/10 bg-slate-900/5 text-slate-700"
            }`}
          >
            {/* Language Switch */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleLanguage}
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 min-w-[34px] ${
                isDark
                  ? "hover:bg-white/10 hover:text-white"
                  : "hover:bg-slate-900/10 hover:text-slate-950"
              }`}
              aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              {language === "en" ? "AR" : "EN"}
            </motion.button>

            <div
              className={`w-[1px] h-3.5 transition-colors duration-500 ${
                isDark ? "bg-white/20" : "bg-slate-900/20"
              }`}
            />

            {/* Theme Switch (Micro-Animated Celestial Button) */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 20 }}
              whileTap={{ scale: 0.88, rotate: -25 }}
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isDark
                  ? "hover:bg-white/10 text-cyan-200 hover:text-cyan-100 hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                  : "hover:bg-amber-100 text-amber-600 hover:text-amber-700 hover:shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              }`}
              aria-label={theme === "light" ? "Switch to Dark Space Mode" : "Switch to Light Daylight Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,0.8)]" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-700 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)]" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen
                ? language === "ar"
                  ? "إغلاق القائمة"
                  : "Close menu"
                : language === "ar"
                ? "فتح القائمة"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className={`xl:hidden p-2 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              isDark
                ? "border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                : "border-slate-900/10 bg-slate-900/5 text-slate-700 hover:bg-slate-900/10 hover:text-slate-950"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto absolute left-4 right-4 top-full xl:hidden mt-3 p-4 rounded-3xl backdrop-blur-2xl shadow-2xl border ${
              isDark
                ? "bg-slate-950/90 border-white/15 text-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                : "bg-white/95 border-slate-900/10 text-slate-800 shadow-[0_20px_50px_rgba(251,191,36,0.2)]"
            }`}
          >
            <nav
              id="mobile-navigation"
              aria-label={language === "ar" ? "قائمة التنقل للهواتف" : "Mobile Navigation"}
              className="grid grid-cols-2 gap-2"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-start px-3 py-2.5 rounded-xl text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      isActive
                        ? isDark
                          ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30"
                          : "bg-gradient-to-r from-amber-500 to-indigo-600 text-white font-semibold shadow-md shadow-amber-500/30"
                        : isDark
                        ? "text-slate-300 hover:bg-white/10 hover:text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
