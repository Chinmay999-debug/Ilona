import heroImg from "@/assets/hero-clinic.jpg";
import butterfly from "@/assets/butterfly-brand.svg";
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
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full border border-beige" />
              <img
                src={heroImg}
                alt="ilona Clinic interior in Indiranagar, Bengaluru"
                className="relative h-full w-full object-cover"
                width={896}
                height={1120}
              />
            </div>

            {/* Brand butterfly stamp — the logo mark on an even background */}
            <div className="absolute -bottom-6 -right-6 grid h-24 w-24 place-items-center rounded-full bg-[#F4E9D8] shadow-xl shadow-burgundy/20 ring-1 ring-burgundy/10 lg:-bottom-8 lg:-right-8 lg:h-32 lg:w-32">
              <img
                src={butterfly}
                alt=""
                aria-hidden="true"
                className="h-12 w-12 lg:h-16 lg:w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
