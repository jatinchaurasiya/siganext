"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import EnergyCoreWrapper from "@/components/EnergyCoreWrapper";
import ConfirmTag from "@/components/ConfirmTag";

const SERVICES_LIST = [
  {
    num: "01",
    title: "Internet & Networking",
    desc: "Carrier-grade fiber optic broadband, leased lines, structured cabling, satellite dish & wireless telecommunication infrastructure built for maximum uptime.",
    href: "/services/internet-networking",
    tag: "High-Speed Infrastructure",
  },
  {
    num: "02",
    title: "Solar & Green Energy",
    desc: "Commercial, industrial, residential & government rooftop solar power EPC — on-grid, off-grid & hybrid systems sized for actual energy consumption.",
    href: "/services/solar-green-energy",
    tag: "Clean Power EPC",
  },
  {
    num: "03",
    title: "IT, Software & Security",
    desc: "Single-vendor enterprise IT hardware supply, CCTV security surveillance, ERP/automation software, cybersecurity & proactive AMC technical support.",
    href: "/services/it-software-security",
    tag: "Unified IT & CCTV",
  },
  {
    num: "04",
    title: "Data Center & Managed Hosting",
    desc: "Colocation, cloud infrastructure, NOC monitoring & disaster recovery hosting authorized under company MOA.",
    href: "/services/data-center-hosting",
    tag: "Hosting Infrastructure",
    confirmStatus: "Operational Status Pending",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "One-Vendor Convenience",
    desc: "Eliminate vendor sprawl by relying on a single incorporated partner for your broadband network, solar power grid, and office IT security.",
  },
  {
    title: "Local Presence",
    desc: "Based in Nashik with field engineers operating directly across Maharashtra and Goa for rapid deployment and on-site maintenance.",
  },
  {
    title: "End-to-End Delivery",
    desc: "Complete lifecycle capability — from technical design & procurement to installation, commissioning, and annual maintenance contracts (AMC).",
  },
];

const CITIES = [
  {
    name: "Nashik",
    hook: "Headquarters & Primary Field Operations Hub",
    img: "/images/city_nashik.png",
  },
  {
    name: "Mumbai",
    hook: "Enterprise Leased Line & Corporate IT Deployments",
    img: "/images/homepage_hero_solar.png",
  },
  {
    name: "Thane",
    hook: "Commercial Rooftop Solar & Fiber Infrastructure",
    img: "/images/internet_hero.png",
  },
  {
    name: "Pune",
    hook: "Software, ERP & Enterprise Security Solutions",
    img: "/images/it_security_hero.png",
  },
  {
    name: "Nagpur",
    hook: "Industrial Solar Installations & Connectivity",
    img: "/images/datacenter_hero.png",
  },
  {
    name: "Chhatrapati Sambhajinagar",
    hook: "Public Sector & Commercial Infrastructure",
    img: "/images/govt_enterprise_hero.png",
  },
  {
    name: "Goa",
    hook: "Coastal Hospitality Solar & Fiber Connectivity",
    img: "/images/homepage_hero_solar.png",
  },
];

const FAQ_ITEMS = [
  {
    q: "What verticals does Siganext operate across?",
    a: "Siganext operates across three primary verticals: Internet & Networking (broadband & fiber), Solar & Green Energy (photovoltaic systems), and IT, Software & Security (hardware, CCTV, software), alongside Data Center & Managed Hosting.",
  },
  {
    q: "Where is Siganext headquartered?",
    a: "Siganext Networks and Green Energy Solutions Private Limited is incorporated and headquartered in Nashik, serving clients across Maharashtra and Goa.",
  },
  {
    q: "Is Siganext eligible for government and corporate tenders?",
    a: "Yes. Siganext is registered under the Companies Act, 2013, and is structured to bid on public sector, government, and corporate infrastructure tenders.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-bone text-obsidian overflow-hidden">
      {/* 1. HERO WORDMARK TREATMENT */}
      <section
        data-section-index="1"
        className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 bg-obsidian text-paper overflow-hidden"
      >
        {/* Background Photograph with Obsidian Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage_hero_solar.png"
            alt="Rooftop solar installation in Nashik at dusk"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
        </div>

        {/* Oversized Bleed Wordmark */}
        <div className="relative z-10 w-full overflow-hidden select-none pointer-events-none -mt-4">
          <h1 className="font-display font-extrabold text-[18vw] leading-[0.8] tracking-[-0.04em] text-paper/10 text-center uppercase whitespace-nowrap">
            SIGANEXT
          </h1>
        </div>

        {/* Floating Pill Badges & Hero Content */}
        <div className="container-site relative z-20 my-auto grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            {/* Floating Badges */}
            <div className="flex flex-wrap gap-2.5">
              <div className="px-3.5 py-1.5 rounded-full bg-obsidian/80 backdrop-blur-md border border-champagne/40 text-champagne font-mono text-[11px] uppercase tracking-[0.08em]">
                Registered Private Limited Company
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-obsidian/80 backdrop-blur-md border border-champagne/40 text-champagne font-mono text-[11px] uppercase tracking-[0.08em]">
                Govt Tender Eligible
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-obsidian/80 backdrop-blur-md border border-white/20 text-mist font-mono text-[11px] uppercase tracking-[0.08em]">
                Nashik-Based · Serving Maharashtra & Goa
              </div>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.1]">
              Connectivity. Power. <br />
              <span className="text-champagne font-normal italic">Technology.</span>
            </h2>

            <p className="text-mist text-base sm:text-lg max-w-2xl leading-relaxed">
              One provider for broadband & network infrastructure, solar & green energy, and IT, software & security — built for Maharashtra's homes, businesses and government projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-champagne">
                Get a Free Consultation →
              </Link>
              <Link href="#verticals" className="btn btn-ghost">
                View Our Services
              </Link>
            </div>
          </div>

          {/* Corner Signature 3D Energy Core Object */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="relative">
              <EnergyCoreWrapper size={220} />
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.08em] text-mist/60 mt-2">
                Unified Infrastructure Core
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-obsidian border-y border-champagne/20 py-4 text-paper/80 font-mono text-xs uppercase tracking-[0.08em] overflow-x-auto">
        <div className="container-site flex items-center justify-between gap-6 whitespace-nowrap">
          <span>Registered Private Limited Company</span>
          <span className="text-champagne">•</span>
          <span className="flex items-center gap-1.5">
            CIN: <ConfirmTag label="CIN Pending" variant="inline" />
          </span>
          <span className="text-champagne">•</span>
          <span>Government Tender Eligible</span>
          <span className="text-champagne">•</span>
          <span>One Vendor — Design, Supply, Install, AMC</span>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section data-section-index="2" className="py-24 bg-bone">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Unified Capability
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-obsidian leading-snug">
              Sustainable power, reliable connectivity, and smart technology — from one team.
            </h2>
            <p className="text-mist text-base leading-relaxed">
              Siganext Networks and Green Energy Solutions Private Limited brings three essential services under one roof. Instead of coordinating separate vendors for your broadband, rooftop solar, and office IT, Siganext designs, supplies, installs and maintains all three.
            </p>
            <div>
              <Link href="/about" className="btn btn-obsidian">
                Read About Siganext →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/60 border border-obsidian/10 luxury-card space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-[0.08em] text-obsidian font-semibold">
                Certified Engineers
              </h3>
              <p className="text-xs text-mist leading-relaxed">
                Qualified technical personnel managing network cabling, PV electrical setups, and security hardware.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/60 border border-obsidian/10 luxury-card space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-[0.08em] text-obsidian font-semibold">
                Govt Tender Ready
              </h3>
              <p className="text-xs text-mist leading-relaxed">
                Incorporated legal entity structured for public sector and municipal infrastructure procurement.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/60 border border-obsidian/10 luxury-card space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-[0.08em] text-obsidian font-semibold">
                End-to-End AMC
              </h3>
              <p className="text-xs text-mist leading-relaxed">
                Long-term service agreements ensuring long-term maintenance of fiber, solar assets, and IT systems.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/60 border border-obsidian/10 luxury-card space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-[0.08em] text-obsidian font-semibold">
                Local Presence
              </h3>
              <p className="text-xs text-mist leading-relaxed">
                Headquartered in Nashik with responsive field operations across Maharashtra & Goa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW — 4-ITEM NUMBERED LIST */}
      <section id="verticals" data-section-index="3" className="py-24 bg-obsidian text-paper">
        <div className="container-site space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
                Core Verticals
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl text-paper">
                Four Pillars of Modern Infrastructure
              </h2>
            </div>
            <p className="text-mist text-sm max-w-md">
              Explore our core business verticals designed for residential, commercial, enterprise, and government clients.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {SERVICES_LIST.map((srv) => (
              <div key={srv.num} className="py-10 grid md:grid-cols-12 gap-6 items-center group luxury-card">
                <div className="md:col-span-2 font-display text-4xl text-champagne font-extrabold">
                  {srv.num}
                </div>
                <div className="md:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-champagne">
                      {srv.tag}
                    </span>
                    {srv.confirmStatus && (
                      <ConfirmTag label={srv.confirmStatus} variant="badge" />
                    )}
                  </div>
                  <h3 className="text-2xl font-editorial text-paper group-hover:text-champagne transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <div className="md:col-span-4 text-mist text-sm leading-relaxed">
                  {srv.desc}
                </div>
                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <Link
                    href={srv.href}
                    className="font-mono text-xs uppercase tracking-[0.08em] text-champagne group-hover:underline flex items-center gap-1"
                  >
                    Explore Vertical →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOVERNMENT & ENTERPRISE TEASER BAND */}
      <section data-section-index="4" className="py-20 bg-obsidian text-paper border-t border-champagne/20">
        <div className="container-site grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-champagne font-mono text-xs uppercase tracking-[0.08em]">
              Public Sector & Tender Bidding
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-paper">
              A single, compliant vendor for connectivity, power and technology.
            </h2>
            <p className="text-mist text-base max-w-2xl leading-relaxed">
              Positioned to bid on corporate, government, and municipal tenders across network infrastructure, solar energy, and IT supply under the Companies Act, 2013.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link href="/government-enterprise" className="btn btn-champagne">
              Government & Enterprise Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US — EXACTLY 3 CARDS ONLY */}
      <section data-section-index="5" className="py-24 bg-bone">
        <div className="container-site space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Operational Value
            </span>
            <h2 className="font-editorial text-4xl text-obsidian">
              Why Partner With Siganext
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-obsidian/10 luxury-card space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne font-mono font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial text-2xl text-obsidian">{item.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCAL COVERAGE — 7 CITY TILES */}
      <section data-section-index="6" className="py-24 bg-obsidian text-paper">
        <div className="container-site space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
                Regional Reach
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl text-paper">
                Serving Maharashtra & Goa
              </h2>
            </div>
            <p className="text-mist text-sm max-w-md">
              Field deployment coverage across key municipal corporations and commercial centers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.map((city, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-obsidian/80 border border-white/10 luxury-card flex flex-col justify-between p-6 min-h-[220px]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={city.img}
                    alt={`${city.name} connectivity and solar coverage`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                </div>

                <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.08em] text-champagne">
                  Region 0{idx + 1}
                </div>

                <div className="relative z-10 space-y-1 mt-auto">
                  <h3 className="font-editorial text-2xl text-paper group-hover:text-champagne transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs text-mist">{city.hook}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION WITH JSON-LD SCHEMA */}
      <section className="py-20 bg-bone border-t border-obsidian/10">
        <div className="container-site max-w-3xl space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-editorial text-3xl text-obsidian">Common Inquiries</h2>
          </div>

          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-obsidian/10 space-y-2">
                <h3 className="font-editorial text-xl text-obsidian">{faq.q}</h3>
                <p className="text-mist text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* 8. FINAL CTA BAND WITH SIGNATURE 3D OBJECT */}
      <section className="py-24 bg-obsidian text-paper relative overflow-hidden border-t border-champagne/30">
        <div className="container-site relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Initiate Engagement
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-paper">
              Ready to Upgrade Your Network, Power, or IT?
            </h2>
            <p className="text-mist text-base max-w-xl">
              Consult with our technical engineers for broadband site surveys, solar energy assessments, or enterprise IT security procurement.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="btn btn-champagne">
                Get a Free Consultation →
              </Link>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <EnergyCoreWrapper size={240} />
          </div>
        </div>
      </section>
    </div>
  );
}
