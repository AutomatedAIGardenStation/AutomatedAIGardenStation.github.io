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

export default function Home() {
  return (
    <main>
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
