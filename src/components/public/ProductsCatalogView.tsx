import React, { useMemo } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { ProductCard } from '../common/ProductCard';
import { Search, Filter, Box, X, ChevronRight, Layers, ArrowRight } from 'lucide-react';

export const ProductsCatalogView: React.FC = () => {
  const {
    products,
    categories,
    activeCategoryFilter,
    setActiveCategoryFilter,
    searchQuery,
    setSearchQuery,
    setQuickEnquiryProduct,
    setPublicPage
  } = useCatalog();

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (!product.isPublished) return false;

      if (activeCategoryFilter && product.categoryId !== activeCategoryFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCode = product.productCode?.toLowerCase().includes(q);
        const matchDesc = product.shortDescription?.toLowerCase().includes(q);
        const matchMat = product.material?.toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchDesc && !matchMat) return false;
      }

      return true;
    });
  }, [products, activeCategoryFilter, searchQuery]);

  const activeCategoryObj = categories.find((c) => c.id === activeCategoryFilter);

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Catalog Banner Header */}
        <div className="bg-[#0b1523] text-white p-8 sm:p-12 border-l-8 border-amber-500 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 font-heading">
              B2B Standard Production & Custom Tooling Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2 font-heading tracking-tight leading-none">
              Industrial Polymer Products Catalog
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              Explore heavy-duty logistics crates, UN-certified chemical barrels, intermediate liquid containers, and high-tolerance engineered components. All products are manufactured using 100% certified virgin polymer resins.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center gap-4 relative z-10">
            <div className="relative w-full md:flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog by name, code (e.g. AP-EC), material resin, or size..."
                className="w-full pl-11 pr-10 py-3 bg-slate-900 text-sm text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:border-amber-500 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-amber-400 font-mono font-semibold whitespace-nowrap self-start md:self-center">
              ACTIVE SPECIFICATIONS: <span className="text-white font-bold">{filteredProducts.length}</span> / {products.length}
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategoryFilter(null)}
            className={`px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
              activeCategoryFilter === null
                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                : 'bg-white text-slate-800 border-slate-300 hover:border-amber-500 hover:bg-slate-50'
            }`}
          >
            All Categories ({products.filter(p => p.isPublished).length})
          </button>

          {categories.map((cat) => {
            const count = products.filter(p => p.categoryId === cat.id && p.isPublished).length;
            const isSelected = activeCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-amber-500 hover:bg-slate-50'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-slate-950 text-amber-400' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Notice Banner if filtered */}
        {activeCategoryObj && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-heading font-bold uppercase text-amber-900 tracking-wider">
                Category Filter: {activeCategoryObj.name}
              </span>
              <p className="text-slate-700 mt-0.5">{activeCategoryObj.description}</p>
            </div>
            <button
              onClick={() => setActiveCategoryFilter(null)}
              className="text-amber-800 hover:text-slate-950 font-bold underline cursor-pointer self-start sm:self-auto"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(prod) => setQuickEnquiryProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Box className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase text-slate-900">
              No matching products found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". We also manufacture custom OEM moulds tailored to your exact drawings.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryFilter(null);
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-heading text-xs font-bold uppercase tracking-wider"
              >
                Reset Search Filters
              </button>
              <button
                onClick={() => {
                  setPublicPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-xs font-bold uppercase tracking-wider"
              >
                Inquire Custom Mould
              </button>
            </div>
          </div>
        )}

        {/* Bottom Custom Tooling / OEM Advisory Box */}
        <div className="bg-[#0b1523] text-white p-8 border-t-4 border-amber-500 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase text-amber-400 font-heading tracking-widest">
              Need Non-Standard Dimensions Or Bespoke Tooling?
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
              Custom Injection Moulding & Masterbatch Coloring
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl">
              We design and machine custom injection moulds in our CNC EDM toolroom. Hot-stamping, in-mould labeling, and custom Pantone color compounding available.
            </p>
          </div>

          <button
            onClick={() => {
              setPublicPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-sm font-black uppercase tracking-wider flex items-center gap-2 shrink-0 transition-colors cursor-pointer"
          >
            <span>Request Custom OEM Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
