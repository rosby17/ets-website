"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { LanguageType, translations } from "./translations";

interface TestimonialsProps {
  lang: LanguageType;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;

  return (
    <>
      <style>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-testimonials {
          display: flex;
          width: max-content;
          animation: scroll-testimonials 40s linear infinite;
        }
        .animate-marquee-testimonials:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm font-bold tracking-widest text-brand-green uppercase block mb-3">
              {t.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              {t.title}
            </h2>
            <div className="w-20 h-1.5 bg-brand-blue mx-auto my-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-500 font-medium">
              {t.subtitle}
            </p>
          </div>

          <div className="relative w-full overflow-hidden mask-image-fade py-8">
            <div className="animate-marquee-testimonials flex gap-8">
              {/* Duplicate array twice for smooth infinite scrolling */}
              {[...t.items, ...t.items].map((item, index) => (
                <article
                  key={index}
                  className="bg-bg-light p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-8 relative hover:-translate-y-2 transition-transform duration-300 w-[350px] md:w-[450px] shrink-0"
                >
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-blue/10" />
                  
                  <div className="flex gap-1 text-brand-green">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed italic z-10">
                    {item.quote}
                  </p>

                  <div className="mt-auto flex items-center gap-4 border-t border-gray-200/60 pt-6">
                    {(item as any).avatar && (
                      <img 
                        src={(item as any).avatar} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    )}
                    <div>
                      <h4 className="text-base font-bold text-navy">{item.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
