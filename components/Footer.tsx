"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    }
  };

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/2250171856777",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.599-1.01-5.043-2.848-6.882a9.686 9.686 0 00-6.877-2.853c-5.443 0-9.876 4.372-9.88 9.739-.001 1.782.477 3.52 1.383 5.038L1.44 21.082l5.207-1.928zm10.882-7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-navy text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a href="#hero" onClick={(e) => handleScrollTo(e, "hero")} className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo ETS"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider text-white leading-none">E·T·S</span>
                <span className="text-[8px] font-semibold tracking-wider text-gray-400 uppercase mt-0.5">
                  English and Translation Services
                </span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mt-2 max-w-sm">
              « Votre passerelle vers une communication mondiale sans frontières. Cabinet agréé à Abidjan pour toutes vos formations et traductions certifiées. »
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-green text-white hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm">
              <a href="#hero" onClick={(e) => handleScrollTo(e, "hero")} className="hover:text-brand-green transition-colors">
                Accueil
              </a>
              <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-brand-green transition-colors">
                Services
              </a>
              <a href="#translation" onClick={(e) => handleScrollTo(e, "translation")} className="hover:text-brand-green transition-colors">
                Traduction certifiée
              </a>
              <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-brand-green transition-colors">
                À propos
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-brand-green transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
              Prestations
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm" role="list">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-brand-green transition-colors">
                  Formation en langues
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-brand-green transition-colors">
                  Interprétariat de conférence
                </a>
              </li>
              <li>
                <a href="#translation" onClick={(e) => handleScrollTo(e, "translation")} className="hover:text-brand-green transition-colors">
                  Traduction assermentée
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-brand-green transition-colors">
                  Immersion &amp; Séjours
                </a>
              </li>
              <li>
                <a href="#program" onClick={(e) => handleScrollTo(e, "program")} className="hover:text-brand-green transition-colors">
                  Holiday, Fun &amp; English
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
              Cabinet ETS
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <a href="tel:+2250508792288" className="hover:text-brand-green transition-colors">
                  +225 05 08 79 22 88
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <a href="https://wa.me/2250171856777" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                  +225 01 71 85 67 77
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <a href="mailto:englishandtranslations2023@gmail.com" className="hover:text-brand-green transition-colors break-all">
                  englishandtranslations2023@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Angré 22e · Riviera 3 · Yopougon Bel-Air, Abidjan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer segment */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center">
          <span>© {currentYear} English and Translation Services (ETS). Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-brand-green transition-colors">
              Mentions légales
            </a>
            <span>·</span>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-brand-green transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
