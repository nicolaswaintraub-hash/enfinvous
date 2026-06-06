import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { plan } from "@/data/landing";

export function PricingSection() {
  return (
    <section
      id="abonnement"
      className="relative overflow-hidden py-12 md:py-16 lg:py-24 bg-beige scroll-mt-24"
      aria-labelledby="pricing-heading"
    >
      <div aria-hidden className="abo-glow" />

      <Container className="relative">
        <SectionHeading title="L'abonnement EnfinVous" id="pricing-heading" />

        <div className="abo-panel mx-auto max-w-4xl overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
            {/* Décision — nom, prix, appel à l'action */}
            <div className="flex flex-col gap-7 p-8 md:p-12">
              <span className="abo-tag inline-flex w-fit items-center rounded-full px-3.5 py-1.5 font-sans text-[12px] font-medium uppercase tracking-[0.16em]">
                Formule unique · Tout inclus
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[34px] font-medium leading-none text-foreground md:text-[44px]">
                  {plan.name}
                </h3>
                <p className="font-sans text-[15px] leading-snug text-muted-foreground md:text-base">
                  Tout l'univers EnfinVous, sans la moindre limite.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-[64px] font-medium leading-none text-foreground md:text-[72px]">
                    {plan.price}
                  </span>
                  <span className="font-serif text-[30px] font-medium leading-none text-terracotta">
                    &euro;
                  </span>
                  <span className="self-end pb-2 font-sans text-base text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
                <p className="font-sans text-[12px] text-muted-foreground/55">
                  Sans engagement · Résiliez à tout moment
                </p>
              </div>

              <Button
                size="lg"
                className="abo-cta group/cta mt-1 w-full gap-2.5 text-[16px]"
              >
                Abonnez-vous
                <ArrowRight className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1" />
              </Button>
            </div>

            {/* Inclus — les avantages */}
            <div className="border-t border-gold/30 bg-gold/[0.05] p-8 md:border-t-0 md:border-l md:p-12">
              <p className="mb-6 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-terracotta">
                Ce qui est inclus
              </p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="abo-check mt-0.5 size-6 shrink-0 rounded-full">
                      <Check className="size-[14px]" strokeWidth={2.5} />
                    </span>
                    <span className="font-sans text-[15px] leading-snug text-foreground/90 md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
