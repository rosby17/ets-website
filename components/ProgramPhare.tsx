"use client";

import React from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface ProgramPhareProps {
  lang: LanguageType;
}

export default function ProgramPhare({ lang }: ProgramPhareProps) {
  const t = translations[lang].programPhare;

  const locations =
    lang === "fr"
      ? ["Angré 22e", "Riviera 3", "Yopougon Bel-Air", "En ligne"]
      : lang === "en"
      ? ["Angre 22e", "Riviera 3", "Yopougon Bel-Air", "Online"]
      : lang === "es"
      ? ["Angré 22e", "Riviera 3", "Yopougon Bel-Air", "En línea"]
      : lang === "pt"
      ? ["Angré 22e", "Riviera 3", "Yopougon Bel-Air", "Online"]
      : lang === "de"
      ? ["Angré 22e", "Riviera 3", "Yopougon Bel-Air", "Online"]
      : ["Angre 22e", "Riviera 3", "Yopougon Bel-Air", "在线"];

  return (
    <section id="program" className="py-20 bg-bg-light">
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
        </div>

        {/* Card split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 max-w-5xl mx-auto">
          {/* Left Column (Navy Backdrop) */}
          <div className="lg:col-span-6 bg-navy p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-6 -right-6 text-9xl font-black text-white/5 select-none pointer-events-none">
              HFE
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <span className="inline-block bg-brand-green text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit">
                {t.season}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight uppercase">
                {t.hfeTitle}
              </h3>
              <p className="text-sm text-gray-300 italic">
                {t.tagline}
              </p>

              {/* Benefits list */}
              <ul className="flex flex-col gap-3.5 mt-4" role="list">
                {t.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metadata */}
            <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  {t.publicLabel}
                </span>
                <span className="text-xs font-bold text-white mt-1">{t.publicVal}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  {t.durationLabel}
                </span>
                <span className="text-xs font-bold text-white mt-1">{t.durationVal}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  {t.startLabel}
                </span>
                <span className="text-xs font-bold text-white mt-1">{t.startVal}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold tracking-wider text-brand-blue uppercase border-b border-gray-100 pb-3">
                {t.locLabel}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bg-light border border-gray-200/40 text-xs font-bold text-brand-blue"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-green" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-wider text-navy uppercase">
                {t.whoLabel}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t.whoDesc}
              </p>
            </div>

            <a
              href="https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+m%27inscrire+au+programme+Holiday+Fun+%26+English."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 w-full"
            >
              <span>{t.ctaBtn}</span>
              <CheckCircle2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
