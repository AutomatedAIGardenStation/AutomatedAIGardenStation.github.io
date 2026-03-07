"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "invalid">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: if honeypot is filled out, silently succeed
    if (honeypot) {
      setStatus("success");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    try {
      const formUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#";

      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok || formUrl === "#") {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 bg-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="contact-heading" className="text-4xl font-bold tracking-tight mb-4">Stay in the Loop</h2>
        <p className="text-xl text-primary-light/80 mb-10 max-w-2xl mx-auto">
          Garden Station is in active development. Sign up to be notified when it launches.
        </p>

        {status === "success" ? (
          <div role="status" className="bg-primary/30 border border-primary text-white px-6 py-4 rounded-lg inline-block text-lg font-medium">
            Thanks, we&apos;ll be in touch!
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative" action="">
              {/* Honeypot field - invisible to humans but bots will fill it */}
              <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                <input
                  type="text"
                  name="work_email"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "invalid" || status === "error") setStatus("idle");
                }}
                disabled={status === "submitting"}
                className={`flex-1 rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${status === "invalid" ? "ring-red-500 focus:ring-red-500" : "ring-gray-300 focus:ring-primary"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-white disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex-none rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get Notified"
                )}
              </button>
            </form>

            <div aria-live="polite" className="mt-4 min-h-[1.5rem] flex justify-center">
              {status === "invalid" && (
                <p className="text-sm font-medium text-red-400 bg-red-400/10 px-4 py-1.5 rounded-full inline-block">
                  Please enter a valid email address.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-400 bg-red-400/10 px-4 py-1.5 rounded-full inline-block">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </>
        )}

        <p className="mt-12 text-sm text-primary-light/60">
          Built with care for growers who want full control.
        </p>
      </div>
    </section>
  );
}
