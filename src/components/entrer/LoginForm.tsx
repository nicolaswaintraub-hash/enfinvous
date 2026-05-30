"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "./FloatingInput";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LoginFormProps {
  onForgot: () => void;
  onSuccess: () => void;
}

export function LoginForm({ onForgot, onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!emailRe.test(email))
      next.email = "Veuillez saisir une adresse e-mail valide.";
    if (!password) next.password = "Veuillez saisir votre mot de passe.";
    setErrors(next);
    if (Object.keys(next).length === 0) onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FloatingInput
        id="login-email"
        type="email"
        label="Adresse e-mail"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <FloatingInput
        id="login-password"
        type={show ? "text" : "password"}
        label="Mot de passe"
        autoComplete="current-password"
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
            {show ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
          </button>
        }
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onForgot}
          className="font-sans text-sm text-muted-foreground underline decoration-gold underline-offset-4 transition-colors hover:text-terracotta"
        >
          Mot de passe oublié ?
        </button>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Entrer dans le cercle
      </Button>
    </form>
  );
}
