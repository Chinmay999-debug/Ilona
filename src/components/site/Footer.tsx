import { Wordmark } from "./Wordmark";
import { Butterfly } from "./Butterfly";
import { DOCTOR_CONTACTS, CLINIC_MAPS_URL } from "./contacts";

const endo = [
  "Diabetes Management",
  "Thyroid Disorders",
  "Weight & Metabolic Health",
  "Hormonal & Reproductive Health",
  "Bone Health",
];

const skin = [
  "Acne & Acne Scar Treatment",
  "Pigmentation & Melasma",
  "Hair Restoration",
  "Hydrafacial & Medi-Facials",
  "Vitiligo & Melanocyte Grafting",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#120409] text-[#E7D9C4]">
      <Butterfly className="pointer-events-none absolute -right-20 -bottom-20 hidden h-[480px] w-[560px] text-[#F4E9D8] opacity-[0.04] lg:block" />
      <Butterfly className="pointer-events-none absolute -left-32 top-10 hidden h-[380px] w-[460px] text-[#F4E9D8] opacity-[0.03] lg:block" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <Wordmark variant="full" onDark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#E7D9C4]/70">
              Endocrine &amp; Wellness · Skin &amp; Hair · Indiranagar, Bengaluru
            </p>
          </div>

          <div className="hidden sm:block lg:col-span-2">
            <h4 className="eyebrow text-beige">Endocrine & Wellness</h4>
            <ul className="mt-6 space-y-3 text-sm">
              {endo.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#E7D9C4]/80 transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block lg:col-span-3">
            <h4 className="eyebrow text-beige">Skin & Hair</h4>
            <ul className="mt-6 space-y-3 text-sm">
              {skin.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[#E7D9C4]/80 transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-beige">Visit Us</h4>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#E7D9C4]/80">
              <li>
                <a
                  href={CLINIC_MAPS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-white"
                >
                  #2285, 14th Main, HAL 2nd Stage,<br />Indiranagar, Bengaluru 560 008
                </a>
              </li>
              {DOCTOR_CONTACTS.map((d) => (
                <li key={d.phone} className="leading-snug">
                  <a href={`tel:${d.phone}`} className="hover:text-white">{d.phoneDisplay}</a>
                  <span className="block text-xs text-[#E7D9C4]/55">{d.name} · {d.specialty}</span>
                </li>
              ))}
              <li><a href="mailto:dr.kunal@ilonaclinics.com" className="hover:text-white">dr.kunal@ilonaclinics.com</a></li>
              <li>www.ilonaclinics.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-[#E7D9C4]/15 pt-8">
          <p className="text-xs tracking-[0.12em] text-[#E7D9C4]/60">
            © 2026 ilona Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
