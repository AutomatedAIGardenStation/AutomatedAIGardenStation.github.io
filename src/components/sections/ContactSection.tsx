"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Stay in the Loop</h2>
        <p className="text-xl text-primary-light/80 mb-10 max-w-2xl mx-auto">
          Garden Station is in active development. Sign up to be notified when it launches.
        </p>

        {submitted ? (
          <div className="bg-primary/30 border border-primary text-white px-6 py-4 rounded-lg inline-block text-lg font-medium">
            Thanks, we&apos;ll be in touch!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" action="">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Get Notified
            </button>
          </form>
        )}

        <p className="mt-12 text-sm text-primary-light/60">
          Built with care for growers who want full control.
        </p>
      </div>
    </section>
  );
}
