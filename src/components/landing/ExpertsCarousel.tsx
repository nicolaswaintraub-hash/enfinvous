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
import { experts } from "@/data/landing";
import { ExpertCard } from "./ExpertCard";

export function ExpertsCarousel() {
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
      aria-labelledby="experts-heading"
    >
      <Container>
        <SectionHeading title="Nos experts" id="experts-heading" />

        <Carousel
          opts={
            isMobile
              ? { align: "center", loop: false, containScroll: false }
              : { align: "start", loop: false }
          }
          className="mx-auto max-w-[calc(1280px-3rem)]"
          aria-label="Nos experts"
        >
          <CarouselContent className="-ml-4">
            {experts.map((expert) => (
              <CarouselItem
                key={expert.id}
                className="pl-4 basis-[80%] sm:basis-1/3 lg:basis-1/4"
              >
                <ExpertCard expert={expert} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 md:-left-12 border-foreground/20 bg-background hover:bg-foreground hover:text-background"
            aria-label="Expert précédent"
          />
          <CarouselNext
            className="-right-4 md:-right-12 border-foreground/20 bg-background hover:bg-foreground hover:text-background"
            aria-label="Expert suivant"
          />
        </Carousel>
      </Container>
    </section>
  );
}
