"use client"
import CTAButton from '@/components/shared/CTAButton';
import { fadeInUpVariants } from '@/utils/animations';
import { motion } from 'framer-motion';


interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex justify-center"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          <CTAButton text={buttonText} link={buttonLink} />
        </motion.div>
      </div>
    </section>
  );
}