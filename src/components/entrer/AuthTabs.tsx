"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { MemberModal } from "@/components/ui/member-modal";
import { cn } from "@/lib/utils";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

const tabs = [
  { id: "login", label: "Je me connecte" },
  { id: "signup", label: "Je crée mon compte" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function AuthTabs() {
  const [tab, setTab] = useState<TabId>("login");
  const [forgotOpen, setForgotOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Entrer dans le cercle"
        className="mb-8 flex gap-8 border-b border-foreground/10"
      >
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active}
              aria-controls="auth-panel"
              onClick={() => setTab(t.id)}
              className={cn(
                "relative -mb-px pb-3 font-sans text-[16px] font-medium transition-colors",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gold"
                />
              )}
            </button>
          );
        })}
      </div>

      <div id="auth-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {tab === "login" ? (
          <LoginForm
            onForgot={() => setForgotOpen(true)}
            onSuccess={() => setWelcomeOpen(true)}
          />
        ) : (
          <SignupForm onSuccess={() => setWelcomeOpen(true)} />
        )}
      </div>

      <p className="mt-8 text-center font-sans text-[13px] text-muted-foreground">
        <button
          type="button"
          onClick={() => setForgotOpen(true)}
          className="underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
        >
          Mot de passe oublié
        </button>{" "}
        ·{" "}
        <span className="underline decoration-gold underline-offset-4">
          CGU
        </span>{" "}
        ·{" "}
        <span className="underline decoration-gold underline-offset-4">
          RGPD
        </span>
      </p>

      {/* Modale décorative — mot de passe oublié */}
      <MemberModal
        open={forgotOpen}
        onOpenChange={setForgotOpen}
        surtitre="Mot de passe oublié"
        title="Un instant, on s'en occupe"
        description="Indiquez-nous votre adresse e-mail et vous recevrez un lien pour choisir un nouveau mot de passe."
      >
        <button
          type="button"
          onClick={() => setForgotOpen(false)}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full",
          )}
        >
          Recevoir le lien
        </button>
      </MemberModal>

      {/* Modale décorative — bienvenue */}
      <MemberModal
        open={welcomeOpen}
        onOpenChange={setWelcomeOpen}
        surtitre="Bienvenue"
        title="Bienvenue dans le cercle"
        description="Votre place est réservée. Votre espace membre vous attend, avec vos rendez-vous et vos privilèges."
        signature="Au plaisir de vous y retrouver."
      >
        <Link
          href="/mon-compte"
          onClick={() => setWelcomeOpen(false)}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full",
          )}
        >
          Découvrir mon espace
        </Link>
      </MemberModal>
    </div>
  );
}
