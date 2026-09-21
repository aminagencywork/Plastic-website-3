import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Building,
  User,
  PackageCheck,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { companyInfo, products, submitEnquiry } = useCatalog();

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProductCode, setSelectedProductCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const matchedProduct = products.find(p => p.productCode === selectedProductCode);

    submitEnquiry({
      name,
      companyName,
      email,
      phone,
      productId: matchedProduct?.id,
      productName: matchedProduct?.name || 'General Inquiry / Custom Moulding',
      productCode: selectedProductCode || 'GEN-RFQ',
      quantity: quantity || 'Standard Bulk Inquiry',
      message: message || 'Interested in receiving quotation and technical product catalog.'
    });

    setSubmitted(true);
    setName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setSelectedProductCode('');
    setQuantity('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleWhatsAppSales = () => {
    const text = encodeURIComponent(
      `Hello ApexPlast Manufacturing,\n\nI am contacting your sales team for a commercial enquiry.\nPlease connect me with an industrial account manager.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-[#0b1523] text-white p-8 sm:p-14 border-l-8 border-amber-500 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 font-heading">
              B2B Sales, RFQ & OEM Mould Procurement Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 font-heading tracking-tight leading-none">
              Contact Our Polymer Engineering Team
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Whether you require recurring truckload supplies of standard Euro crates, UN chemical packaging, or custom tooling for a new industrial part, our technical sales desk is here to assist you.
            </p>
          </div>
        </div>

        {/* Split: Contact Details (Left) & B2B Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Factory Plant & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
              <h2 className="text-xl font-black uppercase text-slate-950 font-heading border-b border-slate-100 pb-3">
                Headquarters & Production Plant
              </h2>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase text-slate-900 text-xs">Plant Facility Address</div>
                    <div className="text-slate-600 mt-0.5 leading-relaxed">{companyInfo.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase text-slate-900 text-xs">Direct Telephone Lines</div>
                    <div className="text-slate-600 mt-0.5">{companyInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase text-slate-900 text-xs">Commercial Quotes & RFQ</div>
                    <div className="text-slate-600 mt-0.5">{companyInfo.salesEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold uppercase text-slate-900 text-xs">Plant Operations Schedule</div>
                    <div className="text-slate-600 mt-0.5">{companyInfo.businessHours}</div>
                    <div className="text-amber-700 font-mono text-[11px] font-bold mt-0.5">Manufacturing floor runs 24/7</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppSales}
                  className="w-full py-3.5 bg-[#0b1523] hover:bg-slate-800 text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Direct WhatsApp RFQ Desk</span>
                </button>
              </div>
            </div>

            {/* Procurement Policy Box */}
            <div className="bg-[#0b1523] text-white p-6 border-l-4 border-amber-500 shadow-xl space-y-3">
              <h3 className="font-heading font-bold uppercase text-sm text-white">
                Commercial Terms & MOQ Notice
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                As a primary manufacturer, standard catalog products have tiered minimum order quantities (MOQs). Custom tooling projects require initial CAD review followed by tooling quotation within 48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Commercial RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-heading">
                  Submit Official Request For Quotation
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading mt-1">
                  B2B Commercial RFQ Form
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements below. Our commercial sales engineer will reply within 4 business hours with official specifications and pricing.
                </p>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900 text-xs font-medium space-y-1">
                  <div className="font-bold font-heading uppercase text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>RFQ Transmitted Successfully!</span>
                  </div>
                  <p>Our sales engineering desk has logged your request and will contact you promptly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Logistics Corp"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. purchasing@acme.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                      Product Of Interest
                    </label>
                    <select
                      value={selectedProductCode}
                      onChange={(e) => setSelectedProductCode(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    >
                      <option value="">-- Select Product Specification --</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.productCode}>
                          {p.productCode} - {p.name}
                        </option>
                      ))}
                      <option value="CUSTOM-MOULD">Custom Tooling / OEM Part</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                      Estimated Volume / Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500 units / month"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                    Technical Specifications or Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Include resin grade requirements, drop test specifications, delivery location, or custom colors..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-base font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Transmit Commercial RFQ</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
