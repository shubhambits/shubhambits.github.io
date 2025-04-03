import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="contact-container">
        <header className="contact-header">
          <h2>Contact Me</h2>
          <p className="section-description">Let's work together to bring your ideas to life</p>
        </header>
        
        <div className="contact-content">
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <a href="mailto:your.email@example.com" className="contact-link">
            <FaEnvelope />
            Get in Touch
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-text">
              <p>© {new Date().getFullYear()} Shubham Agrawal. All rights reserved.</p>
              <p className="footer-tagline">Crafted with passion and precision</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact; 