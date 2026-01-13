
import React from 'react';
import Layout from './Layout';
import { MOCK_FIELDS, IMAGES } from '../constants';
import { Field } from '../types';

const FieldCard: React.FC<{ field: Field }> = ({ field }) => {
  const healthColor = field.health === 'excelente' ? 'bg-green-500' : field.health === 'atencao' ? 'bg-amber-500' : 'bg-red-500';
  const healthText = field.health === 'excelente' ? 'Saúde: Excelente' : field.health === 'atencao' ? 'Saúde: Atenção' : 'Saúde: Crítica';
  const healthTextColor = field.health === 'excelente' ? 'text-green-700 dark:text-green-400' : field.health === 'atencao' ? 'text-amber-700 dark:text-amber-400' : 'text-red-700 dark:text-red-400';

  return (
    <div className="group flex flex-col items-stretch justify-start rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-[#2a2e37]">
      <div className="relative w-full bg-center bg-no-repeat aspect-[21/9] bg-cover" style={{backgroundImage: `url("${field.imageUrl}")`}}>
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full ${healthColor}`}></span>
          <span className={`text-[10px] font-bold uppercase ${healthTextColor}`}>{healthText}</span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 p-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-[#121715] dark:text-white text-lg font-bold leading-none">{field.name}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{field.crop} • {field.season}</p>
          </div>
          <div className={`flex items-center gap-1 ${field.irrigationActive ? 'text-primary' : 'text-gray-300'}`}>
            <span className="material-symbols-outlined text-lg">opacity</span>
            <span className="text-[10px] font-bold uppercase">{field.irrigationActive ? 'Irrigação Ativa' : 'Irrigação Off'}</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
            <span>Estágio: Floração</span>
            <span>{field.progress}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <div className={`h-full rounded-full ${field.health === 'excelente' ? 'bg-primary' : 'bg-amber-500'}`} style={{width: `${field.progress}%`}}></div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-50 dark:border-gray-800">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase">Solo</span>
              <span className={`text-xs font-bold ${field.soilStatus === 'Seco' ? 'text-amber-600' : 'text-primary'}`}>{field.soilStatus}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase">Clima</span>
              <span className="text-xs font-bold">{field.weather}</span>
            </div>
          </div>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary/10 text-primary text-xs font-bold transition-all hover:bg-primary hover:text-white">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

const Monitoring: React.FC = () => {
  return (
    <Layout activeTab="talhoes">
      <header className="sticky top-0 z-20 flex items-center bg-background-light dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex size-10 shrink-0 items-center">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style={{backgroundImage: `url("${IMAGES.profile}")`}}></div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#121715] dark:text-white text-base font-bold leading-tight tracking-tight">Monitoramento</h1>
          <p className="text-[10px] text-primary font-medium uppercase tracking-widest">AgriConnect</p>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">tune</span>
          </button>
        </div>
      </header>

      <main className="flex-1 pb-32">
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#2a2e37]">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Talhões Ativos</p>
            <div className="flex items-center gap-2">
              <p className="text-primary tracking-tight text-2xl font-bold leading-tight">12</p>
              <span className="material-symbols-outlined text-primary text-sm">agriculture</span>
            </div>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#2a2e37]">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Em Alerta</p>
            <div className="flex items-center gap-2">
              <p className="text-amber-500 tracking-tight text-2xl font-bold leading-tight">02</p>
              <span className="material-symbols-outlined text-amber-500 text-sm">warning</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 pt-2">
          <h3 className="text-[#121715] dark:text-white text-lg font-bold leading-tight tracking-tight">Suas Lavouras</h3>
          <span className="text-xs text-gray-400">Atualizado: 5m atrás</span>
        </div>

        <div className="space-y-4 p-4">
          {MOCK_FIELDS.map((field) => (
            <FieldCard key={field.id} field={field as any} />
          ))}
        </div>
      </main>
      <button className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 active:scale-95 transition-transform z-30">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </Layout>
  );
};

export default Monitoring;
