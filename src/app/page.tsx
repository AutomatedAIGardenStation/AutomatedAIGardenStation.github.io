import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />

      <section
        id="features"
        className="min-h-screen flex items-center justify-center border-b border-gray-200 bg-gray-50"
      >
        <h2 className="text-3xl font-bold">Features Section TBD</h2>
      </section>

      <section
        id="how-it-works"
        className="min-h-screen flex items-center justify-center border-b border-gray-200"
      >
        <h2 className="text-3xl font-bold">How It Works Section TBD</h2>
      </section>

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
