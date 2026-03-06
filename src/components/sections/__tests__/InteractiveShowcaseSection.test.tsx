import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InteractiveShowcaseSection from "../InteractiveShowcaseSection";

describe("InteractiveShowcaseSection", () => {
  it("renders the interactive showcase section", () => {
    render(<InteractiveShowcaseSection />);
    const section = screen.getByRole("region", { name: /Experience the Future of Growing/i });
    expect(section).toBeInTheDocument();
  });

  it("contains the correct heading", () => {
    render(<InteractiveShowcaseSection />);
    const heading = screen.getByRole("heading", { name: /Experience the Future of Growing/i });
    expect(heading).toBeInTheDocument();
  });

  it("contains the interactive 3D view placeholder", () => {
    render(<InteractiveShowcaseSection />);
    const placeholderText = screen.getByText(/Interactive 3D View/i);
    expect(placeholderText).toBeInTheDocument();
  });

  it("contains call-to-action buttons", () => {
    render(<InteractiveShowcaseSection />);
    expect(screen.getByRole("button", { name: /Explore 3D Model/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Watch Video/i })).toBeInTheDocument();
  });
});
