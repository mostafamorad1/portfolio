"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import {
  GitBranch,
  PieChart,
  Layout,
  Cpu,
  CheckCircle2,
  Cog,
  FileText,
  Presentation,
  Database,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Layers,
} from "lucide-react";
import PricingModal from "./PricingModal";

type ServiceTabId = "portfolio" | "docs-slides" | "data-engineering" | "all";

export default function Services() {
  const { content, language } = useThemeLanguage();
  const services = content.services;
  const isAr = language === "ar";

  const [activeTab, setActiveTab] = useState<ServiceTabId>("portfolio");
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("portfolio");

  // Ref & width for dynamic single-path SVG background
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [navWidth, setNavWidth] = useState<number>(560);

  useEffect(() => {
    if (!navContainerRef.current) return;
    const el = navContainerRef.current;
    const updateWidth = () => {
      if (el) {
        setNavWidth(Math.max(el.offsetWidth, 320));
      }
    };
    updateWidth();

    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    GitBranch: GitBranch,
    PieChart: PieChart,
    Layout: Layout,
    Cpu: Cpu,
    FileText: FileText,
    Presentation: Presentation,
    Database: Database,
  };

  const mainTabs: {
    id: Exclude<ServiceTabId, "all">;
    label: Record<"en" | "ar", string>;
    icon: React.ElementType;
    matchedIds: string[];
  }[] = [
    {
      id: "portfolio",
      label: { en: "Portfolio & Web", ar: "البورتفوليو والويب" },
      icon: Layout,
      matchedIds: ["portfolio-dev"],
    },
    {
      id: "docs-slides",
      label: { en: "Documents & Presentations", ar: "المستندات والعروض" },
      icon: FileText,
      matchedIds: ["doc-formatting", "presentation-design"],
    },
    {
      id: "data-engineering",
      label: { en: "Data Engineering", ar: "هندسة البيانات" },
      icon: Database,
      matchedIds: ["data-engineering"],
    },
  ];

  const allTab = {
    id: "all" as const,
    label: { en: "All Services", ar: "كل الخدمات" },
    icon: Layers,
    matchedIds: ["portfolio-dev", "doc-formatting", "presentation-design", "data-engineering"],
  };

  const currentMatchedIds =
    activeTab === "all"
      ? allTab.matchedIds
      : mainTabs.find((t) => t.id === activeTab)?.matchedIds || mainTabs[0].matchedIds;

  const displayedServices = services.items.filter((item) =>
    currentMatchedIds.includes(item.id)
  );

  const handleOpenPricing = (categoryId?: string) => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    setIsPricingOpen(true);
  };

  // Dimensions for continuous unified SVG path:
  // Top bar height = 50px, Bottom tab height = 38px, Tab width = 150px
  const H1 = 50;
  const H2 = 38;
  const totalH = H1 + H2;
  const tabW = 150;
  const Rtop = 24;
  const Rcurve = 18;
  const Rtab = 16;
  const W = navWidth;

  const X1 = Math.max((W - tabW) / 2, Rtop + Rcurve);
  const X2 = X1 + tabW;

  // Single continuous outline path - Zero seams, zero dividing lines!
  const unifiedPath = `
    M ${Rtop},0
    L ${W - Rtop},0
    A ${Rtop},${Rtop} 0 0 1 ${W},${Rtop}
    L ${W},${H1 - Rtop}
    A ${Rtop},${Rtop} 0 0 1 ${W - Rtop},${H1}
    L ${X2 + Rcurve},${H1}
    Q ${X2},${H1} ${X2},${H1 + Rcurve}
    L ${X2},${H1 + H2 - Rtab}
    A ${Rtab},${Rtab} 0 0 1 ${X2 - Rtab},${totalH}
    L ${X1 + Rtab},${totalH}
    A ${Rtab},${Rtab} 0 0 1 ${X1},${H1 + H2 - Rtab}
    L ${X1},${H1 + Rcurve}
    Q ${X1},${H1} ${X1 - Rcurve},${H1}
    L ${Rtop},${H1}
    A ${Rtop},${Rtop} 0 0 1 0,${H1 - Rtop}
    L 0,${Rtop}
    A ${Rtop},${Rtop} 0 0 1 ${Rtop},0
    Z
  `.trim().replace(/\s+/g, " ");

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Cog className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{services.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {services.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {services.subtitle}
          </p>

          {/* Pricing Button CTA in Header */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                handleOpenPricing(
                  activeTab === "all"
                    ? "portfolio"
                    : activeTab === "docs-slides"
                    ? "documents"
                    : activeTab
                )
              }
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 dark:from-cyan-500 dark:via-blue-600 dark:to-indigo-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 dark:shadow-cyan-500/20 hover:shadow-xl hover:shadow-indigo-600/35 transition-all border border-indigo-400/30 group"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{services.viewPricing || (isAr ? "عرض باقات وخطط الأسعار" : "View Pricing Plans")}</span>
              {isAr ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Unified Continuous Navbar with Snake Motion */}
        <div className="flex justify-center mb-12 w-full overflow-x-auto py-2">
          <LayoutGroup id="servicesUnifiedNavbar">
            <div
              id="servicesSubNav"
              ref={navContainerRef}
              className="relative inline-flex flex-col items-center select-none shrink-0"
              style={{ width: "fit-content", minHeight: `${totalH}px` }}
            >
              {/* Single Continuous SVG Boundary - Zero Seams & Zero Lines */}
              <svg
                width={W}
                height={totalH}
                viewBox={`0 0 ${W} ${totalH}`}
                className="absolute inset-0 pointer-events-none -z-10 drop-shadow-lg"
                aria-hidden="true"
              >
                <path
                  d={unifiedPath}
                  className="fill-slate-100/95 dark:fill-slate-900/95 stroke-slate-200 dark:stroke-slate-800"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Row 1: The 3 Main Category Tabs (NEVER WRAP) */}
              <div
                className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-1 sm:gap-2 px-2 sm:px-3"
                style={{ height: `${H1}px` }}
              >
                {mainTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs md:text-sm font-bold transition-colors flex items-center gap-1 sm:gap-2 shrink-0 ${
                        isActive
                          ? "text-indigo-600 dark:text-cyan-400"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeServiceSnakePill"
                          className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-md border border-slate-200/90 dark:border-slate-700/90 -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 26,
                            mass: 0.7,
                          }}
                        />
                      )}
                      <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{tab.label[language]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Row 2: Centered 'All Services' Tab (Snake Slithers Down Seamlessly) */}
              <div
                className="flex items-center justify-center"
                style={{ height: `${H2}px`, width: `${tabW}px` }}
              >
                <button
                  onClick={() => setActiveTab("all")}
                  className={`relative w-full h-full flex items-center justify-center gap-2 rounded-b-2xl text-xs sm:text-sm font-bold transition-colors ${
                    activeTab === "all"
                      ? "text-indigo-600 dark:text-cyan-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {activeTab === "all" && (
                    <motion.div
                      layoutId="activeServiceSnakePill"
                      className="absolute inset-x-1.5 inset-y-1 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200/90 dark:border-slate-700/90 -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 26,
                        mass: 0.7,
                      }}
                    />
                  )}
                  <Layers
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeTab === "all" ? "text-indigo-600 dark:text-cyan-400 scale-110" : ""
                    }`}
                  />
                  <span>{allTab.label[language]}</span>
                </button>
              </div>
            </div>
          </LayoutGroup>
        </div>

        {/* Services Grid with Smooth Tab Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className={
              displayedServices.length === 1
                ? "max-w-4xl mx-auto"
                : "grid grid-cols-1 md:grid-cols-2 gap-8"
            }
          >
            {displayedServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Cpu;
              const isSingle = displayedServices.length === 1;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className={
                    isSingle
                      ? "p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-lg hover:shadow-2xl hover:border-indigo-400 dark:hover:border-cyan-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group"
                      : "p-8 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
                  }
                >
                  {/* Left / Main info */}
                  <div className={isSingle ? "flex-1" : ""}>
                    <div
                      className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center font-bold mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
                      {service.description}
                    </p>

                    {/* Button on Single Layout */}
                    {isSingle && service.pricingCategoryId && (
                      <button
                        onClick={() => handleOpenPricing(service.pricingCategoryId)}
                        className="inline-flex py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-slate-950 font-bold text-xs sm:text-sm items-center gap-2 transition-all shadow-md hover:scale-105"
                      >
                        <Layers className="w-4 h-4" />
                        <span>{isAr ? "استعراض باقات ومميزات الخدمة" : "Explore Packages & Features"}</span>
                        {isAr ? (
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Right Column (Single Layout) or Bottom Column (Multi Layout) */}
                  <div
                    className={
                      isSingle
                        ? "w-full md:w-80 lg:w-96 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 shrink-0"
                        : ""
                    }
                  >
                    <div
                      className={
                        isSingle
                          ? "space-y-3"
                          : "space-y-2.5 pt-6 border-t border-slate-100 dark:border-slate-700/60 mb-6"
                      }
                    >
                      {service.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-indigo-500 dark:text-cyan-400 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button on Standard Multi Layout */}
                    {!isSingle && service.pricingCategoryId && (
                      <button
                        onClick={() => handleOpenPricing(service.pricingCategoryId)}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-cyan-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all group-hover:border-indigo-300 dark:group-hover:border-cyan-500/40"
                      >
                        <Layers className="w-4 h-4" />
                        <span>{isAr ? "استعراض باقات ومميزات الخدمة" : "Explore Packages & Features"}</span>
                        {isAr ? (
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pricing Plans Modal */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        defaultCategoryId={selectedCategory}
      />
    </section>
  );
}
