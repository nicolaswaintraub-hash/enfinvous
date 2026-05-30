import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { filterOptions } from "@/data/rendezvous";

const selectors: { id: string; label: string; options: string[] }[] = [
  { id: "theme", label: "Thématique", options: filterOptions.themes },
  { id: "ville", label: "Ville", options: filterOptions.villes },
  { id: "mois", label: "Mois", options: filterOptions.mois },
];

export function FilterBar() {
  return (
    <section
      className="border-b border-foreground/10 bg-background py-6"
      aria-label="Filtrer les rendez-vous"
    >
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Affiner votre sélection
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {selectors.map((sel) => (
              <label key={sel.id} className="flex flex-col gap-1.5">
                <span className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {sel.label}
                </span>
                <div className="relative">
                  <select
                    defaultValue={sel.options[0]}
                    className="w-full min-w-[180px] appearance-none rounded-sm border border-foreground/15 bg-background py-2.5 pr-9 pl-3 font-sans text-[15px] text-foreground transition-colors hover:border-sage focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {sel.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-foreground/40"
                    aria-hidden="true"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
