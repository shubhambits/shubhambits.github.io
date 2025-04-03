import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <div className="contact-underline"></div>
        </div>
        
        <div className="contact-content">
          <p>Interested in working together? Let's connect!</p>
          <a 
            href="mailto:your.email@example.com" 
            className="contact-link email"
          >
            <FaEnvelope /> Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 