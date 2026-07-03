"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { expertContact } from "@/data/landing";

const PRESENTATION_MAX = 500;

export function ExpertContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [presentationLength, setPresentationLength] = useState(0);
  const [typeError, setTypeError] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);

  // Préfixe stable pour relier chaque label à son champ (htmlFor/id).
  const fieldId = useId();
  const nomId = `${fieldId}-nom`;
  const emailId = `${fieldId}-email`;
  const telephoneId = `${fieldId}-telephone`;
  const expertiseId = `${fieldId}-expertise`;
  const villeId = `${fieldId}-ville`;
  const presentationId = `${fieldId}-presentation`;
  const lienId = `${fieldId}-lien`;
  const typeErrorId = `${fieldId}-type-error`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Le champ « Type d'intervention » est obligatoire : au moins une case cochée.
    const checked = event.currentTarget.querySelectorAll(
      'input[name="typeIntervention"]:checked',
    );
    if (checked.length === 0) {
      setTypeError(true);
      return;
    }
    // Site statique, aucun backend : on confirme en place plutôt que d'envoyer.
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
          {expertContact.confirmation.title}
        </p>
        <p className="max-w-sm font-sans text-[15px] leading-relaxed text-muted-foreground">
          {expertContact.confirmation.body}
        </p>
        <Link
          href={expertContact.confirmation.ctaHref}
          className="group/link mt-1 inline-flex items-center gap-2 font-sans text-[15px] font-medium text-terracotta underline decoration-gold underline-offset-4 transition-colors hover:text-foreground"
        >
          {expertContact.confirmation.ctaLabel}
          <ArrowRight className="size-[16px] transition-transform duration-300 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* 1 · Nom et prénom — 2a · Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={nomId} className="expert-contact-label">
            Votre nom et prénom *
          </label>
          <input
            id={nomId}
            name="nom"
            type="text"
            required
            autoComplete="name"
            placeholder="Marie Dupont"
            className="expert-contact-field"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={emailId} className="expert-contact-label">
            Votre email *
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

      {/* 2b · Téléphone — 3 · Domaine d'expertise */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={telephoneId} className="expert-contact-label">
            Votre téléphone
          </label>
          <input
            id={telephoneId}
            name="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 00 00 00 00"
            className="expert-contact-field"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={expertiseId} className="expert-contact-label">
            Votre domaine d'expertise *
          </label>
          <input
            id={expertiseId}
            name="expertise"
            type="text"
            required
            placeholder="Ex : Sommelière, historienne, céramiste…"
            className="expert-contact-field"
          />
        </div>
      </div>

      {/* 4 · Type d'intervention — multi-sélection (au moins un) */}
      <fieldset
        className="flex flex-col gap-2"
        aria-describedby={typeError ? typeErrorId : undefined}
      >
        <legend className="expert-contact-label mb-2">
          Quel type vous intéresse ? *
        </legend>
        <div className="flex flex-col gap-2.5">
          {expertContact.interventionTypes.map((type) => (
            <label key={type.value} className="expert-contact-option">
              <input
                type="checkbox"
                name="typeIntervention"
                value={type.value}
                onChange={() => setTypeError(false)}
                className="expert-contact-checkbox"
              />
              <span className="flex flex-col gap-0.5">
                <span className="font-sans text-[15px] font-medium text-foreground">
                  {type.label}
                </span>
                <span className="font-sans text-[13px] leading-snug text-muted-foreground">
                  {type.description}
                </span>
              </span>
            </label>
          ))}
        </div>
        {typeError ? (
          <p
            id={typeErrorId}
            className="font-sans text-[13px] text-destructive"
          >
            Merci de choisir au moins un type d'intervention.
          </p>
        ) : null}
      </fieldset>

      {/* 5 · Ville ou région */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor={villeId} className="expert-contact-label">
          Votre ville ou région *
        </label>
        <input
          id={villeId}
          name="ville"
          type="text"
          required
          placeholder="Paris, Normandie, Lyon…"
          className="expert-contact-field"
        />
      </div>

      {/* 6 · Présentation — 500 caractères maximum */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor={presentationId} className="expert-contact-label">
          Parlez-nous de vous *
        </label>
        <textarea
          id={presentationId}
          name="presentation"
          rows={4}
          required
          maxLength={PRESENTATION_MAX}
          onChange={(event) => setPresentationLength(event.target.value.length)}
          placeholder="Décrivez votre parcours, votre approche et l'idée de session ou d'atelier que vous imaginez. Pas besoin d'un dossier — quelques lignes suffisent."
          className="expert-contact-field resize-none"
        />
        <p className="text-right font-sans text-[12px] text-muted-foreground">
          {presentationLength} / {PRESENTATION_MAX}
        </p>
      </div>

      {/* 7 · Lien */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor={lienId} className="expert-contact-label">
          Un lien pour en savoir plus
        </label>
        <input
          id={lienId}
          name="lien"
          type="url"
          placeholder="Site web, LinkedIn…"
          className="expert-contact-field"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="abo-cta group/cta mt-1 w-full gap-2.5 text-[16px]"
      >
        Envoyer ma candidature
        <ArrowRight className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1" />
      </Button>

      <p className="text-center font-sans text-[13px] text-muted-foreground">
        Vous préférez écrire ?{" "}
        <a
          href={`mailto:${expertContact.email}?subject=${encodeURIComponent(
            "Candidature intervenant",
          )}&body=${encodeURIComponent(
            "Bonjour,\n\nJe souhaite proposer une intervention chez VivreEnfin.\n\nNom et prénom :\nEmail :\nTéléphone :\nDomaine d'expertise :\nType d'intervention :\nVille ou région :\nPrésentation :\nLien :\n",
          )}`}
          className="font-medium text-terracotta underline decoration-gold underline-offset-4 transition-colors hover:text-foreground"
        >
          Écrivez-nous directement.
        </a>
      </p>
    </form>
  );
}
