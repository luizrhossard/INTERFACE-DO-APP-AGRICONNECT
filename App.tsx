
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Monitoring from './components/Monitoring';
import Activities from './components/Activities';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/talhoes" element={<Monitoring />} />
        <Route path="/tarefas" element={<Activities />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
