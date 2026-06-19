import { Activity, ArrowUpRight, Sparkles } from "lucide-react";
import { Butterfly } from "./Butterfly";
import { CallChooser } from "./CallChooser";
import { HeroVisual } from "./HeroVisual";

const specialties = [
  {
    title: "Endocrine & Wellness",
    items: "Thyroid · Diabetes · Hormonal health",
    icon: Activity,
  },
  {
    title: "Skin & Hair",
    items: "Acne · Pigmentation · Hair restoration",
    icon: Sparkles,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-24 lg:pt-32"
    >
      <Butterfly className="pointer-events-none absolute -right-40 top-10 hidden h-[520px] w-[620px] text-burgundy opacity-[0.04] lg:block" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:pb-24 animate-in fade-in duration-700">
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy" />
            <p className="eyebrow text-burgundy">
              Endocrinology · Dermatology
            </p>
          </div>

          <h1 className="display-xl text-ink">
            Redefining{" "}
            <span className="italic text-burgundy">Skin &amp; Hormonal Care</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Combining specialist dermatology &amp; endocrinology services, ilona
            offers patient-centered, evidence-based solutions to your health
            &amp; wellness journey.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Book a Consultation
            </a>
            <CallChooser />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-4 -translate-y-4 rounded-[20px] border border-beige"
            />
            <HeroVisual />

            <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2.5">
              {specialties.map((s) => (
                <a
                  key={s.title}
                  href="#services"
                  className="group flex items-center gap-3 rounded-2xl bg-cream/80 px-4 py-3 ring-1 ring-burgundy/10 backdrop-blur-md transition-colors hover:bg-cream"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-burgundy/[0.08] text-burgundy">
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] leading-tight text-burgundy">
                      {s.title}
                    </span>
                    <span className="block text-[11px] leading-tight text-ink/55">
                      {s.items}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-burgundy/40 transition group-hover:text-burgundy"
                    strokeWidth={1.6}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
