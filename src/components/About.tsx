"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Sparkles, Database, Layers, Target, Briefcase, Terminal } from "lucide-react";

export default function About() {
  const { content } = useThemeLanguage();
  const about = content.about;

  const highlights = [
    {
      icon: Sparkles,
      title: about.hookTitle,
      description: about.hookText,
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Database,
      title: about.expertiseTitle,
      description: about.expertiseText,
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Target,
      title: about.uspTitle,
      description: about.uspText,
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Briefcase,
      title: about.experienceTitle,
      description: about.experienceText,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const techStack = [
    "Python",
    "SQL / PostgreSQL",
    "Apache Spark",
    "ETL / ELT",
    "Power BI",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Docker",
    "n8n Automation",
    "Data Warehousing",
    "Git",
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{about.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {about.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid (Hook, Expertise, USP, Experience) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-slate-600 transition-all group backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-100 to-indigo-50/50 dark:from-slate-800/70 dark:to-slate-900/70 border border-slate-200/80 dark:border-slate-700/60 shadow-inner">
          <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>{about.techStackTitle}</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-400 dark:hover:border-cyan-400 hover:text-indigo-600 dark:hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
