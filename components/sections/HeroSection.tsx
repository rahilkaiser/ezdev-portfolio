"use client";
import React from "react";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import CTAButton from "../shared/CTAButton";

function HeroSection() {
  const t = useTranslations("HeroSection");
  
  return (
    <section className="mt-4 flex flex-col items-start justify-center gap-6 h-screen">
      <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">
        {t("Title")}
        <span className="text-accent">.</span>
      </h1>
      <h2 className="text-slate-300 text-xl md:text-2xl lg:text-3xl mt-4">
        {t.rich("Subtitle", {
          websites: (chunks) => <span className="text-accent">{chunks}</span>,
          apps: (chunks) => <span className="text-accent">{chunks}</span>,
          itSolutions: (chunks) => <span className="text-accent">{chunks}</span>
        })}
      </h2>
      <p className="text-slate-400 w-2/3 mt-6 text-lg">
        {t("Description")}
      </p>
      <CTAButton text={t("CTAButton")} link="/contact" />
    </section>
  );
}

export default HeroSection;
