import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  Package,
  FolderTree,
  PlusCircle,
  Inbox,
  Eye,
  Edit,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    categories,
    enquiries,
    setAdminPage,
    setEditingProductId,
    navigateToProduct,
    setActiveView
  } = useCatalog();

  const publishedCount = products.filter(p => p.isPublished).length;
  const draftCount = products.length - publishedCount;
  const recentProducts = [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);

  const handleEditProduct = (id: string) => {
    setEditingProductId(id);
    setAdminPage('edit-product');
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 border-l-4 border-amber-500 shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-heading">
            ApexPlast Plant Management Console
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 font-heading mt-1">
            Plant Catalog & Operations Overview
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage your industrial mould portfolio, resin specs, tare weights, and incoming commercial RFQ leads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdminPage('add-product')}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 stroke-[2.5]" />
            <span>Upload New Specification</span>
          </button>
          <button
            onClick={() => setActiveView('public')}
            className="px-4 py-2.5 bg-[#0b1523] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>View Public Showcase</span>
          </button>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
              Total Specifications
            </div>
            <div className="text-3xl font-black text-slate-950 mt-1 font-heading">
              {products.length}
            </div>
            <div className="text-[11px] text-emerald-600 font-bold mt-1">
              {publishedCount} Published ({draftCount} Drafts)
            </div>
          </div>
          <div className="w-12 h-12 bg-slate-100 text-slate-800 flex items-center justify-center">
            <Package className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
              Product Categories
            </div>
            <div className="text-3xl font-black text-slate-950 mt-1 font-heading">
              {categories.length}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Active polymer lines
            </div>
          </div>
          <div className="w-12 h-12 bg-slate-100 text-slate-800 flex items-center justify-center">
            <FolderTree className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
              Commercial RFQs
            </div>
            <div className="text-3xl font-black text-slate-950 mt-1 font-heading">
              {enquiries.length}
            </div>
            <div className="text-[11px] text-amber-600 font-bold mt-1">
              {enquiries.filter(e => e.status === 'new').length} Pending Response
            </div>
          </div>
          <div className="w-12 h-12 bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
            <Inbox className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
              Facility Tonnage
            </div>
            <div className="text-3xl font-black text-slate-950 mt-1 font-heading">
              1,200T
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Max single-shot press
            </div>
          </div>
          <div className="w-12 h-12 bg-slate-100 text-slate-800 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 stroke-[2]" />
          </div>
        </div>
      </div>

      {/* Recent Products Table */}
      <div className="bg-white border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black uppercase text-slate-950 font-heading">
              Active Production Portfolio
            </h2>
            <p className="text-xs text-slate-500">
              Latest items managed in the industrial catalog
            </p>
          </div>
          <button
            onClick={() => setAdminPage('products')}
            className="text-xs font-bold uppercase font-heading text-amber-600 hover:text-slate-950 flex items-center gap-1 cursor-pointer"
          >
            <span>Manage All Items</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {recentProducts.map((product) => {
            const cat = categories.find(c => c.id === product.categoryId);
            return (
              <div
                key={product.id}
                className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 border border-slate-200 shrink-0 overflow-hidden">
                    {product.images[0] ? (
                      <img
                        src={product.images[0].imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xs">
                        AP
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-600">
                        {product.productCode}
                      </span>
                      {product.isFeatured && (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2 uppercase">
                          Featured
                        </span>
                      )}
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 uppercase ${
                        product.isPublished ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {product.isPublished ? 'Live' : 'Draft'}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold uppercase text-slate-950">
                      {product.name}
                    </h3>
                    <div className="text-xs text-slate-500 flex items-center gap-3 mt-0.5">
                      <span>{cat?.name || 'General'}</span>
                      <span>•</span>
                      <span>{product.material}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => handleEditProduct(product.id)}
                    className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-200 transition-colors cursor-pointer"
                    title="Edit Product"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateToProduct(product.slug)}
                    className="p-2 text-slate-600 hover:text-amber-600 hover:bg-slate-200 transition-colors cursor-pointer"
                    title="View on Live Site"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
