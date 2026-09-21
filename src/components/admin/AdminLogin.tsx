import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Hexagon, Lock, Mail, ArrowRight, ArrowLeft, ShieldAlert } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const { loginAdmin, setActiveView } = useCatalog();

  const [email, setEmail] = useState('admin@apexplast.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = loginAdmin(email, password);
    if (!success) {
      setError('Invalid admin credentials. Use admin@apexplast.com and admin123');
    }
  };

  const handleQuickDemoFill = () => {
    setEmail('admin@apexplast.com');
    setPassword('admin123');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[#070e17] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden text-slate-100">
      {/* Subtle industrial grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <button
          onClick={() => setActiveView('public')}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 mb-6 transition-colors cursor-pointer font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Public Product Showcase</span>
        </button>

        <div className="flex items-center justify-center gap-3">
          <div className="relative w-12 h-12 bg-slate-950 flex items-center justify-center text-amber-500 border-2 border-amber-500 shadow-xl">
            <Hexagon className="w-7 h-7 fill-amber-500/20 stroke-[2]" />
            <span className="absolute font-black text-xs text-white">AP</span>
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-white font-heading">
              APEX<span className="text-amber-500">PLAST</span>
            </span>
            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">
              PLANT INVENTORY & SPEC PORTAL
            </p>
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-black uppercase tracking-tight text-white font-heading">
          Sign In to Plant Admin Console
        </h2>
        <p className="mt-1 text-center text-xs text-slate-400">
          Manage product catalog, technical specs, and commercial RFQs
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-[#0b1523] border border-slate-800 py-8 px-6 shadow-2xl sm:px-10 space-y-5 border-t-4 border-t-amber-500">
          {error && (
            <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase font-heading text-slate-300 mb-1">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-900 text-xs text-white border border-slate-700 focus:outline-none focus:border-amber-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase font-heading text-slate-300 mb-1">
                Security Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-900 text-xs text-white border border-slate-700 focus:outline-none focus:border-amber-500 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-heading text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <span>Authenticate & Enter Console</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

          {/* Demo Shortcut */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Demo Mode Credentials</span>
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="text-amber-400 hover:text-white font-bold underline cursor-pointer"
            >
              Autofill Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
