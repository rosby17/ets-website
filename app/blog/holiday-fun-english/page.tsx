"use client";

import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import { LanguageType } from "../../../components/translations";
import { CheckCircle2 } from "lucide-react";

export default function HolidayFunArticle() {
  const [lang, setLang] = useState<LanguageType>("fr");

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-28 pb-20 bg-white">
        <article className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green text-white text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
              Séjours Linguistiques
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy leading-tight mb-4">
              Une journée type au programme Holiday Fun & English
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <span>Publié le 12 Mai 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>3 min de lecture</span>
            </div>
          </div>

          <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Enfants apprenant l'anglais en s'amusant" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-navy leading-relaxed mb-8">
              L'apprentissage de l'anglais ne devrait jamais être une corvée pour vos enfants. Avec notre programme exclusif <strong>Holiday, Fun & English</strong>, nous transformons les vacances scolaires en une véritable aventure linguistique.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Une méthode 100% immersive</h2>
            <p className="mb-6">
              Oubliez les salles de classe silencieuses et les leçons de grammaire interminables. Notre approche repose sur la communication active. Dès leur arrivée, les enfants sont plongés dans un environnement où seul l'anglais est autorisé. À travers des jeux de rôle, des ateliers créatifs et des défis sportifs, ils apprennent à s'exprimer naturellement.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">À quoi ressemble une journée type ?</h2>
            
            <div className="bg-[#f4f7fc] rounded-2xl p-6 sm:p-8 my-8 border border-gray-100">
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4">
                  <div className="w-16 shrink-0 text-sm font-bold text-brand-blue">09h00</div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Morning Assembly</h4>
                    <p className="text-sm text-gray-600">Chansons, danses et réveil musculaire 100% en anglais pour bien démarrer la journée.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-16 shrink-0 text-sm font-bold text-brand-blue">10h00</div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Language Workshops</h4>
                    <p className="text-sm text-gray-600">Ateliers de vocabulaire thématiques (animaux, voyage, nourriture) à travers des jeux interactifs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-16 shrink-0 text-sm font-bold text-brand-blue">12h00</div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Lunch & Chat</h4>
                    <p className="text-sm text-gray-600">Le repas est aussi une occasion d'apprendre ! On nomme les aliments et on discute de ses préférences.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-16 shrink-0 text-sm font-bold text-brand-blue">14h00</div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Creative Arts & Drama</h4>
                    <p className="text-sm text-gray-600">Préparation d'une petite pièce de théâtre ou création artistique en suivant des consignes anglophones.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Pourquoi inscrire vos enfants ?</h2>
            <ul className="flex flex-col gap-3 mb-8 list-none p-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                <span><strong>Développement de la confiance</strong> : Prendre la parole devient un jeu.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                <span><strong>Apprentissage sans effort</strong> : L'acquisition du vocabulaire se fait naturellement.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                <span><strong>Ouverture culturelle</strong> : Découverte des cultures anglo-saxonnes.</span>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-brand-blue to-brand-green p-10 rounded-3xl text-center shadow-xl text-white mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Prêt pour l'aventure ?</h3>
              <p className="mb-8 opacity-90 max-w-md mx-auto">
                Les places pour la prochaine session d'été sont limitées. Réservez dès maintenant la place de votre enfant !
              </p>
              <a 
                href="https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+m%27inscrire+au+programme+Holiday+Fun+%26+English."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
              >
                Inscrire mon enfant
              </a>
            </div>

          </div>
        </article>
      </main>

      <Footer lang={lang} />
      <WhatsappFloat lang={lang} />
    </div>
  );
}
