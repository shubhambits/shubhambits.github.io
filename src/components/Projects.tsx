import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    link: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    link: 'https://github.com/username/project2',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ul className="mt-4">
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;