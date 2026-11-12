/*
  Stacked gradient tiles that frame the home hero, taken from the Mannas hero with its colours
  (violet, pink and coral).
  Each tile is [x, y, w, h, from, to, angle] on a 310 × 737 grid, so a column scales as one piece.
*/
type Tile = [number, number, number, number, string, string, number];

const COL_W = 310;
const COL_H = 737;

const LEFT: Tile[] = [
  [0, 0, 310, 128, "#cf6ee6", "#9150f2", 100],
  [0, 128, 185, 127, "#b560c4", "#fa7465", 110],
  [0, 255, 47, 49, "#fa7465", "#fb8a72", 135],
  [0, 304, 91, 78, "#8e4cf0", "#9a58f2", 120],
  [0, 382, 58, 26, "#fba08f", "#fdb2a6", 90],
  [0, 408, 140, 148, "#a98af2", "#d8bcf8", 160],
  [0, 556, 224, 53, "#fe8d84", "#fba08f", 90],
  [0, 609, 310, 128, "#c46ee6", "#ff86d6 55%, #fba08f", 95],
];

const RIGHT: Tile[] = [
  [0, 0, 310, 128, "#fa7465", "#ff86d6 60%, #f77fe0", 100],
  [86, 128, 224, 53, "#fa7465", "#fb8068", 90],
  [170, 181, 140, 148, "#9a50f0", "#8a47e6", 160],
  [252, 329, 58, 26, "#fa7465", "#fb8070", 90],
  [219, 355, 91, 78, "#a560ec", "#b476f0", 120],
  [263, 433, 47, 49, "#fa7465", "#fb8a72", 135],
  [125, 482, 185, 127, "#fbb0a0", "#cd9ac8", 140],
  [0, 609, 310, 128, "#9a50f0", "#d6a8f6 50%, #ff86d6", 95],
];

const GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

/** A column of stacked, grainy gradient blocks. Decorative; scales with its container width. */
export function GradientTiles({ side, className = "" }: { side: "left" | "right"; className?: string }) {
  const tiles = side === "left" ? LEFT : RIGHT;
  return (
    <div aria-hidden className={`pointer-events-none relative ${className}`} style={{ aspectRatio: `${COL_W} / ${COL_H}` }}>
      {tiles.map(([x, y, w, h, from, to, angle], i) => (
        <span
          key={i}
          className="tile-in absolute overflow-hidden"
          style={{
            left: `${(x / COL_W) * 100}%`,
            top: `${(y / COL_H) * 100}%`,
            width: `${(w / COL_W) * 100}%`,
            height: `${(h / COL_H) * 100}%`,
            animationDelay: `${0.1 + i * 0.09}s`,
          }}
        >
          <span
            className="tile-drift absolute inset-0"
            style={{
              background: `linear-gradient(${angle}deg, ${from}, ${to})`,
              backgroundSize: "170% 170%",
              animationDuration: `${14 + (i % 4) * 3}s`,
            }}
          />
          <span className="absolute inset-0 opacity-[0.55] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
        </span>
      ))}
    </div>
  );
}
