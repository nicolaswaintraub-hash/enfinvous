import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  surtitre?: string;
  title: string;
  text?: string;
  ctaLabel?: string;
  href?: string;
}

export function CtaBanner({
  surtitre = "Rejoignez le cercle",
  title,
  text,
  ctaLabel = "Je rejoins le cercle",
  href = "/#abonnement",
}: CtaBannerProps) {
  return (
    <section className="bg-anthracite py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-creme/60">
            {surtitre}
          </p>
          <div aria-hidden="true" className="mb-6 h-px w-16 bg-gold" />
          <h2 className="font-serif text-[28px] font-medium leading-tight text-creme md:text-[40px]">
            {title}
          </h2>
          {text && (
            <p className="mt-4 max-w-xl font-sans text-[17px] leading-relaxed text-creme/75 md:text-[18px]">
              {text}
            </p>
          )}
          <div className="mt-8">
            <Link
              href={href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group gap-2.5 hover:bg-creme hover:text-anthracite",
              )}
            >
              {ctaLabel}
              <ArrowRight className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
