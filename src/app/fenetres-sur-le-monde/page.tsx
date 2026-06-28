import type { Metadata } from "next";
import { FenetresListing } from "@/components/fenetres/FenetresListing";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Fenêtres sur le monde",
  description:
    "Des escapades culturelles commentées en direct — musées, sites d'exception et coulisses rarement ouvertes — accompagnées par des experts passionnés, depuis le confort de chez vous.",
};

export default function FenetresSurLeMondePage() {
  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-14 md:pt-16">
        <FadeIn>
          <FenetresListing />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
