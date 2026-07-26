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

function SecurityCubeMesh() {
  const outerShieldRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringGroupRef = useRef<THREE.Group>(null);
  const laserRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerShieldRef.current) {
      outerShieldRef.current.rotation.x += delta * 0.25;
      outerShieldRef.current.rotation.y += delta * 0.35;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x -= delta * 0.45;
      innerCoreRef.current.rotation.y -= delta * 0.3;
    }
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.z += delta * 0.2;
    }
    if (laserRef.current) {
      const t = state.clock.elapsedTime;
      laserRef.current.position.y = Math.sin(t * 2.8) * 2.1;
    }
  });

  return (
    <group scale={1.15}>
      {/* Outer Holographic Defense Lattice */}
      <mesh ref={outerShieldRef}>
        <octahedronGeometry args={[2.5, 2]} />
        <meshStandardMaterial
          color="#2FB8C6"
          wireframe
          transparent
          opacity={0.45}
          emissive="#2FB8C6"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Inner Glowing Encryption Core */}
      <mesh ref={innerCoreRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#1F6E4A"
          metalness={0.9}
          roughness={0.1}
          emissive="#2FB8C6"
          emissiveIntensity={1.4}
        />
      </mesh>

      {/* Outer Counter-Rotating Hex Ring */}
      <group ref={ringGroupRef}>
        <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[3.1, 0.025, 16, 100]} />
          <meshBasicMaterial color="#2FB8C6" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, -Math.PI / 4, 0]}>
          <torusGeometry args={[2.7, 0.02, 16, 100]} />
          <meshBasicMaterial color="#1F6E4A" transparent opacity={0.85} />
        </mesh>
      </group>

      {/* Animated Laser Scanning Beam */}
      <mesh ref={laserRef} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.2, 4.2]} />
        <meshBasicMaterial
          color="#2FB8C6"
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Threat Deflection Sparkles */}
      <Sparkles
        count={50}
        scale={6}
        size={3}
        speed={0.4}
        opacity={0.85}
        color="#2FB8C6"
      />
      <Sparkles
        count={25}
        scale={5}
        size={2.5}
        speed={0.3}
        opacity={0.7}
        color="#1F6E4A"
      />

      {/* Cyber Security Volumetric Lighting */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} color="#2FB8C6" intensity={3} />
      <pointLight position={[0, 0, 0]} color="#2FB8C6" intensity={6} distance={6} />
      <pointLight position={[-4, -4, -3]} color="#1F6E4A" intensity={4} distance={8} />
    </group>
  );
}

export default function SecurityShield3D({ className = "w-full h-[360px] md:h-[460px]" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-grid-navy/90 border border-sahyadri-green/50 shadow-2xl backdrop-blur-xl group ${className}`}>
      {/* Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(31,110,74,0.25),transparent_75%)]" />

      {/* Reticles */}
      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-sahyadri-green/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-sahyadri-green/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-sahyadri-green/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-sahyadri-green/60 pointer-events-none" />

      <Suspense
        fallback={
          <div className="absolute inset-0 grid place-items-center bg-grid-navy text-sahyadri-green">
            <div className="w-8 h-8 border-2 border-sahyadri-green/30 border-t-sahyadri-green rounded-full animate-spin" />
          </div>
        }
      >
        <ThreeCanvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
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
            <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
              <SecurityCubeMesh />
            </Float>
          </PresentationControls>
        </ThreeCanvas>
      </Suspense>

      {/* Telemetry Header */}
      <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-grid-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sahyadri-green/40 shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-sahyadri-green animate-pulse shadow-[0_0_8px_#1F6E4A]" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90">
          Cyber Defense Matrix • Active Shielding
        </span>
      </div>

      {/* Telemetry Footer */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-grid-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-paper/10 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest text-sahyadri-green font-semibold">
          3D Interactive • Drag to Rotate
        </span>
      </div>
    </div>
  );
}
