import { fadeInUpVariants } from '@/utils/animations';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';


interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  delay: number;
}

export default function AchievementCard({ icon: Icon, title, value, delay }: AchievementCardProps) {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-center"
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: delay * 0.1 }}
    >
      <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
      <h3 className="text-2xl font-semibold mb-2">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </motion.div>
  );
}