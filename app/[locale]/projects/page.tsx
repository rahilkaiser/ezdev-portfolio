import { testimonials } from "@/constants/testimonials";
import { useTranslations } from "next-intl";
import ProjectsHeaderSection from "./sections/ProjectsHeaderSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "../about/sections/CTASection";
import ProjectsSection from "./sections/ProjectSection";
import Particles from "@/components/shared/Particles";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  return (
    <div className="bg-gradient-to-b from-primary to-primary-dark">
      <ProjectsHeaderSection 
        title={t("title")} 
        subtitle={t("subtitle")} 
        introduction={t("introduction")}
      />
      <TestimonialsSection 
        testimonials={testimonials} 
        readMoreText={t("readMore")}
        sectionTitle={t("testimonialsTitle")}
      />
      <CTASection 
        title={t("cta.title")} 
        description={t("cta.description")} 
        buttonText={t("cta.button")}
        buttonLink="/contact"
      />
      <ProjectsSection 
        loadMoreText={t("loadMore")}
      />

    </div>
  );
}