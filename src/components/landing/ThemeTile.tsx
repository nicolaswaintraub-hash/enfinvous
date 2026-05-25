import type { Theme } from "@/data/landing";

interface ThemeTileProps {
  theme: Theme;
}

export function ThemeTile({ theme }: ThemeTileProps) {
  return (
    <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5c4a3a] to-[#3d3225] transition-all duration-250 group-hover:scale-105" />
      <div className="absolute inset-0 bg-terracotta/0 transition-colors duration-250 group-hover:bg-terracotta/30" />

      <div className="relative flex h-full flex-col justify-end p-4 md:p-5">
        <h3 className="font-serif text-lg font-medium text-creme drop-shadow-md md:text-xl">
          {theme.title}
        </h3>
        <p className="mt-1 font-sans text-sm text-creme/80">{theme.tagline}</p>
      </div>
    </div>
  );
}
