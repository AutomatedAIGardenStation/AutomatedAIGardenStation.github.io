import { render, screen } from "@testing-library/react";
import VersionsSection from "../VersionsSection";

describe("VersionsSection", () => {
  it("renders the versions section and cards", () => {
    render(<VersionsSection />);
    expect(
      screen.getByRole("heading", { name: "Choose Your Garden Station" })
    ).toBeInTheDocument();

    // Check for MVP card text
    expect(screen.getByText("MVP")).toBeInTheDocument();
    expect(screen.getByText("Core automation for a single station")).toBeInTheDocument();

    // Check for Pro card text
    expect(screen.getByText("Pro")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    expect(screen.getByText("Full autonomy, vision, and multi-station scale")).toBeInTheDocument();
  });

  it("renders specific features for MVP and Pro", () => {
    render(<VersionsSection />);

    // Check an MVP specific feature
    expect(screen.getByText("Single-station operations")).toBeInTheDocument();

    // Check a Pro specific feature
    expect(screen.getByText("Multi-station orchestration")).toBeInTheDocument();
  });
});
