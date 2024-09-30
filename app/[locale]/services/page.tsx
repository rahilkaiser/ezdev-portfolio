"use client"
import { useTranslations } from "next-intl";
import ServicesHeaderSection from "./sections/ServicesHeaderSection";
import ServicesOfferingsSection from "./sections/ServicesOfferingsSection";
import ProcessSection from "./sections/ProcessSection";
import CTASection from "../about/sections/CTASection";

// Main Services Page component
export default function ServicesPage() {
  const t = useTranslations('Services');
  
  return (
    <div className="bg-gradient-to-b from-primary to-primary-dark text-white">
      <ServicesHeaderSection 
        title={t("title")}
        subtitle={t("subtitle")}
        introduction={t("introduction")}
      />
      <ServicesOfferingsSection t={t} />
      <ProcessSection t={t} />
      <CTASection 
        title={t("cta.title")}
        description={t("cta.description")}
        buttonText={t("cta.button")}
        buttonLink="/contact"
      />
    </div>
  );
}
