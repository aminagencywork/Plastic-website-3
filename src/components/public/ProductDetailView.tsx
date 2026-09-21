import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { ProductCard } from '../common/ProductCard';
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Send,
  MessageSquare,
  FileText,
  Layers,
  Box,
  CheckCircle,
  Truck,
  HelpCircle,
  Printer,
  Factory,
  ArrowRight
} from 'lucide-react';

export const ProductDetailView: React.FC = () => {
  const {
    products,
    categories,
    selectedProductSlug,
    setPublicPage,
    setSelectedProductSlug,
    setQuickEnquiryProduct,
    companyInfo
  } = useCatalog();

  const product = products.find(p => p.slug === selectedProductSlug) || products[0];
  const category = categories.find(c => c.id === product?.categoryId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="font-heading text-2xl font-bold uppercase text-slate-900">Product Not Found</h2>
        <button
          onClick={() => {
            setSelectedProductSlug(null);
            setPublicPage('products');
          }}
          className="mt-4 px-6 py-3 bg-amber-500 text-slate-950 font-heading font-bold uppercase tracking-wider cursor-pointer"
        >
          Return to Product Catalog
        </button>
      </div>
    );
  }

  const currentImage = product.images[activeImageIndex] || product.images[0];
  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id && p.isPublished)
    .slice(0, 3);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello ApexPlast Sales,\n\nI am viewing your website product catalog and would like to enquire about:\n*Product:* ${product.name}\n*Code:* ${product.productCode}\n*Material:* ${product.material}\n\nPlease share price sheet, bulk MOQ and delivery timeline.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handlePrintSpecs = () => {
    window.print();
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-bold font-heading uppercase tracking-wider text-slate-500">
          <button
            onClick={() => {
              setSelectedProductSlug(null);
              setPublicPage('home');
            }}
            className="hover:text-amber-600 transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => {
              setSelectedProductSlug(null);
              setPublicPage('products');
            }}
            className="hover:text-amber-600 transition-colors cursor-pointer"
          >
            Products Catalog
          </button>
          {category && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-700 truncate max-w-xs">{category.name}</span>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-amber-600 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Stage */}
        <div className="bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* LEFT: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main large display photo */}
              <div className="relative aspect-4/3 bg-slate-900 overflow-hidden border border-slate-200">
                {currentImage ? (
                  <img
                    src={currentImage.imageUrl}
                    alt={currentImage.altText || product.name}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <Box className="w-16 h-16 stroke-[1.2]" />
                    <span className="text-xs mt-2">No photo available</span>
                  </div>
                )}

                {product.isFeatured && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-black font-heading uppercase px-3 py-1 tracking-wider shadow-sm">
                    Featured Spec
                  </span>
                )}

                {product.productCode && (
                  <span className="absolute top-4 right-4 bg-slate-950/90 text-amber-400 text-xs font-mono font-bold px-3 py-1 shadow-sm border border-slate-800">
                    {product.productCode}
                  </span>
                )}
              </div>

              {/* Thumbnails strip */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={img.id || idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-amber-500 shadow-sm'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.imageUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quality Guarantee Box */}
              <div className="p-5 bg-slate-50 border-l-4 border-amber-500 text-xs text-slate-700 space-y-2">
                <div className="font-heading font-bold uppercase text-slate-950 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 Manufacturing Standard</span>
                </div>
                <p className="leading-relaxed text-slate-600 text-[11px]">
                  Produced under computer-monitored cycle parameters. Guaranteed 100% prime virgin polymer resin without degraded regrind impurities. Certificate of Analysis (COA) supplied with each production lot.
                </p>
              </div>
            </div>

            {/* RIGHT: Product Details & Specifications */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Part Number */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-heading font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 border border-amber-200">
                    {category?.name || 'Industrial Plastics'}
                  </span>
                  {product.productCode && (
                    <span className="text-slate-500 font-mono text-xs">
                      Part Code: <strong className="text-slate-950">{product.productCode}</strong>
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="text-2xl sm:text-4xl font-black uppercase text-slate-950 mt-3 font-heading leading-tight tracking-tight">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Technical Specifications Table */}
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading mb-3 flex items-center justify-between">
                    <span>Technical Specifications</span>
                    <button
                      onClick={handlePrintSpecs}
                      className="text-amber-600 hover:text-slate-950 flex items-center gap-1 cursor-pointer font-sans normal-case text-[11px]"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Spec Sheet</span>
                    </button>
                  </h3>

                  <div className="divide-y divide-slate-200 border border-slate-200 text-xs">
                    {product.material && (
                      <div className="grid grid-cols-3 p-3 bg-white">
                        <span className="font-bold text-slate-500 font-heading uppercase">Resin Material</span>
                        <span className="col-span-2 font-medium text-slate-950">{product.material}</span>
                      </div>
                    )}
                    {product.dimensions && (
                      <div className="grid grid-cols-3 p-3 bg-slate-50">
                        <span className="font-bold text-slate-500 font-heading uppercase">Dimensions</span>
                        <span className="col-span-2 font-medium text-slate-950">{product.dimensions}</span>
                      </div>
                    )}
                    {product.weight && (
                      <div className="grid grid-cols-3 p-3 bg-white">
                        <span className="font-bold text-slate-500 font-heading uppercase">Tare Weight</span>
                        <span className="col-span-2 font-medium text-slate-950">{product.weight}</span>
                      </div>
                    )}
                    {product.capacity && (
                      <div className="grid grid-cols-3 p-3 bg-slate-50">
                        <span className="font-bold text-slate-500 font-heading uppercase">Load Capacity</span>
                        <span className="col-span-2 font-medium text-slate-950">{product.capacity}</span>
                      </div>
                    )}
                    {product.color && (
                      <div className="grid grid-cols-3 p-3 bg-white">
                        <span className="font-bold text-slate-500 font-heading uppercase">Standard Colors</span>
                        <span className="col-span-2 font-medium text-slate-950">{product.color}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-3 p-3 bg-slate-50">
                      <span className="font-bold text-slate-500 font-heading uppercase">Custom Options</span>
                      <span className="col-span-2 font-medium text-slate-950">
                        Hot-stamped company logo, barcode labels, RFID tags, custom masterbatch
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setQuickEnquiryProduct(product)}
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-base font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>Request Quotation</span>
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-4 bg-[#0b1523] hover:bg-slate-800 text-white font-heading text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>WhatsApp Sales Desk</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 font-mono">
                  <span>MOQ: 100 - 500 UNITS (VARIES BY MODEL)</span>
                  <span className="text-emerald-600 font-bold">READY MOULD RUN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <div className="pt-8">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-heading">
                  Complementary Specifications
                </span>
                <h3 className="text-2xl font-black uppercase text-slate-950 font-heading tracking-tight">
                  Related Products In This Line
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedProductSlug(null);
                  setPublicPage('products');
                }}
                className="text-xs font-bold uppercase text-slate-900 hover:text-amber-600 flex items-center gap-1 font-heading"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onEnquire={(prod) => setQuickEnquiryProduct(prod)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
