import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Hero } from './Hero';
import { StatsSection } from './StatsSection';
import { CategoryCard } from '../common/CategoryCard';
import { ProductCard } from '../common/ProductCard';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Cpu,
  Layers,
  ChevronRight,
  PhoneCall,
  CheckCircle2,
  Award,
  Clock,
  Compass,
  FileCheck,
  ChevronLeft
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    categories,
    products,
    setPublicPage,
    setSelectedProductSlug,
    setQuickEnquiryProduct,
    setActiveCategoryFilter
  } = useCatalog();

  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    {
      quote: "Expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise, deliver innovative & dynamic solutions to our customers! I've seen great companies serving industry solutions in my career, but ApexPlast sets the benchmark for zero-defect tolerance.",
      author: "Martin Gube Jr.",
      title: "Plant Operations Director, Global Logistics Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Transitioning our 30L chemical packaging line to ApexPlast's UN-certified containers eliminated transit stress cracking completely. Their technical team conducted thorough melt flow tests and delivered on time without compromising production schedules.",
      author: "Helena Lindqvist",
      title: "VP of Procurement, Nordic Chemical Supplies",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const currentTestimonial = testimonials[testimonialIdx];

  const filteredProducts = activeCategoryTab === 'all'
    ? products.filter(p => p.isPublished).slice(0, 4)
    : products.filter(p => p.categoryId === activeCategoryTab && p.isPublished).slice(0, 4);

  const caseStudies = [
    {
      title: "Automated Euro Crate 6432 Production Line Expansion",
      category: "INJECTION MOULDING",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Deployed high-speed multi-cavity hot runner moulds delivering a 28-second cycle time for high-volume automotive logistics."
    },
    {
      title: "UN Class II Certified Hazardous Chemical Jerry Can",
      category: "BLOW MOULDING",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      description: "Implemented multi-layer continuous extrusion with fluorination barrier to prevent solvent permeability and stress cracks."
    },
    {
      title: "Custom Thin-Wall Food Packaging For Dairy Cooperatives",
      category: "PRECISION TOOLING",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      description: "Engineered FDA-compliant virgin polypropylene IML containers with airtight hermetic tamper-evident seals."
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section + Golden Partner Band + 4 Overlapping Cards */}
      <Hero />

      {/* 2. Section: "We Maintain Strong Core Values That Truly Reflect Our Philosophy" */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Industrial Plant Photography with Overlapping Golden Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="ApexPlast Engineer Quality Inspection"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e17]/80 via-transparent to-transparent"></div>
              </div>

              {/* Overlapping Golden Feature Box (Exact pattern from reference screenshot) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-amber-500 text-slate-950 p-6 sm:p-7 max-w-sm shadow-2xl border-2 border-white flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-slate-950 text-amber-500 flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-black uppercase leading-tight text-slate-950">
                      Building The Future, Delivering The Best
                    </h4>
                    <p className="text-xs text-slate-900/90 mt-1 leading-relaxed">
                      We ensure timeliness, accuracy and cost efficiency across every single production run.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-600/40 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-950">
                    Precision Assurance
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High Impact Core Values & Philosophy Copy */}
            <div className="lg:col-span-6 space-y-6 pt-8 lg:pt-0">
              <div className="inline-flex items-center gap-2 text-amber-600 text-xs sm:text-sm font-bold uppercase tracking-widest font-heading">
                <div className="h-1 w-8 bg-amber-500"></div>
                <span>High Performance Polymer Manufacturing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 font-heading leading-tight tracking-tight">
                We Maintain Strong Core Values That Truly Reflect Our Philosophy.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are helping to lead the charge; we can help you build on your past successes and prepare for future demands. Our Group is recognized as one of the world's premier Polymer & Moulding Corporations, serving an impressive list of enterprise B2B clients with specialized tooling and high-speed CNC injection molding lines.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our plant's modern infrastructure ensures timeliness, structural integrity, and ISO compliance adherence required to meet demanding enterprise shipping and chemical safety standards worldwide.
              </p>

              {/* Core Attributes checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-800 font-bold uppercase font-heading">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                  <span>100% Virgin Polymer Resins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                  <span>Robotic High-Tonnage Lines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                  <span>In-House Tool Maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                  <span>Full ASTM Drop Testing</span>
                </div>
              </div>

              {/* Action Buttons (Dark Navy + Light/Outlined) */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setPublicPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-[#0b1523] hover:bg-slate-800 text-white font-heading text-base font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md cursor-pointer"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => {
                    setPublicPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-heading text-base font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: "Utilising Latest Processing Solutions With Decades Of Work Experience" (The 3-Card Industrial Grid) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 font-heading">
              High Performance Services For Multiple Industries!
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 font-heading tracking-tight leading-tight">
              Utilising Latest Processing Solutions With Decades Of Work Experience.
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </div>

          {/* 3-Card Industrial Layout matching the reference image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Warm Amber Card */}
            <div className="bg-amber-500 text-slate-950 p-8 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 bg-slate-950 text-amber-500 flex items-center justify-center mb-6">
                  <Factory className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-slate-950 leading-tight">
                  Heavy Injection Moulding
                </h3>
                <p className="text-xs sm:text-sm text-slate-900/90 mt-4 leading-relaxed font-medium">
                  Operating 38 microprocessor-controlled injection presses from 100 Tonnes to 1200 Tonnes. Single-shot product weights up to 12.5 kg with automated robotic parts extraction.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-bold uppercase font-heading text-slate-950">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-950"></div>
                    <span>Euro crates, totes & skids</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-950"></div>
                    <span>Multi-cavity high speed cycles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-950"></div>
                    <span>Certified Melt Flow testing</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-amber-600/40 flex items-center justify-between">
                <button
                  onClick={() => {
                    setPublicPage('capabilities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-heading text-sm font-black uppercase tracking-wider text-slate-950 group-hover:underline flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore More</span>
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Card 2: Deep Dark Carbon Navy Card */}
            <div className="bg-[#0b1523] text-white p-8 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div>
                <div className="w-14 h-14 bg-slate-800 text-amber-400 flex items-center justify-center mb-6 border border-slate-700">
                  <Cpu className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white leading-tight">
                  Industrial Container Ware
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  Continuous multi-layer extrusion blow moulding for UN-certified chemical containers, 210L open & tight-head barrels, and intermediate bulk storage packaging.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-bold uppercase font-heading text-amber-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500"></div>
                    <span>UN Class II & III Certifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500"></div>
                    <span>Drop impact & stack load verified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500"></div>
                    <span>Parison wall thickness control</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveCategoryFilter('cat-chemical-drums');
                    setSelectedProductSlug(null);
                    setPublicPage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400 group-hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore More</span>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Card 3: Steel / Machining Card with Tooling Focus */}
            <div className="bg-[#f8fafc] border border-slate-200 text-slate-900 p-8 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-amber-500">
              <div>
                <div className="w-14 h-14 bg-slate-200 text-slate-900 flex items-center justify-center mb-6">
                  <Layers className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-slate-950 leading-tight">
                  Custom Moulding & Tool Room
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  Full in-house CNC wire-cut EDM and high-speed milling toolroom. Turn 3D CAD step files into mass-production injection moulds within 3 to 5 weeks.
                </p>
                <ul className="mt-6 space-y-2 text-xs font-bold uppercase font-heading text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500"></div>
                    <span>DFM & mould flow analysis reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500"></div>
                    <span>P20 & H13 hardened steel dies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500"></div>
                    <span>Rapid physical prototype runs</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    setPublicPage('capabilities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore More</span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Under-card text from reference */}
          <div className="text-center mt-12 text-xs sm:text-sm text-slate-600 font-medium">
            <span>We have established corporate mandates to maintain strong core values that truly reflect our engineering philosophy. </span>
            <button
              onClick={() => {
                setPublicPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-bold text-amber-600 hover:text-amber-700 underline ml-1 cursor-pointer"
            >
              Schedule A Plant Visit
            </button>
          </div>
        </div>
      </section>

      {/* 4. Product Catalog Showcase & Interactive Filtering */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 font-heading">
                Industrial Inventory & Tooling
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-950 font-heading mt-1 tracking-tight">
                Featured Industrial Product Range
              </h2>
              <p className="text-slate-600 text-sm mt-1.5 max-w-xl">
                Engineered with 100% virgin polymer resins, tested against drop impacts and heavy multi-tier stack loads.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedProductSlug(null);
                setPublicPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 px-6 py-3 bg-[#0b1523] hover:bg-slate-800 text-white font-heading text-sm font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>View All Products ({products.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-4">
            <button
              onClick={() => setActiveCategoryTab('all')}
              className={`px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategoryTab === 'all'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              All Specifications ({products.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategoryTab === cat.id
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(prod) => setQuickEnquiryProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: Industrial Testimonial Spotlight with Crane Machinery Background */}
      <section className="py-20 lg:py-24 bg-[#070e17] text-white relative overflow-hidden border-b border-slate-800">
        {/* Crane / Heavy machine visual watermark on the right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
            alt="ApexPlast Factory Equipment"
            className="w-full h-full object-cover filter contrast-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#070e17]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Giant Golden Quotation Mark */}
              <div className="text-amber-500 font-serif text-7xl sm:text-8xl leading-none select-none">
                ❝
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-lg sm:text-2xl lg:text-3xl font-normal text-slate-100 leading-relaxed font-display">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500 shadow-md"
                />
                <div>
                  <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wider">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-xs text-amber-400 font-medium">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>

              {/* Slide controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-9 h-9 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                  className="w-9 h-9 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500 font-mono ml-2">
                  0{testimonialIdx + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Impact Industrial 4-Stat Counter Bar */}
      <StatsSection />

      {/* 7. Section: "Explore Our Product Showcases & Manufacturing Case Studies" */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 font-heading">
              Innovative And Sustainable Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-950 font-heading tracking-tight leading-tight">
              Explore Our Product Showcases & Manufacturing Case Studies.
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 hover:border-amber-500 shadow-md hover:shadow-2xl transition-all flex flex-col relative"
              >
                {/* Visual Image */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e17]/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black font-heading uppercase px-2.5 py-1 tracking-wider shadow-sm">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase text-slate-950 group-hover:text-amber-600 transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setPublicPage('capabilities');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Technical Case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <div className="w-2 h-2 bg-amber-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Signature Split Industrial CTA Banner (Left: Factory Visual | Right: Rich Amber Block) */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px]">
          {/* Left Split: Heavy Industrial Backdrop */}
          <div className="lg:col-span-6 relative bg-slate-950 min-h-[260px] lg:min-h-[auto] flex items-center p-8 sm:p-12">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Moulding Plant Facility"
              className="absolute inset-0 w-full h-full object-cover filter brightness-40 contrast-125"
            />
            <div className="relative z-10 space-y-3">
              <span className="text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                DIRECT MOULDING PLANT ACCESS
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Schedule A Technical Plant Audit Or Tooling Consultation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                Meet our senior tooling engineers in person. Tour our 85,000 sq. ft. clean manufacturing plant floor and toolroom.
              </p>
            </div>
          </div>

          {/* Right Split: Rich Amber Brand Banner (Exact match from template) */}
          <div className="lg:col-span-6 bg-amber-500 text-slate-950 p-8 sm:p-14 flex flex-col justify-center space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-950 font-heading">
              Global Supply Chain Reliability
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-950 tracking-tight leading-tight">
              One Of The World's Leading Industry & Manufacturing Corporations!
            </h3>
            <p className="text-xs sm:text-sm text-slate-950 font-medium max-w-lg leading-relaxed">
              We provide high quality products, certified lab testing, and turnkey OEM mould engineering to help you scale volume with peace of mind.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setPublicPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#0b1523] hover:bg-slate-900 text-white font-heading text-base font-black uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl cursor-pointer"
              >
                <span>Contact With Us</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
