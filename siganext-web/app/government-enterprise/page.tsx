import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Government Tender-Ready Vendor – Siganext Maharashtra",
  description:
    "Single-vendor compliant infrastructure solutions for government tenders, municipal projects, and enterprise networks across Maharashtra and Goa.",
  alternates: { canonical: "/government-enterprise" },
  openGraph: {
    title: "Government Tender-Ready Vendor – Siganext Maharashtra",
    description:
      "Tender-ready infrastructure solutions for public sector and enterprise organizations across Maharashtra & Goa.",
    type: "website",
  },
};

const SECTION_10_BULLETS = [
  {
    number: "01",
    title: "Public Sector Tender & RFP Readiness",
    description:
      "Fully compliant for government tenders, state infrastructure programs, municipal Wi-Fi/CCTV deployments, and smart city projects across Maharashtra and Goa with complete Bill of Quantities (BoQ) documentation.",
  },
  {
    number: "02",
    title: "Single-Point Vendor Accountability",
    description:
      "Consolidate power (solar EPC), connectivity (leased lines & fiber drops), IT infrastructure, and CCTV security under one Master Service Agreement (MSA), eliminating multi-vendor coordination friction.",
  },
  {
    number: "03",
    title: "Audited Field Operations & AMC Capability",
    description:
      "Dedicated local engineering dispatch teams headquartered in Nashik, delivering guaranteed 24/7 SLA maintenance, audited field operations, rapid spare parts deployment, and statutory compliance reporting.",
  },
];

export default function GovernmentEnterprisePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy text-paper overflow-hidden">
        {/* Background photo ("Gov hero") */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gov-hero.png"
            alt="Siganext Government & Enterprise Infrastructure Planning & Operations Center"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-85 contrast-105"
          />
          {/* Heavy grid-navy scrim overlay for maximum text legibility & restraint */}
          <div
            aria-hidden
            className="absolute inset-0 z-[1] bg-gradient-to-b from-grid-navy/90 via-grid-navy/95 to-grid-navy"
          />
        </div>

        <div className="relative z-10 container-site pt-28 pb-16 md:pt-36 md:pb-24">
          <Reveal>
            {/* Breadcrumb */}
            <nav
              className="font-mono uppercase text-[11px] tracking-[0.08em] text-paper/60 mb-6 flex items-center gap-2"
              aria-label="breadcrumb"
            >
              <Link href="/" className="hover:text-signal-teal transition-colors">
                Home
              </Link>
              <span className="text-paper/30">/</span>
              <span className="text-paper/90">Government &amp; Enterprise</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-marigold-gold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-marigold-gold" />
              GOVERNMENT &amp; ENTERPRISE
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.06] tracking-[-0.02em] text-[clamp(2.25rem,5vw,3.75rem)] max-w-[24ch]">
              A single, compliant vendor for connectivity, power and technology.
            </h1>

            {/* Verbatim Section 10 body paragraph */}
            <p className="mt-6 max-w-[64ch] text-paper/85 text-[1.0625rem] leading-relaxed font-body">
              Siganext provides integrated infrastructure solutions tailored for public sector tenders, municipal deployments, and enterprise organizations requiring a single accountable vendor for power, connectivity, IT, and security infrastructure.
            </p>

            <div className="mt-8">
              <Link
                href="/contact?service=government-tender"
                className="btn btn-primary hover:scale-[1.02] transition-transform shadow-md"
              >
                Contact for Tender Inquiries →
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Subdued hair-line accent border */}
        <div className="h-[1px] bg-paper/10 inset-x-0" />
      </section>

      {/* ===================== CIN / COMPLIANCE LETTERHEAD STRIP ===================== */}
      <section className="bg-panel-mist py-8 border-b border-ink/10">
        <div className="container-site">
          <Reveal>
            <div className="bg-white rounded-xl p-6 border border-ink/15 font-mono text-xs text-ink/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 shrink-0">
                <span className="w-2.5 h-2.5 rounded-sm bg-signal-teal" />
                <span className="font-bold tracking-[0.08em] uppercase text-ink">
                  STATUTORY COMPLIANCE &amp; CORPORATE DETAILS
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-ink/10 text-[11px] uppercase tracking-[0.06em]">
                <div>
                  <span className="text-ink/45 block mb-0.5">Corporate Identification (CIN)</span>
                  <span className="font-semibold text-ink">CIN: [CONFIRM]</span>
                </div>
                <div className="sm:pl-4 md:pl-8">
                  <span className="text-ink/45 block mb-0.5">Registered Office</span>
                  <span className="font-semibold text-ink">Nashik, Maharashtra [CONFIRM]</span>
                </div>
                <div className="sm:pl-4 md:pl-8">
                  <span className="text-ink/45 block mb-0.5">Incorporation Status</span>
                  <span className="font-semibold text-ink">Companies Act, 2013</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== BULLETS (FORMAL NUMBERED LIST) ===================== */}
      <section className="bg-panel-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-4">
              TENDER &amp; ENTERPRISE CAPABILITIES
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[26ch]">
              Institutional reliability backed by statutory compliance.
            </h2>
          </Reveal>

          {/* Clean formal numbered list layout */}
          <div className="mt-12 space-y-6">
            {SECTION_10_BULLETS.map((bullet, i) => (
              <Reveal key={bullet.number} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-ink/10 shadow-sm flex flex-col md:flex-row md:items-start gap-6 hover:border-ink/25 transition-colors">
                  <div className="shrink-0">
                    <span className="font-mono text-2xl font-bold text-signal-teal bg-signal-teal/10 px-3.5 py-1.5 rounded-lg border border-signal-teal/20">
                      {bullet.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-xl tracking-[-0.01em]">
                      {bullet.title}
                    </h3>
                    <p className="mt-2 text-ink/75 text-[0.95rem] leading-relaxed font-body">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DOWNLOAD MODULE ===================== */}
      <section className="bg-panel-mist pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            {/*
              [NOTE: Real company profile PDF must be placed at public/company-profile.pdf before production deployment.]
            */}
            <div className="bg-grid-navy text-paper rounded-2xl p-8 md:p-10 border border-paper/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-signal-teal/15 border border-signal-teal/30 flex items-center justify-center shrink-0 text-signal-teal">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-signal-teal font-semibold">
                    FORMAL CREDENTIALS &amp; DECK
                  </span>
                  <h3 className="font-display font-semibold text-paper text-2xl tracking-[-0.01em] mt-1">
                    Siganext Corporate Company Profile
                  </h3>
                  <p className="mt-1.5 text-paper/75 text-sm font-body max-w-xl">
                    Comprehensive overview of statutory registrations, infrastructure assets, past project references, and technical capability specifications.
                  </p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-paper/50">
                    <span>PDF Document</span>
                    <span>•</span>
                    <span>2.4 MB</span>
                    <span>•</span>
                    <span>Tender &amp; Procurement Ready</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="/company-profile.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2.5 bg-signal-teal text-grid-navy font-mono uppercase text-xs font-semibold tracking-[0.08em] px-6 py-3.5 rounded-xl hover:bg-[#27a3b0] transition-colors duration-200 shadow-md w-full sm:w-auto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Company Profile (PDF)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="bg-grid-navy text-paper border-t border-paper/10">
        <div className="container-site py-16 text-center">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-marigold-gold mb-3">
              PROCUREMENT &amp; TENDERS
            </p>
            <h2 className="font-display font-semibold text-paper tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[24ch] mx-auto">
              Submitting an RFP or EOI for public infrastructure?
            </h2>
            <p className="mt-3 max-w-[54ch] mx-auto text-paper/80 text-[0.98rem] leading-relaxed font-body">
              Our Nashik government procurement specialists are available to review technical specifications, BoQ requirements, and bid eligibility documents.
            </p>
            <div className="mt-8">
              <Link
                href="/contact?service=government-tender"
                className="btn btn-primary font-mono uppercase text-xs font-semibold tracking-[0.08em] px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
              >
                Contact for Tender Inquiries →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
