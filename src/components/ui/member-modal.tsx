"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

interface MemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  surtitre?: string;
  title: string;
  description?: string;
  /** Signature éditoriale en sérif italique, posée sous la description. */
  signature?: string;
  /** Actions (boutons) affichées en bas de la modale. */
  children?: ReactNode;
}

/**
 * Modale purement décorative — aucune logique métier.
 * Fond anthracite à 80 %, boîte crème, filet or, fermeture en haut à droite.
 */
export function MemberModal({
  open,
  onOpenChange,
  surtitre,
  title,
  description,
  signature,
  children,
}: MemberModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[70] bg-anthracite/80 backdrop-blur-[2px] duration-200 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gold/35 bg-creme p-8 text-center shadow-[0_30px_70px_-25px_rgba(31,34,51,0.5)] duration-200 outline-none data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 md:p-10">
          <Dialog.Close
            aria-label="Fermer"
            className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-sm text-foreground/50 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <X className="size-5" strokeWidth={1.5} />
          </Dialog.Close>

          {surtitre && (
            <p className="mb-3 font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {surtitre}
            </p>
          )}

          <Dialog.Title className="font-serif text-[26px] font-medium leading-tight text-foreground md:text-[30px]">
            {title}
          </Dialog.Title>

          <div aria-hidden="true" className="mx-auto my-5 h-px w-12 bg-gold" />

          {description && (
            <Dialog.Description className="mx-auto max-w-sm font-sans text-[16px] leading-relaxed text-foreground/80">
              {description}
            </Dialog.Description>
          )}

          {signature && (
            <p className="mt-5 font-serif text-[18px] italic text-terracotta">
              {signature}
            </p>
          )}

          {children && (
            <div className="mt-8 flex flex-col items-center gap-3">
              {children}
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
