import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import NetworkTraceLine from "@/components/NetworkTraceLine";
import SecurityGrid2D from "@/components/SecurityGrid2D";
import Card3DTilt from "@/components/Card3DTilt";
import MagneticButton from "@/components/MagneticButton";
import ParticleField from "@/components/ParticleField";

export const metadata: Metadata = {
  title: "IT, CCTV & Software Services – Siganext Nashik",
  description:
    "Single-vendor IT infrastructure, enterprise hardware supply, IP CCTV surveillance, custom ERP/CRM software, and cybersecurity services in Nashik.",
  alternates: { canonical: "/services/it-software-security" },
  openGraph: {
    title: "IT, CCTV & Software Services – Siganext Nashik",
    description:
      "Consolidate hardware procurement, CCTV security, custom ERP software, and cybersecurity under one accountable SLA.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "IT Infrastructure, CCTV & Software Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Siganext Networks and Green Energy Solutions Private Limited",
  },
  "areaServed": ["Nashik", "Mumbai", "Thane", "Pune", "Nagpur", "Chhatrapati Sambhajinagar", "Goa"],
  "description": "Enterprise IT hardware procurement, IP CCTV surveillance, custom ERP software, and cybersecurity governance.",
};

const CAPABILITY_STRIP = [
  {
    title: "Hardware Supply",
    subtitle: "Laptops, Servers & Racks",
    icon: (
      <svg className="w-5 h-5 text-signal-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "CCTV & Security",
    subtitle: "IP Cameras & Biometrics",
    icon: (
      <svg className="w-5 h-5 text-signal-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "AMC & Support",
    subtitle: "On-site SLA & Helpdesk",
    icon: (
      <svg className="w-5 h-5 text-signal-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Software & ERP/CRM",
    subtitle: "Custom Apps & Portals",
    icon: (
      <svg className="w-5 h-5 text-signal-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    subtitle: "Firewalls & Data Audit",
    icon: (
      <svg className="w-5 h-5 text-signal-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const SERVICE_BULLETS = [
  {
    title: "Enterprise IT Hardware Procurement & Supply",
    description:
      "Commercial laptops, desktops, workstation clusters, rack servers, managed switches, and uninterruptible power supplies (UPS) sourced direct from Tier-1 manufacturers with OEM warranties.",
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
    title: "IP CCTV Surveillance & Access Control",
    description:
      "High-definition IP dome/bullet camera installation, central Network Video Recorders (NVR), cloud video backups, biometric attendance terminals, and RFID access gates.",
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
    title: "Comprehensive IT Maintenance Contracts (AMC)",
    description:
      "Annual maintenance contracts covering hardware replacements, operating system maintenance, active network troubleshooting, and dedicated on-site support engineers with guaranteed MTTR.",
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
    title: "Custom Software, ERP & CRM Solutions",
    description:
      "Tailored web/mobile enterprise applications, modular cloud ERP systems, custom CRM workflows, and API integrations connecting your operational hardware with business intelligence dashboards.",
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
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity, Endpoint & Data Governance",
    description:
      "Next-gen firewall protection, endpoint security software, ransomware defense, automated offsite data backups, and statutory compliance audits for enterprise networks.",
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
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
    title: "Data Center & Hosting",
    href: "/services/data-center-hosting",
    label: "Colocation, cloud infrastructure and disaster recovery.",
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
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      </svg>
    ),
  },
];

export default function ItSoftwareSecurityPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy text-paper overflow-hidden">
        {/* Background photo ("IT/Security hero") */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/it-hero.png"
            alt="Siganext Enterprise IT Hardware Operations & Cybersecurity Operations Room"
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

        <div className="relative z-10 container-site pt-28 pb-16 md:pt-36 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
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
              <span className="text-paper/90">IT, Software &amp; Security</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-teal animate-pulse" />
              OUR SERVICES · 03
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.06] tracking-[-0.02em] text-[clamp(2.25rem,5vw,3.75rem)] max-w-[22ch]">
              IT infrastructure and software, without the vendor sprawl.
            </h1>

            <p className="mt-6 max-w-[62ch] text-paper/85 text-[1.0625rem] leading-relaxed font-body">
              Complete enterprise hardware procurement, CCTV surveillance systems, custom ERP/CRM software platforms, cybersecurity defense, and managed IT support under one contract.
            </p>

            <div className="mt-8">
              <MagneticButton
                href="/contact?service=it-software-security"
                className="btn btn-primary shadow-xl hover:shadow-sahyadri-green/30"
              >
                Discuss Your IT Requirement →
              </MagneticButton>
            </div>
          </Reveal>

          {/* 2D Interactive Security Grid */}
          <Reveal delay={0.15}>
            <SecurityGrid2D />
          </Reveal>
        </div>

        {/* Signal-teal trace accent along bottom edge */}
        <NetworkTraceLine color="teal" />
      </section>

      {/* ===================== CAPABILITY STRIP MODULE ===================== */}
      <section className="bg-panel-mist py-10 border-b border-ink/10">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-3">
              SERVICE SCOPE
            </p>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-ink text-xl sm:text-2xl">
                Integrated IT Capabilities
              </h3>
              <span className="hidden sm:inline-block font-mono uppercase text-[10px] tracking-[0.08em] text-ink/40">
                Swipe or scroll →
              </span>
            </div>

            {/* Capability Strip: horizontal scroll on mobile, 5-col grid on desktop */}
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
              {CAPABILITY_STRIP.map((cap) => (
                <Card3DTilt key={cap.title} maxTilt={8} scale={1.03} className="shrink-0 w-[220px] sm:w-[240px] md:w-auto snap-start">
                  <div className="bg-white rounded-xl p-4 sm:p-5 border border-ink/10 shadow-sm flex flex-col justify-between hover:border-signal-teal/40 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-signal-teal/10 border border-signal-teal/20">
                        {cap.icon}
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-signal-teal font-semibold">
                        Included
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-ink text-base tracking-[-0.01em]">
                        {cap.title}
                      </h4>
                      <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink/55 mt-0.5">
                        {cap.subtitle}
                      </p>
                    </div>
                  </div>
                </Card3DTilt>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SECTION 8 BULLETS ===================== */}
      <section className="bg-panel-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-4">
              DETAILED SOLUTIONS
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[24ch]">
              Single-vendor IT architecture for enterprises &amp; institutions.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICE_BULLETS.map((bullet, i) => (
              <Reveal
                key={bullet.title}
                delay={i * 0.08}
                className={i === SERVICE_BULLETS.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
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
                        Scope 0{i + 1}
                      </span>
                      <span className="font-mono text-xs text-signal-teal opacity-0 group-hover:opacity-100 transition-opacity">
                        Managed SLA →
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
              CONSOLIDATED CONTRACT
            </p>
            <h2 className="font-display font-semibold text-paper tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)] max-w-[24ch] mx-auto">
              Ready to eliminate IT vendor sprawl?
            </h2>
            <p className="mt-4 max-w-[54ch] mx-auto text-paper/80 text-[1rem] leading-relaxed font-body">
              Consolidate your hardware procurement, CCTV security, software apps, and maintenance under one accountable Nashik-based team with a single SLA.
            </p>
            <Link
              href="/contact?service=it-software-security"
              className="inline-flex items-center mt-8 btn btn-primary font-mono uppercase text-xs font-semibold tracking-[0.08em] px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-200 shadow-md"
            >
              Discuss Your IT Requirement
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
