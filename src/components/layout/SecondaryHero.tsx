import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface SecondaryHeroProps {
  surtitre: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  /** Texte alternatif ; vide si l'image est purement décorative. */
  imageAlt?: string;
  cta?: { label: string; href: string };
}

export function SecondaryHero({
  surtitre,
  title,
  subtitle,
  image,
  imageAlt = "",
  cta,
}: SecondaryHeroProps) {
  return (
    <section className="relative flex min-h-[66vh] items-center overflow-hidden md:min-h-[72vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%] brightness-[1.03]"
      />
      {/* Voile chaud pour la lisibilité du texte crème */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2520]/65 via-[#3d3225]/45 to-[#1f2233]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(0,0,0,0)_0%,rgba(31,34,51,0.35)_100%)]" />

      <Container className="relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-2xl">
          <p className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.22em] text-creme/75">
            {surtitre}
          </p>
          <div aria-hidden="true" className="mb-6 h-px w-16 bg-gold" />
          <h1 className="font-serif text-[34px] font-medium leading-[1.1] text-creme drop-shadow-sm md:text-[52px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl font-sans text-[17px] leading-relaxed text-creme/85 md:text-[18px]">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-8">
              <Link
                href={cta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2.5",
                )}
              >
                {cta.label}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
