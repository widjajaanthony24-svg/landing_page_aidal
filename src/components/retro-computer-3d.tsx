"use client";

import { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, RoundedBox, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

/**
 * R3F's Canvas measures its container via ResizeObserver on mount. When the
 * Canvas is loaded through next/dynamic(ssr:false) inside a flex container,
 * that first measurement sometimes fires before layout has actually settled,
 * and gets stuck at the browser's default 300x150 canvas size forever after
 * (confirmed directly: dispatching a manual window resize event fixes it
 * immediately). Firing one ourselves post-mount is the standard workaround.
 */
function useForceResize() {
  useEffect(() => {
    // A single rAF fires before layout has actually settled — fire a couple
    // of times at increasing delays to reliably land after it has.
    const timers = [50, 250, 600].map((ms) =>
      setTimeout(() => window.dispatchEvent(new Event("resize")), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);
}

const CREAM = "#ece3d2";
const CREAM_DARK = "#d8cdb8";
const BLUE = "#4a5f78";
const SCREEN_DARK = "#0a0c10";

function Cord({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const curve = useMemo(() => {
    const [sx, sy, sz] = start;
    const [ex, ey, ez] = end;
    const points: THREE.Vector3[] = [];
    const coils = 6;
    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = sx + (ex - sx) * t;
      const z = sz + (ez - sz) * t;
      const y = sy + (ey - sy) * t + Math.sin(t * Math.PI * coils) * 0.035 * (1 - t * 0.3);
      const wobble = Math.cos(t * Math.PI * coils) * 0.035 * (1 - t * 0.3);
      points.push(new THREE.Vector3(x + wobble, y, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, [start, end]);

  return (
    <mesh castShadow>
      <tubeGeometry args={[curve, 120, 0.012, 8, false]} />
      <meshStandardMaterial color={BLUE} roughness={0.4} metalness={0.1} />
    </mesh>
  );
}

function Computer({ children }: { children: React.ReactNode }) {
  return (
    <group position={[0, -0.3, 0]}>
      {/* monitor head */}
      <group position={[0, 1.35, 0]}>
        <RoundedBox args={[1.9, 1.7, 1.5]} radius={0.09} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={CREAM} roughness={0.55} metalness={0.05} />
        </RoundedBox>
        {/* screen bezel opening (recessed) */}
        <mesh position={[0, 0.08, 0.76]}>
          <boxGeometry args={[1.55, 1.3, 0.06]} />
          <meshStandardMaterial color="#050506" roughness={0.8} />
        </mesh>
        {/* screen surface + live content */}
        <Html
          transform
          occlude={false}
          position={[0, 0.08, 0.795]}
          distanceFactor={0.9}
          style={{ pointerEvents: "auto" }}
        >
          <div style={{ width: 380, height: 320, display: "flex", flexDirection: "column", gap: 12 }}>
            {children}
          </div>
        </Html>
        {/* two small indicator squares, echoing the reference's blue buttons */}
        <mesh position={[0.55, -0.68, 0.78]}>
          <boxGeometry args={[0.1, 0.06, 0.02]} />
          <meshStandardMaterial color={BLUE} roughness={0.3} />
        </mesh>
        <mesh position={[0.7, -0.68, 0.78]}>
          <boxGeometry args={[0.1, 0.06, 0.02]} />
          <meshStandardMaterial color={BLUE} roughness={0.3} />
        </mesh>
      </group>

      {/* neck */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.3, 0.5, 24]} />
        <meshStandardMaterial color={CREAM_DARK} roughness={0.5} />
      </mesh>

      {/* tower base — wider than the head */}
      <group position={[0, 0, 0]}>
        <RoundedBox args={[3.1, 0.55, 1.7]} radius={0.06} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={CREAM} roughness={0.5} metalness={0.05} />
        </RoundedBox>
        {/* disk slot */}
        <mesh position={[-0.7, 0.05, 0.86]}>
          <boxGeometry args={[1.1, 0.14, 0.02]} />
          <meshStandardMaterial color={CREAM_DARK} roughness={0.6} />
        </mesh>
        <mesh position={[-0.7, 0.05, 0.87]}>
          <boxGeometry args={[0.22, 0.08, 0.02]} />
          <meshStandardMaterial color={BLUE} roughness={0.3} />
        </mesh>
        {/* power light */}
        <mesh position={[1.35, 0.05, 0.86]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#0A6E4F" emissive="#0A6E4F" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* keyboard */}
      <group position={[0.1, -0.32, 1.55]} rotation={[-0.08, 0, 0]}>
        <RoundedBox args={[2.6, 0.16, 0.9]} radius={0.05} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={CREAM} roughness={0.6} />
        </RoundedBox>
        <mesh position={[0, 0.09, 0]}>
          <boxGeometry args={[2.4, 0.02, 0.72]} />
          <meshStandardMaterial color={CREAM_DARK} roughness={0.7} />
        </mesh>
      </group>

      {/* mouse */}
      <group position={[-1.75, -0.33, 1.4]} rotation={[0, 0.3, 0]}>
        <RoundedBox args={[0.42, 0.18, 0.62]} radius={0.15} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={CREAM} roughness={0.55} />
        </RoundedBox>
      </group>

      {/* coiled cords connecting mouse and keyboard to the tower */}
      <Cord start={[-1.6, -0.25, 1.2]} end={[-1.3, -0.05, 0.9]} />
      <Cord start={[1.4, -0.25, 1.55]} end={[1.45, -0.05, 0.9]} />
    </group>
  );
}

export function RetroComputer3D({ children }: { children: React.ReactNode }) {
  useForceResize();
  return (
    <div className="h-[560px] w-full max-w-[620px]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1.4, 6.2], fov: 32 }} gl={{ antialias: true }}>
        <color attach="background" args={["#faf3eb"]} />
        <ambientLight intensity={0.65} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-4, 2, -2]} intensity={0.3} />
        <Suspense fallback={null}>
          <Computer>{children}</Computer>
          <Environment preset="studio" environmentIntensity={0.3} />
        </Suspense>
        <ContactShadows position={[0, -0.95, 0]} opacity={0.45} scale={8} blur={2.2} far={2} />
      </Canvas>
    </div>
  );
}
