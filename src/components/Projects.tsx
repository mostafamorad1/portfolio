"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { FolderGit2, Cpu, ArrowUpRight, ChevronDown, ChevronUp, User2, Target, TrendingUp } from "lucide-react";

export default function Projects() {
  const { content } = useThemeLanguage();
  const projects = content.projects;
  const labels = projects.labels;
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-yellow-400 border border-yellow-400/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{projects.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {projects.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            {projects.subtitle}
          </p>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.items.slice(0, 3).map((project, index) => {
            const isLarge = index === 0;
            const isExpanded = !!expandedIds[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-3xl bg-slate-900 border border-slate-800 shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Image Section */}
                <div className={`relative w-full ${isLarge ? "h-64 sm:h-80 lg:h-96" : "h-48 sm:h-56"} bg-slate-800 flex items-center justify-center overflow-hidden group`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={isLarge ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className={`${
                      project.id === "gen-academy-web" ? "object-contain p-2 sm:p-4" : "object-cover object-top"
                    } w-full h-full group-hover:scale-105 transition-transform duration-500`}
                  />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit: ${project.title}`}
                      className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-slate-700 hover:bg-yellow-400 hover:text-slate-900 transition-colors z-10"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow gap-4">
                  <div>
                    {/* Role Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <User2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{project.role}</span>
                    </div>

                    <h3 className={`font-bold text-white mb-2 ${isLarge ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-yellow-400 mb-4">
                      {project.tagline}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-1">
                          <Cpu className="w-3.5 h-3.5 text-yellow-400" />
                          <span>{labels.solution}</span>
                        </div>
                        <p className={`text-sm text-slate-400 ${isExpanded ? "" : "line-clamp-3"}`}>
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 mb-4">
                            {/* Problem */}
                            <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-1">
                                <Target className="w-3.5 h-3.5 text-red-400" />
                                <span>{labels.problem}</span>
                              </div>
                              <p className="text-sm text-slate-400">
                                {project.problem}
                              </p>
                            </div>

                            {/* Result */}
                            <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-1">
                                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                                <span>{labels.result}</span>
                              </div>
                              <p className="text-sm text-slate-400">
                                {project.result}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* View Details Button */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors mt-1 cursor-pointer"
                    >
                      <span>{isExpanded ? "Show Less" : "View Full Details"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="border-t border-slate-800 pt-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, isLarge ? 8 : 6).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > (isLarge ? 8 : 6) && (
                        <span className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                          +{project.tools.length - (isLarge ? 8 : 6)}
                        </span>
                      )}
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
