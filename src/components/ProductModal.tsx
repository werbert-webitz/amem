import React, { useState } from 'react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/products';
import { X, MessageCircle, Sparkles, Check, Info, Heart } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [customNameTag, setCustomNameTag] = useState('');
  const [selectedCustomOption, setSelectedCustomOption] = useState<string>(
    product.customizationOptions ? product.customizationOptions[0] : ''
  );

  const handleWhatsAppOrder = () => {
    let msg = `Olá, Amém! Gostaria de encomendar a peça *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}).\n\n`;
    if (customNameTag.trim()) {
      msg += `🏷️ *Nome na Tag:* ${customNameTag}\n`;
    }
    if (selectedCustomOption) {
      msg += `✨ *Opção Selecionada:* ${selectedCustomOption}\n`;
    }
    msg += `Poderia me informar o valor do frete para o meu CEP? Obrigado(a)!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FFFDF9] rounded-3xl max-w-3xl w-full shadow-warm-lg border border-[#E8DCD0] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#F4EBE2] text-[#5C3A21] hover:bg-[#C47B62] hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Product Image */}
          <div className="md:col-span-6 bg-[#F4EBE2] relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#E8DCD0]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 sm:h-80 md:h-full object-cover rounded-2xl shadow-warm-md"
              referrerPolicy="no-referrer"
            />
            {product.isPopular && (
              <span className="absolute top-4 left-4 bg-[#C47B62] text-white text-xs font-bold px-3 py-1 rounded-full shadow-warm-sm">
                ★ Mais Pedido
              </span>
            )}
          </div>

          {/* Right Column: Details & Order Customizer */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-[#C47B62] uppercase tracking-wider bg-[#F4EBE2] px-2.5 py-0.5 rounded-md">
                  {product.category === 'amigurumi' ? 'Santinho Amigurumi' : product.category === 'tercos' ? 'Terço Artesanal' : ''}
                </span>
                <span className="text-xs text-[#8C5D3B]">{product.dimensions}</span>
              </div>

              <h3 className="text-2xl font-serif-sacred font-bold text-[#5C3A21] leading-tight">
                {product.name}
              </h3>
              <p className="text-xs text-[#6B5546] mt-1">{product.subtitle}</p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#5C3A21]">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-xs text-[#8C5D3B]">em até 3x no cartão</span>
              </div>

              <p className="mt-3 text-xs text-[#5C3A21] leading-relaxed border-t border-[#E8DCD0] pt-3">
                {product.description}
              </p>

              {/* Materials List */}
              <div className="mt-4 bg-[#F9F5F0] p-3 rounded-xl border border-[#E8DCD0]">
                <p className="text-xs font-bold text-[#5C3A21] mb-1.5 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#C47B62]" />
                  Materiais e Acabamento:
                </p>
                <ul className="text-[11px] text-[#6B5546] space-y-1">
                  {product.materials.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C47B62]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customization Controls */}
              <div className="mt-5 space-y-3 border-t border-[#E8DCD0] pt-4">
                <p className="text-xs font-bold text-[#5C3A21] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  Personalize sua peça:
                </p>

                {/* Custom Options Radio buttons */}
                {product.customizationOptions && product.customizationOptions.length > 0 && (
                  <div>
                    <label className="block text-[11px] font-medium text-[#6B5546] mb-1">
                      Estilo do Acabamento:
                    </label>
                    <div className="space-y-1.5">
                      {product.customizationOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer border transition-colors ${
                            selectedCustomOption === opt
                              ? 'bg-[#F4EBE2] border-[#C47B62] text-[#5C3A21] font-semibold'
                              : 'bg-white border-[#E8DCD0] text-[#6B5546]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="customOption"
                            checked={selectedCustomOption === opt}
                            onChange={() => setSelectedCustomOption(opt)}
                            className="accent-[#C47B62]"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Direct WhatsApp Order Action */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-warm-md hover:shadow-warm-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pedir via WhatsApp com minhas opções</span>
              </button>
              <p className="text-[10px] text-center text-[#8C5D3B] mt-2">
                Sua mensagem será preenchida automaticamente no WhatsApp!
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};