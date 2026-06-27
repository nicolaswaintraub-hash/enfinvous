import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { expertContact } from "@/data/landing";
import { ExpertContactForm } from "./ExpertContactForm";

/**
 * Page « Devenir expert » — recrutement des intervenants (et non des membres).
 * Rythme de page complet : hero parchemin adressé à l'expert, les raisons de
 * rejoindre le Cercle, le déroulé d'une intervention, puis la « fiche » de
 * proposition. Réutilise les tokens dorés (about-*, expert-contact-*).
 */
export function ExpertContactPage() {
  return (
    <>
      {/* ── Hero — on s'adresse à l'expert, registre parchemin/or ───────────
          Sur mobile, la photo passe en plein cadre derrière le titre (même
          grammaire que le hero d'accueil) : le visage et l'accroche partagent
          le premier écran. À partir de lg, on retrouve la composition côte à
          côte d'origine. */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-creme pb-12 pt-28 md:pb-20 md:pt-32 lg:block lg:min-h-0 lg:pt-36">
        {/* Photo plein cadre — mobile uniquement (au-dessus du fond crème de la
            section, sous le contenu posé en z-10) */}
        <div className="absolute inset-0 z-0 lg:hidden" aria-hidden="true">
          <Image
            src="https://images.pexels.com/photos/8424881/pexels-photo-8424881.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_18%]"
          />
          {/* Voile chaud ancré en bas : le visage reste lumineux, le titre lisible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(35,28,22,0.9) 0%, rgba(35,28,22,0.72) 26%, rgba(45,38,30,0.32) 52%, transparent 78%)",
            }}
          />
        </div>

        <div aria-hidden="true" className="about-aura hidden lg:block" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* L'accroche */}
            <div className="max-w-xl text-creme lg:text-foreground">
              <p className="about-kicker about-kicker--onphoto mb-5 lg:mb-6">
                {expertContact.surtitre}
              </p>

              <h1 className="font-serif text-[34px] font-medium leading-[1.1] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] md:text-[52px] lg:text-[58px] lg:leading-[1.08] lg:[text-shadow:none]">
                {expertContact.title.lead}
                <span className="about-accent about-accent--onphoto">
                  {expertContact.title.accent}
                </span>
                {expertContact.title.tail}
              </h1>

              <p className="mt-5 max-w-lg font-sans text-[17px] leading-relaxed text-creme/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)] md:mt-6 md:text-[18px] lg:text-muted-foreground lg:[text-shadow:none]">
                {expertContact.heroSubtitle}
              </p>

              <a
                href="#proposer"
                className="group mt-8 inline-flex items-center gap-2.5 font-sans text-[16px] font-medium text-creme md:mt-9 lg:text-[15px] lg:text-terracotta"
              >
                <span className="underline decoration-gold decoration-1 underline-offset-[6px] transition-colors group-hover:text-gold lg:group-hover:text-foreground">
                  Proposer une intervention
                </span>
                <span className="grid size-10 place-items-center rounded-full border border-gold/60 bg-gold/15 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0.5 lg:size-9 lg:bg-gold/10 lg:backdrop-blur-none">
                  <ArrowDown className="size-4" strokeWidth={2} />
                </span>
              </a>
            </div>

            {/* La professionnelle, carnet en main — desktop : composition côte à côte */}
            <figure className="relative mx-auto hidden w-full max-w-[460px] lg:block lg:max-w-none">
              <div className="about-figure__photo relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/8424881/pexels-photo-8424881.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Une professionnelle souriante, carnet en main, prête à transmettre son savoir au Cercle"
                  fill
                  priority
                  sizes="460px"
                  className="object-cover object-[center_15%]"
                />
                <div className="about-figure__wash" />
              </div>
            </figure>
          </div>
        </Container>
      </section>

      {/* ── Pourquoi le Cercle — les trois raisons, en triptyque éditorial ── */}
      <FadeIn>
        <section
          className="bg-beige py-14 md:py-20 lg:py-24"
          aria-labelledby="expert-pourquoi-heading"
        >
          <Container>
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
              <p className="about-kicker justify-center">
                Pourquoi nous rejoindre
              </p>
              <h2
                id="expert-pourquoi-heading"
                className="mt-4 font-serif text-[28px] font-medium leading-tight text-foreground md:text-[40px]"
              >
                Ce que le Cercle vous offre
              </h2>
            </div>

            <FadeIn
              stagger
              className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-gold/30 bg-gold/30 md:grid-cols-3"
            >
              {expertContact.points.map((point, i) => (
                <div
                  key={point.title}
                  className="flex flex-col gap-4 bg-creme p-8 md:p-10"
                >
                  <span className="font-serif text-[32px] font-medium leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[21px] font-medium leading-snug text-foreground md:text-[23px]">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-relaxed text-foreground/80">
                    {point.description}
                  </p>
                </div>
              ))}
            </FadeIn>
          </Container>
        </section>
      </FadeIn>

      {/* ── La fiche — formulaire de proposition, posé comme une destination ── */}
      <FadeIn>
        <section
          id="proposer"
          className="relative overflow-hidden bg-beige py-14 scroll-mt-20 md:py-20 lg:py-24"
          aria-labelledby="expert-proposer-heading"
        >
          <Container className="relative">
            <div className="expert-contact-panel mx-auto max-w-2xl overflow-hidden rounded-lg">
              <div className="expert-contact-card px-6 py-10 sm:px-10 md:px-12 md:py-12">
                <div className="mx-auto mb-8 max-w-md text-center">
                  <p className="mb-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-terracotta">
                    Votre fiche d'intervention
                  </p>
                  <h2
                    id="expert-proposer-heading"
                    className="font-serif text-[26px] font-medium leading-tight text-foreground md:text-[32px]"
                  >
                    Présentez-nous votre intervention
                  </h2>
                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-muted-foreground md:text-base">
                    Quelques champs suffisent. Nous revenons vers vous sous 48
                    heures pour en parler de vive voix.
                  </p>
                </div>

                <ExpertContactForm />
              </div>
            </div>
          </Container>
        </section>
      </FadeIn>
    </>
  );
}
