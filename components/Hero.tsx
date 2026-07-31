"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface HeroProps {
  lang: LanguageType;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact");
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
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-navy text-white overflow-hidden"
    >
      {/* SVG Topographic curves overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100,200 C 200,100 400,300 700,150 C 1000,0 1200,400 1500,250 C 1800,100 2000,200 2200,100"
            fill="none"
            stroke="#D9CBAE"
            strokeWidth="2.5"
          />
          <path
            d="M -100,300 C 200,200 450,400 750,250 C 1050,100 1250,500 1550,350 C 1850,200 2050,300 2250,200"
            fill="none"
            stroke="#D9CBAE"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Decorative green shape */}
      <div className="hidden lg:block absolute top-0 right-0 w-[45%] h-full bg-brand-green clip-diagonal-hero z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              {lang === "fr" ? (
                <>
                  Votre passerelle vers une{" "}
                  <span className="text-brand-green relative inline-block">
                    communication
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-green/20 rounded-full"></span>
                  </span>{" "}
                  mondiale sans frontières
                </>
              ) : lang === "en" ? (
                <>
                  Your gateway to{" "}
                  <span className="text-brand-green relative inline-block">
                    global communication
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-green/20 rounded-full"></span>
                  </span>{" "}
                  without borders
                </>
              ) : lang === "zh" ? (
                <>
                  连接全球，助力{" "}
                  <span className="text-brand-green relative inline-block">
                    无国界沟通
                    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-green/20 rounded-full"></span>
                  </span>
                </>
              ) : (
                t.title
              )}
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <a
                href="https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+obtenir+un+devis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-green text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-green/30 hover:bg-brand-green-dark transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.ctaDevis}</span>
              </a>
              <a
                href="https://wa.me/2250171856777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/60 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <PhoneCall className="w-5 h-5 text-brand-green" />
                <span>{t.ctaCall}</span>
              </a>
            </div>
          </div>

          {/* Image Block */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-navy/80">
              <Image
                src="/images/hero-bg.png"
                alt="ETS Cabinet de langues"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
