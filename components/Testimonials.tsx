"use client";

import React from "react";
import { Star } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface TestimonialsProps {
  lang: LanguageType;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;

  const avatars = ["KA", "MK", "DG"];

  return (
    <section id="testimonials" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((test, index) => {
            const avatar = avatars[index] || "KA";
            return (
              <article
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-text-dark italic leading-relaxed mb-6">
                    {test.quote}
                  </p>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white font-extrabold text-xs flex items-center justify-center select-none shadow-sm">
                    {avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-navy">{test.name}</span>
                    <span className="text-xs text-gray-500 font-medium">{test.role}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
