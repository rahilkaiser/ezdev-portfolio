"use client"
import { useTranslations } from "next-intl";
import MissionSection from "./sections/MissionSection";
import CTASection from "./sections/CTASection";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="bg-white text-primary">
      <MissionSection t={t} />
      {/* <AchievementsSection t={t} /> */}
      {/* <ApproachSection t={t} /> */}
      <CTASection 
        title={t("cta.title")}
        description={t("cta.description")}
        buttonText={t("cta.button")}
        buttonLink="/contact"
      />
    </div>
  );
}
