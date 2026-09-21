import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  Factory,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  Lock,
  ArrowUp,
  ArrowRight,
  Hexagon,
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { companyInfo, categories, setPublicPage, setActiveCategoryFilter, setSelectedProductSlug, setActiveView } = useCatalog();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryFilter(categoryId);
    setSelectedProductSlug(null);
    setPublicPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070e17] text-slate-300 border-t border-slate-800">
      {/* 1. Upper Industrial Trust Bar */}
      <div className="border-b border-slate-800 bg-[#0b1523] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider">ISO 9001:2015 Plant</h4>
              <p className="text-xs text-slate-400">Virgin polymer QC inspection</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <Factory className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider">14,500 MT Output</h4>
              <p className="text-xs text-slate-400">38 CNC injection & blow lines</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <Clock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider">24/7 Operations</h4>
              <p className="text-xs text-slate-400">Reliable continuous supply chain</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <MessageSquare className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider">Dedicated RFQ Desk</h4>
              <p className="text-xs text-slate-400">Fast quotes in 4 business hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-slate-900 flex items-center justify-center text-amber-500 border border-amber-500">
                <Hexagon className="w-6 h-6 fill-amber-500/20 stroke-[2]" />
                <span className="absolute font-black text-xs text-white">AP</span>
              </div>
              <span className="text-2xl font-black text-white font-heading tracking-tight">
                APEX<span className="text-amber-500">PLAST</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pr-4">
              Enterprise polymer moulding corporation specializing in heavy-load industrial storage crates, UN-certified chemical containers, 210L drums, and custom OEM tool design. Supplying tier-1 automotive, chemical, and logistics enterprises.
            </p>
            
            {/* Certifications tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {companyInfo.certifications.map((cert, i) => (
                <span key={i} className="text-[10px] font-mono font-bold bg-[#0b1523] text-amber-400 border border-slate-700 px-2.5 py-1">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider font-heading border-l-2 border-amber-500 pl-2">
              Industrial Product Lines
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider font-heading border-l-2 border-amber-500 pl-2">
              Company & Plant
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setPublicPage('home');
                    setSelectedProductSlug(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPublicPage('products');
                    setSelectedProductSlug(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Products Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPublicPage('capabilities');
                    setSelectedProductSlug(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Plant Capabilities & QC
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPublicPage('about');
                    setSelectedProductSlug(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPublicPage('contact');
                    setSelectedProductSlug(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Request B2B RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin & RFQ Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider font-heading border-l-2 border-amber-500 pl-2">
              Industry Bulletin & RFQ
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for resin pricing indices, new mould releases, and production capacity updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-1">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-[#0b1523] border border-slate-700 text-xs text-white px-3 py-2.5 flex-1 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 font-bold text-xs flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to Plant Bulletin!</span>
                </div>
              )}
            </form>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`mailto:${companyInfo.salesEmail}`} className="hover:text-white truncate">
                  {companyInfo.salesEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Phase 1 Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} {companyInfo.name}. Precision Polymer Manufacturing.</span>
            <span className="text-slate-700">|</span>
            <span className="text-amber-500/80 font-mono">B2B Heavy Industry Catalog</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveView('admin')}
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors font-medium cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Management</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#0b1523] hover:bg-amber-500 hover:text-slate-950 text-slate-400 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
