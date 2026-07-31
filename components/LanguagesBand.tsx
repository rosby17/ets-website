"use client";

import React from "react";
import Flag from "./Flag";
import { LanguageType, translations } from "./translations";

interface LanguagesBandProps {
  lang: LanguageType;
}

export default function LanguagesBand({ lang }: LanguagesBandProps) {
  const t = translations[lang].trustBand;

  const langsArray = [
    { code: "FR" as const, name: "Français" },
    { code: "GB" as const, name: "Anglais" },
    { code: "ES" as const, name: "Espagnol" },
    { code: "PT" as const, name: "Portugais" },
    { code: "DE" as const, name: "Allemand" },
    { code: "CN" as const, name: "Chinois" },
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section id="languages" className="bg-[#f4f7fc] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 relative">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-brand-blue uppercase block mb-3">
              Couverture mondiale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              {t.title}
            </h2>
            <div className="w-20 h-1.5 bg-brand-green mx-auto my-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
              Nous couvrons une large palette de langues pour accompagner votre développement à l'international.
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden mask-image-fade py-4">
            <div className="animate-marquee flex gap-8">
              {[...langsArray, ...langsArray, ...langsArray].map((l, index) => {
                const label =
                  lang === "fr"
                    ? l.name
                    : lang === "en"
                    ? l.name === "Français"
                      ? "French"
                      : l.name === "Anglais"
                      ? "English"
                      : l.name === "Espagnol"
                      ? "Spanish"
                      : l.name === "Portugais"
                      ? "Portuguese"
                      : l.name === "Allemand"
                      ? "German"
                      : "Chinese"
                    : l.name; 

                return (
                  <div
                    key={`${l.code}-${index}`}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all duration-300"
                  >
                    <Flag country={l.code} className="w-8 h-5 object-cover" />
                    <span className="text-lg font-bold text-navy">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
