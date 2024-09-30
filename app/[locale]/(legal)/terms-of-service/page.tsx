import React from 'react';
import { useTranslations } from 'next-intl';

export default function TermsOfService() {
  const t = useTranslations('TermsOfService');

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-primary">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        <p>{t('introduction')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('acceptance.title')}</h2>
        <p>{t('acceptance.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('serviceDescription.title')}</h2>
        <p>{t('serviceDescription.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('userObligations.title')}</h2>
        <p>{t('userObligations.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('intellectualProperty.title')}</h2>
        <p>{t('intellectualProperty.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('liability.title')}</h2>
        <p>{t('liability.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('termination.title')}</h2>
        <p>{t('termination.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('changes.title')}</h2>
        <p>{t('changes.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('governingLaw.title')}</h2>
        <p>{t('governingLaw.description')}</p>
      </div>
    </div>
  );
}