import { ChevronLeft, ChevronRight } from "lucide-react";
import { weekLabel } from "@/data/planning";

export function WeekSelector() {
  return (
    <div className="flex items-center justify-between gap-4 md:justify-center md:gap-10">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-sm border border-foreground/15 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        aria-label="Semaine précédente"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>

      <div className="text-center">
        <p className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Semaine en cours
        </p>
        <p className="mt-1 font-serif text-[20px] font-medium md:text-[26px]">
          {weekLabel}
        </p>
      </div>

      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-sm border border-foreground/15 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        aria-label="Semaine suivante"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
