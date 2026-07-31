"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBand from "../components/TrustBand";
import About from "../components/About";
import Services from "../components/Services";
import TranslationCert from "../components/TranslationCert";
import Targets from "../components/Targets";
import Engagements from "../components/Engagements";
import ProgramPhare from "../components/ProgramPhare";
import Centers from "../components/Centers";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";
import { LanguageType } from "../components/translations";

export default function Home() {
  const [lang, setLang] = useState<LanguageType>("fr");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation header avec sélecteur de langue */}
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero lang={lang} />


        {/* Qui sommes-nous */}
        <About lang={lang} />

        {/* Grille des services */}
        <Services lang={lang} />

        {/* Section Traduction Certifiée détaillée */}
        <TranslationCert lang={lang} />

        {/* Profils cibles accompagnés */}
        <Targets lang={lang} />

        {/* Engagements de qualité */}
        <Engagements lang={lang} />

        {/* Programme spécial Holiday, Fun & English */}
        <ProgramPhare lang={lang} />

        {/* Adresses des centres physiques */}
        <Centers lang={lang} />

        {/* Chiffres clés & pilules des langues d'expertise */}
        <TrustBand lang={lang} />

        {/* Témoignages clients */}
        <Testimonials lang={lang} />

        {/* Formulaire de contact Formspree / WhatsApp */}
        <ContactForm lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* WhatsApp bulle flottante */}
      <WhatsappFloat lang={lang} />
    </div>
  );
}
