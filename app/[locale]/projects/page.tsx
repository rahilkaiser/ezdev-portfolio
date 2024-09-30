"use client"
import { Testimonial, testimonials } from "@/constants/testimonials";
import { useTranslations } from "next-intl";
import { useState, useEffect } from 'react';
import { Project } from "@/types";
import { projectsData } from "@/constants/projectsData";
import ProjectsHeaderSection from "./sections/ProjectsHeaderSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "../about/sections/CTASection";
import ProjectsSection from "./sections/ProjectSection";
/**
 * ProjectsPage Component
 * 
 * This component serves as the main container for the projects page.
 * It manages the state for visible projects and selected testimonials,
 * and renders the main sections of the page.
 */

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projectsData.length));
  };

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-primary to-primary-dark">
      <ProjectsHeaderSection 
        title={t("title")} 
        subtitle={t("subtitle")} 
        introduction={t("introduction")}
      />
      <TestimonialsSection 
        testimonials={testimonials} 
        onTestimonialSelect={setSelectedTestimonial} 
        readMoreText={t("readMore")}
        sectionTitle={t("testimonialsTitle")}
      />
      <CTASection 
        title={t("cta.title")} 
        description={t("cta.description")} 
        buttonText={t("cta.button")}
        buttonLink="/contact"
      />
      <ProjectsSection 
        projects={projectsData.slice(0, visibleProjects)} 
        onLoadMore={loadMoreProjects} 
        hasMoreProjects={visibleProjects < projectsData.length}
        loadMoreText={t("loadMore")}
      />

    </div>
  );
}