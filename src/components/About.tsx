"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Sparkles, Database, Layers, Target, Briefcase, CheckCircle2 } from "lucide-react";

export default function About() {
  const { content } = useThemeLanguage();
  const about = content.about;

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{about.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {about.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* WHO I AM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-indigo-300 dark:hover:border-slate-600 transition-all backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {about.hookTitle}
              </h3>
            </div>
            <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
              {about.hookText}
            </p>
          </motion.div>

          {/* CORE EXPERTISE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-indigo-300 dark:hover:border-slate-600 transition-all backdrop-blur-sm flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-md">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {about.expertiseTitle}
              </h3>
            </div>
            
            <div className="space-y-5 flex-grow">
              {about.expertiseList.map((category, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-2 uppercase tracking-wider">{category.category}</h4>
                  <ul className="space-y-1.5">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PROFESSIONAL BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-indigo-300 dark:hover:border-slate-600 transition-all backdrop-blur-sm flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {about.experienceTitle}
              </h3>
            </div>
            
            <div className="space-y-6 flex-grow border-l-2 border-slate-200 dark:border-slate-700 ml-2 pl-6 relative pt-2">
              {about.experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">{item.entity}</h4>
                  <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400">{item.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* UNIQUE SELLING PROPOSITION (USP) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 shadow-xl relative overflow-hidden mt-2"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-48 h-48 text-indigo-300" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-teal-400 flex items-center justify-center text-slate-900 shadow-lg shadow-cyan-500/20">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">
                  {about.uspTitle}
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-white leading-snug mb-6 max-w-3xl">
                  &quot;{about.uspText}&quot;
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {about.uspPoints.map((point, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl text-sm font-bold bg-white/10 text-cyan-100 border border-white/10 backdrop-blur-md"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
