"use client";

import { motion } from "framer-motion";

export default function SolarMatrix2D() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl bg-grid-navy/80 border border-marigold-gold/30 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
      {/* Radiant Solar Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,163,61,0.2),transparent_70%)]" />

      {/* Photovoltaic Grid Array */}
      <div className="grid grid-cols-4 gap-3 h-full items-center">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative h-24 rounded-2xl bg-white/5 border border-marigold-gold/20 p-3 overflow-hidden flex flex-col justify-between group-hover:border-marigold-gold/50 transition-colors"
          >
            {/* Silicon Cell Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1 opacity-20">
              <div className="border-r border-b border-marigold-gold" />
              <div className="border-b border-marigold-gold" />
              <div className="border-r border-marigold-gold" />
              <div className="" />
            </div>

            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-[9px] text-marigold-gold">TILE 0{i + 1}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-marigold-gold animate-ping" />
            </div>

            <div className="z-10">
              <span className="font-display font-bold text-paper text-sm">
                {(24.5 + (i % 3) * 1.2).toFixed(1)} kW
              </span>
              <div className="w-full h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-marigold-gold to-signal-teal"
                  initial={{ width: "0%" }}
                  animate={{ width: `${60 + (i % 5) * 8}%` }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Radiant Beam */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-grid-navy/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-marigold-gold animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-paper">
            2D Photovoltaic Energy Matrix
          </span>
        </div>
        <span className="font-mono text-[10px] text-signal-teal border border-signal-teal/40 px-2 py-0.5 rounded-full">
          100+ MW Capacity
        </span>
      </div>
    </div>
  );
}
