import { AboutSection } from "@/components/landing/AboutSection";
import { EventsCarousel } from "@/components/landing/EventsCarousel";
import { ExpertsCarousel } from "@/components/landing/ExpertsCarousel";
import { FormatsSection } from "@/components/landing/FormatsSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { PricingSection } from "@/components/landing/PricingSection";

import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ThemesGrid } from "@/components/landing/ThemesGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FadeIn>
          <AboutSection />
        </FadeIn>
        <FadeIn>
          <FormatsSection />
        </FadeIn>
        <FadeIn>
          <EventsCarousel />
        </FadeIn>
        <FadeIn>
          <ThemesGrid />
        </FadeIn>
        <FadeIn>
          <ExpertsCarousel />
        </FadeIn>
        <FadeIn>
          <TestimonialsSection />
        </FadeIn>
        <FadeIn>
          <PricingSection />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
