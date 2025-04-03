import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Shubham Agrawal. All rights reserved.</p>
          <p className="footer-tagline">Crafted with passion and precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 