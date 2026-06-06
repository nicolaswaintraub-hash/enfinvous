import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { themes } from "@/data/landing";
import { ThemeTile } from "./ThemeTile";

export function ThemesGrid() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="themes-heading"
    >
      <Container>
        <SectionHeading
          title="Partager ses passions"
          separator
          id="themes-heading"
        />

        <FadeIn
          stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
        >
          {themes.map((theme) => (
            <ThemeTile key={theme.id} theme={theme} />
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
