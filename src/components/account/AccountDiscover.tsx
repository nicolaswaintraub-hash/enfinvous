"use client";

import { EventCard } from "@/components/landing/EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { discoverEvents } from "@/data/account";

export function AccountDiscover() {
  return (
    <section
      className="bg-beige py-12 md:py-16 lg:py-24"
      aria-labelledby="discover-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Cette semaine"
          title="À découvrir cette semaine"
          id="discover-heading"
        />

        <Carousel
          opts={{ align: "start", loop: false }}
          className="mx-auto max-w-[calc(1280px-3rem)]"
          aria-label="À découvrir cette semaine"
        >
          <CarouselContent className="-ml-4">
            {discoverEvents.map((event) => (
              <CarouselItem
                key={event.id}
                className="basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <EventCard event={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 border-foreground/20 bg-background hover:bg-foreground hover:text-background md:-left-12"
            aria-label="Précédent"
          />
          <CarouselNext
            className="-right-4 border-foreground/20 bg-background hover:bg-foreground hover:text-background md:-right-12"
            aria-label="Suivant"
          />
        </Carousel>
      </Container>
    </section>
  );
}
