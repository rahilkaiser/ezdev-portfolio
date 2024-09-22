import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

/**
 * A reusable service card component with animation and hover effects.
 */
export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-secondary p-6 rounded-lg shadow-lg border border-accent relative overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
      <div className="absolute top-0 right-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
      <div className="absolute bottom-0 right-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
      <Icon className="w-12 h-12 mb-4 text-accent group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-2xl font-semibold mb-4 text-accent group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
      <p className="text-slate-300 mb-6 group-hover:text-white transition-colors duration-300">{description}</p>
    </motion.div>
  );
}