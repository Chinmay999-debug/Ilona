import type { SVGProps } from "react";
import { BRAND_BUTTERFLY_PATHS, BRAND_BUTTERFLY_VIEWBOX } from "./butterfly-geometry";

/**
 * The ilona butterfly — derived from the official brand logo (brand guidelines).
 * Single-colour line art using `currentColor`, so it tints with text-* utilities
 * and respects opacity for the soft background watermarks across the site.
 * The path geometry lives in `butterfly-geometry.ts` so the hero visual can
 * reuse the exact same logo shape.
 */
export function Butterfly({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={BRAND_BUTTERFLY_VIEWBOX}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {BRAND_BUTTERFLY_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
