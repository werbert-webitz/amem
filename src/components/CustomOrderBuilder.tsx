import React, { useState } from 'react';
import { CustomOrderState } from '../types';
import { BRAND_CONFIG } from '../data/products';
import { Sparkles, MessageCircle, Heart, CheckCircle2, Gift, Send } from 'lucide-react';

export const CustomOrderBuilder: React.FC = () => {
  const [order, setOrder] = useState<CustomOrderState>({
    saintType: 'Nossa Senhora Aparecida',
    size: '20cm',
    customNameTag: '',
    haloColor: 'Dourado',
    giftBox: true,
    specialRequests: ''
  });

  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const saintsList = [
    'Nossa Senhora Aparecida',
    'Nossa Senhora das Graças',
    'Nossa Senhora de Fátima',
    'São Francisco de Assis',
    'São José com Menino Jesus',
    'Santo Antônio',
    'São Bento',
    'Arcanjo Miguel',
    'Anjo da Guarda (Batismo)',
    'Sagrado Coração de Jesus',
    'Terço Personalizado em Madeira'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `✨ *ENCOMENDA ESPECIAL PERSONALIZADA - AMÉM* ✨\n\n`;
    msg += `🙏 *Devoção/Santinho:* ${order.saintType}\n`;
    msg += `📏 *Tamanho:* ${order.size}\n`;
    msg += `🏷️ *Nome na Tag:* ${order.customNameTag.trim() ? order.customNameTag : 'Sem tag personalizada'}\n`;
    msg += `👑 *Acabamento Auréola:* ${order.haloColor}\n`;
    msg += `🎁 *Caixa para Presente:* ${order.giftBox ? 'Sim, com laço de cetim' : 'Não'}\n`;
    if (order.specialRequests.trim()) {
      msg += `📝 *Observações Especiais:* ${order.specialRequests}\n`;
    }
    msg += `\nOlá! Montei minha encomenda no site da Amém e gostaria de consultar a disponibilidade de agenda e valor final do frete.`;

    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 4000);
  };

  return (
    <section id="encomenda-custom" className="py-16 md:py-24 bg-[#F4EBE2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E8DCD0] shadow-warm-lg">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EBE2] text-[#C47B62] text-xs font-bold border border-[#D9A08B]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Simulador de Encomendas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-sacred font-bold text-[#5C3A21]">
              Monte sua Encomenda Especial
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5546]">
              Selecione o santinho da sua devoção, o tamanho e os detalhes. Enviaremos o orçamento exato no seu WhatsApp em instantes.
            </p>
          </div>

          <form onSubmit={handleSendWhatsApp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column Controls */}
            <div className="space-y-5">
              
              {/* 1. Saint Choice */}
              <div>
                <label className="block text-xs font-bold text-[#5C3A21] mb-2">
                  1. Escolha a Devoção / Santinho:
                </label>
                <select
                  value={order.saintType}
                  onChange={(e) => setOrder({ ...order, saintType: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-[#D9A08B] bg-[#FBF8F3] text-[#5C3A21] font-medium focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                >
                  {saintsList.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Size Choice */}
              <div>
                <label className="block text-xs font-bold text-[#5C3A21] mb-2">
                  2. Tamanho da Peça:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['15cm', '20cm', '25cm'] as const).map((sz) => (
                    <button
                      type="button"
                      key={sz}
                      onClick={() => setOrder({ ...order, size: sz })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        order.size === sz
                          ? 'bg-[#5C3A21] text-white border-[#5C3A21] shadow-warm-sm'
                          : 'bg-[#FBF8F3] text-[#6B5546] border-[#E8DCD0] hover:bg-[#F4EBE2]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

                     

              {/* 4. Halo Color */}
              <div>
                <label className="block text-xs font-bold text-[#5C3A21] mb-2">
                  4. Tom do Acabamento/Auréola:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Dourado', 'Prata', 'Bronze', 'Sem Halo'] as const).map((h) => (
                    <button
                      type="button"
                      key={h}
                      onClick={() => setOrder({ ...order, haloColor: h })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border text-left cursor-pointer transition-all ${
                        order.haloColor === h
                          ? 'bg-[#F4EBE2] border-[#C47B62] text-[#5C3A21] font-bold'
                          : 'bg-[#FBF8F3] border-[#E8DCD0] text-[#6B5546]'
                      }`}
                    >
                      ✨ {h}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column Summary Card */}
            <div className="flex flex-col justify-between space-y-6 bg-[#FBF8F3] p-6 rounded-2xl border border-[#E8DCD0]">
              
              <div>
                <h3 className="font-serif-sacred text-xl font-bold text-[#5C3A21] mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#C47B62]" />
                  Resumo do seu Pedido:
                </h3>

                {/* Live Preview List */}
                <div className="space-y-2 text-xs text-[#5C3A21] bg-[#FFFDF9] p-4 rounded-xl border border-[#E8DCD0]">
                  <p className="flex justify-between">
                    <span className="text-[#8C5D3B]">Santinho:</span>
                    <span className="font-bold">{order.saintType}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#8C5D3B]">Tamanho:</span>
                    <span className="font-bold">{order.size}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#8C5D3B]">Tag Gravada:</span>
                    <span className="font-bold">{order.customNameTag.trim() || 'Sem gravação'}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#8C5D3B]">Auréola:</span>
                    <span className="font-bold">{order.haloColor}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#8C5D3B]">Embalagem Presente:</span>
                    <span className="font-bold text-[#7A8460]">
                      {order.giftBox ? 'Inclusa (Grátis)' : 'Não'}
                    </span>
                  </p>
                </div>

                {/* Special Instructions Field */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-[#5C3A21] mb-1">
                    Desejos Especiais ou Data do Evento:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Preciso para o batizado no dia 20 ou gostaria do manto em tom bege suave..."
                    value={order.specialRequests}
                    onChange={(e) => setOrder({ ...order, specialRequests: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-[#E8DCD0] bg-white text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-warm-md hover:shadow-warm-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Pedido Personalizado no WhatsApp</span>
                </button>

                {copiedSuccess && (
                  <p className="text-xs text-[#20bd5a] font-bold text-center mt-2 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Abrindo WhatsApp com sua mensagem formatada...
                  </p>
                )}
              </div>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
