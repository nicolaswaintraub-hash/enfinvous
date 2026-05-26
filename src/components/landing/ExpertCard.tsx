import Image from "next/image";
import type { Expert } from "@/data/landing";

interface ExpertCardProps {
  expert: Expert;
}

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-sm">
      <Image
        src={expert.image}
        alt={expert.name}
        fill
        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover grayscale transition-transform duration-250 group-hover:scale-105"
      />

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
