
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, imageUrl, tags, liveUrl, repoUrl } = project;

  return (
    <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-accent/20 border border-gray-700/50 transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-light mb-2">{title}</h3>
        <p className="text-medium mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-primary text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-accent/30">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">
              Live Demo <i className="fas fa-external-link-alt ml-1"></i>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-light transition-colors duration-300 text-2xl">
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
