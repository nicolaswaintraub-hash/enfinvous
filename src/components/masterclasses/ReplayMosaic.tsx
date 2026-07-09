"use client";

import { Lock, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MemberModal } from "@/components/ui/member-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { replayItems } from "@/data/masterclasses";
import { BETA } from "@/lib/flags";
import { cn } from "@/lib/utils";

export function ReplayMosaic() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="replay-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Le replay"
          title="La médiathèque du cercle"
          separator
          id="replay-heading"
        />
        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center font-sans text-[17px] leading-relaxed text-foreground/80">
          Une séance vous a échappé ? Retrouvez-la dans la médiathèque, à revoir
          aussi souvent que vous le souhaitez. Un espace réservé aux membres du
          cercle.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {replayItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpen(true)}
              className="group relative aspect-video overflow-hidden rounded-sm text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/85 via-anthracite/25 to-anthracite/10" />

              {/* Cadenas discret */}
              <span className="absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-full bg-anthracite/60 text-creme/90 backdrop-blur-sm">
                <Lock className="size-3.5" aria-hidden="true" />
              </span>

              {/* Lecture (décoratif) */}
              <span className="absolute top-1/2 left-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-creme/50 bg-anthracite/30 text-creme opacity-80 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                <Play
                  className="size-5 translate-x-0.5 fill-current"
                  aria-hidden="true"
                />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-serif text-[18px] font-medium leading-snug text-creme drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-creme/75">
                  {item.duration} · {item.expert}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Container>

      <MemberModal
        open={open}
        onOpenChange={setOpen}
        surtitre="Médiathèque"
        title="Réservé aux membres"
        description="Les replays sont l'un des privilèges du cercle. Rejoignez-nous pour revoir chaque rendez-vous du savoir à votre rythme."
        signature="Le cercle vous attend."
      >
        {!BETA && (
          <Link
            href="/#abonnement"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full",
            )}
          >
            Rejoindre le cercle
          </Link>
        )}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-sans text-sm font-medium text-muted-foreground underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
        >
          Plus tard
        </button>
      </MemberModal>
    </section>
  );
}
