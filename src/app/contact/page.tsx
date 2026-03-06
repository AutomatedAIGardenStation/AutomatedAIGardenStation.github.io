import React from "react";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <main className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600">
          We&apos;d love to hear from you.
        </p>
      </div>
      <ContactSection />
    </main>
  );
}
