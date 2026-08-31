import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/products';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const msg = encodeURIComponent('Olá, Amém! Vim pelo site e gostaria de conversar sobre os artigos religiosos.');
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Floating Tooltip */}
      {showTooltip && (
        <div className="bg-[#FFFDF9] text-[#5C3A21] px-3.5 py-2 rounded-2xl shadow-warm-lg border border-[#E8DCD0] text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span>Dúvidas ou encomendas? Fale conosco!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8C5D3B] hover:text-[#5C3A21]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-warm-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Atendimento por WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </button>

    </div>
  );
};
