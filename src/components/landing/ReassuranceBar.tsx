import { Headphones, Shield, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

const items = [
  { icon: Shield, label: "Sans engagement" },
  { icon: Headphones, label: "Assistance dediee" },
  { icon: Users, label: "Communaute privee" },
];

export function ReassuranceBar() {
  return (
    <section className="border-t border-foreground/5 py-10 md:py-14">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 md:gap-16">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  className="mr-6 hidden size-1.5 rounded-full bg-gold sm:block"
                  aria-hidden="true"
                />
              )}
              <item.icon className="size-5 text-foreground/70" />
              <span className="font-sans text-sm font-medium text-foreground/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
