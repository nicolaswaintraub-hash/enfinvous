"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { EventCard } from "@/components/landing/EventCard";
import { Container } from "@/components/ui/container";
import { FilterSelect } from "@/components/ui/filter-select";
import { SectionHeading } from "@/components/ui/section-heading";
import { filterOptions, presentielEvents } from "@/data/rendezvous";

export function PresentielListing() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(filterOptions.themes[0]);
  const [ville, setVille] = useState(filterOptions.villes[0]);
  const [mois, setMois] = useState(filterOptions.mois[0]);

  const isFiltered =
    query.trim() !== "" ||
    theme !== filterOptions.themes[0] ||
    ville !== filterOptions.villes[0] ||
    mois !== filterOptions.mois[0];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const monthWord = mois.split(" ")[0].toLowerCase();
    return presentielEvents.filter((event) => {
      const matchesQuery =
        q === "" ||
        [
          event.title,
          event.expert,
          event.description,
          event.venue,
          event.city,
        ].some((field) => field?.toLowerCase().includes(q));
      const matchesTheme =
        theme === filterOptions.themes[0] || event.theme === theme;
      const matchesVille =
        ville === filterOptions.villes[0] || event.city === ville;
      const matchesMois =
        mois === filterOptions.mois[0] ||
        event.date.toLowerCase().includes(monthWord);
      return matchesQuery && matchesTheme && matchesVille && matchesMois;
    });
  }, [query, theme, ville, mois]);

  function reset() {
    setQuery("");
    setTheme(filterOptions.themes[0]);
    setVille(filterOptions.villes[0]);
    setMois(filterOptions.mois[0]);
  }

  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="presentiel-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Les prochaines rencontres"
          title="Rencontres privilégiées"
          id="presentiel-heading"
        />

        <p className="mx-auto -mt-4 mb-8 max-w-2xl text-center font-sans text-[17px] leading-relaxed text-foreground/80">
          Des rencontres en présentiel, en cercle restreint — quinze personnes
          au plus. Filtrez par thématique, par ville ou par mois, et réservez la
          vôtre.
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
              placeholder="Rechercher une rencontre, un lieu, un intervenant…"
              aria-label="Rechercher une rencontre"
              className="w-full rounded-full border border-foreground/15 bg-background py-3.5 pr-5 pl-12 font-sans text-[16px] text-foreground placeholder:text-muted-foreground transition-colors hover:border-sage focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            />
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <FilterSelect
            label="Thématique"
            value={theme}
            options={filterOptions.themes}
            onChange={setTheme}
          />
          <FilterSelect
            label="Ville"
            value={ville}
            options={filterOptions.villes}
            onChange={setVille}
          />
          <FilterSelect
            label="Mois"
            value={mois}
            options={filterOptions.mois}
            onChange={setMois}
          />
        </div>

        {/* Décompte + réinitialisation */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <p
            aria-live="polite"
            className="font-sans text-[14px] text-muted-foreground"
          >
            {visible.length} {visible.length > 1 ? "rencontres" : "rencontre"}
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visible.map((event) => (
              <EventCard key={event.id} event={event} large />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-md rounded-sm border border-foreground/10 bg-background px-6 py-14 text-center">
            <p className="font-serif text-[20px] font-medium text-foreground">
              Aucune rencontre ne correspond à votre recherche
            </p>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted-foreground">
              Essayez d'élargir vos critères ou parcourez toutes les rencontres.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 font-sans text-[15px] font-medium text-foreground underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
            >
              Voir toutes les rencontres
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
