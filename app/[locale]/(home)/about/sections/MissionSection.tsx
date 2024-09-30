import { Code, Zap, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MissionSection() {
  const t = useTranslations("About");
  const values = [
    { icon: Code, title: t('values.innovation'), description: t('values.innovationDesc') },
    { icon: Zap, title: t('values.quality'), description: t('values.qualityDesc') },
    { icon: Users, title: t('values.growth'), description: t('values.growthDesc') },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          {t("mission.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <value.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-accent" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}