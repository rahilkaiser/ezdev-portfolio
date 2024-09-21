import ValueCard from '@/components/shared/cards/ValueCard';
import { fadeInUpVariants } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Users, Star, Shield } from 'lucide-react';
import Header from './Header';

interface MissionSectionProps {
  t: (key: string) => string;
}

export default function MissionSection({ t }: MissionSectionProps) {
  const values = [
    { icon: Users, title: t('values.clientFocus'), description: t('values.clientFocusDesc') },
    { icon: Star, title: t('values.quality'), description: t('values.qualityDesc') },
    { icon: Shield, title: t('values.trust'), description: t('values.trustDesc') },
  ];

  return (
    <section className="py-16 bg-primary text-white">
        <Header title={t("title")} subtitle={t("mission.description")} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}