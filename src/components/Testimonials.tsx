"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  CheckCircle2,
  Loader2,
  Sparkles,
  UserCheck,
  MessageSquarePlus,
} from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  createdAt?: string;
}

export default function Testimonials() {
  const { content, language, isRtl } = useThemeLanguage();
  const testimonialsData = content.testimonials;

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
    rating: 5,
  });

  const [hoverRating, setHoverRating] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  // Fetch testimonials from API on mount & merge with any local submissions
  useEffect(() => {
    let isMounted = true;
    async function fetchTestimonials() {
      let localList: TestimonialItem[] = [];
      try {
        const stored = typeof window !== "undefined" ? localStorage.getItem("user_testimonials") : null;
        if (stored) localList = JSON.parse(stored);
      } catch {}

      try {
        const res = await fetch("/api/testimonials");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && Array.isArray(data.testimonials)) {
            const combined = [...data.testimonials, ...localList];
            const uniqueMap = new Map<string, TestimonialItem>();
            combined.forEach((item) => {
              if (item?.id) uniqueMap.set(item.id, item);
            });
            setTestimonials(Array.from(uniqueMap.values()));
            return;
          }
        }
      } catch (err) {
        console.warn("Could not fetch testimonials:", err);
      } finally {
        if (isMounted) {
          if (localList.length > 0) setTestimonials(localList);
          setIsLoading(false);
        }
      }
    }
    fetchTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  const count = testimonials.length;

  const nextSlide = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevSlide = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Auto-play timer for multi-item carousel (pauses on hover or when modal is open)
  useEffect(() => {
    if (isModalOpen || count <= 1) return;

    const startTimer = () => {
      autoPlayTimerRef.current = setInterval(() => {
        if (!isHoveredRef.current) {
          setActiveIndex((prev) => (prev + 1) % count);
        }
      }, 7000);
    };

    startTimer();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [count, isModalOpen]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError(
        language === "ar" ? "يرجى كتابة اسمك (حرفين على الأقل)" : "Please enter your name (at least 2 characters)"
      );
      return;
    }

    if (!formData.role.trim()) {
      setFormError(
        language === "ar"
          ? "يرجى كتابة المسمى الوظيفي أو صفتك (مثال: عميل، زميل عمل)"
          : "Please enter your role or title (e.g. Client, Data Scientist)"
      );
      return;
    }

    if (!formData.quote.trim() || formData.quote.trim().length < 5) {
      setFormError(language === "ar" ? "يرجى كتابة رأيك في بضعة أسطر" : "Please share your review");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSubmitSuccess(true);
        let updated: TestimonialItem[] = [];
        if (Array.isArray(result.testimonials)) {
          updated = result.testimonials;
        } else if (result.testimonial) {
          updated = [result.testimonial, ...testimonials];
        }
        setTestimonials(updated);
        try {
          if (typeof window !== "undefined") {
            localStorage.setItem("user_testimonials", JSON.stringify(updated));
          }
        } catch {}
        setActiveIndex(0); // Focus on newly added review

        setTimeout(() => {
          setSubmitSuccess(false);
          setIsModalOpen(false);
          setFormData({ name: "", role: "", quote: "", rating: 5 });
        }, 2200);
      } else {
        setFormError(
          result.error ||
            (language === "ar" ? "حدث خطأ أثناء الحفظ. يرجى المحاولة ثانية." : "Failed to save review. Please try again.")
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFormError(
        language === "ar" ? "تعذر الاتصال بالخادم. يرجى التحقق من اتصالك." : "Network error. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to generate initials from name
  const getInitials = (nameStr: string) => {
    const parts = nameStr.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return nameStr.slice(0, 2).toUpperCase();
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24 overflow-hidden"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3 shadow-xs">
            <Quote className="w-3.5 h-3.5" />
            <span>{testimonialsData?.title || (isRtl ? "التوصيات والآراء" : "Testimonials")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {testimonialsData?.title || (isRtl ? "التوصيات والآراء" : "Testimonials & Reviews")}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {testimonialsData?.subtitle ||
              (isRtl
                ? "ما يقوله الزملاء والعملاء وأصحاب العمل عن دقة التنفيذ والتعاون معي"
                : "What colleagues, clients, and collaborators say about my engineering delivery and work ethic")}
          </p>

          {/* Add Review Trigger Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setFormError("");
                setSubmitSuccess(false);
                setIsModalOpen(true);
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
              <span>{isRtl ? "أضف رأيك أو تقييمك" : "Add Your Review"}</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
            </button>
          </div>
        </div>

        {/* Content Display: Loading / Empty State / Single Card / 3D Slider */}
        {isLoading ? (
          <div className="h-72 flex flex-col items-center justify-center gap-3 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            <span className="text-xs font-mono">{isRtl ? "جاري تحميل الآراء..." : "Loading testimonials..."}</span>
          </div>
        ) : count === 0 ? (
          /* Empty State */
          <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md text-center shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <MessageSquarePlus className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              {isRtl ? "لا توجد آراء مسجلة حتى الآن" : "No testimonials yet"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {isRtl
                ? "كن أول من يشارك رأيه وتجربته في العمل والتعاون معي! رأيك سيظهر هنا مباشرة لجميع الزوار."
                : "Be the first to share your experience working with me! Your review will be published here live for all visitors."}
            </p>
            <button
              type="button"
              onClick={() => {
                setFormError("");
                setSubmitSuccess(false);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{isRtl ? "اكتب أول رأي الآن" : "Leave the First Review"}</span>
            </button>
          </div>
        ) : count === 1 ? (
          /* Single Card Display (Centered) */
          <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-indigo-500/40 dark:border-cyan-500/40 shadow-2xl shadow-indigo-500/10 dark:shadow-cyan-500/10 relative">
            <Quote className="absolute top-6 end-6 w-12 h-12 text-slate-200/70 dark:text-slate-800/60 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, sIdx) => {
                    const isFilled = sIdx + 1 <= (testimonials[0].rating || 5);
                    return (
                      <Star
                        key={sIdx}
                        className={`w-4 h-4 ${
                          isFilled
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
                  <UserCheck className="w-3 h-3" />
                  <span>{isRtl ? "مؤكد" : "Verified"}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
                &quot;{testimonials[0].quote}&quot;
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-indigo-500/20">
                  {getInitials(testimonials[0].name)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-xs font-medium text-indigo-600 dark:text-cyan-400 truncate">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Multi-item 3D Coverflow Slider (Count >= 2) */
          <>
            <div className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[420px] flex items-center justify-center [perspective:1200px]">
              {testimonials.map((item, index) => {
                let diff = index - activeIndex;
                if (diff > count / 2) diff -= count;
                if (diff < -count / 2) diff += count;

                const isCenter = diff === 0;
                const isPrev = diff === -1;
                const isNext = diff === 1;
                const isVisible = isCenter || isPrev || isNext;

                if (!isVisible) return null;

                const xMultiplier = isRtl ? -1 : 1;
                const xOffset = isCenter ? "0%" : diff > 0 ? `${56 * xMultiplier}%` : `${-56 * xMultiplier}%`;
                const rotateAngle = isCenter ? 0 : diff > 0 ? (isRtl ? 16 : -16) : (isRtl ? -16 : 16);
                const scale = isCenter ? 1 : 0.85;
                const zIndex = isCenter ? 30 : 15;
                const opacity = isCenter ? 1 : 0.45;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => {
                      if (!isCenter) setActiveIndex(index);
                    }}
                    initial={false}
                    animate={{
                      x: xOffset,
                      scale,
                      rotateY: rotateAngle,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28,
                      mass: 0.8,
                    }}
                    className={`absolute w-[92%] sm:w-[480px] md:w-[540px] p-6 sm:p-8 rounded-3xl backdrop-blur-md transition-shadow duration-300 select-none ${
                      isCenter
                        ? "bg-white/95 dark:bg-slate-900/95 border-2 border-indigo-500/40 dark:border-cyan-500/40 shadow-2xl shadow-indigo-500/10 dark:shadow-cyan-500/10 cursor-default"
                        : "bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-md cursor-pointer hover:opacity-75"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Quote className="absolute top-6 end-6 w-12 h-12 text-slate-200/70 dark:text-slate-800/60 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, sIdx) => {
                            const starVal = sIdx + 1;
                            const isFilled = starVal <= (item.rating || 5);
                            return (
                              <Star
                                key={sIdx}
                                className={`w-4 h-4 ${
                                  isFilled
                                    ? "fill-amber-400 text-amber-400"
                                    : "fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600"
                                }`}
                              />
                            );
                          })}
                        </div>

                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
                          <UserCheck className="w-3 h-3" />
                          <span>{isRtl ? "مؤكد" : "Verified"}</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6 min-h-[72px] line-clamp-4">
                        &quot;{item.quote}&quot;
                      </p>

                      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-indigo-500/20">
                          {getInitials(item.name)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs font-medium text-indigo-600 dark:text-cyan-400 truncate">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons and Dots */}
            <div className="mt-6 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={isRtl ? nextSlide : prevSlide}
                  aria-label={isRtl ? "التالي" : "Previous review"}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveIndex(dotIdx)}
                      aria-label={`Slide ${dotIdx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        dotIdx === activeIndex
                          ? "w-6 h-2 bg-indigo-600 dark:bg-cyan-400 shadow-xs"
                          : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={isRtl ? prevSlide : nextSlide}
                  aria-label={isRtl ? "السابق" : "Next review"}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isSubmitting) setIsModalOpen(false);
              }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl z-10"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isRtl ? "مشاركة الرأي" : "Share Your Review"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {isRtl ? "أضف رأيك في العمل معي" : "Add Your Testimonial"}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {isRtl
                    ? "رأيك يظهر مباشرة لجميع زوار الموقع لدعم المصداقية والتعاون."
                    : "Your feedback will be published live and visible to everyone."}
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-3 animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isRtl ? "تمت إضافة رأيك بنجاح!" : "Thank You!"}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {isRtl
                      ? "رأيك متاح الآن ويظهر في السلايدز للجميع مباشرة."
                      : "Your testimonial has been posted live for all visitors."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isRtl ? "اسمك بالكامل *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder={isRtl ? "مثال: م. أحمد سامي" : "e.g. John Doe"}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isRtl ? "المسمى الوظيفي أو صفتك *" : "Role / Title / Company *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                      placeholder={isRtl ? "مثال: Senior Data Engineer / عميل مستقل" : "e.g. Senior Data Scientist / Client"}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isRtl ? "التقييم بالنجوم" : "Rating"}
                    </label>
                    <div className="flex items-center gap-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((val) => {
                        const activeStar = hoverRating ? val <= hoverRating : val <= formData.rating;
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, rating: val }))}
                            onMouseEnter={() => setHoverRating(val)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                activeStar
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isRtl ? "رأيك وانطباعك في العمل والتعاون معي *" : "Your Review / Testimonial *"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.quote}
                      onChange={(e) => setFormData((prev) => ({ ...prev, quote: e.target.value }))}
                      placeholder={
                        isRtl
                          ? "اكتب هنا رأيك عن جودة العمل، الالتزام، أو النتائج المحققة..."
                          : "Share your experience regarding code quality, execution, communication, or results..."
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  {formError && (
                    <p className="text-xs font-medium text-rose-500 dark:text-rose-400 pt-1">
                      {formError}
                    </p>
                  )}

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {isRtl ? "إلغاء" : "Cancel"}
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/25 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{isRtl ? "جاري النشر..." : "Submitting..."}</span>
                        </>
                      ) : (
                        <span>{isRtl ? "نشر التقييم" : "Submit Review"}</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
