"use client";

import React from "react";
import { GraduationCap, Mic, Languages, Plane, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "formation",
      title: "Formation",
      description: "Des formations linguistiques intensives et sur mesure pour booster votre profil.",
      icon: GraduationCap,
      color: "blue",
      list: [
        "Cours d'Anglais intensifs",
        "Préparation aux tests (TOEFL, TOEIC, IELTS, GMAT…)",
        "Préparation aux entretiens (embauche, visa)",
        "Formation en Traduction et interprétation",
        "Cours de Français, Chinois, Espagnol, Allemand",
        "Séjour linguistique à l'étranger",
      ],
      note: "💡 Cours disponibles en ligne ou en présentiel",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+suis+int%C3%A9ress%C3%A9(e)+par+vos+services+de+Formation.",
    },
    {
      id: "interpretation",
      title: "Interprétariat",
      description: "Accompagnement linguistique de haut niveau pour tous vos événements d'affaires.",
      icon: Mic,
      color: "green",
      list: [
        "Interprétation simultanée",
        "Interprétation consécutive",
        "Escorte bilingue",
        "Matériel de conférence (cabine insonorisée, récepteurs, console…)",
      ],
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+suis+int%C3%A9ress%C3%A9(e)+par+vos+services+d%27Interpr%C3%A9tariat.",
    },
    {
      id: "traduction",
      title: "Traduction",
      description: "Traduction rigoureuse et certifiée de tous vos documents administratifs et techniques.",
      icon: Languages,
      color: "blue",
      list: [
        "Traduction certifiée de tout type de documents",
        "Transcription et traduction de vidéos et audios",
        "Sous-titrage et traduction de vidéos",
      ],
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+suis+int%C3%A9ress%C3%A9(e)+par+vos+services+de+Traduction.",
    },
    {
      id: "sejours",
      title: "Séjours Linguistiques",
      description: "Immersion totale à l'étranger pour accélérer votre apprentissage de l'anglais.",
      icon: Plane,
      color: "green",
      list: [
        "Partez en immersion totale à l'étranger",
        "Accélérez votre apprentissage linguistique",
        "Découvrez de nouvelles cultures en toute sécurité",
        "Programmes personnalisés selon votre niveau et vos objectifs",
      ],
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+suis+int%C3%A9ress%C3%A9(e)+par+vos+S%C3%A9jours+Linguistiques.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            Ce que nous offrons
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            NOS SERVICES LINGUISTIQUES
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Quatre piliers d&apos;expertise conçus pour répondre avec précision à toutes vos exigences de
            communication mondiale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isBlue = service.color === "blue";
            return (
              <article
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-gray-200/50 shadow-sm hover:shadow-xl hover:border-brand-blue/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block - Minimalist and elegant */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isBlue
                        ? "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                        : "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-navy uppercase tracking-wide mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* List */}
                  <ul className="flex flex-col gap-3 mb-6" role="list">
                    {service.list.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-text-dark">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note && (
                    <div className="inline-block px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-semibold text-gray-600 mb-6">
                      {service.note}
                    </div>
                  )}
                </div>

                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-sm transition-all duration-300"
                >
                  <span>Demander un renseignement</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
