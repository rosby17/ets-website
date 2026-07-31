"use client";

import React from "react";
import { CheckCircle2, MapPin, Calendar, Clock, Users } from "lucide-react";

export default function ProgramPhare() {
  const benefits = [
    "Apprentissage pratique à 100% axé sur l'expression orale",
    "Méthodologie ludique basée sur le jeu et l'interaction",
    "Immersion linguistique totale au sein d'un cadre anglophone",
    "Horaires flexibles adaptés à l'emploi du temps des vacances",
  ];

  return (
    <section id="program" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            Programme spécial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            NOTRE PROGRAMME PHARE
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto my-4 rounded-full"></div>
        </div>

        {/* Card split container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 max-w-5xl mx-auto">
          {/* Left Column (Navy Backdrop) */}
          <div className="lg:col-span-6 bg-navy p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Subtle background text */}
            <div className="absolute -bottom-6 -right-6 text-9xl font-black text-white/5 select-none pointer-events-none">
              HFE
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <span className="inline-block bg-brand-green text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit">
                Offre saisonnière
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight uppercase">
                Holiday, Fun &amp; English
              </h3>
              <p className="text-sm text-gray-300 italic">
                Des vacances formidables pour maîtriser l&apos;anglais en s&apos;amusant.
              </p>

              {/* Benefits checklist */}
              <ul className="flex flex-col gap-3.5 mt-4" role="list">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Metadata Block */}
            <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Public</span>
                <span className="text-xs font-bold text-white mt-1">Élèves / Étudiants</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Durée</span>
                <span className="text-xs font-bold text-white mt-1">Deux mois</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Début</span>
                <span className="text-xs font-bold text-white mt-1">15 Juin</span>
              </div>
            </div>
          </div>

          {/* Right Column (White) */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold tracking-wider text-brand-blue uppercase border-b border-gray-100 pb-3">
                Lieux de formation
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {["Angré 22e", "Riviera 3", "Yopougon Bel-Air", "En ligne"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bg-light border border-gray-200/40 text-xs font-bold text-brand-blue"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-green" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-wider text-navy uppercase">
                Qui peut s&apos;inscrire ?
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Ce programme est spécialement ouvert aux élèves et étudiants désireux de faire d&apos;importants progrès
                en expression orale en anglais durant leurs vacances, dans un cadre dynamique, structuré et bienveillant.
              </p>
            </div>

            <a
              href="https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+m%27inscrire+au+programme+Holiday+Fun+%26+English."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all duration-300 w-full"
            >
              <span>Je m&apos;inscris au programme</span>
              <CheckCircle2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
