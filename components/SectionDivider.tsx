"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  color?: string;
  className?: string;
};

export default function SectionDivider({
  color = "#2FB8C6",
  className = "",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const nodeRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const line = lineRef.current;
    const node = nodeRef.current;
    const wrap = wrapRef.current;

    if (!line || !node || !wrap) return;

    if (reduce) {
      // static end-state: full line + node at the far right
      gsap.set(line, { strokeDashoffset: 0 });
      gsap.set(node, { attr: { cx: 1840 }, opacity: 1 });
      return;
    }

    const len = line.getTotalLength();
    // set line as dashed-then-hidden for the draw-in
    gsap.set(line, {
      strokeDasharray: len,
      strokeDashoffset: len,
    });
    gsap.set(node, { attr: { cx: 60 }, opacity: 0 });

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(line, {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: "power2.out",
        })
          .to(
            node,
            { opacity: 1, duration: 0.25, ease: "power1.out" },
            "<0.05"
          )
          .to(
            node,
            {
              attr: { cx: 1840 },
              duration: 1.1,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(node, { opacity: 0, duration: 0.3, ease: "power1.in" });
      },
    });

    return () => {
      st.kill();
    };
  }, [color]);

  return (
    <div
      ref={wrapRef}
      className={`w-full ${className}`}
      aria-hidden="true"
      style={{ height: "48px" }}
    >
      <svg
        className="w-full h-full block"
        viewBox="0 0 1920 48"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          ref={lineRef}
          d="M0,24 C480,8 960,40 1920,24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle
          ref={nodeRef}
          cx="60"
          cy="24"
          r="4"
          fill={color}
          opacity="0"
        />
      </svg>
    </div>
  );
}
