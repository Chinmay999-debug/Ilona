import { ArrowRight, Phone } from "lucide-react";
import drKunal from "@/assets/dr-kunal.jpg";
import drPournami from "@/assets/dr-pournami.jpg";
import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";

type Doc = {
  name: string;
  credentials: string;
  tag: string;
  bio: string;
  interests: string[];
  img: string;
  alt: string;
  phone: string;
  phoneDisplay: string;
};

const doctors: Doc[] = [
  {
    name: "Dr. Pournami P",
    credentials: "MBBS · MD (Dermatology)",
    tag: "Clinical & Aesthetic Dermatology",
    bio: "A firm believer that every skin journey is unique, Dr. Pournami P combines her passion for dermatology with a keen eye for detail to provide care that is both thoughtful & transformative.",
    interests: [
      "Vitiligo treatment & surgery",
      "Acne & acne scar management",
      "Pigmentation disorders",
      "Hair loss treatment",
      "Aesthetic dermatology",
    ],
    img: drPournami,
    alt: "Portrait of Dr. Pournami P, Dermatologist at ilona Clinic",
    phone: "+919901345153",
    phoneDisplay: "+91 99013 45153",
  },
  {
    name: "Dr. Kunal Gupta",
    credentials: "MBBS · MD (Internal Medicine) · DM (Endocrinology)",
    tag: "Endocrinology & Metabolic Health",
    bio: "Dr. Kunal Gupta is a DM-qualified endocrinologist with deep experience in diabetes, thyroid disorders, obesity, PCOS, osteoporosis and other complex hormonal conditions. He works with the latest in metabolic medicine, including GIP/GLP-1 receptor agonists, and is known for taking the time to get each patient's treatment right.",
    interests: [
      "Diabetes management",
      "Thyroid disorders",
      "Obesity & metabolic health",
      "PCOS & hormonal health",
      "Bone health & osteoporosis",
    ],
    img: drKunal,
    alt: "Portrait of Dr. Kunal Gupta, Endocrinologist at ilona Clinic",
    phone: "+919686629759",
    phoneDisplay: "+91 96866 29759",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-background py-20 lg:py-40">
      <Butterfly className="pointer-events-none absolute -left-32 top-32 hidden h-[520px] w-[620px] text-burgundy opacity-[0.035] lg:block" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6 flex items-center gap-3">
              <Butterfly className="h-3 w-4 text-beige" />
              Our Specialists
            </p>
            <h2 className="display-lg text-ink">
              Meet the <span className="italic text-burgundy">experts</span> behind
              your journey.
            </h2>
          </Reveal>
          <Reveal className="hidden lg:col-span-5 lg:block" delay={0.1}>
            <p className="font-display text-2xl italic leading-snug text-ink lg:text-right lg:text-[1.75rem]">
              Expertise You Can{" "}
              <span className="text-burgundy">Trust</span>.
              <br />
              Care You Can <span className="text-burgundy">Feel</span>.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-16 lg:mt-32 lg:space-y-48">
          {doctors.map((doc, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={doc.name}
                className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-20"
              >
                <Reveal
                  className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative">
                    {/* Floating gold frame — desktop only */}
                    <div
                      className={`pointer-events-none absolute hidden h-full w-full border border-beige lg:block ${
                        reverse ? "-right-8 -top-8" : "-left-8 -top-8"
                      }`}
                    />
                    {/* Burgundy backdrop block — desktop only */}
                    <div
                      className={`pointer-events-none absolute hidden h-[60%] w-1/2 bg-burgundy lg:block ${
                        reverse ? "-left-10 bottom-[-2rem]" : "-right-10 bottom-[-2rem]"
                      } opacity-90`}
                    />
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={doc.img}
                        alt={doc.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-[1200ms] hover:scale-[1.02]"
                        width={896}
                        height={1216}
                      />
                      {/* Doctor details — written vertically on the right side */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center lg:flex">
                        <span className="flex items-center gap-3 bg-burgundy/90 px-2.5 py-5 text-[0.7rem] uppercase tracking-[0.28em] text-[#F4E9D8] [writing-mode:vertical-rl]">
                          {doc.name}
                          <span className="h-1 w-1 rounded-full bg-beige" />
                          {doc.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                </Reveal>

                <div
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <Reveal delay={0.05}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-burgundy/30 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-burgundy">
                      <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                      {doc.tag}
                    </span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h3 className="display-md mt-6 text-ink">{doc.name}</h3>
                    <p className="mt-3 text-sm tracking-wide text-muted-foreground">
                      {doc.credentials}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 lg:text-[1.05rem]">
                      {doc.bio}
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8 max-w-xl">
                      <p className="eyebrow mb-4 text-beige">Special Interests</p>
                      <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                        {doc.interests.map((it) => (
                          <li
                            key={it}
                            className="flex items-center gap-3 text-sm text-foreground/80"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                  <Reveal delay={0.22}>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <a href="#contact" className="btn-primary group">
                        Book a Consultation
                        <ArrowRight
                          size={16}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                      <a
                        href={`tel:${doc.phone}`}
                        className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-burgundy/40 px-7 py-[0.95rem] text-sm tracking-[0.06em] text-burgundy transition-all duration-300 hover:border-burgundy hover:bg-burgundy hover:text-white"
                      >
                        <Phone
                          size={16}
                          strokeWidth={1.6}
                          className="transition-transform duration-300 group-hover:rotate-12"
                        />
                        Call
                      </a>
                    </div>
                  </Reveal>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
