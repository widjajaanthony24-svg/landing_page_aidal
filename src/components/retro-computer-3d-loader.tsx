"use client";

import dynamic from "next/dynamic";

// react-three-fiber's Canvas needs browser APIs unavailable during Next's
// static-export SSR pass — load it client-only. Isolated into its own
// "use client" file because next/dynamic(ssr:false) can't be called
// directly from a Server Component (hero.tsx isn't otherwise client-only).
export const RetroComputer3D = dynamic(
  () => import("@/components/retro-computer-3d").then((m) => m.RetroComputer3D),
  { ssr: false },
);
