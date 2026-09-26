"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function Testimonials() {
  const { content } = useThemeLanguage();
  const testimonialsData = content.testimonials;

  if (!testimonialsData || testimonialsData.items.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>{testimonialsData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {testimonialsData.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {testimonialsData.subtitle}
          </p>
        </div>

        {/* Testimonials Grid - 2 cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 shadow-md relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 dark:text-slate-800/50" />
              <div className="relative z-10">
                <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-8 relative leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-cyan-400 font-bold text-xl">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">
                      {testimonial.attribution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
