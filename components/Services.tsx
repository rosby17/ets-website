"use client";

import React from "react";
import { GraduationCap, Mic, Languages, Plane, CheckCircle2, ArrowRight } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface ServicesProps {
  lang: LanguageType;
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;

  const services = [
    {
      id: "formation",
      title: t.formation.title,
      description: t.formation.desc,
      icon: GraduationCap,
      color: "blue",
      list: t.formation.list,
      note: t.formation.note,
      cta: t.formation.cta,
      whatsapp: `https://wa.me/2250171856777?text=${encodeURIComponent(t.formation.waText)}`,
    },
    {
      id: "interpretation",
      title: t.interpretation.title,
      description: t.interpretation.desc,
      icon: Mic,
      color: "green",
      list: t.interpretation.list,
      cta: t.interpretation.cta,
      whatsapp: `https://wa.me/2250171856777?text=${encodeURIComponent(t.interpretation.waText)}`,
    },
    {
      id: "traduction",
      title: t.traduction.title,
      description: t.traduction.desc,
      icon: Languages,
      color: "blue",
      list: t.traduction.list,
      cta: t.traduction.cta,
      whatsapp: `https://wa.me/2250171856777?text=${encodeURIComponent(t.traduction.waText)}`,
    },
    {
      id: "sejours",
      title: t.sejours.title,
      description: t.sejours.desc,
      icon: Plane,
      color: "green",
      list: t.sejours.list,
      cta: t.sejours.cta,
      whatsapp: `https://wa.me/2250171856777?text=${encodeURIComponent(t.sejours.waText)}`,
    },
  ];

  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            {t.subtitle}
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
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isBlue ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-green/10 text-brand-green"
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
                  <span>{service.cta}</span>
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
