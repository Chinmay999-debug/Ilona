/**
 * HeroVisual — "Metamorphosis"
 *
 * A bespoke, dependency-free animated panel that unifies ilona's two
 * specialties inside one quiet, premium composition:
 *
 *   • a luminous line-art butterfly — the emblem of transformation & renewal —
 *     as the single focal point (burgundy, the darkest mark on the panel);
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

const BURGUNDY = "#66172D";
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

/* The right half of the butterfly (mirrored to form the left). Body axis x=220. */
const FOREWING =
  "M224 174 C250 118 302 104 334 130 C356 148 350 185 320 199 C294 211 246 204 226 196 Z";
const HINDWING =
  "M226 200 C266 206 300 222 306 252 C310 281 285 301 259 294 C241 289 224 272 224 248 C224 230 222 214 226 200 Z";
const VEINS = [
  "M232 192 C266 176 300 154 324 134",
  "M234 196 C264 190 294 182 318 172",
  "M230 246 C262 252 288 266 302 285",
  "M232 256 C256 264 278 278 290 295",
];

/** One butterfly wing (forewing + hindwing + veins + eyespots), reused mirrored. */
const Wing = (
  <>
    {/* Luminous translucent wash — brighter near the body, fading to the tips */}
    <path className="hv-spot" style={{ animationDelay: "2.4s" }} fill="url(#hvWing)" d={FOREWING} />
    <path className="hv-spot" style={{ animationDelay: "2.5s" }} fill="url(#hvWing)" d={HINDWING} />
    {/* Drawn outlines */}
    <path
      className="hv-draw"
      pathLength={1}
      style={{ animationDelay: "1.65s" }}
      stroke={BURGUNDY}
      strokeWidth={2}
      d={FOREWING}
    />
    <path
      className="hv-draw"
      pathLength={1}
      style={{ animationDelay: "1.8s" }}
      stroke={BURGUNDY}
      strokeWidth={2}
      d={HINDWING}
    />
    {VEINS.map((d, i) => (
      <path
        key={d}
        className="hv-draw"
        pathLength={1}
        style={{ animationDelay: `${2.05 + i * 0.08}s` }}
        stroke={COPPER}
        strokeWidth={1}
        opacity={0.75}
        d={d}
      />
    ))}
    <circle
      className="hv-spot"
      style={{ animationDelay: "2.5s" }}
      cx={300}
      cy={152}
      r={4.5}
      fill={GOLD}
    />
    <circle
      className="hv-spot"
      style={{ animationDelay: "2.55s" }}
      cx={300}
      cy={152}
      r={1.8}
      fill={BURGUNDY}
    />
    <circle
      className="hv-spot"
      style={{ animationDelay: "2.6s" }}
      cx={286}
      cy={262}
      r={3}
      fill={COPPER}
    />
  </>
);

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

        /* The butterfly lives, then breathes */
        .hv-bfly{transform-box:fill-box;transform-origin:50% 46%;animation:hvFloat 9s ease-in-out 3s infinite;}
        .hv-wing{transform-box:fill-box;transform-origin:left center;animation:hvFlutter 6s ease-in-out 3s infinite;}
        .hv-mote{opacity:0;animation:hvDrift var(--d,9s) ease-in-out var(--t,3s) infinite;}

        @keyframes hvDraw{to{stroke-dashoffset:0;}}
        @keyframes hvFade{to{opacity:1;}}
        @keyframes hvFlowIn{to{opacity:.85;}}
        @keyframes hvFlow{to{stroke-dashoffset:-150;}}
        @keyframes hvFloat{0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-7px) scale(1.012);}}
        @keyframes hvFlutter{0%,100%{transform:scaleX(1);}50%{transform:scaleX(.9);}}
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
          .hv-cells,.hv-spot,.hv-node{opacity:1 !important;}
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
          <radialGradient id="hvWing" gradientUnits="userSpaceOnUse" cx={220} cy={202} r={140}>
            <stop offset="0%" stopColor={GOLD} stopOpacity={0.34} />
            <stop offset="55%" stopColor={GOLD} stopOpacity={0.13} />
            <stop offset="100%" stopColor={GOLD} stopOpacity={0} />
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

        {/* The butterfly — focal transformation */}
        <g className="hv-bfly">
          <g className="hv-wing">{Wing}</g>
          <g transform="translate(440,0) scale(-1,1)">
            <g className="hv-wing">{Wing}</g>
          </g>

          {/* Body, head & antennae (centred — do not flutter) */}
          <g>
            <path
              className="hv-draw"
              pathLength={1}
              style={{ animationDelay: "1.55s" }}
              stroke={BURGUNDY}
              strokeWidth={2}
              fill={BURGUNDY}
              d="M220 156 C225 168 226 202 223 240 C222 260 221 282 220 298 C219 282 218 260 217 240 C214 202 215 168 220 156 Z"
            />
            <circle
              cx={220}
              cy={150}
              r={6}
              fill={BURGUNDY}
              className="hv-spot"
              style={{ animationDelay: "1.5s" }}
            />
            <path
              className="hv-draw"
              pathLength={1}
              style={{ animationDelay: "2.35s" }}
              stroke={BURGUNDY}
              strokeWidth={1.6}
              d="M222 147 C234 128 250 117 263 113"
            />
            <path
              className="hv-draw"
              pathLength={1}
              style={{ animationDelay: "2.35s" }}
              stroke={BURGUNDY}
              strokeWidth={1.6}
              d="M218 147 C206 128 190 117 177 113"
            />
            <circle
              className="hv-spot"
              style={{ animationDelay: "2.7s" }}
              cx={263}
              cy={113}
              r={2.6}
              fill={BURGUNDY}
            />
            <circle
              className="hv-spot"
              style={{ animationDelay: "2.7s" }}
              cx={177}
              cy={113}
              r={2.6}
              fill={BURGUNDY}
            />
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
