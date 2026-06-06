import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div aria-hidden className="about-glow" />

      <Container className="relative">
        <div className="about-panel mx-auto max-w-2xl rounded-lg px-6 py-10 text-center md:px-12 md:py-12">
          <h2
            id="about-heading"
            className="mb-3 font-serif text-[28px] font-medium leading-tight md:text-[40px]"
          >
            Qui sommes-nous
          </h2>
          <Separator className="mx-auto mb-8 w-12 bg-gold md:mb-10" />

          <p className="font-serif text-[18px] font-normal leading-snug md:text-[22px]">
            <span className="block text-[20px] font-medium md:text-[24px]">
              La retraite, c&apos;est le moment où le temps devient enfin le
              vôtre.
            </span>
            <span className="mt-3 block text-foreground/80">
              Pas celui des réunions, des obligations, des agendas imposés.{" "}
              <span className="text-terracotta">Le&nbsp;vôtre&nbsp;—</span> pour
              faire ce qui vous passionne vraiment, aller là où vous voulez,
              rencontrer qui vous ressemble.
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-xl font-serif text-[18px] font-normal leading-snug text-foreground/80 md:text-[22px]">
            <span className="font-medium text-foreground">EnfinVous</span> est
            né pour cette liberté-là. Un cercle de retraités exigeants et
            curieux qui ont décidé que cette période serait la plus riche de
            leur vie.
          </p>

          <div className="mt-9 md:mt-10">
            <p className="mb-4 font-serif text-[16px] font-normal italic leading-snug text-foreground md:text-[18px]">
              Bienvenue dans le
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span
                className="h-px w-8 bg-gold/60 sm:w-14"
                aria-hidden="true"
              />
              <span className="badge-signature whitespace-nowrap rounded-sm px-3 py-1 font-serif text-[13px] md:text-[16px]">
                Cercle des Éveillés de la Vie
              </span>
              <span
                className="h-px w-8 bg-gold/60 sm:w-14"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
