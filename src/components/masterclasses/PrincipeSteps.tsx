import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { principleSteps } from "@/data/masterclasses";

export function PrincipeSteps() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="principe-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Le principe"
          title="Trois gestes, et vous y êtes"
          separator
          id="principe-heading"
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
          {principleSteps.map((step) => (
            <div key={step.num} className="text-center md:text-left">
              <span className="font-serif text-[48px] font-medium leading-none text-gold">
                {step.num}
              </span>
              <div
                aria-hidden="true"
                className="mx-auto my-5 h-px w-12 bg-gold md:mx-0"
              />
              <h3 className="mb-3 font-serif text-[22px] font-medium md:text-[26px]">
                {step.title}
              </h3>
              <p className="font-sans text-[17px] leading-relaxed text-foreground/80">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
