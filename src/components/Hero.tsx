"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
// Removed unused imports
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const { content, isRtl } = useThemeLanguage();
  const hero = content.hero;
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Scroll animations for the profile picture
  const profileScale = useTransform(scrollY, [0, 400], [1, 0.85]);
  const profileOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[120vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-start justify-center overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 h-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start rtl:items-start text-left rtl:text-right pt-10"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/20">
                {isRtl ? "مهندس بيانات" : "DATA ENGINEER"}
              </span>
              <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-slate-800 text-slate-300 rounded border border-slate-700">
                DEPI
              </span>
              <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-slate-800 text-slate-300 rounded border border-slate-700">
                {isRtl ? "مطور متكامل" : "FULL-STACK"}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {hero.headline}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 leading-relaxed font-medium mb-10 max-w-2xl">
              {hero.usp}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-sm transition-all focus:outline-none shadow-lg shadow-yellow-500/20"
              >
                <span>{hero.viewWork}</span>
              </a>

              {/* Secondary CTA: Download CV */}
              <a
                href={personalInfo.cvFile}
                download="Mostafa_Morad_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-transparent text-slate-300 hover:text-white font-medium text-sm border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-all focus:outline-none"
              >
                <span>{hero.downloadCv}</span>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide mt-2">
              {hero.techStack}
            </div>
          </motion.div>

          {/* Profile Visual (Sticky Shrinking Element) */}
          <div className="lg:col-span-5 h-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="sticky top-32 z-10 h-max">
              <motion.div
                style={{
                  scale: profileScale,
                  opacity: profileOpacity,
                  transformOrigin: "center top"
                }}
                className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[3/4] shadow-[0_0_40px_rgba(245,158,11,0.1)] border border-amber-500/30 bg-slate-900 overflow-hidden rounded-[24px]"
              >
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                priority
                className="object-cover object-top"
              />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
