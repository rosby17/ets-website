"use client";

import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

export default function Centers() {
  const centers = [
    {
      name: "Angré 22ème",
      location: "Abidjan, Côte d'Ivoire",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+le+centre+Angr%C3%A9+22.",
    },
    {
      name: "Riviera 3",
      location: "Abidjan, Côte d'Ivoire",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+le+centre+Riviera+3.",
    },
    {
      name: "Yopougon Bel-Air",
      location: "Abidjan, Côte d'Ivoire",
      whatsapp: "https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+le+centre+Yopougon+Bel-Air.",
    },
  ];

  return (
    <section id="centers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            Où nous trouver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            NOS CENTRES DE FORMATION
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Trois centres modernes à Abidjan pour vous accueillir et vous accompagner en présentiel.
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <article
              key={index}
              className="bg-bg-light rounded-3xl p-8 border border-gray-200/40 shadow-sm hover:shadow-md hover:bg-white hover:border-brand-blue/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Pin icon with clean monochrome backing */}
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-navy uppercase tracking-wide mb-2">
                {center.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {center.location}
              </p>

              <a
                href={center.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-xs text-brand-blue hover:text-brand-blue-dark group transition-colors"
              >
                <span>Contacter ce centre</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* Warning Note */}
        <div className="max-w-3xl mx-auto text-center mt-12 p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
          <p className="text-sm text-brand-blue font-semibold">
            🏫 Tous nos cours sont disponibles <strong className="text-brand-green">en présentiel</strong> pour une
            immersion totale ou <strong className="text-brand-green">en ligne</strong> pour plus de flexibilité.
          </p>
        </div>
      </div>
    </section>
  );
}
