import type { Metadata } from "next";
import { ExpertContactPage } from "@/components/landing/ExpertContactPage";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Devenir expert",
  description:
    "Conférencier, artiste, artisan, chercheur ou passionné : transmettez votre savoir au Cercle VivreEnfin. Un public de seniors curieux et fidèle, deux formats, un accompagnement à chaque étape.",
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
