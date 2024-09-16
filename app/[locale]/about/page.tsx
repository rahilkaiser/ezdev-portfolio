"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from 'framer-motion';
import CTAButton from '../../../components/shared/CTAButton';
import { Users, Star, Shield, Award, Clock, ThumbsUp } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations("About");

  const values = [
    { icon: Users, title: t('values.clientFocus'), description: t('values.clientFocusDesc') },
    { icon: Star, title: t('values.quality'), description: t('values.qualityDesc') },
    { icon: Shield, title: t('values.trust'), description: t('values.trustDesc') },
  ];

  const achievements = [
    { icon: Award, title: t('achievements.projects'), value: '50+' },
    { icon: Clock, title: t('achievements.experience'), value: '10+' },
    { icon: ThumbsUp, title: t('achievements.satisfaction'), value: '100%' },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-primary">
      <header className="bg-primary text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("mission.title")}
          </motion.h2>
          <motion.p 
            className="text-lg mb-12 text-center max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("mission.description")}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <value.icon className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 flex-grow">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("achievements.title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-center"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-semibold mb-2">{achievement.value}</h3>
                <p className="text-gray-600">{achievement.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("approach.title")}
          </motion.h2>
          <motion.p 
            className="text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("approach.description")}
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-semibold mb-4">{t("approach.transparency")}</h3>
              <p>{t("approach.transparencyDesc")}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-semibold mb-4">{t("approach.collaboration")}</h3>
              <p>{t("approach.collaborationDesc")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("cta.description")}
          </motion.p>

            <div className="justify-center ">
              <CTAButton text={t("cta.button")} link="/contact" />
            </div>

        </div>
      </section>

    </div>
  );
}
