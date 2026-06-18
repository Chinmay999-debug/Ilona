import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";

/**
 * "The Meaning Behind the Name" — the origin of the name ilona
 * (Greek & Hungarian for "light"/"radiance"), presented as a brand statement.
 */
export function NameMeaning() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-20 text-[#F4E9D8] lg:py-32">
      <Butterfly className="pointer-events-none absolute -right-24 -top-20 hidden h-[480px] w-[560px] text-[#F4E9D8] opacity-[0.05] lg:block" />
      <Butterfly className="pointer-events-none absolute -left-28 -bottom-24 h-[360px] w-[440px] text-[#F4E9D8] opacity-[0.04]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-20">
          <Reveal className="lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-beige">
              <Butterfly className="h-3 w-4 text-beige" />
              The Meaning Behind the Name
            </p>
            <h2 className="mt-7 font-display text-4xl leading-[1.12] text-white sm:text-5xl lg:text-[3.75rem]">
              A name that means{" "}
              <span className="italic text-beige">light</span> &amp;{" "}
              <span className="italic text-beige">radiance</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <p className="text-lg leading-relaxed text-[#F4E9D8]/85 lg:text-xl">
              <span className="font-medium text-white">ilona</span> has roots in
              both Greek and Hungarian. It perfectly embodies the clinic's
              mission: to illuminate beauty, restore confidence and enhance
              natural aesthetics, helping every client shine with a newfound
              radiance and bringing out their true beauty.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
