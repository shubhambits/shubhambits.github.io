import React from 'react';
import '../App.css';

const CICDShowcase: React.FC = () => {
  return (
    <section id="services" className="cicd-showcase" aria-label="CI/CD Services">
      <header>
        <h2>Azure DevOps CI/CD Expertise</h2>
        <p className="section-description">Specialized in creating efficient and scalable CI/CD solutions using Azure DevOps</p>
      </header>
      
      <div className="expertise-grid" role="list">
        <article className="expertise-card" role="listitem">
          <h3>Pipeline Templates</h3>
          <p>Creating reusable YAML templates for consistent CI/CD workflows across projects</p>
        </article>
        <article className="expertise-card" role="listitem">
          <h3>Build Automation</h3>
          <p>Streamlined build processes with optimized pipeline configurations</p>
        </article>
        <article className="expertise-card" role="listitem">
          <h3>Release Management</h3>
          <p>Efficient deployment strategies with environment-specific configurations</p>
        </article>
        <article className="expertise-card" role="listitem">
          <h3>Infrastructure as Code</h3>
          <p>Automated infrastructure deployment through Azure DevOps pipelines</p>
        </article>
      </div>
    </section>
  );
};

export default CICDShowcase;