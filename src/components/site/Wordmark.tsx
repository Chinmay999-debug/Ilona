import { Butterfly } from "./Butterfly";

export function Wordmark({
  tone = "burgundy",
  className = "",
}: {
  tone?: "burgundy" | "cream";
  className?: string;
}) {
  const color = tone === "burgundy" ? "text-burgundy" : "text-[#F4E9D8]";
  return (
    <div className={`flex items-center gap-2 ${color} ${className}`}>
      <Butterfly className="h-6 w-7" />
      <span
        className="font-display text-2xl tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        ilona<span className="align-super text-[0.5em]">®</span>
      </span>
    </div>
  );
}
