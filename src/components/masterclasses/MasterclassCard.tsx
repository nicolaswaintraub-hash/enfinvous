import {
  CalendarDays,
  Clock,
  MessageCircle,
  Repeat,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { ProgrammeEntry } from "@/data/masterclasses";
import { cn } from "@/lib/utils";

interface MasterclassCardProps {
  entry: ProgrammeEntry;
}

/**
 * Carte d'un rendez-vous du savoir — présentationnelle.
 * Reprend l'esthétique de EventCard (élévation au survol) et la complète
 * d'une pastille grande famille, du statut et de l'intervenant.
 * La carte est l'unité terminale : pas de page détail.
 */
export function MasterclassCard({ entry }: MasterclassCardProps) {
  const tight = entry.status === "Bientôt complet";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-foreground/10 bg-card transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Voile haut pour la lisibilité des pastilles */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-anthracite/45 to-transparent"
        />
        <span className="absolute top-3 left-3 z-10 rounded-full bg-creme/90 px-3 py-1 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-anthracite backdrop-blur-sm">
          {entry.theme}
        </span>
        <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-terracotta/95 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-primary-foreground backdrop-blur-sm">
          <MessageCircle className="size-2.5" aria-hidden="true" />
          Posez vos questions
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span
          className={cn(
            "mb-3 inline-flex w-fit items-center gap-1.5 font-sans text-[12px] font-medium uppercase tracking-[0.1em]",
            tight ? "text-[#8a6d3b]" : "text-foreground/55",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              tight ? "bg-gold" : "bg-sage",
            )}
            aria-hidden="true"
          />
          {entry.status}
        </span>

        <h3 className="mb-2 font-serif text-[20px] font-medium leading-snug md:text-[22px]">
          {entry.title}
        </h3>
        <p className="mb-4 line-clamp-3 font-sans text-[15px] leading-relaxed text-foreground/75">
          {entry.summary}
        </p>

        <div className="mt-auto flex flex-col gap-1.5 font-sans text-[14px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <CalendarDays
              className="size-4 shrink-0 text-foreground/45"
              aria-hidden="true"
            />
            {entry.cadence} &middot; {entry.time}
          </span>
          <span className="flex items-center gap-2">
            <Clock
              className="size-4 shrink-0 text-foreground/45"
              aria-hidden="true"
            />
            {entry.duration}
          </span>
          {typeof entry.sessionsAhead === "number" && (
            <span className="flex items-center gap-2">
              <Repeat
                className="size-4 shrink-0 text-foreground/45"
                aria-hidden="true"
              />
              {entry.sessionsAhead} séances à venir
            </span>
          )}
          <span className="flex items-center gap-2">
            <Users
              className="size-4 shrink-0 text-foreground/45"
              aria-hidden="true"
            />
            {entry.registered} membres inscrits
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-foreground/10 pt-4">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={entry.expertImage}
              alt={entry.expertName}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-serif text-[15px] font-medium leading-tight">
              {entry.expertName}
            </p>
            <p className="truncate font-sans text-[13px] text-muted-foreground">
              {entry.expertDiscipline}
            </p>
          </div>
        </div>

        <Link
          href="/#abonnement"
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "mt-5 w-full",
          )}
        >
          Je m'inscris
        </Link>
      </div>
    </article>
  );
}
