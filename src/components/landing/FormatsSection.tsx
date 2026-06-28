import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

const formats = [
  {
    title: "Les rendez-vous du savoir",
    description:
      "Depuis chez vous, en visio, des spécialistes viennent partager leurs connaissances. Posez vos questions et échangez avec eux.",
    link: "/rendez-vous-du-savoir",
    image:
      "https://image.shutterstock.com/image-photo/serious-elder-grey-haired-college-600nw-2156185771.jpg",
  },
  {
    title: "Les Ateliers",
    description:
      "Ateliers en présentiel : profitez, en petits groupes, d'expériences et de lieux soigneusement choisis.",
    link: "/rendez-vous",
    image:
      "https://image.shutterstock.com/image-photo/when-pouring-red-wine-into-glass-600nw-2681993181.jpg",
  },
  {
    title: "Fenêtres sur le monde",
    description:
      "Voyagez depuis chez vous et découvrez, avec des guides, des sites incroyables.",
    link: "/fenetres-sur-le-monde",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=80",
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
