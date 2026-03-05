import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import VersionsSection from "@/components/sections/VersionsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
      <HowItWorksSection />

      <VersionsSection />
      <ContactSection />
    </main>
  );
}
