"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Database, BarChart3, Code2, Wrench, CheckCircle2, Sparkles } from "lucide-react";

export default function Skills() {
  const { content } = useThemeLanguage();
  const skillsData = content.skills;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    "data-engineering": Database,
    "bi-analytics": BarChart3,
    "web-dev": Code2,
    tools: Wrench,
  };

  const filteredCategories =
    activeCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
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

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {skillsData.allLabel} ({skillsData.categories.length})
          </button>
          {skillsData.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Database;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category.id] || Database;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                          {skill.highlight && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? "bg-gradient-to-r from-indigo-500 to-cyan-400"
                              : "bg-indigo-400 dark:bg-indigo-500/70"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
