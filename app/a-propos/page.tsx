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

        {/* Founder Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-navy rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12 lg:gap-16">
              <div className="w-56 h-56 md:w-72 md:h-80 shrink-0 rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-green border-4 border-white/10 overflow-hidden relative shadow-inner">
                {/* Full portrait placeholder image (African professional) */}
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop" 
                  alt="Kouassi Amoulaye - Fondateur" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col text-center md:text-left relative z-10 flex-grow">
                <span className="inline-block px-4 py-1.5 bg-brand-green/20 text-brand-green rounded-full text-sm font-bold uppercase tracking-widest mb-4 self-center md:self-start">
                  {t.founderTitle}
                </span>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
                  Kouassi Amoulaye
                </h3>
                <span className="text-gray-400 text-sm md:text-base mb-8 block font-medium">
                  {t.founderName}
                </span>
                <div className="relative pt-6">
                  <svg className="absolute top-0 left-0 md:-left-4 w-10 h-10 text-brand-blue/30 -translate-y-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                  <p className="text-lg lg:text-xl text-gray-200 italic leading-relaxed relative z-10 pl-2">
                    {t.founderQuote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Sections */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div className="order-2 md:order-1 rounded-[2.5rem] overflow-hidden shadow-xl h-72 md:h-96 relative">
                {/* African professionals collaborating */}
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&auto=format&fit=crop" alt="Notre Mission" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-extrabold text-navy mb-6">{translations[lang].about.missionLabel}</h2>
                <div className="w-16 h-1 bg-brand-green mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-brand-green pl-6 mb-6">
                  {translations[lang].about.missionText}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Notre mission au quotidien est de vous fournir un accompagnement linguistique sur-mesure, adapté à vos objectifs personnels ou professionnels. Nous croyons que la langue ne doit jamais être une barrière, mais un pont vers de nouvelles opportunités.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-blue mb-6">{t.visionTitle}</h2>
                <div className="w-16 h-1 bg-brand-blue mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {t.visionText}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Nous envisageons un monde où les échanges culturels et commerciaux se font sans aucune friction. Nos centres de formation et nos experts en traduction travaillent de concert pour vous offrir une qualité de service inégalée en Côte d'Ivoire et à l'international.
                </p>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-72 md:h-96 relative">
                {/* African professionals in office */}
                <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1000&auto=format&fit=crop" alt="Notre Vision" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
              </div>
            </div>

          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-white">
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
                  <div key={idx} className="bg-bg-light p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
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
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}
