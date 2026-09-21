import React, { useState, useEffect } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Factory,
  Cog,
  Wrench,
  Cpu
} from 'lucide-react';

const HERO_SLIDES = [
  {
    tag: "WORLD-CLASS PRECISION MANUFACTURING",
    title: "We Manufacture A Variety Of High Quality Products",
    subtitle: "Our Group is recognized as one of the industry's leading Polymer & Injection Moulding Corporations serving an impressive list of long-term global B2B clients with decades of engineering expertise.",
    primaryCta: "Explore Our Products",
    secondaryCta: "About Our Company",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    badgeNumber: "38+",
    badgeLabel: "High-Tonnage CNC Injection Lines"
  },
  {
    tag: "CUSTOM TOOLING & OEM MOULDING",
    title: "Engineered Plastics Built For Maximum Durability",
    subtitle: "From heavy-gauge UN-certified hazardous chemical barrels to precision food-grade crates, we process 14,500+ MT of virgin polymer annually with zero-defect quality control.",
    primaryCta: "Request Technical Quote",
    secondaryCta: "View Plant Capabilities",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    badgeNumber: "14.5K",
    badgeLabel: "Metric Tonnes Processed Yearly"
  }
];

export const Hero: React.FC = () => {
  const { setPublicPage, setSelectedProductSlug, setQuickEnquiryProduct, products } = useCatalog();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handlePrimary = () => {
    if (currentSlide === 0) {
      setSelectedProductSlug(null);
      setPublicPage('products');
    } else {
      setQuickEnquiryProduct(products[0] || null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSecondary = () => {
    if (currentSlide === 0) {
      setPublicPage('about');
    } else {
      setPublicPage('capabilities');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#070e17] text-white">
      {/* 1. Main Hero Stage */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background Image with Deep Dark Overlay & Industrial Amber Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={slide.image}
            alt="ApexPlast Industrial Facility"
            className="w-full h-full object-cover object-center filter brightness-45 contrast-125 transition-all duration-1000 transform scale-105"
          />
          {/* Gradients to replicate the exact dramatic lighting in the reference photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#070e17]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-transparent to-[#070e17]/60"></div>
          
          {/* Subtle spark / molten warm amber radial glow on right side */}
          <div className="absolute right-0 top-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Industrial Category Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border-l-4 border-amber-500 text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
                <span>{slide.tag}</span>
              </div>

              {/* Headline matching reference: bold, industrial, high impact */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white font-heading leading-[1.05]">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                {slide.subtitle}
              </p>

              {/* Buttons with exact template style */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handlePrimary}
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-lg font-black uppercase tracking-wider shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                <button
                  onClick={handleSecondary}
                  className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-heading text-lg font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  <span>{slide.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Right side floating specification card */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="bg-[#0b1523]/90 backdrop-blur-md border-t-4 border-amber-500 p-6 shadow-2xl max-w-xs text-left">
                <div className="w-12 h-12 bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Factory className="w-7 h-7" />
                </div>
                <div className="text-3xl font-black font-heading text-amber-400 tracking-tight">
                  {slide.badgeNumber}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mt-1">
                  {slide.badgeLabel}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Controlled temperature injection moulds with robotic demoulding for tight tolerance polymer components.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-amber-300">
                  <span>ISO 9001 CERTIFIED</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide navigation buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 hidden sm:flex"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 hidden sm:flex"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* 2. Golden / Amber Partner Banner & 4 Overlapping Feature Cards */}
      <section className="relative z-20">
        {/* Golden Partner Band */}
        <div className="bg-amber-500 text-slate-950 py-7 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Logos / Partner Bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-10 border-b border-amber-600/40 pb-6 opacity-95">
              <div className="font-heading text-2xl font-black tracking-widest uppercase text-slate-950/80 hover:text-slate-950 transition-colors">
                WOLVES<span className="text-xs font-sans tracking-normal ml-1">MFG</span>
              </div>
              <div className="font-heading text-2xl font-black tracking-widest uppercase text-slate-950/80 hover:text-slate-950 transition-colors">
                BRAND<span className="font-light">PLAST</span>
              </div>
              <div className="font-heading text-2xl font-bold tracking-wider lowercase text-slate-950/80 hover:text-slate-950 transition-colors">
                acrevis<span className="text-xs font-mono uppercase ml-1">POLYMER</span>
              </div>
              <div className="font-heading text-xl font-black tracking-tight uppercase text-slate-950/80 hover:text-slate-950 transition-colors">
                Bayern International
              </div>
              <div className="font-heading text-2xl font-black tracking-widest uppercase text-slate-950/80 hover:text-slate-950 transition-colors">
                AQUIIRE<span className="text-xs font-bold ml-1">IND</span>
              </div>
              <div className="font-heading text-2xl font-black tracking-wider uppercase text-slate-950/80 hover:text-slate-950 transition-colors">
                BURFLEX
              </div>
            </div>
          </div>
        </div>

        {/* 4 Overlapping Floating Cards Grid (Directly matching reference screenshot) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 pb-8">
            {/* Card 1 */}
            <div className="bg-white p-7 shadow-xl border-t-4 border-slate-900 hover:border-amber-500 transition-all text-slate-900 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center mb-5 transition-colors">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-950 leading-tight">
                  Advanced Quality Control System
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  We look at the production as whole individual components to identify systemic weak points in the process and eliminate structural stress lines.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-amber-600 group-hover:text-slate-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <span>ISO 9001 Certified</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 shadow-xl border-t-4 border-slate-900 hover:border-amber-500 transition-all text-slate-900 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center mb-5 transition-colors">
                  <Award className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-950 leading-tight">
                  Professional And Qualified Team
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Turning a problem into a task, we find solutions that give not a momentary, but a prolonged economic effect for enterprise volume orders.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-amber-600 group-hover:text-slate-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <span>Certified Engineers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 shadow-xl border-t-4 border-slate-900 hover:border-amber-500 transition-all text-slate-900 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center mb-5 transition-colors">
                  <Wrench className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-950 leading-tight">
                  Mould Tooling & Engineering
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Specialize in maintenance of polymer working equipment, its modernization, CAD/CAM mould design, and rapid tooling turnaround.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-amber-600 group-hover:text-slate-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <span>CNC EDM Toolroom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-7 shadow-xl border-t-4 border-slate-900 hover:border-amber-500 transition-all text-slate-900 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center mb-5 transition-colors">
                  <Cpu className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-slate-950 leading-tight">
                  Accurate Testing Processes
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  We'll work with you on your project, together we'll fine-tune structural tolerances, drop impact resilience, and resin melt-flow specifications.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-amber-600 group-hover:text-slate-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <span>ASTM Lab Testing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Under-card text from reference */}
          <div className="text-center py-3 text-xs sm:text-sm text-slate-700 font-medium">
            <span>We have certification & expert level of knowledge and equipment. </span>
            <button
              onClick={() => {
                setPublicPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-bold text-amber-600 hover:text-amber-700 underline ml-1 cursor-pointer"
            >
              Contact Our Head Office!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
