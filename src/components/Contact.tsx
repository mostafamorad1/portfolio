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
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.76-1.75-1.76-1.75.79-1.75 1.76.78 1.76 1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
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
    website_url: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !emailRegex.test(formData.email.trim()) || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage(
        language === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة والتأكد من صحة البريد الإلكتروني."
          : "Please complete all required fields with a valid email address."
      );
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", website_url: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || formLabels.errorMessage);
      }
    } catch {
      setStatus("error");
      setErrorMessage(formLabels.errorMessage);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
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
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500 transition-colors group shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
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
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500 transition-colors group shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                    {contact.phoneLabel}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    <bdi dir="ltr">{personalInfo.phone}</bdi>
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0" aria-hidden="true">
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
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:border-indigo-600 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam honeypot (hidden from sighted users and screen readers) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-url">Leave this empty</label>
                  <input
                    type="text"
                    id="website-url"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_url}
                    onChange={(e) => handleInputChange("website_url", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      {formLabels.name} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                      placeholder={formLabels.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      {formLabels.email} *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      placeholder={formLabels.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    {formLabels.subject}
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder={formLabels.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    {formLabels.message} *
                  </label>
                  <textarea
                    rows={5}
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    placeholder={formLabels.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all resize-none"
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 border border-emerald-200 dark:border-emerald-800"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{formLabels.successMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-semibold flex items-center justify-between gap-2 border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{errorMessage || formLabels.errorMessage}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>{status === "submitting" ? formLabels.sendingButton : formLabels.sendButton}</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                      formData.subject || "Portfolio Inquiry"
                    )}&body=${encodeURIComponent(
                      `Hi Mostafa,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold text-xs sm:text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <Mail className="w-4 h-4 text-indigo-500 dark:text-cyan-400" aria-hidden="true" />
                    <span>{language === "ar" ? "إرسال عبر تطبيق البريد مباشرة" : "Send via Email Client"}</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
