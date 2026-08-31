import React from 'react';
import { Flame, Sparkles, Heart, MessageCircle, ShieldCheck, SunMedium } from 'lucide-react';
import { PRODUCTS, BRAND_CONFIG } from '../data/products';
import { Product } from '../types';

interface ThematicCandlesProps {
  onSelectProduct: (product: Product) => void;
}

export const ThematicCandles: React.FC<ThematicCandlesProps> = ({ onSelectProduct }) => {
  const candleProduct = PRODUCTS.find((p) => p.category === 'velas') || PRODUCTS[2];

  const handleOrderCandle = () => {
    const msg = encodeURIComponent(
      `Olá, Amém! Gostaria de encomendar a *Vela Temática Esculpida Nossa Senhora Aparecida* (R$ 110,00). Poderia me passar os detalhes para pedido?`
    );
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="velas-tematicas" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-b border-[#E8DCD0] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4EBE2]/50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 text-[#C47B62] text-xs font-bold uppercase tracking-widest bg-[#F4EBE2] px-4 py-1.5 rounded-full border border-[#D9A08B]/50 shadow-warm-sm">
            <Flame className="w-3.5 h-3.5 text-[#C5A059]" />
            Nova Coleção
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-sacred font-bold text-[#5C3A21]">
            Velas Temáticas Devocionais
          </h2>
          <p className="text-[#6B5546] text-sm sm:text-base leading-relaxed">
            A luz da fé para abençoar seus momentos de oração. Confeccionadas artesanalmente com cera vegetal pura de abelha, textura rústica e nicho esculpido em folha de ouro.
          </p>
        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FBF8F3] rounded-3xl p-6 sm:p-10 border border-[#E8DCD0] shadow-warm-md">
          
          {/* Left Column: Product Candle Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DCD0] shadow-warm-md bg-[#F4EBE2] aspect-[3/4]">
              <img
                src={candleProduct.image}
                alt="Vela Temática Nossa Senhora Aparecida"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#C5A059] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-warm-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Edição Especial
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#FFFDF9] border border-[#E8DCD0] p-3 rounded-2xl shadow-warm-md hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F4EBE2] flex items-center justify-center text-[#C47B62]">
                <SunMedium className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#5C3A21]">Cera de Abelha 100% Pura</p>
                <p className="text-[10px] text-[#8C5D3B]">Aroma suave de benjoim & mirra</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Explanation & Purchase Options */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold text-[#8C5D3B] uppercase tracking-wider block mb-1">
                Luz & Devoção para o seu Altar
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-sacred font-bold text-[#5C3A21] leading-snug">
                Vela Temática Esculpida Nossa Senhora Aparecida
              </h3>
              <p className="text-sm text-[#6B5546] mt-2 leading-relaxed">
                Cada vela é moldada em duas camadas: um topo dourado em cera pura de abelha natural e um corpo branco texturizado com acabamento rústico. No centro inferior, um nicho esculpido com detalhes folheados a ouro guarda a venerada imagem de Nossa Senhora Aparecida.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FFFDF9] p-3.5 rounded-xl border border-[#E8DCD0]">
                <span className="text-xs font-bold text-[#5C3A21] flex items-center gap-1.5 mb-1">
                  <Flame className="w-4 h-4 text-[#C5A059]" />
                  Queima Limpa & Duradoura
                </span>
                <p className="text-[11px] text-[#6B5546]">
                  Aproximadamente 40 horas de iluminação com pavio 100% algodão sem chumbo.
                </p>
              </div>

              <div className="bg-[#FFFDF9] p-3.5 rounded-xl border border-[#E8DCD0]">
                <span className="text-xs font-bold text-[#5C3A21] flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#7A8460]" />
                  Nicho em Ouro Esculpido
                </span>
                <p className="text-[11px] text-[#6B5546]">
                  Acabamento minucioso que reflete a luz da chama suavemente durante a oração.
                </p>
              </div>
            </div>

            {/* Pricing & CTA Buttons */}
            <div className="pt-4 border-t border-[#E8DCD0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#8C5D3B] block">Valor Especial da Coleção</span>
                <span className="text-2xl font-bold text-[#5C3A21]">
                  R$ {candleProduct.price.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onSelectProduct(candleProduct)}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-[#F4EBE2] hover:bg-[#E8DCD0] text-[#5C3A21] font-bold text-xs transition-colors cursor-pointer text-center"
                >
                  Ver Detalhes
                </button>

                <button
                  onClick={handleOrderCandle}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-warm-sm hover:shadow-warm-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Encomendar no WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
