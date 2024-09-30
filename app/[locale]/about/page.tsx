
import { useTranslations } from "next-intl";
import MissionSection from "./sections/MissionSection";
import ApproachSection from "./sections/ApproachSection";
import JourneySection from "./sections/JourneySection";
import CTASection from "./sections/CTASection";
import AboutUsHeaderSection from "./sections/AboutUsHeaderSection";
import Particles from "@/components/shared/Particles";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="bg-gradient-to-b from-primary to-primary-dark text-white">

      <AboutUsHeaderSection />
      <MissionSection/>
      <ApproachSection/>
      <JourneySection/>
      <CTASection 
        title={t("cta.title")}
        description={t("cta.description")}
        buttonText={t("cta.button")}
        buttonLink="/contact"
      />
    </div>
  );
}
