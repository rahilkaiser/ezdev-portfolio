import { fadeInUpVariants } from '@/utils/animations';
import { motion } from 'framer-motion';


interface ApproachSectionProps {
  t: (key: string) => string;
}

export default function ApproachSection({ t }: ApproachSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {t("approach.title")}
        </motion.h2>
        <motion.p 
          className="text-lg mb-12 max-w-3xl mx-auto"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {t("approach.description")}
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-semibold mb-4">{t("approach.transparency")}</h3>
            <p>{t("approach.transparencyDesc")}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-semibold mb-4">{t("approach.collaboration")}</h3>
            <p>{t("approach.collaborationDesc")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}