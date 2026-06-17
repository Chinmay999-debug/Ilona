import { Butterfly } from "./Butterfly";

const items = [
  "Endocrinology",
  "Diabetes",
  "Thyroid",
  "PCOS",
  "GLP-1 Therapy",
  "Dermatology",
  "Acne & Scars",
  "Pigmentation",
  "Hair Restoration",
  "Melanocyte Grafting",
  "Hydrafacial",
  "Vitiligo",
];

export function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-border bg-background py-6"
    >
      <div className="flex animate-[ilona-marquee_42s_linear_infinite] whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-10 font-display text-2xl italic text-ink/80 lg:text-3xl"
          >
            {item}
            <Butterfly className="h-4 w-5 text-beige" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ilona-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
