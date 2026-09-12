"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Calendar } from "lucide-react";

export default function Education() {
  const { content } = useThemeLanguage();
  const education = content.education;

  return (
    <section id="education" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{education.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {education.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Degree Programs (FCAI-CU & DEPI) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyan-400" aria-hidden="true" />
              <span>{education.degreesTitle}</span>
            </h3>

            {education.degrees.map((deg, index) => (
              <motion.div
                key={deg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {deg.logo && (
                      <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center border border-slate-200/50 shadow-sm shrink-0 overflow-hidden">
                        <Image src={deg.logo} alt="" width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/60">
                      {deg.badge}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <bdi>{deg.period}</bdi>
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-3">
                  {deg.degree}
                </h4>
                <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 mt-1 mb-3">
                  {deg.institution}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {deg.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Industry Certifications (Huawei, GCI, ITIDA, etc.) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />
              <span>{education.certificatesTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.certificates.map((cert, cIdx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: cIdx * 0.05 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex flex-col justify-between hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      {cert.iconImage ? (
                        <div className="w-16 h-10 rounded-lg bg-white flex items-center justify-center p-1.5 overflow-hidden" aria-hidden="true">
                          <Image src={cert.iconImage} alt="" width={60} height={40} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold" aria-hidden="true">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                      )}
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                        <span>{cert.date}</span>
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
