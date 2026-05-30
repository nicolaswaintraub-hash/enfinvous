"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FloatingInput } from "./FloatingInput";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cpRe = /^\d{5}$/;

function passwordScore(pw: string): number {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const strengthMeta = [
  { label: "", bar: "bg-foreground/15", text: "text-muted-foreground" },
  { label: "Faible", bar: "bg-destructive", text: "text-destructive" },
  { label: "Moyen", bar: "bg-gold", text: "text-[#8a6d3b]" },
  { label: "Correct", bar: "bg-gold", text: "text-[#8a6d3b]" },
  { label: "Robuste", bar: "bg-sage", text: "text-foreground/70" },
];

interface SignupFormProps {
  onSuccess: () => void;
}

type Errors = Partial<
  Record<
    "civilite" | "prenom" | "nom" | "email" | "password" | "cp" | "cgu",
    string
  >
>;

export function SignupForm({ onSuccess }: SignupFormProps) {
  const [civilite, setCivilite] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cp, setCp] = useState("");
  const [parrain, setParrain] = useState("");
  const [cgu, setCgu] = useState(false);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const score = passwordScore(password);
  const meta = strengthMeta[score];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!civilite) next.civilite = "Veuillez indiquer votre civilité.";
    if (!prenom.trim()) next.prenom = "Champ requis.";
    if (!nom.trim()) next.nom = "Champ requis.";
    if (!emailRe.test(email))
      next.email = "Veuillez saisir une adresse e-mail valide.";
    if (password.length < 8)
      next.password = "Au moins 8 caractères sont requis.";
    if (!cpRe.test(cp)) next.cp = "Code postal à 5 chiffres.";
    if (!cgu) next.cgu = "Veuillez accepter les conditions pour continuer.";
    setErrors(next);
    if (Object.keys(next).length === 0) onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Civilité */}
      <fieldset>
        <legend className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
          Civilité
        </legend>
        <div className="flex gap-3">
          {["Madame", "Monsieur"].map((opt) => (
            <label
              key={opt}
              className={cn(
                "flex flex-1 cursor-pointer items-center gap-2.5 rounded-sm border px-4 py-3 transition-colors",
                civilite === opt
                  ? "border-terracotta bg-terracotta/5"
                  : "border-foreground/20 hover:border-foreground/40",
              )}
            >
              <input
                type="radio"
                name="civilite"
                value={opt}
                checked={civilite === opt}
                onChange={() => setCivilite(opt)}
                className="size-4 accent-[#b3543d]"
              />
              <span className="font-sans text-[16px]">{opt}</span>
            </label>
          ))}
        </div>
        {errors.civilite && (
          <p className="mt-1.5 font-sans text-[13px] text-destructive">
            {errors.civilite}
          </p>
        )}
      </fieldset>

      {/* Prénom / Nom */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FloatingInput
          id="signup-prenom"
          label="Prénom"
          autoComplete="given-name"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          error={errors.prenom}
        />
        <FloatingInput
          id="signup-nom"
          label="Nom"
          autoComplete="family-name"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          error={errors.nom}
        />
      </div>

      <FloatingInput
        id="signup-email"
        type="email"
        label="Adresse e-mail"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <div>
        <FloatingInput
          id="signup-password"
          type={show ? "text" : "password"}
          label="Mot de passe"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          trailing={
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              aria-label={
                show ? "Masquer le mot de passe" : "Afficher le mot de passe"
              }
              className="inline-flex size-9 items-center justify-center rounded-sm text-foreground/50 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {show ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          }
        />
        {password && (
          <div className="mt-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors",
                    i < score ? meta.bar : "bg-foreground/15",
                  )}
                />
              ))}
            </div>
            <p
              className={cn(
                "mt-1.5 font-sans text-[13px] font-medium",
                meta.text,
              )}
            >
              Robustesse : {meta.label || "à compléter"}
            </p>
          </div>
        )}
      </div>

      {/* Code postal / Parrainage */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FloatingInput
          id="signup-cp"
          label="Code postal"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          value={cp}
          onChange={(e) => setCp(e.target.value.replace(/\D/g, ""))}
          error={errors.cp}
        />
        <FloatingInput
          id="signup-parrain"
          label="Code parrainage (optionnel)"
          value={parrain}
          onChange={(e) => setParrain(e.target.value)}
        />
      </div>

      {/* CGU */}
      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={cgu}
            onChange={(e) => setCgu(e.target.checked)}
            className="mt-1 size-4 accent-[#b3543d]"
          />
          <span className="font-sans text-[15px] leading-relaxed text-foreground/80">
            J'accepte les{" "}
            <span className="font-medium text-foreground underline decoration-gold underline-offset-2">
              conditions générales
            </span>{" "}
            et la{" "}
            <span className="font-medium text-foreground underline decoration-gold underline-offset-2">
              politique de confidentialité
            </span>
            .
          </span>
        </label>
        {errors.cgu && (
          <p className="mt-1.5 font-sans text-[13px] text-destructive">
            {errors.cgu}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Entrer dans le cercle
      </Button>
    </form>
  );
}
