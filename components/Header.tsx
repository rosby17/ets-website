"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall, Globe } from "lucide-react";
import { LanguageType, translations } from "./translations";
import Flag from "./Flag";

interface HeaderProps {
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: lang === "fr" ? "Accueil" : lang === "en" ? "Home" : lang === "es" ? "Inicio" : lang === "pt" ? "Início" : lang === "de" ? "Start" : "首页", id: "hero" },
    { label: t.services.formation.title, id: "services" },
    { label: t.translationCert.title.split("?")[0].replace("Need a", "").trim(), id: "translation" },
    { label: lang === "fr" ? "À propos" : lang === "en" ? "About Us" : lang === "es" ? "¿Quiénes Somos?" : lang === "pt" ? "Quem Somos?" : lang === "de" ? "Über uns" : "关于我们", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  const languages: { code: LanguageType; label: string }[] = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Português" },
    { code: "de", label: "Deutsch" },
    { code: "zh", label: "中文" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/70 backdrop-blur-sm py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleScrollTo(e, "hero")} className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Logo ETS"
            width={48}
            height={48}
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-wider text-brand-blue leading-none">E·T·S</span>
            <span className="text-[9px] font-semibold tracking-wider text-brand-blue uppercase mt-1 pt-1 border-t border-brand-blue/30">
              English and Translation Services
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="font-medium text-sm text-text-dark hover:text-brand-blue relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language selector & CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:border-brand-blue transition-colors text-sm font-semibold text-text-dark"
              aria-label="Changer de langue"
            >
              <Globe className="w-4 h-4 text-brand-blue" />
              <span className="uppercase">{lang}</span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm font-medium hover:bg-bg-light transition-colors ${
                      lang === l.code ? "text-brand-blue bg-brand-blue/5" : "text-text-dark"
                    }`}
                  >
                    <Flag country={l.code === "zh" ? "CN" : l.code === "en" ? "GB" : l.code.toUpperCase() as any} className="w-5 h-3.5" />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="tel:+2250508792288"
            className="flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold text-sm transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.header.call}</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="bg-brand-green text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark transition-all duration-300 hover:scale-105"
          >
            {t.header.contactBtn}
          </a>
        </div>

        {/* Mobile Navigation Toggle (Mobile Lang Selector too) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Quick language switcher */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as LanguageType)}
            className="px-2 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-brand-blue"
            aria-label="Langue"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="pt">PT</option>
            <option value="de">DE</option>
            <option value="zh">ZH</option>
          </select>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-navy hover:text-brand-blue transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="font-medium text-base text-text-dark hover:text-brand-blue py-1 transition-colors border-b border-gray-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-2">
            <a
              href="tel:+2250508792288"
              className="flex items-center gap-2 text-brand-blue font-bold text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+225 05 08 79 22 88</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-brand-green text-white text-center font-semibold py-3 rounded-full hover:bg-brand-green-dark transition-colors"
            >
              {t.header.contactBtn}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
