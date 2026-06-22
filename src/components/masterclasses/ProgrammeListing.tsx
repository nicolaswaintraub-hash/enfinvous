"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { FilterSelect } from "@/components/ui/filter-select";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  monthFilters,
  programme,
  statusFilters,
  themeFilters,
} from "@/data/masterclasses";
import { MasterclassCard } from "./MasterclassCard";

export function ProgrammeListing() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(themeFilters[0]);
  const [month, setMonth] = useState(monthFilters[0]);
  const [status, setStatus] = useState(statusFilters[0]);

  const isFiltered =
    query.trim() !== "" ||
    theme !== themeFilters[0] ||
    month !== monthFilters[0] ||
    status !== statusFilters[0];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programme.filter((entry) => {
      const matchesQuery =
        q === "" ||
        entry.title.toLowerCase().includes(q) ||
        entry.expertName.toLowerCase().includes(q) ||
        entry.summary.toLowerCase().includes(q);
      const matchesTheme = theme === themeFilters[0] || entry.theme === theme;
      const matchesMonth = month === monthFilters[0] || entry.month === month;
      const matchesStatus =
        status === statusFilters[0] ||
        (status === "Disponible en replay"
          ? entry.replayAvailable
          : entry.status === status);
      return matchesQuery && matchesTheme && matchesMonth && matchesStatus;
    });
  }, [query, theme, month, status]);

  function reset() {
    setQuery("");
    setTheme(themeFilters[0]);
    setMonth(monthFilters[0]);
    setStatus(statusFilters[0]);
  }

  return (
    <section
      className="bg-beige py-12 md:py-16 lg:py-24"
      aria-labelledby="programme-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Le programme du mois"
          title="Ce que vous pourrez vivre"
          id="programme-heading"
        />

        <p className="mx-auto -mt-4 mb-8 max-w-2xl text-center font-sans text-[17px] leading-relaxed text-foreground/80">
          Le programme du mois, à parcourir selon vos envies. Filtrez par
          thématique, par date ou par disponibilité, et réservez le rendez-vous
          du savoir qui vous appelle.
        </p>

        {/* Invitation — mini call to action */}
        <p className="mx-auto mb-5 max-w-2xl text-center font-serif text-[22px] font-medium italic leading-snug text-terracotta md:text-[26px]">
          Que voulez-vous découvrir&nbsp;?
        </p>

        {/* Recherche par mot-clé */}
        <div className="mx-auto mb-6 max-w-2xl">
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-foreground/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un rendez-vous du savoir, un intervenant…"
              aria-label="Rechercher un rendez-vous du savoir"
              className="w-full rounded-full border border-foreground/15 bg-background py-3.5 pr-5 pl-12 font-sans text-[16px] text-foreground placeholder:text-muted-foreground transition-colors hover:border-sage focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            />
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <FilterSelect
            label="Thématique"
            value={theme}
            options={themeFilters}
            onChange={setTheme}
          />
          <FilterSelect
            label="Mois"
            value={month}
            options={monthFilters}
            onChange={setMonth}
          />
          <FilterSelect
            label="Statut"
            value={status}
            options={statusFilters}
            onChange={setStatus}
          />
        </div>

        {/* Décompte + réinitialisation */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <p
            aria-live="polite"
            className="font-sans text-[14px] text-muted-foreground"
          >
            {visible.length} rendez-vous du savoir
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={reset}
              className="font-sans text-[14px] font-medium text-foreground underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((entry) => (
              <MasterclassCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-md rounded-sm border border-foreground/10 bg-background px-6 py-14 text-center">
            <p className="font-serif text-[20px] font-medium text-foreground">
              Aucun rendez-vous du savoir ne correspond à votre recherche
            </p>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted-foreground">
              Essayez d'élargir vos critères ou parcourez l'ensemble du
              programme.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 font-sans text-[15px] font-medium text-foreground underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
            >
              Voir tout le programme
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
