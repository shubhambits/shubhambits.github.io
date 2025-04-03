import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import CICDShowcase from './components/CICDShowcase';
import PipelineTemplate from './components/PipelineTemplate';
import Contact from './components/Contact';

function App() {
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
}

export default App;