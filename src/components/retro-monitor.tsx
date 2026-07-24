/**
 * Skeuomorphic early-90s desktop computer for the hero's live demo: monitor
 * head on a short neck, sitting above a wider tower base, with a keyboard and
 * mouse in front — matching the user's reference photo's silhouette, not a
 * tall narrow "phone" shape. CSS 3D transforms only, no WebGL.
 *
 * The screen area has a FIXED height regardless of demo state (idle vs.
 * sealed-result shown) — DemoWidget/HashPanel scroll internally if their
 * content is taller than that, so clicking "Seal This Decision" never
 * resizes the chassis itself.
 *
 * Tilt is flat below the `sm` breakpoint (640px) and only applied at `sm:`
 * and up.
 */
export function RetroMonitor({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[540px] [perspective:1400px]">
      <div
        className="relative mx-auto flex w-fit flex-col items-center
                   [transform:rotateY(0deg)] [transform-style:preserve-3d] sm:[transform:rotateY(-8deg)_rotateX(3deg)]"
      >
        {/* ── monitor head ── */}
        <div
          className="relative rounded-[22px] bg-gradient-to-br from-[#f7f2ea] via-[#ece3d2] to-[#d8cdb8]
                     p-6 pb-8 shadow-[0_45px_80px_-20px_rgba(0,0,0,0.4),0_18px_30px_-10px_rgba(0,0,0,0.22)]"
        >
          <div
            className="pointer-events-none absolute inset-x-6 top-3 h-8 rounded-full bg-white/40 blur-xl"
            aria-hidden="true"
          />
          {/* screen — fixed size, content scrolls internally instead of resizing this */}
          <div className="relative h-[400px] w-[380px] max-w-[calc(100vw-6rem)] overflow-hidden rounded-lg bg-[#0a0c10] shadow-[inset_0_0_2px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.6)]">
            <div className="flex h-full flex-col gap-3 p-4">{children}</div>
            <div
              className="pointer-events-none absolute inset-0
                         [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.025)_0px,transparent_1px,transparent_2px)]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── neck connecting head to base ── */}
        <div
          className="h-6 w-20 bg-gradient-to-b from-[#d8cdb8] to-[#c4b8a0] shadow-[inset_2px_0_3px_rgba(0,0,0,0.15),inset_-2px_0_3px_rgba(0,0,0,0.15)]"
          aria-hidden="true"
        />

        {/* ── tower base, deliberately wider than the head ── */}
        <div className="relative w-[480px] max-w-[calc(100vw-3rem)] rounded-lg bg-gradient-to-b from-[#ece3d2] to-[#d8cdb8] px-6 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-4 w-2.5 rounded-sm bg-gradient-to-b from-[#7a8fa8] to-[#4a5f78] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
              <span className="h-4 w-2.5 rounded-sm bg-gradient-to-b from-[#7a8fa8] to-[#4a5f78] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
            </div>
            <div
              className="h-3 w-32 rounded-sm bg-[#c4b8a0] shadow-[inset_0_2px_3px_rgba(0,0,0,0.35)]"
              aria-hidden="true"
            />
            <div
              className="size-2.5 rounded-full bg-[#0A6E4F] shadow-[0_0_4px_rgba(10,110,79,0.8)]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── keyboard + mouse, in front of the tower ── */}
        <div className="mt-5 flex items-end gap-4" aria-hidden="true">
          <div className="h-16 w-[300px] rounded-md bg-gradient-to-b from-[#f7f2ea] to-[#ddd2bd] p-2 shadow-[0_15px_25px_-10px_rgba(0,0,0,0.3)]">
            <div
              className="h-full w-full rounded [background:repeating-linear-gradient(90deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_18px,transparent_18px,transparent_22px)]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 16px, transparent 16px, transparent 20px), repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 10px, transparent 10px, transparent 14px)",
              }}
            />
          </div>
          <div className="relative flex flex-col items-center">
            <svg width="46" height="30" viewBox="0 0 46 30" className="absolute -top-7 left-1/2 -translate-x-1/2">
              <path
                d="M23 30 C 23 18, 8 20, 8 10 C 8 3, 16 3, 16 8"
                fill="none"
                stroke="#4a5f78"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="h-9 w-6 rounded-t-full rounded-b-md bg-gradient-to-b from-[#f7f2ea] to-[#ddd2bd] shadow-[0_10px_18px_-8px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
