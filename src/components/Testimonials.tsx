"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Mostafa completely transformed our data pipelines. We used to have daily failures, and now everything runs smoothly and automatically. Highly recommended!",
      author: "Ahmed R.",
      role: "Operations Manager",
    },
    {
      id: 2,
      quote: "The web application he built for us is incredibly fast and intuitive. He understood our needs perfectly and delivered beyond our expectations.",
      author: "Sarah M.",
      role: "Product Owner",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-yellow-400 border border-yellow-400/30 mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What People Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Feedback from clients and colleagues I&apos;ve worked with.
          </p>
        </div>

        {/* Testimonials Grid - 2 cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-800/50" />
              <div className="relative z-10">
                <p className="text-lg text-slate-300 italic mb-8 relative">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-yellow-400 font-medium">{testimonial.role}</p>
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
