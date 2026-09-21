import React from 'react';
import { Category } from '../../types';
import { useCatalog } from '../../context/CatalogContext';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { setActiveCategoryFilter, setPublicPage, setSelectedProductSlug, products } = useCatalog();

  const count = products.filter(p => p.categoryId === category.id).length;

  const handleClick = () => {
    setActiveCategoryFilter(category.id);
    setSelectedProductSlug(null);
    setPublicPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col relative"
    >
      {/* Top golden indicator line */}
      <div className="h-1 w-0 group-hover:w-full bg-amber-500 transition-all duration-300 absolute top-0 left-0 z-10"></div>

      <div className="relative h-48 bg-slate-900 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-[#070e17]/40 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
          <span className="bg-amber-500 text-slate-950 text-[10px] font-black font-heading uppercase px-2.5 py-1 tracking-wider shadow-sm">
            {count} Product Lines
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-lg font-bold uppercase text-slate-950 group-hover:text-amber-600 transition-colors leading-tight">
            {category.name}
          </h3>
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600">
            View Category Line
          </span>
          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-amber-500 text-slate-700 group-hover:text-slate-950 flex items-center justify-center transition-colors">
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
