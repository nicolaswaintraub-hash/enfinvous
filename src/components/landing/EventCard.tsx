import { MapPin, MessageCircle, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { type Event, experts } from "@/data/landing";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  /** Variante grande, pour les grilles présentielles (page Rendez-vous). */
  large?: boolean;
  /** Surcharge l'attribut sizes de l'image selon la grille d'accueil. */
  sizes?: string;
  /** Affiche l'applat « Posez vos questions » (rendez-vous participatifs). */
  showAsk?: boolean;
  /** Masque l'horaire (section éditoriale « À ne pas rater ») ; le pied de
   *  carte affiche alors le titre de l'intervenant plutôt que l'heure. */
  hideTime?: boolean;
}

export function EventCard({
  event,
  large = false,
  sizes,
  showAsk = false,
  hideTime = false,
}: EventCardProps) {
  const imageSizes =
    sizes ??
    (large
      ? "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
      : "(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw");

  const expert = event.expertId
    ? experts.find((e) => e.id === event.expertId)
    : undefined;

  // Le format pilote le badge : atelier (présentiel), fenêtre sur le monde
  // (visio) ou rendez-vous du savoir (visio par défaut). Le lieu (`venue`)
  // reste l'indicateur du présentiel pour le détail bas de carte.
  const isPresentiel = event.variant === "presentiel" || Boolean(event.venue);
  const isFenetre = event.variant === "fenetre";

  const formatVariant = isPresentiel
    ? "presentiel"
    : isFenetre
      ? "fenetre"
      : "visio";
  const formatLabel = isPresentiel
    ? "Atelier"
    : isFenetre
      ? "Fenêtre sur le monde"
      : "Rendez-vous du savoir";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-card transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      {/* Lien étendu : toute la carte mène à l'inscription pour réserver. */}
      <Link
        href="/entrer"
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="sr-only">Réserver : {event.title}</span>
      </Link>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
          <Badge variant={formatVariant}>{formatLabel}</Badge>
          <Badge variant="flag" className="gap-1">
            {isPresentiel ? (
              <MapPin className="size-3" aria-hidden="true" />
            ) : (
              <Video className="size-3" aria-hidden="true" />
            )}
            {isPresentiel ? "Présentiel" : "Visio"}
          </Badge>
        </div>
        {showAsk && (
          <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-terracotta/95 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-primary-foreground backdrop-blur-sm">
            <MessageCircle className="size-2.5" aria-hidden="true" />
            Posez vos questions
          </span>
        )}
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
          ) : hideTime ? null : (
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
                {event.venue && !hideTime
                  ? `${event.time} · ${event.duration}`
                  : expert?.discipline}
              </span>
            </span>
          </div>

          <span
            aria-hidden="true"
            className={cn(
              buttonVariants({ variant: "tertiary" }),
              "pointer-events-none shrink-0 text-base after:ml-1 after:transition-transform after:duration-250 after:content-['\\2192'] group-hover:after:translate-x-0.5",
            )}
          >
            Je réserve
          </span>
        </div>
      </div>
    </article>
  );
}
