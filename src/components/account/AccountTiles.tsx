import {
  CalendarDays,
  CreditCard,
  Gift,
  Heart,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  favorites,
  referral,
  subscription,
  upcomingEvents,
} from "@/data/account";
import type { EventVariant } from "@/data/landing";
import { cn } from "@/lib/utils";

const dot: Record<EventVariant, string> = {
  visio: "bg-terracotta",
  presentiel: "bg-sage",
  signature: "bg-gold",
  fenetre: "bg-anthracite",
};

function Tile({
  title,
  icon: Icon,
  action,
  children,
}: {
  title: string;
  icon: LucideIcon;
  action: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-sm border border-foreground/10 bg-background p-6 md:p-7">
      <div className="mb-5 flex items-center gap-2.5">
        <Icon className="size-5 text-terracotta" aria-hidden="true" />
        <h2 className="font-serif text-[20px] font-medium md:text-[22px]">
          {title}
        </h2>
      </div>
      <div className="flex-1">{children}</div>
      <div className="mt-5">
        <button
          type="button"
          className="font-sans text-[15px] font-medium underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
        >
          {action}
        </button>
      </div>
    </div>
  );
}

export function AccountTiles() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Mon abonnement */}
      <Tile title="Mon abonnement" icon={CreditCard} action="Gérer">
        <p className="font-serif text-[32px] font-medium leading-none">
          {subscription.planName}
        </p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-serif text-[28px] font-medium">
            {subscription.price}
          </span>
          <span className="font-serif text-[18px] text-terracotta">&euro;</span>
          <span className="font-sans text-sm text-muted-foreground">
            / {subscription.period}
          </span>
        </div>
        <p className="mt-3 font-sans text-sm text-muted-foreground">
          {subscription.nextBilling}
        </p>
      </Tile>

      {/* Mes prochains rendez-vous */}
      <Tile
        title="Mes prochains rendez-vous"
        icon={CalendarDays}
        action="Voir tout"
      >
        <ul className="flex flex-col">
          {upcomingEvents.map((event, i) => (
            <li
              key={event.id}
              className={cn(
                "flex items-center gap-3 py-2.5",
                i > 0 && "border-t border-foreground/[0.08]",
              )}
            >
              <span
                className={cn(
                  "size-2 shrink-0 rounded-full",
                  dot[event.variant],
                )}
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-serif text-[16px] font-medium leading-tight">
                  {event.title}
                </p>
                <p className="font-sans text-[13px] text-muted-foreground">
                  {event.date} · {event.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Tile>

      {/* Mes favoris */}
      <Tile title="Mes favoris" icon={Heart} action="Tous mes favoris">
        <div className="grid grid-cols-3 gap-2.5">
          {favorites.map((fav) => (
            <div
              key={fav.id}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={fav.image}
                alt={fav.title}
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Tile>

      {/* Mon parrainage */}
      <Tile title="Mon parrainage" icon={Gift} action="Inviter">
        <p className="font-sans text-sm text-muted-foreground">
          Votre code personnel
        </p>
        <div className="mt-2 rounded-sm border border-dashed border-gold/60 bg-gold/[0.07] px-4 py-3 text-center font-serif text-[20px] font-medium tracking-[0.18em]">
          {referral.code}
        </div>
        <p className="mt-4 font-sans text-sm text-muted-foreground">
          Filleuls parrainés{" "}
          <span className="font-medium text-foreground">
            {referral.count} / {referral.max}
          </span>
        </p>
      </Tile>
    </div>
  );
}
