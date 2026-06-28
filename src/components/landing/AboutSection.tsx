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
                Plus de réunions ni d&apos;obligations. Vous êtes désormais
                libre de faire ce qui vous passionne, d&apos;aller où vous le
                souhaitez et de rencontrer des personnes qui vous ressemblent.
              </p>
              <p className="font-sans text-[19px] leading-[1.75] text-foreground md:text-[21px]">
                <span className="font-semibold text-foreground">
                  VivreEnfin!
                </span>{" "}
                réunit des retraités curieux et passionnés qui vivent cette
                nouvelle étape comme la plus belle de leur vie.
              </p>
              <p className="font-sans text-[19px] leading-[1.75] text-foreground md:text-[21px]">
                <span className="font-semibold text-foreground">
                  VivreEnfin!
                </span>{" "}
                c&apos;est votre compagnon de vie — des activités qui vous
                éveillent, des lieux qui vous inspirent, et des personnes qui
                partagent vos passions.
              </p>
            </div>
          </div>

          {/* Le portrait — des visages réels — à droite */}
          <div className="about-figure relative mx-auto w-full max-w-[460px] pb-12 md:max-w-none md:pb-0">
            <div className="about-figure__photo relative aspect-[4/3] overflow-hidden lg:aspect-[16/10]">
              <Image
                src="https://images.pexels.com/photos/6838623/pexels-photo-6838623.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Trois amis retraités, complices et rieurs, prennent une photo ensemble dans un parc baigné de lumière"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 460px, 600px"
                className="object-cover"
              />
              {/* Voile chaud léger pour fondre l'image dans la palette */}
              <span aria-hidden="true" className="about-figure__wash" />
            </div>

            {/* La signature — plaque dorée « invitation », posée sur la photo */}
            <p className="about-signature about-signature--floating">
              <span className="about-signature__label">Bienvenue dans le</span>
              <span className="about-signature__name font-serif">
                Cercle des Éveillés de la Vie
              </span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
