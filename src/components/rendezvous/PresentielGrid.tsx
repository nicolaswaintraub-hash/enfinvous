import { EventCard } from "@/components/landing/EventCard";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { presentielEvents } from "@/data/rendezvous";

export function PresentielGrid() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="presentiel-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Les prochains ateliers"
          title="Ateliers privilégiés"
          separator
          id="presentiel-heading"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {presentielEvents.map((event) => (
            <EventCard key={event.id} event={event} large />
          ))}
        </div>
      </Container>
    </section>
  );
}
