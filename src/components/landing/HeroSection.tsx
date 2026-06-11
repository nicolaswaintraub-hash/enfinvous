"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [hideIndicator, setHideIndicator] = useState(false);

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
      setHideIndicator(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
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
          src="https://image.shutterstock.com/image-photo/happy-senior-friends-laughing-together-on-600nw-2786385961.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] brightness-125 contrast-[1.02] md:object-[center_100%]"
          style={{
            animation: entered
              ? "hero-ken-burns 8s ease-out 0.2s both"
              : "none",
          }}
        />
      </div>

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3d3225]/65 via-[#5c4a3a]/50 to-[#2a2520]/65 md:from-[#3d3225]/55 md:via-[#5c4a3a]/40 md:to-[#2a2520]/55"
        aria-hidden="true"
      />

      {/* Warm light overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(196,168,122,0.08) 0%, transparent 70%), linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Opening vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
          animation: "hero-vignette-open 1.5s ease-out 0.2s both",
        }}
        aria-hidden="true"
      />

      {/* Content with staggered reveal */}
      <div className="relative mt-16 px-4 text-center text-creme">
        {/* Localized scrim behind the text for legibility (does not dim the rest of the photo) */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] max-w-[140vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(24,20,17,0.62) 0%, rgba(24,20,17,0.3) 55%, transparent 78%)",
          }}
          aria-hidden="true"
        />
        <p
          className={cn(
            "mb-6 font-sans text-[15px] font-medium uppercase tracking-[0.2em] text-creme/90",
            entered ? "opacity-100" : "opacity-0",
          )}
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.7), 0 1px 12px rgba(0,0,0,0.5)",
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both"
              : "none",
          }}
        >
          Le cercle des éveillés de la vie
        </p>

        <div
          className="mx-auto mb-8 h-px w-20 origin-center bg-gold"
          style={{
            animation: entered
              ? "hero-gold-line 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both"
              : "none",
            transform: "scaleX(0)",
          }}
          aria-hidden="true"
        />

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
          Vivre enfin passionnément !
        </h1>

        <div
          className="mx-auto mt-8 h-px w-20 origin-center bg-gold"
          style={{
            animation: entered
              ? "hero-gold-line 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both"
              : "none",
            transform: "scaleX(0)",
          }}
          aria-hidden="true"
        />

        <p
          className="mt-8 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-creme/90"
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
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both"
              : "none",
          }}
        >
          <Button size="lg">Vous abonner</Button>
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

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500",
          hideIndicator ? "opacity-0" : "opacity-100",
        )}
        style={{
          animation: entered
            ? "hero-reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.9s both"
            : "none",
        }}
        aria-hidden="true"
      >
        <ChevronDown className="size-5 animate-bounce text-creme/40" />
      </div>
    </section>
  );
}
