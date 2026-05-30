import { Clock, MapPin } from "lucide-react";
import type { EventVariant } from "@/data/landing";
import type { PlanningSlot } from "@/data/planning";
import { cn } from "@/lib/utils";

const slotStyles: Record<EventVariant, { card: string; sub: string }> = {
  visio: {
    card: "bg-terracotta text-creme",
    sub: "text-creme/75",
  },
  presentiel: {
    card: "bg-sage text-foreground",
    sub: "text-foreground/70",
  },
  signature: {
    card: "bg-gradient-to-br from-[#d8c39a] to-[#c4a87a] text-anthracite border border-[#b8985f]",
    sub: "text-anthracite/70",
  },
};

interface SlotCardProps {
  slot: PlanningSlot;
  detailed?: boolean;
  className?: string;
}

export function SlotCard({ slot, detailed = false, className }: SlotCardProps) {
  const styles = slotStyles[slot.variant];

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-sm p-2.5",
        styles.card,
        className,
      )}
    >
      <p className={cn("font-sans text-[12px] font-medium", styles.sub)}>
        {slot.time}
      </p>
      <p className="mt-0.5 font-serif text-[15px] font-medium leading-tight">
        {detailed ? slot.fullTitle : slot.title}
      </p>
      <p className={cn("mt-1 font-sans text-[12px] leading-snug", styles.sub)}>
        {slot.expert}
      </p>

      {detailed && (
        <div className="mt-2 flex flex-col gap-1 border-t border-current/15 pt-2">
          <span
            className={cn(
              "flex items-center gap-1.5 font-sans text-[12px]",
              styles.sub,
            )}
          >
            <Clock className="size-3" aria-hidden="true" />
            {slot.duration}
          </span>
          <span
            className={cn(
              "flex items-center gap-1.5 font-sans text-[12px]",
              styles.sub,
            )}
          >
            <MapPin className="size-3" aria-hidden="true" />
            {slot.location}
          </span>
          <span className="mt-1.5 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] underline underline-offset-2">
            En savoir plus
          </span>
        </div>
      )}
    </div>
  );
}
