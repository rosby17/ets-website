"use client";

import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import { LanguageType, translations } from "../../../components/translations";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailClient({ id }: { id: string }) {
  const [lang, setLang] = useState<LanguageType>("fr");

  // Retrieve the correct service based on ID
  const t = translations[lang].services;
  let serviceData: any = null;

  if (id === "formation") serviceData = { id: "formation", ...t.formation };
  if (id === "interpretation") serviceData = { id: "interpretation", ...t.interpretation };
  if (id === "traduction") serviceData = { id: "traduction", ...t.traduction };
  if (id === "sejours") serviceData = { id: "sejours", ...t.sejours };

  // Fallback if not found
  if (!serviceData) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header lang={lang} setLang={setLang} />
        <main className="flex-grow pt-32 text-center">
          <h1 className="text-3xl font-bold text-navy">Service introuvable</h1>
          <Link href="/services" className="text-brand-blue underline mt-4 block">Retour aux services</Link>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  // Fictive Details tailored roughly for a general service
  const genericDetails = {
    heroImg: id === "formation" ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop" :
             id === "interpretation" ? "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&auto=format&fit=crop" :
             id === "traduction" ? "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&auto=format&fit=crop" :
             "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop",
    process: [
      { title: "Évaluation des besoins", desc: "Nous prenons le temps de comprendre exactement vos objectifs et vos contraintes temporelles." },
      { title: "Proposition sur-mesure", desc: "Notre équipe vous propose un plan d'action ou un devis détaillé parfaitement adapté à votre demande." },
      { title: "Exécution & Suivi", desc: "Nos experts se mettent au travail en garantissant une rigueur absolue et un suivi régulier." },
      { title: "Validation finale", desc: "Nous nous assurons de votre entière satisfaction avant de clôturer le projet." }
    ],
    whyUs: [
      "Une expertise reconnue et certifiée par les institutions.",
      "Des professionnels natifs ou bilingues de haut niveau.",
      "Une confidentialité totale de vos données.",
      "Une approche centrée sur l'humain et la pédagogie."
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-24 bg-[#f4f7fc]">
        {/* Breadcrumb / Back */}
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-blue hover:text-navy font-bold text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à tous les services
          </Link>
        </div>

        {/* Hero Service */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative">
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 relative z-10">
              {serviceData.title}
            </h1>
            <div className="w-20 h-1.5 bg-brand-green mb-6 rounded-full relative z-10"></div>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl relative z-10">
              {serviceData.desc}
            </p>
          </div>
        </section>

        {/* Image Banner */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="w-full h-64 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img src={genericDetails.heroImg} alt={serviceData.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
          </div>
        </section>

        {/* Details Section */}
        <section className="max-w-4xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Inclusions */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Ce que comprend ce service</h3>
            <ul className="flex flex-col gap-4">
              {serviceData.list.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            {serviceData.note && (
              <div className="mt-6 p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/10">
                <span className="text-sm font-semibold text-brand-blue">{serviceData.note}</span>
              </div>
            )}
          </div>

          {/* Processus */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Notre Processus</h3>
            <div className="flex flex-col gap-6">
              {genericDetails.process.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  {idx !== genericDetails.process.length - 1 && (
                    <div className="absolute left-4 top-10 bottom-[-20px] w-[2px] bg-gray-200"></div>
                  )}
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0 relative z-10 shadow-md">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="bg-brand-green rounded-[2rem] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Prêt à démarrer ?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Nos experts sont disponibles pour discuter de votre besoin en {serviceData.title.toLowerCase()} et vous fournir une solution rapide.
            </p>
            <a 
              href={serviceData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-green hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10"
            >
              <Phone className="w-5 h-5" />
              <span>{serviceData.cta || "Demander un devis"}</span>
            </a>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}

