import React from 'react';
import { ASSETS, BRAND_CONFIG } from '../data/products';
import { MessageCircle, Instagram, Heart, Sparkles, ShieldCheck, Truck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsAppOrder = () => {
    const msg = encodeURIComponent('Olá, Amém! Vi o site de vocês e gostaria de fazer uma encomenda personalizada.');
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-warm-gradient py-12 md:py-20 lg:py-24 border-b border-[#E8DCD0]">
      {/* Decorative background subtle elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#C47B62]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7A8460]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EBE2] border border-[#D9A08B]/60 text-[#5C3A21] text-xs font-semibold shadow-warm-sm">
              <Heart className="w-3.5 h-3.5 text-[#C47B62] fill-current" />
              <span>Ateliê de Artigos Religiosos Artesanais</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-sacred font-bold text-[#5C3A21] leading-tight">
              <span className="block text-lg sm:text-3xl font-sans font-normal text-[#8C5D3B] mb-2 tracking-wide">
                Bem-vindo à Amém
              </span>
              Sinta a paz de ter a{' '}
              <span className="relative inline-block text-[#C47B62]">
                <span className="font-script text-4xl sm:text-6xl lg:text-7xl lowercase font-normal italic pr-2">
                  fé que se faz à mão
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#6B5546] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Cada peça é tecida com carinho, fios nobres e muita oração. Santinhos em amigurumi, terços artesanais e lembrancinhas de batismo para abençoar o seu lar e presentear quem você ama com devoção e beleza.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-warm-md hover:shadow-warm-lg transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Fazer Encomenda no WhatsApp</span>
              </button>

              {/* Instagram Button */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FFFDF9] border-2 border-[#D9A08B] hover:border-[#C47B62] text-[#5C3A21] font-semibold text-base shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Instagram className="w-5 h-5 text-[#E1306C]" />
                <span>Instagram {BRAND_CONFIG.instagramHandle}</span>
              </a>
            </div>

            {/* Quick Benefits Pills */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#E8DCD0] text-xs font-medium text-[#5C3A21]">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>100% Artesanal e Único</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-4 h-4 text-[#C47B62] shrink-0" />
                <span>Envio mediante consulta</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#7A8460] shrink-0" />
                <span>Fios de Alta Qualidade</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Arch Frame */}
              <div className="absolute -inset-2 rounded-t-[140px] rounded-b-[40px] bg-gradient-to-b from-[#C47B62]/20 via-[#C5A059]/20 to-transparent blur-md -z-10" />

              <div className="relative rounded-t-[130px] rounded-b-[30px] overflow-hidden border-4 border-[#FFFDF9] shadow-warm-lg bg-[#F4EBE2]">
                <img
                  src={ASSETS.hero}
                  alt="Amém - Fé que se faz à mão"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Badge 1 - Satisfaction */}
                <div className="absolute bottom-6 left-4 right-4 bg-[#FFFDF9]/95 backdrop-blur-md p-3.5 rounded-2xl shadow-warm-md border border-[#E8DCD0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F4EBE2] flex items-center justify-center text-[#5C3A21] font-bold text-xs">
                      <Star className="w-5 h-5 text-[#C5A059] fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#5C3A21]">Amor em cada detalhe</p>
                      <p className="text-[11px] text-[#6B5546]">Devoção & Qualidade garantida</p>
                    </div>
                  </div>
                  <div className="text-right border-l border-[#E8DCD0] pl-3">
                    <span className="text-xs font-bold text-[#C47B62]">★ 5.0</span>
                    <span className="block text-[10px] text-[#8C5D3B]">Avaliação</span>
                  </div>
                </div>

              </div>

              {/* Floating Badge 2 - Handcrafted emblem */}
              <div className="absolute -top-4 -right-2 bg-[#5C3A21] text-[#FFFDF9] px-4 py-2 rounded-full shadow-warm-md text-xs font-bold flex items-center gap-1.5 border border-[#C5A059]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Feito Sob Encomenda</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};