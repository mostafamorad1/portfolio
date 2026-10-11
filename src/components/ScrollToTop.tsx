"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    setIsVisible(scrollY.get() > 100);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 44;
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, pointerEvents: "none" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-slate-200 dark:text-slate-800"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-indigo-500 dark:text-cyan-400"
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
      </svg>
      <ArrowUp className="relative z-10 h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors" />
    </motion.button>
  );
}
