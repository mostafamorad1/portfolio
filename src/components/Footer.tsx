"use client";

import React from "react";
import Image from "next/image";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { ArrowUp, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const { content, language } = useThemeLanguage();
  const footer = content.footer;

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (typeof window !== "undefined" && window.history && window.history.pushState) {
        window.history.pushState({ section: "home" }, "", "#home");
      }
    }
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-indigo-500/50" aria-hidden="true">
              <Image src="/profile.jpg" alt="" width={32} height={32} className="object-cover object-top w-full h-full" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.name[language]}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                &copy; {new Date().getFullYear()} {footer.rights}
              </p>
            </div>
          </div>

          {/* Tech Badge */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-indigo-500" aria-hidden="true" />
            <span>{footer.designedWith}</span>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            onClick={scrollToTop}
            aria-label={language === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top"}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
