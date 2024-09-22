"use client"
import { Code, Smartphone, Server } from 'lucide-react';
import ServiceCard from '@/components/shared/cards/ServiceCard';
import Header from '../../../../components/shared/Header';
import { useTranslations } from 'next-intl';

export default function ServicesHeaderSection() {
  const t = useTranslations('Services');
  const services = [
    { icon: Code, title: t('services.webDev.title'), description: t('services.webDev.description') },
    { icon: Smartphone, title: t('services.appDev.title'), description: t('services.appDev.description') },
    { icon: Server, title: t('services.itSolutions.title'), description: t('services.itSolutions.description') },
  ];

  return (
    <section className="py-16 bg-primary text-white">
        <Header title={t("title")} subtitle={t("subtitle")} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((value, index) => (
            <ServiceCard key={index} Icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
}