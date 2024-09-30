"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CTAButton from "../shared/CTAButton";
import Particles from "../shared/Particles";

function HeroSection() {
  const t = useTranslations("HeroSection");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
      <motion.section
        className="mt-4 flex flex-col items-center justify-center gap-4 sm:gap-6 min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center"
          variants={itemVariants}
        >
          {t("Title")}
          <motion.span
            className="text-accent"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            .
          </motion.span>
        </motion.h1>
        <motion.h2
          className="text-slate-300 text-lg sm:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-4 leading-relaxed text-center"
          variants={itemVariants}
        >
          {t.rich("Subtitle", {
            websites: (chunks) => (
              <motion.span className="text-accent" whileHover={{ scale: 1.1 }}>
                {chunks}
              </motion.span>
            ),
            apps: (chunks) => (
              <motion.span className="text-accent" whileHover={{ scale: 1.1 }}>
                {chunks}
              </motion.span>
            ),
            itSolutions: (chunks) => (
              <motion.span className="text-accent" whileHover={{ scale: 1.1 }}>
                {chunks}
              </motion.span>
            ),
          })}
        </motion.h2>
        <motion.p
          className="text-slate-400 w-full sm:w-5/6 lg:w-2/3 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-center"
          variants={itemVariants}
        >
          {t("Description")}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
          <CTAButton text={t("CTAButton")} link="/contact" />
        </motion.div>
      </motion.section>
  );
}

export default HeroSection;
