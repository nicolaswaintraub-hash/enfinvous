import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section
      className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-24 bg-beige"
      aria-label="Qui sommes-nous"
    >
      {/* Halo chaud, très diffus — donne de la profondeur au bloc */}
      <span aria-hidden="true" className="about-aura" />

      <Container className="relative">
        <FadeIn
          stagger
          className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:max-w-7xl lg:gap-24"
        >
          {/* Le récit — à gauche */}
          <div className="text-center md:text-left">
            <span className="about-kicker">Qui sommes-nous</span>

            {/* La phrase d'accroche — citation éditoriale */}
            <p className="mt-5 font-serif text-[27px] font-medium leading-tight text-foreground md:text-[33px]">
              La retraite, c&apos;est le moment où le temps devient enfin{" "}
              <span className="about-accent">le vôtre</span>.
            </p>

            {/* Le récit — filet terracotta + interligne généreux pour le confort de lecture */}
            <div className="about-narrative mt-7 space-y-5 md:mt-8">
              <p className="font-sans text-[19px] leading-[1.75] text-foreground md:text-[21px]">
                Enfin, plus de réunions ni d&apos;obligations. Vous êtes
                désormais libre de faire ce qui vous passionne, de partager vos
                envies et de rencontrer des personnes qui vous ressemblent.
              </p>
              <p className="font-sans text-[19px] leading-[1.75] text-foreground md:text-[21px]">
                <span className="font-semibold text-terracotta">
                  VivreEnfin&nbsp;!
                </span>{" "}
                c&apos;est votre compagnon de vie — celui qui ouvre des portes
                que vous n&apos;imaginiez pas, éveille des curiosités que vous
                n&apos;aviez pas eu le temps d&apos;explorer, et vous connecte à
                des gens qui vivent avec la même intensité que vous.
              </p>
            </div>
          </div>

          {/* Le portrait — des visages réels — à droite. La plaque
              « Bienvenue dans le Cercle des Éveillés de la Vie » est intégrée
              à l'image. */}
          <div className="about-figure relative mx-auto w-full max-w-[460px] md:max-w-none">
            <div className="about-figure__photo relative aspect-[189/116] overflow-hidden">
              <Image
                src="/enhance.png"
                alt="Trois retraités complices prennent un selfie dans un parc lumineux, sous l'invitation « Bienvenue dans le Cercle des Éveillés de la Vie »"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 460px, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
