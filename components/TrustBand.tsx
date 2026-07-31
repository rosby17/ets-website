"use client";

import React, { useEffect, useState, useRef } from "react";
import Flag from "./Flag";
import { LanguageType, translations } from "./translations";

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
}

function Counter({ end, label, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1200; // ms
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="text-center px-6 py-4">
      <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-none mb-1">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

interface TrustBandProps {
  lang: LanguageType;
}

export default function TrustBand({ lang }: TrustBandProps) {
  const t = translations[lang].trustBand;

  const langsArray = [
    { code: "FR" as const, name: "Français" },
    { code: "GB" as const, name: "Anglais" },
    { code: "ES" as const, name: "Espagnol" },
    { code: "PT" as const, name: "Portugais" },
    { code: "DE" as const, name: "Allemand" },
    { code: "CN" as const, name: "Chinois" },
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Stats KPI Section */}
      <section id="trust-kpi" className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mx-auto divide-x divide-gray-100 max-md:divide-x-0">
            <Counter end={500000} label={lang === 'en' ? "Satisfied Clients" : lang === 'es' ? "Clientes Satisfechos" : lang === 'pt' ? "Clientes Satisfeitos" : lang === 'de' ? "Zufriedene Kunden" : lang === 'zh' ? "满意的客户" : "Clients satisfaits"} suffix="+" />
            <Counter end={1000} label={lang === 'en' ? "Completed Projects" : lang === 'es' ? "Proyectos Completados" : lang === 'pt' ? "Projetos Concluídos" : lang === 'de' ? "Abgeschlossene Projekte" : lang === 'zh' ? "完成项目" : "Projets complétés"} suffix="+" />
            <Counter end={10000} label={lang === 'en' ? "Words Translated" : lang === 'es' ? "Palabras Traducidas" : lang === 'pt' ? "Palavras Traduzidas" : lang === 'de' ? "Wörter übersetzt" : lang === 'zh' ? "翻译字数" : "Mots traduits"} suffix="+" />
            <Counter end={50} label={lang === 'en' ? "Certified Experts" : lang === 'es' ? "Expertos Certificados" : lang === 'pt' ? "Especialistas Certificados" : lang === 'de' ? "Zertifizierte Experten" : lang === 'zh' ? "认证专家" : "Experts"} suffix="+" />
          </div>
        </div>
      </section>

      {/* Languages Expertise Section (Infinite Scroll) */}
      <section id="trust-languages" className="bg-[#f4f7fc] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 relative">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">
            {t.title}
          </span>
          
          <div className="relative w-full overflow-hidden mask-image-fade">
            <div className="animate-marquee flex gap-6">
              {[...langsArray, ...langsArray, ...langsArray].map((l, index) => {
                const label =
                  lang === "fr"
                    ? l.name
                    : lang === "en"
                    ? l.name === "Français"
                      ? "French"
                      : l.name === "Anglais"
                      ? "English"
                      : l.name === "Espagnol"
                      ? "Spanish"
                      : l.name === "Portugais"
                      ? "Portuguese"
                      : l.name === "Allemand"
                      ? "German"
                      : "Chinese"
                    : l.name; 

                return (
                  <div
                    key={`${l.code}-${index}`}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Flag country={l.code} className="w-6 h-4 object-cover" />
                    <span className="text-base font-semibold text-navy">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
