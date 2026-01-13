
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TabType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-background-light dark:bg-background-dark shadow-xl overflow-x-hidden">
      <div className="flex-1">
        {children}
      </div>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[480px] bg-white/90 dark:bg-[#1a1c22]/90 backdrop-blur-xl border-t border-black/5 dark:border-white/5 px-6 pb-8 pt-3 flex justify-between items-center">
        <Link to="/" className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary' : 'text-slate-blue dark:text-gray-400'}`}>
          <span className={`material-symbols-outlined ${activeTab === 'home' ? 'font-variation-fill' : ''}`}>grid_view</span>
          <span className="text-[10px] font-bold">Início</span>
        </Link>
        
        <Link to="/talhoes" className={`flex flex-col items-center gap-1 ${activeTab === 'talhoes' ? 'text-primary' : 'text-slate-blue dark:text-gray-400'}`}>
          <span className={`material-symbols-outlined ${activeTab === 'talhoes' ? 'font-variation-fill' : ''}`}>layers</span>
          <span className="text-[10px] font-bold">Talhões</span>
        </Link>
        
        <div className="relative -top-8">
          <button className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
          </button>
        </div>
        
        <Link to="/tarefas" className={`flex flex-col items-center gap-1 ${activeTab === 'tarefas' ? 'text-primary' : 'text-slate-blue dark:text-gray-400'}`}>
          <span className={`material-symbols-outlined ${activeTab === 'tarefas' ? 'font-variation-fill' : ''}`}>assignment</span>
          <span className="text-[10px] font-bold">Tarefas</span>
        </Link>
        
        <button className="flex flex-col items-center gap-1 text-slate-blue dark:text-gray-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold">Ajustes</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
