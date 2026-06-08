import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const formats = [
  {
    title: "Les rendez-vous du savoir",
    description:
      "Depuis chez vous, en visio, avec des intervenants d'exception. Posez vos questions, échangez, revivez en replay.",
    link: "/rendez-vous-du-savoir",
    image:
      "https://image.shutterstock.com/image-photo/serious-elder-grey-haired-college-600nw-2156185771.jpg",
  },
  {
    title: "Les Ateliers",
    description:
      "Ateliers et salons en présentiel, en petits groupes, dans des lieux d'exception soigneusement choisis.",
    link: "/rendez-vous",
    image:
      "https://image.shutterstock.com/image-photo/when-pouring-red-wine-into-glass-600nw-2681993181.jpg",
  },
  {
    title: "Fenêtres sur le monde",
    description:
      "Escapades et voyages culturels d'exception, accompagnés par des experts passionnés.",
    link: "/rendez-vous",
    image:
      "https://image.shutterstock.com/image-photo/castle-versailles-beautiful-glow-golden-hour-600nw-2556716313.jpg",
  },
];

export function FormatsSection() {
  return (
    <section
      id="formats"
      className="scroll-mt-24 py-12 md:py-16 lg:py-24"
      aria-labelledby="formats-heading"
    >
      <Container>
        <SectionHeading title="Nos formats" separator id="formats-heading" />

        <FadeIn
          stagger
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
        >
          {formats.map((format) => (
            <div key={format.title} className="text-center">
              <div className="relative mx-auto mb-6 aspect-square w-full max-w-[280px] overflow-hidden rounded-sm">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 280px"
                  className="object-cover"
                />
              </div>
              <h3 className="mb-3 font-serif text-[22px] font-medium md:text-[26px]">
                {format.title}
              </h3>
              <p className="mb-4 font-sans text-[17px] leading-relaxed text-foreground/85">
                {format.description}
              </p>
              <a
                href={format.link}
                className="font-sans text-base font-medium text-foreground underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
              >
                En savoir plus
              </a>
            </div>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
