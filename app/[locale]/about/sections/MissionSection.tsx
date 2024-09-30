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
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          {t("mission.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg"
            >
              <value.icon className="w-12 h-12 mb-6 text-accent" />
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}