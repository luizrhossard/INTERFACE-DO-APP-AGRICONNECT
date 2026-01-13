
export interface Field {
  id: string;
  name: string;
  crop: string;
  season: string;
  health: 'excelente' | 'atencao' | 'critico';
  progress: number;
  soilStatus: string;
  weather: string;
  imageUrl: string;
  irrigationActive: boolean;
}

export interface Task {
  id: string;
  title: string;
  priority: 'urgente' | 'medio' | 'baixo';
  assignee: {
    name: string;
    avatar: string;
  };
  time: string;
  status: 'pendente' | 'concluida';
}

export type TabType = 'home' | 'talhoes' | 'tarefas' | 'settings';
