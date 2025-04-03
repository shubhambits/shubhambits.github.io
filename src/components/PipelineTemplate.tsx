import React from 'react';
import '../App.css';
import pipelineTemplate from '../assets/pipeline-template.yml?raw';

const PipelineTemplate: React.FC = () => {
  return (
    <section id="pipeline-template" className="pipeline-template-section" aria-label="Pipeline Template">
      <div className="pipeline-container">
        <header>
          <h2>Pipeline Template</h2>
          <p className="section-description">A comprehensive YAML template demonstrating Azure DevOps pipeline best practices</p>
        </header>
        
        <div className="code-example">
          <pre>
            <code>{pipelineTemplate}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default PipelineTemplate; 