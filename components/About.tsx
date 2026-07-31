"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface AboutProps {
  lang: LanguageType;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  const handleScrollToEngagements = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("engagements");
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-brand-green/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative w-full flex justify-center">
            <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <Image
                src="/images/about-team.png"
                alt="Équipe de professionnels ETS"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 p-3 rounded-2xl glass-panel flex items-center gap-2.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">
                    {lang === "zh" ? "认证专家" : "Experts Agréés"}
                  </div>
                  <div className="text-[10px] text-gray-500 font-semibold uppercase">
                    Côte d&apos;Ivoire
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text brief */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-6 lg:pl-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-widest text-brand-green uppercase">
                {t.label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-snug">
                {t.title}
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-600 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            {/* Mission Statement Box */}
            <div className="w-full bg-bg-light border-l-4 border-brand-green rounded-r-2xl p-5 my-2 shadow-sm">
              <span className="text-xs font-bold text-brand-green uppercase block mb-1">
                {t.missionLabel}
              </span>
              <p className="text-sm font-medium text-navy italic leading-relaxed">
                {t.missionText}
              </p>
            </div>

            <a
              href="#engagements"
              onClick={handleScrollToEngagements}
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-blue hover:text-brand-blue-dark group transition-colors mt-2"
            >
              <span>{t.linkText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
