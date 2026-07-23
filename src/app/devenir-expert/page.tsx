import type { Metadata } from "next";
import { ExpertContactPage } from "@/components/landing/ExpertContactPage";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Devenir expert",
  description:
    "Expert, artisan, guide, conférencier ou passionné : intervenez chez Veevre et partagez votre expertise avec un cercle de retraités curieux et exigeants. Trois formats, une réponse sous 48h.",
};

export default function DevenirExpertPage() {
  return (
    <>
      <Header solid />
      <main id="main-content">
        <ExpertContactPage />
      </main>
      <Footer />
    </>
  );
}
