"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import ContactForm from "../../components/ContactForm";
import Centers from "../../components/Centers";
import { LanguageType } from "../../components/translations";

export default function ContactPage() {
  const [lang, setLang] = useState<LanguageType>("fr");

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-28">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">
            Contactez-nous
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour toute demande de devis, d'inscription ou d'information supplémentaire.
          </p>
        </div>

        {/* Reusing components */}
        <ContactForm lang={lang} />
        
        <div className="py-12">
          <Centers lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}
