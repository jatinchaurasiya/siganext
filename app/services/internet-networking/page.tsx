import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnergyCoreWrapper from "@/components/EnergyCoreWrapper";

export const metadata: Metadata = {
  title: "Internet & Networking Services | Siganext Networks",
  description:
    "Carrier-grade fiber optic broadband, dedicated leased lines, structured cabling, satellite dish wiring, and telecom infrastructure across Maharashtra & Goa.",
};

const BULLETS = [
  "Residential & enterprise high-speed broadband, Wi-Fi solutions & dedicated leased lines",
  "Structured cabling, fibre-optic network design & satellite dish antenna installation",
  "Cable TV wiring & multi-dwelling unit (MDU) connectivity distribution",
  "Enterprise data communication & secure multi-location network architecture",
  "Wired & wireless telecom infrastructure supply, installation & maintenance",
];

const CROSS_LINKS = [
  { label: "Solar & Green Energy", href: "/services/solar-green-energy" },
  { label: "IT, Software & Security", href: "/services/it-software-security" },
  { label: "Data Center & Hosting", href: "/services/data-center-hosting" },
];

export default function InternetNetworkingPage() {
  return (
    <div className="bg-bone text-obsidian min-h-screen">
      {/* HERO */}
      <section data-section-index="1" className="relative py-28 bg-obsidian text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/internet_hero.png"
            alt="Optical fiber network infrastructure NOC room"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/50 to-obsidian" />
        </div>

        <div className="container-site relative z-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
            ISP & Fiber Infrastructure
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-paper max-w-4xl leading-[1.15]">
            Internet & Networking, built for uptime.
          </h1>
          <p className="text-mist text-lg max-w-2xl leading-relaxed">
            High-speed optical fiber connectivity, low-latency leased lines, and robust telecom infrastructure engineered for homes, enterprise offices, and industrial complexes.
          </p>
        </div>
      </section>

      {/* SERVICE BULLETS */}
      <section data-section-index="2" className="py-24 bg-bone">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
                Network Deliverables
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-obsidian">
                End-to-End Telecom & Connectivity Capabilities
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
              <Link href="/contact?service=internet-networking" className="btn btn-champagne">
                Check Availability in Your Area →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 rounded-3xl bg-obsidian text-paper border border-champagne/30 text-center space-y-6 w-full max-w-md">
              <EnergyCoreWrapper size={180} className="mx-auto" />
              <div className="space-y-2">
                <h3 className="font-editorial text-2xl text-paper">Leased Line SLA</h3>
                <p className="text-mist text-xs leading-relaxed">
                  Dedicated symmetric bandwidth with proactive fiber monitoring for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINK ROW */}
      <section data-section-index="3" className="py-16 bg-obsidian text-paper border-t border-champagne/20">
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
