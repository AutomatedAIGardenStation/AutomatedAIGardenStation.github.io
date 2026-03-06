import React from "react";

export default function TermsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Last updated: October 26, 2023
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Garden Station website and purchasing our hardware products, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Hardware Usage</h2>
          <p>
            The Garden Station hardware (MVP and Pro versions) is designed for personal, non-commercial use unless expressly agreed upon in a separate commercial license agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Local Software</h2>
          <p>
            The software necessary to run the Garden Station operates locally on your hardware. You are responsible for the maintenance and security of your local network environment. Garden Station is not liable for data loss or operational issues arising from local network failures or improper configuration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall Garden Station, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
          <p>
            For any questions regarding these Terms, please contact us at support@gardenstation.app.
          </p>
        </div>
      </div>
    </main>
  );
}
