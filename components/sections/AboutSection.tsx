"use client";

import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { motion } from 'framer-motion';
import { AsymmetricGrid } from '@/components/shared/grid/AsymmetricGrid';
import CTAButton from '@/components/shared/CTAButton';

function AboutSection() {
  const [gridSize, setGridSize] = useState(12 * 6); // Standardgröße für große Bildschirme
  const { width } = useWindowSize();
  
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
        {/* Animation: Fade in und nach oben gleiten beim Scrollen */}
        <h2 id="about-section-title" className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-accent text-center">
          Über uns
        </h2>

        <div className="text-center md:text-left grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Animation: Von links einblenden beim Scrollen */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg">
              EasyDEV entwickelt mit Leidenschaft Websites, Apps und andere
              IT-Lösungen. Unser Ziel ist es, innovative und benutzerfreundliche
              digitale Produkte zu schaffen, die Ihrem Unternehmen einen
              Mehrwert bieten.
            </p>
            <p className="text-base sm:text-lg">
              Mit unserem Ansatz kombinieren wir Funktionalität und Ästhetik,
              um einzigartige digitale Erlebnisse zu kreieren.
            </p>
          </div>
          
          {/* Animation: Von rechts einblenden beim Scrollen */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg">
              Unser erfahrenes Team setzt modernste Technologien ein, um
              maßgeschneiderte Lösungen zu entwickeln, die Ihren spezifischen
              Anforderungen entsprechen.
            </p>
            <p className="text-base sm:text-lg">
              Von der Konzeption bis zur Umsetzung stehen wir Ihnen als
              zuverlässiger Partner zur Seite und helfen Ihnen, Ihre digitalen
              Visionen Realität werden zu lassen.
            </p>
          </div>
        </div>

        {/* Schweizer Design inspiriertes Layout */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Asymmetrisches Gitter */}
          <AsymmetricGrid gridSize={gridSize} />
          
          {/* Inhalt */}
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
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-accent drop-shadow-md">Unsere Philosophie</h3>
              <p className="text-base sm:text-lg mb-6 bg-primary bg-opacity-80 p-4 rounded-lg shadow-md">
                Wir glauben an klare Strukturen, präzise Umsetzung und
                zeitloses Design - inspiriert von minimalistischen Prinzipien,
                die Funktionalität und Ästhetik perfekt vereinen und gleichzeitig
                moderne digitale Bedürfnisse erfüllen.
              </p>
              <CTAButton text="Mehr über uns" link="/about" aria-label="Mehr Informationen über EasyDEV" />
            </div>
          </div>
        </div>

        {/* Typografisches Element */}
        <div className="mt-12 sm:mt-20 text-center">
          <p className="text-4xl sm:text-6xl font-bold text-accent opacity-20 mb-4 drop-shadow-lg">INNOVATION</p>
          <p className="text-lg sm:text-xl font-semibold drop-shadow-md">ist unser täglicher Antrieb</p>
        </div>

        {/* Kommentar: Weitere Informationen über EasyDEV wären hilfreich, um den Inhalt noch spezifischer zu gestalten */}
      </div>
    </section>
  );
}

export default AboutSection;