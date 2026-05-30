import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { deroulementSteps } from "@/data/rendezvous";

export function DeroulementBand() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="deroulement-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Le déroulé"
          title="Comment se déroule un rendez-vous ?"
          separator
          id="deroulement-heading"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {deroulementSteps.map((step) => (
            <div key={step.num} className="text-center sm:text-left">
              <span className="font-serif text-[40px] font-medium leading-none text-gold">
                {step.num}
              </span>
              <div
                aria-hidden="true"
                className="mx-auto my-4 h-px w-12 bg-gold sm:mx-0"
              />
              <h3 className="mb-2 font-serif text-[20px] font-medium md:text-[22px]">
                {step.title}
              </h3>
              <p className="font-sans text-[16px] leading-relaxed text-foreground/80">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
