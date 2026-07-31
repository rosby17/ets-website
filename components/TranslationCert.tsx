"use client";

import React from "react";
import { FileText, Fingerprint, GraduationCap, Building2, Landmark, HeartPulse, ShieldCheck, FileSignature } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface TranslationCertProps {
  lang: LanguageType;
}

export default function TranslationCert({ lang }: TranslationCertProps) {
  const t = translations[lang].translationCert;

  const docIcons = [
    FileText,
    Fingerprint,
    GraduationCap,
    Building2,
    Landmark,
    HeartPulse,
    FileSignature,
  ];

  return (
    <section id="translation" className="relative py-20 bg-navy text-white overflow-hidden">
      {/* Top brand border */}
      <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-brand-green to-brand-blue"></div>

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
          <p className="text-sm sm:text-base text-gray-300">
            {t.subtitle}
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {t.docs.map((doc, index) => {
            const Icon = docIcons[index] || FileText;
            const isFullWidth = index === t.docs.length - 1;
            return (
              <div
                key={index}
                className={`flex gap-4 p-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 hover:bg-white/10 ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue/20 text-brand-green flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <strong className="text-base font-bold text-white mb-1">
                    {doc.title}
                  </strong>
                  <span className="text-sm text-gray-400 leading-relaxed">
                    {doc.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Translation Quote CTA Block */}
        <div className="bg-brand-green rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-brand-green/10">
          <div className="flex items-center gap-4 text-left max-md:flex-col max-md:text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                {t.ctaTitle}
              </p>
              <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                {t.ctaSub}
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+obtenir+un+devis+pour+une+traduction+certifi%C3%A9e."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-green hover:bg-bg-light transition-all duration-300 font-bold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 hover:scale-105 active:scale-95 shadow-md shrink-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>{t.ctaBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
