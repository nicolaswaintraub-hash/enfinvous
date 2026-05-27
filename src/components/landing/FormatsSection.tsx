import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const formats = [
  {
    title: "Masterclass Visio",
    description:
      "Depuis chez vous, en direct, avec des intervenants d'exception. Posez vos questions, echangez, revivez en replay.",
    link: "/masterclasses-visio",
    image:
      "https://image.shutterstock.com/image-photo/older-woman-learning-digital-skills-during-600nw-2705788075.jpg",
  },
  {
    title: "Les Rendez-vous",
    description:
      "Rencontres et salons en presentiel, en petits groupes, dans des lieux d'exception soigneusement choisis.",
    link: "/rendez-vous",
    image:
      "https://image.shutterstock.com/image-photo/happy-senior-woman-welcoming-multiracial-friends-600nw-2139103751.jpg",
  },
  {
    title: "Fenetres sur le monde",
    description:
      "Escapades et voyages culturels en cercle restreint, accompagnes par des experts passionnes.",
    link: "/rendez-vous",
    image:
      "https://image.shutterstock.com/image-photo/group-positive-senior-people-looking-map-600nw-1843893163.jpg",
  },
];

export function FormatsSection() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      aria-labelledby="formats-heading"
    >
      <Container>
        <SectionHeading
          surtitre="Nos formats"
          title="Trois facons de vivre vos passions"
          separator
          id="formats-heading"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
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
        </div>
      </Container>
    </section>
  );
}
