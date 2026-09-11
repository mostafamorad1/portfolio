"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.76-1.75-1.76-1.75.79-1.75 1.76.78 1.76 1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Contact() {
  const { content, language } = useThemeLanguage();
  const contact = content.contact;
  const formLabels = contact.form;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !emailRegex.test(formData.email.trim()) || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{contact.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {contact.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {contact.getInTouch}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {contact.infoText}
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500 transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                    {contact.emailLabel}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phoneClean}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500 transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                    {contact.phoneLabel}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                    {contact.locationLabel}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location[language]}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                {contact.socialsLabel}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:border-indigo-600 transition-all shadow-sm"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-cyan-500 dark:hover:text-slate-950 dark:hover:border-cyan-500 transition-all shadow-sm"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {formLabels.name} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={formLabels.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {formLabels.email} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={formLabels.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {formLabels.subject}
                  </label>
                  <input
                    type="text"
                    placeholder={formLabels.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {formLabels.message} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder={formLabels.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all resize-none"
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 border border-emerald-200 dark:border-emerald-800"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{formLabels.successMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-semibold flex items-center gap-2 border border-red-200 dark:border-red-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formLabels.errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? formLabels.sendingButton : formLabels.sendButton}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
