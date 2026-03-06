import React from "react";
import { render, screen } from "@testing-library/react";
import TechnicalSpecsSection from "../TechnicalSpecsSection";

describe("TechnicalSpecsSection", () => {
  it("renders the technical specifications section", () => {
    render(<TechnicalSpecsSection />);

    // Check for main heading
    expect(screen.getByRole("heading", { name: /technical specifications/i })).toBeInTheDocument();
  });

  it("renders the specification categories", () => {
    render(<TechnicalSpecsSection />);

    // Check for category headings
    expect(screen.getByRole("heading", { name: /hardware core/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sensors & environment/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /actuators & robotics/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /software & ai/i })).toBeInTheDocument();
  });

  it("renders specific technical details", () => {
    render(<TechnicalSpecsSection />);

    // Check for some specific labels and values
    expect(screen.getByText("Microcontroller")).toBeInTheDocument();
    expect(screen.getByText("ESP32-S3 (Dual-core 240MHz)")).toBeInTheDocument();

    expect(screen.getByText("Moisture")).toBeInTheDocument();
    expect(screen.getByText("Capacitive soil moisture sensors (x4)")).toBeInTheDocument();

    expect(screen.getByText("Robotic Arm")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
  });
});
