"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    question: "What areas does Siganext serve?",
    answer:
      "We primarily operate across Nashik, Mumbai, Thane, Pune, Nagpur, Chhatrapati Sambhajinagar, and Goa. Contact our engineering team for custom or remote project site deployment availability.",
  },
  {
    question: "What is the difference between on-grid, off-grid, and hybrid solar systems?",
    answer:
      "An on-grid system stays connected to the utility grid (MSEDCL/DISCOM) with Net Metering to offset monthly electric bills. An off-grid system operates completely independent of the power grid using dedicated battery storage. A hybrid system combines grid connectivity with battery backup so critical equipment stays powered during grid load-shedding.",
  },
  {
    question: "Can Siganext handle government tenders and public sector projects?",
    answer:
      "Yes. Siganext is incorporated under the Companies Act, 2013 and is tender-ready for public sector deployments, municipal Wi-Fi/CCTV projects, and EOI/RFP submissions requiring a single accountable infrastructure vendor.",
  },
  {
    question: "How fast can Siganext deploy internet or solar infrastructure?",
    answer:
      "High-speed broadband and leased line drops in urban Nashik can be provisioned in as little as 24 to 48 hours. Rooftop solar EPC projects typically take 2 to 4 weeks depending on DISCOM net metering clearance and site scale.",
  },
  {
    question: "Does Siganext offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes. We offer end-to-end AMC packages covering solar O&M, 24/7 network NOC monitoring, IP CCTV maintenance, and enterprise IT hardware replacements under guaranteed SLA metrics.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-panel-mist py-16 md:py-24 border-t border-ink/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container-site">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Got questions? We have answers.
            </h2>
            <p className="mt-3 text-ink/75 font-body text-base">
              Common questions about our internet, solar, IT security, and tender capabilities.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-ink/10 overflow-hidden transition-colors hover:border-signal-teal/40">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-ink text-lg tracking-[-0.01em] focus:outline-none focus:ring-2 focus:ring-signal-teal/50"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full bg-panel-mist flex items-center justify-center shrink-0 font-mono text-sm text-ink transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-signal-teal text-grid-navy font-bold" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-ink/80 font-body text-[0.95rem] leading-relaxed border-t border-ink/5 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
