import { motion } from 'framer-motion';

interface JourneySectionProps {
  t: (key: string) => string;
}

export default function JourneySection({ t }: JourneySectionProps) {
  const journeySteps = [
    { number: 1, title: t('journey.step1.title'), description: t('journey.step1.description') },
    { number: 2, title: t('journey.step2.title'), description: t('journey.step2.description') },
    { number: 3, title: t('journey.step3.title'), description: t('journey.step3.description') },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("journey.title")}
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}