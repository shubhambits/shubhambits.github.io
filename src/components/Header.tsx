import React from 'react';
import '../App.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">Shubham Agrawal</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Azure DevOps <span>CI/CD</span> Specialist</h1>
          <p className="hero-subtitle">Transforming software delivery with templatized YAML pipelines</p>
          <div className="hero-description">
            <p>Expert in creating efficient, scalable, and maintainable CI/CD pipelines using Azure DevOps</p>
            <p>Specializing in YAML-based pipeline templates and infrastructure automation</p>
          </div>
          <div className="hero-buttons">
            <button className="cta-button primary">View My Work</button>
            <button className="cta-button secondary">Contact Me</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Pipeline Templates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Automation Rate</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;