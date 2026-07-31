"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";

export default function About() {
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
          {/* Left Column - Image */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <Image
                src="/images/about-team.png"
                alt="Équipe de professionnels ETS"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 p-3 rounded-2xl glass-panel flex items-center gap-2.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Experts Agréés</div>
                  <div className="text-[10px] text-gray-500 font-semibold uppercase">Côte d&apos;Ivoire</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Brief */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-widest text-brand-green uppercase">
                Qui sommes-nous ?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-snug">
                Un partenaire linguistique stratégique pour briser les barrières
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-600 leading-relaxed">
              <p>
                Chez <strong>English and Translation Services (ETS)</strong>, nous sommes bien plus qu&apos;un
                simple cabinet de langues. Basés en Côte d&apos;Ivoire, nous nous positionnons comme un partenaire
                stratégique pour les particuliers et les entreprises souhaitant briser la barrière de la langue.
              </p>
              <p>
                Grâce à une équipe d&apos;experts certifiés et une approche pédagogique moderne, nous offrons des
                solutions sur mesure qui allient rigueur académique et immersion pratique. Que ce soit pour une
                certification internationale ou une conférence de haut niveau, ETS garantit une excellence
                opérationnelle.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="w-full bg-bg-light border-l-4 border-brand-green rounded-r-2xl p-5 my-2 shadow-sm">
              <span className="text-xs font-bold text-brand-green uppercase block mb-1">
                Notre Mission
              </span>
              <p className="text-sm font-medium text-navy italic leading-relaxed">
                « Faciliter votre insertion professionnelle et booster votre compétitivité internationale par la
                maîtrise de l&apos;anglais et d&apos;autres langues stratégiques, tout en assurant une fidélité
                parfaite dans vos besoins de traduction et d&apos;interprétation. »
              </p>
            </div>

            <a
              href="#engagements"
              onClick={handleScrollToEngagements}
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-blue hover:text-brand-blue-dark group transition-colors mt-2"
            >
              <span>En savoir plus sur nos engagements</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
