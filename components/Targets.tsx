"use client";

import React from "react";
import { GraduationCap, Briefcase, Building } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface TargetsProps {
  lang: LanguageType;
}

export default function Targets({ lang }: TargetsProps) {
  const t = translations[lang].targets;

  const targetIcons = [GraduationCap, Briefcase, Building];
  const targetColors = ["green", "blue", "navy"];

  return (
    <section id="targets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((target, index) => {
            const Icon = targetIcons[index] || GraduationCap;
            const color = targetColors[index] || "green";
            const isGreen = color === "green";
            const isBlue = color === "blue";

            return (
              <article
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                    isGreen
                      ? "bg-brand-green/10 text-brand-green"
                      : isBlue
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "bg-navy/10 text-navy"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-navy uppercase tracking-wide mb-4">
                  {target.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {target.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
