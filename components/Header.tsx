"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          {["Accueil", "Services", "Traduction certifiée", "À propos", "Contact"].map((item) => {
            const anchor = item === "Traduction certifiée" ? "translation" : item === "À propos" ? "about" : item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${anchor}`}
                onClick={(e) => handleScrollTo(e, anchor)}
                className="font-medium text-sm text-text-dark hover:text-brand-blue relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+2250508792288"
            className="flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold text-sm transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>+225 05 08 79 22 88</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="bg-brand-green text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark transition-all duration-300 hover:scale-105"
          >
            Nous contacter
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-navy hover:text-brand-blue transition-colors"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 gap-4">
          {["Accueil", "Services", "Traduction certifiée", "À propos", "Contact"].map((item) => {
            const anchor = item === "Traduction certifiée" ? "translation" : item === "À propos" ? "about" : item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${anchor}`}
                onClick={(e) => handleScrollTo(e, anchor)}
                className="font-medium text-base text-text-dark hover:text-brand-blue py-1 transition-colors border-b border-gray-50 last:border-0"
              >
                {item}
              </a>
            );
          })}
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
              Nous contacter
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
