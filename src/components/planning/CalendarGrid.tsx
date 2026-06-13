"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, useState } from "react";
import type { EventVariant } from "@/data/landing";
import { dayDates, dayNames, legend, periods, slots } from "@/data/planning";
import { cn } from "@/lib/utils";
import { SlotCard } from "./SlotCard";

const legendDot: Record<EventVariant, string> = {
  visio: "bg-terracotta",
  presentiel: "bg-sage",
  signature: "bg-gold",
  fenetre: "bg-anthracite",
};

export function CalendarGrid() {
  const [dayIndex, setDayIndex] = useState(0);

  return (
    <div>
      {/* Grille hebdomadaire — desktop */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[72px_repeat(7,minmax(0,1fr))] gap-2">
          <div />
          {dayNames.map((day, i) => (
            <div key={day} className="pb-2 text-center">
              <p className="font-serif text-[16px] font-medium">{day}</p>
              <p className="font-sans text-[13px] text-muted-foreground">
                {dayDates[i]} mai
              </p>
            </div>
          ))}

          {periods.map((period) => (
            <Fragment key={period.key}>
              <div className="flex items-center justify-end pr-2 text-right font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                {period.label}
              </div>
              {dayNames.map((dayName, dayIdx) => {
                const cellSlots = slots.filter(
                  (s) => s.day === dayIdx && s.period === period.key,
                );
                return (
                  <div
                    key={`${period.key}-${dayName}`}
                    className="min-h-[96px]"
                  >
                    {cellSlots.length === 0 ? (
                      <div className="h-full min-h-[96px] rounded-sm border border-dashed border-foreground/10" />
                    ) : (
                      <div className="flex h-full flex-col gap-2">
                        {cellSlots.map((slot) => (
                          <div key={slot.title} className="group relative">
                            <SlotCard slot={slot} />
                            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                              <SlotCard
                                slot={slot}
                                detailed
                                className="shadow-[0_14px_34px_-8px_rgba(31,34,51,0.4)]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Vue empilée par jour — mobile & tablette */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setDayIndex((i) => Math.max(0, i - 1))}
            disabled={dayIndex === 0}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-foreground/15 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            aria-label="Jour précédent"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <div className="text-center">
            <p className="font-serif text-[22px] font-medium">
              {dayNames[dayIndex]}
            </p>
            <p className="font-sans text-[14px] text-muted-foreground">
              {dayDates[dayIndex]} mai 2026
            </p>
          </div>

          <button
            type="button"
            onClick={() => setDayIndex((i) => Math.min(6, i + 1))}
            disabled={dayIndex === 6}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-foreground/15 text-foreground/70 transition-colors hover:border-foreground hover:text-foreground disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            aria-label="Jour suivant"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {periods.map((period) => {
            const cellSlots = slots.filter(
              (s) => s.day === dayIndex && s.period === period.key,
            );
            return (
              <div key={period.key}>
                <p className="mb-2.5 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {period.label}
                </p>
                {cellSlots.length > 0 ? (
                  <div className="space-y-3">
                    {cellSlots.map((slot) => (
                      <SlotCard key={slot.title} slot={slot} detailed />
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-[15px] italic text-muted-foreground">
                    Aucun rendez-vous sur cette tranche.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Légende */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {legend.map((item) => (
          <span
            key={item.variant}
            className="flex items-center gap-2 font-sans text-sm text-muted-foreground"
          >
            <span
              className={cn("size-3 rounded-full", legendDot[item.variant])}
              aria-hidden="true"
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
