import React from "react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Documentation
        </h1>
        <div className="prose prose-lg text-gray-600">
          <p>
            Welcome to the Garden Station documentation. Here you will find guides, API references, and tutorials for setting up and operating your Garden Station.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Documentation is currently being drafted. Please check back later for detailed guides on the MVP and Pro versions.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Quick Links</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="/#how-it-works" className="text-primary hover:underline">How It Works</Link></li>
            <li><Link href="/#technical-specs" className="text-primary hover:underline">Technical Specifications</Link></li>
            <li><Link href="/support" className="text-primary hover:underline">Support & FAQ</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
