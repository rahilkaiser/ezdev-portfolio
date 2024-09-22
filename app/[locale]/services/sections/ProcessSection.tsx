import React from 'react';

import { useTranslations } from 'next-intl';
import ProcessStep from '@/components/shared/cards/ProcessStep';

// Process Section component
const ProcessSection = () => {
  const t = useTranslations('Services');
  const processSteps = [
    { number: 1, title: t('process.listen'), description: t('process.listenDesc') },
    { number: 2, title: t('process.plan'), description: t('process.planDesc') },
    { number: 3, title: t('process.develop'), description: t('process.developDesc') },
    { number: 4, title: t('process.deliver'), description: t('process.deliverDesc') },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-accent text-3xl font-bold mb-16 text-center">{t("processTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} {...step} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;