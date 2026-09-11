"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { GitBranch, PieChart, Layout, Cpu, CheckCircle2, Cog } from "lucide-react";

export default function Services() {
  const { content } = useThemeLanguage();
  const services = content.services;

  const iconMap: Record<string, React.ElementType> = {
    GitBranch: GitBranch,
    PieChart: PieChart,
    Layout: Layout,
    Cpu: Cpu,
  };

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Cog className="w-3.5 h-3.5" />
            <span>{services.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {services.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center font-bold mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-6 border-t border-slate-100 dark:border-slate-700/60">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
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
