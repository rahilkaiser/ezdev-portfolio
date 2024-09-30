import { motion } from 'framer-motion';

interface ApproachSectionProps {
  t: (key: string) => string;
}

export default function ApproachSection({ t }: ApproachSectionProps) {
  return (
    <section className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("approach.title")}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6">{t("approach.passion")}</h3>
            <p className="text-lg text-gray-300 mb-8">{t("approach.passionDesc")}</p>
            <div className="h-1 w-24 bg-accent"></div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6">{t("approach.freshPerspective")}</h3>
            <p className="text-lg text-gray-300 mb-8">{t("approach.freshPerspectiveDesc")}</p>
            <div className="h-1 w-24 bg-accent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}