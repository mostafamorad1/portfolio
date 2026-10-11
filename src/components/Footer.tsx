"use client";

import React from "react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Mail } from "lucide-react";
import { personalInfo, getWhatsAppLink } from "@/data/portfolioData";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.44-9.44 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.04.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.3l5.7-1.5a11.33 11.33 0 0 0 5.76 1.47h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.04-1.18-5.89-3.32-8.04z" />
    </svg>
  );
}

export default function Footer() {
  const { content, language, isRtl } = useThemeLanguage();
  const footer = content.footer;
  const name = personalInfo.name[language];

  const socials = [
    { label: "LinkedIn", href: personalInfo.linkedin, Icon: LinkedinIcon },
    { label: "WhatsApp", href: getWhatsAppLink(language), Icon: WhatsAppIcon },
    { label: "GitHub", href: personalInfo.github, Icon: GithubIcon },
    { label: "Email", href: `mailto:${personalInfo.email}`, Icon: Mail },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-start">
          {/* Let's Connect */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-600 dark:text-cyan-400 mb-3">
              {footer.connectTitle}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xs mx-auto md:mx-0">
              {footer.connectText}
            </p>
            <div className="flex gap-2.5 mt-5 justify-center md:justify-start">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex flex-col items-center justify-center md:pt-4">
            <a href="#home" aria-label={name} className="block h-20 group">
              <img src="/assets/logo_light_text.png" alt={name} className="h-full w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform" />
              <img src="/assets/logo.png" alt={name} className="h-full w-auto object-contain block dark:hidden group-hover:scale-105 transition-transform" />
            </a>
            <p className="mt-3 text-xs sm:text-sm tracking-wide font-mono text-slate-500 dark:text-slate-400">
              {footer.tagline}
            </p>
          </div>

          {/* Who Am I */}
          <div className="md:text-end">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-3">
              {footer.whoTitle}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xs mx-auto md:ms-auto md:me-0">
              {isRtl ? "أنا " : "I'm "}
              <strong className="text-slate-900 dark:text-white">{name}</strong>
              {isRtl ? "، " : ", "}
              {footer.whoText}
            </p>
          </div>
        </div>

        {/* Freelance Platforms */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-400 dark:text-slate-500 mb-5">
            {footer.platformsTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {personalInfo.freelancePlatforms.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                title={p.name}
                className="group w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-cyan-500/50 transition-all duration-300"
              >
                <img
                  src={p.icon}
                  alt={p.name}
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-md object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-center">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} {name}. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
