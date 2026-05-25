import { Container } from "@/components/ui/container";
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
          surtitre="Vos passions"
          title="Partager ses passions"
          separator
          id="themes-heading"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {themes.map((theme) => (
            <ThemeTile key={theme.id} theme={theme} />
          ))}
        </div>
      </Container>
    </section>
  );
}
