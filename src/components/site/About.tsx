import { MapPin } from "lucide-react";
import aboutImg from "@/assets/about-clinic.jpg";
import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";
import { CLINIC_MAPS_URL } from "./contacts";

export function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-[78vh]">
            <img
              src={aboutImg}
              alt="Warm, refined interior at ilona Clinic"
              loading="lazy"
              className="h-full w-full object-cover"
              width={896}
              height={1216}
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pt-12">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <Butterfly className="h-3 w-4 text-beige" />
              <span>
                About <span className="normal-case">ilona</span>
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg text-ink">
              Two Specialties. <br />
              <span className="italic">One Commitment</span> to Your Health.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground lg:text-[1.05rem]">
              <p>
                Every patient has a unique story &amp; every treatment plan
                should be just as unique. At ilona we listen, understand &amp;
                create personalized solutions that support balanced hormones,
                healthy skin &amp; a better quality of life.
              </p>
              <p>
                We're based in Indiranagar, Bengaluru, where we practise
                evidence-based medicine with warmth and plain, honest
                explanations for everyone we treat.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={CLINIC_MAPS_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open ilona Clinic location in Google Maps"
              className="mt-12 inline-flex items-start gap-3 text-sm text-beige transition-colors hover:text-burgundy"
            >
              <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                #2285, 14th Main, HAL 2nd Stage, Indiranagar, Bengaluru 560 008
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
