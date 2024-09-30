"use client"
/**
 * ProjectsSection Component
 * 
 * This component displays a list of projects with infinite scrolling functionality.
 * It loads projects in batches and allows users to load more projects either by scrolling
 * or clicking a button.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.loadMoreText - The text to display on the "Load More" button
 *
 * @returns {JSX.Element} A section containing a list of project cards with infinite scrolling
 */
import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/shared/cards/ProjectCard';
import { projectsData } from "@/constants/projectsData";

interface ProjectsSectionProps {
  loadMoreText: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ loadMoreText }) => {
  // State to keep track of the number of visible projects
  const [visibleProjects, setVisibleProjects] = useState(3);
  // State to store the projects data
  const [projects, setProjects] = useState(projectsData());

  /**
   * Increases the number of visible projects by 3, up to the total number of projects
   */
  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  /**
   * Effect hook to handle infinite scrolling
   */
  useEffect(() => {
    /**
     * Checks if the user has scrolled near the bottom of the page and loads more projects if so
     */
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determines if there are more projects to load
  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-white">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreProjects}
              className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-dark transition duration-300"
            >
              {loadMoreText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;