"use client"
import { motion } from 'framer-motion';
import Header from '../../../../components/shared/Header';
import { useTranslations } from 'next-intl';

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