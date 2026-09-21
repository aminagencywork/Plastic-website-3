import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Award, Package, Cpu, Building2, Users, CheckCircle2, Factory, Globe2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { companyInfo, products } = useCatalog();

  const metrics = [
    {
      value: "2,318",
      label: "Qualified Engineers & Operators",
      sublabel: "Specialized in High-Tolerance Polymer Tooling",
      icon: Users
    },
    {
      value: "6,154",
      label: "Production Runs Completed",
      sublabel: "Zero Defect Quality Assurance Enforced",
      icon: CheckCircle2
    },
    {
      value: "9,784",
      label: "Industrial Clients Globally",
      sublabel: "Supplying Automotive, Chem & Logistics",
      icon: Globe2
    },
    {
      value: `${companyInfo.experienceYears}+`,
      label: "Years Of Polymer Excellence",
      sublabel: "Continuous Plant Innovation Since 2008",
      icon: Factory
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-4xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight group-hover:text-amber-500 transition-colors">
                      {m.value}
                    </div>
                    <div className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>
                  <div className="h-1 w-12 bg-amber-500 mb-3"></div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                    {m.label}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {m.sublabel}
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
