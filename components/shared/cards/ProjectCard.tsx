/**
 * ProjectCard Component
 * 
 * This component displays a single project card.
 */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';


interface ProjectCardProps {
  project: Project;
  index: number;
}

function parseDescription(description: string) {
    const parts = description.split(/<span className='text-accent'>|<\/span>/);
    return parts.map((part, index) => 
      index % 2 === 0 ? part : <span key={index} className="text-accent">{part}</span>
    );
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div 
    className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:py-12 mb-20`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="w-full lg:w-1/2 relative overflow-hidden group">
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={800} 
          height={500} 
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
          <div className="text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-bold mb-2">{project.specialTech}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-primary text-accent px-2 py-1 rounded-sm text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
    <div className={`w-full lg:w-7/12 lg:absolute ${index % 2 === 0 ? 'lg:text-right lg:right-0' : 'lg:text-left lg:left-0'} lg:top-1/2 lg:transform lg:-translate-y-1/2`}>
      <p className="text-accent mb-2 text-sm lg:text-base font-semibold" id="codeFont">{project.companyName}</p>
      <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
        {project.title}
      </h3>
      <motion.div 
        className="bg-card bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 lg:p-6 rounded-lg shadow-md mb-4 border border-accent border-opacity-10"
        whileHover={{ boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
      >
        <p className="text-sm lg:text-base">{parseDescription(project.description)}</p>
      </motion.div>
      <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
        <Link 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative group text-accent transition-colors duration-300 flex items-center"
        >
          Projekt ansehen
          <ExternalLink size={16} className="ml-2" />
          <span className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;