import { sideMenu } from "@/data/account";
import { BETA } from "@/lib/flags";
import { cn } from "@/lib/utils";

export function AccountSideMenu() {
  return (
    <aside className="hidden lg:block">
      <nav aria-label="Navigation de l'espace membre">
        <ul className="flex flex-col gap-1">
          {sideMenu
            .filter((item) => !BETA || item !== "Déconnexion")
            .map((item, i) => (
              <li key={item}>
                <button
                  type="button"
                  aria-current={i === 0 ? "page" : undefined}
                  className={cn(
                    "w-full rounded-sm px-3 py-2.5 text-left font-sans text-[15px] transition-colors",
                    i === 0
                      ? "bg-background font-medium text-terracotta"
                      : "text-foreground/70 hover:bg-background hover:text-terracotta",
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
}
