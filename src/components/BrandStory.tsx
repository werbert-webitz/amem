import React from 'react';
import { ASSETS } from '../data/products';
import { HeartHandshake, Sparkles, Ribbon, Feather, Sun } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="historia" className="py-16 md:py-24 bg-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[#C47B62] text-xs font-bold uppercase tracking-widest bg-[#F4EBE2] px-3.5 py-1.5 rounded-full inline-block border border-[#D9A08B]/50">
            A Alma da Nossa Marca
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-sacred font-bold text-[#5C3A21]">
            Onde a fé ganha forma em fios e amor
          </h2>
          <p className="text-[#6B5546] font-script text-2xl sm:text-3xl italic text-[#C47B62]">
            "Cada ponto é uma prece, cada peça é uma bênção."
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Artisan Photo Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-[#F4EBE2] border border-[#E8DCD0] -rotate-2 -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg border-4 border-[#FFFDF9]">
                <img
                  src={ASSETS.artisan}
                  alt="Artesã tecendo santinho em crochê - Amém"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C3A21]/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-[#FFFDF9]">
                    <p className="font-serif-sacred text-xl font-bold">Artesanato Sacro Feito com Devoção</p>
                    <p className="text-xs text-stone-200">Dedicação manual em cada encomenda</p>
                  </div>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#5C3A21] text-[#FFFDF9] p-4 rounded-2xl shadow-warm-md max-w-[200px] text-xs border border-[#C5A059]">
                <p className="font-serif-sacred text-sm font-semibold italic text-[#C5A059] mb-1">
                  Amém Artigos Religiosos
                </p>
                <p className="text-[11px] leading-tight text-stone-300">
                  Transmitindo fé, proteção e carinho para lares em todo o Brasil.
                </p>
              </div>
            </div>
          </div>

          {/* Story & Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-[#5C3A21] text-base leading-relaxed">
              <p>
                A <strong>Amém</strong> nasceu do desejo profundo de unir a tradição católica com a delicadeza do trabalho manual em crochê e materiais nobres. Acreditamos que um artigo religioso não é apenas um objeto de decoração, mas um instrumento de devoção, acalento e proteção.
              </p>
              <p className="text-[#6B5546]">
                Confeccionamos cada santinho em amigurumi, terço e lembrancinha de batizado um a um, respeitando o tempo sagrado do fazer manual. Do tom dos fios ao acabamento da auréola, tudo é pensado para emocionar quem recebe.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#E8DCD0] shadow-warm-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4EBE2] text-[#C47B62] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#5C3A21]">Oração em Cada Ponto</h3>
                  <p className="text-xs text-[#6B5546] mt-0.5">Produzido em ambiente de paz, carinho e intenções abençoadas.</p>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#E8DCD0] shadow-warm-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4EBE2] text-[#7A8460] shrink-0">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#5C3A21]">Fios 100% Algodão</h3>
                  <p className="text-xs text-[#6B5546] mt-0.5">Toque suave, antialérgico e durabilidade para gerações.</p>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#E8DCD0] shadow-warm-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4EBE2] text-[#C5A059] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#5C3A21]">100% Personalizável</h3>
                  <p className="text-xs text-[#6B5546] mt-0.5">Escolha cores, nomes gravados e detalhes exclusivos.</p>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#E8DCD0] shadow-warm-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4EBE2] text-[#C47B62] shrink-0">
                  <Ribbon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#5C3A21]">Embalagem para Presente</h3>
                  <p className="text-xs text-[#6B5546] mt-0.5">Acompanha caixinha ou saquinho especial e cartão de fé.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
