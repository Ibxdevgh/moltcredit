"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      // Placeholder - wire to actual API endpoint later
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        You&apos;re on the waitlist! We&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-[#50463E]/15 bg-white/70 focus:bg-white focus:outline-none focus:border-[#ff624a] transition-all font-body text-base placeholder:text-[#50463E]/40 shadow-sm disabled:opacity-50"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="cursor-pointer bg-[#ff624a] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium hover:bg-[#ff4d32] transition-colors shadow-lg shadow-[#ff624a]/20 flex items-center justify-center gap-2 group text-base whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span>{status === "loading" ? "Joining..." : "Join Waitlist"}</span>
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </form>
  );
}
