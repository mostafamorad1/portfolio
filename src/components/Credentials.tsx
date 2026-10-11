"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Credentials() {
  const { content } = useThemeLanguage();
  const education = content.education;

  return (
    <section id="credentials" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/50 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50 mb-3">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{content.nav.credentials || education.certificatesTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {education.certificatesTitle}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
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
    </section>
  );
}
