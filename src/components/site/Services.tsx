import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";
import { ServiceModal, type Service } from "./ServiceModal";

const endocrine: Service[] = [
  {
    name: "Diabetes Management",
    desc: "Type 1, Type 2 and pancreatic diabetes, managed with a plan that fits your life",
    detail:
      "We help you keep diabetes steady over the long term, whether it's Type 1, Type 2 or diabetes after pancreatic problems. The plan is built around your readings, your routine and what's realistic for you.",
    points: [
      "Type 1, Type 2 and pancreatic diabetes",
      "Insulin and oral medication planning",
      "Continuous glucose monitoring (CGM) support",
      "Diet and lifestyle guidance",
      "Screening for nerve, kidney and eye complications",
    ],
  },
  {
    name: "Thyroid Disorders",
    desc: "Diagnosis and treatment for an under- or overactive thyroid, and thyroid cancer",
    detail:
      "An under- or overactive thyroid can affect your energy, weight, mood and heart. We find the cause and treat it properly, including thyroid nodules and cancer follow-up.",
    points: [
      "Hypothyroidism and hyperthyroidism",
      "Thyroid nodules and goitre",
      "Thyroid cancer diagnosis and follow-up",
      "Thyroid blood tests and scans",
      "Medication and dose adjustment",
    ],
  },
  {
    name: "Weight & Metabolic Health",
    desc: "Weight management, GLP-1 treatments and care for metabolic syndrome",
    detail:
      "Weight is rarely just about willpower. We look at the hormones and metabolism behind it, then put together a medical plan that works for your body.",
    points: [
      "Medical weight management",
      "GLP-1 and newer weight treatments",
      "Metabolic syndrome care",
      "Insulin resistance and pre-diabetes",
      "Nutrition and lifestyle support",
    ],
  },
  {
    name: "Hormonal & Reproductive Health",
    desc: "PCOS, fertility and reproductive hormones, and growth or puberty concerns",
    detail:
      "Hormones shape a lot of how you feel and how your body works. We treat imbalances that affect periods, fertility, growth and development, in both women and men.",
    points: [
      "PCOS diagnosis and management",
      "Fertility and reproductive hormone care",
      "Male hormone and infertility concerns",
      "Delayed or early puberty",
      "Period and cycle irregularities",
    ],
  },
  {
    name: "Bone Health",
    desc: "Osteoporosis, rickets and other hormone-related bone conditions",
    detail:
      "Bones stay strong with the right hormones, vitamins and treatment. We assess your bone density and treat the conditions that weaken it.",
    points: [
      "Osteoporosis and low bone density",
      "Rickets and vitamin D deficiency",
      "Calcium and parathyroid conditions",
      "Bone density (DEXA) interpretation",
      "Fracture-risk prevention",
    ],
  },
  {
    name: "General Endocrinology",
    desc: "Complex hormone problems, including pituitary and adrenal conditions",
    detail:
      "Some hormone problems are less common and need a specialist eye. We investigate and manage conditions across the pituitary, adrenal and other glands.",
    points: [
      "Pituitary conditions",
      "Adrenal gland disorders",
      "Excess or deficient hormone levels",
      "Unexplained fatigue or hormonal symptoms",
      "Second opinions on complex cases",
    ],
  },
];

const skin: Service[] = [
  {
    name: "Acne & Acne Scar Treatment",
    desc: "Acne and scarring treated with peels, microneedling, PRP, laser and subcision",
    detail:
      "We treat active acne and the scars it leaves behind, matching the approach to your skin and how deep the scarring goes. Most plans combine a few treatments for the best result.",
    points: [
      "Active acne and breakouts",
      "Chemical peels and microneedling",
      "PRP and fractional laser",
      "Subcision for deep scars",
      "Skincare and maintenance guidance",
    ],
  },
  {
    name: "Pigmentation & Melasma",
    desc: "Treatments for melasma, sun damage and uneven tone, using medication and lasers",
    detail:
      "Dark patches, melasma and sun damage usually need both the right creams and in-clinic treatment. We treat the cause, not just the surface.",
    points: [
      "Melasma and hormonal pigmentation",
      "Sun damage and uneven tone",
      "Prescription creams and peels",
      "Laser-based treatment",
      "Sun-protection planning",
    ],
  },
  {
    name: "Hair Fall & Hair Restoration",
    desc: "Help for hair fall and thinning, including PRP, GFC and scalp condition treatment",
    detail:
      "Hair fall has many causes, from hormones to scalp conditions. We work out why it's happening and treat that, rather than guessing.",
    points: [
      "Male and female pattern hair loss",
      "PRP and GFC therapy",
      "Scalp condition treatment",
      "Alopecia areata care",
      "Nutrition and hormone checks where needed",
    ],
  },
  {
    name: "Hydrafacial & Medi-Facials",
    desc: "Hydrafacials and medical facials to clean, hydrate and freshen your skin",
    detail:
      "A medical facial that cleans, exfoliates and hydrates in one sitting, done by trained hands. Good for a refresh or as part of an ongoing skin plan.",
    points: [
      "Deep cleansing and exfoliation",
      "Hydration boost",
      "Suitable for most skin types",
      "No downtime",
      "Can be paired with other treatments",
    ],
  },
  {
    name: "Vitiligo Treatment & Melanocyte Grafting",
    desc: "Vitiligo care with medication, phototherapy and surgical melanocyte grafting",
    detail:
      "Vitiligo can often be stabilised and improved with the right mix of medical and surgical options. We tailor the plan to how active and widespread it is.",
    points: [
      "Medical management to stabilise vitiligo",
      "Phototherapy",
      "Surgical melanocyte grafting",
      "Suitability assessment",
      "Long-term follow-up",
    ],
  },
  {
    name: "Medical Dermatology",
    desc: "Psoriasis, eczema, hives, fungal and nail infections, and children's skin",
    detail:
      "The everyday skin conditions that need real medical treatment, for adults and children. We diagnose properly and treat the cause.",
    points: [
      "Psoriasis and eczema",
      "Hives (urticaria)",
      "Fungal and nail infections",
      "Children's skin conditions",
      "Long-term flare management",
    ],
  },
  {
    name: "Mole, Skin Tag & Growth Removal",
    desc: "Safe removal of moles, skin tags and other harmless growths",
    detail:
      "Safe, in-clinic removal of moles, skin tags and other harmless growths, with care taken over how the skin heals. Anything suspicious is checked first.",
    points: [
      "Moles and skin tags",
      "Harmless skin growths",
      "Assessment before removal",
      "Minimal-scar techniques",
      "Quick, in-clinic procedure",
    ],
  },
  {
    name: "Cyst Excision",
    desc: "Surgical removal of skin cysts, with as little scarring as possible",
    detail:
      "Skin cysts can be removed surgically so they don't keep coming back. We focus on clean removal with as little scarring as possible.",
    points: [
      "Sebaceous and epidermoid cysts",
      "Complete surgical removal",
      "Done under local anaesthesia",
      "Minimal-scar closure",
      "Aftercare guidance",
    ],
  },
  {
    name: "Wart Removal",
    desc: "Wart removal by freezing, cautery, radiofrequency or immunotherapy",
    detail:
      "Warts can be stubborn, so we use the method that suits their type and location. Some need more than one session to clear fully.",
    points: [
      "Freezing (cryotherapy)",
      "Cautery and radiofrequency",
      "Immunotherapy for resistant warts",
      "Treatment for all areas",
      "Follow-up until cleared",
    ],
  },
];

export function Services() {
  const [tab, setTab] = useState<"endo" | "skin">("skin");
  const [active, setActive] = useState<Service | null>(null);
  const list = tab === "endo" ? endocrine : skin;

  return (
    <>
      <section id="services" className="relative overflow-hidden bg-cream py-20 lg:py-40">
        <Butterfly className="pointer-events-none absolute -right-32 top-20 hidden h-[600px] w-[700px] text-burgundy opacity-[0.04] lg:block" />
        <Butterfly className="pointer-events-none absolute -left-40 bottom-10 hidden h-[520px] w-[620px] text-burgundy opacity-[0.03] lg:block" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <p className="eyebrow mb-6 flex items-center gap-3">
                <Butterfly className="h-3 w-4 text-beige" />
                What We Treat
              </p>
              <h2 className="display-lg text-ink">
                Comprehensive{" "}
                <span className="italic text-burgundy">Specialist Care</span>
                <br />
                <span className="font-display italic text-beige">
                  across two disciplines.
                </span>
              </h2>
            </Reveal>
            <Reveal className="hidden lg:col-span-4 lg:block" delay={0.1}>
              <p className="text-muted-foreground lg:text-right">
                Choose a specialty, then tap any service to see what it covers.
                Every treatment is delivered by a specialist.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex gap-2 rounded-full bg-muted p-1 lg:mt-16 lg:items-end lg:gap-16 lg:rounded-none lg:border-b lg:border-border lg:bg-transparent lg:p-0">
              {[
                { id: "skin", label: "Skin & Hair", shortLabel: "Skin & Hair", num: "01" },
                { id: "endo", label: "Endocrine & Wellness", shortLabel: "Endocrine", num: "02" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as "endo" | "skin")}
                  className={`group relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-center transition-colors duration-300 lg:flex-none lg:items-baseline lg:justify-start lg:gap-4 lg:rounded-none lg:px-0 lg:pb-5 lg:text-left ${
                    tab === t.id ? "bg-white shadow-sm lg:bg-transparent lg:shadow-none" : ""
                  }`}
                >
                  <span
                    className={`hidden font-display text-lg italic transition-colors duration-300 lg:inline lg:text-xl ${
                      tab === t.id ? "text-burgundy" : "text-beige"
                    }`}
                  >
                    {t.num}
                  </span>
                  <span
                    className={`text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-300 lg:text-base lg:tracking-[0.1em] ${
                      tab === t.id
                        ? "text-burgundy"
                        : "text-muted-foreground group-hover:text-ink"
                    }`}
                  >
                    <span className="lg:hidden">{t.shortLabel}</span>
                    <span className="hidden lg:inline">{t.label}</span>
                  </span>
                  {tab === t.id && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute -bottom-px left-0 right-0 hidden h-[2px] bg-burgundy lg:block"
                      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
              <span className="ml-auto hidden pb-5 text-xs uppercase tracking-[0.18em] text-beige sm:inline">
                {String(list.length).padStart(2, "0")} Services
              </span>
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-10 grid grid-cols-1 gap-x-16 lg:mt-12 lg:grid-cols-2"
            >
              {list.map((s, i) => (
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  key={s.name}
                  className="group relative block w-full overflow-hidden border-t border-border py-5 text-left transition-colors duration-500 hover:border-burgundy lg:py-10"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-burgundy/[0.06] transition-transform duration-700 ease-out group-hover:translate-x-0" />

                  <div className="relative flex items-start gap-4 lg:gap-6">
                    <span className="mt-1.5 hidden font-display text-sm italic text-beige sm:inline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-burgundy lg:text-[1.7rem]">
                          {s.name}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.4}
                          className="mt-1 shrink-0 text-beige opacity-60 transition-all duration-500 group-hover:text-burgundy group-hover:opacity-100 lg:mt-2 lg:-translate-y-1 lg:translate-x-1 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                        />
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground lg:mt-3 lg:text-base">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <ServiceModal
            service={active}
            categoryLabel={tab === "endo" ? "Endocrine & Wellness" : "Skin & Hair"}
            doctorValue={tab === "endo" ? "kunal" : "pournami"}
            callNumber={tab === "endo" ? "+919686629759" : "+919901345153"}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
