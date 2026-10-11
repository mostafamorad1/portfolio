"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import {
  Wrench,
  Sparkles,
  Brain,
  Cpu,
} from "lucide-react";

type TabType = "technical" | "tools" | "soft";

export default function Skills() {
  const { content, isRtl } = useThemeLanguage();
  const skillsData = content.skills;
  const [activeTab, setActiveTab] = useState<TabType>("technical");


  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    {
      id: "technical",
      label: skillsData.tabs?.technical || (isRtl ? "المهارات التقنية" : "Technical Skills"),
      icon: Cpu,
    },
    {
      id: "tools",
      label: skillsData.tabs?.tools || (isRtl ? "الأدوات والأنظمة" : "Tools & Platforms"),
      icon: Wrench,
    },
    {
      id: "soft",
      label: skillsData.tabs?.soft || (isRtl ? "المهارات الشخصية" : "Soft Skills"),
      icon: Brain,
    },
  ];

  const currentCategories =
    activeTab === "technical"
      ? skillsData.technical || skillsData.categories || []
      : activeTab === "tools"
      ? skillsData.tools || []
      : skillsData.soft || [];

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/50 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{skillsData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {skillsData.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {skillsData.subtitle}
          </p>
        </div>

        {/* Mini Navbar / Filter Tabs */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div
            role="tablist"
            aria-label={skillsData.title}
            className="inline-flex p-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-sm backdrop-blur-md gap-1"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillsTabIndicator"
                      className="absolute inset-0 rounded-full bg-indigo-600 dark:bg-indigo-500 shadow-md shadow-indigo-600/30"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <TabIcon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Skills Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto"
            >
              {currentCategories
                .flatMap((c) => c.skills)
                .map((skill, idx) => {
                  const isHighlighted = skill.highlight;
                  return (
                    <motion.div
                      key={`${activeTab}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.02 }}
                      className={`flex items-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-sm sm:text-base font-medium border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
                        isHighlighted
                          ? "bg-indigo-50/90 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 border-indigo-200/90 dark:border-indigo-700/50 font-semibold"
                          : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-cyan-300"
                      }`}
                    >
                      {skill.name}
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
