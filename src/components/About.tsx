"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Sparkles, Database, Layers, Target, Briefcase, CheckCircle2, GraduationCap } from "lucide-react";

export default function About() {
  const { content, language } = useThemeLanguage();
  const about = content.about;

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= CENTERED SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Subtle Cosmic Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 dark:text-cyan-300 border border-indigo-500/20 mb-3.5 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{about.title}</span>
          </div>

          {/* Centered Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>

          {/* Centered Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            {about.subtitle}
          </p>
        </div>

        {/* ================= BENTO GRID CONTAINER ================= */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* ROW 1: WHO I AM (Left) & PROFESSIONAL JOURNEY (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. WHO I AM CARD (lg:col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {about.hookTitle}
                  </h3>
                </div>

                <p className="text-base sm:text-lg font-normal text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {about.hookText}
                </p>
              </div>

              {/* Fast Technical Credentials Pills */}
              <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-2 pt-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-black/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                    {language === "ar" ? "حاسبات القاهرة — طالب قسم OR & DS" : "Cairo University (FCAI-CU) · OR & DS"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-black/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    {language === "ar" ? "مبادرة DEPI — هندسة البيانات" : "DEPI Data Engineering"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-black/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Huawei HCIA Big Data
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 2. PROFESSIONAL JOURNEY TIMELINE (lg:col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {about.experienceTitle}
                  </h3>
                </div>

                <div className="space-y-5 border-s-2 border-slate-200 dark:border-slate-800 ms-2.5 ps-5 relative">
                  {about.experienceTimeline.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -start-[27px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 dark:bg-cyan-400 border-2 border-white dark:border-slate-900 shadow-sm" />
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {item.entity}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-cyan-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* ROW 2: FEATURED UNIQUE SELLING PROPOSITION (USP) - CENTERPIECE HERO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-indigo-950/90 via-slate-900/95 to-slate-950 border border-indigo-500/30 dark:border-cyan-500/30 shadow-2xl shadow-indigo-950/40 relative overflow-hidden backdrop-blur-xl"
          >
            {/* Subtle Cosmic Target Watermark Accent */}
            <div className="absolute top-0 end-0 p-6 sm:p-10 opacity-10 pointer-events-none">
              <Target className="w-48 h-48 sm:w-64 sm:h-64 text-cyan-300" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
              {/* Luminous Target Icon Badge */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/25">
                  <Target className="w-8 h-8 text-slate-950" />
                </div>
              </div>

              {/* Exact USP Content */}
              <div className="flex-grow">
                {/* USP Title */}
                <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-400 mb-2.5">
                  {about.uspTitle}
                </h3>

                {/* Exact USP Text */}
                <p className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white leading-snug tracking-tight mb-6 max-w-4xl">
                  &quot;{about.uspText}&quot;
                </p>

                {/* Exact USP Points */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {about.uspPoints.map((point, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white/10 dark:bg-white/5 text-cyan-100 border border-white/15 dark:border-cyan-400/20 backdrop-blur-md shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{point}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROW 3: CORE EXPERTISE (3 DOMAINS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {about.expertiseTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {about.expertiseList.map((category, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-black/40 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-cyan-400 mb-3.5 uppercase tracking-wider">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
