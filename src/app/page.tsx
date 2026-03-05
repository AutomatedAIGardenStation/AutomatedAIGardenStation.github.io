import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
      <HowItWorksSection />

      <section
        id="versions"
        className="min-h-screen flex items-center justify-center border-b border-gray-200 bg-gray-50"
      >
        <h2 className="text-3xl font-bold">Versions Section TBD</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold">Contact Section TBD</h2>
      </section>
    </main>
  );
}
