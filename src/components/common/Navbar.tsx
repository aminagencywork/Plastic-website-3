import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Lock,
  ChevronDown,
  Menu,
  X,
  FileText,
  Clock,
  Globe,
  ArrowRight,
  ShieldCheck,
  Hexagon,
  Layers
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    publicPage,
    setPublicPage,
    companyInfo,
    setActiveView,
    isAdminLoggedIn,
    setSelectedProductSlug,
    setActiveCategoryFilter,
    products,
    searchQuery,
    setSearchQuery,
    setQuickEnquiryProduct
  } = useCatalog();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleNavClick = (page: typeof publicPage, categoryFilter: string | null = null) => {
    setSelectedProductSlug(null);
    if (categoryFilter !== null) {
      setActiveCategoryFilter(categoryFilter);
    }
    setPublicPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedProductSlug(null);
    setPublicPage('products');
    setShowSearchModal(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = () => {
    setQuickEnquiryProduct(products[0] || null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs">
      {/* 1. Deep Dark Industrial Micro Bar */}
      <div className="bg-[#0b1523] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300 text-[11px] sm:text-xs">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{companyInfo.phone}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{companyInfo.email}</span>
            </a>
            <span className="hidden lg:inline-block text-slate-700">|</span>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Plant Facility: {companyInfo.address}</span>
            </div>
          </div>

          {/* Quick links & Admin portal */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 Plant</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-amber-400 transition-colors cursor-pointer hidden sm:inline-block"
            >
              Careers
            </button>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <button
              onClick={() => handleNavClick('capabilities')}
              className="hover:text-amber-400 transition-colors cursor-pointer hidden sm:inline-block"
            >
              Plant QC
            </button>
            <span className="hidden sm:inline-block text-slate-700">|</span>

            {/* Admin entry point */}
            <button
              onClick={() => setActiveView('admin')}
              className="flex items-center gap-1 text-slate-200 hover:text-amber-400 transition-colors font-semibold cursor-pointer px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700"
              title="Admin Product Catalog Management"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>{isAdminLoggedIn ? 'Admin Portal' : 'Admin'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo with Industrial Hexagon / Gear emblem */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-[#0b1523] flex items-center justify-center text-amber-500 border-2 border-amber-500 shadow-md group-hover:bg-slate-900 transition-colors">
              <Hexagon className="w-7 h-7 fill-amber-500/20 stroke-[2.2]" />
              <span className="absolute font-black text-xs text-white">AP</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-heading">
                  APEX<span className="text-amber-500">PLAST</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-widest uppercase">
                Industry & Polymer Manufacturing
              </p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer relative ${
                publicPage === 'home'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-800 hover:text-amber-600'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer relative ${
                publicPage === 'about'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-800 hover:text-amber-600'
              }`}
            >
              Company
            </button>

            <button
              onClick={() => handleNavClick('capabilities')}
              className={`text-sm font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer relative ${
                publicPage === 'capabilities'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-800 hover:text-amber-600'
              }`}
            >
              Services & Plant
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`text-sm font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer flex items-center gap-1.5 relative ${
                publicPage === 'products' || publicPage === 'product-detail'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-800 hover:text-amber-600'
              }`}
            >
              Products Catalog
              <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-1.5 py-0.2 rounded">
                {products.length}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-bold uppercase tracking-wider transition-colors py-2 cursor-pointer relative ${
                publicPage === 'contact'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-800 hover:text-amber-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Cluster: Search + Quote Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2.5 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              title="Search Industrial Catalog"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Industrial Golden 'Get A Quote' CTA */}
            <button
              onClick={openQuoteModal}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-base font-extrabold uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile hamburger & search */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              title="Search Catalog"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal Overlay */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-start justify-center pt-24 px-4">
          <div className="bg-white w-full max-w-xl p-6 shadow-2xl border-t-4 border-amber-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-slate-900">
                Search Industrial Catalog
              </h3>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by product name, code (e.g., AP-EC-6432), resin or application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider"
              >
                Search
              </button>
            </form>
            <div className="mt-3 text-xs text-slate-500 flex items-center justify-between">
              <span>Try: Euro Crates, UN Jerry Cans, 210L Drums, Food Grade Containers</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 font-heading font-bold uppercase tracking-wider text-base ${
              publicPage === 'home' ? 'bg-amber-500 text-slate-950' : 'text-slate-800'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-4 py-3 font-heading font-bold uppercase tracking-wider text-base ${
              publicPage === 'about' ? 'bg-amber-500 text-slate-950' : 'text-slate-800'
            }`}
          >
            Company & Philosophy
          </button>
          <button
            onClick={() => handleNavClick('capabilities')}
            className={`w-full text-left px-4 py-3 font-heading font-bold uppercase tracking-wider text-base ${
              publicPage === 'capabilities' ? 'bg-amber-500 text-slate-950' : 'text-slate-800'
            }`}
          >
            Plant Machinery & QC
          </button>
          <button
            onClick={() => handleNavClick('products')}
            className={`w-full text-left px-4 py-3 font-heading font-bold uppercase tracking-wider text-base flex items-center justify-between ${
              publicPage === 'products' ? 'bg-amber-500 text-slate-950' : 'text-slate-800'
            }`}
          >
            <span>Products Catalog</span>
            <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded font-mono">
              {products.length}
            </span>
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-3 font-heading font-bold uppercase tracking-wider text-base ${
              publicPage === 'contact' ? 'bg-amber-500 text-slate-950' : 'text-slate-800'
            }`}
          >
            Contact & Enquiries
          </button>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                openQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 px-4 bg-amber-500 text-slate-950 font-heading text-base font-black uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setActiveView('admin');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 bg-slate-900 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Management Screen</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
