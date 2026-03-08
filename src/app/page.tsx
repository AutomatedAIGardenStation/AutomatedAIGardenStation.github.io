import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import InteractiveShowcaseSection from "@/components/sections/InteractiveShowcaseSection";
import ProductSection from "@/components/sections/ProductSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TechnicalSpecsSection from "@/components/sections/TechnicalSpecsSection";
import VersionsSection from "@/components/sections/VersionsSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistSection from "@/components/sections/WaitlistSection";

export const metadata: Metadata = {
  title: "Garden Station — Automated Indoor Growing System",
  description: "Garden Station automates your entire plant lifecycle using computer vision, AI decisions, and precise hardware control. No cloud required.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <InteractiveShowcaseSection />
      <ProductSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TechnicalSpecsSection />
      <FAQSection />
      <WaitlistSection />
      <VersionsSection />
      <ContactSection />
    </main>
  );
}
