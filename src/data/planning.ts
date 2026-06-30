// Contenu de la page Planning de la semaine — maquette statique.
// Ne contient que des rendez-vous du savoir (visio) ; intervenants fictifs,
// cohérents avec le reste du site (pas de personnalités réelles).

import type { EventVariant } from "@/data/landing";

export const weekLabel = "Du lundi 6 au dimanche 12 juillet 2026";
export const monthLabel = "juillet";

export const dayNames = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export const dayDates = ["6", "7", "8", "9", "10", "11", "12"];

export type SlotPeriod = "matin" | "apresmidi" | "soir";

export const periods: { key: SlotPeriod; label: string }[] = [
  { key: "matin", label: "Matin" },
  { key: "apresmidi", label: "Après-midi" },
  { key: "soir", label: "Soir" },
];

export interface PlanningSlot {
  day: number; // 0 = Lundi … 6 = Dimanche
  period: SlotPeriod;
  time: string;
  title: string;
  fullTitle: string;
  expert: string;
  duration: string;
  location: string;
  variant: EventVariant;
}

export const slots: PlanningSlot[] = [
  // Lundi
  {
    day: 0,
    period: "apresmidi",
    time: "15h00",
    title: "Lire un tableau",
    fullTitle: "Lire un tableau : l'art contemporain apprivoisé",
    expert: "Vincent Aubert",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 0,
    period: "soir",
    time: "17h00",
    title: "Repenser le temps libre",
    fullTitle: "Philosophie : repenser le temps libre",
    expert: "Hélène Delaunay",
    duration: "1h15",
    location: "Visio",
    variant: "visio",
  },
  // Mardi
  {
    day: 1,
    period: "matin",
    time: "10h30",
    title: "Souffle & méditation",
    fullTitle: "Méditation et souffle, l'art de ralentir",
    expert: "Pascal Rivière",
    duration: "45 min",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 1,
    period: "apresmidi",
    time: "14h30",
    title: "Les secrets de la Bible",
    fullTitle: "Les secrets de la Bible",
    expert: "Étienne Vasseur",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
  // Mercredi
  {
    day: 2,
    period: "apresmidi",
    time: "15h00",
    title: "Voyager par les récits",
    fullTitle: "Voyager par les grands récits",
    expert: "Margaux Lenoir",
    duration: "1h15",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 2,
    period: "soir",
    time: "18h00",
    title: "Gastronomie & plaisirs",
    fullTitle: "Gastronomie & plaisirs : la culture du goût",
    expert: "Bertrand Caillaux",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
  // Jeudi
  {
    day: 3,
    period: "matin",
    time: "11h00",
    title: "Bien vieillir",
    fullTitle: "Bien vieillir, pleinement",
    expert: "Dr. Paul Mercier",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
  // Vendredi
  {
    day: 4,
    period: "matin",
    time: "11h00",
    title: "Apprivoiser son téléphone",
    fullTitle: "Apprivoiser son téléphone en confiance",
    expert: "Complice du numérique",
    duration: "55 min",
    location: "Visio",
    variant: "visio",
  },
  {
    day: 4,
    period: "apresmidi",
    time: "12h00",
    title: "L'intimité après 60 ans",
    fullTitle: "L'intimité après 60 ans, une conversation sincère",
    expert: "Dr. Camille Fontaine",
    duration: "1h",
    location: "Visio",
    variant: "visio",
  },
];

export const legend: { variant: EventVariant; label: string }[] = [
  { variant: "visio", label: "Rendez-vous du savoir en visio" },
];
