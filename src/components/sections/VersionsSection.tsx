import React from "react";

export default function VersionsSection() {
  return (
    <section id="versions" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Garden Station
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MVP Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
            <div className="mb-2">
              <span className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                MVP
              </span>
            </div>
            <p className="text-lg text-gray-600 font-medium min-h-[3.5rem] mb-6">
              Core automation for a single station
            </p>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Single-station operations",
                "Core environmental sensing (temperature, humidity, soil moisture)",
                "Automated watering and lighting control",
                "Local operator dashboard",
                "Basic runbooks and documentation",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Card */}
          <div className="bg-primary-light rounded-2xl border-2 border-primary p-8 shadow-md flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Coming Soon
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center rounded-md bg-primary/20 px-3 py-1 text-sm font-medium text-primary-dark">
                Pro
              </span>
            </div>
            <p className="text-lg text-primary-dark font-medium min-h-[3.5rem] mb-6">
              Full autonomy, vision, and multi-station scale
            </p>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-2">Everything in MVP, plus:</li>
              {[
                "Multi-station orchestration",
                "ML-based plant vision and disease detection",
                "Full robotic arm integration",
                "Advanced multi-zone scheduling",
                "Rich analytics and management views",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
