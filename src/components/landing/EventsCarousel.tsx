"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { type Event, events } from "@/data/landing";
import { EventCard } from "./EventCard";

// Une carte par format, pour montrer la diversité : rendez-vous du savoir
// (visio) → atelier (présentiel) → fenêtre sur le monde.
const featured = [
  events.find((e) => e.variant === "visio"),
  events.find((e) => e.variant === "presentiel"),
  events.find((e) => e.variant === "fenetre"),
].filter(Boolean) as Event[];

export function EventsCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="py-12 md:py-16 lg:py-24 bg-beige"
      aria-labelledby="events-heading"
    >
      <Container>
        <SectionHeading title="À ne pas rater" id="events-heading" />

        <Carousel
          opts={
            isMobile
              ? { align: "center", loop: false, containScroll: false }
              : { align: "start", loop: false }
          }
          className="mx-auto max-w-[calc(1280px-3rem)]"
          aria-label="Vos rendez-vous"
        >
          <CarouselContent className="-ml-4">
            {featured.map((event) => (
              <CarouselItem
                key={event.id}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <EventCard event={event} showAsk />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 md:-left-12 border-foreground/20 bg-background hover:bg-foreground hover:text-background"
            aria-label="Événement précédent"
          />
          <CarouselNext
            className="-right-4 md:-right-12 border-foreground/20 bg-background hover:bg-foreground hover:text-background"
            aria-label="Événement suivant"
          />
        </Carousel>
      </Container>
    </section>
  );
}
