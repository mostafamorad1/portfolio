"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Briefcase, ExternalLink, Calendar, MapPin, Award, Check } from "lucide-react";

export default function Experience() {
  const { content, isRtl } = useThemeLanguage();
  const experience = content.experience;

  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{experience.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {experience.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {experience.subtitle}
          </p>
        </div>

        {/* Timeline / Experience Cards */}
        <div className="relative ltr:border-l-2 rtl:border-r-2 border-indigo-200 dark:border-slate-800 ltr:ml-4 rtl:mr-4 ltr:md:ml-32 rtl:md:mr-32 space-y-12">
          {experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative ltr:pl-6 rtl:pr-6"
            >
              {/* Timeline marker icon */}
              <div className="absolute ltr:-left-[17px] rtl:-right-[17px] top-1.5 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30 border-4 border-white dark:border-slate-900" aria-hidden="true">
                <Award className="w-3.5 h-3.5" />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{item.role}</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-base font-semibold text-indigo-600 dark:text-cyan-400">
                        {item.company}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.company} (${isRtl ? 'زيارة الموقع الرسمي - نافذة جديدة' : 'visit website - opens in new tab'})`}
                          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-300 font-medium underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                        >
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          <span>{item.link.replace("https://", "")}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <bdi>{item.period}</bdi>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements list */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 dark:bg-slate-700/50 text-indigo-700 dark:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
