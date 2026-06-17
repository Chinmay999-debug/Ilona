import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";

const pillars = [
  {
    n: "I",
    title: "Evidence, first.",
    body: "Every protocol is grounded in current, peer-reviewed medicine. No trends, no pressure, no packages.",
  },
  {
    n: "II",
    title: "Time, given generously.",
    body: "Consultations are unhurried. We listen, examine and explain, because good care depends on understanding the full picture first.",
  },
  {
    n: "III",
    title: "One plan, your plan.",
    body: "Treatment is built around your physiology, your goals and your life. Never copy-pasted from a chart.",
  },
];

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-36">
      <Butterfly className="pointer-events-none absolute -right-24 top-10 hidden h-[420px] w-[520px] text-burgundy opacity-[0.04] lg:block" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-6 flex items-center gap-3">
              <Butterfly className="h-3 w-4 text-beige" />
              Our Philosophy
            </p>
            <h2 className="display-lg text-ink">
              The way we <span className="italic">practise medicine</span>.
            </h2>
          </Reveal>
          <Reveal className="hidden lg:col-span-5 lg:col-start-8 lg:block" delay={0.1}>
            <p className="text-muted-foreground lg:text-lg">
              Three small commitments that shape every consultation at Ilona,
              from the first question we ask to the last note we write.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.08}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-cream lg:p-14"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl italic text-beige transition-colors duration-500 group-hover:text-burgundy lg:text-6xl">
                  {p.n}
                </span>
                <Butterfly className="h-5 w-6 text-beige opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="display-md mt-10 text-ink">{p.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <div className="mt-10 h-px w-12 bg-burgundy transition-[width] duration-500 group-hover:w-24" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
