
import React from 'react';
import Layout from './Layout';
import { MOCK_TASKS, IMAGES } from '../constants';
import { Task } from '../types';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const isConcluida = task.status === 'concluida';
  const priorityColor = task.priority === 'urgente' ? 'bg-accent-high' : task.priority === 'medio' ? 'bg-accent-med' : 'bg-accent-low';
  const priorityBg = task.priority === 'urgente' ? 'bg-accent-high/10 text-accent-high' : task.priority === 'medio' ? 'bg-accent-med/10 text-accent-med' : 'bg-accent-low/10 text-accent-low';
  const priorityLabel = task.priority === 'urgente' ? 'Urgente' : task.priority === 'medio' ? 'Médio' : 'Baixo';

  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-3 border-l-4 ${priorityColor} ${isConcluida ? 'opacity-70' : ''}`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <div className={`size-6 rounded-md border-2 ${isConcluida ? 'bg-primary border-primary text-white' : 'border-gray-200 dark:border-gray-600'} flex items-center justify-center cursor-pointer`}>
            {isConcluida && <span className="material-symbols-outlined text-[18px]">check</span>}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className={`text-sm font-bold text-[#121715] dark:text-white mb-1 ${isConcluida ? 'line-through decoration-gray-400' : ''}`}>{task.title}</h4>
            {!isConcluida && <span className={`px-2 py-0.5 rounded-full ${priorityBg} text-[10px] font-bold uppercase`}>{priorityLabel}</span>}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <img alt={task.assignee.name} className="size-5 rounded-full" src={task.assignee.avatar}/>
              <span className="text-xs text-gray-500 dark:text-gray-400">{task.assignee.name}</span>
            </div>
            <div className={`flex items-center gap-1 ${isConcluida ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
              <span className="material-symbols-outlined text-[16px]">{isConcluida ? 'check_circle' : 'schedule'}</span>
              <span className={`text-xs ${isConcluida ? 'font-bold' : ''}`}>{task.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities: React.FC = () => {
  const pendingTasks = MOCK_TASKS.filter(t => t.status === 'pendente');
  const completedTasks = MOCK_TASKS.filter(t => t.status === 'concluida');

  return (
    <Layout activeTab="tarefas">
      <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <div className="text-primary size-10 flex items-center justify-center rounded-full bg-primary/10 overflow-hidden">
             <img src={IMAGES.profile} className="w-full h-full object-cover" alt="Profile" />
          </div>
          <h2 className="text-[#121715] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Gestão de Atividades</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-[#121715] dark:text-white">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
            </button>
          </div>
        </div>
      </header>

      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-sm font-bold text-[#121715] dark:text-white">Março 2024</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full cursor-pointer">Ver mês completo</span>
        </div>
        <div className="flex justify-between gap-2 overflow-x-auto hide-scrollbar">
          {[
            {d: 'Seg', n: '18'},
            {d: 'Ter', n: '19'},
            {d: 'Qua', n: '20'},
            {d: 'Qui', n: '21', active: true},
            {d: 'Sex', n: '22'},
            {d: 'Sab', n: '23'},
            {d: 'Dom', n: '24'},
          ].map((day, idx) => (
            <div key={idx} className={`flex flex-col items-center min-w-[48px] p-2 rounded-xl ${day.active ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-white dark:bg-gray-800 shadow-sm'}`}>
              <span className={`text-[10px] uppercase font-bold ${day.active ? 'text-white/80' : 'text-gray-400'}`}>{day.d}</span>
              <span className={`text-sm font-bold ${day.active ? 'text-white' : ''}`}>{day.n}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="px-4 py-2">
        <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-12 px-4 gap-3">
          <span className="material-symbols-outlined text-gray-400">search</span>
          <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-gray-400" placeholder="Buscar tarefas ou talhões" type="text"/>
          <span className="material-symbols-outlined text-gray-400">tune</span>
        </div>
      </div>

      <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-xs font-semibold">Todos</button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 text-xs font-medium">
          Alta Prioridade
          <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
      </div>

      <main className="flex-1 px-4 pb-32">
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#121715] dark:text-white text-lg font-bold leading-tight tracking-tight">Pendentes</h3>
            <span className="text-xs font-bold text-gray-400">{pendingTasks.length} TAREFAS</span>
          </div>
          {pendingTasks.map((task) => (
            <TaskItem key={task.id} task={task as any} />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#121715] dark:text-white text-lg font-bold leading-tight tracking-tight">Concluídas</h3>
            <span className="text-xs font-bold text-gray-400">HOJE</span>
          </div>
          {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task as any} />
          ))}
        </div>
      </main>
      <button className="fixed bottom-24 right-6 size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-[32px]">add</span>
      </button>
    </Layout>
  );
};

export default Activities;
