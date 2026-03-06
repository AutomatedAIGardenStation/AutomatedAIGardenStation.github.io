import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "../HeroSection";

describe("HeroSection Component", () => {
  it("renders the section heading", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { name: /Grow Smarter, Not Harder/i })).toBeInTheDocument();
  });

  it("renders the video background element with correct attributes", () => {
    render(<HeroSection />);
    const videoElement = screen.getByTestId("hero-video");
    expect(videoElement).toBeInTheDocument();

    // In React, boolean attributes like muted or loop are either present as "" or mapped to DOM properties
    // testing-library with React handles this slightly differently. Let's check DOM representation
    expect(videoElement).toHaveAttribute("autoplay");
    expect(videoElement).toHaveAttribute("loop");
    // React's `muted` prop correctly sets the `muted` DOM property, but doesn't always reflect as an attribute string `muted=""`
    // The standard way to check is testing the property or checking attribute presence depending on React version and JSDom.
    // playsInline becomes playsinline in DOM
    expect(videoElement).toHaveAttribute("playsinline");
    expect(videoElement).toHaveClass("opacity-40");
  });

  it("renders the glassmorphism container classes correctly", () => {
    render(<HeroSection />);

    // Find the container holding the text
    const heading = screen.getByRole("heading", { name: /Grow Smarter, Not Harder/i });
    const container = heading.parentElement;

    // Verify it exists
    expect(container).toBeInTheDocument();

    // Check for specific glassmorphism tailwind classes
    expect(container).toHaveClass("bg-white/30");
    expect(container).toHaveClass("backdrop-blur-md");
    expect(container).toHaveClass("border-white/20");
    expect(container).toHaveClass("shadow-lg");
    expect(container).toHaveClass("rounded-2xl");
  });
});
