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

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-anthracite/70 via-anthracite/20 to-transparent p-4 transition-colors duration-250 group-hover:from-anthracite/80">
        <div>
          <p className="font-serif text-lg font-medium italic text-creme drop-shadow-md">
            {expert.name}
          </p>
          <p className="font-sans text-sm text-creme/80 drop-shadow-md">
            {expert.discipline}
          </p>
        </div>
      </div>
    </div>
  );
}
