import { MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Event } from "@/data/landing";
import { cn } from "@/lib/utils";

const variantLabels: Record<string, string> = {
  visio: "Rendez-vous du savoir",
  presentiel: "Rendez-vous",
  signature: "Événement signature",
};

interface EventCardProps {
  event: Event;
  /** Variante grande, pour les grilles présentielles (page Rendez-vous). */
  large?: boolean;
  /** Surcharge l'attribut sizes de l'image selon la grille d'accueil. */
  sizes?: string;
}

export function EventCard({ event, large = false, sizes }: EventCardProps) {
  const imageSizes =
    sizes ??
    (large
      ? "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
      : "(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-card transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <Badge
          variant={event.variant}
          className="absolute top-3 left-3 z-10 gap-1.5"
        >
          {event.variant === "signature" && (
            <span
              className="size-1.5 rotate-45 bg-anthracite/70"
              aria-hidden="true"
            />
          )}
          {variantLabels[event.variant]}
        </Badge>
      </div>

      <div className={cn("flex flex-1 flex-col", large ? "p-5 md:p-6" : "p-4")}>
        <p className="mb-1 font-sans text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {event.date}
        </p>
        <h3
          className={cn(
            "mb-2 font-serif font-medium leading-snug",
            large ? "text-[22px] md:text-[26px]" : "text-[20px] md:text-[22px]",
          )}
        >
          {event.title}
        </h3>
        <p className="mb-3 font-sans text-base leading-relaxed text-foreground/80">
          {event.description}
        </p>

        <div className="mt-auto flex flex-col gap-2">
          {event.venue ? (
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 font-sans text-[15px] text-foreground/80">
                <MapPin
                  className="size-4 shrink-0 text-foreground/50"
                  aria-hidden="true"
                />
                {event.venue}
                {event.city ? `, ${event.city}` : ""}
              </span>
              <span className="font-sans text-[15px] text-muted-foreground">
                {event.expert} &middot; {event.time} &middot; {event.duration}
              </span>
            </div>
          ) : (
            <span className="font-sans text-[15px] text-muted-foreground">
              {event.time} &middot; {event.duration} &middot; {event.expert}
            </span>
          )}

          {typeof event.spotsLeft === "number" && (
            <span className="flex items-center gap-1.5 font-sans text-sm font-medium uppercase tracking-[0.1em] text-[#8a6d3b]">
              <span
                className="size-1.5 rounded-full bg-gold"
                aria-hidden="true"
              />
              {event.spotsLeft} places restantes
            </span>
          )}
        </div>

        <Button variant="tertiary" className="mt-3 self-start text-base">
          Je réserve
        </Button>
      </div>
    </article>
  );
}
