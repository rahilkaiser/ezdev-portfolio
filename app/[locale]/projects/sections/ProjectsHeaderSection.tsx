"use client"
import Header from '../../../../components/shared/Header';
import { useTranslations } from 'next-intl';

export default function ProjectsHeaderSection() {
  const t = useTranslations('Projects');

  return (
    <section className="py-16 bg-primary text-white">
        <Header title={t("title")} subtitle={t("subtitle")} />
    </section>
  );
}