"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: "div" | "section" | "li" | "span" | "ul";
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  as = "div",
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    visible: reduce
      ? {}
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 0.61, 0.36, 1],
            delay,
          },
        },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </MotionTag>
  );
}
