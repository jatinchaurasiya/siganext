"use client";

import React, { useRef, useState, useCallback } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees (default: 12)
  scale?: number; // scale factor on hover (default: 1.02)
  perspective?: number; // 3D perspective in px (default: 1000)
  glareOpacity?: number; // max glare opacity (default: 0.25)
  glowColor?: string; // spotlight glow color (default: "rgba(47, 184, 198, 0.3)")
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card3DTilt({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
  glareOpacity = 0.25,
  glowColor = "rgba(47, 184, 198, 0.25)",
  onClick,
  style = {},
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate relative percentage (-0.5 to 0.5)
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      // Calculate tilt angles
      const rotateX = -yPct * maxTilt * 2; // inverted X axis rotation
      const rotateY = xPct * maxTilt * 2;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      setGlarePos({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: glareOpacity,
      });
    },
    [maxTilt, perspective, scale, glareOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out cursor-pointer ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform,
        willChange: "transform",
        ...style,
      }}
    >
      {/* 3D Spotlight Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Edge Light */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity > 0 ? 0.6 : 0,
          boxShadow: `inset 0 0 20px ${glowColor}`,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper with preserve-3d */}
      <div className="relative z-10 w-full h-full [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
}
