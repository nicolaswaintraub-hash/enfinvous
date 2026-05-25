import type { Expert } from "@/data/landing";

interface ExpertCardProps {
  expert: Expert;
}

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8a8078] to-[#4a4540] grayscale" />

      <div className="absolute inset-0 flex items-end bg-anthracite/0 p-4 transition-colors duration-250 group-hover:bg-anthracite/60">
        <div className="translate-y-2 opacity-0 transition-all duration-250 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-serif text-lg font-medium italic text-creme">
            {expert.name}
          </p>
          <p className="font-sans text-sm text-creme/80">{expert.discipline}</p>
        </div>
      </div>
    </div>
  );
}
