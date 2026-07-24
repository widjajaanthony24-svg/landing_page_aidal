"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, RoundedBox, ContactShadows, Environment } from "@react-three/drei";

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
const ACCENT = "#C8A96E";
const SCREEN_LIP = "#171310";
const SCREEN_DARK = "#05060a";

function Computer({ children }: { children: React.ReactNode }) {
  return (
    <group position={[0, -0.3, 0]}>
      {/* monitor head */}
      <group position={[0, 1.35, 0]}>
        <RoundedBox args={[1.9, 1.7, 1.6]} radius={0.12} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={CREAM} roughness={0.55} metalness={0.05} />
        </RoundedBox>
        {/* recessed screen: dark lip/border behind a smaller darker screen surface */}
        <mesh position={[0, 0.08, 0.72]}>
          <boxGeometry args={[1.66, 1.4, 0.05]} />
          <meshStandardMaterial color={SCREEN_LIP} roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.08, 0.75]}>
          <boxGeometry args={[1.56, 1.3, 0.04]} />
          <meshStandardMaterial color={SCREEN_DARK} roughness={0.7} />
        </mesh>
        {/* live demo content — sized + scaled to fill ~90% of the screen interior */}
        <Html
          transform
          occlude={false}
          position={[0, 0.08, 0.77]}
          distanceFactor={1.4}
          style={{ pointerEvents: "auto" }}
        >
          <div style={{ width: 400, height: 330, display: "flex", flexDirection: "column", gap: 12 }}>
            {children}
          </div>
        </Html>
        {/* two accent buttons, bottom-right of the bezel */}
        <mesh position={[0.55, -0.68, 0.81]}>
          <boxGeometry args={[0.1, 0.06, 0.02]} />
          <meshStandardMaterial color={ACCENT} roughness={0.3} />
        </mesh>
        <mesh position={[0.7, -0.68, 0.81]}>
          <boxGeometry args={[0.1, 0.06, 0.02]} />
          <meshStandardMaterial color={ACCENT} roughness={0.3} />
        </mesh>
      </group>

      {/* neck — solid tapered swivel column, narrower than both the head and
          base so negative space is visible on either side, but continuous
          and overlapping into both so there's no gap */}
      <mesh position={[0, 0.405, 0]} castShadow>
        <cylinderGeometry args={[0.48, 0.34, 0.3, 32]} />
        <meshStandardMaterial color={CREAM_DARK} roughness={0.5} />
      </mesh>

      {/* base / tower — wider than the head, one continuous unit */}
      <group position={[0, 0, 0]}>
        <RoundedBox args={[3.1, 0.55, 1.7]} radius={0.06} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color={CREAM} roughness={0.5} metalness={0.05} />
        </RoundedBox>
        {/* disk slot, left of center */}
        <mesh position={[-0.7, 0.05, 0.86]}>
          <boxGeometry args={[1.1, 0.14, 0.02]} />
          <meshStandardMaterial color={CREAM_DARK} roughness={0.6} />
        </mesh>
        <mesh position={[-0.7, 0.05, 0.87]}>
          <boxGeometry args={[0.22, 0.08, 0.02]} />
          <meshStandardMaterial color={ACCENT} roughness={0.3} />
        </mesh>
        {/* power light */}
        <mesh position={[1.35, 0.05, 0.86]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#0A6E4F" emissive="#0A6E4F" emissiveIntensity={0.6} />
        </mesh>
      </group>
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
