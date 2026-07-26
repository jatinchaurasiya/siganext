import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumb?: Crumb;
  traceColor?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  traceColor = "#2FB8C6",
}: Props) {
  return (
    <section className="relative bg-grid-navy text-paper overflow-hidden">
      {/* subtle radial glows carrying the brand convergence */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 70% at 22% 30%, rgba(47,184,198,0.18), transparent 60%), radial-gradient(50% 60% at 80% 70%, rgba(232,163,61,0.16), transparent 65%)",
        }}
      />
      {/* faint grid lines — the "circuit board" under everything */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,247,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        {crumb && (
          <nav
            className="font-mono uppercase text-[11px] tracking-[0.08em] text-paper/55 mb-6 flex items-center gap-2"
            aria-label="breadcrumb"
          >
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-paper/80 transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            <span className="text-paper/30">/</span>
          </nav>
        )}

        <p className="font-mono uppercase text-[11px] tracking-[0.08em] text-signal-teal mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display font-semibold text-paper leading-[1.04] tracking-[-0.02em] text-[clamp(2.25rem,5.5vw,4rem)] max-w-[16ch]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-[58ch] text-paper/80 text-[1.0625rem] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* bottom hairline trace */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${traceColor}, transparent)`,
          opacity: 0.5,
        }}
      />
    </section>
  );
}
