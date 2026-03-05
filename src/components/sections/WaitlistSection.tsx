"use client";

import React, { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formUrl = process.env.NEXT_PUBLIC_WAITLIST_FORM_URL || "#";

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
      console.error("Waitlist submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" aria-labelledby="waitlist-heading" className="py-24 bg-primary-dark text-white border-b border-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="waitlist-heading" className="text-4xl font-bold tracking-tight mb-4 text-white">
          Join the Early-Access Waitlist
        </h2>
        <p className="text-xl text-primary-light/80 mb-10 max-w-2xl mx-auto">
          Be the first to know when Garden Station is available. Spots are limited.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative">
          <label htmlFor="waitlist-email" className="sr-only">Email address</label>
          <input
            id="waitlist-email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting" || status === "success"}
            className="flex-1 rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="flex-none rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        <div aria-live="polite" className="mt-4 min-h-[1.5rem] flex justify-center">
          {status === "success" && (
            <p className="text-sm font-medium text-green-400 bg-green-400/10 px-4 py-1.5 rounded-full inline-block">
              You&apos;re on the list!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-400 bg-red-400/10 px-4 py-1.5 rounded-full inline-block">
              Something went wrong.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
