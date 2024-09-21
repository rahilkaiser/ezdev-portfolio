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
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h2>
        <div className="justify-center flex">
          <CTAButton text={buttonText} link={buttonLink} />
        </div>
      </div>
    </section>
  );
}