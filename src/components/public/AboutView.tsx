import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { StatsSection } from './StatsSection';
import { ShieldCheck, Factory, Award, CheckCircle2, ArrowRight, PhoneCall, Cpu, Wrench } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { companyInfo, setPublicPage } = useCatalog();

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* About Header */}
        <div className="bg-[#0b1523] text-white p-8 sm:p-14 border-l-8 border-amber-500 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 font-heading">
              About ApexPlast Precision Polymers & Moulding Corporation
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 font-heading tracking-tight leading-none">
              18+ Years of Manufacturing Excellence In Industrial Plastics
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Established in {companyInfo.establishedYear}, ApexPlast has grown into a world-class manufacturing corporation delivering high-load logistics crates, chemical storage drums, UN packaging, and custom injection-moulded components for enterprise clients worldwide.
            </p>
          </div>
        </div>

        {/* Plant Metrics */}
        <StatsSection />

        {/* Plant Infrastructure & Equipment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 font-heading">
              Manufacturing Plant & Machinery
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-950 font-heading leading-tight">
              85,000 Sq. Ft. Controlled Precision Manufacturing Floor
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our continuous production floors house 38 modern servo-hydraulic and all-electric injection moulding machines ranging from 100 Tonnes to 1200 Tonnes clamp force.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              To support continuous round-the-clock runs, our plant is backed by captive power generators, automated raw material desiccant dehumidifying dryers, chilled water central circuits, and robotic part extractors.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-800 font-bold uppercase font-heading">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                <span>Microprocessor-controlled injection presses (100T – 1200T)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                <span>Extrusion blow moulding up to 210-Liter barrel capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                <span>In-house CNC tool room with wire EDM and spark erosion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 stroke-[2.5]" />
                <span>In-line hot-stamping, screen printing and RFID tagging</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-slate-300 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                alt="Industrial factory facility floor"
                className="w-full h-80 sm:h-96 object-cover filter brightness-95"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-amber-500 text-slate-950 p-4 shadow-lg border-2 border-white max-w-xs hidden sm:block">
              <div className="font-heading font-black text-sm uppercase">Certified Clean Floor</div>
              <div className="text-[11px] text-slate-950/80 mt-0.5">24/7 Monitored Injection Cycles</div>
            </div>
          </div>
        </div>

        {/* Quality Management Policy */}
        <div className="bg-[#0b1523] text-white p-8 sm:p-12 border-t-4 border-amber-500 shadow-xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 font-heading">
              Zero Defect Engineering Culture
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading mt-1">
              Strict Polymer Testing & Batch Traceability
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Every production lot undergoes Melt Flow Index (MFI), density checks, Izod impact drop testing, and hydraulic pressure testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-slate-900 border border-slate-700 hover:border-amber-500 transition-colors">
              <ShieldCheck className="w-7 h-7 text-amber-400 mb-3 stroke-[2.2]" />
              <h3 className="font-heading text-base font-bold uppercase text-white">ISO 9001:2015</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Full standard compliance with internal audits and continuous quality calibration protocols.
              </p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-700 hover:border-amber-500 transition-colors">
              <Award className="w-7 h-7 text-amber-400 mb-3 stroke-[2.2]" />
              <h3 className="font-heading text-base font-bold uppercase text-white">UN Certification</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Certified for UN Class II and III hazardous substance packaging and sea freight transit.
              </p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-700 hover:border-amber-500 transition-colors">
              <Cpu className="w-7 h-7 text-amber-400 mb-3 stroke-[2.2]" />
              <h3 className="font-heading text-base font-bold uppercase text-white">100% Virgin Resins</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Strict virgin HDPE and Polypropylene sourcing with polymer test certificates on file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
