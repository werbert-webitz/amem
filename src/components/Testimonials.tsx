import React from 'react';
import { TESTIMONIALS, BRAND_CONFIG } from '../data/products';
import { Star, Quote, Heart, Instagram } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#FBF8F3] relative border-b border-[#E8DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[#C47B62] text-xs font-bold uppercase tracking-widest bg-[#F4EBE2] px-3.5 py-1.5 rounded-full inline-block border border-[#D9A08B]/50">
            Carinho de Quem Recebeu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-sacred font-bold text-[#5C3A21]">
            Depoimentos que abençoam nosso trabalho
          </h2>
          <p className="text-[#6B5546] text-xs sm:text-sm">
            Mensagens reais enviadas por nossos clientes no Instagram e WhatsApp.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E8DCD0] shadow-warm-sm flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#D9A08B]/40 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#5C3A21] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#E8DCD0] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#5C3A21]">
                    {t.author}
                  </h3>
                  <p className="text-[11px] text-[#8C5D3B]">{t.city}</p>
                  <p className="text-[10px] text-[#7A8460] mt-0.5 font-medium">
                    Peça: {t.productName}
                  </p>
                </div>

                <div className="p-2 rounded-full bg-[#F4EBE2] text-[#C47B62]">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Instagram Link Notice */}
        <div className="mt-12 text-center">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFDF9] border border-[#D9A08B] text-[#5C3A21] text-xs font-bold hover:bg-[#F4EBE2] transition-colors shadow-warm-sm"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>Veja mais momentos de fé no nosso Instagram {BRAND_CONFIG.instagramHandle}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
