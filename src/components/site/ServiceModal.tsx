import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import { Butterfly } from "./Butterfly";

export type Service = {
  name: string;
  desc: string;
  detail: string;
  points: string[];
};

export function ServiceModal({
  service,
  categoryLabel,
  doctorValue,
  callNumber,
  onClose,
}: {
  service: Service;
  categoryLabel: string;
  doctorValue: string;
  callNumber: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close service details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        initial={{ opacity: 0, y: 48, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.98 }}
        transition={{ duration: 0.34, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10 flex max-h-[90vh] w-full flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl shadow-burgundy/20 sm:max-w-lg sm:rounded-3xl"
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-burgundy to-burgundy-deep px-6 py-7 sm:px-8">
          <Butterfly className="pointer-events-none absolute -right-6 -top-8 h-36 w-40 text-[#F4E9D8] opacity-[0.08]" />
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/70">
            {categoryLabel}
          </p>
          <h3
            id="service-modal-title"
            className="mt-2 max-w-[88%] font-display text-2xl leading-tight text-white sm:text-[1.9rem]"
          >
            {service.name}
          </h3>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <p className="text-[0.95rem] leading-relaxed text-foreground/80">
            {service.detail}
          </p>
          <p className="mt-7 text-[0.7rem] uppercase tracking-[0.18em] text-beige">
            What it covers
          </p>
          <ul className="mt-4 space-y-3">
            {service.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTAs */}
        <div className="grid shrink-0 grid-cols-1 gap-3 border-t border-border bg-cream px-6 py-5 sm:grid-cols-2 sm:px-8">
          <a
            href={`tel:${callNumber}`}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-burgundy/40 px-6 py-3.5 text-sm tracking-[0.06em] text-burgundy transition-all duration-300 hover:border-burgundy hover:bg-burgundy hover:text-white"
          >
            <Phone
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            Call
          </a>
          <a
            href="#contact"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("ilona:book", { detail: doctorValue }),
              );
              onClose();
            }}
            className="btn-primary w-full"
          >
            Book Appointment
          </a>
        </div>
      </motion.div>
    </div>
  );
}
