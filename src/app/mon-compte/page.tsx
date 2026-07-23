import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AccountDiscover } from "@/components/account/AccountDiscover";
import { AccountSideMenu } from "@/components/account/AccountSideMenu";
import { AccountTiles } from "@/components/account/AccountTiles";
import { WelcomeBanner } from "@/components/account/WelcomeBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { BETA } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Mon compte",
  description:
    "Votre espace membre Veevre : abonnement, rendez-vous, favoris et parrainage.",
};

export default function MonComptePage() {
  // En bêta, l'espace membre (dont la déconnexion) est masqué.
  if (BETA) redirect("/");

  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-14 md:pt-16">
        <Breadcrumb items={[{ label: "Mon compte" }]} />
        <WelcomeBanner />

        <section className="py-12 md:py-16" aria-label="Tableau de bord">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
              <AccountSideMenu />
              <AccountTiles />
            </div>
          </Container>
        </section>

        <FadeIn>
          <AccountDiscover />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
