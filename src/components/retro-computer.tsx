const CREAM = "#FAF3EB";
const SCREEN_DARK = "#0a0c10";
const ACCENT = "#C8A96E";
const LIGHTER_CREAM = "#fff8ef";

// Single continuous outline — head, neck, and base traced as one path in
// one pass, the way a designer would draw the silhouette by hand. There is
// no seam between separate pieces because there are no separate pieces.
const CHASSIS_PATH =
  "M30,10 L270,10 L270,225 L175,225 L205,265 L255,265 L255,355 " +
  "L55,355 L45,265 L95,265 L125,225 L30,225 Z";

// viewBox stays at the original 300x380 design coordinates; only the
// wrapper's physical size below is scaled up (~2.5x, preserving the exact
// 260:330 ratio) so the screen cutout is large enough to show the full
// demo widget (header + both dropdowns + Seal button) without needing to
// scroll on load. Screen/button/detail coordinates are untouched.
const SCREEN = { left: "16.7%", top: "7.9%", width: "66.6%", height: "43.4%" };

export function RetroComputer({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ perspective: "1400px", display: "flex", justifyContent: "center" }}>
      <div
        className="relative"
        style={{
          width: 646,
          height: 820,
          transform: "rotateY(-10deg) rotateX(4deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 300 380" className="absolute inset-0 h-full w-full drop-shadow-2xl">
          <path d={CHASSIS_PATH} fill={CREAM} />
          <rect x={50} y={30} width={200} height={165} fill={SCREEN_DARK} />
          <rect x={234} y={204} width={10} height={10} fill={ACCENT} />
          <rect x={250} y={204} width={10} height={10} fill={ACCENT} />
          <rect x={70} y={300} width={120} height={6} fill={LIGHTER_CREAM} />
          <rect x={200} y={296} width={14} height={14} fill={ACCENT} />
        </svg>
        <div
          className="absolute flex flex-col gap-3 overflow-hidden"
          style={{ left: SCREEN.left, top: SCREEN.top, width: SCREEN.width, height: SCREEN.height }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
