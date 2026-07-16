"use client";

import { Video } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { MemberModal } from "@/components/ui/member-modal";

interface ZoomJoinOverlayProps {
  /** Titre de la séance, pour l'intitulé accessible du déclencheur. */
  title: string;
  /** Lien de connexion Zoom. */
  link: string;
  /** Code d'accès à saisir dans Zoom. */
  code: string;
}

/**
 * Lien étendu de la carte « séance en direct » : au clic, ouvre une modale
 * décorative présentant le lien Zoom et le code d'accès (démo). Occupe toute la
 * carte, comme le ferait le `<Link>` d'origine.
 */
export function ZoomJoinOverlay({ title, link, code }: ZoomJoinOverlayProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="sr-only">Rejoindre la séance : {title}</span>
      </button>

      <MemberModal
        open={open}
        onOpenChange={setOpen}
        surtitre="Rendez-vous du savoir"
        title="Astier Nicolas"
        description="Retrouvez Astier Nicolas en direct. Rejoignez la visioconférence Zoom d'un simple clic, puis saisissez le code d'accès si on vous le demande."
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ className: "gap-2" })}
        >
          <Video className="size-[18px] shrink-0" aria-hidden="true" />
          Rejoindre sur Zoom
        </a>
        <p className="font-sans text-[15px] text-foreground/80">
          Code d'accès&nbsp;:{" "}
          <span className="font-semibold tracking-[0.2em] text-foreground">
            {code}
          </span>
        </p>
      </MemberModal>
    </>
  );
}
