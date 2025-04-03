import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Footer from './Footer';
import '../App.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="contact-container">
        <header className="contact-header">
          <h2>Contact Me</h2>
          <p className="section-description">
            Let's discuss how I can help bring your ideas to life.
          </p>
        </header>
        
        <div className="contact-content">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="mailto:shubhamagrawal@example.com" className="contact-link">
            <FaEnvelope />
            Get in Touch
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </section>
  );
};

export default Contact; 