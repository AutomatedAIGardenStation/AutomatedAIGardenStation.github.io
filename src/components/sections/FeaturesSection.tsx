import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Automated Watering & Nutrients",
      description: "Delivers precise water volumes and nutrient recipes to each growing zone on schedule or in response to real-time soil moisture readings.",
      emoji: "💧",
      imageLeft: false,
    },
    {
      title: "Robotic Arm Harvesting",
      description: "A 6-axis robotic arm handles targeted inspection, pollination assistance, and harvest sequences — controlled entirely by the local backend.",
      emoji: "🤖",
      imageLeft: true,
    },
    {
      title: "ML Plant Vision",
      description: "Cameras feed a local computer vision pipeline that detects plant health, fruit ripeness, and early signs of disease — without sending a single frame to the cloud.",
      emoji: "📷",
      imageLeft: false,
    },
    {
      title: "Real-Time Operator Dashboard",
      description: "A React + Ionic dashboard gives full monitoring and manual override from any browser on the local network — mobile or desktop.",
      emoji: "💻",
      imageLeft: true,
    },
  ];

  return (
    <section id="features" aria-labelledby="features-heading" className="py-24 px-4 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900">What It Can Do</h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div
                aria-hidden="true"
                className={`w-full lg:w-1/2 aspect-video bg-primary-light rounded-2xl flex items-center justify-center text-7xl shadow-sm order-2 lg:order-none`}
              >
                {feature.emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
