import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";

// Only publish director names/photos once confirmed per PRD Section 8 — currently gated
const SHOW_DIRECTORS = false;

export const metadata: Metadata = {
  title: "About Siganext – Sustainable Power, Connectivity & Tech | Nashik",
  description:
    "Learn about Siganext — a Nashik-based team converging broadband connectivity, solar power, and IT infrastructure into one seamless system for Maharashtra and Goa.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Siganext – Sustainable Power, Connectivity & Tech | Nashik",
    description:
      "One Nashik-based engineering team delivering integrated solar energy, network broadband, and enterprise IT infrastructure.",
    type: "website",
  },
};

const CHECKLIST_ITEMS = [
  {
    title: "Certified Engineers",
    description:
      "In-house certified technical team overseeing system design, solar EPC, network deployment, and continuous field operations.",
    icon: (
      <svg
        className="w-6 h-6 text-signal-teal shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Govt Tender Ready",
    description:
      "Statutory compliance, registered Private Limited entity, and single BoQ documentation structured for public sector procurement.",
    icon: (
      <svg
        className="w-6 h-6 text-signal-teal shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "End-to-End AMC",
    description:
      "Comprehensive annual maintenance contracts covering solar power generation, network fiber/wireless, and IT hardware under one SLA.",
    icon: (
      <svg
        className="w-6 h-6 text-signal-teal shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Local Presence",
    description:
      "Nashik headquarters with rapid-response field engineering teams on the ground across Maharashtra and Goa for minimal MTTR.",
    icon: (
      <svg
        className="w-6 h-6 text-signal-teal shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy text-paper overflow-hidden">
        {/* Static full-width photo ("About hero") */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-rooftop-engineer.jpg"
            alt="Siganext Rooftop Field Engineer inspecting solar and microwave infrastructure in Nashik"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-105"
          />
          {/* Dark gradient scrims overlay for max text legibility */}
          <div
            aria-hidden
            className="absolute inset-0 z-[1] bg-gradient-to-t from-grid-navy via-grid-navy/80 to-grid-navy/60"
          />
          {/* Subtle circuit grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 z-[2] pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,247,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 50% 40%, black 40%, transparent 80%)",
            }}
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
              <span className="text-paper/90">About</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-teal animate-pulse" />
              WHO WE ARE
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.06] tracking-[-0.02em] text-[clamp(2.1rem,4.5vw,3.75rem)] max-w-[24ch]">
              Sustainable power, reliable connectivity, and smart technology — from one Nashik-based team.
            </h1>
          </Reveal>
        </div>

        {/* Bottom hairline trace */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--signal-teal), var(--marigold-gold), transparent)",
            opacity: 0.5,
          }}
        />
      </section>

      {/* ===================== BODY COPY ===================== */}
      <section className="bg-panel-mist text-ink py-16 md:py-24 border-b border-ink/10">
        <div className="container-site">
          <Reveal className="mx-auto max-w-[65ch] font-body text-[1.125rem] leading-[1.8] text-ink/85 space-y-6">
            <p>
              Siganext Networks and Green Energy Solutions Private Limited is built around a single premise: connectivity, solar, and IT are not three businesses glued together — they are one continuous system, and the company that treats them that way builds better infrastructure.
            </p>
            <p>
              By holding all three verticals under one MOA, one accountability, and one engineering culture, we remove the seams. A solar plant powers the network. The network carries the data. The data layer tells both of them what to do next — one loop, one operator.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== CHECKLIST GRID (2x2) ===================== */}
      <section className="bg-panel-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-4">
              OUR CORE CAPABILITIES
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[24ch]">
              Engineered standards across every deployment.
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {CHECKLIST_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 md:p-8 border border-ink/10 shadow-sm hover:shadow-md hover:border-signal-teal/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-signal-teal/10 border border-signal-teal/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-semibold text-ink text-[1.25rem] tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-ink/75 text-[0.95rem] leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-teal" />
                    <span className="font-mono uppercase text-[10px] tracking-[0.08em] text-ink/50">
                      Verified Standard
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MISSION / VISION (COMING SOON) ===================== */}
      <section className="bg-panel-mist pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="relative rounded-2xl border border-dashed border-signal-teal/40 bg-white/70 backdrop-blur-sm p-8 md:p-10 text-center max-w-3xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-full bg-marigold-gold/10 border border-marigold-gold/30 text-marigold-gold flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-marigold-gold mb-2">
                MISSION & VISION
              </p>
              <h3 className="font-display font-semibold text-ink text-[1.35rem] sm:text-[1.5rem] tracking-[-0.01em]">
                Mission & Vision Statements
              </h3>
              <div className="mt-3">
                <span className="inline-flex items-center gap-1.5 bg-marigold-gold/15 text-marigold-gold border border-marigold-gold/30 rounded-full px-3 py-1 font-mono uppercase text-[10px] tracking-[0.08em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-marigold-gold animate-pulse" />
                  Coming Soon · Founder Sign-off Pending
                </span>
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-[0.04em] text-ink/65 max-w-xl mx-auto leading-relaxed">
                Official mission & vision statements are being finalized with company founders and will be published upon confirmation. In line with our compliance guidelines, we do not publish unverified statements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== LEADERSHIP ===================== */}
      <section className="bg-grid-navy text-paper py-16 md:py-24 relative overflow-hidden">
        {/* Backdrop subtle grid glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,184,198,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(47,184,198,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
              LEADERSHIP & GOVERNANCE
            </p>
            <h2 className="font-display font-semibold text-paper tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[20ch]">
              Guided by experienced direction.
            </h2>
          </Reveal>

          {SHOW_DIRECTORS ? (
            /* Un-gated state: Show director cards with photo placeholders, names, titles */
            <div className="mt-10 grid sm:grid-cols-2 gap-8 max-w-3xl">
              {[
                {
                  name: "Nilesh Prabhakar Wagh",
                  title: "Director",
                  initials: "NW",
                },
                {
                  name: "Siddesh Nilesh Wagh",
                  title: "Director",
                  initials: "SW",
                },
              ].map((director, i) => (
                <Reveal key={director.name} delay={i * 0.1}>
                  <div className="bg-panel-mist/10 rounded-xl p-6 border border-signal-teal/20 backdrop-blur-sm hover:border-signal-teal/40 transition-colors duration-300">
                    {/* Photo placeholder with initials frame */}
                    <div className="aspect-[4/3] w-full rounded-lg bg-grid-navy ring-1 ring-signal-teal/30 flex flex-col items-center justify-center mb-5 relative overflow-hidden group">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-20 bg-[radial-gradient(#2FB8C6_1px,transparent_1px)] [background-size:16px_16px]"
                      />
                      <span className="font-display font-bold text-3xl text-signal-teal relative z-10">
                        {director.initials}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-paper/50 mt-2 relative z-10">
                        Photo Placeholder
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-paper text-xl tracking-[-0.01em]">
                      {director.name}
                    </h3>
                    <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mt-1">
                      {director.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Gated state per PRD Section 8 compliance requirement */
            <Reveal delay={0.1}>
              <div className="mt-10 rounded-xl bg-panel-mist/5 border border-paper/15 p-8 max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-marigold-gold animate-pulse" />
                  <span className="font-mono uppercase text-[10px] tracking-[0.08em] text-marigold-gold border border-marigold-gold/30 rounded px-2 py-0.5">
                    Gated · PRD Sec 8
                  </span>
                </div>
                <h3 className="font-display font-semibold text-paper text-lg">
                  Director Profiles & Photographs Gated
                </h3>
                <p className="mt-2 text-paper/70 font-mono text-[11px] tracking-[0.04em] leading-relaxed">
                  Director names (Nilesh Prabhakar Wagh, Siddesh Nilesh Wagh) and photo releases are currently gated pending final PRD Section 8 publication clearance.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ===================== SECTION DIVIDER & CTA BAND ===================== */}
      <SectionDivider color="#E8A33D" />

      <section className="bg-marigold-gold text-grid-navy">
        <div className="container-site py-16 md:py-20 text-center">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-grid-navy/70 mb-4">
              START A CONVERSATION
            </p>
            <h2 className="font-display font-semibold text-grid-navy tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)] max-w-[24ch] mx-auto">
              Ready to unify your connectivity, power, and IT infrastructure?
            </h2>
            <p className="mt-4 max-w-[50ch] mx-auto text-grid-navy/80 text-[1rem] leading-relaxed font-body">
              Talk to our Nashik engineering team for site surveys, tender readiness, or custom system architecture across Maharashtra and Goa.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-8 bg-grid-navy text-paper font-mono uppercase text-xs font-semibold tracking-[0.08em] px-7 py-3.5 rounded-full hover:bg-ink hover:scale-105 transition-all duration-200 shadow-md"
            >
              Contact Siganext
              <span className="ml-2">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
