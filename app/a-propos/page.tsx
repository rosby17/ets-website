"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import { LanguageType, translations } from "../../components/translations";
import { Target, Eye, Gem } from "lucide-react";

export default function AboutPage() {
  const [lang, setLang] = useState<LanguageType>("fr");
  const t = translations[lang].aboutPage;

  const valueIcons = [Gem, Target, Eye];

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-24 bg-white">
        {/* Hero Section for About Page */}
        <section className="relative py-20 bg-brand-blue text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,500 C 400,400 600,600 900,450 C 1200,300 1400,700 1700,550" fill="none" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-4">
              ETS Cabinet
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              {t.heroSub}
            </p>
          </div>
        </section>

        {/* Vision & Mission Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-navy mb-6">{translations[lang].about.missionLabel}</h2>
                <div className="w-16 h-1 bg-brand-green mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-brand-green pl-6">
                  {translations[lang].about.missionText}
                </p>
              </div>
              <div className="bg-bg-light p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-3xl font-extrabold text-brand-blue mb-6">{t.visionTitle}</h2>
                <div className="w-16 h-1 bg-brand-blue mb-6 rounded-full"></div>
                <p className="text-base text-text-dark leading-relaxed">
                  {t.visionText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-navy leading-tight">
                {t.valuesTitle}
              </h2>
              <div className="w-16 h-1 bg-brand-green mx-auto my-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.values.map((val, idx) => {
                const Icon = valueIcons[idx] || Gem;
                return (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{val.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-navy rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full bg-gradient-to-br from-brand-blue to-brand-green border-4 border-white/10 flex items-center justify-center overflow-hidden">
                {/* Fallback avatar if no image provided */}
                <span className="text-6xl font-black text-white/50">ETS</span>
              </div>
              <div className="flex flex-col text-center md:text-left relative z-10">
                <span className="text-brand-green text-sm font-bold uppercase tracking-widest mb-2">{t.founderTitle}</span>
                <h3 className="text-3xl font-extrabold text-white mb-2">Kouassi Amoulaye</h3>
                <span className="text-gray-400 text-sm mb-6 block">{t.founderName}</span>
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  {t.founderQuote}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}
