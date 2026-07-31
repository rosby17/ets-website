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
    <section id="trust-kpi" className="bg-white border-b border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase block mb-3">
            En chiffres
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Quelques chiffres clés
          </h2>
          <div className="w-20 h-1.5 bg-brand-green mx-auto my-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Notre expertise se traduit par des résultats concrets et mesurables au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto divide-x divide-gray-100 max-md:divide-x-0">
          <Counter end={500000} label={lang === 'en' ? "Satisfied Clients" : lang === 'es' ? "Clientes Satisfechos" : lang === 'pt' ? "Clientes Satisfeitos" : lang === 'de' ? "Zufriedene Kunden" : lang === 'zh' ? "满意的客户" : "Clients satisfaits"} suffix="+" />
          <Counter end={1000} label={lang === 'en' ? "Completed Projects" : lang === 'es' ? "Proyectos Completados" : lang === 'pt' ? "Projetos Concluídos" : lang === 'de' ? "Abgeschlossene Projekte" : lang === 'zh' ? "完成项目" : "Projets complétés"} suffix="+" />
          <Counter end={10000} label={lang === 'en' ? "Words Translated" : lang === 'es' ? "Palabras Traducidas" : lang === 'pt' ? "Palavras Traduzidas" : lang === 'de' ? "Wörter übersetzt" : lang === 'zh' ? "翻译字数" : "Mots traduits"} suffix="+" />
          <Counter end={50} label={lang === 'en' ? "Certified Experts" : lang === 'es' ? "Expertos Certificados" : lang === 'pt' ? "Especialistas Certificados" : lang === 'de' ? "Zertifizierte Experten" : lang === 'zh' ? "认证专家" : "Experts"} suffix="+" />
        </div>
      </div>
    </section>
  );
}
