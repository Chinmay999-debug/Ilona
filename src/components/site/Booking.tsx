import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { Butterfly } from "./Butterfly";
import { DOCTOR_CONTACTS, CLINIC_MAPS_URL, CLINIC_MAPS_EMBED_URL } from "./contacts";

export function Booking() {
  const [submitting, setSubmitting] = useState(false);
  const [doctor, setDoctor] = useState("");

  // Pre-select a doctor when "Book Appointment" is used from a service card.
  useEffect(() => {
    const handler = (e: Event) => {
      const value = (e as CustomEvent<string>).detail;
      if (value) setDoctor(value);
    };
    window.addEventListener("ilona:book", handler);
    return () => window.removeEventListener("ilona:book", handler);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Front-end only: simulate success
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setDoctor("");
    toast.success("Request received. We'll be in touch shortly.");
  };

  return (
    <section id="contact" className="bg-background py-16 pb-28 lg:py-40 lg:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3">
            <Butterfly className="h-3 w-4 text-beige" />
            Get in Touch
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-lg max-w-3xl text-ink">
            Book Your <span className="italic">Consultation</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-2">
              <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Full Name</span>
                  <input required name="name" maxLength={120} className="input-line" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Phone Number</span>
                  <input required type="tel" name="phone" maxLength={20} className="input-line" placeholder="+91" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Email Address</span>
                  <input required type="email" name="email" maxLength={200} className="input-line" placeholder="you@example.com" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Preferred Date</span>
                  <input required type="date" name="date" className="input-line" />
                </label>
                <label className="block md:col-span-2">
                  <span className="eyebrow text-muted-foreground">Select Doctor</span>
                  <select
                    required
                    name="doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="input-line"
                  >
                    <option value="" disabled>Choose a specialist</option>
                    <option value="pournami">Dr. Pournami P, Dermatology</option>
                    <option value="kunal">Dr. Kunal Gupta, Endocrinology</option>
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="eyebrow text-muted-foreground">Reason for visit (optional)</span>
                  <textarea
                    name="message"
                    maxLength={1000}
                    rows={3}
                    className="input-line resize-none"
                    placeholder="Briefly tell us what you'd like to discuss"
                  />
                </label>
              </div>

              <div className="pt-10">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request Appointment"}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy to-burgundy-deep text-[#F4E9D8] shadow-xl shadow-burgundy/20">
              <div className="relative overflow-hidden p-8 lg:p-10">
                <Butterfly className="pointer-events-none absolute -right-10 -top-12 h-48 w-56 text-[#F4E9D8] opacity-[0.06]" />

                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-beige">
                  Visit Ilona
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-white lg:text-[1.9rem]">
                  We'd love to see you.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#F4E9D8]/70">
                  Reach us by phone or email, or visit us in Indiranagar,
                  Bengaluru.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                      <Phone size={18} strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#F4E9D8]/55">
                        Call
                      </p>
                      <div className="mt-1.5 space-y-2">
                        {DOCTOR_CONTACTS.map((d) => (
                          <div key={d.phone} className="leading-snug">
                            <a
                              href={`tel:${d.phone}`}
                              className="font-medium text-white transition-colors hover:text-beige"
                            >
                              {d.phoneDisplay}
                            </a>
                            <span className="block text-xs text-[#F4E9D8]/60">
                              {d.name} · {d.specialty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                      <Mail size={18} strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#F4E9D8]/55">
                        Email
                      </p>
                      <a
                        href="mailto:dr.kunal@ilonaclinics.com"
                        className="mt-1 block break-all text-white transition-colors hover:text-beige"
                      >
                        dr.kunal@ilonaclinics.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                      <MapPin size={18} strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#F4E9D8]/55">
                        Visit
                      </p>
                      <p className="mt-1 leading-relaxed text-white">
                        #2285, 14th Main, HAL 2nd Stage,
                        <br />
                        Indiranagar, Bengaluru – 560 008
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                      <Globe size={18} strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#F4E9D8]/55">
                        Online
                      </p>
                      <span className="mt-1 block text-white">
                        www.ilonaclinics.com
                      </span>
                    </div>
                  </li>
                </ul>

                <a
                  href={CLINIC_MAPS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open Ilona Clinic location in Google Maps"
                  className="group relative mt-9 block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15"
                >
                  <iframe
                    title="Ilona Clinic on Google Maps"
                    src={CLINIC_MAPS_EMBED_URL}
                    className="pointer-events-none h-full w-full border-0 grayscale transition-all duration-700 group-hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    tabIndex={-1}
                  />
                  <span className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-medium tracking-wide text-burgundy shadow-lg backdrop-blur-sm">
                    <MapPin size={14} strokeWidth={1.8} />
                    Get directions
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
