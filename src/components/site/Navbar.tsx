import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "./Wordmark";

const links = [
  { label: "About", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <a href="#top" aria-label="ilona Clinic home">
            <Wordmark variant="full" />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Book Appointment
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden text-ink"
            onClick={() => setOpen(true)}
          >
            <Menu strokeWidth={1.4} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] bg-ink/30 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[min(320px,88vw)] flex-col bg-cream shadow-2xl md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-border px-5">
                <Wordmark />
                <button aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X strokeWidth={1.4} />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 px-5 py-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3.5 font-display text-2xl text-ink transition-colors active:bg-burgundy/8"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="border-t border-border p-5">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
