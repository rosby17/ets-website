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
      <div className="max-w-6xl mx-auto px-6">
        {/* Gradient Border Wrapper */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-blue to-brand-green p-1 shadow-2xl">
          <div className="bg-white rounded-[2.4rem] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              
              {/* Left Column: Text & CTA */}
              <div className="flex flex-col items-start gap-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green text-white text-xs font-bold uppercase tracking-widest shadow-sm">
                  {t.season || "Offre Saisonnière"}
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                  {t.hfeTitle}
                </h2>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                  {t.whoDesc}
                </p>

                {/* Quick Info (Icons) */}
                <div className="flex flex-wrap items-center gap-6 mt-2 mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-bold text-brand-blue">{t.startVal || "Dès le 15 Juin"}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                    <span className="text-sm font-bold text-brand-blue">Tous nos centres</span>
                  </div>
                </div>

                <a
                  href="/blog/holiday-fun-english"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <span>Je m'inscris</span>
                </a>
              </div>

              {/* Right Column: Image */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                  alt="Enfants apprenant l'anglais"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
