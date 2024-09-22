import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg flex items-start h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="mr-4">
      <div className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center text-xl font-bold">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  </motion.div>
);

export default ProcessStep;