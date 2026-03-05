import React from "react";

const faqs = [
  {
    question: "What is Garden Station?",
    answer: "Garden Station is an automated indoor growing environment combining a robotic arm, ESP32 sensor/actuator network, computer vision ML pipeline, and an AI decision engine.",
  },
  {
    question: "MVP vs Pro differences?",
    answer: "The MVP provides core automation for a single station, including basic environmental sensing and watering. The Pro version adds multi-station orchestration, an integrated robotic arm, ML-based plant vision, and advanced scheduling.",
  },
  {
    question: "What hardware do I need?",
    answer: "You will need the Garden Station core unit, which includes the ESP32 network, sensors, and for the Pro version, the robotic arm assembly. A local server or computer is required to run the backend and AI decision engine.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes, Garden Station is entirely orchestrated by a local, cloud-independent backend, ensuring it works completely offline and keeps your operations private.",
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. Since the system runs locally on your own hardware without requiring cloud connectivity, all sensor data, images, and AI decision logs remain entirely on your own network.",
  },
  {
    question: "Can I expand beyond one station?",
    answer: "Yes, the Pro version is specifically designed for multi-station orchestration, allowing you to scale your growing operations while managing everything from a central dashboard.",
  },
  {
    question: "What sensors are included?",
    answer: "The core environmental sensing package includes temperature, humidity, and soil moisture sensors. Additional sensors can be integrated depending on your specific setup.",
  },
  {
    question: "How does the AI work?",
    answer: "The AI decision engine analyzes sensor data and computer vision inputs to determine optimal watering, lighting, and nutrient delivery, adjusting schedules dynamically to maximize plant health.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Currently, Garden Station provides a responsive web-based local operator dashboard that can be accessed from any device on your local network, including smartphones and tablets.",
  },
  {
    question: "How do I get support?",
    answer: "Support is available through our community forums and comprehensive documentation. Pro users also have access to direct technical support and prioritized feature requests.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Garden Station.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-lg bg-gray-50 [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                {faq.question}

                <span className="relative size-5 shrink-0">
                  <svg
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <svg
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </span>
              </summary>

              <div className="p-4 pt-0 text-gray-600 transition-all duration-300">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
