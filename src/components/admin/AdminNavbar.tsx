import React from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  Hexagon,
  LayoutDashboard,
  Package,
  PlusCircle,
  FolderTree,
  Inbox,
  LogOut,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export const AdminNavbar: React.FC = () => {
  const {
    adminPage,
    setAdminPage,
    setActiveView,
    logoutAdmin,
    resetToDefaults,
    products,
    enquiries
  } = useCatalog();

  const handleResetData = () => {
    if (window.confirm('Reset all products and categories back to factory demo defaults?')) {
      resetToDefaults();
    }
  };

  return (
    <header className="bg-[#0b1523] text-white border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo and Admin Badge */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 bg-slate-950 flex items-center justify-center text-amber-500 border border-amber-500">
              <Hexagon className="w-5 h-5 fill-amber-500/20 stroke-[2]" />
              <span className="absolute font-black text-[10px] text-white">AP</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight font-heading">
                  APEX<span className="text-amber-500">PLAST</span>
                </span>
                <span className="bg-amber-500/10 text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 border border-amber-500/30 uppercase">
                  PLANT ADMIN CONSOLE
                </span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-bold font-heading uppercase tracking-wider">
            <button
              onClick={() => setAdminPage('dashboard')}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                adminPage === 'dashboard'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setAdminPage('products')}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                adminPage === 'products'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products ({products.length})</span>
            </button>

            <button
              onClick={() => setAdminPage('add-product')}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                adminPage === 'add-product'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <PlusCircle className="w-4 h-4 text-emerald-400" />
              <span>Add Product</span>
            </button>

            <button
              onClick={() => setAdminPage('categories')}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                adminPage === 'categories'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FolderTree className="w-4 h-4" />
              <span>Categories</span>
            </button>

            <button
              onClick={() => setAdminPage('enquiries')}
              className={`px-3 py-2 transition-colors flex items-center gap-1.5 cursor-pointer relative ${
                adminPage === 'enquiries'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>RFQs</span>
              {enquiries.filter(e => e.status === 'new').length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-full">
                  {enquiries.filter(e => e.status === 'new').length}
                </span>
              )}
            </button>
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetData}
              title="Reset Sample Data"
              className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveView('public')}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold font-heading uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">View Public Website</span>
            </button>

            <button
              onClick={logoutAdmin}
              title="Sign Out"
              className="p-2 text-rose-400 hover:text-rose-300 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
