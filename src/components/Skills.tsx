"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Database, BarChart3, Code2, Wrench, Sparkles } from "lucide-react";

export default function Skills() {
  const { content } = useThemeLanguage();
  const skillsData = content.skills;

  const categoryIcons: Record<string, React.ElementType> = {
    "data-engineering": Database,
    "bi-analytics": BarChart3,
    "web-dev": Code2,
    tools: Wrench,
  };

  const filteredCategories = skillsData.categories;

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-yellow-400 border border-yellow-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{skillsData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {skillsData.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            {skillsData.subtitle}
          </p>
        </div>

        {/* Skills Cards Grid - 2x2 Matrix */}
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
                className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-yellow-400 flex items-center justify-center font-bold" aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skill Tags instead of progress bars */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 rounded text-sm font-medium border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                    >
                      {skill.name}
                    </span>
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
