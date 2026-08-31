import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BRAND_CONFIG } from '../data/products';
import { Instagram, MessageCircle, Menu, X, Heart, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenCustomizer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'Monte sua Encomenda', href: '#encomenda-custom' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppClick = () => {
    const defaultMsg = encodeURIComponent('Olá, Amém! Vim pelo site e gostaria de tirar dúvidas e fazer um orçamento.');
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${defaultMsg}`, '_blank');
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#5C3A21] text-[#F9F5F0] text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
        <span>Artigos Religiosos e Amigurumis 100% artesanais</span>
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF8F3]/95 backdrop-blur-md shadow-warm-sm py-3 border-b border-[#E8DCD0]'
            : 'bg-[#FBF8F3] py-4 border-b border-[#E8DCD0]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="focus:outline-none">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#5C3A21] hover:text-[#C47B62] font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Instagram Button */}
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#D9A08B] text-[#5C3A21] hover:bg-[#F4EBE2] hover:text-[#C47B62] text-xs font-semibold transition-all duration-200"
              title="Acesse nosso Instagram"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span className="hidden xl:inline">{BRAND_CONFIG.instagramHandle}</span>
            </a>

            {/* WhatsApp Direct Order Button */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-warm-sm hover:shadow-warm-md text-xs font-bold transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#E1306C] hover:bg-[#F4EBE2] rounded-full"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5C3A21] hover:bg-[#F4EBE2] rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF8F3] border-b border-[#E8DCD0] px-4 pt-3 pb-6 space-y-3 shadow-warm-md animate-fadeIn">
            <nav className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-[#5C3A21] font-medium hover:bg-[#F4EBE2] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E8DCD0] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-warm-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Falar no WhatsApp
              </button>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full border border-[#D9A08B] text-[#5C3A21] font-semibold text-sm flex items-center justify-center gap-2 bg-[#F4EBE2]/50"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                Siga @amem_artigosreligiosos
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
