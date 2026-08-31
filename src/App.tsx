import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomOrderBuilder } from './components/CustomOrderBuilder';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Product } from './types';


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#3D2B1F] flex flex-col font-sans selection:bg-[#D9A08B] selection:text-[#5C3A21]">
      
      {/* Navigation Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Brand Story & Craft Values */}
        <BrandStory />

        {/* Product Catalog Gallery */}
        <ProductCatalog onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Interactive Custom Order Builder */}
        <CustomOrderBuilder />

        {/* Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Email Contact Form & Direct Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
