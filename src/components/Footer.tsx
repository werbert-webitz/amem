import React from 'react';
import { Logo } from './logo';
import { BRAND_CONFIG } from '../data/products';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

// Import da imagem garante que o bundler (Vite/Webpack) inclua o arquivo no build final
import logoWebitz from '../assets/images/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#5C3A21] text-[#F9F5F0] pt-16 pb-12 relative overflow-hidden border-t-4 border-[#C5A059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8DCD0]/20">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs text-stone-300 max-w-sm font-normal leading-relaxed">
              Ateliê de artigos religiosos artesanais. Cada santinho e terço é trabalhado com devoção, carinho e materiais de alta qualidade para abençoar o seu lar.
            </p>
            <p className="font-script text-xl text-[#C5A059] italic pt-1">
              "Fé que se faz à mão"
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-sacred text-lg font-bold text-[#C5A059] tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Catálogo de Produtos</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">Nossa História</a>
              </li>
              <li>
                <a href="#encomenda-custom" className="hover:text-white transition-colors">Monte sua Encomenda Customizada</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos dos Clientes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato & Atendimento</a>
              </li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif-sacred text-lg font-bold text-[#C5A059] tracking-wide">
              Acompanhe nas Redes
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-stone-100 text-xs font-semibold transition-all border border-white/10"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Instagram: {BRAND_CONFIG.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá, Amém! Vi o site e gostaria de conversar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-200 text-xs font-semibold transition-all border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>WhatsApp Atendimento Directo</span>
              </a>
            </div>
            <p className="text-[11px] text-stone-400">
              {BRAND_CONFIG.shippingText}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            © {new Date().getFullYear()} <strong>Amém - Artigos Religiosos</strong>. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://webitz.netlify.app/">
            <span className="flex items-center gap-2 text-stone-300 text-xs font-medium">
              Desenvolvido por Werbert S.S
              <img 
                src={logoWebitz} 
                alt="Webitz Tecnologia" 
                className="h-13 w-auto object-contain bg-white/90 px-1.5 py-0.5 rounded" 
              />
            </span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};