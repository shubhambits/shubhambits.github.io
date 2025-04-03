import React from 'react';
import '../App.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Enterprise CI/CD Pipeline",
      description: "Implemented a comprehensive CI/CD pipeline for a large enterprise application using Azure DevOps YAML templates",
      technologies: ["Azure DevOps", "YAML", "Docker", "Kubernetes"],
      link: "#"
    },
    {
      title: "Microservices Deployment Pipeline",
      description: "Created a scalable pipeline template for deploying microservices architecture with environment-specific configurations",
      technologies: ["Azure DevOps", "YAML", "Azure Kubernetes Service", "Helm"],
      link: "#"
    },
    {
      title: "Infrastructure Automation",
      description: "Developed infrastructure as code pipeline for automated deployment of Azure resources",
      technologies: ["Azure DevOps", "Terraform", "Azure Resource Manager", "YAML"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Technical Projects</h2>
        <div className="section-underline"></div>
        <p className="section-description">Explore my portfolio of CI/CD and infrastructure automation projects</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;