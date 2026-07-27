import Link from "next/link";
import type { Metadata } from "next";
import SectionDivider from "@/components/SectionDivider";
import HeroScene from "@/components/HeroSceneWrapper";
import Reveal from "@/components/Reveal";
import HeroEntrance from "@/components/HeroEntrance";
import HomeFAQ from "@/components/HomeFAQ";
import Card3DTilt from "@/components/Card3DTilt";
import MagneticButton from "@/components/MagneticButton";
import ParticleField from "@/components/ParticleField";

export const metadata: Metadata = {
  title: "Siganext | Internet, Solar & IT Solutions – Nashik & Maharashtra",
  description:
    "Carrier-grade fiber internet, enterprise rooftop solar, IT hardware & CCTV security, and managed hosting from one Nashik-based operator across Maharashtra & Goa.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Siganext | Internet, Solar & IT Solutions – Nashik & Maharashtra",
    description:
      "Carrier-grade fiber internet, enterprise rooftop solar, IT hardware & CCTV security, and managed hosting from one Nashik-based operator across Maharashtra & Goa.",
    type: "website",
  },
};

const TRUST_ITEMS = [
  { label: "Registered Private Limited Company", kind: "text" as const },
  { label: "CIN: [CONFIRM]", kind: "badge" as const },
  {
    label:
      "Serving Nashik · Mumbai · Thane · Pune · Nagpur · Chhatrapati Sambhajinagar · Goa",
    kind: "text" as const,
  },
  { label: "Government Tender Eligible", kind: "badge" as const },
  { label: "One Vendor — Design, Supply, Install, AMC", kind: "text" as const },
];

const SERVICES = [
  {
    index: "01",
    title: "Internet & Networking",
    blurb:
      "Broadband, leased lines, structured cabling and enterprise connectivity.",
    href: "/services/internet-networking",
  },
  {
    index: "02",
    title: "Solar & Green Energy",
    blurb:
      "On-grid, off-grid and hybrid solar, sized to how you actually use power.",
    href: "/services/solar-green-energy",
  },
  {
    index: "03",
    title: "IT, Software & Security",
    blurb:
      "Hardware, CCTV, ERP/CRM and cybersecurity, without the vendor sprawl.",
    href: "/services/it-software-security",
  },
  {
    index: "04",
    title: "Data Center & Managed Hosting",
    blurb:
      "Colocation, cloud infrastructure and disaster recovery.",
    href: "/services/data-center-hosting",
  },
];

const CITIES = [
  { name: "Nashik", hook: "Home base — engineering, NOC and operations." },
  { name: "Mumbai", hook: "Enterprise connectivity and infrastructure." },
  { name: "Thane", hook: "Residential and SMB solar and broadband." },
  { name: "Pune", hook: "IT corridors and data centre footprint." },
  { name: "Nagpur", hook: "Central Maharashtra reach and logistics." },
  {
    name: "Chhatrapati Sambhajinagar",
    hook: "Heritage city, modern connectivity.",
  },
  { name: "Goa", hook: "Coastal coverage and tourism-sector uptime." },
];

const WHY_CHOOSE = [
  {
    t: "One-vendor convenience",
    d: "Design, supply, install and maintain — one contract, one SLA, one phone number across all four verticals.",
  },
  {
    t: "Local presence",
    d: "Nashik-based team on the ground across Maharashtra and Goa — not a remote desk three time zones away.",
  },
  {
    t: "End-to-end delivery",
    d: "Site survey through AMC, with the seam between connectivity, power and IT engineered rather than negotiated.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-grid-navy overflow-hidden">
        {/* circuit-board grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,247,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 35%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 35%, transparent 75%)",
          }}
        />

        {/* 3D scene — full-bleed backdrop, behind everything, no clipping/overflow */}
        <HeroScene fill />

        {/* foreground scrim so text stays readable over the scene on any width */}
        <div
          aria-hidden
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,18,32,0.92) 0%, rgba(11,18,32,0.7) 45%, rgba(11,18,32,0.35) 75%, transparent 100%)",
          }}
        />

        <div className="relative z-10 container-site pt-28 pb-16 md:pt-36 md:pb-28">
          <HeroEntrance
            eyebrow="NASHIK-BASED · REGISTERED PRIVATE LIMITED COMPANY · SERVING MAHARASHTRA & GOA"
            headlineWords={[
              <span key="0">Connectivity.</span>,
              <span key="1" className="text-signal-teal">
                Power.
              </span>,
              <span key="2">Technology.</span>,
            ]}
            subhead="One provider for broadband & network infrastructure, solar & green energy, and IT, software & security — built for Maharashtra's homes, businesses and government projects."
            primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
            secondaryCta={{ label: "View Our Services", href: "/#services" }}
          />
        </div>

        {/* bottom convergence trace */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--signal-teal), var(--marigold-gold), transparent)",
            opacity: 0.55,
          }}
        />
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="bg-panel-mist border-b border-ink/10 py-5">
        <div className="container-site">
          <Reveal
            as="ul"
            className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 lg:gap-x-8 text-ink/75"
          >
            {TRUST_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 font-mono uppercase text-[10px] md:text-[11px] tracking-[0.08em] shrink-0"
              >
                {item.kind === "badge" ? (
                  <TrustBadge>{item.label}</TrustBadge>
                ) : (
                  <>
                    <DotIcon />
                    <span>{item.label}</span>
                  </>
                )}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <SectionDivider color="#2FB8C6" />

      <section className="bg-panel-mist">
        <div className="container-site py-16 md:py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-4">
              About Siganext
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.1] max-w-[24ch]">
              Sustainable power, reliable connectivity, and smart technology —
              from one Nashik-based team.
            </h2>
            <div className="mt-6 space-y-4 text-ink/75 text-[1.0625rem] leading-relaxed max-w-[52ch]">
              <p>
                Siganext Networks and Green Energy Solutions Private Limited is a
                Nashik-based company built around one premise: connectivity, solar
                and IT are not three businesses glued together — they are one
                system, and the operator that treats them that way builds better
                infrastructure.
              </p>
              <p>
                We hold all four verticals under one MOA, one SLA, and one
                engineering culture — so the seam between power, signal and data
                is designed, not negotiated across vendors.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center mt-7 font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal hover:text-ink transition-colors duration-200 group"
            >
              Learn more about us
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          {/* photo with marigold corner accent */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
              {/* marigold-gold offset corner accent shape */}
              <div
                aria-hidden
                className="absolute -right-3 -bottom-3 w-2/3 h-2/3 rounded-xl bg-marigold-gold z-0 shadow-md"
              />
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-grid-navy ring-1 ring-ink/10 shadow-2xl group">
                <img
                  src="/images/about-rooftop-engineer.jpg"
                  alt="Siganext Rooftop Field Engineer inspecting solar & microwave infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grid-navy/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-grid-navy/80 backdrop-blur-sm p-3 rounded-lg border border-signal-teal/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal-teal animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-paper/90">
                      Nashik Base · Field Operations
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-marigold-gold border border-marigold-gold/40 px-2 py-0.5 rounded">
                    Certified SLA
                  </span>
                </div>
              </div>
              {/* signal trace corner */}
              <svg
                aria-hidden
                className="absolute left-4 top-6 w-16 h-16 hidden md:block"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M2,32 H18 L24,16 L34,48 L40,32 H62"
                  stroke="#2FB8C6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES OVERVIEW ===================== */}
      <SectionDivider color="#E8A33D" />

      <section id="services" className="bg-panel-mist">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
              The four verticals
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.75rem,3.5vw,2.75rem)] max-w-[20ch]">
              One provider. Four connected capabilities.
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.05}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GOVERNMENT & ENTERPRISE TEASER ===================== */}
      <section className="bg-grid-navy text-paper relative overflow-hidden">
        <ParticleField particleCount={35} lineColor="232, 163, 61" dotColor="47, 184, 198" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,163,61,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232,163,61,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 60% 80% at 80% 50%, black 35%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 80% at 80% 50%, black 35%, transparent 75%)",
          }}
        />
        <Reveal className="relative z-10 container-site py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-marigold-gold mb-4">
              Government & Enterprise
            </p>
            <h2 className="font-display font-semibold text-paper tracking-[-0.02em] text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.1] max-w-[22ch]">
              A single, compliant vendor for connectivity, power and technology.
            </h2>
            <p className="mt-5 max-w-[48ch] text-paper/75 text-[1rem] leading-relaxed">
              One MOA, one BoQ, one accountability across all four verticals —
              engineered for departments, PSUs and enterprises that need three
              vendors reconciled into one operator.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-start">
            <MagneticButton href="/government-enterprise" className="btn btn-primary shadow-xl hover:shadow-marigold-gold/20">
              Download Company Profile
            </MagneticButton>
            <MagneticButton href="/government-enterprise" className="btn btn-ghost border border-paper/20">
              Contact for Tender Inquiries
            </MagneticButton>
          </div>
        </Reveal>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="bg-panel-mist">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-sahyadri-green mb-4">
              Why Siganext
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.6rem,3.2vw,2.5rem)]">
              The operator who owns the seam.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.05}>
                <Card3DTilt maxTilt={8} scale={1.02} className="h-full rounded-xl">
                  <div className="bg-white rounded-xl p-6 md:p-7 border border-ink/10 h-full shadow-sm">
                    <span className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-semibold text-ink text-[1.25rem] tracking-[-0.01em] mt-3">
                      {w.t}
                    </h3>
                    <p className="mt-3 text-ink/70 text-[0.97rem] leading-relaxed font-body">
                      {w.d}
                    </p>
                  </div>
                </Card3DTilt>
              </Reveal>
            ))}
          </div>

          {/* honest compliance note — no fabricated 4th stat */}
          <Reveal delay={0.1}>
            <p className="mt-8 font-mono uppercase text-[10px] tracking-[0.08em] text-ink/45 max-w-[70ch]">
              Note · operational figures (years operating, project count, MW
              installed) will be listed publicly once verified. We do not
              publish unverified statistics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== LOCAL COVERAGE ===================== */}
      <SectionDivider color="#1F6E4A" />

      <section className="bg-panel-mist">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
              Coverage
            </p>
            <h2 className="font-display font-semibold text-ink tracking-[-0.02em] text-[clamp(1.6rem,3.2vw,2.5rem)] max-w-[24ch]">
              Serving Nashik and expanding across Maharashtra & Goa.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CITIES.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 0.04}
                className={i === 0 ? "col-span-2 md:col-span-1 lg:col-span-1" : ""}
              >
                <Card3DTilt maxTilt={10} scale={1.03} className="h-full rounded-xl">
                  <CityTile name={c.name} hook={c.hook} featured={i === 0} />
                </Card3DTilt>
              </Reveal>
            ))}
            {/* 8th tile: filler / outlook */}
            <Reveal delay={0.28}>
              <div
                className="rounded-xl border border-dashed border-signal-teal/40 h-full min-h-[220px] grid place-items-center p-6 text-center"
                style={{ background: "rgba(47,184,198,0.05)" }}
              >
                <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-ink/55 max-w-[24ch]">
                  Expanding to additional Maharashtra & Goa districts —
                  contact us for your location.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== HOME FAQ SECTION ===================== */}
      <HomeFAQ />

      {/* ===================== FINAL CTA BAND ===================== */}
      <section className="bg-marigold-gold text-grid-navy relative overflow-hidden">
        <div className="container-site py-16 md:py-20 text-center relative z-10">
          <Reveal>
            <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-grid-navy/65 mb-4">
              Start with a conversation
            </p>
            <h2 className="font-display font-semibold text-grid-navy tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)]">
              Let&rsquo;s talk about your project.
            </h2>
            <div className="mt-8 flex justify-center">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center bg-grid-navy text-paper font-mono uppercase text-xs font-semibold tracking-[0.08em] px-7 py-4 rounded-full hover:bg-ink transition-colors duration-200 shadow-xl"
              >
                Contact Siganext
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------

function DotIcon() {
  return (
    <span
      aria-hidden
      className="inline-block w-1.5 h-1.5 rounded-full bg-signal-teal shrink-0"
    />
  );
}

function ServiceCard({
  index,
  title,
  blurb,
  href,
}: {
  index: string;
  title: string;
  blurb: string;
  href: string;
}) {
  return (
    <Card3DTilt maxTilt={10} scale={1.03} className="h-full">
      {/* Outer Shell - Doppelrand Architecture */}
      <div className="p-2 rounded-[1.75rem] bg-gradient-to-b from-white/80 to-white/40 border border-black/5 shadow-lg h-full">
        {/* Inner Core */}
        <Link
          href={href}
          className="group relative block bg-white rounded-[calc(1.75rem-0.5rem)] p-6 md:p-7 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] hover:shadow-2xl hover:border-signal-teal/40 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between"
        >
          {/* hover trace line — animated top border */}
          <span
            aria-hidden
            className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-signal-teal to-marigold-gold group-hover:w-full transition-all duration-500 ease-out"
          />
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-xs tracking-[0.15em] text-signal-teal/80 group-hover:text-marigold-gold transition-colors duration-200">
                // {index}
              </span>
              <span className="w-7 h-7 rounded-full bg-signal-teal/10 flex items-center justify-center font-mono text-xs text-signal-teal group-hover:bg-signal-teal group-hover:text-paper group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-300">
                ↗
              </span>
            </div>
            <h3 className="font-display font-bold text-ink text-[1.3rem] tracking-[-0.01em] mt-4 leading-tight group-hover:text-signal-teal transition-colors duration-200">
              {title}
            </h3>
            <p className="mt-3 text-ink/75 text-[0.93rem] leading-relaxed font-sans">{blurb}</p>
          </div>
          <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-signal-teal/80">
            <span>Explore Solution</span>
            <span>→</span>
          </div>
        </Link>
      </div>
    </Card3DTilt>
  );
}

// Inline badge chip — used to visually distinguish trust-strip items like CIN.
function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-signal-teal/15 text-signal-teal border border-signal-teal/30 rounded-full px-3 py-1 font-mono uppercase text-[10px] tracking-[0.1em] shadow-sm">
      {children}
    </span>
  );
}

function CityTile({
  name,
  hook,
  featured = false,
}: {
  name: string;
  hook: string;
  featured?: boolean;
}) {
  return (
    /* Outer Shell */
    <div className={`p-1.5 rounded-[1.5rem] ${featured ? "bg-gradient-to-b from-marigold-gold/30 to-signal-teal/20 border border-marigold-gold/40" : "bg-white/10 border border-white/10"} h-full`}>
      {/* Inner Core */}
      <div
        className={`group relative overflow-hidden rounded-[calc(1.5rem-0.375rem)] h-full min-h-[200px] sm:min-h-[220px] ${
          featured ? "md:min-h-[260px]" : ""
        }`}
        style={{
          background: featured
            ? "linear-gradient(135deg, #13203a 0%, #0B1220 70%, #07101e 100%)"
            : "linear-gradient(135deg, #1a2440 0%, #0B1220 80%)",
        }}
      >
        {/* faint grid — circuit-board metaphor */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14] group-hover:opacity-[0.25] transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,184,198,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(47,184,198,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* brand glow */}
        <div
          aria-hidden
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(60% 60% at 70% 30%, rgba(47,184,198,0.18), transparent 65%)",
          }}
        />
        {/* zoom-on-hover overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
          style={{
            background:
              "radial-gradient(80% 80% at 50% 40%, rgba(232,163,61,0.18), transparent 70%)",
          }}
        />
        <div className="relative h-full p-5 sm:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-2">
            <span
              aria-hidden
              className="inline-block w-2 h-2 rounded-full shrink-0 animate-pulse"
              style={{
                background: featured ? "var(--marigold-gold)" : "var(--signal-teal)",
              }}
            />
            <span className="font-mono uppercase text-[9px] sm:text-[10px] tracking-[0.1em] text-paper/60 truncate">
              {featured ? "Headquarters NOC" : "Carrier Coverage"}
            </span>
          </div>
          <h3
            className={`font-display font-bold text-paper tracking-[-0.01em] break-words ${
              featured ? "text-[1.4rem] sm:text-[1.6rem]" : "text-[1.15rem] sm:text-[1.3rem]"
            }`}
          >
            {name}
          </h3>
          <p className="mt-1.5 text-paper/70 text-[0.82rem] sm:text-[0.88rem] leading-relaxed">
            {hook}
          </p>
        </div>
      </div>
    </div>
  );
}
