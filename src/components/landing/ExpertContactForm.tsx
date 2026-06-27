"use client";

import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { type FormEvent, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { expertContact } from "@/data/landing";

export function ExpertContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);

  // Préfixe stable pour relier chaque label à son champ (htmlFor/id).
  const fieldId = useId();
  const nameId = `${fieldId}-nom`;
  const emailId = `${fieldId}-email`;
  const disciplineId = `${fieldId}-discipline`;
  const formatId = `${fieldId}-format`;
  const messageId = `${fieldId}-message`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Site statique, aucun backend : on confirme en place plutôt que d'envoyer.
    event.preventDefault();
    setSubmitted(true);
    // Le focus rejoint la confirmation pour les lecteurs d'écran et le clavier.
    requestAnimationFrame(() => confirmationRef.current?.focus());
  }

  if (submitted) {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        aria-live="polite"
        className="flex h-full flex-col items-center justify-center gap-4 py-8 text-center outline-none"
      >
        <span className="abo-check grid size-12 place-items-center rounded-full">
          <Check className="size-6" strokeWidth={2.5} />
        </span>
        <p className="font-serif text-[22px] font-medium leading-snug text-foreground">
          Merci, votre proposition est bien notée.
        </p>
        <p className="max-w-sm font-sans text-[15px] leading-relaxed text-muted-foreground">
          Notre équipe revient vers vous sous 48 heures pour préparer ensemble
          votre intervention.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={nameId} className="expert-contact-label">
            Votre nom
          </label>
          <input
            id={nameId}
            name="nom"
            type="text"
            required
            autoComplete="name"
            placeholder="Marie Lambert"
            className="expert-contact-field"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={emailId} className="expert-contact-label">
            Votre e-mail
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="marie@exemple.fr"
            className="expert-contact-field"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={disciplineId} className="expert-contact-label">
          Votre discipline
        </label>
        <input
          id={disciplineId}
          name="discipline"
          type="text"
          required
          placeholder="Histoire de l'art, œnologie, jardinage…"
          className="expert-contact-field"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={formatId} className="expert-contact-label">
          Format souhaité
        </label>
        <div className="relative">
          <select
            id={formatId}
            name="format"
            required
            defaultValue=""
            className="expert-contact-field appearance-none pr-10"
          >
            <option value="" disabled>
              Choisissez un format
            </option>
            {expertContact.formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-terracotta"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={messageId} className="expert-contact-label">
          Votre message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={3}
          placeholder="Présentez-nous en quelques mots ce que vous aimeriez transmettre."
          className="expert-contact-field resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="abo-cta group/cta mt-1 w-full gap-2.5 text-[16px]"
      >
        Proposer mon intervention
        <ArrowRight className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1" />
      </Button>

      <p className="text-center font-sans text-[13px] text-muted-foreground">
        Vous préférez écrire ?{" "}
        <a
          href={`mailto:${expertContact.email}?subject=${encodeURIComponent(
            "Proposition d'intervention",
          )}&body=${encodeURIComponent(
            "Bonjour,\n\nJe souhaite proposer une intervention au Cercle.\n\nNom :\nDiscipline :\nFormat souhaité :\nMon message :\n",
          )}`}
          className="font-medium text-terracotta underline decoration-gold underline-offset-4 transition-colors hover:text-foreground"
        >
          Écrivez-nous directement.
        </a>
      </p>
    </form>
  );
}
