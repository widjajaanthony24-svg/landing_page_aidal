const CREAM_LIGHT = "#f5efe3";
const CREAM_DARK = "#d8cdb8";
const SCREEN_LIP = "#171310";
const ACCENT = "#C8A96E";

// viewBox is 600x759 — the wrapper below is sized to the same ratio, so
// percentages derived from these coordinates line up pixel-for-pixel with
// the rendered SVG, letting the screen cutout and the HTML overlay share
// one coordinate space. The screen is sized to fit the demo widget's full
// header + both dropdowns + Seal button without needing to scroll on load
// (verified against DemoWidget's actual measured content height).
const VIEWBOX_W = 600;
const VIEWBOX_H = 759;
const HEAD = { x: 60, y: 10, w: 480, h: 484, r: 26 };
const SCREEN = { x: 76, y: 26, w: 448, h: 444, r: 12 };
const BASE = { x: 20, y: 514, w: 560, h: 230, r: 22 };
// Neck deliberately overlaps 30 units into both the head and the base so
// the three pieces always share filled pixels at the seam — there is no
// coordinate at which the chassis can show a gap.
const NECK_TOP_Y = HEAD.y + HEAD.h - 30;
const NECK_BOTTOM_Y = BASE.y + 30;
const NECK_TOP_HALF_W = 80;
const NECK_BOTTOM_HALF_W = 130;
const CENTER_X = HEAD.x + HEAD.w / 2;

// Clockwise winding — used for the three solid chassis pieces. Because all
// three share the same winding direction, their overlaps (the seams) add up
// under the nonzero fill rule instead of cancelling out, so intentional
// overlap can never turn into an accidental hole.
function roundedRectPath(x: number, y: number, w: number, h: number, r: number) {
  return `M${x + r},${y} H${x + w - r} A${r},${r} 0 0 1 ${x + w},${y + r} V${y + h - r} A${r},${r} 0 0 1 ${x + w - r},${y + h} H${x + r} A${r},${r} 0 0 1 ${x},${y + h - r} V${y + r} A${r},${r} 0 0 1 ${x + r},${y} Z`;
}

// Counter-clockwise winding (opposite of the above) — used only for the
// screen cutout. Under the nonzero rule, a region covered once by a
// clockwise path and once by a counter-clockwise path has a net winding of
// zero, i.e. a genuine hole — this is what makes the screen a real cutout
// in the same path rather than a rectangle painted on top.
function roundedRectPathCCW(x: number, y: number, w: number, h: number, r: number) {
  return `M${x},${y + r} V${y + h - r} A${r},${r} 0 0 0 ${x + r},${y + h} H${x + w - r} A${r},${r} 0 0 0 ${x + w},${y + h - r} V${y + r} A${r},${r} 0 0 0 ${x + w - r},${y} H${x + r} A${r},${r} 0 0 0 ${x},${y + r} Z`;
}

const chassisPath = [
  roundedRectPath(HEAD.x, HEAD.y, HEAD.w, HEAD.h, HEAD.r),
  `M${CENTER_X - NECK_TOP_HALF_W},${NECK_TOP_Y} L${CENTER_X + NECK_TOP_HALF_W},${NECK_TOP_Y} L${CENTER_X + NECK_BOTTOM_HALF_W},${NECK_BOTTOM_Y} L${CENTER_X - NECK_BOTTOM_HALF_W},${NECK_BOTTOM_Y} Z`,
  roundedRectPath(BASE.x, BASE.y, BASE.w, BASE.h, BASE.r),
  // punched into the same path (nonzero fill-rule below) so the screen
  // opening is structurally a hole in the chassis, not a shape drawn on
  // top of it.
  roundedRectPathCCW(SCREEN.x, SCREEN.y, SCREEN.w, SCREEN.h, SCREEN.r),
].join(" ");

const screenLeftPct = (SCREEN.x / VIEWBOX_W) * 100;
const screenTopPct = (SCREEN.y / VIEWBOX_H) * 100;
const screenWidthPct = (SCREEN.w / VIEWBOX_W) * 100;
const screenHeightPct = (SCREEN.h / VIEWBOX_H) * 100;

export function RetroComputer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[607px] w-full max-w-[480px] items-center justify-center [perspective:2200px]">
      <div
        className="relative h-full w-full"
        style={{ transform: "rotateX(1.5deg) rotateY(-2.5deg)", transformStyle: "preserve-3d" }}
      >
        <svg
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="chassisGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={CREAM_LIGHT} />
              <stop offset="1" stopColor={CREAM_DARK} />
            </linearGradient>
          </defs>
          <path d={chassisPath} fill="url(#chassisGrad)" fillRule="nonzero" />
          {/* screen lip — a stroke straddling the cutout edge reads as a recessed border */}
          <rect
            x={SCREEN.x}
            y={SCREEN.y}
            width={SCREEN.w}
            height={SCREEN.h}
            rx={SCREEN.r}
            fill="none"
            stroke={SCREEN_LIP}
            strokeWidth={8}
          />
          {/* bezel accent buttons, bottom-right of the head, below the screen */}
          <rect x={HEAD.x + HEAD.w - 70} y={HEAD.y + HEAD.h - 24} width={18} height={10} fill={ACCENT} rx={2} />
          <rect x={HEAD.x + HEAD.w - 42} y={HEAD.y + HEAD.h - 24} width={18} height={10} fill={ACCENT} rx={2} />
          {/* disk-drive detail on the base front face */}
          <rect x={BASE.x + 60} y={BASE.y + 55} width={200} height={14} fill={CREAM_DARK} rx={4} />
          <rect x={BASE.x + 72} y={BASE.y + 57} width={30} height={10} fill={ACCENT} rx={2} />
        </svg>
        <div
          className="absolute flex flex-col gap-3 overflow-hidden"
          style={{
            left: `${screenLeftPct}%`,
            top: `${screenTopPct}%`,
            width: `${screenWidthPct}%`,
            height: `${screenHeightPct}%`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
