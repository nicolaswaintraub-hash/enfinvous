import { MapPin, Video } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Event, experts } from "@/data/landing";
import { cn } from "@/lib/utils";

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

  const expert = event.expertId
    ? experts.find((e) => e.id === event.expertId)
    : undefined;

  // Le format réel se déduit du lieu : un atelier a un lieu (présentiel),
  // les rendez-vous du savoir se tiennent en visio.
  const isPresentiel = Boolean(event.venue);
  const formatLabel = isPresentiel ? "Atelier" : "Rendez-vous du savoir";

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
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
          <Badge variant={isPresentiel ? "presentiel" : "visio"}>
            {formatLabel}
          </Badge>
          <Badge variant="flag" className="gap-1">
            {isPresentiel ? (
              <MapPin className="size-3" aria-hidden="true" />
            ) : (
              <Video className="size-3" aria-hidden="true" />
            )}
            {isPresentiel ? "Présentiel" : "Visio"}
          </Badge>
        </div>
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
            <span className="flex items-center gap-1.5 font-sans text-[15px] text-foreground/80">
              <MapPin
                className="size-4 shrink-0 text-foreground/50"
                aria-hidden="true"
              />
              {event.venue}
              {event.city ? `, ${event.city}` : ""}
            </span>
          ) : (
            <span className="font-sans text-[15px] text-muted-foreground">
              {event.time} &middot; {event.duration}
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

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-foreground/10 pt-4">
          <div className="flex min-w-0 items-center gap-2.5">
            {expert ? (
              <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-foreground/10 bg-beige">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  sizes="44px"
                  className="object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                />
              </div>
            ) : null}
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-serif text-[15px] font-medium text-foreground">
                {event.expert}
              </span>
              <span className="truncate font-sans text-[13px] text-muted-foreground">
                {event.venue
                  ? `${event.time} · ${event.duration}`
                  : expert?.discipline}
              </span>
            </span>
          </div>

          <Button
            variant="tertiary"
            className="shrink-0 text-base after:ml-1 after:transition-transform after:duration-250 after:content-['\2192'] group-hover:after:translate-x-0.5"
          >
            Je réserve
          </Button>
        </div>
      </div>
    </article>
  );
}
