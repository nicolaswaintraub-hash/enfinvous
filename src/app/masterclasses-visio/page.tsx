import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProgrammeListing } from "@/components/masterclasses/ProgrammeListing";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Masterclass Visio",
  description:
    "Des masterclasses en visioconférence animées par des intervenants d'exception, depuis le confort de chez vous. Le savoir, sans les contraintes.",
};

export default function MasterclassesVisioPage() {
  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-14 md:pt-16">
        <FadeIn>
          <ProgrammeListing />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
