"use client";

import { motion } from "framer-motion";

type Props = {
  color?: "teal" | "gold" | string;
};

export default function NetworkTraceLine({ color = "teal" }: Props) {
  const hex =
    color === "gold"
      ? "#E8A33D"
      : color === "teal"
      ? "#2FB8C6"
      : color;

  const bgTrack = color === "gold" ? "bg-marigold-gold/20" : "bg-signal-teal/20";

  return (
    <div
      aria-hidden
      className={`absolute bottom-0 inset-x-0 h-[2px] z-10 overflow-hidden ${bgTrack}`}
    >
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="h-full w-1/3"
        style={{
          background: `linear-gradient(90deg, transparent, ${hex}, transparent)`,
          boxShadow: `0 0 12px ${hex}, 0 0 24px ${hex}`,
        }}
      />
    </div>
  );
}

