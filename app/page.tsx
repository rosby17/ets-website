import React from "react";
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Nav */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Bandeau de confiance (Langues et stats) */}
        <TrustBand />

        {/* 3. Qui sommes-nous */}
        <About />

        {/* 4. Nos services */}
        <Services />

        {/* 5. Traduction certifiée - Offre phare */}
        <TranslationCert />

        {/* 6. Qui accompagnons-nous */}
        <Targets />

        {/* 7. Nos engagements */}
        <Engagements />

        {/* 8. Programme phare */}
        <ProgramPhare />

        {/* 9. Nos centres */}
        <Centers />

        {/* 10. Témoignages */}
        <Testimonials />

        {/* 11. Formulaire de contact */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bouton WhatsApp flottant */}
      <WhatsappFloat />
    </div>
  );
}
