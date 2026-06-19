import logoMark from "@/assets/logo-ilona-mark.png";

/**
 * Official ilona logo.
 *
 * The wordmark + butterfly are the client's exact logo artwork
 * (`logo-ilona-mark.png`). The "Speciality Clinic" tagline is set as crisp live
 * text beneath it — a tagline baked into the artwork shrinks to an illegible
 * smudge at navbar/footer size — styled copper with flanking rules to match the
 * logo lockup.
 *
 * - `variant="full"` → wordmark + tagline (navbar, footer).
 * - `variant="mark"` → wordmark only (compact menu).
 * - `onDark`         → light card so the burgundy logo reads on dark sections
 *                      (the footer is near-black). The artwork is never altered.
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
  const mark = (
    <img
      src={logoMark}
      alt="ilona speciality clinic"
      className={`w-auto ${variant === "full" ? "h-9" : "h-8"}`}
      draggable={false}
    />
  );

  const lockup =
    variant === "full" ? (
      <span className="inline-flex flex-col items-center">
        {mark}
        <span className="mt-1 flex w-full items-center gap-[2px]" aria-hidden="true">
          <span className="h-px flex-1 bg-beige" />
          <span className="whitespace-nowrap font-sans text-[5px] font-medium uppercase leading-none tracking-[0.08em] text-beige">
            Speciality Clinic
          </span>
          <span className="h-px flex-1 bg-beige" />
        </span>
      </span>
    ) : (
      mark
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

  return className ? <span className={className}>{lockup}</span> : lockup;
}
