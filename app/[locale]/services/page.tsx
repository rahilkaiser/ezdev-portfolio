"use client"
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import CTAButton from '../../../components/shared/CTAButton';
import { Code, Smartphone, Server, Users, Star, Shield } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    { icon: Code, title: t('services.webDev.title'), description: t('services.webDev.description') },
    { icon: Smartphone, title: t('services.appDev.title'), description: t('services.appDev.description') },
    { icon: Server, title: t('services.itSolutions.title'), description: t('services.itSolutions.description') },
  ];

  const processSteps = [
    { number: 1, title: t('process.listen'), description: t('process.listenDesc') },
    { number: 2, title: t('process.plan'), description: t('process.planDesc') },
    { number: 3, title: t('process.develop'), description: t('process.developDesc') },
    { number: 4, title: t('process.deliver'), description: t('process.deliverDesc') },
  ];

  const benefits = [
    { icon: Users, title: t('benefits.customized'), description: t('benefits.customizedDesc') },
    { icon: Star, title: t('benefits.quality'), description: t('benefits.qualityDesc') },
    { icon: Shield, title: t('benefits.support'), description: t('benefits.supportDesc') },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-primary">
      <header className="bg-primary text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("subtitle")}</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("servicesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">{t("processTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start h-full"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("benefitsTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 flex-grow">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t("cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
          <CTAButton text={t("cta.button")} link="/contact" />
        </div>
      </section>
    </div>
  );
}
