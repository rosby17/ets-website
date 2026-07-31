"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface EngagementsProps {
  lang: LanguageType;
}

export default function Engagements({ lang }: EngagementsProps) {
  const t = translations[lang].engagements;

  return (
    <section
      id="engagements"
      className="relative py-20 bg-brand-blue text-white overflow-hidden"
    >
      {/* Decorative Topographic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 100,500 C 400,400 600,600 900,450 C 1200,300 1400,700 1700,550"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <path
            d="M 100,600 C 400,500 650,700 950,550 C 1250,400 1450,800 1750,650"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto my-4 rounded-full"></div>
        </div>

        {/* Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.list.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base text-gray-100 font-semibold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
