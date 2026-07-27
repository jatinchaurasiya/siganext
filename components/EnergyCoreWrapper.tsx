"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import EnergyCore3D from "./EnergyCore3D";

interface EnergyCoreWrapperProps {
  className?: string;
  size?: number;
}

export default function EnergyCoreWrapper({
  className = "",
  size = 180,
}: EnergyCoreWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return (
      <div
        className={`relative flex items-center justify-center pointer-events-none ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-champagne via-champagne/40 to-transparent border border-champagne/50 blur-sm animate-pulse" />
        <div className="absolute w-12 h-12 rounded-full bg-champagne border border-obsidian shadow-[0_0_20px_#C9A24B]" />
      </div>
    );
  }

  return (
    <div
      className={`relative pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full block"
      >
        <EnergyCore3D />
      </Canvas>
    </div>
  );
}
