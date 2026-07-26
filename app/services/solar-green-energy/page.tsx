import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import NetworkTraceLine from "@/components/NetworkTraceLine";
import SolarGrid3D from "@/components/SolarGrid3D";
import Card3DTilt from "@/components/Card3DTilt";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Solar Installation Company in Nashik, Mumbai & Maharashtra",
  description:
    "On-grid, off-grid, and hybrid solar power systems for commercial rooftops, homes, and government facilities in Nashik & Maharashtra.",
  alternates: { canonical: "/services/solar-green-energy" },
  openGraph: {
    title: "Solar Installation Company in Nashik, Mumbai & Maharashtra",
    description:
      "On-grid, off-grid, and hybrid solar power systems engineered to lower utility costs and ensure zero-downtime clean energy.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Solar & Green Energy EPC Solutions",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Siganext Networks and Green Energy Solutions Private Limited",
  },
  "areaServed": ["Nashik", "Mumbai", "Thane", "Pune", "Nagpur", "Chhatrapati Sambhajinagar", "Goa"],
  "description": "Customized rooftop solar EPC, net metering, hybrid battery storage, and O&M services.",
};

const SERVICE_BULLETS = [
  {
    title: "Custom Photovoltaic Sizing & Engineering",
    description:
      "Rooftop and ground-mount PV systems custom-engineered around your actual daytime load curve, seasonal irradiance, and net metering utility tariff structures.",
    icon: (
      <svg
        className="w-6 h-6 text-marigold-gold shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: "Commercial & Industrial Rooftop EPC",
    description:
      "Turnkey EPC delivery from 10 kW to Megawatt scale, managing engineering design, Tier-1 module procurement, structural installation, and MSEDCL net metering approvals.",
    icon: (
      <svg
        className="w-6 h-6 text-marigold-gold shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 22V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10" />
        <path d="M18 10V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6" />
        <path d="M10 6h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    title: "Battery Storage & Energy Backup Integration",
    description:
      "High-cycle LiFePO4 lithium-ion energy storage systems providing continuous clean power during grid shedding, voltage dips, or full power outages.",
    icon: (
      <svg
        className="w-6 h-6 text-marigold-gold shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="6" y="7" width="12" height="14" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="7" />
        <line x1="15" y1="3" x2="15" y2="7" />
        <line x1="10" y1="12" x2="14" y2="12" />
        <line x1="12" y1="10" x2="12" y2="14" />
      </svg>
    ),
  },
  {
    title: "Solar Operations & Maintenance (O&M)",
    description:
      "Automated string inverter telemetry, thermal imaging hotspot inspections, scheduled panel cleaning, and lifetime performance optimization guaranteed under one SLA.",
    icon: (
      <svg
        className="w-6 h-6 text-marigold-gold shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const SYSTEM_EXPLAINERS = [
  {
    title: "On-Grid System",
    subtitle: "Net Metering · Grid Connected",
    badge: "Most Popular for Cities",
    description:
      "An on-grid system stays connected to the utility grid (MSEDCL/DISCOM). Excess solar energy generated during peak daytime sun is exported back to the grid via Net Metering to offset your monthly electric bill. Requires a stable utility grid connection to operate.",
    svgIllustration: (
      <svg className="w-full h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#E8A33D" fill="rgba(232,163,61,0.15)" />
        <path d="M2 17l10 5 10-5" stroke="#2FB8C6" />
        <path d="M2 12l10 5 10-5" stroke="#E8A33D" opacity="0.6" />
        <circle cx="12" cy="7" r="1.5" fill="#E8A33D" />
        <path d="M18 14v4M20 16h-4" stroke="#2FB8C6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Off-Grid System",
    subtitle: "Standalone · Battery Backup",
    badge: "Ideal for Remote & Agri",
    description:
      "An off-grid system operates completely independent of the power grid, pairing solar PV arrays with dedicated high-capacity battery storage. Solar energy powers your loads directly while charging batteries for night use. Perfect for remote agricultural, industrial, or rural sites.",
    svgIllustration: (
      <svg className="w-full h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="4" width="14" height="12" rx="2" stroke="#E8A33D" fill="rgba(232,163,61,0.15)" />
        <path d="M9 20h6M12 16v4" stroke="#1F6E4A" />
        <path d="M9 8h6M12 6v4" stroke="#E8A33D" strokeLinecap="round" />
        <circle cx="12" cy="10" r="1" fill="#E8A33D" />
      </svg>
    ),
  },
  {
    title: "Hybrid System",
    subtitle: "Grid Connected + Battery Backup",
    badge: "Zero Downtime Clean Energy",
    description:
      "A hybrid system combines the best of both worlds: connected to the utility grid for net-metering bill credits, while featuring battery backup that keeps critical equipment running seamlessly during grid load-shedding and blackout outages.",
    svgIllustration: (
      <svg className="w-full h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#E8A33D" fill="rgba(232,163,61,0.15)" />
        <path d="M12 22V12" stroke="#2FB8C6" />
        <path d="M22 8.5L12 12L2 8.5" stroke="#E8A33D" />
        <circle cx="12" cy="12" r="2" fill="#E8A33D" />
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

export default function SolarGreenEnergyPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy text-paper overflow-hidden">
        {/* Background photo ("Solar hero") */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-hero.png"
            alt="Siganext Commercial Rooftop Solar Array Installation in Maharashtra"
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
              <Link href="/" className="hover:text-marigold-gold transition-colors">
                Home
              </Link>
              <span className="text-paper/30">/</span>
              <Link href="/#services" className="hover:text-marigold-gold transition-colors">
                Services
              </Link>
              <span className="text-paper/30">/</span>
              <span className="text-paper/90">Solar &amp; Green Energy</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-marigold-gold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-marigold-gold animate-pulse" />
              OUR SERVICES · 02
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.06] tracking-[-0.02em] text-[clamp(2.25rem,5vw,3.75rem)] max-w-[22ch]">
              Solar power, sized for how you actually use energy.
            </h1>

            <p className="mt-6 max-w-[62ch] text-paper/85 text-[1.0625rem] leading-relaxed font-body">
              Customized on-grid, off-grid, and hybrid solar energy systems engineered for homes, commercial rooftops, industrial facilities, and off-grid operations across Maharashtra &amp; Goa.
            </p>

            <div className="mt-8">
              <MagneticButton
                href="/contact?service=solar-green-energy"
                className="btn btn-primary shadow-xl hover:shadow-marigold-gold/30"
              >
                Get a Free Solar Site Assessment →
              </MagneticButton>
            </div>
          </Reveal>

          {/* 3D Interactive WebGL Solar Array */}
          <Reveal delay={0.15}>
            <SolarGrid3D />
          </Reveal>
        </div>

        {/* Marigold-gold trace accent running along hero's bottom edge */}
        <NetworkTraceLine color="gold" />
      </section>

      {/* ===================== ON-GRID VS OFF-GRID VS HYBRID EXPLAINER ===================== */}
      <section className="bg-panel-mist py-16 md:py-24 border-b border-ink/10">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-marigold-gold mb-4">
              SYSTEM ARCHITECTURE
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[26ch]">
              On-Grid vs Off-Grid vs Hybrid — Which is right for you?
            </h2>
            <p className="mt-3 max-w-2xl text-ink/75 font-body text-[1rem] leading-relaxed">
              Choosing the right solar topology depends on your grid reliability, daytime vs night energy usage, and power backup requirements.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:gap-8">
            {SYSTEM_EXPLAINERS.map((sys, i) => (
              <Reveal key={sys.title} delay={i * 0.1}>
                <Card3DTilt maxTilt={8} scale={1.02} className="h-full rounded-2xl">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink/10 shadow-sm hover:shadow-xl hover:border-marigold-gold/50 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      {/* Isometric diagram illustration container */}
                      <div className="rounded-xl bg-panel-mist/60 border border-ink/5 p-4 mb-6 group-hover:bg-marigold-gold/5 transition-colors">
                        {sys.svgIllustration}
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono uppercase text-[10px] tracking-[0.08em] text-marigold-gold font-semibold border border-marigold-gold/30 rounded-full px-2.5 py-0.5 bg-marigold-gold/10">
                          {sys.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-ink text-xl sm:text-2xl tracking-[-0.01em]">
                        {sys.title}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/50 mt-1 mb-4">
                        {sys.subtitle}
                      </p>

                      <p className="text-ink/75 text-[0.93rem] leading-relaxed font-body">
                        {sys.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-ink/5 flex items-center justify-between">
                      <span className="font-mono uppercase text-[10px] tracking-[0.08em] text-ink/40">
                        Option 0{i + 1}
                      </span>
                      <Link
                        href={`/contact?service=solar-green-energy&type=${sys.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="font-mono text-xs text-marigold-gold font-semibold hover:underline flex items-center gap-1"
                      >
                        Inquire Option <span>→</span>
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CORE SERVICE BULLETS ===================== */}
      <section className="bg-panel-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-4">
              CAPABILITIES & EPC DELIVERABLES
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[24ch]">
              Engineered solar solutions from site survey to 25-year yield.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICE_BULLETS.map((bullet, i) => (
              <Reveal key={bullet.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 md:p-8 border border-ink/10 shadow-sm hover:shadow-md hover:border-marigold-gold/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-marigold-gold/10 border border-marigold-gold/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
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
                      Deliverable 0{i + 1}
                    </span>
                    <span className="font-mono text-xs text-marigold-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Custom EPC SLA →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="bg-marigold-gold text-grid-navy">
        <div className="container-site py-16 md:py-20 text-center">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-grid-navy/70 mb-4">
              SOLAR FEASIBILITY & AUDIT
            </p>
            <h2 className="font-display font-semibold text-grid-navy tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)] max-w-[24ch] mx-auto">
              Ready to lower your electricity bills with clean solar power?
            </h2>
            <p className="mt-4 max-w-[52ch] mx-auto text-grid-navy/80 text-[1rem] leading-relaxed font-body">
              Request a zero-obligation rooftop solar assessment. Our Nashik engineering team will analyze your electricity bills, roof shading, and ROI payback period.
            </p>
            <Link
              href="/contact?service=solar-green-energy"
              className="inline-flex items-center mt-8 bg-grid-navy text-paper font-mono uppercase text-xs font-semibold tracking-[0.08em] px-7 py-3.5 rounded-full hover:bg-ink hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get a Free Solar Site Assessment
              <span className="ml-2">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== CROSS-LINK ROW ===================== */}
      <SectionDivider color="#E8A33D" />

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
                  className="group block bg-white rounded-xl p-6 border border-ink/10 shadow-sm hover:shadow-md hover:border-marigold-gold/50 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-panel-mist/80 border border-ink/5 group-hover:bg-marigold-gold/10 transition-colors">
                      {srv.icon}
                    </div>
                    <span className="font-mono text-sm text-ink/40 group-hover:text-marigold-gold group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-ink text-base group-hover:text-marigold-gold transition-colors">
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
