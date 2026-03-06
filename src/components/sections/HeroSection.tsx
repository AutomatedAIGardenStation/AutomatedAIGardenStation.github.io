import React from "react";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Subdued Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-multiply"
        aria-hidden="true"
        data-testid="hero-video"
      >
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>

      {/* Background Gradient Fallback & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/80 to-white/90 z-0"></div>

      {/* Glassmorphism Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-8 sm:p-12">
        <h1 id="hero-heading" className="text-5xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
          Grow Smarter, Not Harder
        </h1>
        <p className="text-xl text-gray-800 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-sm">
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
