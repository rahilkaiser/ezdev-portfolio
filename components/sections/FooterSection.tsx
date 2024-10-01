"use client"
import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { companyDetails } from '@/constants/companyDetails';

const FooterSection: React.FC = () => {
  const t = useTranslations('Footer');
  const contactTranslations = useTranslations('Contact');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              <li><Link locale={locale} href="/about" className="hover:text-accent transition-colors">{t('about')}</Link></li>
              <li><Link href="/services"  locale={locale}className="hover:text-accent transition-colors">{t('services')}</Link></li>
              <li><Link href="/projects" locale={locale} className="hover:text-accent transition-colors">{t('projects')}</Link></li>
              <li><Link href="/contact" locale={locale} className="hover:text-accent transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li><Link locale={locale} href={`/${locale}/privacy-policy`} className="hover:text-accent transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link locale={locale} href={`/${locale}/terms-of-service`} className="hover:text-accent transition-colors">{t('termsOfService')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <p>{contactTranslations('addressValue')}</p>
            <p>{t('email')}: {companyDetails[1].description}</p>
            <p>{t('phone')}: {companyDetails[0].description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('followUs')}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} EasyDEV. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
