import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import ContactSection from "../ContactSection";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("ContactSection Component", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders the contact section", () => {
    render(<ContactSection />);
    expect(screen.getByRole("heading", { name: "Stay in the Loop" })).toBeInTheDocument();
    expect(
      screen.getByText(
        "Garden Station is in active development. Sign up to be notified when it launches."
      )
    ).toBeInTheDocument();
  });

  it("calls the submit handler with the email and displays success toast on ok response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<ContactSection />);

    const input = screen.getByPlaceholderText("Enter your email");


    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.submit(input.closest("form")!);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "test@example.com" }),
      })
    );

    await waitFor(() => {
      expect(screen.getByText("Thanks, we'll be in touch!")).toBeInTheDocument();
    });
  });

  it("silently succeeds and does not call fetch when honeypot is filled", async () => {
    render(<ContactSection />);

    const honeypot = document.querySelector('input[name="work_email"]');
    expect(honeypot).toBeInTheDocument();

    if (honeypot) {
      fireEvent.change(honeypot, { target: { value: "bot@bot.com" } });
    }

    const input = screen.getByPlaceholderText("Enter your email");


    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(mockFetch).not.toHaveBeenCalled();
      expect(screen.getByText("Thanks, we'll be in touch!")).toBeInTheDocument();
    });
  });

  it("shows invalid email error when email is malformed", async () => {
    render(<ContactSection />);

    const input = screen.getByPlaceholderText("Enter your email");


    fireEvent.change(input, { target: { value: "not-an-email" } });

    // In jsdom with HTML5 validation, clicking a button in a form with an invalid
    // input type="email" might not trigger onSubmit. We need to explicitly submit the form.
    fireEvent.submit(input.closest('form')!);

    await waitFor(() => {
      expect(mockFetch).not.toHaveBeenCalled();
      expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    });
  });

  it("displays an error toast when fetch fails", async () => {
    const originalEnv = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
    process.env.NEXT_PUBLIC_CONTACT_FORM_URL = "https://example.com/api";

    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    render(<ContactSection />);

    const input = screen.getByPlaceholderText("Enter your email");


    fireEvent.change(input, { target: { value: "error@example.com" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
    });

    process.env.NEXT_PUBLIC_CONTACT_FORM_URL = originalEnv;
  });
});
