"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(enterTimer);
  }, []);

  useEffect(() => {
    // Parallax only on pointer-precise / larger viewports. On mobile the
    // browser address bar collapsing on scroll changes scrollY abruptly, which
    // makes the translated background jump and exposes a gap below it.
    const allowParallax = window.matchMedia("(min-width: 768px)").matches;
    const onScroll = () => {
      if (allowParallax && bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-svh items-end justify-center overflow-hidden">
      {/* Full-bleed background photograph. Anchored top and sized to the
          *largest* viewport (lvh) so it always covers the hero even when the
          mobile address bar collapses — the section itself stays at svh, so the
          image's object-cover fit no longer re-scales (zoom effect) on scroll. */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 top-0 -z-20 h-[100lvh]"
        aria-hidden="true"
      >
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-100 contrast-[1.05] saturate-[1.05]"
          style={{
            animation: entered
              ? "hero-ken-burns 8s ease-out 0.2s both"
              : "none",
          }}
        />
      </div>

      {/* Top scrim — keeps the header legible over the bright sky and fades out
          well above the faces (which begin ~12% down the frame). */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(40,34,28,0.42) 0%, rgba(40,34,28,0.12) 12%, transparent 22%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom scrim for text legibility — fully transparent across the upper
          half so all nine faces stay bright and uncovered, then deepens to a
          warm dark over the lap band where the copy sits. A faint gold glow at
          the base ties it to the brand palette. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 75% 45% at 50% 98%, rgba(196,168,122,0.12) 0%, transparent 60%), linear-gradient(to top, rgba(28,22,18,0.92) 0%, rgba(28,22,18,0.74) 14%, rgba(28,22,18,0.48) 28%, rgba(28,22,18,0.22) 40%, transparent 48%)",
        }}
        aria-hidden="true"
      />

      {/* Opening vignette (fades out after load — purely a cinematic reveal) */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
          animation: "hero-vignette-open 1.5s ease-out 0.2s both",
        }}
        aria-hidden="true"
      />

      {/* Content with staggered reveal, anchored to the bottom safe zone so it
          never covers the group's faces. */}
      <div className="relative w-full px-4 pb-10 text-center text-creme md:pb-16">
        <h1
          className="mx-auto max-w-none whitespace-nowrap font-serif text-[28px] font-normal leading-[1.1] sm:text-[36px] md:text-[56px]"
          style={{
            textShadow:
              "0 1px 2px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6), 0 4px 22px rgba(0,0,0,0.45)",
            animation: entered
              ? "hero-reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both"
              : "none",
          }}
        >
          Vivre enfin !
        </h1>

        <p
          className="mx-auto mt-3 max-w-2xl font-serif text-[19px] font-normal leading-snug text-creme/95 sm:text-[22px] md:mt-5 md:text-[26px]"
          style={{
            textShadow:
              "0 1px 2px rgba(0,0,0,0.75), 0 2px 14px rgba(0,0,0,0.5)",
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both"
              : "none",
          }}
        >
          Apprendre, Partager, Échanger, Découvrir
        </p>

        <div
          className="mx-auto mt-4 h-px w-20 origin-center bg-gold md:mt-6"
          style={{
            animation: entered
              ? "hero-gold-line 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both"
              : "none",
            transform: "scaleX(0)",
          }}
          aria-hidden="true"
        />

        <p
          className="mt-4 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-creme/90 md:mt-6"
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.7), 0 1px 12px rgba(0,0,0,0.5)",
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both"
              : "none",
          }}
        >
          <span className="block sm:inline">Les rendez-vous du savoir</span>
          <span className="hidden sm:inline"> &middot; </span>
          <span className="block sm:inline">Ateliers en présentiel</span>
          <span className="hidden sm:inline"> &middot; </span>
          <span className="block sm:inline">Escapades culturelles</span>
        </p>

        <div
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 md:mt-8"
          style={{
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both"
              : "none",
          }}
        >
          <Button
            size="lg"
            nativeButton={false}
            render={(props) => <Link href="/entrer" {...props} />}
          >
            Vous abonner
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-creme/60 bg-foreground/55 text-creme hover:bg-creme hover:text-foreground"
            nativeButton={false}
            render={(props) => <a href="#formats" {...props} />}
          >
            Découvrir le programme
          </Button>
        </div>
      </div>
    </section>
  );
}
