"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Float, Sparkles } from "@react-three/drei";

const ThreeCanvas = dynamic(
  () => Promise.resolve(Canvas),
  { ssr: false }
);

function SolarArrayMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const sunLightRef = useRef<THREE.PointLight>(null);
  const pulseLinesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
    if (sunLightRef.current) {
      const t = state.clock.elapsedTime;
      sunLightRef.current.intensity = 5 + Math.sin(t * 3.5) * 2;
    }
    if (pulseLinesRef.current) {
      pulseLinesRef.current.position.z =
        ((state.clock.elapsedTime * 1.5) % 4.4) - 2.2;
    }
  });

  const panels = [];
  const rows = 4;
  const cols = 4;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      panels.push({
        x: (c - (cols - 1) / 2) * 1.15,
        z: (r - (rows - 1) / 2) * 1.15,
        key: `${r}-${c}`,
      });
    }
  }

  return (
    <group ref={groupRef} scale={1.05}>
      <group rotation={[Math.PI / 5.5, 0, 0]}>
        {/* PV Solar Panel Array Modules */}
        {panels.map((p) => (
          <group key={p.key} position={[p.x, 0, p.z]}>
            {/* Silicon Photovoltaic Glass Surface */}
            <mesh position={[0, 0.04, 0]}>
              <boxGeometry args={[1.05, 0.04, 1.05]} />
              <meshStandardMaterial
                color="#0D1E3A"
                roughness={0.15}
                metalness={0.9}
                emissive="#1E3866"
                emissiveIntensity={0.3}
              />
            </mesh>

            {/* Aluminum Panel Framing */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.1, 0.08, 1.1]} />
              <meshStandardMaterial
                color="#2A3950"
                metalness={0.95}
                roughness={0.2}
              />
            </mesh>

            {/* Micro Busbar Grid Lines */}
            <mesh position={[0, 0.065, 0]}>
              <planeGeometry args={[0.98, 0.98]} />
              <meshBasicMaterial
                color="#E8A33D"
                wireframe
                transparent
                opacity={0.35}
              />
            </mesh>
          </group>
        ))}

        {/* Dynamic Energy Pulse Wave (Golden Power Generation) */}
        <group ref={pulseLinesRef}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[4.8, 0.15]} />
            <meshBasicMaterial
              color="#E8A33D"
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>

        {/* Structural Mounting Rails */}
        <mesh position={[-1.7, -0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 4.8]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>
        <mesh position={[1.7, -0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 4.8]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>
      </group>

      {/* Solar Photon Sparkles */}
      <Sparkles
        count={60}
        scale={6}
        size={3}
        speed={0.5}
        opacity={0.9}
        color="#E8A33D"
      />
      <Sparkles
        count={30}
        scale={5}
        size={2.5}
        speed={0.3}
        opacity={0.7}
        color="#2FB8C6"
      />

      {/* Volumetric Sunlight & Energy Lights */}
      <pointLight ref={sunLightRef} position={[2, 4, 3]} color="#E8A33D" intensity={6} distance={12} />
      <directionalLight position={[-4, 6, 4]} color="#fef08a" intensity={3} />
      <ambientLight intensity={1.4} color="#a5f3fc" />
    </group>
  );
}

export default function SolarGrid3D({ className = "w-full h-[360px] md:h-[460px]" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-grid-navy/90 border border-marigold-gold/50 shadow-2xl backdrop-blur-xl group ${className}`}>
      {/* Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(232,163,61,0.2),transparent_75%)]" />

      {/* Reticles */}
      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-marigold-gold/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-marigold-gold/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-marigold-gold/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-marigold-gold/60 pointer-events-none" />

      <Suspense
        fallback={
          <div className="absolute inset-0 grid place-items-center bg-grid-navy text-marigold-gold">
            <div className="w-8 h-8 border-2 border-marigold-gold/30 border-t-marigold-gold rounded-full animate-spin" />
          </div>
        }
      >
        <ThreeCanvas
          camera={{ position: [4.5, 4.5, 6.5], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <PresentationControls
            global={false}
            cursor={true}
            snap={true}
            speed={1.5}
            zoom={1}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <SolarArrayMesh />
            </Float>
          </PresentationControls>
        </ThreeCanvas>
      </Suspense>

      {/* Telemetry Header */}
      <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-grid-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-marigold-gold/40 shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-marigold-gold animate-pulse shadow-[0_0_8px_#E8A33D]" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90">
          Photovoltaic Array • Enterprise Rooftop EPC
        </span>
      </div>

      {/* Telemetry Footer */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-grid-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-paper/10 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest text-marigold-gold font-semibold">
          3D Interactive • Drag to Rotate
        </span>
      </div>
    </div>
  );
}
