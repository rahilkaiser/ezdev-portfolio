import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import ServicesSection from "../../components/sections/ServicesSection";
import FeaturedProjectsSection from "../../components/sections/FeaturedProjectsSection";
import OtherProjectsSection from "../../components/sections/OtherProjectsSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import ContactSection from "../../components/sections/ContactSection";
import Navbar from "@/components/shared/Navbar";


export default function Home() {

  return (
    <div>
        <Navbar />
      <main className="container mx-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <OtherProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
