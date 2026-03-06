import React from "react";

export default function TechnicalSpecsSection() {
  const specs = [
    {
      category: "Hardware Core",
      items: [
        { label: "Microcontroller", value: "ESP32-S3 (Dual-core 240MHz)" },
        { label: "Connectivity", value: "Wi-Fi 802.11 b/g/n, Bluetooth 5 (LE)" },
        { label: "Storage", value: "16MB SPI Flash, 8MB PSRAM" },
        { label: "Power", value: "12V DC input, integrated 5V/3.3V step-down" },
      ],
    },
    {
      category: "Sensors & Environment",
      items: [
        { label: "Moisture", value: "Capacitive soil moisture sensors (x4)" },
        { label: "Climate", value: "BME280 (Temp, Humidity, Pressure)" },
        { label: "Light", value: "VEML7700 Ambient Light Sensor" },
        { label: "Water Level", value: "Non-contact capacitive liquid level sensor" },
      ],
    },
    {
      category: "Actuators & Robotics",
      items: [
        { label: "Robotic Arm", value: "6-DOF open-source printable arm (NEMA 17/14)" },
        { label: "Pumps", value: "12V Peristaltic pumps (x3 for nutrients, x1 for water)" },
        { label: "Lighting", value: "Full-spectrum dimmable LED grow lights (PWM controlled)" },
        { label: "Valves", value: "12V Solenoid valves (x4 independent zones)" },
      ],
    },
    {
      category: "Software & AI",
      items: [
        { label: "Backend", value: "Local Node.js / Express (No cloud required)" },
        { label: "AI Engine", value: "TensorFlow Lite for Microcontrollers" },
        { label: "Vision", value: "ESP32-CAM module (OV2640 2MP)" },
        { label: "Dashboard", value: "React + Ionic web interface" },
      ],
    },
  ];

  return (
    <section id="technical-specs" aria-labelledby="technical-specs-heading" className="py-24 px-4 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="technical-specs-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Built on robust open-source hardware and local-first software. Here is what powers the Garden Station.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specs.map((specGroup, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                {specGroup.category}
              </h3>
              <dl className="space-y-4">
                {specGroup.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500 sm:col-span-1">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-gray-900 sm:col-span-2">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
