import React from "react";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-primary-light to-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 id="hero-heading" className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Grow Smarter, Not Harder
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
          Garden Station automates your entire plant lifecycle — from seeding to harvest — using computer vision, AI-driven decisions, and precise hardware control.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-center"
          >
            Discover the System
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-primary font-medium rounded-lg border-2 border-primary hover:bg-primary-light transition-colors text-center"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
