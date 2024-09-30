"use client";

import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { motion } from 'framer-motion';
import { AsymmetricGrid } from '@/components/shared/grid/AsymmetricGrid';
import CTAButton from '@/components/shared/CTAButton';
import { useTranslations } from 'next-intl';

function AboutSection() {
  const [gridSize, setGridSize] = useState(12 * 6); // Standardgröße für große Bildschirme
  const { width } = useWindowSize();
  const t = useTranslations('About');
  
  useEffect(() => {
    const getGridSize = () => {
      if (width < 640) return 4 * 3; // sm
      if (width < 768) return 6 * 4; // md
      if (width < 925) return 8 * 5; // lg
      return 12 * 6; // xl und größer
    };
    setGridSize(getGridSize());
  }, [width]);

  return (
    <section className="py-10 sm:py-20 bg-primary text-white" aria-labelledby="about-section-title">
      <div className="container mx-auto px-4">
        <h2 id="about-section-title" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent text-center">
          {t('title')}
        </h2>

        <div className="text-center md:text-left grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg">{t('description1')}</p>
            <p className="text-base sm:text-lg">{t('description2')}</p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg">{t('description3')}</p>
            <p className="text-base sm:text-lg">{t('description4')}</p>
          </div>
        </div>

        
        <div className="mt-12 sm:mt-16 relative">
          <AsymmetricGrid gridSize={gridSize} />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <motion.div
                className="h-48 w-48 sm:h-64 sm:w-64 bg-accent opacity-50 mx-auto lg:mx-0 overflow-hidden"
                initial={{ rotate: -6 }}
                whileHover={{ 
                  rotate: 0,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="w-full h-full"
                  initial={{ backgroundPosition: '0% 0%' }}
                  whileHover={{ 
                    backgroundPosition: '100% 100%',
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23ffffff'/%3E%3Cpath d='M0 0h50v50H0zM50 50h50v50H50z' fill='%23000000' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </motion.div>
            </div>
            <div className="pr-2 w-full lg:w-1/2 text-center lg:text-right">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent drop-shadow-md">{t('philosophy.title')}</h3>
              <p className="text-base sm:text-lg mb-6 bg-primary bg-opacity-80 p-4 rounded-lg shadow-md">
                {t('philosophy.description')}
              </p>
              <CTAButton text={t('ctaButton')} link="/about" aria-label={t('ctaAriaLabel')} />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <p className="text-4xl sm:text-6xl font-bold text-accent opacity-20 mb-4 drop-shadow-lg">{t('innovationText')}</p>
          <p className="text-lg sm:text-xl font-semibold drop-shadow-md">{t('innovationSubtext')}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;