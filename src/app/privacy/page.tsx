import React from "react";

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Last updated: October 26, 2023
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p>
            At Garden Station, we take your privacy seriously. Since our core product runs entirely on your local network, your data stays with you. This policy outlines how we handle data collected strictly through our public website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
          <p>
            When you use our website (gardenstation.app), we may collect the following information:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact information (such as your email address if you join our waitlist or contact support).</li>
            <li>Basic analytics data to help us improve website performance.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Local Operations</h2>
          <p>
            The Garden Station automated indoor growing system operates independently on your local network. No sensor data, plant images, or AI decision logs are transmitted to any cloud services by default. Your garden operations are completely private.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or concerns about this privacy policy, please contact us at support@gardenstation.app.
          </p>
        </div>
      </div>
    </main>
  );
}
