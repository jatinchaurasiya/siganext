"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function CheckAvailabilityModule() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSubmittedQuery(query.trim());
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuery("");
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink/10 shadow-lg relative overflow-hidden">
      {/* Top teal gradient accent line */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-signal-teal via-sahyadri-green to-marigold-gold"
      />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-ink/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-teal animate-pulse" />
            <span className="font-mono uppercase text-[10px] sm:text-[11px] tracking-[0.08em] text-signal-teal font-semibold">
              COVERAGE CHECKER
            </span>
          </div>
          <h3 className="font-display font-semibold text-ink text-xl sm:text-2xl tracking-[-0.01em]">
            Check Service Availability in Your Area
          </h3>
          <p className="mt-1 text-ink/70 text-[0.93rem] max-w-xl font-body">
            Verify high-speed fiber broadband, wireless bridging, or leased line coverage for your home, office, or project location.
          </p>
        </div>

        {/* Enterprise Secondary CTA */}
        <div className="shrink-0">
          <Link
            href="/contact?service=internet-networking"
            className="inline-flex items-center gap-2 font-mono uppercase text-[11px] tracking-[0.08em] font-semibold text-ink hover:text-signal-teal border border-ink/20 hover:border-signal-teal px-4 py-2.5 rounded-full transition-all duration-200"
          >
            Request Enterprise Quote
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Form or Confirmation State */}
      <div className="mt-6">
        {submitted ? (
          <div className="bg-signal-teal/10 rounded-xl p-5 border border-signal-teal/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-signal-teal text-grid-navy flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-display font-semibold text-ink text-base">
                  Coverage Check Submitted for &ldquo;{submittedQuery}&rdquo;
                </p>
                <p className="text-ink/80 text-sm font-body mt-0.5">
                  We&rsquo;ll get back to you within one business day with exact speed tier options and deployment timelines.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="font-mono uppercase text-[10px] tracking-[0.08em] text-signal-teal hover:underline shrink-0 self-start sm:self-center"
            >
              Check another location
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter City or Pincode (e.g. Nashik or 422001)"
                required
                className="w-full h-12 px-4 rounded-xl bg-panel-mist/60 border border-ink/15 text-ink placeholder:text-ink/40 font-body text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-signal-teal/50 focus:border-signal-teal transition-all"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase text-ink/40 pointer-events-none hidden sm:inline">
                Maharashtra & Goa
              </span>
            </div>
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-signal-teal text-grid-navy font-mono uppercase text-xs font-semibold tracking-[0.08em] hover:bg-[#27a3b0] transition-colors duration-200 shrink-0 flex items-center justify-center gap-2"
            >
              Check Availability in Your Area
              <span>→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
