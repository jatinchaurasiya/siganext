"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const LEGAL_NAME =
  "Siganext Networks and Green Energy Solutions Private Limited";
const CIN = "[CONFIRM CIN]";
const OFFICE = "Maharashtra, India";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/internet-networking" },
  { label: "About", href: "/about" },
  { label: "Government & Enterprise", href: "/government-enterprise" },
  { label: "Contact", href: "/contact" },
];

const VERTICALS = [
  { label: "Internet & Networking", href: "/services/internet-networking" },
  { label: "Solar & Green Energy", href: "/services/solar-green-energy" },
  { label: "IT, Software & Security", href: "/services/it-software-security" },
  { label: "Data Center & Hosting", href: "/services/data-center-hosting" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.131zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.197-.296.297-.495.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const traceRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !traceRef.current) return;

    const svg = traceRef.current;
    const dot = svg.querySelector<SVGCircleElement>("#footer-pulse");
    if (!dot) return;

    let raf = 0;
    let progress = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      // full sweep ~ 6s, paused gap handled by modulo
      progress = (progress + dt / 6000) % 1;
      const x = 8 + progress * (svg.clientWidth - 16);
      dot.setAttribute("cx", x.toFixed(2));
      // fade near ends to give a gentle breath
      const edge = Math.min(progress, 1 - progress) * 2;
      const op = Math.min(1, edge * 1.4);
      dot.setAttribute("opacity", op.toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <footer className="bg-grid-navy text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-14 grid gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 — legal */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <BrandLogo height={36} />
          </div>
          <p className="text-sm text-paper/75 leading-relaxed">{LEGAL_NAME}</p>
          <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-paper/60 mt-3">
            CIN: {CIN}
          </p>
          <p className="text-sm text-paper/75 mt-2">Registered office: {OFFICE}</p>
        </div>

        {/* Col 2 — quick links */}
        <div>
          <h3 className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
            Quick links
          </h3>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-paper/80 hover:text-paper transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — verticals */}
        <div>
          <h3 className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
            Verticals
          </h3>
          <ul className="space-y-2.5">
            {VERTICALS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-paper/80 hover:text-paper transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — social + whatsapp */}
        <div>
          <h3 className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
            Connect
          </h3>
          <ul className="space-y-2.5">
            {SOCIAL.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-paper/80 hover:text-paper transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/910000000000"
                className="inline-flex items-center gap-2 text-sm text-paper/80 hover:text-marigold-gold transition-colors"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar + animated trace */}
      <div className="border-t border-paper/10">
        <svg
          ref={traceRef}
          className="w-full h-px block"
          preserveAspectRatio="none"
          viewBox="0 0 100 1"
          aria-hidden="true"
          style={{ overflow: "visible" }}
        >
          <line
            x1="0.5"
            y1="0.5"
            x2="99.5"
            y2="0.5"
            stroke="var(--signal-teal)"
            strokeWidth="0.6"
            strokeOpacity="0.25"
          />
          <circle
            id="footer-pulse"
            cx="8"
            cy="0.5"
            r="2"
            fill="var(--signal-teal)"
            opacity="0.85"
          />
        </svg>
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-5">
          <p className="font-mono uppercase text-[10px] tracking-[0.08em] text-paper/55 text-center">
            © {year} {LEGAL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
