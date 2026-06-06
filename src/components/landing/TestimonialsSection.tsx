import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import { testimonials } from "@/data/landing";

export function TestimonialsSection() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          title="Ce que vivent nos membres"
          id="testimonials-heading"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={testimonial.name} className="text-center">
              {i > 0 && (
                <Separator className="mx-auto mb-10 w-16 bg-gold md:hidden" />
              )}
              <blockquote className="font-serif text-lg italic leading-relaxed md:text-[20px]">
                &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
              </blockquote>
              <p className="mt-4 font-sans text-base text-muted-foreground">
                — {testimonial.name}, {testimonial.age} ans, {testimonial.city}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
