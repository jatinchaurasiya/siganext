import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ConfirmTag from "@/components/ConfirmTag";
import EnergyCoreWrapper from "@/components/EnergyCoreWrapper";

export const metadata: Metadata = {
  title: "Government & Enterprise Tenders | Siganext Networks",
  description:
    "Single, compliant corporate vendor for public sector, government & enterprise tenders across broadband network infrastructure, solar energy EPC, and IT software supply.",
};

const COMPLIANCE_ITEMS = [
  {
    title: "Companies Act Registration",
    desc: "Incorporated entity under the Companies Act, 2013, legally qualified to participate in state & central government tender portals.",
  },
  {
    title: "Triple-Vertical Bidding",
    desc: "Bid on unified turnkey RFPs combining fiber optics, rooftop solar PV, and CCTV/IT infrastructure under one corporate vendor.",
  },
  {
    title: "Public Sector AMC",
    desc: "Structured Annual Maintenance Contracts with service level agreements (SLAs) tailored to government administrative facilities.",
  },
];

export default function GovernmentEnterprisePage() {
  return (
    <div className="bg-bone text-obsidian min-h-screen">
      {/* HERO */}
      <section data-section-index="1" className="relative py-28 bg-obsidian text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/govt_enterprise_hero.png"
            alt="Modern administrative corporate building"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
        </div>

        <div className="container-site relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne/10 border border-champagne/30 text-champagne font-mono text-xs uppercase tracking-[0.08em]">
            Public Sector & Corporate Procurement
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-paper max-w-4xl leading-[1.15]">
            A single, compliant vendor for connectivity, power and technology.
          </h1>

          <p className="text-mist text-lg max-w-3xl leading-relaxed">
            Siganext is registered under the Companies Act, 2013, positioned to bid on corporate, government and public-sector tenders across network infrastructure, solar energy and IT supply.
          </p>

          <div>
            <Link href="/contact?service=government-enterprise" className="btn btn-champagne">
              Contact for Tender Inquiries →
            </Link>
          </div>
        </div>
      </section>

      {/* FORMAL LETTERHEAD COMPLIANCE STRIP */}
      <section data-section-index="2" className="py-12 bg-white border-y border-obsidian/10">
        <div className="container-site font-mono text-xs uppercase tracking-[0.08em] space-y-3">
          <div className="text-champagne font-semibold flex items-center gap-2">
            <span>OFFICIAL CORPORATE IDENTIFICATION & COMPLIANCE DETAIL</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-bone border border-obsidian/10">
            <div>
              <span className="text-mist block text-[10px]">Legal Name:</span>
              <span className="font-semibold text-obsidian">
                Siganext Networks and Green Energy Solutions Private Limited
              </span>
            </div>
            <div>
              <span className="text-mist block text-[10px]">Corporate Identification Number:</span>
              <ConfirmTag label="CIN Pending" variant="badge" />
            </div>
            <div>
              <span className="text-mist block text-[10px]">Registered Office Address:</span>
              <ConfirmTag label="Registered Office Address Pending" variant="badge" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & TENDER CAPABILITIES */}
      <section data-section-index="3" className="py-24 bg-bone">
        <div className="container-site space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Institutional Qualification
            </span>
            <h2 className="font-editorial text-4xl text-obsidian">
              Government & Enterprise Procurement Framework
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COMPLIANCE_ITEMS.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-obsidian/10 luxury-card space-y-4">
                <div className="w-8 h-8 rounded-full bg-champagne/10 text-champagne flex items-center justify-center font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial text-2xl text-obsidian">{item.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD MODULE & SIGNATURE 3D OBJECT */}
      <section data-section-index="4" className="py-24 bg-obsidian text-paper border-t border-champagne/30">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-champagne font-semibold">
              Procurement Documentation
            </span>
            <h2 className="font-editorial text-4xl text-paper">Download Company Profile</h2>
            <p className="text-mist text-base leading-relaxed max-w-xl">
              Access official corporate overview, MOA objects, technical certifications, and tender qualification dossier.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-champagne/30 space-y-4 max-w-md luxury-card">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-editorial text-xl text-paper">Siganext Company Profile PDF</h4>
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-mist">
                    PDF Document · Corporate Overview
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne font-mono text-xs">
                  PDF
                </div>
              </div>

              {/* TODO: Replace placeholder link with real company-profile.pdf before final launch */}
              <a
                href="/company-profile.pdf"
                download
                className="btn btn-champagne w-full justify-center text-center"
              >
                Download Profile Dossier ↓
              </a>

              <ConfirmTag label="Official PDF File Pending Upload" variant="badge" />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <EnergyCoreWrapper size={240} />
          </div>
        </div>
      </section>
    </div>
  );
}
