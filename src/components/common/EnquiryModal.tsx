import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { X, Send, MessageSquare, CheckCircle2, Building, Phone, Mail, User, Layers } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const { quickEnquiryProduct, setQuickEnquiryProduct, submitEnquiry, companyInfo } = useCatalog();

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!quickEnquiryProduct) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    submitEnquiry({
      name,
      companyName,
      email,
      phone,
      productId: quickEnquiryProduct.id,
      productName: quickEnquiryProduct.name,
      productCode: quickEnquiryProduct.productCode,
      quantity: quantity || 'Standard Bulk Inquiry',
      message: message || `We are interested in receiving formal pricing, minimum order batch specifications, and freight estimates for ${quickEnquiryProduct.name} (${quickEnquiryProduct.productCode}).`
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuickEnquiryProduct(null);
    }, 2800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ApexPlast Sales Team,\n\nI am contacting from ${companyName || 'our company'}.\nI would like to enquire about:\n*Product:* ${quickEnquiryProduct.name}\n*Product Code:* ${quickEnquiryProduct.productCode}\n*Estimated Requirement:* ${quantity || 'Bulk'}\n*My Name:* ${name || 'Prospective Buyer'}\n*Phone/Email:* ${phone || ''} / ${email || ''}\n\nPlease share catalog specs and quotation.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white shadow-2xl border-2 border-amber-500 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0b1523] px-6 py-5 text-white flex justify-between items-start border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
              B2B Commercial RFQ Desk
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight text-white font-heading truncate max-w-sm mt-0.5">
              {quickEnquiryProduct.name}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              CODE: {quickEnquiryProduct.productCode || 'N/A'} | {quickEnquiryProduct.material}
            </p>
          </div>
          <button
            onClick={() => setQuickEnquiryProduct(null)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="font-heading text-2xl font-black uppercase text-slate-950">
              Commercial RFQ Received
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our manufacturing sales engineering desk has logged your RFQ for <strong>{quickEnquiryProduct.name}</strong>. We will reply within 4 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Miller"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Global Freight Ltd"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                  Corporate Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. buyer@company.com"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                  Direct Phone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555-0192"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                Estimated Order Quantity / Lot Size
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 500 units, or 1 x 40ft High Cube Container"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase font-heading text-slate-800 mb-1">
                Specific Customization or Delivery Instructions
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Include custom color, logo embossing, drop-test requirements or destination port..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Submit Quotation Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="py-3 px-4 bg-[#0b1523] hover:bg-slate-800 text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
