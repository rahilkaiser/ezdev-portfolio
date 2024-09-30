"use client"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import HeroSection from "../../../components/sections/HeroSection";
import AboutSection from "../../../components/sections/AboutSection";
import ServicesSection from "../../../components/sections/ServicesSection";
import FeaturedProjectsSection from "../../../components/sections/FeaturedProjectsSection";
import TestimonialsSection from "../../../components/sections/TestimonialsSection";
import ContactSection from "../../../components/sections/ContactSection";
import Navbar from "@/components/shared/Navbar";
import ClientSideWrapper from "@/components/shared/ClientSideWrapper";

export default function Home() {

  
  return (
    <>
      
      <main className="container mx-auto bg-gradient-to-b from-primary to-primary-dark">
        <HeroSection />
        <ClientSideWrapper>
          <AboutSection />
        </ClientSideWrapper>
        <ClientSideWrapper>
          <ServicesSection />
        </ClientSideWrapper>
        <ClientSideWrapper>
          <FeaturedProjectsSection />
        </ClientSideWrapper>
        <ClientSideWrapper>
          <TestimonialsSection />
        </ClientSideWrapper>
        <ClientSideWrapper>
          <ContactSection showTitle={true} />
        </ClientSideWrapper>
      </main>
    </>
  );
}
