import React from 'react';
import { Product } from '../../types';
import { useCatalog } from '../../context/CatalogContext';
import { ArrowRight, Box, Tag, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const { categories, navigateToProduct } = useCatalog();

  const category = categories.find(c => c.id === product.categoryId);
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];

  return (
    <div
      onClick={() => navigateToProduct(product.slug)}
      className="group bg-white border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
    >
      {/* Top golden accent line on hover */}
      <div className="h-1 w-0 group-hover:w-full bg-amber-500 transition-all duration-300 absolute top-0 left-0 z-10"></div>

      {/* Product Image Frame */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
        {primaryImage ? (
          <img
            src={primaryImage.imageUrl}
            alt={primaryImage.altText || product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
            <Box className="w-12 h-12 stroke-[1.2] mb-1" />
            <span className="text-xs">No image provided</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
          {product.isFeatured ? (
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black font-heading px-2 py-0.5 tracking-wider uppercase shadow-sm">
              Featured Spec
            </span>
          ) : (
            <span></span>
          )}
          {product.productCode && (
            <span className="bg-slate-950/85 backdrop-blur-xs text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 shadow-sm border border-slate-800">
              {product.productCode}
            </span>
          )}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1">
            <span>{category ? category.name : 'Industrial Polymer'}</span>
          </div>

          {/* Product Title with Industrial Heading */}
          <h3 className="font-heading text-lg font-bold uppercase text-slate-950 group-hover:text-amber-600 transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Technical Specs Grid */}
          <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2.5">
            {product.material && (
              <div className="truncate" title={product.material}>
                <span className="font-bold text-slate-900">Resin: </span>
                <span>{product.material.replace('100% Virgin', '').trim()}</span>
              </div>
            )}
            {product.dimensions && (
              <div className="truncate" title={product.dimensions}>
                <span className="font-bold text-slate-900">Dim: </span>
                <span>{product.dimensions}</span>
              </div>
            )}
            {product.capacity && (
              <div className="truncate col-span-2" title={product.capacity}>
                <span className="font-bold text-slate-900">Capacity: </span>
                <span>{product.capacity}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Link Footer with circular arrow */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5">
            <span>Product Specifications</span>
          </span>

          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-amber-500 text-slate-700 group-hover:text-slate-950 flex items-center justify-center transition-colors">
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
