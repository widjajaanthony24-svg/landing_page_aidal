/**
 * Skeuomorphic early-90s all-in-one monitor housing for the hero's live demo.
 * CSS 3D transforms only — no WebGL. Static tilt, no idle motion, so there's
 * nothing here that needs a prefers-reduced-motion guard.
 *
 * Tilt is flat below the `sm` breakpoint (640px) and only applied at `sm:` and
 * up — full 3D angle helps on desktop, but just eats legibility and padding
 * on a narrow screen.
 */
export function RetroMonitor({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[400px] [perspective:1400px]">
      <div
        className="relative rounded-[22px] bg-gradient-to-br from-[#f5f0e8] to-[#ddd4c2]
                   p-5 shadow-[0_40px_70px_-20px_rgba(0,0,0,0.35),0_15px_25px_-10px_rgba(0,0,0,0.2)]
                   [transform:rotateY(0deg)] [transform-style:preserve-3d] sm:[transform:rotateY(-6deg)_rotateX(2deg)]"
      >
        {/* screen */}
        <div className="relative overflow-hidden rounded-md bg-[#0a0c10] shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-5 p-5">{children}</div>
          {/* faint CRT scanlines — subtle enough to stay fully legible over */}
          <div
            className="pointer-events-none absolute inset-0
                       [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.025)_0px,transparent_1px,transparent_2px)]"
            aria-hidden="true"
          />
        </div>

        {/* decorative details echoing the reference photo — non-interactive */}
        <div className="mx-auto mt-4 h-[3px] w-2/3 rounded-full bg-black/10" aria-hidden="true" />
        <div className="absolute right-4 bottom-3 size-1.5 rounded-full bg-[#0A6E4F]/70" aria-hidden="true" />
      </div>
    </div>
  );
}
