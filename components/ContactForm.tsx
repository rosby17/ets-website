"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { LanguageType, translations } from "./translations";
import CustomSelect from "./CustomSelect";

interface ContactFormProps {
  lang: LanguageType;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.contact || !formData.service || !formData.message) {
      setErrorMessage(t.errorMsg);
      setStatus("error");
      return;
    }

    const whatsappMsg = `Bonjour ETS,%0A%0ANom: ${encodeURIComponent(
      formData.name
    )}%0AContact: ${encodeURIComponent(formData.contact)}%0AService: ${encodeURIComponent(
      formData.service
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;

    // Ouvrir WhatsApp dans un nouvel onglet avec le message pré-rempli
    window.open(`https://wa.me/2250171856777?text=${whatsappMsg}`, "_blank", "noopener,noreferrer");
    
    setStatus("success");
    setFormData({ name: "", contact: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Panel */}
          <div className="lg:col-span-5 bg-brand-green text-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-brand-green/10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.sidebarTitle}</h3>
              <p className="text-sm text-white/95 leading-relaxed mb-8">
                {t.sidebarSub}
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/80 uppercase">{t.telLabel}</span>
                    <a href="tel:+2250508792288" className="text-sm sm:text-base font-bold text-white hover:opacity-90">
                      +225 05 08 79 22 88
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/80 uppercase">{t.waLabel}</span>
                    <a href="https://wa.me/2250171856777" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-white hover:opacity-90">
                      +225 01 71 85 67 77
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/80 uppercase">{t.mailLabel}</span>
                    <a href="mailto:englishandtranslations2023@gmail.com" className="text-sm sm:text-base font-bold text-white hover:opacity-90 break-all">
                      englishandtranslations2023@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/80 uppercase">{t.addrLabel}</span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Angré 22e · Riviera 3 · Yopougon Bel-Air
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 flex flex-col gap-5 w-full bg-bg-light/40 border border-gray-150 rounded-3xl p-8 sm:p-10 shadow-sm"
          >
            <div>
              <h3 className="text-xl font-bold text-navy mb-1">{t.formTitle}</h3>
              <p className="text-xs text-gray-500 font-medium">
                {t.formSub}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-navy">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact" className="text-xs font-bold text-navy">
                  {t.contactLabel}
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder={t.contactPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-xs font-bold text-navy">
                {t.serviceLabel}
              </label>
              <div className="relative">
                <CustomSelect
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(val) => setFormData(prev => ({ ...prev, service: val }))}
                  options={t.serviceOptions.map(opt => ({ value: opt, label: opt }))}
                  placeholder={t.serviceSelect}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-navy">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 resize-none"
                required
              ></textarea>
            </div>

            {/* Status alerts */}
            {status === "success" && (
              <div className="p-4 bg-brand-green/10 border border-brand-green rounded-xl text-sm font-semibold text-brand-green text-center">
                {t.successMsg}
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm font-semibold text-red-600 text-center flex flex-col gap-2">
                <span>{errorMessage}</span>
                <a
                  href={`https://wa.me/2250171856777?text=Bonjour%2C+je+souhaite+des+informations+sur+vos+services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline font-bold hover:text-red-700"
                >
                  {t.waLinkText}
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-4 rounded-xl text-sm transition-all duration-300 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Envoi en cours…</span>
                </>
              ) : (
                <>
                  <span>{t.submitBtn}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
