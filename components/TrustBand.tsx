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

  return (
    <section id="trust" className="bg-bg-light border-y border-gray-100 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Language pills section */}
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-xs font-bold tracking-widest text-brand-blue/70 uppercase">
            {t.title}
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { code: "FR" as const, name: "Français" },
              { code: "GB" as const, name: "Anglais" },
              { code: "ES" as const, name: "Espagnol" },
              { code: "PT" as const, name: "Portugais" },
              { code: "DE" as const, name: "Allemand" },
              { code: "CN" as const, name: "Chinois" },
            ].map((l) => {
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
                  : l.name; // Use base name fallback for other languages to keep it clean
              return (
                <div
                  key={l.code}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-gray-200/60 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 group cursor-default"
                >
                  <Flag country={l.code} className="w-5 h-3.5 object-cover" />
                  <span className="text-sm font-semibold text-text-dark group-hover:text-brand-blue transition-colors">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Separator line */}
        <div className="w-24 h-[2px] bg-brand-green/30 rounded-full"></div>

        {/* Stats counter section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl divide-x divide-gray-200/80 max-md:divide-x-0">
          <Counter end={500000} label={lang === 'en' ? "Satisfied Clients" : lang === 'es' ? "Clientes Satisfechos" : lang === 'pt' ? "Clientes Satisfeitos" : lang === 'de' ? "Zufriedene Kunden" : lang === 'zh' ? "满意的客户" : "Clients satisfaits"} suffix="+" />
          <Counter end={1000} label={lang === 'en' ? "Completed Projects" : lang === 'es' ? "Proyectos Completados" : lang === 'pt' ? "Projetos Concluídos" : lang === 'de' ? "Abgeschlossene Projekte" : lang === 'zh' ? "完成项目" : "Projets complétés"} suffix="+" />
          <Counter end={10000} label={lang === 'en' ? "Words Translated" : lang === 'es' ? "Palabras Traducidas" : lang === 'pt' ? "Palavras Traduzidas" : lang === 'de' ? "Wörter übersetzt" : lang === 'zh' ? "翻译字数" : "Mots traduits"} suffix="+" />
          <Counter end={50} label={lang === 'en' ? "Certified Experts" : lang === 'es' ? "Expertos Certificados" : lang === 'pt' ? "Especialistas Certificados" : lang === 'de' ? "Zertifizierte Experten" : lang === 'zh' ? "认证专家" : "Experts"} suffix="+" />
        </div>
      </div>
    </section>
  );
}
