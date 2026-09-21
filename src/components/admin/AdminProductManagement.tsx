import React, { useState, useMemo } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Product } from '../../types';
import {
  Search,
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Filter,
  Sparkles,
  Box
} from 'lucide-react';

export const AdminProductManagement: React.FC = () => {
  const {
    products,
    categories,
    deleteProduct,
    updateProduct,
    setAdminPage,
    setEditingProductId,
    navigateToProduct
  } = useCatalog();

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (categoryFilter && p.categoryId !== categoryFilter) return false;
      if (statusFilter === 'published' && !p.isPublished) return false;
      if (statusFilter === 'draft' && p.isPublished) return false;
      if (statusFilter === 'featured' && !p.isFeatured) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchCode = p.productCode?.toLowerCase().includes(q);
        const matchMat = p.material?.toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchMat) return false;
      }

      return true;
    });
  }, [products, categoryFilter, statusFilter, search]);

  const handleEdit = (id: string) => {
    setEditingProductId(id);
    setAdminPage('edit-product');
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to permanently delete "${name}" from the product catalog?`)) {
      deleteProduct(id);
    }
  };

  const togglePublish = (product: Product) => {
    updateProduct(product.id, { isPublished: !product.isPublished });
  };

  const toggleFeatured = (product: Product) => {
    updateProduct(product.id, { isFeatured: !product.isFeatured });
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Inventory & Catalog Management
          </span>
          <h1 className="text-2xl font-black text-slate-900 mt-1 font-display">
            Manage Products ({products.length})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Search, edit specifications, update high-res images, or add new plastic items.
          </p>
        </div>

        <button
          onClick={() => setAdminPage('add-product')}
          className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-3">
        <div className="relative w-full md:flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name, code, material..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 text-xs rounded-lg border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 text-xs rounded-lg border border-slate-200 focus:bg-white font-medium text-slate-700"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 text-xs rounded-lg border border-slate-200 focus:bg-white font-medium text-slate-700"
          >
            <option value="">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
            <option value="featured">Featured Only</option>
          </select>

          {(search || categoryFilter || statusFilter) && (
            <button
              onClick={() => {
                setSearch('');
                setCategoryFilter('');
                setStatusFilter('');
              }}
              className="px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr>
                <th className="p-4">Thumbnail & Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Material / Dim</th>
                <th className="p-4 text-center">Featured</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4">Created Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  const category = categories.find(c => c.id === product.categoryId);
                  const primaryImg = product.images.find(img => img.isPrimary) || product.images[0];

                  return (
                    <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200 relative">
                            {primaryImg ? (
                              <img
                                src={primaryImg.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400">
                                <Box className="w-6 h-6" />
                              </div>
                            )}
                            <span className="absolute bottom-0.5 right-0.5 bg-slate-900/80 text-white text-[9px] px-1 rounded">
                              {product.images.length}
                            </span>
                          </div>
                          <div className="max-w-xs">
                            <div className="font-bold text-slate-900 text-sm truncate">
                              {product.name}
                            </div>
                            <div className="text-slate-500 font-mono text-[11px]">
                              {product.productCode || 'NO-SKU'}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-4 font-semibold text-slate-700">
                        {category ? category.name : 'Unassigned'}
                      </td>

                      <td className="p-4 text-slate-600 max-w-xs">
                        <div className="truncate font-medium">{product.material || 'Polymer'}</div>
                        <div className="text-[11px] text-slate-400 truncate">{product.dimensions || '-'}</div>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => toggleFeatured(product)}
                          className={`p-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                            product.isFeatured
                              ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                              : 'text-slate-300 hover:text-slate-500'
                          }`}
                          title="Toggle featured showcase"
                        >
                          <Sparkles className="w-4 h-4 fill-current" />
                        </button>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => togglePublish(product)}
                          className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                            product.isPublished
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                          }`}
                          title="Click to toggle publish status"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${product.isPublished ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          <span>{product.isPublished ? 'Live' : 'Draft'}</span>
                        </button>
                      </td>

                      <td className="p-4 text-slate-500 text-[11px] whitespace-nowrap">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </td>

                      <td className="p-4 text-right space-x-1 whitespace-nowrap">
                        <button
                          onClick={() => navigateToProduct(product.slug)}
                          className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded cursor-pointer"
                          title="View on public site"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded cursor-pointer"
                          title="Edit product"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id, product.name)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-xs">
                    No products matched the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
