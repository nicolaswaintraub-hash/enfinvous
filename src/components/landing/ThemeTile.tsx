import Image from "next/image";
import Link from "next/link";
import type { Theme } from "@/data/landing";

interface ThemeTileProps {
  theme: Theme;
}

export function ThemeTile({ theme }: ThemeTileProps) {
  const href = theme.filter
    ? `/rendez-vous?theme=${encodeURIComponent(theme.filter)}`
    : "/rendez-vous";

  return (
    <Link
      href={href}
      className="group relative block aspect-square cursor-pointer overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Image
        src={theme.image}
        alt={theme.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-250 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-anthracite/30 to-transparent" />
      <div className="absolute inset-0 bg-terracotta/0 transition-colors duration-250 group-hover:bg-terracotta/30" />

      <div className="relative flex h-full flex-col justify-end p-4 md:p-5">
        <h3 className="font-serif text-lg font-medium text-creme drop-shadow-md md:text-xl">
          {theme.title}
        </h3>
        <p className="mt-1 font-sans text-base text-creme/80">
          {theme.tagline}
        </p>
      </div>
    </Link>
  );
}
