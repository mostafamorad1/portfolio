"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { content, language } = useThemeLanguage();
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

  const navRef = React.useRef<HTMLElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

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

  // Listen to browser Back/Forward (popstate/hashchange) and initial hash on load
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
      // Delay slightly for hydration & rendering layout
      const timer = setTimeout(handleHashChange, 120);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("popstate", handleHashChange);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Click outside to close mobile drawer & resize handler
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
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
      }`}
    >
      {/* WCAG Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 rtl:focus:left-auto rtl:focus:right-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-indigo-600 focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400"
      >
        {language === "ar" ? "الانتقال إلى المحتوى الرئيسي" : "Skip to main content"}
      </a>

      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled 
            ? "max-w-5xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-cyan-900/10 border border-slate-200/50 dark:border-slate-700/50 rounded-full px-4 py-2" 
            : "max-w-7xl px-4 sm:px-6 lg:px-8 py-5 bg-transparent border-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label={language === "ar" ? "مصطفى مراد - الصفحة الرئيسية" : "Mostafa Morad - Homepage"}
          className="text-left rtl:text-right group flex items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform border-2 border-indigo-500/50" aria-hidden="true">
            <Image src="/profile.jpg" alt="" width={40} height={40} className="object-cover object-top w-full h-full" />
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
          aria-label={language === "ar" ? "شريط التنقل الرئيسي" : "Main Navigation"}
          className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
            isScrolled 
              ? "bg-transparent" 
              : "bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-sm"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
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



          {/* Mobile menu button */}
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
            className="xl:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="xl:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl mt-2 overflow-hidden"
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
                    className={`text-left rtl:text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      isActive
                        ? "bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/20"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
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
    </header>
  );
}
