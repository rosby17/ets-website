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
    <section id="testimonials" className="py-20 bg-[#f4f7fc]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            {t.title.includes("font confiance") ? t.title : "Ils nous font confiance"}
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((test, index) => {
            return (
              <article
                key={index}
                className="bg-white rounded-[1.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1.5 mb-6 text-[#7ac11d]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-transparent" strokeWidth={2} />
                    ))}
                  </div>

                  <p className="text-[13px] sm:text-sm text-gray-700 italic leading-relaxed mb-8">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#dbe4ff] flex shrink-0"></div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-navy">{test.name}</span>
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
