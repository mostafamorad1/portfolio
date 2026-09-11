"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Download, ArrowRight, ArrowLeft, Mail, CheckCircle, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const { content, isRtl } = useThemeLanguage();
  const hero = content.hero;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined" && window.history) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 to-cyan-500/20 dark:from-indigo-600/20 dark:to-cyan-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start rtl:items-start text-left rtl:text-right"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 border border-indigo-200/60 dark:border-indigo-800/60 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{hero.badgeText}</span>
            </div>

            {/* Greeting */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 mb-2">
              {hero.greeting}
            </h2>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-300">
                {hero.name}
              </span>
            </h1>

            {/* Role */}
            <div className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
              <span>{hero.role}</span>
            </div>

            {/* USP (Core Message) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm backdrop-blur-sm mb-8 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                &ldquo;{hero.usp}&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href={personalInfo.cvFile}
                download="Mostafa_Morad_CV.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>{hero.downloadCv}</span>
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{hero.viewWork}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{hero.contactMe}</span>
              </a>
            </div>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200 dark:border-slate-800">
              {hero.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-cyan-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-1.5 shadow-2xl shadow-indigo-500/20 -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                  <Image
                    src="/profile.jpg"
                    alt={hero.name}
                    fill
                    sizes="(max-width: 768px) 320px, 384px"
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating feature pill 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white dark:bg-slate-800/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xl flex items-center gap-2.5 z-10"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {hero.pills.engineering.title}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {hero.pills.engineering.subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Floating feature pill 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xl flex items-center gap-2 z-10"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                  {hero.pills.solutions}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
