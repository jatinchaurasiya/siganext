import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Siganext – Nashik, Maharashtra",
  description:
    "Get in touch with Siganext Networks in Nashik for enterprise connectivity quotes, solar site assessments, IT requirements, or government tender inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Siganext Networks & Green Energy",
    description:
      "Connect with our Nashik engineering team for broadband, solar EPC, IT software, data center, and public sector tender inquiries.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="bg-grid-navy text-paper pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,247,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative container-site">
          <Reveal>
            <nav
              className="font-mono uppercase text-[11px] tracking-[0.08em] text-paper/60 mb-4 flex items-center gap-2"
              aria-label="breadcrumb"
            >
              <Link href="/" className="hover:text-signal-teal transition-colors">
                Home
              </Link>
              <span className="text-paper/30">/</span>
              <span className="text-paper/90">Contact</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-teal" />
              GET IN TOUCH
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.08] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)] max-w-[20ch]">
              Let&rsquo;s talk about your project.
            </h1>

            <p className="mt-4 max-w-[58ch] text-paper/80 text-[1.025rem] leading-relaxed font-body">
              Whether you need enterprise fiber, a solar site assessment, IT hardware procurement, or tender compliance documents, our Nashik team is here to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== TWO COLUMN FORM & DETAILS ===================== */}
      <section className="bg-panel-mist py-12 md:py-20">
        <div className="container-site">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Interactive Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-ink/10 shadow-sm">
                <div className="mb-6 pb-4 border-b border-ink/10">
                  <h2 className="font-display font-semibold text-ink text-xl sm:text-2xl tracking-[-0.01em]">
                    Send us a Message
                  </h2>
                  <p className="text-ink/65 text-sm font-body mt-1">
                    Fill out the details below and an engineer will respond within one business day.
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="h-64 flex items-center justify-center text-ink/50 font-mono text-xs">
                      Loading form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>

              {/* Right Column: Office Details & Direct Channels */}
              <div className="lg:col-span-5 space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink/10 shadow-sm space-y-6">
                  <h3 className="font-display font-semibold text-ink text-xl tracking-[-0.01em] pb-3 border-b border-ink/10">
                    Contact Details
                  </h3>

                  {/* Registered Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-signal-teal/10 border border-signal-teal/20 flex items-center justify-center shrink-0 text-signal-teal">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink/45 block">
                        Registered Office
                      </span>
                      <p className="font-body text-ink text-[0.95rem] font-medium mt-0.5">
                        Siganext Networks &amp; Green Energy Solutions Pvt. Ltd.
                      </p>
                      <p className="font-body text-ink/75 text-sm mt-0.5">
                        Nashik, Maharashtra [CONFIRM]
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-marigold-gold/10 border border-marigold-gold/20 flex items-center justify-center shrink-0 text-marigold-gold">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink/45 block">
                        Direct Phone / WhatsApp
                      </span>
                      <p className="font-mono text-ink text-sm font-semibold mt-0.5">
                        [CONFIRM Phone Number]
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        <a
                          href="tel:+910000000000"
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] font-semibold text-grid-navy bg-panel-mist border border-ink/15 hover:border-signal-teal px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                          </svg>
                          Click to Call
                        </a>
                        <a
                          href="https://wa.me/910000000000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.06em] font-semibold text-sahyadri-green bg-sahyadri-green/10 border border-sahyadri-green/30 hover:bg-sahyadri-green/20 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          💬 WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sahyadri-green/10 border border-sahyadri-green/20 flex items-center justify-center shrink-0 text-sahyadri-green">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink/45 block">
                        Email Inquiry
                      </span>
                      <a
                        href="mailto:info@siganext.com"
                        className="font-mono text-ink text-sm font-semibold hover:text-signal-teal transition-colors mt-0.5 block"
                      >
                        info@siganext.com [CONFIRM]
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ink/5 border border-ink/10 flex items-center justify-center shrink-0 text-ink/70">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink/45 block">
                        Business Hours
                      </span>
                      <p className="font-body text-ink/80 text-sm mt-0.5">
                        Monday – Saturday: 9:00 AM – 7:00 PM IST [CONFIRM]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Map Slot Placeholder */}
                {/* [GOOGLE MAPS EMBED: Replace styled placeholder with live Google Maps iframe once physical office location is confirmed] */}
                <div className="bg-white rounded-2xl p-4 border border-ink/10 shadow-sm">
                  <div className="relative w-full h-48 rounded-xl bg-panel-mist border border-ink/15 overflow-hidden flex flex-col items-center justify-center text-center p-4 group">
                    <div className="w-10 h-10 rounded-full bg-signal-teal/10 text-signal-teal flex items-center justify-center mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p className="font-mono uppercase text-[11px] font-semibold text-ink tracking-[0.08em]">
                      Map Location Slot
                    </p>
                    <p className="font-mono text-[10px] text-ink/50 mt-1 max-w-xs">
                      Nashik Headquarters &amp; Operations Center
                    </p>
                    <span className="mt-3 font-mono text-[9px] uppercase tracking-[0.08em] text-marigold-gold bg-marigold-gold/10 px-2.5 py-0.5 rounded-full border border-marigold-gold/30">
                      Embed Slot · Pending Office Confirmation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
