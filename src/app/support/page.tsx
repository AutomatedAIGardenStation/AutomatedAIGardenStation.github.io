import React from "react";
import FAQSection from "@/components/sections/FAQSection";
import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Support & FAQ
        </h1>
        <p className="text-xl text-gray-600">
          We&apos;re here to help you grow.
        </p>
      </div>
      <FAQSection />
      <div className="mt-12 mb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">Reach out to our support team.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
            Contact Support
          </Link>
      </div>
    </main>
  );
}
