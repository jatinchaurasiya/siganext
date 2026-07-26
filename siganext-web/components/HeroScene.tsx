"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

// R3F Canvas is heavy + WebGL. Load it only on the client with a skeleton.
const HeroCanvas = dynamic(
  () => Promise.resolve(Canvas),
  { ssr: false }
);

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroScene({
  className = "",
  fill = false,
}: {
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      className={`relative ${fill ? "absolute inset-0 w-full h-full z-0 pointer-events-none" : `w-full ${className}`} `}
      style={fill ? undefined : { aspectRatio: "16 / 9" }}
    >
      <div
        className={`absolute inset-0 overflow-hidden bg-grid-navy ${
          fill ? "" : "rounded-xl"
        }`}
      >
        <div className="absolute inset-0 [&>canvas]:!w-full [&>canvas]:!h-full">
          <Suspense
            fallback={
              <div className="absolute inset-0 grid place-items-center bg-grid-navy">
                <div className="w-10 h-10 rounded-full border-2 border-signal-teal/30 border-t-signal-teal animate-spin" />
              </div>
            }
          >
            <HeroCanvas
              dpr={[1, reduceMotion ? 1 : 2]}
              camera={{ position: [6, 5, 6], fov: 38 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              onCreated={({ gl }) => {
                gl.setClearColor("#0B1220", 1);
              }}
            >
              <SceneContents />
            </HeroCanvas>
          </Suspense>
        </div>

        {/* skeleton sits beneath, shown until canvas paints */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-grid-navy -z-10" />
      </div>
    </div>
  );
}

// ---- Scene --------------------------------------------------------------

type Panel = { x: number; z: number; i: number };

function PanelMesh({ x, z, i }: Panel) {
  const ref = useRef<THREE.Mesh>(null);
  // Under reduced-motion we want the static end-state immediately, so
  // initialize mounted=true in that case (no setState-in-effect needed).
  const [mounted, setMounted] = useState(() => reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setTimeout(() => setMounted(true), i * 50);
    return () => clearTimeout(t);
  }, [i]);

  const startY = -1.5;
  const targetY = 0;

  useFrame(() => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.transparent = true;
    // back-out approximation: slightly overshoot target during entrance
    const goal = mounted ? targetY : startY;
    const overshoot = mounted ? 0.18 : 0;
    ref.current.position.y +=
      (goal + overshoot - ref.current.position.y) *
      (mounted ? 0.18 : 0.05);
    // settle the overshoot back to targetY once past it on the way up
    if (mounted && ref.current.position.y > targetY) {
      ref.current.position.y += (targetY - ref.current.position.y) * 0.1;
    }
    const targetOpacity = mounted ? 1 : 0;
    mat.opacity += (targetOpacity - mat.opacity) * 0.2;
  });

  const color = i % 3 === 0 ? "#1e3466" : i % 3 === 1 ? "#132347" : "#284480";

  return (
    <mesh ref={ref} position={[x, startY, z]} rotation={[-Math.PI / 2.6, 0, 0]}>
      <boxGeometry args={[0.95, 0.08, 0.95]} />
      <meshStandardMaterial
        color={color}
        metalness={0.65}
        roughness={0.25}
        emissive="#0d1b38"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function Seams({ panels }: { panels: Panel[] }) {
  const lines = useMemo(() => {
    const arr: { x: number; z: number }[] = [];
    panels.forEach((p) => {
      arr.push({ x: p.x, z: p.z + 0.55 });
      arr.push({ x: p.x + 0.5, z: p.z });
    });
    return arr;
  }, [panels]);

  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (pulseRef.current && !reduceMotion) {
      const m = pulseRef.current.material as THREE.MeshStandardMaterial;
      const t = state.clock.elapsedTime;
      m.emissiveIntensity = 1.2 + Math.sin(t * 3.0) * 0.8;
    }
  });

  return (
    <group>
      {lines.map((l, i) => (
        <mesh
          key={i}
          position={[l.x, 0.05, l.z]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.04, 1.05]} />
          <meshBasicMaterial color="#2FB8C6" transparent opacity={0.9} />
        </mesh>
      ))}

      {/* The convergent "signal becomes power" node: central panel pulses gold */}
      <mesh ref={pulseRef} position={[0, 0.07, 0]} rotation={[-Math.PI / 2.6, 0, 0]}>
        <boxGeometry args={[0.98, 0.09, 0.98]} />
        <meshStandardMaterial
          color="#E8A33D"
          emissive="#E8A33D"
          emissiveIntensity={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.6, 0]}
    >
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#07101e" roughness={0.9} metalness={0.1} />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1.4} color="#a5f3fc" />
      <directionalLight position={[6, 9, 5]} intensity={3.2} color="#fde047" />
      <pointLight position={[0, 3, 0]} intensity={4.5} color="#E8A33D" distance={8} />
      <pointLight position={[-4, 3, -2]} intensity={2.5} color="#2FB8C6" distance={10} />
    </>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (!reduceMotion && !isTouch) {
      const handler = (e: PointerEvent) => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        target.current.set(nx * 0.14, ny * 0.1, 0);
      };
      window.addEventListener("pointermove", handler, { passive: true });
      return () => window.removeEventListener("pointermove", handler);
    }
  }, [isTouch]);

  useFrame(() => {
    if (reduceMotion || isTouch) return;
    // Lerp toward target without mutating returned fields directly — use set() / lerp().
    const goalX = 6 + target.current.x * 1.4;
    const goalY = 5 + target.current.y * 0.9;
    const px = THREE.MathUtils.lerp(camera.position.x, goalX, 0.04);
    const py = THREE.MathUtils.lerp(camera.position.y, goalY, 0.04);
    camera.position.set(px, py, camera.position.z);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneContents() {
  const panels = useMemo<Panel[]>(() => {
    const out: Panel[] = [];
    const N = 6;
    const off = (N - 1) / 2;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        out.push({ x: i - off, z: (j - off) * 1.1, i: i * N + j });
      }
    }
    return out;
  }, []);

  return (
    <group>
      <Lights />
      <Ground />
      <group>
        {panels.map((p) => (
          <PanelMesh key={p.i} {...p} />
        ))}
        <Seams panels={panels} />
      </group>
      <FloatingNodes />
      <CameraRig />
    </group>
  );
}

function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && !reduceMotion) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  const nodes = [
    { pos: [-2.5, 1.8, -1.5], color: "#2FB8C6" },
    { pos: [2.8, 2.2, 1.2], color: "#E8A33D" },
    { pos: [-1.2, 2.5, 2.0], color: "#1F6E4A" },
    { pos: [1.8, 1.6, -2.2], color: "#2FB8C6" },
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((n, idx) => (
        <mesh key={idx} position={n.pos as [number, number, number]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color={n.color}
            emissive={n.color}
            emissiveIntensity={1.8}
            wireframe
          />
        </mesh>
      ))}

      <Sparkles
        count={45}
        scale={8}
        size={2.5}
        speed={0.4}
        opacity={0.7}
        color="#2FB8C6"
      />
    </group>
  );
}

