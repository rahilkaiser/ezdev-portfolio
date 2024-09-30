import { motion } from 'framer-motion';
import { Ear, PenTool, Code as CodeIcon, CheckCircle } from 'lucide-react';

interface ProcessSectionProps {
  t: (key: string) => string;
}

export default function ProcessSection({ t }: ProcessSectionProps) {
  const processSteps = [
    { icon: Ear, key: 'listen' },
    { icon: PenTool, key: 'plan' },
    { icon: CodeIcon, key: 'develop' },
    { icon: CheckCircle, key: 'deliver' },
  ];

  return (
    <section className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("process.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <step.icon className="w-16 h-16 mb-6 text-accent mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">{t(`process.${step.key}`)}</h3>
              <p className="text-gray-300">{t(`process.${step.key}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}