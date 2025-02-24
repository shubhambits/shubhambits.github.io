
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import CICDShowcase from './components/CICDShowcase';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Projects />
      <CICDShowcase />
    </div>
  );
};

export default App;