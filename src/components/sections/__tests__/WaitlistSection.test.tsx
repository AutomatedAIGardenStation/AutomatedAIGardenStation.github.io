import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import WaitlistSection from "../WaitlistSection";

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("WaitlistSection Component", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders the section properly", () => {
    render(<WaitlistSection />);
    expect(screen.getByRole("heading", { name: /Join the Early-Access Waitlist/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Join Waitlist/i })).toBeInTheDocument();
  });

  it("calls the submit handler with the email and displays success toast on ok response", async () => {
    // Return a successful response from mock fetch
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<WaitlistSection />);

    const input = screen.getByPlaceholderText(/Enter your email/i);
    const button = screen.getByRole("button", { name: /Join Waitlist/i });

    // Type email
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input).toHaveValue("test@example.com");

    // Submit form
    fireEvent.click(button);

    // Expect fetch to have been called with email body
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "test@example.com" }),
      })
    );

    // Expect success message to appear
    await waitFor(() => {
      expect(screen.getByText("You're on the list!")).toBeInTheDocument();
    });
  });

  it("displays an error toast when fetch fails", async () => {
    // To trigger the error state, we must ensure formUrl is NOT "#"
    // otherwise the component treats "#" as a success fallback.
    const originalEnv = process.env.NEXT_PUBLIC_WAITLIST_FORM_URL;
    process.env.NEXT_PUBLIC_WAITLIST_FORM_URL = "https://example.com/api";

    // Return a failed response
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    render(<WaitlistSection />);

    const input = screen.getByPlaceholderText(/Enter your email/i);
    const button = screen.getByRole("button", { name: /Join Waitlist/i });

    fireEvent.change(input, { target: { value: "error@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    });

    process.env.NEXT_PUBLIC_WAITLIST_FORM_URL = originalEnv;
  });
});
