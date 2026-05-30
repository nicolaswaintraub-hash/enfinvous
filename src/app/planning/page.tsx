import { Download } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CalendarGrid } from "@/components/planning/CalendarGrid";
import { WeekSelector } from "@/components/planning/WeekSelector";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Planning de la semaine",
  description:
    "Découvrez la densité du programme EnfinVous : masterclasses en visio, rendez-vous en présentiel et événements signature, jour après jour.",
};

export default function PlanningPage() {
  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-14 md:pt-16">
        <Breadcrumb items={[{ label: "Planning" }]} />

        <section
          className="py-12 md:py-16 lg:py-24"
          aria-labelledby="planning-heading"
        >
          <Container>
            <div className="mb-10 text-center md:mb-14">
              <p className="mb-3 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Le planning
              </p>
              <h1
                id="planning-heading"
                className="font-serif text-[28px] font-medium leading-tight md:text-[40px]"
              >
                La semaine du cercle
              </h1>
            </div>

            <WeekSelector />

            <div className="mt-10 md:mt-12">
              <CalendarGrid />
            </div>

            <div className="mt-14 flex justify-center">
              <Button variant="secondary" className="gap-2.5">
                <Download className="size-[18px]" aria-hidden="true" />
                Télécharger le programme PDF
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
