import React from 'react';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPolicy');

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-primary">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        <p>{t('introduction')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('dataCollection.title')}</h2>
        <p>{t('dataCollection.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('dataUse.title')}</h2>
        <p>{t('dataUse.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('dataSecurity.title')}</h2>
        <p>{t('dataSecurity.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('cookies.title')}</h2>
        <p>{t('cookies.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('thirdPartyServices.title')}</h2>
        <p>{t('thirdPartyServices.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('userRights.title')}</h2>
        <p>{t('userRights.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('changes.title')}</h2>
        <p>{t('changes.description')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-3">{t('contact.title')}</h2>
        <p>{t('contact.description')}</p>
      </div>
    </div>
  );
}