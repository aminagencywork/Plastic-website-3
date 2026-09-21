import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { EnquiryModal } from '../common/EnquiryModal';
import { HomeView } from './HomeView';
import { ProductsCatalogView } from './ProductsCatalogView';
import { ProductDetailView } from './ProductDetailView';
import { AboutView } from './AboutView';
import { CapabilitiesView } from './CapabilitiesView';
import { ContactView } from './ContactView';

export const PublicContainer: React.FC = () => {
  const { publicPage } = useCatalog();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {publicPage === 'home' && <HomeView />}
        {publicPage === 'products' && <ProductsCatalogView />}
        {publicPage === 'product-detail' && <ProductDetailView />}
        {publicPage === 'about' && <AboutView />}
        {publicPage === 'capabilities' && <CapabilitiesView />}
        {publicPage === 'contact' && <ContactView />}
      </main>
      <Footer />
      <EnquiryModal />
    </div>
  );
};
