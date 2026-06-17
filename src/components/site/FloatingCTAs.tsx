import { useEffect, useState } from "react";
import { Phone, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DOCTOR_CONTACTS } from "./contacts";

export function FloatingCTAs() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close contact menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-none"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {open && (
            <motion.div
              role="menu"
              aria-label="Contact options"
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
              className="w-[min(280px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-burgundy/15"
            >
              <div className="bg-gradient-to-br from-burgundy to-burgundy-deep px-5 py-4">
                <p className="font-display text-lg text-white">Get in touch</p>
                <p className="mt-0.5 text-xs text-white/70">
                  We typically respond within a few hours
                </p>
              </div>

              <div className="p-2">
                {DOCTOR_CONTACTS.map((d) => (
                  <a
                    key={`wa-${d.phone}`}
                    role="menuitem"
                    href={`https://wa.me/${d.phone.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-4 rounded-xl px-3 py-3.5 transition-colors hover:bg-[#25D366]/8 active:bg-[#25D366]/12"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/25 transition-transform group-active:scale-95">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.89-7.01ZM12.04 20.15h-.01a8.21 8.21 0 0 1-4.18-1.14l-.3-.18-3.13.82.83-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.22 8.24Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.16.25-.64.81-.79.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3Z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink">WhatsApp {d.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {d.specialty} · {d.phoneDisplay}
                      </span>
                    </span>
                  </a>
                ))}

                {DOCTOR_CONTACTS.map((d) => (
                  <a
                    key={d.phone}
                    role="menuitem"
                    href={`tel:${d.phone}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-4 rounded-xl px-3 py-3.5 transition-colors hover:bg-burgundy/6 active:bg-burgundy/10"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-burgundy text-white shadow-md shadow-burgundy/25 transition-transform group-active:scale-95">
                      <Phone size={20} strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink">Call {d.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {d.specialty} · {d.phoneDisplay}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={open ? "Close contact options" : "Open contact options"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.96 }}
          className={`fab-main relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-burgundy to-burgundy-deep text-white shadow-xl shadow-burgundy/30 transition-shadow hover:shadow-2xl hover:shadow-burgundy/35 ${
            open ? "" : "fab-pulse"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="grid h-8 w-8 place-items-center"
              >
                <X size={20} strokeWidth={2} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="grid h-8 w-8 place-items-center"
              >
                <MessageCircle size={22} strokeWidth={1.8} />
              </motion.span>
            )}
          </AnimatePresence>

          {!open && (
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-white" />
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
}
