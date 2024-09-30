"use client"
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

/**
 * ProjectsHeaderSection Component
 *
 * This component renders the header section of the Projects page.
 * It displays a title, subtitle, and introduction with animated entrance effects.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.title - The main title of the projects section
 * @param {string} props.subtitle - The subtitle of the projects section
 * @param {string} props.introduction - A brief introduction text for the projects
 *
 * @returns {JSX.Element} A section containing animated title, subtitle, and introduction
 */
export default function ProjectsHeaderSection({title, subtitle, introduction}: {title: string, subtitle: string, introduction: string}) {
  const t = useTranslations('Projects');

  return (
    <section className="mt-4 flex flex-col items-center justify-center gap-4 sm:gap-6 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="text-3xl mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.h2>
        <motion.p 
          className="text-xl mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {introduction}
        </motion.p>
      </div>
    </section>
  );
}