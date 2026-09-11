"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { FolderGit2, AlertCircle, UserCheck, Cpu, Trophy, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { content } = useThemeLanguage();
  const projects = content.projects;
  const labels = projects.labels;

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{projects.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {projects.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {projects.subtitle}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.items.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Project Image & Visual Preview */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center items-center bg-gradient-to-br from-slate-100 to-indigo-50/40 dark:from-slate-900/90 dark:to-slate-950/80 border-b lg:border-b-0 ${
                      isEven
                        ? "ltr:lg:border-r rtl:lg:border-l border-slate-200/80 dark:border-slate-700/60"
                        : "lg:order-2 ltr:lg:border-l rtl:lg:border-r border-slate-200/80 dark:border-slate-700/60"
                    }`}
                  >
                    <div className="relative w-full max-w-md aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 group bg-slate-900 flex items-center justify-center p-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={380}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      />
                    </div>

                    {project.link && (
                      <div className="mt-6 w-full flex justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
                        >
                          <span>{labels.visitProject}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Project Details (Problem, Role, Solution, Tools, Result) */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Title & Tagline */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Structured 5 Items */}
                      <div className="space-y-4">
                        {/* 1. Problem */}
                        <div className="p-3.5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/40">
                          <div className="flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 mb-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{labels.problem}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        {/* 2. Role */}
                        <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/40">
                          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                            <UserCheck className="w-3.5 h-3.5 shrink-0" />
                            <span>{labels.role}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {project.role}
                          </p>
                        </div>

                        {/* 3. Solution */}
                        <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-900/40">
                          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                            <Cpu className="w-3.5 h-3.5 shrink-0" />
                            <span>{labels.solution}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        {/* 4. Result */}
                        <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/25 border border-emerald-200/60 dark:border-emerald-900/40">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                            <Trophy className="w-3.5 h-3.5 shrink-0" />
                            <span>{labels.result}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 5. Tools */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                        {labels.tools}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
