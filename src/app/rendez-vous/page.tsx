import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PresentielListing } from "@/components/rendezvous/PresentielListing";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Les Rendez-vous",
  description:
    "Ateliers privilégiés, salons et escapades en présentiel, en petit comité. Les beaux ateliers se font en petit comité.",
};

export default function RendezVousPage() {
  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-14 md:pt-16">
        <FadeIn>
          <PresentielListing />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
