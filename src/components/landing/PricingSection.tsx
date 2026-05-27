import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { plans } from "@/data/landing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24 bg-beige"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Rejoignez le cercle"
          title="Choisissez votre formule"
          id="pricing-heading"
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col rounded-sm bg-background p-6 md:p-8",
                plan.highlighted && "border border-gold ring-1 ring-gold/30",
              )}
            >
              {plan.highlighted && (
                <Badge variant="signature" className="mb-4 self-start">
                  Recommande
                </Badge>
              )}

              <h3 className="font-serif text-[24px] font-medium md:text-[28px]">
                {plan.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-[40px] font-medium">
                  {plan.price}&nbsp;&euro;
                </span>
                <span className="font-sans text-base text-muted-foreground">
                  / {plan.period}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-sans text-[15px] leading-snug"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-terracotta" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "secondary"}
                className="mt-8 w-full"
              >
                Choisir cette formule
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center font-sans text-base text-muted-foreground">
          Sans engagement. Resiliez a tout moment.
        </p>
      </Container>
    </section>
  );
}
