import React from 'react';
import { Layers, Wrench, Flame, SearchCheck, CheckSquare, Truck } from 'lucide-react';

export const ManufacturingProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Virgin Resin QC",
      desc: "Inspection of raw HDPE / PP / PC granules with Melt Flow Index (MFI) & density batch tests.",
      icon: Layers
    },
    {
      num: "02",
      title: "Precision Tooling",
      desc: "Hardened steel injection moulds with balanced runner systems for uniform wall thickness.",
      icon: Wrench
    },
    {
      num: "03",
      title: "Automated Moulding",
      desc: "Computer-controlled clamp force (100T-1200T) with robotic parts extraction.",
      icon: Flame
    },
    {
      num: "04",
      title: "Load & Stress Testing",
      desc: "Drop impact tests, compression stack trials, and environmental stress crack checks.",
      icon: SearchCheck
    },
    {
      num: "05",
      title: "Finishing & Branding",
      desc: "Flash trimming, barcode labeling, hot-stamp branding, and protective shrink wrap.",
      icon: CheckSquare
    },
    {
      num: "06",
      title: "Direct B2B Dispatch",
      desc: "Palletized shrink-wrapped batches prepared for wholesale delivery or export containers.",
      icon: Truck
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
            Standardized Production Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 font-display">
            Rigorous Manufacturing From Resin To Dispatch
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Every production run follows a closed-loop quality management process ensuring zero contamination and tight dimensional repeatability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl flex flex-col justify-between hover:border-blue-500/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-blue-400 font-mono">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
