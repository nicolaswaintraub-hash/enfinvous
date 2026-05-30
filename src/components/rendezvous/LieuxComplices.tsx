"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { lieux } from "@/data/rendezvous";

export function LieuxComplices() {
  return (
    <section
      className="bg-beige py-12 md:py-16 lg:py-24"
      aria-labelledby="lieux-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Nos lieux complices"
          title="Des adresses choisies avec soin"
          id="lieux-heading"
        />

        <Carousel
          opts={{ align: "start", loop: false }}
          className="mx-auto max-w-[calc(1280px-3rem)]"
          aria-label="Nos lieux complices"
        >
          <CarouselContent className="-ml-4">
            {lieux.map((lieu) => (
              <CarouselItem
                key={lieu.id}
                className="basis-[80%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-background">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={lieu.image}
                      alt={lieu.name}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-1 font-sans text-[12px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {lieu.type}
                    </p>
                    <h3 className="font-serif text-[22px] font-medium leading-snug">
                      {lieu.name}
                    </h3>
                    <p className="mt-1 font-sans text-[15px] text-muted-foreground">
                      {lieu.city}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-base font-medium text-foreground underline decoration-gold underline-offset-4 transition-colors group-hover:text-terracotta">
                      Découvrir
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 border-foreground/20 bg-background hover:bg-foreground hover:text-background md:-left-12"
            aria-label="Lieu précédent"
          />
          <CarouselNext
            className="-right-4 border-foreground/20 bg-background hover:bg-foreground hover:text-background md:-right-12"
            aria-label="Lieu suivant"
          />
        </Carousel>
      </Container>
    </section>
  );
}
