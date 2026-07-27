"use client";

import { motion } from "framer-motion";

export default function SecurityGrid2D() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl bg-grid-navy/80 border border-sahyadri-green/40 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
      {/* Background Matrix Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,110,74,0.25),transparent_70%)]" />

      <svg className="w-full h-full" viewBox="0 0 500 400" fill="none">
        {/* Concentric Shield Rings */}
        <motion.circle
          cx="250"
          cy="200"
          r="140"
          stroke="#1F6E4A"
          strokeWidth="2"
          strokeDasharray="12 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 200px" }}
        />
        <motion.circle
          cx="250"
          cy="200"
          r="95"
          stroke="#2FB8C6"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 200px" }}
        />

        {/* Central Holographic Defense Emblem */}
        <path
          d="M250 110 L310 140 V220 C310 260 250 290 250 290 C250 290 190 260 190 220 V140 L250 110 Z"
          fill="rgba(31, 110, 74, 0.2)"
          stroke="#1F6E4A"
          strokeWidth="3"
        />
        <path
          d="M250 130 L290 152 V210 C290 240 250 265 250 265 C250 265 210 240 210 210 V152 L250 130 Z"
          fill="rgba(47, 184, 198, 0.15)"
          stroke="#2FB8C6"
          strokeWidth="1.5"
        />

        {/* Scanning Laser Beam */}
        <motion.line
          x1="120"
          y1="200"
          x2="380"
          y2="200"
          stroke="#2FB8C6"
          strokeWidth="2"
          initial={{ y: 120 }}
          animate={{ y: [120, 280, 120] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Status Nodes */}
        <circle cx="250" cy="200" r="8" fill="#2FB8C6" />
        <circle cx="250" cy="200" r="3" fill="#F5F7FA" />
      </svg>

      {/* Top HUD Card */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between bg-grid-navy/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sahyadri-green animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-paper">
            2D Holographic Cyber Defense Grid
          </span>
        </div>
        <span className="font-mono text-[10px] text-signal-teal border border-signal-teal/40 px-2 py-0.5 rounded-full">
          Encrypted AES-256
        </span>
      </div>
    </div>
  );
}
