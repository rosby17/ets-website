"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import Services from "../../components/Services";
import TranslationCert from "../../components/TranslationCert";
import ProgramPhare from "../../components/ProgramPhare";
import { LanguageType } from "../../components/translations";

export default function ServicesPage() {
  const [lang, setLang] = useState<LanguageType>("fr");

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-28">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">
            Nos Services Détaillés
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos offres d'accompagnement linguistique et de traduction professionnelle avec tous les détails.
          </p>
        </div>

        {/* We reuse the components but they now form a full page */}
        <Services lang={lang} />
        <TranslationCert lang={lang} />
        <ProgramPhare lang={lang} />
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}
