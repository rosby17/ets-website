"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import { LanguageType } from "../../components/translations";

export default function BlogPage() {
  const [lang, setLang] = useState<LanguageType>("fr");

  const articles = [
    {
      title: "Une journée type au programme Holiday Fun & English",
      desc: "Découvrez comment vos enfants apprennent l'anglais en s'amusant pendant les vacances. Un programme immersif, interactif et 100% ludique pour les plus jeunes.",
      date: "12 Mai 2026",
      tag: "Séjours Linguistiques",
      slug: "/blog/holiday-fun-english",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Pourquoi certifier ses traductions pour les procédures officielles ?",
      desc: "Dans cet article, nous vous expliquons la différence entre une traduction libre et une traduction assermentée, et quand vous en avez absolument besoin.",
      date: "05 Avril 2026",
      tag: "Traduction",
      slug: "#",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Les avantages de l'immersion linguistique totale à l'étranger",
      desc: "Partir en séjour linguistique est la méthode la plus rapide et la plus efficace pour devenir bilingue. Voici pourquoi vous devriez franchir le pas avec ETS.",
      date: "28 Mars 2026",
      tag: "Formation",
      slug: "#",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-28 pb-20 bg-[#f4f7fc]">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">
            Le Blog ETS
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Actualités, conseils linguistiques et astuces pour réussir vos traductions et formations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <a href={article.slug} key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group">
                <div className="relative w-full h-56 overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    {article.tag}
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow">
                  <span className="text-xs text-gray-400 font-semibold">{article.date}</span>
                  <h3 className="text-xl font-bold text-navy leading-snug group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                    {article.desc}
                  </p>
                  <span className="text-sm font-bold text-brand-blue mt-2 inline-flex items-center gap-1.5">
                    Lire l'article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}
