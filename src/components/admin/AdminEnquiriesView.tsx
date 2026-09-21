import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  Inbox,
  Mail,
  Phone,
  Building,
  Calendar,
  Package,
  MessageSquare,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

export const AdminEnquiriesView: React.FC = () => {
  const { enquiries, markEnquiryStatus, companyInfo } = useCatalog();

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Lead Generation & Commercial Inquiries
          </span>
          <h1 className="text-2xl font-black text-slate-900 mt-1 font-display">
            Customer RFQs & Inquiries ({enquiries.length})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Incoming product quotation requests submitted through the public website.
          </p>
        </div>
      </div>

      {/* Enquiries Cards List */}
      <div className="space-y-4">
        {enquiries.length > 0 ? (
          enquiries.map((enq) => (
            <div
              key={enq.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                    {enq.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {enq.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        {enq.companyName}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {new Date(enq.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status selector */}
                <div className="flex items-center gap-2">
                  <select
                    value={enq.status}
                    onChange={(e) =>
                      markEnquiryStatus(enq.id, e.target.value as 'new' | 'contacted' | 'resolved')
                    }
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg border cursor-pointer ${
                      enq.status === 'new'
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : enq.status === 'contacted'
                        ? 'bg-blue-50 text-blue-800 border-blue-300'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    }`}
                  >
                    <option value="new">● New RFQ</option>
                    <option value="contacted">● Contacted</option>
                    <option value="resolved">● Quotation Sent</option>
                  </select>
                </div>
              </div>

              {/* Product and Quantity Spec */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5 font-medium">Inquired Product:</span>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-blue-600" />
                    <span>{enq.productName || 'General Custom Tooling'}</span>
                    {enq.productCode && (
                      <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.2 rounded text-slate-700">
                        {enq.productCode}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5 font-medium">Estimated Batch Volume:</span>
                  <div className="font-bold text-slate-900">
                    {enq.quantity || 'Standard Bulk Requirement'}
                  </div>
                </div>
              </div>

              {/* Message Note */}
              <div className="text-xs text-slate-700 leading-relaxed bg-white p-2">
                <span className="font-bold text-slate-900 block mb-1">Customer Note:</span>
                <p className="whitespace-pre-line text-slate-600 italic">
                  &ldquo;{enq.message}&rdquo;
                </p>
              </div>

              {/* Contact Actions */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-slate-600">
                  <a
                    href={`mailto:${enq.email}`}
                    className="flex items-center gap-1 text-blue-700 font-semibold hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{enq.email}</span>
                  </a>
                  <a
                    href={`tel:${enq.phone}`}
                    className="flex items-center gap-1 text-slate-700 font-semibold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{enq.phone}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Customer</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-2 stroke-[1.2]" />
            <h3 className="font-bold text-slate-900">No Inquiries Yet</h3>
            <p className="text-xs text-slate-500">
              When prospective buyers submit inquiry forms from product pages, they will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
