import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Brain, Layers, Settings } from 'lucide-react';

interface ServicesOfferingsSectionProps {
  t: (key: string) => string;
}

export default function ServicesOfferingsSection({ t }: ServicesOfferingsSectionProps) {
  const offerings = [
    { icon: Globe, key: 'websiteDev' },
    { icon: Code, key: 'webAppDev' },
    { icon: Smartphone, key: 'mobileDev' },
    { icon: Brain, key: 'aiSolutions' },
    { icon: Layers, key: 'fullStackDev' },
    { icon: Settings, key: 'customSolutions' },
  ];

  return (
    <section className="pb-24 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("offerings.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <offering.icon className="w-12 h-12 mb-6 text-accent" />
              <h3 className="text-2xl font-semibold mb-4">{t(`offerings.${offering.key}.title`)}</h3>
              <p className="text-gray-300">{t(`offerings.${offering.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}