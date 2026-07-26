"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * HeroEntrance — orchestrates the staged entrance of the hero foreground
 * content (eyebrow → headline words → subhead → buttons). Total run ~1.2s,
 * no bounce. Frozen to static end-state under prefers-reduced-motion.
 */

import MagneticButton from "@/components/MagneticButton";

type Props = {
  eyebrow: string;
  headlineWords: ReactNode[];
  subhead: ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

export default function HeroEntrance({
  eyebrow,
  headlineWords,
  subhead,
  primaryCta,
  secondaryCta,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div>
        <p className="font-mono uppercase text-xs tracking-widest text-signal-teal mb-5 md:mb-7 max-w-[44ch]">
          {eyebrow}
        </p>
        <h1 className="font-display font-semibold text-paper leading-[1.02] tracking-[-0.025em] text-[clamp(2.25rem,7vw,4.75rem)]">
          {headlineWords.map((w, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              {w}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-[52ch] text-paper/80 text-[1.0625rem] leading-relaxed">
          {subhead}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <MagneticButton href={primaryCta.href} className="btn btn-primary shadow-xl">
            {primaryCta.label}
          </MagneticButton>
          <MagneticButton href={secondaryCta.href} className="btn btn-ghost border border-paper/20">
            {secondaryCta.label}
          </MagneticButton>
        </div>
      </div>
    );
  }

  const eyebrowV: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
  };
  const wordV: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  const subV: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE, delay: 0.05 },
    },
  };
  const btnV: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE, delay: 0.1 },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible">
      <motion.p
        variants={eyebrowV}
        className="font-mono uppercase text-xs tracking-widest text-signal-teal mb-5 md:mb-7 max-w-[44ch]"
      >
        {eyebrow}
      </motion.p>

      <h1 className="font-display font-semibold text-paper leading-[1.02] tracking-[-0.025em] text-[clamp(2.25rem,7vw,4.75rem)]">
        {headlineWords.map((w, i) => (
          <motion.span
            key={i}
            variants={wordV}
            transition={{ delay: 0.18 + i * 0.12 }}
            className="inline-block mr-[0.25em]"
          >
            {w}
          </motion.span>
        ))}
      </h1>

      <motion.p
        variants={subV}
        transition={{ delay: 0.18 + headlineWords.length * 0.12 + 0.05 }}
        className="mt-7 max-w-[52ch] text-paper/80 text-[1.0625rem] leading-relaxed"
      >
        {subhead}
      </motion.p>

      <motion.div
        variants={btnV}
        transition={{ delay: 0.18 + headlineWords.length * 0.12 + 0.2 }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <MagneticButton href={primaryCta.href} className="btn btn-primary shadow-xl hover:shadow-signal-teal/30">
          {primaryCta.label}
        </MagneticButton>
        <MagneticButton href={secondaryCta.href} className="btn btn-ghost border border-paper/20">
          {secondaryCta.label}
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
}
