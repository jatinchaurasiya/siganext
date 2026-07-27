"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "@/components/MagneticButton";

gsap.registerPlugin(useGSAP);

type Props = {
  eyebrow: string;
  headlineWords: ReactNode[];
  subhead: ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export default function HeroEntrance({
  eyebrow,
  headlineWords,
  subhead,
  primaryCta,
  secondaryCta,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: -12, duration: 0.5 })
        .from(".hero-word", { opacity: 0, y: 30, duration: 0.7, stagger: 0.1 }, "-=0.3")
        .from(".hero-subhead", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(".hero-cta-group", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3");
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {/* Microscopic Pill Eyebrow Badge */}
      <div className="hero-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-signal-teal/15 text-signal-teal border border-signal-teal/30 mb-6 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-signal-teal animate-pulse" />
        {eyebrow}
      </div>

      <h1 className="font-display font-bold text-paper leading-[1.02] tracking-[-0.03em] text-[clamp(2.5rem,7.5vw,5rem)]">
        {headlineWords.map((w, i) => (
          <span key={i} className="hero-word inline-block mr-[0.25em]">
            {w}
          </span>
        ))}
      </h1>

      <p className="hero-subhead mt-7 max-w-[54ch] text-slate-300 text-[1.125rem] leading-relaxed font-sans">
        {subhead}
      </p>

      <div className="hero-cta-group mt-10 flex flex-wrap items-center gap-4">
        <MagneticButton href={primaryCta.href} className="btn btn-primary group shadow-2xl hover:shadow-signal-teal/40 px-7 py-3.5 rounded-full text-xs">
          <span>{primaryCta.label}</span>
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
            ↗
          </span>
        </MagneticButton>
        <MagneticButton href={secondaryCta.href} className="btn btn-ghost border border-white/20 px-6 py-3.5 rounded-full text-xs hover:border-signal-teal/50 hover:bg-white/5">
          {secondaryCta.label}
        </MagneticButton>
      </div>
    </div>
  );
}
