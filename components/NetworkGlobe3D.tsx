"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Float, Sparkles } from "@react-three/drei";

const ThreeCanvas = dynamic(
  () => Promise.resolve(Canvas),
  { ssr: false }
);

function GlobeMesh() {
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const nodesGroupRef = useRef<THREE.Group>(null);

  // Generate satellite node locations on sphere surface
  const nodes = useMemo(() => {
    const arr: [number, number, number][] = [];
    const count = 18;
    const radius = 2.05;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      arr.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.15;
      outerSphereRef.current.rotation.x += delta * 0.04;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.25;
      ringRef.current.rotation.y += delta * 0.12;
    }
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group scale={1.15}>
      {/* Outer Geodesic Network Lattice */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[2, 4]} />
        <meshStandardMaterial
          color="#2FB8C6"
          wireframe
          transparent
          opacity={0.4}
          emissive="#2FB8C6"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Inner Glowing Core Matrix */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[1.55, 24, 24]} />
        <meshStandardMaterial
          color="#0B1220"
          roughness={0.2}
          metalness={0.8}
          emissive="#0F283C"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Surface Node Signals */}
      <group ref={nodesGroupRef}>
        {nodes.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color={idx % 3 === 0 ? "#E8A33D" : "#2FB8C6"}
              emissive={idx % 3 === 0 ? "#E8A33D" : "#2FB8C6"}
              emissiveIntensity={2.0}
            />
          </mesh>
        ))}
      </group>

      {/* Orbiting Telemetry Rings */}
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 3.2, 0, 0]}>
          <torusGeometry args={[2.7, 0.025, 16, 120]} />
          <meshBasicMaterial color="#E8A33D" transparent opacity={0.85} />
        </mesh>
        <mesh rotation={[-Math.PI / 3.8, Math.PI / 4, 0]}>
          <torusGeometry args={[3.15, 0.018, 16, 120]} />
          <meshBasicMaterial color="#2FB8C6" transparent opacity={0.65} />
        </mesh>
      </group>

      {/* Ambient Photon Sparkles */}
      <Sparkles
        count={50}
        scale={6}
        size={2.5}
        speed={0.4}
        opacity={0.8}
        color="#2FB8C6"
      />
      <Sparkles
        count={25}
        scale={5}
        size={3}
        speed={0.3}
        opacity={0.9}
        color="#E8A33D"
      />

      {/* Volumetric Lights */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[6, 6, 6]} color="#a5f3fc" intensity={2.5} />
      <pointLight position={[0, 0, 0]} color="#2FB8C6" intensity={5} distance={6} />
      <pointLight position={[-4, 4, 3]} color="#E8A33D" intensity={4} distance={8} />
    </group>
  );
}

export default function NetworkGlobe3D({ className = "w-full h-[360px] md:h-[460px]" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-grid-navy/90 border border-signal-teal/40 shadow-2xl backdrop-blur-xl group ${className}`}>
      {/* Background Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(47,184,198,0.2),transparent_70%)]" />

      {/* Futuristic Corner Reticles */}
      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-signal-teal/60 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-signal-teal/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-signal-teal/60 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-signal-teal/60 pointer-events-none" />

      <Suspense
        fallback={
          <div className="absolute inset-0 grid place-items-center bg-grid-navy text-signal-teal">
            <div className="w-8 h-8 border-2 border-signal-teal/30 border-t-signal-teal rounded-full animate-spin" />
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
              <GlobeMesh />
            </Float>
          </PresentationControls>
        </ThreeCanvas>
      </Suspense>

      {/* Telemetry Header Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-grid-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-signal-teal/40 shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-signal-teal animate-pulse shadow-[0_0_8px_#2FB8C6]" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90">
          Topology Matrix • 10 Gbps Fiber Backbone
        </span>
      </div>

      {/* Telemetry Footer Spec */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-grid-navy/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-paper/10 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest text-signal-teal font-semibold">
          3D Interactive • Drag to Rotate
        </span>
      </div>
    </div>
  );
}
