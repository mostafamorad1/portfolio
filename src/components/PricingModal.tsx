"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  Sparkles,
  MessageCircle,
  FileText,
  Presentation,
  Database,
  Code,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import {
  pricingCategories,
  pricingAddOns,
  PricingCategory,
  PricingPlan,
} from "@/data/pricingData";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategoryId?: string;
}

export default function PricingModal({
  isOpen,
  onClose,
  defaultCategoryId = "portfolio",
}: PricingModalProps) {
  const { language } = useThemeLanguage();
  const isAr = language === "ar";
  const [activeCategoryId, setActiveCategoryId] = useState<string>(defaultCategoryId);

  // Sync category if defaultCategoryId changes
  useEffect(() => {
    if (defaultCategoryId) {
      setActiveCategoryId(defaultCategoryId);
    }
  }, [defaultCategoryId]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const activeCategory: PricingCategory =
    pricingCategories.find((c) => c.id === activeCategoryId) || pricingCategories[0];

  const categoryIcons: Record<string, React.ElementType> = {
    Code: Code,
    FileText: FileText,
    Presentation: Presentation,
    Database: Database,
  };

  const getWhatsAppBookingLink = (plan: PricingPlan, category: PricingCategory) => {
    const phone = "201015905993";
    const planName = plan.name[language];
    const catName = category.name[language];
    const priceText = `$${plan.price}`;

    const text = isAr
      ? `مرحباً يا مصطفى، أنا مهتم بطلب باقة (${planName}) لخدمة (${catName}) بسعر ${priceText}. أحتاج لتفاصيل إضافية والبدء في المشروع.`
      : `Hello Mostafa, I'm interested in ordering the (${planName}) plan for (${catName}) priced at ${priceText}. I'd like to discuss the project details and get started.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const getCustomProjectLink = () => {
    const phone = "201015905993";
    const text = isAr
      ? `مرحباً يا مصطفى، أود مناقشة مشروع مخصص بمواصفات ومتطلبات خاصة.`
      : `Hello Mostafa, I would like to discuss a custom project with specific requirements.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-modal-title"
            className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h2
                  id="pricing-modal-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                  {isAr ? "خطط وباقات الأسعار" : "Pricing Plans"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {isAr
                    ? "اختر الخدمة المناسبة لاستعراض باقاتها وحجزها مباشرة عبر واتساب"
                    : "Choose a service to view packages and book directly via WhatsApp"}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label={isAr ? "إغلاق" : "Close"}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
              {/* Category Pills (Clean & Simple) */}
              <div className="flex flex-wrap gap-2 p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-2xl">
                {pricingCategories.map((category) => {
                  const Icon = categoryIcons[category.icon] || Code;
                  const isActive = category.id === activeCategoryId;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategoryId(category.id)}
                      className={`flex-1 min-w-[130px] sm:min-w-0 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-cyan-400 shadow-sm border border-slate-200/80 dark:border-slate-700"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span className="truncate">{category.name[language]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Note / Disclaimer if available */}
              {activeCategory.note && (
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center italic">
                  * {activeCategory.note[language]}
                </p>
              )}

              {/* Plans Grid (3 Simple Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                {activeCategory.plans.map((plan) => {
                  const isPopular = plan.popular;
                  const bookingUrl = getWhatsAppBookingLink(plan, activeCategory);
                  // Filter out negative/false features for a clean, positive bullet list
                  const positiveFeatures = plan.features.filter((f) => f.value !== false);

                  return (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all ${
                        isPopular
                          ? "bg-indigo-50/40 dark:bg-slate-800/90 border-2 border-indigo-500 dark:border-cyan-400 shadow-md"
                          : "bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-600"
                      }`}
                    >
                      {/* Popular Badge */}
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 dark:bg-cyan-500 text-white dark:text-slate-950 text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{isAr ? "الأكثر طلباً ⭐" : "Most Popular"}</span>
                        </div>
                      )}

                      <div>
                        {/* Title & Revisions */}
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {plan.name[language]}
                          </h4>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                              {plan.revisions}{" "}
                              {isAr
                                ? plan.revisions === 1
                                  ? "تعديل مجاني"
                                  : "تعديلات مجانية"
                                : plan.revisions === 1
                                ? "Free Revision"
                                : "Free Revisions"}
                            </span>
                            {plan.extraRevisionPrice && (
                              <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                                {isAr
                                  ? `+$${plan.extraRevisionPrice} للتعديل الإضافي`
                                  : `+$${plan.extraRevisionPrice} per extra`}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px] leading-relaxed">
                          {plan.tagline[language]}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-1 py-2 mb-4 border-b border-slate-100 dark:border-slate-700/60">
                          <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                            ${plan.price}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {isAr ? "دولار" : "USD"}
                          </span>
                        </div>

                        {/* Clean Features Bullet List */}
                        <ul className="space-y-2 mb-6 text-xs sm:text-sm">
                          {positiveFeatures.map((feature, idx) => {
                            const customVal = typeof feature.value === "string" ? feature.value : null;

                            return (
                              <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                                <Check
                                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                                    isPopular
                                      ? "text-indigo-600 dark:text-cyan-400"
                                      : "text-emerald-500"
                                  }`}
                                />
                                <span className="flex-1">
                                  {feature.name[language]}
                                  {customVal && (
                                    <span className="font-semibold text-indigo-600 dark:text-cyan-300 mr-1 ml-1">
                                      ({customVal})
                                    </span>
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* WhatsApp Button */}
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                          isPopular
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-slate-950 hover:scale-[1.01]"
                            : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 hover:scale-[1.01]"
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" />
                        <span>{isAr ? "اطلب الباقة الآن" : "Order on WhatsApp"}</span>
                        {isAr ? (
                          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        )}
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Compact Add-ons Strip */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isAr ? "إضافات اختيارية (Add-ons):" : "Optional Add-ons:"}</span>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {pricingAddOns.map((addon, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      <span>{addon.title[language]}</span>
                      <span className="font-bold text-indigo-600 dark:text-cyan-400 font-mono">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prominently Framed Custom Project Banner */}
              <div className="relative mt-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-50/90 via-white to-indigo-50/70 dark:from-slate-850 dark:via-slate-800 dark:to-indigo-950/40 border-2 border-indigo-400/50 dark:border-cyan-500/50 shadow-xl shadow-indigo-500/10 dark:shadow-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4 text-center sm:text-start">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-700 dark:from-cyan-500 dark:to-blue-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 dark:shadow-cyan-500/20 shrink-0 hidden sm:flex">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                      <span>
                        {isAr
                          ? "هل تبحث عن مواصفات خاصة أو مشروع مخصص؟ 🎯"
                          : "Need a Custom Scope or Specific Requirements? 🎯"}
                      </span>
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
                      {isAr
                        ? "جاهز لتنفيذ طلبك بدقة وتفصيل خاص يناسب ميزانيتك ووقتك، تواصل معي مباشرة للمناقشة."
                        : "Ready to tailor a custom solution to your exact budget, timeline, and deliverables. Let's talk directly."}
                    </p>
                  </div>
                </div>

                <a
                  href={getCustomProjectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105 shrink-0"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>{isAr ? "تواصل لمشروع مخصص" : "Discuss Custom Project"}</span>
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                  ) : (
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  )}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
