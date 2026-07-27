import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import CheckAvailabilityModule from "@/components/CheckAvailabilityModule";
import NetworkTraceLine from "@/components/NetworkTraceLine";
import NetworkTopology2D from "@/components/NetworkTopology2D";
import Card3DTilt from "@/components/Card3DTilt";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Broadband, Leased Line & Fibre Internet – Siganext Nashik",
  description:
    "High-speed fiber broadband, dedicated 1:1 leased lines, structured campus cabling, and 24/7 NOC monitoring across Maharashtra & Goa.",
  alternates: { canonical: "/services/internet-networking" },
  openGraph: {
    title: "Broadband, Leased Line & Fibre Internet – Siganext Nashik",
    description:
      "High-speed fiber broadband, enterprise leased lines, wireless links, and managed NOC uptime across Maharashtra and Goa.",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Broadband, Leased Line & Fibre Internet",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Siganext Networks and Green Energy Solutions Private Limited",
  },
  "areaServed": ["Nashik", "Mumbai", "Thane", "Pune", "Nagpur", "Chhatrapati Sambhajinagar", "Goa"],
  "description": "High-speed fiber internet, enterprise leased lines, structured cabling, and 24/7 NOC monitoring.",
};

const SERVICE_BULLETS = [
  {
    title: "High-Speed Fiber Broadband & Leased Lines",
    description:
      "Dedicated 1:1 symmetrical bandwidth, carrier-grade fiber drops, and zero-throttling internet connections built for high-throughput operational demands.",
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
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Structured Campus Cabling & Fiber Backbones",
    description:
      "Cat6A/Cat7 copper cabling, single-mode & multi-mode fiber backbones, patch panel distribution, and server rack installations engineered to TIA/EIA standards.",
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
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <rect x="2" y="3" width="4" height="4" rx="1" />
        <rect x="18" y="17" width="4" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Point-to-Point & Point-to-Multipoint Wireless",
    description:
      "High-capacity microwave and mmWave radio bridging connecting remote plants, solar fields, and off-grid facilities where physical fiber trenching is unviable.",
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
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" fill="currentColor" />
        <path d="M12 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <path d="M14 16l4-8" />
        <path d="M18 8l3 3" />
      </svg>
    ),
  },
  {
    title: "Enterprise & Institutional Managed Wi-Fi",
    description:
      "High-density mesh Wi-Fi access points, cloud controller orchestration, guest authentication portals, and VLAN isolation for campuses, hotels, and offices.",
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
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    title: "24/7 Managed NOC & Active Monitoring",
    description:
      "Continuous latency, packet loss, and link health tracking from our Nashik Network Operations Center with automated SD-WAN failover and rapid field dispatch.",
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
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20v-12" />
        <path d="M22 20V4" />
      </svg>
    ),
  },
];

const OTHER_SERVICES = [
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
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
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
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function InternetNetworkingPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy text-paper overflow-hidden">
        {/* Background photo ("Networking hero") */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/networking-hero.jpg"
            alt="Siganext Network Engineer inspecting fiber and microwave telecom infrastructure"
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
              <span className="text-paper/90">Internet & Networking</span>
            </nav>

            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-teal animate-pulse" />
              OUR SERVICES · 01
            </p>

            <h1 className="font-display font-semibold text-paper leading-[1.06] tracking-[-0.02em] text-[clamp(2.25rem,5vw,3.75rem)] max-w-[20ch]">
              Internet &amp; Networking, built for uptime.
            </h1>

            <p className="mt-6 max-w-[62ch] text-paper/85 text-[1.0625rem] leading-relaxed font-body">
              High-speed fiber broadband, dedicated leased lines, structured campus cabling, point-to-point wireless links, and managed Wi-Fi networks — engineered to keep your home, enterprise, or government operations connected 24/7.
            </p>
          </Reveal>

          {/* 2D Interactive Carrier Fiber Matrix */}
          <Reveal delay={0.15}>
            <NetworkTopology2D />
          </Reveal>
        </div>

        {/* Small trace-line animation running along the hero's bottom edge (signal-teal) */}
        <NetworkTraceLine />
      </section>

      {/* ===================== CHECK AVAILABILITY MODULE ===================== */}
      <section className="bg-panel-mist pt-12 pb-8">
        <div className="container-site">
          <Reveal>
            <CheckAvailabilityModule />
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICE BULLETS ===================== */}
      <section className="bg-panel-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
              CAPABILITIES & SPECS
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[24ch]">
              Carrier-grade connectivity engineered for Maharashtra &amp; Goa.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICE_BULLETS.map((bullet, i) => (
              <Reveal
                key={bullet.title}
                delay={i * 0.08}
                className={i === SERVICE_BULLETS.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card3DTilt maxTilt={8} scale={1.02} className="h-full">
                  {/* Outer Shell - Doppelrand Architecture */}
                  <div className="p-2 rounded-[1.75rem] bg-gradient-to-b from-white/80 to-white/40 border border-black/5 shadow-lg h-full">
                    {/* Inner Core */}
                    <div className="bg-white rounded-[calc(1.75rem-0.5rem)] p-6 md:p-8 border border-ink/5 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-2xl hover:border-signal-teal/40 transition-all duration-300 h-full flex flex-col justify-between group">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-signal-teal/10 border border-signal-teal/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                          {bullet.icon}
                        </div>
                        <h3 className="font-display font-bold text-ink text-[1.3rem] tracking-[-0.01em]">
                          {bullet.title}
                        </h3>
                        <p className="mt-3 text-ink/75 text-[0.95rem] leading-relaxed font-sans">
                          {bullet.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between text-ink/50">
                        <span className="font-mono uppercase text-[10px] tracking-[0.1em] text-signal-teal font-semibold">
                          Spec // 0{i + 1}
                        </span>
                        <span className="font-mono text-xs text-signal-teal opacity-0 group-hover:opacity-100 transition-opacity">
                          Engineered SLA →
                        </span>
                      </div>
                    </div>
                  </div>
                </Card3DTilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ALSO PART OF SIGANEXT CROSS-LINKS ===================== */}
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
