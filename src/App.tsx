import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import CICDShowcase from './components/CICDShowcase';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <CICDShowcase />
      <Contact />
    </div>
  );
}

export default App;