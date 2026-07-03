import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { expertContact } from "@/data/landing";
import { ExpertContactForm } from "./ExpertContactForm";

/**
 * Page « Devenir expert » — recrutement des intervenants (et non des membres).
 * Rythme de page complet : hero éditorial clair adressé à l'expert (accent
 * olive, trait dessiné, l'adresse mail en unique porte d'entrée), les raisons
 * de rejoindre le Cercle, le déroulé d'une intervention, puis la « fiche » de
 * proposition. Réutilise les tokens dorés (about-*, expert-contact-*).
 */
export function ExpertContactPage() {
  return (
    <>
      {/* ── Hero — l'invitation à l'intervenant, registre éditorial clair ────
          Pas de photo : le savoir prend toute la place. Surtitre au filet doré,
          accent olive souligné d'un trait dessiné « à la main », et l'adresse
          mail posée comme unique porte d'entrée. */}
      <section className="relative overflow-hidden bg-creme pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
        <Container>
          <div className="max-w-3xl">
            <p className="about-kicker mb-6 md:mb-7">
              {expertContact.surtitre}
            </p>

            <h1 className="font-serif text-[38px] font-medium leading-[1.12] text-foreground md:text-[58px] md:leading-[1.08] lg:text-[64px]">
              {expertContact.title.lead}
              <span className="relative inline-block whitespace-nowrap text-olive">
                {expertContact.title.accent}
                {/* Trait dessiné « à la main » — vert plus clair, sous le mot */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.2em] h-[0.45em] w-full overflow-visible"
                >
                  <path
                    d="M3 9C58 14 132 14 190 9.5C243 5.5 283 5 297 8"
                    stroke="#8caf52"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              {expertContact.title.tail}
            </h1>

            <p className="mt-7 max-w-xl font-sans text-[17px] leading-relaxed text-muted-foreground md:mt-8 md:text-[19px]">
              {expertContact.heroSubtitle}
            </p>

            <a
              href={`mailto:${expertContact.email}`}
              className="group mt-9 inline-flex items-center gap-4 md:mt-11"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-olive text-creme shadow-[0_12px_26px_-12px_rgba(103,135,58,0.75)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <Mail className="size-6" strokeWidth={1.75} />
              </span>
              <span className="font-serif text-[22px] font-medium text-olive underline-offset-[6px] transition-all group-hover:underline md:text-[26px]">
                {expertContact.email}
              </span>
            </a>
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
              <p className="about-kicker justify-center">Comment ça se passe</p>
              <h2
                id="expert-pourquoi-heading"
                className="mt-4 font-serif text-[28px] font-medium leading-tight text-foreground md:text-[40px]"
              >
                Trois étapes, et vous intervenez
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
