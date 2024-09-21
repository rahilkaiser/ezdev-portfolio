import { fadeInUpVariants } from '@/utils/animations';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';


interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function ValueCard({ icon: Icon, title, description, delay }: ValueCardProps) {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg shadow-lg h-full flex flex-col"
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: delay * 0.1 }}
    >
      <Icon className="w-12 h-12 mb-4 text-accent" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 flex-grow">{description}</p>
    </motion.div>
  );
}