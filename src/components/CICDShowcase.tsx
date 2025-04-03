import React from 'react';
import '../App.css';

const CICDShowcase: React.FC = () => {
  return (
    <section id="services" className="cicd-showcase">
      <h2>Azure DevOps CI/CD Expertise</h2>
      <div className="expertise-grid">
        <div className="expertise-card">
          <h3>Pipeline Templates</h3>
          <p>Creating reusable YAML templates for consistent CI/CD workflows across projects</p>
        </div>
        <div className="expertise-card">
          <h3>Build Automation</h3>
          <p>Streamlined build processes with optimized pipeline configurations</p>
        </div>
        <div className="expertise-card">
          <h3>Release Management</h3>
          <p>Efficient deployment strategies with environment-specific configurations</p>
        </div>
        <div className="expertise-card">
          <h3>Infrastructure as Code</h3>
          <p>Automated infrastructure deployment through Azure DevOps pipelines</p>
        </div>
      </div>
      <div className="code-example">
        <h3>Sample Pipeline Template</h3>
        <pre>
          <code>
{`# Azure DevOps Pipeline Template
parameters:
  - name: buildConfiguration
    type: string
    default: 'Release'
  - name: projectName
    type: string
    default: 'MyProject'

variables:
  solution: '$(projectName).sln'
  buildPlatform: 'Any CPU'

stages:
  - stage: Build
    displayName: 'Build Stage'
    jobs:
      - job: Build
        displayName: 'Build Job'
        pool:
          vmImage: 'windows-latest'
        steps:
          - task: NuGetRestore@1
            displayName: 'Restore NuGet packages'
            inputs:
              solution: '$(solution)'
              feedsToUse: 'config'
              nugetConfigPath: 'nuget.config'
              
          - task: VSBuild@1
            displayName: 'Build solution'
            inputs:
              solution: '$(solution)'
              platform: '$(buildPlatform)'
              configuration: $(buildConfiguration)
              
          - task: VSTest@2
            displayName: 'Run unit tests'
            inputs:
              testSelector: 'testSuite'
              testSuite: '**/*.test.dll'
              platform: '$(buildPlatform)'
              configuration: $(buildConfiguration)`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default CICDShowcase;