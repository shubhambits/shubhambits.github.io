import React from 'react';
import { FaLinkedin, FaCode, FaServer, FaRocket } from 'react-icons/fa';
import '../App.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="about-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              As a passionate Azure DevOps CI/CD Specialist, I transform complex software delivery 
              processes into streamlined, automated workflows. With expertise in pipeline automation 
              and infrastructure as code, I help organizations achieve faster, more reliable deployments 
              while maintaining the highest standards of quality and security.
            </p>
            
            <div className="skills-grid">
              <div className="skill-item">
                <FaCode className="skill-icon" />
                <h3>Pipeline Automation</h3>
                <p>Designing and implementing efficient CI/CD pipelines that accelerate development cycles</p>
              </div>
              <div className="skill-item">
                <FaServer className="skill-icon" />
                <h3>Infrastructure as Code</h3>
                <p>Building scalable, maintainable infrastructure through code</p>
              </div>
              <div className="skill-item">
                <FaRocket className="skill-icon" />
                <h3>CI/CD Best Practices</h3>
                <p>Implementing industry-leading practices for continuous delivery</p>
              </div>
            </div>

            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/shubagra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <FaLinkedin /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;