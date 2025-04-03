import React from 'react';
import { FaUser, FaCode, FaCogs, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    const header = document.querySelector('.header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          SA
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => scrollToSection('about')}>
              <FaUser />
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>
              <FaCode />
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('cicd-showcase')}>
              <FaCogs />
              CI/CD
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>
              <FaEnvelope />
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm <span>Shubham Agrawal</span></h1>
          <p className="hero-subtitle">Azure DevOps CI/CD Specialist</p>
          <div className="hero-description">
            <p>Transforming complex software delivery processes into streamlined, automated workflows</p>
            <p>Expert in pipeline automation, infrastructure as code, and continuous delivery</p>
          </div>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="cta-button secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
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