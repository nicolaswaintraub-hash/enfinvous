import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AuthTabs } from "@/components/entrer/AuthTabs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Entrer dans le cercle",
  description:
    "Connectez-vous ou créez votre compte pour rejoindre le cercle VivreEnfin.",
};

export default function EntrerPage() {
  return (
    <>
      <Header solid />
      <main id="main-content">
        <div className="grid grid-cols-1 lg:min-h-dvh lg:grid-cols-2">
          {/* Visuel */}
          <div className="relative h-[280px] lg:h-auto">
            <Image
              src="https://image.shutterstock.com/image-photo/senior-caucasian-man-70-years-smiling-600nw-1551174155.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite/70 via-anthracite/20 to-anthracite/30" />
            <div className="absolute inset-x-0 bottom-0 hidden p-10 lg:block">
              <p className="font-serif text-2xl font-medium text-creme">
                Vivre·Enfin
              </p>
              <p className="mt-2 max-w-sm font-serif text-[19px] italic leading-relaxed text-creme/85">
                « Vivre enfin ! »
              </p>
            </div>
          </div>

          {/* Formulaires */}
          <div className="flex flex-col bg-creme px-5 pt-20 pb-16 sm:px-8 lg:justify-center lg:px-12 xl:px-20">
            <div className="mx-auto w-full max-w-md">
              <nav
                aria-label="Fil d'Ariane"
                className="mb-7 font-sans text-sm text-muted-foreground"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-terracotta"
                >
                  Accueil
                </Link>
                <span className="mx-2 text-foreground/30">/</span>
                <span className="text-foreground/80">
                  Entrer dans le cercle
                </span>
              </nav>

              <h1 className="mb-2 font-serif text-[28px] font-medium leading-tight md:text-[34px]">
                Entrer dans le cercle
              </h1>
              <p className="mb-8 font-sans text-[16px] leading-relaxed text-foreground/70">
                Retrouvez vos rendez-vous, vos replays et vos privilèges de
                membre.
              </p>

              <AuthTabs />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
