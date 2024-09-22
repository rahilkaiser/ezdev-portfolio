"use client"
import { useTranslations } from "next-intl";
import ServicesHeaderSection from "./sections/ServicesHeaderSection";
import ProcessSection from "./sections/ProcessSection";
import CTASection from "../about/sections/CTASection";


// Main Services Page component
export default function ServicesPage() {
  const t = useTranslations('Services');
  return (
    <div className="bg-white text-primary">
      <ServicesHeaderSection />
      <ProcessSection />
      <CTASection 
        title={t("cta.title")}
        description={t("cta.description")}
        buttonText={t("cta.button")}
        buttonLink="/contact" />
      {/* <ServicesSection t={t} />
      
      <BenefitsSection t={t} />
      <CTASection  */}
        {/* title={t("cta.title")}
        description={t("cta.description")}
        buttonText={t("cta.button")}
        buttonLink="/contact" */}
      {/* /> */}
    </div>
  );
}
