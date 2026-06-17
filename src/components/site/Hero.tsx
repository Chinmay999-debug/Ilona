import heroImg from "@/assets/hero-clinic.jpg";
import { Butterfly } from "./Butterfly";
import { CallChooser } from "./CallChooser";

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
            Precision care for{" "}
            <span className="italic text-burgundy">every hormone</span>,
            every layer of skin.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Ilona Clinic brings specialist endocrinology and expert
            dermatology under one roof in Indiranagar, Bengaluru, with
            personal, evidence-based care.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Book a Consultation
            </a>
            <CallChooser />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full border border-beige" />
            <img
              src={heroImg}
              alt="Ilona Clinic interior in Indiranagar, Bengaluru"
              className="relative h-full w-full object-cover"
              width={896}
              height={1120}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
