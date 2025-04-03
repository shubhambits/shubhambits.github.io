import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Shubham Agrawal. All rights reserved.</p>
          <p className="footer-tagline">Crafted with passion, precision, and automation.</p>
          <div className="privacy-section">
            <p className="privacy-notice">
              This site uses Microsoft Clarity to improve user experience. By continuing to use this site, you agree to our use of cookies and analytics.
            </p>
            <p className="privacy-details">
              Learn more about <a href="https://learn.microsoft.com/en-us/clarity/faq" target="_blank" rel="noopener noreferrer" className="privacy-link">what data Clarity collects</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 