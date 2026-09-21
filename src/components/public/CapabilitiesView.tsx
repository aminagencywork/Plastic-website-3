import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Factory, Cpu, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const CapabilitiesView: React.FC = () => {
  const { setPublicPage } = useCatalog();

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Capabilities Header */}
        <div className="bg-[#0b1523] text-white p-8 sm:p-14 border-l-8 border-amber-500 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 font-heading">
              Manufacturing Infrastructure & Machinery
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 font-heading tracking-tight leading-none">
              High-Tonnage Production & Precision Tooling Fleet
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              We process over 14,500 metric tonnes of polymer annually using advanced injection moulding, extrusion blow moulding, and continuous robotic automation.
            </p>
          </div>
        </div>

        {/* Machinery Specs Table */}
        <div className="bg-white p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-black uppercase text-slate-950 font-heading">
                Plant Machinery Fleet
              </h2>
              <p className="text-xs text-slate-500">
                Operating 38 synchronized lines across 3 work shifts.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-3 py-1 border border-amber-300">
              100% OPERATIONAL AVAILABILITY
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#0b1523] text-white font-heading font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th className="p-3.5">Machine Category</th>
                  <th className="p-3.5">Tonnage / Capacity</th>
                  <th className="p-3.5">Key Product Output</th>
                  <th className="p-3.5">Resins Processed</th>
                  <th className="p-3.5">Units in Fleet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr className="hover:bg-amber-50/50">
                  <td className="p-3.5 font-bold text-slate-950 font-heading uppercase text-sm">Heavy-Duty Injection Lines</td>
                  <td className="p-3.5 text-amber-600 font-bold font-mono">650T – 1200T</td>
                  <td className="p-3.5">Euro crates, industrial pallets, chemical tubs</td>
                  <td className="p-3.5">HDPE, PP Copolymer</td>
                  <td className="p-3.5 font-bold font-mono text-slate-900">12 Units</td>
                </tr>
                <tr className="hover:bg-amber-50/50">
                  <td className="p-3.5 font-bold text-slate-950 font-heading uppercase text-sm">Mid-Tonnage Precision Presses</td>
                  <td className="p-3.5 text-amber-600 font-bold font-mono">250T – 500T</td>
                  <td className="p-3.5">Industrial pails, storage boxes, battery casings</td>
                  <td className="p-3.5">PP, ABS, HDPE</td>
                  <td className="p-3.5 font-bold font-mono text-slate-900">14 Units</td>
                </tr>
                <tr className="hover:bg-amber-50/50">
                  <td className="p-3.5 font-bold text-slate-950 font-heading uppercase text-sm">High-Speed Technical Presses</td>
                  <td className="p-3.5 text-amber-600 font-bold font-mono">100T – 200T</td>
                  <td className="p-3.5">Electrical enclosures, threaded closures, gears</td>
                  <td className="p-3.5">PC/ABS, PA6 (Nylon), POM</td>
                  <td className="p-3.5 font-bold font-mono text-slate-900">6 Units</td>
                </tr>
                <tr className="hover:bg-amber-50/50">
                  <td className="p-3.5 font-bold text-slate-950 font-heading uppercase text-sm">Extrusion Blow Moulding</td>
                  <td className="p-3.5 text-amber-600 font-bold font-mono">5L to 210L</td>
                  <td className="p-3.5">Jerry cans, chemical drums, barrels</td>
                  <td className="p-3.5">HMW-HDPE</td>
                  <td className="p-3.5 font-bold font-mono text-slate-900">6 Units</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality Lab & Inspection Testing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-slate-200 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-slate-950 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-heading text-xl font-black uppercase text-slate-950">
              In-House Quality Control Lab
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with calibrated computerized test rigs for continuous monitoring:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>ASTM D1238 Melt Flow Index (MFI) Plastometer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Drop tower impact tester (up to 3-meter height for UN hazardous tests)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Hydraulic top-load compression tester (up to 5,000 kgf)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Environmental Stress Crack Resistance (ESCR) chemical bath</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-xl space-y-4">
            <div className="w-12 h-12 bg-slate-950 text-amber-400 flex items-center justify-center">
              <Wrench className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-heading text-xl font-black uppercase text-slate-950">
              CNC Tool Room & Mould Fabrication
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full turnaround capability from CAD product concepts to hardened production dies:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>3D Mould flow simulation & gate location optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Sub-micron high-speed CNC machining centers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Mitsubishi wire-cut EDM and sinker erosion</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Weekly preventative mould maintenance and core polishing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-amber-500 text-slate-950 p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-950">
              Need Custom Injection Moulding or Technical Batch Run?
            </h3>
            <p className="text-xs sm:text-sm text-slate-950/90 mt-1">
              Talk directly with our tooling department to review step files, cycle times, and tooling costs.
            </p>
          </div>
          <button
            onClick={() => {
              setPublicPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-7 py-4 bg-[#0b1523] hover:bg-slate-900 text-white font-heading text-sm font-black uppercase tracking-wider flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
