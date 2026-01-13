
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { getAgriculturalInsights } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [aiInsight, setAiInsight] = useState<string>("Carregando recomendações...");
  const humidity = 65;
  const temp = 24;

  useEffect(() => {
    const fetchInsight = async () => {
      const insight = await getAgriculturalInsights(humidity, temp);
      setAiInsight(insight);
    };
    fetchInsight();
  }, []);

  return (
    <Layout activeTab="home">
      <div className="h-6 w-full"></div>
      <header className="px-4 py-2 flex items-center justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary">potted_plant</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-tight">AgriConnect</h1>
            <div className="flex items-center gap-1 text-xs text-slate-blue dark:text-gray-400">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span>Fazenda Santa Helena</span>
            </div>
          </div>
        </div>
        <button className="relative p-2 text-slate-blue dark:text-gray-300">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </header>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between bg-white dark:bg-[#21242c] p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-500 text-3xl">wb_sunny</span>
            <div>
              <p className="text-sm font-medium text-slate-blue dark:text-gray-400">Tempo Agora</p>
              <p className="text-xl font-bold">{temp}°C • Ensolarado</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-slate-blue dark:text-gray-500 font-bold">Vento</p>
            <p className="text-sm font-semibold">12 km/h</p>
          </div>
        </div>
      </div>

      <main className="px-4 space-y-4 pb-32">
        <section className="bg-white dark:bg-[#21242c] p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-base">Umidade do Solo</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">Média Geral</span>
          </div>
          <div className="flex flex-col items-center py-4">
            <div className="relative flex items-center justify-center w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle className="text-gray-100 dark:text-gray-800" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-primary" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - humidity/100)} strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold tracking-tighter">{humidity}%</span>
                <span className="text-[10px] text-slate-blue dark:text-gray-400 uppercase font-bold">Ideal</span>
              </div>
            </div>
            <div className="mt-4 flex gap-8">
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-blue dark:text-gray-500">MÍNIMA</p>
                <p className="text-sm font-semibold">42%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-blue dark:text-gray-500">MÁXIMA</p>
                <p className="text-sm font-semibold">78%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">psychology</span>
          <div>
            <h3 className="font-bold text-sm text-primary">Insight da IA</h3>
            <p className="text-sm text-slate-blue dark:text-gray-300 italic">"{aiInsight}"</p>
          </div>
        </section>

        <section className="bg-accent-alert/10 border-l-4 border-accent-alert p-4 rounded-lg flex items-start gap-3">
          <span className="material-symbols-outlined text-accent-alert">warning</span>
          <div>
            <h3 className="font-bold text-sm text-amber-900 dark:text-amber-200">Alerta Crítico</h3>
            <p className="text-sm text-amber-800/80 dark:text-amber-100/70">Baixa umidade detectada no <strong>Talhão 04</strong>. Irrigação recomendada.</p>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#21242c] p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-xl">thermostat</span>
              <p className="text-xs font-bold text-slate-blue dark:text-gray-400 uppercase">Temp. Ar</p>
            </div>
            <p className="text-2xl font-bold">28°C</p>
            <p className="text-[10px] text-emerald-500 font-bold mt-1">ESTÁVEL</p>
          </div>
          <div className="bg-white dark:bg-[#21242c] p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-blue-500 text-xl">rainy</span>
              <p className="text-xs font-bold text-slate-blue dark:text-gray-400 uppercase">Chuva</p>
            </div>
            <p className="text-2xl font-bold">15%</p>
            <p className="text-[10px] text-slate-blue dark:text-gray-500 font-bold mt-1">PROBABILIDADE</p>
          </div>
        </div>

        <section className="bg-white dark:bg-[#21242c] p-5 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-base">Tendência de Umidade</h2>
            <select className="bg-transparent text-xs font-bold text-slate-blue border-none focus:ring-0">
              <option>Últimos 7 dias</option>
              <option>Últimas 24h</option>
            </select>
          </div>
          <div className="h-32 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'rgba(30, 133, 99, 0.2)', stopOpacity:1}}></stop>
                  <stop offset="100%" style={{stopColor:'rgba(30, 133, 99, 0)', stopOpacity:1}}></stop>
                </linearGradient>
              </defs>
              <path d="M0,80 Q50,40 100,70 T200,30 T300,90 T400,50 L400,120 L0,120 Z" fill="url(#grad)"></path>
              <path d="M0,80 Q50,40 100,70 T200,30 T300,90 T400,50" fill="none" stroke="#1e8563" strokeLinecap="round" strokeWidth="3"></path>
              <circle cx="100" cy="70" fill="#1e8563" r="4"></circle>
              <circle cx="200" cy="30" fill="#1e8563" r="4"></circle>
              <circle cx="300" cy="90" fill="#1e8563" r="4"></circle>
            </svg>
          </div>
          <div className="flex justify-between mt-2 px-1">
            <span className="text-[10px] font-bold text-slate-blue dark:text-gray-500">SEG</span>
            <span className="text-[10px] font-bold text-slate-blue dark:text-gray-500">TER</span>
            <span className="text-[10px] font-bold text-slate-blue dark:text-gray-500 text-primary">HOJE</span>
            <span className="text-[10px] font-bold text-slate-blue dark:text-gray-500">QUI</span>
            <span className="text-[10px] font-bold text-slate-blue dark:text-gray-500">SEX</span>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 pb-4">
          <button onClick={() => navigate('/tarefas')} className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold text-sm shadow-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-lg">add_task</span>
            Atividade
          </button>
          <button onClick={() => navigate('/talhoes')} className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-[#121715] dark:text-white py-3 rounded-lg font-bold text-sm border border-black/5 dark:border-white/5 active:scale-95 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-lg">map</span>
            Ver Mapas
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default Dashboard;
