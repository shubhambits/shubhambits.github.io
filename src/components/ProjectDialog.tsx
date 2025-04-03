import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectDialogProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
  };
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, onClose }) => {
  return (
    <div className="project-dialog-overlay">
      <div className="project-dialog">
        <button className="dialog-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        {project.image && (
          <div className="dialog-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}
        
        <div className="dialog-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          
          <div className="dialog-tech-stack">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="dialog-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View on GitHub
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
    </div>
  );
};

export default ProjectDialog; 