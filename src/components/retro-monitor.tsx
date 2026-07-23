/**
 * Skeuomorphic early-90s all-in-one monitor housing for the hero's live demo.
 * CSS 3D transforms only — no WebGL. Static tilt, no idle motion, so there's
 * nothing here that needs a prefers-reduced-motion guard.
 *
 * Modeled on a real reference photo: substantial cream plastic body with a
 * thick bezel around the screen and a deep "chin" below it (disk slot +
 * control buttons), not just a thin picture-frame border around the demo.
 *
 * Tilt is flat below the `sm` breakpoint (640px) and only applied at `sm:` and
 * up — full 3D angle helps on desktop, but just eats legibility and padding
 * on a narrow screen.
 */
export function RetroMonitor({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[420px] [perspective:1400px]">
      <div
        className="relative rounded-[26px] bg-gradient-to-br from-[#f7f2ea] via-[#ece3d2] to-[#d8cdb8]
                   p-6 pb-9 shadow-[0_45px_80px_-20px_rgba(0,0,0,0.4),0_18px_30px_-10px_rgba(0,0,0,0.22)]
                   [transform:rotateY(0deg)] [transform-style:preserve-3d] sm:[transform:rotateY(-8deg)_rotateX(3deg)]"
      >
        {/* top highlight sheen, suggests a rounded plastic edge catching light */}
        <div
          className="pointer-events-none absolute inset-x-6 top-3 h-8 rounded-full bg-white/40 blur-xl"
          aria-hidden="true"
        />

        {/* screen, recessed with a thick bezel around it */}
        <div className="relative overflow-hidden rounded-lg bg-[#0a0c10] shadow-[inset_0_0_2px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-5 p-5">{children}</div>
          {/* faint CRT scanlines — subtle enough to stay fully legible over */}
          <div
            className="pointer-events-none absolute inset-0
                       [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.025)_0px,transparent_1px,transparent_2px)]"
            aria-hidden="true"
          />
        </div>

        {/* the "chin" — deep lower body housing disk slot + control buttons,
            echoing the reference photo's proportions rather than a thin border */}
        <div className="mt-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-4 w-2.5 rounded-sm bg-gradient-to-b from-[#7a8fa8] to-[#4a5f78] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
            <span className="h-4 w-2.5 rounded-sm bg-gradient-to-b from-[#7a8fa8] to-[#4a5f78] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
          </div>
          <div
            className="h-3 w-28 rounded-sm bg-[#c4b8a0] shadow-[inset_0_2px_3px_rgba(0,0,0,0.35)]"
            aria-hidden="true"
          />
          <div
            className="size-2.5 rounded-full bg-[#0A6E4F] shadow-[0_0_4px_rgba(10,110,79,0.8)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
