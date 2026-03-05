import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQSection from "../FAQSection";

describe("FAQSection Component", () => {
  it("renders the section heading", () => {
    render(<FAQSection />);
    expect(screen.getByRole("heading", { name: /Frequently Asked Questions/i })).toBeInTheDocument();
  });

  it("renders exactly 10 FAQ items", () => {
    render(<FAQSection />);
    const detailsElements = document.querySelectorAll("details");
    expect(detailsElements).toHaveLength(10);
  });

  it("has the first item open by default", () => {
    render(<FAQSection />);
    const detailsElements = document.querySelectorAll("details");
    expect(detailsElements[0]).toHaveAttribute("open");
    expect(detailsElements[1]).not.toHaveAttribute("open");
  });

  it("toggles the open attribute when clicking summary", () => {
    render(<FAQSection />);

    // Grab the second details item
    const detailsElements = document.querySelectorAll("details");
    const secondItem = detailsElements[1];
    const secondSummary = secondItem.querySelector("summary");

    // Initially not open
    expect(secondItem).not.toHaveAttribute("open");

    // Simulate open
    if (secondSummary) {
      fireEvent.click(secondSummary);
      expect(secondItem).toHaveAttribute("open");
    }
  });
});
