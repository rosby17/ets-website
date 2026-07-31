"use client";

import React from "react";
import { MapPin, ArrowRight, Info } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface CentersProps {
  lang: LanguageType;
}

export default function Centers({ lang }: CentersProps) {
  const t = translations[lang].centers;

  // Remove the school emoji if it exists in the string to replace it with a clean icon
  const cleanNote = t.note.replace("🏫 ", "");

  const centers = [
    {
      name: "Angré 22ème",
      location: lang === "zh" ? "阿比让，科特迪瓦" : "Abidjan, Côte d'Ivoire",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+le+centre+Angr%C3%A9+22.",
    },
    {
      name: "Riviera 3",
      location: lang === "zh" ? "阿比让，科特迪瓦" : "Abidjan, Côte d'Ivoire",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+le+centre+Riviera+3.",
    },
    {
      name: "Yopougon Bel-Air",
      location: lang === "zh" ? "阿比让，科特迪瓦" : "Abidjan, Côte d'Ivoire",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+le+centre+Yopougon+Bel-Air.",
    },
  ];

  return (
    <section id="centers" className="py-24 bg-[#f4f7fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase block mb-3">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            {t.title}
          </h2>
          <div className="w-20 h-1.5 bg-brand-green mx-auto my-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {centers.map((center, index) => (
            <article
              key={index}
              className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-20 h-20 rounded-full bg-brand-blue/5 group-hover:bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-8 transition-colors duration-500">
                <MapPin className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <h3 className="text-xl font-black text-navy uppercase tracking-wider mb-3">
                {center.name}
              </h3>
              <p className="text-base text-gray-500 mb-8 font-medium">
                {center.location}
              </p>

              <a
                href={center.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex justify-center items-center gap-2 py-4 bg-gray-50 hover:bg-brand-blue text-navy hover:text-white rounded-xl font-bold text-sm transition-all duration-300"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        {/* Warning Note */}
        <div className="max-w-3xl mx-auto text-center mt-16 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <p className="text-sm sm:text-base text-navy font-semibold text-left">
            {cleanNote}
          </p>
        </div>
      </div>
    </section>
  );
}
