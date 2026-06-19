/**
 * HeroVisual — "Metamorphosis"
 *
 * A bespoke, dependency-free animated panel that unifies ilona's two
 * specialties inside one quiet, premium composition:
 *
 *   • the ilona logo butterfly (full colour mark, side profile) — wings, mauve
 *     panels & eyespots intact — as the single luminous focal point;
 *   • a faint hexagonal skin-cell network behind it  → dermatology;
 *   • flowing copper signalling pathways with molecule nodes → endocrinology;
 *   • graceful botanical sprigs framing the base;
 *   • soft gold ambient particles drifting up through warm light.
 *
 * Everything is authored as inline SVG + CSS — no photos, no icon packs, no
 * libraries. On load the scene "draws itself" in staged layers (cells settle,
 * pathways trace and begin to pulse, botanicals grow, the butterfly emerges and
 * then breathes). Honours prefers-reduced-motion by presenting the finished
 * drawing with all motion stilled.
 *
 * Palette is brand-locked: burgundy #66172D, copper #B07B43, gold #C49A6C,
 * mauve #B79480 — over a warm cream→gold gradient.
 */
import { BRAND_BUTTERFLY_MARK } from "./butterfly-geometry";

const COPPER = "#B07B43";
const GOLD = "#C49A6C";
const MAUVE = "#B79480";

/** Pointy-top hexagon points for the skin-cell mesh. */
function hex(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

/* Dermatology — a loose cluster of "cells" (upper-left), with a faint echo
   on the right so the motif frames the butterfly rather than sitting in a box. */
const CELLS = [
  { x: 74, y: 116, r: 30 },
  { x: 122, y: 138, r: 25 },
  { x: 58, y: 168, r: 24 },
  { x: 104, y: 188, r: 27 },
  { x: 150, y: 168, r: 19 },
  { x: 92, y: 86, r: 17 },
  { x: 376, y: 246, r: 27 },
  { x: 404, y: 210, r: 19 },
  { x: 356, y: 206, r: 16 },
];

/* Endocrinology — flowing signalling pathways that sweep around the butterfly. */
const PATHWAYS = [
  "M-10 470 C 90 446 150 360 214 332 C 290 300 330 214 452 196",
  "M-8 372 C 96 380 156 322 214 250 C 276 174 348 210 452 150",
  "M30 540 C 132 486 196 442 244 372 C 286 312 360 318 452 356",
];

/* Molecule nodes that ride along those pathways. */
const NODES = [
  { x: 150, y: 360, r: 3.4, fill: true },
  { x: 96, y: 380, r: 2.4, fill: false },
  { x: 330, y: 214, r: 3, fill: false },
  { x: 348, y: 210, r: 2.6, fill: true },
  { x: 244, y: 372, r: 3.2, fill: false },
  { x: 360, y: 318, r: 2.4, fill: true },
  { x: 214, y: 250, r: 2.6, fill: false },
];

/* Soft gold particles — varied size / start / cadence for an organic drift. */
const MOTES = [
  { x: 168, y: 250, r: 2.2, dur: 7.5, delay: 2.4 },
  { x: 300, y: 150, r: 1.7, dur: 9, delay: 3.1 },
  { x: 250, y: 110, r: 1.5, dur: 8, delay: 3.6 },
  { x: 130, y: 300, r: 2, dur: 10, delay: 2.9 },
  { x: 330, y: 280, r: 1.6, dur: 8.5, delay: 4 },
  { x: 200, y: 330, r: 1.4, dur: 9.5, delay: 3.3 },
  { x: 350, y: 120, r: 1.8, dur: 11, delay: 4.4 },
  { x: 90, y: 240, r: 1.5, dur: 8.8, delay: 2.6 },
  { x: 280, y: 340, r: 1.3, dur: 10.5, delay: 4.8 },
];

/* Places the logo butterfly (mark bbox centre ≈ 559.565,237.97) into the
   panel's 0–440 × 0–550 space: centred at (220,198), scaled ~2×. */
const BUTTERFLY_TRANSFORM = "translate(220 198) scale(2) translate(-559.565 -237.97)";

export function HeroVisual() {
  return (
    <div className="hv relative aspect-[4/5] w-full overflow-hidden rounded-[20px] ring-1 ring-burgundy/5">
      <style>{`
        .hv{background:linear-gradient(158deg,#FBF4EA 0%,#F3E4D2 56%,#EAD3BC 100%);}
        .hv-halo{position:absolute;left:50%;top:36%;width:62%;height:48%;transform:translate(-50%,-50%);
          background:radial-gradient(closest-side,rgba(212,176,138,.34),rgba(212,176,138,0));
          filter:blur(16px);pointer-events:none;animation:hvHalo 9s ease-in-out 2.5s infinite;}
        .hv-vignette{position:absolute;inset:0;pointer-events:none;
          background:radial-gradient(125% 105% at 50% 34%,transparent 56%,rgba(74,15,30,.07) 100%);}
        .hv-svg{position:absolute;inset:0;width:100%;height:100%;}

        /* Layer reveals */
        .hv-cells{opacity:0;animation:hvFade 2.2s ease .25s forwards;}
        .hv-cells .nuc{animation:hvTwinkle 5s ease-in-out infinite;}
        .hv-draw{stroke-dasharray:1;stroke-dashoffset:1;animation:hvDraw 1.7s cubic-bezier(.4,0,.2,1) forwards;}
        .hv-spot{opacity:0;animation:hvFade 1s ease forwards;}
        .hv-node{opacity:0;animation:hvFade 1.1s ease forwards;}
        .hv-flow{stroke-dasharray:3 12;stroke-dashoffset:0;opacity:0;
          animation:hvFlowIn 1.2s ease forwards,hvFlow 7s linear infinite;}

        /* The butterfly settles into light, then drifts as if mid-flight */
        .hv-bfly{opacity:0;transform-box:fill-box;transform-origin:50% 56%;
          animation:hvFade 1.4s ease 1.9s forwards,hvFloat 9s ease-in-out 3.1s infinite;}
        .hv-mote{opacity:0;animation:hvDrift var(--d,9s) ease-in-out var(--t,3s) infinite;}

        @keyframes hvDraw{to{stroke-dashoffset:0;}}
        @keyframes hvFade{to{opacity:1;}}
        @keyframes hvFlowIn{to{opacity:.85;}}
        @keyframes hvFlow{to{stroke-dashoffset:-150;}}
        @keyframes hvFloat{0%,100%{transform:translateY(0) rotate(0deg) scale(1);}50%{transform:translateY(-8px) rotate(-2deg) scale(1.015);}}
        @keyframes hvHalo{0%,100%{opacity:.85;transform:translate(-50%,-50%) scale(1);}50%{opacity:1;transform:translate(-50%,-50%) scale(1.06);}}
        @keyframes hvTwinkle{0%,100%{opacity:.35;}50%{opacity:.85;}}
        @keyframes hvDrift{
          0%{opacity:0;transform:translateY(8px);}
          18%{opacity:.85;}
          80%{opacity:.45;}
          100%{opacity:0;transform:translateY(-26px);}
        }

        @media (prefers-reduced-motion: reduce){
          .hv *{animation:none !important;}
          .hv-draw{stroke-dashoffset:0 !important;}
          .hv-cells,.hv-spot,.hv-node,.hv-bfly{opacity:1 !important;}
          .hv-flow{opacity:.7 !important;}
          .hv-mote{opacity:.5 !important;transform:none !important;}
        }
      `}</style>

      <span className="hv-halo" aria-hidden="true" />

      <svg
        className="hv-svg"
        viewBox="0 0 440 550"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="hvLight" gradientUnits="userSpaceOnUse" cx={216} cy={196} r={132}>
            <stop offset="0%" stopColor="#FFFCF7" stopOpacity={0.72} />
            <stop offset="55%" stopColor="#FFFCF7" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#FFFCF7" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* Emergence aura — faint concentric rings the butterfly rises from */}
        <g stroke={COPPER} opacity={0.12}>
          <circle cx={220} cy={205} r={118} />
          <circle cx={220} cy={205} r={150} strokeDasharray="2 8" />
        </g>

        {/* Dermatology — skin-cell network */}
        <g className="hv-cells">
          {CELLS.map((c) => (
            <g key={`${c.x}-${c.y}`}>
              <polygon points={hex(c.x, c.y, c.r)} stroke={MAUVE} strokeWidth={1} opacity={0.42} />
              <circle className="nuc" cx={c.x} cy={c.y} r={1.7} fill={GOLD} />
            </g>
          ))}
        </g>

        {/* Endocrinology — flowing signalling pathways + travelling pulse */}
        <g>
          {PATHWAYS.map((d, i) => (
            <path
              key={d}
              className="hv-draw"
              pathLength={1}
              style={{ animationDelay: `${0.5 + i * 0.25}s` }}
              stroke={COPPER}
              strokeWidth={1.2}
              opacity={0.5}
              d={d}
            />
          ))}
          {PATHWAYS.map((d, i) => (
            <path
              key={`flow-${d}`}
              className="hv-flow"
              style={{ animationDelay: `${2 + i * 0.3}s, ${2 + i * 0.3}s` }}
              stroke={GOLD}
              strokeWidth={1.6}
              d={d}
            />
          ))}
          {NODES.map((n) => (
            <circle
              key={`${n.x}-${n.y}`}
              className="hv-node"
              style={{ animationDelay: "2.2s" }}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.fill ? GOLD : "none"}
              stroke={COPPER}
              strokeWidth={n.fill ? 0 : 1.1}
            />
          ))}
        </g>

        {/* Botanical sprigs framing the base */}
        <g stroke={COPPER} strokeWidth={1.5}>
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "0.9s" }}
            d="M70 545 C58 480 74 432 96 396 C104 382 110 366 110 350"
          />
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1.2s" }}
            d="M88 470 C66 470 52 452 54 432 C76 432 90 450 90 470 Z"
          />
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1.3s" }}
            d="M100 432 C120 430 134 444 132 464 C112 464 100 450 100 432 Z"
          />
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1.4s" }}
            d="M104 398 C86 396 74 380 76 362 C94 364 106 380 104 398 Z"
          />
          <circle
            className="hv-spot"
            style={{ animationDelay: "1.9s" }}
            cx={110}
            cy={348}
            r={3}
            fill={GOLD}
            stroke="none"
          />

          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1s" }}
            d="M372 545 C384 488 370 446 350 412 C342 398 336 384 338 370"
          />
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1.3s" }}
            d="M356 474 C378 476 392 460 390 440 C368 438 354 454 356 474 Z"
          />
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1.4s" }}
            d="M342 440 C322 440 308 426 310 406 C330 406 344 422 342 440 Z"
          />
          <path
            className="hv-draw"
            pathLength={1}
            style={{ animationDelay: "1.5s" }}
            d="M340 404 C360 404 374 390 372 370 C352 370 338 386 340 404 Z"
          />
          <circle
            className="hv-spot"
            style={{ animationDelay: "2s" }}
            cx={338}
            cy={368}
            r={3}
            fill={GOLD}
            stroke="none"
          />
        </g>

        {/* Soft light the butterfly rests on — lets the logo's cream wings read */}
        <ellipse
          className="hv-spot"
          style={{ animationDelay: "1.5s" }}
          cx={216}
          cy={196}
          rx={120}
          ry={120}
          fill="url(#hvLight)"
        />

        {/* The ilona logo butterfly (full colour mark, side profile) — focal point */}
        <g className="hv-bfly">
          <g transform={BUTTERFLY_TRANSFORM}>
            {BRAND_BUTTERFLY_MARK.map((p) => (
              <path key={p.d} d={p.d} fill={p.fill} />
            ))}
          </g>
        </g>

        {/* Ambient particles */}
        <g fill={GOLD}>
          {MOTES.map((m) => (
            <circle
              key={`${m.x}-${m.y}`}
              className="hv-mote"
              style={{ ["--d" as string]: `${m.dur}s`, ["--t" as string]: `${m.delay}s` }}
              cx={m.x}
              cy={m.y}
              r={m.r}
            />
          ))}
        </g>
      </svg>

      <span className="hv-vignette" aria-hidden="true" />
    </div>
  );
}
