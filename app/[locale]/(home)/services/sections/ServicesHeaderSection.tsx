"use client"
import { Code, Smartphone, Server } from 'lucide-react';
import ServiceCard from '@/components/shared/cards/ServiceCard';
import Header from '../../../../../components/shared/Header';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface ServicesHeaderSectionProps {
  title: string;
  subtitle: string;
  introduction: string;
}

export default function ServicesHeaderSection({ title, subtitle, introduction }: ServicesHeaderSectionProps) {
  return (
    <section className="mt-4 flex flex-col items-center justify-center gap-4 sm:gap-6 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto"
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