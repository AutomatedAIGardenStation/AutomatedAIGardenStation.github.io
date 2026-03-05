import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sensors Monitor",
      description: "Environmental sensors continuously measure soil moisture, temperature, humidity, and water levels.",
    },
    {
      number: "02",
      title: "AI Engine Decides",
      description: "The local AI engine evaluates live readings against plant growth profiles and generates an action list.",
    },
    {
      number: "03",
      title: "Hardware Acts",
      description: "The backend dispatches commands — watering, lighting, robotic arm movements — to the firmware controllers.",
    },
    {
      number: "04",
      title: "You Review",
      description: "The operator dashboard shows live telemetry and lets you override any action or adjust parameters at any time.",
    },
  ];

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-24 px-4 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 id="how-it-works-heading" className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Garden Station runs a continuous closed-loop cycle — automatically, locally, and reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col text-left">
              <div className="text-5xl font-bold text-primary mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
