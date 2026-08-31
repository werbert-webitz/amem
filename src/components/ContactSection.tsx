import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { BRAND_CONFIG } from '../data/products';
import { Mail, MessageCircle, Instagram, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'Orçamento de Encomenda',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Orçamento de Encomenda',
      message: '',
      preferredContact: 'whatsapp'
    });
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-warm-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[#C47B62] text-xs font-bold uppercase tracking-widest bg-[#F4EBE2] px-3.5 py-1.5 rounded-full inline-block border border-[#D9A08B]/50">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-sacred font-bold text-[#5C3A21]">
            Entre em Contato com a Amém
          </h2>
          <p className="text-[#6B5546] text-xs sm:text-sm">
            Estamos prontos para atender você com todo o carinho e tirar suas dúvidas sobre encomendas e prazos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Buttons Card */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E8DCD0] shadow-warm-md space-y-6">
              <h3 className="font-serif-sacred text-2xl font-bold text-[#5C3A21] border-b border-[#E8DCD0] pb-3">
                Canais Diretos de Atendimento
              </h3>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá, Amém! Vim pelo site e gostaria de tirar dúvidas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-warm-sm hover:shadow-warm-md flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/20 text-white">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold">WhatsApp Oficial</span>
                    <span className="text-xs text-white/90 font-normal">Respostas rápidas e orçamentos</span>
                  </div>
                </div>
                <span className="text-xs bg-white text-[#25D366] px-3 py-1 rounded-full font-bold group-hover:scale-105 transition-transform">
                  Conversar
                </span>
              </a>

              {/* Instagram Button */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-[#FFFDF9] border-2 border-[#D9A08B] hover:border-[#C47B62] text-[#5C3A21] font-bold text-sm shadow-warm-sm hover:shadow-warm-md flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F4EBE2] text-[#E1306C]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold">Instagram</span>
                    <span className="text-xs text-[#8C5D3B] font-normal">{BRAND_CONFIG.instagramHandle}</span>
                  </div>
                </div>
                <span className="text-xs bg-[#F4EBE2] text-[#5C3A21] px-3 py-1 rounded-full font-bold group-hover:scale-105 transition-transform">
                  Seguir
                </span>
              </a>

              {/* Detail Items */}
              <div className="space-y-4 pt-2 text-xs text-[#5C3A21]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C47B62] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">E-mail Oficial:</p>
                    <p className="text-[#6B5546]">{BRAND_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7A8460] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Ateliê:</p>
                    <p className="text-[#6B5546]">{BRAND_CONFIG.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Horário de Atendimento:</p>
                    <p className="text-[#6B5546]">Segunda a Sexta, das 09h às 18h</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E8DCD0] shadow-warm-md">
              
              <h3 className="font-serif-sacred text-2xl font-bold text-[#5C3A21] mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#C47B62]" />
                Envie uma Mensagem por E-mail
              </h3>
              <p className="text-xs text-[#6B5546] mb-6">
                Preencha o formulário abaixo com suas dúvidas ou dados de contato. Responderemos em até 24 horas.
              </p>

              {submitted ? (
                <div className="bg-[#F4EBE2] p-8 rounded-2xl border border-[#D9A08B] text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-warm-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-sacred text-2xl font-bold text-[#5C3A21]">
                    Mensagem Enviada com Sucesso!
                  </h4>
                  <p className="text-xs text-[#6B5546] max-w-md mx-auto">
                    Obrigado, <strong>{formData.name}</strong>! Recebemos sua mensagem sobre <em>"{formData.subject}"</em>. Em breve entraremos em contato via {formData.preferredContact === 'whatsapp' ? 'WhatsApp' : 'E-mail'}.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#5C3A21] text-white text-xs font-bold hover:bg-[#C47B62] transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#5C3A21] mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria da Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#E8DCD0] bg-[#FBF8F3] text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#5C3A21] mb-1">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="maria@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#E8DCD0] bg-[#FBF8F3] text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#5C3A21] mb-1">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#E8DCD0] bg-[#FBF8F3] text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#5C3A21] mb-1">
                        Assunto
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#E8DCD0] bg-[#FBF8F3] text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                      >
                        <option value="Orçamento de Encomenda">Orçamento de Encomenda</option>
                        <option value="Dúvida sobre Produto">Dúvida sobre Produto</option>
                        <option value="Prazo de Entrega e Frete">Prazo de Entrega e Frete</option>
                        <option value="Batizado e Lembrancinhas">Batizado e Lembrancinhas</option>
                        <option value="Outros Assuntos">Outros Assuntos</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Radio */}
                  <div>
                    <label className="block text-xs font-bold text-[#5C3A21] mb-1.5">
                      Preferência de Resposta:
                    </label>
                    <div className="flex items-center gap-4 text-xs text-[#6B5546]">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="preferred"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                          className="accent-[#C47B62]"
                        />
                        <span>WhatsApp</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="preferred"
                          checked={formData.preferredContact === 'email'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                          className="accent-[#C47B62]"
                        />
                        <span>E-mail</span>
                      </label>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#5C3A21] mb-1">
                      Sua Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Escreva aqui os detalhes da sua mensagem..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-[#E8DCD0] bg-[#FBF8F3] text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#5C3A21] hover:bg-[#C47B62] text-white font-bold text-xs shadow-warm-md hover:shadow-warm-lg flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Enviando mensagem...' : 'Enviar Mensagem por E-mail'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
