import logoMark from "@/assets/logo-ilona-mark.svg";

/**
 * Official ilona logo.
 * - `variant="mark"`  → wordmark + butterfly only (compact).
 * - `variant="full"`  → adds the "Speciality Clinic" tagline.
 * - `onDark`          → wraps the lockup in a light card so the burgundy wordmark
 *                       reads on dark sections.
 *
 * The tagline is rendered as live text (not baked into the artwork): scaled down to
 * navbar/footer size the vector tagline becomes a ~2px illegible smudge, so we draw
 * the wordmark+butterfly from the SVG and set the tagline in DM Sans copper beneath it.
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
  const img = (
    <img
      src={logoMark}
      alt="ilona speciality clinic"
      className={`w-auto ${variant === "full" ? "h-11" : "h-9"}`}
      draggable={false}
    />
  );

  const lockup =
    variant === "full" ? (
      <span className="inline-flex flex-col items-center">
        {img}
        <span
          className="mt-[3px] flex w-full items-center gap-[5px]"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-beige/70" />
          <span className="whitespace-nowrap font-sans text-[7px] font-medium uppercase leading-none tracking-[0.16em] text-beige">
            Speciality Clinic
          </span>
          <span className="h-px flex-1 bg-beige/70" />
        </span>
      </span>
    ) : (
      img
    );

  if (onDark) {
    return (
      <span
        className={`inline-flex items-center rounded-xl bg-[#F4E9D8] px-4 py-3 shadow-sm ${className}`}
      >
        {lockup}
      </span>
    );
  }

  return lockup;
}
