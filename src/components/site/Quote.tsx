import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-28 text-[#F4E9D8] lg:py-36">
      <Butterfly className="pointer-events-none absolute -left-20 -bottom-20 h-[480px] w-[560px] text-[#F4E9D8] opacity-[0.06]" />
      <Butterfly className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[500px] text-[#F4E9D8] opacity-[0.04]" />

      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-beige">
            The Ilona Promise
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="mt-10 font-display text-3xl leading-[1.18] text-[#F8EFDD] sm:text-4xl lg:text-[3.5rem]">
            <span className="font-display text-6xl italic text-beige">"</span>
            Good care begins with listening properly: to your symptoms, your
            story, and the small details a busy clinic tends to miss.
            <span className="font-display text-6xl italic text-beige">"</span>
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 h-px w-16 bg-beige" />
          <p className="mt-6 text-sm tracking-[0.16em] text-beige">
            DRS. KUNAL GUPTA &amp; POURNAMI P
          </p>
        </Reveal>
      </div>
    </section>
  );
}
