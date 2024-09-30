"use client"
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function JourneySection() {
  const t = useTranslations("About");
  const journeySteps = [
    { number: 1, title: t('journey.step1.title'), description: t('journey.step1.description') },
    { number: 2, title: t('journey.step2.title'), description: t('journey.step2.description') },
    { number: 3, title: t('journey.step3.title'), description: t('journey.step3.description') },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("journey.title")}
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent hidden sm:block"></div>
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-8 sm:mb-12 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center text-lg sm:text-xl font-bold text-black">
                {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}