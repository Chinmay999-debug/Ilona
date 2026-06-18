import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { NameMeaning } from "@/components/site/NameMeaning";
import { Philosophy } from "@/components/site/Philosophy";
import { Doctors } from "@/components/site/Doctors";
import { Services } from "@/components/site/Services";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ilona Clinic | Endocrinology & Dermatology in Indiranagar, Bengaluru" },
      {
        name: "description",
        content:
          "Specialist endocrinology and expert dermatology in Indiranagar, Bengaluru. Evidence-based, deeply personal care for hormones, skin and hair.",
      },
      { property: "og:title", content: "ilona Clinic | Indiranagar, Bengaluru" },
      {
        property: "og:description",
        content:
          "Skin & Hair and Endocrine & Wellness care under one roof in Indiranagar, Bengaluru.",
      },
    ],
  }),
  component: IlonaHome,
});

function IlonaHome() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <NameMeaning />
      <Philosophy />
      <Doctors />
      <Services />
      <Booking />
      <Footer />
      <FloatingCTAs />
      <Toaster position="top-center" />
    </main>
  );
}
