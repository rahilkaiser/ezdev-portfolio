import AchievementCard from '@/components/shared/cards/AchievementCard';
import { fadeInUpVariants } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Award, Clock, ThumbsUp } from 'lucide-react';

interface AchievementsSectionProps {
  t: (key: string) => string;
}

export default function AchievementsSection({ t }: AchievementsSectionProps) {
  const achievements = [
    { icon: Award, title: t('achievements.projects'), value: '50+' },
    { icon: Clock, title: t('achievements.experience'), value: '10+' },
    { icon: ThumbsUp, title: t('achievements.satisfaction'), value: '100%' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {t("achievements.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}