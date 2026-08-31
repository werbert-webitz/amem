import React, { useState } from 'react';
import { PRODUCTS, BRAND_CONFIG } from '../data/products';
import { Product } from '../types';
import { MessageCircle, Search, Sparkles, Filter, Eye, Heart } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos os Artigos' },
    { id: 'amigurumi', label: 'Amigurumi' },
    { id: 'tercos', label: 'Terços Artesanais' },
    { id: 'sacramento', label: 'Sacramentos' },
    { id: 'mobile', label: 'Móbiles' },
    { id: 'baby', label: 'Baby & Kids' },
    { id: 'velas', label: 'Velas Decorativas' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesTab = activeTab === 'todos' || product.category === activeTab;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleQuickWhatsApp = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(`Olá, Amém! Gostaria de encomendar a peça *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}). Poderia me passar mais informações?`);
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-linen border-t border-b border-[#E8DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-[#C47B62] text-xs font-bold uppercase tracking-widest bg-[#F4EBE2] px-3.5 py-1.5 rounded-full inline-block border border-[#D9A08B]/50">
            Catálogo Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-sacred font-bold text-[#5C3A21]">
            Nossos Santinhos & Mimos
          </h2>
          <p className="text-[#6B5546] text-sm sm:text-base">
            Cada produto é confeccionado manualmente com carinho. Escolha o seu favorito ou encomende uma peça personalizada.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#FFFDF9] p-3 rounded-2xl border border-[#E8DCD0] shadow-warm-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#5C3A21] text-[#FFFDF9] shadow-warm-sm'
                    : 'text-[#6B5546] hover:bg-[#F4EBE2] hover:text-[#5C3A21]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8C5D3B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar santinho, terço..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-[#E8DCD0] bg-[#FBF8F3] text-[#5C3A21] focus:outline-none focus:ring-2 focus:ring-[#C47B62]"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#FFFDF9] rounded-2xl p-12 text-center border border-[#E8DCD0] max-w-md mx-auto my-8">
            <Sparkles className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
            <h3 className="font-serif-sacred text-xl font-bold text-[#5C3A21]">
              Nenhum santinho encontrado
            </h3>
            <p className="text-xs text-[#6B5546] mt-1 mb-4">
              Não encontramos resultados para "{searchQuery}". Que tal encomendar um feito sob medida?
            </p>
            <button
              onClick={() => {
                setActiveTab('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#F4EBE2] text-[#5C3A21] text-xs font-bold rounded-full hover:bg-[#C47B62] hover:text-white transition-colors"
            >
              Ver todos os artigos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#E8DCD0] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 cursor-pointer relative"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-[#F4EBE2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isPopular && (
                      <span className="bg-[#C47B62] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-warm-sm">
                        ★ Mais Pedido
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-[#7A8460] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-warm-sm">
                        Novo
                      </span>
                    )}
                  </div>

                  {/* Quick Detail View Overlay Button */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute bottom-3 right-3 bg-[#FFFDF9]/90 backdrop-blur-md p-2 rounded-full text-[#5C3A21] hover:bg-[#5C3A21] hover:text-white transition-all shadow-warm-sm opacity-90 group-hover:opacity-100"
                    title="Ver detalhes"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#8C5D3B] uppercase tracking-wider block mb-1">
                      {product.dimensions}
                    </span>
                    <h3 className="text-xl font-serif-sacred font-bold text-[#5C3A21] group-hover:text-[#C47B62] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6B5546] mt-1 line-clamp-2">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Pricing & Action */}
                  <div className="pt-3 border-t border-[#E8DCD0] flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-[#8C5D3B] block">A partir de</span>
                      <span className="text-xl font-bold text-[#5C3A21]">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleQuickWhatsApp(product, e)}
                        className="px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center gap-1.5 shadow-warm-sm transition-transform active:scale-95 cursor-pointer"
                        title="Pedir no WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Pedir</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
