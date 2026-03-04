import React from "react";

export default function ProductSection() {
  return (
    <section id="product" className="py-24 px-4 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Garden Station?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Garden Station is a stationary, automated indoor growing environment. It combines a robotic arm, an ESP32-based sensor and actuator network, a computer vision ML pipeline, and an AI decision engine — all orchestrated by a local backend with no cloud dependency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Automation */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 text-3xl">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Automation</h3>
            <p className="text-gray-600 leading-relaxed">
              Handles watering, lighting, and nutrient dosing on a schedule — autonomously adjusting based on live sensor data.
            </p>
          </div>

          {/* AI-Driven Decisions */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 text-3xl">
              🧠
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Driven Decisions</h3>
            <p className="text-gray-600 leading-relaxed">
              A local AI engine evaluates plant profiles and sensor snapshots to determine the optimal action at every moment.
            </p>
          </div>

          {/* Zero Cloud Dependency */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 text-3xl">
              🔒
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Zero Cloud Dependency</h3>
            <p className="text-gray-600 leading-relaxed">
              All data stays local. The station operates fully offline — no subscriptions, no internet required for core functions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
