"use client";

import { motion } from "framer-motion";

export default function NetworkTopology2D() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl bg-grid-navy/80 border border-signal-teal/30 p-6 shadow-2xl backdrop-blur-xl overflow-hidden group">
      {/* Background vector mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,184,198,0.15),transparent_70%)]" />

      <svg className="w-full h-full" viewBox="0 0 500 400" fill="none">
        {/* Outer Ring */}
        <circle cx="250" cy="200" r="160" stroke="rgba(47,184,198,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="250" cy="200" r="100" stroke="rgba(232,163,61,0.25)" strokeWidth="1.5" />

        {/* Central Router Hub */}
        <motion.circle
          cx="250"
          cy="200"
          r="16"
          fill="#2FB8C6"
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="250" cy="200" r="6" fill="#F5F7FA" />

        {/* Satellite Node Links */}
        {[
          { x: 140, y: 120, label: "MUMBAI NOC" },
          { x: 360, y: 120, label: "PUNE DATA CENTER" },
          { x: 370, y: 280, label: "THANE POP" },
          { x: 130, y: 280, label: "NASHIK HQ" },
          { x: 250, y: 60, label: "NAGPUR HUB" },
        ].map((node, i) => (
          <g key={i}>
            {/* Connecting Fiber Lines */}
            <motion.line
              x1="250"
              y1="200"
              x2={node.x}
              y2={node.y}
              stroke="#2FB8C6"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -24 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Satellite Nodes */}
            <circle cx={node.x} cy={node.y} r="10" fill="#0B1220" stroke="#E8A33D" strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r="4" fill="#E8A33D" />
            <text
              x={node.x}
              y={node.y + 24}
              fill="#F5F7FA"
              fontSize="10"
              fontFamily="monospace"
              textAnchor="middle"
              className="tracking-widest uppercase font-semibold"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Orbiting Telemetry Indicator */}
        <motion.circle
          cx="250"
          cy="200"
          r="160"
          stroke="#2FB8C6"
          strokeWidth="3"
          strokeDasharray="30 970"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 200px" }}
        />
      </svg>

      {/* Top HUD Card */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between bg-grid-navy/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal-teal animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-paper">
            2D Carrier Fiber Topology Matrix
          </span>
        </div>
        <span className="font-mono text-[10px] text-marigold-gold border border-marigold-gold/40 px-2 py-0.5 rounded-full">
          10 Gbps Active
        </span>
      </div>
    </div>
  );
}
