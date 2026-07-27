import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnergyCoreWrapper from "@/components/EnergyCoreWrapper";

export const metadata: Metadata = {
  title: "Solar & Green Energy EPC | Siganext Networks",
  description:
    "Commercial, industrial, residential & government rooftop solar power EPC — on-grid, off-grid & hybrid solar PV designs, electrical installation & AMC across Maharashtra & Goa.",
};

const BULLETS = [
  "Custom on-grid, off-grid & hybrid solar PV system engineering & turn-key installation",
  "Rooftop & ground-mounted solar solutions for residential, commercial, industrial & government facilities",
  "Comprehensive Annual Maintenance Contracts (AMC) for solar assets, panel washing & inverter servicing",
  "Complete electrical wiring, transformer integration & net-metering approval documentation support",
];

const EXPLAINER_MODULE = [
  {
    type: "On-Grid Systems",
    subtitle: "Net-Metering Connection",
    desc: "Synchronizes directly with the state electricity grid. Export excess power back to MSEDCL for billing credits while lowering daytime energy expenses.",
  },
  {
    type: "Off-Grid Systems",
    subtitle: "Battery Storage Backup",
    desc: "Independent power generation with lithium/lead-acid energy storage for remote locations or facilities requiring uninterrupted zero-grid operation.",
  },
  {
    type: "Hybrid Systems",
    subtitle: "Grid + Battery Resilience",
    desc: "Combines grid export benefits with emergency battery backup for 24/7 power security during peak outages.",
  },
];

const CROSS_LINKS = [
  { label: "Internet & Networking", href: "/services/internet-networking" },
  { label: "IT, Software & Security", href: "/services/it-software-security" },
  { label: "Data Center & Hosting", href: "/services/data-center-hosting" },
];

export default function SolarGreenEnergyPage() {
  return (
    <div className="bg-bone text-obsidian min-h-screen">
      {/* HERO */}
      <section data-section-index="1" className="relative py-28 bg-obsidian text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage_hero_solar.png"
            alt="Rooftop solar PV installation"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/50 to-obsidian" />
        </div>

        <div className="container-site relative z-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
            Renewable Solar Energy EPC
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-paper max-w-4xl leading-[1.15]">
            Solar power, sized for how you actually use energy.
          </h1>
          <p className="text-mist text-lg max-w-2xl leading-relaxed">
            Turn-key rooftop solar power engineering, high-efficiency PV panel mounting, electrical net-metering, and long-term asset maintenance.
          </p>
        </div>
      </section>

      {/* SERVICE BULLETS */}
      <section data-section-index="2" className="py-24 bg-bone">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
                Solar Capabilities
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-obsidian">
                End-to-End Solar Power EPC Services
              </h2>
            </div>

            <ul className="space-y-4">
              {BULLETS.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-obsidian/10 luxury-card">
                  <span className="w-6 h-6 rounded-full bg-champagne/15 text-champagne flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-obsidian font-medium leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link href="/contact?service=solar-green-energy" className="btn btn-champagne">
                Get a Free Solar Site Assessment →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 rounded-3xl bg-obsidian text-paper border border-champagne/30 text-center space-y-6 w-full max-w-md">
              <EnergyCoreWrapper size={180} className="mx-auto" />
              <div className="space-y-2">
                <h3 className="font-editorial text-2xl text-paper">Solar Asset AMC</h3>
                <p className="text-mist text-xs leading-relaxed">
                  Scheduled panel cleaning, inverter diagnostics, and electrical health checkups for peak kWh yield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-CARD EXPLAINER MODULE: ON-GRID / OFF-GRID / HYBRID */}
      <section data-section-index="3" className="py-24 bg-obsidian text-paper border-t border-champagne/20">
        <div className="container-site space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              System Architecture
            </span>
            <h2 className="font-editorial text-4xl text-paper">Solar Configuration Options</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {EXPLAINER_MODULE.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 luxury-card space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
                  Option 0{idx + 1}
                </span>
                <h3 className="font-editorial text-2xl text-paper">{item.type}</h3>
                <p className="font-mono text-xs text-mist uppercase tracking-[0.08em]">{item.subtitle}</p>
                <p className="text-mist text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINK ROW */}
      <section data-section-index="4" className="py-16 bg-obsidian text-paper border-t border-white/10">
        <div className="container-site space-y-8">
          <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-champagne">
            Explore Other Verticals
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CROSS_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-champagne text-paper hover:text-champagne transition-all flex items-center justify-between group"
              >
                <span className="font-editorial text-xl">{link.label}</span>
                <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
