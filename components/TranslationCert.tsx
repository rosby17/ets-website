"use client";

import React from "react";
import { FileText, Fingerprint, GraduationCap, Building2, Landmark, HeartPulse, ShieldCheck, FileSignature } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface TranslationCertProps {
  lang: LanguageType;
}

export default function TranslationCert({ lang }: TranslationCertProps) {
  const t = translations[lang].translationCert;

  const docIcons = [
    FileText,
    Fingerprint,
    GraduationCap,
    Building2,
    Landmark,
    HeartPulse,
    FileSignature,
  ];

  return (
    <section id="translation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-[#eef2ff] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side text */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
                {t.title.split("?")[0]} ?
              </h2>
              <p className="text-sm sm:text-base text-navy/80 leading-relaxed font-medium">
                Nos traducteurs assermentés garantissent la validité juridique de vos documents auprès des ambassades, ministères et institutions internationales.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Personnel
                  </div>
                  <ul className="flex flex-col gap-2 text-xs font-semibold text-navy/70">
                    <li>Actes d'état civil</li>
                    <li>Documents d'identité</li>
                    <li>Diplômes & Relevés</li>
                  </ul>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    Entreprise
                  </div>
                  <ul className="flex flex-col gap-2 text-xs font-semibold text-navy/70">
                    <li>Contrats & Statuts</li>
                    <li>Bilans financiers</li>
                    <li>Rapports médicaux</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side floating card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col gap-8 relative z-10">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-navy text-lg">Juridique & Officiel</span>
                  <span className="text-xs text-gray-500 font-medium">Conforme aux standards internationaux</span>
                </div>
              </div>

              <p className="text-sm font-medium text-navy/80 leading-relaxed">
                Nous traitons également les documents académiques, financiers, médicaux et légaux complexes avec une précision terminologique absolue.
              </p>

              <a
                href="https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+obtenir+un+devis+de+traduction."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#7ac11d] hover:bg-[#68a619] text-white font-bold py-4 rounded-xl text-sm transition-all duration-300 text-center shadow-lg shadow-[#7ac11d]/30 hover:-translate-y-1"
              >
                Obtenir un devis de traduction
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
