import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import CICDShowcase from './components/CICDShowcase';
import PipelineTemplate from './components/PipelineTemplate';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <CICDShowcase />
      <PipelineTemplate />
      <Contact />
    </div>
  );
};

export default App;