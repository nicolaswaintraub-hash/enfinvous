import { Container } from "@/components/ui/container";
import { member } from "@/data/account";

export function WelcomeBanner() {
  return (
    <section className="bg-beige">
      <Container>
        <div className="flex flex-col gap-4 py-10 md:flex-row md:items-end md:justify-between md:py-12">
          <div>
            <p className="mb-2 font-sans text-[13px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Espace membre
            </p>
            <h1 className="font-serif text-[30px] font-medium italic leading-tight md:text-[42px]">
              {member.greeting}
            </h1>
            <div aria-hidden="true" className="mt-4 h-px w-16 bg-gold" />
          </div>
          <p className="font-sans text-sm text-muted-foreground md:text-right">
            Vendredi 30 mai 2026
          </p>
        </div>
      </Container>
    </section>
  );
}
