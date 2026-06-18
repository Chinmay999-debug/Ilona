import logoMark from "@/assets/logo-ilona-mark.svg";
import logoFull from "@/assets/logo-ilona.svg";

/**
 * Official ilona logo (vector, from the brand guidelines).
 * - `variant="mark"`  → wordmark + butterfly, no tagline (compact, for the navbar).
 * - `variant="full"`  → full lockup incl. "skin & hair clinic" tagline.
 * - `onDark`          → places the logo on an even light background, per the brand
 *                       note ("ilona logo → even background"), so it reads on dark sections.
 */
export function Wordmark({
  variant = "mark",
  onDark = false,
  className = "",
}: {
  variant?: "mark" | "full";
  onDark?: boolean;
  className?: string;
}) {
  const src = variant === "full" ? logoFull : logoMark;
  const ratio = variant === "full" ? 353.3 / 218 : 353.3 / 174.2;

  const img = (
    <img
      src={src}
      alt="ilona skin & hair clinic"
      className={`w-auto ${onDark ? "h-9" : className || "h-9"}`}
      style={{ aspectRatio: ratio }}
      draggable={false}
    />
  );

  if (onDark) {
    return (
      <span
        className={`inline-flex items-center rounded-xl bg-[#F4E9D8] px-4 py-3 shadow-sm ${className}`}
      >
        {img}
      </span>
    );
  }

  return img;
}
