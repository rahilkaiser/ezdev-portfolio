"use client";

import { motion } from 'framer-motion';
import { Code, Smartphone, Server } from 'lucide-react';

import CTAButton from '../shared/CTAButton';
import { useTranslations } from 'next-intl';
import ServiceCard from '../shared/cards/ServiceCard';

/**
 * Displays a section showcasing the company's services.
 */
export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    { title: t('services.webDev.title'), Icon: Code, description: t('services.webDev.description') },
    { title: t('services.appDev.title'), Icon: Smartphone, description: t('services.appDev.description') },
    { title: t('services.itSolutions.title'), Icon: Server, description: t('services.itSolutions.description') },
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-accent text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl mb-8">{t('cta.description')}</p>
          <div className="flex justify-center">
            <CTAButton text={t('cta.heroButtonText')} link="/services" />
          </div>
        </motion.div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </section>
  );
}

