import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import NetworkTraceLine from "@/components/NetworkTraceLine";
import Card3DTilt from "@/components/Card3DTilt";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Data Center & Managed Hosting Services – Siganext Nashik",
  description:
    "Carrier-neutral colocation server hosting, private cloud infrastructure, and automated disaster recovery (DRaaS) solutions in Nashik.",
  alternates: { canonical: "/services/data-center-hosting" },
  openGraph: {
    title: "Data Center & Managed Hosting Services – Siganext Nashik",
    description:
      "Carrier-neutral colocation server hosting, private cloud infrastructure, and automated disaster recovery (DRaaS) solutions in Nashik.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Data Center & Managed Hosting Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Siganext Networks and Green Energy Solutions Private Limited",
  },
  "areaServed": ["Nashik", "Mumbai", "Thane", "Pune", "Nagpur", "Chhatrapati Sambhajinagar", "Goa"],
  "description": "Carrier-neutral colocation server hosting, private cloud infrastructure, and automated disaster recovery.",
};

const SERVICE_BULLETS = [
  {
    title: "Colocation & Managed Server Hosting",
    description:
      "Secure server rack space, dual A+B redundant power feeds, precision climate control, N+1 generator backup, and biometric physical security access control.",
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
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Private Cloud & Dedicated Infrastructure",
    description:
      "High-performance hypervisor compute clusters, NVMe storage SAN arrays, dedicated virtual cloud servers, and hybrid cloud orchestration engineered for data sovereignty.",
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
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Disaster Recovery & Business Continuity (DRaaS)",
    description:
      "Offsite automated real-time data replication, immutable snapshot backups, hot-standby failover environments, and strict Recovery Time Objective (RTO) SLAs.",
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
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
];

const OTHER_SERVICES = [
  {
    title: "Internet & Networking",
    href: "/services/internet-networking",
    label: "Carrier-grade fiber, leased lines and 24/7 NOC.",
    icon: (
      <svg
        className="w-5 h-5 text-signal-teal shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Solar & Green Energy",
    href: "/services/solar-green-energy",
    label: "On-grid, off-grid and hybrid solar power systems.",
    icon: (
      <svg
        className="w-5 h-5 text-marigold-gold shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
      </svg>
    ),
  },
  {
    title: "IT, Software & Security",
    href: "/services/it-software-security",
    label: "CCTV, enterprise hardware, ERP/CRM and security.",
    icon: (
      <svg
        className="w-5 h-5 text-sahyadri-green shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function DataCenterHostingPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy text-paper overflow-hidden">
        {/* Background photo ("Data center hero") */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/datacenter-hero.png"
            alt="Siganext Carrier-Grade Data Center Rack Infrastructure & Server Hall"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-105"
          />
          {/* Dark gradient scrim overlay */}
          <div
            aria-hidden
            className="absolute inset-0 z-[1] bg-gradient-to-t from-grid-navy via-grid-navy/80 to-grid-navy/60"
          />
          {/* Circuit board backdrop grid */}
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
              <Link href="/#services" className="hover:text-signal-teal transition-colors">
                Services
              </Link>
              <span className="text-paper/30">/</span>
              <span className="text-paper/90">Data Center &amp; Hosting</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-teal animate-pulse" />
              OUR SERVICES · 04
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.06] tracking-[-0.02em] text-[clamp(2.25rem,5vw,3.75rem)] max-w-[22ch]">
              Infrastructure that stays up when it matters.
            </h1>

            {/*
              [Status: confirm whether this is a live facility or in development before this page goes public — phrase accordingly, e.g. 'coming online' if not yet operational.]
            */}
            <p className="mt-6 max-w-[62ch] text-paper/85 text-[1.0625rem] leading-relaxed font-body">
              Siganext&rsquo;s data center and managed hosting capability covers colocation, cloud infrastructure, disaster recovery and business continuity planning.
            </p>

            {/* Operational Status Compliance Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-marigold-gold/15 border border-marigold-gold/40 text-marigold-gold font-mono text-[11px] uppercase tracking-[0.08em] mt-5">
              <span className="w-2 h-2 rounded-full bg-marigold-gold animate-pulse shrink-0" />
              <span>Status: Facility Status to be Confirmed (In Development / Pre-Launch)</span>
            </div>

            <div className="mt-8">
              <MagneticButton
                href="/contact?service=data-center"
                className="btn btn-primary shadow-xl hover:shadow-signal-teal/30"
              >
                Talk to Our Infrastructure Team →
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Signal-teal trace accent along bottom edge */}
        <NetworkTraceLine color="teal" />
      </section>

      {/* ===================== SECTION 9 BULLETS ===================== */}
      <section className="bg-panel-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
              MANAGED HOSTING PILLARS
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[24ch]">
              High-reliability server colocation &amp; cloud orchestration.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICE_BULLETS.map((bullet, i) => (
              <Reveal key={bullet.title} delay={i * 0.08}>
                <Card3DTilt maxTilt={8} scale={1.02} className="h-full rounded-xl">
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-ink/10 shadow-sm hover:shadow-md hover:border-signal-teal/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-signal-teal/10 border border-signal-teal/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                        {bullet.icon}
                      </div>
                      <h3 className="font-display font-semibold text-ink text-[1.25rem] tracking-[-0.01em]">
                        {bullet.title}
                      </h3>
                      <p className="mt-2.5 text-ink/75 text-[0.95rem] leading-relaxed font-body">
                        {bullet.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between text-ink/50">
                      <span className="font-mono uppercase text-[10px] tracking-[0.08em]">
                        Pillar 0{i + 1}
                      </span>
                      <span className="font-mono text-xs text-signal-teal opacity-0 group-hover:opacity-100 transition-opacity">
                        Uptime Spec →
                      </span>
                    </div>
                  </div>
                </Card3DTilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRIMARY CTA BANNER ===================== */}
      <section className="bg-grid-navy text-paper relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,184,198,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(47,184,198,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative container-site py-16 md:py-24 text-center">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
              INFRASTRUCTURE INQUIRIES
            </p>
            <h2 className="font-display font-semibold text-paper tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)] max-w-[24ch] mx-auto">
              Need custom server colocation or private cloud hosting?
            </h2>
            <p className="mt-4 max-w-[54ch] mx-auto text-paper/80 text-[1rem] leading-relaxed font-body">
              Speak with our infrastructure architects to plan your rack space, bandwidth allocation, and disaster recovery SLA.
            </p>
            <Link
              href="/contact?service=data-center"
              className="inline-flex items-center mt-8 btn btn-primary font-mono uppercase text-xs font-semibold tracking-[0.08em] px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-200 shadow-md"
            >
              Talk to Our Infrastructure Team
              <span className="ml-2">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== CROSS-LINK ROW ===================== */}
      <SectionDivider color="#2FB8C6" />

      <section className="bg-panel-mist pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-1">
                  INTEGRATED PLATFORM
                </p>
                <h3 className="font-display font-semibold text-ink text-xl sm:text-2xl">
                  Also part of Siganext
                </h3>
              </div>
              <span className="hidden sm:inline-block font-mono uppercase text-[10px] tracking-[0.08em] text-ink/45">
                One Operator · Four Verticals
              </span>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {OTHER_SERVICES.map((srv, i) => (
              <Reveal key={srv.href} delay={i * 0.08}>
                <Link
                  href={srv.href}
                  className="group block bg-white rounded-xl p-6 border border-ink/10 shadow-sm hover:shadow-md hover:border-signal-teal/50 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-panel-mist/80 border border-ink/5 group-hover:bg-signal-teal/10 transition-colors">
                      {srv.icon}
                    </div>
                    <span className="font-mono text-sm text-ink/40 group-hover:text-signal-teal group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-ink text-base group-hover:text-signal-teal transition-colors">
                    {srv.title}
                  </h4>
                  <p className="mt-1.5 text-ink/65 text-[0.875rem] leading-relaxed font-body">
                    {srv.label}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
