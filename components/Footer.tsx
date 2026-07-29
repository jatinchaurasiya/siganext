"use client";

import Link from "next/link";
import ConfirmTag from "./ConfirmTag";

const LEGAL_NAME = "Siganext Networks and Green Energy Solutions Private Limited";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Government & Enterprise", href: "/government-enterprise" },
  { label: "Contact Us", href: "/contact" },
];

const VERTICALS = [
  { label: "Internet & Networking", href: "/services/internet-networking" },
  { label: "Solar & Green Energy", href: "/services/solar-green-energy" },
  { label: "IT, Software & Security", href: "/services/it-software-security" },
  { label: "Data Center & Hosting", href: "/services/data-center-hosting" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-paper border-t border-champagne/20">
      <div className="container-site py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 — Corporate info */}
        <div className="space-y-4">
          <Link href="/" className="font-display font-extrabold text-2xl tracking-[-0.02em] inline-flex items-center gap-1.5">
            SIGANEXT
            <span className="w-2 h-2 rounded-full bg-champagne" />
          </Link>

          <p className="text-sm text-mist leading-relaxed">{LEGAL_NAME}</p>

          <div className="pt-2 space-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-mist">
            <p className="flex items-center gap-2">
              <span>CIN:</span>
              <ConfirmTag label="U43212MR2026PTC473563" variant="inline" />
            </p>
            <p className="flex items-center gap-2">
              <span>Registered Office:</span>
              <ConfirmTag label="2nd Floor, Above HDFC Bank, Rutica Heights, Peth Road, Panchavati, Nashik 422003" variant="inline" />
            </p>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h3 className="font-mono uppercase text-[11px] tracking-[0.08em] text-champagne mb-4 font-semibold">
            Company
          </h3>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-paper/80 hover:text-champagne transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Verticals */}
        <div>
          <h3 className="font-mono uppercase text-[11px] tracking-[0.08em] text-champagne mb-4 font-semibold">
            Verticals
          </h3>
          <ul className="space-y-2.5">
            {VERTICALS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-paper/80 hover:text-champagne transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact & WhatsApp */}
        <div>
          <h3 className="font-mono uppercase text-[11px] tracking-[0.08em] text-champagne mb-4 font-semibold">
            Direct Connect
          </h3>
          <div className="space-y-3">
            <a
              href="https://wa.me/917770009790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-champagne/10 border border-champagne/30 text-champagne font-mono text-xs uppercase tracking-[0.08em] hover:bg-champagne/20 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
              </svg>
              WhatsApp Click-To-Chat
            </a>

            <div className="pt-2">
              <ConfirmTag label="HQ Phone Number" variant="badge" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center">
        <div className="container-site">
          <p className="font-mono uppercase text-[10px] tracking-[0.08em] text-mist">
            © {year} {LEGAL_NAME}. All rights reserved. Nashik · Maharashtra · Goa.
          </p>
        </div>
      </div>
    </footer>
  );
}
