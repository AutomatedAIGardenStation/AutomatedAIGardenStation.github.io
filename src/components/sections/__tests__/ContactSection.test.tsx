import { render, screen, fireEvent } from "@testing-library/react";
import ContactSection from "../ContactSection";

describe("ContactSection", () => {
  it("renders the contact section", () => {
    render(<ContactSection />);
    expect(screen.getByRole("heading", { name: "Stay in the Loop" })).toBeInTheDocument();
    expect(
      screen.getByText(
        "Garden Station is in active development. Sign up to be notified when it launches."
      )
    ).toBeInTheDocument();
  });

  it("shows success message after submission", () => {
    render(<ContactSection />);
    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: "Get Notified" });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    expect(screen.getByText("Thanks, we'll be in touch!")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Enter your email")).not.toBeInTheDocument();
  });
});
