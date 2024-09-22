/**
 * ProjectsSection Component
 * 
 * This component displays a list of projects with a load more button.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import ProjectCard from '@/components/shared/cards/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
  onLoadMore: () => void;
  hasMoreProjects: boolean;
  loadMoreText: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onLoadMore, hasMoreProjects, loadMoreText }) => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto px-4 text-white">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
      {hasMoreProjects && (
        <div className="text-center mt-12">
          <button
            onClick={onLoadMore}
            className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-dark transition duration-300"
          >
            {loadMoreText}
          </button>
        </div>
      )}
    </div>
  </section>
);

export default ProjectsSection;