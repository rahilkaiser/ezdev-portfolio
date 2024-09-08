import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import FeaturedProjectsSection from "../sections/FeaturedProjectsSection";
import OtherProjectsSection from "../sections/OtherProjectsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

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
