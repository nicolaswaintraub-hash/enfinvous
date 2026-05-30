import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Event } from "@/data/landing";

const variantLabels: Record<string, string> = {
  visio: "Masterclass",
  presentiel: "Rendez-vous",
  signature: "Événement signature",
};

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-card transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
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

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 font-sans text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {event.date}
        </p>
        <h3 className="mb-2 font-serif text-[20px] font-medium leading-snug md:text-[22px]">
          {event.title}
        </h3>
        <p className="mb-3 font-sans text-base leading-relaxed text-foreground/80">
          {event.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-sans text-[15px] text-muted-foreground">
            {event.time} &middot; {event.duration} &middot; {event.expert}
          </span>
        </div>
        <Button variant="tertiary" className="mt-3 self-start text-base">
          Je réserve
        </Button>
      </div>
    </article>
  );
}
