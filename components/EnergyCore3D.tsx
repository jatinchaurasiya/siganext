"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.15;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y -= delta * 0.2;
      outerRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group scale={1.2}>
        {/* Core Faceted Orb */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#C9A24B"
            metalness={0.85}
            roughness={0.2}
            flatShading={true}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Outer Solar Lattice Wireframe Ring */}
        <mesh ref={outerRef}>
          <dodecahedronGeometry args={[1.3, 0]} />
          <meshStandardMaterial
            color="#C9A24B"
            wireframe
            transparent
            opacity={0.35}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function EnergyCore3D() {
  return (
    <>
      {/* 3-Point Studio Lighting Setup: Key, Fill, Rim */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#FFF8E7" />
      <directionalLight position={[-5, -2, -3]} intensity={0.8} color="#C9A24B" />
      <pointLight position={[0, 4, -4]} intensity={3.0} color="#FFFFFF" />

      <CoreOrb />
    </>
  );
}
