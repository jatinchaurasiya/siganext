import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnergyCoreWrapper from "@/components/EnergyCoreWrapper";
import ConfirmTag from "@/components/ConfirmTag";

export const metadata: Metadata = {
  title: "Data Center & Managed Hosting | Siganext Networks",
  description:
    "Future colocation, cloud infrastructure, NOC monitoring, disaster recovery, and managed hosting solutions authorized under company Memorandum of Association.",
};

const BULLETS = [
  "Carrier-neutral server rack colocation & dedicated cage allocation (Planned Infrastructure)",
  "Hybrid cloud infrastructure, Network Operations Center (NOC) monitoring & managed connectivity",
  "Disaster recovery (DR), automated off-site backups & high-availability enterprise hosting",
];

const CROSS_LINKS = [
  { label: "Internet & Networking", href: "/services/internet-networking" },
  { label: "Solar & Green Energy", href: "/services/solar-green-energy" },
  { label: "IT, Software & Security", href: "/services/it-software-security" },
];

export default function DataCenterHostingPage() {
  return (
    <div className="bg-bone text-obsidian min-h-screen">
      {/* HERO */}
      <section data-section-index="1" className="relative py-28 bg-obsidian text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/datacenter_hero.png"
            alt="Data center server aisle"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/50 to-obsidian" />
        </div>

        <div className="container-site relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Data Center & Managed Hosting
            </span>
            <ConfirmTag label="Operational Readiness Pending Confirmation" variant="badge" />
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-paper max-w-4xl leading-[1.15]">
            Infrastructure that stays up when it matters.
          </h1>
          <p className="text-mist text-lg max-w-2xl leading-relaxed">
            Authorized under company Memorandum of Association (MOA) for colocation, cloud infrastructure, NOC monitoring, and disaster recovery hosting.
          </p>
        </div>
      </section>

      {/* SERVICE BULLETS */}
      <section data-section-index="2" className="py-24 bg-bone">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
                Planned Portfolio
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-obsidian">
                Hosting & Colocation Framework
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-champagne/10 border border-dashed border-champagne/40 space-y-2">
              <ConfirmTag label="Facility Readiness & Tier Certification Pending Launch" variant="badge" />
              <p className="text-xs text-obsidian leading-relaxed">
                Notice: Data Center and Managed Hosting services are authorized under Siganext&apos;s legal MOA objects. Operational facility readiness and commercial commissioning dates are pending final executive confirmation.
              </p>
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
              <Link href="/contact?service=data-center-hosting" className="btn btn-champagne">
                Talk to Our Infrastructure Team →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 rounded-3xl bg-obsidian text-paper border border-champagne/30 text-center space-y-6 w-full max-w-md">
              <EnergyCoreWrapper size={180} className="mx-auto" />
              <div className="space-y-2">
                <h3 className="font-editorial text-2xl text-paper">Carrier Neutrality</h3>
                <p className="text-mist text-xs leading-relaxed">
                  Interconnected with multiple optical fiber backbones for enterprise redundancy.
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
