"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import CTAButton from "../shared/CTAButton";

const projects = [
  {
    title: "KI-gestützte Datenanalyse",
    companyName: "DataTech GmbH",
    description: "Eine präzise Plattform, die <span className='text-accent'>maschinelles Lernen</span> und <span className='text-accent'>Big Data</span> nutzt, um tiefgreifende Einblicke in komplexe Datensätze zu gewinnen. Ideal für Unternehmen, die effiziente, datengesteuerte Entscheidungen treffen möchten.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://ki-datenanalyse.ch",
    github: "https://github.com/example/ki-datenanalyse",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    specialTech: "Natural Language Processing"
  },
  {
    title: "Smart City Verkehrsmanagement",
    companyName: "UrbanFlow AG",
    description: "Ein hochpräzises System zur Optimierung des städtischen Verkehrsflusses unter Verwendung von <span className='text-accent'>IoT-Sensoren</span> und <span className='text-accent'>prädiktiver Analytik</span>. Minimiert Staus und verbessert die Luftqualität in Großstädten signifikant.",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://smart-verkehr.ch",
    github: "https://github.com/example/smart-verkehr",
    tech: ["IoT", "Java", "Spring Boot", "MongoDB"],
    specialTech: "Echtzeit-Datenverarbeitung"
  },
  {
    title: "Blockchain-basierte Lieferkette",
    companyName: "ChainSupply Solutions",
    description: "Eine zuverlässige und fälschungssichere Lösung für das Supply Chain Management, die <span className='text-accent'>Blockchain-Technologie</span> nutzt. Gewährleistet die lückenlose Rückverfolgbarkeit von Produkten vom Hersteller bis zum Endverbraucher.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    link: "https://blockchain-supply.ch",
    github: "https://github.com/example/blockchain-supply",
    tech: ["Solidity", "Ethereum", "Node.js", "Web3.js"],
    specialTech: "Smart Contracts"
  }
];

function parseDescription(description: string) {
  const parts = description.split(/<span className='text-accent'>|<\/span>/);
  return parts.map((part, index) => 
    index % 2 === 0 ? part : <span key={index} className="text-accent">{part}</span>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-accent text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Innovativen Lösungen
        </motion.h2>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:py-12 mb-20`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div 
              className="w-full lg:w-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 10, stiffness: 600 }}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800} 
                  height={500} 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
            </motion.div>
            <div className={`w-full lg:w-7/12 lg:absolute ${index % 2 === 0 ? 'lg:text-right lg:right-0' : 'lg:text-left lg:left-0'} lg:top-1/2 lg:transform lg:-translate-y-1/2`}>
              <p className="text-accent mb-2 text-sm lg:text-base font-semibold" id="codeFont">{project.companyName}</p>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                  {project.title}
                </Link>
              </h3>
              <motion.div 
                className="bg-card p-4 lg:p-6 rounded-lg shadow-md mb-4"
                whileHover={{ boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
              >
                <p className="text-sm lg:text-base">{parseDescription(project.description)}</p>
              </motion.div>
              <ul className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <li className="bg-accent text-primary px-2 py-1 rounded-full text-xs lg:text-sm font-semibold">{project.specialTech}</li>
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex} className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs lg:text-sm">{tech}</li>
                ))}
              </ul>
              <div className={`flex gap-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300">
                    <Github size={20} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300">
                    <ExternalLink size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CTAButton text="Alle Projekte ansehen" link="/projects" />
        </motion.div>
      </div>
    </section>
  );
}
