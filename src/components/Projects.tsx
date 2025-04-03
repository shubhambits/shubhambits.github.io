import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectDialog from './ProjectDialog';
import '../App.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Azure DevOps Pipeline Automation",
      description: "A comprehensive CI/CD pipeline implementation using Azure DevOps, featuring multi-stage deployments, automated testing, and security scanning. The pipeline includes environment-specific configurations and automated infrastructure provisioning using ARM templates.",
      technologies: ["Azure DevOps", "YAML", "PowerShell", "ARM Templates", "Azure Key Vault"],
      // githubUrl: "https://github.com/yourusername/azure-pipeline",
      image: "/images/azure-pipeline.png"
    },
    {
      title: "Infrastructure as Code (IaC) Templates",
      description: "Collection of reusable ARM and Bicep templates for Azure infrastructure deployment. Includes templates for virtual networks, app services, and containerized applications with best practices for security and scalability.",
      technologies: ["ARM Templates", "Bicep", "Azure CLI", "Azure Policy"],
      // githubUrl: "https://github.com/yourusername/azure-iac",
      image: "/images/azure-iac.png"
    },
    // {
    //   title: "DevOps Dashboard",
    //   description: "A centralized dashboard for monitoring CI/CD pipelines, deployment status, and infrastructure health. Features include real-time metrics, deployment history, and automated alerts.",
    //   technologies: ["React", "TypeScript", "Azure DevOps API", "Chart.js"],
    //   githubUrl: "https://github.com/yourusername/devops-dashboard",
    //   liveUrl: "https://devops-dashboard.example.com",
    //   image: "/images/devops-dashboard.png"
    // }
  ];

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/placeholder.jpg";
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Explore my portfolio of DevOps and automation projects showcasing expertise in Azure, CI/CD, and infrastructure management.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={handleImageError}
                  />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button 
                    className="project-link"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                  </button>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
};

export default Projects;