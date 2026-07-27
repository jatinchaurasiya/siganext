import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ConfirmTag from "@/components/ConfirmTag";
import EnergyCoreWrapper from "@/components/EnergyCoreWrapper";

export const metadata: Metadata = {
  title: "About Siganext Networks & Green Energy Solutions",
  description:
    "Learn about Siganext Networks and Green Energy Solutions Private Limited — a Nashik-based provider of broadband, rooftop solar, and enterprise IT & security across Maharashtra & Goa.",
};

// COMPLIANCE GUARDRAIL: Leadership section gated pending founder confirmation
const SHOW_LEADERSHIP = false;

const DIRECTORS_PENDING = [
  { name: "Director Name 1", role: "Co-Founder & Managing Director" },
  { name: "Director Name 2", role: "Director — Technical Infrastructure" },
];

export default function AboutPage() {
  return (
    <div className="bg-bone text-obsidian min-h-screen">
      {/* HERO SECTION */}
      <section data-section-index="1" className="relative py-28 bg-obsidian text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage_hero_solar.png"
            alt="Siganext Nashik corporate office exterior"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
        </div>

        <div className="container-site relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne/10 border border-champagne/30 text-champagne font-mono text-xs uppercase tracking-[0.08em]">
            Incorporated Corporate Entity
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-paper max-w-4xl leading-[1.15]">
            Sustainable power, reliable connectivity, and smart technology — from one Nashik-based team.
          </h1>

          <p className="text-mist text-lg max-w-3xl leading-relaxed font-body">
            Siganext Networks and Green Energy Solutions Private Limited brings three essential services under one roof: internet and network infrastructure, solar and green energy systems, and IT, software and security solutions. Instead of coordinating separate vendors for your broadband, your rooftop solar, and your office IT, Siganext designs, supplies, installs and maintains all three — for homes, businesses, and government projects across Maharashtra and Goa.
          </p>
        </div>
      </section>

      {/* 2X2 CHECKLIST SECTION */}
      <section data-section-index="2" className="py-24 bg-bone">
        <div className="container-site space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Operational Standards
            </span>
            <h2 className="font-editorial text-4xl text-obsidian">
              Built on Institutional Competence
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-obsidian/10 luxury-card space-y-3">
              <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/40 flex items-center justify-center text-champagne font-mono font-bold text-sm">
                ✓
              </div>
              <h3 className="font-editorial text-2xl text-obsidian">Certified Engineers</h3>
              <p className="text-mist text-sm leading-relaxed">
                Qualified technical personnel supervising broadband fiber splicing, high-voltage PV array wiring, and enterprise network firewall configuration.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-obsidian/10 luxury-card space-y-3">
              <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/40 flex items-center justify-center text-champagne font-mono font-bold text-sm">
                ✓
              </div>
              <h3 className="font-editorial text-2xl text-obsidian">Govt Tender Ready</h3>
              <p className="text-mist text-sm leading-relaxed">
                Incorporated legal entity under the Companies Act, 2013, compliant with government and municipal infrastructure procurement frameworks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-obsidian/10 luxury-card space-y-3">
              <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/40 flex items-center justify-center text-champagne font-mono font-bold text-sm">
                ✓
              </div>
              <h3 className="font-editorial text-2xl text-obsidian">End-to-End AMC</h3>
              <p className="text-mist text-sm leading-relaxed">
                Single point of contact for ongoing preventative maintenance, SLA support, fiber link repairs, solar cleaning & inverter upkeep, and CCTV servicing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-obsidian/10 luxury-card space-y-3">
              <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/40 flex items-center justify-center text-champagne font-mono font-bold text-sm">
                ✓
              </div>
              <h3 className="font-editorial text-2xl text-obsidian">Local Presence</h3>
              <p className="text-mist text-sm leading-relaxed">
                Headquartered in Nashik with on-ground field service teams deployed across Mumbai, Thane, Pune, Nagpur, Chhatrapati Sambhajinagar, and Goa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION — HONEST [CONFIRM] PLACEHOLDER */}
      <section data-section-index="3" className="py-20 bg-obsidian text-paper border-t border-champagne/20">
        <div className="container-site grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Corporate Direction
            </span>
            <h2 className="font-editorial text-3xl text-paper">Mission & Vision</h2>
            <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-champagne/40 space-y-3">
              <ConfirmTag label="Mission & Vision Statement Pending Founder Input" variant="badge" />
              <p className="text-mist text-sm leading-relaxed">
                Official corporate mission, vision, and core principles are currently being finalized by executive directors prior to public deployment.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <EnergyCoreWrapper size={200} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION — GATED BEHIND BOOLEAN CONSTANT */}
      <section data-section-index="4" className="py-24 bg-bone">
        <div className="container-site space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Executive Leadership
            </span>
            <h2 className="font-editorial text-4xl text-obsidian">Company Directors</h2>
          </div>

          {SHOW_LEADERSHIP ? (
            <div className="grid md:grid-cols-2 gap-8">
              {DIRECTORS_PENDING.map((dir, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-obsidian/10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-obsidian/10 border border-champagne/30" />
                  <h3 className="font-editorial text-2xl text-obsidian">{dir.name}</h3>
                  <p className="text-xs text-mist font-mono uppercase tracking-[0.08em]">{dir.role}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-dashed border-champagne/50 space-y-4">
              <div className="flex items-center gap-3">
                <ConfirmTag label="Director Bios & Photos Pending Confirmation" variant="badge" />
              </div>
              <p className="text-mist text-sm leading-relaxed max-w-xl">
                Leadership profiles and executive bios will be rendered here upon final founder review and submission of official photographs.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-obsidian text-paper border-t border-champagne/30">
        <div className="container-site text-center max-w-2xl space-y-6">
          <h2 className="font-editorial text-4xl text-paper">Discuss Your Infrastructure Requirement</h2>
          <p className="text-mist text-sm">
            Contact our Nashik technical team for integrated fiber, solar EPC, or office IT quotes.
          </p>
          <div>
            <Link href="/contact" className="btn btn-champagne">
              Contact Infrastructure Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
