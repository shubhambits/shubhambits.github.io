import React from 'react';
import { FaCode, FaRocket, FaShieldAlt, FaCogs, FaCodeBranch, FaServer, FaCheckCircle } from 'react-icons/fa';
import '../App.css';

const CICDShowcase: React.FC = () => {

  return (
    <section id="cicd-showcase" className="cicd-showcase" aria-label="CI/CD Services">
      <header>
        <h2>Azure DevOps CI/CD Expertise</h2>
        <p className="section-description">Specialized in creating efficient and scalable CI/CD solutions using Azure DevOps</p>
      </header>
      
      <div className="expertise-grid" role="list">
        <article className="expertise-card" role="listitem">
          <div className="expertise-icon">
            <FaCode />
          </div>
          <h3>Pipeline Templates</h3>
          <p>Creating reusable YAML templates for consistent CI/CD workflows across projects</p>
          <ul className="expertise-details">
            <li><FaCheckCircle /> Multi-stage pipeline templates</li>
            <li><FaCheckCircle /> Environment-specific configurations</li>
            <li><FaCheckCircle /> Variable management</li>
          </ul>
        </article>
        <article className="expertise-card" role="listitem">
          <div className="expertise-icon">
            <FaCogs />
          </div>
          <h3>Build Automation</h3>
          <p>Streamlined build processes with optimized pipeline configurations</p>
          <ul className="expertise-details">
            <li><FaCheckCircle /> Parallel job execution</li>
            <li><FaCheckCircle /> Artifact management</li>
            <li><FaCheckCircle /> Build caching</li>
          </ul>
        </article>
        <article className="expertise-card" role="listitem">
          <div className="expertise-icon">
            <FaRocket />
          </div>
          <h3>Release Management</h3>
          <p>Efficient deployment strategies with environment-specific configurations</p>
          <ul className="expertise-details">
            <li><FaCheckCircle /> Multi-environment deployments</li>
            <li><FaCheckCircle /> Approval gates</li>
            <li><FaCheckCircle /> Rollback procedures</li>
          </ul>
        </article>
        <article className="expertise-card" role="listitem">
          <div className="expertise-icon">
            <FaServer />
          </div>
          <h3>Infrastructure as Code</h3>
          <p>Automated infrastructure deployment through Azure DevOps pipelines</p>
          <ul className="expertise-details">
            <li><FaCheckCircle /> ARM/Bicep template deployment</li>
            <li><FaCheckCircle /> Parameter management</li>
            <li><FaCheckCircle /> Environment provisioning</li>
          </ul>
        </article>
        <article className="expertise-card" role="listitem">
          <div className="expertise-icon">
            <FaCodeBranch />
          </div>
          <h3>Branch Strategy</h3>
          <p>Implementing effective branching and merging strategies</p>
          <ul className="expertise-details">
            <li><FaCheckCircle /> GitFlow implementation</li>
            <li><FaCheckCircle /> Branch policies</li>
            <li><FaCheckCircle /> Pull request automation</li>
          </ul>
        </article>
        <article className="expertise-card" role="listitem">
          <div className="expertise-icon">
            <FaShieldAlt />
          </div>
          <h3>Security Integration</h3>
          <p>Incorporating security checks and compliance in CI/CD pipelines</p>
          <ul className="expertise-details">
            <li><FaCheckCircle /> Vulnerability scanning</li>
            <li><FaCheckCircle /> Compliance validation</li>
            <li><FaCheckCircle /> Secret management</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default CICDShowcase;